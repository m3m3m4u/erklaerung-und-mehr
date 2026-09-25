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
  "Duales Ausbildungssystem & Rechte",
  "Berufsorientierung & Praktikum",
  "Bewerbung, Lebenslauf & Auswahlverfahren",
  "Berufsfelder & Zukunft der Arbeitswelt"
];

export const lehrberufeTopics: Record<string, LehrberufeTopic> = {
  "duales-ausbildungssystem": {
    "slug": "duales-ausbildungssystem",
    "title": "Das duale Ausbildungssystem",
    "category": "Duales Ausbildungssystem & Rechte",
    "shortDesc": "Zusammenspiel von Betrieb und Berufsschule, Ausbildungsvertrag, Probezeit, Vergütung und Prüfungen.",
    "longDesc": "Das duale System der Berufsausbildung ist das international anerkannte Erfolgsmodell im deutschsprachigen Raum. Auszubildende lernen die praktische Arbeit direkt im Ausbildungsbetrieb und erhalten parallel das theoretische Fachwissen und Allgemeinbildung in der Berufsschule.",
    "keyPoints": [
      "Zwei Lernorte: Ausbildungsbetrieb (fachpraktische Ausbildung) und Berufsschule (Fachtheorie, Wirtschaft, allgemeinbildende Fächer)",
      "Ausbildungsdauer: In der Regel 2 bis 3,5 Jahre; Verkürzung bei hervorragenden Leistungen oder Vorbildung möglich",
      "Ausbildungsvertrag: Schriftlicher Vertrag mit Beginn, Dauer, Ausbildungsvergütung, Probezeit (1 bis 4 Monate) und Urlaubstagen",
      "Berichtsheft / Ausbildungsnachweis: Regelmäßig zu führender Tätigkeitsnachweis als offizielle Zulassungsvoraussetzung zur Abschlussprüfung",
      "Prüfungen durch Kammern (IHK/HWK): Zwischenprüfung (bzw. gestreckte Abschlussprüfung Teil 1) und finale Gesellen- oder Abschlussprüfung",
      "Perspektiven: Staatlich anerkannter Berufsabschluss mit Weiterbildungsmöglichkeiten zum Meister, Techniker, Fachwirt oder Studium"
    ],
    "exercises": [
      {
        "id": "der-ausbildungsvertrag-rechte-und-pflichten",
        "title": "Der Ausbildungsvertrag – Rechte und Pflichten",
        "folder": "der-ausbildungsvertrag-rechte-und-pflichten"
      },
      {
        "id": "berufsschule-und-betrieb-zusammenarbeit",
        "title": "Berufsschule und Betrieb – Das duale System",
        "folder": "berufsschule-und-betrieb-zusammenarbeit"
      },
      {
        "id": "das-berichtsheft-ordnungsgemaess-fuehren",
        "title": "Das Berichtsheft ordnungsgemäß führen",
        "folder": "das-berichtsheft-ordnungsgemaess-fuehren"
      },
      {
        "id": "probezeit-in-der-ausbildung-regeln",
        "title": "Probezeit in der Ausbildung",
        "folder": "probezeit-in-der-ausbildung-regeln"
      },
      {
        "id": "mindestlohn-fuer-azubis-und-praktikanten",
        "title": "Mindestlohn & Vergütung für Azubis",
        "folder": "mindestlohn-fuer-azubis-und-praktikanten"
      },
      {
        "id": "3478",
        "title": "Arbeitnehmerrechte & Jugendarbeitsschutz",
        "folder": "arbeitnehmerrechte-in-deutschland-3478"
      },
      {
        "id": "das-duale-studium-modell-und-vorteile",
        "title": "Das duale Studium – Modell & Perspektiven",
        "folder": "das-duale-studium-modell-und-vorteile"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=duale+ausbildung+berufsorientierung&t=3752"
  },

  "arbeitsplatz-sicherheit-und-zeugnis": {
    "slug": "arbeitsplatz-sicherheit-und-zeugnis",
    "title": "Arbeitsplatz, Arbeitssicherheit & Arbeitszeugnis",
    "category": "Duales Ausbildungssystem & Rechte",
    "shortDesc": "Unfallverhütung, Ergonomie, Entlohnungsformen, Arbeitszeugnis-Geheimcodes und Work-Life-Balance.",
    "longDesc": "Sicherheit, Gesundheit und faire Rahmenbedingungen sind das A und O im Berufsalltag. Von den Vorschriften der Berufsgenossenschaften über Entlohnungsformen bis zur Entschlüsselung von Arbeitszeugnissen.",
    "keyPoints": [
      "Arbeitssicherheit & PSA: Persönliche Schutzausrüstung (Helme, Sicherheitsschuhe, Gehörschutz) schützt vor Arbeitsunfällen",
      "Ergonomie am Arbeitsplatz: Richtiges Heben und Tragen im Handwerk sowie rückenfreundliches Sitzen im Büro",
      "Arbeitszeugnis & Geheimcodes: Arbeitszeugnisse müssen wohlwollend formuliert sein; verklausulierte Notenskalen erkennen ('stets zur vollsten Zufriedenheit' = Note 1)",
      "Entlohnungsformen: Zeitlohn (Stunden-, Monatsgehalt) vs. Leistungslohn (Akkordlohn, Prämien)",
      "Work-Life-Balance: Ausgleich zwischen forderndem Berufsalltag, Erholung und Gesundheit zur Burnout-Prävention"
    ],
    "exercises": [
      {
        "id": "arbeitssicherheit-und-unfallverhuetung",
        "title": "Arbeitssicherheit & Unfallverhütung",
        "folder": "arbeitssicherheit-und-unfallverhuetung"
      },
      {
        "id": "599",
        "title": "Der sichere & ergonomische Arbeitsplatz",
        "folder": "lerninhalt-der-arbeitsplatz-599"
      },
      {
        "id": "das-arbeitszeugnis-geheimcodes-lesen",
        "title": "Das Arbeitszeugnis – Geheimcodes entschlüsseln",
        "folder": "das-arbeitszeugnis-geheimcodes-lesen"
      },
      {
        "id": "formale-anforderungen-an-das-arbeitszeugnis",
        "title": "Formale Anforderungen an das Arbeitszeugnis",
        "folder": "formale-anforderungen-an-das-arbeitszeugnis"
      },
      {
        "id": "entlohnungsformen-zeitlohn-und-leistungslohn",
        "title": "Entlohnungsformen: Zeitlohn & Leistungslohn",
        "folder": "entlohnungsformen-zeitlohn-und-leistungslohn"
      },
      {
        "id": "work-life-balance-im-berufsstart",
        "title": "Work-Life-Balance im Berufsstart",
        "folder": "work-life-balance-im-berufsstart"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Arbeitssicherheit+Arbeitszeugnis+Ausbildung&t=3752"
  },

  "berufsorientierung-und-staerkenanalyse": {
    "slug": "berufsorientierung-und-staerkenanalyse",
    "title": "Berufsorientierung & Stärkenanalyse",
    "category": "Berufsorientierung & Praktikum",
    "shortDesc": "Eigene Stärken und Interessen erkennen, BIZ der Bundesagentur für Arbeit nutzen und Bildungswege vergleichen.",
    "longDesc": "Welcher Beruf passt wirklich zu mir? Eine systematische Berufsorientierung hilft dabei, eigene Begabungen, Interessen und Werte zu analysieren und mit den Anforderungen des modernen Arbeitsmarkts abzugleichen.",
    "keyPoints": [
      "Stärken- & Interessenanalyse: Handwerkliche, kreative, soziale oder analytische Begabungen gezielt reflektieren",
      "Berufsinformationszentrum (BIZ): Angebote der Arbeitsagentur (Berufsberatung, Eignungstests, Berufsbeschreibungen)",
      "Schlüsselqualifikationen & Soft Skills: Zuverlässigkeit, Teamfähigkeit, Pünktlichkeit, Kritikfähigkeit und Lernbereitschaft",
      "Traumberuf vs. Realität: Arbeitszeiten, Schichtdienst, Verdienstmöglichkeiten und Arbeitsmarktaussichten realistisch bewerten",
      "Bildungsweg-Entscheidung: Berufsausbildung (schnelle Praxis & eigenes Einkommen) vs. Studium (theoretische Tiefe)"
    ],
    "exercises": [
      {
        "id": "das-berufsinformationszentrum-biz-nutzen",
        "title": "Das Berufsinformationszentrum (BIZ) nutzen",
        "folder": "das-berufsinformationszentrum-biz-nutzen"
      },
      {
        "id": "informationsquellen-zur-berufsorientierung",
        "title": "Informationsquellen zur Berufsorientierung",
        "folder": "informationsquellen-zur-berufsorientierung"
      },
      {
        "id": "selbstanalyse-staerken-und-schwaechen",
        "title": "Selbstanalyse: Stärken und Schwächen erkennen",
        "folder": "selbstanalyse-staerken-und-schwaechen"
      },
      {
        "id": "interessen-und-hobbys-zum-beruf-machen",
        "title": "Interessen und Hobbys zum Beruf machen",
        "folder": "interessen-und-hobbys-zum-beruf-machen"
      },
      {
        "id": "schluesselqualifikationen-und-soft-skills",
        "title": "Schlüsselqualifikationen & Soft Skills",
        "folder": "schluesselqualifikationen-und-soft-skills"
      },
      {
        "id": "traumberufe-versus-realitaet-am-arbeitsmarkt",
        "title": "Traumberufe vs. Realität am Arbeitsmarkt",
        "folder": "traumberufe-versus-realitaet-am-arbeitsmarkt"
      },
      {
        "id": "studium-oder-ausbildung-vergleich",
        "title": "Studium oder Ausbildung – Der Entscheidungsvergleich",
        "folder": "studium-oder-ausbildung-vergleich"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Berufsorientierung+Staerkenanalyse+BIZ&t=3752"
  },

  "schuelerpraktikum-und-orientierung": {
    "slug": "schuelerpraktikum-und-orientierung",
    "title": "Schülerpraktikum, Praktikumsbericht & FSJ",
    "category": "Berufsorientierung & Praktikum",
    "shortDesc": "Praktikumsplatzsuche, Rechte und Pflichten als Praktikant, Praktikumsbericht schreiben und Freiwilligendienste.",
    "longDesc": "Das Schülerbetriebspraktikum bietet den ersten echten Einblick in das Berufsleben. Von der erfolgreichen Bewerbung um einen Praktikumsplatz über das Verhalten im Betrieb bis zum Verfassen eines überzeugenden Praktikumsberichts.",
    "keyPoints": [
      "Praktikumsplatzsuche: Frühzeitige Recherche nach geeigneten Betrieben in der Region und persönliche Kontaktaufnahme",
      "Rechte & Pflichten im Praktikum: Begleitung durch Betreuer, Einhaltung von Arbeitszeiten, Schweigepflicht und Lernchance",
      "Der Praktikumsbericht: Einleitung mit Betriebsporträt, Tagesberichte, detaillierte Beschreibung eines typischen Arbeitsvorgangs und persönliches Fazit",
      "Freiwilliges Soziales Jahr (FSJ) & BFD: Orientierungsjahr im sozialen, ökologischen oder kulturellen Bereich zur Persönlichkeitsentwicklung"
    ],
    "exercises": [
      {
        "id": "die-suche-nach-dem-passenden-praktikumsplatz",
        "title": "Die Suche nach dem passenden Praktikumsplatz",
        "folder": "die-suche-nach-dem-passenden-praktikumsplatz"
      },
      {
        "id": "rechte-und-pflichten-im-praktikum",
        "title": "Rechte und Pflichten im Praktikum",
        "folder": "rechte-und-pflichten-im-praktikum"
      },
      {
        "id": "der-praktikumsbericht-aufbau-und-inhalt",
        "title": "Der Praktikumsbericht – Aufbau & Inhalt",
        "folder": "der-praktikumsbericht-aufbau-und-inhalt"
      },
      {
        "id": "freiwilliges-soziales-jahr-als-alternative",
        "title": "Freiwilliges Soziales Jahr (FSJ) als Alternative",
        "folder": "freiwilliges-soziales-jahr-als-alternative"
      },
      {
        "id": "3476",
        "title": "Soziales Engagement & Gemeinnützige Arbeit",
        "folder": "arbeit-der-tafel-in-deutschland-3476"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Schuelerpraktikum+Praktikumsbericht+FSJ&t=3752"
  },

  "bewerbung-lebenslauf-und-rechte": {
    "slug": "bewerbung-lebenslauf-und-rechte",
    "title": "Bewerbungsunterlagen: Anschreiben & Lebenslauf",
    "category": "Bewerbung, Lebenslauf & Auswahlverfahren",
    "shortDesc": "Anschreiben nach DIN 5008, lückenloser tabellarischer Lebenslauf, Bewerbungsfoto, dritte Seite und Zeugnisse.",
    "longDesc": "Eine vollständige und fehlerfreie Bewerbungsmappe ist die Eintrittskarte zum Vorstellungsgespräch. Lerne die formalen Standards für ein individuelles Anschreiben, einen professionellen Lebenslauf und die Zusammenstellung der Anlagen.",
    "keyPoints": [
      "Bewerbungsanschreiben: Briefkopf nach DIN 5008, Betreffzeile mit Referenznummer, packender Einstiegssatz, Begründung der Eignung und Schlusssatz mit Gehalts-/Startangabe",
      "Tabellarischer Lebenslauf: Chronologisch oder antichronologisch gegliedert (Persönliche Daten, Schulbildung, Praktika, Besondere Kenntnisse/Sprachen, Hobbys)",
      "Bewerbungsfoto: Professionelles Porträtfoto im passenden Business-Dresscode; sympathischer und kompetenter Gesamteindruck",
      "Dritte Seite (Motivationsschreiben): Freiwillige Ergänzung für persönliche Beweggründe und besondere Identifikation mit dem Ausbildungsberuf",
      "Anlagen: Zeugnisse der letzten beiden Schuljahre, Praktikumsbescheinigungen und Zertifikate in logischer Reihenfolge"
    ],
    "exercises": [
      {
        "id": "das-anschreiben-struktur-und-formalia",
        "title": "Das Anschreiben – Struktur und Formalia",
        "folder": "das-anschreiben-struktur-und-formalia"
      },
      {
        "id": "ueberzeugende-einleitungssaetze-formulieren",
        "title": "Überzeugende Einleitungssätze formulieren",
        "folder": "ueberzeugende-einleitungssaetze-formulieren"
      },
      {
        "id": "der-tabellarische-lebenslauf-aufbau",
        "title": "Der tabellarische Lebenslauf – Aufbau & Struktur",
        "folder": "der-tabellarische-lebenslauf-aufbau"
      },
      {
        "id": "das-perfekte-bewerbungsfoto-tipps",
        "title": "Das perfekte Bewerbungsfoto – Tipps & Wirkung",
        "folder": "das-perfekte-bewerbungsfoto-tipps"
      },
      {
        "id": "die-dritte-seite-der-bewerbung-nutzen",
        "title": "Die dritte Seite der Bewerbung nutzen",
        "folder": "die-dritte-seite-der-bewerbung-nutzen"
      },
      {
        "id": "zeugnisse-und-zertifikate-richtig-ordnen",
        "title": "Zeugnisse und Zertifikate richtig ordnen",
        "folder": "zeugnisse-und-zertifikate-richtig-ordnen"
      },
      {
        "id": "fristen-und-termine-bei-der-bewerbung",
        "title": "Fristen und Termine bei der Bewerbung",
        "folder": "fristen-und-termine-bei-der-bewerbung"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=bewerbung+lebenslauf+ausbildung&t=3752"
  },

  "online-bewerbung-und-vorstellungsgespraech": {
    "slug": "online-bewerbung-und-vorstellungsgespraech",
    "title": "Online-Bewerbung & Vorstellungsgespräch",
    "category": "Bewerbung, Lebenslauf & Auswahlverfahren",
    "shortDesc": "E-Mail-Bewerbung, Karriereportale, typische Fragen im Interview, unzulässige Fragen und Dresscode.",
    "longDesc": "Die meisten Bewerbungen laufen heute digital über Portale oder per E-Mail. Bei einer Einladung zum Vorstellungsgespräch kommt es auf gute Vorbereitung, überzeugende Selbstpräsentation und authentisches Auftreten an.",
    "keyPoints": [
      "E-Mail- & Portalbewerbung: Aussagekräftige Betreffzeile, Anschreiben im E-Mail-Text, alle Dokumente in einer einzigen PDF-Datei zusammengefasst",
      "Initiativbewerbung: Chancen durch proaktive Bewerbung bei Unternehmen ohne aktuell ausgeschriebene Stellen",
      "Typische Interview-Fragen: 'Erzählen Sie etwas über sich', Stärken und Schwächen anhand konkreter Beispiele belegen",
      "Eigene Fragen vorbereiten: Interesse an Ausbildungsablauf, Weiterbildung und Teamkultur signalisiert echtes Engagement",
      "Unzulässige Fragen: Fragen zu Familienplanung, Religion, Partei oder Krankheiten sind verboten; hier gilt das 'Recht zur Notlüge'",
      "Dresscode & Körpersprache: Pünktlichkeit, fester Händedruck, aufrechte Haltung, Blickkontakt und der Branche angemessene Kleidung"
    ],
    "exercises": [
      {
        "id": "die-online-bewerbung-per-e-mail",
        "title": "Die Online-Bewerbung per E-Mail",
        "folder": "die-online-bewerbung-per-e-mail"
      },
      {
        "id": "bewerbungsportale-von-unternehmen-nutzen",
        "title": "Bewerbungsportale von Unternehmen nutzen",
        "folder": "bewerbungsportale-von-unternehmen-nutzen"
      },
      {
        "id": "die-initiativbewerbung-chancen-nutzen",
        "title": "Die Initiativbewerbung – Chancen nutzen",
        "folder": "die-initiativbewerbung-chancen-nutzen"
      },
      {
        "id": "typische-fragen-im-vorstellungsgespraech",
        "title": "Typische Fragen im Vorstellungsgespräch",
        "folder": "typische-fragen-im-vorstellungsgespraech"
      },
      {
        "id": "eigene-fragen-an-den-arbeitgeber-stellen",
        "title": "Eigene Fragen an den Arbeitgeber stellen",
        "folder": "eigene-fragen-an-den-arbeitgeber-stellen"
      },
      {
        "id": "unzulaessige-fragen-und-das-recht-zur-luege",
        "title": "Unzulässige Fragen & das Recht zur Lüge",
        "folder": "unzulaessige-fragen-und-das-recht-zur-luege"
      },
      {
        "id": "kleidung-und-dresscode-beim-interview",
        "title": "Kleidung & Dresscode beim Vorstellungsgespräch",
        "folder": "kleidung-und-dresscode-beim-interview"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Vorstellungsgespraech+Online+Bewerbung&t=3752"
  },

  "assessment-center-und-einstellungstests": {
    "slug": "assessment-center-und-einstellungstests",
    "title": "Assessment Center & Einstellungstests",
    "category": "Bewerbung, Lebenslauf & Auswahlverfahren",
    "shortDesc": "Auswahlverfahren großer Unternehmen, Postkorbübung, Gruppendiskussionen, Mathe-, Logik- und Allgemeinwissenstests.",
    "longDesc": "Viele Betriebe setzen auf mehrstufige Auswahlverfahren. In Einstellungstests und Assessment Centern werden kognitive Fähigkeiten, logisches Denken, Stressresistenz und Teamverhalten unter realitätsnahen Bedingungen geprüft.",
    "keyPoints": [
      "Assessment Center (AC): Mehrtägiges oder ganztägiges Auswahlverfahren mit mehreren Beobachtern (Assessoren) und standardisierten Aufgaben",
      "Postkorbübung: Simulation von Zeit- und Informationsdruck – Dokumente sichten, Prioritäten setzen und Terminkonflikte lösen",
      "Gruppendiskussion: Kooperative Gesprächsführung, Argumentieren im Team und Finden tragfähiger Kompromisse",
      "Einstellungstests: Sprachbeherrschung (Rechtschreibung/Grammatik), Mathematik (Dreisatz, Prozentrechnung) und räumliches Vorstellungsvermögen",
      "Konzentrations- und Logiktests: Zahlenreihen, Matrizen und Merkfähigkeitstests unter Zeitdruck"
    ],
    "exercises": [
      {
        "id": "auswahlverfahren-assessment-center",
        "title": "Auswahlverfahren: Assessment Center im Überblick",
        "folder": "auswahlverfahren-assessment-center"
      },
      {
        "id": "das-assessment-center-aufgaben-und-ziele",
        "title": "Aufgaben und Ziele im Assessment Center",
        "folder": "das-assessment-center-aufgaben-und-ziele"
      },
      {
        "id": "die-postkorbuebung-im-auswahlprozess",
        "title": "Die Postkorbübung im Auswahlprozess",
        "folder": "die-postkorbuebung-im-auswahlprozess"
      },
      {
        "id": "gruppendiskussionen-erfolgreich-meistern",
        "title": "Gruppendiskussionen erfolgreich meistern",
        "folder": "gruppendiskussionen-erfolgreich-meistern"
      },
      {
        "id": "allgemeinwissenstests-in-der-bewerbung",
        "title": "Allgemeinwissenstests in der Bewerbung",
        "folder": "allgemeinwissenstests-in-der-bewerbung"
      },
      {
        "id": "einstellungstests-mathematik-und-logik",
        "title": "Einstellungstests: Mathematik und Logik",
        "folder": "einstellungstests-mathematik-und-logik"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Assessment+Center+Einstellungstest&t=3752"
  },

  "handwerk-technik-und-industrie": {
    "slug": "handwerk-technik-und-industrie",
    "title": "Handwerk, Technik & Industrielle Berufe",
    "category": "Berufsfelder & Zukunft der Arbeitswelt",
    "shortDesc": "Elektroniker, Kfz-Mechatroniker, Industrie-Roboter vs. Handwerk, Automatisierung und Zeitmanagement.",
    "longDesc": "Handwerkliche und technische Berufe sind das Fundament von Bauwirtschaft, Mobilität und moderner Industrieproduktion. Sie verbinden praktisches Fingerspitzengefühl mit computergestützter Steuerungstechnik und Robotik.",
    "keyPoints": [
      "Elektroberufe: Elektroniker für Energie- und Gebäudetechnik, Mechatroniker (Steuerungstechnik, Schaltpläne, Messtechnik)",
      "Fahrzeugtechnik: Kfz-Mechatroniker für Pkw, Nutzfahrzeuge oder System- und Hochvolttechnik (Elektromobilität)",
      "Industriemechanik & Robotik: Wartung hochautomatisierter Produktionsanlagen und Industrieroboter",
      "Zukunft des Handwerks: Individuelle Maßarbeit, Sanierung und energetische Modernisierung bleiben auch im Zeitalter der Roboter unverzichtbar",
      "Teamarbeit auf Baustellen & in Werkstätten: Zuverlässige Abstimmung zwischen verschiedenen Gewerken"
    ],
    "exercises": [
      {
        "id": "3399",
        "title": "Berufsfeld Elektrotechnik – Elektroniker & Mechatroniker",
        "folder": "die-elektrotechnik-2-3399"
      },
      {
        "id": "3400",
        "title": "Berufsfeld Kraftfahrzeugtechnik – Kfz-Mechatroniker",
        "folder": "die-kfztechnik-3400"
      },
      {
        "id": "stahl-statt-handwerk-der-unaufhaltsame-siegeszug-der-industrie-roboter",
        "title": "Industrie-Roboter vs. Traditionelles Handwerk",
        "folder": "stahl-statt-handwerk-der-unaufhaltsame-siegeszug-der-industrie-roboter"
      },
      {
        "id": "2840",
        "title": "Automatisierung in Industrie & Handwerk",
        "folder": "automatisierung-und-arbeitsplatzverlust-2-2840"
      },
      {
        "id": "teamarbeit-und-konfliktloesung-im-betrieb",
        "title": "Teamarbeit & Konfliktlösung im Betrieb",
        "folder": "teamarbeit-und-konfliktloesung-im-betrieb"
      },
      {
        "id": "zeitmanagement-und-selbstorganisation",
        "title": "Selbstorganisation & Zeitmanagement im Handwerk",
        "folder": "zeitmanagement-und-selbstorganisation"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=handwerk+technik+berufe&t=3752"
  },

  "dienstleistung-wirtschaft-und-it": {
    "slug": "dienstleistung-wirtschaft-und-it",
    "title": "Kaufmännische Berufe, Handel & Zukunft der Arbeit",
    "category": "Berufsfelder & Zukunft der Arbeitswelt",
    "shortDesc": "Einzelhandelskaufleute, Digitalisierung von Berufsbildern, KI & Roboter, Karriereplattformen und Homeoffice.",
    "longDesc": "Vom stationären Einzelhandel über Büromanagement bis zu modernen IT- und E-Commerce-Berufen: Die Dienstleistungs- und Wirtschaftswelt wandelt sich durch Digitalisierung, flexible Arbeitsmodelle und künstliche Intelligenz rasant.",
    "keyPoints": [
      "Kaufleute im Einzelhandel & E-Commerce: Warenpräsentation, Kundenberatung, Kassenwesen und Omnichannel-Handel",
      "Büromanagement & Verwaltung: Koordination von Terminen, Schriftverkehr, Rechnungswesen und Projektmanagement",
      "Digitalisierung & KI in der Arbeitswelt: Neue Berufsbilder entstehen (Data Analyst, Prompt Engineer, Social Media Manager)",
      "Karriereplattformen: Professionelle Selbstpräsentation auf LinkedIn und Xing zur beruflichen Vernetzung",
      "New Work & Remote Work: Vor- und Nachteile von Homeoffice, virtuellen Teams und flexiblen Arbeitszeitmodellen"
    ],
    "exercises": [
      {
        "id": "3398",
        "title": "Berufsfeld Einzelhandel – Kaufleute & Kundenberatung",
        "folder": "der-einzelhandel-3398"
      },
      {
        "id": "berufe-im-wandel-der-digitalisierung",
        "title": "Berufe im Wandel der Digitalisierung & KI",
        "folder": "berufe-im-wandel-der-digitalisierung"
      },
      {
        "id": "wandel-der-berufsbilder-durch-automatisierung",
        "title": "Wandel der Berufsbilder durch Automatisierung",
        "folder": "wandel-der-berufsbilder-durch-automatisierung"
      },
      {
        "id": "stahl-kollegen-im-vormarsch-welche-berufe-die-roboter-revolution-schluckt",
        "title": "Roboter-Revolution: Berufe der Zukunft",
        "folder": "stahl-kollegen-im-vormarsch-welche-berufe-die-roboter-revolution-schluckt"
      },
      {
        "id": "optimierung-von-profilen-auf-karriereplattformen",
        "title": "Profile auf Karriereplattformen (LinkedIn & Xing)",
        "folder": "optimierung-von-profilen-auf-karriereplattformen"
      },
      {
        "id": "karriereplanung-und-aufstiegschancen",
        "title": "Karriereplanung, Weiterbildung & Aufstiegschancen",
        "folder": "karriereplanung-und-aufstiegschancen"
      },
      {
        "id": "home-office-und-virtuelle-teams",
        "title": "Homeoffice, Remote Work & Virtuelle Teams",
        "folder": "home-office-und-virtuelle-teams"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kaufleute+it+berufe&t=3752"
  }
};
