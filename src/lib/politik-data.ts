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

export const politikCategories = [
  "Demokratie & Verfassung",
  "Wahlen & Beteiligung",
  "Staatsorgane & Institutionen",
  "Europa & Gesellschaft"
];

export const politikTopics: Record<string, PolitikTopic> = {
  "demokratie-und-rechtsstaat": {
    slug: "demokratie-und-rechtsstaat",
    title: "Demokratie, Rechtsstaat & Grundgesetz",
    category: "Demokratie & Verfassung",
    shortDesc: "Grundwerte der freiheitlich-demokratischen Grundordnung, Grundrechte (Art. 1–19 GG) und Gewaltenteilung.",
    longDesc: "Die Bundesrepublik Deutschland ist ein demokratischer, sozialer Bundesstaat und Rechtsstaat. Artikel 1 des Grundgesetzes stellt die Würde des Menschen an oberste Stelle. Die Gewaltenteilung sichert die Freiheit der Bürger durch die Trennung von Legislative, Exekutive und Judikative.",
    keyPoints: [
      "Artikel 1 GG: 'Die Würde des Menschen ist unantastbar. Sie zu achten und zu schützen ist Verpflichtung aller staatlichen Gewalt.'",
      "Strukturprinzipien nach Art. 20 GG: Demokratie, Bundesstaat, Rechtsstaat, Sozialstaat, Republik",
      "Gewaltenteilung: Legislative (Gesetzgebung/Parlamente), Exekutive (Ausführende Gewalt/Polizei & Verwaltung), Judikative (Rechtsprechung/Gerichte)",
      "Wehrhafte Demokratie: Die Ewigkeitsklausel (Art. 79 Abs. 3 GG) schützt Kernprinzipien vor jeder Abschaffung",
      "Bürgerrechte vs. Menschenrechte: Menschenrechte gelten für alle (z.B. Leben, Freiheit), Bürgerrechte nur für Staatsangehörige (z.B. Wahlrecht)"
    ],
    exercises: [
      { id: "955", title: "Das Grundgesetz", folder: "das-grundgesetz-955" },
      { id: "3496", title: "Demokratie & Grundwerte", folder: "demokratie-3496" },
      { id: "3504", title: "Der Rechtsstaat", folder: "der-rechtsstaat-3504" },
      { id: "3493", title: "Das Sozialstaatsprinzip", folder: "das-sozialstaatsprinzip-3493" },
      { id: "5236", title: "Ursprünge der Demokratie", folder: "athen-und-die-attische-demokratie-in-griechenland-5236" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=demokratie+grundgesetz&t=3752"
  },
  "wahlsystem-und-bundestagswahl": {
    slug: "wahlsystem-und-bundestagswahl",
    title: "Das Wahlsystem & Bundestagswahlen",
    category: "Wahlen & Beteiligung",
    shortDesc: "Wahlgrundsätze, Erst- und Zweitstimme, 5%-Hürde und personalisiertes Verhältniswahlrecht.",
    longDesc: "Wahlen sind das Herzstück der repräsentativen Demokratie. Bürger wählen Abgeordnete, die ihre Interessen im Parlament vertreten. In Deutschland kombiniert die Bundestagswahl die Mehrheitswahl (Erststimme für den Wahlkreiskandidaten) mit der Verhältniswahl (Zweitstimme für die Landesliste der Partei).",
    keyPoints: [
      "5 Wahlgrundsätze (Art. 38 GG): Allgemein, unmittelbar, frei, gleich und geheim",
      "Erststimme: Wählt eine Direktkandidatin bzw. einen Direktkandidaten im Wahlkreis nach relativer Mehrheit",
      "Zweitstimme: Wählt die Landesliste einer Partei – sie entscheidet maßgeblich über die Sitzverteilung im Bundestag",
      "5%-Sperrklausel: Parteien müssen mindestens 5 % der Zweitstimmen oder drei Direktmandate erreichen, um ins Parlament einzuziehen",
      "Aufgaben des Bundestags: Gesetzgebung, Kanzlerwahl, Kontrolle der Regierung, Budgetrecht"
    ],
    exercises: [
      { id: "3495", title: "Das Wahlsystem in Deutschland", folder: "das-wahlsystem-in-deutschland-3495" },
      { id: "3289", title: "Die Bundestagswahl & Parteien", folder: "die-bundestagswahl-2025-3289" },
      { id: "4493", title: "Kanzlerwahl in Deutschland", folder: "kanzlerwahl-in-deutschland-so-wahlt-deutschland-seinen-chef-4493" },
      { id: "3003", title: "Geschichte des Frauenwahlrechts", folder: "geschichte-des-frauenwahlrechts-3003" },
      { id: "3515", title: "Demokratische Mitbestimmung", folder: "die-klassensprecherwahl-3515" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=wahlen+bundestag&t=3752"
  },
  "staatsorgane-und-foederalismus": {
    slug: "staatsorgane-und-foederalismus",
    title: "Staatsorgane & Föderalismus",
    category: "Staatsorgane & Institutionen",
    shortDesc: "Bundestag, Bundesrat, Bundesregierung, Bundespräsident und Bundesverfassungsgericht.",
    longDesc: "Die staatliche Macht in Deutschland verteilt sich auf fünf ständige Verfassungsorgane. Durch den Föderalismus teilen sich der Bund und die 16 Bundesländer die staatlichen Aufgaben (z.B. Schul- und Bildungspolitik, Polizei).",
    keyPoints: [
      "Deutscher Bundestag: Vom Volk gewähltes Parlament zur Gesetzgebung und Regierungskontrolle",
      "Bundesrat: Vertretung der 16 Landesregierungen bei Gesetzen, die die Länder betreffen (Zustimmungsgesetze)",
      "Bundesregierung: Bundeskanzler (Richtlinienkompetenz) und Bundesminister (Ressortprinzip)",
      "Bundespräsident: Staatsoberhaupt mit repräsentativen Aufgaben und Prüfung von Gesetzen auf Verfassungsmäßigkeit",
      "Bundesverfassungsgericht in Karlsruhe: 'Hüter der Verfassung', entscheidet über Streitigkeiten zwischen Organen und Verfassungsbeschwerden"
    ],
    exercises: [
      { id: "3493", title: "Das Sozialstaatsprinzip", folder: "das-sozialstaatsprinzip-3493" },
      { id: "3504", title: "Gewaltenteilung & Institutionen", folder: "der-rechtsstaat-3504" },
      { id: "955", title: "Verfassungsordnung", folder: "das-grundgesetz-955" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=staatsorgane&t=3752"
  },
  "europaeische-union-und-globale-politik": {
    slug: "europaeische-union-und-globale-politik",
    title: "Die Europäische Union & Internationale Politik",
    category: "Europa & Gesellschaft",
    shortDesc: "EU-Institutionen, 4 Freiheiten des Binnenmarktes, europäische Werte und globale Kooperation.",
    longDesc: "Die Europäische Union ist ein einzigartiger Staatenverbund von derzeit 27 europäischen Ländern. Sie sichert Frieden, wirtschaftlichen Wohlstand und Zusammenarbeit in Bildung, Forschung und Umweltschutz.",
    keyPoints: [
      "Europäisches Parlament: Direkt von den EU-Bürgern gewählt (Sitz in Straßburg/Brüssel)",
      "Europäische Kommission: 'Regierung' der EU mit Initiativrecht für Gesetzesvorschläge",
      "Rat der Europäischen Union (Ministerrat): Vertretung der Fachminister der Mitgliedstaaten",
      "4 Grundfreiheiten des Binnenmarktes: Freier Verkehr von Waren, Personen, Dienstleistungen und Kapital",
      "Schengener Abkommen & Eurozone: Reisen ohne Grenzkontrollen und gemeinsame Währung"
    ],
    exercises: [
      { id: "3477", title: "Arbeit des Europäischen Parlaments", folder: "arbeit-des-europaischen-parlaments-3477" },
      { id: "3500", title: "Der europäische Binnenmarkt", folder: "der-europaische-binnenmarkt-3500" },
      { id: "3509", title: "Die Europäische Kommission", folder: "die-europaische-kommission-3509" },
      { id: "3510", title: "Die Europäische Zentralbank", folder: "die-europaische-zentralbank-3510" },
      { id: "305", title: "Staaten Europas", folder: "staaten-europas-305" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=europaeische+union&t=3752"
  }
};
