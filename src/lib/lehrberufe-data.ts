export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface LehrberufeTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const lehrberufeCategories = [
  "Duales Ausbildungssystem",
  "Berufsfelder & Branchen",
  "Bewerbung & Vorstellungsgespräch",
  "Rechte & Pflichten von Azubis"
];

export const lehrberufeTopics: Record<string, LehrberufeTopic> = {
  "duales-ausbildungssystem": {
    slug: "duales-ausbildungssystem",
    title: "Das duale Ausbildungssystem",
    category: "Duales Ausbildungssystem",
    shortDesc: "Zusammenspiel von Betrieb und Berufsschule, Ausbildungsordnung, Zwischen- und Abschlussprüfung.",
    longDesc: "Das duale System der Berufsausbildung ist das international anerkannte Erfolgsmodell im deutschsprachigen Raum. Auszubildende lernen die praktische Arbeit direkt im Ausbildungsbetrieb und erhalten parallel das theoretische Fachwissen und Allgemeinbildung in der Berufsschule.",
    keyPoints: [
      "Zwei Lernorte: Ausbildungsbetrieb (Praxis, Mitarbeit im Betrieb) und Berufsschule (Fachtheorie, allgemeinbildende Fächer)",
      "Ausbildungsdauer: In der Regel 2 bis 3,5 Jahre je nach Beruf und Schulabschluss (Verkürzung bei guten Leistungen möglich)",
      "Ausbildungsvertrag: Schriftlicher Vertrag zwischen Betrieb und Auszubildendem mit Beginn, Dauer, Vergütung, Probezeit (1 bis 4 Monate) und Urlaub",
      "Prüfungen durch Kammern (IHK, HWK): Zwischenprüfung (oder gestreckte Abschlussprüfung Teil 1) und finale Abschluss- bzw. Gesellenprüfung",
      "Abschluss & Perspektiven: Staatlich anerkannter Berufsabschluss mit Weiterbildungsmöglichkeiten (Meister, Techniker, Fachwirt, Studium)"
    ],
    exercises: [
      { id: "3478", title: "Arbeitnehmerrechte in Deutschland", folder: "arbeitnehmerrechte-in-deutschland-3478" },
      { id: "3479", title: "Arbeitsmarkt & Berufe", folder: "arbeitslosigkeit-grunde-und-folgen-3479" },
      { id: "3476", title: "Arbeit der Tafel in Deutschland", folder: "arbeit-der-tafel-in-deutschland-3476" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=duale+ausbildung+berufsorientierung&t=3752"
  },
  "handwerk-technik-und-industrie": {
    slug: "handwerk-technik-und-industrie",
    title: "Handwerk, Technik & Industrielle Berufe",
    category: "Berufsfelder & Branchen",
    shortDesc: "Elektroniker, Mechatroniker, Anlagenmechaniker SHK, Schreiner und KFZ-Mechatroniker.",
    longDesc: "Handwerkliche und technische Berufe sind die treibende Kraft für Innovation, Bauwesen, Energiewende und moderne Industrie. Sie verbinden handwerkliches Geschick mit moderner Digital- und Steuerungstechnik.",
    keyPoints: [
      "Elektro- & Informationstechnik: Elektroniker für Energie- und Gebäudetechnik (Smart Home, Photovoltaik, Stromnetze)",
      "Metall- & Maschinenbau: Industriemechaniker, Zerspanungsmechaniker (CNC-Technik, Wartung von Fertigungsanlagen)",
      "Mobilität & Fahrzeugtechnik: Kfz-Mechatroniker (Verbrenner-, Elektro- und Hybridantriebe, Fahrzeugelektronik)",
      "Bau & Ausbau: Schreiner/Tischler, Maurer, Dachdecker, Maler (Gestaltung, Konstruktion, energetische Sanierung)",
      "Sanitär-, Heizungs- und Klimatechnik (SHK): Installation von Wärmepumpen, Solaranlagen und modernen Sanitärsystemen"
    ],
    exercises: [
      { id: "274", title: "Kraft", folder: "arbeit-energie-und-leistung-274" },
      { id: "3478", title: "Arbeitnehmerrechte in Deutschland", folder: "arbeitnehmerrechte-in-deutschland-3478" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=handwerk+technik+berufe&t=3752"
  },
  "dienstleistung-wirtschaft-und-it": {
    slug: "dienstleistung-wirtschaft-und-it",
    title: "Kaufmännische Berufe, IT & Pflege",
    category: "Berufsfelder & Branchen",
    shortDesc: "Fachinformatiker, Kaufleute für Büromanagement, Pflegefachmann/-frau und E-Commerce.",
    longDesc: "Dienstleistungen, Handel, Gesundheit und Informationstechnologie bieten vielseitige Karrieren. Vom Kundenkontakt und Marketing über die professionelle Pflege bis zur Software- und Systementwicklung.",
    keyPoints: [
      "IT-Berufe: Fachinformatiker für Anwendungsentwicklung (Programmierung) oder Systemintegration (Netzwerke, Server, Cloud)",
      "Kaufmännische Berufe: Kaufmann/-frau für Büromanagement, Industriekaufleute, Kaufleute im E-Commerce (Onlinehandel)",
      "Gesundheit & Soziales: Pflegefachmann/-frau (Kranken- und Altenpflege), Erzieher/in, Medizinische Fachangestellte (MFA)",
      "Gastronomie & Hotellerie: Koch/Köchin, Hotelfachmann/-frau (Gästebetreuung, Eventorganisation)",
      "Zukunftskompetenzen: Teamfähigkeit, digitale Kompetenzen, Empathie und lebenslanges Lernen"
    ],
    exercises: [
      { id: "3478", title: "Arbeitnehmerrechte & Verträge", folder: "arbeitnehmerrechte-in-deutschland-3478" },
      { id: "3479", title: "Arbeitswelt im Wandel", folder: "arbeitslosigkeit-grunde-und-folgen-3479" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=kaufleute+it+berufe&t=3752"
  },
  "bewerbung-lebenslauf-und-rechte": {
    slug: "bewerbung-lebenslauf-und-rechte",
    title: "Bewerbung, Lebenslauf & Rechte von Azubis",
    category: "Bewerbung & Vorstellungsgespräch",
    shortDesc: "Anschreiben, tabellarischer Lebenslauf, Vorstellungsgespräch, JArbSchG und Ausbildungsvergütung.",
    longDesc: "Der Weg in den Wunschberuf führt über eine überzeugende Bewerbung. Während der Ausbildung schützen gesetzliche Regelungen (z.B. das Jugendarbeitsschutzgesetz) Auszubildende und regeln Rechte und Pflichten klar.",
    keyPoints: [
      "Bewerbungsmappe: Anschreiben (Motivation, Stärken, Bezug zum Unternehmen), tabellarischer Lebenslauf (Schulbildung, Praktika, Hobbys), Zeugnisse & Zertifikate",
      "Vorstellungsgespräch: Vorbereitung über das Unternehmen, pünktliches Erscheinen, angemessene Kleidung, eigene Fragen vorbereiten",
      "Rechte der Azubis: Angemessene Vergütung (steigt mit jedem Lehrjahr), Bereitstellung von Arbeitsmitteln/Werkzeug, Freistellung für die Berufsschule",
      "Pflichten der Azubis: Lernpflicht, Sorgfaltspflicht, Schweigepflicht (Betriebsgeheimnisse), Führen des Berichtshefts/Ausbildungsnachweises",
      "Jugendarbeitsschutzgesetz (JArbSchG): Für Jugendliche unter 18 Jahren: Max. 8 Stunden täglich / 40 Stunden wöchentlich, Ruhepausen, Verbot von Nachtarbeit und Samstagsarbeit (mit Ausnahmen)"
    ],
    exercises: [
      { id: "3478", title: "Arbeitnehmerrechte in Deutschland", folder: "arbeitnehmerrechte-in-deutschland-3478" },
      { id: "3479", title: "Arbeitswelt & Arbeitsrecht", folder: "arbeitslosigkeit-grunde-und-folgen-3479" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=bewerbung+lebenslauf+ausbildung&t=3752"
  }
};
