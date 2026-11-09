import { getDatabase } from '@/lib/mongodb';
import { generateSalt, hashPassword, createSession } from '@/lib/auth';
import { sendMail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json({ error: 'E-Mail und Passwort erforderlich.' }, { status: 400 });
    }

    const emailLower = email.toLowerCase().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLower)) {
      return Response.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 });
    }

    if (password.length < 6) {
      return Response.json({ error: 'Passwort muss mindestens 6 Zeichen haben.' }, { status: 400 });
    }

    const db = await getDatabase();
    const existing = await db.collection('teachers').findOne({ email: emailLower });
    if (existing) {
      return Response.json({ error: 'Diese E-Mail-Adresse ist bereits registriert.' }, { status: 409 });
    }

    const salt = generateSalt();
    const passwordHash = hashPassword(password, salt);

    const result = await db.collection('teachers').insertOne({
      email: emailLower,
      passwordHash,
      salt,
      createdAt: new Date(),
    });

    await createSession({
      id: result.insertedId.toString(),
      role: 'teacher',
      email: emailLower,
    });

    // Asynchrone Willkommens-E-Mail mit Einführung & Partner-Tipps (Lernarena & KI-Schulgenie Affiliate)
    try {
      const reqOrigin = (() => {
        try {
          return new URL(request.url).origin;
        } catch {
          return '';
        }
      })();
      const base =
        process.env.NEXT_PUBLIC_SITE_URL ||
        process.env.NEXTAUTH_URL ||
        process.env.VERCEL_URL ||
        reqOrigin ||
        'https://erklaerung-und-mehr.org';
      const origin = String(base).startsWith('http') ? String(base).replace(/\/$/, '') : `https://${String(base).replace(/\/$/, '')}`;

      const welcomeSubject = 'Willkommen bei Erklärung und mehr – Dein Lehrerzugang & Tools';

      const textBody =
        `Hallo,\n\n` +
        `herzlich willkommen bei Erklärung und mehr! Dein kostenloses Lehrkräfte-Konto wurde erfolgreich erstellt.\n\n` +
        `Hier sind deine ersten Schritte:\n` +
        `1. Öffne dein Dashboard: ${origin}/dashboard\n` +
        `2. Lege deine erste Klasse an, um anonyme Schüler-Codes zu generieren (100% DSGVO-konform, keine Schülerdaten nötig).\n` +
        `3. Weise deiner Klasse passende H5P-Übungen und Erklärvideos zu und verfolge die Ergebnisse.\n\n` +
        `----------------------------------------\n` +
        `NÜTZLICHE EMPFEHLUNGEN FÜR DEINEN UNTERRICHT:\n\n` +
        `1. Lernarena.org (Onlinekurse & Unterrichtstools)\n` +
        `Ergänzend zu unseren Übungen findest du auf https://lernarena.org interaktive Online-Lernpfade und vielfältige Werkzeuge für deinen Unterricht.\n\n` +
        `2. KI-Schulgenie (Arbeitsblätter & Unterrichtsmaterial mit KI erstellen)\n` +
        `Erstelle in wenigen Minuten maßgeschneiderte, differenzierte Arbeitsblätter, Quizze, Lückentexte und Stundenentwürfe mit über 100 spezialisierten KI-Tools für Lehrkräfte.\n` +
        `Exklusiv für unsere registrierten Lehrkräfte: Spare 10 % mit dem Gutscheincode "erklaerung10".\n` +
        `Jetzt 14 Tage kostenlos testen: https://kischulgenie.com/erklaerungundmehr?via=eum (Kooperationspartner / Affiliate)\n\n` +
        `----------------------------------------\n` +
        `Wir wünschen dir und deinen Schüler:innen viel Freude beim Lernen!\n\n` +
        `Herzliche Grüße,\n` +
        `Dein Team von Erklärung und mehr\n` +
        `${origin}`;

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; color: #222; line-height: 1.6; padding: 20px; background: #ffffff;">
          <div style="border-bottom: 3px solid #2e6b0e; padding-bottom: 12px; margin-bottom: 20px;">
            <h1 style="color: #2e6b0e; font-size: 22px; margin: 0;">Willkommen bei Erklärung und mehr!</h1>
            <p style="margin: 4px 0 0 0; color: #666; font-size: 14px;">Die Lernplattform für Erklärvideos und interaktive Onlineübungen</p>
          </div>

          <p>Hallo,</p>
          <p>schön, dass du dabei bist! Dein kostenloses Lehrkräfte-Konto (<strong>${emailLower}</strong>) wurde erfolgreich angelegt.</p>

          <div style="background: #f7faf4; border-left: 4px solid #2e6b0e; padding: 14px 18px; border-radius: 4px; margin: 20px 0;">
            <h3 style="margin: 0 0 8px 0; color: #2e6b0e; font-size: 16px;">Erste Schritte in deinem Dashboard:</h3>
            <ol style="margin: 0; padding-left: 20px; font-size: 14px; color: #333;">
              <li style="margin-bottom: 6px;"><strong>Klasse anlegen:</strong> Generiere anonyme Schüler-Codes zum Ausdrucken (100% DSGVO-konform, keine Namen erforderlich).</li>
              <li style="margin-bottom: 6px;"><strong>Übungen zuweisen:</strong> Wähle passende interaktive H5P-Übungen für Mathematik, Physik, Deutsch und viele weitere Fächer aus.</li>
              <li><strong>Fortschritt überblicken:</strong> Sieh live, welche Aufgaben bearbeitet und gemeistert wurden.</li>
            </ol>
            <div style="margin-top: 14px;">
              <a href="${origin}/dashboard" style="display: inline-block; background: #2e6b0e; color: #ffffff; text-decoration: none; padding: 9px 18px; border-radius: 6px; font-weight: bold; font-size: 14px;">
                Direkt zu deinem Dashboard →
              </a>
            </div>
          </div>

          <h2 style="font-size: 17px; color: #2e6b0e; margin-top: 28px; margin-bottom: 12px; border-bottom: 1px solid #e0e6db; padding-bottom: 6px;">
            Empfohlene Partner-Tools für deinen Schulalltag
          </h2>

          <!-- KI Schulgenie Box -->
          <div style="border: 1px solid #dce8d0; background: #fafdf8; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h3 style="margin: 0; font-size: 16px; color: #1f4f09;">KI-Schulgenie – Unterrichtsmaterial mit KI erstellen</h3>
              <span style="background: #e6f4d7; color: #2e6b0e; font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 10px;">10 % Rabatt</span>
            </div>
            <p style="margin: 0 0 10px 0; font-size: 13.5px; color: #444;">
              Über 100 spezialisierte KI-Tools für Lehrkräfte: Erstelle in Minuten differenzierte Arbeitsblätter, Tests, Lückentexte und ganze Unterrichtseinheiten (DSGVO-konform).
            </p>
            <div style="background: #ffffff; border: 1px dashed #2e6b0e; padding: 8px 12px; border-radius: 6px; display: inline-block; margin-bottom: 10px;">
              <span style="font-size: 12px; color: #555;">Dein 10 % Gutscheincode:</span>
              <strong style="font-size: 14px; color: #2e6b0e; letter-spacing: 0.5px; margin-left: 6px;">erklaerung10</strong>
            </div>
            <div>
              <a href="https://kischulgenie.com/erklaerungundmehr?via=eum" target="_blank" rel="noopener noreferrer" style="color: #2e6b0e; font-weight: bold; text-decoration: underline; font-size: 13.5px;">
                Jetzt 14 Tage kostenlos testen &amp; Rabatt sichern →
              </a>
              <span style="font-size: 11px; color: #888; margin-left: 8px;">(Partnerangebot / Affiliate-Link)</span>
            </div>
          </div>

          <!-- Lernarena Box -->
          <div style="border: 1px solid #e2e5e8; background: #fbfbfc; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #234;">Lernarena.org – Onlinekurse &amp; Tools</h3>
            <p style="margin: 0 0 10px 0; font-size: 13.5px; color: #444;">
              Entdecke interaktive Onlinekurse und praktische digitale Werkzeuge als ideale Ergänzung zu den Inhalten auf Erklärung und mehr.
            </p>
            <a href="https://lernarena.org" target="_blank" rel="noopener noreferrer" style="color: #1b5e20; font-weight: bold; text-decoration: underline; font-size: 13.5px;">
              Zu Lernarena.org wechseln →
            </a>
          </div>

          <div style="font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 14px; margin-top: 24px;">
            <p style="margin: 0 0 4px 0;">Erklärung und mehr – Erklärvideos &amp; interaktive Onlineübungen</p>
            <p style="margin: 0;"><a href="${origin}" style="color: #2e6b0e; text-decoration: none;">${origin}</a></p>
          </div>
        </div>
      `;

      sendMail({
        to: emailLower,
        subject: welcomeSubject,
        text: textBody,
        html: htmlBody,
      }).catch((e) => {
        console.warn('[register] Willkommens-Mail konnte nicht zugestellt werden:', e);
      });
    } catch (mailErr) {
      console.warn('[register] Fehler bei Mailerstellung:', mailErr);
    }

    return Response.json({ ok: true, role: 'teacher', email: emailLower });
  } catch (err: unknown) {
    console.error('Register error:', err);
    const message = err instanceof Error ? err.message : 'Serverfehler. Bitte erneut versuchen.';
    return Response.json({ error: message }, { status: 500 });
  }
}
