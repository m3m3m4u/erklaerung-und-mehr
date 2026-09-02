import type { Metadata } from 'next';
import { Questrial } from 'next/font/google';
import './globals.css';
import 'katex/dist/katex.min.css';
import { Suspense } from 'react';
import CookieBanner from '@/components/CookieBanner';
import AnalyticsTracker from '@/components/AnalyticsTracker';

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-questrial',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Erklärung und mehr - Die Lernplattform',
  description:
    'Entdecke Erklärvideos mit passenden interaktiven Übungen, Arbeitsblättern und weiteren spannenden Lernmaterialien!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={questrial.variable}>
      <body>
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
