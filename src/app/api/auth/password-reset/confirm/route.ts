import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { generateSalt, hashPassword } from '@/lib/auth';
import { ObjectId } from 'mongodb';
import crypto from 'node:crypto';
import { rateLimit, getClientIdentifier, RATE_LIMITS } from '@/lib/rateLimit';

function sha256(input: string) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

// POST /api/auth/password-reset/confirm { token, userId, password }
export async function POST(req: Request) {
  try {
    // Rate-Limiting: Schutz vor Brute-Force-Angriffen auf Reset-Tokens
    const clientId = getClientIdentifier(req);
    const allowed = rateLimit(`pw-reset-confirm:${clientId}`, RATE_LIMITS.STRICT);

    if (!allowed) {
      return NextResponse.json(
        { ok: false, error: 'Zu viele Versuche. Bitte warte eine Minute.' },
        { status: 429 }
      );
    }

    const { token, userId, password } = await req.json().catch(() => ({} as Record<string, unknown>));
    if (!token || !userId || !password || typeof password !== 'string' || password.length < 6) {
      return NextResponse.json(
        { ok: false, error: 'Ungültige Eingabe. Das Passwort muss mindestens 6 Zeichen lang sein.' },
        { status: 400 }
      );
    }

    let userObjectId: ObjectId;
    try {
      userObjectId = new ObjectId(String(userId));
    } catch {
      return NextResponse.json({ ok: false, error: 'Token ungültig' }, { status: 400 });
    }

    const db = await getDatabase();
    const tokensCollection = db.collection('password_reset_tokens');
    const teachersCollection = db.collection('teachers');

    const tokenHash = sha256(String(token));
    const entry = await tokensCollection.findOne({ userId: userObjectId, tokenHash });

    if (!entry || new Date(entry.expiresAt) < new Date()) {
      return NextResponse.json({ ok: false, error: 'Token ungültig oder abgelaufen.' }, { status: 400 });
    }

    const teacher = await teachersCollection.findOne({ _id: userObjectId });
    if (!teacher) {
      await tokensCollection.deleteMany({ userId: userObjectId });
      return NextResponse.json({ ok: false, error: 'Token ungültig.' }, { status: 400 });
    }

    const salt = generateSalt();
    const passwordHash = hashPassword(password, salt);

    await teachersCollection.updateOne(
      { _id: userObjectId },
      {
        $set: {
          passwordHash,
          salt,
          updatedAt: new Date(),
        },
      }
    );

    // Tokens aufräumen
    await tokensCollection.deleteMany({ userId: userObjectId });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[pw-reset:confirm] error', e);
    return NextResponse.json({ ok: false, error: 'Serverfehler' }, { status: 500 });
  }
}
