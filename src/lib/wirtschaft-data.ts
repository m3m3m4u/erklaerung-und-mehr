export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface WirtschaftTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const wirtschaftCategories: string[] = [
  "Wirtschaftssysteme & Grundlagen",
  "Geld, Banken, Börse & Finanzen",
  "Weltwirtschaft & Globalisierung",
  "Recht, Verträge & Verbraucherschutz",
  "Unternehmen, Organisation & Marketing",
  "Rechnungswesen & Steuern",
  "Arbeitswelt & Berufsstart"
];

export const wirtschaftTopics: Record<string, WirtschaftTopic> = {
  "oekonomisches-prinzip-und-grundbeduerfnisse": {
    "slug": "oekonomisches-prinzip-und-grundbeduerfnisse",
    "title": "Ökonomisches Prinzip, Bedürfnisse & Güter",
    "category": "Wirtschaftssysteme & Grundlagen",
    "shortDesc": "Minimal-, Maximal- und Optimalprinzip, Bedürfnispyramide nach Maslow, Güterarten, Opportunitätskosten und Ressourcenknappheit.",
    "longDesc": "Die Wirtschaftswissenschaft befasst sich mit dem menschlichen Handeln unter Bedingungen der Knappheit. Das ökonomische Prinzip verlangt den effizienten Einsatz begrenzter Ressourcen zur optimalen Befriedigung unbegrenzter menschlicher Bedürfnisse.",
    "keyPoints": [
      "Ökonomisches Prinzip: Minimalprinzip (gegebenes Ziel mit minimalem Aufwand) vs. Maximalprinzip (mit gegebenen Mitteln maximales Ergebnis)",
      "Bedürfnispyramide nach Maslow: 1. Grundbedürfnisse ➔ 2. Sicherheit ➔ 3. Soziale Bedürfnisse ➔ 4. Anerkennung ➔ 5. Selbstverwirklichung",
      "Bedarf & Nachfrage: Ein Bedürfnis wird durch Kaufkraft zum Bedarf und am Markt zur wirksamen Nachfrage",
      "Güterarten: Freie Güter vs. wirtschaftliche/knappe Güter (Konsumgüter, Produktionsgüter, Dienstleistungen, Rechte)",
      "Produktionsfaktoren: Arbeit, Boden (Naturressourcen) und Kapital (Maschinen, Gebäude, Technologie)"
    ],
    "exercises": [
      {
        "id": "das-oekonomische-prinzip-minimal-maximal-optimal",
        "title": "Das ökonomische Prinzip Minimal Maximal Optimal",
        "folder": "das-oekonomische-prinzip-minimal-maximal-optimal"
      },
      {
        "id": "die-beduerfnispyramide-nach-maslow",
        "title": "Die Bedürfnispyramide nach Maslow",
        "folder": "die-beduerfnispyramide-nach-maslow"
      },
      {
        "id": "beduerfnisse-bedarf-und-nachfrage",
        "title": "Bedürfnisse Bedarf und Nachfrage",
        "folder": "beduerfnisse-bedarf-und-nachfrage"
      },
      {
        "id": "opportunitaetskosten-und-verzicht",
        "title": "Opportunitätskosten und Verzicht",
        "folder": "opportunitaetskosten-und-verzicht"
      },
      {
        "id": "produktionsfaktor-arbeit",
        "title": "Produktionsfaktor Arbeit",
        "folder": "produktionsfaktor-arbeit"
      },
      {
        "id": "produktionsfaktor-boden",
        "title": "Produktionsfaktor Boden",
        "folder": "produktionsfaktor-boden"
      },
      {
        "id": "produktionsfaktor-kapital",
        "title": "Produktionsfaktor Kapital",
        "folder": "produktionsfaktor-kapital"
      },
      {
        "id": "arbeitsteilung-und-spezialisierung",
        "title": "Arbeitsteilung und Spezialisierung",
        "folder": "arbeitsteilung-und-spezialisierung"
      },
      {
        "id": "ressourcenknappheit-und-seltene-erden",
        "title": "Ressourcenknappheit und Seltene Erden",
        "folder": "ressourcenknappheit-und-seltene-erden"
      },
      {
        "id": "oekonomische-soziale-und-oekologische-ziele",
        "title": "Ökonomische soziale und ökologische Ziele",
        "folder": "oekonomische-soziale-und-oekologische-ziele"
      },
      {
        "id": "bildung-als-oekonomischer-faktor",
        "title": "Bildung als ökonomischer Faktor",
        "folder": "bildung-als-oekonomischer-faktor"
      },
      {
        "id": "strukturwandel-vom-bergbau-zur-dienstleistung",
        "title": "Strukturwandel vom Bergbau zur Dienstleistung",
        "folder": "strukturwandel-vom-bergbau-zur-dienstleistung"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ökonomisches+prinzip+bedürfnisse&t=3752"
  },
  "sozialversicherungen-und-soziale-sicherung": {
    "slug": "sozialversicherungen-und-soziale-sicherung",
    "title": "Sozialversicherungen & Gesetzliche Vorsorge",
    "category": "Wirtschaftssysteme & Grundlagen",
    "shortDesc": "Die fünf Säulen der deutschen Sozialversicherung: Kranken-, Renten-, Unfall-, Pflege- und Arbeitslosenversicherung sowie private Absicherung.",
    "longDesc": "Das deutsche Sozialversicherungssystem basiert auf dem Solidaritätsprinzip: Starke stützen Schwache, Gesunde finanzieren Kranke, und Erwerbstätige sichern Rentner ab.",
    "keyPoints": [
      "Fünf Säulen: Krankenversicherung (1883), Unfallversicherung (1884), Rentenversicherung (1889), Arbeitslosenversicherung (1927), Pflegeversicherung (1995)",
      "Solidaritätsprinzip: Beiträge richten sich nach dem Einkommen, Leistungen nach dem tatsächlichen Bedarf",
      "Generationenvertrag: Die aktuellen Beitragszahler finanzieren die aktuellen Rentner im Umlageverfahren",
      "Private Absicherung: Ergänzung durch Berufsunfähigkeits-, Lebens- und Haftpflichtversicherung"
    ],
    "exercises": [
      {
        "id": "das-solidarprinzip-der-sozialversicherung",
        "title": "Das Solidarprinzip der Sozialversicherung",
        "folder": "das-solidarprinzip-der-sozialversicherung"
      },
      {
        "id": "die-gesetzliche-krankenversicherung",
        "title": "Die gesetzliche Krankenversicherung",
        "folder": "die-gesetzliche-krankenversicherung"
      },
      {
        "id": "die-gesetzliche-rentenversicherung",
        "title": "Die gesetzliche Rentenversicherung",
        "folder": "die-gesetzliche-rentenversicherung"
      },
      {
        "id": "die-pflegeversicherung-aufgaben-und-leistungen",
        "title": "Die Pflegeversicherung Aufgaben und Leistungen",
        "folder": "die-pflegeversicherung-aufgaben-und-leistungen"
      },
      {
        "id": "die-gesetzliche-unfallversicherung",
        "title": "Die gesetzliche Unfallversicherung",
        "folder": "die-gesetzliche-unfallversicherung"
      },
      {
        "id": "arbeitslosigkeit-und-die-rolle-der-agentur",
        "title": "Arbeitslosigkeit und die Rolle der Agentur",
        "folder": "arbeitslosigkeit-und-die-rolle-der-agentur"
      },
      {
        "id": "berufsunfaehigkeitsversicherung-vorsorge",
        "title": "Berufsunfähigkeitsversicherung Vorsorge",
        "folder": "berufsunfaehigkeitsversicherung-vorsorge"
      },
      {
        "id": "lebensversicherungen-zur-altersvorsorge",
        "title": "Lebensversicherungen zur Altersvorsorge",
        "folder": "lebensversicherungen-zur-altersvorsorge"
      },
      {
        "id": "private-haftpflichtversicherung-als-basisschutz",
        "title": "Private Haftpflichtversicherung als Basisschutz",
        "folder": "private-haftpflichtversicherung-als-basisschutz"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=sozialversicherung&t=3752"
  },
  "wirtschaftsordnungen-marktwirtschaft-und-planwirtschaft": {
    "slug": "wirtschaftsordnungen-marktwirtschaft-und-planwirtschaft",
    "title": "Wirtschaftsordnungen: Freie Marktwirtschaft vs. Planwirtschaft",
    "category": "Wirtschaftssysteme & Grundlagen",
    "shortDesc": "Koordination über Markt vs. Staat: Adam Smith, unsichtbare Hand, DDR-Zentralverwaltungswirtschaft und das deutsche Wirtschaftswunder.",
    "longDesc": "Wie soll eine Volkswirtschaft organisiert sein? Der Vergleich zwischen freier Marktwirtschaft nach liberalem Vorbild und zentraler Planwirtschaft verdeutlicht die Grundfragen von Eigentum, Preisbildung und staatlicher Lenkung.",
    "keyPoints": [
      "Freie Marktwirtschaft: Privateigentum an Produktionsmitteln, freie Preisbildung durch Angebot und Nachfrage, Gewerbefreiheit und Konsumfreiheit",
      "Planwirtschaft: Staatliches Eigentum, zentrale Festlegung von Produktionsmengen und Preisen durch eine staatliche Plankommission",
      "Adam Smith & die unsichtbare Hand: Das Streben des Einzelnen nach persönlichem Vorteil fördert unbewusst das Wohl der Allgemeinheit",
      "Historischer Vergleich: Wirtschaftswunder der Bundesrepublik vs. Mangelwirtschaft in der DDR"
    ],
    "exercises": [
      {
        "id": "merkmale-der-freien-marktwirtschaft",
        "title": "Merkmale der Freien Marktwirtschaft",
        "folder": "merkmale-der-freien-marktwirtschaft"
      },
      {
        "id": "merkmale-der-zentralverwaltungswirtschaft",
        "title": "Merkmale der Zentralverwaltungswirtschaft",
        "folder": "merkmale-der-zentralverwaltungswirtschaft"
      },
      {
        "id": "das-wirtschaftssystem-der-ddr-3092",
        "title": "Das Wirtschaftssystem der DDR",
        "folder": "das-wirtschaftssystem-der-ddr-3092"
      },
      {
        "id": "das-wirtschaftswunder-984",
        "title": "Das Wirtschaftswunder der Bundesrepublik",
        "folder": "das-wirtschaftswunder-984"
      },
      {
        "id": "marktversagen-durch-externe-effekte",
        "title": "Marktversagen durch externe Effekte",
        "folder": "marktversagen-durch-externe-effekte"
      },
      {
        "id": "privatisierung-oeffentlicher-gueter",
        "title": "Privatisierung öffentlicher Güter",
        "folder": "privatisierung-oeffentlicher-gueter"
      },
      {
        "id": "bedingungsloses-grundeinkommen-pro-und-contra",
        "title": "Bedingungsloses Grundeinkommen Pro und Contra",
        "folder": "bedingungsloses-grundeinkommen-pro-und-contra"
      },
      {
        "id": "3185",
        "title": "Escape Room: Wirtschaftsformen",
        "folder": "escape-room-quot-wirtschaftsformen-quot-3185"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=marktwirtschaft+planwirtschaft&t=3752"
  },
  "soziale-marktwirtschaft-in-deutschland": {
    "slug": "soziale-marktwirtschaft-in-deutschland",
    "title": "Die Soziale Marktwirtschaft in Deutschland",
    "category": "Wirtschaftssysteme & Grundlagen",
    "shortDesc": "Ludwig Erhard 'Wohlstand für alle', staatliche Rahmenbedingungen, Kartellrecht, Sozialausgleich und Tarifautonomie.",
    "longDesc": "Die Soziale Marktwirtschaft verbindet die Leistungsfähigkeit und Freiheit des Marktes mit sozialem Ausgleich und Schutz für Schwächere. Der Staat greift ordnungspolitisch ein, um fairen Wettbewerb zu sichern.",
    "keyPoints": [
      "Konzept nach Ludwig Erhard: 'Wohlstand für alle' durch sozialen Wettbewerb und marktwirtschaftliche Ordnung",
      "Säulen des Sozialstaates: 5 gesetzliche Sozialversicherungen (Kranken-, Renten-, Arbeitslosen-, Unfall- und Pflegeversicherung)",
      "Wettbewerbsschutz: Bundeskartellamt überwacht Fusionen und verbietet Preisabsprachen und Monopole",
      "Tarifautonomie: Gewerkschaften und Arbeitgeberverbände verhandeln Löhne und Arbeitsbedingungen unabhängig vom Staat",
      "Wirtschaftskreislauf: Zusammenspiel von privaten Haushalten, Unternehmen, Staat, Banken und Ausland"
    ],
    "exercises": [
      {
        "id": "angebotsorientierte-wirtschaftspolitik",
        "title": "Angebotsorientierte Wirtschaftspolitik",
        "folder": "angebotsorientierte-wirtschaftspolitik"
      },
      {
        "id": "der-einfache-wirtschaftskreislauf",
        "title": "Der einfache Wirtschaftskreislauf",
        "folder": "der-einfache-wirtschaftskreislauf"
      },
      {
        "id": "der-erweiterte-wirtschaftskreislauf-mit-staat",
        "title": "Der erweiterte Wirtschaftskreislauf mit Staat",
        "folder": "der-erweiterte-wirtschaftskreislauf-mit-staat"
      },
      {
        "id": "die-soziale-marktwirtschaft-in-deutschland",
        "title": "Die Soziale Marktwirtschaft in Deutschland",
        "folder": "die-soziale-marktwirtschaft-in-deutschland"
      },
      {
        "id": "ursachen-von-struktureller-arbeitslosigkeit",
        "title": "Ursachen von struktureller Arbeitslosigkeit",
        "folder": "ursachen-von-struktureller-arbeitslosigkeit"
      },
      {
        "id": "wettbewerbsschutz-und-kartellverbot",
        "title": "Wettbewerbsschutz und Kartellverbot",
        "folder": "wettbewerbsschutz-und-kartellverbot"
      },
      {
        "id": "zielkonflikte-in-der-wirtschaftspolitik",
        "title": "Zielkonflikte in der Wirtschaftspolitik",
        "folder": "zielkonflikte-in-der-wirtschaftspolitik"
      },
      {
        "id": "zielkonflikte-und-zielharmonien",
        "title": "Zielkonflikte und Zielharmonien",
        "folder": "zielkonflikte-und-zielharmonien"
      },
      {
        "id": "3473",
        "title": "Altersarmut und Generationengerechtigkeit",
        "folder": "altersarmut-und-generationengerechtigkeit-3473"
      },
      {
        "id": "vier-tage-woche",
        "title": "Die Vier-Tage-Woche – Radikaler Wohlstand oder wirtschaftlicher Selbstmord",
        "folder": "die-vier-tage-woche-radikaler-wohlstand-oder-wirtschaftlicher-selbstmord"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Die%20Soziale%20Marktwirtschaft%20in%20Deutschland+wirtschaft&t=3752"
  },
  "markt-angebot-nachfrage-und-preisbildung": {
    "slug": "markt-angebot-nachfrage-und-preisbildung",
    "title": "Markt, Angebot, Nachfrage & Preisbildung",
    "category": "Wirtschaftssysteme & Grundlagen",
    "shortDesc": "Gesetz des Angebots und der Nachfrage, Gleichgewichtspreis, Marktformen (Polypol, Oligopol, Monopol) und Preiselastizität.",
    "longDesc": "Auf Märkten treffen Anbieter und Nachfrager aufeinander. Durch den Preismechanismus wird der Markt geräumt und Knappheit signalisiert.",
    "keyPoints": [
      "Gesetz der Nachfrage: Steigt der Preis eines Gutes, sinkt typischerweise die nachgefragte Menge",
      "Gesetz des Angebots: Höhere Preise motivieren Hersteller, größere Mengen anzubieten",
      "Gleichgewichtspreis: Der Schnittpunkt beider Kurven gleicht Angebot und Nachfrage optimal aus",
      "Marktformen: Polypol (viele Anbieter, viele Nachfrager), Oligopol (wenige Großanbieter), Monopol (ein Alleinanbieter)",
      "Preisfunktionen: Lenkungsfunktion, Signalfunktion, Ausgleichsfunktion und Erziehungsfunktion"
    ],
    "exercises": [
      {
        "id": "angebotsueberhang-und-nachfrageueberhang",
        "title": "Angebotsüberhang und Nachfrageüberhang",
        "folder": "angebotsueberhang-und-nachfrageueberhang"
      },
      {
        "id": "bestimmungsfaktoren-der-nachfrage",
        "title": "Bestimmungsfaktoren der Nachfrage",
        "folder": "bestimmungsfaktoren-der-nachfrage"
      },
      {
        "id": "bestimmungsfaktoren-des-angebots",
        "title": "Bestimmungsfaktoren des Angebots",
        "folder": "bestimmungsfaktoren-des-angebots"
      },
      {
        "id": "das-gesetz-der-nachfrage",
        "title": "Das Gesetz der Nachfrage",
        "folder": "das-gesetz-der-nachfrage"
      },
      {
        "id": "das-gesetz-des-angebots",
        "title": "Das Gesetz des Angebots",
        "folder": "das-gesetz-des-angebots"
      },
      {
        "id": "marktformen-polypol-oligopol-monopol",
        "title": "Marktformen Polypol Oligopol Monopol",
        "folder": "marktformen-polypol-oligopol-monopol"
      },
      {
        "id": "marktgleichgewicht-und-gleichgewichtspreis",
        "title": "Marktgleichgewicht und Gleichgewichtspreis",
        "folder": "marktgleichgewicht-und-gleichgewichtspreis"
      },
      {
        "id": "preiselastizitaet-der-nachfrage",
        "title": "Preiselastizität der Nachfrage",
        "folder": "preiselastizitaet-der-nachfrage"
      },
      {
        "id": "preisfunktionen-lenkung-und-signal",
        "title": "Preisfunktionen Lenkung und Signal",
        "folder": "preisfunktionen-lenkung-und-signal"
      },
      {
        "id": "preispsychologie-und-schwellenpreise",
        "title": "Preispsychologie und Schwellenpreise",
        "folder": "preispsychologie-und-schwellenpreise"
      },
      {
        "id": "staatliche-mindestpreise-und-hoechstpreise",
        "title": "Staatliche Mindestpreise und Höchstpreise",
        "folder": "staatliche-mindestpreise-und-hoechstpreise"
      },
      {
        "id": "2875",
        "title": "Marktformen: Funktionen und Arten von Märkten",
        "folder": "marktformen-funktionen-und-arten-von-markten-2875"
      },
      {
        "id": "2877",
        "title": "Angebotsmonopol 1: Tabellarische Gewinnmaximierung",
        "folder": "angebotsmonopol-1-tabellarische-gewinnmaximierung-2877"
      },
      {
        "id": "2878",
        "title": "Angebotsmonopol 2: Grafische Gewinnmaximierung (Gesamtbetrachtung)",
        "folder": "angebotsmonopol-2-grafische-gewinnmaximierung-gesamtbetrachtung-2878"
      },
      {
        "id": "2879",
        "title": "Angebotsmonopol 3: Grafische Gewinnmaximierung (Stückbetrachtung)",
        "folder": "angebotsmonopol-3-grafische-gewinnmaximierung-stuckbetrachtung-2879"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Markt%2C%20Angebot%2C%20Nachfrage%20%26%20Preisbildung+wirtschaft&t=3752"
  },
  "geld-funktionen-und-zahlungssysteme": {
    "slug": "geld-funktionen-und-zahlungssysteme",
    "title": "Geld, Bankensystem & Zahlungsverkehr",
    "category": "Geld, Banken, Börse & Finanzen",
    "shortDesc": "Funktionen des Geldes, Girokonto für Jugendliche, SEPA-Überweisung, Lastschrift, Kreditkarten und Online-Banking.",
    "longDesc": "Geld ist das zentrale Tausch- und Verrechnungsmittel einer Volkswirtschaft. Moderne Zahlungssysteme verlagern Bargeld zunehmend auf digitale und mobile Transaktionen.",
    "keyPoints": [
      "3 Geldfunktionen: Tauschmittel, Recheneinheit/Wertmaßstab und Wertaufbewahrungsmittel",
      "Bankensystem: Geschäftsbanken, Sparkassen und Genossenschaftsbanken zur Kreditvergabe und Einlagenverwaltung",
      "Zahlungsverkehr: SEPA-Überweisung (IBAN/BIC), Lastschrift, Dauerauftrag, Debitkarten (Girocard) und Kreditkarten",
      "Sicherheit: Zwei-Faktor-Authentifizierung, Schutz vor Betrug beim Mobile und Online Banking"
    ],
    "exercises": [
      {
        "id": "aufbau-des-deutschen-bankensystems",
        "title": "Aufbau des deutschen Bankensystems",
        "folder": "aufbau-des-deutschen-bankensystems"
      },
      {
        "id": "das-girokonto-fuer-jugendliche",
        "title": "Das Girokonto für Jugendliche",
        "folder": "das-girokonto-fuer-jugendliche"
      },
      {
        "id": "der-bargeldlose-zahlungsverkehr",
        "title": "Der bargeldlose Zahlungsverkehr",
        "folder": "der-bargeldlose-zahlungsverkehr"
      },
      {
        "id": "der-dispositionskredit-und-seine-kosten",
        "title": "Der Dispositionskredit und seine Kosten",
        "folder": "der-dispositionskredit-und-seine-kosten"
      },
      {
        "id": "die-schufa-auskunft-und-das-scoring",
        "title": "Die Schufa Auskunft und das Scoring",
        "folder": "die-schufa-auskunft-und-das-scoring"
      },
      {
        "id": "digitale-euro-und-die-zukunft-des-geldes",
        "title": "Digitale Euro und die Zukunft des Geldes",
        "folder": "digitale-euro-und-die-zukunft-des-geldes"
      },
      {
        "id": "funktionen-des-geldes-in-der-wirtschaft",
        "title": "Funktionen des Geldes in der Wirtschaft",
        "folder": "funktionen-des-geldes-in-der-wirtschaft"
      },
      {
        "id": "funktionen-des-geldes",
        "title": "Funktionen des Geldes",
        "folder": "funktionen-des-geldes"
      },
      {
        "id": "kreditkarten-und-debitkarten-im-vergleich",
        "title": "Kreditkarten und Debitkarten im Vergleich",
        "folder": "kreditkarten-und-debitkarten-im-vergleich"
      },
      {
        "id": "online-banking-und-datensicherheit",
        "title": "Online Banking und Datensicherheit",
        "folder": "online-banking-und-datensicherheit"
      },
      {
        "id": "sepa-lastschrift-und-ueberweisung",
        "title": "SEPA Lastschrift und Überweisung",
        "folder": "sepa-lastschrift-und-ueberweisung"
      },
      {
        "id": "bankensystem-funktion",
        "title": "Wie funktioniert das Bankensystem",
        "folder": "wie-funktioniert-das-bankensystem"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Geld%2C%20Bankensystem%20%26%20Zahlungsverkehr+wirtschaft&t=3752"
  },
  "ezb-bundesbank-und-geldpolitik": {
    "slug": "ezb-bundesbank-und-geldpolitik",
    "title": "EZB, Geldpolitik, Inflation & Deflation",
    "category": "Geld, Banken, Börse & Finanzen",
    "shortDesc": "Europäische Zentralbank (EZB), Leitzins, Preisstabilität, Ursachen der Inflation, Warenkorb und Kaufkraftverlust.",
    "longDesc": "Die Europäische Zentralbank (EZB) steuert die Geldmenge im Euroraum mit dem vorrangigen Ziel der Preisstabilität über Zinsinstrumente und Offenmarktgeschäfte.",
    "keyPoints": [
      "Vorrangiges Ziel der EZB: Preisstabilität (Inflationsrate nahe 2% mittelfristig)",
      "Leitzins: Zins, zu dem Geschäftsbanken Geld bei der Zentralbank leihen oder anlegen",
      "Inflation vs. Deflation: Inflation vermindert die Kaufkraft; Deflation führt zu Konsumaufschub und Rezession",
      "Verbraucherpreisindex: Statistischer Warenkorb zur Messung der Preisentwicklung",
      "Konjunkturzyklus: Aufschwung (Expansion) ➔ Boom (Hochkonjunktur) ➔ Abschwung (Rezession) ➔ Tief (Depression)"
    ],
    "exercises": [
      {
        "id": "aufbau-und-aufgaben-der-ezb",
        "title": "Aufbau und Aufgaben der EZB",
        "folder": "aufbau-und-aufgaben-der-ezb"
      },
      {
        "id": "deflation-ursachen-und-gefahren",
        "title": "Deflation Ursachen und Gefahren",
        "folder": "deflation-ursachen-und-gefahren"
      },
      {
        "id": "der-konjunkturzyklus-und-seine-phasen",
        "title": "Der Konjunkturzyklus und seine Phasen",
        "folder": "der-konjunkturzyklus-und-seine-phasen"
      },
      {
        "id": "der-warenkorb-und-der-preisindex",
        "title": "Der Warenkorb und der Preisindex",
        "folder": "der-warenkorb-und-der-preisindex"
      },
      {
        "id": "die-rolle-der-bundesbank-im-eurosystem",
        "title": "Die Rolle der Bundesbank im Eurosystem",
        "folder": "die-rolle-der-bundesbank-im-eurosystem"
      },
      {
        "id": "fruehindikatoren-praesenzindikatoren-spaetindikatoren",
        "title": "Frühindikatoren Präsenzindikatoren Spätindikatoren",
        "folder": "fruehindikatoren-praesenzindikatoren-spaetindikatoren"
      },
      {
        "id": "geldpolitische-instrumente-der-zentralbank",
        "title": "Geldpolitische Instrumente der Zentralbank",
        "folder": "geldpolitische-instrumente-der-zentralbank"
      },
      {
        "id": "inflation-und-kaufkraftverlust-berechnen",
        "title": "Inflation und Kaufkraftverlust berechnen",
        "folder": "inflation-und-kaufkraftverlust-berechnen"
      },
      {
        "id": "inflation-ursachen-und-wirkungen",
        "title": "Inflation Ursachen und Wirkungen",
        "folder": "inflation-ursachen-und-wirkungen"
      },
      {
        "id": "monetarismus-nach-milton-friedman",
        "title": "Monetarismus nach Milton Friedman",
        "folder": "monetarismus-nach-milton-friedman"
      },
      {
        "id": "ursachen-fuer-konjunkturschwankungen",
        "title": "Ursachen für Konjunkturschwankungen",
        "folder": "ursachen-fuer-konjunkturschwankungen"
      },
      {
        "id": "6600",
        "title": "Die Inflation und ihre Folgen",
        "folder": "die-inflation-und-ihre-folgen-6600"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=EZB%2C%20Geldpolitik%2C%20Inflation%20%26%20Deflation+wirtschaft&t=3752"
  },
  "aktien-fonds-etfs-und-boerse": {
    "slug": "aktien-fonds-etfs-und-boerse",
    "title": "Wertpapiere, Aktien, ETFs & Börsenhandel",
    "category": "Geld, Banken, Börse & Finanzen",
    "shortDesc": "Funktionsweise der Börse, Aktien als Unternehmensanteile, Dividenden, ETFs, Risikostreuung und Anleihen.",
    "longDesc": "Die Börse ermöglicht Unternehmen die Eigenkapitalaufnahme und Anlegern die Vermögensbildung über Aktien, ETFs, Anleihen und Fonds.",
    "keyPoints": [
      "Aktie: Anteilsschein an einer AG; Ertrag durch Kursgewinne und Dividenden",
      "Anleihen: Festverzinsliche Schuldverschreibungen von Staaten oder Unternehmen",
      "ETF & Fonds: Bündelung von vielen Wertpapieren zur Risikostreuung (Diversifikation)",
      "Magisches Dreieck: Balance aus Rendite, Risiko und Liquidität"
    ],
    "exercises": [
      {
        "id": "chancen-und-risiken-von-aktien",
        "title": "Chancen und Risiken von Aktien",
        "folder": "chancen-und-risiken-von-aktien"
      },
      {
        "id": "exchange-traded-funds-kurz-etf",
        "title": "Exchange Traded Funds kurz ETF",
        "folder": "exchange-traded-funds-kurz-etf"
      },
      {
        "id": "festverzinsliche-wertpapiere-und-anleihen",
        "title": "Festverzinsliche Wertpapiere und Anleihen",
        "folder": "festverzinsliche-wertpapiere-und-anleihen"
      },
      {
        "id": "immobilien-als-kapitalanlage",
        "title": "Immobilien als Kapitalanlage",
        "folder": "immobilien-als-kapitalanlage"
      },
      {
        "id": "investmentfonds-und-risikostreuung",
        "title": "Investmentfonds und Risikostreuung",
        "folder": "investmentfonds-und-risikostreuung"
      },
      {
        "id": "kryptowaehrungen-und-blockchain-technologie",
        "title": "Kryptowährungen und Blockchain Technologie",
        "folder": "kryptowaehrungen-und-blockchain-technologie"
      },
      {
        "id": "nachhaltige-geldanlage-nach-esg-kriterien",
        "title": "Nachhaltige Geldanlage nach ESG Kriterien",
        "folder": "nachhaltige-geldanlage-nach-esg-kriterien"
      },
      {
        "id": "rohstoffe-und-gold-als-krisenwaehrung",
        "title": "Rohstoffe und Gold als Krisenwährung",
        "folder": "rohstoffe-und-gold-als-krisenwaehrung"
      },
      {
        "id": "wertpapiere-und-die-boerse-grundlagen",
        "title": "Wertpapiere und die Börse Grundlagen",
        "folder": "wertpapiere-und-die-boerse-grundlagen"
      },
      {
        "id": "zinsrechnung-und-zinseszins",
        "title": "Zinsrechnung und Zinseszins",
        "folder": "zinsrechnung-und-zinseszins"
      },
      {
        "id": "aktienmarkt-funktion",
        "title": "Wie funktioniert der Aktienmarkt",
        "folder": "wie-funktioniert-der-aktienmarkt"
      },
      {
        "id": "3194",
        "title": "Escape Room: Bank und Börse",
        "folder": "escape-room-quot-bank-und-borse-quot-3194"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Wertpapiere%2C%20Aktien%2C%20ETFs%20%26%20B%C3%B6rsenhandel+wirtschaft&t=3752"
  },
  "kredite-schulden-und-verbraucherfinanzen": {
    "slug": "kredite-schulden-und-verbraucherfinanzen",
    "title": "Kredite, Verschuldung & Privatinsolvenz",
    "category": "Geld, Banken, Börse & Finanzen",
    "shortDesc": "Ratenkredit, effektiver Jahreszins, Kreditsicherheiten, Schuldenfalle, Haushaltsplan und Privatinsolvenzverfahren.",
    "longDesc": "Kredite ermöglichen größere Investitionen, bergen jedoch bei fehlender Haushaltsplanung die Gefahr dauerhafter Überschuldung.",
    "keyPoints": [
      "Kreditarten: Ratenkredit, Dispositionskredit, Annuitätendarlehen zur Baufinanzierung",
      "Effektiver Jahreszins: Gesetzlicher Vergleichsmaßstab für alle Kreditkosten",
      "Kreditsicherheiten: Bürgschaft, Gehaltsabtretung, Grundschuld",
      "Haushaltsbuch & Budgetierung: Einnahmen-Ausgaben-Kontrolle zur Schuldenvermeidung",
      "Privatinsolvenz: Gesetzlicher Weg zur Restschuldbefreiung nach 3 Jahren"
    ],
    "exercises": [
      {
        "id": "das-annuitaetendarlehen-zur-baufinanzierung",
        "title": "Das Annuitätendarlehen zur Baufinanzierung",
        "folder": "das-annuitaetendarlehen-zur-baufinanzierung"
      },
      {
        "id": "der-private-haushaltsplan-und-budgetierung",
        "title": "Der private Haushaltsplan und Budgetierung",
        "folder": "der-private-haushaltsplan-und-budgetierung"
      },
      {
        "id": "die-liquiditaetsplanung-im-privathaushalt",
        "title": "Die Liquiditätsplanung im Privathaushalt",
        "folder": "die-liquiditaetsplanung-im-privathaushalt"
      },
      {
        "id": "kreditfaehigkeit-und-kreditwuerdigkeit",
        "title": "Kreditfähigkeit und Kreditwürdigkeit",
        "folder": "kreditfaehigkeit-und-kreditwuerdigkeit"
      },
      {
        "id": "kreditsicherheiten-buergschaft-und-pfand",
        "title": "Kreditsicherheiten Bürgschaft und Pfand",
        "folder": "kreditsicherheiten-buergschaft-und-pfand"
      },
      {
        "id": "leasing-als-finanzierungsalternative",
        "title": "Leasing als Finanzierungsalternative",
        "folder": "leasing-als-finanzierungsalternative"
      },
      {
        "id": "leasing-versus-kreditfinanzierung",
        "title": "Leasing versus Kreditfinanzierung",
        "folder": "leasing-versus-kreditfinanzierung"
      },
      {
        "id": "privatinsolvenz-und-restschuldbefreiung",
        "title": "Privatinsolvenz und Restschuldbefreiung",
        "folder": "privatinsolvenz-und-restschuldbefreiung"
      },
      {
        "id": "ratenkredite-und-effektiver-jahreszins",
        "title": "Ratenkredite und effektiver Jahreszins",
        "folder": "ratenkredite-und-effektiver-jahreszins"
      },
      {
        "id": "ursachen-der-privaten-ueberschuldung",
        "title": "Ursachen der privaten Überschuldung",
        "folder": "ursachen-der-privaten-ueberschuldung"
      },
      {
        "id": "der-darlehensvertrag-und-kreditrecht",
        "title": "Der Darlehensvertrag und Kreditrecht",
        "folder": "der-darlehensvertrag-und-kreditrecht"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kredite%2C%20Verschuldung%20%26%20Privatinsolvenz+wirtschaft&t=3752"
  },
  "globalisierung-welthandel-und-lieferketten": {
    "slug": "globalisierung-welthandel-und-lieferketten",
    "title": "Globalisierung, Welthandel & Globale Lieferketten",
    "category": "Weltwirtschaft & Globalisierung",
    "shortDesc": "Treiber der Globalisierung, internationale Arbeitsteilung, Containerschifffahrt, Lieferketten und globale Vernetzung.",
    "longDesc": "Die Globalisierung vernetzt Volkswirtschaften weltweit. Sinkende Transportkosten und digitale Vernetzung ermöglichen internationale Wertschöpfungsketten.",
    "keyPoints": [
      "Treiber: Containerschifffahrt, Digitalisierung, weltweiter Abbau von Zöllen",
      "Chancen: Internationale Spezialisierung, sinkende Produktpreise, Schwellenländer-Aufstieg",
      "Risiken: Lieferkettenstörungen, Auslagerung von Umweltbelastungen, Abhängigkeiten bei kritischen Rohstoffen",
      "Lieferkettengesetz (LkSG): Pflicht zur Einhaltung von Menschenrechten und Umweltstandards weltweit"
    ],
    "exercises": [
      {
        "id": "die-rolle-der-welthandelsorganisation-wto",
        "title": "Die Rolle der Welthandelsorganisation WTO",
        "folder": "die-rolle-der-welthandelsorganisation-wto"
      },
      {
        "id": "die-wirtschaftliche-bedeutung-von-china",
        "title": "Die wirtschaftliche Bedeutung von China",
        "folder": "die-wirtschaftliche-bedeutung-von-china"
      },
      {
        "id": "gewinner-und-verlierer-der-globalisierung",
        "title": "Gewinner und Verlierer der Globalisierung",
        "folder": "gewinner-und-verlierer-der-globalisierung"
      },
      {
        "id": "just-in-time-logistik-prozess-und-risiken",
        "title": "Just in Time Logistik Prozess und Risiken",
        "folder": "just-in-time-logistik-prozess-und-risiken"
      },
      {
        "id": "kinderarbeit-in-globalen-lieferketten",
        "title": "Kinderarbeit in globalen Lieferketten",
        "folder": "kinderarbeit-in-globalen-lieferketten"
      },
      {
        "id": "lieferkettensorgfaltspflichtengesetz-kurz-lksg",
        "title": "Lieferkettensorgfaltspflichtengesetz kurz LKSG",
        "folder": "lieferkettensorgfaltspflichtengesetz-kurz-lksg"
      },
      {
        "id": "logistik-im-welthandel-containerschifffahrt",
        "title": "Logistik im Welthandel Containerschifffahrt",
        "folder": "logistik-im-welthandel-containerschifffahrt"
      },
      {
        "id": "outsourcing-und-offshoring-trends",
        "title": "Outsourcing und Offshoring Trends",
        "folder": "outsourcing-und-offshoring-trends"
      },
      {
        "id": "rohstoffabhaengigkeiten-und-geopolitik",
        "title": "Rohstoffabhängigkeiten und Geopolitik",
        "folder": "rohstoffabhaengigkeiten-und-geopolitik"
      },
      {
        "id": "schwellenlaender-und-die-brics-staaten",
        "title": "Schwellenländer und die BRICS Staaten",
        "folder": "schwellenlaender-und-die-brics-staaten"
      },
      {
        "id": "ursachen-und-treiber-der-globalisierung",
        "title": "Ursachen und Treiber der Globalisierung",
        "folder": "ursachen-und-treiber-der-globalisierung"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Globalisierung%2C%20Welthandel%20%26%20Globale%20Lieferketten+wirtschaft&t=3752"
  },
  "freihandel-protektionismus-und-organisationen": {
    "slug": "freihandel-protektionismus-und-organisationen",
    "title": "Freihandel, Protektionismus & WTO, IWF, Weltbank",
    "category": "Weltwirtschaft & Globalisierung",
    "shortDesc": "Zölle, Handelshemmnisse, Freihandelsabkommen, Aufgaben der Welthandelsorganisation (WTO), IWF und Weltbank.",
    "longDesc": "Internationale Handelsbeziehungen bewegen sich im Spannungsfeld zwischen freiem Warenaustausch und nationalem Schutz durch Zölle und Subventionen.",
    "keyPoints": [
      "Freihandel vs. Protektionismus: Freier Marktzugang vs. Zölle und Einfuhrquoten",
      "WTO: Überwachung von Handelsregeln und Schlichtung von Streitigkeiten",
      "IWF & Weltbank: Finanzhilfen bei Zahlungsbilanzkrisen und Entwicklungsprojekte",
      "Devisenmarkt: Wechselkursbildung und Währungsreserven",
      "Steueroasen: Problematik von Steuerflucht und Gewinnverschiebung multinationaler Konzerne"
    ],
    "exercises": [
      {
        "id": "aufgaben-des-internationalen-waehrungsfonds-iwf",
        "title": "Aufgaben des Internationalen Währungsfonds IWF",
        "folder": "aufgaben-des-internationalen-waehrungsfonds-iwf"
      },
      {
        "id": "die-weltbank-und-entwicklungszusammenarbeit",
        "title": "Die Weltbank und Entwicklungszusammenarbeit",
        "folder": "die-weltbank-und-entwicklungszusammenarbeit"
      },
      {
        "id": "die-zahlungsbilanz-und-ihre-teilbilanzen",
        "title": "Die Zahlungsbilanz und ihre Teilbilanzen",
        "folder": "die-zahlungsbilanz-und-ihre-teilbilanzen"
      },
      {
        "id": "handelskonflikte-und-zoelle",
        "title": "Handelskonflikte und Zölle",
        "folder": "handelskonflikte-und-zoelle"
      },
      {
        "id": "mikrofinanzierung-in-entwicklungslaendern",
        "title": "Mikrofinanzierung in Entwicklungsländern",
        "folder": "mikrofinanzierung-in-entwicklungslaendern"
      },
      {
        "id": "protektionismus-und-handelshemmnisse",
        "title": "Protektionismus und Handelshemmnisse",
        "folder": "protektionismus-und-handelshemmnisse"
      },
      {
        "id": "protektionismus-versus-freihandel",
        "title": "Protektionismus versus Freihandel",
        "folder": "protektionismus-versus-freihandel"
      },
      {
        "id": "steuerflucht-und-steueroasen-weltweit",
        "title": "Steuerflucht und Steueroasen weltweit",
        "folder": "steuerflucht-und-steueroasen-weltweit"
      },
      {
        "id": "vorteile-des-internationalen-freihandels",
        "title": "Vorteile des internationalen Freihandels",
        "folder": "vorteile-des-internationalen-freihandels"
      },
      {
        "id": "wechselkursbildung-am-devisenmarkt",
        "title": "Wechselkursbildung am Devisenmarkt",
        "folder": "wechselkursbildung-am-devisenmarkt"
      },
      {
        "id": "waehrungsraeume-und-der-us-dollar",
        "title": "Währungsräume und der US Dollar",
        "folder": "waehrungsraeume-und-der-us-dollar"
      },
      {
        "id": "4661",
        "title": "Zölle und Auswirkungen auf die Wirtschaft",
        "folder": "zolle-und-auswirkungen-auf-die-wirtschaft-4661"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Freihandel%2C%20Protektionismus%20%26%20WTO%2C%20IWF%2C%20Weltbank+wirtschaft&t=3752"
  },
  "nachhaltiges-wirtschaften-und-klimawandel": {
    "slug": "nachhaltiges-wirtschaften-und-klimawandel",
    "title": "Nachhaltigkeit, Kreislaufwirtschaft & CSR",
    "category": "Weltwirtschaft & Globalisierung",
    "shortDesc": "Ökologischer Fußabdruck, Cradle to Cradle, CO2-Zertifikatehandel, Corporate Social Responsibility und Fairtrade.",
    "longDesc": "Ökologisches Wirtschaften zielt auf ressourcenschonende Produktionsweisen und geschlossene Stoffkreisläufe zur Bewältigung des Klimawandels.",
    "keyPoints": [
      "Nachhaltigkeitsdreieck: Ökologie, Ökonomie und Soziales im Einklang",
      "Kreislaufwirtschaft: Wiederverwertung von Wertstoffen (Cradle-to-Cradle) statt Wegwerfgesellschaft",
      "CO2-Handel: Marktwirtschaftliche Bepreisung von Emissionen durch Zertifikate",
      "CSR (Corporate Social Responsibility): Unternehmerische Gesellschaftsverantwortung",
      "Greenwashing: Täuschende Werbung für vermeintliche Nachhaltigkeit"
    ],
    "exercises": [
      {
        "id": "bio-siegel-und-fairtrade-standards",
        "title": "Bio Siegel und Fairtrade Standards",
        "folder": "bio-siegel-und-fairtrade-standards"
      },
      {
        "id": "co2-zertifikatehandel-und-emissionsrechte",
        "title": "CO2 Zertifikatehandel und Emissionsrechte",
        "folder": "co2-zertifikatehandel-und-emissionsrechte"
      },
      {
        "id": "corporate-social-responsibility-csr",
        "title": "Corporate Social Responsibility CSR",
        "folder": "corporate-social-responsibility-csr"
      },
      {
        "id": "cradle-to-cradle-designprinzipien",
        "title": "Cradle to Cradle Designprinzipien",
        "folder": "cradle-to-cradle-designprinzipien"
      },
      {
        "id": "der-oekologische-fussabdruck-von-produkten",
        "title": "Der ökologische Fußabdruck von Produkten",
        "folder": "der-oekologische-fussabdruck-von-produkten"
      },
      {
        "id": "die-wirtschaftlichen-folgen-des-klimawandels",
        "title": "Die wirtschaftlichen Folgen des Klimawandels",
        "folder": "die-wirtschaftlichen-folgen-des-klimawandels"
      },
      {
        "id": "erneuerbare-energien-als-wirtschaftsfaktor",
        "title": "Erneuerbare Energien als Wirtschaftsfaktor",
        "folder": "erneuerbare-energien-als-wirtschaftsfaktor"
      },
      {
        "id": "ethischer-konsum-und-konsumentenboykott",
        "title": "Ethischer Konsum und Konsumentenboykott",
        "folder": "ethischer-konsum-und-konsumentenboykott"
      },
      {
        "id": "greenwashing-in-der-unternehmenswerbung",
        "title": "Greenwashing in der Unternehmenswerbung",
        "folder": "greenwashing-in-der-unternehmenswerbung"
      },
      {
        "id": "kreislaufwirtschaft-und-recycling-konzepte",
        "title": "Kreislaufwirtschaft und Recycling Konzepte",
        "folder": "kreislaufwirtschaft-und-recycling-konzepte"
      },
      {
        "id": "nachhaltigkeit-und-generationengerechtigkeit",
        "title": "Nachhaltigkeit und Generationengerechtigkeit",
        "folder": "nachhaltigkeit-und-generationengerechtigkeit"
      },
      {
        "id": "nachhaltigkeitsberichte-von-unternehmen",
        "title": "Nachhaltigkeitsberichte von Unternehmen",
        "folder": "nachhaltigkeitsberichte-von-unternehmen"
      },
      {
        "id": "zero-waste-strategien-in-der-produktion",
        "title": "Zero Waste Strategien in der Produktion",
        "folder": "zero-waste-strategien-in-der-produktion"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Nachhaltigkeit%2C%20Kreislaufwirtschaft%20%26%20CSR+wirtschaft&t=3752"
  },
  "migration-und-weltwirtschaft": {
    "slug": "migration-und-weltwirtschaft",
    "title": "Migration, Arbeitsmarkt & Globale Wirtschaft",
    "category": "Weltwirtschaft & Globalisierung",
    "shortDesc": "Push- und Pull-Faktoren, Fachkräfteeinwanderung, Remittances (Rücküberweisungen), Demografie und globale Arbeitsmärkte.",
    "longDesc": "Globale Wanderungsbewegungen haben enorme wirtschaftliche Auswirkungen sowohl auf Herkunfts- als auch auf Zielländer. Migration schließt Fachkräftelücken und fördert den internationalen Kapitaltransfer.",
    "keyPoints": [
      "Push- und Pull-Faktoren: Wirtschaftliche Not, Krieg, Klimafolgen (Push) vs. Wohlstand, Arbeitsplätze, Sicherheit (Pull)",
      "Wirtschaftliche Effekte: Schließen von demografischen Lücken im Arbeitsmarkt, Beitragszahler in Sozialsysteme",
      "Rücküberweisungen (Remittances): Migranten senden Milliardenbeträge an Familien in Herkunftsländern – oft mehr als offizielle Entwicklungshilfe",
      "Braindrain vs. Braingain: Verlust qualifizierter Fachkräfte in Schwellenländern vs. Kompetenzgewinn durch weltweite Vernetzung"
    ],
    "exercises": [
      {
        "id": "migration-und-ihre-auswirkungen-auf-die-wirtschaftliche-entwicklung-5511",
        "title": "Migration und ihre Auswirkungen auf die wirtschaftliche Entwicklung",
        "folder": "migration-und-ihre-auswirkungen-auf-die-wirtschaftliche-entwicklung-5511"
      },
      {
        "id": "migrationstrends-und-ihre-auswirkungen-auf-gesellschaften-5512",
        "title": "Migrationstrends und ihre Auswirkungen auf Gesellschaften",
        "folder": "migrationstrends-und-ihre-auswirkungen-auf-gesellschaften-5512"
      },
      {
        "id": "migration-und-der-globale-arbeitsmarkt",
        "title": "Migration und der globale Arbeitsmarkt",
        "folder": "migration-und-der-globale-arbeitsmarkt"
      },
      {
        "id": "migration-und-ihre-rolle-in-der-globalisierung-5550",
        "title": "Migration und ihre Rolle in der Globalisierung",
        "folder": "migration-und-ihre-rolle-in-der-globalisierung-5550"
      },
      {
        "id": "der-demografische-wandel-auswirkungen-auf-die-arbeitsmarkte-und-sozialsysteme-5439",
        "title": "Der demografische Wandel: Auswirkungen auf Arbeitsmärkte und Sozialsysteme",
        "folder": "der-demografische-wandel-auswirkungen-auf-die-arbeitsmarkte-und-sozialsysteme-5439"
      },
      {
        "id": "zuwanderung-und-integration-ein-weltweites-phanomen-5578",
        "title": "Zuwanderung und Integration: Ein weltweites Phänomen",
        "folder": "zuwanderung-und-integration-ein-weltweites-phanomen-5578"
      },
      {
        "id": "die-ursachen-und-folgen-von-landflucht-und-stadtischer-migration-5479",
        "title": "Die Ursachen und Folgen von Landflucht und städtischer Migration",
        "folder": "die-ursachen-und-folgen-von-landflucht-und-stadtischer-migration-5479"
      },
      {
        "id": "digitale-spaltung-zwischen-nord-und-sued",
        "title": "Digitale Spaltung zwischen Nord und Süd",
        "folder": "digitale-spaltung-zwischen-nord-und-sued"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=migration+wirtschaft&t=3752"
  },
  "globale-landwirtschaft-im-21-jahrhundert": {
    "slug": "globale-landwirtschaft-im-21-jahrhundert",
    "title": "Landwirtschaft & Globale Ernährungssicherheit",
    "category": "Weltwirtschaft & Globalisierung",
    "shortDesc": "Agrarökonomie, Welternährung, industrielle Landwirtschaft, Biodiversität, Strukturwandel und globale Agrarpolitik.",
    "longDesc": "Die Landwirtschaft steht vor der gewaltigen Aufgabe, eine wachsende Weltbevölkerung nachhaltig zu ernähren und gleichzeitig Boden, Wasser und Klima zu schonen.",
    "keyPoints": [
      "Agrarsektor: Primärer Wirtschaftssektor, Basis für Nahrungsmittelsicherheit und Rohstoffversorgung",
      "Herausforderungen: Bodendegradation, Wasserknappheit, Klimawandel und Preisschwankungen an den Agrarbörsen",
      "Strukturwandel: Technisierung, Betriebsvergrößerungen und europäische Agrarpolitik (GAP)",
      "Präzisionslandwirtschaft: Smart Farming, Drohnentechnologie und ressourcenschonende Bewässerung"
    ],
    "exercises": [
      {
        "id": "landwirtschaft-und-ihre-globalen-herausforderungen-im-21-jahrhundert-5510",
        "title": "Landwirtschaft und ihre globalen Herausforderungen im 21. Jahrhundert",
        "folder": "landwirtschaft-und-ihre-globalen-herausforderungen-im-21-jahrhundert-5510"
      },
      {
        "id": "bauernwut-in-europa-der-verzweifelte-aufstand-gegen-die-agrarpolitik",
        "title": "Bauernproteste in Europa: Aufstand gegen Agrarpolitik",
        "folder": "bauernwut-in-europa-der-verzweifelte-aufstand-gegen-die-agrarpolitik"
      },
      {
        "id": "strukturwandel-in-der-landwirtschaft-3592",
        "title": "Strukturwandel in der Landwirtschaft",
        "folder": "strukturwandel-in-der-landwirtschaft-3592"
      },
      {
        "id": "landwirtschaft-in-den-usa-2049",
        "title": "Landwirtschaft in den USA: Großbetriebe & Monokulturen",
        "folder": "landwirtschaft-in-den-usa-2049"
      },
      {
        "id": "landwirtschaft-in-spanien-2050",
        "title": "Landwirtschaft in Spanien: Gewächshäuser & Wassermangel",
        "folder": "landwirtschaft-in-spanien-2050"
      },
      {
        "id": "landwirtschaft-in-sterreich-und-in-den-usa-2051",
        "title": "Landwirtschaft im Vergleich: Österreich und die USA",
        "folder": "landwirtschaft-in-sterreich-und-in-den-usa-2051"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=landwirtschaft+wirtschaft&t=3752"
  },
  "rechtsgeschaefte-und-geschaeftsfaehigkeit": {
    "slug": "rechtsgeschaefte-und-geschaeftsfaehigkeit",
    "title": "Rechtsgeschäfte, Geschäftsfähigkeit & Willenserklärungen",
    "category": "Recht, Verträge & Verbraucherschutz",
    "shortDesc": "Rechtsfähigkeit ab Geburt, Geschäftsfähigkeit (0-7, 7-18, ab 18), Willenserklärungen und Nichtigkeit von Verträgen.",
    "longDesc": "Das Bürgerliche Gesetzbuch (BGB) regelt die Rechtsbeziehungen von Personen. Die abgestufte Geschäftsfähigkeit schützt Jugendliche vor übereilten Verträgen.",
    "keyPoints": [
      "Rechtsfähigkeit: Jeder Mensch ist ab der Vollendung der Geburt rechtsfähig",
      "Geschäftsfähigkeit: Geschäftsunfähig (< 7 J.), beschränkt geschäftsfähig (7-18 J.), voll geschäftsfähig (ab 18 J.)",
      "Taschengeldparagraph (§ 110 BGB): Verträge ohne Zustimmung gültig, wenn mit eigenem Taschengeld sofort bezahlt",
      "Willenserklärung: Äußerung mit Rechtsbindungswillen (mündlich, schriftlich oder konkludent)",
      "Formvorschriften: Schriftform, notarielle Beglaubigung oder Beurkundung"
    ],
    "exercises": [
      {
        "id": "aufbau-und-abgabe-von-willenserklaerungen",
        "title": "Aufbau und Abgabe von Willenserklärungen",
        "folder": "aufbau-und-abgabe-von-willenserklaerungen"
      },
      {
        "id": "die-beschraenkte-geschaeftsfaehigkeit-minderjaehriger",
        "title": "Die beschränkte Geschäftsfähigkeit Minderjähriger",
        "folder": "die-beschraenkte-geschaeftsfaehigkeit-minderjaehriger"
      },
      {
        "id": "einseitige-und-mehrseitige-rechtsgeschaefte",
        "title": "Einseitige und mehrseitige Rechtsgeschäfte",
        "folder": "einseitige-und-mehrseitige-rechtsgeschaefte"
      },
      {
        "id": "formvorschriften-von-schriftform-bis-notar",
        "title": "Formvorschriften von Schriftform bis Notar",
        "folder": "formvorschriften-von-schriftform-bis-notar"
      },
      {
        "id": "nichtigkeit-von-rechtsgeschaeften",
        "title": "Nichtigkeit von Rechtsgeschäften",
        "folder": "nichtigkeit-von-rechtsgeschaeften"
      },
      {
        "id": "rechtsfaehigkeit-von-personen-und-firmen",
        "title": "Rechtsfähigkeit von Personen und Firmen",
        "folder": "rechtsfaehigkeit-von-personen-und-firmen"
      },
      {
        "id": "zivilprozess-versus-strafprozess",
        "title": "Zivilprozess versus Strafprozess",
        "folder": "zivilprozess-versus-strafprozess"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rechtsgesch%C3%A4fte%2C%20Gesch%C3%A4ftsf%C3%A4higkeit%20%26%20Willenserkl%C3%A4rungen+wirtschaft&t=3752"
  },
  "kaufvertrag-und-vertragsstoerungen": {
    "slug": "kaufvertrag-und-vertragsstoerungen",
    "title": "Der Kaufvertrag: Abschluss, Eigentum & Sachmängel",
    "category": "Recht, Verträge & Verbraucherschutz",
    "shortDesc": "Verpflichtungs- und Erfüllungsgeschäft, Eigentumsvorbehalt, Sachmängelarten und die gesetzlichen Mängelrechte des Käufers.",
    "longDesc": "Der Kaufvertrag ist das wichtigste Alltagsgeschäft. Das deutsche Recht trennt im Abstraktionsprinzip strikt zwischen dem schuldrechtlichen Verpflichtungsgeschäft und der dinglichen Übereignung.",
    "keyPoints": [
      "Zwei Willenserklärungen: Antrag (Angebot) und Annahme führen zum Vertragsschluss",
      "Trennungs- und Abstraktionsprinzip: Trennung von Verpflichtungsgeschäft (§ 433 BGB) und Erfüllungsgeschäft (§ 929 BGB)",
      "Besitz vs. Eigentum: Besitz = tatsächliche Herrschaft; Eigentum = rechtliche Herrschaft",
      "Eigentumsvorbehalt: Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers",
      "Mängelrechte: 1. Nacherfüllung (Reparatur oder Neulieferung), 2. Rücktritt oder Minderung, 3. Schadensersatz"
    ],
    "exercises": [
      {
        "id": "das-verpflichtungsgeschaeft-beim-kauf",
        "title": "Das Verpflichtungsgeschäft beim Kauf",
        "folder": "das-verpflichtungsgeschaeft-beim-kauf"
      },
      {
        "id": "das-erfuellungsgeschaeft-beim-kauf",
        "title": "Das Erfüllungsgeschäft beim Kauf",
        "folder": "das-erfuellungsgeschaeft-beim-kauf"
      },
      {
        "id": "besitz-und-eigentum-im-rechtlichen-vergleich",
        "title": "Besitz und Eigentum im rechtlichen Vergleich",
        "folder": "besitz-und-eigentum-im-rechtlichen-vergleich"
      },
      {
        "id": "der-eigentumsvorbehalt",
        "title": "Der Eigentumsvorbehalt",
        "folder": "der-eigentumsvorbehalt"
      },
      {
        "id": "die-mangelhafte-lieferung-sachmaengel",
        "title": "Die mangelhafte Lieferung Sachmängel",
        "folder": "die-mangelhafte-lieferung-sachmaengel"
      },
      {
        "id": "rechte-des-kaeufers-bei-maengeln",
        "title": "Rechte des Käufers bei Mängeln",
        "folder": "rechte-des-kaeufers-bei-maengeln"
      },
      {
        "id": "produkthaftungsgesetz-und-garantien",
        "title": "Produkthaftungsgesetz und Garantien",
        "folder": "produkthaftungsgesetz-und-garantien"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kaufvertrag+mängel&t=3752"
  },
  "vertragsstoerungen-und-mahnverfahren": {
    "slug": "vertragsstoerungen-und-mahnverfahren",
    "title": "Vertragsstörungen, Verzug & Mahnwesen",
    "category": "Recht, Verträge & Verbraucherschutz",
    "shortDesc": "Lieferungsverzug, Annahmeverzug, Zahlungsverzug, außergerichtliche Mahnung, gerichtlicher Mahnbescheid und Verjährungsfristen.",
    "longDesc": "Wenn Vertragspartner ihre Pflichten nicht rechtzeitig oder gar nicht erfüllen, treten Leistungsstörungen ein. Das Mahnverfahren sichert offene Geldforderungen zügig und rechtssicher ab.",
    "keyPoints": [
      "Lieferungsverzug: Verkäufer liefert nicht rechtzeitig trotz Fälligkeit und Mahnung (Schadensersatz, Deckungskauf, Rücktritt)",
      "Zahlungsverzug: Käufer zahlt nicht rechtzeitig (Verzugszinsen, Mahnkosten, Inkasso)",
      "Annahmeverzug: Käufer nimmt ordnungsgemäß gelieferte Ware nicht an (Aufbewahrungskosten, Notverkauf)",
      "Außergerichtliches Mahnwesen: Freundliche Erinnerung, 1. Mahnung, 2. Mahnung mit Nachfrist",
      "Gerichtliches Mahnverfahren: Mahnbescheid ➔ Vollstreckungsbescheid ohne Klageerhebung",
      "Verjährung: Regelmäßige Verjährungsfrist von 3 Jahren nach BGB (§ 195 BGB)"
    ],
    "exercises": [
      {
        "id": "der-lieferungsverzug-und-schadenersatz",
        "title": "Der Lieferungsverzug und Schadenersatz",
        "folder": "der-lieferungsverzug-und-schadenersatz"
      },
      {
        "id": "der-annahmeverzug-durch-den-kaeufer",
        "title": "Der Annahmeverzug durch den Käufer",
        "folder": "der-annahmeverzug-durch-den-kaeufer"
      },
      {
        "id": "der-zahlungsverzug-und-mahnkosten",
        "title": "Der Zahlungsverzug und Mahnkosten",
        "folder": "der-zahlungsverzug-und-mahnkosten"
      },
      {
        "id": "das-aussergerichtliche-mahnverfahren",
        "title": "Das außergerichtliche Mahnverfahren",
        "folder": "das-aussergerichtliche-mahnverfahren"
      },
      {
        "id": "das-gerichtliche-mahnverfahren",
        "title": "Das gerichtliche Mahnverfahren",
        "folder": "das-gerichtliche-mahnverfahren"
      },
      {
        "id": "verjaehrungsfristen-bei-forderungen",
        "title": "Verjährungsfristen bei Forderungen",
        "folder": "verjaehrungsfristen-bei-forderungen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=vertragsstörungen+mahnverfahren&t=3752"
  },
  "arbeitsrecht-und-verbraucherschutz": {
    "slug": "arbeitsrecht-und-verbraucherschutz",
    "title": "Arbeitsrecht & Kündigungsschutz",
    "category": "Recht, Verträge & Verbraucherschutz",
    "shortDesc": "Rechte und Pflichten im Arbeitsvertrag, KSchG, ordentliche und fristlose Kündigung, Mutterschutz und Arbeitsgerichtsbarkeit.",
    "longDesc": "Das Arbeitsrecht schützt Beschäftigte als typischerweise wirtschaftlich schwächere Partei. Es regelt Arbeitszeiten, Urlaub, Entgeltfortzahlung und Kündigungsfristen.",
    "keyPoints": [
      "Hauptpflichten: Pflicht zur Arbeitsleistung (Arbeitnehmer) vs. Pflicht zur Vergütungszahlung (Arbeitgeber)",
      "Nebenpflichten: Treue- und Verschwiegenheitspflicht vs. Fürsorge- und Schutzpflicht",
      "Kündigungsschutz: Allgemeiner Kündigungsschutz nach KSchG (Betriebe > 10 Mitarbeiter, Betriebszugehörigkeit > 6 Monate)",
      "Kündigungsarten: Ordentliche Kündigung mit Frist vs. außerordentliche fristlose Kündigung aus wichtigem Grund",
      "Besonderer Kündigungsschutz: Für Schwangere (MuSchG), Schwerbehinderte und Betriebsratsmitglieder",
      "Arbeitsgericht: Klagefrist von 3 Wochen nach Zugang der Kündigung (§ 4 KSchG)"
    ],
    "exercises": [
      {
        "id": "inhalte-des-arbeitsvertrags",
        "title": "Inhalte des Arbeitsvertrags",
        "folder": "inhalte-des-arbeitsvertrags"
      },
      {
        "id": "rechte-und-pflichten-im-arbeitsvertrag",
        "title": "Rechte und Pflichten im Arbeitsvertrag",
        "folder": "rechte-und-pflichten-im-arbeitsvertrag"
      },
      {
        "id": "der-allgemeine-kuendigungsschutz",
        "title": "Der allgemeine Kündigungsschutz",
        "folder": "der-allgemeine-kuendigungsschutz"
      },
      {
        "id": "ordentliche-und-ausserordentliche-kuendigung",
        "title": "Ordentliche und außerordentliche Kündigung",
        "folder": "ordentliche-und-ausserordentliche-kuendigung"
      },
      {
        "id": "besonderer-kuendigungsschutz-fuer-schwangere",
        "title": "Besonderer Kündigungsschutz für Schwangere",
        "folder": "besonderer-kuendigungsschutz-fuer-schwangere"
      },
      {
        "id": "jugendarbeitsschutzgesetz-kernpunkte",
        "title": "Jugendarbeitsschutzgesetz Kernpunkte",
        "folder": "jugendarbeitsschutzgesetz-kernpunkte"
      },
      {
        "id": "aufbau-der-arbeitsgerichtsbarkeit",
        "title": "Aufbau der Arbeitsgerichtsbarkeit",
        "folder": "aufbau-der-arbeitsgerichtsbarkeit"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=arbeitsrecht+kündigungsschutz&t=3752"
  },
  "vertragsarten-und-verbraucherrechte": {
    "slug": "vertragsarten-und-verbraucherrechte",
    "title": "Vertragsarten des BGB & Digitaler Verbraucherschutz",
    "category": "Recht, Verträge & Verbraucherschutz",
    "shortDesc": "Miet-, Pacht-, Werk- und Dienstvertrag, Verbraucherzentralen, 14-tägiges Online-Widerrufsrecht, Impressumspflicht und DSGVO.",
    "longDesc": "Das BGB kennt unterschiedliche Vertragstypen mit spezifischen Pflichten. Im digitalen Handel schützen Verbraucherschutzgesetze, Widerrufsrechte und Datenschutzregeln Käufer vor Übervorteilung.",
    "keyPoints": [
      "Vertragstypen: Dienstvertrag (Tätigkeit geschuldet) vs. Werkvertrag (konkreter Erfolg geschuldet)",
      "Gebrauchsüberlassung: Miete (entgeltliche Nutzung) vs. Pacht (Nutzung plus Fruchtnießung) vs. Leihe (unentgeltlich)",
      "Widerrufsrecht im E-Commerce: 14 Tage Widerrufsrecht bei Fernabsatzverträgen ohne Angabe von Gründen (§ 312g BGB)",
      "Datenschutz & Transparenz: DSGVO, Cookie-Einwilligungen (Opt-in) und Anbieterkennzeichnung (Impressumspflicht)"
    ],
    "exercises": [
      {
        "id": "merkmale-des-mietvertrags",
        "title": "Merkmale des Mietvertrags",
        "folder": "merkmale-des-mietvertrags"
      },
      {
        "id": "unterschiede-zwischen-miete-und-pacht",
        "title": "Unterschiede zwischen Miete und Pacht",
        "folder": "unterschiede-zwischen-miete-und-pacht"
      },
      {
        "id": "werkvertrag-versus-dienstvertrag",
        "title": "Werkvertrag versus Dienstvertrag",
        "folder": "werkvertrag-versus-dienstvertrag"
      },
      {
        "id": "der-leihvertrag-und-seine-besonderheiten",
        "title": "Der Leihvertrag und seine Besonderheiten",
        "folder": "der-leihvertrag-und-seine-besonderheiten"
      },
      {
        "id": "der-schenkungsvertrag",
        "title": "Der Schenkungsvertrag",
        "folder": "der-schenkungsvertrag"
      },
      {
        "id": "die-rolle-der-verbraucherzentralen",
        "title": "Die Rolle der Verbraucherzentralen",
        "folder": "die-rolle-der-verbraucherzentralen"
      },
      {
        "id": "widerrufsrecht-bei-online-kaeufen",
        "title": "Widerrufsrecht bei Online Käufen",
        "folder": "widerrufsrecht-bei-online-kaeufen"
      },
      {
        "id": "impressumspflicht-und-datenschutz-grundverordnung",
        "title": "Impressumspflicht und Datenschutz Grundverordnung",
        "folder": "impressumspflicht-und-datenschutz-grundverordnung"
      },
      {
        "id": "cookies-und-tracking-einwilligungen",
        "title": "Cookies und Tracking Einwilligungen",
        "folder": "cookies-und-tracking-einwilligungen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=verbraucherschutz+vertragsarten&t=3752"
  },
  "rechtsformen-von-unternehmen": {
    "slug": "rechtsformen-von-unternehmen",
    "title": "Rechtsformen von Unternehmen: Einzelunternehmen, GmbH & AG",
    "category": "Unternehmen, Organisation & Marketing",
    "shortDesc": "Einzelunternehmen, OHG, GmbH, Aktiengesellschaft (AG), Haftung, Mindestkapital, Organe und Handelsregister.",
    "longDesc": "Die Rechtsform bestimmt Haftung, Startkapital, Leitungsbefugnisse und Rechnungslegungspflichten von Unternehmen.",
    "keyPoints": [
      "Einzelunternehmen: Schnelle Gründung, volle persönliche Haftung des Inhabers",
      "Offene Handelsgesellschaft (OHG): Gesellschafter haften unbeschränkt und solidarisch",
      "GmbH: Haftung auf 25.000 € Stammkapital beschränkt; Organe: Geschäftsführer und Gesellschafterversammlung",
      "AG: Mindestkapital 50.000 €; Leitung durch Vorstand, Kontrolle durch Aufsichtsrat, Beschlüsse in Hauptversammlung",
      "Handelsregister: Öffentliches Register für Kaufleute (Abt. A) und Kapitalgesellschaften (Abt. B)"
    ],
    "exercises": [
      {
        "id": "das-handelsregister-abteilung-a-und-b",
        "title": "Das Handelsregister Abteilung A und B",
        "folder": "das-handelsregister-abteilung-a-und-b"
      },
      {
        "id": "das-leitbild-und-die-vision-eines-unternehmens",
        "title": "Das Leitbild und die Vision eines Unternehmens",
        "folder": "das-leitbild-und-die-vision-eines-unternehmens"
      },
      {
        "id": "die-aktiengesellschaft-ag-aufbau-und-organe",
        "title": "Die Aktiengesellschaft AG Aufbau und Organe",
        "folder": "die-aktiengesellschaft-ag-aufbau-und-organe"
      },
      {
        "id": "die-firma-als-name-des-kaufmanns",
        "title": "Die Firma als Name des Kaufmanns",
        "folder": "die-firma-als-name-des-kaufmanns"
      },
      {
        "id": "die-gesellschaft-mit-beschraenkter-haftung-gmbh",
        "title": "Die Gesellschaft mit beschränkter Haftung GmbH",
        "folder": "die-gesellschaft-mit-beschraenkter-haftung-gmbh"
      },
      {
        "id": "die-handlungsvollmacht-im-betrieb",
        "title": "Die Handlungsvollmacht im Betrieb",
        "folder": "die-handlungsvollmacht-im-betrieb"
      },
      {
        "id": "die-offene-handelsgesellschaft-ohg",
        "title": "Die Offene Handelsgesellschaft OHG",
        "folder": "die-offene-handelsgesellschaft-ohg"
      },
      {
        "id": "die-prokura-umfang-und-grenzen",
        "title": "Die Prokura Umfang und Grenzen",
        "folder": "die-prokura-umfang-und-grenzen"
      },
      {
        "id": "merkmale-des-einzelunternehmens",
        "title": "Merkmale des Einzelunternehmens",
        "folder": "merkmale-des-einzelunternehmens"
      },
      {
        "id": "rechte-und-pflichten-des-kaufmanns",
        "title": "Rechte und Pflichten des Kaufmanns",
        "folder": "rechte-und-pflichten-des-kaufmanns"
      },
      {
        "id": "3195",
        "title": "Escape Room: Unternehmen",
        "folder": "escape-room-quot-unternehmen-quot-3195"
      },
      {
        "id": "3196",
        "title": "Escape Room: Unternehmensgründung",
        "folder": "escape-room-quot-unternehmensgrundung-quot-3196"
      },
      {
        "id": "startup-gruender",
        "title": "Wirtschaftsmotor Start-up – Warum junge Gründer unsere Zukunft retten",
        "folder": "wirtschaftsmotor-start-up-warum-junge-gruender-unsere-zukunft-retten"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rechtsformen%20von%20Unternehmen%3A%20Einzelunternehmen%2C%20GmbH%20%26%20AG+wirtschaft&t=3752"
  },
  "aufbau-und-ablauforganisation-im-betrieb": {
    "slug": "aufbau-und-ablauforganisation-im-betrieb",
    "title": "Unternehmensorganisation: Aufbau- & Ablauforganisation",
    "category": "Unternehmen, Organisation & Marketing",
    "shortDesc": "Einlinien- und Mehrliniensystem, Matrixorganisation, Geschäftsprozesse, Stellenbeschreibung und Logistik.",
    "longDesc": "Die Organisation strukturiert Hierarchien (Aufbau) und Arbeitsprozesse (Ablauf), um Durchlaufzeiten zu minimieren und Qualität zu sichern.",
    "keyPoints": [
      "Aufbauorganisation: Einliniensystem (ein Vorgesetzter), Mehrliniensystem (Fachvorgesetzte), Matrixorganisation (Funktion x Objekt)",
      "Ablauforganisation: Zeitliche und räumliche Gestaltung von Arbeitsabläufen",
      "Fertigungsarten: Einzelfertigung, Serienfertigung, Massenfertigung (Fließband)",
      "Materialwirtschaft: ABC-Analyse, Melde- und Mindestbestand, optimale Bestellmenge"
    ],
    "exercises": [
      {
        "id": "ablauforganisation-prozesse-optimieren",
        "title": "Ablauforganisation Prozesse optimieren",
        "folder": "ablauforganisation-prozesse-optimieren"
      },
      {
        "id": "aufbauorganisation-einliniensystem-und-mehrliniensystem",
        "title": "Aufbauorganisation Einliniensystem und Mehrliniensystem",
        "folder": "aufbauorganisation-einliniensystem-und-mehrliniensystem"
      },
      {
        "id": "das-papierlose-buero-in-der-verwaltung",
        "title": "Das papierlose Büro in der Verwaltung",
        "folder": "das-papierlose-buero-in-der-verwaltung"
      },
      {
        "id": "die-abc-analyse-zur-materialbewertung",
        "title": "Die ABC Analyse zur Materialbewertung",
        "folder": "die-abc-analyse-zur-materialbewertung"
      },
      {
        "id": "die-matrixorganisation-vor-und-nachteile",
        "title": "Die Matrixorganisation vor- und Nachteile",
        "folder": "die-matrixorganisation-vor-und-nachteile"
      },
      {
        "id": "die-nutzwertanalyse-bei-lieferantenauswahl",
        "title": "Die Nutzwertanalyse bei Lieferantenauswahl",
        "folder": "die-nutzwertanalyse-bei-lieferantenauswahl"
      },
      {
        "id": "die-stellenbeschreibung-inhalte-und-zweck",
        "title": "Die Stellenbeschreibung Inhalte und Zweck",
        "folder": "die-stellenbeschreibung-inhalte-und-zweck"
      },
      {
        "id": "die-vierte-industrielle-revolution-industrie-4-0",
        "title": "Die vierte industrielle Revolution Industrie 4 0",
        "folder": "die-vierte-industrielle-revolution-industrie-4-0"
      },
      {
        "id": "einzelfertigung-und-mehrfachfertigung",
        "title": "Einzelfertigung und Mehrfachfertigung",
        "folder": "einzelfertigung-und-mehrfachfertigung"
      },
      {
        "id": "fliessbandfertigung-versus-werkstattfertigung",
        "title": "Fließbandfertigung versus Werkstattfertigung",
        "folder": "fliessbandfertigung-versus-werkstattfertigung"
      },
      {
        "id": "lagerkennziffern-meldebestand-und-mindestbestand",
        "title": "Lagerkennziffern Meldebestand und Mindestbestand",
        "folder": "lagerkennziffern-meldebestand-und-mindestbestand"
      },
      {
        "id": "make-or-buy-entscheidungen-im-betrieb",
        "title": "Make or Buy Entscheidungen im Betrieb",
        "folder": "make-or-buy-entscheidungen-im-betrieb"
      },
      {
        "id": "optimale-bestellmenge-nach-der-andler-formel",
        "title": "Optimale Bestellmenge nach der Andler Formel",
        "folder": "optimale-bestellmenge-nach-der-andler-formel"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Unternehmensorganisation%3A%20Aufbau-%20%26%20Ablauforganisation+wirtschaft&t=3752"
  },
  "marketing-mix-und-marktforschung": {
    "slug": "marketing-mix-und-marktforschung",
    "title": "Marktforschung & Strategische Marketingplanung",
    "category": "Unternehmen, Organisation & Marketing",
    "shortDesc": "Primär- und Sekundärforschung, SWOT-Analyse, BCG-Matrix, Marktsegmentierung, Sinus-Milieus und Marketing-Mix-Konzepte.",
    "longDesc": "Erfolgreiches Wirtschaften setzt die genaue Kenntnis der Kundenbedürfnisse und des Marktumfelds voraus. Systematische Marktforschung bildet die Entscheidungsgrundlage für strategische Planungen.",
    "keyPoints": [
      "Marktforschungsmethoden: Primärforschung (Befragung, Beobachtung, Experiment) vs. Sekundärforschung (Desk Research)",
      "Zielgruppenanalyse: Soziodemografische Segmentierung und lebensweltliche Sinus-Milieus",
      "Strategische Werkzeuge: SWOT-Analyse (Stärken, Schwächen, Chancen, Risiken) und BCG-Portfolio (Stars, Cash Cows, Poor Dogs, Question Marks)",
      "Marketing-Mix: Klassische 4P (Product, Price, Place, Promotion) erweitert um 7P für Dienstleistungen"
    ],
    "exercises": [
      {
        "id": "primaerforschung-und-sekundaerforschung",
        "title": "Primärforschung und Sekundärforschung",
        "folder": "primaerforschung-und-sekundaerforschung"
      },
      {
        "id": "primaerforschung-durch-befragung",
        "title": "Primärforschung durch Befragung",
        "folder": "primaerforschung-durch-befragung"
      },
      {
        "id": "beobachtung-und-experiment-im-marketing",
        "title": "Beobachtung und Experiment im Marketing",
        "folder": "beobachtung-und-experiment-im-marketing"
      },
      {
        "id": "panelverfahren-und-trendforschung",
        "title": "Panelverfahren und Trendforschung",
        "folder": "panelverfahren-und-trendforschung"
      },
      {
        "id": "marktsegmentierung-und-zielgruppen",
        "title": "Marktsegmentierung und Zielgruppen",
        "folder": "marktsegmentierung-und-zielgruppen"
      },
      {
        "id": "sinus-milieus-zur-zielgruppenbestimmung",
        "title": "Sinus Milieus zur Zielgruppenbestimmung",
        "folder": "sinus-milieus-zur-zielgruppenbestimmung"
      },
      {
        "id": "die-swot-analyse-zur-strategieplanung",
        "title": "Die SWOT Analyse zur Strategieplanung",
        "folder": "die-swot-analyse-zur-strategieplanung"
      },
      {
        "id": "die-portfolio-analyse-der-boston-consulting-group",
        "title": "Die Portfolio Analyse der Boston Consulting Group",
        "folder": "die-portfolio-analyse-der-boston-consulting-group"
      },
      {
        "id": "der-klassische-marketing-mix-4p",
        "title": "Der klassische Marketing Mix 4P",
        "folder": "der-klassische-marketing-mix-4p"
      },
      {
        "id": "erweiterter-marketing-mix-7p",
        "title": "Erweiterter Marketing Mix 7P",
        "folder": "erweiterter-marketing-mix-7p"
      },
      {
        "id": "neuromarketing-hirnforschung-im-handel",
        "title": "Neuromarketing: Hirnforschung im Handel",
        "folder": "neuromarketing-hirnforschung-im-handel"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=marktforschung+marketing+mix&t=3752"
  },
  "produkt-und-preispolitik-im-marketing": {
    "slug": "produkt-und-preispolitik-im-marketing",
    "title": "Produkt-, Preis- & Markenpolitik",
    "category": "Unternehmen, Organisation & Marketing",
    "shortDesc": "Produktlebenszyklus, Preisstrategien (Skimming, Penetration), Corporate Identity, Markenbildung und Distributionslogistik.",
    "longDesc": "Wie wird ein Produkt gestaltet, bepreist und im Markt positioniert? Produktinnovation, Markenführung und Preisdifferenzierung sichern langfristige Wettbewerbsvorteile.",
    "keyPoints": [
      "Produktlebenszyklus: Einführung ➔ Wachstum ➔ Reife ➔ Sättigung ➔ Degeneration / Relaunch",
      "Preisstrategien: Skimming (hoher Einführungspreis) vs. Penetrationsstrategie (niedriger Preis für schnelle Markteroberung)",
      "Corporate Identity (CI): Corporate Design, Corporate Communication und Corporate Behavior",
      "Markenführung: Markenwert, Rebranding und rechtlicher Markenschutz (DPMA)",
      "Distributionspolitik (Place): Direkter Absatz (Online-Shop) vs. indirekter Absatz (Groß- und Einzelhandel)"
    ],
    "exercises": [
      {
        "id": "der-produktlebenszyklus-und-seine-phasen",
        "title": "Der Produktlebenszyklus und seine Phasen",
        "folder": "der-produktlebenszyklus-und-seine-phasen"
      },
      {
        "id": "preisstrategien-skimming-und-penetration",
        "title": "Preisstrategien Skimming und Penetration",
        "folder": "preisstrategien-skimming-und-penetration"
      },
      {
        "id": "corporate-identity-und-corporate-design",
        "title": "Corporate Identity und Corporate Design",
        "folder": "corporate-identity-und-corporate-design"
      },
      {
        "id": "markenidentitaet-und-markenimage",
        "title": "Markenidentität und Markenimage",
        "folder": "markenidentitaet-und-markenimage"
      },
      {
        "id": "markenschutz-und-patentrecht",
        "title": "Markenschutz und Patentrecht",
        "folder": "markenschutz-und-patentrecht"
      },
      {
        "id": "rebranding-chancen-und-risiken",
        "title": "Rebranding: Chancen und Risiken",
        "folder": "rebranding-chancen-und-risiken"
      },
      {
        "id": "green-marketing-und-nachhaltigkeit",
        "title": "Green Marketing und Nachhaltigkeit",
        "folder": "green-marketing-und-nachhaltigkeit"
      },
      {
        "id": "treueprogramme-und-bonusformate",
        "title": "Treueprogramme und Bonusformate",
        "folder": "treueprogramme-und-bonusformate"
      },
      {
        "id": "die-customer-journey-phasen",
        "title": "Die Customer Journey Phasen",
        "folder": "die-customer-journey-phasen"
      },
      {
        "id": "distributionspolitik-absatzwege-und-logistik",
        "title": "Distributionspolitik Absatzwege und Logistik",
        "folder": "distributionspolitik-absatzwege-und-logistik"
      },
      {
        "id": "buchcover-kaufverhalten",
        "title": "Wie Buchcover unser Kaufverhalten steuern",
        "folder": "wie-buchcover-unser-kaufverhalten-steuern"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=produktpolitik+preispolitik&t=3752"
  },
  "kommunikationspolitik-und-werbung": {
    "slug": "kommunikationspolitik-und-werbung",
    "title": "Kommunikationspolitik, Werbung & Social-Media-Marketing",
    "category": "Unternehmen, Organisation & Marketing",
    "shortDesc": "AIDA-Modell, Public Relations, Content Marketing, Storytelling, Guerilla Marketing, SEA und Social-Media-Kampagnen.",
    "longDesc": "Kommunikationspolitik vermittelt Markenbotschaften an Kunden und Öffentlichkeit. Digitale Kanäle ermöglichen zielgenaues Performance-Marketing und interaktive Kundenansprache.",
    "keyPoints": [
      "AIDA-Formel: Attention (Aufmerksamkeit) ➔ Interest (Interesse) ➔ Desire (Verlangen) ➔ Action (Handlung/Kauf)",
      "Werbeformen: Klassische Werbung, PR (Öffentlichkeitsarbeit), Guerilla-Marketing und Event-Marketing",
      "Online-Marketing: Suchmaschinenwerbung (SEA), E-Mail-Marketing und virale Kampagnen",
      "Social-Media-Kanäle: Zielgruppenspezifische Ansprache auf Instagram, TikTok und Facebook mit Influencer-Marketing"
    ],
    "exercises": [
      {
        "id": "das-aida-modell-in-der-werbung",
        "title": "Das AIDA Modell in der Werbung",
        "folder": "das-aida-modell-in-der-werbung"
      },
      {
        "id": "kommunikationspolitik-werbung-und-pr",
        "title": "Kommunikationspolitik: Werbung und PR",
        "folder": "kommunikationspolitik-werbung-und-pr"
      },
      {
        "id": "content-marketing-strategien",
        "title": "Content Marketing Strategien",
        "folder": "content-marketing-strategien"
      },
      {
        "id": "storytelling-in-der-markenkommunikation",
        "title": "Storytelling in der Markenkommunikation",
        "folder": "storytelling-in-der-markenkommunikation"
      },
      {
        "id": "guerilla-marketing-aktionen",
        "title": "Guerilla Marketing Aktionen",
        "folder": "guerilla-marketing-aktionen"
      },
      {
        "id": "virales-marketing-im-netz",
        "title": "Virales Marketing im Netz",
        "folder": "virales-marketing-im-netz"
      },
      {
        "id": "social-media-marketing-konzepte",
        "title": "Social Media Marketing Konzepte",
        "folder": "social-media-marketing-konzepte"
      },
      {
        "id": "facebook-und-instagram-als-werbeplattform",
        "title": "Facebook und Instagram als Werbeplattform",
        "folder": "facebook-und-instagram-als-werbeplattform"
      },
      {
        "id": "tiktok-marketing-fuer-junge-zielgruppen",
        "title": "TikTok Marketing für junge Zielgruppen",
        "folder": "tiktok-marketing-fuer-junge-zielgruppen"
      },
      {
        "id": "suchmaschinenwerbung-sea",
        "title": "Suchmaschinenwerbung SEA",
        "folder": "suchmaschinenwerbung-sea"
      },
      {
        "id": "e-mail-marketing-und-newsletter",
        "title": "E-Mail-Marketing und Newsletter",
        "folder": "e-mail-marketing-und-newsletter"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=werbung+social+media+marketing&t=3752"
  },
  "digitale-wirtschaft-e-commerce-und-plattformen": {
    "slug": "digitale-wirtschaft-e-commerce-und-plattformen",
    "title": "E-Commerce, Webshops & Digitale Vertriebswege",
    "category": "Unternehmen, Organisation & Marketing",
    "shortDesc": "Marktplätze vs. eigene Shops, CRM, Responsive Checkout, Retourenmanagement, SaaS, Freemium und personalisierte Werbung.",
    "longDesc": "Der Online-Handel hat das Konsumverhalten grundlegend verändert. Moderne Shop-Systeme verknüpfen intuitive Nutzerführung mit hochkomplexen Logistik- und Bezahlschnittstellen.",
    "keyPoints": [
      "Vertriebskanäle: Eigener Webshop vs. Online-Marktplätze (Amazon, eBay, Etsy)",
      "Mobile Commerce: Responsive Webdesign und one-click Bezahlmethoden",
      "Betriebsmodelle: SaaS (Software-as-a-Service), Freemium- und Abonnementmodelle",
      "Kostenfaktoren: Retourenmanagement, Zahlungsabwicklung und Warenwirtschaftssysteme",
      "Customer Journey: CRM (Customer Relationship Management) und verhaltensbasierte Werbeaussteuerung"
    ],
    "exercises": [
      {
        "id": "marktplaetze-versus-eigene-webshops",
        "title": "Marktplätze versus eigene Webshops",
        "folder": "marktplaetze-versus-eigene-webshops"
      },
      {
        "id": "shop-systeme-und-bezahlschnittstellen",
        "title": "Shop Systeme und Bezahlschnittstellen",
        "folder": "shop-systeme-und-bezahlschnittstellen"
      },
      {
        "id": "mobile-commerce-und-responsive-design",
        "title": "Mobile Commerce und Responsive Design",
        "folder": "mobile-commerce-und-responsive-design"
      },
      {
        "id": "retourenmanagement-und-prozesskosten",
        "title": "Retourenmanagement und Prozesskosten",
        "folder": "retourenmanagement-und-prozesskosten"
      },
      {
        "id": "freemium-versus-premium-modelle",
        "title": "Freemium versus Premium Modelle",
        "folder": "freemium-versus-premium-modelle"
      },
      {
        "id": "software-as-a-service-saas",
        "title": "Software as a Service SaaS",
        "folder": "software-as-a-service-saas"
      },
      {
        "id": "affiliate-marketing-systeme",
        "title": "Affiliate Marketing Systeme",
        "folder": "affiliate-marketing-systeme"
      },
      {
        "id": "nudging-im-online-handel",
        "title": "Nudging im Online Handel",
        "folder": "nudging-im-online-handel"
      },
      {
        "id": "personalisierte-werbung-durch-datennutzung",
        "title": "Personalisierte Werbung durch Datennutzung",
        "folder": "personalisierte-werbung-durch-datennutzung"
      },
      {
        "id": "automatisierte-texterstellung-fuer-shops",
        "title": "Automatisierte Texterstellung für Shops",
        "folder": "automatisierte-texterstellung-fuer-shops"
      },
      {
        "id": "customer-relationship-management-crm",
        "title": "Customer Relationship Management CRM",
        "folder": "customer-relationship-management-crm"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=e-commerce+onlineshop&t=3752"
  },
  "plattformoekonomie-ki-und-sharing-economy": {
    "slug": "plattformoekonomie-ki-und-sharing-economy",
    "title": "Plattformökonomie, KI & Zukunftsmodelle",
    "category": "Unternehmen, Organisation & Marketing",
    "shortDesc": "Netzwerkeffekte digitaler Plattformen, Sharing Economy, KI-Kundenservice, Predictive Analytics und Strukturwandel des Handels.",
    "longDesc": "Plattformgiganten dominieren moderne Märkte durch Netzwerkeffekte und Datenmonopole. Künstliche Intelligenz und Share-Konzepte transformieren traditionelle Geschäftsmodelle.",
    "keyPoints": [
      "Netzwerkeffekte: Der Nutzen einer Plattform steigt mit jedem weiteren Nutzer (\"Winner takes it all\")",
      "Sharing Economy: \"Nutzen statt Besitzen\" – Carsharing, Werkzeugleihe und Co-Working",
      "Künstliche Intelligenz: Kundenservice-Chatbots, Bildgenerierung für Kampagnen und Predictive Analytics",
      "Handelswandel: Verdrängungswettbewerb zwischen E-Commerce und stationärem Innenstadthandel"
    ],
    "exercises": [
      {
        "id": "die-plattformoekonomie-amazon-und-co",
        "title": "Die Plattformökonomie Amazon und Co",
        "folder": "die-plattformoekonomie-amazon-und-co"
      },
      {
        "id": "sharing-economy-konzepte",
        "title": "Sharing Economy Konzepte",
        "folder": "sharing-economy-konzepte"
      },
      {
        "id": "sharing-economy-nutzen-statt-besitzen",
        "title": "Sharing Economy Nutzen statt Besitzen",
        "folder": "sharing-economy-nutzen-statt-besitzen"
      },
      {
        "id": "ki-im-kundenservice-chatbots",
        "title": "KI im Kundenservice Chatbots",
        "folder": "ki-im-kundenservice-chatbots"
      },
      {
        "id": "predictive-analytics-im-handel",
        "title": "Predictive Analytics im Handel",
        "folder": "predictive-analytics-im-handel"
      },
      {
        "id": "bildgenerierung-fuer-werbekampagnen",
        "title": "Bildgenerierung für Werbekampagnen",
        "folder": "bildgenerierung-fuer-werbekampagnen"
      },
      {
        "id": "algorithmen-und-filterblasen",
        "title": "Algorithmen und Filterblasen",
        "folder": "algorithmen-und-filterblasen"
      },
      {
        "id": "community-management-und-shitstorms",
        "title": "Community Management und Shitstorms",
        "folder": "community-management-und-shitstorms"
      },
      {
        "id": "wandel-des-stationaeren-einzelhandels",
        "title": "Wandel des stationären Einzelhandels",
        "folder": "wandel-des-stationaeren-einzelhandels"
      },
      {
        "id": "urban-farming-als-neues-geschaeftsmodell",
        "title": "Urban Farming als neues Geschäftsmodell",
        "folder": "urban-farming-als-neues-geschaeftsmodell"
      },
      {
        "id": "mobilitaet-der-zukunft-e-autos-und-wasserstoff",
        "title": "Mobilität der Zukunft: E-Autos und Wasserstoff",
        "folder": "mobilitaet-der-zukunft-e-autos-und-wasserstoff"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=plattformökonomie+künstliche+intelligenz&t=3752"
  },
  "personalwirtschaft-und-mitarbeiterfuehrung": {
    "slug": "personalwirtschaft-und-mitarbeiterfuehrung",
    "title": "Personalwirtschaft, Führung & Unternehmenskultur",
    "category": "Unternehmen, Organisation & Marketing",
    "shortDesc": "Personalbeschaffung, Zeit- und Leistungslohn, Motivationsmodelle (Herzberg), Diversität, Mindestlohn und Compliance.",
    "longDesc": "Mitarbeiter sind der wichtigste Erfolgsfaktor eines Unternehmens. Moderne Personalwirtschaft verbindet leistungsgerechte Vergütung mit wertschätzender Unternehmenskultur.",
    "keyPoints": [
      "Personalbeschaffung: Interne (Aufstieg, Versetzung) vs. externe Personalbeschaffung (Stellenausschreibung, Headhunter)",
      "Vergütungsformen: Zeitlohn (nach Arbeitszeit) vs. Leistungslohn (Akkordlohn, Prämien, Provisionen)",
      "Motivationslehre: Herzbergs Zwei-Faktoren-Theorie (Hygienefaktoren verhindern Unzufriedenheit, Motivatoren schaffen Zufriedenheit)",
      "Unternehmenskultur: Employer Branding, Diversität am Arbeitsplatz, Inklusion, Whistleblowing und Compliance-Richtlinien"
    ],
    "exercises": [
      {
        "id": "diskriminierung-und-inklusion-am-arbeitsplatz",
        "title": "Diskriminierung und Inklusion am Arbeitsplatz",
        "folder": "diskriminierung-und-inklusion-am-arbeitsplatz"
      },
      {
        "id": "diversitaet-als-wirtschaftlicher-erfolgsfaktor",
        "title": "Diversität als wirtschaftlicher Erfolgsfaktor",
        "folder": "diversitaet-als-wirtschaftlicher-erfolgsfaktor"
      },
      {
        "id": "employer-branding-zur-personalgewinnung",
        "title": "Employer Branding zur Personalgewinnung",
        "folder": "employer-branding-zur-personalgewinnung"
      },
      {
        "id": "entlohnungsformen-zeitlohn-und-leistungslohn",
        "title": "Entlohnungsformen Zeitlohn und Leistungslohn",
        "folder": "entlohnungsformen-zeitlohn-und-leistungslohn"
      },
      {
        "id": "gerechte-entlohnung-und-mindestlohn",
        "title": "Gerechte Entlohnung und Mindestlohn",
        "folder": "gerechte-entlohnung-und-mindestlohn"
      },
      {
        "id": "grundlagen-der-insolvenzordnung",
        "title": "Grundlagen der Insolvenzordnung",
        "folder": "grundlagen-der-insolvenzordnung"
      },
      {
        "id": "interne-versus-externe-personalbeschaffung",
        "title": "Interne versus externe Personalbeschaffung",
        "folder": "interne-versus-externe-personalbeschaffung"
      },
      {
        "id": "korruption-und-compliance-regeln",
        "title": "Korruption und Compliance Regeln",
        "folder": "korruption-und-compliance-regeln"
      },
      {
        "id": "quantitative-und-qualitative-personalbedarfsplanung",
        "title": "Quantitative und qualitative Personalbedarfsplanung",
        "folder": "quantitative-und-qualitative-personalbedarfsplanung"
      },
      {
        "id": "whistleblowing-in-unternehmen",
        "title": "Whistleblowing in Unternehmen",
        "folder": "whistleblowing-in-unternehmen"
      },
      {
        "id": "zwei-faktoren-theorie-nach-herzberg",
        "title": "Zwei Faktoren Theorie nach Herzberg",
        "folder": "zwei-faktoren-theorie-nach-herzberg"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Personalwirtschaft%2C%20F%C3%BChrung%20%26%20Unternehmenskultur+wirtschaft&t=3752"
  },
  "rechnungswesen-inventur-bilanz-und-guv": {
    "slug": "rechnungswesen-inventur-bilanz-und-guv",
    "title": "Rechnungswesen: Inventur, Bilanz & GuV",
    "category": "Rechnungswesen & Steuern",
    "shortDesc": "Buchführungspflicht, Inventurarten, Bilanzaufbau (Aktiva vs. Passiva), Gewinn- und Verlustrechnung (GuV) und Abschreibungen.",
    "longDesc": "Das betriebliche Rechnungswesen dokumentiert alle Geld- und Werteflüsse eines Unternehmens für das Finanzamt, Banken und die interne Steuerung.",
    "keyPoints": [
      "Inventur & Inventar: Bestandsaufnahme aller Vermögensgegenstände und Schulden zum Bilanzstichtag",
      "Bilanz: Gegenüberstellung von Aktiva (Mittelverwendung: Anlage- und Umlaufvermögen) und Passiva (Mittelherkunft: Eigen- und Fremdkapital)",
      "Gewinn- und Verlustrechnung (GuV): Gegenüberstellung von Aufwendungen und Erträgen zur Ermittlung des Jahresüberschusses",
      "Abschreibung (AfA): Lineare oder degressive Verteilung der Anschaffungskosten über die Nutzungsdauer",
      "Kostenrechnung: Fixe vs. variable Kosten, Deckungsbeitragsrechnung, Kalkulationsschema und Break-Even-Point (Gewinnschwelle)"
    ],
    "exercises": [
      {
        "id": "aufbau-der-bilanz-aktiva-und-passiva",
        "title": "Aufbau der Bilanz Aktiva und Passiva",
        "folder": "aufbau-der-bilanz-aktiva-und-passiva"
      },
      {
        "id": "aussenfinanzierung-durch-kredite",
        "title": "Außenfinanzierung durch Kredite",
        "folder": "aussenfinanzierung-durch-kredite"
      },
      {
        "id": "deckungsbeitragsrechnung-einfach-erklaert",
        "title": "Deckungsbeitragsrechnung einfach erklärt",
        "folder": "deckungsbeitragsrechnung-einfach-erklaert"
      },
      {
        "id": "die-break-even-analyse-gewinnschwelle",
        "title": "Die Break Even Analyse Gewinnschwelle",
        "folder": "die-break-even-analyse-gewinnschwelle"
      },
      {
        "id": "die-gewinn-und-verlustrechnung-guv",
        "title": "Die Gewinn und Verlustrechnung GuV",
        "folder": "die-gewinn-und-verlustrechnung-guv"
      },
      {
        "id": "die-inventur-arten-und-ablauf",
        "title": "Die Inventur Arten und Ablauf",
        "folder": "die-inventur-arten-und-ablauf"
      },
      {
        "id": "fixe-und-variable-kosten-unterscheiden",
        "title": "Fixe und variable Kosten unterscheiden",
        "folder": "fixe-und-variable-kosten-unterscheiden"
      },
      {
        "id": "innenfinanzierung-durch-abschreibungen",
        "title": "Innenfinanzierung durch Abschreibungen",
        "folder": "innenfinanzierung-durch-abschreibungen"
      },
      {
        "id": "kalkulationsschema-im-warenhandel",
        "title": "Kalkulationsschema im Warenhandel",
        "folder": "kalkulationsschema-im-warenhandel"
      },
      {
        "id": "lineare-und-degressive-abschreibung",
        "title": "Lineare und degressive Abschreibung",
        "folder": "lineare-und-degressive-abschreibung"
      },
      {
        "id": "rentabilitaetsrechnung-fuer-investitionen",
        "title": "Rentabilitätsrechnung für Investitionen",
        "folder": "rentabilitaetsrechnung-fuer-investitionen"
      },
      {
        "id": "3231",
        "title": "Escape Room: Statische Investitionsrechnung",
        "folder": "escape-room-quot-statische-investitionsrechnung-quot-3231"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rechnungswesen%3A%20Inventur%2C%20Bilanz%20%26%20GuV+wirtschaft&t=3752"
  },
  "das-deutsche-steuersystem": {
    "slug": "das-deutsche-steuersystem",
    "title": "Das deutsche Steuersystem: Einkommen-, Umsatz- & Gewerbesteuer",
    "category": "Rechnungswesen & Steuern",
    "shortDesc": "Direkte vs. indirekte Steuern, Steuerklassen, Lohnsteuererklärung, Umsatzsteuer & Vorsteuerabzug, Gewerbesteuer.",
    "longDesc": "Steuern finanzieren das Gemeinwesen. Das deutsche Steuersystem unterscheidet direkte Steuern auf Einkommen und Gewinn sowie indirekte Steuern auf den Konsum.",
    "keyPoints": [
      "Direkte Steuern: Einkommensteuer (progressiver Steuertarif), Körperschaftsteuer für Kapitalgesellschaften, Gewerbesteuer für Kommunen",
      "Indirekte Steuern: Umsatzsteuer (19% Regelsatz, 7% ermäßigt), Verbrauchssteuern (Energiesteuer, Tabaksteuer)",
      "Lohnsteuerklassen I bis VI: Steuerabzug nach Familienstand und Arbeitsverhältnissen",
      "Vorsteuerabzug: Unternehmen reichen die beim Einkauf gezahlte Umsatzsteuer als Vorsteuer beim Finanzamt ein"
    ],
    "exercises": [
      {
        "id": "das-deutsche-steuersystem-grundbegriffe",
        "title": "Das deutsche Steuersystem Grundbegriffe",
        "folder": "das-deutsche-steuersystem-grundbegriffe"
      },
      {
        "id": "die-einkommensteuer-und-steuererklaerung",
        "title": "Die Einkommensteuer und Steuererklärung",
        "folder": "die-einkommensteuer-und-steuererklaerung"
      },
      {
        "id": "die-erbschaftsteuer-und-schenkungsteuer",
        "title": "Die Erbschaftsteuer und Schenkungsteuer",
        "folder": "die-erbschaftsteuer-und-schenkungsteuer"
      },
      {
        "id": "die-gewerbesteuer-fuer-kommunen",
        "title": "Die Gewerbesteuer für Kommunen",
        "folder": "die-gewerbesteuer-fuer-kommunen"
      },
      {
        "id": "die-umsatzsteuer-und-vorsteuerabzug",
        "title": "Die Umsatzsteuer und Vorsteuerabzug",
        "folder": "die-umsatzsteuer-und-vorsteuerabzug"
      },
      {
        "id": "direkte-und-indirekte-steuern",
        "title": "Direkte und indirekte Steuern",
        "folder": "direkte-und-indirekte-steuern"
      },
      {
        "id": "koerperschaftsteuer-fuer-unternehmen",
        "title": "Körperschaftsteuer für Unternehmen",
        "folder": "koerperschaftsteuer-fuer-unternehmen"
      },
      {
        "id": "lohnsteuerklassen-von-eins-bis-sechs",
        "title": "Lohnsteuerklassen von eins bis sechs",
        "folder": "lohnsteuerklassen-von-eins-bis-sechs"
      },
      {
        "id": "4655",
        "title": "So funktionieren Staatsschulden",
        "folder": "so-funktionieren-staatsschulden-4655"
      },
      {
        "id": "bundeshaushaltsplan",
        "title": "Der Bundeshaushaltsplan in Deutschland",
        "folder": "der-bundeshaushaltsplan-in-deutschland"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Das%20deutsche%20Steuersystem%3A%20Einkommen-%2C%20Umsatz-%20%26%20Gewerbesteuer+wirtschaft&t=3752"
  },
  "berufsorientierung-und-berufswahl": {
    "slug": "berufsorientierung-und-berufswahl",
    "title": "Berufsorientierung, Stärken & Bildungswege",
    "category": "Arbeitswelt & Berufsstart",
    "shortDesc": "Stärken- und Schwächenanalyse, Soft Skills, BIZ-Nutzung, Ausbildung vs. Studium und Berufe im digitalen Wandel.",
    "longDesc": "Die Wahl des passenden Berufs erfordert Selbstreflexion und systematische Information. Zwischen schulischer Ausbildung, dualem System und Hochschulstudium eröffnen sich vielfältige Karrierewege.",
    "keyPoints": [
      "Selbsterkundung: Eigene Neigungen, Talente und Wertvorstellungen mit Anforderungsprofilen abgleichen",
      "Soft Skills: Kommunikationsfähigkeit, Teamgeist, Zuverlässigkeit und Problemlösungskompetenz",
      "Informationsquellen: BIZ der Bundesagentur für Arbeit, Ausbildungsmessen und Online-Portale",
      "Bildungswege: Betriebliche Ausbildung (duales System), Fachschulen, Duales Studium oder Vollzeitstudium"
    ],
    "exercises": [
      {
        "id": "selbstanalyse-staerken-und-schwaechen",
        "title": "Selbstanalyse Stärken und Schwächen",
        "folder": "selbstanalyse-staerken-und-schwaechen"
      },
      {
        "id": "interessen-und-hobbys-zum-beruf-machen",
        "title": "Interessen und Hobbys zum Beruf machen",
        "folder": "interessen-und-hobbys-zum-beruf-machen"
      },
      {
        "id": "schluesselqualifikationen-und-soft-skills",
        "title": "Schlüsselqualifikationen und Soft Skills",
        "folder": "schluesselqualifikationen-und-soft-skills"
      },
      {
        "id": "informationsquellen-zur-berufsorientierung",
        "title": "Informationsquellen zur Berufsorientierung",
        "folder": "informationsquellen-zur-berufsorientierung"
      },
      {
        "id": "das-berufsinformationszentrum-biz-nutzen",
        "title": "Das Berufsinformationszentrum BIZ nutzen",
        "folder": "das-berufsinformationszentrum-biz-nutzen"
      },
      {
        "id": "traumberufe-versus-realitaet-am-arbeitsmarkt",
        "title": "Traumberufe versus Realität am Arbeitsmarkt",
        "folder": "traumberufe-versus-realitaet-am-arbeitsmarkt"
      },
      {
        "id": "studium-oder-ausbildung-vergleich",
        "title": "Studium oder Ausbildung Vergleich",
        "folder": "studium-oder-ausbildung-vergleich"
      },
      {
        "id": "das-duale-studium-modell-und-vorteile",
        "title": "Das Duale Studium Modell und Vorteile",
        "folder": "das-duale-studium-modell-und-vorteile"
      },
      {
        "id": "berufe-im-wandel-der-digitalisierung",
        "title": "Berufe im Wandel der Digitalisierung",
        "folder": "berufe-im-wandel-der-digitalisierung"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=berufsorientierung+berufswahl&t=3752"
  },
  "praktikum-fsj-und-karriereplanung": {
    "slug": "praktikum-fsj-und-karriereplanung",
    "title": "Praktikum, FSJ & Beruflicher Aufstieg",
    "category": "Arbeitswelt & Berufsstart",
    "shortDesc": "Praktikumssuche, Praktikumsbericht, Freiwilligendienste (FSJ/BFD), Weiterbildung und Existenzgründung.",
    "longDesc": "Praktische Erfahrungen schärfen das berufliche Profil. Ob Schülerpraktikum, Freiwilliges Soziales Jahr oder spätere berufliche Weiterbildung – Praxisphasen erleichtern die Orientierung.",
    "keyPoints": [
      "Praktikum: Einblick in den Arbeitsalltag, rechtliche Rahmenbedingungen und Dokumentation im Praktikumsbericht",
      "Freiwilligendienste: FSJ und BFD als Orientierungsjahr zur Persönlichkeitsentwicklung",
      "Lebenslanges Lernen: Anpassungsfortbildung, Meister, Fachwirt und berufliche Spezialisierung",
      "Selbstständigkeit: Gründungsidee, Businessplan und unternehmerisches Handeln"
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
        "title": "Der Praktikumsbericht Aufbau und Inhalt",
        "folder": "der-praktikumsbericht-aufbau-und-inhalt"
      },
      {
        "id": "freiwilliges-soziales-jahr-als-alternative",
        "title": "Freiwilliges Soziales Jahr als Alternative",
        "folder": "freiwilliges-soziales-jahr-als-alternative"
      },
      {
        "id": "karriereplanung-und-aufstiegschancen",
        "title": "Karriereplanung und Aufstiegschancen",
        "folder": "karriereplanung-und-aufstiegschancen"
      },
      {
        "id": "fortbildung-und-lebenslanges-lernen",
        "title": "Fortbildung und lebenslanges Lernen",
        "folder": "fortbildung-und-lebenslanges-lernen"
      },
      {
        "id": "selbststaendigkeit-als-berufsweg",
        "title": "Selbstständigkeit als Berufsweg",
        "folder": "selbststaendigkeit-als-berufsweg"
      },
      {
        "id": "fachkraeftemangel-und-zuwanderung",
        "title": "Fachkräftemangel und Zuwanderung",
        "folder": "fachkraeftemangel-und-zuwanderung"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=praktikum+karriereplanung&t=3752"
  },
  "die-erfolgreiche-bewerbung-und-vorstellungsgespraech": {
    "slug": "die-erfolgreiche-bewerbung-und-vorstellungsgespraech",
    "title": "Die Bewerbungsmappe: Anschreiben, Lebenslauf & Online-Bewerbung",
    "category": "Arbeitswelt & Berufsstart",
    "shortDesc": "DIN 5008 Anschreiben, tabellarischer Lebenslauf, Zeugnisreihenfolge, E-Mail-Bewerbung und Eignungstests.",
    "longDesc": "Die schriftliche Bewerbung ist die Visitenkarte des Bewerbers. Ein strukturierter Lebenslauf, überzeugende Formulierungen im Anschreiben und korrekte Formalia entscheiden über die Einladung zum Interview.",
    "keyPoints": [
      "Anschreiben (DIN 5008): Absender, Empfänger, Betreffzeile, aussagekräftige Einleitung, Bezug zum Betrieb und Gehaltsvorstellung/Eintrittstermin",
      "Tabellarischer Lebenslauf: Chronologisch rückwärts aufgebaut mit Stationen, Abschlüssen und Qualifikationen",
      "Dritte Seite: Motivationsschreiben oder Kurzprofil für zusätzliche Pluspunkte",
      "Bewerbungsportale & E-Mail: Zusammenfassung aller Unterlagen in einem einzigen PDF-Dokument (< 5 MB)",
      "Einstellungstests: Logik-, Mathe- und Allgemeinwissenstests im Vorfeld"
    ],
    "exercises": [
      {
        "id": "das-anschreiben-struktur-und-formalia",
        "title": "Das Anschreiben Struktur und Formalia",
        "folder": "das-anschreiben-struktur-und-formalia"
      },
      {
        "id": "ueberzeugende-einleitungssaetze-formulieren",
        "title": "Überzeugende Einleitungssätze formulieren",
        "folder": "ueberzeugende-einleitungssaetze-formulieren"
      },
      {
        "id": "der-tabellarische-lebenslauf-aufbau",
        "title": "Der tabellarische Lebenslauf Aufbau",
        "folder": "der-tabellarische-lebenslauf-aufbau"
      },
      {
        "id": "das-perfekte-bewerbungsfoto-tipps",
        "title": "Das perfekte Bewerbungsfoto Tipps",
        "folder": "das-perfekte-bewerbungsfoto-tipps"
      },
      {
        "id": "die-dritte-seite-der-bewerbung-nutzen",
        "title": "Die dritte Seite der Bewerbung Nutzen",
        "folder": "die-dritte-seite-der-bewerbung-nutzen"
      },
      {
        "id": "zeugnisse-und-zertifikate-richtig-ordnen",
        "title": "Zeugnisse und Zertifikate richtig ordnen",
        "folder": "zeugnisse-und-zertifikate-richtig-ordnen"
      },
      {
        "id": "die-online-bewerbung-per-e-mail",
        "title": "Die Online Bewerbung per E Mail",
        "folder": "die-online-bewerbung-per-e-mail"
      },
      {
        "id": "bewerbungsportale-von-unternehmen-nutzen",
        "title": "Bewerbungsportale von Unternehmen nutzen",
        "folder": "bewerbungsportale-von-unternehmen-nutzen"
      },
      {
        "id": "die-initiativbewerbung-chancen-nutzen",
        "title": "Die Initiativbewerbung Chancen nutzen",
        "folder": "die-initiativbewerbung-chancen-nutzen"
      },
      {
        "id": "fristen-und-termine-bei-der-bewerbung",
        "title": "Fristen und Termine bei der Bewerbung",
        "folder": "fristen-und-termine-bei-der-bewerbung"
      },
      {
        "id": "allgemeinwissenstests-in-der-bewerbung",
        "title": "Allgemeinwissenstests in der Bewerbung",
        "folder": "allgemeinwissenstests-in-der-bewerbung"
      },
      {
        "id": "einstellungstests-mathematik-und-logik",
        "title": "Einstellungstests Mathematik und Logik",
        "folder": "einstellungstests-mathematik-und-logik"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=bewerbung+lebenslauf&t=3752"
  },
  "vorstellungsgespraech-und-assessment-center": {
    "slug": "vorstellungsgespraech-und-assessment-center",
    "title": "Vorstellungsgespräch & Assessment Center",
    "category": "Arbeitswelt & Berufsstart",
    "shortDesc": "Vorbereitung auf Vorstellungsgespräche, Telefoninterviews, Körpersprache, unzulässige Fragen, Postkorbübung und Gruppendiskussionen.",
    "longDesc": "Im persönlichen Vorstellungsgespräch oder Assessment Center prüfen Arbeitgeber soziale Kompetenzen, Stressresistenz und Teamfähigkeit.",
    "keyPoints": [
      "Gesprächsvorbereitung: Unternehmensrecherche, Dresscode und Anreiseplanung",
      "Körpersprache: Fester Händedruck, aufrechte Haltung, Blickkontakt und offene Gestik",
      "Fragetypen: Klassische Fragen (Stärken/Schwächen) und unzulässige Fragen (Recht zur Lüge bei Schwangerschaft/Religion)",
      "Assessment Center: Postkorbübungen zur Prioritätensetzung, Präsentationen und moderierte Gruppendiskussionen",
      "Nachbereitung: Professionelles Dankschreiben per E-Mail nach dem Gespräch"
    ],
    "exercises": [
      {
        "id": "das-telefoninterview-vorbereitung",
        "title": "Das Telefoninterview Vorbereitung",
        "folder": "das-telefoninterview-vorbereitung"
      },
      {
        "id": "kleidung-und-dresscode-beim-interview",
        "title": "Kleidung und Dresscode beim Interview",
        "folder": "kleidung-und-dresscode-beim-interview"
      },
      {
        "id": "koerpersprache-und-mimik-bewusst-einsetzen",
        "title": "Körpersprache und Mimik bewusst einsetzen",
        "folder": "koerpersprache-und-mimik-bewusst-einsetzen"
      },
      {
        "id": "typische-fragen-im-vorstellungsgespraech",
        "title": "Typische Fragen im Vorstellungsgespräch",
        "folder": "typische-fragen-im-vorstellungsgespraech"
      },
      {
        "id": "unzulaessige-fragen-und-das-recht-zur-luege",
        "title": "Unzulässige Fragen und das Recht zur Lüge",
        "folder": "unzulaessige-fragen-und-das-recht-zur-luege"
      },
      {
        "id": "eigene-fragen-an-den-arbeitgeber-stellen",
        "title": "Eigene Fragen an den Arbeitgeber stellen",
        "folder": "eigene-fragen-an-den-arbeitgeber-stellen"
      },
      {
        "id": "nachbereitung-des-gespraechs-dankschreiben",
        "title": "Nachbereitung des Gesprächs Dankschreiben",
        "folder": "nachbereitung-des-gespraechs-dankschreiben"
      },
      {
        "id": "auswahlverfahren-assessment-center",
        "title": "Auswahlverfahren Assessment Center",
        "folder": "auswahlverfahren-assessment-center"
      },
      {
        "id": "das-assessment-center-aufgaben-und-ziele",
        "title": "Das Assessment Center Aufgaben und Ziele",
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=vorstellungsgespräch+assessment+center&t=3752"
  },
  "der-ausbildungsvertrag-und-arbeitsalltag": {
    "slug": "der-ausbildungsvertrag-und-arbeitsalltag",
    "title": "Der Ausbildungsvertrag, Rechte, Pflichten & Arbeitsalltag",
    "category": "Arbeitswelt & Berufsstart",
    "shortDesc": "Inhalte des Ausbildungsvertrags, Probezeit, Berichtsheft, Ausbildungsvergütung, Zeugnis und Arbeitszeugnis-Codes.",
    "longDesc": "Der Ausbildungsvertrag regelt die rechtliche Basis der dualen Ausbildung. Gesetze wie das BBiG und JArbSchG sichern Schutz und Ausbildungsqualität.",
    "keyPoints": [
      "Vertragsinhalte: Dauer, Ausbildungsziel, Vergütung, Urlaub, Kündigungsfristen, Probezeit (1-4 Monate)",
      "Pflichten des Azubis: Lernpflicht, Sorgfaltspflicht, Berichtsheftführung, Schweigepflicht",
      "Pflichten des Betriebs: Ausbildungspflicht, kostenlose Arbeitsmittel, Fürsorgepflicht, Freistellung für Berufsschule",
      "Arbeitszeugnis: Anspruch auf qualifiziertes Zeugnis; 'Geheimcodes' und wohlwollende Formulierungen",
      "Arbeitsalltag: Teamarbeit, Konfliktlösung, Zeitmanagement, Ergonomie, Arbeitssicherheit und Work-Life-Balance"
    ],
    "exercises": [
      {
        "id": "arbeitssicherheit-und-unfallverhuetung",
        "title": "Arbeitssicherheit und Unfallverhütung",
        "folder": "arbeitssicherheit-und-unfallverhuetung"
      },
      {
        "id": "berufsschule-und-betrieb-zusammenarbeit",
        "title": "Berufsschule und Betrieb Zusammenarbeit",
        "folder": "berufsschule-und-betrieb-zusammenarbeit"
      },
      {
        "id": "das-arbeitszeugnis-geheimcodes-lesen",
        "title": "Das Arbeitszeugnis Geheimcodes lesen",
        "folder": "das-arbeitszeugnis-geheimcodes-lesen"
      },
      {
        "id": "das-berichtsheft-ordnungsgemaess-fuehren",
        "title": "Das Berichtsheft ordnungsgemäß führen",
        "folder": "das-berichtsheft-ordnungsgemaess-fuehren"
      },
      {
        "id": "der-ausbildungsvertrag-rechte-und-pflichten",
        "title": "Der Ausbildungsvertrag Rechte und Pflichten",
        "folder": "der-ausbildungsvertrag-rechte-und-pflichten"
      },
      {
        "id": "formale-anforderungen-an-das-arbeitszeugnis",
        "title": "Formale Anforderungen an das Arbeitszeugnis",
        "folder": "formale-anforderungen-an-das-arbeitszeugnis"
      },
      {
        "id": "home-office-und-virtuelle-teams",
        "title": "Home Office und virtuelle Teams",
        "folder": "home-office-und-virtuelle-teams"
      },
      {
        "id": "mindestlohn-fuer-azubis-und-praktikanten",
        "title": "Mindestlohn für Azubis und Praktikanten",
        "folder": "mindestlohn-fuer-azubis-und-praktikanten"
      },
      {
        "id": "probezeit-in-der-ausbildung-regeln",
        "title": "Probezeit in der Ausbildung Regeln",
        "folder": "probezeit-in-der-ausbildung-regeln"
      },
      {
        "id": "teamarbeit-und-konfliktloesung-im-betrieb",
        "title": "Teamarbeit und Konfliktlösung im Betrieb",
        "folder": "teamarbeit-und-konfliktloesung-im-betrieb"
      },
      {
        "id": "work-life-balance-im-berufsstart",
        "title": "Work Life Balance im Berufsstart",
        "folder": "work-life-balance-im-berufsstart"
      },
      {
        "id": "zeitmanagement-und-selbstorganisation",
        "title": "Zeitmanagement und Selbstorganisation",
        "folder": "zeitmanagement-und-selbstorganisation"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Der%20Ausbildungsvertrag%2C%20Rechte%2C%20Pflichten%20%26%20Arbeitsalltag+wirtschaft&t=3752"
  }
};
