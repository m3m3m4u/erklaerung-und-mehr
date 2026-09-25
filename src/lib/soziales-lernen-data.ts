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
  "Selbstwahrnehmung & Emotionale Kompetenz",
  "Beziehungen, Freundschaft & Familie",
  "Kommunikation & Feedbackkultur",
  "Konfliktlösung & Mediation",
  "Mobbingprävention, Zivilcourage & Gemeinschaft"
];

export const sozialesLernenTopics: Record<string, SozialesLernenTopic> = {
  "umgang-mit-emotionen-und-gefuehlen": {
    "slug": "umgang-mit-emotionen-und-gefuehlen",
    "title": "Emotionen verstehen, Wut zähmen & Gefühle regulieren",
    "category": "Selbstwahrnehmung & Emotionale Kompetenz",
    "shortDesc": "Basisemotionen erkennen, Wut-Stopp-Strategien, Traurigkeit annehmen, Ängste verstehen und Trauerphasen bewältigen.",
    "longDesc": "Gefühle begleiten uns jeden Tag. Zu verstehen, was man fühlt, warum ein Gefühl entsteht und wie man konstruktiv damit umgeht, ist eine fundamentale Lebenskompetenz für Kinder und Jugendliche. Mit bewusster Emotionsregulation lernen Schülerinnen und Schüler, heftige Gefühle wie Wut, Trauer oder Angst zu steuern, statt von ihnen überwältigt zu werden.",
    "keyPoints": [
      "Basisemotionen: Freude, Wut, Trauer, Angst, Ekel, Überraschung – jedes Gefühl hat eine wichtige Schutz- und Hinweisfunktion",
      "Wut zähmen: Auslöser (Trigger) identifizieren, Stopp-Signal setzen, tief durchatmen und Bewegung nutzen statt impulsiv zu reagieren",
      "Traurigkeit & Trauerphasen: Emotionen zulassen, darüber sprechen und heilsame Wege finden, Abschiede und Verluste zu verarbeiten",
      "Angst verstehen: Ängste und Phobien als Schutzmechanismen begreifen und Schritt für Schritt Mut aufbauen",
      "Techniken der Emotionsarbeit: Kognitive Neubewertung, Körperentspannung und emotionale Selbstfürsorge im Schulalltag"
    ],
    "exercises": [
      {
        "id": "3136",
        "title": "Emotionen verstehen – Was fühlst du wirklich?",
        "folder": "emotionen-verstehen-was-fuhlst-du-wirklich-3136"
      },
      {
        "id": "3137",
        "title": "Wie du deine Wut zähmen kannst – Strategien für den Alltag",
        "folder": "wie-du-deine-wut-zahmen-kannst-strategien-fur-den-alltag-3137"
      },
      {
        "id": "3138",
        "title": "Traurigkeit annehmen – Wege, um mit schweren Zeiten umzugehen",
        "folder": "traurigkeit-annehmen-wege-um-mit-schweren-zeiten-umzugehen-3138"
      },
      {
        "id": "3139",
        "title": "Freude teilen – Die Bedeutung von positiven Emotionen im Leben",
        "folder": "freude-teilen-die-bedeutung-von-positiven-emotionen-im-leben-3139"
      },
      {
        "id": "5743",
        "title": "Angst und Phobien verstehen",
        "folder": "angst-und-phobien-5743"
      },
      {
        "id": "6731",
        "title": "Trauerphasen und Trauerarbeit",
        "folder": "trauerphasen-6731"
      },
      {
        "id": "799",
        "title": "Techniken der Emotionsarbeit",
        "folder": "techniken-der-emotionsarbeit-799"
      },
      {
        "id": "789",
        "title": "Emotionsarbeit im Alltag",
        "folder": "emotionsarbeit-789"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Emotionen+Gefuehle+Soziales+Lernen&t=3752"
  },
  "achtsamkeit-resilienz-und-selbstreflexion": {
    "slug": "achtsamkeit-resilienz-und-selbstreflexion",
    "title": "Achtsamkeit, Resilienz, Motivation & Selbstwert",
    "category": "Selbstwahrnehmung & Emotionale Kompetenz",
    "shortDesc": "Achtsamkeitsübungen, psychische Widerstandskraft (Resilienz), Frustrationstoleranz, Selbstvertrauen und Motivation.",
    "longDesc": "Selbstreflexion hilft dabei, eigene Stärken und Werte realistisch einzuschätzen. Mit Achtsamkeit und Resilienz lernen junge Menschen, stressige Schulsituationen, Prüfungsdruck und persönliche Rückschläge gelassener zu meistern und ein stabiles Selbstbewusstsein aufzubauen.",
    "keyPoints": [
      "Achtsamkeit im Alltag: Den gegenwärtigen Moment bewusst und ohne Bewertung wahrnehmen (Atmung, 5-Sinne-Übung, Bodyscan)",
      "Die 7 Säulen der Resilienz: Optimismus, Akzeptanz, Lösungsorientierung, Selbstwirksamkeit, Netzwerkorientierung, Zukunftsorientierung, Eigenverantwortung",
      "Selbstbewusstsein & Selbstwert: Eigene Stärken erkennen, Selbstmitgefühl entwickeln und konstruktiv mit Schuldgefühlen umgehen",
      "Motivation & Sinn: Intrinsische Lernmotivation stärken, realistische Zwischenziele stecken und eigene Werte entdecken",
      "Frustrationstoleranz: Fehler und Hindernisse als normale Wachstumsphasen des Gehirns begreifen"
    ],
    "exercises": [
      {
        "id": "5919",
        "title": "Einführung in Achtsamkeit",
        "folder": "einfuhrung-in-achtsamkeit-5919"
      },
      {
        "id": "2728",
        "title": "Mindfulness und Achtsamkeitstraining",
        "folder": "mindfulness-und-achtsamkeit-2728"
      },
      {
        "id": "5798",
        "title": "Förderung von psychischer Resilienz",
        "folder": "forderung-von-resilienz-5798"
      },
      {
        "id": "791",
        "title": "Reflexion und Resilienztraining",
        "folder": "reflexion-und-resilienztraining-791"
      },
      {
        "id": "5889",
        "title": "Selbstreflexion und Sinnstiftung",
        "folder": "selbstreflexion-und-sinn-5889"
      },
      {
        "id": "5847",
        "title": "Motivation und emotionale Prozesse",
        "folder": "motivation-und-emotionale-prozesse-5847"
      },
      {
        "id": "3134",
        "title": "Selbstbewusstsein aufbauen – Tipps für mehr Selbstvertrauen",
        "folder": "selbstbewusstsein-aufbauen-tipps-fur-mehr-selbstvertrauen-3134"
      },
      {
        "id": "4460",
        "title": "Umgang mit Schuldgefühlen",
        "folder": "umgang-mit-schuldgefuhlen-4460"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Achtsamkeit+Resilienz+Selbstwert&t=3752"
  },
  "identitaet-selbstbild-und-jugend": {
    "slug": "identitaet-selbstbild-und-jugend",
    "title": "Identität, Selbstbild & Emotionale Intelligenz in der Jugend",
    "category": "Selbstwahrnehmung & Emotionale Kompetenz",
    "shortDesc": "Identitätsentwicklung in der Pubertät, Selbstbild, soziale Zugehörigkeit, erste Liebe und Liebeskummer.",
    "longDesc": "Die Jugendphase ist eine Zeit tiefgreifender Veränderungen. Wer bin ich? Wo gehöre ich hin? Wie finde ich meinen eigenen Weg zwischen Clique, Erwartungen und eigenen Wünschen? Die Entwicklung einer gefestigten Identität und emotionaler Intelligenz ist die Basis für ein selbstbestimmtes Erwachsenwerden.",
    "keyPoints": [
      "Identitätsfindung in der Adoleszenz: Loslösung, Selbstfindung, Rollenexperimente und persönliche Wertehierarchie",
      "Reales vs. ideales Selbstbild: Sich selbst mit allen Facetten annehmen und dem Druck von Schönheits- und Perfektionsidealen widerstehen",
      "Emotionale Intelligenz (EQ): Eigene Gefühle wahrnehmen, Gefühle anderer deuten und soziale Interaktionen feinfühlig gestalten",
      "Erste Liebe & Liebeskummer: Verliebtheit, Herzschmerz, emotionale Berg- und Talfahrten und heilsame Bewältigungsstrategien",
      "Gruppendruck vs. Eigenständigkeit: Zur eigenen Meinung stehen, auch wenn die Clique etwas anderes fordert"
    ],
    "exercises": [
      {
        "id": "5797",
        "title": "Förderung emotionaler Intelligenz",
        "folder": "forderung-emotionaler-intelligenz-5797"
      },
      {
        "id": "4433",
        "title": "Emotionale Intelligenz und soziale Kompetenz",
        "folder": "emotionale-intelligenz-und-soziale-kompetenz-4433"
      },
      {
        "id": "4444",
        "title": "Identität und Selbstbild formen",
        "folder": "identitat-und-selbstbild-formen-4444"
      },
      {
        "id": "2855",
        "title": "Identität und Selbstbild – Herausforderungen in der Adoleszenz",
        "folder": "identitat-und-selbstbild-herausforderungen-in-der-adoleszenz-2855"
      },
      {
        "id": "5823",
        "title": "Das Konzept der sozialen Identität",
        "folder": "konzept-sozialer-identitat-5823"
      },
      {
        "id": "erste-liebe-und-liebeskummer-in-der-literatur",
        "title": "Erste Liebe und Liebeskummer in der Jugendliteratur",
        "folder": "erste-liebe-und-liebeskummer-in-der-literatur"
      },
      {
        "id": "freundschaft-und-verrat-in-der-clique",
        "title": "Freundschaft, Loyalität und Verrat in der Clique",
        "folder": "freundschaft-und-verrat-in-der-clique"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Identitaet+Selbstbild+Pubertaet&t=3752"
  },
  "empathie-freundschaft-und-beziehungen": {
    "slug": "empathie-freundschaft-und-beziehungen",
    "title": "Empathie, Freundschaft, Vertrauen & Zwischenmenschliches",
    "category": "Beziehungen, Freundschaft & Familie",
    "shortDesc": "Perspektivenwechsel, Loyalität, Vertrauen unter Freunden, zwischenmenschliche Dynamiken und Konflikte lösen.",
    "longDesc": "Freundschaften geben Halt, Geborgenheit und Freude. Doch jede enge Beziehung erfordert auch Pflege, gegenseitige Rücksichtnahme, Ehrlichkeit und Empathie. Zu lernen, die Welt mit den Augen des anderen zu sehen, festigt Freundschaften fürs Leben.",
    "keyPoints": [
      "Empathie & Mitgefühl: Aktives Zuhören ohne Wertung, feine Signale von Mimik und Gestik verstehen und echten Beistand leisten",
      "Säulen wahrer Freundschaft: Vertrauen, Loyalität, Zuverlässigkeit, emotionale Unterstützung und gegenseitiger Freiraum",
      "Interpersonelle Dynamiken: Rollenverteilung in Freundeskreisen, Eifersucht reflektieren und Grenzen respektieren",
      "Konflikte unter Freunden: Offene Aussprache suchen, Fehler eingestehen, verzeihen können und Versöhnungsrituale",
      "Grenzen setzen: 'Nein' sagen dürfen, ohne die Freundschaft zu gefährden – gesunde Abgrenzung stärkt Beziehungen"
    ],
    "exercises": [
      {
        "id": "5780",
        "title": "Empathie und Mitgefühl im Alltag",
        "folder": "empathie-und-mitgefuhl-2-5780"
      },
      {
        "id": "4467",
        "title": "Wahre Freundschaft erkennen und pflegen",
        "folder": "wahre-freundschaft-4467"
      },
      {
        "id": "4450",
        "title": "Loyalität und Vertrauen unter Freunden",
        "folder": "loyalitat-und-vertrauen-unter-freunden-4450"
      },
      {
        "id": "4422",
        "title": "Die Bedeutung von zwischenmenschlichen Beziehungen",
        "folder": "die-bedeutung-von-beziehungen-4422"
      },
      {
        "id": "5820",
        "title": "Interpersonelle Beziehungen verstehen",
        "folder": "interpersonelle-beziehungen-verstehen-5820"
      },
      {
        "id": "4447",
        "title": "Konflikte unter Freunden lösen",
        "folder": "konflikte-unter-freunden-losen-4447"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Empathie+Freundschaft+Vertrauen&t=3752"
  },
  "familie-geschwister-und-generationen": {
    "slug": "familie-geschwister-und-generationen",
    "title": "Familie, Geschwisterdynamiken & Generationenkonflikte",
    "category": "Beziehungen, Freundschaft & Familie",
    "shortDesc": "Familiäre Rollen, Zusammenhalt, Geschwisterrivalität, moderne Familiengeschichten und Generationendialog.",
    "longDesc": "Die Familie ist der erste soziale Erfahrungsraum eines Menschen. Ob Großfamilie, Patchwork, Alleinerziehende oder Regenbogenfamilie: familiäres Zusammenleben birgt sowohl Geborgenheit als auch Konfliktpotenzial. Das Verständnis für verschiedene Generationen und familiäre Dynamiken fördert den häuslichen Frieden.",
    "keyPoints": [
      "Familienformen & Zusammenhalt: Vielfalt gelebter Familien, gemeinsame Rituale und emotionale Bindung",
      "Bedeutung von Familienmahlzeiten: Gemeinsamer Austausch am Esstisch als täglicher Anker für Zusammenhalt und Gesprächskultur",
      "Geschwisterdynamiken: Rivalität, Eifersucht, geteilte Elternaufmerksamkeit sowie lebenslange Geschwistersolidarität",
      "Moderne Eltern-Kind-Beziehungen: Wandelnde Rollenbilder, Väter im 21. Jahrhundert und partnerschaftliche Erziehung",
      "Generationenkonflikte: Wenn Jugendkultur auf Traditionen trifft – Verständigung durch Perspektivenübernahme und Respekt"
    ],
    "exercises": [
      {
        "id": "602",
        "title": "Lerninhalt: Die Familie – Rollen und Zusammenleben",
        "folder": "lerninhalt-die-familie-602"
      },
      {
        "id": "2660",
        "title": "Familienmahlzeiten und ihre Bedeutung für den Zusammenhalt",
        "folder": "familienmahlzeiten-und-ihre-bedeutung-2660"
      },
      {
        "id": "5754",
        "title": "Dynamiken in Geschwisterbeziehungen",
        "folder": "dynamiken-in-geschwisterbeziehungen-5754"
      },
      {
        "id": "die-rolle-des-vaters-in-modernen-familiengeschichten",
        "title": "Die Rolle des Vaters in modernen Familiengeschichten",
        "folder": "die-rolle-des-vaters-in-modernen-familiengeschichten"
      },
      {
        "id": "generationenkonflikte-wenn-jung-auf-alt-trifft",
        "title": "Generationenkonflikte – Wenn Jung auf Alt trifft",
        "folder": "generationenkonflikte-wenn-jung-auf-alt-trifft"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Familie+Geschwister+Generationen&t=3752"
  },
  "kommunikation-feedback-und-fehlerkultur": {
    "slug": "kommunikation-feedback-und-fehlerkultur",
    "title": "Kommunikation, Gewaltfreie Kommunikation (GFK) & Feedback",
    "category": "Kommunikation & Feedbackkultur",
    "shortDesc": "Die 4 Schritte der GFK nach Rosenberg, Ich-Botschaften, konstruktives Feedback geben und positive Fehlerkultur.",
    "longDesc": "Wie wir miteinander sprechen, bestimmt, wie wir miteinander auskommen. Gewaltfreie Kommunikation (GFK) ermöglicht es, eigene Bedürfnisse klar und vorwurfsfrei auszudrücken. Zusammen mit wertschätzendem Feedback und dem Mut, aus Fehlern zu lernen, entsteht ein angstfreies Gesprächs- und Lernklima.",
    "keyPoints": [
      "Gewaltfreie Kommunikation (GFK nach M. Rosenberg): 1. Beobachtung ohne Bewertung, 2. Gefühl benennen, 3. Bedürfnis formulieren, 4. Konkrete Bitte äußern",
      "Wolfssprache vs. Giraffensprache: Vorwürfe und Urteile ersetzen durch einfühlsame, verbindende Sprache",
      "Feedback-Regeln: Konstruktiv, konkret, beschreibend, zeitnah und als subjektive Wahrnehmung ('Ich-Botschaft') formuliert",
      "Feedback annehmen: Zuhören, nicht rechtfertigen, Danke sagen und selbst entscheiden, was man für die Weiterentwicklung übernimmt",
      "Konstruktive Fehlerkultur: Fehler sind unverzichtbare Lerngelegenheiten – eine offene Kultur nimmt die Angst vor Blamage"
    ],
    "exercises": [
      {
        "id": "3148",
        "title": "Feedback geben und empfangen – Wie du daraus lernst",
        "folder": "feedback-geben-und-empfangen-wie-du-daraus-lernst-3148"
      },
      {
        "id": "3151",
        "title": "Die Bedeutung von konstruktivem Feedback – So wirst du besser",
        "folder": "die-bedeutung-von-konstruktivem-feedback-so-wirst-du-besser-3151"
      },
      {
        "id": "3242",
        "title": "Feedback und Fehler machen – Konstruktive Fehlerkultur",
        "folder": "feedback-und-fehler-machen-3242"
      },
      {
        "id": "3146",
        "title": "Gespräche führen – Effektive Kommunikation in Konfliktsituationen",
        "folder": "gesprache-fuhren-so-kommunizierst-du-effektiv-in-konfliktsituationen-3146"
      },
      {
        "id": "4438",
        "title": "Gewaltfreie Kommunikation – Grundlagen und Haltung",
        "folder": "gewaltfreie-kommunikation-2-4438"
      },
      {
        "id": "3539",
        "title": "Gewaltfreie Kommunikation in der Alltagspraxis",
        "folder": "gewaltfreie-kommunikation-3539"
      },
      {
        "id": "2858",
        "title": "Konfliktlösung und gewaltfreie Kommunikation im Dialog",
        "folder": "konfliktlosung-und-gewaltfreie-kommunikation-2858"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Gewaltfreie+Kommunikation+Feedback&t=3752"
  },
  "konfliktloesung-streitkultur-und-fair-play": {
    "slug": "konfliktloesung-streitkultur-und-fair-play",
    "title": "Konfliktlösung, Streitkultur, Mediation & Fair Play",
    "category": "Konfliktlösung & Mediation",
    "shortDesc": "Konfliktursachen analysieren, der Konfliktbaum, Win-Win-Lösungen, Streitschlichtung und Fair Play im Sport.",
    "longDesc": "Wo Menschen zusammenleben und -arbeiten, entstehen Missverständnisse und Reibungen. Konflikte sind per se nichts Schlechtes – sie zeigen, was Beteiligten wichtig ist. Eine lösungsorientierte Streitkultur, der gezielte Perspektivenwechsel und gelebtes Fair Play verwandeln Streit in Chancen für gemeinsames Wachstum.",
    "keyPoints": [
      "Konfliktentstehung & Eskalationsstufen: Missverständnisse früh erkennen, bevor Streitigkeiten eskalieren",
      "Der Konfliktbaum: Wurzeln (Ursachen), Stamm (das aktuelle Problem) und Krone (Symptome/Auswirkungen) systematisch trennen",
      "Perspektivenübernahme: Sich in die Motive des Konfliktpartners versetzen – 'Was braucht der andere, um zustimmen zu können?'",
      "Streitschlichtung & Mediation: Neutrale Moderation, Redezeit-Regeln und Erarbeitung von fairen Win-Win-Vereinbarungen",
      "Fair Play & Sportsgeist: Ehrlichkeit, Respekt vor Gegnern und Schiedsrichtern sowie Haltung im Sieg und in der Niederlage"
    ],
    "exercises": [
      {
        "id": "5892",
        "title": "Strategien zur konstruktiven Konfliktlösung",
        "folder": "strategien-zur-konfliktlosung-5892"
      },
      {
        "id": "3144",
        "title": "Konflikte lösen – Tipps für friedliche Lösungen",
        "folder": "konflikte-losen-tipps-fur-friedliche-losungen-3144"
      },
      {
        "id": "3145",
        "title": "Der Konfliktbaum – Konflikte Schritt für Schritt analysieren",
        "folder": "der-konfliktbaum-wie-du-konflikte-schritt-fur-schritt-angehst-3145"
      },
      {
        "id": "3143",
        "title": "Die Perspektive wechseln – Konflikte besser verstehen",
        "folder": "die-perspektive-wechseln-wie-du-konflikte-besser-verstehst-3143"
      },
      {
        "id": "3241",
        "title": "Konfliktlösung im Schul- und Gruppenalltag",
        "folder": "konfliktlosung-3241"
      },
      {
        "id": "4435",
        "title": "Fair Play und Sportsgeist – Regeln des Miteinanders",
        "folder": "fair-play-und-sportsgeist-4435"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Konfliktloesung+Streitschlichtung+Fair+Play&t=3752"
  },
  "mobbingpraevention-cybermobbing-und-digitale-zivilcourage": {
    "slug": "mobbingpraevention-cybermobbing-und-digitale-zivilcourage",
    "title": "Mobbingprävention, Cybermobbing & Digitale Zivilcourage",
    "category": "Mobbingprävention, Zivilcourage & Gemeinschaft",
    "shortDesc": "Mobbing vs. Konflikt, Warnsignale, Cybermobbing stoppen, Hate Speech entgegentreten und Zivilcourage online wie offline.",
    "longDesc": "Mobbing schadet der Seele und vergiftet das soziale Klima. Im digitalen Raum verbreiten sich Gerüchte, Beleidigungen und Ausgrenzung oft rund um die Uhr. Zivilcourage bedeutet, nicht tatenlos wegzusehen oder weiterzuleiten, sondern aktiv Grenzen zu setzen, Betroffenen beizustehen und Unterstützung zu organisieren.",
    "keyPoints": [
      "Mobbing definieren: Wiederholter, gezielter und systematischer Machtmissbrauch gegen eine Person über längere Zeit",
      "Cybermobbing erkennen: Ausgrenzung aus Chatgruppen, Bloßstellen mit Fotos, Hater-Kommentare, Fake-Profile und Doxxing",
      "Schutz & Gegenmaßnahmen: Beweise sichern (Screenshots), Absender blockieren, Meldefunktionen nutzen und Vertrauenspersonen einbinden",
      "Sensibilisierung für Hate Speech: Verrohung der Sprache erkennen, Grenzen der Meinungsfreiheit und respektvoller Online-Ton",
      "Zivilcourage im Netz & Klassenraum: Opfer stärken, Beifall für Mobber verweigern, Gerüchte stoppen und Solidarität zeigen"
    ],
    "exercises": [
      {
        "id": "erkennen-und-vermeiden-von-cybermobbing",
        "title": "Erkennen und Vermeiden von Cybermobbing",
        "folder": "erkennen-und-vermeiden-von-cybermobbing"
      },
      {
        "id": "5851",
        "title": "Online-Verhalten und Sicherheit in sozialen Netzwerken",
        "folder": "online-verhalten-in-sozialen-netzwerken-5851"
      },
      {
        "id": "mobbing-in-der-schule-als-thema-in-jugendbuechern",
        "title": "Mobbing in der Schule als Thema in Jugendbüchern",
        "folder": "mobbing-in-der-schule-als-thema-in-jugendbuechern"
      },
      {
        "id": "mobbing-im-netz-literarische-beispiele-fuer-cybermobbing",
        "title": "Mobbing im Netz – Literarische Beispiele für Cybermobbing",
        "folder": "mobbing-im-netz-literarische-beispiele-fuer-cybermobbing"
      },
      {
        "id": "4473",
        "title": "Zugehörigkeit, Gruppendruck und Ausgrenzung",
        "folder": "zugehorigkeit-und-ausgrenzung-4473"
      },
      {
        "id": "sensibilisierung-fuer-hate-speech-und-respektvolle-sprache",
        "title": "Sensibilisierung für Hate Speech und respektvolle Sprache",
        "folder": "sensibilisierung-fuer-hate-speech-und-respektvolle-sprache"
      },
      {
        "id": "respektvolle-online-diskussion-und-konfliktloesung",
        "title": "Respektvolle Online-Diskussion und Konfliktlösung",
        "folder": "respektvolle-online-diskussion-und-konfliktloesung"
      },
      {
        "id": "fairness-und-verantwortung-in-online-kommunikation",
        "title": "Fairness und Verantwortung in digitaler Kommunikation",
        "folder": "fairness-und-verantwortung-in-online-kommunikation"
      },
      {
        "id": "konstruktive-kommunikation-in-sozialen-medien",
        "title": "Konstruktive Kommunikation in sozialen Medien",
        "folder": "konstruktive-kommunikation-in-sozialen-medien"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Cybermobbing+Zivilcourage+Mobbing&t=3752"
  },
  "inklusion-gemeinschaft-und-soziale-projekte": {
    "slug": "inklusion-gemeinschaft-und-soziale-projekte",
    "title": "Inklusion, Vielfalt, Escape Room & Soziale Lernlieder",
    "category": "Mobbingprävention, Zivilcourage & Gemeinschaft",
    "shortDesc": "Inklusion in Schule und Sport, Barrierefreiheit, Escape Room Rätsel und Lieder zum sozialemotionalen Lernen.",
    "longDesc": "Eine lebendige Gemeinschaft zeichnet sich dadurch aus, dass jeder Mensch mit seinen individuellen Besonderheiten willkommen ist. Inklusion baut Vorurteile und Barrieren ab. Mit interaktiven Escape-Room-Rätseln und motivierenden Liedern wird das sozialemotionale Miteinander spielerisch und kreativ erlebbar gemacht.",
    "keyPoints": [
      "Inklusion & Barrierefreiheit: Gleiche Rechte, Teilhabe und Wertschätzung für Menschen mit und ohne Behinderung",
      "Inklusion im Sport: Vielfalt in Bewegung, Unified Sports und gemeinsame Sporterlebnisse ohne Vorurteile",
      "Escape Room Soziale Themen: Kooperatives Lösen von Rätseln im Team, Zusammenhalt und gegenseitige Unterstützung",
      "Musik & Gefühle: Songs als Ausdrucksmittel für Ängste, Träume, Zusammenhalt und soziale Werte",
      "Gemeinschaftsprojekte: Gemeinsam stark sein durch Klassenrat, Patenschaften und Teambuilding"
    ],
    "exercises": [
      {
        "id": "1131",
        "title": "Inklusion – Vielfalt und Teilhabe in der Gesellschaft",
        "folder": "inklusion-1131"
      },
      {
        "id": "4445",
        "title": "Inklusion im Sport und Freizeitbereich",
        "folder": "inklusion-im-sport-4445"
      },
      {
        "id": "3198",
        "title": "Escape Room: Rätsel zu sozialen Themen lösen",
        "folder": "escape-room-quot-soziale-themen-quot-3198"
      },
      {
        "id": "3237",
        "title": "Songs zum sozialemotionalen Lernen (Teil 1)",
        "folder": "songs-quot-sozialemotionales-lernen-quot-3237"
      },
      {
        "id": "3298",
        "title": "Songs zum sozialemotionalen Lernen (Teil 2)",
        "folder": "songs-quot-sozialemotionales-lernen-quot-2-3298"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Inklusion+Klassenrat+Soziale+Projekte&t=3752"
  }
};
