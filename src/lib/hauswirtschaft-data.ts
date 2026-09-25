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
  "Küchenpraxis & Kochen",
  "Lebensmittelsicherheit & Vorratshaltung",
  "Haushaltsmanagement & Finanzen",
  "Nachhaltigkeit & Textilpflege"
];

export const hauswirtschaftTopics: Record<string, HauswirtschaftTopic> = {
  "kuechenhygiene-und-lebensmittelsicherheit": {
    "slug": "kuechenhygiene-und-lebensmittelsicherheit",
    "title": "Küchenpraxis, Kochtechniken & Kulinarik",
    "category": "Küchenpraxis & Kochen",
    "shortDesc": "Garverfahren (Kochen, Braten, Dünsten), Induktionskochfelder, traditionelle Rezepte und kulinarische Kultur.",
    "longDesc": "Das Beherrschen grundlegender Kochtechniken und Garverfahren ist die Basis für eine gesunde, schmackhafte und selbstbestimmte Ernährung. Von der Schneidetechnik über moderne Küchengeräte bis hin zu traditionellen Hausmannskost-Rezepten.",
    "keyPoints": [
      "Garverfahren: Kochen im Wasserbad, Dämpfen/Dünsten (nährstoffschonend), Braten (Röstaromen) und Backen im Ofen",
      "Küchentechnik: Funktionsweise moderner Induktionskochfelder (Wirbelströme, Energieeffizienz, Sicherheit)",
      "Rezeptaufbau: Zutatenlisten, Mengenangaben, Vorbereitungszeiten und algorithmische Schritt-für-Schritt-Abläufe",
      "Kulturelle Esskultur: Regionale Vielfalt der deutschen Küche und kulinarische Traditionen",
      "Esskultur in der Literatur: Wie Kochen und Gastmahle Geschichten lebendig machen"
    ],
    "exercises": [
      {
        "id": "2663",
        "title": "Grundlagen des Kochens – Kochtechniken & Garverfahren",
        "folder": "grundlagen-des-kochens-kochtechniken-2663"
      },
      {
        "id": "wie-funktioniert-ein-induktionskochfeld",
        "title": "Küchentechnik: Das Induktionskochfeld",
        "folder": "wie-funktioniert-ein-induktionskochfeld"
      },
      {
        "id": "2675",
        "title": "Traditionelle Haushaltspraktiken und Rezepte",
        "folder": "traditionelle-haushaltspraktiken-und-rezepte-2675"
      },
      {
        "id": "deutsche-kueche",
        "title": "Regionale Esskultur und traditionelle Gerichte",
        "folder": "deutsche-kueche"
      },
      {
        "id": "essen-und-kochen-in-beruehmten-buechern",
        "title": "Kochen und Esskultur in der Literatur",
        "folder": "essen-und-kochen-in-beruehmten-buechern"
      },
      {
        "id": "vergleich-von-algorithmen-mit-kochrezepten",
        "title": "Kochrezepte als Schritt-für-Schritt-Anleitungen",
        "folder": "vergleich-von-algorithmen-mit-kochrezepten"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kochen+hauswirtschaft&t=3752"
  },
  "ernaehrungspyramide-und-naehrstoffe": {
    "slug": "ernaehrungspyramide-und-naehrstoffe",
    "title": "Lebensmittelsicherheit, Vorratshaltung & Konservierung",
    "category": "Lebensmittelsicherheit & Vorratshaltung",
    "shortDesc": "Vorratshaltung, Einmachen & Einkochen, Mindesthaltbarkeitsdatum, Food Waste und Ernährungspyramide.",
    "longDesc": "Lebensmittel sachgerecht zu lagern, haltbar zu machen und Verderb zu verhindern, spart Geld und schont wertvolle Ressourcen. Lerne Methoden der Vorratshaltung, Kühlzonen im Kühlschrank und traditionelles Einkochen kennen.",
    "keyPoints": [
      "Vorratshaltung: Dunkle, kühle und trockene Lagerung von Grundnahrungsmitteln zum Schutz vor Schädlingen",
      "Kühlschrank-Zonen: Oben (mild ~8°C: Käse), Mitte (~5°C: Milchprodukte), Unten überm Gemüsefach (kälteste Zone ~2°C: Fleisch/Fisch), Gemüsefach (~8°C: Salat)",
      "Konservierungsmethoden: Einwecken/Einkochen, Trocknen/Dörren, Einfrieren (-18°C) und Fermentieren",
      "MHD vs. Verbrauchsdatum: Mindesthaltbarkeit (Qualitätsgarantie) vs. Verbrauchsdatum (hygienische Sicherheit bei leicht verderblichen Waren)",
      "Vermeidung von Lebensmittelverschwendung: Reste kreativ verwerten, gezielter Einkauf und Portionsplanung"
    ],
    "exercises": [
      {
        "id": "2677",
        "title": "Vorratshaltung und sachgerechte Lagerung",
        "folder": "vorratshaltung-und-lagerung-2677"
      },
      {
        "id": "2655",
        "title": "Einmachen, Einkochen und Haltbarmachung",
        "folder": "einmachen-und-einkochen-2655"
      },
      {
        "id": "3561",
        "title": "Lebensmittelverschwendung vermeiden (Food Waste)",
        "folder": "lebensmittelverschwendung-und-was-man-dagegen-tun-kann-3561"
      },
      {
        "id": "900",
        "title": "Die Ernährungspyramide in der Haushaltsplanung",
        "folder": "die-ernahrungspyramide-900"
      },
      {
        "id": "3234",
        "title": "Escape Room: Ernährung & Lebensmittel",
        "folder": "escape-room-quot-ernahrung-grundlagen-quot-3234"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=vorratshaltung+lagerung+hauswirtschaft&t=3752"
  },
  "haushaltsbudget-und-finanzen": {
    "slug": "haushaltsbudget-und-finanzen",
    "title": "Haushaltsbudget, Finanzen & Konsumkompetenz",
    "category": "Haushaltsmanagement & Finanzen",
    "shortDesc": "Haushaltsbuch, Fixkosten vs. variable Kosten, Haushaltsdefizit, bargeldloses Zahlen und Konsumfallen.",
    "longDesc": "Der verantwortungsvolle Umgang mit Geld ist eine lebenspraktische Kernkompetenz. Ein Haushaltsplan verschafft Überblick über regelmäßige Einnahmen und Ausgaben, verhindert Schuldenfallen und schafft Freiräume für Rücklagen.",
    "keyPoints": [
      "Einnahmen-Ausgaben-Rechnung: Nettoeinkommen abzüglich aller Fixkosten und variablen Ausgaben",
      "Fixkosten vs. variable Kosten: Mietkosten, Versicherungen und Abonnements vs. Einkäufe, Freizeit und Kleidung",
      "Haushaltsbuchführung: Tägliche Erfassung von Ausgaben zur Erkennung versteckter Kostenfresser",
      "Schuldenfallen & Haushaltsdefizit: Gefahren von Dispokrediten, Ratenkäufen ('Buy now, pay later') und Abofallen",
      "Bar vs. Digitales Bezahlen: Girocard, Smartphone-Zahlungen, digitaler Euro und Budgetkontrolle",
      "Konsumpsychologie: Wie Algorithmen und Supermarkt-Layouts Kaufentscheidungen unbewusst lenken"
    ],
    "exercises": [
      {
        "id": "2666",
        "title": "Haushaltsbudget – Einnahmen und Ausgaben planen",
        "folder": "haushaltsbudget-einnahmen-und-ausgaben-planen-2666"
      },
      {
        "id": "2665",
        "title": "Haushaltsbuchführung und Kostenkontrolle",
        "folder": "haushaltsbuchfuhrung-und-kostenkontrolle-2665"
      },
      {
        "id": "2667",
        "title": "Haushaltsplanung für Familien",
        "folder": "haushaltsplanung-fur-groesfamilien-2667"
      },
      {
        "id": "3542",
        "title": "Haushaltsdefizit verstehen",
        "folder": "haushaltsdefizit-3542"
      },
      {
        "id": "das-ende-des-bargelds-wie-der-digitale-euro-unser-bezahlen-revolutioniert",
        "title": "Bar vs. Digital – Bezahlen im Alltag",
        "folder": "das-ende-des-bargelds-wie-der-digitale-euro-unser-bezahlen-revolutioniert"
      },
      {
        "id": "die-unsichtbaren-lenker-wie-algorithmen-unsere-entscheidungen-beim-einkaufen-lenken",
        "title": "Einkaufsentscheidungen und Konsumpsychologie",
        "folder": "die-unsichtbaren-lenker-wie-algorithmen-unsere-entscheidungen-beim-einkaufen-lenken"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=haushaltsbuch+finanzen&t=3752"
  },
  "nachhaltiger-haushalt-und-textilpflege": {
    "slug": "nachhaltiger-haushalt-und-textilpflege",
    "title": "Wäschepflege, Textilkunde & Umwelthygiene",
    "category": "Nachhaltigkeit & Textilpflege",
    "shortDesc": "Wäschepflege, Pflegesymbole, Natur- und Chemiefasern, Haushaltsreinigung, Strom- & Wassersparen.",
    "longDesc": "Nachhaltige Haushaltsführung schützt Umwelt und Geldbeutel: Von der fasergerechten Textilpflege über die Entschlüsselung internationaler Waschsymbole bis hin zu umweltfreundlicher Reinigung und ressourcensparender Haustechnik.",
    "keyPoints": [
      "Wäschepflege & Sortierung: Trennung nach Farbe (Weiß, Bunt, Dunkel), Waschtemperatur (30°C, 60°C) und Textilart",
      "Internationale Pflegesymbole: Waschen (Zuber), Bleichen (Dreieck), Trocknen (Quadrat), Bügeln (Bügeleisen), Chemische Reinigung (Kreis)",
      "Faserkunde: Naturfasern (Baumwolle, Wolle, Leinen, Seide) vs. Chemiefasern (Polyester, Polyamid, Elasthan)",
      "Haushaltsreinigung: Tenside, Säuren (gegen Kalk), Laugen (gegen Fett) und materialschonende Reinigungstechniken",
      "Energie- und Wassersparen: Eco-Programme, Vollbeladung von Maschinen und bewusster Warmwasserverbrauch",
      "Abwasser- und Umwelthygiene: Kläranlagen, Vermeidung von Mikroplastik und umweltschonende Waschmitteldosierung"
    ],
    "exercises": [
      {
        "id": "2662",
        "title": "Grundlagen der Wäschepflege & Waschsymbole",
        "folder": "grundlagen-der-waschepflege-2662"
      },
      {
        "id": "5161",
        "title": "Fasern für Textilien – Natur- und Chemiefasern",
        "folder": "fasern-fur-textilien-5161"
      },
      {
        "id": "2668",
        "title": "Haushaltsreinigung – Tipps und Tricks",
        "folder": "haushaltsreinigung-tipps-und-tricks-2668"
      },
      {
        "id": "2656",
        "title": "Energie- und Wassersparen im Haushalt",
        "folder": "energie-und-wassersparen-im-haushalt-2656"
      },
      {
        "id": "wie-funktioniert-die-abwasserreinigung",
        "title": "Abwasser und Umwelthygiene im Haushalt",
        "folder": "wie-funktioniert-die-abwasserreinigung"
      },
      {
        "id": "gratis-hygieneartikel-als-standard-die-ueberfaellige-debatte-zur-gleichberechtigung",
        "title": "Hygiene im Alltag",
        "folder": "gratis-hygieneartikel-als-standard-die-ueberfaellige-debatte-zur-gleichberechtigung"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=waeschepflege+reinigung+nachhaltigkeit&t=3752"
  }
};
