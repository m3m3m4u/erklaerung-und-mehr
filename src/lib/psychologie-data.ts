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
  "Grundlagen, Forschung & Biopsychologie",
  "Kognition, Lernen & Motivation",
  "Psychoanalyse, Persönlichkeit & Entwicklung",
  "Sozialpsychologie, Kommunikation & Angewandte Psychologie",
  "Klinische Psychologie, Störungen & Diagnostik",
  "Therapieverfahren, Resilienz & Mentale Gesundheit"
];

export const psychologieTopics: Record<string, PsychologieTopic> = {
  "grundlagen-der-psychologie-und-forschung": {
    "slug": "grundlagen-der-psychologie-und-forschung",
    "title": "Einführung in die Psychologie & Forschungsmethoden",
    "category": "Grundlagen, Forschung & Biopsychologie",
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
    "category": "Grundlagen, Forschung & Biopsychologie",
    "shortDesc": "Gehirnaufbau, Neurotransmitter (Dopamin, Serotonin), vegetatives Nervensystem, Psychosomatik und Schmerzverarbeitung.",
    "longDesc": "Die Biopsychologie erforscht die biologischen Grundlagen unseres Erlebens und Verhaltens. Sie untersucht neuronale Netzwerke im Gehirn, Hormone, Neurotransmitter und das komplexe Wechselspiel von Körper und Seele.",
    "keyPoints": [
      "Gehirnstrukturen: Großhirnrinde (Kortex für Denken/Planen), Limbisches System mit Amygdala (Angst, Emotionen) und Hippocampus (Gedächtniskonsolidierung)",
      "Neurotransmitter: Dopamin ('Belohnungssystem', Antrieb), Serotonin (Stimmungsregulation, Schlaf), Noradrenalin (Stressreaktion), GABA (wichtigster hemmender Botenstoff)",
      "Vegetatives Nervensystem: Sympathikus (Kampf-oder-Flucht: erhöhter Puls, Adrenalin) vs. Parasympathikus (Ruhe, Regeneration, Verdauung)",
      "Psychosomatik: Körperliche Beschwerden (z. B. Magenprobleme, chronische Schmerzen), die maßgeblich durch seelische Belastungen ausgelöst oder verstärkt werden",
      "Neurofeedback: Gezieltes Training von Gehirnwellenmustern zur Verbesserung von Konzentration und emotionaler Selbstregulation"
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
        "id": "neurowissenschaften-und-entscheidungsfindung-2731",
        "title": "Neurowissenschaften und Entscheidungsfindung",
        "folder": "neurowissenschaften-und-entscheidungsfindung-2731"
      },
      {
        "id": "einfuhrung-in-neurofeedback-5769",
        "title": "Einführung in Neurofeedback",
        "folder": "einfuhrung-in-neurofeedback-5769"
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

  "schlaf-traeume-und-chronobiologie": {
    "slug": "schlaf-traeume-und-chronobiologie",
    "title": "Schlaf, Träume & Chronobiologie",
    "category": "Grundlagen, Forschung & Biopsychologie",
    "shortDesc": "Schlafphasen (REM- vs. Non-REM), zirkadiane Rhythmen, Schlafmangel, Traumfunktionen sowie Einfluss von Lärm und Stille.",
    "longDesc": "Schlaf ist ein lebenswichtiger biologischer Prozess für Gedächtniskonsolidierung, Zellerneuerung und psychische Regeneration. Chronobiologische Störungen und chronischer Schlafmangel schwächen Konzentration, Immunsystem und emotionale Stabilität.",
    "keyPoints": [
      "Schlafarchitektur: Zyklischer Wechsel (ca. 90 Minuten) zwischen Leichtschlaf, Tiefschlaf (körperliche Erholung) und REM-Schlaf (Traumphase, emotionale Verarbeitung)",
      "Zirkadianer Rhythmus: Die innere Uhr im suprachiasmatischen Kern (SCN) steuert Melatoninausschüttung und Wach-Schlaf-Rhythmen",
      "Chronischer Schlafmangel: Erhöhtes Risiko für Konzentrationsstörungen, Depressionen, Herz-Kreislauf-Erkrankungen und verminderte Leistungsfähigkeit",
      "Akustische Umwelt: Lärmbelastung aktiviert chronische Stressachsen; bewusste Phasen der Stille fördern neuroplastische Erholungsprozesse"
    ],
    "exercises": [
      {
        "id": "schlaf-und-traume-5888",
        "title": "Schlaf und Träume",
        "folder": "schlaf-und-traume-5888"
      },
      {
        "id": "die-beziehung-zwischen-schlaf-und-stressbewaltigung-2704",
        "title": "Schlaf und Stressbewältigung",
        "folder": "die-beziehung-zwischen-schlaf-und-stressbewaltigung-2704"
      },
      {
        "id": "chronischer-schlafmangel-die-schleichende-zerstoerung-unserer-leistungsfaehigkeit",
        "title": "Chronischer Schlafmangel und Leistungsfähigkeit",
        "folder": "chronischer-schlafmangel-die-schleichende-zerstoerung-unserer-leistungsfaehigkeit"
      },
      {
        "id": "psychologische-auswirkungen-von-larm-und-stille-2743",
        "title": "Psychologische Auswirkungen von Lärm und Stille",
        "folder": "psychologische-auswirkungen-von-larm-und-stille-2743"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Schlaf+Traeume+Psychologie&t=3752"
  },

  "kognitive-psychologie-lernen-und-gedaechtnis": {
    "slug": "kognitive-psychologie-lernen-und-gedaechtnis",
    "title": "Kognitive Psychologie, Lernen & Gedächtnis",
    "category": "Kognition, Lernen & Motivation",
    "shortDesc": "Klassische & operante Konditionierung (Pawlow, Skinner), Modelllernen (Bandura), Mehrspeichermodell des Gedächtnisses und pädagogische Lernpsychologie.",
    "longDesc": "Wie verarbeitet das menschliche Gehirn Informationen? Die Kognitionspsychologie und Lernpsychologie erforschen Wahrnehmungsprozesse, Aufmerksamkeit, Gedächtnisspeicherung, Problemlösung und logisches Denken.",
    "keyPoints": [
      "Klassische Konditionierung (Pawlow): Verknüpfung eines unkonditionierten Reizes mit einem neutralen Reiz führt zur konditionierten Reaktion",
      "Operante Konditionierung (Skinner): Lernen durch Konsequenzen – positive/negative Verstärkung vs. Bestrafung",
      "Modelllernen (Bandura): Lernen durch Beobachtung von Vorbildern (Aufmerksamkeit ➔ Behalten ➔ Reproduktion ➔ Motivation)",
      "Mehrspeichermodell (Atkinson & Shiffrin): Sensorisches Register ➔ Arbeitsgedächtnis (7±2 Chunks) ➔ Langzeitgedächtnis (deklarativ vs. prozedural)",
      "Gedächtniskonsolidierung: Wiederholung, Verknüpfung mit Vorwissen und Schlaf festigen neuronale Engramme"
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
        "id": "methoden-der-verhaltensmodifikation-5841",
        "title": "Methoden der Verhaltensmodifikation",
        "folder": "methoden-der-verhaltensmodifikation-5841"
      },
      {
        "id": "grundlagen-der-gedachtnisprozesse-5810",
        "title": "Grundlagen der Gedächtnisprozesse",
        "folder": "grundlagen-der-gedachtnisprozesse-5810"
      },
      {
        "id": "wie-funktioniert-das-gedaechtnis",
        "title": "Wie funktioniert das Gedächtnis",
        "folder": "wie-funktioniert-das-gedaechtnis"
      },
      {
        "id": "grundlagen-padagogischer-psychologie-5937",
        "title": "Grundlagen pädagogischer Psychologie",
        "folder": "grundlagen-padagogischer-psychologie-5937"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kognitive+Psychologie+Lernen+Gedaechtnis&t=3752"
  },

  "wahrnehmung-denkfehler-und-dissonanz": {
    "slug": "wahrnehmung-denkfehler-und-dissonanz",
    "title": "Wahrnehmung, kognitive Dissonanz & Denkfehler",
    "category": "Kognition, Lernen & Motivation",
    "shortDesc": "Optische Täuschungen, selektive Aufmerksamkeit, Heuristiken, Urteilsverzerrungen (Biases) und kognitive Dissonanz (Festinger).",
    "longDesc": "Menschliche Wahrnehmung bildet die Realität nicht 1:1 ab, sondern konstruiert sie aktiv. Das Gehirn nutzt Heuristiken und kognitive Abkürzungen, die im Alltag effizient sind, aber auch zu systematischen Denkfehlern und Verzerrungen führen können.",
    "keyPoints": [
      "Gestaltgesetze: Gesetz der Nähe, Ähnlichkeit, Geschlossenheit und guten Fortführung strukturieren Sinnesreize",
      "Selektive Aufmerksamkeit: Cocktailparty-Effekt und Inattentional Blindness (Übersehen unerwarteter Objekte)",
      "Kognitive Dissonanz (Leon Festinger): Unangenehmer Spannungszustand bei Widerspruch zwischen Kognitionen und Verhalten führt zu nachträglicher Rechtfertigung",
      "Kognitive Verzerrungen (Biases): Bestätigungsfehler (Confirmation Bias), Ankereffekt (Anchoring), Rückschaufehler (Hindsight Bias) und Verfügbarkeitsheuristik"
    ],
    "exercises": [
      {
        "id": "wahrnehmung-und-aufmerksamkeit-5911",
        "title": "Wahrnehmung und Aufmerksamkeit",
        "folder": "wahrnehmung-und-aufmerksamkeit-5911"
      },
      {
        "id": "die-psychologie-der-tauschung-und-des-betrugs-2706",
        "title": "Psychologie der Täuschung und Wahrnehmung",
        "folder": "die-psychologie-der-tauschung-und-des-betrugs-2706"
      },
      {
        "id": "kognition-und-denkprozesse-2721",
        "title": "Kognition und Denkprozesse",
        "folder": "kognition-und-denkprozesse-2721"
      },
      {
        "id": "kognitive-dissonanz-verstehen-5821",
        "title": "Kognitive Dissonanz verstehen",
        "folder": "kognitive-dissonanz-verstehen-5821"
      },
      {
        "id": "erkennen-kognitiver-verzerrungen-5783",
        "title": "Erkennen kognitiver Verzerrungen",
        "folder": "erkennen-kognitiver-verzerrungen-5783"
      },
      {
        "id": "kognitive-verzerrungen-und-denkfehler-2722",
        "title": "Kognitive Verzerrungen und Denkfehler",
        "folder": "kognitive-verzerrungen-und-denkfehler-2722"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Wahrnehmung+Denkfehler+Kognitive+Dissonanz&t=3752"
  },

  "motivation-emotion-und-intelligenz": {
    "slug": "motivation-emotion-und-intelligenz",
    "title": "Motivation, Emotion & Intelligenztheorien",
    "category": "Kognition, Lernen & Motivation",
    "shortDesc": "Intrinsische vs. extrinsische Motivation, Selbstwirksamkeit (Bandura), Emotionstheorien, Entscheidungskonflikte und Intelligenzmodelle.",
    "longDesc": "Was treibt den Menschen an? Welche Rolle spielen Gefühle bei Entscheidungen? Dieses Themenfeld beleuchtet Motive, physiologische und kognitive Komponenten von Emotionen sowie klassische und moderne Intelligenzmodelle.",
    "keyPoints": [
      "Motivation: Intrinsisch (Handlung aus eigenem Interesse und Freude) vs. Extrinsisch (Handlung aufgrund von Belohnung oder Bestrafungsvermeidung)",
      "Selbstwirksamkeitserwartung (Albert Bandura): Die Überzeugung, auch schwierige Anforderungen aus eigener Kraft bewältigen zu können",
      "Emotionstheorien: James-Lange (Körperreaktion ➔ Gefühl), Cannon-Bard (gleichzeitig), Schachter-Singer (Zwei-Faktoren-Theorie: physiologische Erregung + kognitive Bewertung)",
      "Intelligenzmodelle: Generalfaktor g (Spearman), Primärfaktoren (Thurstone), Multiple Intelligenzen (Gardner) und Emotionale Intelligenz (Goleman)"
    ],
    "exercises": [
      {
        "id": "motivation-und-emotion-2730",
        "title": "Motivation und Emotion",
        "folder": "motivation-und-emotion-2730"
      },
      {
        "id": "motivation-3182",
        "title": "Grundlagen der Motivation",
        "folder": "motivation-3182"
      },
      {
        "id": "forderung-der-arbeitsmotivation-5794",
        "title": "Förderung der Arbeitsmotivation",
        "folder": "forderung-der-arbeitsmotivation-5794"
      },
      {
        "id": "unterschiedliche-intelligenzmodelle-5904",
        "title": "Unterschiedliche Intelligenzmodelle",
        "folder": "unterschiedliche-intelligenzmodelle-5904"
      },
      {
        "id": "der-konflikt-zwischen-rationalitat-und-emotionalitat-in-der-entscheidungsfindung-2699",
        "title": "Rationalität und Emotionalität bei Entscheidungen",
        "folder": "der-konflikt-zwischen-rationalitat-und-emotionalitat-in-der-entscheidungsfindung-2699"
      },
      {
        "id": "wie-deine-gedanken-deine-gefuhle-beeinflussen-einblicke-in-die-selbstwahrnehmung-3135",
        "title": "Gedanken, Gefühle und Selbstwahrnehmung",
        "folder": "wie-deine-gedanken-deine-gefuhle-beeinflussen-einblicke-in-die-selbstwahrnehmung-3135"
      },
      {
        "id": "forderung-der-selbstwirksamkeit-5796",
        "title": "Förderung der Selbstwirksamkeit",
        "folder": "forderung-der-selbstwirksamkeit-5796"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Motivation+Emotion+Intelligenz+Psychologie&t=3752"
  },

  "sigmund-freud-und-die-psychoanalyse": {
    "slug": "sigmund-freud-und-die-psychoanalyse",
    "title": "Sigmund Freud, Psychoanalyse & Unbewusstes",
    "category": "Psychoanalyse, Persönlichkeit & Entwicklung",
    "shortDesc": "Instanzenmodell (Es, Ich, Über-Ich), Eisbergmodell des Bewusstseins, Abwehrmechanismen, Phasenlehre und Traumdeutung.",
    "longDesc": "Sigmund Freud (1856–1939) begründete die Tiefenpsychologie und Psychoanalyse. Nach Freud wird menschliches Handeln maßgeblich von unbewussten Trieben, verdrängten Konflikten und Kindheitserfahrungen gesteuert.",
    "keyPoints": [
      "Eisbergmodell: Nur ein kleiner Teil (ca. 10–20%) unserer Psyche ist bewusst; das Vorbewusste und das dynamische Unbewusste liegen unter der Oberfläche",
      "Strukturmodell der Psyche (3 Instanzen): 1. Das 'Es' (Lustprinzip, Triebe) ➔ 2. Das 'Über-Ich' (Moral, Gewissen) ➔ 3. Das 'Ich' (Realitätsprinzip, Vermittler)",
      "Abwehrmechanismen: Strategien des Ichs zum Schutz vor Angst (z. B. Verdrängung, Projektion, Rationalisierung, Sublimierung, Verschiebung)",
      "Traumdeutung: 'Der Traum ist der Königsweg zum Unbewussten' – Unterscheidung zwischen manifestem (erinnertem) und latentem Traum",
      "Psychoanalytische Behandlung: Freie Assoziation, Deutung von Widerständen und Übertragungsphänomenen auf der Couch"
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
        "id": "bewusstsein-und-unbewusstes-5746",
        "title": "Bewusstsein und Unbewusstes",
        "folder": "bewusstsein-und-unbewusstes-5746"
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
    "shortDesc": "Big Five Persönlichkeitsmerkmale (OCEAN), Testdiagnostik, Humanistische Psychologie (Rogers, Maslow), Selbstkonzept und Diversität.",
    "longDesc": "Was macht die Einzigartigkeit eines Individuums aus? Die Persönlichkeitspsychologie beschreibt zeitlich stabile Verhaltens- und Erlebensmuster von Menschen sowie deren Entfaltungspotenziale.",
    "keyPoints": [
      "Big Five Modell (OCEAN): Openness (Offenheit), Conscientiousness (Gewissenhaftigkeit), Extraversion (Geselligkeit), Agreeableness (Verträglichkeit), Neuroticism (Emotionale Labilität)",
      "Persönlichkeitsdiagnostik: Selbstberichtsfragebögen, Verhaltensbeobachtungen und psychometrische Profilerstellung",
      "Humanistische Psychologie (Carl Rogers, Abraham Maslow): Bedürfnispyramide und angeborene Tendenz zur Selbstaktualisierung",
      "Selbstkonzept & Identität: Kongruenz zwischen Realselbst und Idealselbst als Fundament seelischer Gesundheit",
      "Geschlechterforschung: Differenzierte Betrachtung von biologischen (Sex) und sozialen/sozialisierten Geschlechtsrollen (Gender)"
    ],
    "exercises": [
      {
        "id": "einfuhrung-in-personlichkeitspsychologie-5770",
        "title": "Einführung in die Persönlichkeitspsychologie",
        "folder": "einfuhrung-in-personlichkeitspsychologie-5770"
      },
      {
        "id": "methoden-der-personlichkeitsdiagnostik-5840",
        "title": "Methoden der Persönlichkeitsdiagnostik",
        "folder": "methoden-der-personlichkeitsdiagnostik-5840"
      },
      {
        "id": "grundlagen-humanistischer-psychologie-5934",
        "title": "Grundlagen humanistischer Psychologie",
        "folder": "grundlagen-humanistischer-psychologie-5934"
      },
      {
        "id": "entwicklung-des-selbstkonzepts-5781",
        "title": "Entwicklung des Selbstkonzepts",
        "folder": "entwicklung-des-selbstkonzepts-5781"
      },
      {
        "id": "identitat-und-selbstbewusstsein-5942",
        "title": "Identität und Selbstbewusstsein",
        "folder": "identitat-und-selbstbewusstsein-5942"
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
    "shortDesc": "Kognitive Entwicklung nach Jean Piaget, Bindungstheorie (Bowlby/Ainsworth), psychosoziale Krisen nach Erikson und Gerontopsychologie.",
    "longDesc": "Die Entwicklungspsychologie erforscht die körperlichen, geistigen, emotionalen und sozialen Veränderungen des Menschen von der Empfängnis über Kindheit und Jugend bis ins hohe Alter.",
    "keyPoints": [
      "Stufenmodell nach Jean Piaget: Sensomotorische Phase ➔ Präoperationale Phase ➔ Konkret-operationale Phase ➔ Formal-operationale Phase",
      "Bindungstheorie (Bowlby, Ainsworth): Sichere vs. unsicher-vermeidende, unsicher-ambivalente und desorganisierte Bindungsmuster",
      "Stufenmodell nach Erikson: 8 psychosoziale Entwicklungskrisen (z. B. Urvertrauen vs. Urmisstrauen, Identität vs. Rollenkonfusion)",
      "Entwicklungspsychopathologie: Zusammenspiel von Risiko- und Schutzfaktoren bei Entwicklungsabweichungen",
      "Gerontopsychologie & Alterung: SOC-Modell (Selektion, Optimierung, Kompensation) zur Erhaltung der Autonomie im Alter"
    ],
    "exercises": [
      {
        "id": "einfuhrung-in-entwicklungspsychologie-5759",
        "title": "Einführung in die Entwicklungspsychologie",
        "folder": "einfuhrung-in-entwicklungspsychologie-5759"
      },
      {
        "id": "grundlagen-der-entwicklungspsychopathologie-5808",
        "title": "Grundlagen der Entwicklungspsychopathologie",
        "folder": "grundlagen-der-entwicklungspsychopathologie-5808"
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
    "category": "Sozialpsychologie, Kommunikation & Angewandte Psychologie",
    "shortDesc": "Gehorsamsexperiment (Milgram), Stanford Prison Experiment (Zimbardo), Konformitätsdruck (Asch), Bystander-Effekt und Interkulturalität.",
    "longDesc": "Die Sozialpsychologie erforscht, wie Denken, Fühlen und Verhalten von Individuen durch die tatsächliche oder vorgestellte Anwesenheit anderer Menschen beeinflusst werden.",
    "keyPoints": [
      "Milgram-Experiment: Erschütternde Erkenntnisse über die Bereitschaft gewöhnlicher Menschen, autoritären Befehlen blind zu gehorchen",
      "Stanford Prison Experiment (Zimbardo): Schnelle Übernahme zugewiesener sozialer Rollen führte zu Deindividuation und Machtmissbrauch",
      "Konformitätsexperiment nach Solomon Asch: Anpassung an das falsche Gruppenurteil durch normativen und informationalen sozialen Einfluss",
      "Bystander-Effekt: Verantwortungsdiffusion verringert die Hilfsbereitschaft bei Anwesenheit mehrerer Zuschauer in Notfallsituationen",
      "Gruppendynamik & Interkulturalität: Ingroup-Outgroup-Effekte, Vorurteilsbildung und interkulturelle Werteorientierungen"
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
        "id": "konformitat-und-gruppendynamik-2723",
        "title": "Konformität und Gruppendynamik",
        "folder": "konformitat-und-gruppendynamik-2723"
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
      },
      {
        "id": "die-psychologie-des-glaubens-und-der-religion-2707",
        "title": "Psychologie des Glaubens und der Religion",
        "folder": "die-psychologie-des-glaubens-und-der-religion-2707"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sozialpsychologie+Milgram+Zimbardo&t=3752"
  },

  "grundlagen-und-kommunikationstheorien": {
    "slug": "grundlagen-und-kommunikationstheorien",
    "title": "Kommunikationstheorien & Körpersprache",
    "category": "Sozialpsychologie, Kommunikation & Angewandte Psychologie",
    "shortDesc": "Vier-Ohren-Modell (Schulz von Thun), 5 Axiome nach Watzlawick, Körpersprache, nonverbale Signale und Selbstwahrnehmung.",
    "longDesc": "Kommunikation ist die Grundlage jeder zwischenmenschlichen Beziehung. Kommunikationsmodelle entschlüsseln, wie Botschaften kodiert, übertragen, dekodiert und interpretiert werden – sowohl verbal als auch nonverbal.",
    "keyPoints": [
      "Vier-Ohren-Modell (Schulz von Thun): 1. Sachinhalt, 2. Selbstkundgabe, 3. Beziehungshinweis, 4. Appell",
      "5 Axiome der Kommunikation (Paul Watzlawick): 'Man kann nicht nicht kommunizieren', Inhalts- und Beziehungsaspekt, Interpunktion, analog/digital, symmetrisch/komplementär",
      "Körpersprache: Mimik (Mikroexpressionen nach Paul Ekman), Gestik, Körperhaltung, Distanzzonen (Proxemik) und Blickkontakt",
      "Körpersprache in Politik & Führung: Nonverbale Dominanz, Glaubwürdigkeit und charismatisches Auftreten",
      "Selbstwahrnehmung in der Interaktion: Eigenbild versus Fremdbild und das Johari-Fenster"
    ],
    "exercises": [
      {
        "id": "grundlagen-der-kommunikationstheorien-5922",
        "title": "Grundlagen der Kommunikationstheorien",
        "folder": "grundlagen-der-kommunikationstheorien-5922"
      },
      {
        "id": "einfuhrung-in-kommunikationspsychologie-5767",
        "title": "Einführung in die Kommunikationspsychologie",
        "folder": "einfuhrung-in-kommunikationspsychologie-5767"
      },
      {
        "id": "korpersprache-und-nonverbale-kommunikation-2724",
        "title": "Körpersprache und nonverbale Kommunikation",
        "folder": "korpersprache-und-nonverbale-kommunikation-2724"
      },
      {
        "id": "psychologische-aspekte-der-korpersprache-in-der-politik-2742",
        "title": "Körpersprache in der Politik",
        "folder": "psychologische-aspekte-der-korpersprache-in-der-politik-2742"
      },
      {
        "id": "selbstwahrnehmung-3239",
        "title": "Selbstwahrnehmung im Dialog",
        "folder": "selbstwahrnehmung-3239"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kommunikationspsychologie+Schulz+von+Thun&t=3752"
  },

  "kommunikationspsychologie-und-arbeitswelt": {
    "slug": "kommunikationspsychologie-und-arbeitswelt",
    "title": "Arbeits-, Organisations- & Werbepsychologie",
    "category": "Sozialpsychologie, Kommunikation & Angewandte Psychologie",
    "shortDesc": "Organisationsstrukturen, Führungstile, Arbeitszufriedenheit, Werbepsychologie, Konsumverhalten und Psychologie des Risikos.",
    "longDesc": "Wie arbeiten Menschen optimal in Organisationen zusammen? Und wie beeinflussen Marken und Werbebotschaften Kaufentscheidungen? Die Wirtschafts- und Organisationspsychologie untersucht Verhalten in betrieblichen und konsumbezogenen Kontexten.",
    "keyPoints": [
      "Arbeits- & Organisationspsychologie: Arbeitszufriedenheit, Motivation nach Herzberg (Zwei-Faktoren-Theorie) und transformationale Führung",
      "Markenpsychologie: Markenidentität, emotionale Bindung, Kundentreue und Imagetransfer",
      "Werbestrategien: Nudging, Priming, Social Proof, Reziprozität und Knappheitseffekte",
      "Risikoverhalten: Prospect Theory (Kahneman & Tversky) – Verlustaversion und asymmetrische Risikobewertung"
    ],
    "exercises": [
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
        "title": "Markenpsychologie",
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
      },
      {
        "id": "verstandnis-von-risikoverhalten-5906",
        "title": "Verständnis von Risikoverhalten",
        "folder": "verstandnis-von-risikoverhalten-5906"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Arbeitspsychologie+Werbepsychologie&t=3752"
  },

  "angewandte-psychologie-sport-und-rehabilitation": {
    "slug": "angewandte-psychologie-sport-und-rehabilitation",
    "title": "Angewandte Psychologie: Sport, Reha & Verhaltensforschung",
    "category": "Sozialpsychologie, Kommunikation & Angewandte Psychologie",
    "shortDesc": "Mentales Training im Sport, Bewältigung von chronischer Krankheit, Sexualpsychologie und vergleichende Verhaltenspsychologie.",
    "longDesc": "Psychologische Erkenntnisse finden in zahlreichen spezialisierten Lebensfeldern Anwendung: Von der Optimierung sportlicher Höchstleistungen über Rehabilitationsprozesse bis hin zur Erforschung tierischen und menschlichen Verhaltens.",
    "keyPoints": [
      "Sportpsychologie: Mentales Training, Visualisierung, 'In the Zone' (Flow-Zustand), Wettkampfangst und Peak Performance",
      "Rehabilitationspsychologie: Krankheitsverarbeitung (Coping), Schmerzbewältigung und Wiedererlangung von Selbstständigkeit nach Traumata",
      "Sexualpsychologie: Psychosexuelle Entwicklung, Beziehungsdynamiken und Behandlung sexueller Funktionsstörungen",
      "Vergleichende Psychologie: Ethologische Verhaltensforschung, artspezifische Verhaltensweisen und evolutionäre Anpassungsstrategien"
    ],
    "exercises": [
      {
        "id": "einfuhrung-in-sportpsychologie-5776",
        "title": "Einführung in die Sportpsychologie",
        "folder": "einfuhrung-in-sportpsychologie-5776"
      },
      {
        "id": "einfuhrung-in-rehabilitationspsychologie-5772",
        "title": "Einführung in die Rehabilitationspsychologie",
        "folder": "einfuhrung-in-rehabilitationspsychologie-5772"
      },
      {
        "id": "einfuhrung-in-sexualpsychologie-5774",
        "title": "Einführung in die Sexualpsychologie",
        "folder": "einfuhrung-in-sexualpsychologie-5774"
      },
      {
        "id": "einfuhrung-in-vergleichende-psychologie-5779",
        "title": "Vergleichende Psychologie & Tierverhalten",
        "folder": "einfuhrung-in-vergleichende-psychologie-5779"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sportpsychologie+Rehabilitation+Psychologie&t=3752"
  },

  "klinische-psychologie-und-psychische-stoerungen": {
    "slug": "klinische-psychologie-und-psychische-stoerungen",
    "title": "Klinische Psychologie: Depression, Angst, Psychose & Sucht",
    "category": "Klinische Psychologie, Störungen & Diagnostik",
    "shortDesc": "Klassifikation (ICD-11 / DSM-5), Depressionen, Angststörungen, Phobien, Schizophrenie und Suchterkrankungen.",
    "longDesc": "Die Klinische Psychologie beschäftigt sich mit der Entstehung, Diagnostik und Behandlung von psychischen Störungen und Verhaltensauffälligkeiten. Sie entwickelt evidenzbasierte Erklärungsmodelle und Behandlungsansätze.",
    "keyPoints": [
      "Klassifikation: ICD-11 (WHO) und DSM-5 (APA) definieren standardisierte Kriterien für psychische Erkrankungen",
      "Depression & Affektive Störungen: Hauptsymptome (gedrückte Stimmung, Antriebsverlust, Interessenverlust) und bio-psycho-soziales Entstehungsmodell",
      "Angststörungen: Panikstörung, Agoraphobie, Soziale Angststörung und Generalisierte Angststörung; Behandlungsansatz Exposition",
      "Schizophrenie & Psychotische Störungen: Positivsymptome (Wahn, Halluzinationen) vs. Negativsymptome (Affektverflachung, sozialer Rückzug)",
      "Sucht & Abhängigkeit: Toleranzentwicklung, Entzugssymptome und das neurobiologische Belohnungssystem (Dopamin)"
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
        "id": "erkennen-von-angststorungen-5784",
        "title": "Erkennen von Angststörungen",
        "folder": "erkennen-von-angststorungen-5784"
      },
      {
        "id": "schizophrenie-und-psychosen-2746",
        "title": "Schizophrenie und Psychosen",
        "folder": "schizophrenie-und-psychosen-2746"
      },
      {
        "id": "grundlagen-der-schizophrenie-5927",
        "title": "Grundlagen der Schizophrenie",
        "folder": "grundlagen-der-schizophrenie-5927"
      },
      {
        "id": "mental-health-depressionen-in-jugendbuechern",
        "title": "Mental Health: Depressionen verstehen",
        "folder": "mental-health-depressionen-in-jugendbuechern"
      },
      {
        "id": "sucht-und-drogen-die-abschreckende-wirkung-von-buechern",
        "title": "Sucht, Drogen & Abhängigkeit",
        "folder": "sucht-und-drogen-die-abschreckende-wirkung-von-buechern"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Klinische+Psychologie+Stoerungen+Therapie&t=3752"
  },

  "persoenlichkeitsstoerungen-und-neurodivergenz": {
    "slug": "persoenlichkeitsstoerungen-und-neurodivergenz",
    "title": "Persönlichkeitsstörungen, ADHS & Neurodivergenz",
    "category": "Klinische Psychologie, Störungen & Diagnostik",
    "shortDesc": "Borderline, Narzissmus, dissoziale Muster, Autismus-Spektrum-Störungen, ADHS und forensische Begutachtung.",
    "longDesc": "Dieses Themenfeld widmet sich tiefgreifenden Mustern des Erlebens und Verhaltens sowie neurobiologischen Besonderheiten. Es umfasst Persönlichkeitsstörungen (Cluster A, B, C), Autismus-Spektrum und ADHS bis hin zur forensischen Psychologie.",
    "keyPoints": [
      "Persönlichkeitsstörungen: Überdauernde, unflexible Erlebens- und Verhaltensmuster mit erheblichem Leidensdruck (z. B. Borderline, Narzisstische PS)",
      "Autismus-Spektrum-Störungen (ASS): Besonderheiten in sozialer Interaktion, nonverbaler Kommunikation und stereotypes/fokussiertes Verhalten",
      "ADHS (Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung): Kernsymptome Unaufmerksamkeit, Hyperaktivität und Impulsivität durch Dysregulation von Dopamin/Noradrenalin",
      "Forensische Psychologie: Beurteilung von Schuldfähigkeit, Glaubhaftigkeit von Zeugenaussagen und Rückfallrisikoprognosen bei Straftätern"
    ],
    "exercises": [
      {
        "id": "personlichkeitsstorungen-2735",
        "title": "Persönlichkeitsstörungen im Überblick",
        "folder": "personlichkeitsstorungen-2735"
      },
      {
        "id": "verstehen-von-personlichkeitsstorungen-5907",
        "title": "Verstehen von Persönlichkeitsstörungen",
        "folder": "verstehen-von-personlichkeitsstorungen-5907"
      },
      {
        "id": "autismus-spektrum-storungen-verstehen-5745",
        "title": "Autismus-Spektrum-Störungen verstehen",
        "folder": "autismus-spektrum-storungen-verstehen-5745"
      },
      {
        "id": "grundlagen-der-adhs-5805",
        "title": "Grundlagen der ADHS",
        "folder": "grundlagen-der-adhs-5805"
      },
      {
        "id": "grundlagen-forensischer-psychologie-5933",
        "title": "Grundlagen forensischer Psychologie",
        "folder": "grundlagen-forensischer-psychologie-5933"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Persoenlichkeitsstoerungen+ADHS+Autismus&t=3752"
  },

  "notfallpsychologie-trauma-und-krisen": {
    "slug": "notfallpsychologie-trauma-und-krisen",
    "title": "Notfallpsychologie, Trauma & Krisenintervention",
    "category": "Klinische Psychologie, Störungen & Diagnostik",
    "shortDesc": "Akuttraumata, Posttraumatische Belastungsstörung (PTBS), Traumatherapie (EMDR), Kriegspsychologie sowie Opfer- und Täterpsychologie.",
    "longDesc": "Extreme Lebensereignisse, Unfälle, Katastrophen und Gewalterfahrungen können das psychische Gleichgewicht erschüttern. Die Notfall- und Traumapsychologie bietet wissenschaftlich fundierte Interventionen zur Krisenstabilisierung und langfristigen Traumaintegration.",
    "keyPoints": [
      "Akute Belastungsreaktion (ABR) vs. Posttraumatische Belastungsstörung (PTBS): Intrusionen (Flashbacks, Albträume), Vermeidung und Hyperarousal",
      "Notfallpsychologische Krisenintervention: Psychologische Erste Hilfe (PEH) – Sicherheit vermitteln, Beruhigen, Orientierung geben und Verbindungen stärken",
      "Traumatherapiemethoden: Traumafokussierte KVT, EMDR (Eye Movement Desensitization and Reprocessing) und imaginative Verfahren",
      "Opfer- und Täterpsychologie: Dynamiken von Ohnmacht, Schuldgefühlen, Täterprofiling und sekundärer Viktimisierung"
    ],
    "exercises": [
      {
        "id": "notfallpsychologie-und-traumabewaltigung-2732",
        "title": "Notfallpsychologie und Traumabewältigung",
        "folder": "notfallpsychologie-und-traumabewaltigung-2732"
      },
      {
        "id": "kriegspsychologie-und-traumabewaltigung-2725",
        "title": "Kriegspsychologie und Traumabewältigung",
        "folder": "kriegspsychologie-und-traumabewaltigung-2725"
      },
      {
        "id": "grundlagen-der-traumatherapie-5929",
        "title": "Grundlagen der Traumatherapie",
        "folder": "grundlagen-der-traumatherapie-5929"
      },
      {
        "id": "opfer-und-tater-psychologische-aspekte-2733",
        "title": "Opfer- und Täterpsychologie",
        "folder": "opfer-und-tater-psychologische-aspekte-2733"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Trauma+Notfallpsychologie+PTBS&t=3752"
  },

  "psychotherapieverfahren-und-beratung": {
    "slug": "psychotherapieverfahren-und-beratung",
    "title": "Psychotherapieverfahren & kreative Methoden",
    "category": "Therapieverfahren, Resilienz & Mentale Gesundheit",
    "shortDesc": "Biopsychosoziales Modell, Systemische Therapie, Lösungsorientierte Beratung, Psychodrama, Hypnotherapie, Musik-, Tanz- und Paartherapie.",
    "longDesc": "Die moderne Psychotherapie bietet ein breites Spektrum an Verfahren zur Linderung seelischer Beschwerden. Neben klassischen Richtlinienverfahren bereichern systemische, erlebnisorientierte, imaginative und künstlerische Ansätze die therapeutische Praxis.",
    "keyPoints": [
      "Biopsychosoziales Modell: Ganzheitliches Verständnis von Gesundheit durch Wechselwirkung biologischer, psychischer und sozialer Faktoren",
      "Systemische Therapie: Der Fokus liegt auf Beziehungen, Rollen und Mustern im Familiensystem statt auf dem Einzelnen",
      "Lösungsorientierte Kurzzeittherapie (de Shazer): Zirkuläre Fragen, Skalierungsfragen und die Wunderfrage zur Ressourcenaktivierung",
      "Kreative & expressive Verfahren: Psychodrama (Szenisches Spiel), Hypnotherapie (Trancezustände), Musik- und Tanztherapie zur nonverbalen Emotionsverarbeitung",
      "Paartherapie: Konstruktive Konfliktbewältigung, Beziehungsbedürfnisse und Auflösung dysfunktionaler Kommunikationsmuster"
    ],
    "exercises": [
      {
        "id": "biopsychosozialer-ansatz-in-der-therapie-2697",
        "title": "Biopsychosozialer Ansatz in der Therapie",
        "folder": "biopsychosozialer-ansatz-in-der-therapie-2697"
      },
      {
        "id": "einfuhrung-in-systemische-therapie-5777",
        "title": "Einführung in die systemische Therapie",
        "folder": "einfuhrung-in-systemische-therapie-5777"
      },
      {
        "id": "grundlagen-losungsorientierter-therapie-5936",
        "title": "Grundlagen lösungsorientierter Therapie",
        "folder": "grundlagen-losungsorientierter-therapie-5936"
      },
      {
        "id": "einfuhrung-in-psychodrama-5771",
        "title": "Einführung in Psychodrama",
        "folder": "einfuhrung-in-psychodrama-5771"
      },
      {
        "id": "grundlagen-der-hypnotherapie-5811",
        "title": "Grundlagen der Hypnotherapie",
        "folder": "grundlagen-der-hypnotherapie-5811"
      },
      {
        "id": "grundlagen-der-musiktherapie-5814",
        "title": "Grundlagen der Musiktherapie",
        "folder": "grundlagen-der-musiktherapie-5814"
      },
      {
        "id": "grundlagen-der-tanz-und-bewegungstherapie-5928",
        "title": "Tanz- und Bewegungstherapie",
        "folder": "grundlagen-der-tanz-und-bewegungstherapie-5928"
      },
      {
        "id": "grundlagen-der-paartherapie-5816",
        "title": "Grundlagen der Paartherapie",
        "folder": "grundlagen-der-paartherapie-5816"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Psychotherapie+Systemisch+Beratung&t=3752"
  },

  "positive-psychologie-gesundheit-und-digitalisierung": {
    "slug": "positive-psychologie-gesundheit-und-digitalisierung",
    "title": "Positive Psychologie, Gesundheit & Digitalisierung",
    "category": "Therapieverfahren, Resilienz & Mentale Gesundheit",
    "shortDesc": "Glücksforschung (PERMA-Modell nach Seligman), Zeitmanagement, Gesundheitspsychologie, Cyberpsychologie und Virtuelle Realität.",
    "longDesc": "Während traditionelle Ansätze oft Defizite untersuchen, konzentriert sich die Positive Psychologie (Martin Seligman) auf Charakterstärken, Ressourcen und das Wohlbefinden. Zudem erforscht die Cyberpsychologie die Auswirkungen digitaler Medien und virtueller Welten auf unsere Psyche.",
    "keyPoints": [
      "PERMA-Modell (Seligman): 1. Positive Emotions ➔ 2. Engagement (Flow) ➔ 3. Relationships ➔ 4. Meaning (Sinn) ➔ 5. Accomplishment (Erfolge)",
      "Gesundheitspsychologie: Förderung gesundheitsfördernden Verhaltens und Prävention von Risikofaktoren",
      "Zeitmanagement & psychisches Wohlbefinden: Priorisierung (Eisenhower-Prinzip) und Grenzenziehen gegen Überlastung",
      "Cyberpsychologie: Einfluss sozialer Medien (FOMO, ständiger Vergleich), Smartphone-Nutzung und digitale Identitätsbildung",
      "Virtuelle Realität (VR): Immersion in sichere simulierte Umgebungen zur Expositionstherapie bei Phobien und zur Entspannung"
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
        "id": "einfuhrung-in-gesundheitspsychologie-5763",
        "title": "Einführung in die Gesundheitspsychologie",
        "folder": "einfuhrung-in-gesundheitspsychologie-5763"
      },
      {
        "id": "die-beziehung-zwischen-zeitmanagement-und-psychischem-wohlbefinden-2705",
        "title": "Zeitmanagement und Wohlbefinden",
        "folder": "die-beziehung-zwischen-zeitmanagement-und-psychischem-wohlbefinden-2705"
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
  },

  "stress-resilienz-und-burnout-praevention": {
    "slug": "stress-resilienz-und-burnout-praevention",
    "title": "Stress, Resilienz & Burnout-Prävention",
    "category": "Therapieverfahren, Resilienz & Mentale Gesundheit",
    "shortDesc": "Transaktionales Stressmodell (Lazarus), Resilienzfaktoren, Burnout-Phasen, Achtsamkeit und digitale Entlastung.",
    "longDesc": "Chronischer Stress und emotionale Erschöpfung sind zentrale Herausforderungen der modernen Leistungsgesellschaft. Resilienzforschung und Stressbewältigungsstrategien zeigen Wege auf, um die psychische Widerstandskraft nachhaltig zu stärken.",
    "keyPoints": [
      "Transaktionales Stressmodell (Richard Lazarus): Primäre Bewertung (Bedrohung vs. Herausforderung) ➔ Sekundäre Bewertung (Bewältigungsressourcen) ➔ Coping (problem- vs. emotionsfokussiert)",
      "Physiologische Stressreaktion: Aktivierung der HPA-Achse (Hypothalamus-Hypophysen-Nebennierenrinden-Achse) und Ausschüttung von Cortisol und Adrenalin",
      "7 Säulen der Resilienz: Optimismus, Akzeptanz, Lösungsorientierung, Selbstregulation, Eigenverantwortung, Netzwerkorientierung und Zukunftsplanung",
      "Burnout-Syndrom: Dreiklang aus emotionaler Erschöpfung, Depersonalisation/Zynismus und verminderter Leistungsfähigkeit; Bedeutung frühzeitiger Selbstfürsorge",
      "Digitale Entlastung & Fokus: Bewusster Umgang mit ständigen Benachrichtigungen zur Schonung kognitiver Ressourcen"
    ],
    "exercises": [
      {
        "id": "stress-und-stressbewaltigung-2748",
        "title": "Stress und Stressbewältigung",
        "folder": "stress-und-stressbewaltigung-2748"
      },
      {
        "id": "strategien-zur-stressbewaltigung-5893",
        "title": "Strategien zur Stressbewältigung",
        "folder": "strategien-zur-stressbewaltigung-5893"
      },
      {
        "id": "burnout-pravention-und-selbstfursorge-2698",
        "title": "Burnout-Prävention und Selbstfürsorge",
        "folder": "burnout-pravention-und-selbstfursorge-2698"
      },
      {
        "id": "warum-das-handy-beim-lernen-stort-4658",
        "title": "Digitale Reizüberflutung & Konzentration",
        "folder": "warum-das-handy-beim-lernen-stort-4658"
      },
      {
        "id": "selbstwahrnehmung-2-3302",
        "title": "Selbstreflexion & Mentale Balance",
        "folder": "selbstwahrnehmung-2-3302"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Stress+Resilienz+Burnout+Psychologie&t=3752"
  }
};
