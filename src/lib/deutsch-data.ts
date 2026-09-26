export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface DeutschTopic {
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

export const deutschCategories: string[] = [
  "Grammatik & Sprachbetrachtung",
  "Rechtschreibung & Zeichensetzung",
  "Texte, Aufsatz & Erörterung",
  "Epochen der Literaturgeschichte",
  "Dramen & Meisterwerke der Klassik",
  "Romane, Novellen & Erzählungen",
  "Moderne Dramatik & Gegenwartsliteratur",
  "Österreichische Literatur & Wiener Moderne",
  "Lyrik, Gedichte & Balladen",
  "Kinder- & Jugendliteratur",
  "Literarische Gattungen & Genres",
  "Kreatives Schreiben & Erzählhandwerk",
  "Lesekultur, Medien & Buchwelten"
];

export const deutschTopics: Record<string, DeutschTopic> = {
  "grammatik": {
    "slug": "grammatik",
    "title": "Grammatik & Wortarten",
    "category": "Grammatik & Sprachbetrachtung",
    "shortDesc": "Wortarten im Deutschen: Nomen, Verben, Adjektive, Pronomen, Numerale, Präpositionen und Konjunktionen sicher bestimmen.",
    "longDesc": "Die grundlegenden Bausteine der deutschen Sprache: Lerne alle Wortarten fehlerfrei zu klassifizieren, ihre grammatikalischen Merkmale (Genus, Numerus, Kasus, Person, Tempus, Modus) zu analysieren und im Satzzusammenhang gezielt anzuwenden.",
    "keyPoints": [
      "Nomen (Substantive): Konkreta vs. Abstrakta, grammatikalisches Geschlecht (Genus) und Deklination in 4 Fällen",
      "Verben: Vollverben, Hilfsverben und Modalverben; finite Personalformen und infinite Formen (Infinitiv, Partizip I & II)",
      "Adjektive: Deklination (stark, schwach, gemischt) und Steigerung (Positiv, Komparativ, Superlativ)",
      "Begleiter & Stellvertreter: Bestimmte und unbestimmte Artikel, Personal-, Possessiv-, Demonstrativ- und Relativpronomen",
      "Unveränderliche Wortarten: Präpositionen (mit festem Kasus), Konjunktionen, Adverbien und Interjektionen"
    ],
    "exercises": [
      {
        "id": "541",
        "title": "Nomen",
        "folder": "nomen-541"
      },
      {
        "id": "555",
        "title": "Verb - Grundlagen",
        "folder": "verb-grundlagen-2-555"
      },
      {
        "id": "556",
        "title": "Verb - Personalform",
        "folder": "verb-personalform-2-556"
      },
      {
        "id": "554",
        "title": "Zeitformen des Verbs",
        "folder": "zeitformen-des-verbs-554"
      },
      {
        "id": "3249",
        "title": "Die Wortarten",
        "folder": "die-wortarten-3249"
      },
      {
        "id": "3252",
        "title": "Die Wortarten - Vertiefung",
        "folder": "die-wortarten-2-3252"
      },
      {
        "id": "553",
        "title": "Adjektiv",
        "folder": "adjektiv-553"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Deutsche%20Grammatik%20Wortarten&t=284"
  },
  "zeitformen": {
    "slug": "zeitformen",
    "title": "Zeitformen des Verbs",
    "category": "Grammatik & Sprachbetrachtung",
    "shortDesc": "Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I und Futur II: Bildung, Verwendung und Signalwörter.",
    "longDesc": "Die 6 grammatikalischen Zeitformen der deutschen Sprache im Detail: Vom Präsens im Hier und Jetzt über das Präteritum im schriftlichen Erzählen bis zum Perfekt in der gesprochenen Sprache und dem Plusquamperfekt für vollendete Vorzeitigkeit.",
    "keyPoints": [
      "Präsens (Gegenwart): Gegenwärtige Handlungen, Dauerzustände und feste Zukunftsvereinbarungen",
      "Präteritum (Imperfekt / Vergangenheit): Haupterzählzeit in Berichten, Romanen und schriftlichen Erzählungen",
      "Perfekt (vollendete Gegenwart): Gesprochene Sprache und Handlungen mit Gegenwartsbezug ('haben/sein' + Partizip II)",
      "Plusquamperfekt (Vorvergangenheit): Handlungen, die vor einem bestimmten Zeitpunkt der Vergangenheit abgeschlossen waren",
      "Futur I (Zukunft): Zukünftige Vorhaben, Absichten oder Vermutungen ('werden' + Infinitiv)",
      "Futur II (vollendete Zukunft): Handlungen, die zu einem zukünftigen Zeitpunkt abgeschlossen sein werden"
    ],
    "exercises": [
      {
        "id": "1016",
        "title": "Zeitformen - Präsens und Präteritum",
        "folder": "zeitformen-prasens-und-prateritum-1016"
      },
      {
        "id": "1017",
        "title": "Zeitformen - Perfekt und Präteritum",
        "folder": "zeitformen-perfekt-und-prateritum-1017"
      },
      {
        "id": "1018",
        "title": "Zeitformen - Präteritum und Plusquamperfekt",
        "folder": "zeitformen-prateritum-und-plusquamperfekt-1018"
      },
      {
        "id": "1019",
        "title": "Zeitformen - Präteritum, Perfekt und Plusquamperfekt",
        "folder": "zeitformen-prateritum-perfekt-und-plusquamperfekt-1019"
      },
      {
        "id": "1015",
        "title": "Zeitformen - Futur 1 und Futur 2",
        "folder": "zeitformen-futur-1-und-futur-2-1015"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zeitformen%20Verben%20Deutsch&t=284"
  },
  "satzbau-und-satzglieder": {
    "slug": "satzbau-und-satzglieder",
    "title": "Satzglieder & Satzgefüge",
    "category": "Grammatik & Sprachbetrachtung",
    "shortDesc": "Subjekt, Prädikat, Objekte, adverbiale Bestimmungen, Haupt- und Nebensätze sowie direkte Rede.",
    "longDesc": "Satzbaupläne und syntaktische Strukturen: Wie Sätze aufgebaut sind, wie Satzglieder durch Umstell- und Ersatzproben ermittelt werden und wie Satzgefüge aus Haupt- und Gliedsätzen präzise gebildet werden.",
    "keyPoints": [
      "Satzkern: Subjekt (Satzgegenstand: Wer oder was?) und Prädikat (Satzaussage: Was tut das Subjekt?)",
      "Objekte: Genitivobjekt (Wessen?), Dativobjekt (Wem?), Akkusativobjekt (Wen oder was?) und Präpositionalobjekt",
      "Adverbiale Bestimmungen: Lokal (Wo/Wohin?), Temporal (Wann/Wie lange?), Kausal (Warum?), Modal (Wie?)",
      "Satzreihe vs. Satzgefüge: Parataxe (Hauptsatz + Hauptsatz) vs. Hypotaxe (Hauptsatz + untergeordneter Nebensatz)",
      "Direkte und indirekte Rede: Redebegleitsatz, Anführungszeichen und Konjunktiv I in der indirekten Rede",
      "Beistrichregeln: Zuverlässige Kommasetzung im einfachen Satz, bei Aufzählungen und im Satzgefüge"
    ],
    "exercises": [
      {
        "id": "548",
        "title": "Beistrich (Komma) im zusammengesetzten Satz",
        "folder": "beistrich-komma-im-zusammengesetzten-satz-548"
      },
      {
        "id": "549",
        "title": "Beistrich (Komma) im einfachen Satz",
        "folder": "beistrich-komma-im-einfachen-satz-549"
      },
      {
        "id": "550",
        "title": "Direkte Rede",
        "folder": "direkte-rede-550"
      },
      {
        "id": "557",
        "title": "Wortarten im Satzkontext: Kasus, Satzgefüge & Konjunktiv",
        "folder": "wortarten-bersicht-557"
      },
      {
        "id": "568",
        "title": "Wortarten & Satzbausteine – Vertiefung & Training",
        "folder": "wortarten-bersicht-2-568"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Satzglieder%20Satzbau%20Deutsch&t=284"
  },
  "sprache-und-sprachwandel": {
    "slug": "sprache-und-sprachwandel",
    "title": "Sprachursprung, Dialekte & Sprachwandel",
    "category": "Grammatik & Sprachbetrachtung",
    "shortDesc": "Ursprung der menschlichen Sprache nach Herder, deutsche Mundarten, Fachsprache und digitaler Sprachwandel.",
    "longDesc": "Sprache als lebendiges Kulturgut: Wie Sprache entstand, wie sich Dialekte von der Standardsprache abgrenzen, welche Rolle Fachsprachen in Wissenschaft und Schule spielen und wie moderne Medien den Sprachgebrauch verändern.",
    "keyPoints": [
      "Johann Gottfried Herder: Abhandlung über den Ursprung der Sprache (1772) – Vernunft, Besonnenheit und menschliche Schöpfung",
      "Standardsprache vs. Dialekt: Regionale Mundarten (Alemannisch, Bairisch, Plattdeutsch) und Schweizerdeutsch",
      "Dialekte in der Literatur: Authentizität und Lokalkolorit vs. Lesbarkeit und Verständlichkeit",
      "Fachsprache vs. Alltagssprache: Präzise Verwendung linguistischer Fachtermini und Bildungssprache",
      "Geflügelte Worte & Zitate: Herkunft berühmter Redewendungen aus Antike, Bibel und Klassikern",
      "Sprachwandel heute: Einfluss von Anglizismen, Jugendsprache und digitalen Lernformaten (YouTube & Social Media)"
    ],
    "exercises": [
      {
        "id": "3247",
        "title": "Herder und der Sprachursprung",
        "folder": "herder-und-der-sprachursprung-3247"
      },
      {
        "id": "3444",
        "title": "J.G. Herder: Abhandlung über den Ursprung der Sprache",
        "folder": "j-g-herder-abhandlung-uber-den-ursprung-der-sprache-3444"
      },
      {
        "id": "6393",
        "title": "Schweizerdeutsch einfach erklärt",
        "folder": "schweizerdeutsch-einfach-erklart-6393"
      },
      {
        "id": "dialekte-in-buechern-wann-es-passt-und-wann-nervt",
        "title": "Dialekte in Büchern – Wann es passt und wann nervt",
        "folder": "dialekte-in-buechern-wann-es-passt-und-wann-nervt"
      },
      {
        "id": "bekannte-zitate-und-woher-sie-wirklich-kommen",
        "title": "Bekannte Zitate und woher sie wirklich kommen",
        "folder": "bekannte-zitate-und-woher-sie-wirklich-kommen"
      },
      {
        "id": "wie-man-fachbegriffe-in-deutsch-richtig-anwendet",
        "title": "Wie man Fachbegriffe in Deutsch richtig anwendet",
        "folder": "wie-man-fachbegriffe-in-deutsch-richtig-anwendet"
      },
      {
        "id": "wie-youtube-kanaele-beim-deutsch-lernen-helfen",
        "title": "Wie YouTube-Kanäle beim Deutsch-Lernen helfen",
        "folder": "wie-youtube-kanaele-beim-deutsch-lernen-helfen"
      },
      {
        "id": "alemannisch",
        "title": "Alemannische Dialekte",
        "folder": "alemannische-dialekte"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sprachwandel%20Dialekte%20Deutsch%20Herder&t=284"
  },
  "rechtschreibung": {
    "slug": "rechtschreibung",
    "title": "Rechtschreibung & Zeichensetzung",
    "category": "Rechtschreibung & Zeichensetzung",
    "shortDesc": "s-Schreibung (s, ss, ß), das vs. dass, Dehnung, Schärfung, Silbentrennung und Wörterbuchstrategien.",
    "longDesc": "Regelsicherheit für fehlerfreies Schreiben: Systematische Rechtschreibstrategien zur Unterscheidung stimmhafter und stimmloser s-Laute, zur Konjunktion dass, zu Vokallängen (ie, Dehnungs-h) und Doppelkonsonanten.",
    "keyPoints": [
      "s-Schreibung: Kurzer Vokal erfordert 'ss' (Fluss, Kuss); langer Vokal/Diphtong erfordert 'ß' (Fuß, Straße, heiß)",
      "das vs. dass: 'das' als Artikel oder Pronomen (Ersatzprobe: dieses, jenes, welches); 'dass' als unterordnende Konjunktion",
      "Dehnung & Schärfung: Stummes Dehnungs-h vor l, m, n, r; Vokalschärfung durch Konsonantenverdopplung (ck, tz, mm, tt)",
      "Groß- und Kleinschreibung: Substantivierte Verben und Adjektive (beim Lesen, etwas Spannendes) sowie feste Wendungen",
      "Silbentrennung: Trennung nach Sprechsilben, Trennung zusammengesetzter Wörter und Umgang mit ch, sch, ck",
      "Digitales Schreiben: Warum korrekte Orthographie und Zeichensetzung auch beim Tippen auf Smartphone und PC essenziell sind"
    ],
    "exercises": [
      {
        "id": "540",
        "title": "Das/Dass",
        "folder": "das-dass-540"
      },
      {
        "id": "546",
        "title": "s-Schreibung",
        "folder": "s-schreibung-546"
      },
      {
        "id": "547",
        "title": "Dehnung und Schärfung",
        "folder": "dehnung-und-scharfung-547"
      },
      {
        "id": "544",
        "title": "Wörterbuch",
        "folder": "worterbuch-544"
      },
      {
        "id": "545",
        "title": "Wort- und Silbentrennung",
        "folder": "wort-und-silbentrennung-545"
      },
      {
        "id": "719",
        "title": "Diktat mit Sprichwörtern",
        "folder": "diktat-mit-sprichwortern-719"
      },
      {
        "id": "warum-rechtschreibung-auch-beim-tippen-wichtig-ist",
        "title": "Warum Rechtschreibung auch beim Tippen wichtig ist",
        "folder": "warum-rechtschreibung-auch-beim-tippen-wichtig-ist"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rechtschreibung%20Dass%20Regeln%20Deutsch&t=284"
  },
  "texte-und-schreibformen": {
    "slug": "texte-und-schreibformen",
    "title": "Texte, Aufsatzformen & Textanalyse",
    "category": "Texte, Aufsatz & Erörterung",
    "shortDesc": "Inhaltsangabe, Referat, Exzerpt, Szenenanalyse im Drama, Einleitungen und Prüfungsstrategien.",
    "longDesc": "Systematische Methoden für die Textproduktion und Textanalyse in der Sekundarstufe: Vom perfekten Einstieg über den roten Faden bis hin zur methodischen Szenenanalyse dramatischer Texte und fundierter Prüfungsvorbereitung.",
    "keyPoints": [
      "Inhaltsangabe: Präsens, sachliche Sprache, chronologische Abfolge, Verzicht auf direkte Zitate und Wertung",
      "Exzerpt & Referat: Kerninformationen zielgerichtet extrahieren, strukturieren und überzeugend präsentieren",
      "Der gelungene Einstieg: Zitat, provokante Frage oder aktueller Bezug als starker erster Satz",
      "Der rote Faden: Logische Absätze, Überleitungen und kohärente Argumentationsstränge in Analysen",
      "Szenenanalyse im Drama: Einordnung in den Gesamtzusammenhang, Figurenkonstellation, Dialogführung und Regieanweisungen",
      "Prüfungsvorbereitung: Zeitmanagement, Operatoren verstehen und methodischer Aufbau im Deutsch-Abschluss / Abitur"
    ],
    "exercises": [
      {
        "id": "542",
        "title": "Referat",
        "folder": "referat-542"
      },
      {
        "id": "543",
        "title": "Exzerpt",
        "folder": "exzerpt-543"
      },
      {
        "id": "der-perfekte-erste-satz-fuer-einen-aufsatz",
        "title": "Der perfekte erste Satz für einen Aufsatz",
        "folder": "der-perfekte-erste-satz-fuer-einen-aufsatz"
      },
      {
        "id": "den-roten-faden-in-einer-analyse-behalten",
        "title": "Den roten Faden in einer Analyse behalten",
        "folder": "den-roten-faden-in-einer-analyse-behalten"
      },
      {
        "id": "szenenanalyse-im-drama-schritt-fuer-schritt",
        "title": "Szenenanalyse im Drama Schritt für Schritt",
        "folder": "szenenanalyse-im-drama-schritt-fuer-schritt"
      },
      {
        "id": "vorbereitung-auf-das-deutsch-abitur-oder-den-abschluss",
        "title": "Vorbereitung auf das Deutsch-Abitur oder den Abschluss",
        "folder": "vorbereitung-auf-das-deutsch-abitur-oder-den-abschluss"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Aufsatz%20Inhaltsangabe%20Analyse%20Deutsch&t=284"
  },
  "argumentation-und-eroerterung": {
    "slug": "argumentation-und-eroerterung",
    "title": "Argumentation & Erörterung",
    "category": "Texte, Aufsatz & Erörterung",
    "shortDesc": "These, Antithese, Argumenttypen, dialektische Erörterung, Debattenkultur und nonverbale Kommunikation.",
    "longDesc": "Überzeugend begründen und Stellung beziehen: Lerne den präzisen Aufbau der Argumentation (Behauptung, Begründung, Beispiel, Rückbezug), die dialektische Erörterung strittiger gesellschaftlicher Themen und rhetorische Mittel kennen.",
    "keyPoints": [
      "Aufbau eines Arguments: Behauptung (These), logische Begründung (Argument) und anschaulicher Beleg (Beispiel)",
      "Lineare vs. dialektische Erörterung: Einseitige Steigerung vs. Gegenüberstellung von Pro und Kontra mit abschließendem Synthese-Urteil",
      "Argumenttypen: Faktenargument, Autoritätsargument, normatives Argument, analogisierendes Argument",
      "Aktuelle Debattenthemen: Smartphone- und TikTok-Verbote an Schulen, Jugendschutz im Netz und Brauchtumsfragen",
      "Nonverbale Kommunikation: Körpersprache, Mimik, Gestik und Blickkontakt bei mündlichen Vorträgen und Diskussionen",
      "Sprachliche Vermittlung: Konstruktive Kritik, sachlicher Ton und Vermeidung von Scheinargumenten"
    ],
    "exercises": [
      {
        "id": "6418",
        "title": "Handy-Verbot in der Schule",
        "folder": "handy-verbot-in-der-schule-6418"
      },
      {
        "id": "6415",
        "title": "TikTok-Verbot für Jugendliche unter 16",
        "folder": "tiktok-verbot-fur-jugendliche-unter-16-6415"
      },
      {
        "id": "6637",
        "title": "Feuerwerk an Silvester verbieten",
        "folder": "feuerwerk-an-silvester-verbieten-6637"
      },
      {
        "id": "radikaler-jugendschutz-die-hitzige-debatte-um-social-media-verbote",
        "title": "Radikaler Jugendschutz – Die Debatte um Social-Media-Verbote",
        "folder": "radikaler-jugendschutz-die-hitzige-debatte-um-social-media-verbote"
      },
      {
        "id": "2724",
        "title": "Körpersprache und nonverbale Kommunikation",
        "folder": "korpersprache-und-nonverbale-kommunikation-2724"
      },
      {
        "id": "wie-man-mit-buechern-die-welt-verbessern-kann",
        "title": "Wie man mit Büchern die Welt verbessern kann",
        "folder": "wie-man-mit-buechern-die-welt-verbessern-kann"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Eroerterung%20Argumentation%20Deutsch%20Schule&t=284"
  },
  "literatur-antike-bis-barock": {
    "slug": "literatur-antike-bis-barock",
    "title": "Literatur von der Antike bis zum Barock",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Antike Mythologie, höfischer Minnesang, Nibelungenlied, Renaissance, Humanismus und barocke Vanitas-Motive.",
    "longDesc": "Die Anfänge europäischer und deutschsprachiger Dichtung: Von den antiken Epen Homers und Tragödien des Sophokles über den mittelalterlichen Minnesang und das ritterliche Tugendsystem bis zur barocken Dichtung zwischen Lebenslust ('Carpe diem') und Todesfurcht ('Memento mori').",
    "keyPoints": [
      "Antike (ca. 800 v. Chr. – 500 n. Chr.): Epos (Homer: Odyssee), griechische Tragödie (Sophokles: Antigone) und antike Rhetorik",
      "Mittelalter (ca. 750–1500): Althochdeutsche Dichtung (Hildebrandslied), höfische Epik (Parzival) und Minnesang (Walther von der Vogelweide)",
      "Renaissance & Humanismus (ca. 1400–1600): Wiederentdeckung des Menschen, Erfindung des Buchdrucks (Gutenberg) und Volksbücher (Faust)",
      "Barock (1600–1720): Der Dreißigjährige Krieg, barocke Antithetik (Diesseitsfreude vs. Jenseitsstreben) und Sonettform (Gryphius)",
      "Leitmotive des Barock: 'Carpe diem' (Nutze den Tag), 'Memento mori' (Bedenke das Sterben) und 'Vanitas' (Vergänglichkeit allen irdischen Ruhms)",
      "Historischer Abriss: Die kontinuierliche Entwicklung der deutschen Literaturgeschichte"
    ],
    "exercises": [
      {
        "id": "4635",
        "title": "Literaturepoche Antike",
        "folder": "literaturepoche-antike-4635"
      },
      {
        "id": "4636",
        "title": "Literaturepoche Mittelalter",
        "folder": "literaturepoche-mittelalter-2-4636"
      },
      {
        "id": "2368",
        "title": "Literaturepoche Mittelalter - Vertiefung",
        "folder": "literaturepoche-mittelalter-2368"
      },
      {
        "id": "4637",
        "title": "Literaturepoche Renaissance",
        "folder": "literaturepoche-renaissance-2-4637"
      },
      {
        "id": "4638",
        "title": "Literaturepoche Barock",
        "folder": "literaturepoche-barock-2-4638"
      },
      {
        "id": "2370",
        "title": "Literaturepoche Barock - Vertiefung",
        "folder": "literaturepoche-barock-2370"
      },
      {
        "id": "barockgedichte-zwischen-partylaune-und-todesangst",
        "title": "Barockgedichte – Zwischen Partylaune und Todesangst",
        "folder": "barockgedichte-zwischen-partylaune-und-todesangst"
      },
      {
        "id": "5355",
        "title": "Die Geschichte der deutschen Literatur",
        "folder": "die-geschichte-der-deutschen-literatur-5355"
      },
      {
        "id": "6156",
        "title": "Antigone von Sophokles",
        "folder": "antigone-von-sophokles-6156"
      },
      {
        "id": "6155",
        "title": "Antigone von Sophokles - literarische Bedeutung",
        "folder": "antigone-von-sophokles-literarische-bedeutung-6155"
      },
      {
        "id": "6153",
        "title": "Antigone von Sophokles - Bezug zur Gegenwart",
        "folder": "antigone-von-sophokles-bezug-zur-gegenwart-6153"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Literaturepochen%20Barock%20Mittelalter%20Deutsch&t=284"
  },
  "aufklaerung-und-sturm-und-drang": {
    "slug": "aufklaerung-und-sturm-und-drang",
    "title": "Aufklärung, Empfindsamkeit & Sturm und Drang",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Kants Vernunftbegriff, Lessings Toleranzideal, Empfindsamkeit und die Geniezeit des Sturm und Drang.",
    "longDesc": "Vom Zeitalter der Vernunft zum Ausbruch der Gefühle: Wie die Aufklärung den Menschen aus seiner selbstverschuldeten Unmündigkeit befreien wollte und junge Rebellen des Sturm und Drang Leidenschaft, Natur und das Originalgenie gegen gesellschaftliche Konventionen setzten.",
    "keyPoints": [
      "Aufklärung (1720–1790): Leitgedanke 'Sapere aude!' (Habe Mut, dich deines eigenen Verstandes zu bedienen! – Kant)",
      "Toleranzgedanke: Lessings 'Nathan der Weise' und die Ringparabel als Manifest des friedlichen Dialogs der Religionen",
      "Bürgerliches Trauerspiel: Abkehr von der Ständeklausel der Antike (Lessing: Emilia Galotti, Miss Sara Sampson)",
      "Empfindsamkeit (1740–1790): Pflege wahrer Seelenfreundschaft, Frömmigkeit und Naturverbundenheit (Klopstock)",
      "Sturm und Drang (1767–1785): Geniezeit, Herz, Natur und Rebellion gegen Tyrannei und feudale Zwänge",
      "Schlüsselfiguren des Sturm und Drang: Der junge Goethe (Götz von Berlichingen, Prometheus, Werther) und der junge Schiller (Die Räuber)"
    ],
    "exercises": [
      {
        "id": "4639",
        "title": "Literaturepoche Aufklärung",
        "folder": "literaturepoche-aufklarung-2-4639"
      },
      {
        "id": "2371",
        "title": "Literaturepoche Aufklärung - Vertiefung",
        "folder": "literaturepoche-aufklarung-2371"
      },
      {
        "id": "2372",
        "title": "Literaturepoche Empfindsamkeit",
        "folder": "literaturepoche-empfindsamkeit-2372"
      },
      {
        "id": "4640",
        "title": "Literaturepoche Sturm und Drang",
        "folder": "literaturepoche-sturm-und-drang-2-4640"
      },
      {
        "id": "2373",
        "title": "Literaturepoche Sturm und Drang - Vertiefung",
        "folder": "literaturepoche-sturm-und-drang-2373"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Aufklaerung%20Sturm%20und%20Drang%20Deutsch&t=284"
  },
  "weimarer-klassik": {
    "slug": "weimarer-klassik",
    "title": "Weimarer Klassik",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Goethe, Schiller, Herder und Wieland: Humanitätsideal, Harmonie, Schönheit und Maß nach der Italienreise.",
    "longDesc": "Der Höhepunkt deutschsprachiger Dichtung: Nach den Erschütterungen der Französischen Revolution suchten Goethe und Schiller in Weimar nach ästhetischer Bildung, moralischer Vollendung, Maß und Harmonie, inspiriert von antiken Kunstidealen.",
    "keyPoints": [
      "Historischer Rahmen (1786–1805): Goethes Italienreise (1786) bis zu Schillers Tod (1805)",
      "Das Viergestirn von Weimar: Johann Wolfgang von Goethe, Friedrich Schiller, Johann Gottfried Herder und Christoph Martin Wieland",
      "Zentrales Ideal der Humanität: Glaube an das Wahre, Gute und Schöne; sittliche Veredelung des Individuums",
      "Formstrenge und Harmonie: Metrisch geschliffene Versmaße (Blankvers, elegisches Distichon), geschlossene Dramenform",
      "Schillers Briefe 'Über die ästhetische Erziehung des Menschen': Kunst als Weg zur wahren Freiheit",
      "Hauptwerke der Klassik: Goethes 'Iphigenie auf Tauris', 'Torquato Tasso', 'Faust I'; Schillers 'Don Karlos', 'Maria Stuart', 'Wilhelm Tell'"
    ],
    "exercises": [
      {
        "id": "4641",
        "title": "Literaturepoche Klassik",
        "folder": "literaturepoche-klassik-4641"
      },
      {
        "id": "schiller-und-der-kampf-fuer-die-freiheit",
        "title": "Schiller und der Kampf für die Freiheit",
        "folder": "schiller-und-der-kampf-fuer-die-freiheit"
      },
      {
        "id": "3280",
        "title": "J.W. Goethe – Iphigenie auf Tauris (Klassisches Humanitätsdrama)",
        "folder": "j-w-goethe-iphigenie-auf-tauris-3280"
      },
      {
        "id": "3448",
        "title": "J.W. Goethe – Torquato Tasso (Das klassische Künstlerdrama)",
        "folder": "j-w-goethe-torquato-tasso-3448"
      },
      {
        "id": "3423",
        "title": "Friedrich Schiller – Don Karlos (Dramatisches Freiheitsgedicht)",
        "folder": "friedrich-schiller-don-karlos-3423"
      },
      {
        "id": "6198",
        "title": "Friedrich Schiller – Die Jungfrau von Orleans",
        "folder": "die-jungfrau-von-orleans-von-friedrich-schiller-6198"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Weimarer%20Klassik%20Goethe%20Schiller&t=284"
  },
  "romantik-und-vormaerz": {
    "slug": "romantik-und-vormaerz",
    "title": "Romantik, Biedermeier & Vormärz",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Blaue Blume, Sehnsucht, Schauerromantik, biedermeierlicher Rückzug und politischer Protest des Vormärz.",
    "longDesc": "Das spannungsgeladene 19. Jahrhundert zwischen Wiener Kongress und 1848er-Revolution: Während die Romantiker die Welt poetisieren wollten und das Biedermeier häusliche Idylle suchte, forderte das Junge Deutschland radikale Demokratie und Pressefreiheit.",
    "keyPoints": [
      "Romantik (1795–1835): Frühromantik (Jena), Heidelberger und Berliner Romantik; Universalpoesie und romantische Ironie",
      "Symbole der Romantik: Die 'Blaue Blume' als Symbol der Sehnsucht nach dem Unerreichbaren, Wandermotiv und Nachtseiten der Natur",
      "Schwarze Romantik: Das Unheimliche, Doppelgänger, Wahnsinn und Technikangst (E.T.A. Hoffmann)",
      "Biedermeier (1815–1848): Politischer Stillstand (Metternich-Zensur), Rückzug ins Private, Naturfrömmigkeit (Stifter, Droste-Hülshoff)",
      "Vormärz (1830–1848): Politisches Engagement, Kampf gegen Fürstenherrschaft und Zensur (Heinrich Heine, Georg Büchner)",
      "Autorenporträts: Joseph von Eichendorff und Bettina von Arnim als mutige Gestalter der Epoche"
    ],
    "exercises": [
      {
        "id": "4642",
        "title": "Literaturepoche Romantik",
        "folder": "literaturepoche-romantik-2-4642"
      },
      {
        "id": "4643",
        "title": "Literaturepoche Biedermeier",
        "folder": "literaturepoche-biedermeier-2-4643"
      },
      {
        "id": "2376",
        "title": "Literaturepoche Vormärz",
        "folder": "literaturepoche-vormarz-2376"
      },
      {
        "id": "die-romantik-und-die-sehnsucht-nach-der-natur",
        "title": "Die Romantik und die Sehnsucht nach der Natur",
        "folder": "die-romantik-und-die-sehnsucht-nach-der-natur"
      },
      {
        "id": "e-t-a-hoffmann-und-die-dunkle-romantik",
        "title": "E.T.A. Hoffmann und die dunkle Romantik",
        "folder": "e-t-a-hoffmann-und-die-dunkle-romantik"
      },
      {
        "id": "6239",
        "title": "Joseph von Eichendorff",
        "folder": "joseph-von-eichendorff-6239"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Romantik%20Vormaerz%20Biedermeier%20Literatur&t=284"
  },
  "realismus-und-naturalismus": {
    "slug": "realismus-und-naturalismus",
    "title": "Bürgerlicher Realismus & Naturalismus",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Objektive Wirklichkeitsdarstellung, Verklärung des Bürgertums, Kunstformel Arno Holz' und Milieutheorie.",
    "longDesc": "Von der verklärenden Wirklichkeitsbetrachtung zur radikalen Milieustudie: Der Bürgerliche Realismus fokussiert das Bürgertum mit Humor und Distanz, während der Naturalismus im Zeichen der Industrialisierung soziale Missstände schonungslos aufdeckt.",
    "keyPoints": [
      "Bürgerlicher / Poetischer Realismus (1848–1890): Detailgetreue Schilderung des bürgerlichen Alltags ohne radikales Elend",
      "Hauptvertreter des Realismus: Theodor Fontane (Effi Briest), Theodor Storm (Schimmelreiter), Gottfried Keller (Kleider machen Leute)",
      "Naturalismus (1880–1900): Radikalisierung des Realismus unter dem Einfluss von Naturwissenschaft, Evolutionstheorie und Marxismus",
      "Arno Holz' Kunstformel: 'Kunst = Natur - x' (mit dem Ziel, x gegen null gehen zu lassen, also Natur fotografisch abzubilden)",
      "Themen des Naturalismus: Proletariat, Alkoholismus, Großstadtelend, soziale Frage und Determiniertheit durch Erbgut und Milieu",
      "Sekundärstile der Jahrhundertwende: Fin de Siècle, Impressionismus, Jugendstil und Symbolismus"
    ],
    "exercises": [
      {
        "id": "4644",
        "title": "Literaturepoche Realismus",
        "folder": "literaturepoche-realismus-4644"
      },
      {
        "id": "4645",
        "title": "Literaturepoche Naturalismus",
        "folder": "literaturepoche-naturalismus-2-4645"
      },
      {
        "id": "2377",
        "title": "Literaturepoche Naturalismus - Vertiefung",
        "folder": "literaturepoche-naturalismus-2377"
      },
      {
        "id": "2378",
        "title": "Literaturepoche Fin de Siècle",
        "folder": "literaturepoche-fin-de-siecle-2378"
      },
      {
        "id": "2379",
        "title": "Literaturepoche Impressionismus",
        "folder": "literaturepoche-impressionismus-2379"
      },
      {
        "id": "2380",
        "title": "Literaturepoche Jugendstil",
        "folder": "literaturepoche-jugendstil-2380"
      },
      {
        "id": "2381",
        "title": "Literaturepoche Symbolismus",
        "folder": "literaturepoche-symbolismus-2381"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Realismus%20Naturalismus%20Literatur&t=284"
  },
  "moderne-und-exilliteratur": {
    "slug": "moderne-und-exilliteratur",
    "title": "Klassische Moderne, Expressionismus & Exilliteratur",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Großstadtlyrik, Formzertrümmerung, Neue Sachlichkeit, Bücherverbrennung 1933 und Exil.",
    "longDesc": "Literatur im Zeitalter der Weltkriege und Diktaturen: Von der expressiven Weltuntergangsstimmung vor 1914 über die nüchterne Reportageliteratur der Weimarer Republik bis zur Flucht deutschsprachiger Schriftsteller vor den Nationalsozialisten.",
    "keyPoints": [
      "Frühe Moderne (1890–1920): Psychoanalyse (Freud), Sprachskepsis (Hofmannsthals Chandos-Brief) und Subjektivität",
      "Expressionismus (1905–1925): Schrei nach Erneuerung, Großstadtangst, Formzertrümmerung, Reihungsstil und Pathos",
      "Neue Sachlichkeit (1918–1933): Nüchterne Beobachtung, Reportagestil, Gebrauchslyrik (Kästner) und Episches Theater (Brecht)",
      "Bücherverbrennung 1933: Zerschlagung des kulturellen Lebens durch das NS-Regime und Verfemung demokratischer Autoren",
      "Exilliteratur (1933–1945): Schreiben in Prag, Paris, Zürich, Moskau und den USA (Thomas Mann, Bertolt Brecht, Stefan Zweig, Anna Seghers)",
      "Innere Emigration & Untergrund: Schriftsteller, die im NS-Staat blieben und in getarnter Form Widerstand leisteten"
    ],
    "exercises": [
      {
        "id": "4646",
        "title": "Literaturepoche Moderne",
        "folder": "literaturepoche-moderne-4646"
      },
      {
        "id": "4647",
        "title": "Literaturepoche Expressionismus",
        "folder": "literaturepoche-expressionismus-4647"
      },
      {
        "id": "4648",
        "title": "Literaturepoche Neue Sachlichkeit",
        "folder": "literaturepoche-neue-sachlichkeit-2-4648"
      },
      {
        "id": "2389",
        "title": "Literaturepoche Neue Sachlichkeit - Vertiefung",
        "folder": "literaturepoche-neue-sachlichkeit-2389"
      },
      {
        "id": "2386",
        "title": "Literaturepoche Exilliteratur",
        "folder": "literaturepoche-exilliteratur-2386"
      },
      {
        "id": "schreiben-im-untergrund-literatur-gegen-die-nazis",
        "title": "Schreiben im Untergrund – Literatur gegen die Nazis",
        "folder": "schreiben-im-untergrund-literatur-gegen-die-nazis"
      },
      {
        "id": "4597",
        "title": "Anna Seghers",
        "folder": "anna-seghers-4597"
      },
      {
        "id": "3404",
        "title": "Anna Seghers – Das siebte Kreuz",
        "folder": "anna-seghers-das-siebte-kreuz-3404"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Expressionismus%20Exilliteratur%20Moderne&t=284"
  },
  "nachkriegsliteratur-und-ddr": {
    "slug": "nachkriegsliteratur-und-ddr",
    "title": "Nachkriegsliteratur, DDR & Gegenwart",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Kahlschlagliteratur, Gruppe 47, sozialistischer Realismus, Postmoderne und Berliner Republik.",
    "longDesc": "Neuanfang und Spaltung der Literatur nach 1945: Von der Trümmerliteratur über die Zensur und Wandlungen in der DDR-Literatur bis zur Wiedervereinigung und der vielstimmigen deutschsprachigen Gegenwartsliteratur.",
    "keyPoints": [
      "Kahlschlag- & Trümmerliteratur (ab 1945): Radikaler Neuanfang mit klarer, unprätentiöser Sprache (Borchert, Böll, Eich)",
      "Gruppe 47: Literarisches Forum der BRD zur Förderung junger Nachkriegsautoren (Grass, Ingeborg Bachmann, Celan)",
      "DDR-Literatur: Bitterfelder Weg, Zensur, Sozialistischer Realismus und Regimekritik (Christa Wolf, Heiner Müller, Volker Braun)",
      "Neue Subjektivität (ab 1970): Abkehr von politischer Agitation hin zur Erkundung persönlicher Identität und Gefühle",
      "Postmoderne & Popliteratur: Stilpluralismus, Intertextualität, Ironie und Aufhebung der Grenze zwischen Hoch- und Trivialkultur",
      "Berliner Republik & Gegenwart: Erinnerungskultur, Migrationsliteratur, interkulturelle Identitäten und Schweizer Autoren"
    ],
    "exercises": [
      {
        "id": "4649",
        "title": "Literaturepoche Nachkriegsliteratur",
        "folder": "literaturepoche-nachkriegsliteratur-2-4649"
      },
      {
        "id": "2387",
        "title": "Literaturepoche Nachkriegsliteratur - Vertiefung",
        "folder": "literaturepoche-nachkriegsliteratur-2387"
      },
      {
        "id": "truemmerliteratur-schreiben-nach-dem-zweiten-weltkrieg",
        "title": "Trümmerliteratur – Schreiben nach dem Zweiten Weltkrieg",
        "folder": "truemmerliteratur-schreiben-nach-dem-zweiten-weltkrieg"
      },
      {
        "id": "2388",
        "title": "Literatur in der DDR",
        "folder": "literatur-in-der-ddr-2388"
      },
      {
        "id": "christa-wolf-und-das-leben-in-der-ddr",
        "title": "Christa Wolf und das Leben in der DDR",
        "folder": "christa-wolf-und-das-leben-in-der-ddr"
      },
      {
        "id": "2390",
        "title": "Literaturepoche Neue Subjektivität",
        "folder": "literaturepoche-neue-subjektivitat-2390"
      },
      {
        "id": "4650",
        "title": "Literaturepoche Postmoderne",
        "folder": "literaturepoche-postmoderne-2-4650"
      },
      {
        "id": "2391",
        "title": "Literaturepoche Postmoderne - Vertiefung",
        "folder": "literaturepoche-postmoderne-2391"
      },
      {
        "id": "4651",
        "title": "Literaturepoche Berliner Republik",
        "folder": "literaturepoche-berliner-republik-4651"
      },
      {
        "id": "6392",
        "title": "Schweizer Literatur",
        "folder": "schweizer-literatur-6392"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Nachkriegsliteratur%20DDR%20Literatur%20Gegenwart&t=284"
  },
  "lessing-nathan-und-emilia": {
    "slug": "lessing-nathan-und-emilia",
    "title": "Lessing: Nathan der Weise & Emilia Galotti",
    "category": "Dramen & Meisterwerke der Klassik",
    "shortDesc": "Ringparabel, Toleranz, Aufklärung, bürgerliches Trauerspiel und Tugendterror im Absolutismus.",
    "longDesc": "Gotthold Ephraim Lessings epochemachende Dramen: Erkunde die Ringparabel in 'Nathan der Weise' als universellen Aufruf zu Humanität und religiöser Toleranz sowie den tragischen Konflikt zwischen adliger Willkür und bürgerlicher Ehre in 'Emilia Galotti'.",
    "keyPoints": [
      "Nathan der Weise (1779): Ideendrama der Aufklärung im Jerusalem zur Zeit des Dritten Kreuzzugs",
      "Die Ringparabel: Die drei monotheistischen Weltreligionen (Judentum, Christentum, Islam) als gleichwertige Erben wahrer Liebe",
      "Toleranzkonzept: Religiöse Wahrheit beweist sich nicht durch Dogmen, sondern durch uneigennütziges humanes Handeln",
      "Emilia Galotti (1772): Das bürgerliche Trauerspiel als scharfe Kritik an absolutistischer Herrschaftswillkür des Prinzen",
      "Tragischer Konflikt: Tod Emilias durch die Hand des Vaters Odoardo zur Bewahrung ihrer bürgerlich-moralischen Tugend",
      "Rezeptionsgeschichte: Historischer Kontext, sprachliche Meisterschaft im Blankvers und Relevanz für heutige Wertediskussionen"
    ],
    "exercises": [
      {
        "id": "4540",
        "title": "Gotthold Ephraim Lessing - Nathan der Weise",
        "folder": "gotthold-ephraim-lessing-nathan-der-weise-2-4540"
      },
      {
        "id": "6266",
        "title": "Nathan der Weise - Bezug zur Gegenwart",
        "folder": "nathan-der-weise-von-gotthold-ephraim-lessing-bezug-zur-gegenwart-6266"
      },
      {
        "id": "6267",
        "title": "Nathan der Weise - historischer Kontext",
        "folder": "nathan-der-weise-von-gotthold-ephraim-lessing-historischer-kontext-6267"
      },
      {
        "id": "6268",
        "title": "Nathan der Weise - literarische Bedeutung",
        "folder": "nathan-der-weise-von-gotthold-ephraim-lessing-literarische-bedeutung-6268"
      },
      {
        "id": "4533",
        "title": "G.E. Lessing - Emilia Galotti",
        "folder": "g-e-lessing-emilia-galotti-3-4533"
      },
      {
        "id": "6202",
        "title": "Emilia Galotti - Bezug zur Gegenwart",
        "folder": "emilia-galotti-von-g-e-lessing-bezug-zur-gegenwart-6202"
      },
      {
        "id": "6203",
        "title": "Emilia Galotti - historischer Kontext",
        "folder": "emilia-galotti-von-g-e-lessing-historischer-kontext-6203"
      },
      {
        "id": "6204",
        "title": "Emilia Galotti - literarische Bedeutung",
        "folder": "emilia-galotti-von-g-e-lessing-literarische-bedeutung-6204"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Lessing%20Nathan%20der%20Weise%20Emilia%20Galotti&t=284"
  },
  "goethe-faust-und-dramen": {
    "slug": "goethe-faust-und-dramen",
    "title": "Goethe: Faust & klassische Dramen",
    "category": "Dramen & Meisterwerke der Klassik",
    "shortDesc": "Faust I & II, Gelehrten- und Gretchentragödie, Iphigenie auf Tauris, Torquato Tasso und Egmont.",
    "longDesc": "Johann Wolfgang von Goethes dramatische Hauptwerke: Der unstillbare Erkenntnisdrang von Heinrich Faust, die Verführung durch Mephisto, die reine Humanität der Iphigenie und der Künstlerkonflikt in Torquato Tasso.",
    "keyPoints": [
      "Faust I (1808): Prolog im Himmel (Wette zwischen Gott und Mephisto) und die universelle Tragödie des modernen Menschen",
      "Gelehrtentragödie: Verzweiflung an begrenzter menschlicher Erkenntnis ('Da steh ich nun, ich armer Tor') und der Teufelspakt",
      "Gretchentragödie: Die Verführung der unschuldigen Margarete, gesellschaftliche Verurteilung, Kindsmord und Erlösung ('Ist gerettet!')",
      "Faust II (1832): Welttheater durch antike Mythologie, Kaiserhof, Helena-Episode und Fausts Vision tätiger Arbeit am Deich",
      "Iphigenie auf Tauris (1787): Reine Menschlichkeit überwindet den antiken Fluch des Tantalidengeschlechts durch Wahrhaftigkeit",
      "Klassische Dramen: Egmont als Freiheitskämpfer und Torquato Tasso über die Zerrissenheit zwischen Kunst und Politik"
    ],
    "exercises": [
      {
        "id": "4555",
        "title": "J.W. von Goethe - Faust I",
        "folder": "j-w-von-goethe-faust-i-3-4555"
      },
      {
        "id": "6209",
        "title": "Faust I - Bezug zur Gegenwart",
        "folder": "faust-i-von-j-w-von-goethe-bezug-zur-gegenwart-6209"
      },
      {
        "id": "6210",
        "title": "Faust I - historischer Kontext",
        "folder": "faust-i-von-j-w-von-goethe-historischer-kontext-6210"
      },
      {
        "id": "6211",
        "title": "Faust I - literarische Bedeutung",
        "folder": "faust-i-von-j-w-von-goethe-literarische-bedeutung-6211"
      },
      {
        "id": "6276",
        "title": "Faust II",
        "folder": "faust-ii-von-j-w-von-goethe-2-6276"
      },
      {
        "id": "4553",
        "title": "J.W. Goethe - Iphigenie auf Tauris",
        "folder": "j-w-goethe-iphigenie-auf-tauris-3-4553"
      },
      {
        "id": "6235",
        "title": "Iphigenie auf Tauris - Bezug zur Gegenwart",
        "folder": "iphigenie-auf-tauris-von-j-w-goethe-bezug-zur-gegenwart-6235"
      },
      {
        "id": "6236",
        "title": "Iphigenie auf Tauris - historischer Kontext",
        "folder": "iphigenie-auf-tauris-von-j-w-goethe-historischer-kontext-6236"
      },
      {
        "id": "6237",
        "title": "Iphigenie auf Tauris - literarische Bedeutung",
        "folder": "iphigenie-auf-tauris-von-j-w-goethe-literarische-bedeutung-6237"
      },
      {
        "id": "4554",
        "title": "J.W. Goethe - Torquato Tasso",
        "folder": "j-w-goethe-torquato-tasso-2-4554"
      },
      {
        "id": "4557",
        "title": "Johann Wolfgang Goethe - Egmont",
        "folder": "johann-wolfgang-goethe-egmont-2-4557"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Goethe%20Faust%20Iphigenie%20Dramen&t=284"
  },
  "schiller-die-grossen-dramen": {
    "slug": "schiller-die-grossen-dramen",
    "title": "Schiller: Die großen Dramen",
    "category": "Dramen & Meisterwerke der Klassik",
    "shortDesc": "Die Räuber, Kabale und Liebe, Maria Stuart, Wilhelm Tell, Don Karlos und Wallenstein.",
    "longDesc": "Friedrich Schillers dramatische Monumentalwerke: Vom rebellischen Freiheitskampf der Räuber über das bürgerliche Trauerspiel 'Kabale und Liebe' bis hin zu den meisterhaften Geschichtsdramen der Weimarer Klassik.",
    "keyPoints": [
      "Die Räuber (1781): Sturm-und-Drang-Rebellion – Karl Moor kämpft gegen heuchlerische Gesellschaft, Franz Moor intrgiert skrupellos",
      "Kabale und Liebe (1784): Bürgerliche Tragödie über die verbotene Liebe zwischen Ferdinand von Walter und der Musikertochter Luise",
      "Don Karlos (1787): Der Übergang zur Klassik – Marquis von Posa als Vorkämpfer für Gedankenfreiheit ('Geben Sie Gedankenfreiheit!')",
      "Maria Stuart (1800): Psychologisches Duell zweier Königinnen (Maria Stuart vs. Elisabeth I.) über Macht, Würde und innere Freiheit",
      "Wallenstein-Trilogie (1799): Feldherr Wallenstein im Dreißigjährigen Krieg zwischen Loyalität zum Kaiser und eigenem Machtanspruch",
      "Wilhelm Tell (1804): Schweizer Freiheitskampf gegen habsburgische Tyrannei, Apfelschuss und Rütlischwur"
    ],
    "exercises": [
      {
        "id": "4527",
        "title": "Friedrich Schiller - Die Räuber",
        "folder": "friedrich-schiller-die-rauber-3-4527"
      },
      {
        "id": "6199",
        "title": "Die Räuber - Bezug zur Gegenwart",
        "folder": "die-rauber-von-friedrich-schiller-bezug-zur-gegenwart-6199"
      },
      {
        "id": "6200",
        "title": "Die Räuber - historischer Kontext",
        "folder": "die-rauber-von-friedrich-schiller-historischer-kontext-6200"
      },
      {
        "id": "6201",
        "title": "Die Räuber - literarische Bedeutung",
        "folder": "die-rauber-von-friedrich-schiller-literarische-bedeutung-6201"
      },
      {
        "id": "4530",
        "title": "Friedrich Schiller - Maria Stuart",
        "folder": "friedrich-schiller-maria-stuart-3-4530"
      },
      {
        "id": "6252",
        "title": "Maria Stuart - Bezug zur Gegenwart",
        "folder": "maria-stuart-von-friedrich-schiller-bezug-zur-gegenwart-6252"
      },
      {
        "id": "6253",
        "title": "Maria Stuart - historischer Kontext",
        "folder": "maria-stuart-von-friedrich-schiller-historischer-kontext-6253"
      },
      {
        "id": "6254",
        "title": "Maria Stuart - literarische Bedeutung",
        "folder": "maria-stuart-von-friedrich-schiller-literarische-bedeutung-6254"
      },
      {
        "id": "4529",
        "title": "Friedrich Schiller - Kabale und Liebe",
        "folder": "friedrich-schiller-kabale-und-liebe-4-4529"
      },
      {
        "id": "4532",
        "title": "Friedrich Schiller - Wilhelm Tell",
        "folder": "friedrich-schiller-wilhelm-tell-3-4532"
      },
      {
        "id": "4528",
        "title": "Friedrich Schiller - Don Karlos",
        "folder": "friedrich-schiller-don-karlos-2-4528"
      },
      {
        "id": "4531",
        "title": "Friedrich Schiller - Wallenstein",
        "folder": "friedrich-schiller-wallenstein-2-4531"
      },
      {
        "id": "6196",
        "title": "Die Jungfrau von Orleans - historischer Kontext",
        "folder": "die-jungfrau-von-orleans-von-friedrich-schiller-historischer-kontext-6196"
      },
      {
        "id": "6195",
        "title": "Die Jungfrau von Orleans - Bezug zur Gegenwart",
        "folder": "die-jungfrau-von-orleans-von-friedrich-schiller-bezug-zur-gegenwart-6195"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Schiller%20Dramen%20Raeuber%20Maria%20Stuart&t=284"
  },
  "goethe-romane-und-erzaehlungen": {
    "slug": "goethe-romane-und-erzaehlungen",
    "title": "Goethe: Romane, Briefe & Novellen",
    "category": "Romane, Novellen & Erzählungen",
    "shortDesc": "Die Leiden des jungen Werther, Die Wahlverwandtschaften, Briefromanform und Goethes Novellenbegriff.",
    "longDesc": "Johann Wolfgang von Goethes epische Meisterwerke: Der Welterfolg des jungen Werther, der eine europäische Leserevolution auslöste, die psychologische Naturgesetzlichkeit der Wahlverwandtschaften und die Kunst der Novelle.",
    "keyPoints": [
      "Die Leiden des jungen Werther (1774): Sensationserfolg des Sturm und Drang in Form eines empfindsamen Briefromans",
      "Werther-Fieber & Werther-Effekt: Identifikation einer ganzen Generation junger Menschen mit Werthers unglücklicher Liebe zu Lotte",
      "Natur und Gefühl: Natur als Spiegel der menschlichen Seele – vom Frühlingsrausch bis zur herbstlichen Erstarrung",
      "Die Wahlverwandtschaften (1809): Meisterroman über die Anziehungskraft menschlicher Charaktere nach Analogie chemischer Reaktionen",
      "Novellendefinition nach Goethe: 'Eine sich ereignete, unerhörte Begebenheit' mit Dingsymbol und Wendepunkt",
      "Antike Bezüge: Sophokles' Antigone und der unlösbare Konflikt zwischen staatlichem Gesetz und familiärem Gewissen"
    ],
    "exercises": [
      {
        "id": "4551",
        "title": "J.W. Goethe - Die Leiden des jungen Werther",
        "folder": "j-w-goethe-die-leiden-des-jungen-werther-3-4551"
      },
      {
        "id": "4552",
        "title": "J.W. Goethe – Die Wahlverwandtschaften",
        "folder": "j-w-goethe-die-wahlverwandtschaften-2-4552"
      },
      {
        "id": "antigone-wenn-gesetz-gegen-gewissen-steht",
        "title": "Antigone – Wenn Gesetz gegen Gewissen steht",
        "folder": "antigone-wenn-gesetz-gegen-gewissen-steht"
      },
      {
        "id": "novellen-die-besondere-gattung-einfach-erklaert",
        "title": "Novellen – Die besondere Gattung einfach erklärt",
        "folder": "novellen-die-besondere-gattung-einfach-erklaert"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Goethe%20Werther%20Wahlverwandtschaften%20Novelle&t=284"
  },
  "romantik-und-novellenkunst": {
    "slug": "romantik-und-novellenkunst",
    "title": "Romantik & Novellenkunst: Hoffmann & Kleist",
    "category": "Romane, Novellen & Erzählungen",
    "shortDesc": "Der Sandmann, Die Elixiere des Teufels, Der zerbrochne Krug, Michael Kohlhaas und Marquise von O...",
    "longDesc": "Höhepunkte romantischer Erzählkunst und Kleist'scher Novellistik: E.T.A. Hoffmanns faszinierende Erkundung von Wahn, Automatenmenschen und dem Unheimlichen, gepaart mit Heinrich von Kleists meisterhafter Krisen- und Justizprosa.",
    "keyPoints": [
      "E.T.A. Hoffmann – 'Der Sandmann' (1816): Nathanaels Trauma, Angst vor dem Augenverlust und die fatale Liebe zur Puppe Olimpia",
      "Technikangst & Psychologie: Sigmund Freuds Begriff des 'Unheimlichen' am Beispiel von Coppelius und Coppola",
      "Hoffmann – 'Die Elixiere des Teufels': Das Doppelgängermotiv des Mönchs Medardus zwischen Frömmigkeit und Dämonie",
      "Heinrich von Kleist – 'Der zerbrochne Krug' (1808): Meisterhaftes Lustspiel um Dorfrichter Adam, der über seine eigene Tat urteilen muss",
      "Kleist – 'Marquise von O...' (1808): Novelle über eine rätselhafte Schwangerschaft, Moral, Schande und Vergebung",
      "Kleist – 'Das Käthchen von Heilbronn' & 'Prinz Friedrich von Homburg': Das Somnambulismus-Motiv und der Konflikt zwischen Pflicht und Gefühl"
    ],
    "exercises": [
      {
        "id": "4520",
        "title": "E.T.A. Hoffmann - Der Sandmann",
        "folder": "e-t-a-hoffmann-der-sandmann-3-4520"
      },
      {
        "id": "der-sandmann-und-die-angst-vor-der-technik",
        "title": "Der Sandmann und die Angst vor der Technik",
        "folder": "der-sandmann-und-die-angst-vor-der-technik"
      },
      {
        "id": "4519",
        "title": "E. T. A. Hoffmann - Die Elixiere des Teufels",
        "folder": "e-t-a-hoffmann-die-elixiere-des-teufels-3-4519"
      },
      {
        "id": "4546",
        "title": "Heinrich von Kleist - Der zerbrochne Krug",
        "folder": "heinrich-von-kleist-der-zerbrochne-krug-2-4546"
      },
      {
        "id": "4547",
        "title": "Heinrich von Kleist - Marquise von O...",
        "folder": "heinrich-von-kleist-marquise-von-o-3-4547"
      },
      {
        "id": "4545",
        "title": "Heinrich von Kleist - Das Käthchen von Heilbronn",
        "folder": "heinrich-von-kleist-das-kathchen-von-heilbronn-2-4545"
      },
      {
        "id": "4548",
        "title": "Heinrich von Kleist - Prinz Friedrich von Homburg",
        "folder": "heinrich-von-kleist-prinz-friedrich-von-homburg-2-4548"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Hoffmann%20Sandmann%20Kleist%20Novellen&t=284"
  },
  "realismus-fontane-und-keller": {
    "slug": "realismus-fontane-und-keller",
    "title": "Realismus: Fontane, Keller & Storm",
    "category": "Romane, Novellen & Erzählungen",
    "shortDesc": "Effi Briest, Frau Jenny Treibel, Kleider machen Leute, Der grüne Heinrich und Der Schimmelreiter.",
    "longDesc": "Meisterwerke des Bürgerlichen Realismus: Theodor Fontanes Gesellschaftsromane über preußische Standeskonventionen, Gottfried Kellers Novellenzyklus über Schein und Sein sowie Theodor Storms packende Novelle vom Deichgrafen Hauke Haien.",
    "keyPoints": [
      "Theodor Fontane – 'Effi Briest' (1895): Scheitern einer jungen Frau an den starren Ehren- und Moralgesetzen des preußischen Adels",
      "Fontanes Stil: Lakonischer Ton, feinsinniger Humor, 'Plauderton', Symbolik (Chinesenspuk, Schaukel) und Leitmotivik",
      "Fontane – 'Frau Jenny Treibel': Humorvolle Satire auf großbürgerliche Heuchelei, Geldgier und falsche Sentimentalität",
      "Gottfried Keller – 'Kleider machen Leute': Schneidergeselle Wenzel Strapinski wird durch edle Kleidung für einen polnischen Grafen gehalten",
      "Gottfried Keller – 'Der grüne Heinrich': Monumentaler Bildungsroman über die Reifung eines Künstlers",
      "Theodor Storm – 'Der Schimmelreiter' (1888): Schimmelreiter Hauke Haien als tragischer Aufklärer im Kampf gegen Natur und Aberglauben"
    ],
    "exercises": [
      {
        "id": "4567",
        "title": "Theodor Fontane - Effi Briest",
        "folder": "theodor-fontane-effi-briest-3-4567"
      },
      {
        "id": "theodor-fontane-und-die-rolle-der-ehre",
        "title": "Theodor Fontane und die Rolle der Ehre",
        "folder": "theodor-fontane-und-die-rolle-der-ehre"
      },
      {
        "id": "fontane-und-der-klatsch-im-alten-berlin",
        "title": "Fontane und der Klatsch im alten Berlin",
        "folder": "fontane-und-der-klatsch-im-alten-berlin"
      },
      {
        "id": "4568",
        "title": "Theodor Fontane – Frau Jenny Treibel",
        "folder": "theodor-fontane-frau-jenny-treibel-2-4568"
      },
      {
        "id": "theodor-storm-und-der-schimmelreiter-als-urgewalt",
        "title": "Theodor Storm und der Schimmelreiter als Urgewalt",
        "folder": "theodor-storm-und-der-schimmelreiter-als-urgewalt"
      },
      {
        "id": "4539",
        "title": "Gotfried Keller – Kleider machen Leute",
        "folder": "gotfried-keller-kleider-machen-leute-2-4539"
      },
      {
        "id": "4538",
        "title": "Gotfried Keller – Der grüne Heinrich",
        "folder": "gotfried-keller-der-grune-heinrich-2-4538"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Fontane%20Effi%20Briest%20Keller%20Realismus&t=284"
  },
  "sozialkritisches-drama-und-vormaerz": {
    "slug": "sozialkritisches-drama-und-vormaerz",
    "title": "Sozialkritisches Drama: Büchner, Hauptmann & Wedekind",
    "category": "Romane, Novellen & Erzählungen",
    "shortDesc": "Woyzeck, Dantons Tod, Die Ratten, Vor Sonnenuntergang und Frühlings Erwachen.",
    "longDesc": "Dramatischer Protest gegen Unterdrückung, Standesdünkel und Heuchelei: Von Georg Büchners genialem Dramenfragment 'Woyzeck' über Gerhart Hauptmanns naturalistische Milieustudien bis zu Frank Wedekinds Tabubruch der bürgerlichen Sexualmoral.",
    "keyPoints": [
      "Georg Büchner – 'Woyzeck' (1836): Der einfache Soldat als Spielball gesellschaftlicher Ausbeutung (Hauptmann, Doktor) bis zum Mord an Marie",
      "Büchners Sprache: Fragmentarische Szenenfolge, offene Dramenform, elliptische Sprache und Volksliedmotive",
      "Büchner – 'Dantons Tod': Die Zerreißprobe der Französischen Revolution zwischen Jakobinerterror (Robespierre) und Lebensüberdruss (Danton)",
      "Gerhart Hauptmann – 'Die Ratten' (1911): Berliner Tragikomödie des Naturalismus über Kindesunterschiebung und Klassengegensätze",
      "Frank Wedekind – 'Frühlings Erwachen' (1891): Kindertragödie über Pubertät, Sexualität, Prüderie und autoritäre Schulunterdrückung",
      "Friedrich Hebbel – 'Maria Magdalene' & Grabbe: Tragik der bürgerlichen Enge und bissige literarische Satire"
    ],
    "exercises": [
      {
        "id": "4535",
        "title": "Georg Büchner - Woyzeck",
        "folder": "georg-buchner-woyzeck-3-4535"
      },
      {
        "id": "6274",
        "title": "Woyzeck - historischer Kontext",
        "folder": "woyzeck-von-georg-buchner-historischer-kontext-6274"
      },
      {
        "id": "6275",
        "title": "Woyzeck - literarische Bedeutung",
        "folder": "woyzeck-von-georg-buchner-literarische-bedeutung-6275"
      },
      {
        "id": "6278",
        "title": "Woyzeck - Bezug zur Gegenwart",
        "folder": "woyzeck-von-georg-buchner-bezug-zur-gegenwart-6278"
      },
      {
        "id": "4534",
        "title": "Georg Büchner - Dantons Tod",
        "folder": "georg-buchner-dantons-tod-2-4534"
      },
      {
        "id": "4536",
        "title": "Gerhart Hauptmann - Die Ratten",
        "folder": "gerhart-hauptmann-die-ratten-2-4536"
      },
      {
        "id": "4537",
        "title": "Gerhart Hauptmann - Vor Sonnenuntergang",
        "folder": "gerhart-hauptmann-vor-sonnenuntergang-2-4537"
      },
      {
        "id": "4522",
        "title": "Frank Wedekind - Frühlings Erwachen",
        "folder": "frank-wedekind-fruhlings-erwachen-3-4522"
      },
      {
        "id": "4526",
        "title": "Friedrich Hebbel - Maria Magdalene",
        "folder": "friedrich-hebbel-maria-magdalene-2-4526"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Buechner%20Woyzeck%20Wedekind%20Hauptmann&t=284"
  },
  "klassische-moderne-kafka-und-mann": {
    "slug": "klassische-moderne-kafka-und-mann",
    "title": "Klassische Moderne: Kafka, Mann & Döblin",
    "category": "Romane, Novellen & Erzählungen",
    "shortDesc": "Der Prozess, In der Strafkolonie, Buddenbrooks, Der Zauberberg, Mario und der Zauberer und Berlin Alexanderplatz.",
    "longDesc": "Die Jahrhundertautoren des 20. Jahrhunderts: Franz Kafkas existenzielle Labyrinthe anonymer Schuld und Bürokratie, Thomas Manns monumentale Gesellschaftspanoramen und Faschismuskritik sowie Alfred Döblins rasanter Großstadtroman.",
    "keyPoints": [
      "Franz Kafka – 'Der Prozess' (1925): Josef K. wird 'ohne dass er etwas Böses getan hätte, eines Morgens verhaftet' – Parabel moderner Entfremdung",
      "Kafka – 'In der Strafkolonie' (1919): Die Hinrichtungsmaschine als Metapher für bürokratischen Sadismus und archaische Justizsysteme",
      "Thomas Mann – 'Buddenbrooks' (1901): Vier Generationen einer Lübecker Kaufmannsfamilie zwischen bürgerlicher Pflicht und künstlerischem Verfall",
      "Thomas Mann – 'Der Zauberberg' (1924): Das Davoser Sanatorium als Mikrokosmos des geistigen Europas vor dem Ersten Weltkrieg",
      "Thomas Mann – 'Mario und der Zauberer' (1930): Der Magier Cipolla als düstere Parabel auf die Verführbarkeit der Massen durch den Faschismus",
      "Alfred Döblin – 'Berlin Alexanderplatz' (1929): Franz Biberkopfs Kampf im Moloch Berlin – Montage-Technik, Werbeslogans und innere Monologe",
      "Heinrich Mann – 'Professor Unrat' & Anna Seghers – 'Das siebte Kreuz': Satire auf den autoritären Untertanengeist und mutiger Antifaschismus"
    ],
    "exercises": [
      {
        "id": "4523",
        "title": "Franz Kafka - Der Prozess",
        "folder": "franz-kafka-der-prozess-3-4523"
      },
      {
        "id": "6230",
        "title": "In der Strafkolonie von Franz Kafka",
        "folder": "in-der-strafkolonie-von-franz-kafka-6230"
      },
      {
        "id": "6227",
        "title": "In der Strafkolonie - Bezug zur Gegenwart",
        "folder": "in-der-strafkolonie-von-franz-kafka-bezug-zur-gegenwart-6227"
      },
      {
        "id": "6228",
        "title": "In der Strafkolonie - historischer Kontext",
        "folder": "in-der-strafkolonie-von-franz-kafka-historischer-kontext-6228"
      },
      {
        "id": "6229",
        "title": "In der Strafkolonie - literarische Bedeutung",
        "folder": "in-der-strafkolonie-von-franz-kafka-literarische-bedeutung-6229"
      },
      {
        "id": "4571",
        "title": "Thomas Mann - Buddenbrooks",
        "folder": "thomas-mann-buddenbrooks-3-4571"
      },
      {
        "id": "thomas-mann-und-die-buddenbrooks-einfach-erklaert",
        "title": "Thomas Mann und die Buddenbrooks einfach erklärt",
        "folder": "thomas-mann-und-die-buddenbrooks-einfach-erklaert"
      },
      {
        "id": "4572",
        "title": "Thomas Mann - Der Zauberberg",
        "folder": "thomas-mann-der-zauberberg-2-4572"
      },
      {
        "id": "6258",
        "title": "Mario und der Zauberer von Thomas Mann",
        "folder": "mario-und-der-zauberer-von-thomas-mann-6258"
      },
      {
        "id": "4508",
        "title": "Alfred Döblin – Berlin Alexanderplatz",
        "folder": "alfred-doblin-berlin-alexanderplatz-2-4508"
      },
      {
        "id": "4544",
        "title": "Heinrich Mann - Professor Unrat",
        "folder": "heinrich-mann-professor-unrat-2-4544"
      },
      {
        "id": "4509",
        "title": "Anna Seghers – Das siebte Kreuz",
        "folder": "anna-seghers-das-siebte-kreuz-2-4509"
      },
      {
        "id": "anna-seghers-und-die-flucht-vor-den-nazis",
        "title": "Anna Seghers und die Flucht vor den Nazis",
        "folder": "anna-seghers-und-die-flucht-vor-den-nazis"
      },
      {
        "id": "4596",
        "title": "Alfred Döblin",
        "folder": "alfred-doblin-4596"
      },
      {
        "id": "3403",
        "title": "Alfred Döblin – Berlin Alexanderplatz",
        "folder": "alfred-doblin-berlin-alexanderplatz-3403"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kafka%20Prozess%20Thomas%20Mann%20Buddenbrooks&t=284"
  },
  "brecht-und-das-epische-theater": {
    "slug": "brecht-und-das-epische-theater",
    "title": "Bertolt Brecht & das epische Theater",
    "category": "Moderne Dramatik & Gegenwartsliteratur",
    "shortDesc": "Die Dreigroschenoper, Mutter Courage, Leben des Galilei, Verfremdungseffekt und dialektisches Theater.",
    "longDesc": "Die radikale Theaterrevolution Bertolt Brechts: Das epische Theater will die Zuschauer nicht emotional einlullen, sondern durch Verfremdungseffekte zum kritischen Nachdenken über gesellschaftliche Machtverhältnisse und moralische Verantwortung anregen.",
    "keyPoints": [
      "Episches Theater vs. Aristotelisches Drama: Keine Katharsis und Identifikation, sondern Distanz, Urteilsfähigkeit und Handlungsanstoß",
      "Der Verfremdungseffekt (V-Effekt): Songs, Spruchbänder, sichtbare Bühnentechnik und direkte Publikumsansprache",
      "Die Dreigroschenoper (1928): Satirische Demaskierung des bürgerlichen Kapitalismus durch die Welt der Bettler und Gangster (Mackie Messer)",
      "Mutter Courage und ihre Kinder (1939): Die Marketenderin Anna Fierling will am Dreißigjährigen Krieg verdienen und verliert all ihre Kinder",
      "Leben des Galilei (1943/1955): Der Physiker Galileo Galilei zwischen wissenschaftlicher Wahrheit und Widerruf vor der Inquisition",
      "Ethik der Wissenschaft: Verantwortung von Forschern angesichts von Atombombe und technologischem Fortschritt"
    ],
    "exercises": [
      {
        "id": "4513",
        "title": "Bertolt Brecht - Die Dreigroschenoper",
        "folder": "bertolt-brecht-die-dreigroschenoper-2-4513"
      },
      {
        "id": "4515",
        "title": "Bertolt Brecht - Mutter Courage und ihre Kinder",
        "folder": "bertolt-brecht-mutter-courage-und-ihre-kinder-2-4515"
      },
      {
        "id": "4514",
        "title": "Bertolt Brecht - Leben des Galilei",
        "folder": "bertolt-brecht-leben-des-galilei-2-4514"
      },
      {
        "id": "6245",
        "title": "Leben des Galilei - Bezug zur Gegenwart",
        "folder": "leben-des-galilei-von-bertolt-brecht-bezug-zur-gegenwart-6245"
      },
      {
        "id": "6246",
        "title": "Leben des Galilei - historischer Kontext",
        "folder": "leben-des-galilei-von-bertolt-brecht-historischer-kontext-6246"
      },
      {
        "id": "6247",
        "title": "Leben des Galilei - literarische Bedeutung",
        "folder": "leben-des-galilei-von-bertolt-brecht-literarische-bedeutung-6247"
      },
      {
        "id": "bertolt-brecht-und-sein-theater-zum-mitdenken",
        "title": "Bertolt Brecht und sein Theater zum Mitdenken",
        "folder": "bertolt-brecht-und-sein-theater-zum-mitdenken"
      },
      {
        "id": "1215",
        "title": "Bertolt Brecht",
        "folder": "bertolt-brecht-1215"
      },
      {
        "id": "3409",
        "title": "Bertolt Brecht - Leben des Galilei",
        "folder": "bertolt-brecht-leben-des-galilei-3409"
      },
      {
        "id": "3410",
        "title": "Bertolt Brecht - Mutter Courage und ihre Kinder",
        "folder": "bertolt-brecht-mutter-courage-und-ihre-kinder-3410"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Brecht%20Episches%20Theater%20Galilei%20Mutter%20Courage&t=284"
  },
  "schweizer-dramatik-duerrenmatt-und-frisch": {
    "slug": "schweizer-dramatik-duerrenmatt-und-frisch",
    "title": "Dürrenmatt & Frisch: Die Physiker & Biedermann",
    "category": "Moderne Dramatik & Gegenwartsliteratur",
    "shortDesc": "Der Besuch der alten Dame, Die Physiker, Biedermann und die Brandstifter, Schuld, Macht und Verführbarkeit.",
    "longDesc": "Die großen Schweizer Dramatiker der Nachkriegszeit: Friedrich Dürrenmatts groteske Tragikomödien über die korrumpierende Macht des Geldes und die Weltgefahr durch Wissenschaft sowie Max Frischs zeitlose Parabel auf bürgerliche Feigheit vor dem Extremismus.",
    "keyPoints": [
      "Friedrich Dürrenmatt – 'Der Besuch der alten Dame' (1956): Die Milliardärin Claire Zachanassian kauft die Moral der Stadt Güllen",
      "Geld und Gerechtigkeit: Wie die Bürger von Güllen den Mord an Alfred Ill Schritt für Schritt kollektiv rechtfertigen",
      "Dürrenmatt – 'Die Physiker' (1962): Drei Physiker im Sanatorium – 'Was alle angeht, können nur alle lösen'",
      "Die schlimmstmögliche Wendung: Möbius' Erfindungen fallen trotz seines Rückzugs in die Hände der verrückten Ärztin Mathilde von Zahnd",
      "Max Frisch – 'Biedermann und die Brandstifter' (1958): Ein Lehrstück ohne Lehre über die Selbsttäuschung des Bürgertums gegenüber Brandstiftern",
      "Max Frisch – 'Montauk' (1975): Radikal autobiographische Erzählung über Erinnerung, Alter und Lebensentscheidungen"
    ],
    "exercises": [
      {
        "id": "4524",
        "title": "Friedrich Dürrenmatt - Der Besuch der alten Dame",
        "folder": "friedrich-durrenmatt-der-besuch-der-alten-dame-3-4524"
      },
      {
        "id": "der-besuch-der-alten-dame-und-die-gier-nach-geld",
        "title": "Der Besuch der alten Dame und die Gier nach Geld",
        "folder": "der-besuch-der-alten-dame-und-die-gier-nach-geld"
      },
      {
        "id": "4525",
        "title": "Friedrich Dürrenmatt - Die Physiker",
        "folder": "friedrich-durrenmatt-die-physiker-3-4525"
      },
      {
        "id": "4559",
        "title": "Max Frisch - Biedermann und die Brandstifter",
        "folder": "max-frisch-biedermann-und-die-brandstifter-2-4559"
      },
      {
        "id": "4560",
        "title": "Max Frisch - Montauk",
        "folder": "max-frisch-montauk-2-4560"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Duerrenmatt%20Physiker%20Besuch%20alten%20Dame%20Frisch%20Biedermann&t=284"
  },
  "deutsche-nachkriegs-und-gegenwartsliteratur": {
    "slug": "deutsche-nachkriegs-und-gegenwartsliteratur",
    "title": "Nachkriegs- & Gegenwartsliteratur: Grass & Koeppen",
    "category": "Moderne Dramatik & Gegenwartsliteratur",
    "shortDesc": "Die Blechtrommel, Tauben im Gras, Der Auftrag, Groß und klein sowie moderne deutsche Theatergeschichte.",
    "longDesc": "Deutsche Literatur im Spiegel von Schuld, Wiederaufbau und gesellschaftlicher Desillusionierung: Günter Grass' Trommler Oskar Matzerath, Wolfgang Koeppens multiperspektivischer München-Roman und Heiner Müllers revolutionäres postdramatisches Theater.",
    "keyPoints": [
      "Günter Grass – 'Die Blechtrommel' (1959): Der dreijährige Oskar verweigert das Wachstum und trommelt gegen die Verlogenheit der NS- und Nachkriegszeit",
      "Wolfgang Koeppen – 'Tauben im Gras' (1951): Ein Tag in München 1951 – Simultanroman über das Weiterleben alter Traumata im Wirtschaftswunder",
      "Heiner Müller – 'Der Auftrag' (1979): Drei Emissäre im kolonialen Jamaika – Scheitern revolutionärer Befreiungsutopien",
      "Botho Strauß – 'Groß und klein' (1978): Die Odyssee der Lotte durch isolierte Lebenswelten der modernen Großstadtgesellschaft",
      "Carl Sternheim – 'Der Snob' (1914): Scharfe Satire auf Karrierismus und bürgerliche Anpassung",
      "Peter Weiss – 'Marat/Sade' (1964): Psychodrama und Polittheater über die Grenzen individueller und kollektiver Befreiung"
    ],
    "exercises": [
      {
        "id": "4541",
        "title": "Günther Grass - Die Blechtrommel",
        "folder": "gunther-grass-die-blechtrommel-2-4541"
      },
      {
        "id": "4575",
        "title": "Wolfgang Koeppen - Tauben im Gras",
        "folder": "wolfgang-koeppen-tauben-im-gras-3-4575"
      },
      {
        "id": "4543",
        "title": "Heiner Müller - Der Auftrag",
        "folder": "heiner-muller-der-auftrag-2-4543"
      },
      {
        "id": "4516",
        "title": "Botho Strauß - Groß und klein",
        "folder": "botho-straues-groes-und-klein-2-4516"
      },
      {
        "id": "4517",
        "title": "Carl Sternheim - Der Snob",
        "folder": "carl-sternheim-der-snob-2-4517"
      },
      {
        "id": "4563",
        "title": "Peter Hacks - Ein Gespräch im Hause Stein",
        "folder": "peter-hacks-ein-gesprach-im-hause-stein-2-4563"
      },
      {
        "id": "4564",
        "title": "Peter Weiss - Die Verfolgung und Ermordung Jean Paul Marats",
        "folder": "peter-weiss-die-verfolgung-und-ermordung-jean-paul-marats-2-4564"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Blechtrommel%20Grass%20Koeppen%20Nachkriegsliteratur&t=284"
  },
  "die-heimsuchung": {
    "slug": "die-heimsuchung",
    "title": "Jenny Erpenbeck: Heimsuchung (Abitur-Schwerpunkt)",
    "category": "Moderne Dramatik & Gegenwartsliteratur",
    "shortDesc": "Epochenumbruch am märkischen See: Weimarer Republik, NS-Diktatur, DDR und Wiedervereinigung in 12 Lebensläufen.",
    "longDesc": "Ein Meilenstein der deutschen Gegenwartsliteratur und zentrales Abiturthema: Anhand eines märkischen Sommerhauses und seiner Bewohner erzählt Jenny Erpenbeck ein Jahrhundert deutscher Geschichte zwischen Enteignung, Vertreibung, Schuld und Vergänglichkeit.",
    "keyPoints": [
      "Konzeption & Raum: Ein Sommerhaus an einem Brandenburger See als Brennglas deutscher Geschichte des 20. Jahrhunderts",
      "Die 12 Lebensläufe: Vom jüdischen Tuchfabrikanten über den Architekten bis zur Schriftstellerin – Schicksale im Wandel der Diktaturen",
      "Die Figur des Gärtners: Zeitlose und stumme Konstante, die den Rhythmus der Natur pflegt, während die politischen Regime zerfallen",
      "Thematische Schwerpunkte: Verlust von Heimat, Enteignung (Arisierung im NS-Staat, Bodenreform in der DDR) und Verdrängung",
      "Stilistik: Rhythmisierte, leitmotivische Sprache mit lakonischer Distanz und poetischer Verdichtung",
      "Historischer Bogen: 1912 (Vorkriegszeit) ➔ 1945 (Kriegsende) ➔ 1952 (DDR-Aufbau) ➔ 1961 (Mauerbau) ➔ 2001 (Nachwendezeit)"
    ],
    "exercises": [
      {
        "id": "3098",
        "title": "Jenny Erpenbeck - Heimsuchung",
        "folder": "jenny-erpenbeck-heimsuchung-3098"
      },
      {
        "id": "3104",
        "title": "Der Roman Die Heimsuchung von Jenny Erpenbeck",
        "folder": "der-roman-die-heimsuchung-von-jenny-erpenbck-3104"
      },
      {
        "id": "3106",
        "title": "Die Heimsuchung - 1912 - Vorkriegszeit und Antisemitismus",
        "folder": "die-heimsuchung-1912-vorkriegszeit-des-ersten-weltkriegs-und-antisemitismus-3106"
      },
      {
        "id": "3107",
        "title": "Die Heimsuchung - 1945 - Kriegsende",
        "folder": "die-heimsuchung-1945-kriegsende-3107"
      },
      {
        "id": "3108",
        "title": "Die Heimsuchung - 1952 - Anfangsphase der DDR",
        "folder": "der-roman-die-heimsuchung-von-jenny-erpenbck-1952-anfangsphase-der-ddr-3108"
      },
      {
        "id": "3109",
        "title": "Die Heimsuchung - 1961-62 - Bau der Berliner Mauer",
        "folder": "die-heimsuchung-1961-62-bau-der-berliner-mauer-3109"
      },
      {
        "id": "3110",
        "title": "Die Heimsuchung - 2001 - Nachwendejahre und Erinnerungskultur",
        "folder": "die-heimsuchung-2001-nachwendejahre-erinnerungskultur-neues-jahrtausend-3110"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Jenny%20Erpenbeck%20Heimsuchung%20Abitur&t=284"
  },
  "wiener-moderne-und-schnitzler": {
    "slug": "wiener-moderne-und-schnitzler",
    "title": "Wiener Moderne & Alt-Wiener Theater",
    "category": "Österreichische Literatur & Wiener Moderne",
    "shortDesc": "Arthur Schnitzler, Hugo von Hofmannsthal, Johann Nestroy, Ferdinand Raimund und die Psychoanalyse der Fin-de-Siècle-Epoche.",
    "longDesc": "Das faszinierende geistige Wien um 1900: Zwischen morbider Todessehnsucht, Freud'scher Psychoanalyse, frivoler Scheinmoral und meisterhaftem Sprachwitz von Arthur Schnitzler, Hugo von Hofmannsthal und den Alt-Wiener Zauberpossen.",
    "keyPoints": [
      "Wiener Moderne: Blütezeit von Literatur, Malerei (Klimt, Schiele) und Psychologie (Sigmund Freud) im k.u.k. Wien",
      "Arthur Schnitzler – 'Reigen' (1897): Zehn Dialoge vor und nach dem Liebesakt als schonungslose Demaskierung von Standesheuchelei",
      "Schnitzler – 'Liebelei' & 'Professor Bernhardi': Tragik des 'süßen Mädels' und Antisemitismus in der Wiener Medizinergesellschaft",
      "Innerer Monolog: Schnitzlers Pionierleistung in 'Leutnant Gustl' und 'Fräulein Else'",
      "Hugo von Hofmannsthal – 'Der Schwierige' & 'Der Tor und der Tod': Melancholischer Adel, Sprachskepsis und Versöhnung",
      "Alt-Wiener Volkstheater: Johann Nestroy ('Der Talisman') und Ferdinand Raimund ('Der Alpenkönig und der Menschenfeind')"
    ],
    "exercises": [
      {
        "id": "4510",
        "title": "Arthur Schnitzler - Liebelei",
        "folder": "arthur-schnitzler-liebelei-2-4510"
      },
      {
        "id": "4511",
        "title": "Arthur Schnitzler - Professor Bernhardi",
        "folder": "arthur-schnitzler-professor-bernhardi-2-4511"
      },
      {
        "id": "4512",
        "title": "Arthur Schnitzler - Reigen",
        "folder": "arthur-schnitzler-reigen-2-4512"
      },
      {
        "id": "4549",
        "title": "Hugo von Hofmannsthal - Der Schwierige",
        "folder": "hugo-von-hofmannsthal-der-schwierige-2-4549"
      },
      {
        "id": "4550",
        "title": "Hugo von Hofmannsthal - Der Tor und der Tod",
        "folder": "hugo-von-hofmannsthal-der-tor-und-der-tod-2-4550"
      },
      {
        "id": "4521",
        "title": "Ferdinand Raimund - Der Alpenkönig und der Menschenfeind",
        "folder": "ferdinand-raimund-der-alpenkonig-und-der-menschenfeind-2-4521"
      },
      {
        "id": "4556",
        "title": "Johann Nestroy - Der Talisman",
        "folder": "johann-nestroy-der-talisman-2-4556"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Wiener%20Moderne%20Schnitzler%20Nestroy%20Hofmannsthal&t=284"
  },
  "oesterreichische-literatur-des-20-jahrhunderts": {
    "slug": "oesterreichische-literatur-des-20-jahrhunderts",
    "title": "Österreichische Literatur des 20. Jahrhunderts",
    "category": "Österreichische Literatur & Wiener Moderne",
    "shortDesc": "Joseph Roth, Ödön von Horváth, Robert Musil, Heimito von Doderer und Thomas Bernhard.",
    "longDesc": "Vom Untergang der Habsburgermonarchie bis zur radikalen Nachkriegskritik: Der Abgesang auf das alte Österreich in Joseph Roths 'Radetzkymarsch', Volksstück-Demaskierung bei Horváth und Thomas Bernhards virtuose Übertreibungskunst.",
    "keyPoints": [
      "Joseph Roth – 'Radetzkymarsch' (1932): Drei Generationen der Familie Trotta spiegeln den Zerfall der österreichisch-ungarischen Monarchie",
      "Ödön von Horváth – 'Geschichten aus dem Wiener Wald' (1931): Erneuerung des Volksstücks – Verlogenheit, Kleinbürgertum und Faschismuskeim",
      "Horváth – 'Kasimir und Karoline' (1932): Arbeitslosigkeit und das Auseinanderbrechen einer Liebe auf dem Münchner Oktoberfest",
      "Robert Musil – 'Die Verwirrungen des Zöglings Törleß' (1906): Sadistische Machtrituale und psychologische Grenzfälle in einem Militärinternat",
      "Heimito von Doderer – 'Die Strudlhofstiege' (1951): Meisterwerk des epischen Wiens der Zwischenkriegszeit",
      "Thomas Bernhard – 'Holzfällen' & 'Die Macht der Gewohnheit': Radikale Sprachrhythmen, Schimpftiraden und Abrechnung mit dem Kulturbetrieb"
    ],
    "exercises": [
      {
        "id": "4558",
        "title": "Joseph Roth - Radetzkymarsch",
        "folder": "joseph-roth-radetzkymarsch-2-4558"
      },
      {
        "id": "4561",
        "title": "Ödön von Horváth - Geschichten aus dem Wiener Wald",
        "folder": "don-von-horvath-geschichten-aus-dem-wiener-wald-2-4561"
      },
      {
        "id": "4562",
        "title": "Ödön von Horváth - Kasimir und Karoline",
        "folder": "don-von-horvath-kasimir-und-karoline-2-4562"
      },
      {
        "id": "4565",
        "title": "Robert Musil – Die Verwirrungen des Zöglings Törleß",
        "folder": "robert-musil-die-verwirrungen-des-zoglings-torlees-2-4565"
      },
      {
        "id": "4542",
        "title": "Heimito von Doderer – Die Strudlhofstiege",
        "folder": "heimito-von-doderer-die-strudlhofstiege-2-4542"
      },
      {
        "id": "4569",
        "title": "Thomas Bernhard - Die Macht der Gewohnheit",
        "folder": "thomas-bernhard-die-macht-der-gewohnheit-2-4569"
      },
      {
        "id": "4570",
        "title": "Thomas Bernhard - Holzfällen",
        "folder": "thomas-bernhard-holzfallen-2-4570"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Oesterreichische%20Literatur%20Roth%20Horvath%20Bernhard&t=284"
  },
  "robert-seethaler-der-trafikant": {
    "slug": "robert-seethaler-der-trafikant",
    "title": "Robert Seethaler: Der Trafikant (Abitur-Schwerpunkt)",
    "category": "Österreichische Literatur & Wiener Moderne",
    "shortDesc": "Adoleszenz, historische Zäsur 1938 in Wien, Sigmund Freud und Mut zur menschlichen Würde.",
    "longDesc": "Ein moderner Schulklassiker und Abitur-Schwerpunkt: Die Entwicklungsgeschichte des 17-jährigen Franz Huchel aus dem Salzkammergut, der 1937/38 in Wien in einer Trafik lernt, sich in die Varieté-Tänzerin Anezka verliebt und mit Sigmund Freud Freundschaft schließt, während der NS-Terror Einzug hält.",
    "keyPoints": [
      "Handlung & Setting: Wien 1937/38 – Anschluss Österreichs an das nationalsozialistische Deutsche Reich",
      "Figurenkonstellation: Franz Huchel, Trafikant Otto Trsnjek, Psychoanalytiker Sigmund Freud und Tänzerin Anezka",
      "Entwicklungsroman / Coming-of-Age: Reifung vom unbedarften Landjungen zum selbstbewusst und moralisch handelnden Menschen",
      "Die Rolle der Trafik: Ein Ort des Wissens, der Zeitungen und des freien Gedankenaustauschs im aufkeimenden Faschismus",
      "Motiv der Hose am Gestapo-Hauptquartier: Franz' stummer, mutiger Protest für den ermordeten Trafikanten Otto",
      "Literarische Einordnung: Historischer Kontext, Aktualitätsbezug und ethische Kernbotschaft zu Zivilcourage"
    ],
    "exercises": [
      {
        "id": "4566",
        "title": "Robert Seethaler - Der Trafikant",
        "folder": "robert-seethaler-der-trafikant-2-4566"
      },
      {
        "id": "6189",
        "title": "Der Trafikant - Bezug zur Gegenwart",
        "folder": "der-trafikant-von-robert-seethaler-bezug-zur-gegenwart-6189"
      },
      {
        "id": "6190",
        "title": "Der Trafikant - historischer Kontext",
        "folder": "der-trafikant-von-robert-seethaler-historischer-kontext-6190"
      },
      {
        "id": "6191",
        "title": "Der Trafikant - literarische Bedeutung",
        "folder": "der-trafikant-von-robert-seethaler-literarische-bedeutung-6191"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Robert%20Seethaler%20Der%20Trafikant%20Abitur&t=284"
  },
  "balladen-der-klassik-und-romantik": {
    "slug": "balladen-der-klassik-und-romantik",
    "title": "Berühmte Balladen der Klassik & Romantik",
    "category": "Lyrik, Gedichte & Balladen",
    "shortDesc": "Goethe, Schiller, Fontane und Droste-Hülshoff: Mehrgattungsform, Spannungsaufbau, Reime und Heldenmut.",
    "longDesc": "Die Königsklasse erzählender Lyrik: Goethes 'Zauberlehrling' und 'Erlkönig', Schillers 'Lied von der Glocke' und 'Handschuh', Fontanes packende Schiffs- und Eisenbahndramen sowie die unheimliche Moorlandschaft der Annette von Droste-Hülshoff.",
    "keyPoints": [
      "Ballade als 'Ur-Ei der Poesie' (Goethe): Verbindung von Epik (Erzählung), Lyrik (Strophe/Reim) und Dramatik (Dialoge)",
      "Goethe – 'Der Zauberlehrling' ('Die Geister, die ich rief') & 'Erlkönig': Bedrohliche Magie und Fieberwahn des Kindes",
      "Schiller – 'Das Lied von der Glocke' & 'Der Handschuh': Ordnung, Handwerk, Revolution und Ritterethos",
      "Theodor Fontane – 'John Maynard': Heldenmut und Selbstaufopferung des Steuermanns auf dem brennenden Eriesee",
      "Fontane – 'Die Brück' am Tay' & 'Herr von Ribbeck': Technikhybris beim Brückeneinsturz vs. selbstlose Freigiebigkeit mit Birnen",
      "Annette von Droste-Hülshoff – 'Der Knabe im Moor': Unheimliche Natur, Aberglaube und Erlösung ('Da ist das Hirtenhaus!')"
    ],
    "exercises": [
      {
        "id": "5187",
        "title": "Das Lied von der Glocke von Friedrich Schiller",
        "folder": "das-lied-von-der-glocke-von-friedrich-schiller-5187"
      },
      {
        "id": "5191",
        "title": "Der Handschuh von Friedrich Schiller",
        "folder": "der-handschuh-von-friedrich-schiller-5191"
      },
      {
        "id": "5197",
        "title": "Der Zauberlehrling von Johann Wolfgang von Goethe",
        "folder": "der-zauberlehrling-von-johann-wolfang-von-goethe-5197"
      },
      {
        "id": "5189",
        "title": "Der Fischer von Johann Wolfgang von Goethe",
        "folder": "der-fischer-von-johann-wolfgang-von-goethe-5189"
      },
      {
        "id": "5203",
        "title": "Erlkönig von Johann Wolfgang von Goethe",
        "folder": "erlkonig-von-johann-wolfgang-von-goethe-5203"
      },
      {
        "id": "5206",
        "title": "John Maynard von Theodor Fontane",
        "folder": "john-maynard-von-theodor-fontane-5206"
      },
      {
        "id": "5198",
        "title": "Die Brück‘ am Tay von Theodor Fontane",
        "folder": "die-bruck-am-tay-von-theodor-fontane-5198"
      },
      {
        "id": "5205",
        "title": "Herr von Ribbeck auf Ribbeck von Theodor Fontane",
        "folder": "herr-von-ribbeck-auf-ribbeck-von-theodor-fontane-5205"
      },
      {
        "id": "5192",
        "title": "Der Knabe im Moor von Annette von Droste-Hülshoff",
        "folder": "der-knabe-im-moor-von-annette-von-droste-hulshoff-5192"
      },
      {
        "id": "die-ballade-spannende-geschichten-in-reimform",
        "title": "Die Ballade – Spannende Geschichten in Reimform",
        "folder": "die-ballade-spannende-geschichten-in-reimform"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Balladen%20Goethe%20Schiller%20Fontane%20Deutsch&t=284"
  },
  "natur-und-stimmungslyrik-der-romantik": {
    "slug": "natur-und-stimmungslyrik-der-romantik",
    "title": "Natur- & Stimmungslyrik der Romantik",
    "category": "Lyrik, Gedichte & Balladen",
    "shortDesc": "Eichendorff, Heine, Mörike und Goethe: Mondnacht, Loreley, Frühlingserwachen und Wanderlieder.",
    "longDesc": "Die vollendete Kunst des lyrischen Stimmungsbildes: Eichendorffs schwebende Nachtgedichte, Heines wehmütige Loreley-Sage, Eduard Mörikes Frühlingsjubel und Goethes zeitlose Natur- und Seelenlyrik.",
    "keyPoints": [
      "Joseph von Eichendorff – 'Mondnacht' ('Es war, als hätt der Himmel / Die Erde still geküsst'): Reines Seelengedicht der Romantik",
      "Eichendorff – 'Sehnsucht' & 'Das zerbrochene Ringlein': Wandermotiv, Verlust der Geliebten und Sehnsucht nach Erlösung",
      "Heinrich Heine – 'Die Loreley' ('Ich weiß nicht, was soll es bedeuten'): Romantisches Motiv mit raffinierter poetischer Brechung",
      "Eduard Mörike – 'Er ist’s' ('Frühling lässt sein blaues Band / Wieder flattern durch die Lüfte'): Frühlingserwachen und Lautmalerei",
      "Theodor Storm – 'Knecht Ruprecht': Stimmungsvolle Weihnachtslyrik zwischen Tannenduft und winterlicher Stille",
      "Goethe – 'Osterspaziergang' (Faust I) & 'Wandrers Nachtlied': 'Vom Eise befreit' und die Ruhe über allen Wipfeln"
    ],
    "exercises": [
      {
        "id": "5208",
        "title": "Mondnacht von Joseph von Eichendorff",
        "folder": "mondnacht-von-joseph-von-eichendorff-5208"
      },
      {
        "id": "5211",
        "title": "Sehnsucht von Joseph von Eichendorff",
        "folder": "sehnsucht-von-joseph-von-eichendorff-5211"
      },
      {
        "id": "5188",
        "title": "Das zerbrochene Ringlein von Joseph von Eichendorff",
        "folder": "das-zerbrochene-ringlein-von-joseph-von-eichendorff-5188"
      },
      {
        "id": "5200",
        "title": "Die Loreley von Heinrich Heine",
        "folder": "die-loreley-von-heinrich-heine-5200"
      },
      {
        "id": "5202",
        "title": "Er ist's von Eduard Mörike",
        "folder": "er-ist-s-von-eduard-morike-5202"
      },
      {
        "id": "5207",
        "title": "Knecht Ruprecht von Theodor Storm",
        "folder": "knecht-ruprecht-von-theodor-storm-5207"
      },
      {
        "id": "5209",
        "title": "Osterspaziergang von Johann Wolfgang von Goethe",
        "folder": "osterspaziergang-von-johann-wolfgang-von-goethe-5209"
      },
      {
        "id": "5212",
        "title": "Wandrers Nachtlied von Johann Wolfgang von Goethe",
        "folder": "wandrers-nachtlied-von-johann-wolfgang-von-goethe-5212"
      },
      {
        "id": "5210",
        "title": "Prometheus von Johann Wolfgang von Goethe",
        "folder": "prometheus-von-johann-wolfgang-von-goethe-5210"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Romantik%20Lyrik%20Eichendorff%20Heine%20Goethe&t=284"
  },
  "moderne-lyrik-und-gedichtanalyse": {
    "slug": "moderne-lyrik-und-gedichtanalyse",
    "title": "Moderne Lyrik, Expressionismus & Analyse",
    "category": "Lyrik, Gedichte & Balladen",
    "shortDesc": "Rilkes Dinggedichte, Heyms Großstadtlyrik, Reimschemata, Metrum, Poetry Slam und visuelle Poesie.",
    "longDesc": "Das Handwerkszeug der Gedichtanalyse und die Lyrik der Moderne: Vom symbolistischen Dinggedicht Rainer Maria Rilkes über den apokalyptischen Expressionismus Georg Heyms bis hin zu modernen Poetry-Slam-Bühnen und visueller Poesie.",
    "keyPoints": [
      "Metrum & Verslehre: Bestimmung von Jambus, Trochäus, Daktylus und Anapäst sowie Zäsuren und Kadenzen (männlich/weiblich)",
      "Reimschemata & Formen: Paarreim (aabb), Kreuzreim (abab), umarmender Reim (abba), Schweifreim; Sonett, Ode, Hymne, Elegie",
      "Rainer Maria Rilke – 'Der Panther': Das vollendete Dinggedicht – Gefangenschaft und gebrochener Wille hinter Gitterstäben",
      "Rilke – 'Herbsttag' ('Herr: es ist Zeit. Der Sommer war sehr groß') & 'Der Tod ist groß': Reife, Einsamkeit und Vergänglichkeit",
      "Georg Heym – 'Der Gott der Stadt' & 'Der Krieg': Expressionistische Großstadtdämonie, Reihungsstil und Vorahnung des Weltkriegs",
      "Gegenwartsformen: Poetry Slam (Performance, Rhythmus, Sprache), politische Lyrik und konkrete visuelle Poesie"
    ],
    "exercises": [
      {
        "id": "5194",
        "title": "Der Panther von Rainer Maria Rilke",
        "folder": "der-panther-von-rainer-maria-rilke-5194"
      },
      {
        "id": "5204",
        "title": "Herbsttag von Rainer Maria Rilke",
        "folder": "herbsttag-von-rainer-maria-rilke-5204"
      },
      {
        "id": "5196",
        "title": "Der Tod ist groß von Rainer Maria Rilke",
        "folder": "der-tod-ist-groes-von-rainer-maria-rilke-5196"
      },
      {
        "id": "5190",
        "title": "Der Gott der Stadt von Georg Heym",
        "folder": "der-gott-der-stadt-von-georg-heym-5190"
      },
      {
        "id": "5193",
        "title": "Der Krieg von Georg Heym",
        "folder": "der-krieg-von-georg-heym-5193"
      },
      {
        "id": "3253",
        "title": "Gedichte analysieren",
        "folder": "gedichte-analysieren-3253"
      },
      {
        "id": "gedichtanalyse-leicht-gemacht-der-werkzeugkasten",
        "title": "Gedichtanalyse leicht gemacht – Der Werkzeugkasten",
        "folder": "gedichtanalyse-leicht-gemacht-der-werkzeugkasten"
      },
      {
        "id": "wie-man-gedichte-interpretiert-ohne-zu-verzweifeln",
        "title": "Wie man Gedichte interpretiert ohne zu verzweifeln",
        "folder": "wie-man-gedichte-interpretiert-ohne-zu-verzweifeln"
      },
      {
        "id": "poetry-slam-die-moderne-form-der-lyrik",
        "title": "Poetry Slam – Die moderne Form der Lyrik",
        "folder": "poetry-slam-die-moderne-form-der-lyrik"
      },
      {
        "id": "politische-gedichte-die-etwas-bewegt-haben",
        "title": "Politische Gedichte die etwas bewegt haben",
        "folder": "politische-gedichte-die-etwas-bewegt-haben"
      },
      {
        "id": "visuelle-poesie-wenn-das-gedicht-ein-bild-ist",
        "title": "Visuelle Poesie – Wenn das Gedicht ein Bild ist",
        "folder": "visuelle-poesie-wenn-das-gedicht-ein-bild-ist"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Gedichtanalyse%20Rilke%20Expressionismus%20Lyrik&t=284"
  },
  "kinderbuch-klassiker-und-welterfolge": {
    "slug": "kinderbuch-klassiker-und-welterfolge",
    "title": "Kinderbuch-Klassiker & Welterfolge",
    "category": "Kinder- & Jugendliteratur",
    "shortDesc": "Der kleine Prinz, Alice im Wunderland, Inklusion, Weltliteratur für Kinder und die Geschichte des Kinderbuchs.",
    "longDesc": "Meisterwerke, die Generationen geprägt haben: Antoine de Saint-Exupérys philosophische Fabel 'Der kleine Prinz', Lewis Carrolls surreales Meisterwerk 'Alice im Wunderland' sowie die faszinierende Entwicklung von Kindheitsbildern und Inklusion in der Literatur.",
    "keyPoints": [
      "Antoine de Saint-Exupéry – 'Der kleine Prinz': 'Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar'",
      "Philosophische Kernmotive: Zähmung, Freundschaft, Verantwortung für die Rose und kindliche Unschuld gegen erwachsene Eitelkeit",
      "Lewis Carroll – 'Alice im Wunderland': Sprachspiele, Nonsense-Logik, Traumwelten und Kritik an viktorianischen Erziehungsmethoden",
      "Geschichte des Kinderbuchs: Vom moralisierenden Struwwelpeter hin zu emanzipatorischen Kinderbüchern des 20. Jahrhunderts",
      "Weltliteratur im Kinderzimmer: Zeitlose Werte, universelle Archetypen und generationenübergreifende Faszination",
      "Inklusion & Vielfalt: Darstellung von Kindern mit Behinderungen und besonderen Lebensumständen als starke Protagonisten"
    ],
    "exercises": [
      {
        "id": "antoine-de-saint-exupery-und-die-botschaft-des-kleinen-prinzen",
        "title": "Antoine de Saint-Exupéry und die Botschaft des kleinen Prinzen",
        "folder": "antoine-de-saint-exupery-und-die-botschaft-des-kleinen-prinzen"
      },
      {
        "id": "der-kleine-prinz-grosse-weisheiten-fuer-kinder",
        "title": "Der kleine Prinz – Große Weisheiten für Kinder",
        "folder": "der-kleine-prinz-grosse-weisheiten-fuer-kinder"
      },
      {
        "id": "alice-im-wunderland-ein-trip-durch-die-fantasie",
        "title": "Alice im Wunderland – Ein Trip durch die Fantasie",
        "folder": "alice-im-wunderland-ein-trip-durch-die-fantasie"
      },
      {
        "id": "weltliteratur-fuer-kinder-die-klassiker",
        "title": "Weltliteratur für Kinder – Die Klassiker",
        "folder": "weltliteratur-fuer-kinder-die-klassiker"
      },
      {
        "id": "die-entwicklung-von-kinderbuechern-ueber-die-zeit",
        "title": "Die Entwicklung von Kinderbüchern über die Zeit",
        "folder": "die-entwicklung-von-kinderbuechern-ueber-die-zeit"
      },
      {
        "id": "behinderung-und-inklusion-in-kinder-und-jugendbuechern",
        "title": "Behinderung und Inklusion in Kinder- und Jugendbüchern",
        "folder": "behinderung-und-inklusion-in-kinder-und-jugendbuechern"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kinderbuch%20Klassiker%20Kleiner%20Prinz%20Alice&t=284"
  },
  "moderne-jugendbuecher-und-schullektuere": {
    "slug": "moderne-jugendbuecher-und-schullektuere",
    "title": "Moderne Jugendbücher & Coming-of-Age",
    "category": "Kinder- & Jugendliteratur",
    "shortDesc": "Wolfgang Herrndorf (Tschick), Andreas Steinhöfel (Rico & Oskar), Alice Pantermüller (Lotta-Leben) und Jugendsprache.",
    "longDesc": "Lebensnahe Jugendliteratur unserer Zeit: Vom legendären Roadtrip in Herrndorfs 'Tschick' über die Freundschaft zwischen tiefbegabt und hochbegabt bei Steinhöfel bis zu humorvollen Comic-Romanen und der authentischen Sprache der Jugend.",
    "keyPoints": [
      "Wolfgang Herrndorf – 'Tschick' (2010): Maik Klingenberg und Andrej Tschichatschow auf der abenteuerlichen Reise durch die Walachei",
      "Roadnovel & Initiationsreise: Überwindung von Einsamkeit, Vorurteilen und das Entdecken von wahrer Freundschaft und Vertrauen",
      "Andreas Steinhöfel – 'Rico, Oskar und die Tieferschatten': Detektivabenteuer in Berlin, Inklusion und gegenseitige Ergänzung",
      "Alice Pantermüller – 'Mein Lotta-Leben': Der Siegeszug von Tagebuch- und Comic-Romanen für junge Leser",
      "Dav Pilkey & Graphic Novels: Bildstarke Lesemotivation für Lesemuffel mit Witz und unkonventionellen Helden",
      "Jugendsprache & Familie: Wie Romane familiäre Konflikte, Generationskonflikte und Identitätsfindung glaubwürdig spiegeln"
    ],
    "exercises": [
      {
        "id": "4574",
        "title": "Wolfgang Herrndorf - Tschick",
        "folder": "wolfgang-herrndorf-tschick-3-4574"
      },
      {
        "id": "andreas-steinhoefel-und-die-abenteuer-von-rico-und-oskar",
        "title": "Andreas Steinhöfel und die Abenteuer von Rico und Oskar",
        "folder": "andreas-steinhoefel-und-die-abenteuer-von-rico-und-oskar"
      },
      {
        "id": "alice-pantermueller-der-erfolg-von-lotta-leben",
        "title": "Alice Pantermüller – Der Erfolg von Lotta-Leben",
        "folder": "alice-pantermueller-der-erfolg-von-lotta-leben"
      },
      {
        "id": "dav-pilkey-warum-captain-underpants-so-viele-fans-hat",
        "title": "Dav Pilkey – Warum Captain Underpants so viele Fans hat",
        "folder": "dav-pilkey-warum-captain-underpants-so-viele-fans-hat"
      },
      {
        "id": "die-sprache-der-jugend-in-der-literatur-frueher-und-heute",
        "title": "Die Sprache der Jugend in der Literatur früher und heute",
        "folder": "die-sprache-der-jugend-in-der-literatur-frueher-und-heute"
      },
      {
        "id": "streit-mit-den-eltern-in-der-literatur",
        "title": "Streit mit den Eltern in der Literatur",
        "folder": "streit-mit-den-eltern-in-der-literatur"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Tschick%20Rico%20Oskar%20Jugendliteratur%20Herrndorf&t=284"
  },
  "fantasy-und-jugend-bestseller": {
    "slug": "fantasy-und-jugend-bestseller",
    "title": "Fantasy & Jugend-Bestseller",
    "category": "Kinder- & Jugendliteratur",
    "shortDesc": "Cornelia Funke (Tintenwelt), Christopher Paolini (Eragon) und die ungebrochene Faszination fantastischer Welten.",
    "longDesc": "Internationale Bestseller-Phänomene der Jugendliteratur: Wie Cornelia Funke mit Tintenherz die Magie des Lesens lebendig werden lässt und Christopher Paolini mit Eragon als Teenager den Drachen-Kult neu erfand.",
    "keyPoints": [
      "Cornelia Funke – Die deutsche Königin der Fantasy: Tintenwelt-Trilogie, 'Herr der Diebe' und 'Drachenreiter'",
      "Metaphysische Buchmagie: Was passiert, wenn Buchfiguren durch Vorlesen in die Realität treten (Zauberzunge Mo und Staubfinger)",
      "Christopher Paolini – 'Eragon': Klassische Drachenreiter-Heldenreise und weltweiter Erfolg eines jungen Autors",
      "Worldbuilding in Jugendromanen: Ausarbeitung fantastischer Völker, Sprachen (Elbisch/Alte Sprache) und Magiesysteme",
      "Faszination Fantasy für Jugendliche: Eskapismus, moralische Eindeutigkeit und das Wachsen an übermenschlichen Aufgaben"
    ],
    "exercises": [
      {
        "id": "cornelia-funke-die-deutsche-koenigin-der-fantasy",
        "title": "Cornelia Funke – Die deutsche Königin der Fantasy",
        "folder": "cornelia-funke-die-deutsche-koenigin-der-fantasy"
      },
      {
        "id": "cornelia-funke-und-die-magie-der-tintenwelt",
        "title": "Cornelia Funke und die Magie der Tintenwelt",
        "folder": "cornelia-funke-und-die-magie-der-tintenwelt"
      },
      {
        "id": "christopher-paolini-als-teenager-zum-fantasy-star",
        "title": "Christopher Paolini – Als Teenager zum Fantasy-Star",
        "folder": "christopher-paolini-als-teenager-zum-fantasy-star"
      },
      {
        "id": "eragon-und-das-erbe-der-drachenreiter",
        "title": "Eragon und das Erbe der Drachenreiter",
        "folder": "eragon-und-das-erbe-der-drachenreiter"
      },
      {
        "id": "was-fantasy-literatur-fuer-jugendliche-so-attraktiv-macht",
        "title": "Was Fantasy-Literatur für Jugendliche so attraktiv macht",
        "folder": "was-fantasy-literatur-fuer-jugendliche-so-attraktiv-macht"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Cornelia%20Funke%20Eragon%20Fantasy%20Jugend&t=284"
  },
  "krimi-thriller-und-whodunit": {
    "slug": "krimi-thriller-und-whodunit",
    "title": "Krimi, Thriller & Whodunit",
    "category": "Literarische Gattungen & Genres",
    "shortDesc": "Agatha Christie, Sherlock Holmes, Cozy Crime, historische Ermittlungen, Psychothriller und Rätselstrukturen.",
    "longDesc": "Vom klassischen Detektiv-Rätsel zur nervenzerreißenden Spannung: Wie Arthur Conan Doyle und Agatha Christie die Gesetze des Whodunit prägten, warum Cozy Crime boomt und wie moderne Thriller Manipulation und Fake News thematisieren.",
    "keyPoints": [
      "Das Whodunit-Prinzip: Geschlossener Verdächtigenkreis, scheinbar unlösbares Rätsel und logische Deduktion am Ende",
      "Sherlock Holmes (Conan Doyle): Die Geburtsstunde des genialen, exzentrischen Ermittlers mit Dr. Watson als Identifikationsfigur",
      "Agatha Christie – 'Queen of Crime': Meisterin des Plot-Twists, Hercule Poirot und Miss Marple",
      "Cozy Crime: Wohlfühlkrimis in idyllischer Kulisse ohne übermäßige Gewaltdarstellung mit skurrilen Dorfbewohnern",
      "Historische Krimis: Mördersuche im Mittelalter und Renaissance (Umberto Eco: Der Name der Rose)",
      "Psychothriller: Verlässliche vs. unzuverlässige Erzähler, Manipulation, Paranoia und Fake News in modernen Stoffen"
    ],
    "exercises": [
      {
        "id": "agatha-christie-die-queen-of-crime-und-ihre-raetsel",
        "title": "Agatha Christie – Die Queen of Crime und ihre Rätsel",
        "folder": "agatha-christie-die-queen-of-crime-und-ihre-raetsel"
      },
      {
        "id": "sherlock-holmes-der-erste-superheld-der-literatur",
        "title": "Sherlock Holmes – Der erste Superheld der Literatur",
        "folder": "sherlock-holmes-der-erste-superheld-der-literatur"
      },
      {
        "id": "die-geschichte-der-krimis-von-sherlock-holmes-bis-heute",
        "title": "Die Geschichte der Krimis von Sherlock Holmes bis heute",
        "folder": "die-geschichte-der-krimis-von-sherlock-holmes-bis-heute"
      },
      {
        "id": "cozy-crime-krimis-zum-wohlfuehlen-ohne-viel-blut",
        "title": "Cozy Crime – Krimis zum Wohlfühlen ohne viel Blut",
        "folder": "cozy-crime-krimis-zum-wohlfuehlen-ohne-viel-blut"
      },
      {
        "id": "krimis-zum-mitraten-was-macht-ein-gutes-raetsel-aus",
        "title": "Krimis zum Mitraten – Was macht ein gutes Rätsel aus",
        "folder": "krimis-zum-mitraten-was-macht-ein-gutes-raetsel-aus"
      },
      {
        "id": "historische-krimis-moerdersuche-im-mittelalter",
        "title": "Historische Krimis – Mördersuche im Mittelalter",
        "folder": "historische-krimis-moerdersuche-im-mittelalter"
      },
      {
        "id": "fake-news-und-manipulation-in-modernen-thrillern",
        "title": "Fake News und Manipulation in modernen Thrillern",
        "folder": "fake-news-und-manipulation-in-modernen-thrillern"
      },
      {
        "id": "die-rolle-der-polizei-im-krimi-frueher-und-heute",
        "title": "Die Rolle der Polizei im Krimi früher und heute",
        "folder": "die-rolle-der-polizei-im-krimi-frueher-und-heute"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Krimi%20Thriller%20Sherlock%20Holmes%20Agatha%20Christie&t=284"
  },
  "fantasy-science-fiction-und-dystopien": {
    "slug": "fantasy-science-fiction-und-dystopien",
    "title": "Fantasy, Science-Fiction & Dystopien",
    "category": "Literarische Gattungen & Genres",
    "shortDesc": "High vs. Low Fantasy, Cyberpunk, Dystopien, Multiversen, Klischees und futuristische Zukunftsvisionen.",
    "longDesc": "Spekulative Literatur zwischen Magie und Zukunftstechnik: Was unterscheidet High Fantasy von düsterer Dark Fantasy, wie zeichnet Cyberpunk menschliche Maschinenwesen und warum spiegeln Dystopien aktuelle Gesellschaftsängste wider?",
    "keyPoints": [
      "High Fantasy vs. Low Fantasy: Vollständig erfundene Sekundärwelten (Tolkien) vs. Einbruch von Magie in die reale Welt",
      "Klischees der Fantasy: Elfen, Zwerge, finstere Zauberer und wie moderne Autoren diese Stereotypen aufbrechen",
      "Dark Fantasy & Grimdark: Moralischer Graubereich, Antihelden und düstere Schicksale ohne strahlendes Happy End",
      "Cyberpunk: 'High tech, low life' – Megakonzerne, künstliche Intelligenz, Cyborgs und Überwachungsstaaten",
      "Dystopie vs. Utopie: Schreckensvisionen autoritärer Kontrolle (Orwells 1984, Huxleys Schöne neue Welt, Panem)",
      "Das Multiversum: Parallele Zeitlinien, Quantenrealitäten und narrative Möglichkeiten verzweigter Geschichten"
    ],
    "exercises": [
      {
        "id": "high-fantasy-gegen-low-fantasy-die-unterschiede",
        "title": "High Fantasy gegen Low Fantasy – Die Unterschiede",
        "folder": "high-fantasy-gegen-low-fantasy-die-unterschiede"
      },
      {
        "id": "drachen-elfen-und-zwerge-die-klischees-der-fantasy",
        "title": "Drachen, Elfen und Zwerge – Die Klischees der Fantasy",
        "folder": "drachen-elfen-und-zwerge-die-klischees-der-fantasy"
      },
      {
        "id": "dark-fantasy-wenn-es-in-elfenwelten-duester-wird",
        "title": "Dark Fantasy – Wenn es in Elfenwelten düster wird",
        "folder": "dark-fantasy-wenn-es-in-elfenwelten-duester-wird"
      },
      {
        "id": "cyberpunk-wenn-menschen-zu-maschinen-werden",
        "title": "Cyberpunk – Wenn Menschen zu Maschinen werden",
        "folder": "cyberpunk-wenn-menschen-zu-maschinen-werden"
      },
      {
        "id": "die-architektur-in-fantasy-welten",
        "title": "Die Architektur in Fantasy-Welten",
        "folder": "die-architektur-in-fantasy-welten"
      },
      {
        "id": "das-multiversum-in-der-modernen-literatur",
        "title": "Das Multiversum in der modernen Literatur",
        "folder": "das-multiversum-in-der-modernen-literatur"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Fantasy%20Science%20Fiction%20Dystopie%20Cyberpunk&t=284"
  },
  "abenteuerromane-und-reisegeschichten": {
    "slug": "abenteuerromane-und-reisegeschichten",
    "title": "Abenteuerromane, Schauer & Reiseliteratur",
    "category": "Literarische Gattungen & Genres",
    "shortDesc": "Robinsonaden, Reiseliteratur, Schauerromantik, Dark Academia und Stadt-Land-Gegensätze.",
    "longDesc": "Vom fernen Dschungel über einsame Inseln bis zu den düsteren Hallen alter Universitäten: Das Abenteuer als Grenzerfahrung des Menschen, die Geburt des Schauerromans und die Faszination von Dark Academia.",
    "keyPoints": [
      "Der klassische Abenteuerroman: Heldenreise in lebensfeindliche Zonen (Dschungel, Wüste, Meere, Weltraum)",
      "Robinsonade: Daniel Defoes Robinson Crusoe als Modell für Isolation, Überleben und Kultivierung der Wildnis",
      "Reiseliteratur: Fernweh, Entdeckerdrang, Kulturkontakt und Selbstfindung fern der Heimat",
      "Schauerliteratur (Gothic Novel): Burgen, Gewölbe, Flüche und die Erkundung verdrängter Urängste im 18. Jahrhundert",
      "Dark Academia: Moderner Hype um antike Philosophie, alte Bibliotheken, Geheimbünde und obsessive Mordmotive",
      "Stadt vs. Land: Der Moloch Großstadt als Labyrinth der Sünde vs. die trügerische Ruhe provinzieller Dorfidylle"
    ],
    "exercises": [
      {
        "id": "abenteuerromane-vom-dschungel-bis-zum-weltraum",
        "title": "Abenteuerromane – Vom Dschungel bis zum Weltraum",
        "folder": "abenteuerromane-vom-dschungel-bis-zum-weltraum"
      },
      {
        "id": "warum-reiseliteratur-uns-fernweh-macht",
        "title": "Warum Reiseliteratur uns Fernweh macht",
        "folder": "warum-reiseliteratur-uns-fernweh-macht"
      },
      {
        "id": "schauerliteratur-das-gruseln-im-18-jahrhundert",
        "title": "Schauerliteratur – Das Gruseln im 18. Jahrhundert",
        "folder": "schauerliteratur-das-gruseln-im-18-jahrhundert"
      },
      {
        "id": "dark-academia-das-geheimnisvolle-an-alten-internaten",
        "title": "Dark Academia – Das Geheimnisvolle an alten Internaten",
        "folder": "dark-academia-das-geheimnisvolle-an-alten-internaten"
      },
      {
        "id": "das-dorf-gegen-die-stadt-gegensaetze-in-der-literatur",
        "title": "Das Dorf gegen die Stadt – Gegensätze in der Literatur",
        "folder": "das-dorf-gegen-die-stadt-gegensaetze-in-der-literatur"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Abenteuerromane%20Reiseliteratur%20Gothic%20Dark%20Academia&t=284"
  },
  "fabeln-maerchen-und-comics": {
    "slug": "fabeln-maerchen-und-comics",
    "title": "Fabeln, Märchen, Comics & Mangas",
    "category": "Literarische Gattungen & Genres",
    "shortDesc": "Grimms Märchen, Äsops Tierfabeln, Asterix & Obelix, deutsche Comicgeschichte und Manga-Kultur.",
    "longDesc": "Volkstümliche und bildhafte Erzählformen: Warum Fabeln mit Tieren menschliche Schwächen spiegeln, welche dunklen Seiten Grimms Märchen bergen und wie Comics, Graphic Novels und Mangas die moderne Lesekultur revolutionieren.",
    "keyPoints": [
      "Tierfabeln: Typisierte Tiercharaktere (Fuchs = schlau, Wolf = gierig, Löwe = mächtig), Schlusssatz mit moralischer Lehre (Moral)",
      "Grimms Märchen: Volksmärchen vs. Kunstmärchen, typische Formeln ('Es war einmal'), Dreizahl und grausame Originalfassungen",
      "Der Froschkönig: Motiv von Treue, Ekel, Einlösung gegebener Versprechen und Erlösung",
      "Märchen international: Universelle Motive in Märchen aus Europa, Asien, Afrika und den indigenen Amerikas",
      "Comics & Graphic Novels: Bild-Text-Synthese, Panels, Sprechblasen und der Erfolg von Asterix & Obelix",
      "Manga & Anime: Japanische Erzähltradition, Leserichtung von rechts nach links, visuelle Dynamik und Einfluss auf westliche Literatur"
    ],
    "exercises": [
      {
        "id": "tierfabeln-was-uns-fuechse-und-loewen-lehren",
        "title": "Tierfabeln – Was uns Füchse und Löwen lehren",
        "folder": "tierfabeln-was-uns-fuechse-und-loewen-lehren"
      },
      {
        "id": "4476",
        "title": "Der Froschkönig – ein Märchen von Versprechen",
        "folder": "der-froschkonig-ein-marchen-von-versprechen-4476"
      },
      {
        "id": "die-bedeutung-von-maerchen-in-verschiedenen-kulturen",
        "title": "Die Bedeutung von Märchen in verschiedenen Kulturen",
        "folder": "die-bedeutung-von-maerchen-in-verschiedenen-kulturen"
      },
      {
        "id": "die-dunkle-seite-der-gebrueder-grimm-maerchen",
        "title": "Die dunkle Seite der Gebrüder Grimm Märchen",
        "folder": "die-dunkle-seite-der-gebrueder-grimm-maerchen"
      },
      {
        "id": "asterix-und-obelix-geschichte-mit-humor-lernen",
        "title": "Asterix und Obelix – Geschichte mit Humor lernen",
        "folder": "asterix-und-obelix-geschichte-mit-humor-lernen"
      },
      {
        "id": "die-geschichte-der-comics-in-deutschland",
        "title": "Die Geschichte der Comics in Deutschland",
        "folder": "die-geschichte-der-comics-in-deutschland"
      },
      {
        "id": "warum-mangas-und-animes-die-literatur-beeinflussen",
        "title": "Warum Mangas und Animes die Literatur beeinflussen",
        "folder": "warum-mangas-und-animes-die-literatur-beeinflussen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Fabeln%20Maerchen%20Comics%20Manga%20Deutsch&t=284"
  },
  "kreatives-schreiben-und-figurenentwicklung": {
    "slug": "kreatives-schreiben-und-figurenentwicklung",
    "title": "Kreatives Schreiben & Figurenentwicklung",
    "category": "Kreatives Schreiben & Erzählhandwerk",
    "shortDesc": "Heldenreise, Charakter-Check, Dialoggestaltung, starke Verben statt Adjektive, Cliffhanger und Plot-Enden.",
    "longDesc": "Das Handwerk des Geschichtenerzählens: Lerne, wie Bestseller-Autoren unvergessliche Figuren erschaffen, packende Dialoge schreiben, Adjektivballast über Bord werfen und mit Cliffhangern echte Pageturner konstruieren.",
    "keyPoints": [
      "Die Heldenreise (Monomythos nach Joseph Campbell): Ruf des Abenteuers, Weigerung, Mentor, Schwellenüberschreitung und Rückkehr",
      "Charakter-Check: Äußere Merkmale, innere Wunden, Motivation (Want vs. Need), Stärken, Schwächen und Figurenentwicklung",
      "Namensgebung: Klangfarben, historische Kontexte und symbolische Bedeutungen von Figurennamen",
      "Dialoggestaltung: Subtext ('Show, don't tell'), Sprechstile, Rhythmus und das Streichen überflüssiger Redebegleitsätze",
      "Sprachliche Präzision: Vermeidung von 'Adjektivitis' – starke, bildhafte Verben erzeugen lebendigere Bilder im Kopf",
      "Spannungsaufbau: Cliffhanger am Kapitelende, Retardierendes Moment, Foreshadowing und offenes vs. geschlossenes Ende"
    ],
    "exercises": [
      {
        "id": "die-heldenreise-das-rezept-fuer-fast-jeden-film",
        "title": "Die Heldenreise – Das Rezept für fast jeden Film",
        "folder": "die-heldenreise-das-rezept-fuer-fast-jeden-film"
      },
      {
        "id": "charakter-check-wie-sich-helden-veraendern",
        "title": "Charakter-Check – Wie sich Helden verändern",
        "folder": "charakter-check-wie-sich-helden-veraendern"
      },
      {
        "id": "die-bedeutung-von-namen-fuer-charaktere",
        "title": "Die Bedeutung von Namen für Charaktere",
        "folder": "die-bedeutung-von-namen-fuer-charaktere"
      },
      {
        "id": "dialoge-schreiben-so-klingen-sie-echt",
        "title": "Dialoge schreiben – So klingen sie echt",
        "folder": "dialoge-schreiben-so-klingen-sie-echt"
      },
      {
        "id": "dialoge-lebendig-gestalten-so-reden-echte-menschen",
        "title": "Dialoge lebendig gestalten – So reden echte Menschen",
        "folder": "dialoge-lebendig-gestalten-so-reden-echte-menschen"
      },
      {
        "id": "adjektive-sparen-starke-verben-nutzen",
        "title": "Adjektive sparen – Starke Verben nutzen",
        "folder": "adjektive-sparen-starke-verben-nutzen"
      },
      {
        "id": "cliffhanger-wie-man-leser-zum-weiterlesen-zwingt",
        "title": "Cliffhanger – Wie man Leser zum Weiterlesen zwingt",
        "folder": "cliffhanger-wie-man-leser-zum-weiterlesen-zwingt"
      },
      {
        "id": "das-passende-ende-finden-happy-end-oder-offen",
        "title": "Das passende Ende finden – Happy End oder offen",
        "folder": "das-passende-ende-finden-happy-end-oder-offen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kreatives%20Schreiben%20Heldenreise%20Dialoge&t=284"
  },
  "erzaehltechniken-und-ideenfindung": {
    "slug": "erzaehltechniken-und-ideenfindung",
    "title": "Erzähltechniken, Motive & Schreibideen",
    "category": "Kreatives Schreiben & Erzählhandwerk",
    "shortDesc": "Brainstorming-Methoden, Fanfiction, Briefromane, Traummotive, Farbsymbolik und Recherchetipps.",
    "longDesc": "Vom ersten Gedankenfunken zum fertigen Text: Kreative Methoden der Ideenfindung, Schreibrituale der Weltliteratur, der Briefroman im Wandel der Zeit und die gezielte psychologische Wirkung von Traummotiven und Farbsymbolik.",
    "keyPoints": [
      "Brainstorming & Ideenfindung: Clustering, Mindmapping, Reizwortmethode und 'Was-wäre-wenn'-Fragestellungen",
      "Fanfiction: Kreatives Weiterschreiben, Prequels, Sequels und alternative Universen (AUs) in digitalen Fan-Communities",
      "Briefromane im Wandel: Vom klassischen Briefwechsel des 18. Jahrhunderts (Goethe: Werther) zu WhatsApp- und Chat-Romanen",
      "Psychologische Motive: Traumszenen als Fenster ins Unterbewusstsein und Vorahnung zukünftiger Ereignisse",
      "Farbsymbolik: Die unbewusste Wirkung von Farben (Weiß = Unschuld/Tod, Rot = Liebe/Gefahr, Blau = Sehnsucht)",
      "Schreibgewohnheiten berühmter Autoren: Kuriose Rituale (Schiller mit faulen Äpfeln, Balzacs Kaffeekonsum) und Fakten-Recherche"
    ],
    "exercises": [
      {
        "id": "brainstorming-methoden-fuer-eigene-buchideen",
        "title": "Brainstorming-Methoden für eigene Buchideen",
        "folder": "brainstorming-methoden-fuer-eigene-buchideen"
      },
      {
        "id": "fanfiction-warum-fans-die-besten-geschichten-weiterschreiben",
        "title": "Fanfiction – Warum Fans die besten Geschichten weiterschreiben",
        "folder": "fanfiction-warum-fans-die-besten-geschichten-weiterschreiben"
      },
      {
        "id": "briefromane-eine-ausgestorbene-art-zu-schreiben",
        "title": "Briefromane – Eine ausgestorbene Art zu schreiben",
        "folder": "briefromane-eine-ausgestorbene-art-zu-schreiben"
      },
      {
        "id": "briefromane-im-zeitalter-von-whatsapp-und-e-mail",
        "title": "Briefromane im Zeitalter von WhatsApp und E-Mail",
        "folder": "briefromane-im-zeitalter-von-whatsapp-und-e-mail"
      },
      {
        "id": "die-bedeutung-von-traeumen-in-erzaehlungen",
        "title": "Die Bedeutung von Träumen in Erzählungen",
        "folder": "die-bedeutung-von-traeumen-in-erzaehlungen"
      },
      {
        "id": "die-bedeutung-von-farben-in-der-literatur",
        "title": "Die Bedeutung von Farben in der Literatur",
        "folder": "die-bedeutung-von-farben-in-der-literatur"
      },
      {
        "id": "verrueckte-schreibgewohnheiten-beruehmter-autoren",
        "title": "Verrückte Schreibgewohnheiten berühmter Autoren",
        "folder": "verrueckte-schreibgewohnheiten-beruehmter-autoren"
      },
      {
        "id": "recherche-tipps-wie-autoren-fakten-checken",
        "title": "Recherche-Tipps – Wie Autoren Fakten checken",
        "folder": "recherche-tipps-wie-autoren-fakten-checken"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erzaehltechniken%20Kreativ%20Schreiben%20Deutsch&t=284"
  },
  "booktok-social-media-und-digitale-lesewelten": {
    "slug": "booktok-social-media-und-digitale-lesewelten",
    "title": "BookTok, Social Media & Digitale Lesewelten",
    "category": "Lesekultur, Medien & Buchwelten",
    "shortDesc": "BookTok, Bookstagram, Buch-Communities, Virtual Reality und der Hype um Sonderausgaben.",
    "longDesc": "Wie digitale Medien das Lesen revolutionieren: BookTok und Bookstagram als globale Trendsetter, die Verkaufsrekorde brechen, emotionale Lesereaktionen viral verbreiten und neue Leserschaften für Bücher begeistern.",
    "keyPoints": [
      "BookTok-Phänomen: Wie 30-Sekunden-Videos auf TikTok über weltweite Bestsellerlisten und Buchnachdrucke entscheiden",
      "Bookstagram: Die Ästhetik des Buches – Inszenierung von Covern, Farbschnitten und Lese-Vibes auf Instagram",
      "Blogs vs. Social Media: Professionelle Literaturrezensionen im Wandel von ausführlichen Textblogs zu visuellen Video-Snippets",
      "Sonderausgaben-Hype: Farbschnitte, Folienprägungen, exklusive Signierstunden und Bücher als begehrte Lifestyle-Sammlerobjekte",
      "Digitale Lesewelten: E-Reader, Hörbücher, interaktive Lese-Apps und Virtual-Reality-Erlebnisse in der Literatur"
    ],
    "exercises": [
      {
        "id": "booktok-wie-tiktok-entscheidet-was-wir-lesen",
        "title": "BookTok – Wie TikTok entscheidet was wir lesen",
        "folder": "booktok-wie-tiktok-entscheidet-was-wir-lesen"
      },
      {
        "id": "booktok-trends-segen-oder-fluch-fuer-die-literatur",
        "title": "BookTok Trends – Segen oder Fluch für die Literatur",
        "folder": "booktok-trends-segen-oder-fluch-fuer-die-literatur"
      },
      {
        "id": "bookstagram-wie-man-buecher-perfekt-fotografiert",
        "title": "Bookstagram – Wie man Bücher perfekt fotografiert",
        "folder": "bookstagram-wie-man-buecher-perfekt-fotografiert"
      },
      {
        "id": "blogs-vs-instagram-wo-man-die-besten-rezensionen-findet",
        "title": "Blogs vs Instagram – Wo man die besten Rezensionen findet",
        "folder": "blogs-vs-instagram-wo-man-die-besten-rezensionen-findet"
      },
      {
        "id": "virtual-reality-und-literatur-geschichten-erleben",
        "title": "Virtual Reality und Literatur – Geschichten erleben",
        "folder": "virtual-reality-und-literatur-geschichten-erleben"
      },
      {
        "id": "der-hype-um-signierte-sonderausgaben",
        "title": "Der Hype um signierte Sonderausgaben",
        "folder": "der-hype-um-signierte-sonderausgaben"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=BookTok%20Lesekultur%20Social%20Media%20Buecher&t=284"
  },
  "buchmarkt-bibliotheken-und-zensur": {
    "slug": "buchmarkt-bibliotheken-und-zensur",
    "title": "Buchmarkt, Bibliotheken & Zensur",
    "category": "Lesekultur, Medien & Buchwelten",
    "shortDesc": "Bibliotheken der Geschichte, Buchhandlungen, Buchmessen, Buchpreise, Zensur und verbotene Bücher.",
    "longDesc": "Hinter den Kulissen des Literaturbetriebs: Von der antiken Bibliothek von Alexandria über moderne Buchmessen und Verlagshäuser bis hin zur dunklen Geschichte staatlicher Zensur und verbotener Bücher.",
    "keyPoints": [
      "Bibliotheken im Wandel: Von der antiken Schriftrollensammlung in Alexandria zu modernen digitalen Wissenszentren",
      "Buchhandlungen: Bedeutung stationärer Buchläden als Kulturorte des Verweilens und der Beratung im Zeitalter des Online-Handels",
      "Buchmessen: Die Frankfurter und Leipziger Buchmesse als jährliche Treffpunkte von Verlagen, Autoren, Übersetzern und Lesern",
      "Buchpreise: Der Deutsche Buchpreis, Georg-Büchner-Preis und Nobelpreis für Literatur – Qualitätskriterien und Marktwirkung",
      "Covergestaltung: Typografie, Farbpsychologie und visuelle Reize, die Leser zum Kauf animieren",
      "Zensur & Verbotene Bücher: Warum Machthaber zu allen Zeiten freie Bücher fürchteten und zensierten, und der Schutz durch Pseudonyme"
    ],
    "exercises": [
      {
        "id": "beruehmte-bibliotheken-der-geschichte-alexandria-bis-heute",
        "title": "Berühmte Bibliotheken der Geschichte – Alexandria bis heute",
        "folder": "beruehmte-bibliotheken-der-geschichte-alexandria-bis-heute"
      },
      {
        "id": "die-coolsten-bibliotheken-der-welt",
        "title": "Die coolsten Bibliotheken der Welt",
        "folder": "die-coolsten-bibliotheken-der-welt"
      },
      {
        "id": "buchhandlungen-warum-sie-orte-zum-verweilen-sind",
        "title": "Buchhandlungen – Warum sie Orte zum Verweilen sind",
        "folder": "buchhandlungen-warum-sie-orte-zum-verweilen-sind"
      },
      {
        "id": "die-zukunft-der-buchhandlung-im-online-zeitalter",
        "title": "Die Zukunft der Buchhandlung im Online-Zeitalter",
        "folder": "die-zukunft-der-buchhandlung-im-online-zeitalter"
      },
      {
        "id": "buchmessen-wo-autoren-und-fans-sich-treffen",
        "title": "Buchmessen – Wo Autoren und Fans sich treffen",
        "folder": "buchmessen-wo-autoren-und-fans-sich-treffen"
      },
      {
        "id": "buchpreise-in-deutschland-was-sie-bedeuten",
        "title": "Buchpreise in Deutschland – Was sie bedeuten",
        "folder": "buchpreise-in-deutschland-was-sie-bedeuten"
      },
      {
        "id": "die-gestaltung-von-buchcovern-was-uns-zum-kauf-reizt",
        "title": "Die Gestaltung von Buchcovern – Was uns zum Kauf reizt",
        "folder": "die-gestaltung-von-buchcovern-was-uns-zum-kauf-reizt"
      },
      {
        "id": "verbotene-buecher-was-frueher-zensiert-wurde",
        "title": "Verbotene Bücher – Was früher zensiert wurde",
        "folder": "verbotene-buecher-was-frueher-zensiert-wurde"
      },
      {
        "id": "pseudonyme-warum-autoren-sich-hinter-namen-verstecken",
        "title": "Pseudonyme – Warum Autoren sich hinter Namen verstecken",
        "folder": "pseudonyme-warum-autoren-sich-hinter-namen-verstecken"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Buchmarkt%20Bibliotheken%20Zensur%20Buchmesse&t=284"
  },
  "bedeutung-der-literatur-und-buchkultur": {
    "slug": "bedeutung-der-literatur-und-buchkultur",
    "title": "Bedeutung der Literatur & Buchkultur",
    "category": "Lesekultur, Medien & Buchwelten",
    "shortDesc": "Warum wir Klassiker lesen, Bücher die die Welt veränderten, Schriftgeschichte, Druckpresse, Antiquariate und Buch vs. Film.",
    "longDesc": "Die unvergängliche Kraft des geschriebenen Wortes: Warum der Literaturkanon unser Denken prägt, wie Gutenbergs bewegliche Lettern die Welt revolutionierten, was Antiquariate so magisch macht und warum das Buch fast immer besser als der Film ist.",
    "keyPoints": [
      "Der Literaturkanon: Warum wir Klassiker von Goethe bis Kafka lesen – zeitlose Fragen nach Sinn, Gerechtigkeit und Identität",
      "Bücher, die die Geschichte veränderten: Schriften, die Religionen, wissenschaftliche Revolutionen und politische Systeme erschütterten",
      "Geschichte der Schrift: Von sumerischen Keilschrifttafeln und ägyptischen Papyrusrollen über Pergamentkodizes bis zum digitalen Text",
      "Gutenberg & die Druckpresse: Die Demokratisierung des Wissens und der Beginn der modernen Massenkommunikation ab 1450",
      "Antiquariate & Buchliebe: Auf Schatzsuche nach seltenen Erstausgaben, alten Einbänden und der Psychologie der Bibliomanie",
      "Buch gegen Film: Warum Kopfkino, innere Monologe und komplexe Sprache der Romanvorlage in Verfilmungen oft verloren gehen"
    ],
    "exercises": [
      {
        "id": "warum-wir-im-deutschunterricht-klassiker-lesen-muessen",
        "title": "Warum wir im Deutschunterricht Klassiker lesen müssen",
        "folder": "warum-wir-im-deutschunterricht-klassiker-lesen-muessen"
      },
      {
        "id": "buecher-die-geschichte-veraendert-haben",
        "title": "Bücher die Geschichte verändert haben",
        "folder": "buecher-die-geschichte-veraendert-haben"
      },
      {
        "id": "die-geschichte-der-schrift-von-der-tontafel-zum-ipad",
        "title": "Die Geschichte der Schrift – Von der Tontafel zum iPad",
        "folder": "die-geschichte-der-schrift-von-der-tontafel-zum-ipad"
      },
      {
        "id": "die-geschichte-der-druckpresse-einfach-erklaert",
        "title": "Die Geschichte der Druckpresse einfach erklärt",
        "folder": "die-geschichte-der-druckpresse-einfach-erklaert"
      },
      {
        "id": "antiquariate-auf-schatzsuche-in-alten-buechern",
        "title": "Antiquariate – Auf Schatzsuche in alten Büchern",
        "folder": "antiquariate-auf-schatzsuche-in-alten-buechern"
      },
      {
        "id": "die-bedeutung-von-papierqualitaet-und-bindung",
        "title": "Die Bedeutung von Papierqualität und Bindung",
        "folder": "die-bedeutung-von-papierqualitaet-und-bindung"
      },
      {
        "id": "bibliomanie-wenn-man-zu-viele-buecher-kauft",
        "title": "Bibliomanie – Wenn man zu viele Bücher kauft",
        "folder": "bibliomanie-wenn-man-zu-viele-buecher-kauft"
      },
      {
        "id": "buch-gegen-film-warum-das-buch-meistens-besser-ist",
        "title": "Buch gegen Film – Warum das Buch meistens besser ist",
        "folder": "buch-gegen-film-warum-das-buch-meistens-besser-ist"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Literaturgeschichte%20Buchkultur%20Klassiker%20Lesen&t=284"
  },
  "gesellschaft-und-menschen-in-der-literatur": {
    "slug": "gesellschaft-und-menschen-in-der-literatur",
    "title": "Gesellschaft & Menschen in der Literatur",
    "category": "Lesekultur, Medien & Buchwelten",
    "shortDesc": "Arm und Reich in Geschichten, Rassismus, American Dream, berühmte Paare und Inklusion.",
    "longDesc": "Literatur als Brennglas menschlicher Existenz und gesellschaftlicher Konflikte: Wie Schriftsteller soziale Spaltung anprangern, den American Dream dekonstruieren, gegen Rassismus aufstehen und das Ringen um Liebe und Inklusion schildern.",
    "keyPoints": [
      "Soziale Gegensätze: Arm und Reich in Erzählungen – von Dickens' Viktorianischem London bis zu modernen Prekariatsromanen",
      "Armut in Deutschland: Literarische Schilderungen von Obdachlosigkeit, Ausgrenzung und fehlender Chancengleichheit",
      "Berühmte Paare der Literaturgeschichte: Romeo und Julia, Faust und Gretchen, Tristan und Isolde – Liebe gegen gesellschaftliche Zwänge",
      "Der American Dream: Aufstiegsversprechen vs. Desillusionierung (Fitzgerald: Der große Gatsby, Miller: Tod eines Handlungsreisenden)",
      "Rassismus & Diskriminierung: Koloniale Spuren in der Weltliteratur und postkoloniale Stimmen für Gleichberechtigung",
      "Demokratie & Literatur: Politische Romane als Wächter gegen autoritäre Tendenzen und Einladung zum kritischen Dialog"
    ],
    "exercises": [
      {
        "id": "arm-und-reich-soziale-unterschiede-in-geschichten",
        "title": "Arm und Reich – Soziale Unterschiede in Geschichten",
        "folder": "arm-und-reich-soziale-unterschiede-in-geschichten"
      },
      {
        "id": "armut-in-deutschland-literarische-beispiele",
        "title": "Armut in Deutschland – Literarische Beispiele",
        "folder": "armut-in-deutschland-literarische-beispiele"
      },
      {
        "id": "beruehmte-literarische-paare-und-ihr-schicksal",
        "title": "Berühmte literarische Paare und ihr Schicksal",
        "folder": "beruehmte-literarische-paare-und-ihr-schicksal"
      },
      {
        "id": "der-american-dream-in-der-literatur",
        "title": "Der American Dream in der Literatur",
        "folder": "der-american-dream-in-der-literatur"
      },
      {
        "id": "rassismus-und-diskriminierung-in-der-weltliteratur",
        "title": "Rassismus und Diskriminierung in der Weltliteratur",
        "folder": "rassismus-und-diskriminierung-in-der-weltliteratur"
      },
      {
        "id": "behinderung-im-alltag-romane-ueber-inklusion",
        "title": "Behinderung im Alltag – Romane über Inklusion",
        "folder": "behinderung-im-alltag-romane-ueber-inklusion"
      },
      {
        "id": "black-lives-matter-in-der-aktuellen-jugendliteratur",
        "title": "Black Lives Matter in der aktuellen Jugendliteratur",
        "folder": "black-lives-matter-in-der-aktuellen-jugendliteratur"
      },
      {
        "id": "demokratie-verstehen-durch-politische-romane",
        "title": "Demokratie verstehen durch politische Romane",
        "folder": "demokratie-verstehen-durch-politische-romane"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Gesellschaft%20Literatur%20Diversitaet%20Inklusion&t=284"
  }
};
