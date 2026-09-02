export interface KlimaExercise {
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
  exercises: KlimaExercise[];
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
    "shortDesc": "Armutsbekämpfung, Klimaschutz, bezahlbare saubere Energie und globale Partnerschaften.",
    "longDesc": "Die 17 Sustainable Development Goals (SDGs) der Vereinten Nationen sind ein weltweiter Aktionsplan für Frieden, Wohlstand und den Schutz unseres Planeten bis 2030.",
    "keyPoints": [
      "Agenda 2030: Verabschiedet von allen 193 UN-Mitgliedsstaaten für eine nachhaltige Zukunft",
      "Drei Säulen: Ökologische Verträglichkeit, soziale Gerechtigkeit und wirtschaftliche Leistungsfähigkeit",
      "Zentrale Ziele: Keine Armut (SDG 1), Hochwertige Bildung (SDG 4), Bezahlbare & saubere Energie (SDG 7), Maßnahmen zum Klimaschutz (SDG 13)",
      "Verantwortung: Zusammenarbeit zwischen Regierungen, Wirtschaft und Zivilgesellschaft"
    ],
    "exercises": [
      {
        "id": "4486",
        "title": "Global Goal 12: Nachhaltiger Konsum und Produktion",
        "folder": "global-goal-12-nachhaltiger-konsum-produktion-im-einklang-mit-natur-4486"
      },
      {
        "id": "4491",
        "title": "Global Goal 17: Partnerschaften zur Erreichung der Ziele",
        "folder": "global-goal-17-partnerschaften-starken-gemeinsam-fur-nachhaltige-zukunft-4491"
      },
      {
        "id": "2862",
        "title": "Nachhaltigkeit und faire Produktion",
        "folder": "nachhaltigkeit-und-faire-produktion-2862"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nachhaltigkeitsziele&t=3752"
  },
  "klimawandel-und-klimazonen": {
    "slug": "klimawandel-und-klimazonen",
    "title": "Klimawandel, Treibhauseffekt & Klimazonen",
    "category": "Klimawandel & Klimazonen",
    "shortDesc": "Natürlicher und anthropogener Treibhauseffekt, Erderwärmung, Extremwetter und die Klimazonen der Erde.",
    "longDesc": "Der Klimawandel gehört zu den drängendsten Herausforderungen der Menschheit. Verstehe physikalische Grundlagen, Treibhausgase und weltweite Auswirkungen auf Ökosysteme.",
    "keyPoints": [
      "Treibhauseffekt: Treibhausgase ($CO_2$, Methan $CH_4$, Wasserdampf) absorbieren Wärmestrahlung der Erde und strahlen sie zurück",
      "Anthropogener Einfluss: Verbrennung fossiler Energieträger, Abholzung und Massentierhaltung verstärken den Effekt",
      "Folgen: Anstieg des Meeresspiegels, Gletscherschwund, Versauerung der Ozeane und Zunahme von Dürren/Stürmen",
      "Klimazonen: Polare, gemäßigte, subtropische und tropische Zone mit charakteristischen Vegetationsformen"
    ],
    "exercises": [
      {
        "id": "317",
        "title": "Klima, Wetter und Klimazonen",
        "folder": "klima-wetter-und-klimazonen-317"
      },
      {
        "id": "339",
        "title": "Veränderungen des Klimas",
        "folder": "veranderungen-des-klimas-339"
      },
      {
        "id": "7076",
        "title": "Wie funktioniert der Treibhauseffekt",
        "folder": "wie-funktioniert-der-treibhauseffekt"
      },
      {
        "id": "758",
        "title": "Die polare Klimazone",
        "folder": "die-polare-klimazone-758"
      },
      {
        "id": "759",
        "title": "Die gemäßigte Klimazone",
        "folder": "die-gemaesigte-klimazone-759"
      },
      {
        "id": "760",
        "title": "Die subtropische Klimazone",
        "folder": "die-subtropische-klimazone-760"
      },
      {
        "id": "761",
        "title": "Die tropische Klimazone",
        "folder": "die-tropische-klimazone-761"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=klimawandel&t=3752"
  },
  "umwelt-und-nachhaltigkeit": {
    "slug": "umwelt-und-nachhaltigkeit",
    "title": "Umwelt, Ressourcen & Ökologischer Fußabdruck",
    "category": "Umwelt, Ökosysteme & Nachhaltigkeit",
    "shortDesc": "Ressourcenschonung, Plastikmüll, Recycling, Ökobilanz und praktischer Umweltschutz im Alltag.",
    "longDesc": "Wie können wir im Alltag nachhaltiger leben? Lerne Konzepte zur Kreislaufwirtschaft, Müllvermeidung, Energiesparen und bewusstem Konsum kennen.",
    "keyPoints": [
      "Ökologischer Fußabdruck: Misst den Ressourcenverbrauch und die benötigte biologische Fläche eines Menschen",
      "Kreislaufwirtschaft: Vermeiden ➔ Wiederverwenden ➔ Recyceln statt Wegwerfgesellschaft (Cradle to Cradle)",
      "Ressourcenschonung: Virtuelles Wasser, Energieeffizienz und regionaler/saisonaler Einkauf",
      "Alltagstipps: Mülltrennung, Verzicht auf Einwegplastik, Stromsparen und nachhaltige Mobilität"
    ],
    "exercises": [
      {
        "id": "2672",
        "title": "Nachhaltiger Konsum",
        "folder": "nachhaltiger-konsum-2672"
      },
      {
        "id": "2859",
        "title": "Konsumverhalten und Nachhaltigkeit",
        "folder": "konsumverhalten-und-nachhaltigkeit-2859"
      },
      {
        "id": "2867",
        "title": "Umweltaufklärung und nachhaltiger Lebensstil",
        "folder": "umweltaufklarung-und-nachhaltiger-lebensstil-2867"
      },
      {
        "id": "3557",
        "title": "Konsum und Nachhaltigkeit",
        "folder": "konsum-und-nachhaltigkeit-3557"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=umweltschutz&t=3752"
  }
};
