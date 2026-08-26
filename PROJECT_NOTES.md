# Projekt-Notizen & Architekturentscheidungen (Erklärung und mehr)

## Projektübersicht
- **Framework**: Next.js (App Router, TypeScript, React 19)
- **Styling**: Eigenes globales CSS (`src/app/globals.css`, kein Tailwind CSS)
- **Datenbank**: MongoDB Atlas (Collection `h5p_contents`, etc.)
- **Kernfunktion**: Interaktiver H5P-Player (optimiert auf 90% Größe, zentriert, sichtbare Steuerung) mit Vorbereitung für xAPI-Punkterfassung.

## Wichtige Vorgaben des Nutzers:
1. **Kein LearnPress**:
   - Die LearnPress-Struktur (`wp_learnpress_*`, `lp_course`, `lp_lesson`) wird **nicht** benötigt und nicht nachgebaut.
2. **Fokus**:
   - Strukturierte Fachbereiche & Themen (z. B. Physik, Musik, Chemie, Geographie, Geschichte, Religion, Informatik, Schlagzeug/Drums).
   - Saubere Inhaltsseiten mit Texten, Erklärungen und integrierten interaktiven H5P-Übungen.
   - Eigenes H5P-Management mit MongoDB.
3. **Medien & Vorlagen (Verbindliche Datenquelle)**:
   - **SQL-Datenbank**: `vorlagen/mysqlsvr83_world4you_com.sql`.
   - **Regel**: Fachinhalte, Kategorien, Themen, Texte und H5P-Zuordnungen werden **immer** direkt aus dieser SQL-Datenbank extrahiert (`wp_terms`, `wp_term_taxonomy`, `wp_term_relationships`, `wp_posts`), außer der Nutzer gibt ausdrücklich etwas anderes vor.
   - Benötigte Medien (Bilder, Audios, PDFs) kommen aus `wp-content/uploads/` bzw. `bilder/`.
