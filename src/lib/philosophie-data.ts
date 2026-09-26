export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface PhilosophieTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const philosophieCategories: string[] = [
  "Antike Philosophie & Große Denker",
  "Aufklärung, Rationalismus & Deutscher Idealismus",
  "Existenzphilosophie, Anthropologie & Bewusstsein",
  "Erkenntnistheorie, Logik & Wissenschaftstheorie",
  "Moralphilosophie & Angewandte Ethik",
  "Staats-, Sozial- & Kulturphilosophie"
];

export const philosophieTopics: Record<string, PhilosophieTopic> = {
  "sokrates-und-die-sokratische-methode": {
    slug: "sokrates-und-die-sokratische-methode",
    title: "Sokrates & die Sokratische Methode",
    category: "Antike Philosophie & Große Denker",
    shortDesc: "'Ich weiß, dass ich nichts weiß', Mäeutik (Hebammenkunst), philosophischer Dialog und der Prozess/Tod des Sokrates.",
    longDesc: "Sokrates (469–399 v. Chr.) gilt als Urvater der abendländischen Philosophie. Er hinterließ keine eigenen Schriften, sondern befragte die Bürger Athens auf den Marktplätzen, um scheinbares Scheinwissen zu entlarven und tieferes philosophisches Verstehen zu wecken.",
    keyPoints: [
      "Sokratische Ironie: Vorgebliches Nichtwissen ('Ich weiß, dass ich nicht weiß'), um den Gesprächspartner zum eigenständigen Nachdenken zu bewegen",
      "Mäeutik (Hebammenkunst): Gezielte Gesprächsführung und bohrende Fragen, um im Gegenüber Wahrheit und Selbsterkenntnis zur Welt zu bringen",
      "Tugendlehre: Einsicht in das Gute führt unausweichlich zum richtigen ethischen Handeln ('Niemand tut freiwillig Unrecht')",
      "Prozess und Schierlingsbecher (399 v. Chr.): Verurteilung wegen angeblicher Gottlosigkeit und Verführung der Jugend; Sokrates wählte den Gifttod aus Treue zu den Gesetzen des Staates"
],
    exercises: [
      {
            "id": "2794",
            "title": "Sokrates und die sokratische Methode",
            "folder": "sokrates-und-die-sokratische-methode-2794"
      },
      {
            "id": "4690",
            "title": "Der Tod des Sokrates (Historische Analyse)",
            "folder": "der-tod-des-sokrates-jacques-louis-david-1787-4690"
      },
      {
            "id": "5865",
            "title": "Philosophie des Dialogs und der Reflexion",
            "folder": "philosophie-des-dialogs-5865"
      },
      {
            "id": "5914",
            "title": "Wissen und Weisheit",
            "folder": "wissen-und-weisheit-5914"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sokrates+Philosophie&t=3752"
  },
  "platon-und-die-ideenlehre": {
    slug: "platon-und-die-ideenlehre",
    title: "Platon, Höhlengleichnis & Ideenlehre",
    category: "Antike Philosophie & Große Denker",
    shortDesc: "Die zwei Welten (Sinnenwelt vs. Ideenwelt), das berühmte Höhlengleichnis, Platons Akademie und der ideale Philosophenstaat (Politeia).",
    longDesc: "Platon (428–348 v. Chr.), Schüler des Sokrates und Lehrer von Aristoteles, begründete den philosophischen Idealismus. Nach Platon ist die sichtbare Welt der Dinge nur ein unvollkommenes Abbild der ewigen, unveränderlichen Ideen.",
    keyPoints: [
      "Zwei-Welten-Theorie: Vergängliche Sinnenwelt (Schattenwelt) vs. ewige, vollkommene Ideenwelt (Archetypen wie Gerechtigkeit, Schönheit, das Gute)",
      "Das Höhlengleichnis: Menschen in einer Höhle halten Schatten an der Wand für die Wirklichkeit; die Befreiung ans Sonnenlicht symbolisiert den mühsamen Weg der philosophischen Erkenntnis",
      "Die Politeia (Der ideale Staat): Herrschaft der Philosophenkönige; Gliederung der Gesellschaft in 1. Lehrstand/Herrscher (Weisheit), 2. Wehrstand/Wächter (Mut), 3. Nährstand/Bauern & Handwerker (Besonnenheit)",
      "Seelenlehre: Dreiteilung der Seele in Vernunft (Kopf), Mut/Tatkraft (Brust) und Begehren/Triebe (Bauch)"
],
    exercises: [
      {
            "id": "2793",
            "title": "Platon und seine Ideenlehre",
            "folder": "platon-und-seine-ideenlehre-2793"
      },
      {
            "id": "5873",
            "title": "Philosophie und philosophische Mythen",
            "folder": "philosophie-und-mythologie-5873"
      },
      {
            "id": "5852",
            "title": "Ontologische Grundfragen verstehen",
            "folder": "ontologische-grundfragen-verstehen-5852"
      },
      {
            "id": "2777",
            "title": "Die Frage nach der Natur der Realität",
            "folder": "die-frage-nach-der-natur-der-realitat-2777"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Platon+Ideenlehre+Hoehlengleichnis&t=3752"
  },
  "aristoteles-und-die-antike-philosophie": {
    slug: "aristoteles-und-die-antike-philosophie",
    title: "Aristoteles & Antike Philosophie",
    category: "Antike Philosophie & Große Denker",
    shortDesc: "Nikomachische Ethik, Mesotes-Lehre (goldene Mitte), Eudaimonie, Logik (Syllogismen) und die Anfänge der Naturwissenschaften.",
    longDesc: "Aristoteles (384–322 v. Chr.) systematisierte nahezu alle Wissensbereiche seiner Zeit: von der Logik über Biologie und Physik bis hin zur Ethik und Politik. Im Gegensatz zu Platons Ideenwelt betont er die empirische Erforschung der Wirklichkeit.",
    keyPoints: [
      "Mesotes-Lehre (Goldene Mitte): Tugend ist die maßvolle Mitte zwischen zwei Extremen (Übermaß und Mangel), z. B. Tapferkeit zwischen Feigheit und Tollkühnheit",
      "Eudaimonie (Das gelingende Leben): Höchstes Ziel menschlichen Strebens, erreicht durch tugendhaftes, vernunftgeleitetes Handeln",
      "Teleologie der Natur: Alles in der Natur strebt nach der Verwirklichung seiner ihm innewohnenden Form und Bestimmung (Entelechie)",
      "Erfinder der formalen Logik: Begründung der Syllogistik als Methode des formal gültigen Schließens (Prämissen ➔ Konklusion)",
      "Der Mensch als Zoon Politikon: Das 'staatenbildende Lebewesen', das seine Erfüllung nur in der politischen Gemeinschaft der Polis finden kann"
],
    exercises: [
      {
            "id": "5930",
            "title": "Grundlagen der Tugendethik nach Aristoteles",
            "folder": "grundlagen-der-tugendethik-5930"
      },
      {
            "id": "4459",
            "title": "Tugendethik im Alltag anwenden",
            "folder": "tugendethik-4459"
      },
      {
            "id": "5755",
            "title": "Einführung in die antike Philosophie",
            "folder": "einfuhrung-in-antike-philosophie-5755"
      },
      {
            "id": "5217",
            "title": "Philosophie und Wissenschaft im antiken Griechenland",
            "folder": "philosophie-und-wissenschaft-im-antiken-griechenland-5217"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Aristoteles+Ethik+Philosophie&t=3752"
  },
  "descartes-rationalismus-und-erkenntniskritik": {
    slug: "descartes-rationalismus-und-erkenntniskritik",
    title: "René Descartes & der Rationalismus",
    category: "Aufklärung, Rationalismus & Deutscher Idealismus",
    shortDesc: "Methodischer Zweifel, 'Cogito, ergo sum', Rationalismus vs. Empirismus und der cartesische Dualismus.",
    longDesc: "René Descartes (1596–1650) begründete die Philosophie der Neuzeit. Durch seinen radikalen methodischen Zweifel suchte er nach einem unerschütterlichen Fundament sicherer Erkenntnis: dem selbstgewissen denkenden Ich.",
    keyPoints: [
      "Methodischer Zweifel: Alles bezweifeln, was getäuscht werden kann – Sinneswahrnehmungen, logische Sätze, gar die reale Welt (Traumargument, böser Dämon)",
      "Cogito, ergo sum ('Ich denke, also bin ich'): Selbst im Akt des Zweifelns kann ich nicht bezweifeln, dass ich als Zweifelnder existiere",
      "Rationalismus: Reine Vernunft (Ratio) und angeborene Ideen (ideae innatae) als verlässliche Quellen wahrer Erkenntnis (im Kontrast zum Empirismus von Locke/Hume)",
      "Substanzdualismus (Cartesischer Dualismus): Trennung der Welt in Res cogitans (denkende, unkörperliche Substanz/Geist) und Res extensa (ausgedehnte, materielle Substanz/Körper)"
],
    exercises: [
      {
            "id": "2762",
            "title": "Descartes' Cogito, ergo sum",
            "folder": "descartes-039-cogito-ergo-sum-2762"
      },
      {
            "id": "5869",
            "title": "Philosophie des Zweifels und der Erkenntnis",
            "folder": "philosophie-des-zweifels-5869"
      },
      {
            "id": "5886",
            "title": "Rationalismus und Empirismus",
            "folder": "rationalismus-und-empirismus-5886"
      },
      {
            "id": "5890",
            "title": "Skeptizismus und Zweifel",
            "folder": "skeptizismus-und-zweifel-5890"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Descartes+Cogito+Rationalismus&t=3752"
  },
  "immanuel-kant-und-die-aufklaerung": {
    slug: "immanuel-kant-und-die-aufklaerung",
    title: "Immanuel Kant & die Aufklärung",
    category: "Aufklärung, Rationalismus & Deutscher Idealismus",
    shortDesc: "'Habe Mut, dich deines eigenen Verstandes zu bedienen', Kritik der reinen Vernunft, Kopernikanische Wende und Kategorischer Imperativ.",
    longDesc: "Immanuel Kant (1724–1804) revolutionierte das Denken der Aufklärung. Mit seinen drei Kritiken (reine Vernunft, praktische Vernunft, Urteilskraft) versöhnte er Rationalismus und Empirismus und begründete eine universale Pflichtethik.",
    keyPoints: [
      "Definition der Aufklärung: 'Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit'",
      "Die vier Kantischen Fragen: 1. Was kann ich wissen? (Erkenntnistheorie) 2. Was soll ich tun? (Ethik) 3. Was darf ich hoffen? (Religion) 4. Was ist der Mensch? (Anthropologie)",
      "Kopernikanische Wende: Nicht unsere Erkenntnis richtet sich nach den Gegenständen, sondern die Gegenstände richten sich nach unserer Anschauungsform (Raum und Zeit) und unseren Verstandeskategorien",
      "Das Ding an sich vs. Erscheinung: Wir erkennen die Welt nur so, wie sie uns erscheint, nicht wie sie an sich selbst ist",
      "Kategorischer Imperativ: 'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde'"
],
    exercises: [
      {
            "id": "1424",
            "title": "Immanuel Kant – Leben und Denken",
            "folder": "immanuel-kant-1424"
      },
      {
            "id": "3966",
            "title": "Immanuel Kant – Der Kategorische Imperativ",
            "folder": "immanuel-kant-2-3966"
      },
      {
            "id": "5843",
            "title": "Grundlagen der modernen Philosophie",
            "folder": "moderne-philosophie-grundlagen-5843"
      },
      {
            "id": "5826",
            "title": "Kritik der reinen Vernunft",
            "folder": "kritik-der-reinen-vernunft-5826"
      },
      {
            "id": "5901",
            "title": "Transzendentale Bedingungen der Erfahrung",
            "folder": "transzendentale-bedingungen-der-erfahrung-5901"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Immanuel+Kant+Aufklaerung&t=3752"
  },
  "deutscher-idealismus-und-dialektik": {
    slug: "deutscher-idealismus-und-dialektik",
    title: "Deutscher Idealismus, Dialektik & Kritik",
    category: "Aufklärung, Rationalismus & Deutscher Idealismus",
    shortDesc: "G. W. F. Hegel, Fichte, Schelling, dialektische Methode (These – Antithese – Synthese) und die Entfaltung des Weltgeistes.",
    longDesc: "Der Deutsche Idealismus bildet einen Höhepunkt philosophischer Systembildung nach Kant. Georg Wilhelm Friedrich Hegel verstand Wirklichkeit nicht als starres Sein, sondern als dynamischen, geschichtlichen Prozess des Geistes, der sich dialektisch entfaltet.",
    keyPoints: [
      "Die dialektische Methode: Erkenntnis und Geschichte bewegen sich in Drei-Schritten: These (Behauptung/Setzung), Antithese (Widerspruch/Negation) und Synthese (Aufhebung auf eine höhere Ebene)",
      "Der Begriff des 'Aufhebens': Dreifache Bedeutung bei Hegel: 1. Negieren/Beseitigen, 2. Bewahren/Erhalten des Wahren, 3. Emporheben auf eine höhere Entwicklungsstufe",
      "Das Ganze ist das Wahre: Einzelne Phänomene lassen sich nur im Zusammenhang des gesamten geschichtlichen Gesamtsystems begreifen",
      "Rechts- und Geschichtsphilosophie: Die Geschichte als fortschreitendes 'Bewusstsein der Freiheit' im vernünftigen Staat",
      "Reaktion und Kritik: Von Schopenhauers Pessimismus über Kierkegaards Existenzdenken bis hin zu Karl Marx' 'materialistischer Umkehrung' der Dialektik"
],
    exercises: [
      {
            "id": "5751",
            "title": "Dialektik und Kritik",
            "folder": "dialektik-und-kritik-5751"
      },
      {
            "id": "5752",
            "title": "Dialektik und Synthese",
            "folder": "dialektik-und-synthese-5752"
      },
      {
            "id": "5940",
            "title": "Idealismus und Realismus",
            "folder": "idealismus-und-realismus-5940"
      },
      {
            "id": "5832",
            "title": "Kritische Theorie verstehen",
            "folder": "kritische-theorie-verstehen-5832"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Hegel+Dialektik+Idealismus&t=3752"
  },
  "friedrich-nietzsche-und-der-uebermensch": {
    slug: "friedrich-nietzsche-und-der-uebermensch",
    title: "Friedrich Nietzsche & die Umwertung aller Werte",
    category: "Existenzphilosophie, Anthropologie & Bewusstsein",
    shortDesc: "'Gott ist tot', Nihilismus, Der Übermensch, Wille zur Macht, Amor fati und die ewige Wiederkunft des Gleichen.",
    longDesc: "Friedrich Nietzsche (1844–1900) zertrümmerte mit dem 'philosophischen Hammer' traditionelle Moralsysteme und Dogmen. Angesichts des heraufziehenden Nihilismus forderte er eine radikale Umwertung aller Werte und die schöpferische Selbstüberwindung des Menschen.",
    keyPoints: [
      "'Gott ist tot' & Nihilismus: Der Verlust metaphysischer Sinnstiftung zwingt den Menschen, Sinn und Werte aus eigener Kraft neu zu schaffen",
      "Herrenmoral vs. Sklavenmoral: Kritik an der christlichen 'Mitleidsethik' als Ressentiment der Schwachen vs. lebensbejahende Vitalität des Vornehmen",
      "Der Übermensch (Also sprach Zarathustra): Ideal des Menschen, der über sich selbst hinauswächst, Dogmen überwindet und eigene Werte erschafft",
      "Wille zur Macht: Das fundamentale Lebensprinzip der Selbstbehauptung, Gestaltung und schöpferischen Entfaltung",
      "Ewige Wiederkunft & Amor fati: Höchste Bejahung des Lebens – Lebe so, dass du jeden Augenblick unendlich oft wiederholen wolltest"
],
    exercises: [
      {
            "id": "1103",
            "title": "Friedrich Nietzsche – Philosoph des Umbruchs",
            "folder": "friedrich-nietzsche-1103"
      },
      {
            "id": "3865",
            "title": "Friedrich Nietzsche – Vertiefung",
            "folder": "friedrich-nietzsche-2-3865"
      },
      {
            "id": "2792",
            "title": "Nietzsche und der Übermensch",
            "folder": "nietzsche-und-der-bermensch-2792"
      },
      {
            "id": "2761",
            "title": "Der Zusammenhang zwischen Wissen und Macht",
            "folder": "der-zusammenhang-zwischen-wissen-und-macht-2761"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Friedrich+Nietzsche+Philosophie&t=3752"
  },
  "existenzialismus-camus-und-sartre": {
    slug: "existenzialismus-camus-und-sartre",
    title: "Existenzialismus: Camus, Sartre & Absurdität",
    category: "Existenzphilosophie, Anthropologie & Bewusstsein",
    shortDesc: "Jean-Paul Sartre ('Die Existenz geht dem Wesen voraus'), Albert Camus (Der Mythos des Sisyphos), Absurdität und radikale Freiheit.",
    longDesc: "Der Existenzialismus rückte die konkrete menschliche Existenz in den Mittelpunkt: In einer Welt ohne vorgegebenen göttlichen Sinn ist der Mensch zur Freiheit verurteilt und muss die volle Verantwortung für sein Wesen und Handeln übernehmen.",
    keyPoints: [
      "Existenz geht der Essenz voraus: Der Mensch existiert zuerst, begegnet sich in der Welt und definiert erst durch seine Entscheidungen, wer er ist",
      "'Zur Freiheit verurteilt': Weil es keine Ausreden gibt, trägt der Mensch die ungeteilte Verantwortung für alles, was er tut ('Mauvaise foi' = Unaufrichtigkeit)",
      "Das Absurde (Albert Camus): Die schmerzhafte Kluft zwischen der menschlichen Sehnsucht nach Sinn und dem gleichgültigen Schweigen des Universums",
      "Der Mythos des Sisyphos: 'Wir müssen uns Sisyphos als einen glücklichen Menschen vorstellen' – Revolte und Lebensfreude im Angesicht des Sinnlosen",
      "Phänomenologie der Existenz: Der Mensch im Spiegel seiner Angst, Isolation und existenziellen Grenzerfahrungen"
],
    exercises: [
      {
            "id": "1203",
            "title": "Albert Camus – Philosophie des Absurden",
            "folder": "albert-camus-1203"
      },
      {
            "id": "5789",
            "title": "Existenz und Essenz (Jean-Paul Sartre)",
            "folder": "existenz-und-essenz-5789"
      },
      {
            "id": "5790",
            "title": "Existenzialismus und Absurdität",
            "folder": "existenzialismus-und-absurditat-5790"
      },
      {
            "id": "5791",
            "title": "Existenzielle Freiheit diskutieren",
            "folder": "existenzielle-freiheit-diskutieren-5791"
      },
      {
            "id": "5854",
            "title": "Philosophie der Existenz und Freiheit",
            "folder": "philosophie-der-existenz-5854"
      },
      {
            "id": "5853",
            "title": "Phänomenologie und Existenzialismus",
            "folder": "phanomenologie-und-existenzialismus-5853"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Existenzialismus+Sartre+Camus&t=3752"
  },
  "existenzphilosophie-zeit-und-endlichkeit": {
    slug: "existenzphilosophie-zeit-und-endlichkeit",
    title: "Existenzphilosophie, Zeit & Endlichkeit",
    category: "Existenzphilosophie, Anthropologie & Bewusstsein",
    shortDesc: "Martin Heidegger (Sein und Zeit), das 'Sein zum Tode', Zeiterfahrung, Vergänglichkeit und Sinnkonstitution.",
    longDesc: "Die menschliche Existenz ist fundamental durch Zeitlichkeit und Endlichkeit geprägt. Erst das Bewusstsein der eigenen Sterblichkeit verleiht dem Leben Dringlichkeit, Tiefe und die Möglichkeit zu eigentlichem, authentischem Dasein.",
    keyPoints: [
      "Dasein und In-der-Welt-sein (Heidegger): Der Mensch existiert nicht isoliert, sondern ist immer schon in eine konkrete Welt 'geworfen'",
      "Das 'Sein zum Tode': Der unausweichliche Tod als eigenste Möglichkeit des Daseins; erst im Angesicht des Todes wird das Leben authentisch",
      "Das 'Man': Die Flucht vor der existenziellen Verantwortung in die Konventionen und das Gerede der Masse",
      "Zeitlichkeit: Zeit ist kein physikalischer Zahlenstrahl, sondern die gelebte Dimension menschlichen Entwerfens von der Vergangenheit über die Gegenwart in die Zukunft"
],
    exercises: [
      {
            "id": "5792",
            "title": "Existenzphilosophie, Sinn und Endlichkeit",
            "folder": "existenzphilosophie-und-tod-5792"
      },
      {
            "id": "5917",
            "title": "Zeit und Existenz",
            "folder": "zeit-und-existenz-5917"
      },
      {
            "id": "5918",
            "title": "Zeitphilosophie und Historie",
            "folder": "zeitphilosophie-und-historie-5918"
      },
      {
            "id": "5836",
            "title": "Menschliche Existenz analysieren",
            "folder": "menschliche-existenz-analysieren-5836"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Heidegger+Zeit+Endlichkeit+Philosophie&t=3752"
  },
  "philosophische-anthropologie-geist-und-bewusstsein": {
    slug: "philosophische-anthropologie-geist-und-bewusstsein",
    title: "Anthropologie, Philosophie des Geistes & Bewusstsein",
    category: "Existenzphilosophie, Anthropologie & Bewusstsein",
    shortDesc: "Das Leib-Seele-Problem, Qualia, Was ist der Mensch? (Scheler, Plessner, Gehlen), Selbstbewusstsein und Identität.",
    longDesc: "Was ist der Mensch, und was unterscheidet ihn vom Tier oder von künstlicher Intelligenz? Die philosophische Anthropologie und die moderne Philosophie des Geistes erforschen das Rätsel des menschlichen Bewusstseins, des Selbst und der körperlichen Verankerung.",
    keyPoints: [
      "Das Leib-Seele-Problem: Wie hängen körperliche Gehirnvorgänge und subjektives seelisches Erleben zusammen? (Dualismus, Physikalismus, Funktionalismus)",
      "Qualia & das 'Schwere Problem des Bewusstseins' (David Chalmers): Wie entsteht aus elektrochemischen Signalen das subjektive Gefühl von Schmerz oder Röte?",
      "Der Mensch als 'Mängelwesen' (Arnold Gehlen): Wegen fehlender Spezialisierung auf Kultur, Technik und Institutionen angewiesen",
      "Exzentrische Positionalität (Helmuth Plessner): Das Tier lebt aus seiner Mitte; der Mensch kann zusätzlich aus seiner Mitte heraustreten und sich selbst reflektieren",
      "Selbst und personale Identität: Was macht mich über die Zeit hinweg zu derselben Person? (Körperkontinuität vs. Bewusstseinsstrom nach John Locke)"
],
    exercises: [
      {
            "id": "5877",
            "title": "Philosophische Anthropologie – Grundlagen",
            "folder": "philosophische-anthropologie-grundlagen-5877"
      },
      {
            "id": "5866",
            "title": "Philosophie des Geistes und des Bewusstseins",
            "folder": "philosophie-des-geistes-5866"
      },
      {
            "id": "5870",
            "title": "Philosophie und Bewusstsein",
            "folder": "philosophie-und-bewusstsein-5870"
      },
      {
            "id": "5868",
            "title": "Philosophie des Selbst und der Identität",
            "folder": "philosophie-des-selbst-5868"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Philosophische+Anthropologie+Geist+Bewusstsein&t=3752"
  },
  "erkenntnistheorie-und-konstruktivismus": {
    slug: "erkenntnistheorie-und-konstruktivismus",
    title: "Erkenntnistheorie & Konstruktivismus",
    category: "Erkenntnistheorie, Logik & Wissenschaftstheorie",
    shortDesc: "Was ist Wissen? (Gerechtfertigte wahre Meinung), Empirismus vs. Rationalismus, Radikaler Konstruktivismus und Erkenntnisskepsis.",
    longDesc: "Woher wissen wir, was wahr ist? Können wir den Dingen auf den Grund gehen oder konstruiert unser Gehirn lediglich ein subjektives Modell der Wirklichkeit? Die Erkenntnistheorie analysiert die Bedingungen, Grenzen und Geltungsansprüche unseres Wissens.",
    keyPoints: [
      "Klassische Wissensdefinition (Theaitetos): Wissen als wahre, begründete Überzeugung (Justified True Belief) und die Kritik durch Gettier-Probleme",
      "Erkenntnisskepsis: Vom antiken Pyrrhonismus über Descartes' Dämon bis zum modernen 'Gehirn im Tank'-Gedankenexperiment",
      "Empirismus (Locke, Hume): Der Geist ist bei der Geburt eine 'Tabula rasa' (unbeschriebenes Blatt); alles Wissen stammt aus Sinneserfahrung",
      "Radikaler Konstruktivismus (von Glasersfeld, Maturana): Wirklichkeit wird vom Nervensystem nicht abgebildet, sondern intern konstruiert ('Viabilität' statt absoluter Wahrheit)",
      "Kritik philosophischer Dogmen: Die ständige Bereitschaft, scheinbare Gewissheiten kritisch zu hinterfragen"
],
    exercises: [
      {
            "id": "5809",
            "title": "Grundlagen der Erkenntnistheorie",
            "folder": "grundlagen-der-erkenntnistheorie-5809"
      },
      {
            "id": "5785",
            "title": "Erkenntnistheorie und Logik",
            "folder": "erkenntnistheorie-und-logik-5785"
      },
      {
            "id": "5822",
            "title": "Konstruktivismus in der Erkenntnistheorie",
            "folder": "konstruktivismus-in-erkenntnistheorie-5822"
      },
      {
            "id": "5830",
            "title": "Kritik philosophischer Dogmen",
            "folder": "kritik-philosophischer-dogmen-5830"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erkenntnistheorie+Konstruktivismus&t=3752"
  },
  "philosophische-logik-und-analytische-philosophie": {
    slug: "philosophische-logik-und-analytische-philosophie",
    title: "Philosophische Logik & Analytische Philosophie",
    category: "Erkenntnistheorie, Logik & Wissenschaftstheorie",
    shortDesc: "Aussagenlogik, Fehlschlüsse (Fehlschlusslehre), Argumentationsstrukturen, Frege, Russell und die 'linguistic turn'.",
    longDesc: "Philosophie lebt von präziser Argumentation und klarem Denken. Die philosophische Logik liefert das formale Handwerkszeug, um Scheinargumente zu entlarven, während die Analytische Philosophie die sprachliche Struktur von Gedanken seziert.",
    keyPoints: [
      "Klassische Logik: Gesetze des Denkens (Satz der Identität, Satz vom Widerspruch, Satz vom ausgeschlossenen Dritten)",
      "Logische Fehlschlüsse: Ad-hominem-Argumente, Strohmann-Argument, Zirkelschluss (Petitio principii) und naturalistische Fehlschlüsse erkennen",
      "Analytische Philosophie (Frege, Russell, früher Wittgenstein): Philosophie als logische Sprachanalyse zur Beseitigung sprachlicher Verwirrungen",
      "Sinn und Bedeutung (Gottlob Frege): Warum 'Morgenstern' und 'Abendstern' denselben Gegenstand (Bedeutung), aber unterschiedliche Gehalte (Sinn) haben",
      "Struktur philosophischer Diskurse: Prämissen, Konklusionen, Deduktion, Induktion und Abduktion"
],
    exercises: [
      {
            "id": "5879",
            "title": "Philosophische Logik verstehen",
            "folder": "philosophische-logik-verstehen-5879"
      },
      {
            "id": "5742",
            "title": "Analytische Philosophie Grundlagen",
            "folder": "analytische-philosophie-grundlagen-5742"
      },
      {
            "id": "5895",
            "title": "Struktur philosophischer Diskurse",
            "folder": "struktur-philosophischer-diskurse-5895"
      },
      {
            "id": "2789",
            "title": "Die Theorie des Pragmatismus",
            "folder": "die-theorie-des-pragmatismus-2789"
      },
      {
            "id": "5902",
            "title": "Unendlichkeit und Unendliches",
            "folder": "unendlichkeit-und-unendliches-5902"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Philosophische+Logik+Analytische+Philosophie&t=3752"
  },
  "wissenschaftstheorie-und-technikphilosophie": {
    slug: "wissenschaftstheorie-und-technikphilosophie",
    title: "Wissenschaftstheorie & Technikphilosophie",
    category: "Erkenntnistheorie, Logik & Wissenschaftstheorie",
    shortDesc: "Karl Popper (Falsifikationsprinzip), Thomas Kuhn (Paradigmenwechsel), Technikfolgenabschätzung und Digitalisierung.",
    longDesc: "Wie schreitet wissenschaftliche Erkenntnis voran und welche Macht übt Technik über den Menschen aus? Die Wissenschaftstheorie untersucht die Methoden und Wahrheitskriterien der Wissenschaften, während die Technikphilosophie die Folgen technologischer Umbrüche reflektiert.",
    keyPoints: [
      "Kritischer Rationalismus (Karl Popper): Wissenschaftliche Theorien können niemals endgültig bewiesen (verifiziert), sondern nur widerlegt (falsifiziert) werden",
      "Paradigmenwechsel (Thomas Kuhn): Wissenschaft entwickelt sich nicht rein linear, sondern durch revolutionäre Brüche zwischen etablierten Denkmustern",
      "Wissenschaft vs. Pseudowissenschaft: Das Abgrenzungsproblem und die Kriterien empirischer Überprüfbarkeit",
      "Technikphilosophie (Heidegger, Anders): Technik als 'Gestell', das die Natur zur bloßen Ressource degradiert; 'Die Antiquiertheit des Menschen'",
      "Philosophie der Digitalisierung: Künstliche Intelligenz, virtuelle Welten und die Veränderung von menschlicher Kommunikation und Selbstwahrnehmung"
],
    exercises: [
      {
            "id": "5863",
            "title": "Philosophie der Wissenschaft",
            "folder": "philosophie-der-wissenschaft-5863"
      },
      {
            "id": "5876",
            "title": "Philosophie und Wissenschaftstheorie",
            "folder": "philosophie-und-wissenschaftstheorie-5876"
      },
      {
            "id": "5915",
            "title": "Wissenschaft und Philosophie",
            "folder": "wissenschaft-und-philosophie-5915"
      },
      {
            "id": "5862",
            "title": "Philosophie der Technik",
            "folder": "philosophie-der-technik-5862"
      },
      {
            "id": "5871",
            "title": "Philosophie und Digitalisierung",
            "folder": "philosophie-und-digitalisierung-5871"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Wissenschaftstheorie+Popper+Technikphilosophie&t=3752"
  },
  "moralphilosophie-und-ethische-theorien": {
    slug: "moralphilosophie-und-ethische-theorien",
    title: "Moralphilosophie & Normative Ethik",
    category: "Moralphilosophie & Angewandte Ethik",
    shortDesc: "Deontologie vs. Teleologie, Utilitarismus, Diskursethik (Habermas), Tugendethik (Nussbaum) und Hans Jonas' Verantwortungsethik.",
    longDesc: "Die Moralphilosophie fragt nach den Kriterien für Gut und Böse und nach den Begründungen für verbindliche Pflichten. In diesem Themenbereich werden die großen normativen Systeme der Philosophie theoriegeleitet miteinander verglichen.",
    keyPoints: [
      "Deontologie (Pflichtethik) vs. Teleologie (Folgenethik): Begründung moralischen Werts aus innerer Pflicht (Kant) vs. aus den Konsequenzen für das Gemeinwohl (Utilitarismus)",
      "Diskursethik (Jürgen Habermas): Moralische Normen gewinnen ihre Gültigkeit im herrschaftsfreien Dialog vernünftiger Sprecher",
      "Fähigkeitenansatz (Martha Nussbaum): Ethische Bestimmung dessen, was ein Mensch zur Entfaltung eines wahrhaft würdevollen Lebens benötigt",
      "Das Prinzip Verantwortung (Hans Jonas): Ethik für das technologische Zeitalter mit Blick auf die Bewahrung des menschlichen Lebens auf Erden",
      "Metaethik: Was bedeuten moralische Urteile? Kognitivismus vs. Non-Kognitivismus, moralischer Realismus vs. Relativismus"
],
    exercises: [
      {
            "id": "2759",
            "title": "Deontologische vs. teleologische Ethik im Vergleich",
            "folder": "der-vergleich-von-deontologischer-und-teleologischer-ethik-2759"
      },
      {
            "id": "5788",
            "title": "Ethik und Moralphilosophie",
            "folder": "ethik-und-moralphilosophie-5788"
      },
      {
            "id": "4430",
            "title": "Diskursethik nach Jürgen Habermas",
            "folder": "diskursethik-4430"
      },
      {
            "id": "2784",
            "title": "Tugendethik & Fähigkeitenansatz (Martha Nussbaum)",
            "folder": "die-theorie-der-tugendethik-von-martha-nussbaum-2784"
      },
      {
            "id": "5786",
            "title": "Ethik der Verantwortung (Hans Jonas)",
            "folder": "ethik-der-verantwortung-5786"
      },
      {
            "id": "5799",
            "title": "Zentrale Fragen der Ethik",
            "folder": "fragen-der-ethik-5799"
      },
      {
            "id": "5844",
            "title": "Moral und Ethik – Grundbegriffe",
            "folder": "moral-und-ethik-5844"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Moralphilosophie+Normative+Ethik&t=3752"
  },
  "angewandte-philosophische-ethik": {
    slug: "angewandte-philosophische-ethik",
    title: "Angewandte Ethik & Verantwortung",
    category: "Moralphilosophie & Angewandte Ethik",
    shortDesc: "Bio- und Medizinethik, Genmanipulation, Medienethik, Wissenschaftsethik und Ethik in der Politik.",
    longDesc: "Angewandte Ethik überträgt philosophische Prinzipien auf brennende Konflikte moderner Gesellschaften: von den Grenzen medizinischer Lebensverlängerung und Genetik über Medienwahrheit bis hin zur Verantwortung in Politik und Wissenschaft.",
    keyPoints: [
      "Medizin- & Bioethik: Ethische Dilemmata bei künstlicher Fortpflanzung, Keimbahneingriffen und Verteilung lebensrettender Ressourcen",
      "Genethik: Wo verläuft die Grenze zwischen der Heilung schwerer Erbkrankheiten und der Züchtung von 'Designerbabys'?",
      "Medienethik: Informationspflicht, Filterblasen, Fake News und der Wahrheitsanspruch in der öffentlichen Kommunikation",
      "Wissenschaftsethik: Freiheit der Forschung vs. Verantwortung für die potenziell zerstörerischen Folgen neuer Entdeckungen",
      "Ethik in der Politik: Das Spannungsverhältnis zwischen Gesinnungsethik (feste Prinzipien) und Verantwortungsethik (Kalkulation realer Macht und Folgen nach Max Weber)"
],
    exercises: [
      {
            "id": "2763",
            "title": "Ethik in der Medizin",
            "folder": "die-bedeutung-von-ethik-in-der-medizin-2763"
      },
      {
            "id": "2770",
            "title": "Ethik der genetischen Manipulation",
            "folder": "die-ethik-der-genetischen-manipulation-2770"
      },
      {
            "id": "2842",
            "title": "Ethik in der künstlichen Fortpflanzung",
            "folder": "ethik-in-der-kunstlichen-fortpflanzung-2842"
      },
      {
            "id": "2860",
            "title": "Medienethik und Fake News",
            "folder": "medienethik-und-fake-news-2860"
      },
      {
            "id": "5916",
            "title": "Wissenschaftsethik und Verantwortung",
            "folder": "wissenschaftsethik-und-moral-5916"
      },
      {
            "id": "2841",
            "title": "Ethik im Sport: Doping und Fair Play",
            "folder": "ethik-im-sport-doping-und-fair-play-2841"
      },
      {
            "id": "5787",
            "title": "Ethik in der Politik",
            "folder": "ethik-in-der-politik-5787"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Angewandte+Ethik+Verantwortung&t=3752"
  },
  "staatsphilosophie-und-vertragstheorien": {
    slug: "staatsphilosophie-und-vertragstheorien",
    title: "Staatsphilosophie, Gesellschaftsvertrag & Gerechtigkeit",
    category: "Staats-, Sozial- & Kulturphilosophie",
    shortDesc: "Hobbes (Leviathan), Locke, Rousseau (Gemeinwille), John Rawls (Schleier des Nichtwissens) und Theorien der Gerechtigkeit.",
    longDesc: "Warum unterwerfen sich Menschen staatlicher Herrschaft und was macht einen Staat legitim und gerecht? Vertragstheorien begründen den Staat aus dem hypothetischen Naturzustand, während moderne Gerechtigkeitstheorien faire Verteilungsregeln entwerfen.",
    keyPoints: [
      "Naturzustand und Vertrag: Thomas Hobbes (Krieg aller gegen alle ➔ absoluter Staat für Sicherheit); John Locke (Schutz natürlicher Rechte: Leben, Freiheit, Eigentum ➔ Gewaltenteilung)",
      "Jean-Jacques Rousseau: 'Der Mensch wird frei geboren, und überall liegt er in Ketten' – Volkssouveränität und der Gemeinwille (Volonté générale)",
      "Gerechtigkeitstheorie von John Rawls: Gedankenexperiment des 'Schleiers des Nichtwissens' (Veil of Ignorance) – faire Grundsätze ohne Kenntnis der eigenen gesellschaftlichen Stellung",
      "Freiheitsbegriff (Isaiah Berlin): Negative Freiheit (Freisein von staatlichem Zwang) vs. positive Freiheit (Befähigung zu selbstbestimmtem Leben)",
      "Widerstandsrecht: Wann haben Bürgerinnen und Bürger das Recht oder die moralische Pflicht, unerträglichem Unrecht Widerstand zu leisten?"
],
    exercises: [
      {
            "id": "3594",
            "title": "Theorien des Staates: Hobbes, Locke, Rousseau, Marx, Weber",
            "folder": "theorien-des-staates-staatsverstandnisse-von-hobbes-locke-rousseau-marx-weber-3594"
      },
      {
            "id": "2790",
            "title": "Der Gesellschaftsvertrag nach Jean-Jacques Rousseau",
            "folder": "die-theorie-des-sozialvertrags-von-rousseau-2790"
      },
      {
            "id": "5882",
            "title": "Grundlagen der politischen Philosophie",
            "folder": "politische-philosophie-grundlagen-5882"
      },
      {
            "id": "5856",
            "title": "Philosophie der Gerechtigkeit",
            "folder": "philosophie-der-gerechtigkeit-5856"
      },
      {
            "id": "5855",
            "title": "Philosophie der Freiheit",
            "folder": "philosophie-der-freiheit-5855"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Staatsphilosophie+Gesellschaftsvertrag+Rawls&t=3752"
  },
  "sozialphilosophie-und-gesellschaftskritik": {
    slug: "sozialphilosophie-und-gesellschaftskritik",
    title: "Sozialphilosophie, Gesellschaftskritik & Feminismus",
    category: "Staats-, Sozial- & Kulturphilosophie",
    shortDesc: "Kritische Theorie (Frankfurter Schule), Feministische Philosophie (Simone de Beauvoir), Machtanalysen und Individualismus vs. Gemeinwohl.",
    longDesc: "Sozialphilosophie analysiert die unsichtbaren Machtstrukturen, Entfremdungsprozesse und Ungleichheiten moderner Gesellschaften. Von der Frankfurter Schule über den Feminismus bis hin zu Analysen von Krieg und Frieden wird gesellschaftlicher Wandel philosophisch reflektiert.",
    keyPoints: [
      "Kritische Theorie (Horkheimer, Adorno, Habermas): Kritik der 'instrumentellen Vernunft' und Aufklärung über gesellschaftliche Verblendungszusammenhänge",
      "Feministische Philosophie: Dekonstruktion von Rollenbildern; Simone de Beauvoir: 'Man kommt nicht als Frau zur Welt, man wird es'",
      "Individualismus vs. Gemeinwohl: Liberalismus vs. Kommunitarismus – Wie viel Gemeinschaft braucht der freie Einzelne?",
      "Philosophie des Krieges und Friedens: Theorien des 'Gerechten Krieges' (Bellum iustum), Pazifismus und Kants Entwurf 'Zum ewigen Frieden'",
      "Machtkritik (Michel Foucault): Macht als allgegenwärtiges Disziplinierungsnetzwerk in Institutionen, Sprache und Körpern"
],
    exercises: [
      {
            "id": "5801",
            "title": "Gesellschaftskritische Philosophieansätze",
            "folder": "gesellschaftskritische-philosophie-ansatze-5801"
      },
      {
            "id": "5793",
            "title": "Feministische Ansätze in der Philosophie",
            "folder": "feministische-ansatze-in-der-philosophie-5793"
      },
      {
            "id": "2751",
            "title": "Individualismus vs. Gemeinwohl",
            "folder": "der-konflikt-zwischen-individualismus-und-gemeinwohl-2751"
      },
      {
            "id": "5867",
            "title": "Philosophie des Krieges",
            "folder": "philosophie-des-krieges-5867"
      },
      {
            "id": "5874",
            "title": "Philosophie und Politik",
            "folder": "philosophie-und-politik-5874"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Gesellschaftskritik+Feminismus+Philosophie&t=3752"
  },
  "sprachphilosophie-hermeneutik-und-postmoderne": {
    slug: "sprachphilosophie-hermeneutik-und-postmoderne",
    title: "Sprachphilosophie, Hermeneutik & Postmoderne",
    category: "Staats-, Sozial- & Kulturphilosophie",
    shortDesc: "Ludwig Wittgenstein (Sprachspiele), Hans-Georg Gadamer (Wahrheit und Methode), Dekonstruktion (Derrida) und Lyotard.",
    longDesc: "Sprache ist nicht nur ein Werkzeug zur Informationsübertragung, sondern das Medium, in dem sich unsere Welterfahrung überhaupt erst konstituiert. Sprachphilosophie und Hermeneutik erforschen das Verstehen von Texten, die Grenzen des Sagbaren und das postmoderne Ende der großen Erzählungen.",
    keyPoints: [
      "Später Wittgenstein: 'Die Bedeutung eines Wortes ist sein Gebrauch in der Sprache'; Sprache als vielfältige 'Sprachspiele' mit eigenen Regeln",
      "'Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt' (Tractatus): Was sich überhaupt sagen lässt, lässt sich klar sagen; wovon man nicht sprechen kann, darüber muss man schweigen",
      "Hermeneutik (Gadamer): Verstehen als 'Horizontverschmelzung' zwischen Leser und historischem Text im hermeneutischen Zirkel",
      "Strukturalismus & Poststrukturalismus: Zeichen existieren nur im System von Differenzen (Saussure); Dekonstruktion scheinbar fester Gegensätze (Derrida)",
      "Postmoderne (Lyotard): 'Unglaube gegenüber den Metaerzählungen' (Fortschritt, Emanzipation, Vernunftsysteme) und Anerkennung von Pluralität"
],
    exercises: [
      {
            "id": "5861",
            "title": "Philosophie der Sprache",
            "folder": "philosophie-der-sprache-5861"
      },
      {
            "id": "5891",
            "title": "Sprachphilosophie und Logik",
            "folder": "sprachphilosophie-und-logik-5891"
      },
      {
            "id": "5939",
            "title": "Hermeneutik und Interpretation",
            "folder": "hermeneutik-und-interpretation-5939"
      },
      {
            "id": "5896",
            "title": "Strukturalismus in der Philosophie",
            "folder": "strukturalismus-in-philosophie-5896"
      },
      {
            "id": "5883",
            "title": "Postmoderne philosophische Perspektiven",
            "folder": "postmoderne-philosophische-perspektiven-5883"
      },
      {
            "id": "5837",
            "title": "Metaphern in der Philosophie",
            "folder": "metaphern-in-der-philosophie-5837"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sprachphilosophie+Wittgenstein+Hermeneutik&t=3752"
  },
  "aesthetik-kunst-und-kulturphilosophie": {
    slug: "aesthetik-kunst-und-kulturphilosophie",
    title: "Ästhetik, Kunst-, Musik- & Kulturphilosophie",
    category: "Staats-, Sozial- & Kulturphilosophie",
    shortDesc: "Was ist Schönheit? Kants Ästhetik des 'interesselosen Wohlgefallens', Musikphilosophie, Naturphilosophie und Philosophie der Liebe.",
    longDesc: "Die philosophische Ästhetik erforscht das Wesen von Schönheit, Kunst und sinnlicher Wahrnehmung. Kulturphilosophie fragt nach der Bedeutung von Symbolen, Musik, Naturverständnis und zwischenmenschlicher Liebe für das menschliche Selbstverständnis.",
    keyPoints: [
      "Begriff des Schönen: Objektive Harmonie und Proportion (Antike) vs. subjektives Geschmacksurteil (Aufklärung)",
      "Kants Ästhetik: Das Schöne gefällt im 'interesselosen Wohlgefallen'; das Erhabene als Erfahrung, die menschliche Vorstellungskraft übersteigt",
      "Funktion von Kunst: Nachahmung der Natur (Mimesis), emotionale Reinigung (Katharsis) oder gesellschaftliche Provokation und Erkenntnis",
      "Musikphilosophie: Musik als 'unmittelbare Sprache der Gefühle' oder als rationale mathematische Ordnung der Welt",
      "Philosophie der Liebe: Platons Symposion (Eros als Streben nach Unsterblichkeit und Schönheit) bis hin zur existentiellen Zweisamkeit"
],
    exercises: [
      {
            "id": "5744",
            "title": "Ästhetik und Kunstphilosophie",
            "folder": "sthetik-und-kunstphilosophie-5744"
      },
      {
            "id": "5848",
            "title": "Musikphilosophie und Klang",
            "folder": "musikphilosophie-und-klang-5848"
      },
      {
            "id": "5834",
            "title": "Kulturphilosophie und Identität",
            "folder": "kulturphilosophie-und-identitat-5834"
      },
      {
            "id": "5849",
            "title": "Natur und Kultur philosophieren",
            "folder": "natur-und-kultur-philosophieren-5849"
      },
      {
            "id": "5860",
            "title": "Philosophie der Natur",
            "folder": "philosophie-der-natur-5860"
      },
      {
            "id": "5850",
            "title": "Naturphilosophie und Kosmos",
            "folder": "naturphilosophie-und-kosmos-5850"
      },
      {
            "id": "5858",
            "title": "Philosophie der Liebe",
            "folder": "philosophie-der-liebe-5858"
      },
      {
            "id": "5857",
            "title": "Philosophie der Geschichte",
            "folder": "philosophie-der-geschichte-5857"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Aesthetik+Kunstphilosophie+Kulturphilosophie&t=3752"
  },
  "religionsphilosophie-und-metaphysik": {
    slug: "religionsphilosophie-und-metaphysik",
    title: "Religionsphilosophie, Metaphysik & Gottesbeweise",
    category: "Staats-, Sozial- & Kulturphilosophie",
    shortDesc: "Kosmologischer, teleologischer & ontologischer Gottesbeweis, Theodizee-Problem, Glauben und Vernunft von der Antike bis zur Moderne.",
    longDesc: "Gibt es einen Gott? Wie lässt sich das Leid in der Welt mit einem gütigen Schöpfer vereinbaren? Religionsphilosophie untersucht Glaubensüberzeugungen mit den Mitteln der Vernunft und hinterfragt die metaphysischen Grundlagen des Seins.",
    keyPoints: [
      "Metaphysik & Ontologie: Die Lehre vom 'Seienden als Seiendem' – Erste Ursache, Wesen und Grundstrukturen der Realität",
      "Klassische Gottesbeweise: Ontologischer Gottesbeweis (Anselm von Canterbury), kosmologische Wege (Thomas von Aquin: Erste Ursache, Unbewegter Beweger) und teleologischer Beweis (Zweckmäßigkeit der Natur)",
      "Kants Kritik der Gottesbeweise: Existenz ist kein reales Prädikat; Gott kann rational nicht bewiesen, aber als Postulat der praktischen Vernunft gefordert werden",
      "Das Theodizee-Problem (Leibniz): Wenn Gott allmächtig und gütig ist, woher kommt das Böse und das unverschuldete Leiden in der Welt?",
      "Glaube vs. Vernunft: Von der mittelalterlichen Scholastik ('Fides quaerens intellectum') bis zur modernen Religionskritik (Feuerbach, Marx, Freud)"
],
    exercises: [
      {
            "id": "5838",
            "title": "Metaphysik und Ontologie",
            "folder": "metaphysik-und-ontologie-5838"
      },
      {
            "id": "5887",
            "title": "Religionsphilosophie und Theologie",
            "folder": "religionsphilosophie-und-theologie-5887"
      },
      {
            "id": "2077",
            "title": "Die Existenz Gottes und Gottesbeweise",
            "folder": "die-existenz-gottes-und-gottesbeweise-2077"
      },
      {
            "id": "6649",
            "title": "Gott in der Philosophie",
            "folder": "gott-in-der-philosophie-6649"
      },
      {
            "id": "5875",
            "title": "Philosophie und Religion",
            "folder": "philosophie-und-religion-5875"
      },
      {
            "id": "5842",
            "title": "Mittelalterliche Theologie und Philosophie",
            "folder": "mittelalterliche-theologie-und-philosophie-5842"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Religionsphilosophie+Gottesbeweise+Theodizee&t=3752"
  },
  "philosophische-lebenskunst-und-methodik": {
    slug: "philosophische-lebenskunst-und-methodik",
    title: "Philosophische Lebenskunst, Methodik & Ideengeschichte",
    category: "Staats-, Sozial- & Kulturphilosophie",
    shortDesc: "Philosophie als Lebenspraxis, Stoizismus, philosophische Reflexion im Alltag, Biographien großer Denker und interkulturelle Perspektiven.",
    longDesc: "Philosophie war in ihren Ursprüngen keine akademische Trockenübung, sondern eine lebendige Anleitung zu gelingender Lebenspraxis. Dieser Themenbereich vermittelt Methoden philosophischer Alltagsreflexion, beleuchtet Stoizismus und Gelassenheit und öffnet den Blick für interkulturelle Philosophien.",
    keyPoints: [
      "Philosophie als Lebenskunst: Antike Lebensschulen (Stoa, Epikureismus, Kynismus) als praktische Seelenheilkunde und Training der inneren Seelenruhe (Ataraxie)",
      "Stoizismus (Seneca, Epiktet, Marcus Aurelius): Konzentration auf das, was in unserer Macht steht; Gelassenheit gegenüber Dingen, die wir nicht ändern können",
      "Philosophieren mit Kindern und Jugendlichen: Staunen als Anfang aller Philosophie (Thaumazein), offene Fragen stellen und Scheingewissheiten hinterfragen",
      "Interkulturelle Philosophie: Vergleichende Perspektiven zwischen westlicher Philosophie und östlichen Denktraditionen (Daoismus, Konfuzianismus)",
      "Philosophische Biographien & Ideengeschichte: Wie historische Lebensumstände und persönliche Krisen das Denken großer Philosophen prägten"
],
    exercises: [
      {
            "id": "5804",
            "title": "Grundfragen der Philosophie",
            "folder": "grundfragen-der-philosophie-5804"
      },
      {
            "id": "5941",
            "title": "Ideengeschichte der Philosophie",
            "folder": "ideengeschichte-der-philosophie-5941"
      },
      {
            "id": "5880",
            "title": "Philosophische Methodik Grundlagen",
            "folder": "philosophische-methodik-grundlagen-5880"
      },
      {
            "id": "5872",
            "title": "Philosophie und Lebenskunst",
            "folder": "philosophie-und-lebenskunst-5872"
      },
      {
            "id": "5881",
            "title": "Philosophische Reflexion im Alltag",
            "folder": "philosophische-reflexion-im-alltag-5881"
      },
      {
            "id": "5864",
            "title": "Philosophie des Alltags",
            "folder": "philosophie-des-alltags-5864"
      },
      {
            "id": "5878",
            "title": "Philosophische Biographien studieren",
            "folder": "philosophische-biographien-studieren-5878"
      },
      {
            "id": "5819",
            "title": "Interkulturelle philosophische Denkansätze",
            "folder": "interkulturelle-philosophische-denkansatze-5819"
      },
      {
            "id": "5833",
            "title": "Kulturelle Philosophieperspektiven",
            "folder": "kulturelle-philosophie-perspektiven-5833"
      },
      {
            "id": "6390",
            "title": "Philosophie in der Schweiz",
            "folder": "philosophie-in-der-schweiz-6390"
      }
],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=Philosophische+Lebenskunst+Methodik&t=3752"
  }
};
