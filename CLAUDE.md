# Projektregeln & Vorgaben (Erklärung und mehr)

1. **Inhalte & Fächerdaten**:
   - Inhalte, Kategorien, Themen, Texte, Merksätze und H5P-Zuordnungen für Fächer MÜSSEN IMMER direkt aus der SQL-Datenbank der alten Website (`vorlagen/mysqlsvr83_world4you_com.sql`) aus den WordPress-Tabellen `wp_terms`, `wp_term_taxonomy`, `wp_term_relationships` und `wp_posts` bezogen werden, außer der Benutzer gibt ausdrücklich etwas anderes vor.
   - Keine unscharfe Volltextsuche über alle H5P-Dateien, um Fehlzuordnungen (z. B. Mathe/Musik in Geschichte) auszuschließen.

2. **Design & Aufbau der Fächer**:
   - Verbindlicher Leitfaden: `SUBJECT_TEMPLATE_GUIDE.md`
   - Keine Zähler wie `(1 Thema)` oder `(4)` in Überschriften oder Filter-Pills.
   - Kompakte Fächer mit flachem Raster ohne Zwischenebene, große Fächer mit Kategorie-Einteilung.
