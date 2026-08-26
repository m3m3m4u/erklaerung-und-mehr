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
  "Erkenntnistheorie, Anthropologie & Existenz",
  "Ethik, Moral & Angewandte Ethik",
  "Staatsphilosophie, Sprache & Kultur"
];

export const philosophieTopics: Record<string, PhilosophieTopic> = {
  "sokrates-und-die-sokratische-methode": {
    "slug": "sokrates-und-die-sokratische-methode",
    "title": "Sokrates & die Sokratische Methode",
    "category": "Antike Philosophie & Große Denker",
    "shortDesc": "'Ich weiß, dass ich nichts weiß', Mäeutik (Hebammenkunst), philosophischer Dialog und der Prozess/Tod des Sokrates.",
    "longDesc": "Sokrates (469–399 v. Chr.) gilt als Urvater der abendländischen Philosophie. Er hinterließ keine eigenen Schriften, sondern befragte die Bürger Athens auf den Marktplätzen, um scheinbares Scheinwissen zu entlarven und tieferes philosophisches Verstehen zu wecken.",
    "keyPoints": [
      "Sokratische Ironie: Vorgebliches Nichtwissen ('Ich weiß, dass ich nicht weiß'), um den Gesprächspartner zum eigenständigen Nachdenken zu bewegen",
      "Mäeutik (Hebammenkunst): Gezielte Gesprächsführung und bohrende Fragen, um im Gegenüber Wahrheit und Selbsterkenntnis zur Welt zu bringen",
      "Tugendlehre: Einsicht in das Gute führt unausweichlich zum richtigen ethischen Handeln ('Niemand tut freiwillig Unrecht')",
      "Prozess und Schierlingsbecher (399 v. Chr.): Verurteilung wegen angeblicher Gottlosigkeit und Verführung der Jugend; Sokrates wählte den Gifttod aus Treue zu den Gesetzen des Staates"
    ],
    "exercises": [
      {
        "id": "sokrates-und-die-sokratische-methode-2794",
        "title": "Sokrates und die sokratische Methode",
        "folder": "sokrates-und-die-sokratische-methode-2794"
      },
      {
        "id": "der-tod-des-sokrates-jacques-louis-david-1787-4690",
        "title": "Der Tod des Sokrates (Historische Analyse)",
        "folder": "der-tod-des-sokrates-jacques-louis-david-1787-4690"
      },
      {
        "id": "philosophie-des-dialogs-5865",
        "title": "Philosophie des Dialogs und der Reflexion",
        "folder": "philosophie-des-dialogs-5865"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sokrates+Philosophie&t=3752"
  },
  "platon-und-die-ideenlehre": {
    "slug": "platon-und-die-ideenlehre",
    "title": "Platon, Höhlengleichnis & Ideenlehre",
    "category": "Antike Philosophie & Große Denker",
    "shortDesc": "Die zwei Welten (Sinnenwelt vs. Ideenwelt), das berühmte Höhlengleichnis, Platons Akademie und der ideale Philosophenstaat (Politeia).",
    "longDesc": "Platon (428–348 v. Chr.), Schüler des Sokrates und Lehrer von Aristoteles, begründete den philosophischen Idealismus. Nach Platon ist die sichtbare Welt der Dinge nur ein unvollkommenes Abbild der ewigen, unveränderlichen Ideen.",
    "keyPoints": [
      "Zwei-Welten-Theorie: Vergängliche Sinnenwelt (Schattenwelt) vs. ewige, vollkommene Ideenwelt (Archetypen wie Gerechtigkeit, Schönheit, das Gute)",
      "Das Höhlengleichnis: Menschen in einer Höhle halten Schatten an der Wand für die Wirklichkeit; die Befreiung ans Sonnenlicht symbolisiert den mühsamen Weg der philosophischen Erkenntnis",
      "Die Politeia (Der ideale Staat): Herrschaft der Philosophenkönige; Gliederung der Gesellschaft in 1. Lehrstand/Herrscher (Weisheit), 2. Wehrstand/Wächter (Mut), 3. Nährstand/Bauern & Handwerker (Besonnenheit)",
      "Seelenlehre: Dreiteilung der Seele in Vernunft (Kopf), Mut/Tatkraft (Brust) und Begehren/Triebe (Bauch)"
    ],
    "exercises": [
      {
        "id": "platon-und-seine-ideenlehre-2793",
        "title": "Platon und seine Ideenlehre",
        "folder": "platon-und-seine-ideenlehre-2793"
      },
      {
        "id": "philosophie-und-mythologie-5873",
        "title": "Philosophie und philosophische Mythen",
        "folder": "philosophie-und-mythologie-5873"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Platon+Ideenlehre&t=3752"
  },
  "aristoteles-und-die-antike-philosophie": {
    "slug": "aristoteles-und-die-antike-philosophie",
    "title": "Aristoteles, Tugendethik & Antike Philosophie",
    "category": "Antike Philosophie & Große Denker",
    "shortDesc": "Nikomachische Ethik, Mesotes-Lehre (die goldene Mitte), Eudaimonie (Glückseligkeit), Stoa, Epikur und Hellenismus.",
    "longDesc": "Aristoteles (384–322 v. Chr.) systematisierte die gesamte antike Wissenschaft von der Logik über Biologie bis zur Ethik. Im Zentrum seiner Ethik steht das Streben nach dem gelingenden, glücklichen Leben (Eudaimonie) durch Einübung von Charaktertugenden.",
    "keyPoints": [
      "Mesotes-Lehre (Goldene Mitte): Tugend ist die Mitte zwischen zwei Extremen (z. B. Tapferkeit zwischen Feigheit und Tollkühnheit; Großzügigkeit zwischen Geiz und Verschwendung)",
      "Eudaimonie (Glückseligkeit): Das höchste Ziel menschlichen Handelns, das durch tugendhafte Lebensführung und Entfaltung des Verstandes erreicht wird",
      "Der Mensch als 'Zoon Politikon': Der Mensch ist von Natur aus ein soziales und staatenbildendes Wesen",
      "Stoische Philosophie (Stoa): Seelenruhe (Ataraxie) und Gelassenheit durch Vernunft und Akzeptanz des Schicksals; Epikureismus: Vernünftige Lust und Freiheit von Schmerz"
    ],
    "exercises": [
      {
        "id": "grundlagen-der-tugendethik-5930",
        "title": "Grundlagen der Tugendethik nach Aristoteles",
        "folder": "grundlagen-der-tugendethik-5930"
      },
      {
        "id": "tugendethik-4459",
        "title": "Tugendethik im Alltag anwenden",
        "folder": "tugendethik-4459"
      },
      {
        "id": "einfuhrung-in-antike-philosophie-5755",
        "title": "Einführung in die antike Philosophie",
        "folder": "einfuhrung-in-antike-philosophie-5755"
      },
      {
        "id": "philosophie-und-wissenschaft-im-antiken-griechenland-5217",
        "title": "Philosophie und Wissenschaft im antiken Griechenland",
        "folder": "philosophie-und-wissenschaft-im-antiken-griechenland-5217"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Aristoteles+Tugendethik&t=3752"
  },
  "immanuel-kant-und-die-aufklaerung": {
    "slug": "immanuel-kant-und-die-aufklaerung",
    "title": "Immanuel Kant & die Aufklärung",
    "category": "Erkenntnistheorie, Anthropologie & Existenz",
    "shortDesc": "'Habe Mut, dich deines eigenen Verstandes zu bedienen!', Kategorischer Imperativ, Pflichtethik und Kritik der reinen Vernunft.",
    "longDesc": "Immanuel Kant (1724–1804) revolutionierte die Philosophie durch seine Erkenntniskritik und seine Pflichtethik. Mit der Definition der Aufklärung als 'Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit' prägte er das moderne Denken.",
    "keyPoints": [
      "Definition der Aufklärung: 'Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit. Sapere aude! Habe Mut, dich deines eigenen Verstandes zu bedienen!'",
      "Kategorischer Imperativ: 'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.'",
      "Menschheitszweckformel: Der Mensch darf niemals bloß als Mittel zum Zweck, sondern muss immer zugleich als Zweck an sich behandelt werden",
      "Kants 4 Grundfragen: 1. Was kann ich wissen? (Erkenntnistheorie) ➔ 2. Was soll ich tun? (Ethik) ➔ 3. Was darf ich hoffen? (Religion) ➔ 4. Was ist der Mensch? (Anthropologie)"
    ],
    "exercises": [
      {
        "id": "immanuel-kant-1424",
        "title": "Immanuel Kant – Leben und Denken",
        "folder": "immanuel-kant-1424"
      },
      {
        "id": "immanuel-kant-2-3966",
        "title": "Immanuel Kant – der Kategorische Imperativ",
        "folder": "immanuel-kant-2-3966"
      },
      {
        "id": "moderne-philosophie-grundlagen-5843",
        "title": "Grundlagen der modernen Philosophie",
        "folder": "moderne-philosophie-grundlagen-5843"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Immanuel+Kant+Aufklaerung&t=3752"
  },
  "friedrich-nietzsche-und-der-existentialismus": {
    "slug": "friedrich-nietzsche-und-der-existentialismus",
    "title": "Friedrich Nietzsche & Existenzphilosophie",
    "category": "Erkenntnistheorie, Anthropologie & Existenz",
    "shortDesc": "'Gott ist tot', Umwertung aller Werte, Wille zur Macht, der Übermensch, Jean-Paul Sartre und Albert Camus.",
    "longDesc": "Friedrich Nietzsche (1844–1900) hinterfragte radikal die traditionelle christliche Moral und Metaphysik. Seine Gedanken bereiteten den Weg für den Existentialismus des 20. Jahrhunderts, in dem der Mensch zur radikalen Selbstverantwortung und Freiheit aufgerufen wird.",
    "keyPoints": [
      "'Gott ist tot': Diagnose der Säkularisierung und des Nihilismus – der Mensch verliert traditionelle Sinnstiftungen und muss eigene Werte schaffen",
      "Herrenmoral vs. Sklavenmoral: Kritik an Mitleidsethik als Unterdrückung von Stärke und Lebensfreude; Aufruf zur 'Umwertung aller Werte'",
      "Der 'Übermensch': Ideal eines schöpferischen Menschen, der Sinn aus sich selbst heraus erschafft und die 'Ewige Wiederkunft des Gleichen' bejaht (Amor Fati)",
      "Existenzphilosophie (Sartre, Camus): 'Die Existenz geht dem Wesen voraus' – der Mensch ist verurteilt zur Freiheit und muss seinem Leben selbst Sinn verleihen"
    ],
    "exercises": [
      {
        "id": "friedrich-nietzsche-1103",
        "title": "Friedrich Nietzsche – Philosoph des Umbruchs",
        "folder": "friedrich-nietzsche-1103"
      },
      {
        "id": "friedrich-nietzsche-2-3865",
        "title": "Friedrich Nietzsche – Vertiefung",
        "folder": "friedrich-nietzsche-2-3865"
      },
      {
        "id": "nietzsche-und-der-bermensch-2792",
        "title": "Nietzsche und der Übermensch",
        "folder": "nietzsche-und-der-bermensch-2792"
      },
      {
        "id": "philosophie-der-existenz-5854",
        "title": "Philosophie der Existenz und Freiheit",
        "folder": "philosophie-der-existenz-5854"
      },
      {
        "id": "existenzphilosophie-und-tod-5792",
        "title": "Existenzphilosophie, Sinn und Endlichkeit",
        "folder": "existenzphilosophie-und-tod-5792"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Friedrich+Nietzsche+Existenzphilosophie&t=3752"
  },
  "erkenntnistheorie-geist-und-anthropologie": {
    "slug": "erkenntnistheorie-geist-und-anthropologie",
    "title": "Erkenntnistheorie, Philosophie des Geistes & Anthropologie",
    "category": "Erkenntnistheorie, Anthropologie & Existenz",
    "shortDesc": "René Descartes 'Cogito ergo sum', Rationalismus vs. Empirismus, Leib-Seele-Problem, künstliche Intelligenz und Menschenbilder.",
    "longDesc": "Was können wir mit Gewissheit wissen? Was unterscheidet den menschlichen Geist von Materie und Maschinen? Die Erkenntnistheorie und Philosophie des Geistes untersuchen die Bedingungen von Wahrnehmung, Wissen und Bewusstsein.",
    "keyPoints": [
      "Methodischer Zweifel (Descartes): Radikales Zweifeln an Sinneswahrnehmungen führt zum unbezweifelbaren Fundament: 'Cogito, ergo sum' (Ich denke, also bin ich)",
      "Rationalismus vs. Empirismus: Erkenntnis durch reine Vernunft und angeborene Ideen (Descartes, Leibniz) vs. Erkenntnis allein durch Sinneserfahrung ('Tabula rasa', Locke, Hume)",
      "Leib-Seele-Problem (Dualismus vs. Monismus/Materialismus): Wie hängen physische Gehirnprozesse und subjektives Bewusstsein (Qualia) zusammen?",
      "Philosophische Anthropologie: Sonderstellung des Menschen in der Natur (Helmuth Plessner: exzentrische Positionalität; Arnold Gehlen: Mängelwesen)"
    ],
    "exercises": [
      {
        "id": "philosophie-des-zweifels-5869",
        "title": "Philosophie des Zweifels und der Erkenntnis",
        "folder": "philosophie-des-zweifels-5869"
      },
      {
        "id": "philosophie-des-geistes-5866",
        "title": "Philosophie des Geistes und des Bewusstseins",
        "folder": "philosophie-des-geistes-5866"
      },
      {
        "id": "philosophie-und-bewusstsein-5870",
        "title": "Philosophie und Bewusstsein",
        "folder": "philosophie-und-bewusstsein-5870"
      },
      {
        "id": "philosophische-anthropologie-grundlagen-5877",
        "title": "Philosophische Anthropologie – Grundlagen",
        "folder": "philosophische-anthropologie-grundlagen-5877"
      },
      {
        "id": "philosophie-des-selbst-5868",
        "title": "Philosophie des Selbst und der Identität",
        "folder": "philosophie-des-selbst-5868"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erkenntnistheorie+Geist+Anthropologie&t=3752"
  },
  "normative-ethik-und-moralphilosophie": {
    "slug": "normative-ethik-und-moralphilosophie",
    "title": "Normative Ethik: Deontologie, Utilitarismus & Diskursethik",
    "category": "Ethik, Moral & Angewandte Ethik",
    "shortDesc": "Pflichtethik vs. Utilitarismus ('Das größte Glück der größten Zahl'), Diskursethik (Habermas), Verantwortungsethik und moralische Dilemmata.",
    "longDesc": "Die normative Ethik liefert Begründungen für moralisches Handeln und Urteilen. Steht der moralische Wert einer Handlung in der Gesinnung/Pflicht (Deontologie) oder in den Handlungsfolgen (Teleologie/Utilitarismus)?",
    "keyPoints": [
      "Deontologische Ethik (Pflichtethik nach Kant): Eine Handlung ist aus sich heraus gut oder schlecht (unabhängig von den Konsequenzen; Lügeverbot, Tötungsverbot)",
      "Teleologische Ethik / Utilitarismus (Bentham, Mill): 'Das größtmögliche Glück für die größtmögliche Zahl'; Konsequenzenprinzip, Nutzenprinzip, Hedonistisches Prinzip, Universalistisches Prinzip",
      "Diskursethik (Jürgen Habermas): Normen sind nur gültig, wenn alle Betroffenen ihnen in einem herrschaftsfreien, rationalen Diskurs zustimmen können",
      "Trolley-Problem & Ethische Dilemmata: Gedankenspiele zur Konfrontation von Pflichtethik (keine Person opfern) und Utilitarismus (Leben von vielen retten)"
    ],
    "exercises": [
      {
        "id": "der-vergleich-von-deontologischer-und-teleologischer-ethik-2759",
        "title": "Deontologische vs. teleologische Ethik im Vergleich",
        "folder": "der-vergleich-von-deontologischer-und-teleologischer-ethik-2759"
      },
      {
        "id": "ethik-und-moralphilosophie-5788",
        "title": "Ethik und Moralphilosophie",
        "folder": "ethik-und-moralphilosophie-5788"
      },
      {
        "id": "diskursethik-4430",
        "title": "Diskursethik nach Jürgen Habermas",
        "folder": "diskursethik-4430"
      },
      {
        "id": "die-theorie-der-tugendethik-von-martha-nussbaum-2784",
        "title": "Tugendethik & Fähigkeitenansatz nach Martha Nussbaum",
        "folder": "die-theorie-der-tugendethik-von-martha-nussbaum-2784"
      },
      {
        "id": "ethik-der-verantwortung-5786",
        "title": "Ethik der Verantwortung (Hans Jonas)",
        "folder": "ethik-der-verantwortung-5786"
      },
      {
        "id": "fragen-der-ethik-5799",
        "title": "Zentrale Fragen der Ethik",
        "folder": "fragen-der-ethik-5799"
      },
      {
        "id": "moral-und-ethik-5844",
        "title": "Moral und Ethik – Grundbegriffe",
        "folder": "moral-und-ethik-5844"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Ethik+Utilitarismus+Deontologie&t=3752"
  },
  "angewandte-ethik-medizin-bio-und-medien": {
    "slug": "angewandte-ethik-medizin-bio-und-medien",
    "title": "Angewandte Ethik: Medizin-, Bio-, Technik- & Medienethik",
    "category": "Ethik, Moral & Angewandte Ethik",
    "shortDesc": "Genmanipulation (CRISPR), Sterbehilfe, Künstliche Intelligenz, Algorithmenethik, Medienethik (Fake News) und Tierethik.",
    "longDesc": "Die angewandte Ethik überträgt philosophische Prinzipien auf konkrete Problemfelder des modernen Lebens und technologischen Fortschritts. Wo liegen die moralischen Grenzen von Wissenschaft, Medizin und digitaler Vernetzung?",
    "keyPoints": [
      "Medizin- & Bioethik: Ethische Konflikte bei Gentherapie, Designerbabys, Präimplantationsdiagnostik (PID), Organspende und Sterbehilfe",
      "Technik- & KI-Ethik: Verantwortung für Entscheidungen autonomer Systeme (autonomes Fahren, automatisierte Rekrutierung, Waffensysteme)",
      "Medienethik & Fake News: Wahrheitspflicht von Journalisten, Algorithmen-Transparenz, Filterblasen und Schutz der Privatsphäre im Netz",
      "Wissenschaftsethik (Hans Jonas): 'Handle so, dass die Wirkungen deiner Handlung verträglich sind mit der Permanenz echten menschlichen Lebens auf Erden'"
    ],
    "exercises": [
      {
        "id": "die-bedeutung-von-ethik-in-der-medizin-2763",
        "title": "Ethik in der Medizin",
        "folder": "die-bedeutung-von-ethik-in-der-medizin-2763"
      },
      {
        "id": "die-ethik-der-genetischen-manipulation-2770",
        "title": "Ethik der genetischen Manipulation",
        "folder": "die-ethik-der-genetischen-manipulation-2770"
      },
      {
        "id": "ethik-in-der-kunstlichen-fortpflanzung-2842",
        "title": "Ethik in der künstlichen Fortpflanzung",
        "folder": "ethik-in-der-kunstlichen-fortpflanzung-2842"
      },
      {
        "id": "medienethik-und-fake-news-2860",
        "title": "Medienethik und Fake News",
        "folder": "medienethik-und-fake-news-2860"
      },
      {
        "id": "wissenschaftsethik-und-moral-5916",
        "title": "Wissenschaftsethik und Verantwortung",
        "folder": "wissenschaftsethik-und-moral-5916"
      },
      {
        "id": "ethik-im-sport-doping-und-fair-play-2841",
        "title": "Ethik im Sport: Doping und Fair Play",
        "folder": "ethik-im-sport-doping-und-fair-play-2841"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medizinethik+Medienethik+Bioethik&t=3752"
  },
  "staatsphilosophie-und-politische-ideen": {
    "slug": "staatsphilosophie-und-politische-ideen",
    "title": "Staatsphilosophie, Gerechtigkeit & Politische Theorien",
    "category": "Staatsphilosophie, Sprache & Kultur",
    "shortDesc": "Naturzustand und Gesellschaftsvertrag (Hobbes, Locke, Rousseau), John Rawls 'Schleier des Nichtwissens', Freiheit und Demokratie.",
    "longDesc": "Warum braucht der Mensch einen Staat? Was ist eine gerechte Gesellschaft? Die Staatsphilosophie untersucht die Legitimation staatlicher Herrschaft, Grundrechte und Verteilungsprinzipien.",
    "keyPoints": [
      "Naturzustand & Vertragstheorien: Thomas Hobbes (Leviathan: Mensch ist dem Menschen ein Wolf, 'Krieg aller gegen alle' ➔ absoluter Herrscher für Sicherheit); John Locke (Schutz von Leben, Freiheit und Eigentum ➔ Gewaltenteilung); Jean-Jacques Rousseau (Gemeinwille)",
      "Gerechtigkeitstheorie nach John Rawls: 'Schleier des Nichtwissens' (Veil of Ignorance) – faire Regeln werden beschlossen, wenn niemand seine spätere gesellschaftliche Position kennt (Differenzprinzip)",
      "Freiheitsbegriff nach Isaiah Berlin: Negative Freiheit (Freiheit von äußerem Zwang) vs. positive Freiheit (Freiheit zu selbstbestimmter Verwirklichung)",
      "Machtkritik & Gesellschaftstheorien: Karl Marx (Klassenkampf), Frankfurter Schule (Kritische Theorie), Feministische Philosophie"
    ],
    "exercises": [
      {
        "id": "politische-philosophie-grundlagen-5882",
        "title": "Grundlagen der politischen Philosophie",
        "folder": "politische-philosophie-grundlagen-5882"
      },
      {
        "id": "philosophie-der-gerechtigkeit-5856",
        "title": "Philosophie der Gerechtigkeit",
        "folder": "philosophie-der-gerechtigkeit-5856"
      },
      {
        "id": "philosophie-der-freiheit-5855",
        "title": "Philosophie der Freiheit",
        "folder": "philosophie-der-freiheit-5855"
      },
      {
        "id": "ethik-in-der-politik-5787",
        "title": "Ethik in der Politik",
        "folder": "ethik-in-der-politik-5787"
      },
      {
        "id": "gesellschaftskritische-philosophie-ansatze-5801",
        "title": "Gesellschaftskritische Philosophieansätze",
        "folder": "gesellschaftskritische-philosophie-ansatze-5801"
      },
      {
        "id": "feministische-ansatze-in-der-philosophie-5793",
        "title": "Feministische Ansätze in der Philosophie",
        "folder": "feministische-ansatze-in-der-philosophie-5793"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Staatsphilosophie+Gerechtigkeit&t=3752"
  },
  "sprachphilosophie-kunst-und-kultur": {
    "slug": "sprachphilosophie-kunst-und-kultur",
    "title": "Sprachphilosophie, Logik, Ästhetik & Religionsphilosophie",
    "category": "Staatsphilosophie, Sprache & Kultur",
    "shortDesc": "Ludwig Wittgenstein 'Grenzen meiner Sprache', philosophische Logik, Ästhetik (Was ist Kunst?), Gottesbeweise und Theodizee.",
    "longDesc": "Wie formt Sprache unser Denken? Was macht Kunst schön? Kann die Existenz Gottes vernünftig begründet werden? Diese Fragen verbinden Erkenntnis mit Ästhetik und Religion.",
    "keyPoints": [
      "Sprachphilosophie (Wittgenstein): 'Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt'; Sprachspiele und Bedeutung durch Gebrauch",
      "Philosophische Logik: Syllogismen, Prämissen und logische Schlussfolgerungen (Wahrheit vs. Gültigkeit)",
      "Ästhetik & Kunstphilosophie: Was ist das Schöne? Subjektives Geschmacksurteil (Kant: 'Interesseloses Wohlgefallen') vs. objektive Kriterien",
      "Religionsphilosophie & Theodizee: Klassische Gottesbeweise (ontologisch, kosmologisch, teleologisch) und das Theodizee-Problem: Wie lässt sich das Übel in der Welt mit einem allmächtigen und gütigen Gott vereinbaren?"
    ],
    "exercises": [
      {
        "id": "sprachphilosophie-und-logik-5891",
        "title": "Sprachphilosophie und Logik",
        "folder": "sprachphilosophie-und-logik-5891"
      },
      {
        "id": "philosophische-logik-verstehen-5879",
        "title": "Philosophische Logik verstehen",
        "folder": "philosophische-logik-verstehen-5879"
      },
      {
        "id": "sthetik-und-kunstphilosophie-5744",
        "title": "Ästhetik und Kunstphilosophie",
        "folder": "sthetik-und-kunstphilosophie-5744"
      },
      {
        "id": "religionsphilosophie-und-theologie-5887",
        "title": "Religionsphilosophie und Theologie",
        "folder": "religionsphilosophie-und-theologie-5887"
      },
      {
        "id": "gott-in-der-philosophie-6649",
        "title": "Gott in der Philosophie",
        "folder": "gott-in-der-philosophie-6649"
      },
      {
        "id": "kulturphilosophie-und-identitat-5834",
        "title": "Kulturphilosophie und Identität",
        "folder": "kulturphilosophie-und-identitat-5834"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sprachphilosophie+Aesthetik+Religionsphilosophie&t=3752"
  }
};
