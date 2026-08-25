import AdmZip from 'adm-zip';
import path from 'path';
import fs from 'fs/promises';
import fsSync from 'fs';
import { applyH5PCompatibilityPatches } from './h5p';
import h5pMappingsData from './h5p-mappings.json';

export interface ResolvedH5P {
  found: boolean;
  id?: string;
  title?: string;
  slug?: string;
  contentPath?: string;
  sourceFile?: string;
}

const mappings: Record<string, string> = h5pMappingsData;

function slugify(text: string): string {
  return text
    .replace(/Ä/g, 'ae')
    .replace(/Ö/g, 'oe')
    .replace(/Ü/g, 'ue')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function normalize(text: string): string {
  return text
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
    .replace(/Ü/g, 'Ue')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[_–—\-]+/g, ' ')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .toLowerCase();
}

export async function resolveH5P(rawQuery: string): Promise<ResolvedH5P> {
  const query = decodeURIComponent(rawQuery).trim().toLowerCase();
  let resolvedId: string = query;

  // Try direct lookup in mappings
  let relPath: string | undefined = mappings[query];

  if (!relPath) {
    const norm = normalize(query);
    relPath = mappings[norm];
  }

  if (!relPath) {
    const slug = slugify(query);
    relPath = mappings[slug];
  }

  // If starts with h5p-
  if (!relPath && query.startsWith('h5p-')) {
    const stripped = query.replace(/^h5p-/i, '').trim();
    resolvedId = stripped;
    relPath =
      mappings[stripped] ||
      mappings[normalize(stripped)] ||
      mappings[slugify(stripped)];

    if (!relPath && /^\d+$/.test(stripped)) {
      const intId = parseInt(stripped, 10).toString();
      const padded = intId.padStart(4, '0');
      relPath =
        mappings[intId] ||
        mappings[padded] ||
        mappings[`h5p-${intId}`] ||
        mappings[`h5p-${padded}`];
    }
  }

  // If pure number query
  if (!relPath && /^\d+$/.test(query)) {
    resolvedId = query;
    const intId = parseInt(query, 10).toString();
    const padded = intId.padStart(4, '0');
    relPath =
      mappings[query] ||
      mappings[intId] ||
      mappings[padded] ||
      mappings[`h5p-${query}`] ||
      mappings[`h5p-${intId}`] ||
      mappings[`h5p-${padded}`];
  }

  // Fallback search in mappings keys
  if (!relPath) {
    const normQ = normalize(query);
    for (const [key, val] of Object.entries(mappings)) {
      if (key.length > 5 && (key.includes(normQ) || normQ.includes(key))) {
        relPath = val;
        break;
      }
    }
  }

  if (!relPath) {
    return { found: false };
  }

  const fullSourcePath = path.join(process.cwd(), relPath);
  if (!fsSync.existsSync(fullSourcePath)) {
    return { found: false };
  }

  const filename = path.basename(relPath);
  const baseSlug = slugify(filename.replace(/\.h5p$/i, ''));
  const publicDir = path.join(process.cwd(), 'public', 'h5p-content', baseSlug);
  const h5pJsonPath = path.join(publicDir, 'h5p.json');

  let title = filename.replace(/\.h5p$/i, '').replace(/[_–—\-]+/g, ' ');

  try {
    if (!fsSync.existsSync(h5pJsonPath)) {
      await fs.mkdir(publicDir, { recursive: true });
      const zip = new AdmZip(fullSourcePath);
      zip.extractAllTo(publicDir, true);
      await applyH5PCompatibilityPatches(publicDir);
    }

    if (fsSync.existsSync(h5pJsonPath)) {
      const jsonContent = await fs.readFile(h5pJsonPath, 'utf8');
      const meta = JSON.parse(jsonContent);
      if (meta.title) {
        title = meta.title;
      }
    }
  } catch (err) {
    console.warn(`Error on-demand extracting ${relPath}:`, err);
  }

  return {
    found: true,
    id: resolvedId,
    title,
    slug: baseSlug,
    contentPath: `/h5p-content/${baseSlug}`,
    sourceFile: relPath,
  };
}
