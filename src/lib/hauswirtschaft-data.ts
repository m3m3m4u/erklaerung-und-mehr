export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface HauswirtschaftTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const hauswirtschaftCategories = [
  "Ernährung & Lebensmittel",
  "Küchenhygiene & Garverfahren",
  "Haushaltsmanagement & Finanzen",
  "Nachhaltigkeit & Textilpflege"
];

export const hauswirtschaftTopics: Record<string, HauswirtschaftTopic> = {
  "ernaehrungspyramide-und-naehrstoffe": {
    slug: "ernaehrungspyramide-und-naehrstoffe",
    title: "Die Ernährungspyramide & Nährstoffkunde",
    category: "Ernährung & Lebensmittel",
    shortDesc: "Baustoffe (Proteine), Betriebsstoffe (Kohlenhydrate, Fette), Vitamine, Mineralstoffe und die 10 DGE-Regeln.",
    longDesc: "Eine ausgewogene Ernährung liefert dem menschlichen Körper alle notwendigen Nährstoffe, Vitamine und Energie. Die Ernährungspyramide veranschaulicht in sechs Stufen, welche Lebensmittelgruppen reichlich, mäßig oder sparsam verzehrt werden sollten.",
    keyPoints: [
      "Stufe 1 (Basis): Reichlich kalorienfreie Getränke (mindestens 1,5 bis 2 Liter Wasser oder ungesüßte Tees täglich)",
      "Stufe 2: Obst und Gemüse ('5 Portionen am Tag' – reich an Vitaminen, Mineralstoffen und Ballaststoffen)",
      "Stufe 3: Getreideprodukte & Beilagen (Vollkornbrot, Haferflocken, Kartoffeln, Reis – liefern komplexe Kohlenhydrate)",
      "Stufe 4: Milch, Milchprodukte (Calcium für Knochen) sowie mäßig Fisch, Fleisch und Eier (hochwertiges Eiweiß und Eisen)",
      "Stufe 5 & 6 (Spitze): Fette/Öle (pflanzliche Öle bevorzugen) und sparsam Süßigkeiten, Knabbereien und Snacks",
      "Makronährstoffe: Kohlenhydrate (4,1 kcal/g), Proteine (4,1 kcal/g), Fette (9,3 kcal/g)"
    ],
    exercises: [
      { id: "2665", title: "Haushaltsführung & Lebensmittel", folder: "haushaltsbuchfuhrung-und-kostenkontrolle-2665" },
      { id: "2656", title: "Energie & Ressourcen im Haushalt", folder: "energie-und-wassersparen-im-haushalt-2656" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=ernaehrungspyramide+hauswirtschaft&t=3752"
  },
  "kuechenhygiene-und-lebensmittelsicherheit": {
    slug: "kuechenhygiene-und-lebensmittelsicherheit",
    title: "Küchenhygiene & Lebensmittelsicherheit",
    category: "Küchenhygiene & Garverfahren",
    shortDesc: "Kreuzkontamination, Händehygiene, Kühlkette, Mindesthaltbarkeitsdatum (MHD) vs. Verbrauchsdatum.",
    longDesc: "Hygiene in der Küche schützt vor Lebensmittelinfektionen durch Salmonellen, Campylobacter und Schimmelpilze. Die strikte Trennung von rohen und verzehrfertigen Lebensmitteln ist eine der wichtigsten Grundregeln der modernen Lebensmittelverarbeitung.",
    keyPoints: [
      "Persönliche Hygiene: Vor Arbeitsbeginn Hände 30 Sekunden gründlich waschen, Schmuck ablegen, lange Haare zusammenbinden",
      "Kreuzkontamination verhindern: Für rohes Fleisch/Geflügel separate Schneidebretter (z.B. rot) und Messer verwenden – niemals dasselbe Brett für Salat nutzen!",
      "Kühlkette & Lagertemperaturen: Fleisch und Milchprodukte bei maximal +4 °C bis +7 °C kühlen; Gefriergut bei -18 °C lagern",
      "MHD vs. Verbrauchsdatum: Mindesthaltbarkeitsdatum ('mindestens haltbar bis') = oft noch lange genießbar (Sinnesprüfung: Sehen, Riechen, Schmecken); Verbrauchsdatum ('zu verbrauchen bis') = nach Ablauf striktes Entsorgungsgebot bei leicht verderblicher Ware (z.B. Hackfleisch)",
      "Durchgaren: Fleisch, Geflügel und Eier auf mindestens 70 °C Kerntemperatur für mindestens 2 Minuten erhitzen"
    ],
    exercises: [
      { id: "2656", title: "Energie- und Wassersparen im Haushalt", folder: "energie-und-wassersparen-im-haushalt-2656" },
      { id: "2665", title: "Haushaltsbuchführung und Kostenkontrolle", folder: "haushaltsbuchfuhrung-und-kostenkontrolle-2665" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=kuechenhygiene+lebensmittel&t=3752"
  },
  "haushaltsbudget-und-finanzen": {
    slug: "haushaltsbudget-und-finanzen",
    title: "Haushaltsbudget, Finanzen & Konsum",
    category: "Haushaltsmanagement & Finanzen",
    shortDesc: "Haushaltsbuch, Fixkosten vs. variable Kosten, Schuldenfallen und bewusster Konsum.",
    longDesc: "Der verantwortungsvolle Umgang mit Geld ist eine lebenspraktische Kernkompetenz. Ein Haushaltsplan verschafft den Überblick über regelmäßige Einnahmen und Ausgaben und beugt der Überschuldung vor.",
    keyPoints: [
      "Einnahmen-Ausgaben-Rechnung: Nettoeinkommen abzüglich aller monatlichen Gesamtausgaben ergibt den monatlichen Sparbetrag",
      "Fixkosten: Regelmäßige, vertraglich festgelegte Zahlungen (z.B. Miete, Strom, Internet, Versicherungen, Fahrkarten)",
      "Variable Kosten: Schwankende Ausgaben (z.B. Lebensmittel, Kleidung, Freizeit, Restaurantbesuche)",
      "Vermeidung von Schuldenfallen: Vorsicht bei 'Buy Now, Pay Later', Ratenkrediten, Dispokrediten und teuren Smartphone-Verträgen",
      "Notgroschen: Mindestens 2–3 Monatsausgaben als eiserne Reserve auf einem Tagesgeldkonto zurücklegen"
    ],
    exercises: [
      { id: "2666", title: "Haushaltsbudget – Einnahmen & Ausgaben planen", folder: "haushaltsbudget-einnahmen-und-ausgaben-planen-2666" },
      { id: "2665", title: "Haushaltsbuchführung & Kostenkontrolle", folder: "haushaltsbuchfuhrung-und-kostenkontrolle-2665" },
      { id: "2667", title: "Haushaltsplanung für Familien", folder: "haushaltsplanung-fur-groesfamilien-2667" },
      { id: "3542", title: "Haushaltsdefizit verstehen", folder: "haushaltsdefizit-3542" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=haushaltsbuch+finanzen&t=3752"
  },
  "nachhaltiger-haushalt-und-textilpflege": {
    slug: "nachhaltiger-haushalt-und-textilpflege",
    title: "Nachhaltiger Haushalt & Textilpflege",
    category: "Nachhaltigkeit & Textilpflege",
    shortDesc: "Mülltrennung, Energiesparen, Pflegesymbole bei Kleidung und Waschprogramme.",
    longDesc: "Ressourcenschonung beginnt im eigenen Haushalt: Durch Mülltrennung, sparsamen Umgang mit Strom und Wasser sowie die richtige Pflege von Textilien werden Umwelt und Geldbeutel nachhaltig geschützt.",
    keyPoints: [
      "Wertstoffkreislauf & Mülltrennung: Gelber Sack/Tonne (Verpackungen aus Kunststoff, Metall), Papiertonne, Biomüll, Restmüll und Altglas (nach Farben sortiert)",
      "Energiespartipps: Eco-Programme bei Waschmaschine und Geschirrspüler, Deckel beim Kochen auf den Topf setzen, Stoßlüften statt Kippfenster",
      "Waschsymbole verstehen: Waschzuber (Temperatur/Schongang), Dreieck (Bleichen), Quadrat mit Kreis (Trockner), Bügeleisen (Bügeltemperatur/Punkte)",
      "Waschmitteldosierung: Abhängig von Wasserhärtebereich (weich, mittel, hart) und Verschmutzungsgrad; Vollwaschmittel vs. Colorwaschmittel vs. Feinwaschmittel",
      "Food Waste vermeiden: Einkaufszettel schreiben, Reste kreativ verwerten ('Resteküche'), richtige Vorratshaltung"
    ],
    exercises: [
      { id: "2656", title: "Energie- & Wassersparen im Haushalt", folder: "energie-und-wassersparen-im-haushalt-2656" },
      { id: "2665", title: "Nachhaltige Haushaltsführung", folder: "haushaltsbuchfuhrung-und-kostenkontrolle-2665" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=nachhaltigkeit+haushalt&t=3752"
  }
};
