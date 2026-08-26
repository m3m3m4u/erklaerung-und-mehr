# Standard-Leitfaden für Fächerseiten auf Erklärung und mehr

Dieses Dokument definiert den verbindlichen Standard für den Aufbau, die Datenstrukturen und das Design aller Fachbereiche auf der Plattform.

---

## 0. Verbindliche Datenquelle: SQL-Datenbank (`vorlagen/mysqlsvr83_world4you_com.sql`)

> [!IMPORTANT]
> **VERBINDLICHE REGEL**: Inhalte, Kategorien, Themen, Texte, Merksätze und H5P-Zuordnungen für Fächer MÜSSEN IMMER direkt aus der SQL-Datenbank der alten Website (`vorlagen/mysqlsvr83_world4you_com.sql`) aus den WordPress-Tabellen `wp_terms`, `wp_term_taxonomy`, `wp_term_relationships` und `wp_posts` bezogen werden, außer der Benutzer gibt ausdrücklich etwas anderes vor!
> - Keine unscharfe Volltextsuche über alle H5Ps (Gefahr von falschen Fächern wie Mathe/Musik in Geschichte).
> - Immer die exakten Post-IDs, Slugs, Beitragstexte, Listenelemente (`<li>`) und `[h5p id="..."]`-Verknüpfungen der entsprechenden Fachkategorie aus der SQL-Datenbank extrahieren.

---

## 1. Datenstruktur (`src/lib/[fach]-data.ts`)

Jedes Fach besitzt eine eigene Datendatei in `src/lib/` mit folgender TypeScript-Schnittstelle:

```typescript
export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface [Fach]Topic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const [fach]Categories: string[] = [
  "Kategorie 1",
  "Kategorie 2",
  "Kategorie 3",
  "Kategorie 4"
];

export const [fach]Topics: Record<string, [Fach]Topic> = {
  "topic-slug": {
    slug: "topic-slug",
    title: "Titel des Themas",
    category: "Kategorie 1",
    shortDesc: "Kurzbeschreibung für die Kachelübersicht.",
    longDesc: "Ausführlicher Einführungstext für die Detailseite.",
    keyPoints: [
      "Wichtiger Merksatz 1",
      "Wichtiger Merksatz 2"
    ],
    exercises: [
      { id: "123", title: "Übungstitel", folder: "uebungs-ordner-name-123" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=..."
  }
};
```

---

## 2. Fach-Übersichtsseite (`src/app/[fach]/page.tsx`)

Jede Übersicht folgt diesem 5-teiligen Aufbau:

1. **Header & Intro-Banner:**
   - `<section className="math-intro-banner">` mit `math-page-title`, `math-page-desc`, `math-page-note` und `math-mascot`-Platzhalter.
2. **Filter & Suchleiste:**
   - Textsuchfeld `🔍 Thema suchen...` mit „Suche löschen“-Button.
   - Pill-Buttons für Kategorien nur bei großen Fächern mit vielen Themen pro Kategorie.
3. **Kategorie-Gruppierung / Direktes Grid:**
   - **Große Fächer:** Jede Kategorie mit cleaner Überschrift `<h2 className="math-category-title">{categoryName}</h2>` und Raster `<div className="math-grid">`.
   - **Kompakte Fächer (wie Sachkunde/Verkehrserziehung/Hauswirtschaft):** Wenn es keine verschachtelten Unterthemen gibt, entfällt die überflüssige Kategorie-Ebene und alle Themenkarten werden direkt in einem aufgeräumten Raster (`<div className="math-grid">`) dargestellt.
4. **Themen-Kacheln (`math-card`):**
   - Header mit `math-card-title` und `math-badge` (Anzahl Übungen).
   - `math-card-desc` für die Kurzbeschreibung.
   - Footer mit `<span className="math-open-btn">Thema öffnen ➔</span>`.
5. **Eduki-Materialbox (`info-box-section`):**
   - Hinweis auf passende Arbeitsblätter auf Eduki mit Button-Link.
6. **Footer:**
   - `<Footer activePath="/[fach]" />`

---

## 3. Themen-Detailseite (`src/app/[fach]/[slug]/page.tsx`)

Jede Detailseite folgt diesem Standard:

1. **Breadcrumb-Navigation:**
   - `Startseite / [Fach] / [Thementitel]`
2. **Themen-Header (`topic-header-box`):**
   - `topic-category-badge`, `topic-main-title` und `topic-intro-text` mit `<MathText />`.
3. **Merksätze-Box (`topic-rules-card`):**
   - `<h2>Wichtige Grundlagen, Gesetze und Merksätze</h2>` mit Aufzählung `topic-rules-list`.
4. **Interaktive H5P-Übungen (`topic-exercises-section`):**
   - Reiter-Navigation bei mehreren Übungen (`exercise-tab-btn`).
   - `score-status` bei Erreichen von Punkten (xAPI).
   - `<H5PPlayer h5pJsonPath={`/h5p-content/${currentExercise.folder}`} title={currentExercise.title} onXAPIStatement={handleXAPI} />` in `.exercise-player-wrapper`.
5. **Eduki-Kasten (`info-box-section`):**
   - Verlinkung zu vertiefenden Arbeitsblättern auf Eduki.
6. **Footer:**
   - `<Footer activePath="/[fach]" />`
