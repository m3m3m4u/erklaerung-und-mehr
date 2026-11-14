import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BuchtippsExplorer from '@/components/buchtipps/BuchtippsExplorer';
import { getAllBuchTipps } from '@/lib/buchtipps/data';

export const metadata: Metadata = {
  title: 'Buchtipps: Digitales Lernen, KI & Medienerziehung für Lehrkräfte',
  description:
    'Kuratierte Buchempfehlungen für Lehrkräfte, Schulleitungen und Pädagogen: Praxisbücher zu KI im Unterricht, Klassen-Chats, Bildschirmnutzung und zeitgemäßer Prüfungskultur.',
  alternates: {
    canonical: '/buchtipps',
  },
  openGraph: {
    title: 'Buchtipps: Digitales Lernen & Medienerziehung | Erklärung und mehr',
    description:
      'Kuratierte Buchempfehlungen für Lehrkräfte, Schulleitungen und Pädagogen zu digitaler Bildung, KI im Unterricht und Medienerziehung.',
    url: '/buchtipps',
    siteName: 'Erklärung und mehr',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/images/klasse-1.jpg',
        width: 800,
        height: 480,
        alt: 'Buchtipps für Lehrkräfte – Erklärung und mehr',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buchtipps: Digitales Lernen & Medienerziehung für Lehrkräfte',
    description:
      'Kuratierte Buchempfehlungen für Lehrkräfte und Schulleitungen rund um zeitgemäße Bildung und Medienerziehung.',
    images: ['/images/klasse-1.jpg'],
  },
};

export default function BuchtippsPage() {
  const books = getAllBuchTipps();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://erklaerung-und-mehr.org';

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Buchtipps',
        item: `${baseUrl}/buchtipps`,
      },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Buchtipps: Digitales Lernen & Medienerziehung für Lehrkräfte',
    description:
      'Kuratierte Buchempfehlungen für Lehrkräfte, Schulleitungen und Pädagogen zu digitaler Bildung, KI im Unterricht und Medienerziehung.',
    url: `${baseUrl}/buchtipps`,
    inLanguage: 'de-AT',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: books.length,
      itemListElement: books.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${baseUrl}/buchtipps/${b.id}`,
        name: b.title,
      })),
    },
  };

  return (
    <div className="site-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Header activePath="/buchtipps" />

      <main className="content-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <Link href="/">Startseite</Link>
          <span>/</span>
          <strong>Buchtipps</strong>
        </div>

        {/* Intro Banner */}
        <section className="math-intro-banner">
          <div className="math-intro-content">
            <h1 className="math-page-title">
              Buchtipps: Digitales Lernen &amp; Medienerziehung
            </h1>
            <p className="math-page-desc">
              Kuratierte Buchempfehlungen für Lehrkräfte, Schulleitungen und Pädagoginnen rund um zeitgemäße Bildung: Von KI im Unterricht über Klassen-Chat-Prävention bis hin zu gesunder Bildschirmnutzung und neuen Prüfungsformaten.
            </p>
            <p className="math-page-note">
              Praxisnah ausgewählt mit Inhaltsüberblick, konkreten Tipps für den Unterricht und direkten Buchlinks.
            </p>
          </div>
          <div className="math-mascot">
            <Image
              src="/images/kopernikus-daumen.png"
              alt="Kopernikus Maskottchen"
              width={100}
              height={130}
              className="math-mascot-img"
              priority
            />
          </div>
        </section>

        {/* Main Explorer (Search, Filter, Grid) */}
        <BuchtippsExplorer />

        {/* Legal & Transparenzhinweis Banner */}
        <div className="buchtipp-legal-notice">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '4px' }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--green-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>Hinweis zu Partnerlinks &amp; Transparenz</span>
          </div>
          <p style={{ margin: 0 }}>
            * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Bei den mit einem Sternchen (*) gekennzeichneten Links handelt es sich um sogenannte Affiliate-Partnerlinks. Wenn du über diese Links bestellst, erhalten wir eine kleine Provision. Für dich ändert sich am Preis selbstverständlich nichts. Alle Empfehlungen werden unabhängig und auf Basis ihres didaktischen Mehrwerts für Schule und Unterricht ausgewählt.
          </p>
        </div>
      </main>

      <Footer activePath="/buchtipps" />
    </div>
  );
}
