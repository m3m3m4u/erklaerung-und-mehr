import nodemailer, { type Transporter } from 'nodemailer';

let transporter: Transporter | null = null;

function getTransport() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[mail] SMTP nicht vollständig konfiguriert – Fallback auf console');
    }
    return null;
  }

  try {
    transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: {
        user,
        pass,
      },
    });
  } catch (e) {
    console.error('[mail] FEHLER beim Erstellen des SMTP-Transports', e);
    return null;
  }

  return transporter;
}

export interface SendMailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export async function sendMail(opts: SendMailOptions) {
  const t = getTransport();
  const from = process.env.MAIL_FROM || process.env.SMTP_USER || 'no-reply@erklaerung-und-mehr.org';
  if (!t) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[mail:mock] SMTP nicht konfiguriert - E-Mail nicht gesendet');
    }
    return { mock: true };
  }
  try {
    const info = await t.sendMail({ from, ...opts });
    return { id: info.messageId };
  } catch (e) {
    console.error('[mail] FEHLER beim E-Mail-Versand', e);
    return { error: true, details: e };
  }
}
