export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface KlimaTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const klimaCategories: string[] = [
  "Die 17 Nachhaltigkeitsziele (SDGs)",
  "Klimawandel & Klimazonen",
  "Umwelt, Ökosysteme & Nachhaltigkeit"
];

export const klimaTopics: Record<string, KlimaTopic> = {
  "nachhaltige-entwicklungsziele-sdgs": {
    "slug": "nachhaltige-entwicklungsziele-sdgs",
    "title": "Die 17 Nachhaltigkeitsziele (Sustainable Development Goals)",
    "category": "Die 17 Nachhaltigkeitsziele (SDGs)",
    "shortDesc": "Die 17 globalen Ziele der Vereinten Nationen für eine soziale, ökologische und gerechte Zukunft bis 2030.",
    "longDesc": "Die Sustainable Development Goals (SDGs) der Vereinten Nationen sind ein weltweiter Handlungsrahmen zur Lösung der drängendsten Herausforderungen unserer Zeit: Von der Bekämpfung von Hunger und Armut über saubere Energie und faire Arbeit bis hin zu Meeresschutz und weltweitem Frieden.",
    "keyPoints": [
      "17 Globale Ziele der Agenda 2030: Verabschiedet 2015 von allen 193 Mitgliedsstaaten der Vereinten Nationen",
      "Drei Dimensionen der Nachhaltigkeit: Ausgewogene Verbindung von ökologischen, ökonomischen und sozialen Zielen",
      "Kernprinzip 'Leave no one behind': Schwächste und benachteiligte Gruppen stehen im Fokus globaler Entwicklung",
      "Schwerpunkte Soziales & Gerechtigkeit: Beendigung von Armut (SDG 1) und Hunger (SDG 2), hochwertige Bildung (SDG 4), Geschlechtergleichstellung (SDG 5)",
      "Planetare Grenzen & Ressourcenschutz: Saubere Energie (SDG 7), nachhaltiger Konsum (SDG 12), Klimaschutz (SDG 13) und Artenschutz an Land und im Wasser (SDG 14 & 15)"
    ],
    "exercises": [
      { id: "4502", title: "Global Goal 1: Keine Armut – Leben in Würde sichern", folder: "wenn-die-erde-bebt-warum-sie-wackelt-4-4502" },
      { id: "4478", title: "Global Goal 2 - Kein Hunger – Ernährung sichern, Hunger stoppen", folder: "global-goal-2-kein-hunger-ernahrung-sichern-hunger-stoppen-4478" },
      { id: "4479", title: "Global Goal 4 - Gute Bildung – Wissen für jede Lebensreise", folder: "global-goal-4-gute-bildung-wissen-fur-jede-lebensreise-4479" },
      { id: "4480", title: "Global Goal 5 - Gleichstellung leben – Frauenrechte für alle sichern", folder: "global-goal-5-gleichstellung-leben-frauenrechte-fur-alle-sichern-4480" },
      { id: "4501", title: "Global Goal 6: Sauberes Wasser – für Gesundheit und Nachhaltigkeit", folder: "wenn-die-erde-bebt-warum-sie-wackelt-3-4501" },
      { id: "4481", title: "Global Goal 7 - Saubere Energie – Erneuerbar für unsere Zukunft", folder: "global-goal-7-saubere-energie-erneuerbar-fur-unsere-zukunft-4481" },
      { id: "4482", title: "Global Goal 8 - Gute Arbeit – Wachstum und faire Chancen", folder: "global-goal-8-gute-arbeit-wachstum-und-faire-chancen-4482" },
      { id: "4483", title: "Global Goal 9 - Innovation leben – Industrie und Technik fördern", folder: "global-goal-9-innovation-leben-industrie-und-technik-fordern-4483" },
      { id: "4484", title: "Global Goal 10 - Weniger Ungleichheit – Chancen gerecht verteilen", folder: "global-goal-10-weniger-ungleichheit-chancen-gerecht-verteilen-4484" },
      { id: "4485", title: "Global Goal 11 - Lebendige Städte – Zukunft in urbanen Räumen", folder: "global-goal-11-lebendige-stadte-zukunft-in-urbanen-raumen-4485" },
      { id: "4486", title: "Global Goal 12 - Nachhaltiger Konsum – Produktion im Einklang mit Natur", folder: "global-goal-12-nachhaltiger-konsum-produktion-im-einklang-mit-natur-4486" },
      { id: "4487", title: "Global Goal 13 - Klimaschutz jetzt – Klimawandel stoppen, Zukunft sichern", folder: "global-goal-13-klimaschutz-jetzt-klimawandel-stoppen-zukunft-sichern-4487" },
      { id: "4488", title: "Global Goal 14 - Leben im Wasser – Ozeane schützen, Arten retten", folder: "global-goal-14-leben-im-wasser-ozeane-schutzen-arten-retten-4488" },
      { id: "4489", title: "Global Goal 15 - Natur bewahren – Wälder und Arten schützen", folder: "global-goal-15-natur-bewahren-walder-und-arten-schutzen-4489" },
      { id: "4490", title: "Global Goal 16 - Frieden leben – Gerechtigkeit und Sicherheit fördern", folder: "global-goal-16-frieden-leben-gerechtigkeit-und-sicherheit-fordern-4490" },
      { id: "4491", title: "Global Goal 17 - Partnerschaften stärken – Gemeinsam für nachhaltige Zukunft", folder: "global-goal-17-partnerschaften-starken-gemeinsam-fur-nachhaltige-zukunft-4491" }
    ],
    "worksheetLink": "https://eduki.com/de/1454278"
  },
  "klimawandel-und-klimazonen": {
    "slug": "klimawandel-und-klimazonen",
    "title": "Klimawandel, Treibhauseffekt & Klimazonen",
    "category": "Klimawandel & Klimazonen",
    "shortDesc": "Grundlagen des Klimasystems, Treibhauseffekt, globale Erwärmung, Klimazonen der Erde und Extremwetterereignisse.",
    "longDesc": "Das Klima prägt das Leben auf unserem Planeten. Wie entstehen Klimazonen, welche Rolle spielt der natürliche und anthropogene Treibhauseffekt und welche Folgen hat der globale Temperaturanstieg für Mensch und Natur?",
    "keyPoints": [
      "Wetter vs. Klima: Wetter ist der kurzfristige Zustand der Atmosphäre; Klima beschreibt den statistischen Zustand über mindestens 30 Jahre",
      "Treibhauseffekt: Treibhausgase (CO2, Methan, Wasserdampf) absorbieren Wärmestrahlung der Erde – menschliche Emissionen verstärken den Effekt",
      "Klimazonen: Tropen, Subtropen, gemäßigte Zone, subpolare und polare Zone mit ihren typischen Vegetationszonen",
      "Kipppunkte im Klimasystem: Schmelzen der Eisschilde, Auftauen der Permafrostböden, Verlangsamung der Meeresströmungen",
      "Anpassung & Minderung: Ausbau erneuerbarer Energien, Aufforstung, Energieeffizienz und klimaresistente Städte"
    ],
    "exercises": [
      { id: "757", title: "Klima und Wetter", folder: "klima-und-wetter-757" },
      { id: "758", title: "Die polare Klimazone", folder: "die-polare-klimazone-758" },
      { id: "759", title: "Die Gemäßigte Klimazone", folder: "die-gemaesigte-klimazone-759" },
      { id: "760", title: "Die subtropische Klimazone", folder: "die-subtropische-klimazone-760" },
      { id: "761", title: "Die tropische Klimazone", folder: "die-tropische-klimazone-761" },
      { id: "1989", title: "Das alpine Klima", folder: "das-alpine-klima-1989" },
      { id: "1990", title: "Das atlantische Klima", folder: "das-atlantische-klima-1990" },
      { id: "1991", title: "Das illyrische Klima", folder: "das-illyrische-klima-1991" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Klima+Klimawandel+Geographie&t=3752"
  },
  "umwelt-und-nachhaltigkeit": {
    "slug": "umwelt-und-nachhaltigkeit",
    "title": "Umwelt, Ressourcen & Ökologischer Fußabdruck",
    "category": "Umwelt, Ökosysteme & Nachhaltigkeit",
    "shortDesc": "Kreislaufwirtschaft, Müllvermeidung, Plastik in den Ozeanen, Biodiversität und nachhaltiger Lebensstil im Alltag.",
    "longDesc": "Ressourcenschonung und Umweltschutz sind die Schlüssel zu einer lebenswerten Zukunft. Wie können wir Abfall reduzieren, Energie sparen, Ökosysteme schützen und unseren persönlichen ökologischen Fußabdruck verkleinern?",
    "keyPoints": [
      "Ökologischer Fußabdruck: Messgröße für den Ressourcenverbrauch eines Menschen im Vergleich zur Biokapazität der Erde (Earth Overshoot Day)",
      "Kreislaufwirtschaft (Cradle to Cradle): Abfälle vermeiden, Produkte reparieren, wiederverwenden und Wertstoffe recyceln",
      "Plastikmüll & Mikroplastik: Gefahren für marine Ökosysteme, Nahrungsketten und Trinkwasser",
      "Erneuerbare Energien: Sonnenenergie, Windkraft, Wasserkraft, Erdwärme und Biomasse als Alternativen zu fossilen Brennstoffen",
      "Biodiversität: Artenvielfalt stabilisiert Ökosysteme und sichert essenzielle Ökosystemdienstleistungen (z. B. Bestäubung, Bodenfruchtbarkeit)"
    ],
    "exercises": [
      { id: "2862", title: "Nachhaltigkeit und faire Produktion", folder: "nachhaltigkeit-und-faire-produktion-2862" },
      { id: "2867", title: "Umweltaufklärung und nachhaltiger Lebensstil", folder: "umweltaufklarung-und-nachhaltiger-lebensstil-2867" },
      { id: "2869", title: "Verantwortung für die Umwelt", folder: "verantwortung-fur-die-umwelt-2869" },
      { id: "2859", title: "Konsumverhalten und Nachhaltigkeit", folder: "konsumverhalten-und-nachhaltigkeit-2859" },
      { id: "2843", title: "Ethik in der Modeindustrie", folder: "ethik-in-der-modeindustrie-2843" },
      { id: "5143", title: "Cellulose und die Herstellung von Papier", folder: "cellulose-und-die-herstellung-von-papier-5143" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Umweltschutz+Nachhaltigkeit+Ressourcen&t=3752"
  }
};
