'use client';

import React, { useEffect, useRef, useState } from 'react';
import TeacherExerciseAssigner from './TeacherExerciseAssigner';

export interface XAPIStatement {
  actor?: { name?: string; mbox?: string };
  verb?: { id: string; display?: Record<string, string> };
  object?: { id?: string; definition?: { name?: Record<string, string> } };
  result?: {
    score?: { min?: number; max?: number; raw?: number; scaled?: number };
    success?: boolean;
    completion?: boolean;
    duration?: string;
    response?: string;
  };
  [key: string]: unknown;
}

interface H5PPlayerProps {
  h5pJsonPath: string; // e.g. '/h5p-content/quiz-123'
  title?: string;
  courseId?: string;
  courseTitle?: string;
  totalExercises?: number;
  exerciseId?: string;
  onXAPIStatement?: (statement: XAPIStatement) => void;
}

interface H5PWindow {
  H5P?: {
    externalDispatcher?: {
      on: (
        event: string,
        callback: (event: { data: { statement: XAPIStatement } }) => void
      ) => void;
      off?: (event: string, callback?: unknown) => void;
    };
  };
}

export default function H5PPlayer({
  h5pJsonPath,
  title,
  courseId,
  courseTitle,
  totalExercises = 1,
  exerciseId,
  onXAPIStatement,
}: H5PPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isHtmlExercise = h5pJsonPath.endsWith('.html') || h5pJsonPath.startsWith('/html/') || h5pJsonPath.includes('.html');
  const [loading, setLoading] = useState(!isHtmlExercise);
  const [error, setError] = useState<string | null>(null);
  const [hasSavedState, setHasSavedState] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [iframeHeight, setIframeHeight] = useState<number>(600);

  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = e.currentTarget;
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        // Inject clean styles into iframe to remove margins and scrollbars
        const styleId = 'eum-iframe-cleanup-style';
        if (!doc.getElementById(styleId)) {
          const style = doc.createElement('style');
          style.id = styleId;
          style.textContent = `
            html, body {
              margin: 0 !important;
              padding: 0 !important;
              overflow: hidden !important;
              width: 100% !important;
              background: transparent !important;
              box-sizing: border-box !important;
            }
            body > div {
              margin: 0 auto !important;
              padding: 0 !important;
              display: flex !important;
              justify-content: center !important;
            }
            .h5p-content {
              margin: 0 auto !important;
            }
            .h5p-iframe-wrapper {
              overflow: hidden !important;
            }
          `;
          doc.head.appendChild(style);
        }

        const updateHeight = () => {
          try {
            const contentEl =
              doc.querySelector('.h5p-content') ||
              doc.querySelector('.h5p-course-presentation') ||
              doc.body;
            const scrollH = contentEl ? contentEl.scrollHeight : doc.body.scrollHeight;
            const offsetH = doc.body.offsetHeight;
            const targetH = Math.max(scrollH, offsetH);
            if (targetH > 100) {
              setIframeHeight(targetH + 15);
            }
          } catch {}
        };

        updateHeight();
        setTimeout(updateHeight, 150);
        setTimeout(updateHeight, 400);
        setTimeout(updateHeight, 1000);

        if (iframe.contentWindow) {
          iframe.contentWindow.addEventListener('resize', updateHeight);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (iframe.contentWindow as any)?.H5P?.externalDispatcher?.on?.('resize', updateHeight);
        }
      }
    } catch (err) {
      console.warn('Iframe style customization skipped:', err);
    }
    setLoading(false);
  };

  // Keep latest callbacks/values in refs so changes don't re-trigger H5P reload
  const onXAPIStatementRef = useRef(onXAPIStatement);
  useEffect(() => {
    onXAPIStatementRef.current = onXAPIStatement;
  }, [onXAPIStatement]);

  const titleRef = useRef(title);
  useEffect(() => {
    titleRef.current = title;
  }, [title]);

  const courseIdRef = useRef(courseId);
  useEffect(() => {
    courseIdRef.current = courseId;
  }, [courseId]);

  const courseTitleRef = useRef(courseTitle);
  useEffect(() => {
    courseTitleRef.current = courseTitle;
  }, [courseTitle]);

  const totalExercisesRef = useRef(totalExercises);
  useEffect(() => {
    totalExercisesRef.current = totalExercises;
  }, [totalExercises]);

  const exerciseIdRef = useRef(exerciseId);
  useEffect(() => {
    exerciseIdRef.current = exerciseId;
  }, [exerciseId]);

  useEffect(() => {
    let isMounted = true;

    // Helper to extract current state from iframe or window instances
    const getH5PCurrentState = (): string | null => {
      try {
        // 1. Try iframe instances
        const iframe = containerRef.current?.querySelector('iframe') as HTMLIFrameElement | null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const iframeWin = (iframe?.contentWindow || window) as any;
        const iframeInstances = iframeWin?.H5P?.instances;
        if (Array.isArray(iframeInstances) && iframeInstances[0]?.getCurrentState) {
          const s = iframeInstances[0].getCurrentState();
          if (s !== undefined && s !== null) {
            return typeof s === 'string' ? s : JSON.stringify(s);
          }
        }

        // 2. Try window instances
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const win = window as any;
        const winInstances = win?.H5P?.instances;
        if (Array.isArray(winInstances) && winInstances[0]?.getCurrentState) {
          const s = winInstances[0].getCurrentState();
          if (s !== undefined && s !== null) {
            return typeof s === 'string' ? s : JSON.stringify(s);
          }
        }

        // 3. Try H5PIntegration contentUserData in iframe or window
        const contents = (iframeWin?.H5PIntegration || win?.H5PIntegration)?.contents;
        if (contents) {
          for (const key of Object.keys(contents)) {
            const cud = contents[key]?.contentUserData;
            if (cud && cud[0]?.state) {
              const st = cud[0].state;
              return typeof st === 'string' ? st : JSON.stringify(st);
            }
          }
        }
      } catch (err) {
        console.warn('Could not extract H5P state:', err);
      }
      return null;
    };

    async function initH5P() {
      if (!containerRef.current && !isHtmlExercise) return;
      setLoading(true);
      setError(null);

      // If it's a standalone HTML exercise (e.g. from /html/...), render via iframe
      if (isHtmlExercise) {
        setLoading(false);
        return;
      }

      // Clean container completely before initializing
      if (containerRef.current) containerRef.current.innerHTML = '';

      try {
        // Quick verification of h5p.json availability to prevent unexpected HTML 404 json parse error
        const checkRes = await fetch(`${h5pJsonPath}/h5p.json`);
        if (!checkRes.ok) {
          throw new Error(`H5P package not found (${checkRes.status})`);
        }

        // 1. Retrieve saved user state from localStorage or DB
        const storageKey = `eum_h5p_state_${h5pJsonPath}`;
        let savedState: string | null = null;
        try {
          savedState = localStorage.getItem(storageKey);
        } catch {}

        if (!savedState) {
          try {
            const apiRes = await fetch(`/api/student/progress?h5pId=${encodeURIComponent(h5pJsonPath)}`);
            if (apiRes.ok) {
              const apiData = await apiRes.json();
              if (apiData.entry?.state) {
                savedState = apiData.entry.state;
                try {
                  localStorage.setItem(storageKey, savedState!);
                } catch {}
              }
            }
          } catch {}
        }

        if (savedState && isMounted) {
          setHasSavedState(true);
        }

        const { H5P } = await import('h5p-standalone');

        if (!isMounted || !containerRef.current) return;

        // Ensure container is still clean right before mounting H5P instance
        containerRef.current.innerHTML = '';

        const options: Record<string, unknown> = {
          h5pJsonPath,
          librariesPath: '/h5p-libraries',
          frameJs: '/h5p-core/frame.bundle.js',
          frameCss: '/h5p-core/styles/h5p.css',
          saveFreq: 1, // Crucial: enables previousState restoration and state tracking in H5P core
        };

        // If a saved state exists, supply it as contentUserData so H5P restores answers
        if (savedState) {
          const stateStr = typeof savedState === 'string' ? savedState : JSON.stringify(savedState);
          options.contentUserData = [{ state: stateStr }];
        }

        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await new H5P(containerRef.current, options as any);
        } catch (h5pInitErr) {
          // If initializing with savedState failed, fallback to clean initialization without saved state
          if (savedState && isMounted && containerRef.current) {
            console.warn('H5P initialization failed with savedState, attempting fallback without saved state:', h5pInitErr);
            containerRef.current.innerHTML = '';
            delete options.contentUserData;
            try {
              localStorage.removeItem(storageKey);
            } catch {}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            await new H5P(containerRef.current, options as any);
          } else {
            throw h5pInitErr;
          }
        }

        if (!isMounted) {
          if (containerRef.current) containerRef.current.innerHTML = '';
          return;
        }

        setLoading(false);

        // Comprehensive auto-evaluation helper for restored answers
        const autoEvaluateRestoredContent = () => {
          try {
            const iframe = containerRef.current?.querySelector('iframe') as HTMLIFrameElement | null;
            const iframeDoc = iframe?.contentDocument || iframe?.contentWindow?.document;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const iframeWin = (iframe?.contentWindow || window) as any;

            // 1. Click all elements resembling a check / überprüfen button inside the iframe DOM
            if (iframeDoc) {
              const allCandidates = iframeDoc.querySelectorAll<HTMLElement>(
                'button, [role="button"], .joubel-simple-rounded-button, .h5p-joubelui-button, .h5p-question-check-answer, .h5p-drag-check-button'
              );

              allCandidates.forEach((btn) => {
                const text = (btn.textContent || btn.innerText || btn.getAttribute('title') || '').trim().toLowerCase();
                const cls = (btn.className || '').toLowerCase();
                const isCheck =
                  text.includes('überprüfen') ||
                  text.includes('check') ||
                  text.includes('pruefen') ||
                  text.includes('prüfen') ||
                  cls.includes('check-answer') ||
                  cls.includes('h5p-question-check-answer');

                const isExcluded =
                  cls.includes('retry') ||
                  cls.includes('solution') ||
                  cls.includes('show-solution') ||
                  text.includes('wiederholen') ||
                  text.includes('lösung');

                if (isCheck && !isExcluded && btn.offsetParent !== null) {
                  btn.click();
                }
              });
            }

            // 2. Call check methods on all H5P instances & sub-instances
            const instances = iframeWin?.H5P?.instances;
            if (Array.isArray(instances)) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const triggerInstance = (inst: any) => {
                if (!inst) return;
                if (typeof inst.checkAnswer === 'function') {
                  try { inst.checkAnswer(); } catch {}
                }
                if (typeof inst.showEvaluation === 'function') {
                  try { inst.showEvaluation(); } catch {}
                }
                if (typeof inst.markResults === 'function') {
                  try { inst.markResults(); } catch {}
                }
                if (Array.isArray(inst.instances)) {
                  inst.instances.forEach(triggerInstance);
                }
                if (Array.isArray(inst.slides)) {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  inst.slides.forEach((slide: any) => {
                    if (Array.isArray(slide?.elements)) {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      slide.elements.forEach((el: any) => {
                        if (el?.instance) triggerInstance(el.instance);
                      });
                    }
                  });
                }
              };
              instances.forEach(triggerInstance);
            }
          } catch (err) {
            console.warn('Auto-evaluation error:', err);
          }
        };

        // If answers were restored from a previous completed state, automatically evaluate across multiple render ticks
        if (savedState) {
          setTimeout(autoEvaluateRestoredContent, 200);
          setTimeout(autoEvaluateRestoredContent, 600);
          setTimeout(autoEvaluateRestoredContent, 1200);
        }

        // =========================================================================
        // xAPI Event Dispatcher Listener
        // =========================================================================
        const h5pWin = window as unknown as H5PWindow;
        if (h5pWin?.H5P?.externalDispatcher) {
          h5pWin.H5P.externalDispatcher.on('xAPI', (event) => {
            const statement = event?.data?.statement;
            if (!statement) return;

            // Forward to external handler via ref (prevents re-render re-initialization)
            if (onXAPIStatementRef.current) {
              onXAPIStatementRef.current(statement);
            }

            // If user navigates slides in a presentation, evaluate newly visible slide answers
            if (savedState && statement.verb?.id?.includes('progressed')) {
              setTimeout(autoEvaluateRestoredContent, 150);
              setTimeout(autoEvaluateRestoredContent, 450);
            }

            // Extract current H5P state for restoration (with small timeout to let H5P internal models settle)
            setTimeout(() => {
              const currentStateJson = getH5PCurrentState();

              if (currentStateJson) {
                try {
                  localStorage.setItem(storageKey, currentStateJson);
                  if (isMounted) setHasSavedState(true);
                } catch {}
              }

              // Save progress to API if a score is present (only for logged-in students)
              const scaled = statement.result?.score?.scaled;
              const verbId = statement.verb?.id || '';
              const isScored =
                typeof scaled === 'number' &&
                (verbId.includes('answered') ||
                  verbId.includes('completed') ||
                  verbId.includes('passed') ||
                  verbId.includes('failed') ||
                  verbId.includes('submitted'));

              if (isScored || currentStateJson) {
                const h5pTitle =
                  titleRef.current ||
                  statement.object?.definition?.name?.['de-DE'] ||
                  statement.object?.definition?.name?.['en-US'] ||
                  statement.object?.definition?.name?.['und'] ||
                  h5pJsonPath;

                const cId = courseIdRef.current || h5pJsonPath;
                const cTitle = courseTitleRef.current || h5pTitle;
                const tEx = totalExercisesRef.current || 1;
                const exId = exerciseIdRef.current || h5pJsonPath;

                fetch('/api/student/progress', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    courseId: cId,
                    courseTitle: cTitle,
                    totalExercises: tEx,
                    exerciseId: exId,
                    h5pId: cId,
                    h5pTitle: cTitle,
                    score: typeof scaled === 'number' ? scaled : undefined,
                    state: currentStateJson || undefined,
                  }),
                }).catch(() => {
                  // Silently ignore — don't break H5P if API fails
                });
              }
            }, 100);
          });
        }
      } catch (err) {
        console.error('Failed to initialize H5P player:', err);
        if (isMounted) {
          setError('H5P-Inhalt konnte nicht geladen werden.');
          setLoading(false);
        }
      }
    }

    initH5P();

    return () => {
      isMounted = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [h5pJsonPath, reloadKey]);

  const [showResetModal, setShowResetModal] = useState(false);

  const handleConfirmReset = () => {
    try {
      localStorage.removeItem(`eum_h5p_state_${h5pJsonPath}`);
    } catch {}
    setHasSavedState(false);
    setShowResetModal(false);
    setReloadKey((prev) => prev + 1);
  };

  return (
    <div className="h5p-player-card">
      <TeacherExerciseAssigner
        exerciseId={exerciseId || h5pJsonPath}
        exerciseTitle={title}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: title ? 8 : 0 }}>
        {title && <h2 className="h5p-title" style={{ margin: 0 }}>{title}</h2>}
        {hasSavedState && (
          <button
            type="button"
            onClick={() => setShowResetModal(true)}
            className="admin-action-btn"
            style={{ fontSize: 12, padding: '3px 8px', color: 'var(--text-muted)' }}
            title="Eingaben löschen und Übung von vorne starten"
          >
            Neu starten
          </button>
        )}
      </div>
      {loading && <div className="h5p-status">Lade H5P-Modul...</div>}
      {error && (
        <div
          className="h5p-error-box"
          style={{
            padding: '16px',
            textAlign: 'center',
            background: 'rgba(239, 68, 68, 0.08)',
            borderRadius: 8,
            border: '1px solid rgba(239, 68, 68, 0.2)',
            margin: '16px 0',
          }}
        >
          <p style={{ margin: '0 0 12px 0', fontWeight: 500, color: 'var(--danger, #dc2626)', fontSize: 14 }}>
            {error}
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setReloadKey((prev) => prev + 1)}
              className="admin-action-btn"
              style={{ padding: '6px 14px', fontSize: 13, cursor: 'pointer' }}
            >
              Erneut versuchen
            </button>
            <button
              type="button"
              onClick={handleConfirmReset}
              className="admin-action-btn"
              style={{ padding: '6px 14px', fontSize: 13, cursor: 'pointer' }}
            >
              Zurücksetzen & neu starten
            </button>
          </div>
        </div>
      )}
      {isHtmlExercise ? (
        <div
          className="h5p-html-iframe-container"
          style={{
            width: '100%',
            background: '#fff',
            borderRadius: '4px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <iframe
            ref={iframeRef}
            src={h5pJsonPath}
            title={title || 'H5P Interaktive Übung'}
            scrolling="no"
            onLoad={handleIframeLoad}
            style={{
              width: '100%',
              height: `${iframeHeight}px`,
              minHeight: '520px',
              border: 'none',
              display: 'block',
              overflow: 'hidden',
            }}
            allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div ref={containerRef} className="h5p-embed-target" />
      )}

      {/* Restart confirmation overlay dialog */}
      {showResetModal && (
        <div
          className="login-modal-overlay"
          onClick={() => setShowResetModal(false)}
          style={{ zIndex: 9999 }}
        >
          <div
            className="login-modal"
            style={{ maxWidth: 440, textAlign: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="login-modal-close"
              onClick={() => setShowResetModal(false)}
              aria-label="Schließen"
            >
              &times;
            </button>

            <div className="login-modal-body">
              <h2 className="login-modal-title" style={{ fontSize: 20, marginBottom: 12 }}>
                Übung neu starten?
              </h2>
              <p className="login-modal-subtitle" style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 24 }}>
                Möchtest du deine bisherigen Eingaben und Lösungen für diese Übung wirklich zurücksetzen und von vorne beginnen?
              </p>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <button
                  type="button"
                  className="admin-action-btn"
                  style={{ padding: '8px 18px', fontSize: 14 }}
                  onClick={() => setShowResetModal(false)}
                >
                  Abbrechen
                </button>
                <button
                  type="button"
                  className="dashboard-delete-btn"
                  style={{ padding: '8px 18px', fontSize: 14 }}
                  onClick={handleConfirmReset}
                >
                  Ja, neu starten
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
