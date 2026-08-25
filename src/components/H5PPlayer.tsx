'use client';

import React, { useEffect, useRef, useState } from 'react';

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
  onXAPIStatement,
}: H5PPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initH5P() {
      if (!containerRef.current) return;
      setLoading(true);
      setError(null);

      // Clean container completely before initializing
      containerRef.current.innerHTML = '';

      try {
        // Quick verification of h5p.json availability to prevent unexpected HTML 404 json parse error
        const checkRes = await fetch(`${h5pJsonPath}/h5p.json`);
        if (!checkRes.ok) {
          throw new Error(`H5P package not found (${checkRes.status})`);
        }

        const { H5P } = await import('h5p-standalone');

        if (!isMounted || !containerRef.current) return;

        // Ensure container is still clean right before mounting H5P instance
        containerRef.current.innerHTML = '';

        const options = {
          h5pJsonPath,
          librariesPath: '/h5p-libraries',
          frameJs: '/h5p-core/frame.bundle.js',
          frameCss: '/h5p-core/styles/h5p.css',
        };

        await new H5P(containerRef.current, options);

        if (!isMounted) {
          if (containerRef.current) containerRef.current.innerHTML = '';
          return;
        }

        setLoading(false);

        // =========================================================================
        // xAPI Event Dispatcher Listener
        // =========================================================================
        const h5pWin = window as unknown as H5PWindow;
        if (h5pWin?.H5P?.externalDispatcher) {
          h5pWin.H5P.externalDispatcher.on('xAPI', (event) => {
            const statement = event?.data?.statement;
            if (statement && onXAPIStatement) {
              onXAPIStatement(statement);
            }
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
  }, [h5pJsonPath, onXAPIStatement]);

  return (
    <div className="h5p-player-card">
      {title && <h2 className="h5p-title">{title}</h2>}
      {loading && <div className="h5p-status">Lade H5P-Modul...</div>}
      {error && <div className="h5p-error-box">{error}</div>}
      <div ref={containerRef} className="h5p-embed-target" />
    </div>
  );
}
