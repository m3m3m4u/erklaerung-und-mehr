import React from 'react';
import Link from 'next/link';
import { notFound, redirect, RedirectType } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import H5PPlayer from '@/components/H5PPlayer';
import { resolveH5P } from '@/lib/h5p-resolver';
import { resolveLegacyRedirect } from '@/lib/redirect-resolver';

interface PageProps {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : undefined;
  const slugSegments = Array.isArray(slug) ? slug : [slug];
  const lastSlug = slugSegments[slugSegments.length - 1];
  const fullPath = slugSegments.join('/');

  let resolved = await resolveH5P(lastSlug);
  if (!resolved.found && fullPath !== lastSlug) {
    resolved = await resolveH5P(fullPath);
  }

  if (!resolved.found) {
    const legacyTarget = resolveLegacyRedirect(fullPath, sp) || resolveLegacyRedirect(lastSlug, sp);
    if (legacyTarget) {
      return {
        title: 'Weiterleitung - Erklärung und mehr',
      };
    }
    return {
      title: 'Seite nicht gefunden - Erklärung und mehr',
    };
  }

  const canonical = `/${lastSlug}`;
  const title = `${resolved.title || 'Interaktive Übung'} – Erklärung und mehr`;
  const description = `Interaktive H5P-Lernübung: ${resolved.title || 'Übung auf Erklärung und mehr'}.`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Erklärung und mehr',
      locale: 'de_AT',
      type: 'website',
      images: [
        {
          url: '/images/klasse-1.jpg',
          width: 800,
          height: 480,
          alt: resolved.title || 'Interaktive Übung',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/klasse-1.jpg'],
    },
  };
}

export default async function DynamicCatchAllPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : undefined;
  const slugSegments = Array.isArray(slug) ? slug : [slug];
  const lastSlug = slugSegments[slugSegments.length - 1];
  const fullPath = slugSegments.join('/');

  let resolved = await resolveH5P(lastSlug);
  if (!resolved.found && fullPath !== lastSlug) {
    resolved = await resolveH5P(fullPath);
  }

  if (!resolved.found) {
    const legacyTarget = resolveLegacyRedirect(fullPath, sp) || resolveLegacyRedirect(lastSlug, sp);
    if (legacyTarget && legacyTarget !== `/${fullPath}`) {
      redirect(legacyTarget, RedirectType.replace);
    }
    notFound();
  }

  return (
    <div className="site-wrapper">
      <Header activePath={`/${fullPath}`} />

      <main className="content-container">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-nav">
          <Link href="/">Startseite</Link>
          <span>/</span>
          <Link href="/#faecher">Themen &amp; Fächer</Link>
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

      <Footer activePath={`/${fullPath}`} />
    </div>
  );
}
