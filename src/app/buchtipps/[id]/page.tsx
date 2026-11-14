import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBuchTippById, getAllBuchTipps } from '@/lib/buchtipps/data';
import { buildAmazonAffiliateUrl, isbn13ToIsbn10 } from '@/lib/buchtipps/isbnConverter';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const books = getAllBuchTipps();
  return books.map((b) => ({ id: b.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const book = getBuchTippById(id);
  if (!book) {
    return { title: 'Buch nicht gefunden | Erklärung und mehr' };
  }
  const asin = isbn13ToIsbn10(book.isbn) || book.isbn;
  const coverUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;

  return {
    title: `${book.title} – Buchtipp für Lehrkräfte`,
    description: book.subtitle || book.summary.slice(0, 160),
    keywords: [...book.topics, 'Buchtipp', 'Lehrkräfte', 'Unterricht', 'Schule', book.authorName],
    alternates: {
      canonical: `/buchtipps/${book.id}`,
    },
    openGraph: {
      title: `${book.title} – Buchtipp für Lehrkräfte | Erklärung und mehr`,
      description: book.subtitle || book.summary.slice(0, 160),
      url: `/buchtipps/${book.id}`,
      siteName: 'Erklärung und mehr',
      locale: 'de_AT',
      type: 'book',
      images: [
        {
          url: coverUrl,
          alt: `Cover von ${book.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${book.title} – Buchtipp für Lehrkräfte`,
      description: book.subtitle || book.summary.slice(0, 160),
      images: [coverUrl],
    },
  };
}

export default async function BuchtippDetailPage({ params }: PageProps) {
  const { id } = await params;
  const book = getBuchTippById(id);

  if (!book) {
    notFound();
  }

  const asin = isbn13ToIsbn10(book.isbn) || book.isbn;
  const coverUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;
  const affiliateUrl = buildAmazonAffiliateUrl(book.isbn);

  // Other book recommendations
  const otherBooks = getAllBuchTipps()
    .filter((b) => b.id !== book.id)
    .slice(0, 2);

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
      {
        '@type': 'ListItem',
        position: 3,
        name: book.title,
        item: `${baseUrl}/buchtipps/${book.id}`,
      },
    ],
  };

  const bookJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    headline: book.subtitle || book.title,
    author: {
      '@type': 'Person',
      name: book.authorName,
    },
    isbn: book.isbn,
    inLanguage: 'de',
    publisher: {
      '@type': 'Organization',
      name: book.publisher || 'Fachbuch',
    },
    datePublished: book.publishYear ? String(book.publishYear) : undefined,
    numberOfPages: book.pages,
    description: book.summary.slice(0, 300),
    image: coverUrl,
    url: `${baseUrl}/buchtipps/${book.id}`,
    genre: book.category,
    keywords: book.topics.join(', '),
  };

  return (
    <div className="site-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <Header activePath="/buchtipps" />

      <main className="content-container" style={{ maxWidth: '960px' }}>
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <Link href="/">Startseite</Link>
          <span>/</span>
          <Link href="/buchtipps">Buchtipps</Link>
          <span>/</span>
          <strong>{book.title}</strong>
        </div>

        {/* Back Link */}
        <div style={{ marginBottom: '16px' }}>
          <Link
            href="/buchtipps"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--green-dark)',
              textDecoration: 'none',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Zurück zu allen Buchtipps</span>
          </Link>
        </div>

        {/* Main Presentation Card */}
        <article className="buchtipp-detail-card">
          {/* Hero Row: Cover + Key Facts */}
          <div className="buchtipp-detail-hero">
            <div className="buchtipp-detail-cover">
              <Image
                src={coverUrl}
                alt={`Cover von ${book.title}`}
                fill
                sizes="(min-width: 640px) 170px, 140px"
                priority
                style={{ objectFit: 'contain', padding: '4px' }}
              />
            </div>

            <div className="buchtipp-detail-info">
              <div className="buchtipp-badges">
                <span className="buchtipp-badge">
                  {book.publisher || 'Fachbuch'}
                </span>
                {book.publishYear && (
                  <span className="buchtipp-year">Erschienen {book.publishYear}</span>
                )}
              </div>

              <h1 className="buchtipp-detail-title">{book.title}</h1>

              {book.subtitle && (
                <p className="buchtipp-detail-subtitle">{book.subtitle}</p>
              )}

              <p className="buchtipp-detail-author">Autor/in: {book.authorName}</p>

              {/* Bibliographic facts */}
              <div className="buchtipp-detail-facts">
                {book.pages && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                    {book.pages} Seiten
                  </span>
                )}
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="9" x2="20" y2="9" />
                    <line x1="4" y1="15" x2="20" y2="15" />
                    <line x1="10" y1="3" x2="8" y2="21" />
                    <line x1="16" y1="3" x2="14" y2="21" />
                  </svg>
                  ISBN-13: {book.isbn}
                </span>
                {asin && (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="9" x2="20" y2="9" />
                      <line x1="4" y1="15" x2="20" y2="15" />
                      <line x1="10" y1="3" x2="8" y2="21" />
                      <line x1="16" y1="3" x2="14" y2="21" />
                    </svg>
                    ASIN: {asin}
                  </span>
                )}
              </div>

              {/* Amazon Primary Action */}
              <div style={{ marginTop: '18px' }}>
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="buchtipp-amazon-btn"
                  style={{ padding: '10px 20px', fontSize: '14px', borderRadius: '6px' }}
                >
                  <span>Buch auf Amazon ansehen *</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', marginBottom: 0 }}>
                  * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
                </p>
              </div>
            </div>
          </div>

          {/* Target Audience Box */}
          <div className="buchtipp-audience-box">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--green-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0, marginTop: '2px' }}
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div>
              <strong style={{ display: 'block', color: 'var(--green-dark)', marginBottom: '2px' }}>
                Empfohlen für:
              </strong>
              <span style={{ color: 'var(--text-color)' }}>{book.targetAudience}</span>
            </div>
          </div>

          {/* Why Recommended - Praxis-Tipp */}
          <section className="buchtipp-content-section">
            <h2>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--green-primary)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Warum dieses Buch für Lehrkräfte lesenswert ist</span>
            </h2>
            <div
              style={{
                background: 'var(--green-light)',
                border: '1px solid var(--green-border)',
                borderRadius: '6px',
                padding: '16px 20px',
                fontSize: '14.5px',
                lineHeight: 1.6,
                color: 'var(--text-color)',
              }}
            >
              {book.whyRecommended}
            </div>
          </section>

          {/* Comprehensive Summary */}
          <section className="buchtipp-content-section">
            <h2>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--green-primary)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span>Inhalt &amp; Überblick</span>
            </h2>
            <div className="buchtipp-summary-text">{book.summary}</div>
          </section>

          {/* Topics & Keywords */}
          <section className="buchtipp-content-section" style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
            <h2 style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              <span>Themenschwerpunkte &amp; Schlagworte</span>
            </h2>
            <div className="buchtipp-topics">
              {book.topics.map((topic) => (
                <span
                  key={topic}
                  className="buchtipp-topic-tag"
                  style={{ fontSize: '12px', padding: '4px 10px' }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>

          {/* Bottom Amazon CTA */}
          <div className="buchtipp-bottom-cta">
            <div>
              <h3 style={{ fontSize: '16px', color: 'var(--green-dark)', margin: '0 0 4px 0' }}>
                Interesse an diesem Buch?
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
                Jetzt bei Amazon versandkostenfrei prüfen, Bewertungen lesen oder als Print/eBook bestellen.
              </p>
            </div>

            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="buchtipp-amazon-btn"
              style={{ padding: '9px 18px' }}
            >
              <span>Auf Amazon ansehen *</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </article>

        {/* Other Recommendations */}
        {otherBooks.length > 0 && (
          <section style={{ marginTop: '32px' }}>
            <h2 style={{ fontSize: '18px', color: 'var(--green-dark)', marginBottom: '14px' }}>
              Weitere Buchempfehlungen
            </h2>
            <div className="buchtipp-related-grid">
              {otherBooks.map((other) => {
                const otherAsin = isbn13ToIsbn10(other.isbn) || other.isbn;
                const otherCoverUrl = `https://images-na.ssl-images-amazon.com/images/P/${otherAsin}.01.LZZZZZZZ.jpg`;
                return (
                  <Link
                    key={other.id}
                    href={`/buchtipps/${other.id}`}
                    style={{
                      background: 'var(--bg-white)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '6px',
                      padding: '12px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'border-color 0.15s ease',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '48px',
                        aspectRatio: '2/3',
                        flexShrink: 0,
                        borderRadius: '4px',
                        overflow: 'hidden',
                        background: '#f6f8f4',
                        border: '1px solid var(--border-light)',
                      }}
                    >
                      <Image
                        src={otherCoverUrl}
                        alt={other.title}
                        fill
                        sizes="48px"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span className="buchtipp-badge" style={{ fontSize: '10px', padding: '1px 6px', display: 'inline-block', marginBottom: '4px' }}>
                        {other.publisher || 'Fachbuch'}
                      </span>
                      <h4
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 700,
                          color: 'var(--green-dark)',
                          margin: '0 0 2px 0',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {other.title}
                      </h4>
                      <p
                        style={{
                          fontSize: '12px',
                          color: 'var(--text-muted)',
                          margin: 0,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        Von {other.authorName}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Footer Disclaimer */}
        <p style={{ textAlign: 'center', fontSize: '11px', color: 'var(--text-muted)', marginTop: '28px' }}>
          * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
        </p>
      </main>

      <Footer activePath="/buchtipps" />
    </div>
  );
}
