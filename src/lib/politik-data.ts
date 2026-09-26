export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface PolitikTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const politikCategories: string[] = [
  "Demokratie & Verfassung",
  "Wahlen, Parteien & Institutionen",
  "Europa & Internationale Politik",
  "Gesellschaft, Medien & Partizipation"
];

export const politikTopics: Record<string, PolitikTopic> = {
  "demokratie-und-rechtsstaat": {
    "slug": "demokratie-und-rechtsstaat",
    "title": "Demokratie, Rechtsstaat & Grundgesetz",
    "category": "Demokratie & Verfassung",
    "shortDesc": "Grundwerte der freiheitlich-demokratischen Grundordnung, Grundrechte (Art. 1–19 GG) und Gewaltenteilung.",
    "longDesc": "Die Bundesrepublik Deutschland ist ein demokratischer, sozialer Bundesstaat und Rechtsstaat. Artikel 1 des Grundgesetzes stellt die Würde des Menschen an oberste Stelle. Die Gewaltenteilung sichert die Freiheit der Bürger durch die Trennung von Legislative, Exekutive und Judikative.",
    "keyPoints": [
      "Artikel 1 GG: 'Die Würde des Menschen ist unantastbar. Sie zu achten und zu schützen ist Verpflichtung aller staatlichen Gewalt.'",
      "Strukturprinzipien nach Art. 20 GG: Demokratie, Bundesstaat, Rechtsstaat, Sozialstaat, Republik",
      "Gewaltenteilung: Legislative (Gesetzgebung/Parlamente), Exekutive (Ausführende Gewalt/Polizei & Verwaltung), Judikative (Rechtsprechung/Gerichte)",
      "Wehrhafte Demokratie: Die Ewigkeitsklausel (Art. 79 Abs. 3 GG) schützt Kernprinzipien vor jeder Abschaffung",
      "Formen der Demokratie: Direkte Bürgerbeteiligung vs. repräsentative parlamentarische Demokratie"
    ],
    "exercises": [
      {
        "id": "955",
        "title": "Das Grundgesetz",
        "folder": "das-grundgesetz-955"
      },
      {
        "id": "3496",
        "title": "Demokratie & Grundwerte",
        "folder": "demokratie-3496"
      },
      {
        "id": "3504",
        "title": "Der Rechtsstaat",
        "folder": "der-rechtsstaat-3504"
      },
      {
        "id": "3493",
        "title": "Das Sozialstaatsprinzip",
        "folder": "das-sozialstaatsprinzip-3493"
      },
      {
        "id": "3541",
        "title": "Grundrechte",
        "folder": "grundrechte-3541"
      },
      {
        "id": "2358",
        "title": "Gewaltentrennung in der Demokratie",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-12-2358"
      },
      {
        "id": "3526",
        "title": "Direkte Demokratie vs. Repräsentative Demokratie",
        "folder": "direkte-demokratie-vs-reprasentative-demokratie-3526"
      },
      {
        "id": "5236",
        "title": "Athen und die attische Demokratie in Griechenland",
        "folder": "athen-und-die-attische-demokratie-in-griechenland-5236"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=demokratie+grundgesetz&t=3752"
  },
  "menschenrechte-und-grundwerte": {
    "slug": "menschenrechte-und-grundwerte",
    "title": "Menschenrechte & Grundwerte",
    "category": "Demokratie & Verfassung",
    "shortDesc": "Allgemeine Erklärung der Menschenrechte, internationales Asylrecht und philosophische Gerechtigkeitstheorien.",
    "longDesc": "Menschenrechte sind angeborene, unveräußerliche Rechte, die jedem Menschen gleichermaßen zustehen. Sie bilden das fundamentale Fundament für Frieden, Gerechtigkeit und das friedliche Zusammenleben weltweit.",
    "keyPoints": [
      "Universeller Geltungsanspruch: Menschenrechte gelten für jeden Menschen unabhängig von Nationalität, Geschlecht oder Herkunft",
      "Allgemeine Erklärung der Menschenrechte: Am 10. Dezember 1948 von der Generalversammlung der Vereinten Nationen verabschiedet",
      "Drei Generationen der Menschenrechte: 1. Bürgerliche/politische Freiheitsrechte, 2. Wirtschaftliche/soziale Rechte, 3. Kollektivrechte (z. B. Frieden, Umwelt)",
      "Recht auf Asyl: Internationaler Schutz für politisch, religiös oder rassistisch Verfolgte (Genfer Flüchtlingskonvention)",
      "Politische Gerechtigkeit (John Rawls): Gerechtigkeit als Fairness unter dem 'Schleier des Nichtwissens'"
    ],
    "exercises": [
      {
        "id": "3566",
        "title": "Menschenrechte",
        "folder": "menschenrechte-3566"
      },
      {
        "id": "2939",
        "title": "Die Allgemeine Erklärung der Menschenrechte",
        "folder": "die-allgemeine-erklarung-der-menschenrechte-2939"
      },
      {
        "id": "2782",
        "title": "Die Theorie der Menschenrechte",
        "folder": "die-theorie-der-menschenrechte-2782"
      },
      {
        "id": "3364",
        "title": "Menschenrechte und internationale Abkommen",
        "folder": "menschenrechte-und-internationale-abkommen-3364"
      },
      {
        "id": "2310",
        "title": "Das Menschenrecht auf Asyl",
        "folder": "das-menschenrecht-auf-asyl-2310"
      },
      {
        "id": "2783",
        "title": "Die Theorie der politischen Gerechtigkeit von Rawls",
        "folder": "die-theorie-der-politischen-gerechtigkeit-von-rawls-2783"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=menschenrechte&t=3752"
  },
  "politische-systeme-und-ideologien": {
    "slug": "politische-systeme-und-ideologien",
    "title": "Herrschaftsformen & Politische Systeme",
    "category": "Demokratie & Verfassung",
    "shortDesc": "Demokratien vs. Diktaturen, politische Ideologien (Liberalismus, Sozialismus, Konservatismus) und Korruptionsgefahren.",
    "longDesc": "Politische Systeme regeln die Verteilung von Macht und die Willensbildung in einer Gesellschaft. Während in Demokratien Macht zeitlich begrenzt und kontrolliert wird, beruhen autoritäre und totalitäre Systeme auf Zwang und Unterdrückung.",
    "keyPoints": [
      "Herrschaftsformen im Vergleich: Demokratie (Volkssouveränität, Rechtsstaat), Autokratie (Machtmonopol), Totalitarismus (totale Überwachung)",
      "Klassische Ideologien: Liberalismus (Freiheit des Einzelnen), Konservatismus (Bewahrung von Werten), Sozialismus (soziale Gleichheit)",
      "Links-Rechts-Spektrum: Ursprung in der französischen Nationalversammlung; heute differenziert durch gesellschaftspolitische Achsen",
      "Korruption: Missbrauch anvertrauter Macht zum privaten Vorteil – Gefahren für Wirtschaft, Vertrauen und Rechtsstaatlichkeit"
    ],
    "exercises": [
      {
        "id": "605",
        "title": "Lerninhalt: Demokratie und Diktatur",
        "folder": "lerninhalt-demokratie-und-diktatur-605"
      },
      {
        "id": "3524",
        "title": "Diktatur",
        "folder": "diktatur-3524"
      },
      {
        "id": "3578",
        "title": "Politische Systeme im Vergleich",
        "folder": "politische-systeme-im-vergleich-3578"
      },
      {
        "id": "3577",
        "title": "Politische Ideologien",
        "folder": "politische-ideologien-3577"
      },
      {
        "id": "3563",
        "title": "Links und Rechts in der Politik",
        "folder": "links-und-rechts-in-der-politik-3563"
      },
      {
        "id": "3559",
        "title": "Korruption",
        "folder": "korruption-3559"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=politische+systeme&t=3752"
  },
  "demokratie-unter-druck-populismus-und-extremismus": {
    "slug": "demokratie-unter-druck-populismus-und-extremismus",
    "title": "Demokratiegefährdung, Populismus & Extremismus",
    "category": "Demokratie & Verfassung",
    "shortDesc": "Aufstieg des Populismus in Europa, Links-, Rechts- und religiöser Extremismus sowie autoritäre Regime.",
    "longDesc": "Liberale Demokratien stehen weltweit unter Druck: Populistische Bewegungen vereinfachen komplexe Sachverhalte und säen Misstrauen in demokratische Institutionen. Extremistische Gruppierungen lehnen die freiheitliche Grundordnung grundlegend ab.",
    "keyPoints": [
      "Merkmale des Populismus: Schwarz-Weiß-Denken, Berufung auf den 'wahren Volkswillen' gegen angebliche Eliten, Ablehnung von Pluralismus",
      "Extremismus-Formen: Rechtsextremismus (völkischer Nationalismus, Rassismus), Linksextremismus (Abschaffung des Systems), Religiöser Extremismus/Islamismus (Scharia über Verfassung)",
      "Gefährdung der Gewaltenteilung: Schwächung von Verfassungsgerichten, Einschränkung freier Medien und Aushöhlung von Wahlen",
      "Wehrhafte Instrumente: Vereinsverbote, Parteiverbotsverfahren, Beobachtung durch den Verfassungsschutz"
    ],
    "exercises": [
      {
        "id": "6555",
        "title": "Der Aufstieg des politischen Populismus in Europa",
        "folder": "der-aufstieg-des-politischen-populismus-in-europa-2-6555"
      },
      {
        "id": "6551",
        "title": "Der globale Kampf zwischen Demokratie und Autokratie",
        "folder": "der-globale-kampf-zwischen-demokratie-und-autokratie-2-6551"
      },
      {
        "id": "3579",
        "title": "Populismus",
        "folder": "populismus-3579"
      },
      {
        "id": "3564",
        "title": "Links- und Rechtsextremismus",
        "folder": "links-und-rechtsextremismus-3564"
      },
      {
        "id": "3583",
        "title": "Religiöser Extremismus",
        "folder": "religioser-extremismus-3583"
      },
      {
        "id": "2322",
        "title": "Der Islamische Staat",
        "folder": "der-islamische-staat-2322"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=populismus+extremismus&t=3752"
  },
  "wahlsystem-und-bundestagswahl": {
    "slug": "wahlsystem-und-bundestagswahl",
    "title": "Wahlsysteme & Wahlen in Deutschland",
    "category": "Wahlen, Parteien & Institutionen",
    "shortDesc": "Wahlgrundsätze, Erst- und Zweitstimme, 5%-Hürde, Kanzlerwahl und Wahlergebnisse.",
    "longDesc": "Wahlen sind das Herzstück der repräsentativen Demokratie. In Deutschland kombiniert die Bundestagswahl die Personenwahl im Wahlkreis mit der Verhältniswahl über Landeslisten, um eine gerechte parlamentarische Repräsentation zu sichern.",
    "keyPoints": [
      "5 Wahlgrundsätze (Art. 38 GG): Allgemein, unmittelbar, frei, gleich und geheim",
      "Erst- vs. Zweitstimme: Erststimme wählt den Direktkandidaten im Wahlkreis, Zweitstimme bestimmt die Stärke der Parteien im Bundestag",
      "5%-Sperrklausel: Verhindert die Zersplitterung des Parlaments und sichert stabile Mehrheiten",
      "Kanzlerwahl: Wahl auf Vorschlag des Bundespräsidenten durch die Mitglieder des Deutschen Bundestages ohne Aussprache",
      "Wahlen auf allen Ebenen: Von der Klassensprecherwahl über Kommunal- und Landtagswahlen bis zur Bundestagswahl"
    ],
    "exercises": [
      {
        "id": "3495",
        "title": "Das Wahlsystem in Deutschland",
        "folder": "das-wahlsystem-in-deutschland-3495"
      },
      {
        "id": "4493",
        "title": "Kanzlerwahl in Deutschland",
        "folder": "kanzlerwahl-in-deutschland-so-wahlt-deutschland-seinen-chef-4493"
      },
      {
        "id": "3003",
        "title": "Geschichte des Frauenwahlrechts",
        "folder": "geschichte-des-frauenwahlrechts-3003"
      },
      {
        "id": "3515",
        "title": "Die Klassensprecherwahl",
        "folder": "die-klassensprecherwahl-3515"
      },
      {
        "id": "3289",
        "title": "Die Bundestagswahl & Parteien",
        "folder": "die-bundestagswahl-2025-3289"
      },
      {
        "id": "4506",
        "title": "Ergebnis der Bundestagswahl 2025",
        "folder": "wenn-die-erde-bebt-warum-sie-wackelt-8-4506"
      },
      {
        "id": "3117",
        "title": "Landtagswahl 2024 in Sachsen",
        "folder": "landtagswahl-2024-in-sachsen-3117"
      },
      {
        "id": "3118",
        "title": "Landtagswahl 2024 in Thüringen",
        "folder": "landtagswahl-2024-in-thuringen-3118"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wahlsystem+bundestagswahl&t=3752"
  },
  "parteien-und-spitzenpolitiker": {
    "slug": "parteien-und-spitzenpolitiker",
    "title": "Parteienlandschaft & Spitzenpolitiker",
    "category": "Wahlen, Parteien & Institutionen",
    "shortDesc": "Parteiensystem in Deutschland, Programmatiken und führende politische Persönlichkeiten.",
    "longDesc": "Parteien wirken an der politischen Willensbildung des Volkes mit (Art. 21 GG). Sie bündeln Interessen, stellen Kandidaten für Parlamente auf und bilden Regierungen oder die parlamentarische Opposition.",
    "keyPoints": [
      "Verfassungsrang (Art. 21 GG): Parteien müssen demokratischen Grundsätzen genügen und über ihre Finanzen öffentlich Rechenschaft ablegen",
      "Parteienfamilien: CDU/CSU (Christdemokratie/Konservatismus), SPD (Sozialdemokratie), Bündnis 90/Die Grünen (Ökologie), FDP (Liberalismus), AfD (Rechtspopulismus), Die Linke (Demokratischer Sozialismus), BSW (Bündnis Sahra Wagenknecht)",
      "Spitzenpolitiker: Rollen und Profile von Bundeskanzlern, Parteivorsitzenden und Oppositionsführern",
      "Koalitionen & Opposition: Notwendigkeit von Bündnissen bei fehlender absoluter Mehrheit und parlamentarische Kontrollfunktion"
    ],
    "exercises": [
      {
        "id": "946",
        "title": "Parteien",
        "folder": "parteien-946"
      },
      {
        "id": "6571",
        "title": "Christliche Parteien",
        "folder": "christliche-parteien-2-6571"
      },
      {
        "id": "3293",
        "title": "Parteien und Kandidaten der Bundestagswahl 2025",
        "folder": "parteien-und-kandidaten-der-bundestagswahl-2025-3293"
      },
      {
        "id": "3291",
        "title": "Friedrich Merz",
        "folder": "friedrich-merz-3291"
      },
      {
        "id": "3292",
        "title": "Olaf Scholz",
        "folder": "olaf-scholz-3292"
      },
      {
        "id": "3290",
        "title": "Robert Habeck",
        "folder": "robert-habeck-3290"
      },
      {
        "id": "3288",
        "title": "Christian Lindner",
        "folder": "christian-lindner-3288"
      },
      {
        "id": "3287",
        "title": "Alice Weidel",
        "folder": "alice-weidel-3287"
      },
      {
        "id": "3285",
        "title": "Sahra Wagenknecht",
        "folder": "sahra-wagenknecht-3285"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=parteien+politiker&t=3752"
  },
  "staatsorgane-regierung-und-gesetzgebung": {
    "slug": "staatsorgane-regierung-und-gesetzgebung",
    "title": "Staatsorgane, Regierung & Föderalismus",
    "category": "Wahlen, Parteien & Institutionen",
    "shortDesc": "Bundesverfassungsgericht, Bundesrat, Bundesregierung, Koalitionsverträge, Kanzler und Föderalismus.",
    "longDesc": "Die Bundesrepublik Deutschland wird von fünf ständigen Verfassungsorganen getragen. Der Föderalismus verteilt Aufgaben zwischen Bund und Ländern, während das Bundesverfassungsgericht als Hüter der Grundordnung wacht.",
    "keyPoints": [
      "Bundesverfassungsgericht in Karlsruhe: Höchstes Gericht, entscheidet über Normenkontrollen, Organstreitigkeiten und Verfassungsbeschwerden",
      "Bundesrat: Vertretung der 16 Landesregierungen, wirkt bei der Gesetzgebung des Bundes mit (Zustimmungs- und Einspruchsgesetze)",
      "Bundesregierung & Kabinett: Kanzlerprinzip (Richtlinienkompetenz), Ressortprinzip (Eigenverantwortung der Minister) und Kollegialprinzip",
      "Koalitionsvertrag: Politische Vereinbarung zwischen Regierungsparteien über gemeinsame Vorhaben für eine Legislaturperiode",
      "Föderalismus: Subsidiaritätsprinzip und Kulturhoheit der Bundesländer (z. B. Schulwesen und Polizei)"
    ],
    "exercises": [
      {
        "id": "3488",
        "title": "Das Bundesverfassungsgericht",
        "folder": "das-bundesverfassungsgericht-3488"
      },
      {
        "id": "3498",
        "title": "Der Bundesrat",
        "folder": "der-bundesrat-3498"
      },
      {
        "id": "980",
        "title": "Föderalismus",
        "folder": "foderalismus-980"
      },
      {
        "id": "3588",
        "title": "So funktioniert ein Ministerium",
        "folder": "so-funktioniert-ein-ministerium-3588"
      },
      {
        "id": "5213",
        "title": "Die 25. Bundesregierung der Bundesrepublik Deutschland - das Kabinett Merz",
        "folder": "die-25-bundesregierung-der-bundesrepublik-deutschland-das-kabinett-merz-5213"
      },
      {
        "id": "4662",
        "title": "Was ist ein Koalitionsvertrag",
        "folder": "was-ist-ein-koalitionsvertrag-4662"
      },
      {
        "id": "4663",
        "title": "Der Koalitionsvertrag von CDU, CSU und SPD vom April 2025",
        "folder": "der-koalitionsvertrag-von-cdu-csu-und-spd-vom-april-2025-4663"
      },
      {
        "id": "3327",
        "title": "Deutsche Kanzler",
        "folder": "deutsche-kanzler-3327"
      },
      {
        "id": "3297",
        "title": "Das politische System in Deutschland",
        "folder": "das-politische-system-in-deutschland-3297"
      },
      {
        "id": "3184",
        "title": "Escape Room \"Das politische System in Deutschland\"",
        "folder": "escape-room-quot-das-politische-system-in-deutschland-quot-3184"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staatsorgane+foederalismus&t=3752"
  },
  "internationale-verfassungen-und-parlamente": {
    "slug": "internationale-verfassungen-und-parlamente",
    "title": "Internationale Parlamente & Verfassungen",
    "category": "Wahlen, Parteien & Institutionen",
    "shortDesc": "Verfassungsvergleich: Die US-Verfassung, das österreichische Parlament und Parteiensysteme.",
    "longDesc": "Ein Blick über die Grenzen verdeutlicht unterschiedliche Ausprägungen demokratischer Ordnung: Vom präsidentiellen Regierungssystem der USA bis zur parlamentarischen Demokratie in Österreich.",
    "keyPoints": [
      "Amerikanische Verfassung (1787): Älteste geschriebene Verfassung; Checks and Balances zwischen Präsident, Kongress und Supreme Court",
      "Österreichisches Parlament: Nationalrat (vom Volk gewählt) und Bundesrat (Länderkammer) im historischen Palais an der Wiener Ringstraße",
      "Parteienlandschaft Österreichs: ÖVP, SPÖ, FPÖ, Grüne und NEOS im parlamentarischen Kräftemessen",
      "Verfassungsvergleich: Präsidentielles System (starker Präsident als Staats- und Regierungschef) vs. Parlamentarisches System"
    ],
    "exercises": [
      {
        "id": "3157",
        "title": "Die amerikanische Verfassung",
        "folder": "die-amerikanische-verfassung-3157"
      },
      {
        "id": "5609",
        "title": "Das Österreichische Parlament",
        "folder": "das-sterreichische-parlament-5609"
      },
      {
        "id": "2350",
        "title": "Die politischen Parteien Österreichs",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-4-2350"
      },
      {
        "id": "3492",
        "title": "Das EU-Parlament",
        "folder": "das-eu-parlament-3492"
      },
      {
        "id": "6298",
        "title": "Demokratie und Bundesversammlung in der Schweiz",
        "folder": "demokratie-in-der-schweiz-6298"
      },
      {
        "id": "3526",
        "title": "Direkte Demokratie vs. Repräsentative Demokratie",
        "folder": "direkte-demokratie-vs-reprasentative-demokratie-3526"
      },
      {
        "id": "3512",
        "title": "Die Gewaltenteilung im Verfassungsstaat",
        "folder": "die-gewaltenteilung-3512"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=internationale+verfassungen&t=3752"
  },
  "europaeische-union-und-binnenmarkt": {
    "slug": "europaeische-union-und-binnenmarkt",
    "title": "Die Europäische Union & Institutionen",
    "category": "Europa & Internationale Politik",
    "shortDesc": "Europaparlament, Europäische Kommission, EZB, Binnenmarkt und europäische Integration.",
    "longDesc": "Die Europäische Union ist ein einzigartiger Staatenverbund von 27 demokratischen Staaten. Sie sichert seit Jahrzehnten Frieden, offenen Handel und Freizügigkeit auf dem europäischen Kontinent.",
    "keyPoints": [
      "Europäisches Parlament: Direkt von den EU-Bürgern gewählt; entscheidet mit dem Ministerrat über EU-Gesetze und Haushalt",
      "Europäische Kommission: 'Hüterin der Verträge' und Exekutive der EU mit alleinigem Gesetzesinitiativrecht",
      "Europäische Zentralbank (EZB): Sitz in Frankfurt am Main; sichert die Preisstabilität des Euro",
      "4 Grundfreiheiten des Binnenmarktes: Freier Verkehr von Waren, Personen, Dienstleistungen und Kapital",
      "Schengen-Raum & Eurozone: Reisen ohne Passkontrollen an den Binnengrenzen und gemeinsame Währung"
    ],
    "exercises": [
      {
        "id": "3477",
        "title": "Arbeit des Europäischen Parlaments",
        "folder": "arbeit-des-europaischen-parlaments-3477"
      },
      {
        "id": "3509",
        "title": "Die Europäische Kommission",
        "folder": "die-europaische-kommission-3509"
      },
      {
        "id": "3510",
        "title": "Die Europäische Zentralbank",
        "folder": "die-europaische-zentralbank-3510"
      },
      {
        "id": "3500",
        "title": "Der europäische Binnenmarkt",
        "folder": "der-europaische-binnenmarkt-3500"
      },
      {
        "id": "305",
        "title": "Staaten Europas",
        "folder": "staaten-europas-305"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=europaeische+union&t=3752"
  },
  "uno-voelkerrecht-und-globale-ordnung": {
    "slug": "uno-voelkerrecht-und-globale-ordnung",
    "title": "UNO, Völkerrecht & Geopolitik",
    "category": "Europa & Internationale Politik",
    "shortDesc": "Die Vereinten Nationen, UN-Sicherheitsrat, Blauhelme, Völkerrecht, Globalisierung und Geopolitik.",
    "longDesc": "In einer vernetzten Welt erfordern globale Herausforderungen (Klimawandel, Kriege, Armut) internationale Zusammenarbeit. Die UNO und das Völkerrecht bilden den völkerrechtlichen Rahmen für friedliche Konfliktbeilegung.",
    "keyPoints": [
      "Vereinte Nationen (UN/UNO): Gegründet 1945; 193 Mitgliedstaaten zur Wahrung des Weltfriedens und der internationalen Sicherheit",
      "UN-Sicherheitsrat: 5 ständige Mitglieder mit Vetorecht (USA, China, Russland, Großbritannien, Frankreich) und 10 nichtständige Mitglieder",
      "Friedenssicherung: Blauhelmtruppen überwachen Waffenstillstände und schützen Zivilbevölkerungen weltweit",
      "Völkerrecht: Gesamtheit der rechtsverbindlichen Normen zwischen Staaten (z. B. Gewaltverbot der UN-Charta, humanitäres Völkerrecht)",
      "Geopolitik: Machtverschiebungen, Aufstieg Chinas und Herausforderungen für die multilaterale Weltordnung"
    ],
    "exercises": [
      {
        "id": "953",
        "title": "Die UNO",
        "folder": "die-uno-953"
      },
      {
        "id": "3505",
        "title": "Der UN-Sicherheitsrat",
        "folder": "der-un-sicherheitsrat-3505"
      },
      {
        "id": "3074",
        "title": "Die Blauhelmtruppen der UNO",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-5-3074"
      },
      {
        "id": "3494",
        "title": "Das Völkerrecht",
        "folder": "das-volkerrecht-3494"
      },
      {
        "id": "981",
        "title": "Globalisierung",
        "folder": "globalisierung-981"
      },
      {
        "id": "6613",
        "title": "Die Rolle Chinas in der Weltwirtschaft und Politik",
        "folder": "die-rolle-chinas-in-der-weltwirtschaft-und-politik-6613"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=uno+voelkerrecht&t=3752"
  },
  "medien-pressefreiheit-und-desinformation": {
    "slug": "medien-pressefreiheit-und-desinformation",
    "title": "Medien, Meinungsfreiheit & Desinformation",
    "category": "Gesellschaft, Medien & Partizipation",
    "shortDesc": "Presse- und Meinungsfreiheit, vierte Gewalt, Fake News, soziale Medien und Informationskriege.",
    "longDesc": "Freie Medien sind unverzichtbar für eine lebendige Demokratie ('vierte Gewalt'). In Zeiten digitaler Plattformen und sozialer Netzwerke stellen gezielte Desinformation, Fake News und Propaganda jedoch eine wachsende Gefahr dar.",
    "keyPoints": [
      "Vierte Gewalt: Medien kontrollieren Regierende, decken Missstände auf und ermöglichen informierte Bürgerentscheidungen",
      "Presse- und Meinungsfreiheit (Art. 5 GG): Schutz vor Zensur und Recht auf freie Äußerung und Recherche",
      "Fake News & Desinformation: Gezielte Falschmeldungen zur Manipulation von Wahlen und gesellschaftlicher Spaltung",
      "Verantwortung in sozialen Medien: Echokammern, Algorithmen, Hassrede und digitale Medienkompetenz",
      "Medien im Konfliktfall: Informationskrieg, Zensur in autoritären Staaten und Rolle von Bürgerjournalismus"
    ],
    "exercises": [
      {
        "id": "3517",
        "title": "Die Pressefreiheit",
        "folder": "die-pressefreiheit-3517"
      },
      {
        "id": "3565",
        "title": "Meinungsfreiheit",
        "folder": "meinungsfreiheit-3565"
      },
      {
        "id": "3585",
        "title": "Rolle der Medien in der Politik",
        "folder": "rolle-der-medien-in-der-politik-3585"
      },
      {
        "id": "3532",
        "title": "Fake News und Desinformation",
        "folder": "fake-news-und-desinformation-3532"
      },
      {
        "id": "4463",
        "title": "Verantwortung in den sozialen Medien",
        "folder": "verantwortung-in-den-sozialen-medien-4463"
      },
      {
        "id": "5913",
        "title": "Wirkung von Medien",
        "folder": "wirkung-von-medien-5913"
      },
      {
        "id": "6615",
        "title": "Die Rolle der sozialen Medien im Krieg",
        "folder": "die-rolle-der-sozialen-medien-im-krieg-6615"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=pressefreiheit+medien&t=3752"
  },
  "migration-asyl-und-integration": {
    "slug": "migration-asyl-und-integration",
    "title": "Migration, Asyl & Integration",
    "category": "Gesellschaft, Medien & Partizipation",
    "shortDesc": "Fluchtursachen, Asylverfahren, weltweite Zuwanderung und Chancen der gesellschaftlichen Integration.",
    "longDesc": "Migration ist ein universelles Phänomen der Menschheitsgeschichte. Kriege, Klimawandel, wirtschaftliche Not und politische Verfolgung zwingen Millionen Menschen zur Flucht. Erfolgreiche Integration erfordert Rechte, Pflichten und gegenseitigen Respekt.",
    "keyPoints": [
      "Push- und Pull-Faktoren: Fluchtgründe (Krieg, Verfolgung, Armut) vs. Anreize des Ziellandes (Sicherheit, Rechtsstaat, Arbeit)",
      "Asylrecht in Deutschland (Art. 16a GG): Schutz für politisch Verfolgte und subsidiärer Schutz nach Genfer Konvention",
      "Integration als zweiseitiger Prozess: Spracherwerb, Bildung, Arbeitsmarktzugang und Einhaltung von Verfassungswerten",
      "Ökonomische Aspekte: Zuwanderung als Chance gegen Fachkräftemangel und demografischen Wandel",
      "Globale Dimension: Zuwanderung und globale Migrationsbewegungen im Zeitalter weltweiter Vernetzung"
    ],
    "exercises": [
      {
        "id": "3567",
        "title": "Migration und Fluchtursachen",
        "folder": "migration-und-fluchtursachen-3567"
      },
      {
        "id": "1133",
        "title": "Integration",
        "folder": "integration-1133"
      },
      {
        "id": "5578",
        "title": "Zuwanderung und Integration - Ein weltweites Phänomen",
        "folder": "zuwanderung-und-integration-ein-weltweites-phanomen-5578"
      },
      {
        "id": "5542",
        "title": "Migration und ihre Auswirkungen auf die wirtschaftliche Entwicklung",
        "folder": "migration-und-ihre-auswirkungen-auf-die-wirtschaftliche-entwicklung-2-5542"
      },
      {
        "id": "5550",
        "title": "Migration und ihre Rolle in der Globalisierung",
        "folder": "migration-und-ihre-rolle-in-der-globalisierung-5550"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=migration+integration&t=3752"
  },
  "vielfalt-gleichberechtigung-und-zivilcourage": {
    "slug": "vielfalt-gleichberechtigung-und-zivilcourage",
    "title": "Gleichberechtigung, Vielfalt & Zivilgesellschaft",
    "category": "Gesellschaft, Medien & Partizipation",
    "shortDesc": "Gleichstellung der Geschlechter, Feminismus, sexuelle Vielfalt, Toleranz, Inklusion und Zivilcourage.",
    "longDesc": "Eine offene, plurale Gesellschaft zeichnet sich durch Respekt vor der Vielfalt menschlicher Lebensentwürfe aus. Gleichberechtigung aller Geschlechter und der Mut zum zivilcouragierten Eintreten für Schwächere sind Grundpfeiler des Zusammenlebens.",
    "keyPoints": [
      "Gleichberechtigung (Art. 3 Abs. 2 GG): 'Männer und Frauen sind gleichberechtigt. Der Staat fördert die tatsächliche Durchsetzung.'",
      "Feminismus & Gender: Abbau von Rollenklischees, Schließen des Gender Pay Gap und weltweiter Schutz von Frauenrechten (Global Goal 5)",
      "Sexuelle & geschlechtliche Vielfalt (LGBTIQ+): Recht auf Selbstbestimmung, Nichtdiskriminierung und gesellschaftliche Akzeptanz",
      "Inklusion: Gleichberechtigte Teilhabe von Menschen mit Behinderungen in Schule, Beruf und Gesellschaft",
      "Zivilcourage: Hinschauen statt Wegsehen – mutiges Eintreten gegen Unrecht, Gewalt und Belästigung im Alltag"
    ],
    "exercises": [
      {
        "id": "954",
        "title": "Gleichberechtigung",
        "folder": "gleichberechtigung-954"
      },
      {
        "id": "2853",
        "title": "Gender-Gerechtigkeit und Gleichstellung",
        "folder": "gender-gerechtigkeit-und-gleichstellung-2853"
      },
      {
        "id": "3538",
        "title": "Geschlecht und Gender",
        "folder": "geschlecht-und-gender-3538"
      },
      {
        "id": "3501",
        "title": "Der Feminismus",
        "folder": "der-feminismus-3501"
      },
      {
        "id": "4480",
        "title": "Global Goal 5 - Gleichstellung leben – Frauenrechte für alle sichern",
        "folder": "global-goal-5-gleichstellung-leben-frauenrechte-fur-alle-sichern-4480"
      },
      {
        "id": "3587",
        "title": "Sexuelle Vielfalt und Akzeptanz",
        "folder": "sexuelle-vielfalt-und-akzeptanz-3587"
      },
      {
        "id": "2767",
        "title": "Die Bedeutung von Toleranz in der Gesellschaft",
        "folder": "die-bedeutung-von-toleranz-in-der-gesellschaft-2767"
      },
      {
        "id": "4475",
        "title": "Toleranz als Grundlage des Zusammenlebens",
        "folder": "toleranz-als-grundlage-des-zusammenlebens-4475"
      },
      {
        "id": "2856",
        "title": "Inklusion und Vielfalt in Bildungseinrichtungen",
        "folder": "inklusion-und-vielfalt-in-bildungseinrichtungen-2856"
      },
      {
        "id": "4454",
        "title": "Respektvoller Umgang mit Vielfalt",
        "folder": "respektvoller-umgang-mit-vielfalt-4454"
      },
      {
        "id": "3600",
        "title": "Zivilcourage",
        "folder": "zivilcourage-3600"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=gleichberechtigung+vielfalt&t=3752"
  },
  "diskriminierung-rassismus-und-antisemitismus": {
    "slug": "diskriminierung-rassismus-und-antisemitismus",
    "title": "Gegen Vorurteile, Rassismus & Antisemitismus",
    "category": "Gesellschaft, Medien & Partizipation",
    "shortDesc": "Ursachen von Vorurteilen, Alltagsrassismus, Antisemitismus und Strategien zur Überwindung von Diskriminierung.",
    "longDesc": "Rassismus und Antisemitismus bedrohen Menschenwürde und Demokratie. Die Auseinandersetzung mit Vorurteilen, Stereotypen und struktureller Diskriminierung ist unverzichtbar für ein friedliches Miteinander.",
    "keyPoints": [
      "Vorurteile & Stereotype: Generalisierende Urteile über Gruppen ohne Sachkenntnis; Entstehung durch Sozialisation und Feindbilder",
      "Rassismus: Abwertung und Benachteiligung von Menschen aufgrund rassistischer Zuschreibungen, Hautfarbe oder Herkunft",
      "Antisemitismus: Jahrhundertealte Feindschaft gegen Jüdinnen und Juden; von Verschwörungserzählungen bis zu gewalttätigen Angriffen",
      "Strukturelle Diskriminierung: Benachteiligung bei der Wohnungs- und Arbeitsplatzsuche oder im Bildungswesen",
      "Handlungsansätze: Aufklärung, interkulturelle Begegnung, Meldestellen und konsequente strafrechtliche Verfolgung von Hasskriminalität"
    ],
    "exercises": [
      {
        "id": "2745",
        "title": "Rassismus und Vorurteile",
        "folder": "rassismus-und-vorurteile-2745"
      },
      {
        "id": "3580",
        "title": "Rassismus in Deutschland",
        "folder": "rassismus-in-deutschland-3580"
      },
      {
        "id": "3475",
        "title": "Antisemitismus in Deutschland",
        "folder": "antimsemitismus-in-deutschland-3475"
      },
      {
        "id": "5910",
        "title": "Vorurteile und Diskriminierung",
        "folder": "vorurteile-und-diskriminierung-5910"
      },
      {
        "id": "4466",
        "title": "Vorurteile und Diskriminierung überwinden",
        "folder": "vorurteile-und-diskriminierung-uberwinden-4466"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=rassismus+antisemitismus&t=3752"
  },
  "sozialstaat-steuern-und-arbeitswelt": {
    "slug": "sozialstaat-steuern-und-arbeitswelt",
    "title": "Sozialstaat, Steuern & Arbeitswelt",
    "category": "Gesellschaft, Medien & Partizipation",
    "shortDesc": "Bürgergeld, Sozialreformen, Gewerkschaften, Streikrecht, Steuersystem und Staatsfinanzen.",
    "longDesc": "Der Sozialstaat schützt Bürger vor existenziellen Lebensrisiken (Krankheit, Arbeitslosigkeit, Alter). Finanziert wird dieser Ausgleich durch Steuern und Sozialabgaben nach dem Solidarprinzip.",
    "keyPoints": [
      "Sozialversicherungen: Kranken-, Renten-, Unfall-, Arbeitslosen- und Pflegeversicherung (Bismarcksches Modell)",
      "Bürgergeld: Grundsicherung für Arbeitsuchende zur Gewährleistung des soziokulturellen Existenzminimums",
      "Gewerkschaften & Tarifautonomie: Aushandlung von Löhnen und Arbeitsbedingungen ohne staatliche Einmischung, Streikrecht als Grundrecht",
      "Steuersystem: Direkte vs. indirekte Steuern, Steuerprogression (starke Schultern tragen mehr als schwache)",
      "Sondervermögen & Schuldenbremse: Kredite für strategische Zukunftsinvestitionen (z. B. Bundeswehr, Infrastruktur) außerhalb des Kernhaushalts"
    ],
    "exercises": [
      {
        "id": "6592",
        "title": "Die Debatte um Bürgergeld und Sozialreformen",
        "folder": "die-debatte-um-burgergeld-und-sozialreformen-6592"
      },
      {
        "id": "3540",
        "title": "Gewerkschaften in Deutschland",
        "folder": "gewerkschaften-in-deutschland-3540"
      },
      {
        "id": "2958",
        "title": "Die Gewerkschaft Solidarność",
        "folder": "die-gewerkschaft-solidarnosc-2958"
      },
      {
        "id": "3520",
        "title": "Die verschiednen Steuern in Deutschland",
        "folder": "die-verschiednen-steuern-in-deutschland-3520"
      },
      {
        "id": "4659",
        "title": "Was ist ein Sondervermögen",
        "folder": "was-ist-ein-sondervermogen-4659"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=sozialstaat+steuern&t=3752"
  },
  "gesellschaftliche-konflikte-widerstand-und-zeitkritik": {
    "slug": "gesellschaftliche-konflikte-widerstand-und-zeitkritik",
    "title": "Konflikte, Widerstand & Zeitkritik",
    "category": "Gesellschaft, Medien & Partizipation",
    "shortDesc": "Recht vs. Gewissen bei Sophokles (Antigone), Ausgrenzung bei Christa Wolf (Medea) und moderne Zivilisationskritik.",
    "longDesc": "Große literarische und philosophische Werke spiegeln grundlegende ethisch-politische Konflikte der Menschheit: Wann steht das Gewissen über dem staatlichen Gesetz? Wie geht eine Gesellschaft mit Fremden und Andersdenkenden um?",
    "keyPoints": [
      "Antigone (Sophokles): Der zeitlose Konflikt zwischen staatlicher Macht/Gesetz (Kreon) und universellem Gewissen/Götterrecht (Antigone)",
      "Medea (Christa Wolf): Kritik an gesellschaftlicher Ausgrenzung, Patriarchat, Fremdenfeindlichkeit und Machtkalkül",
      "Botho Strauß: Scharfsinnige Diagnose der postmodernen Konsumgesellschaft, Oberflächlichkeit und Sinnsuche"
    ],
    "exercises": [
      {
        "id": "6154",
        "title": "Antigone von Sophokles - historischer Kontext",
        "folder": "antigone-von-sophokles-historischer-kontext-6154"
      },
      {
        "id": "6262",
        "title": "Medea von Christa Wolf - Bezug zur Gegenwart",
        "folder": "medea-von-christa-wolf-bezug-zur-gegenwart-6262"
      },
      {
        "id": "4600",
        "title": "Botho Strauß",
        "folder": "botho-straues-4600"
      },
      {
        "id": "antigone-gewissen",
        "title": "Antigone - Wenn Gesetz gegen Gewissen steht",
        "folder": "antigone-wenn-gesetz-gegen-gewissen-steht"
      },
      {
        "id": "3600",
        "title": "Zivilcourage und gesellschaftliches Handeln",
        "folder": "zivilcourage-3600"
      },
      {
        "id": "4472",
        "title": "Widerstand gegen Ungerechtigkeit",
        "folder": "widerstand-gegen-ungerechtigkeit-4472"
      },
      {
        "id": "2939",
        "title": "Die Allgemeine Erklärung der Menschenrechte",
        "folder": "die-allgemeine-erklarung-der-menschenrechte-2939"
      },
      {
        "id": "2750",
        "title": "Der Konflikt zwischen Freiheit und Sicherheit",
        "folder": "der-konflikt-zwischen-freiheit-und-sicherheit-2750"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ethik+widerstand&t=3752"
  }
};
