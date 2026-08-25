import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import H5PPlayer from '@/components/H5PPlayer';
import { resolveH5P } from '@/lib/h5p-resolver';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = await resolveH5P(slug);

  if (!resolved.found) {
    return {
      title: 'Seite nicht gefunden - Erklärung und mehr',
    };
  }

  return {
    title: `${resolved.title || 'Interaktive Übung'} - Erklärung und mehr`,
    description: `Interaktive H5P-Lernübung: ${resolved.title || 'Übung auf Erklärung und mehr'}.`,
  };
}

export default async function DynamicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const resolved = await resolveH5P(slug);

  if (!resolved.found) {
    notFound();
  }

  return (
    <div className="site-wrapper">
      <Header activePath={`/${slug}`} />

      <main className="content-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <Link href="/">Startseite</Link>
          <span>/</span>
          <Link href="/#h5p">H5P-Übungen</Link>
          <span>/</span>
          <strong>{resolved.title}</strong>
        </div>

        {/* Page Header */}
        <div className="h5p-single-header" style={{ marginBottom: '24px' }}>
          <h1 className="topic-main-title" style={{ fontSize: '26px', color: 'var(--green-dark)' }}>
            {resolved.title}
          </h1>
        </div>

        {/* Player Area */}
        <section className="h5p-standalone-section" style={{ minHeight: '500px' }}>
          <H5PPlayer
            h5pJsonPath={resolved.contentPath!}
            title={resolved.title}
          />
        </section>
      </main>

      <Footer activePath={`/${slug}`} />
    </div>
  );
}
