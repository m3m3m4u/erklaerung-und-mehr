'use client';

import { useState } from 'react';

interface DailyPoint {
  date: string; // YYYY-MM-DD
  label: string;
  views: number;
  uniqueVisitors: number;
}

const W = 900;
const H = 240;
const PAD = { top: 16, right: 56, bottom: 28, left: 8 };

function niceMax(v: number): number {
  if (v <= 4) return 4;
  const pow = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / pow;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return step * pow;
}

function fmtDate(d: string): string {
  const [y, m, day] = d.split('-');
  return `${day}.${m}.${y}`;
}

export default function DailyViewsChart({ data }: { data: DailyPoint[] }) {
  const [hover, setHover] = useState<number | null>(null);

  if (data.length === 0) return null;

  const max = niceMax(Math.max(...data.map((d) => d.views), 1));
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const x = (i: number) =>
    PAD.left + (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW);
  const y = (v: number) => PAD.top + innerH - (v / max) * innerH;

  const line = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(d.views)}`).join(' ');
  const area = `${line} L${x(data.length - 1)},${PAD.top + innerH} L${x(0)},${PAD.top + innerH} Z`;

  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(max * f));
  const labelCount = Math.min(6, data.length);
  const labelIdx = Array.from({ length: labelCount }, (_, k) =>
    labelCount === 1 ? 0 : Math.round((k / (labelCount - 1)) * (data.length - 1))
  );

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const ratio = (px - PAD.left) / innerW;
    const i = Math.round(ratio * (data.length - 1));
    setHover(Math.min(Math.max(i, 0), data.length - 1));
  };

  const hp = hover !== null ? data[hover] : null;
  const tipLeft = hover !== null ? (x(hover) / W) * 100 : 0;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke="#e5e5e5" strokeWidth={1} />
            <text x={W - PAD.right + 8} y={y(t) + 4} fontSize={12} fill="#606060">
              {t.toLocaleString('de-AT').replace(/\./g, '\u202f')}
            </text>
          </g>
        ))}
        <path d={area} fill="#2ba0c8" fillOpacity={0.1} />
        <path d={line} fill="none" stroke="#2ba0c8" strokeWidth={2} strokeLinejoin="round" />
        {labelIdx.map((i) => (
          <text
            key={i}
            x={x(i)}
            y={H - 8}
            fontSize={12}
            fill="#606060"
            textAnchor={i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle'}
          >
            {fmtDate(data[i].date)}
          </text>
        ))}
        {hover !== null && hp && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={PAD.top} y2={PAD.top + innerH} stroke="#909090" strokeDasharray="3 3" />
            <circle cx={x(hover)} cy={y(hp.views)} r={5} fill="#2ba0c8" stroke="#fff" strokeWidth={2} />
          </g>
        )}
      </svg>
      {hp && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: `${tipLeft}%`,
            transform: `translateX(${tipLeft > 70 ? '-105%' : '10px'})`,
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: 6,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            padding: '8px 12px',
            fontSize: 13,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <div style={{ color: '#606060' }}>{hp.label}</div>
          <div>
            <strong>{hp.views.toLocaleString('de-AT')}</strong> {hp.views === 1 ? 'Aufruf' : 'Aufrufe'}
          </div>
          <div style={{ color: '#606060' }}>{hp.uniqueVisitors.toLocaleString('de-AT')} Besucher</div>
        </div>
      )}
    </div>
  );
}
