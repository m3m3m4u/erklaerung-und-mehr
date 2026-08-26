export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface ChemieTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const chemieCategories = [
  "Allgemeine & Anorganische Chemie",
  "Reaktionslehre & Physikalische Chemie",
  "Organische & Biochemie"
];

export const chemieTopics: Record<string, ChemieTopic> = {
  "grundlagen-der-chemie": {
    "slug": "grundlagen-der-chemie",
    "title": "Grundlagen der Chemie & Stoffe",
    "category": "Allgemeine & Anorganische Chemie",
    "shortDesc": "Reinstoffe, Stoffgemische, Trennverfahren, Aggregatzustände, Atombau und Periodensystem.",
    "longDesc": "Die Chemie ist die Naturwissenschaft von den Stoffen, ihren Eigenschaften und den Reaktionen, bei denen neue Stoffe mit veränderten Eigenschaften entstehen. Vom Aufbau der Atome bis zu physikalischen Trennmethoden (Filtrieren, Destillieren) bilden diese Grundlagen den Einstieg.",
    "keyPoints": [
      "Reinstoffe (Elemente & Verbindungen) vs. Gemische (homogen: Lösungen/Legierungen; heterogen: Suspensionen/Emulsionen)",
      "Trennverfahren: Filtration, Destillation, Chromatographie, Zentrifugieren, Sedimentieren",
      "Bohrsches Atommodell: Atomkern mit Protonen (+) und Neutronen (neutral), Elektronenhülle (-) mit Energiestufen/Schalen",
      "Periodensystem der Elemente (PSE): Geordnet nach Kernladungszahl; Hauptgruppen besitzen gleiche Valenzelektronenanzahl"
    ],
    "exercises": [
      {
        "id": "280",
        "title": "Aufbau der Materie",
        "folder": "aufbau-der-materie-280"
      },
      {
        "id": "281",
        "title": "Das Periodensystem der Elemente",
        "folder": "das-periodensystem-der-elemente-281"
      },
      {
        "id": "282",
        "title": "Atombindungen",
        "folder": "atombindungen-282"
      },
      { id: "276", title: "Wärme und Temperatur", folder: "fest-flussig-und-gasformig-276" },
      {
        "id": "277",
        "title": "Fest, flüssig und gasförmig",
        "folder": "fest-flussig-und-gasformig-2-277"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=chemie+grundlagen&t=3752"
  },
  "metalle": {
    "slug": "metalle",
    "title": "Metalle, Legierungen & Redoxreaktionen",
    "category": "Allgemeine & Anorganische Chemie",
    "shortDesc": "Alkalimetalle, Erdalkalimetalle, Übergangsmetalle, Eisen/Stahl, Kupfer, Gold, Korrosion und Redox.",
    "longDesc": "Metalle zeichnen sich durch metallischen Glanz, hohe elektrische und thermische Leitfähigkeit sowie Verformbarkeit aus. Bei Redoxreaktionen geben Metalle Elektronen ab (Oxidation), was für die Metallgewinnung und Korrosion grundlegend ist.",
    "keyPoints": [
      "Typische Metalleigenschaften: Gute Leitfähigkeit für Strom und Wärme, Duktilität (Verformbarkeit), Metallglanz",
      "Metallbindung: Positiv geladene Metall-Atomrümpfe in einem frei beweglichen \"Elektronengas\"",
      "Wichtige Metalle: Eisen/Stahl, Kupfer, Aluminium, Zink, Gold, Silber, Platin",
      "Legierungen: Mischungen aus Metallen mit verbesserten Werkstoffeigenschaften (z. B. Bronze = Cu+Sn, Messing = Cu+Zn, Edelstahl)",
      "Redoxreaktion: Oxidation = Elektronenabgabe | Reduktion = Elektronenaufnahme"
    ],
    "exercises": [
      {
        "id": "5244",
        "title": "Ausbreitung von Schall Schallwellen",
        "folder": "ausbreitung-von-schall-schallwellen-5244"
      },
      {
        "id": "5245",
        "title": "Ausbreitung von Schall Schallwellen",
        "folder": "ausbreitung-von-schall-schallwellen-2-5245"
      },
      {
        "id": "5246",
        "title": "Batterien und Akkumulatoren",
        "folder": "batterien-und-akkumulatoren-5246"
      },
      {
        "id": "5247",
        "title": "Bildentstehung bei Linsen",
        "folder": "bildentstehung-bei-linsen-5247"
      },
      {
        "id": "5248",
        "title": "Brechung von Licht",
        "folder": "brechung-von-licht-5248"
      },
      {
        "id": "5249",
        "title": "Coulomb sches Gesetz",
        "folder": "coulomb-039-sches-gesetz-5249"
      },
      {
        "id": "5250",
        "title": "Das Elektrische Feld",
        "folder": "das-elektrische-feld-5250"
      },
      {
        "id": "5251",
        "title": "Das Elektromagnetische Spektrum",
        "folder": "das-elektromagnetische-spektrum-5251"
      },
      {
        "id": "5252",
        "title": "Das Farbfernsehen",
        "folder": "das-farbfernsehen-5252"
      },
      {
        "id": "5257",
        "title": "Der Elektrische Schwingkreis",
        "folder": "der-elektrische-schwingkreis-5257"
      },
      {
        "id": "5258",
        "title": "Der Elektroherd",
        "folder": "der-elektroherd-5258"
      },
      {
        "id": "5262",
        "title": "Der Fotoapparat",
        "folder": "der-fotoapparat-5262"
      },
      {
        "id": "5263",
        "title": "Der Jupiter",
        "folder": "der-jupiter-5263"
      },
      {
        "id": "5264",
        "title": "Der Kondensator",
        "folder": "der-kondensator-5264"
      },
      {
        "id": "5265",
        "title": "Der Mars",
        "folder": "der-mars-5265"
      },
      {
        "id": "5266",
        "title": "Der Merkur",
        "folder": "der-merkur-5266"
      },
      {
        "id": "5267",
        "title": "Der Mikrowellenherd",
        "folder": "der-mikrowellenherd-5267"
      },
      {
        "id": "5268",
        "title": "Der Mond",
        "folder": "der-mond-2-5268"
      },
      {
        "id": "5269",
        "title": "Der Neptun",
        "folder": "der-neptun-5269"
      },
      {
        "id": "5270",
        "title": "Der Saturn",
        "folder": "der-saturn-5270"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=metalle&t=3752"
  },
  "nichtmetalle": {
    "slug": "nichtmetalle",
    "title": "Nichtmetalle & Halbmetalle",
    "category": "Allgemeine & Anorganische Chemie",
    "shortDesc": "Wasserstoff, Sauerstoff, Stickstoff, Kohlenstoff, Halogene, Edelgase und Halbleiter (Silicium).",
    "longDesc": "Nichtmetalle stehen im rechten oberen Teil des Periodensystems. Sie bilden durch gemeinsame Elektronenpaare kovalente Bindungen (Moleküle). Halbmetalle wie Silicium sind die Basis der gesamten modernen Halbleiter- und Computertechnik.",
    "keyPoints": [
      "Kovalente Elektronenpaarbindung: Atome teilen sich Valenzelektronen zur Erreichung der stabilen Edelgaskonfiguration (Oktettregel)",
      "Gase der Luft: Stickstoff (ca. 78 %), Sauerstoff (ca. 21 %), Edelgase (Argon ca. 0,9 %), Kohlenstoffdioxid (ca. 0,04 %)",
      "Halogene (7. Hauptgruppe: Fluor, Chlor, Brom, Iod): Sehr reaktionsfreudige Salzbildner",
      "Edelgase (8. Hauptgruppe: Helium, Neon, Argon, Krypton, Xenon): Reaktionsträge aufgrund voll besetzter Außenschale",
      "Halbmetalle: Silicium, Germanium – ihre temperaturabhängige Leitfähigkeit ermöglicht Transistoren und Solarzellen"
    ],
    "exercises": [
      {
        "id": "5273",
        "title": "Der Transistor",
        "folder": "der-transistor-5273"
      },
      {
        "id": "5274",
        "title": "Der Uranus",
        "folder": "der-uranus-5274"
      },
      {
        "id": "5275",
        "title": "Die Anomalie des Wassers",
        "folder": "die-anomalie-des-wassers-5275"
      },
      {
        "id": "5276",
        "title": "Die Entdeckung der Planetenbewegungen",
        "folder": "die-entdeckung-der-planetenbewegungen-5276"
      },
      {
        "id": "5277",
        "title": "Die Erde",
        "folder": "die-erde-5277"
      },
      {
        "id": "5279",
        "title": "Die Halbwertszeit",
        "folder": "die-halbwertszeit-5279"
      },
      {
        "id": "5280",
        "title": "Die Kernfusion",
        "folder": "die-kernfusion-5280"
      },
      {
        "id": "5281",
        "title": "Die Kernspaltung",
        "folder": "die-kernspaltung-5281"
      },
      {
        "id": "5282",
        "title": "Die Lichtgeschwindigkeit",
        "folder": "die-lichtgeschwindigkeit-5282"
      },
      { id: "5283", title: "Die Röntgenstrahlung", folder: "die-rontgenstrahlung-5283" },
      {
        "id": "5284",
        "title": "Die Sonne",
        "folder": "die-sonne-2-5284"
      },
      {
        "id": "5285",
        "title": "Die Totalreflexion",
        "folder": "die-totalreflexion-5285"
      },
      {
        "id": "5286",
        "title": "Die Venus",
        "folder": "die-venus-5286"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nichtmetalle&t=3752"
  },
  "chemische-reaktionen": {
    "slug": "chemische-reaktionen",
    "title": "Chemische Reaktionen & Energetik",
    "category": "Reaktionslehre & Physikalische Chemie",
    "shortDesc": "Exotherme und endotherme Reaktionen, Aktivierungsenergie, Katalysatoren, Säuren, Basen und pH-Wert.",
    "longDesc": "Bei chemischen Reaktionen werden chemische Bindungen aufgebrochen und neue Bindungen geknüpft. Dabei wird Energie freigesetzt (exotherm) oder aufgenommen (endotherm). Säuren und Basen spielen in Natur, Alltag und Technik eine zentrale Rolle.",
    "keyPoints": [
      "Exotherm vs. Endotherm: Exotherme Reaktionen geben Wärmeenergie an die Umgebung ab (\\(\\Delta H < 0\\)); endotherme nehmen Wärme auf (\\(\\Delta H > 0\\))",
      "Aktivierungsenergie & Katalysator: Ein Katalysator senkt die benötigte Aktivierungsenergie und beschleunigt die Reaktion, ohne selbst verbraucht zu werden",
      "Säuren & Basen (Brønsted): Säuren sind Protonendonatoren (\\(H^+\\)-Abgeber); Basen sind Protonenakzeptoren (\\(H^+\\)-Aufnehmer)",
      "pH-Wert-Skala: 0 bis <7 = sauer | 7 = neutral (reines Wasser) | >7 bis 14 = basisch/alkalisch",
      "Neutralisation: Säure + Base ➔ Salz + Wasser (z. B. \\(\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}\\))"
    ],
    "exercises": [
      { id: "273", title: "Trägheit", folder: "kraft-273" },
      { id: "274", title: "Kraft", folder: "arbeit-energie-und-leistung-274" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=chemische+reaktionen&t=3752"
  },
  "wasser-und-wasserchemie": {
    "slug": "wasser-und-wasserchemie",
    "title": "Wasser & Wasserchemie",
    "category": "Reaktionslehre & Physikalische Chemie",
    "shortDesc": "Dipolmolekül, Wasserstoffbrückenbindungen, Dichteanomalie, Wasserhärte und Trinkwasseraufbereitung.",
    "longDesc": "Wasser (\\(\\text{H}_2\\text{O}\\)) ist das Lebenselixier unseres Planeten. Seine einzigartigen physikalischen und chemischen Eigenschaften beruhen auf dem polaren Bau des Wassermoleküls und den daraus resultierenden Wasserstoffbrückenbindungen.",
    "keyPoints": [
      "Gewinkeltes Dipolmolekül: Hohe Elektronegativität des Sauerstoffs erzeugt Partialladungen (\\(\\delta^-\\) am Sauerstoff, \\(\\delta^+\\) an den Wasserstoffen)",
      "Wasserstoffbrücken: Verantwortlich für den hohen Siedepunkt, die Oberflächenspannung und die hohe Wärmekapazität von Wasser",
      "Dichteanomalie: Wasser hat seine maximale Dichte bei \\(4^\\circ\\text{C}\\) (flüssig dichter als Eis)",
      "Wasserhärte: Gehalt an gelösten Calcium- und Magnesium-Ionen (\\(\\text{Ca}^{2+}, \\text{Mg}^{2+}\\))"
    ],
    "exercises": [],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wasserchemie&t=3752"
  },
  "organische-chemie": {
    "slug": "organische-chemie",
    "title": "Organische Chemie & Kohlenwasserstoffe",
    "category": "Organische & Biochemie",
    "shortDesc": "Alkane, Alkene, Alkine, Alkohole, Carbonsäuren, Kunststoffe, Polymere und Erdölverarbeitung.",
    "longDesc": "Die organische Chemie ist die Chemie der Kohlenstoffverbindungen. Kohlenstoffatome können stabile Ketten, Ringe und dreidimensionale Gerüste bilden, was zu einer unendlichen Vielfalt organischer Moleküle führt.",
    "keyPoints": [
      "Kohlenwasserstoffe: Alkane (Einfachbindung, \\(\\text{C}_n\\text{H}_{2n+2}\\)), Alkene (Doppelbindung), Alkine (Dreifachbindung)",
      "Funktionelle Gruppen: Alkohole (\\(-\\text{OH}\\)), Carbonsäuren (\\(-\\text{COOH}\\)), Ester (Fruchtaromen)",
      "Erdöl & Fraktionierte Destillation: Trennung des Rohöls in Benzin, Diesel, Kerosin, Heizöl und Bitumen",
      "Kunststoffe & Polymerisation: Monomere verknüpfen sich zu Makromolekülen (Thermoplaste, Duroplaste, Elastomere)"
    ],
    "exercises": [],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=organische+chemie&t=3752"
  },
  "biochemie-und-umwelt": {
    "slug": "biochemie-und-umwelt",
    "title": "Biochemie & Umweltchemie",
    "category": "Organische & Biochemie",
    "shortDesc": "Kohlenhydrate, Fette, Proteine, Enzyme, Treibhauseffekt, Saurer Regen und Recycling.",
    "longDesc": "Die Biochemie erforscht die chemischen Vorgänge in lebenden Organismen. Die Umweltchemie untersucht Stoffkreisläufe, Schadstoffe und nachhaltige Lösungen für Recycling und Klimaschutz.",
    "keyPoints": [
      "Grundnährstoffe: Kohlenhydrate (Glukose, Stärke), Lipide/Fette (Glycerin + Fettsäuren), Proteine (Aminosäureketten)",
      "Enzyme: Biokatalysatoren mit Schlüssel-Schloss-Prinzip für Stoffwechselprozesse",
      "Treibhauseffekt: Treibhausgase (\\(\\text{CO}_2, \\text{CH}_4, \\text{N}_2\\text{O}\\)) absorbieren Wärmestrahlung der Erde",
      "Saurer Regen: Verbrennungsgase (\\(\\text{SO}_2, \\text{NO}_x\\)) reagieren mit Regenwasser zu Säuren"
    ],
    "exercises": [],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=umweltchemie&t=3752"
  },
  "escape-room-chemie": {
    "slug": "escape-room-chemie",
    "title": "Escape Room Chemie",
    "category": "Organische & Biochemie",
    "shortDesc": "Löse knifflige chemische Labor-Rätsel, entziffere Periodensystem-Codes und meistere den Escape Room!",
    "longDesc": "Ein interaktiver digitaler Escape Room für den Chemieunterricht. Wende dein Wissen über Elemente, Reaktionen, Säuren und das Periodensystem an.",
    "keyPoints": [
      "Halte Periodensystem, Stift und Papier für Codes bereit",
      "Kombiniere Fachwissen aus Reaktionen, Metallen und Stoffeigenschaften",
      "Ideal zur spielerischen Wiederholung vor Schularbeiten"
    ],
    "exercises": [
      {
        "id": "5280",
        "title": "Die Kernfusion",
        "folder": "die-kernfusion-5280"
      },
      {
        "id": "5250",
        "title": "Das Elektrische Feld",
        "folder": "das-elektrische-feld-5250"
      },
      {
        "id": "280",
        "title": "Aufbau der Materie",
        "folder": "aufbau-der-materie-280"
      },
      {
        "id": "281",
        "title": "Das Periodensystem der Elemente",
        "folder": "das-periodensystem-der-elemente-281"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=escape+room+chemie&t=3752"
  }
};
