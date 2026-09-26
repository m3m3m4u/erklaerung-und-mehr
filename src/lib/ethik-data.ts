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
  "Freiheit, Sinn & Gelingendes Leben",
  "Angewandte Ethik: Bio-, Medizin- & Umweltethik",
  "Digitale Ethik & Moderne Technologien",
  "Zusammenleben, Frieden & Globale Gerechtigkeit"
];

export const ethikTopics: Record<string, EthikTopic> = {
  "grundlagen-werte-und-normen": {
    slug: "grundlagen-werte-und-normen",
    title: "Werte, Normen & Grundlagen der Ethik",
    category: "Grundlagen & Ethische Theorien",
    shortDesc: "Werte und Normen, Moralisches Handeln, Gewissen, Vernunft und ethische Grundbegriffe im Überblick.",
    longDesc: "Ethik ist die systematische Reflexion über Moral, Werte und gerechtes Handeln. Was ist das Gute? Warum handeln Menschen moralisch oder unmoralisch? In diesem Themenbereich lernen Schülerinnen und Schüler den Unterschied zwischen gelebter Moral und philosophischer Ethik, erforschen die Entstehung gesellschaftlicher Normen und reflektieren über Gewissen, Vernunft und kulturelle Wertesysteme.",
    keyPoints: [
      "Ethik vs. Moral: Moral bezeichnet die gelebten Regeln und Werte einer Gemeinschaft; Ethik ist die wissenschaftliche Reflexion und Begründung dieser Normen",
      "Werte und Normen: Werte sind erstrebenswerte Ideale (Freiheit, Respekt, Gerechtigkeit); Normen sind konkrete Handlungsanweisungen, Gebote und Verbote",
      "Das Gewissen: Innere Urteilsinstanz über Gut und Böse, geformt durch Erziehung, soziale Erfahrung und vernunftgeleitete Reflexion",
      "Vernunft und Gefühl: Die Rolle von rationalem Denken vs. emotionaler Intuition bei moralischen Entscheidungen",
      "Kritik an Normen: Wie und warum verändern sich gesellschaftliche und kulturelle Wertmaßstäbe im historischen Wandel?"
],
    exercises: [
      {
            "id": "2837",
            "title": "Definition von Ethik und Moral",
            "folder": "definition-von-ethik-und-moral-2837"
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
      },
      {
            "id": "5921",
            "title": "Moral und Ethik Vertiefung",
            "folder": "moral-und-ethik-2-5921"
      },
      {
            "id": "4471",
            "title": "Werte und Überzeugungen",
            "folder": "werte-und-berzeugungen-4471"
      },
      {
            "id": "5912",
            "title": "Wertetheorie und Normen",
            "folder": "wertetheorie-und-normen-5912"
      },
      {
            "id": "5827",
            "title": "Kritik gesellschaftlicher Normen",
            "folder": "kritik-gesellschaftlicher-normen-5827"
      },
      {
            "id": "5828",
            "title": "Kritik kultureller Werte",
            "folder": "kritik-kultureller-werte-5828"
      },
      {
            "id": "2760",
            "title": "Vernunft und Moral",
            "folder": "der-zusammenhang-zwischen-vernunft-und-moral-2760"
      },
      {
            "id": "2779",
            "title": "Die Natur der Moral",
            "folder": "die-natur-der-moral-2779"
      },
      {
            "id": "5799",
            "title": "Grundfragen der Ethik",
            "folder": "fragen-der-ethik-5799"
      },
      {
            "id": "5831",
            "title": "Kritische Ethik-Perspektiven",
            "folder": "kritische-ethik-perspektiven-5831"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Ethik+Werte+Normen&t=3752"
  },
  "pflichtethik-und-deontologie": {
    slug: "pflichtethik-und-deontologie",
    title: "Pflichtethik, Deontologie & Moralphilosophie",
    category: "Grundlagen & Ethische Theorien",
    shortDesc: "Immanuel Kant, Kategorischer Imperativ, Pflicht aus Achtung vor dem Sittengesetz und Deontologie vs. Teleologie.",
    longDesc: "Die Pflichtethik (Deontologie), maßgeblich begründet durch Immanuel Kant, beurteilt Handlungen nicht nach ihren Folgen, sondern nach ihrer inneren Gesinnung und Pflichtgemäßheit. Eine Handlung ist nur dann moralisch gut, wenn sie aus Pflicht und nach verallgemeinerbaren Maximen geschieht.",
    keyPoints: [
      "Deontologie (Gesinnungsethik): Der moralische Wert einer Handlung liegt in der Handlung selbst (Pflicht) und nicht in den Konsequenzen",
      "Kategorischer Imperativ: 'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde'",
      "Menschheitszweckformel: Der Mensch darf niemals bloß als Mittel zum Zweck gebraucht werden, sondern stets zugleich als Zweck an sich (Menschenwürde)",
      "Recht und Moral: Die Trennung und Verbindung von äußerer Legalität (Rechtsordnung) und innerer Moralität (persönliche Gesinnung)",
      "Deontologischer Konstruktivismus: Moderne Weiterentwicklungen der Pflichtethik in Recht und Gesellschaft"
],
    exercises: [
      {
            "id": "4417",
            "title": "Deontologie und Pflichtethik",
            "folder": "deontologie-pflichtethik-4417"
      },
      {
            "id": "2759",
            "title": "Deontologische vs. teleologische Ethik",
            "folder": "der-vergleich-von-deontologischer-und-teleologischer-ethik-2759"
      },
      {
            "id": "2785",
            "title": "Deontologischer Konstruktivismus",
            "folder": "die-theorie-des-deontologischen-konstruktivismus-2785"
      },
      {
            "id": "4453",
            "title": "Recht und Moral",
            "folder": "recht-und-moral-4453"
      },
      {
            "id": "2768",
            "title": "Moral und Gesetzgebung",
            "folder": "die-debatte-um-moral-und-gesetzgebung-2768"
      },
      {
            "id": "5846",
            "title": "Moralphilosophische Ansätze",
            "folder": "moralische-philosophie-ansatze-5846"
      },
      {
            "id": "5859",
            "title": "Philosophie der Moralität",
            "folder": "philosophie-der-moralitat-5859"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Pflichtethik+Kant+Deontologie&t=3752"
  },
  "utilitarismus-und-folgenethik": {
    slug: "utilitarismus-und-folgenethik",
    title: "Utilitarismus & Folgenethik",
    category: "Grundlagen & Ethische Theorien",
    shortDesc: "Jeremy Bentham, John Stuart Mill, das Prinzip des größten Glücks der größten Zahl und moderne utilitaristische Konflikte.",
    longDesc: "Der Utilitarismus (Teleologie/Konsequentialismus) beurteilt die moralische Richtigkeit einer Handlung ausschließlich nach ihren Folgen: Richtig ist die Handlung, die das größtmögliche Glück für die größtmögliche Zahl an Betroffenen hervorbringt. Dieses Modell wird heute in vielen gesellschaftlichen Debatten kontrovers diskutiert.",
    keyPoints: [
      "Die vier utilitaristischen Prinzipien: Konsequenzenprinzip (Folgen), Utilitätsprinzip (Nutzen), hedonistisches Prinzip (Glück/Freude), universalistisches Prinzip (Wohlergehen aller)",
      "Bentham vs. Mill: Benthams quantitativer Utilitarismus (Glückskalkül) vs. Mills qualitativer Utilitarismus (höhere geistige Freuden)",
      "Handlungs- vs. Regelutilitarismus: Beurteilung der Einzelfallhandlung vs. Befolgung allgemeiner nützlicher Regeln",
      "Utilitarismus vs. Menschenwürde: Darf das Glück vieler Menschen mit der Verletzung der Rechte einzelner Individuen erkauft werden?",
      "Moderne Anwendungsfelder: Globale Armut (Peter Singer), Ressourcenknappheit und Klimagerechtigkeit"
],
    exercises: [
      {
            "id": "4462",
            "title": "Utilitarismus (Nutzengrundsatz)",
            "folder": "utilitarismus-4462"
      },
      {
            "id": "2754",
            "title": "Utilitarismus vs. Menschenwürde",
            "folder": "der-konflikt-zwischen-utilitarismus-und-menschenwurde-2754"
      },
      {
            "id": "2755",
            "title": "Utilitarismus und globale Armut",
            "folder": "der-utilitarismus-und-das-problem-der-globalen-armut-2755"
      },
      {
            "id": "2756",
            "title": "Utilitarismus und Ressourcenknappheit",
            "folder": "der-utilitarismus-und-das-problem-der-ressourcenknappheit-2756"
      },
      {
            "id": "2757",
            "title": "Utilitarismus und Klimawandel",
            "folder": "der-utilitarismus-und-das-problem-des-klimawandels-2757"
      },
      {
            "id": "2758",
            "title": "Utilitarismus und der Wert von Kunst",
            "folder": "der-utilitarismus-und-die-frage-nach-dem-wert-von-kunst-2758"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Utilitarismus+Folgenethik&t=3752"
  },
  "tugendethik-diskursethik-und-dilemmata": {
    slug: "tugendethik-diskursethik-und-dilemmata",
    title: "Tugendethik, Diskursethik & Ethische Dilemmata",
    category: "Grundlagen & Ethische Theorien",
    shortDesc: "Aristoteles' Mesotes-Lehre, Martha Nussbaum, Diskursethik nach Habermas, Wahrheit, Notlügen und moralische Dilemmata.",
    longDesc: "Moralisches Handeln lässt sich nicht immer durch starre Formeln lösen. Die Tugendethik fokussiert auf den Charakter des Handelnden und das rechte Maß. Die Diskursethik sucht im herrschaftsfreien Dialog nach Konsens. In moralischen Dilemmata stehen Pflichten unauflösbar im Konflikt.",
    keyPoints: [
      "Tugendethik (Aristoteles): Tugend als Mitte zwischen zwei Extremen (z. B. Tapferkeit zwischen Feigheit und Tollkühnheit)",
      "Fähigkeitenansatz (Martha Nussbaum): Was braucht ein Mensch für ein gelingendes, würdevolles Leben?",
      "Diskursethik (Habermas & Apel): Nur Normen sind gültig, denen alle Betroffenen in einem fairen, vernünftigen Diskurs zustimmen können",
      "Wahrhaftigkeit vs. Notlüge: Kants Lügenverbot vs. Schutz von Menschenleben (das klassische Mörder-an-der-Tür-Dilemma)",
      "Theologische Ethik: Feindesliebe, Nächstenliebe und christliche Ethik im Dialog mit der säkularen Philosophie"
],
    exercises: [
      {
            "id": "4459",
            "title": "Tugendethik in der Praxis",
            "folder": "tugendethik-4459"
      },
      {
            "id": "5930",
            "title": "Grundlagen der Tugendethik",
            "folder": "grundlagen-der-tugendethik-5930"
      },
      {
            "id": "2784",
            "title": "Tugendethik von Martha Nussbaum",
            "folder": "die-theorie-der-tugendethik-von-martha-nussbaum-2784"
      },
      {
            "id": "4430",
            "title": "Diskursethik (Jürgen Habermas)",
            "folder": "diskursethik-4430"
      },
      {
            "id": "5845",
            "title": "Moralische Dilemmata analysieren",
            "folder": "moralische-dilemmata-analysieren-5845"
      },
      {
            "id": "4468",
            "title": "Wahrheit, Notlügen und Lügen",
            "folder": "wahrheit-notlugen-und-lugen-4468"
      },
      {
            "id": "5884",
            "title": "Pragmatismus und Wahrheit",
            "folder": "pragmatismus-und-wahrheit-5884"
      },
      {
            "id": "2771",
            "title": "Ethik des stellvertretenden Handelns",
            "folder": "die-ethik-des-stellvertretenden-handelns-2771"
      },
      {
            "id": "6444",
            "title": "Christliche Ethik und Nächstenliebe",
            "folder": "christliche-ethik-6444"
      },
      {
            "id": "6663",
            "title": "Jesu Ethik: Bergpredigt & Feindesliebe",
            "folder": "jesu-ethik-feindesliebe-6663"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Tugendethik+Diskursethik+Dilemmata&t=3752"
  },
  "glueck-und-gelingendes-leben": {
    slug: "glueck-und-gelingendes-leben",
    title: "Glück, Lebenszufriedenheit & Eudaimonie",
    category: "Freiheit, Sinn & Gelingendes Leben",
    shortDesc: "Hedonismus, Eudaimonie, Glücksforschung, soziale Unterstützung und die Gefahren des Egoismus.",
    longDesc: "Was bedeutet es, ein glückliches Leben zu führen? Seit der Antike ringen Denker um den Begriff des Glücks: Ist es flüchtige Sinneslust (Hedonismus) oder die dauerhafte Seelenruhe und Tugendhaftigkeit (Eudaimonie)? Auch die moderne Glücksforschung liefert spannende Erkenntnisse.",
    keyPoints: [
      "Glücksbegriffe: Zufallsglück ('Glück haben'), Wohlfühlglück (Momentanes Empfinden) und Lebensglück (Zufriedenheit mit dem Gesamtdasein)",
      "Hedonismus vs. Eudaimonie: Epikurs Lehre von der Schmerzfreiheit und Mäßigung vs. Aristoteles' Idee des tätigen, gelingenden Lebens",
      "Moderne Glücksforschung: Materielle Sicherheit ist wichtig, doch soziale Beziehungen, Gemeinschaft und Sinnerleben wiegen langfristig schwerer",
      "Egoismus vs. Altruismus: Warum rücksichtsloser Egoismus das eigene Wohlbefinden sabotiert und Hilfsbereitschaft glücklich macht"
],
    exercises: [
      {
            "id": "2718",
            "title": "Glück und Lebenszufriedenheit",
            "folder": "gluck-und-lebenszufriedenheit-2718"
      },
      {
            "id": "2702",
            "title": "Glück und soziale Unterstützung",
            "folder": "der-zusammenhang-zwischen-gluck-und-sozialer-unterstutzung-2702"
      },
      {
            "id": "5802",
            "title": "Glück und Lebenssinn",
            "folder": "gluck-und-lebenssinn-5802"
      },
      {
            "id": "2781",
            "title": "Die Problematik des Egoismus",
            "folder": "die-problematik-des-egoismus-2781"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Glück+Lebenssinn+Ethik&t=3752"
  },
  "freiheit-wille-und-determinismus": {
    slug: "freiheit-wille-und-determinismus",
    title: "Freiheit, Freier Wille & Determinismus",
    category: "Freiheit, Sinn & Gelingendes Leben",
    shortDesc: "Handlungs- und Willensfreiheit, Neurobiologie, Determinismus und die Fähigkeit, Grenzen zu setzen.",
    longDesc: "Sind wir in unseren Entscheidungen wirklich frei oder durch Gene, Psyche und Umwelt vorbestimmt? Die Frage nach der Willensfreiheit berührt die Grundlagen von Verantwortung und Schuld im moralischen und rechtlichen Sinn.",
    keyPoints: [
      "Handlungsfreiheit vs. Willensfreiheit: Tun können, was man will vs. frei bestimmen können, was man will",
      "Determinismus: Die Annahme, dass alle Ereignisse – auch menschliche Gedanken und Entschlüsse – durch vorangegangene Ursachen lückenlos festgelegt sind",
      "Hirnforschung & Libet-Experiment: Debatte über Bereitschaftspotenziale und die reale Kontrollfähigkeit des Bewusstseins",
      "Kompatibilismus vs. Inkompatibilismus: Kann menschliche Freiheit mit einer determinierten Natur koexistieren?",
      "Praktische Selbstbestimmung: Eigene Grenzen spüren, reflektiert entscheiden und selbstbewusst 'Nein' sagen lernen"
],
    exercises: [
      {
            "id": "4436",
            "title": "Freier Wille und Freiheit",
            "folder": "freier-wille-und-freiheit-4436"
      },
      {
            "id": "5750",
            "title": "Determinismus und Freiheit",
            "folder": "determinismus-und-freiheit-5750"
      },
      {
            "id": "5825",
            "title": "Kritik am Determinismus",
            "folder": "kritik-an-determinismus-5825"
      },
      {
            "id": "4440",
            "title": "Grenzen setzen und Nein sagen",
            "folder": "grenzen-setzen-und-nein-sagen-4440"
      },
      {
            "id": "2791",
            "title": "John Stuart Mills Konzept der Freiheit",
            "folder": "john-stuart-mills-konzept-der-freiheit-2791"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Freier+Wille+Freiheit+Determinismus&t=3752"
  },
  "lebenssinn-und-verantwortung": {
    slug: "lebenssinn-und-verantwortung",
    title: "Lebenssinn & Ethik der Verantwortung",
    category: "Freiheit, Sinn & Gelingendes Leben",
    shortDesc: "Existenzielle Sinnsuche, Hans Jonas' Prinzip Verantwortung und Verpflichtung gegenüber künftigen Generationen.",
    longDesc: "Woher schöpfen wir Sinn im Leben? Gibt es einen vorgegebenen Lebensplan oder müssen wir unserem Dasein selbst Bedeutung verleihen? Eng verknüpft mit dem Sinn ist die Verantwortung für unser Handeln, für unsere Mitmenschen und für die Menschheit der Zukunft.",
    keyPoints: [
      "Existenzialistische Sinnfindung: Sinn ist nicht vorgegeben, sondern muss durch eigene Entscheidungen, Werte und Taten aktiv geschaffen werden",
      "Das Prinzip Verantwortung (Hans Jonas): 'Handle so, dass die Wirkungen deiner Handlung verträglich sind mit der Permanenz echten menschlichen Lebens auf Erden'",
      "Grenzen der Verantwortung: Wo endet persönliche Verantwortung und wo beginnt Überforderung oder institutionelle Pflicht?",
      "Intergenerationelle Verantwortung: Welche Pflichten haben die heute Lebenden gegenüber zukünftigen Generationen bezüglich Natur, Ressourcen und Frieden?"
],
    exercises: [
      {
            "id": "4418",
            "title": "Der Sinn des Lebens – Philosophische Perspektiven",
            "folder": "der-sinn-des-lebens-4418"
      },
      {
            "id": "2773",
            "title": "Die Frage nach dem Sinn des Lebens",
            "folder": "die-frage-nach-dem-sinn-des-lebens-2773"
      },
      {
            "id": "5786",
            "title": "Ethik der Verantwortung (Hans Jonas)",
            "folder": "ethik-der-verantwortung-5786"
      },
      {
            "id": "4426",
            "title": "Die Grenzen der Verantwortung",
            "folder": "die-grenzen-der-verantwortung-4426"
      },
      {
            "id": "2870",
            "title": "Verantwortung für zukünftige Generationen",
            "folder": "verantwortung-gegenuber-zukunftigen-generationen-2870"
      },
      {
            "id": "3132",
            "title": "Wer bin ich – Die Kunst der Selbstreflexion",
            "folder": "wer-bin-ich-die-kunst-der-selbstreflexion-3132"
      },
      {
            "id": "3183",
            "title": "Selbstreflexion",
            "folder": "selbstreflexion-3183"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sinn+des+Lebens+Verantwortung&t=3752"
  },
  "medizin-und-bioethik": {
    slug: "medizin-und-bioethik",
    title: "Medizin-, Bio- & Forschungsethik",
    category: "Angewandte Ethik: Bio-, Medizin- & Umweltethik",
    shortDesc: "Organspende, Präimplantationsdiagnostik (PID), Gentechnik, Forschungsethik und Patientenrechte.",
    longDesc: "Fortschritte in Biologie und Medizin stellen die Menschheit vor neue Grundsatzfragen: Wo beginnt menschliches Leben? Welche Eingriffe in das Genom sind ethisch legitim? Wie regeln wir Organspenden gerecht und wie schützen wir Patienten und Probanden?",
    keyPoints: [
      "Bioethische Grundprinzipien (Beauchamp & Childress): Respekt vor Autonomie, Nicht-Schaden, Fürsorge/Wohltun und Gerechtigkeit",
      "Genforschung & CRISPR: Chancen der Gentherapie gegen schwere Krankheiten vs. Risiken von Designerbabys und Keimbahneingriffen",
      "Fortpflanzungsmedizin: Ethische Bewertung von In-vitro-Fertilisation, PID und Leihmutterschaft",
      "Organspende: Zustimmungs- vs. Widerspruchslösung, Hirntodkriterium und Kriterien gerechter Allokation lebensrettender Organe",
      "Forschungsethik: Ethische Richtlinien bei Experimenten mit Menschen, Tieren und schutzbedürftigen Gruppen"
],
    exercises: [
      {
            "id": "2849",
            "title": "Ethische Fragen in der Medizin",
            "folder": "ethische-fragen-in-der-medizin-2849"
      },
      {
            "id": "2763",
            "title": "Bedeutung von Ethik in der Medizin",
            "folder": "die-bedeutung-von-ethik-in-der-medizin-2763"
      },
      {
            "id": "2863",
            "title": "Organspende und Transplantation",
            "folder": "organspende-und-transplantation-2863"
      },
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
            "id": "2744",
            "title": "Psychologische Forschungsethik",
            "folder": "psychologische-forschungsethik-2744"
      },
      {
            "id": "2847",
            "title": "Ethische Fragen der Suchtprävention",
            "folder": "ethische-fragen-im-bereich-der-suchtpravention-2847"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medizinethik+Bioethik+Organspende&t=3752"
  },
  "sterbehilfe-suizidpravention-und-hospiz": {
    slug: "sterbehilfe-suizidpravention-und-hospiz",
    title: "Sterbehilfe, Hospiz & Umgang mit dem Tod",
    category: "Angewandte Ethik: Bio-, Medizin- & Umweltethik",
    shortDesc: "Sterbehilfe-Debatte, Hospizbewegung, Palliativmedizin, Trauerbegleitung und Suizidprävention.",
    longDesc: "Der Umgang mit dem Sterben berührt die intimsten Fragen der Menschenwürde. Welche Formen der Sterbehilfe gibt es? Wo verläuft die Grenze zwischen Selbstbestimmung am Lebensende und dem unantastbaren Lebensschutz? Die Hospizbewegung bietet hier einen einfühlsamen Gegenentwurf.",
    keyPoints: [
      "Differenzierung der Sterbehilfe: Aktive Sterbehilfe (Tötung auf Verlangen), passive Sterbehilfe (Therapieverzicht/-abbruch), indirekte Sterbehilfe (Leidensminderung mit Todesfolge) und assistierter Suizid",
      "Lebensschutz vs. Selbstbestimmung: Kants Verbot der Selbsttötung vs. Recht auf selbstbestimmtes Sterben (BVerfG-Urteil 2020)",
      "Hospiz und Palliative Care: Ganzheitliche Begleitung schwerkranker Menschen – Schmerzlinderung, menschliche Wärme und seelischer Beistand statt Beschleunigung des Todes",
      "Trauer und Abschied: Die psychologischen Phasen des Trauerns und der achtsame Umgang mit Hinterbliebenen",
      "Suizidprävention: Hilfsangebote, Warnsignale erkennen und lebensbejahende Auswege aus Krisen eröffnen"
],
    exercises: [
      {
            "id": "4457",
            "title": "Sterbehilfe – Ethische Fragen und Positionen",
            "folder": "sterbehilfe-ethische-fragen-4457"
      },
      {
            "id": "2866",
            "title": "Sterbehilfe und palliative Versorgung",
            "folder": "sterbehilfe-und-palliative-versorgung-2866"
      },
      {
            "id": "4443",
            "title": "Hospizbewegung und palliative Versorgung",
            "folder": "hospizbewegung-und-palliative-versorgung-4443"
      },
      {
            "id": "4419",
            "title": "Der Umgang mit dem Tod",
            "folder": "der-umgang-mit-dem-tod-4419"
      },
      {
            "id": "4424",
            "title": "Die Bedeutung von Trauer",
            "folder": "die-bedeutung-von-trauer-4424"
      },
      {
            "id": "5749",
            "title": "Depression und Suizidprävention",
            "folder": "depression-und-suizidpravention-5749"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sterbehilfe+Hospiz+Trauer&t=3752"
  },
  "umweltethik-und-klimagerechtigkeit": {
    slug: "umweltethik-und-klimagerechtigkeit",
    title: "Umweltethik, Klimagerechtigkeit & Nachhaltigkeit",
    category: "Angewandte Ethik: Bio-, Medizin- & Umweltethik",
    shortDesc: "Anthropozentrismus vs. Physiozentrismus, Klimagerechtigkeit, Schöpfungsbewahrung und planetare Grenzen.",
    longDesc: "Die Zerstörung natürlicher Lebensgrundlagen zwingt uns zum Überdenken unserer Beziehung zur Umwelt. Haben Tiere, Pflanzen und Ökosysteme einen eigenen moralischen Wert? Wie verteilen wir die Lasten des Klimawandels gerecht zwischen Industrie- und Entwicklungsländern?",
    keyPoints: [
      "Umweltethische Positionen: Anthropozentrismus (Mensch im Mittelpunkt), Pathozentrismus (alle leidensfähigen Wesen), Biozentrismus (alles Lebendige) und Holismus (die gesamte Natur)",
      "Klimagerechtigkeit: Historische Verantwortung des Globalen Nordens für Treibhausgase vs. Hauptbetroffenheit des Globalen Südens durch Extremwetter",
      "Planetare Grenzen: Das Konzept der ökologischen Belastungsgrenzen der Erde und generationenübergreifende Verantwortung",
      "Schöpfungsverantwortung: Religiöse und säkulare Begründungen für einen achtsamen Umgang mit der Biosphäre"
],
    exercises: [
      {
            "id": "2869",
            "title": "Verantwortung für die Umwelt",
            "folder": "verantwortung-fur-die-umwelt-2869"
      },
      {
            "id": "2868",
            "title": "Verantwortung für außerirdisches Leben",
            "folder": "verantwortung-fur-aueserirdisches-leben-2868"
      },
      {
            "id": "4474",
            "title": "Gerechte Verteilung von Ressourcen",
            "folder": "gerechte-verteilung-von-ressourcen-4474"
      },
      {
            "id": "3573",
            "title": "Ökologischer Fußabdruck und persönlicher Beitrag",
            "folder": "kologischer-fuesabdruck-und-personlicher-beitrag-3573"
      },
      {
            "id": "4501",
            "title": "Global Goal 6: Sauberes Wasser – Für Gesundheit und Nachhaltigkeit",
            "folder": "wenn-die-erde-bebt-warum-sie-wackelt-3-4501"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Umweltethik+Klimagerechtigkeit&t=3752"
  },
  "konsumethik-und-fairer-handel": {
    slug: "konsumethik-und-fairer-handel",
    title: "Konsumethik, Fairer Handel & Tierethik",
    category: "Angewandte Ethik: Bio-, Medizin- & Umweltethik",
    shortDesc: "Fairtrade, Fast Fashion, Tierwohl, Konsumentenboykott, Bio-Siegel und Verantwortung beim Einkauf.",
    longDesc: "Unser tägliches Einkaufsverhalten hat weitreichende globale Konsequenzen: von den Arbeitsbedingungen in Textilfabriken bis hin zur Massentierhaltung in der Agrarindustrie. Konsumethik untersucht, wie Bürgerinnen und Bürger durch bewusste Kaufentscheidungen Einfluss nehmen können.",
    keyPoints: [
      "Die Macht des Konsumenten: 'Mit dem Einkaufswagen abstimmen' – Boykott, Buykott und Nachfrage nach fairen Produkten",
      "Fairer Handel (Fairtrade): Existenzsichernde Mindestpreise, Verbot von ausbeuterischer Kinderarbeit und Prämien für Gemeinschaftsprojekte",
      "Fast Fashion & Modeindustrie: Ökologische Belastung und prekäre Arbeitsbedingungen im globalen Süden",
      "Tierethik im Alltag: Massentierhaltung, Fleischkonsum, Speziesismus und die Argumente für vegetarische/vegane Ernährung",
      "Siegel und Transparenz: Orientierung im Dschungel von Bio-, Fairtrade- und Nachhaltigkeitssiegeln"
],
    exercises: [
      {
            "id": "4452",
            "title": "Nachhaltiger Konsum und bewusster Konsum",
            "folder": "nachhaltiger-konsum-und-bewusster-konsum-4452"
      },
      {
            "id": "3531",
            "title": "Fairer Handel (Fairtrade)",
            "folder": "fairer-handel-3531"
      },
      {
            "id": "917",
            "title": "Bio, Fairtrade und regional",
            "folder": "bio-fairtrade-und-regional-917"
      },
      {
            "id": "7624",
            "title": "Bio-Siegel und Fairtrade-Standards",
            "folder": "bio-siegel-und-fairtrade-standards"
      },
      {
            "id": "7737",
            "title": "Ethischer Konsum und Konsumentenboykott",
            "folder": "ethischer-konsum-und-konsumentenboykott"
      },
      {
            "id": "2843",
            "title": "Ethik in der Modeindustrie",
            "folder": "ethik-in-der-modeindustrie-2843"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Konsumethik+Fairtrade+Tierethik&t=3752"
  },
  "ki-ethik-und-automatisierung": {
    slug: "ki-ethik-und-automatisierung",
    title: "KI-Ethik, Algorithmen & Zukunftstechnologien",
    category: "Digitale Ethik & Moderne Technologien",
    shortDesc: "Künstliche Intelligenz, autonome Systeme, Algorithmen-Voreingenommenheit, Transhumanismus und Arbeitsplatzwandel.",
    longDesc: "Künstliche Intelligenz revolutioniert Gesellschaft, Arbeitswelt und Medizin. Doch wer trägt die Verantwortung, wenn ein autonomes Fahrzeug einen Unfall baut oder ein Recruiting-Algorithmus diskriminiert? Dieser Themenbereich beleuchtet die drängenden ethischen Fragen der Technologiefolgenabschätzung.",
    keyPoints: [
      "Autonomie und Entscheidung: Können Maschinen moralisch handeln oder bleibt Verantwortung stets an den Menschen gebunden?",
      "Das Trolley-Problem für selbstfahrende Autos: Wie sollen Algorithmen in unvermeidbaren Unfallsituationen entscheiden?",
      "Algorithmischer Bias: Wie Vorurteile in Trainingsdaten zu systematischer Benachteiligung (z. B. bei Geschlecht oder Hautfarbe) führen",
      "Automatisierung & Zukunft der Arbeit: Verdrängung menschlicher Arbeitsplätze vs. Entlastung von gefährlicher/monotoner Routine",
      "Transhumanismus & Nanotechnologie: Ethische Grenzen der Verschmelzung von Mensch und Maschine"
],
    exercises: [
      {
            "id": "2845",
            "title": "Ethische Aspekte Künstlicher Intelligenz",
            "folder": "ethische-aspekte-von-kunstlicher-intelligenz-2845"
      },
      {
            "id": "7987",
            "title": "Ethische Überlegungen zu KI und Automatisierung",
            "folder": "ethische-ueberlegungen-zu-kuenstlicher-intelligenz-und-automatisierung"
      },
      {
            "id": "7986",
            "title": "Ethische Grenzen bei der Verschmelzung von Mensch und Technik",
            "folder": "ethische-grenzen-bei-der-verschmelzung-von-mensch-und-technik"
      },
      {
            "id": "2836",
            "title": "Automatisierung und Arbeitsplatzverlust",
            "folder": "automatisierung-und-arbeitsplatzverlust-2836"
      },
      {
            "id": "2844",
            "title": "Ethische Aspekte der Nanotechnologie",
            "folder": "ethische-aspekte-in-der-nanotechnologie-2844"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=KI+Ethik+Kuenstliche+Intelligenz&t=3752"
  },
  "medienethik-desinformation-und-verantwortung": {
    slug: "medienethik-desinformation-und-verantwortung",
    title: "Medienethik, Desinformation & Digitale Verantwortung",
    category: "Digitale Ethik & Moderne Technologien",
    shortDesc: "Fake News, Macht der Bilder, Algorithmen, Datenschutz, digitale Privatsphäre und Online-Verantwortung.",
    longDesc: "Soziale Medien bieten grenzenlose Vernetzung, bergen aber auch Risiken durch gezielte Desinformation, Filterblasen und Datenmissbrauch. Medienethik fragt nach der Verantwortung von Plattformen, Journalisten und Nutzern im digitalen Raum.",
    keyPoints: [
      "Fake News & Desinformation: Absichtliche Falschmeldungen erkennen, Quellenkritik und der Pressekodex",
      "Die Macht der Bilder: Manipulation durch Bildausschnitte, Deepfakes und emotionale Bildsprache",
      "Datenschutz & Privatsphäre: Warum der Schutz persönlicher Daten ein fundamentales Freiheits- und Bürgerrecht ist",
      "Verantwortung im Netz: Bewusster Umgang mit dem Veröffentlichen eigener und fremder Fotos (Recht am eigenen Bild)",
      "Aufmerksamkeitsökonomie: Wie Geschäftsmodelle von Social-Media-Konzernen durch Algorithmen Polarisierung und Suchtverhalten begünstigen"
],
    exercises: [
      {
            "id": "2860",
            "title": "Medienethik und Fake News",
            "folder": "medienethik-und-fake-news-2860"
      },
      {
            "id": "4427",
            "title": "Die Macht der Bilder in den Medien",
            "folder": "die-macht-der-bilder-in-den-medien-4427"
      },
      {
            "id": "4434",
            "title": "Ethisches Verhalten im digitalen Raum",
            "folder": "ethisches-verhalten-im-digitalen-raum-4434"
      },
      {
            "id": "2851",
            "title": "Ethische Herausforderungen im Online-Leben",
            "folder": "ethische-herausforderungen-im-online-leben-2851"
      },
      {
            "id": "7989",
            "title": "Fairness und Verantwortung in der Online-Kommunikation",
            "folder": "fairness-und-verantwortung-in-online-kommunikation"
      },
      {
            "id": "8124",
            "title": "Verantwortungsbewusster Umgang mit Beiträgen und Fotos",
            "folder": "verantwortungsbewusster-umgang-mit-eigenen-beitraegen-und-fotos"
      },
      {
            "id": "8125",
            "title": "Verantwortungsvoller Umgang mit Daten",
            "folder": "verantwortungsvoller-umgang-mit-daten"
      },
      {
            "id": "2853",
            "title": "Internetfreiheit und staatliche Kontrolle weltweit",
            "folder": "internetfreiheit-und-staatliche-kontrolle-weltweit"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medienethik+Fake+News+Datenschutz&t=3752"
  },
  "cybermobbing-hate-speech-und-respekt": {
    slug: "cybermobbing-hate-speech-und-respekt",
    title: "Respekt im Netz, Cybermobbing & Konfliktlösung",
    category: "Digitale Ethik & Moderne Technologien",
    shortDesc: "Cybermobbing, Hate Speech, Netiquette, digitale Zivilcourage und respektvolle Online-Diskussionen.",
    longDesc: "Im Schutz der wahrgenommenen Anonymität sinkt im Internet oft die Hemmschwelle für Beleidigungen und Ausgrenzung. Wie können Jugendliche sich vor Cybermobbing schützen, wie gelingt ein konstruktiver digitaler Dialog und wo ist digitale Zivilcourage gefragt?",
    keyPoints: [
      "Definition Cybermobbing: Gezieltes, wiederholtes Diffamieren, Bedrohen oder Bloßstellen im digitalen Raum über einen längeren Zeitraum",
      "Besonderheiten des Cybermobbings: Unbegrenztes Publikum, 24/7-Erreichbarkeit der Opfer und scheinbare Anonymität der Täter",
      "Hate Speech: Hassrede gegen Personen oder Gruppen – juristische Grenzen und moralische Verantwortung",
      "Handlungsoptionen bei Mobbing: Nicht wegschauen, Beweise sichern, Vorfälle melden, Betroffenen beistehen und Hilfe bei Vertrauenspersonen suchen",
      "Netiquette: Spielregeln für respektvolles, faires Diskutieren und konstruktive Konfliktlösung in Chatgruppen und Foren"
],
    exercises: [
      {
            "id": "2729",
            "title": "Mobbing und Cybermobbing",
            "folder": "mobbing-und-cybermobbing-2729"
      },
      {
            "id": "3486",
            "title": "Cybermobbing und Hate Speech",
            "folder": "cybermobbing-und-hate-speech-3486"
      },
      {
            "id": "3569",
            "title": "Mobbing und Wege der Konfliktlösung",
            "folder": "mobbing-und-wege-der-konfliktlosung-3569"
      },
      {
            "id": "4441",
            "title": "Handlungsmöglichkeiten bei Mobbing in der Clique",
            "folder": "handlungsmoglichkeiten-bei-mobbing-in-der-clique-4441"
      },
      {
            "id": "7975",
            "title": "Erkennen und Vermeiden von Cybermobbing",
            "folder": "erkennen-und-vermeiden-von-cybermobbing"
      },
      {
            "id": "8086",
            "title": "Respektvolle Online-Diskussion und Konfliktlösung",
            "folder": "respektvolle-online-diskussion-und-konfliktloesung"
      },
      {
            "id": "8094",
            "title": "Sensibilisierung für Hate Speech und respektvolle Sprache",
            "folder": "sensibilisierung-fuer-hate-speech-und-respektvolle-sprache"
      },
      {
            "id": "4416",
            "title": "Chancen und Risiken von Cyberfreundschaften",
            "folder": "chancen-und-risiken-von-cyberfreundschaften-4416"
      },
      {
            "id": "2852",
            "title": "Freiheit der Meinungsäußerung und Hate Speech",
            "folder": "freiheit-der-meinungsaueserung-und-hate-speech-2852"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Cybermobbing+Hate+Speech+Respekt&t=3752"
  },
  "freundschaft-empathie-und-respekt": {
    slug: "freundschaft-empathie-und-respekt",
    title: "Freundschaft, Empathie & Zwischenmenschlicher Respekt",
    category: "Zusammenleben, Frieden & Globale Gerechtigkeit",
    shortDesc: "Wahre Freundschaft, Vertrauen, Empathiefähigkeit, gegenseitiger Respekt und Konflikte im Alltag.",
    longDesc: "Gelingende zwischenmenschliche Beziehungen beruhen auf Vertrauen, Einfühlungsvermögen und Wertschätzung. Was unterscheidet eine echte Freundschaft von einer Zweckgemeinschaft? Wie trainieren wir unsere Fähigkeit zur Empathie?",
    keyPoints: [
      "Aristoteles' Freundschaftsformen: Freundschaft aus Nutzen, Freundschaft aus Vergnügen und die vollkommene Tugendfreundschaft",
      "Vertrauen & Loyalität: Die Basis stabiler Bindungen und der schwierige Umgang mit Vertrauensbruch und Enttäuschungen",
      "Empathie & Mitgefühl: Die Fähigkeit, die Welt durch die Augen eines anderen zu sehen und emotional mitzuschwingen",
      "Respekt im Alltag: Toleranz für Andersartigkeit, Wertschätzung im Gespräch und das Einhalten persönlicher Grenzen",
      "Jugendkultur & Cliquen: Gruppendruck reflektieren, Zusammenhalt erleben und eigene Werte gegenüber der Gruppe verteidigen"
],
    exercises: [
      {
            "id": "4467",
            "title": "Wahre Freundschaft und Vertrauen",
            "folder": "wahre-freundschaft-4467"
      },
      {
            "id": "2838",
            "title": "Die Bedeutung von Empathie",
            "folder": "die-bedeutung-von-empathie-2838"
      },
      {
            "id": "2711",
            "title": "Empathie und Mitgefühl",
            "folder": "empathie-und-mitgefuhl-2711"
      },
      {
            "id": "3140",
            "title": "Was ist Empathie? In die Schuhe anderer schlüpfen",
            "folder": "was-ist-empathie-in-die-schuhe-anderer-schritt-halten-3140"
      },
      {
            "id": "3142",
            "title": "Empathie im Alltag: Kleine Gesten, große Wirkung",
            "folder": "empathie-im-alltag-kleine-gesten-groese-wirkung-3142"
      },
      {
            "id": "3238",
            "title": "Empathie im Miteinander",
            "folder": "empathie-3238"
      },
      {
            "id": "2766",
            "title": "Respekt in zwischenmenschlichen Beziehungen",
            "folder": "die-bedeutung-von-respekt-in-zwischenmenschlichen-beziehungen-2766"
      },
      {
            "id": "2848",
            "title": "Ethische Fragen in der Jugendkultur",
            "folder": "ethische-fragen-in-der-jugendkultur-2848"
      },
      {
            "id": "3303",
            "title": "Empathie – Verständnis für andere entwickeln",
            "folder": "empathie-2-3303"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Freundschaft+Empathie+Respekt+Ethik&t=3752"
  },
  "toleranz-vorurteile-und-inklusion": {
    slug: "toleranz-vorurteile-und-inklusion",
    title: "Toleranz, Vorurteile & Vielfalt",
    category: "Zusammenleben, Frieden & Globale Gerechtigkeit",
    shortDesc: "Stereotype abbauen, religiöse und kulturelle Toleranz, Inklusion und Chancengleichheit in der Gesellschaft.",
    longDesc: "Vorurteile und Stereotype entstehen oft unbewusst, führen jedoch zu Ausgrenzung und Diskriminierung. Wie schaffen wir eine Gesellschaft, in der Vielfalt als Bereicherung verstanden wird und alle Menschen gleichberechtigt teilhaben können?",
    keyPoints: [
      "Stereotype vs. Vorurteile: Verallgemeinernde Denkmuster erkennen, hinterfragen und durch persönliche Begegnung abbauen",
      "Toleranzbegriff: Duldung, Respekt und die Grenzen der Toleranz (das Popper'sche Toleranz-Paradoxon: Keine Toleranz den Intoleranten)",
      "Religiöser und kultureller Pluralismus: Respektvolles Zusammenleben verschiedener Weltanschauungen und Glaubensrichtungen",
      "Inklusion: Barrierefreie Teilhabe von Menschen mit Behinderungen oder Benachteiligungen in Schule, Beruf und Freizeit"
],
    exercises: [
      {
            "id": "3596",
            "title": "Umgang mit Vorurteilen",
            "folder": "umgang-mit-vorurteilen-3596"
      },
      {
            "id": "2865",
            "title": "Religiöse Toleranz und Pluralismus",
            "folder": "religiose-toleranz-und-pluralismus-2865"
      },
      {
            "id": "7726",
            "title": "Diskriminierung und Inklusion am Arbeitsplatz",
            "folder": "diskriminierung-und-inklusion-am-arbeitsplatz"
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
            "id": "5910",
            "title": "Vorurteile und Diskriminierung",
            "folder": "vorurteile-und-diskriminierung-5910"
      },
      {
            "id": "4454",
            "title": "Respektvoller Umgang mit Vielfalt",
            "folder": "respektvoller-umgang-mit-vielfalt-4454"
      },
      {
            "id": "2866",
            "title": "Religionsfreiheit in Deutschland",
            "folder": "religionsfreiheit-in-deutschland"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Toleranz+Vorurteile+Inklusion&t=3752"
  },
  "menschenrechte-und-globale-gerechtigkeit": {
    slug: "menschenrechte-und-globale-gerechtigkeit",
    title: "Menschenrechte, Kinderrechte & Globale Gerechtigkeit",
    category: "Zusammenleben, Frieden & Globale Gerechtigkeit",
    shortDesc: "Menschenwürde, UN-Kinderrechtskonvention, Verteilungsgerechtigkeit, Chancengleichheit und Armutsbekämpfung.",
    longDesc: "Jeder Mensch besitzt unveräußerliche Rechte und eine unantastbare Würde. Doch wie sieht die Realität weltweit aus? Dieser Themenbereich untersucht Theorien der Gerechtigkeit (z. B. John Rawls) und diskutiert Kinderrechte, soziale Ungleichheit und generationenübergreifende Pflichten.",
    keyPoints: [
      "Menschenwürde (Art. 1 GG / UN-Charta): Unantastbarer Kern jedes menschlichen Wesens unabhängig von Leistung, Herkunft oder Status",
      "Kinderrechte: Schutz-, Förder- und Beteiligungsrechte nach der UN-Kinderrechtskonvention von 1989",
      "Gerechtigkeitstheorien: Ausgleichende vs. austeilende Gerechtigkeit; John Rawls' 'Schleier des Nichtwissens' (Veil of Ignorance)",
      "Chancengleichheit vs. Chancengerechtigkeit: Bildungsgerechtigkeit und der Abbau sozialer Barrieren",
      "Globale Gerechtigkeit: Ungleiche Verteilung von Wohlstand, Rohstoffen und Lebenschancen zwischen Industrie- und Entwicklungsländern"
],
    exercises: [
      {
            "id": "2861",
            "title": "Menschenrechte und ihre Bedeutung",
            "folder": "menschenrechte-und-ihre-bedeutung-2861"
      },
      {
            "id": "3553",
            "title": "Kinderrechte im Überblick",
            "folder": "kinderrechte-3553"
      },
      {
            "id": "3597",
            "title": "Die UN-Kinderrechtskonvention",
            "folder": "un-kinderrechtskonvention-3597"
      },
      {
            "id": "4437",
            "title": "Gerechtigkeit als ethischer Grundwert",
            "folder": "gerechtigkeit-4437"
      },
      {
            "id": "5800",
            "title": "Gerechtigkeit und Menschenwürde",
            "folder": "gerechtigkeit-und-menschenwurde-5800"
      },
      {
            "id": "5856",
            "title": "Philosophie der Gerechtigkeit",
            "folder": "philosophie-der-gerechtigkeit-5856"
      },
      {
            "id": "3589",
            "title": "Soziale Gerechtigkeit",
            "folder": "soziale-gerechtigkeit-3589"
      },
      {
            "id": "4472",
            "title": "Widerstand gegen Ungerechtigkeit",
            "folder": "widerstand-gegen-ungerechtigkeit-4472"
      },
      {
            "id": "3473",
            "title": "Altersarmut und Generationengerechtigkeit",
            "folder": "altersarmut-und-generationengerechtigkeit-3473"
      },
      {
            "id": "3483",
            "title": "Bildungsgerechtigkeit und Chancengleichheit",
            "folder": "bildungsgerechtigkeit-und-chancengleichheit-3483"
      },
      {
            "id": "3536",
            "title": "Generationengerechtigkeit",
            "folder": "generationengerechtigkeit-3536"
      },
      {
            "id": "4439",
            "title": "Globale Ungleichheit und Armut",
            "folder": "globale-ungleichheit-und-armut-4439"
      },
      {
            "id": "4428",
            "title": "Die Verantwortung der reichen Länder",
            "folder": "die-verantwortung-der-reichen-lander-4428"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Menschenrechte+Kinderrechte+Gerechtigkeit&t=3752"
  },
  "friedensethik-konflikte-und-versoehnung": {
    slug: "friedensethik-konflikte-und-versoehnung",
    title: "Friedensethik, Abrüstung & Versöhnung",
    category: "Zusammenleben, Frieden & Globale Gerechtigkeit",
    shortDesc: "Ursachen von Kriegen, Pazifismus, Waffenkontrolle, Versöhnungsprozesse, Schuld und Vergebung.",
    longDesc: "Frieden ist mehr als die bloße Abwesenheit von Krieg (negativer Frieden): Wahrer Friede erfordert soziale Gerechtigkeit, Rechtsstaatlichkeit und Versöhnung (positiver Frieden). Wie können Konflikte gewaltfrei beigelegt werden und welche Rolle spielen Schuld, Strafe und Vergebung?",
    keyPoints: [
      "Kriegsursachen: Verteilungskämpfe um Ressourcen, Machtstreben, Nationalismus und ideologische Verblendung",
      "Negativer vs. positiver Friede (Johan Galtung): Abwesenheit direkter Gewalt vs. Überwindung struktureller Ungerechtigkeit",
      "Pazifismus vs. Bellizismus: Radikale Gewaltfreiheit nach Vorbildern wie Gandhi und Martin Luther King vs. Lehre vom gerechten Krieg",
      "Internationale Friedenssicherung: Diplomatie, Rüstungskontrolle, UNO-Mandate und die Bedeutung des Friedensnobelpreises",
      "Schuld, Strafe & Versöhnung: Der strafrechtliche Sinn von Sanktionen (Vergeltung vs. Resozialisierung) und die Kraft von Versöhnung und Vergebung"
],
    exercises: [
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
            "id": "3575",
            "title": "Pazifismus und Gewaltfreiheit",
            "folder": "pazifismus-3575"
      },
      {
            "id": "2871",
            "title": "Waffenkontrolle und Friedenssicherung",
            "folder": "waffenkontrolle-und-friedenssicherung-2871"
      },
      {
            "id": "3154",
            "title": "Der Friedensnobelpreis",
            "folder": "der-friedensnobelpreis-3154"
      },
      {
            "id": "4490",
            "title": "Global Goal 16: Frieden, Gerechtigkeit & starke Institutionen",
            "folder": "global-goal-16-frieden-leben-gerechtigkeit-und-sicherheit-fordern-4490"
      },
      {
            "id": "4425",
            "title": "Die Bedeutung von Versöhnung",
            "folder": "die-bedeutung-von-versohnung-4425"
      },
      {
            "id": "4464",
            "title": "Vergebung und Vesöhnung",
            "folder": "vergebung-und-vesohnung-4464"
      },
      {
            "id": "4455",
            "title": "Schuld und Strafe",
            "folder": "schuld-und-strafe-4455"
      },
      {
            "id": "4470",
            "title": "Wege zur Bekämpfung der Armut",
            "folder": "wege-zur-bekampfung-der-armut-4470"
      },
      {
            "id": "2839",
            "title": "Rückkehr zum Dienst an der Waffe – Das Dilemma der Wehrpflicht",
            "folder": "rueckkehr-zum-dienst-an-der-waffe-das-dilemma-der-wehrpflicht"
      },
      {
            "id": "6643",
            "title": "Gaza – Ein Plan für den Frieden",
            "folder": "gaza-ein-plan-fur-den-frieden-6643"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Friedensethik+Krieg+Versoehnung&t=3752"
  },
  "berufsethik-wirtschaft-und-wissenschaft": {
    slug: "berufsethik-wirtschaft-und-wissenschaft",
    title: "Berufs-, Wirtschafts- & Wissenschaftsethik",
    category: "Zusammenleben, Frieden & Globale Gerechtigkeit",
    shortDesc: "Corporate Social Responsibility, Korruption, Berufsethos, Forschungsgrenzen und Fair Play im Sport.",
    longDesc: "Ethik bewährt sich in der Praxis des Berufsalltags: Dürfen Unternehmen allein nach Gewinnmaximierung streben? Welche ethischen Schranken gelten für die freie Wissenschaft? Und wie sichern wir Fair Play und Fairness im Sport?",
    keyPoints: [
      "Wirtschaftsethik & CSR: Soziale und ökologische Verantwortung von Unternehmen gegenüber Gesellschaft und Umwelt",
      "Berufsethos: Pflichten und Standards in helfenden, rechtlichen und wirtschaftlichen Berufen (z. B. ärztlicher Eid, Berufsgeheimnis)",
      "Politik und Ethik: Macht, Gemeinwohlverpflichtung, Transparenz und der Kampf gegen Korruption und Lobbyismus",
      "Wissenschaftsethik: Forschungsfreiheit vs. Risikominimierung – Verantwortung für die Folgen wissenschaftlicher Entdeckungen",
      "Sportethik: Der Kampf gegen Doping, Spielmanipulation und der Geist des sportlichen Fair Play"
],
    exercises: [
      {
            "id": "2454",
            "title": "Glaube und Ethik im Berufsleben",
            "folder": "glaube-und-ethik-im-berufsleben-2454"
      },
      {
            "id": "2736",
            "title": "Professionelle Verantwortung und Standards",
            "folder": "professionelle-verantwortung-und-standards-2736"
      },
      {
            "id": "2850",
            "title": "Ethische Fragen in der Wirtschaft",
            "folder": "ethische-fragen-in-der-wirtschaft-2850"
      },
      {
            "id": "5787",
            "title": "Ethik in der Politik",
            "folder": "ethik-in-der-politik-5787"
      },
      {
            "id": "5916",
            "title": "Wissenschaftsethik und Moral",
            "folder": "wissenschaftsethik-und-moral-5916"
      },
      {
            "id": "2841",
            "title": "Ethik im Sport: Doping und Fair Play",
            "folder": "ethik-im-sport-doping-und-fair-play-2841"
      },
      {
            "id": "2846",
            "title": "Ethische Aspekte von Sportveranstaltungen",
            "folder": "ethische-aspekte-von-sportveranstaltungen-2846"
      },
      {
            "id": "2847",
            "title": "Spannungsfeld zwischen Whistleblowing und Geheimhaltung",
            "folder": "spannungsfeld-zwischen-whistleblowing-und-geheimhaltung"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Berufsethik+Wirtschaftsethik+Sportethik&t=3752"
  }
};
