// Simple in-memory rate limiter (per process)
type Bucket = { tokens: number; updated: number };
const buckets = new Map<string, Bucket>();

// Cleanup-Intervall: Alte Einträge alle 5 Minuten entfernen
setInterval(() => {
  const now = Date.now();
  const maxAge = 5 * 60 * 1000;
  for (const [key, bucket] of buckets.entries()) {
    if (now - bucket.updated > maxAge) {
      buckets.delete(key);
    }
  }
}, 5 * 60 * 1000);

interface Options {
  capacity: number;
  refillPerSec: number;
}

export function rateLimit(key: string, { capacity, refillPerSec }: Options): boolean {
  const now = Date.now();
  let b = buckets.get(key);
  if (!b) {
    b = { tokens: capacity, updated: now };
    buckets.set(key, b);
  }
  const delta = (now - b.updated) / 1000;
  if (delta > 0) {
    b.tokens = Math.min(capacity, b.tokens + delta * refillPerSec);
    b.updated = now;
  }
  if (b.tokens >= 1) {
    b.tokens -= 1;
    return true;
  }
  return false;
}

export function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return 'dev-client';
}

export const RATE_LIMITS = {
  STRICT: { capacity: 5, refillPerSec: 5 / 60 },
  STANDARD: { capacity: 100, refillPerSec: 100 / 60 },
};
