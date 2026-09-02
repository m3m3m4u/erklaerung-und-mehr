export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface ErnaehrungTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const ernaehrungCategories: string[] = [
  "Ernährung"
];

export const ernaehrungTopics: Record<string, ErnaehrungTopic> = {
  "ernaehrungspyramide-und-grundlagen": {
    "slug": "ernaehrungspyramide-und-grundlagen",
    "title": "Die Ernährungspyramide & Grundlagen",
    "category": "Ernährung",
    "shortDesc": "Aufbau der Ernährungspyramide, Portionsgrößen (Hand-Regel), Flüssigkeitsbedarf und nachhaltiger Konsum gegen Lebensmittelverschwendung.",
    "longDesc": "Eine ausgewogene und vollwertige Ernährung versorgt den menschlichen Körper mit allen lebensnotwendigen Nährstoffen, Vitaminen und Energie. Die Ernährungspyramide dient als praktischer Leitfaden für die tägliche Lebensmittelauswahl: Reichlich kalorienfreie Getränke und pflanzliche Lebensmittel bilden die breite Basis, während tierische Produkte mäßig und fett- sowie zuckerreiche Snacks nur sparsam verzehrt werden sollten.",
    "keyPoints": [
      "Stufen der Ernährungspyramide: 1. Getränke (Wasser, ungesüßter Tee) ➔ 2. Gemüse & Obst (5 am Tag) ➔ 3. Getreide & Beilagen (bevorzugt Vollkorn) ➔ 4. Milch & Milchprodukte ➔ 5. Fleisch, Fisch & Eier ➔ 6. Öle & Fette ➔ 7. Süßigkeiten & Knabbereien",
      "Flüssigkeitsbedarf: Mindestens 1,5 bis 2 Liter Wasser oder ungesüßte Tees täglich für Stoffwechsel und Konzentration",
      "Hand-Regel: Die eigene Hand dient als praktisches Maß für eine Portion (z. B. 2 Hände voll Gemüse, 1 Handteller Fleisch)",
      "Lebensmittelverschwendung vermeiden: Gezielter Einkauf mit Einkaufszettel, richtige Lagerung im Kühlschrank und Verwertung von Resten"
    ],
    "exercises": [
      {
        "id": "die-ernahrungspyramide-900",
        "title": "Die Ernährungspyramide",
        "folder": "die-ernahrungspyramide-900"
      },
      {
        "id": "escape-room-quot-ernahrung-grundlagen-quot-3234",
        "title": "Escape Room: Ernährung Grundlagen",
        "folder": "escape-room-quot-ernahrung-grundlagen-quot-3234"
      },
      {
        "id": "lebensmittelverschwendung-und-was-man-dagegen-tun-kann-3561",
        "title": "Lebensmittelverschwendung & Nachhaltigkeit",
        "folder": "lebensmittelverschwendung-und-was-man-dagegen-tun-kann-3561"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Ernährungspyramide+ernaehrung&t=3752"
  },
  "makronaehrstoffe-kohlenhydrate-fette-proteine": {
    "slug": "makronaehrstoffe-kohlenhydrate-fette-proteine",
    "title": "Makronährstoffe: Kohlenhydrate, Fette & Proteine",
    "category": "Ernährung",
    "shortDesc": "Energielieferanten des Körpers: Einfach- vs. Mehrfachzucker, gesättigte und ungesättigte Fettsäuren sowie Aminosäuren und Eiweißbausteine.",
    "longDesc": "Makronährstoffe sind die Hauptenergieträger und Baustoffe unserer Nahrung. Kohlenhydrate liefern schnelle Energie für Muskeln und Gehirn, Fette dienen als Energiespeicher, Kälteschutz und Träger fettlöslicher Vitamine, während Proteine (Eiweiße) als universelle Bausteine für Muskeln, Enzyme, Hormone und Zellen unverzichtbar sind.",
    "keyPoints": [
      "Kohlenhydrate (4,1 kcal/g): Monosaccharide (Traubenzucker/Glucose, Fruchtzucker), Disaccharide (Haushaltszucker/Saccharose) und Polysaccharide (Stärke in Vollkorn, Hülsenfrüchten; sättigen lang anhaltend)",
      "Fette (9,3 kcal/g): Höchste Energiedichte; gesättigte Fettsäuren (Butter, Fleisch) sparsam konsumieren; ungesättigte Fettsäuren (Omega-3 und Omega-6 in Pflanzenölen, Nüssen, Fisch) fördern die Herzgesundheit",
      "Proteine (4,1 kcal/g): Zusammengesetzt aus 20 Aminosäuren (davon 9 essenziell); Baustoff für Muskelgewebe, Enzyme und Immunsystem (Richtwert: ca. 0,8–1,0 g pro kg Körpergewicht)",
      "Ballaststoffe: Unverdauliche Pflanzenfasern, die die Darmtätigkeit anregen, den Blutzuckerspiegel stabilisieren und langanhaltend sättigen"
    ],
    "exercises": [
      {
        "id": "kohlenhydrate-921",
        "title": "Kohlenhydrate – Energielieferanten",
        "folder": "kohlenhydrate-921"
      },
      {
        "id": "aufbau-von-traubenzucker-glucose-5141",
        "title": "Aufbau von Traubenzucker (Glucose)",
        "folder": "aufbau-von-traubenzucker-glucose-5141"
      },
      {
        "id": "fette-936",
        "title": "Fette im Überblick",
        "folder": "fette-936"
      },
      {
        "id": "fett-und-le-5162",
        "title": "Fett und Öle",
        "folder": "fett-und-le-5162"
      },
      {
        "id": "gesattigte-und-ungesattigte-fettsauren-5164",
        "title": "Gesättigte und ungesättigte Fettsäuren",
        "folder": "gesattigte-und-ungesattigte-fettsauren-5164"
      },
      {
        "id": "proteine-5176",
        "title": "Proteine & Eiweiße – Bausteine des Körpers",
        "folder": "proteine-5176"
      },
      {
        "id": "escape-room-quot-nahrstoffe-quot-3233",
        "title": "Escape Room: Nährstoffe",
        "folder": "escape-room-quot-nahrstoffe-quot-3233"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Nährstoffe+Kohlenhydrate+Fette+Proteine&t=3752"
  },
  "mikronaehrstoffe-vitamine-und-mineralstoffe": {
    "slug": "mikronaehrstoffe-vitamine-und-mineralstoffe",
    "title": "Mikronährstoffe: Vitamine, Mineralstoffe & Spurenelemente",
    "category": "Ernährung",
    "shortDesc": "Lebensnotwendige Reglerstoffe: Fett- und wasserlösliche Vitamine (A, B, C, D, E, K), Mengen- und Spurenelemente (Eisen, Calcium, Magnesium, Jod).",
    "longDesc": "Mikronährstoffe liefern keine direkte Energie (Kalorien), sind jedoch für alle Stoffwechselvorgänge, das Immunsystem, den Knochenbau und die Nervenfunktion unentbehrlich. Da der Körper die meisten Mikronährstoffe nicht selbst herstellen kann, müssen sie regelmäßig über eine abwechslungsreiche Kost zugeführt werden.",
    "keyPoints": [
      "Vitamine: Fettlösliche Vitamine (E, D, K, A – 'EDeKA', benötigen etwas Fett zur Aufnahme) vs. wasserlösliche Vitamine (Vitamin C und alle B-Vitamine; Überschüsse werden ausgeschieden)",
      "Vitaminfunktionen: Vitamin C (Immunabwehr, Kollagenbildung), Vitamin D ('Sonnenvitamin', Knochenstoffwechsel), Vitamin A (Sehkraft), Vitamin B12 (Blutbildung und Nervensystem)",
      "Mengenelemente: Calcium (Knochen und Zähne), Magnesium (Muskelfunktion und Reizübertragung), Kalium und Natrium (Elektrolyt- und Wasserhaushalt)",
      "Spurenelemente: Werden nur in winzigen Mengen benötigt; Eisen (Sauerstofftransport im Hämoglobin), Jod (Schilddrüsenhormone), Zink (Wundheilung und Abwehrkräfte)"
    ],
    "exercises": [
      {
        "id": "vitamine-934",
        "title": "Vitamine – Lebenswichtige Vitalstoffe",
        "folder": "vitamine-934"
      },
      {
        "id": "mineralstoffe-935",
        "title": "Mineralstoffe & Spurenelemente",
        "folder": "mineralstoffe-935"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Vitamine+Mineralstoffe&t=3752"
  },
  "lebensmittelkunde-obst-gemuese-getreide": {
    "slug": "lebensmittelkunde-obst-gemuese-getreide",
    "title": "Lebensmittelkunde: Obst, Gemüse, Getreide & Hülsenfrüchte",
    "category": "Ernährung",
    "shortDesc": "Inhaltsstoffe, Saisonalität, Regionalität, Getreidesorten, Vollkorn versus Weißmehl und Hülsenfrüchte als pflanzliche Proteinquellen.",
    "longDesc": "Die Lebensmittelkunde vermittelt Wissen über Herkunft, Zusammensetzung, ernährungsphysiologischen Wert und die sachgerechte Zubereitung unserer Nahrungsmittel. Pflanzliche Lebensmittel stehen im Zentrum einer zukunftsfähigen und gesundheitsfördernden Ernährung.",
    "keyPoints": [
      "Obst & Gemüse: Hoher Gehalt an Vitaminen, Mineralstoffen, sekundären Pflanzenstoffen und Wasser bei geringer Energiedichte; '5 am Tag' (3 Portionen Gemüse, 2 Portionen Obst)",
      "Regional & Saisonal: Kürzere Transportwege, besserer Geschmack, maximaler Nährstoffgehalt und geringerer CO2-Fußabdruck",
      "Getreidearten: Weizen, Roggen, Dinkel, Hafer, Gerste, Reis und Mais; Vollkornprodukte enthalten den wertvollen Keimling und die ballaststoffreiche Schale",
      "Hülsenfrüchte: Linsen, Erbsen, Bohnen, Kichererbsen und Soja sind reich an pflanzlichem Protein, Eisen und komplexen Kohlenhydraten"
    ],
    "exercises": [
      {
        "id": "lebensmittelkunde-obst-und-gemuse-2671",
        "title": "Lebensmittelkunde: Obst und Gemüse",
        "folder": "lebensmittelkunde-obst-und-gemuse-2671"
      },
      {
        "id": "lebensmittelkunde-getreide-und-hulsenfruchte-2670",
        "title": "Lebensmittelkunde: Getreide und Hülsenfrüchte",
        "folder": "lebensmittelkunde-getreide-und-hulsenfruchte-2670"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Lebensmittelkunde+Obst+Gemüse+Getreide&t=3752"
  },
  "ernaehrungsformen-vegetarisch-vegan-kulturen": {
    "slug": "ernaehrungsformen-vegetarisch-vegan-kulturen",
    "title": "Ernährungsformen: Vegetarisch, Vegan & Kulturelle Vielfalt",
    "category": "Ernährung",
    "shortDesc": "Pflanzenbasierte Ernährung, Ovo-Lacto-Vegetarismus, Veganismus, kritische Nährstoffe (B12, Eisen) und weltweite Ernährungstraditionen.",
    "longDesc": "Ernährungsgewohnheiten werden durch ethische Werte, religiöse Vorgaben, gesundheitliche Überlegungen und kulturelle Traditionen geprägt. Eine gut geplante pflanzenbasierte Ernährung leistet einen großen Beitrag zum Klima- und Tierschutz.",
    "keyPoints": [
      "Ernährungsformen im Vergleich: Omnivor (Mischkost mit Fleisch/Fisch), Pescetarisch (mit Fisch), Ovo-Lacto-Vegetarisch (kein Fleisch/Fisch, aber Milch/Eier), Vegan (ausschließlich pflanzliche Lebensmittel)",
      "Ökologische Vorteile: Geringerer Flächen-, Wasser- und Ressourcenverbrauch, Reduktion von Treibhausgasemissionen aus der Tierhaltung",
      "Kritische Nährstoffe bei veganer Ernährung: Vitamin B12 (muss supplementiert werden), Vitamin D, Jod, Eisen, Zink, Calcium und Omega-3-Fettsäuren",
      "Kulturelle Vielfalt: Koschere und Halal-Vorschriften, mediterrane Ernährung, ayurvedische Kost und traditionelle Küchen weltweit"
    ],
    "exercises": [
      {
        "id": "vegane-und-vegetarische-ernahrung-914",
        "title": "Vegane und vegetarische Ernährung (Teil 1)",
        "folder": "vegane-und-vegetarische-ernahrung-914"
      },
      {
        "id": "vegane-und-vegetarische-ernahrung-2-915",
        "title": "Vegane und vegetarische Ernährung (Teil 2)",
        "folder": "vegane-und-vegetarische-ernahrung-2-915"
      },
      {
        "id": "vegane-und-vegetarische-ernahrung-3-916",
        "title": "Vegane und vegetarische Ernährung (Teil 3)",
        "folder": "vegane-und-vegetarische-ernahrung-3-916"
      },
      {
        "id": "vegetarische-und-vegane-ernahrung-2676",
        "title": "Vegetarische und vegane Ernährungsformen",
        "folder": "vegetarische-und-vegane-ernahrung-2676"
      },
      {
        "id": "ernahrung-in-verschiedenen-kulturen-2658",
        "title": "Ernährung in verschiedenen Kulturen",
        "folder": "ernahrung-in-verschiedenen-kulturen-2658"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Vegetarisch+Vegan+Ernährung&t=3752"
  },
  "ernaehrung-gesundheit-allergien-lebensphasen": {
    "slug": "ernaehrung-gesundheit-allergien-lebensphasen",
    "title": "Ernährung, Gesundheit, Allergien & Lebensphasen",
    "category": "Ernährung",
    "shortDesc": "Lebensmittelallergien vs. Unverträglichkeiten (Laktose, Zöliakie), Immunsystem, Ernährung im Alter und Zivilisationskrankheiten.",
    "longDesc": "Die Ernährung hat einen direkten Einfluss auf unsere physische und psychische Gesundheit. Nahrungsmittelunverträglichkeiten, Allergien sowie der spezifische Nährstoffbedarf in verschiedenen Lebensphasen (Kindheit, Jugend, Schwangerschaft, Seniorenalter) erfordern gezielte Anpassungen.",
    "keyPoints": [
      "Allergie vs. Intoleranz: Nahrungsmittelallergie = immunologische Abwehrreaktion (z. B. Erdnuss, Hühnerei; Gefahr eines anaphylaktischen Schocks); Intoleranz = fehlende/eingeschränkte Enzymfunktion (z. B. Laktoseintoleranz durch Laktasemangel, Fruktosemalabsorption)",
      "Zöliakie: Autoimmunerkrankung gegen das Klebereiweiß Gluten (in Weizen, Roggen, Gerste, Dinkel); erfordert lebenslange strikte glutenfreie Diät",
      "Ernährungsmitbedingte Zivilisationskrankheiten: Adipositas, Diabetes mellitus Typ 2, Bluthochdruck, Arteriosklerose und Karies",
      "Ernährung im Alter: Geringerer Kalorienbedarf bei gleichbleibendem Nährstoffbedarf (hohe Nährstoffdichte nötig), vermindertes Durstgefühl beachten",
      "Darm-Hirn-Achse (Psychische Gesundheit): Eine intakte Darmflora (Mikrobiom) beeinflusst Stimmung, Wohlbefinden und Botenstoffe (z. B. Serotonin)"
    ],
    "exercises": [
      {
        "id": "lebensmittelallergien-und-unvertraglichkeiten-2669",
        "title": "Lebensmittelallergien und -Unverträglichkeiten",
        "folder": "lebensmittelallergien-und-unvertraglichkeiten-2669"
      },
      {
        "id": "ernahrung-und-krankheiten-2659",
        "title": "Ernährung und ernährungsbedingte Krankheiten",
        "folder": "ernahrung-und-krankheiten-2659"
      },
      {
        "id": "ernahrung-fur-senioren-2657",
        "title": "Ernährung in verschiedenen Lebensphasen",
        "folder": "ernahrung-fur-senioren-2657"
      },
      {
        "id": "das-immunsystem-und-ernahrung-2083",
        "title": "Das Immunsystem und Ernährung (Teil 1)",
        "folder": "das-immunsystem-und-ernahrung-2083"
      },
      {
        "id": "das-immunsystem-und-ernahrung-2-2131",
        "title": "Das Immunsystem und Ernährung (Teil 2)",
        "folder": "das-immunsystem-und-ernahrung-2-2131"
      },
      {
        "id": "der-zusammenhang-zwischen-ernahrung-und-psychischer-gesundheit-2701",
        "title": "Ernährung und psychische Gesundheit",
        "folder": "der-zusammenhang-zwischen-ernahrung-und-psychischer-gesundheit-2701"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Ernährung+Allergien+Gesundheit&t=3752"
  },
  "verdauungstrakt-und-stoffwechsel": {
    "slug": "verdauungstrakt-und-stoffwechsel",
    "title": "Verdauungssystem: vom Mund bis zur Nährstoffaufnahme",
    "category": "Ernährung",
    "shortDesc": "Verdauungsorgane: Mundhöhle, Speiseröhre, Magen, Dünndarm, Dickdarm, Bauchspeicheldrüse, Verdauungsenzyme und Resorption.",
    "longDesc": "Die Verdauung zerlegt die mit der Nahrung aufgenommenen Makronährstoffe mechanisch und chemisch in ihre kleinsten Grundbausteine, damit sie über die Dünndarmschleimhaut ins Blut und in die Körperzellen aufgenommen werden können.",
    "keyPoints": [
      "Mundhöhle & Speiseröhre: Zerkleinerung durch Zähne, Einspeichelung mit Speichel-Amylase (beginnt Stärkespaltung), Transport durch Peristaltik",
      "Magen: Salzsäure (tötet Keime ab, denaturiert Proteine), Pepsin spaltet Proteine in Peptidketten, Magenschleimhaut schützt vor Selbstverdauung",
      "Bauchspeicheldrüse & Leber/Galle: Bauchspeicheldrüse liefert Enzyme (Amylasen, Proteasen, Lipasen) und Bicarbonat; Gallensaft emulgiert Fette",
      "Dünndarm (Duodenum, Jejunum, Ileum): Hauptort der Nährstoffresorption; riesige Oberfläche durch Darmfalten, Zotten und Mikrovilli",
      "Dickdarm & Mikrobiom: Rückresorption von Wasser und Elektrolyten, Eindickung des Stuhls, Besiedlung mit Billionen nützlichen Darmbakterien"
    ],
    "exercises": [
      {
        "id": "verdauungstrakt-mund-und-speiserohre-2113",
        "title": "Verdauungstrakt: Mund und Speiseröhre",
        "folder": "verdauungstrakt-mund-und-speiserohre-2113"
      },
      {
        "id": "verdauungstrakt-magen-und-darm-2114",
        "title": "Verdauungstrakt: Magen und Darm",
        "folder": "verdauungstrakt-magen-und-darm-2114"
      },
      {
        "id": "bauchspeicheldruse-insulin-und-verdauungsenzyme-2115",
        "title": "Bauchspeicheldrüse, Insulin und Verdauungsenzyme",
        "folder": "bauchspeicheldruse-insulin-und-verdauungsenzyme-2115"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Verdauungstrakt+Verdauung+Magen+Darm&t=3752"
  }
};
