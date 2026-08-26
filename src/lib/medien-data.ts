export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface MedienTopic {
  id?: number;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const medienCategories: string[] = [
  "Geschichte & Gesellschaft",
  "Fachbereiche & Wissenschaft",
  "Wirtschaft & Krisen"
];

export const medienTopics: Record<string, MedienTopic> = {
  "mediengeschichte": {
    "id": 45223,
    "slug": "mediengeschichte",
    "title": "Mediengeschichte",
    "category": "Geschichte & Gesellschaft",
    "shortDesc": "Fernsehentwicklung, Videospiele-Geschichte, Filmgeschichte, Internetrolle in den Medien, Fotografie und Popkultur.",
    "longDesc": "Von der Erfindung des Buchdrucks und der Fotografie über das goldene Zeitalter des Kinos und Fernsehens bis zur digitalen Revolution des Internets und der Videospiele: Entdecke die Meilensteine der Mediengeschichte.",
    "keyPoints": [
      "Vom Buchdruck zur Massenpresse: Johannes Gutenbergs bewegliche Lettern revolutionierten den Wissenstransfer in Europa",
      "Fotografie & Film: Daguerreotypie, Stummfilmära, Entstehung Hollywoods und Entwicklung zum weltweiten Massenunterhaltungsmedium",
      "Fernsehentwicklung: Erste Übertragungen, Siegeszug des Farbfernsehens, Satelliten-TV und Wandel zum Streaming on Demand",
      "Videospiele-Geschichte: Von 'Pong' und Spielhallenautomaten über Heimkonsolen bis zur immersiven Virtual Reality",
      "Internet & Web 2.0: Demokratisierung der Medienproduktion, interaktive Plattformen, Blogs und globale Vernetzung",
      "Medienrolle in der Popkultur: Wie Musikfernsehen (MTV), Filmikonen und Medienhypes Lebensstile ganzer Generationen prägten"
    ],
    "exercises": [
      {
        "id": "2584",
        "title": "Die Entwicklung des Fernsehens",
        "folder": "die-entwicklung-des-fernsehens-2584"
      },
      {
        "id": "2585",
        "title": "Die Geschichte der Videospiele",
        "folder": "die-geschichte-der-videospiele-2585"
      },
      {
        "id": "2606",
        "title": "Filmgeschichte und -analyse",
        "folder": "filmgeschichte-und-analyse-2606"
      },
      {
        "id": "2586",
        "title": "Die Rolle des Internets in der Medienlandschaft",
        "folder": "die-rolle-des-internets-in-der-medienlandschaft-2586"
      },
      {
        "id": "2587",
        "title": "Die Rolle von Fotografie in den Medien",
        "folder": "die-rolle-von-fotografie-in-den-medien-2587"
      },
      {
        "id": "2597",
        "title": "Die Rolle von Medien in der Popkultur",
        "folder": "die-rolle-von-medien-in-der-popkultur-2597"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Mediengeschichte&t=1721"
  },
  "medien-und-gesellschaft": {
    "id": 45225,
    "slug": "medien-und-gesellschaft",
    "title": "Medien und Gesellschaft",
    "category": "Geschichte & Gesellschaft",
    "shortDesc": "Medieneinfluss auf Politik, Kultur, Religion, Umwelt, Diversität und soziale Bewegungen.",
    "longDesc": "Medien spiegeln die Gesellschaft nicht nur wider, sie formen sie aktiv. Lerne die Wechselwirkungen zwischen Medienkonsum, politischer Meinungsbildung, gesellschaftlichen Werten und sozialem Wandel kennen.",
    "keyPoints": [
      "Medien als 'Vierte Gewalt': Kontrollfunktion in der Demokratie, Agenda-Setting und investigative Berichterstattung",
      "Diversität & Repräsentation: Darstellung von Minderheiten, Geschlechterrollen und kultureller Vielfalt in Film und Nachrichten",
      "Medien und Religion: Berichterstattung über Glaubensgemeinschaften, religiöse Rundfunkformate und Wertevermittlung",
      "Umwelt- & Klimakommunikation: Die Rolle von Medien bei der Sensibilisierung für globale ökologische Herausforderungen",
      "Soziale Bewegungen: Mobilisierungskraft moderner Medienkanäle für Bürgerrechte, Klimaschutz und gesellschaftlichen Protest",
      "Medienwirkungstheorien: Kultivierungshypothese, Schweigespirale und Filterblasen im digitalen Diskurs"
    ],
    "exercises": [
      {
        "id": "2583",
        "title": "Die Darstellung von Rasse und Ethnizität in den Medien",
        "folder": "die-darstellung-von-rasse-und-ethnizitat-in-den-medien-2583"
      },
      {
        "id": "2612",
        "title": "Medien und Politik - Einfluss und Interaktion",
        "folder": "medien-und-politik-einfluss-und-interaktion-2612"
      },
      {
        "id": "2614",
        "title": "Medien und Religion",
        "folder": "medien-und-religion-2614"
      },
      {
        "id": "2609",
        "title": "Medien und Kultur",
        "folder": "medien-und-kultur-2609"
      },
      {
        "id": "2616",
        "title": "Medien und Umwelt",
        "folder": "medien-und-umwelt-2616"
      },
      {
        "id": "2604",
        "title": "Die Rolle von Medien in sozialen Bewegungen",
        "folder": "die-rolle-von-medien-in-sozialen-bewegungen-2604"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medien+und+Gesellschaft&t=1721"
  },
  "medien-in-wissenschaft-und-technik": {
    "id": 45224,
    "slug": "medien-in-wissenschaft-und-technik",
    "title": "Medien in Wissenschaft und Technik",
    "category": "Fachbereiche & Wissenschaft",
    "shortDesc": "Wissenschaftskommunikation in Informatik, Umwelttechnologie, Raumfahrt, Robotik, Biologie und Physik.",
    "longDesc": "Wie wird komplexe Forschung verständlich vermittelt? Entdecke die Rolle der Medien bei der Dokumentation bahnbrechender wissenschaftlicher Entdeckungen und technologischer Umbrüche.",
    "keyPoints": [
      "Wissenschaftsjournalismus: Übersetzung komplexer Fachstudien in verständliche Sprache ohne Verfälschung der Fakten",
      "Visualisierung in Physik & Biologie: Mikroskopieaufnahmen, 3D-Simulationen und Infografiken zur Erklärung unsichtbarer Prozesse",
      "Raumfahrtberichterstattung: Live-Übertragungen historischer Meilensteine (Mondlandung, James-Webb-Teleskop, Mars-Rover)",
      "Robotik & KI in den Medien: Faszination, ethische Debatten und mediale Diskurse über Automatisierung und Zukunftstechnologien",
      "Umwelt- & Geodatenjournalismus: Satellitenbilder und interaktive Karten zur Sichtbarmachung von Klimaveränderungen"
    ],
    "exercises": [
      {
        "id": "2593",
        "title": "Die Rolle von Medien in der Informatik",
        "folder": "die-rolle-von-medien-in-der-informatik-2593"
      },
      {
        "id": "2600",
        "title": "Die Rolle von Medien in der Umwelttechnologie",
        "folder": "die-rolle-von-medien-in-der-umwelttechnologie-2600"
      },
      {
        "id": "2598",
        "title": "Die Rolle von Medien in der Raumfahrt",
        "folder": "die-rolle-von-medien-in-der-raumfahrt-2598"
      },
      {
        "id": "2599",
        "title": "Die Rolle von Medien in der Robotertechnologie",
        "folder": "die-rolle-von-medien-in-der-robotertechnologie-2599"
      },
      {
        "id": "2591",
        "title": "Die Rolle von Medien in der Biologie",
        "folder": "die-rolle-von-medien-in-der-biologie-2591"
      },
      {
        "id": "2596",
        "title": "Die Rolle von Medien in der Physik",
        "folder": "die-rolle-von-medien-in-der-physik-2596"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Wissenschaftskommunikation+Medien&t=1721"
  },
  "medien-in-verschiedenen-bereichen": {
    "id": 45227,
    "slug": "medien-in-spezifischen-fachbereichen",
    "title": "Medien in spezifischen Fachbereichen",
    "category": "Fachbereiche & Wissenschaft",
    "shortDesc": "Medienrolle in Kunst, Geschichte, Medizin, Wirtschaftskommunikation, Archäologie und Anthropologie.",
    "longDesc": "Jedes Wissensgebiet nutzt Medien auf eigene Weise: Von historischen Tondokumenten und Kunstkatalogen über medizinische Aufklärung bis hin zu archäologischen 3D-Rekonstruktionen.",
    "keyPoints": [
      "Medien in der Kunst: Dokumentation, Kunstkritik, digitale Museumstouren und interaktive Ausstellungskonzepte",
      "Historische Quellen & Archive: Zeitungen, Tonaufnahmen und Wochenschauen als unverzichtbare Zeugnisse vergangener Epochen",
      "Medizinische Kommunikation: Gesundheitskampagnen, Telemedizin und barrierefreie Patienteninformationen",
      "Archäologie & Anthropologie: Drohnenvermessung, digitale Rekonstruktionen antiker Stätten und ethnografische Filme",
      "Wirtschaftskommunikation: Public Relations (PR), Corporate Publishing und interne Unternehmenskommunikation"
    ],
    "exercises": [
      {
        "id": "2594",
        "title": "Die Rolle von Medien in der Kunst",
        "folder": "die-rolle-von-medien-in-der-kunst-2594"
      },
      {
        "id": "2592",
        "title": "Die Rolle von Medien in der Geschichte",
        "folder": "die-rolle-von-medien-in-der-geschichte-2592"
      },
      {
        "id": "2595",
        "title": "Die Rolle von Medien in der Medizin",
        "folder": "die-rolle-von-medien-in-der-medizin-2595"
      },
      {
        "id": "2601",
        "title": "Die Rolle von Medien in der Wirtschaftskommunikation",
        "folder": "die-rolle-von-medien-in-der-wirtschaftskommunikation-2601"
      },
      {
        "id": "2589",
        "title": "Die Rolle von Medien in der Archäologie",
        "folder": "die-rolle-von-medien-in-der-archaologie-2589"
      },
      {
        "id": "2588",
        "title": "Die Rolle von Medien in der Anthropologie",
        "folder": "die-rolle-von-medien-in-der-anthropologie-2588"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medien+Fachbereiche&t=1721"
  },
  "medien-in-konflikten-und-krisen": {
    "id": 45228,
    "slug": "medien-in-krisen-und-konflikten",
    "title": "Medien in Krisen und Konflikten",
    "category": "Wirtschaft & Krisen",
    "shortDesc": "Katastrophenberichterstattung, Kriegsberichterstattung, Wahlen, Datenschutz, Medienrecht, Zensur und Werbepsychologie.",
    "longDesc": "In Ausnahmesituationen entscheidet verlässliche Information über Leben und Tod. Erfahre mehr über journalistische Ethik im Krieg, Katastrophenwarnsysteme, Zensurmaßnahmen und rechtliche Rahmenbedingungen.",
    "keyPoints": [
      "Kriegsberichterstattung: Eingebetteter Journalismus (Embedded Journalism), Propaganda, Desinformation und Verifizierungspflicht",
      "Katastrophen- & Krisenkommunikation: Frühwarnsysteme, Verhaltenshinweise für die Bevölkerung und Vermeidung von Sensationsgier",
      "Wahlberichterstattung: Neutralitätsgebot des öffentlich-rechtlichen Rundfunks, TV-Duelle und Berichterstattung über Wahlumfragen",
      "Pressefreiheit & Zensur: Grundgesetz Artikel 5, Zensurmethoden autoritärer Staaten und weltweiter Schutz von Medienschaffenden",
      "Medienrecht & Datenschutz: Urheberrecht, Persönlichkeitsrechte (Recht am eigenen Bild), Impressumspflicht und DSGVO",
      "Werbepsychologie: Kaufanreize, Zielgruppenansprache, subliminale Reize und Influencer-Marketing"
    ],
    "exercises": [
      {
        "id": "2602",
        "title": "Die Rolle von Medien in Katastrophenberichterstattung",
        "folder": "die-rolle-von-medien-in-katastrophenberichterstattung-2602"
      },
      {
        "id": "2603",
        "title": "Die Rolle von Medien in Kriegen und Konflikten",
        "folder": "die-rolle-von-medien-in-kriegen-und-konflikten-2603"
      },
      {
        "id": "2605",
        "title": "Die Rolle von Medien in Wahlen",
        "folder": "die-rolle-von-medien-in-wahlen-2605"
      },
      {
        "id": "2607",
        "title": "Medien und Datenschutz",
        "folder": "medien-und-datenschutz-2607"
      },
      {
        "id": "2618",
        "title": "Medienrecht und Zensur",
        "folder": "medienrecht-und-zensur-2618"
      },
      {
        "id": "2619",
        "title": "Werbung und ihre psychologischen Strategien",
        "folder": "werbung-und-ihre-psychologischen-strategien-2619"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medien+Krisen+Konflikte&t=1721"
  },
  "medien-in-wirtschaft-und-industrie": {
    "id": 45229,
    "slug": "medien-in-wirtschaft-und-industrie",
    "title": "Medien in Wirtschaft und Industrie",
    "category": "Wirtschaft & Krisen",
    "shortDesc": "Finanztechnologie, Luftfahrt, Mode, Transport, Raumfahrt und Medien in Augmented Reality.",
    "longDesc": "Medien sind ein mächtiger Wirtschaftsmotor und verändern industrielle Prozesse: Vom digitalen Finanzmarkt über Modemarketing bis zu zukunftsweisenden AR- und VR-Anwendungen in der Industrie.",
    "keyPoints": [
      "Finanzmedien & FinTech: Börsenberichterstattung, automatisierter algorithmischer Handel und digitale Zahlungsströme",
      "Mode & Lifestyle-Medien: Modemagazine, Modenschau-Livestreams und digitaler Mode-E-Commerce",
      "Augmented Reality (AR) in der Industrie: Wartungsanleitungen per Datenbrille, digitale Prototypen und immersive Produktpräsentationen",
      "Transport- & Verkehrsinformation: Echtzeit-Navigationsmedien, Passagierleitsysteme und intermodale Mobilitäts-Apps",
      "Marktkonzentration & Medienkonzerne: Medienökonomie, Werbeerlöse und Monopolisierungstendenzen im Plattformkapitalismus"
    ],
    "exercises": [
      {
        "id": "2608",
        "title": "Medien und Finanztechnologie",
        "folder": "medien-und-finanztechnologie-2608"
      },
      {
        "id": "2610",
        "title": "Medien und Luftfahrt",
        "folder": "medien-und-luftfahrt-2610"
      },
      {
        "id": "2611",
        "title": "Medien und Mode",
        "folder": "medien-und-mode-2611"
      },
      {
        "id": "2615",
        "title": "Medien und Transport",
        "folder": "medien-und-transport-2615"
      },
      {
        "id": "2613",
        "title": "Medien und Raumfahrt",
        "folder": "medien-und-raumfahrt-2613"
      },
      {
        "id": "2590",
        "title": "Die Rolle von Medien in der Augmented Reality",
        "folder": "die-rolle-von-medien-in-der-augmented-reality-2590"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medien+Wirtschaft+Industrie&t=1721"
  }
};
