import type { Metadata } from 'next';
import { Questrial } from 'next/font/google';
import './globals.css';
import 'katex/dist/katex.min.css';
import CookieBanner from '@/components/CookieBanner';

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
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
