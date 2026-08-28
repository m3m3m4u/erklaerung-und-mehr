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
    "longDesc": "Die Chemie ist die Naturwissenschaft von den Stoffen, ihren Eigenschaften und den Reaktionen, bei denen neue Stoffe mit veränderten Eigenschaften entstehen. Vom Aufbau der Atome bis zu physikalischen Trennmethoden (Filtrieren, Destillieren) bilden diese Grundlagen den Einstieg in die Stoff- und Teilchenebene.",
    "keyPoints": [
      "Reinstoffe (Elemente & Verbindungen) vs. Gemische (homogen: Lösungen/Legierungen; heterogen: Suspensionen/Emulsionen)",
      "Trennverfahren: Filtration, Destillation, Chromatographie, Zentrifugieren, Sedimentieren",
      "Bohrsches Atommodell: Atomkern mit Protonen (+) und Neutronen (neutral), Elektronenhülle (-) mit Energiestufen/Schalen",
      "Periodensystem der Elemente (PSE): Geordnet nach Kernladungszahl; Hauptgruppen besitzen gleiche Valenzelektronenanzahl"
    ],
    "exercises": [
      {
        "id": "593",
        "title": "Grundlagen der Chemie",
        "folder": "lerninhalt-grundlagen-der-chemie-593"
      },
      {
        "id": "601",
        "title": "Die Sprache der Chemie",
        "folder": "lerninhalt-die-sprache-der-chemie-601"
      },
      {
        "id": "327",
        "title": "Stoffgemische, Reinstoffe und Elemente",
        "folder": "stoffgemische-reinstoffe-und-elemente-327"
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
      },
      {
        "id": "282",
        "title": "Atombindungen",
        "folder": "atombindungen-282"
      },
      {
        "id": "320",
        "title": "Geschichte der Chemie",
        "folder": "geschichte-der-chemie-320"
      },
      {
        "id": "5354",
        "title": "Die Geschichte der Chemie",
        "folder": "die-geschichte-der-chemie-5354"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=chemie+grundlagen&t=3752"
  },
  "metalle": {
    "slug": "metalle",
    "title": "Metalle, Legierungen & Redoxreaktionen",
    "category": "Allgemeine & Anorganische Chemie",
    "shortDesc": "Alkalimetalle, Erdalkalimetalle, Übergangsmetalle, Legierungen, Korrosion und Eigenschaften.",
    "longDesc": "Metalle zeichnen sich durch metallischen Glanz, hohe elektrische und thermische Leitfähigkeit sowie Verformbarkeit aus. Bei Redoxreaktionen geben Metalle Elektronen ab (Oxidation), was für die Metallgewinnung und Korrosion grundlegend ist.",
    "keyPoints": [
      "Typische Metalleigenschaften: Gute Leitfähigkeit für Strom und Wärme, Duktilität (Verformbarkeit), Metallglanz",
      "Metallbindung: Positiv geladene Metall-Atomrümpfe in einem frei beweglichen Elektronengas",
      "Wichtige Metalle: Eisen/Stahl, Kupfer, Aluminium, Zink, Gold, Silber, Alkalimetalle",
      "Legierungen: Mischungen aus Metallen mit verbesserten Werkstoffeigenschaften (z. B. Bronze = Cu+Sn, Messing = Cu+Zn, Edelstahl)",
      "Redoxreaktion: Oxidation = Elektronenabgabe | Reduktion = Elektronenaufnahme"
    ],
    "exercises": [
      {
        "id": "571",
        "title": "Legierungs- und Begleitelemente",
        "folder": "lerninhalt-legierungs-und-begleitelemente-571"
      },
      {
        "id": "572",
        "title": "Nichteisenmetalle",
        "folder": "lerninhalt-nichteisenmetalle-572"
      },
      {
        "id": "699",
        "title": "Metalle",
        "folder": "studypoint-worter-markieren-metalle-699"
      },
      {
        "id": "5136",
        "title": "Alkalimetalle",
        "folder": "alkalimetalle-5136"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=chemie+metalle&t=3752"
  },
  "nichtmetalle": {
    "slug": "nichtmetalle",
    "title": "Nichtmetalle, Halogene & Edelgase",
    "category": "Allgemeine & Anorganische Chemie",
    "shortDesc": "Wasserstoff, Kohlenstoff, Stickstoff, Sauerstoff, Halogene und Edelgase im Periodensystem.",
    "longDesc": "Nichtmetalle stehen im Periodensystem rechts oben und zeichnen sich durch hohe Elektronegativität aus. Sie bilden untereinander kovalente Bindungen (Elektronenpaarbindungen) und reagieren mit Metallen zu Salzen.",
    "keyPoints": [
      "Wasserstoff (H): Häufigstes Element im Universum, gasförmig (H2), stark reduzierend",
      "Kohlenstoff (C), Stickstoff (N), Sauerstoff (O): Essenzielle Elemente aller lebenden Organismen",
      "Halogene (Fluor, Chlor, Brom, Iod): Sehr reaktive Salzbildner der 7. Hauptgruppe",
      "Edelgase (Helium, Neon, Argon...): Reaktionsträge Elemente mit voll besetzter Außenschale (Oktettregel)"
    ],
    "exercises": [
      {
        "id": "5165",
        "title": "Halogene",
        "folder": "halogene-5165"
      },
      {
        "id": "1128",
        "title": "Wasserstoff",
        "folder": "wasserstoff-1128"
      },
      {
        "id": "1154",
        "title": "Kohlenstoff",
        "folder": "kohlenstoff-1154"
      },
      {
        "id": "1155",
        "title": "Stickstoff",
        "folder": "stickstoff-1155"
      },
      {
        "id": "1156",
        "title": "Sauerstoff",
        "folder": "sauerstoff-1156"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=chemie+nichtmetalle&t=3752"
  },
  "chemische-reaktionen": {
    "slug": "chemische-reaktionen",
    "title": "Chemische Reaktionen & Energetik",
    "category": "Reaktionslehre & Physikalische Chemie",
    "shortDesc": "Reaktionsgleichungen, exotherm und endotherm, Aktivierungsenergie, Katalysatoren, Säuren und Basen.",
    "longDesc": "Bei einer chemischen Reaktion werden chemische Bindungen aufgebrochen und neue geknüpft. Dabei gilt der Massenerhaltungssatz nach Lavoisier. Reaktionen verlaufen entweder unter Wärmeabgabe (exotherm) oder Wärmeaufnahme (endotherm).",
    "keyPoints": [
      "Massenerhaltung: Bei Reaktionen bleibt die Gesamtmasse der Reaktionspartner konstant",
      "Exotherm vs. Endotherm: Exotherme Reaktionen setzen Energie frei (ΔH < 0), endotherme benötigen ständige Energiezufuhr (ΔH > 0)",
      "Aktivierungsenergie: Mindestenergie zur Auslösung einer Reaktion; Katalysatoren senken diese Barriere",
      "Säuren & Basen: Säuren sind Protonendonatoren (geben H+ ab), Basen sind Protonenakzeptoren (nehmen H+ auf)"
    ],
    "exercises": [
      {
        "id": "5144",
        "title": "Chemische Reaktionen",
        "folder": "chemische-reaktionen-5144"
      },
      {
        "id": "340",
        "title": "Säuren, Basen und Salze",
        "folder": "sauren-basen-und-salze-340"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=chemische+reaktionen&t=3752"
  },
  "wasser-und-wasserchemie": {
    "slug": "wasser-und-wasserchemie",
    "title": "Wasser, Lösungen & Säuren/Basen",
    "category": "Reaktionslehre & Physikalische Chemie",
    "shortDesc": "Dipolmolekül Wasser, Wasserstoffbrücken, Dichteanomalie, pH-Wert und Neutralisation.",
    "longDesc": "Wasser (H2O) ist durch seine polare Elektronenpaarbindung und gewinkelte Molekülgeometrie ein Dipol. Die daraus resultierenden Wasserstoffbrückenbindungen verleihen Wasser einzigartige Eigenschaften wie die Dichteanomalie und eine hohe Oberflächenspannung.",
    "keyPoints": [
      "Dipolcharakter & H-Brücken: Hohe Siedetemperatur und Oberflächenspannung",
      "Dichteanomalie: Größte Dichte bei 4 °C (Eis schwimmt auf flüssigem Wasser)",
      "pH-Wert-Skala: 0 bis 14 (pH < 7 sauer, pH = 7 neutral, pH > 7 basisch/alkalisch)",
      "Neutralisationsreaktion: Säure + Base ➔ Salz + Wasser"
    ],
    "exercises": [
      {
        "id": "1149",
        "title": "Wasserstoff und Reaktionen",
        "folder": "wasserstoff-2-1149"
      },
      {
        "id": "5182",
        "title": "Wasserstoffgas",
        "folder": "wasserstoffgas-5182"
      },
      {
        "id": "5275",
        "title": "Die Anomalie des Wassers",
        "folder": "die-anomalie-des-wassers-5275"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wasser+chemie&t=3752"
  },
  "organische-chemie": {
    "slug": "organische-chemie",
    "title": "Organische Chemie & Kohlenwasserstoffe",
    "category": "Organische & Biochemie",
    "shortDesc": "Alkane, Alkene, Alkine, Alkohole, Carbonsäuren, Kunststoffe und fossile Brennstoffe.",
    "longDesc": "Die organische Chemie befasst sich mit den Verbindungen des Kohlenstoffs. Durch die Fähigkeit des Kohlenstoffs, stabile Ketten und Ringe mit Einfach-, Doppel- und Dreifachbindungen zu bilden, existiert eine enorme Vielfalt organischer Moleküle.",
    "keyPoints": [
      "Homologe Reihe der Alkane (CnH2n+2): Methan, Ethan, Propan, Butan etc.",
      "Ungesättigte Kohlenwasserstoffe: Alkene (C=C Doppelbindung), Alkine (C≡C Dreifachbindung)",
      "Funktionelle Gruppen: Hydroxylgruppe (-OH in Alkoholen), Carboxylgruppe (-COOH in Carbonsäuren)",
      "Fossile Brennstoffe & Kunststoffe: Erdölraffination, Polymerisation (PE, PP, PVC)"
    ],
    "exercises": [
      {
        "id": "5137",
        "title": "Alkohole",
        "folder": "alkohole-5137"
      },
      {
        "id": "5170",
        "title": "Kohlenwasserstoffe",
        "folder": "kohlenwasserstoffe-5170"
      },
      {
        "id": "5163",
        "title": "Fluorchlorkohlenwasserstoff",
        "folder": "fluorchlorkohlenwasserstoff-5163"
      },
      {
        "id": "5168",
        "title": "Kohlenstoffdioxid",
        "folder": "kohlenstoffdioxid-5168"
      },
      {
        "id": "5169",
        "title": "Kohlenstoffmonoxid",
        "folder": "kohlenstoffmonoxid-5169"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=organische+chemie&t=3752"
  },
  "biochemie-und-umwelt": {
    "slug": "biochemie-und-umwelt",
    "title": "Biochemie & Umweltchemie",
    "category": "Organische & Biochemie",
    "shortDesc": "Kohlenhydrate, Fette, Proteine, Enzyme, Treibhauseffekt, Ozonloch und Recycling.",
    "longDesc": "Die Biochemie untersucht die chemischen Prozesse in Lebewesen (Makromoleküle des Lebens). Die Umweltchemie analysiert Stoffkreisläufe, Schadstoffe und chemische Vorgänge in Atmosphäre, Boden und Gewässern.",
    "keyPoints": [
      "Makromoleküle: Kohlenhydrate (Einfach-, Zweifach-, Vielfachzucker), Lipide (Fette/Öle), Proteine (Aminosäureketten)",
      "Enzyme als Biokatalysatoren: Schlüssel-Schloss-Prinzip, pH- und Temperaturoptimum",
      "Atmosphärenchemie: Treibhauseffekt (CO2, CH4, Wasserdampf), FCKW und Ozonabbau",
      "Kreislaufwirtschaft & Recycling: Kunststoffe, Abwasserreinigung und Schadstofffilterung"
    ],
    "exercises": [
      {
        "id": "921",
        "title": "Kohlenhydrate",
        "folder": "kohlenhydrate-921"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=biochemie+umweltchemie&t=3752"
  },
  "escape-room-chemie": {
    "slug": "escape-room-chemie",
    "title": "Escape Room Chemie",
    "category": "Allgemeine & Anorganische Chemie",
    "shortDesc": "Interaktive Chemie-Rätsel und Escape-Game-Aufgaben zu Elementen und Stoffen.",
    "longDesc": "Im interaktiven Chemie Escape Room lösen Schülerinnen und Schüler spannende Rätsel rund um Atombau, das Periodensystem der Elemente, Reaktionen und Eigenschaften chemischer Stoffe.",
    "keyPoints": [
      "Kombinatorik & Wissenstransfer zu chemischen Bindungen und Atombau",
      "Zuordnungs- und Entschlüsselungsaufgaben im interaktiven Format",
      "Festigung von Fachbegriffen und Symbolen des Periodensystems"
    ],
    "exercises": [
      {
        "id": "3192",
        "title": "Escape Room 'Grundlagen der Chemie'",
        "folder": "escape-room-quot-grundlagen-der-chemie-quot-3192"
      },
      {
        "id": "3193",
        "title": "Escape Room 'Nichtmetalle'",
        "folder": "escape-room-quot-nichtmetalle-quot-3193"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=chemie+escape+room&t=3752"
  }
};
