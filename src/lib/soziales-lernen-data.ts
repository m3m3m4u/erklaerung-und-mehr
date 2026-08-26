export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface SozialesLernenTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const sozialesLernenCategories: string[] = [
  "Selbstwahrnehmung & Emotionen",
  "Soziale Kompetenz & Beziehungen",
  "Konfliktlösung, Zivilcourage & Team"
];

export const sozialesLernenTopics: Record<string, SozialesLernenTopic> = {
  "umgang-mit-emotionen-und-gefuehlen": {
    "slug": "umgang-mit-emotionen-und-gefuehlen",
    "title": "Emotionen verstehen, Wut zähmen & Gefühle regulieren",
    "category": "Selbstwahrnehmung & Emotionen",
    "shortDesc": "Basisemotionen erkennen, Wut-Stopp-Strategien, Traurigkeit annehmen, positive Emotionen und Freude teilen.",
    "longDesc": "Gefühle begleiten uns jeden Tag. Zu lernen, was man fühlt, warum ein Gefühl entsteht und wie man konstruktiv damit umgeht, ist eine fundamentale Lebenskompetenz für Kinder und Jugendliche.",
    "keyPoints": [
      "Basisemotionen: Freude, Wut, Trauer, Angst, Ekel, Überraschung – jedes Gefühl hat eine wichtige Schutz- und Hinweisfunktion",
      "Wut zähmen: Auslöser (Trigger) identifizieren, Stopp-Signal setzen, tief durchatmen, Bewegung nutzen statt impulsiv zu reagieren",
      "Traurigkeit annehmen: Trauer zulassen, darüber sprechen und heilsame Wege finden, schwierige Zeiten zu bewältigen",
      "Freude teilen: Positive Erlebnisse und Dankbarkeit stärken die seelische Gesundheit und fördern soziale Bindungen"
    ],
    "exercises": [
      {
        "id": "3136",
        "title": "Emotionen verstehen – Was fühlst du wirklich?",
        "folder": "emotionen-verstehen-was-fuhlst-du-wirklich-3136"
      },
      {
        "id": "3137",
        "title": "Wut zähmen – Strategien für den Alltag",
        "folder": "wie-du-deine-wut-zahmen-kannst-strategien-fur-den-alltag-3137"
      },
      {
        "id": "3138",
        "title": "Traurigkeit annehmen und bewältigen",
        "folder": "traurigkeit-annehmen-wege-um-mit-schweren-zeiten-umzugehen-3138"
      },
      {
        "id": "3139",
        "title": "Freude teilen – Die Kraft positiver Emotionen",
        "folder": "freude-teilen-die-bedeutung-von-positiven-emotionen-im-leben-3139"
      },
      {
        "id": "5743",
        "title": "Angst und Phobien verstehen",
        "folder": "angst-und-phobien-5743"
      },
      {
        "id": "5797",
        "title": "Förderung emotionaler Intelligenz",
        "folder": "forderung-emotionaler-intelligenz-5797"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Emotionen+Gefuehle+Soziales+Lernen&t=3752"
  },
  "achtsamkeit-resilienz-und-selbstreflexion": {
    "slug": "achtsamkeit-resilienz-und-selbstreflexion",
    "title": "Achtsamkeit, Resilienz, Motivation & Selbstreflexion",
    "category": "Selbstwahrnehmung & Emotionen",
    "shortDesc": "Achtsamkeitsübungen, psychische Widerstandskraft (Resilienz), Frustrationstoleranz, Stärken erkennen und Selbstwert.",
    "longDesc": "Selbstreflexion hilft dabei, eigene Stärken und Schwächen realistisch einzuschätzen. Mit Achtsamkeit und Resilienz lernen junge Menschen, stressige Schulsituationen und persönliche Rückschläge gelassener zu meistern.",
    "keyPoints": [
      "Achtsamkeit im Alltag: Den gegenwärtigen Moment bewusst und ohne Bewertung wahrnehmen (Atmung, Sinneswahrnehmung)",
      "Resilienz aufbauen: Die 7 Säulen der Resilienz (Optimismus, Akzeptanz, Lösungsorientierung, Selbstwirksamkeit, Netzwerkorientierung, Zukunftsorientierung, Verantwortung)",
      "Umgang mit Frustration: Frustration als normalen Bestandteil von Lernprozessen begreifen und neue Lösungswege erproben",
      "Selbstreflexion & Motivation: Eigene Werte und Ziele definieren und intrinsische Motivation entfalten"
    ],
    "exercises": [
      {
        "id": "5919",
        "title": "Einführung in Achtsamkeit",
        "folder": "einfuhrung-in-achtsamkeit-5919"
      },
      {
        "id": "5798",
        "title": "Förderung von Resilienz",
        "folder": "forderung-von-resilienz-5798"
      },
      {
        "id": "5889",
        "title": "Selbstreflexion und Sinn",
        "folder": "selbstreflexion-und-sinn-5889"
      },
      {
        "id": "5847",
        "title": "Motivation und emotionale Prozesse",
        "folder": "motivation-und-emotionale-prozesse-5847"
      },
      {
        "id": "66287",
        "title": "Umgang mit Schuldgefühlen",
        "folder": "umgang-mit-schuldgefuhlen-4460"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Achtsamkeit+Resilienz+Selbstwert&t=3752"
  },
  "empathie-freundschaft-und-feedback": {
    "slug": "empathie-freundschaft-und-feedback",
    "title": "Empathie, Freundschaft & Feedbackkultur",
    "category": "Soziale Kompetenz & Beziehungen",
    "shortDesc": "Perspektivenübernahme, aktives Zuhören, Freundschaften pflegen, konstruktives Feedback geben und Fehlerkultur.",
    "longDesc": "Empathie ist die Fähigkeit, sich in die Gefühle und Gedanken anderer Menschen hineinzuversetzen. Zusammen mit einer wertschätzenden Feedbackkultur bildet sie das Fundament für gelingende Beziehungen und ein positives Klassenklima.",
    "keyPoints": [
      "Empathie & Mitgefühl: Aktives Zuhören ohne sofortiges Urteilen, Körpersprache wahrnehmen und Mitgefühl zeigen",
      "Freundschaft: Ehrlichkeit, Loyalität, gemeinsame Erlebnisse, Unterstützung in Krisen und gegenseitiger Freiraum",
      "Feedback-Regeln: Konstruktiv, konkret, zeitnah, in 'Ich-Botschaften' formuliert und auf das Verhalten bezogen (nicht auf die Person)",
      "Fehlerkultur: Fehler sind wichtige Lerngelegenheiten – eine offene Atmosphäre nimmt die Angst vor Fehlern"
    ],
    "exercises": [
      {
        "id": "5780",
        "title": "Empathie und Mitgefühl im Alltag",
        "folder": "empathie-und-mitgefuhl-2-5780"
      },
      {
        "id": "4467",
        "title": "Wahre Freundschaft",
        "folder": "wahre-freundschaft-4467"
      },
      {
        "id": "5823",
        "title": "Konzept sozialer Identität",
        "folder": "konzept-sozialer-identitat-5823"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Empathie+Freundschaft+Feedback&t=3752"
  },
  "konfliktloesung-mobbing-und-teamarbeit": {
    "slug": "konfliktloesung-mobbing-und-teamarbeit",
    "title": "Konfliktlösung, Mobbingprävention & Teamarbeit",
    "category": "Konfliktlösung, Zivilcourage & Team",
    "shortDesc": "Gewaltfreie Kommunikation, Streit schlichten, Cybermobbing stoppen, Zivilcourage und erfolgreiche Gruppenarbeit.",
    "longDesc": "Wo Menschen zusammenkommen, gibt es Meinungsverschiedenheiten. Konstruktive Streitkultur, Zivilcourage gegen Mobbing und effektive Zusammenarbeit im Team sorgen für Sicherheit und Gemeinschaft.",
    "keyPoints": [
      "Gewaltfreie Kommunikation (GFK nach Rosenberg): 1. Beobachtung (ohne Wertung) ➔ 2. Gefühl benennen ➔ 3. Bedürfnis formulieren ➔ 4. Konkrete Bitte äußern",
      "Mobbing vs. Konflikt: Mobbing ist wiederholter, gezielter und systematischer Machtmissbrauch gegen eine Person über längere Zeit",
      "Cybermobbing im Netz: Beweise sichern (Screenshots), Blockieren, Hilfe bei Vertrauenspersonen/Lehrkräften holen, Respekt online wahren",
      "Zivilcourage: Nicht wegschauen – Betroffenen beistehen, Hilfe holen, keine Gerüchte weiterverbreiten",
      "Teamarbeit: Klare Rollenverteilung, gegenseitige Wertschätzung und gemeinsame Verantwortung für das Gruppenergebnis"
    ],
    "exercises": [
      {
        "id": "5892",
        "title": "Strategien zur Konfliktlösung",
        "folder": "strategien-zur-konfliktlosung-5892"
      },
      {
        "id": "5851",
        "title": "Online-Verhalten in sozialen Netzwerken",
        "folder": "online-verhalten-in-sozialen-netzwerken-5851"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Konfliktloesung+Mobbing+Teamarbeit&t=3752"
  }
};
