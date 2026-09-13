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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://erklaerung-und-mehr.org'),
  title: {
    default: 'Erklärung und mehr – Kostenlose Lernplattform für Schule & Unterricht',
    template: '%s | Erklärung und mehr',
  },
  description:
    'Kostenlose Erklärvideos, interaktive H5P-Übungen, Merksätze und Arbeitsblätter für Schüler und Lehrpersonen in über 25 Schulfächern (Mathematik, Deutsch, Biologie, Physik, Chemie uvm.).',
  keywords: [
    'Lernplattform',
    'Erklärung und mehr',
    'Schule',
    'Unterrichtsmaterial',
    'H5P Übungen',
    'Erklärvideos',
    'interaktive Übungen',
    'Arbeitsblätter',
    'Mathematik',
    'Biologie',
    'Physik',
    'Chemie',
    'Geschichte',
    'Geographie',
    'Deutsch',
    'Informatik',
    'Kopernikus',
    'Thomas Felzmann',
    'Matthias Gmeiner',
  ],
  authors: [
    { name: 'Matthias Gmeiner', url: 'https://erklaerung-und-mehr.org' },
    { name: 'Thomas Felzmann', url: 'https://thomasfelzmann.at' },
  ],
  creator: 'Matthias Gmeiner',
  publisher: 'Matthias Gmeiner e.U.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Erklärung und mehr – Kostenlose Lernplattform für Schule & Unterricht',
    description:
      'Kostenlose Erklärvideos, interaktive H5P-Übungen, Merksätze und Arbeitsblätter für Schüler und Lehrpersonen in über 25 Schulfächern.',
    url: '/',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/klasse-1.jpg',
        width: 800,
        height: 480,
        alt: 'Erklärung und mehr – Die Lernplattform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erklärung und mehr – Kostenlose Lernplattform für Schule & Unterricht',
    description:
      'Kostenlose Erklärvideos, interaktive H5P-Übungen, Merksätze und Arbeitsblätter für Schüler und Lehrpersonen.',
    images: ['/images/klasse-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon.png', type: 'image/png', sizes: '600x600' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Erklärung und mehr',
  url: 'https://erklaerung-und-mehr.org',
  logo: 'https://erklaerung-und-mehr.org/icon.png',
  description:
    'Kostenlose digitale Lehr- und Lernmaterialien, Erklärvideos und interaktive H5P-Übungen für Schule und Unterricht.',
  founder: [
    { '@type': 'Person', name: 'Matthias Gmeiner' },
    { '@type': 'Person', name: 'Thomas Felzmann' },
  ],
  sameAs: [
    'https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org',
    'https://thomasfelzmann.at/',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Erklärung und mehr',
  url: 'https://erklaerung-und-mehr.org',
  inLanguage: 'de-AT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={questrial.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
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
