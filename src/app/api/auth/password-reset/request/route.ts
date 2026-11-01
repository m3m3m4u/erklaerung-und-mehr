import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { randomUUID, createHash } from 'node:crypto';
import { sendMail } from '@/lib/mailer';
import { rateLimit } from '@/lib/rateLimit';

// POST /api/auth/password-reset/request  { identifier: email }
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as Record<string, unknown>));
    const rawIdentifier = body.identifier ?? body.email;
    if (!rawIdentifier || typeof rawIdentifier !== 'string') {
      return NextResponse.json({ ok: false, error: 'Bitte gib deine E-Mail-Adresse ein.' }, { status: 400 });
    }

    const identifier = rawIdentifier.trim().toLowerCase();

    const ip = (req.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
    const rlKey = `pwreq:${ip}`;
    if (!rateLimit(rlKey, { capacity: 5, refillPerSec: 0.2 })) {
      // sanft drosseln ohne Enumeration
      return NextResponse.json({ ok: true });
    }

    const db = await getDatabase();
    const teachersCollection = db.collection('teachers');
    const tokensCollection = db.collection('password_reset_tokens');

    // Sicherstellen, dass TTL-Index existiert (automatische Bereinigung nach Ablauf)
    await tokensCollection
      .createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 })
      .catch(() => undefined);

    const teachers = await teachersCollection
      .find({ email: identifier })
      .project({ _id: 1, email: 1, name: 1 })
      .toArray();

    // Immer neutral antworten (keine User-Enumeration)
    if (!teachers || teachers.length === 0) {
      if (process.env.NODE_ENV !== 'production') {
        return NextResponse.json({ ok: true, dev: true });
      }
      return NextResponse.json({ ok: true });
    }

    // Base URL für Reset-Links
    const reqOrigin = (() => {
      try {
        return new URL(req.url).origin;
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
    const ttlMin = 30;

    const resetLinks: string[] = [];

    for (const user of teachers) {
      const token = (randomUUID().replace(/-/g, '') + randomUUID().replace(/-/g, '')).slice(0, 64);
      const tokenHash = createHash('sha256').update(token).digest('hex');
      const expiresAt = new Date(Date.now() + ttlMin * 60 * 1000);

      // Alte Tokens für diesen User bereinigen
      await tokensCollection.deleteMany({ userId: user._id }).catch(() => undefined);
      await tokensCollection.insertOne({
        userId: user._id,
        tokenHash,
        expiresAt,
        createdAt: new Date(),
      });

      const resetLink = `${origin}/reset-password?token=${encodeURIComponent(token)}&u=${encodeURIComponent(String(user._id))}`;
      resetLinks.push(resetLink);
    }

    const firstUser = teachers[0];
    if (firstUser.email) {
      const subject = 'Passwort zurücksetzen – Erklärung und mehr';

      let textContent =
        `Hallo${firstUser.name ? ' ' + firstUser.name : ''},\n\n` +
        `du hast einen Link zum Zurücksetzen deines Passworts angefordert.\n`;

      if (teachers.length > 1) {
        textContent += `\nWir haben ${teachers.length} Accounts mit dieser E-Mail-Adresse gefunden:\n\n`;
        teachers.forEach((user, index) => {
          textContent +=
            `Account ${index + 1}: ${user.email}\n` +
            `Link: ${resetLinks[index]}\n\n`;
        });
      } else {
        textContent += `Bitte klicke innerhalb von ${ttlMin} Minuten auf folgenden Link:\n${resetLinks[0]}\n\n`;
      }

      textContent +=
        `Wenn du diese Anfrage nicht gestellt hast, kannst du diese E-Mail ignorieren.\n\n` +
        `Viele Grüße,\nDein Erklärung und mehr Team`;

      let accountsHtml = '';
      if (teachers.length > 1) {
        accountsHtml = `
          <p style="margin: 20px 0; color: #666666; font-size: 16px; line-height: 1.6;">
            Wir haben <strong>${teachers.length} Accounts</strong> mit dieser E-Mail-Adresse gefunden. Wähle den Account, für den du das Passwort zurücksetzen möchtest:
          </p>
        `;

        teachers.forEach((user, index) => {
          accountsHtml += `
            <div style="margin: 20px 0; padding: 20px; background-color: #f4f8ef; border-radius: 6px; border-left: 4px solid #94bb3e;">
              <p style="margin: 0 0 10px; color: #333333; font-size: 16px; font-weight: bold;">
                Account ${index + 1}: ${user.email}
              </p>
              <table role="presentation" style="margin: 15px 0; width: 100%;">
                <tr>
                  <td align="center">
                    <a href="${resetLinks[index]}" style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #94bb3e 0%, #769752 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                      Passwort zurücksetzen
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          `;
        });
      } else {
        accountsHtml = `
          <table role="presentation" style="margin: 30px 0; width: 100%;">
            <tr>
              <td align="center">
                <a href="${resetLinks[0]}" style="display: inline-block; padding: 16px 36px; background: linear-gradient(135deg, #94bb3e 0%, #769752 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  Passwort zurücksetzen
                </a>
              </td>
            </tr>
          </table>
        `;
      }

      const html = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Passwort zurücksetzen</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8faf6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 90%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.08); border: 1px solid #e4e9df;">
          <!-- Header -->
          <tr>
            <td style="padding: 36px 40px 24px; text-align: center; background: linear-gradient(135deg, #94bb3e 0%, #769752 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: bold;">Erklärung und mehr</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 20px; color: #769752; font-size: 22px;">Passwort zurücksetzen</h2>
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Hallo${firstUser.name ? ' <strong>' + firstUser.name + '</strong>' : ''},
              </p>
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                du hast einen Link zum Zurücksetzen deines Passworts angefordert.
              </p>
              
              ${accountsHtml}
              
              <div style="margin: 30px 0 0; padding: 18px 20px; background-color: #f4f8ef; border-left: 4px solid #94bb3e; border-radius: 4px;">
                <p style="margin: 0; color: #5d7d32; font-size: 14px; line-height: 1.6;">
                  ⏱️ <strong>Wichtig:</strong> ${teachers.length > 1 ? 'Diese Links sind' : 'Dieser Link ist'} nur ${ttlMin} Minuten gültig.
                </p>
              </div>
              
              <p style="margin: 20px 0 0; color: #666666; font-size: 13px; line-height: 1.6;">
                Falls du diese Anfrage nicht gestellt hast, kannst du diese E-Mail einfach ignorieren. ${teachers.length > 1 ? 'Deine Passwörter bleiben' : 'Dein Passwort bleibt'} unverändert.
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #f4f8ef; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="margin: 0 0 8px; color: #555555; font-size: 14px;">
                Viele Grüße,<br>
                <strong style="color: #769752;">Dein Erklärung und mehr Team</strong>
              </p>
              <p style="margin: 8px 0 0; color: #888888; font-size: 12px;">
                © ${new Date().getFullYear()} Erklärung und mehr. Alle Rechte vorbehalten.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

      const mailResult = await sendMail({ to: firstUser.email as string, subject, text: textContent, html });
      console.log('[pw-reset] Mail-Versand Ergebnis:', mailResult);

      if ('error' in mailResult && mailResult.error) {
        console.error('[pw-reset] E-Mail konnte nicht gesendet werden!');
      }

      if (process.env.NODE_ENV !== 'production' && 'mock' in mailResult && mailResult.mock) {
        return NextResponse.json({ ok: true, resetLinks });
      }

      return NextResponse.json({ ok: true });
    } else {
      if (process.env.NODE_ENV !== 'production') {
        return NextResponse.json({ ok: true, resetLinks });
      }
      return NextResponse.json({ ok: true });
    }
  } catch (e) {
    console.error('[pw-reset:request] error', e);
    return NextResponse.json({ ok: false, error: 'Serverfehler' }, { status: 500 });
  }
}
