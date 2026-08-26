export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface EthikTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const ethikCategories: string[] = [
  "Grundlagen & Ethische Theorien",
  "Angewandte Ethik, Medizin & Technik",
  "Zusammenleben, Frieden & Globale Gerechtigkeit"
];

export const ethikTopics: Record<string, EthikTopic> = {
  "grundlagen-und-theorien-der-ethik": {
    "slug": "grundlagen-und-theorien-der-ethik",
    "title": "Grundlagen, Theorien & Dilemmata der Ethik",
    "category": "Grundlagen & Ethische Theorien",
    "shortDesc": "Werte und Normen, Moralisches Handeln, Gewissen, Pflichtethik, Utilitarismus, Tugendethik und ethische Entscheidungsfindung.",
    "longDesc": "Ethik ist das methodische Nachdenken über Moral und gerechtes Handeln. Was ist gut? Was soll ich tun? Anhand klassischer ethischer Modelle und moralischer Dilemmata lernen Schülerinnen und Schüler, eigene Standpunkte begründet zu vertreten.",
    "keyPoints": [
      "Ethik vs. Moral: Moral bezeichnet gelebte Regeln und Werte einer Gesellschaft; Ethik ist die wissenschaftliche Reflexion und Begründung dieser Normen",
      "Klassische Theorien: Pflichtethik (Kant: Kategorischer Imperativ, Gesinnungsethik) vs. Utilitarismus (Bentham/Mill: Nutzen für die Allgemeinheit, Folgenethik)",
      "Tugendethik: Streben nach Charaktertugenden wie Mut, Mäßigung, Gerechtigkeit und Klugheit für ein gelingendes Leben",
      "Das Gewissen: Innere Urteilsinstanz über Gut und Böse, geprägt durch Erziehung, Reflexion und Empathie",
      "Moralische Dilemmata: Situationen, in denen zwei moralische Pflichten unauflösbar miteinander in Konflikt stehen"
    ],
    "exercises": [
      { id: "2837", title: "Definition von Ethik und Moral", folder: "definition-von-ethik-und-moral-2837" },
      { id: "2861", title: "Menschenrechte und ihre Bedeutung", folder: "menschenrechte-und-ihre-bedeutung-2861" },
      { id: "2838", title: "Die Bedeutung von Empathie", folder: "die-bedeutung-von-empathie-2838" },
      {
        "id": "4459",
        "title": "Tugendethik in der Praxis",
        "folder": "tugendethik-4459"
      },
      {
        "id": "5788",
        "title": "Ethik und Moralphilosophie",
        "folder": "ethik-und-moralphilosophie-5788"
      },
      {
        "id": "5844",
        "title": "Moral und Ethik – Grundwissen",
        "folder": "moral-und-ethik-5844"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Ethik+Grundlagen+Theorien&t=3752"
  },
  "selbstbestimmung-freiheit-und-sinn": {
    "slug": "selbstbestimmung-freiheit-und-sinn",
    "title": "Selbstbestimmung, Freiheit & Der Sinn des Lebens",
    "category": "Grundlagen & Ethische Theorien",
    "shortDesc": "Grenzen setzen, Nein sagen, Freier Wille versus Determinismus, Selbstverantwortung und Sinnfindung.",
    "longDesc": "Wer bin ich, und wie möchte ich mein Leben gestalten? Selbstbestimmung bedeutet, eigene Werte zu finden, Grenzen zu setzen und Verantwortung für die eigenen Entscheidungen zu übernehmen.",
    "keyPoints": [
      "Grenzen setzen: Für sich selbst einstehen, ohne schlechtes Gewissen 'Nein' sagen und die Grenzen anderer respektieren",
      "Freiheit und Verantwortung: Echte Freiheit existiert nur Hand in Hand mit der Verantwortung für die Konsequenzen des eigenen Handelns",
      "Freier Wille: Debatte zwischen Willensfreiheit (Fähigkeit zu bewussten Entscheidungen) und biologisch-sozialem Determinismus",
      "Sinn des Lebens: Sinn entsteht durch Werte, Beziehungen, soziales Engagement, Selbstverwirklichung und gelebte Ideale"
    ],
    "exercises": [
      {
        "id": "4440",
        "title": "Grenzen setzen und Nein sagen",
        "folder": "grenzen-setzen-und-nein-sagen-4440"
      },
      {
        "id": "4418",
        "title": "Der Sinn des Lebens – Philosophische Perspektiven",
        "folder": "der-sinn-des-lebens-4418"
      },
      {
        "id": "4436",
        "title": "Freier Wille und Freiheit",
        "folder": "freier-wille-und-freiheit-4436"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Selbstbestimmung+Freiheit+Sinn+des+Lebens&t=3752"
  },
  "medizin-bio-und-sterbehilfe": {
    "slug": "medizin-bio-und-sterbehilfe",
    "title": "Medizin-, Bioethik, Sterbehilfe & Hospizarbeit",
    "category": "Angewandte Ethik, Medizin & Technik",
    "shortDesc": "Genmanipulation, künstliche Fortpflanzung, Organspende, Sterbehilfe-Debatte, Hospizbewegung und Palliativversorgung.",
    "longDesc": "Moderne Medizin eröffnet enorme Möglichkeiten, wirft aber tiefgreifende ethische Konflikte auf. Wo beginnt und wo endet menschliches Leben? Welche Würde gebührt Sterbenden?",
    "keyPoints": [
      "Bio- und Gentechnik: Ethische Grenzen bei CRISPR, Klonen, Gentherapie und Designerbabys",
      "Fortpflanzungsmedizin: In-vitro-Fertilisation, Präimplantationsdiagnostik (PID) und Leihmutterschaft",
      "Sterbehilfe: Aktive vs. passive vs. indirekte Sterbehilfe sowie assistierter Suizid – Argumente für Selbstbestimmung vs. Lebensschutz",
      "Hospiz und Palliativmedizin: Begleitung sterbender Menschen mit Würde, Schmerzlinderung und menschlicher Nähe",
      "Trauerbewältigung: Die verschiedenen Phasen der Trauer verstehen und Betroffenen beistehen"
    ],
    "exercises": [
      { id: "2849", title: "Ethische Fragen in der Medizin", folder: "ethische-fragen-in-der-medizin-2849" },
      {
        "id": "2842",
        "title": "Ethik in der künstlichen Fortpflanzung",
        "folder": "ethik-in-der-kunstlichen-fortpflanzung-2842"
      },
      {
        "id": "2770",
        "title": "Die Ethik der genetischen Manipulation",
        "folder": "die-ethik-der-genetischen-manipulation-2770"
      },
      {
        "id": "4419",
        "title": "Der Umgang mit dem Tod",
        "folder": "der-umgang-mit-dem-tod-4419"
      },
      {
        "id": "4457",
        "title": "Sterbehilfe – Ethische Fragen und Positionen",
        "folder": "sterbehilfe-ethische-fragen-4457"
      },
      {
        "id": "4424",
        "title": "Die Bedeutung von Trauer",
        "folder": "die-bedeutung-von-trauer-4424"
      },
      {
        "id": "4443",
        "title": "Hospizbewegung und palliative Versorgung",
        "folder": "hospizbewegung-und-palliative-versorgung-4443"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medizinethik+Sterbehilfe+Hospiz&t=3752"
  },
  "technologie-medien-und-umweltethik": {
    "slug": "technologie-medien-und-umweltethik",
    "title": "Technologie-, Medien-, Tier- & Konsumethik",
    "category": "Angewandte Ethik, Medizin & Technik",
    "shortDesc": "Künstliche Intelligenz, Fake News, Filterblasen, Tierethik, Massentierhaltung, Fairer Handel und nachhaltiger Konsum.",
    "longDesc": "Die digitale Transformation und globale Klimakrise verlangen neue ethische Antworten. Wie gehen wir mit Algorithmen, sozialen Netzwerken, Tierrechten und unserem Konsumverhalten um?",
    "keyPoints": [
      "Medienethik: Verantwortung im Internet, Erkennen von Fake News, Privatsphäre und Schutz vor Cybermobbing",
      "KI & Technikethik: Autonome Entscheidungen von Algorithmen, Überwachungstechnologien und digitale Menschenrechte",
      "Tierethik (Peter Singer): Tiere als empfindungsfähige Wesen – Kritik an Massentierhaltung und Tierversuchen",
      "Konsum- & Umweltethik: Verantwortung für die globale Schöpfung, Fair Trade, Lieferkettensorgfalt und Müllvermeidung"
    ],
    "exercises": [
      { id: "2836", title: "Automatisierung und Arbeitsplatzverlust", folder: "automatisierung-und-arbeitsplatzverlust-2836" },
      {
        "id": "2860",
        "title": "Medienethik und Fake News",
        "folder": "medienethik-und-fake-news-2860"
      },
      { id: "4427", title: "Die Macht der Bilder in den Medien", folder: "die-macht-der-bilder-in-den-medien-4427" },
      { id: "4452", title: "Nachhaltiger Konsum und bewusster Konsum", folder: "nachhaltiger-konsum-und-bewusster-konsum-4452" },
      {
        "id": "2841",
        "title": "Ethik im Sport: Doping und Fair Play",
        "folder": "ethik-im-sport-doping-und-fair-play-2841"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medienethik+Tierethik+Umweltethik&t=3752"
  },
  "freundschaft-frieden-und-gerechtigkeit": {
    "slug": "freundschaft-frieden-und-gerechtigkeit",
    "title": "Freundschaft, Frieden, Konflikte & Globale Gerechtigkeit",
    "category": "Zusammenleben, Frieden & Globale Gerechtigkeit",
    "shortDesc": "Vertrauen, Vorurteile abbauen, Ursachen von Kriegen, Wege zum Frieden, Vergebung, Armutsbekämpfung und Ressourcengerechtigkeit.",
    "longDesc": "Ein friedliches und gerechtes Zusammenleben beginnt im persönlichen Umfeld und reicht bis zur internationalen Weltpolitik. Wie gelingt Versöhnung nach Streit? Wie lässt sich globale Ungleichheit überwinden?",
    "keyPoints": [
      "Freundschaft & Vertrauen: Respekt, Verlässlichkeit, Ehrlichkeit und der Umgang mit Enttäuschungen und Verrat",
      "Vorurteile & Toleranz: Mechanismen von Stereotypen erkennen und ihnen mit Offenheit und Fakten begegnen",
      "Friedensethik: Ursachen von Kriegen (Ressourcen, Macht, Ideologien) und Wege zur friedlichen Konfliktlösung (Diplomatie, Abrüstung, Versöhnung)",
      "Vergebung vs. Strafe: Bedeutung von Vergebung für dauerhaften Frieden; Sinn von Strafen (Vergeltung vs. Resozialisierung)",
      "Globale Gerechtigkeit: Ungleiche Wohlstandsverteilung zwischen Globalem Norden und Süden, Klimagerechtigkeit und Entwicklungszusammenarbeit"
    ],
    "exercises": [
      {
        "id": "4467",
        "title": "Wahre Freundschaft und Vertrauen",
        "folder": "wahre-freundschaft-4467"
      },
      {
        "id": "4461",
        "title": "Ursachen von Kriegen und Konflikten",
        "folder": "ursachen-von-kriegen-und-konflikten-4461"
      },
      {
        "id": "4469",
        "title": "Wege zum Frieden",
        "folder": "wege-zum-frieden-4469"
      },
      {
        "id": "4425",
        "title": "Die Bedeutung von Versöhnung",
        "folder": "die-bedeutung-von-versohnung-4425"
      },
      { id: "4464", title: "Vergebung und Vesöhnung", folder: "vergebung-und-vesohnung-4464" },
      {
        "id": "4455",
        "title": "Schuld und Strafe",
        "folder": "schuld-und-strafe-4455"
      },
      {
        "id": "4439",
        "title": "Globale Ungleichheit und Armut",
        "folder": "globale-ungleichheit-und-armut-4439"
      },
      { id: "4428", title: "Die Verantwortung der reichen Länder", folder: "die-verantwortung-der-reichen-lander-4428" },
      {
        "id": "4470",
        "title": "Wege zur Bekämpfung der Armut",
        "folder": "wege-zur-bekampfung-der-armut-4470"
      },
      {
        "id": "4474",
        "title": "Gerechte Verteilung von Ressourcen",
        "folder": "gerechte-verteilung-von-ressourcen-4474"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Gerechtigkeit+Frieden+Freundschaft+Ethik&t=3752"
  }
};
