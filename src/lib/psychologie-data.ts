export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface PsychologieTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const psychologieCategories: string[] = [
  "Grundlagen, Gehirn & Wahrnehmung",
  "Psychoanalyse, Persönlichkeit & Entwicklung",
  "Sozialpsychologie, Kommunikation & Wirtschaft",
  "Klinische Psychologie & Mentale Gesundheit"
];

export const psychologieTopics: Record<string, PsychologieTopic> = {
  "grundlagen-der-psychologie-und-forschung": {
    "slug": "grundlagen-der-psychologie-und-forschung",
    "title": "Einführung in die Psychologie & Forschungsmethoden",
    "category": "Grundlagen, Gehirn & Wahrnehmung",
    "shortDesc": "Gegenstand der Psychologie, quantitative vs. qualitative Forschung, Experimente, Testverfahren (Gütekriterien) und Forschungsethik.",
    "longDesc": "Die Psychologie ist die empirische Wissenschaft vom Erleben und Verhalten des Menschen. Sie untersucht, wie Wahrnehmung, Denken, Fühlen und Handeln entstehen, sich entwickeln und durch Umwelt und Biologie beeinflusst werden.",
    "keyPoints": [
      "Ziele der Psychologie: 1. Beschreiben ➔ 2. Erklären ➔ 3. Vorhersagen ➔ 4. Verändern/Intervenieren",
      "Wichtige Hauptströmungen (Paradigmen): Tiefenpsychologie (Freud), Behaviorismus (Watson, Skinner), Kognitivismus (Piaget), Humanistische Psychologie (Rogers, Maslow), Biopsychologie",
      "Forschungsmethoden: Experiment (Kausalitätsprüfung mit UV und AV), Beobachtung, Befragung/Fragebogen und Fallstudie",
      "Klassische Gütekriterien: Objektivität (Unabhängigkeit vom Testleiter), Reliabilität (Zuverlässigkeit/Messgenauigkeit) und Validität (Gültigkeit/misst, was es messen soll)",
      "Forschungsethik: Informierte Einwilligung, Schutz vor physischem/psychischem Schaden und Anonymität der Probanden"
    ],
    "exercises": [
      {
        "id": "grundlagen-der-psychologie-5818",
        "title": "Grundlagen der Psychologie",
        "folder": "grundlagen-der-psychologie-5818"
      },
      {
        "id": "grundlagen-der-psychologie-2-5923",
        "title": "Grundlagen der Psychologie (Teil 2)",
        "folder": "grundlagen-der-psychologie-2-5923"
      },
      {
        "id": "grundlagen-der-forschungsmethoden-in-der-psychologie-2719",
        "title": "Forschungsmethoden in der Psychologie",
        "folder": "grundlagen-der-forschungsmethoden-in-der-psychologie-2719"
      },
      {
        "id": "testverfahren-in-psychologie-5898",
        "title": "Psychologische Testverfahren und Gütekriterien",
        "folder": "testverfahren-in-psychologie-5898"
      },
      {
        "id": "grundlagen-der-psychometrie-5924",
        "title": "Grundlagen der Psychometrie",
        "folder": "grundlagen-der-psychometrie-5924"
      },
      {
        "id": "psychologische-forschungsethik-2744",
        "title": "Psychologische Forschungsethik",
        "folder": "psychologische-forschungsethik-2744"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Psychologie+Grundlagen+Forschungsmethoden&t=3752"
  },
  "biopsychologie-und-neuropsychologie": {
    "slug": "biopsychologie-und-neuropsychologie",
    "title": "Biopsychologie, Neuropsychologie & Psychosomatik",
    "category": "Grundlagen, Gehirn & Wahrnehmung",
    "shortDesc": "Gehirnaufbau, Neurotransmitter (Dopamin, Serotonin), vegetatives Nervensystem, Psychosomatik und Schmerzverarbeitung.",
    "longDesc": "Die Biopsychologie erforscht die biologischen Grundlagen unseres Erlebens und Verhaltens. Sie untersucht neuronale Netzwerke im Gehirn, Hormone, Neurotransmitter und das komplexe Wechselspiel von Körper und Seele.",
    "keyPoints": [
      "Gehirnstrukturen: Großhirnrinde (Kortex für Denken/Planen), Limbisches System mit Amygdala (Angst, Emotionen) und Hippocampus (Gedächtniskonsolidierung)",
      "Neurotransmitter: Dopamin ('Belohnungssystem', Antrieb), Serotonin (Stimmungsregulation, Schlaf), Noradrenalin (Stressreaktion), GABA (wichtigster hemmender Botenstoff)",
      "Vegetatives Nervensystem: Sympathikus (Kampf-oder-Flucht: erhöhter Puls, Adrenalin) vs. Parasympathikus (Ruhe, Regeneration, Verdauung)",
      "Psychosomatik: Körperliche Beschwerden (z. B. Magenprobleme, chronische Schmerzen), die maßgeblich durch seelische Belastungen ausgelöst oder verstärkt werden"
    ],
    "exercises": [
      {
        "id": "grundlagen-der-biopsychologie-5807",
        "title": "Grundlagen der Biopsychologie",
        "folder": "grundlagen-der-biopsychologie-5807"
      },
      {
        "id": "grundlagen-der-neuropsychologie-5815",
        "title": "Grundlagen der Neuropsychologie",
        "folder": "grundlagen-der-neuropsychologie-5815"
      },
      {
        "id": "grundlagen-der-psychosomatik-5925",
        "title": "Grundlagen der Psychosomatik",
        "folder": "grundlagen-der-psychosomatik-5925"
      },
      {
        "id": "einfuhrung-in-schmerzpsychologie-5773",
        "title": "Einführung in die Schmerzpsychologie",
        "folder": "einfuhrung-in-schmerzpsychologie-5773"
      },
      {
        "id": "einfuhrung-in-evolutionspsychologie-5760",
        "title": "Einführung in die Evolutionspsychologie",
        "folder": "einfuhrung-in-evolutionspsychologie-5760"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Biopsychologie+Neuropsychologie&t=3752"
  },
  "kognitive-psychologie-lernen-und-gedaechtnis": {
    "slug": "kognitive-psychologie-lernen-und-gedaechtnis",
    "title": "Kognitive Psychologie, Lernen & Wahrnehmung",
    "category": "Grundlagen, Gehirn & Wahrnehmung",
    "shortDesc": "Klassische & operante Konditionierung (Pawlow, Skinner), Modelllernen (Bandura), Mehrspeichermodell des Gedächtnisses und optische Täuschungen.",
    "longDesc": "Wie verarbeitet das menschliche Gehirn Informationen? Die Kognitionspsychologie und Lernpsychologie erforschen Wahrnehmungsprozesse, Aufmerksamkeit, Gedächtnisspeicherung, Problemlösung und logisches Denken.",
    "keyPoints": [
      "Klassische Konditionierung (Pawlow): Verknüpfung eines unkonditionierten Reizes (Futter) mit einem neutralen Reiz (Glockenton) führt zur konditionierten Reaktion",
      "Operante Konditionierung (Skinner): Lernen durch Konsequenzen – Verstärkung (Belohnung erhöht Auftretenswahrscheinlichkeit) vs. Bestrafung (senkt sie)",
      "Modelllernen / Beobachtungslernen (Bandura): Lernen durch Nachahmung von Vorbildern (Aufmerksamkeit ➔ Behalten ➔ Reproduktion ➔ Motivation)",
      "Mehrspeichermodell des Gedächtnisses (Atkinson & Shiffrin): Sensorisches Register (Ultrakurzzeit) ➔ Arbeitsgedächtnis (Kurzzeit, 7±2 Informationseinheiten) ➔ Langzeitgedächtnis (deklarativ/episodisch vs. prozedural)",
      "Wahrnehmungstäuschungen: Das Gehirn konstruiert Wirklichkeit aktiv auf Basis von Erwartungen, Gestaltgesetzen und Vorerfahrungen"
    ],
    "exercises": [
      {
        "id": "einfuhrung-in-kognitive-psychologie-5766",
        "title": "Einführung in die kognitive Psychologie",
        "folder": "einfuhrung-in-kognitive-psychologie-5766"
      },
      {
        "id": "einfuhrung-in-lernpsychologie-5768",
        "title": "Einführung in die Lernpsychologie",
        "folder": "einfuhrung-in-lernpsychologie-5768"
      },
      {
        "id": "die-psychologie-der-tauschung-und-des-betrugs-2706",
        "title": "Psychologie der Täuschung und Wahrnehmung",
        "folder": "die-psychologie-der-tauschung-und-des-betrugs-2706"
      },
      {
        "id": "grundlagen-padagogischer-psychologie-5937",
        "title": "Grundlagen pädagogischer Psychologie",
        "folder": "grundlagen-padagogischer-psychologie-5937"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kognitive+Psychologie+Lernen+Gedaechtnis&t=3752"
  },
  "sigmund-freud-und-die-psychoanalyse": {
    "slug": "sigmund-freud-und-die-psychoanalyse",
    "title": "Sigmund Freud, Psychoanalyse & Unbewusstes",
    "category": "Psychoanalyse, Persönlichkeit & Entwicklung",
    "shortDesc": "Instanzenmodell (Es, Ich, Über-Ich), Eisbergmodell des Bewusstseins, Abwehrmechanismen, Phasenlehre und Traumdeutung.",
    "longDesc": "Sigmund Freud (1856–1939) begründete die Tiefenpsychologie und Psychoanalyse. Nach Freud wird menschliches Handeln maßgeblich von unbewussten Trieben, verdrängten Konflikten und Kindheitserfahrungen gesteuert.",
    "keyPoints": [
      "Eisbergmodell: Nur ein kleiner Teil (ca. 10–20%) unserer Psyche ist bewusst; der weitaus größere Teil (Vorbewusstes und Unbewusstes) liegt verborgen unter der Oberfläche",
      "Strukturmodell der Psyche (3 Instanzen): 1. Das 'Es' (angeborene Triebe, Lustprinzip) ➔ 2. Das 'Über-Ich' (Moral, gesellschaftliche Werte, Gewissen) ➔ 3. Das 'Ich' (Vermittler zwischen Es, Über-Ich und Realitätsprinzip)",
      "Abwehrmechanismen: Strategien des Ichs zum Schutz vor Angst (z. B. Verdrängung, Projektion, Rationalisierung, Sublimierung, Reaktionsbildung)",
      "Traumdeutung: 'Der Traum ist der Königsweg zum Unbewussten' – Unterscheidung zwischen manifestem (erinnertem) und latentem (verborgenem) Trauminhalt",
      "Psychoanalytische Behandlung: Freie Assoziation, Deutung von Widerständen und Übertragung auf der Behandlungscouch"
    ],
    "exercises": [
      {
        "id": "sigmund-freud-4254",
        "title": "Sigmund Freud – Leben und Werk",
        "folder": "sigmund-freud-4254"
      },
      {
        "id": "grundlagen-der-psychoanalyse-5817",
        "title": "Grundlagen der Psychoanalyse",
        "folder": "grundlagen-der-psychoanalyse-5817"
      },
      {
        "id": "psychoanalytische-therapie-2738",
        "title": "Psychoanalytische Therapie",
        "folder": "psychoanalytische-therapie-2738"
      },
      {
        "id": "psychologie-der-traumdeutung-2740",
        "title": "Psychologie der Traumdeutung",
        "folder": "psychologie-der-traumdeutung-2740"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sigmund+Freud+Psychoanalyse&t=3752"
  },
  "persoenlichkeitspsychologie-und-humanismus": {
    "slug": "persoenlichkeitspsychologie-und-humanismus",
    "title": "Persönlichkeitspsychologie & humanistische Ansätze",
    "category": "Psychoanalyse, Persönlichkeit & Entwicklung",
    "shortDesc": "Big Five Persönlichkeitsmerkmale (OCEAN), Humanistische Psychologie (Carl Rogers, Maslow), Selbstkonzept und Geschlechterforschung.",
    "longDesc": "Was macht die Einzigartigkeit eines Individuums aus? Die Persönlichkeitspsychologie beschreibt zeitlich stabile Verhaltens- und Erlebensmuster von Menschen.",
    "keyPoints": [
      "Big Five Modell (OCEAN): 1. Openness (Offenheit für Erfahrungen) ➔ 2. Conscientiousness (Gewissenhaftigkeit) ➔ 3. Extraversion (Geselligkeit vs. Introversion) ➔ 4. Agreeableness (Verträglichkeit) ➔ 5. Neuroticism (Emotionale Labilität)",
      "Humanistische Psychologie (Rogers, Maslow): Der Mensch besitzt eine angeborene Tendenz zur Selbstverwirklichung und Entfaltung seines Potenzials",
      "Klientenzentrierte Gesprächsführung (Carl Rogers): 3 therapeutische Grundhaltungen: 1. Bedingungslose Wertschätzung, 2. Empathie (einfühlendes Verstehen), 3. Kongruenz (Echtheit)",
      "Geschlechter- & Diversitätspsychologie: Anlage-Umwelt-Debatte bei Geschlechtsunterschieden und geschlechtsspezifischer Sozialisation"
    ],
    "exercises": [
      {
        "id": "einfuhrung-in-personlichkeitspsychologie-5770",
        "title": "Einführung in die Persönlichkeitspsychologie",
        "folder": "einfuhrung-in-personlichkeitspsychologie-5770"
      },
      {
        "id": "grundlagen-humanistischer-psychologie-5934",
        "title": "Grundlagen humanistischer Psychologie",
        "folder": "grundlagen-humanistischer-psychologie-5934"
      },
      {
        "id": "geschlechtsunterschiede-in-der-psychologie-2717",
        "title": "Geschlechtsunterschiede in der Psychologie",
        "folder": "geschlechtsunterschiede-in-der-psychologie-2717"
      },
      {
        "id": "feministische-psychologie-2714",
        "title": "Feministische Psychologieansätze",
        "folder": "feministische-psychologie-2714"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Persoenlichkeitspsychologie+Big+Five&t=3752"
  },
  "entwicklungspsychologie-und-lebensspanne": {
    "slug": "entwicklungspsychologie-und-lebensspanne",
    "title": "Entwicklungspsychologie über die Lebensspanne",
    "category": "Psychoanalyse, Persönlichkeit & Entwicklung",
    "shortDesc": "Kognitive Entwicklung nach Jean Piaget, Bindungstheorie (Bowlby/Ainsworth), Identitätskrisen nach Erikson und Gerontopsychologie.",
    "longDesc": "Die Entwicklungspsychologie erforscht die körperlichen, geistigen, emotionalen und sozialen Veränderungen des Menschen von der Empfängnis über Kindheit und Jugend bis ins hohe Alter.",
    "keyPoints": [
      "Stufenmodell nach Jean Piaget: 1. Sensomotorische Phase (0–2 J.) ➔ 2. Präoperationale Phase (2–7 J., Egozentrismus) ➔ 3. Konkret-operationale Phase (7–11 J., Invarianz) ➔ 4. Formal-operationale Phase (ab 12 J., abstraktes Denken)",
      "Bindungstheorie (Bowlby, Ainsworth): Sicher gebundene vs. unsicher-vermeidende, unsicher-ambivalente und desorganisierte Bindungsmuster im Fremde-Situations-Test",
      "Stufenmodell psychosozialer Entwicklung (Erik H. Erikson): 8 Lebenskrisen (z. B. Urvertrauen vs. Urmisstrauen, Identität vs. Rollendiffusion im Jugendalter, Integrität vs. Verzweiflung im Alter)",
      "Gerontopsychologie: Kognitive Veränderungen im Alter, Erhalt der Lebensqualität und Bewältigung von Abbauprozessen (SOC-Modell: Selektion, Optimierung, Kompensation)"
    ],
    "exercises": [
      {
        "id": "einfuhrung-in-entwicklungspsychologie-5759",
        "title": "Einführung in die Entwicklungspsychologie",
        "folder": "einfuhrung-in-entwicklungspsychologie-5759"
      },
      {
        "id": "grundlagen-der-alterungspsychologie-5806",
        "title": "Grundlagen der Alterungspsychologie",
        "folder": "grundlagen-der-alterungspsychologie-5806"
      },
      {
        "id": "einfuhrung-in-familienpsychologie-5761",
        "title": "Einführung in die Familienpsychologie",
        "folder": "einfuhrung-in-familienpsychologie-5761"
      },
      {
        "id": "einfuhrung-in-generationenpsychologie-5762",
        "title": "Einführung in die Generationenpsychologie",
        "folder": "einfuhrung-in-generationenpsychologie-5762"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Entwicklungspsychologie+Piaget+Erikson&t=3752"
  },
  "sozialpsychologie-und-gruppenverhalten": {
    "slug": "sozialpsychologie-und-gruppenverhalten",
    "title": "Sozialpsychologie, Konformität & Gruppen",
    "category": "Sozialpsychologie, Kommunikation & Wirtschaft",
    "shortDesc": "Gehorsamsexperiment (Milgram), Stanford Prison Experiment (Zimbardo), Konformitätsdruck (Asch), Bystander-Effekt und Vorurteile.",
    "longDesc": "Die Sozialpsychologie erforscht, wie Denken, Fühlen und Verhalten von Individuen durch die tatsächliche oder vorgestellte Anwesenheit anderer Menschen beeinflusst werden.",
    "keyPoints": [
      "Milgram-Experiment: Erschütternde Erkenntnisse über die Bereitschaft gewöhnlicher Menschen, autoritären Befehlen zu gehorchen und Mitmenschen Schmerzen zuzufügen",
      "Stanford Prison Experiment (Philip Zimbardo): Schnelle Übernahme zugewiesener sozialer Rollen (Wärter vs. Gefangene) führte zu Deindividuation und Machtmissbrauch",
      "Konformitätsexperiment nach Solomon Asch: Hohe Neigung von Individuen, sich dem Urteil einer Gruppenmehrheit anzupassen, selbst wenn dieses offensichtlich falsch ist",
      "Bystander-Effekt (Zuschauer-Effekt): Je mehr Zeugen bei einem Notfall anwesend sind, desto geringer ist die Wahrscheinlichkeit, dass ein Einzelner hilft (Verantwortungsdiffusion)"
    ],
    "exercises": [
      {
        "id": "philip-zimbardo-4167",
        "title": "Philip Zimbardo und das Stanford Prison Experiment",
        "folder": "philip-zimbardo-4167"
      },
      {
        "id": "einfuhrung-in-sozialpsychologie-5775",
        "title": "Einführung in die Sozialpsychologie",
        "folder": "einfuhrung-in-sozialpsychologie-5775"
      },
      {
        "id": "einfuhrung-in-gruppenpsychologie-5764",
        "title": "Einführung in die Gruppenpsychologie",
        "folder": "einfuhrung-in-gruppenpsychologie-5764"
      },
      {
        "id": "einfuhrung-in-interkulturelle-psychologie-5765",
        "title": "Interkulturelle Psychologie",
        "folder": "einfuhrung-in-interkulturelle-psychologie-5765"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sozialpsychologie+Milgram+Zimbardo&t=3752"
  },
  "kommunikationspsychologie-und-arbeitswelt": {
    "slug": "kommunikationspsychologie-und-arbeitswelt",
    "title": "Kommunikations-, Arbeits- & Werbepsychologie",
    "category": "Sozialpsychologie, Kommunikation & Wirtschaft",
    "shortDesc": "Vier-Ohren-Modell (Schulz von Thun), 5 Axiome nach Watzlawick, Körpersprache, Organisationspsychologie und Werbestrategien.",
    "longDesc": "Erfolgreiche Kommunikation und Teamarbeit sind der Schlüssel zum beruflichen und privaten Miteinander. Kommunikationsmodelle und Wirtschaftspsychologie analysieren Interaktionsmuster und Kaufentscheidungen.",
    "keyPoints": [
      "Vier-Ohren-Modell (Schulz von Thun): Jede Nachricht enthält 4 Botschaften: 1. Sachinhalt, 2. Selbstkundgabe, 3. Beziehungshinweis, 4. Appell",
      "5 Axiome der Kommunikation (Paul Watzlawick): 1. 'Man kann nicht nicht kommunizieren', 2. Inhalts- und Beziehungsaspekt, 3. Interpunktion von Kommunikationsabläufen, 4. Digitale und analoge Kommunikation, 5. Symmetrische vs. komplementäre Interaktion",
      "Körpersprache & Nonverbale Signale: Mimik, Gestik, Blickkontakt, Körperhaltung und paraverbale Signale (Stimme, Tonfall)",
      "Werbepsychologie: Nudging, Priming, Verknappung, Social Proof und emotionale Konditionierung zur Beeinflussung von Konsumentscheidungen"
    ],
    "exercises": [
      {
        "id": "einfuhrung-in-kommunikationspsychologie-5767",
        "title": "Einführung in die Kommunikationspsychologie",
        "folder": "einfuhrung-in-kommunikationspsychologie-5767"
      },
      {
        "id": "psychologische-aspekte-der-korpersprache-in-der-politik-2742",
        "title": "Psychologie der Körpersprache",
        "folder": "psychologische-aspekte-der-korpersprache-in-der-politik-2742"
      },
      {
        "id": "einfuhrung-in-arbeits-und-organisationspsychologie-5756",
        "title": "Arbeits- und Organisationspsychologie",
        "folder": "einfuhrung-in-arbeits-und-organisationspsychologie-5756"
      },
      {
        "id": "psychologie-der-arbeit-und-organisation-2739",
        "title": "Psychologie der Arbeit und Organisation",
        "folder": "psychologie-der-arbeit-und-organisation-2739"
      },
      {
        "id": "markenpsychologie-2726",
        "title": "Marken- und Werbepsychologie",
        "folder": "markenpsychologie-2726"
      },
      {
        "id": "werbung-und-ihre-psychologischen-strategien-2619",
        "title": "Werbung und psychologische Strategien",
        "folder": "werbung-und-ihre-psychologischen-strategien-2619"
      },
      {
        "id": "psychologie-des-risikoverhaltens-2741",
        "title": "Psychologie des Risikoverhaltens",
        "folder": "psychologie-des-risikoverhaltens-2741"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kommunikationspsychologie+Schulz+von+Thun&t=3752"
  },
  "klinische-psychologie-und-psychische-stoerungen": {
    "slug": "klinische-psychologie-und-psychische-stoerungen",
    "title": "Klinische Psychologie, Psychische Störungen & Psychosen",
    "category": "Klinische Psychologie & Mentale Gesundheit",
    "shortDesc": "Diagnostik (ICD-11 / DSM-5), Depressionen, Angststörungen, Schizophrenie, Traumata, Psychotherapie und Forensik.",
    "longDesc": "Die Klinische Psychologie beschäftigt sich mit der Entstehung, Diagnostik und Behandlung von psychischen Störungen und Verhaltensauffälligkeiten. Sie entwickelt evidenzbasierte Therapiemethoden zur Linderung seelischen Leids.",
    "keyPoints": [
      "Diagnoseklassifikationen: ICD-11 (WHO) und DSM-5 (APA) definieren standardisierte Kriterien für psychische Krankheitsbilder",
      "Depression & Affektive Störungen: Symptome wie Antriebslosigkeit, Niedergeschlagenheit, Schlafstörungen, Schuldgefühle; bio-psycho-soziales Erklärungsmodell",
      "Angststörungen & Phobien: Generalisierte Angststörung, Panikstörung, Agoraphobie, soziale Phobie; Entstehung durch Fehlkonditionierung und kognitive Verzerrungen",
      "Schizophrenie & Psychosen: Realitätsverlust, Wahnvorstellungen, akustische Halluzinationen und Denkstörungen; Behandlung durch Kombination von Psychotherapie und Psychopharmaka",
      "Psychotherapieverfahren: Kognitive Verhaltenstherapie (KVT), Tiefenpsychologisch fundierte Psychotherapie, Systemische Therapie"
    ],
    "exercises": [
      {
        "id": "grundlagen-klinischer-psychologie-5935",
        "title": "Grundlagen der klinischen Psychologie",
        "folder": "grundlagen-klinischer-psychologie-5935"
      },
      {
        "id": "psychische-storungen-berblick-2737",
        "title": "Psychische Störungen im Überblick",
        "folder": "psychische-storungen-berblick-2737"
      },
      {
        "id": "schizophrenie-und-psychosen-2746",
        "title": "Schizophrenie und Psychosen",
        "folder": "schizophrenie-und-psychosen-2746"
      },
      {
        "id": "notfallpsychologie-und-traumabewaltigung-2732",
        "title": "Notfallpsychologie und Traumabewältigung",
        "folder": "notfallpsychologie-und-traumabewaltigung-2732"
      },
      {
        "id": "grundlagen-forensischer-psychologie-5933",
        "title": "Grundlagen forensischer Psychologie",
        "folder": "grundlagen-forensischer-psychologie-5933"
      },
      {
        "id": "opfer-und-tater-psychologische-aspekte-2733",
        "title": "Opfer- und Täterpsychologie",
        "folder": "opfer-und-tater-psychologische-aspekte-2733"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Klinische+Psychologie+Stoerungen+Therapie&t=3752"
  },
  "positive-psychologie-gesundheit-und-digitalisierung": {
    "slug": "positive-psychologie-gesundheit-und-digitalisierung",
    "title": "Positive Psychologie, Resilienz & Cyberpsychologie",
    "category": "Klinische Psychologie & Mentale Gesundheit",
    "shortDesc": "Glücksforschung, Resilienzförderung, Stressbewältigung, Achtsamkeit, Cyberpsychologie, Social Media und psychische Gesundheit.",
    "longDesc": "Während die klassische Psychologie oft Defizite untersucht, konzentriert sich die Positive Psychologie (Martin Seligman) auf die Stärken, Ressourcen und das Wohlbefinden des Menschen. Zudem erforscht die Cyberpsychologie die Auswirkungen der Digitalisierung auf unsere Psyche.",
    "keyPoints": [
      "Positive Psychologie & PERMA-Modell (Seligman): 1. Positive Emotions ➔ 2. Engagement (Flow-Erleben) ➔ 3. Relationships (tragfähige Beziehungen) ➔ 4. Meaning (Sinnhaftigkeit) ➔ 5. Accomplishment (Ziele erreichen)",
      "Resilienz (Psychische Widerstandskraft): Fähigkeit, Krisen und schwere Belastungen durch Rückgriff auf persönliche Ressourcen unbeschadet zu meistern",
      "Stress & Stressbewältigung (Lazarus-Modell): Primäre Bewertung (Bedrohung vs. Herausforderung) ➔ Sekundäre Bewertung (Bewältigungsressourcen vorhanden?) ➔ Coping-Strategien (problemorientiert vs. emotionsorientiert)",
      "Cyberpsychologie: Einfluss von Social Media (Vergleichsdruck, FOMO, Cybermobbing), Smartphone-Nutzung, Bildschirmzeiten und Gamification auf das seelische Wohlbefinden"
    ],
    "exercises": [
      {
        "id": "grundlagen-positiver-psychologie-5938",
        "title": "Grundlagen der positiven Psychologie",
        "folder": "grundlagen-positiver-psychologie-5938"
      },
      {
        "id": "freude-teilen-die-bedeutung-von-positiven-emotionen-im-leben-3139",
        "title": "Bedeutung positiver Emotionen",
        "folder": "freude-teilen-die-bedeutung-von-positiven-emotionen-im-leben-3139"
      },
      {
        "id": "die-beziehung-zwischen-zeitmanagement-und-psychischem-wohlbefinden-2705",
        "title": "Zeitmanagement und psychisches Wohlbefinden",
        "folder": "die-beziehung-zwischen-zeitmanagement-und-psychischem-wohlbefinden-2705"
      },
      {
        "id": "einfuhrung-in-gesundheitspsychologie-5763",
        "title": "Einführung in die Gesundheitspsychologie",
        "folder": "einfuhrung-in-gesundheitspsychologie-5763"
      },
      {
        "id": "digitalisierung-und-psyche-5753",
        "title": "Digitalisierung und Psyche",
        "folder": "digitalisierung-und-psyche-5753"
      },
      {
        "id": "einfuhrung-in-cyberpsychologie-5758",
        "title": "Einführung in die Cyberpsychologie",
        "folder": "einfuhrung-in-cyberpsychologie-5758"
      },
      {
        "id": "grundlagen-der-medienpsychologie-5813",
        "title": "Grundlagen der Medienpsychologie",
        "folder": "grundlagen-der-medienpsychologie-5813"
      },
      {
        "id": "virtuelle-realitat-in-psychologie-5909",
        "title": "Virtuelle Realität in der Psychologie",
        "folder": "virtuelle-realitat-in-psychologie-5909"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Positive+Psychologie+Resilienz+Cyberpsychologie&t=3752"
  }
};
