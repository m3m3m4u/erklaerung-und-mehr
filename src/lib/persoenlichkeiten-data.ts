export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface PersoenlichkeitTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const persoenlichkeitenCategories: string[] = [
  "Antrophologen und Soziologen",
  "Architekten",
  "Biologen",
  "Chemiker",
  "Computerwissenschaftler",
  "Deutsche Schriftsteller",
  "Englischsprachige Schriftsteller",
  "Entdecker",
  "Feldherren",
  "Französische Schriftsteller",
  "Frauenrechtler",
  "Historiker",
  "Ingenieure",
  "Italienische Schriftsteller",
  "Journalisten",
  "Maler und Bildhauer",
  "Mathematiker",
  "Menschenrechtler",
  "Modedesigner",
  "Personen aus der Bibel",
  "Philosophen",
  "Physiker",
  "Politiker",
  "Psychologen",
  "Religiöse Führer",
  "Russische Schriftsteller",
  "Spanische Schriftsteller",
  "Sportler",
  "Unternehmer"
];

export const persoenlichkeitenTopics: Record<string, PersoenlichkeitTopic> = {
  "antrophologen-und-soziologen": {
    "slug": "antrophologen-und-soziologen",
    "title": "Antrophologen und Soziologen",
    "category": "Antrophologen und Soziologen",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Antrophologen und Soziologen: Arlie Russell Hochschild, C. Wright Mills, Claude Lévi-Strauss, Erving Goffman, Franz Boas u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Antrophologen und Soziologen.",
    "keyPoints": [
      "Umfasst 23 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3674",
        "title": "Arlie Russell Hochschild",
        "folder": "arlie-russell-hochschild-3674"
      },
      {
        "id": "3721",
        "title": "C. Wright Mills",
        "folder": "c-wright-mills-3721"
      },
      {
        "id": "3756",
        "title": "Claude Lévi-Strauss",
        "folder": "claude-levi-strauss-3756"
      },
      {
        "id": "3831",
        "title": "Erving Goffman",
        "folder": "erving-goffman-3831"
      },
      {
        "id": "3856",
        "title": "Franz Boas",
        "folder": "franz-boas-3856"
      },
      {
        "id": "3879",
        "title": "Georg Simmel",
        "folder": "georg-simmel-3879"
      },
      {
        "id": "3882",
        "title": "George Herbert Mead",
        "folder": "george-herbert-mead-3882"
      },
      {
        "id": "3932",
        "title": "Harold Garfinkel",
        "folder": "harold-garfinkel-3932"
      },
      {
        "id": "3947",
        "title": "Herbert Marcuse",
        "folder": "herbert-marcuse-3947"
      },
      {
        "id": "3967",
        "title": "Immanuel Wallerstein",
        "folder": "immanuel-wallerstein-3967"
      },
      {
        "id": "4064",
        "title": "Manuel Castells",
        "folder": "manuel-castells-4064"
      },
      {
        "id": "4068",
        "title": "Marcel Mauss",
        "folder": "marcel-mauss-4068"
      },
      {
        "id": "4072",
        "title": "Margaret Mead",
        "folder": "margaret-mead-4072"
      },
      {
        "id": "4094",
        "title": "Max Weber",
        "folder": "max-weber-4094"
      },
      {
        "id": "4129",
        "title": "Niklas Luhmann",
        "folder": "niklas-luhmann-4129"
      },
      {
        "id": "4169",
        "title": "Pierre Bourdieu",
        "folder": "pierre-bourdieu-4169"
      },
      {
        "id": "4214",
        "title": "Robert K. Merton",
        "folder": "robert-k-merton-4214"
      },
      {
        "id": "4230",
        "title": "Ruth Benedict",
        "folder": "ruth-benedict-4230"
      },
      {
        "id": "4283",
        "title": "Talcott Parsons",
        "folder": "talcott-parsons-4283"
      },
      {
        "id": "4289",
        "title": "Theodor W. Adorno",
        "folder": "theodor-w-adorno-4289"
      },
      {
        "id": "4310",
        "title": "Ulrich Beck",
        "folder": "ulrich-beck-4310"
      },
      {
        "id": "4357",
        "title": "Anthony Giddens",
        "folder": "anthony-giddens-4357"
      },
      {
        "id": "4365",
        "title": "Jürgen Habermas",
        "folder": "jurgen-habermas-4365"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Antrophologen%20und%20Soziologen+biografie&t=3752"
  },
  "architekten": {
    "slug": "architekten",
    "title": "Architekten",
    "category": "Architekten",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Architekten: Alvar Aalto, Antoni Gaudí, Bjarke Ingels, Daniel Libeskind, David Chipperfield u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Architekten.",
    "keyPoints": [
      "Umfasst 26 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3645",
        "title": "Alvar Aalto",
        "folder": "alvar-aalto-3645"
      },
      {
        "id": "3665",
        "title": "Antoni Gaudí",
        "folder": "antoni-gaudi-3665"
      },
      {
        "id": "3709",
        "title": "Bjarke Ingels",
        "folder": "bjarke-ingels-3709"
      },
      {
        "id": "3770",
        "title": "Daniel Libeskind",
        "folder": "daniel-libeskind-3770"
      },
      {
        "id": "3774",
        "title": "David Chipperfield",
        "folder": "david-chipperfield-3774"
      },
      {
        "id": "3853",
        "title": "Frank Gehry",
        "folder": "frank-gehry-3853"
      },
      {
        "id": "3854",
        "title": "Frank Lloyd Wright",
        "folder": "frank-lloyd-wright-3854"
      },
      {
        "id": "4003",
        "title": "Jean Nouvel",
        "folder": "jean-nouvel-4003"
      },
      {
        "id": "4139",
        "title": "Norman Foster",
        "folder": "norman-foster-4139"
      },
      {
        "id": "4147",
        "title": "Oscar Niemeyer",
        "folder": "oscar-niemeyer-4147"
      },
      {
        "id": "4165",
        "title": "Peter Zumthor",
        "folder": "peter-zumthor-4165"
      },
      {
        "id": "4166",
        "title": "Philip Johnson",
        "folder": "philip-johnson-4166"
      },
      {
        "id": "4183",
        "title": "Rafael Moneo",
        "folder": "rafael-moneo-4183"
      },
      {
        "id": "4193",
        "title": "Rem Koolhaas",
        "folder": "rem-koolhaas-4193"
      },
      {
        "id": "4195",
        "title": "Renzo Piano",
        "folder": "renzo-piano-4195"
      },
      {
        "id": "4199",
        "title": "Richard Meier",
        "folder": "richard-meier-4199"
      },
      {
        "id": "4217",
        "title": "Robert Venturi",
        "folder": "robert-venturi-4217"
      },
      {
        "id": "4239",
        "title": "Santiago Calatrava",
        "folder": "santiago-calatrava-4239"
      },
      {
        "id": "4252",
        "title": "Shigeru Ban",
        "folder": "shigeru-ban-4252"
      },
      {
        "id": "4258",
        "title": "Sir Edwin Lutyens",
        "folder": "sir-edwin-lutyens-4258"
      },
      {
        "id": "4282",
        "title": "Tadao Ando",
        "folder": "tadao-ando-4282"
      },
      {
        "id": "4330",
        "title": "Walter Gropius",
        "folder": "walter-gropius-4330"
      },
      {
        "id": "4351",
        "title": "Zaha Hadid",
        "folder": "zaha-hadid-4351"
      },
      {
        "id": "4388",
        "title": "Le Corbusier",
        "folder": "le-corbusier-4388"
      },
      {
        "id": "4403",
        "title": "Louis Kahn",
        "folder": "louis-kahn-4403"
      },
      {
        "id": "4408",
        "title": "Ludwig Mies van der Rohe",
        "folder": "ludwig-mies-van-der-rohe-4408"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Architekten+biografie&t=3752"
  },
  "biologen": {
    "slug": "biologen",
    "title": "Biologen",
    "category": "Biologen",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Biologen: Alfred Russel Wallace, August Weismann, Barbara McClintock, Charles Darwin, Craig Venter u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Biologen.",
    "keyPoints": [
      "Umfasst 26 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3640",
        "title": "Alfred Russel Wallace",
        "folder": "alfred-russel-wallace-3640"
      },
      {
        "id": "3681",
        "title": "August Weismann",
        "folder": "august-weismann-3681"
      },
      {
        "id": "3692",
        "title": "Barbara McClintock",
        "folder": "barbara-mcclintock-3692"
      },
      {
        "id": "3740",
        "title": "Charles Darwin",
        "folder": "charles-darwin-3740"
      },
      {
        "id": "3764",
        "title": "Craig Venter",
        "folder": "craig-venter-3764"
      },
      {
        "id": "3797",
        "title": "E.O. Wilson",
        "folder": "e-o-wilson-3797"
      },
      {
        "id": "3803",
        "title": "Edward O. Wilson",
        "folder": "edward-o-wilson-3803"
      },
      {
        "id": "3829",
        "title": "Ernst Haeckel",
        "folder": "ernst-haeckel-3829"
      },
      {
        "id": "3830",
        "title": "Ernst Mayr",
        "folder": "ernst-mayr-3830"
      },
      {
        "id": "3849",
        "title": "Francis Collins",
        "folder": "francis-collins-3849"
      },
      {
        "id": "3850",
        "title": "Francis Crick",
        "folder": "francis-crick-3850"
      },
      {
        "id": "3890",
        "title": "Georges Cuvier",
        "folder": "georges-cuvier-3890"
      },
      {
        "id": "3914",
        "title": "Gregor Mendel",
        "folder": "gregor-mendel-3914"
      },
      {
        "id": "3994",
        "title": "James Watson",
        "folder": "james-watson-3994"
      },
      {
        "id": "4001",
        "title": "Jane Goodall",
        "folder": "jane-goodall-4001"
      },
      {
        "id": "4007",
        "title": "Jean-Baptiste Lamarck",
        "folder": "jean-baptiste-lamarck-4007"
      },
      {
        "id": "4056",
        "title": "Lynn Margulis",
        "folder": "lynn-margulis-4056"
      },
      {
        "id": "4131",
        "title": "Niko Tinbergen",
        "folder": "niko-tinbergen-4131"
      },
      {
        "id": "4180",
        "title": "Rachel Carson",
        "folder": "rachel-carson-4180"
      },
      {
        "id": "4205",
        "title": "Robert Brown",
        "folder": "robert-brown-4205"
      },
      {
        "id": "4278",
        "title": "Svante Pääbo",
        "folder": "svante-paabo-4278"
      },
      {
        "id": "4280",
        "title": "Sydney Brenner",
        "folder": "sydney-brenner-4280"
      },
      {
        "id": "4291",
        "title": "Theophrastus",
        "folder": "theophrastus-4291"
      },
      {
        "id": "4296",
        "title": "Thomas Hunt Morgan",
        "folder": "thomas-hunt-morgan-4296"
      },
      {
        "id": "4370",
        "title": "Karl von Frisch",
        "folder": "karl-von-frisch-4370"
      },
      {
        "id": "4378",
        "title": "Konrad Lorenz",
        "folder": "konrad-lorenz-4378"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Biologen+biografie&t=3752"
  },
  "chemiker": {
    "slug": "chemiker",
    "title": "Chemiker",
    "category": "Chemiker",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Chemiker: Jacobus Henricus van 't Hoff, Ahmed Zewail, Alfred Nobel, Amedeo Avogadro, Antoine Lavoisier u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Chemiker.",
    "keyPoints": [
      "Umfasst 30 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3988",
        "title": "Jacobus Henricus van 't Hoff",
        "folder": "jacobus-henricus-van-039-t-hoff-3988"
      },
      {
        "id": "3611",
        "title": "Ahmed Zewail",
        "folder": "ahmed-zewail-3611"
      },
      {
        "id": "3639",
        "title": "Alfred Nobel",
        "folder": "alfred-nobel-3639"
      },
      {
        "id": "3646",
        "title": "Amedeo Avogadro",
        "folder": "amedeo-avogadro-3646"
      },
      {
        "id": "3663",
        "title": "Antoine Lavoisier",
        "folder": "antoine-lavoisier-3663"
      },
      {
        "id": "3786",
        "title": "Dmitri Mendeleev",
        "folder": "dmitri-mendeleev-3786"
      },
      {
        "id": "3794",
        "title": "Dorothy Hodgkin",
        "folder": "dorothy-hodgkin-3794"
      },
      {
        "id": "3859",
        "title": "Frederick Sanger",
        "folder": "frederick-sanger-3859"
      },
      {
        "id": "3867",
        "title": "Friedrich Wöhler",
        "folder": "friedrich-wohler-3867"
      },
      {
        "id": "3868",
        "title": "Fritz Haber",
        "folder": "fritz-haber-3868"
      },
      {
        "id": "3883",
        "title": "George Olah",
        "folder": "george-olah-3883"
      },
      {
        "id": "3896",
        "title": "Gilbert N. Lewis",
        "folder": "gilbert-n-lewis-3896"
      },
      {
        "id": "3906",
        "title": "Glenn T. Seaborg",
        "folder": "glenn-t-seaborg-3906"
      },
      {
        "id": "3922",
        "title": "Gustav Kirchhoff",
        "folder": "gustav-kirchhoff-3922"
      },
      {
        "id": "3957",
        "title": "Humphry Davy",
        "folder": "humphry-davy-3957"
      },
      {
        "id": "4024",
        "title": "John Cornforth",
        "folder": "john-cornforth-4024"
      },
      {
        "id": "4026",
        "title": "John Dalton",
        "folder": "john-dalton-4026"
      },
      {
        "id": "4038",
        "title": "Jöns Jakob Berzelius",
        "folder": "jons-jakob-berzelius-4038"
      },
      {
        "id": "4043",
        "title": "Joseph Louis Gay-Lussac",
        "folder": "joseph-louis-gay-lussac-4043"
      },
      {
        "id": "4076",
        "title": "Marie Curie",
        "folder": "marie-curie-4076"
      },
      {
        "id": "4151",
        "title": "Otto Hahn",
        "folder": "otto-hahn-4151"
      },
      {
        "id": "4206",
        "title": "Robert Bunsen",
        "folder": "robert-bunsen-4206"
      },
      {
        "id": "4207",
        "title": "Robert Burns Woodward",
        "folder": "robert-burns-woodward-4207"
      },
      {
        "id": "4213",
        "title": "Robert Grubbs",
        "folder": "robert-grubbs-4213"
      },
      {
        "id": "4277",
        "title": "Svante Arrhenius",
        "folder": "svante-arrhenius-4277"
      },
      {
        "id": "4339",
        "title": "Wilhelm Ostwald",
        "folder": "wilhelm-ostwald-4339"
      },
      {
        "id": "4366",
        "title": "Justus von Liebig",
        "folder": "justus-von-liebig-4366"
      },
      {
        "id": "4371",
        "title": "Kary Mullis",
        "folder": "kary-mullis-4371"
      },
      {
        "id": "4398",
        "title": "Linus Pauling",
        "folder": "linus-pauling-4398"
      },
      {
        "id": "4401",
        "title": "Lise Meitner",
        "folder": "lise-meitner-4401"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Chemiker+biografie&t=3752"
  },
  "computerwissenschaftler": {
    "slug": "computerwissenschaftler",
    "title": "Computerwissenschaftler",
    "category": "Computerwissenschaftler",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Computerwissenschaftler: Steve Wozniak, Ada Lovelace, Alan Turing, Andrew Ng, Barbara Liskov u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Computerwissenschaftler.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "4272",
        "title": "Steve Wozniak",
        "folder": "steve-wozniak-4272"
      },
      {
        "id": "3606",
        "title": "Ada Lovelace",
        "folder": "ada-lovelace-3606"
      },
      {
        "id": "3614",
        "title": "Alan Turing",
        "folder": "alan-turing-3614"
      },
      {
        "id": "3654",
        "title": "Andrew Ng",
        "folder": "andrew-ng-3654"
      },
      {
        "id": "3691",
        "title": "Barbara Liskov",
        "folder": "barbara-liskov-3691"
      },
      {
        "id": "3707",
        "title": "Bill Gates",
        "folder": "bill-gates-2-3707"
      },
      {
        "id": "3710",
        "title": "Bjarne Stroustrup",
        "folder": "bjarne-stroustrup-3710"
      },
      {
        "id": "3712",
        "title": "Bob Kahn",
        "folder": "bob-kahn-3712"
      },
      {
        "id": "3758",
        "title": "Claude Shannon",
        "folder": "claude-shannon-3758"
      },
      {
        "id": "3790",
        "title": "Donald Knuth",
        "folder": "donald-knuth-3790"
      },
      {
        "id": "3800",
        "title": "Edsger Dijkstra",
        "folder": "edsger-dijkstra-3800"
      },
      {
        "id": "3846",
        "title": "Frances E. Allen",
        "folder": "frances-e-allen-3846"
      },
      {
        "id": "3912",
        "title": "Grace Hopper",
        "folder": "grace-hopper-3912"
      },
      {
        "id": "3918",
        "title": "Guido van Rossum",
        "folder": "guido-van-rossum-3918"
      },
      {
        "id": "3993",
        "title": "James Gosling",
        "folder": "james-gosling-3993"
      },
      {
        "id": "4036",
        "title": "John von Neumann",
        "folder": "john-von-neumann-4036"
      },
      {
        "id": "4071",
        "title": "Margaret Hamilton",
        "folder": "margaret-hamilton-4071"
      },
      {
        "id": "4080",
        "title": "Mark Zuckerberg",
        "folder": "mark-zuckerberg-2-4080"
      },
      {
        "id": "4130",
        "title": "Niklaus Wirth",
        "folder": "niklaus-wirth-4130"
      },
      {
        "id": "4200",
        "title": "Richard Stallman",
        "folder": "richard-stallman-4200"
      },
      {
        "id": "4246",
        "title": "Sergey Brin",
        "folder": "sergey-brin-4246"
      },
      {
        "id": "4248",
        "title": "Shafi Goldwasser",
        "folder": "shafi-goldwasser-4248"
      },
      {
        "id": "4302",
        "title": "Tim Berners-Lee",
        "folder": "tim-berners-lee-4302"
      },
      {
        "id": "4321",
        "title": "Vint Cerf",
        "folder": "vint-cerf-4321"
      },
      {
        "id": "4349",
        "title": "Yoshua Bengio",
        "folder": "yoshua-bengio-4349"
      },
      {
        "id": "4374",
        "title": "Ken Thompson",
        "folder": "ken-thompson-4374"
      },
      {
        "id": "4387",
        "title": "Larry Page",
        "folder": "larry-page-2-4387"
      },
      {
        "id": "4396",
        "title": "Leslie Lamport",
        "folder": "leslie-lamport-4396"
      },
      {
        "id": "4399",
        "title": "Linus Torvalds",
        "folder": "linus-torvalds-4399"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Computerwissenschaftler+biografie&t=3752"
  },
  "deutsche-schriftsteller": {
    "slug": "deutsche-schriftsteller",
    "title": "Deutsche Schriftsteller",
    "category": "Deutsche Schriftsteller",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Deutsche Schriftsteller: Adelbert von Chamisso, Bertolt Brecht, Christoph Martin Wieland, E.T.A. Hoffmann, Erich Kästner u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Deutsche Schriftsteller.",
    "keyPoints": [
      "Umfasst 24 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3608",
        "title": "Adelbert von Chamisso",
        "folder": "adelbert-von-chamisso-3608"
      },
      {
        "id": "3704",
        "title": "Bertolt Brecht",
        "folder": "bertolt-brecht-2-3704"
      },
      {
        "id": "3750",
        "title": "Christoph Martin Wieland",
        "folder": "christoph-martin-wieland-3750"
      },
      {
        "id": "3799",
        "title": "E.T.A. Hoffmann",
        "folder": "e-t-a-hoffmann-3799"
      },
      {
        "id": "3826",
        "title": "Erich Kästner",
        "folder": "erich-kastner-3826"
      },
      {
        "id": "3827",
        "title": "Erich Maria Remarque",
        "folder": "erich-maria-remarque-2-3827"
      },
      {
        "id": "3857",
        "title": "Franz Kafka",
        "folder": "franz-kafka-2-3857"
      },
      {
        "id": "3858",
        "title": "Franz Werfel",
        "folder": "franz-werfel-3858"
      },
      {
        "id": "3863",
        "title": "Friedrich Dürrenmatt",
        "folder": "friedrich-durrenmatt-3863"
      },
      {
        "id": "3864",
        "title": "Friedrich Hölderlin",
        "folder": "friedrich-holderlin-3864"
      },
      {
        "id": "3866",
        "title": "Friedrich Schiller",
        "folder": "friedrich-schiller-2-3866"
      },
      {
        "id": "3894",
        "title": "Gerhart Hauptmann",
        "folder": "gerhart-hauptmann-3894"
      },
      {
        "id": "3910",
        "title": "Gotthold Ephraim Lessing",
        "folder": "gotthold-ephraim-lessing-3910"
      },
      {
        "id": "3919",
        "title": "Günter Grass",
        "folder": "gunter-grass-3919"
      },
      {
        "id": "3936",
        "title": "Heinrich Böll",
        "folder": "heinrich-boll-3936"
      },
      {
        "id": "3937",
        "title": "Heinrich Heine",
        "folder": "heinrich-heine-3937"
      },
      {
        "id": "3939",
        "title": "Heinrich von Kleist",
        "folder": "heinrich-von-kleist-3939"
      },
      {
        "id": "4019",
        "title": "Johann Gottfried Herder",
        "folder": "johann-gottfried-herder-4019"
      },
      {
        "id": "4084",
        "title": "Martin Walser",
        "folder": "martin-walser-4084"
      },
      {
        "id": "4092",
        "title": "Max Frisch",
        "folder": "max-frisch-4092"
      },
      {
        "id": "4287",
        "title": "Theodor Fontane",
        "folder": "theodor-fontane-4287"
      },
      {
        "id": "4297",
        "title": "Thomas Mann",
        "folder": "thomas-mann-4297"
      },
      {
        "id": "4369",
        "title": "Karl May",
        "folder": "karl-may-4369"
      },
      {
        "id": "4400",
        "title": "Lion Feuchtwanger",
        "folder": "lion-feuchtwanger-4400"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Deutsche%20Schriftsteller+biografie&t=3752"
  },
  "englischsprachige-schriftsteller": {
    "slug": "englischsprachige-schriftsteller",
    "title": "Englischsprachige Schriftsteller",
    "category": "Englischsprachige Schriftsteller",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Englischsprachige Schriftsteller: Arthur Conan Doyle, Charles Dickens, D.H. Lawrence, E.M. Forster, Emily Brontë u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Englischsprachige Schriftsteller.",
    "keyPoints": [
      "Umfasst 28 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3676",
        "title": "Arthur Conan Doyle",
        "folder": "arthur-conan-doyle-3676"
      },
      {
        "id": "3742",
        "title": "Charles Dickens",
        "folder": "charles-dickens-3742"
      },
      {
        "id": "3765",
        "title": "D.H. Lawrence",
        "folder": "d-h-lawrence-3765"
      },
      {
        "id": "3796",
        "title": "E.M. Forster",
        "folder": "e-m-forster-3796"
      },
      {
        "id": "3820",
        "title": "Emily Brontë",
        "folder": "emily-bronte-3820"
      },
      {
        "id": "3841",
        "title": "Evelyn Waugh",
        "folder": "evelyn-waugh-3841"
      },
      {
        "id": "3877",
        "title": "Geoffrey Chaucer",
        "folder": "geoffrey-chaucer-3877"
      },
      {
        "id": "3881",
        "title": "George Eliot",
        "folder": "george-eliot-3881"
      },
      {
        "id": "3884",
        "title": "George Orwell",
        "folder": "george-orwell-2-3884"
      },
      {
        "id": "3913",
        "title": "Graham Greene",
        "folder": "graham-greene-3913"
      },
      {
        "id": "3928",
        "title": "H.G. Wells",
        "folder": "h-g-wells-3928"
      },
      {
        "id": "3960",
        "title": "Ian Fleming",
        "folder": "ian-fleming-3960"
      },
      {
        "id": "3979",
        "title": "J.K. Rowling",
        "folder": "j-k-rowling-3979"
      },
      {
        "id": "3981",
        "title": "J.R.R. Tolkien",
        "folder": "j-r-r-tolkien-3981"
      },
      {
        "id": "4000",
        "title": "Jane Austen",
        "folder": "jane-austen-2-4000"
      },
      {
        "id": "4030",
        "title": "John Milton",
        "folder": "john-milton-4030"
      },
      {
        "id": "4042",
        "title": "Joseph Conrad",
        "folder": "joseph-conrad-4042"
      },
      {
        "id": "4148",
        "title": "Oscar Wilde",
        "folder": "oscar-wilde-2-4148"
      },
      {
        "id": "4153",
        "title": "P.G. Wodehouse",
        "folder": "p-g-wodehouse-4153"
      },
      {
        "id": "4226",
        "title": "Rudyard Kipling",
        "folder": "rudyard-kipling-4226"
      },
      {
        "id": "4237",
        "title": "Samuel Johnson",
        "folder": "samuel-johnson-4237"
      },
      {
        "id": "4249",
        "title": "Shakespeare",
        "folder": "shakespeare-4249"
      },
      {
        "id": "4281",
        "title": "T.S. Eliot",
        "folder": "t-s-eliot-4281"
      },
      {
        "id": "4295",
        "title": "Thomas Hardy",
        "folder": "thomas-hardy-4295"
      },
      {
        "id": "4342",
        "title": "William Blake",
        "folder": "william-blake-4342"
      },
      {
        "id": "4356",
        "title": "Agatha Christie",
        "folder": "agatha-christie-4356"
      },
      {
        "id": "4412",
        "title": "Virginia Woolf",
        "folder": "virginia-woolf-2-4412"
      },
      {
        "id": "4413",
        "title": "W.B. Yeats",
        "folder": "w-b-yeats-4413"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Englischsprachige%20Schriftsteller+biografie&t=3752"
  },
  "entdecker": {
    "slug": "entdecker",
    "title": "Entdecker",
    "category": "Entdecker",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Entdecker: Jean-François de La Pérouse, Alexander von Humboldt, Amerigo Vespucci, Benito Juárez, Bernhard Grzimek u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Entdecker.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "4008",
        "title": "Jean-François de La Pérouse",
        "folder": "jean-francois-de-la-perouse-4008"
      },
      {
        "id": "3634",
        "title": "Alexander von Humboldt",
        "folder": "alexander-von-humboldt-3634"
      },
      {
        "id": "3649",
        "title": "Amerigo Vespucci",
        "folder": "amerigo-vespucci-3649"
      },
      {
        "id": "3699",
        "title": "Benito Juárez",
        "folder": "benito-juarez-3699"
      },
      {
        "id": "3702",
        "title": "Bernhard Grzimek",
        "folder": "bernhard-grzimek-3702"
      },
      {
        "id": "3751",
        "title": "Christopher Columbus",
        "folder": "christopher-columbus-3751"
      },
      {
        "id": "3777",
        "title": "David Livingstone",
        "folder": "david-livingstone-2-3777"
      },
      {
        "id": "3843",
        "title": "Ferdinand Magellan",
        "folder": "ferdinand-magellan-3843"
      },
      {
        "id": "3862",
        "title": "Fridtjof Nansen",
        "folder": "fridtjof-nansen-3862"
      },
      {
        "id": "3901",
        "title": "Giovanni da Verrazzano",
        "folder": "giovanni-da-verrazzano-3901"
      },
      {
        "id": "3946",
        "title": "Henry Hudson",
        "folder": "henry-hudson-3946"
      },
      {
        "id": "3949",
        "title": "Hernán Cortés",
        "folder": "hernan-cortes-3949"
      },
      {
        "id": "3962",
        "title": "Ibn Battuta",
        "folder": "ibn-battuta-3962"
      },
      {
        "id": "3989",
        "title": "Jacques Cartier",
        "folder": "jacques-cartier-3989"
      },
      {
        "id": "3992",
        "title": "James Cook",
        "folder": "james-cook-3992"
      },
      {
        "id": "4006",
        "title": "Jean-Baptiste Charcot",
        "folder": "jean-baptiste-charcot-4006"
      },
      {
        "id": "4022",
        "title": "John Cabot",
        "folder": "john-cabot-4022"
      },
      {
        "id": "4049",
        "title": "Juan Ponce de León",
        "folder": "juan-ponce-de-leon-4049"
      },
      {
        "id": "4063",
        "title": "Mansa Musa",
        "folder": "mansa-musa-4063"
      },
      {
        "id": "4070",
        "title": "Marco Polo",
        "folder": "marco-polo-4070"
      },
      {
        "id": "4176",
        "title": "Ptolemy",
        "folder": "ptolemy-4176"
      },
      {
        "id": "4203",
        "title": "Roald Amundsen",
        "folder": "roald-amundsen-4203"
      },
      {
        "id": "4211",
        "title": "Robert Falcon Scott",
        "folder": "robert-falcon-scott-4211"
      },
      {
        "id": "4216",
        "title": "Robert Peary",
        "folder": "robert-peary-4216"
      },
      {
        "id": "4259",
        "title": "Sir Ernest Shackleton",
        "folder": "sir-ernest-shackleton-4259"
      },
      {
        "id": "4299",
        "title": "Thor Heyerdahl",
        "folder": "thor-heyerdahl-4299"
      },
      {
        "id": "4316",
        "title": "Vasco da Gama",
        "folder": "vasco-da-gama-2-4316"
      },
      {
        "id": "4353",
        "title": "Zheng He",
        "folder": "zheng-he-4353"
      },
      {
        "id": "4389",
        "title": "Leif Erikson",
        "folder": "leif-erikson-4389"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Entdecker+biografie&t=3752"
  },
  "feldherren": {
    "slug": "feldherren",
    "title": "Feldherren",
    "category": "Feldherren",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Feldherren: Arthur Wellesley, 1st Duke of Wellington, Attila the Hun, Belisarius, Dwight D. Eisenhower, Erwin Rommel u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Feldherren.",
    "keyPoints": [
      "Umfasst 28 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3678",
        "title": "Arthur Wellesley, 1st Duke of Wellington",
        "folder": "arthur-wellesley-1st-duke-of-wellington-3678"
      },
      {
        "id": "3680",
        "title": "Attila the Hun",
        "folder": "attila-the-hun-3680"
      },
      {
        "id": "3696",
        "title": "Belisarius",
        "folder": "belisarius-3696"
      },
      {
        "id": "3795",
        "title": "Dwight D. Eisenhower",
        "folder": "dwight-d-eisenhower-3795"
      },
      {
        "id": "3832",
        "title": "Erwin Rommel",
        "folder": "erwin-rommel-3832"
      },
      {
        "id": "3860",
        "title": "Frederick the Great",
        "folder": "frederick-the-great-3860"
      },
      {
        "id": "3874",
        "title": "Gaius Marius",
        "folder": "gaius-marius-3874"
      },
      {
        "id": "3876",
        "title": "Genghis Khan",
        "folder": "genghis-khan-3876"
      },
      {
        "id": "3885",
        "title": "George S. Patton",
        "folder": "george-s-patton-3885"
      },
      {
        "id": "3893",
        "title": "Georgy Zhukov",
        "folder": "georgy-zhukov-3893"
      },
      {
        "id": "3926",
        "title": "Gustavus Adolphus",
        "folder": "gustavus-adolphus-3926"
      },
      {
        "id": "3929",
        "title": "Hannibal",
        "folder": "hannibal-3929"
      },
      {
        "id": "3940",
        "title": "Heinz Guderian",
        "folder": "heinz-guderian-3940"
      },
      {
        "id": "3954",
        "title": "Horatio Nelson",
        "folder": "horatio-nelson-3954"
      },
      {
        "id": "4118",
        "title": "Napoleon Bonaparte",
        "folder": "napoleon-bonaparte-4118"
      },
      {
        "id": "4177",
        "title": "Pyrrhus of Epirus",
        "folder": "pyrrhus-of-epirus-4177"
      },
      {
        "id": "4201",
        "title": "Richard the Lionheart",
        "folder": "richard-the-lionheart-4201"
      },
      {
        "id": "4210",
        "title": "Robert E. Lee",
        "folder": "robert-e-lee-4210"
      },
      {
        "id": "4231",
        "title": "Saladin",
        "folder": "saladin-4231"
      },
      {
        "id": "4243",
        "title": "Scipio Africanus",
        "folder": "scipio-africanus-4243"
      },
      {
        "id": "4274",
        "title": "Subutai",
        "folder": "subutai-4274"
      },
      {
        "id": "4275",
        "title": "Sun Tzu",
        "folder": "sun-tzu-4275"
      },
      {
        "id": "4286",
        "title": "Themistocles",
        "folder": "themistocles-4286"
      },
      {
        "id": "4304",
        "title": "Timur",
        "folder": "timur-4304"
      },
      {
        "id": "4305",
        "title": "Tokugawa Ieyasu",
        "folder": "tokugawa-ieyasu-4305"
      },
      {
        "id": "4311",
        "title": "Ulysses S. Grant",
        "folder": "ulysses-s-grant-4311"
      },
      {
        "id": "4376",
        "title": "Khalid ibn al-Walid",
        "folder": "khalid-ibn-al-walid-4376"
      },
      {
        "id": "4394",
        "title": "Leonidas I",
        "folder": "leonidas-i-4394"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Feldherren+biografie&t=3752"
  },
  "franzoesische-schriftsteller": {
    "slug": "franzoesische-schriftsteller",
    "title": "Französische Schriftsteller",
    "category": "Französische Schriftsteller",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Französische Schriftsteller: Alain-Fournier, Albert Camus, Alexandre Dumas fils, Alexandre Dumas, André Gide u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Französische Schriftsteller.",
    "keyPoints": [
      "Umfasst 27 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3612",
        "title": "Alain-Fournier",
        "folder": "alain-fournier-3612"
      },
      {
        "id": "3616",
        "title": "Albert Camus",
        "folder": "albert-camus-2-3616"
      },
      {
        "id": "3635",
        "title": "Alexandre Dumas fils",
        "folder": "alexandre-dumas-fils-3635"
      },
      {
        "id": "3636",
        "title": "Alexandre Dumas",
        "folder": "alexandre-dumas-3636"
      },
      {
        "id": "3651",
        "title": "André Gide",
        "folder": "andre-gide-3651"
      },
      {
        "id": "3661",
        "title": "Annie Ernaux",
        "folder": "annie-ernaux-3661"
      },
      {
        "id": "3662",
        "title": "Antoine de Saint-Exupéry",
        "folder": "antoine-de-saint-exupery-3662"
      },
      {
        "id": "3739",
        "title": "Charles Baudelaire",
        "folder": "charles-baudelaire-3739"
      },
      {
        "id": "3761",
        "title": "Colette",
        "folder": "colette-3761"
      },
      {
        "id": "3818",
        "title": "Émile Zola",
        "folder": "mile-zola-3818"
      },
      {
        "id": "3852",
        "title": "François Mauriac",
        "folder": "francois-mauriac-3852"
      },
      {
        "id": "3889",
        "title": "Georges Bernanos",
        "folder": "georges-bernanos-3889"
      },
      {
        "id": "3892",
        "title": "Georges Simenon",
        "folder": "georges-simenon-3892"
      },
      {
        "id": "3925",
        "title": "Gustave Flaubert",
        "folder": "gustave-flaubert-3925"
      },
      {
        "id": "3927",
        "title": "Guy de Maupassant",
        "folder": "guy-de-maupassant-3927"
      },
      {
        "id": "3953",
        "title": "Honoré de Balzac",
        "folder": "honore-de-balzac-3953"
      },
      {
        "id": "4009",
        "title": "Jean-Paul Sartre",
        "folder": "jean-paul-sartre-4009"
      },
      {
        "id": "4069",
        "title": "Marcel Proust",
        "folder": "marcel-proust-2-4069"
      },
      {
        "id": "4075",
        "title": "Marguerite Duras",
        "folder": "marguerite-duras-4075"
      },
      {
        "id": "4103",
        "title": "Michel Houellebecq",
        "folder": "michel-houellebecq-4103"
      },
      {
        "id": "4111",
        "title": "Molière",
        "folder": "moliere-4111"
      },
      {
        "id": "4157",
        "title": "Patrick Modiano",
        "folder": "patrick-modiano-4157"
      },
      {
        "id": "4270",
        "title": "Stendhal",
        "folder": "stendhal-4270"
      },
      {
        "id": "4327",
        "title": "Voltaire",
        "folder": "voltaire-4327"
      },
      {
        "id": "4362",
        "title": "Jules Verne",
        "folder": "jules-verne-4362"
      },
      {
        "id": "4404",
        "title": "Louis-Ferdinand Céline",
        "folder": "louis-ferdinand-celine-4404"
      },
      {
        "id": "4411",
        "title": "Victor Hugo",
        "folder": "victor-hugo-4411"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Franz%C3%B6sische%20Schriftsteller+biografie&t=3752"
  },
  "frauenrechtler": {
    "slug": "frauenrechtler",
    "title": "Frauenrechtler",
    "category": "Frauenrechtler",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Frauenrechtler: Alice Paul, Amelia Bloomer, Angela Davis, Anna Howard Shaw, Barbara Ehrenreich u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Frauenrechtler.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3642",
        "title": "Alice Paul",
        "folder": "alice-paul-3642"
      },
      {
        "id": "3648",
        "title": "Amelia Bloomer",
        "folder": "amelia-bloomer-3648"
      },
      {
        "id": "3657",
        "title": "Angela Davis",
        "folder": "angela-davis-3657"
      },
      {
        "id": "3659",
        "title": "Anna Howard Shaw",
        "folder": "anna-howard-shaw-3659"
      },
      {
        "id": "3690",
        "title": "Barbara Ehrenreich",
        "folder": "barbara-ehrenreich-3690"
      },
      {
        "id": "3697",
        "title": "Bell Hooks",
        "folder": "bell-hooks-3697"
      },
      {
        "id": "3706",
        "title": "Betty Friedan",
        "folder": "betty-friedan-3706"
      },
      {
        "id": "3743",
        "title": "Charlotte Perkins Gilman",
        "folder": "charlotte-perkins-gilman-3743"
      },
      {
        "id": "3749",
        "title": "Christine de Pizan",
        "folder": "christine-de-pizan-3749"
      },
      {
        "id": "3755",
        "title": "Clara Zetkin",
        "folder": "clara-zetkin-3755"
      },
      {
        "id": "3813",
        "title": "Elizabeth Cady Stanton",
        "folder": "elizabeth-cady-stanton-3813"
      },
      {
        "id": "3822",
        "title": "Emmeline Pankhurst",
        "folder": "emmeline-pankhurst-3822"
      },
      {
        "id": "3907",
        "title": "Gloria Steinem",
        "folder": "gloria-steinem-3907"
      },
      {
        "id": "3933",
        "title": "Harriet Tubman",
        "folder": "harriet-tubman-3933"
      },
      {
        "id": "3952",
        "title": "Hildegard of Bingen",
        "folder": "hildegard-of-bingen-3952"
      },
      {
        "id": "3969",
        "title": "Irmgard Keun",
        "folder": "irmgard-keun-3969"
      },
      {
        "id": "3999",
        "title": "Jane Addams",
        "folder": "jane-addams-3999"
      },
      {
        "id": "4073",
        "title": "Margaret Sanger",
        "folder": "margaret-sanger-4073"
      },
      {
        "id": "4089",
        "title": "Mary Wollstonecraft",
        "folder": "mary-wollstonecraft-4089"
      },
      {
        "id": "4091",
        "title": "Matilda Joslyn Gage",
        "folder": "matilda-joslyn-gage-4091"
      },
      {
        "id": "4096",
        "title": "Maya Angelou",
        "folder": "maya-angelou-4096"
      },
      {
        "id": "4117",
        "title": "Naomi Wolf",
        "folder": "naomi-wolf-4117"
      },
      {
        "id": "4121",
        "title": "Nellie Bly",
        "folder": "nellie-bly-4121"
      },
      {
        "id": "4141",
        "title": "Olympia de Gouges",
        "folder": "olympia-de-gouges-4141"
      },
      {
        "id": "4191",
        "title": "Rebecca West",
        "folder": "rebecca-west-4191"
      },
      {
        "id": "4361",
        "title": "Judith Butler",
        "folder": "judith-butler-4361"
      },
      {
        "id": "4372",
        "title": "Kate Millett",
        "folder": "kate-millett-4372"
      },
      {
        "id": "4377",
        "title": "Kimberlé Crenshaw",
        "folder": "kimberle-crenshaw-4377"
      },
      {
        "id": "4406",
        "title": "Lucy Parsons",
        "folder": "lucy-parsons-4406"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Frauenrechtler+biografie&t=3752"
  },
  "historiker": {
    "slug": "historiker",
    "title": "Historiker",
    "category": "Historiker",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Historiker: Antony Beevor, Arnold J. Toynbee, Barbara Tuchman, Christopher Hill, David McCullough u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Historiker.",
    "keyPoints": [
      "Umfasst 30 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3669",
        "title": "Antony Beevor",
        "folder": "antony-beevor-3669"
      },
      {
        "id": "3675",
        "title": "Arnold J. Toynbee",
        "folder": "arnold-j-toynbee-3675"
      },
      {
        "id": "3693",
        "title": "Barbara Tuchman",
        "folder": "barbara-tuchman-3693"
      },
      {
        "id": "3752",
        "title": "Christopher Hill",
        "folder": "christopher-hill-3752"
      },
      {
        "id": "3778",
        "title": "David McCullough",
        "folder": "david-mccullough-3778"
      },
      {
        "id": "3793",
        "title": "Doris Kearns Goodwin",
        "folder": "doris-kearns-goodwin-3793"
      },
      {
        "id": "3798",
        "title": "E.P. Thompson",
        "folder": "e-p-thompson-3798"
      },
      {
        "id": "3802",
        "title": "Edward Gibbon",
        "folder": "edward-gibbon-3802"
      },
      {
        "id": "3825",
        "title": "Eric Hobsbawm",
        "folder": "eric-hobsbawm-3825"
      },
      {
        "id": "3844",
        "title": "Fernand Braudel",
        "folder": "fernand-braudel-3844"
      },
      {
        "id": "3950",
        "title": "Herodotus",
        "folder": "herodotus-3950"
      },
      {
        "id": "3961",
        "title": "Ian Kershaw",
        "folder": "ian-kershaw-3961"
      },
      {
        "id": "3987",
        "title": "Jacob Burckhardt",
        "folder": "jacob-burckhardt-3987"
      },
      {
        "id": "4028",
        "title": "John Keegan",
        "folder": "john-keegan-4028"
      },
      {
        "id": "4066",
        "title": "Marc Bloch",
        "folder": "marc-bloch-4066"
      },
      {
        "id": "4087",
        "title": "Mary Beard",
        "folder": "mary-beard-4087"
      },
      {
        "id": "4120",
        "title": "Natalie Zemon Davis",
        "folder": "natalie-zemon-davis-4120"
      },
      {
        "id": "4124",
        "title": "Niall Ferguson",
        "folder": "niall-ferguson-4124"
      },
      {
        "id": "4138",
        "title": "Norman Davies",
        "folder": "norman-davies-4138"
      },
      {
        "id": "4144",
        "title": "Orlando Figes",
        "folder": "orlando-figes-4144"
      },
      {
        "id": "4198",
        "title": "Richard J. Evans",
        "folder": "richard-j-evans-4198"
      },
      {
        "id": "4209",
        "title": "Robert Conquest",
        "folder": "robert-conquest-4209"
      },
      {
        "id": "4256",
        "title": "Simon Schama",
        "folder": "simon-schama-4256"
      },
      {
        "id": "4288",
        "title": "Theodor Mommsen",
        "folder": "theodor-mommsen-4288"
      },
      {
        "id": "4300",
        "title": "Thucydides",
        "folder": "thucydides-4300"
      },
      {
        "id": "4303",
        "title": "Timothy Snyder",
        "folder": "timothy-snyder-4303"
      },
      {
        "id": "4341",
        "title": "Will Durant",
        "folder": "will-durant-4341"
      },
      {
        "id": "4395",
        "title": "Leopold von Ranke",
        "folder": "leopold-von-ranke-4395"
      },
      {
        "id": "4405",
        "title": "Lucien Febvre",
        "folder": "lucien-febvre-4405"
      },
      {
        "id": "4410",
        "title": "Tony Judt",
        "folder": "tony-judt-4410"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Historiker+biografie&t=3752"
  },
  "ingenieure": {
    "slug": "ingenieure",
    "title": "Ingenieure",
    "category": "Ingenieure",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Ingenieure: George Washington Carver, Alexander Graham Bell, Carl Bosch, Charles Babbage, Christiaan Barnard u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Ingenieure.",
    "keyPoints": [
      "Umfasst 28 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3887",
        "title": "George Washington Carver",
        "folder": "george-washington-carver-3887"
      },
      {
        "id": "3630",
        "title": "Alexander Graham Bell",
        "folder": "alexander-graham-bell-3630"
      },
      {
        "id": "3726",
        "title": "Carl Bosch",
        "folder": "carl-bosch-3726"
      },
      {
        "id": "3738",
        "title": "Charles Babbage",
        "folder": "charles-babbage-3738"
      },
      {
        "id": "3744",
        "title": "Christiaan Barnard",
        "folder": "christiaan-barnard-3744"
      },
      {
        "id": "3809",
        "title": "Eli Whitney",
        "folder": "eli-whitney-3809"
      },
      {
        "id": "3875",
        "title": "Garrett Morgan",
        "folder": "garrett-morgan-3875"
      },
      {
        "id": "3886",
        "title": "George Stephenson",
        "folder": "george-stephenson-3886"
      },
      {
        "id": "3911",
        "title": "Gottlieb Daimler",
        "folder": "gottlieb-daimler-3911"
      },
      {
        "id": "3917",
        "title": "Guglielmo Marconi",
        "folder": "guglielmo-marconi-3917"
      },
      {
        "id": "3924",
        "title": "Gustave Eiffel",
        "folder": "gustave-eiffel-3924"
      },
      {
        "id": "3935",
        "title": "Hedy Lamarr",
        "folder": "hedy-lamarr-3935"
      },
      {
        "id": "3973",
        "title": "Isambard Kingdom Brunel",
        "folder": "isambard-kingdom-brunel-3973"
      },
      {
        "id": "3995",
        "title": "James Watt",
        "folder": "james-watt-3995"
      },
      {
        "id": "3996",
        "title": "Jan Czochralski",
        "folder": "jan-czochralski-3996"
      },
      {
        "id": "4033",
        "title": "John Smeaton",
        "folder": "john-smeaton-4033"
      },
      {
        "id": "4132",
        "title": "Nikola Tesla",
        "folder": "nikola-tesla-4132"
      },
      {
        "id": "4145",
        "title": "Orville Wright",
        "folder": "orville-wright-4145"
      },
      {
        "id": "4212",
        "title": "Robert Fulton",
        "folder": "robert-fulton-4212"
      },
      {
        "id": "4215",
        "title": "Robert Noyce",
        "folder": "robert-noyce-4215"
      },
      {
        "id": "4225",
        "title": "Rudolf Diesel",
        "folder": "rudolf-diesel-4225"
      },
      {
        "id": "4245",
        "title": "Sergei Korolev",
        "folder": "sergei-korolev-4245"
      },
      {
        "id": "4294",
        "title": "Thomas Edison",
        "folder": "thomas-edison-4294"
      },
      {
        "id": "4336",
        "title": "Wernher von Braun",
        "folder": "wernher-von-braun-4336"
      },
      {
        "id": "4337",
        "title": "Wilbur Wright",
        "folder": "wilbur-wright-4337"
      },
      {
        "id": "4367",
        "title": "Karl Benz",
        "folder": "karl-benz-4367"
      },
      {
        "id": "4379",
        "title": "Konrad Zuse",
        "folder": "konrad-zuse-4379"
      },
      {
        "id": "4391",
        "title": "Leonardo Torres Quevedo",
        "folder": "leonardo-torres-quevedo-4391"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Ingenieure+biografie&t=3752"
  },
  "italienische-schriftsteller": {
    "slug": "italienische-schriftsteller",
    "title": "Italienische Schriftsteller",
    "category": "Italienische Schriftsteller",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Italienische Schriftsteller: Giuseppe Tomasi di Lampedusa, Alberto Moravia, Alessandro Baricco, Alessandro Manzoni, Antonio Gramsci u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Italienische Schriftsteller.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3903",
        "title": "Giuseppe Tomasi di Lampedusa",
        "folder": "giuseppe-tomasi-di-lampedusa-3903"
      },
      {
        "id": "3619",
        "title": "Alberto Moravia",
        "folder": "alberto-moravia-3619"
      },
      {
        "id": "3626",
        "title": "Alessandro Baricco",
        "folder": "alessandro-baricco-3626"
      },
      {
        "id": "3627",
        "title": "Alessandro Manzoni",
        "folder": "alessandro-manzoni-3627"
      },
      {
        "id": "3667",
        "title": "Antonio Gramsci",
        "folder": "antonio-gramsci-3667"
      },
      {
        "id": "3730",
        "title": "Carlo Collodi",
        "folder": "carlo-collodi-3730"
      },
      {
        "id": "3731",
        "title": "Carlo Emilio Gadda",
        "folder": "carlo-emilio-gadda-3731"
      },
      {
        "id": "3736",
        "title": "Cesare Pavese",
        "folder": "cesare-pavese-3736"
      },
      {
        "id": "3772",
        "title": "Dante Alighieri",
        "folder": "dante-alighieri-3772"
      },
      {
        "id": "3784",
        "title": "Dino Buzzati",
        "folder": "dino-buzzati-3784"
      },
      {
        "id": "3811",
        "title": "Elio Vittorini",
        "folder": "elio-vittorini-3811"
      },
      {
        "id": "3817",
        "title": "Elsa Morante",
        "folder": "elsa-morante-3817"
      },
      {
        "id": "3837",
        "title": "Eugenio Montale",
        "folder": "eugenio-montale-3837"
      },
      {
        "id": "3847",
        "title": "Francesco Petrarca",
        "folder": "francesco-petrarca-3847"
      },
      {
        "id": "3873",
        "title": "Gabriele D'Annunzio",
        "folder": "gabriele-d-039-annunzio-3873"
      },
      {
        "id": "3895",
        "title": "Giacomo Leopardi",
        "folder": "giacomo-leopardi-3895"
      },
      {
        "id": "3898",
        "title": "Giorgio Bassani",
        "folder": "giorgio-bassani-3898"
      },
      {
        "id": "3900",
        "title": "Giovanni Boccaccio",
        "folder": "giovanni-boccaccio-3900"
      },
      {
        "id": "3902",
        "title": "Giovanni Verga",
        "folder": "giovanni-verga-3902"
      },
      {
        "id": "3904",
        "title": "Giuseppe Ungaretti",
        "folder": "giuseppe-ungaretti-3904"
      },
      {
        "id": "3965",
        "title": "Ignazio Silone",
        "folder": "ignazio-silone-3965"
      },
      {
        "id": "3974",
        "title": "Italo Calvino",
        "folder": "italo-calvino-3974"
      },
      {
        "id": "4054",
        "title": "Luigi Pirandello",
        "folder": "luigi-pirandello-4054"
      },
      {
        "id": "4119",
        "title": "Natalia Ginzburg",
        "folder": "natalia-ginzburg-4119"
      },
      {
        "id": "4125",
        "title": "Niccolò Machiavelli",
        "folder": "niccol-machiavelli-4125"
      },
      {
        "id": "4175",
        "title": "Primo Levi",
        "folder": "primo-levi-4175"
      },
      {
        "id": "4218",
        "title": "Roberto Saviano",
        "folder": "roberto-saviano-4218"
      },
      {
        "id": "4233",
        "title": "Salvatore Quasimodo",
        "folder": "salvatore-quasimodo-4233"
      },
      {
        "id": "4312",
        "title": "Umberto Eco",
        "folder": "umberto-eco-4312"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Italienische%20Schriftsteller+biografie&t=3752"
  },
  "journalisten": {
    "slug": "journalisten",
    "title": "Journalisten",
    "category": "Journalisten",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Journalisten: Anderson Cooper, Anna Politkovskaya, Barbara Walters, Bob Woodward, Carl Bernstein u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Journalisten.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3650",
        "title": "Anderson Cooper",
        "folder": "anderson-cooper-3650"
      },
      {
        "id": "3660",
        "title": "Anna Politkovskaya",
        "folder": "anna-politkovskaya-3660"
      },
      {
        "id": "3694",
        "title": "Barbara Walters",
        "folder": "barbara-walters-3694"
      },
      {
        "id": "3713",
        "title": "Bob Woodward",
        "folder": "bob-woodward-3713"
      },
      {
        "id": "3725",
        "title": "Carl Bernstein",
        "folder": "carl-bernstein-3725"
      },
      {
        "id": "3748",
        "title": "Christiane Amanpour",
        "folder": "christiane-amanpour-3748"
      },
      {
        "id": "3753",
        "title": "Christopher Hitchens",
        "folder": "christopher-hitchens-3753"
      },
      {
        "id": "3767",
        "title": "Dan Rather",
        "folder": "dan-rather-3767"
      },
      {
        "id": "3804",
        "title": "Edward R. Murrow",
        "folder": "edward-r-murrow-3804"
      },
      {
        "id": "3905",
        "title": "Glenn Greenwald",
        "folder": "glenn-greenwald-3905"
      },
      {
        "id": "3920",
        "title": "Günter Wallraff",
        "folder": "gunter-wallraff-3920"
      },
      {
        "id": "3958",
        "title": "Hunter S. Thompson",
        "folder": "hunter-s-thompson-3958"
      },
      {
        "id": "3963",
        "title": "Ida B. Wells",
        "folder": "ida-b-wells-3963"
      },
      {
        "id": "4032",
        "title": "John Pilger",
        "folder": "john-pilger-4032"
      },
      {
        "id": "4037",
        "title": "Jon Stewart",
        "folder": "jon-stewart-4037"
      },
      {
        "id": "4044",
        "title": "Joseph Pulitzer",
        "folder": "joseph-pulitzer-4044"
      },
      {
        "id": "4081",
        "title": "Martha Gellhorn",
        "folder": "martha-gellhorn-4081"
      },
      {
        "id": "4142",
        "title": "Oprah Winfrey",
        "folder": "oprah-winfrey-4142"
      },
      {
        "id": "4143",
        "title": "Oriana Fallaci",
        "folder": "oriana-fallaci-4143"
      },
      {
        "id": "4161",
        "title": "Peter Jennings",
        "folder": "peter-jennings-4161"
      },
      {
        "id": "4181",
        "title": "Rachel Maddow",
        "folder": "rachel-maddow-4181"
      },
      {
        "id": "4208",
        "title": "Robert Capa",
        "folder": "robert-capa-4208"
      },
      {
        "id": "4222",
        "title": "Ronan Farrow",
        "folder": "ronan-farrow-4222"
      },
      {
        "id": "4247",
        "title": "Seymour Hersh",
        "folder": "seymour-hersh-4247"
      },
      {
        "id": "4309",
        "title": "Truman Capote",
        "folder": "truman-capote-4309"
      },
      {
        "id": "4329",
        "title": "Walter Cronkite",
        "folder": "walter-cronkite-4329"
      },
      {
        "id": "4363",
        "title": "Julian Assange",
        "folder": "julian-assange-4363"
      },
      {
        "id": "4373",
        "title": "Katie Couric",
        "folder": "katie-couric-4373"
      },
      {
        "id": "4409",
        "title": "Tom Brokaw",
        "folder": "tom-brokaw-4409"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Journalisten+biografie&t=3752"
  },
  "maler-und-bildhauer": {
    "slug": "maler-und-bildhauer",
    "title": "Maler und Bildhauer",
    "category": "Maler und Bildhauer",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Maler und Bildhauer: Alberto Giacometti, Albrecht Dürer, Amedeo Modigliani, Auguste Rodin, Caspar David Friedrich u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Maler und Bildhauer.",
    "keyPoints": [
      "Umfasst 27 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3618",
        "title": "Alberto Giacometti",
        "folder": "alberto-giacometti-3618"
      },
      {
        "id": "3620",
        "title": "Albrecht Dürer",
        "folder": "albrecht-durer-2-3620"
      },
      {
        "id": "3647",
        "title": "Amedeo Modigliani",
        "folder": "amedeo-modigliani-2-3647"
      },
      {
        "id": "3682",
        "title": "Auguste Rodin",
        "folder": "auguste-rodin-2-3682"
      },
      {
        "id": "3734",
        "title": "Caspar David Friedrich",
        "folder": "caspar-david-friedrich-3734"
      },
      {
        "id": "3757",
        "title": "Claude Monet",
        "folder": "claude-monet-2-3757"
      },
      {
        "id": "3783",
        "title": "Diego Velázquez",
        "folder": "diego-velazquez-2-3783"
      },
      {
        "id": "3801",
        "title": "Edvard Munch",
        "folder": "edvard-munch-3801"
      },
      {
        "id": "3807",
        "title": "El Greco",
        "folder": "el-greco-3807"
      },
      {
        "id": "3851",
        "title": "Francisco Goya",
        "folder": "francisco-goya-3851"
      },
      {
        "id": "3861",
        "title": "Frida Kahlo",
        "folder": "frida-kahlo-3861"
      },
      {
        "id": "3891",
        "title": "Georges Seurat",
        "folder": "georges-seurat-3891"
      },
      {
        "id": "3899",
        "title": "Giovanni Bellini",
        "folder": "giovanni-bellini-3899"
      },
      {
        "id": "3923",
        "title": "Gustav Klimt",
        "folder": "gustav-klimt-3923"
      },
      {
        "id": "3942",
        "title": "Henri Matisse",
        "folder": "henri-matisse-3942"
      },
      {
        "id": "3951",
        "title": "Hieronymus Bosch",
        "folder": "hieronymus-bosch-2-3951"
      },
      {
        "id": "3985",
        "title": "Jackson Pollock",
        "folder": "jackson-pollock-2-3985"
      },
      {
        "id": "3998",
        "title": "Jan van Eyck",
        "folder": "jan-van-eyck-3998"
      },
      {
        "id": "4011",
        "title": "Jeff Koons",
        "folder": "jeff-koons-4011"
      },
      {
        "id": "4104",
        "title": "Michelangelo",
        "folder": "michelangelo-2-4104"
      },
      {
        "id": "4155",
        "title": "Pablo Picasso",
        "folder": "pablo-picasso-2-4155"
      },
      {
        "id": "4162",
        "title": "Peter Paul Rubens",
        "folder": "peter-paul-rubens-2-4162"
      },
      {
        "id": "4171",
        "title": "Piet Mondrian",
        "folder": "piet-mondrian-2-4171"
      },
      {
        "id": "4188",
        "title": "Raphael",
        "folder": "raphael-4188"
      },
      {
        "id": "4194",
        "title": "Rembrandt van Rijn",
        "folder": "rembrandt-van-rijn-2-4194"
      },
      {
        "id": "4232",
        "title": "Salvador Dalí",
        "folder": "salvador-dali-4232"
      },
      {
        "id": "4238",
        "title": "Sandro Botticelli",
        "folder": "sandro-botticelli-2-4238"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Maler%20und%20Bildhauer+biografie&t=3752"
  },
  "mathematiker": {
    "slug": "mathematiker",
    "title": "Mathematiker",
    "category": "Mathematiker",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Mathematiker: Alan Kay, Alexander Grothendieck, Al-Khwarizmi, Andrew Wiles, Andrey Kolmogorov u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Mathematiker.",
    "keyPoints": [
      "Umfasst 27 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3613",
        "title": "Alan Kay",
        "folder": "alan-kay-3613"
      },
      {
        "id": "3631",
        "title": "Alexander Grothendieck",
        "folder": "alexander-grothendieck-3631"
      },
      {
        "id": "3643",
        "title": "Al-Khwarizmi",
        "folder": "al-khwarizmi-3643"
      },
      {
        "id": "3655",
        "title": "Andrew Wiles",
        "folder": "andrew-wiles-3655"
      },
      {
        "id": "3656",
        "title": "Andrey Kolmogorov",
        "folder": "andrey-kolmogorov-3656"
      },
      {
        "id": "3671",
        "title": "Apollonius of Perga",
        "folder": "apollonius-of-perga-3671"
      },
      {
        "id": "3672",
        "title": "Archimedes",
        "folder": "archimedes-3672"
      },
      {
        "id": "3684",
        "title": "Augustin-Louis Cauchy",
        "folder": "augustin-louis-cauchy-3684"
      },
      {
        "id": "3703",
        "title": "Bernhard Riemann",
        "folder": "bernhard-riemann-3703"
      },
      {
        "id": "3775",
        "title": "David Hilbert",
        "folder": "david-hilbert-3775"
      },
      {
        "id": "3785",
        "title": "Diophantus",
        "folder": "diophantus-3785"
      },
      {
        "id": "3823",
        "title": "Emmy Noether",
        "folder": "emmy-noether-3823"
      },
      {
        "id": "3836",
        "title": "Euclid",
        "folder": "euclid-3836"
      },
      {
        "id": "3839",
        "title": "Évariste Galois",
        "folder": "variste-galois-3839"
      },
      {
        "id": "3845",
        "title": "Fibonacci",
        "folder": "fibonacci-3845"
      },
      {
        "id": "3878",
        "title": "Georg Cantor",
        "folder": "georg-cantor-3878"
      },
      {
        "id": "3909",
        "title": "Gottfried Wilhelm Leibniz",
        "folder": "gottfried-wilhelm-leibniz-3909"
      },
      {
        "id": "3915",
        "title": "Grigori Perelman",
        "folder": "grigori-perelman-3915"
      },
      {
        "id": "3943",
        "title": "Henri Poincaré",
        "folder": "henri-poincare-3943"
      },
      {
        "id": "4052",
        "title": "Leonardo da Vinci",
        "folder": "leonardo-da-vinci-2-4052"
      },
      {
        "id": "4128",
        "title": "Niels Henrik Abel",
        "folder": "niels-henrik-abel-4128"
      },
      {
        "id": "4170",
        "title": "Pierre-Simon Laplace",
        "folder": "pierre-simon-laplace-4170"
      },
      {
        "id": "4178",
        "title": "Pythagoras",
        "folder": "pythagoras-4178"
      },
      {
        "id": "4264",
        "title": "Sophie Germain",
        "folder": "sophie-germain-4264"
      },
      {
        "id": "4284",
        "title": "Terence Tao",
        "folder": "terence-tao-4284"
      },
      {
        "id": "4380",
        "title": "Kurt Gödel",
        "folder": "kurt-godel-4380"
      },
      {
        "id": "4392",
        "title": "Leonhard Euler",
        "folder": "leonhard-euler-4392"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Mathematiker+biografie&t=3752"
  },
  "menschenrechtler": {
    "slug": "menschenrechtler",
    "title": "Menschenrechtler",
    "category": "Menschenrechtler",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Menschenrechtler: Aletta Jacobs, Anwar Sadat, Aung San Suu Kyi, Benazir Bhutto, Billie Holiday u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Menschenrechtler.",
    "keyPoints": [
      "Umfasst 28 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3629",
        "title": "Aletta Jacobs",
        "folder": "aletta-jacobs-3629"
      },
      {
        "id": "3670",
        "title": "Anwar Sadat",
        "folder": "anwar-sadat-3670"
      },
      {
        "id": "3685",
        "title": "Aung San Suu Kyi",
        "folder": "aung-san-suu-kyi-3685"
      },
      {
        "id": "3698",
        "title": "Benazir Bhutto",
        "folder": "benazir-bhutto-3698"
      },
      {
        "id": "3708",
        "title": "Billie Holiday",
        "folder": "billie-holiday-2-3708"
      },
      {
        "id": "3780",
        "title": "Desmond Tutu",
        "folder": "desmond-tutu-3780"
      },
      {
        "id": "3808",
        "title": "Eleanor Roosevelt",
        "folder": "eleanor-roosevelt-3808"
      },
      {
        "id": "3814",
        "title": "Elizabeth Fry",
        "folder": "elizabeth-fry-3814"
      },
      {
        "id": "3821",
        "title": "Emma Goldman",
        "folder": "emma-goldman-3821"
      },
      {
        "id": "3855",
        "title": "Frantz Fanon",
        "folder": "frantz-fanon-3855"
      },
      {
        "id": "3934",
        "title": "Harvey Milk",
        "folder": "harvey-milk-3934"
      },
      {
        "id": "3941",
        "title": "Helen Keller",
        "folder": "helen-keller-3941"
      },
      {
        "id": "4027",
        "title": "John Humphrey",
        "folder": "john-humphrey-4027"
      },
      {
        "id": "4060",
        "title": "Malala Yousafzai",
        "folder": "malala-yousafzai-4060"
      },
      {
        "id": "4061",
        "title": "Malcolm X",
        "folder": "malcolm-x-4061"
      },
      {
        "id": "4082",
        "title": "Martin Luther King Jr.",
        "folder": "martin-luther-king-jr-4082"
      },
      {
        "id": "4122",
        "title": "Nelly Sachs",
        "folder": "nelly-sachs-4122"
      },
      {
        "id": "4123",
        "title": "Nelson Mandela",
        "folder": "nelson-mandela-2-4123"
      },
      {
        "id": "4224",
        "title": "Rosa Parks",
        "folder": "rosa-parks-4224"
      },
      {
        "id": "4229",
        "title": "Ruth Bader Ginsburg",
        "folder": "ruth-bader-ginsburg-4229"
      },
      {
        "id": "4253",
        "title": "Shirin Ebadi",
        "folder": "shirin-ebadi-4253"
      },
      {
        "id": "4261",
        "title": "Sojourner Truth",
        "folder": "sojourner-truth-4261"
      },
      {
        "id": "4276",
        "title": "Susan B. Anthony",
        "folder": "susan-b-anthony-4276"
      },
      {
        "id": "4314",
        "title": "Václav Havel",
        "folder": "vaclav-havel-4314"
      },
      {
        "id": "4331",
        "title": "Wangari Maathai",
        "folder": "wangari-maathai-4331"
      },
      {
        "id": "4334",
        "title": "Wei Jingsheng",
        "folder": "wei-jingsheng-4334"
      },
      {
        "id": "4346",
        "title": "Wole Soyinka",
        "folder": "wole-soyinka-4346"
      },
      {
        "id": "4202",
        "title": "Rigoberta Menchú",
        "folder": "rigoberta-menchu-4202"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Menschenrechtler+biografie&t=3752"
  },
  "modedesigner": {
    "slug": "modedesigner",
    "title": "Modedesigner",
    "category": "Modedesigner",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Modedesigner: Alexander McQueen, Calvin Klein, Christian Dior, Christian Louboutin, Coco Chanel u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Modedesigner.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3632",
        "title": "Alexander McQueen",
        "folder": "alexander-mcqueen-3632"
      },
      {
        "id": "3723",
        "title": "Calvin Klein",
        "folder": "calvin-klein-3723"
      },
      {
        "id": "3746",
        "title": "Christian Dior",
        "folder": "christian-dior-3746"
      },
      {
        "id": "3747",
        "title": "Christian Louboutin",
        "folder": "christian-louboutin-3747"
      },
      {
        "id": "3760",
        "title": "Coco Chanel",
        "folder": "coco-chanel-3760"
      },
      {
        "id": "3781",
        "title": "Diane von Fürstenberg",
        "folder": "diane-von-furstenberg-3781"
      },
      {
        "id": "3788",
        "title": "Dolce & Gabbana",
        "folder": "dolce-gabbana-3788"
      },
      {
        "id": "3791",
        "title": "Donatella Versace",
        "folder": "donatella-versace-3791"
      },
      {
        "id": "3792",
        "title": "Donna Karan",
        "folder": "donna-karan-3792"
      },
      {
        "id": "3897",
        "title": "Giorgio Armani",
        "folder": "giorgio-armani-3897"
      },
      {
        "id": "3916",
        "title": "Gucci",
        "folder": "gucci-3916"
      },
      {
        "id": "3956",
        "title": "Hubert de Givenchy",
        "folder": "hubert-de-givenchy-3956"
      },
      {
        "id": "4004",
        "title": "Jean Paul Gaultier",
        "folder": "jean-paul-gaultier-4004"
      },
      {
        "id": "4016",
        "title": "Jimmy Choo",
        "folder": "jimmy-choo-4016"
      },
      {
        "id": "4062",
        "title": "Manolo Blahnik",
        "folder": "manolo-blahnik-4062"
      },
      {
        "id": "4067",
        "title": "Marc Jacobs",
        "folder": "marc-jacobs-4067"
      },
      {
        "id": "4100",
        "title": "Michael Kors",
        "folder": "michael-kors-4100"
      },
      {
        "id": "4146",
        "title": "Oscar de la Renta",
        "folder": "oscar-de-la-renta-4146"
      },
      {
        "id": "4168",
        "title": "Pierre Balmain",
        "folder": "pierre-balmain-4168"
      },
      {
        "id": "4185",
        "title": "Ralph Lauren",
        "folder": "ralph-lauren-4185"
      },
      {
        "id": "4269",
        "title": "Stella McCartney",
        "folder": "stella-mccartney-4269"
      },
      {
        "id": "4307",
        "title": "Tom Ford",
        "folder": "tom-ford-4307"
      },
      {
        "id": "4315",
        "title": "Valentino Garavani",
        "folder": "valentino-garavani-4315"
      },
      {
        "id": "4317",
        "title": "Vera Wang",
        "folder": "vera-wang-4317"
      },
      {
        "id": "4318",
        "title": "Versace",
        "folder": "versace-4318"
      },
      {
        "id": "4323",
        "title": "Vivienne Westwood",
        "folder": "vivienne-westwood-4323"
      },
      {
        "id": "4350",
        "title": "Yves Saint Laurent",
        "folder": "yves-saint-laurent-4350"
      },
      {
        "id": "4360",
        "title": "Carolina Herrera",
        "folder": "carolina-herrera-4360"
      },
      {
        "id": "4368",
        "title": "Karl Lagerfeld",
        "folder": "karl-lagerfeld-4368"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Modedesigner+biografie&t=3752"
  },
  "personen-aus-der-bibel": {
    "slug": "personen-aus-der-bibel",
    "title": "Personen aus der Bibel",
    "category": "Personen aus der Bibel",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Personen aus der Bibel: Daniel (Figur aus der Bibel), Esther (Figur aus der Bibel), James (Figur aus der Bibel), Jeremiah (Figur aus der Bibel), Jesus Christ (Figur aus der Bibel) u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Personen aus der Bibel.",
    "keyPoints": [
      "Umfasst 30 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3768",
        "title": "Daniel (Figur aus der Bibel)",
        "folder": "daniel-figur-aus-der-bibel-3768"
      },
      {
        "id": "3835",
        "title": "Esther (Figur aus der Bibel)",
        "folder": "esther-figur-aus-der-bibel-3835"
      },
      {
        "id": "3990",
        "title": "James (Figur aus der Bibel)",
        "folder": "james-figur-aus-der-bibel-3990"
      },
      {
        "id": "4012",
        "title": "Jeremiah (Figur aus der Bibel)",
        "folder": "jeremiah-figur-aus-der-bibel-4012"
      },
      {
        "id": "4014",
        "title": "Jesus Christ (Figur aus der Bibel)",
        "folder": "jesus-christ-figur-aus-der-bibel-4014"
      },
      {
        "id": "4035",
        "title": "John the Baptist (Figur aus der Bibel)",
        "folder": "john-the-baptist-figur-aus-der-bibel-4035"
      },
      {
        "id": "4047",
        "title": "Joshua (Figur aus der Bibel)",
        "folder": "joshua-figur-aus-der-bibel-4047"
      },
      {
        "id": "4112",
        "title": "Moses (Figur aus der Bibel)",
        "folder": "moses-figur-aus-der-bibel-4112"
      },
      {
        "id": "4184",
        "title": "Rahab (Figur aus der Bibel)",
        "folder": "rahab-figur-aus-der-bibel-4184"
      },
      {
        "id": "4235",
        "title": "Samson (Figur aus der Bibel)",
        "folder": "samson-figur-aus-der-bibel-4235"
      },
      {
        "id": "4236",
        "title": "Samuel (Figur aus der Bibel)",
        "folder": "samuel-figur-aus-der-bibel-4236"
      },
      {
        "id": "4262",
        "title": "Solomon (Figur aus der Bibel)",
        "folder": "solomon-figur-aus-der-bibel-4262"
      },
      {
        "id": "3602",
        "title": "Aaron (Figur aus der Bibel)",
        "folder": "aaron-figur-aus-der-bibel-3602"
      },
      {
        "id": "3603",
        "title": "Abraham (Figur aus der Bibel)",
        "folder": "abraham-figur-aus-der-bibel-3603"
      },
      {
        "id": "3607",
        "title": "Adam (Figur aus der Bibel)",
        "folder": "adam-figur-aus-der-bibel-3607"
      },
      {
        "id": "3773",
        "title": "David (Figur aus der Bibel)",
        "folder": "david-figur-aus-der-bibel-3773"
      },
      {
        "id": "3810",
        "title": "Elijah (Figur aus der Bibel)",
        "folder": "elijah-figur-aus-der-bibel-3810"
      },
      {
        "id": "3812",
        "title": "Elisha (Figur aus der Bibel)",
        "folder": "elisha-figur-aus-der-bibel-3812"
      },
      {
        "id": "3840",
        "title": "Eve (Figur aus der Bibel)",
        "folder": "eve-figur-aus-der-bibel-3840"
      },
      {
        "id": "3970",
        "title": "Isaac (Figur aus der Bibel)",
        "folder": "isaac-figur-aus-der-bibel-3970"
      },
      {
        "id": "3972",
        "title": "Isaiah (Figur aus der Bibel)",
        "folder": "isaiah-figur-aus-der-bibel-3972"
      },
      {
        "id": "3986",
        "title": "Jacob (Figur aus der Bibel)",
        "folder": "jacob-figur-aus-der-bibel-3986"
      },
      {
        "id": "4017",
        "title": "Job (Figur aus der Bibel)",
        "folder": "job-figur-aus-der-bibel-4017"
      },
      {
        "id": "4020",
        "title": "John (Figur aus der Bibel)",
        "folder": "john-figur-aus-der-bibel-4020"
      },
      {
        "id": "4086",
        "title": "Mary (Figur aus der Bibel)",
        "folder": "mary-figur-aus-der-bibel-4086"
      },
      {
        "id": "4136",
        "title": "Noah (Figur aus der Bibel)",
        "folder": "noah-figur-aus-der-bibel-4136"
      },
      {
        "id": "4160",
        "title": "Peter (Figur aus der Bibel)",
        "folder": "peter-figur-aus-der-bibel-4160"
      },
      {
        "id": "4228",
        "title": "Ruth (Figur aus der Bibel)",
        "folder": "ruth-figur-aus-der-bibel-4228"
      },
      {
        "id": "4240",
        "title": "Sarah (Figur aus der Bibel)",
        "folder": "sarah-figur-aus-der-bibel-4240"
      },
      {
        "id": "4242",
        "title": "Saul (Figur aus der Bibel)",
        "folder": "saul-figur-aus-der-bibel-4242"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Personen%20aus%20der%20Bibel+biografie&t=3752"
  },
  "philosophen": {
    "slug": "philosophen",
    "title": "Philosophen",
    "category": "Philosophen",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Philosophen: Aristotle, Arthur Schopenhauer, Augustine of Hippo, Averroes, Baruch Spinoza u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Philosophen.",
    "keyPoints": [
      "Umfasst 27 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3673",
        "title": "Aristotle",
        "folder": "aristotle-3673"
      },
      {
        "id": "3677",
        "title": "Arthur Schopenhauer",
        "folder": "arthur-schopenhauer-3677"
      },
      {
        "id": "3683",
        "title": "Augustine of Hippo",
        "folder": "augustine-of-hippo-3683"
      },
      {
        "id": "3686",
        "title": "Averroes",
        "folder": "averroes-3686"
      },
      {
        "id": "3695",
        "title": "Baruch Spinoza",
        "folder": "baruch-spinoza-3695"
      },
      {
        "id": "3705",
        "title": "Bertrand Russell",
        "folder": "bertrand-russell-3705"
      },
      {
        "id": "3715",
        "title": "Boethius",
        "folder": "boethius-3715"
      },
      {
        "id": "3776",
        "title": "David Hume",
        "folder": "david-hume-3776"
      },
      {
        "id": "3824",
        "title": "Epicurus",
        "folder": "epicurus-3824"
      },
      {
        "id": "3848",
        "title": "Francis Bacon",
        "folder": "francis-bacon-3848"
      },
      {
        "id": "3865",
        "title": "Friedrich Nietzsche",
        "folder": "friedrich-nietzsche-2-3865"
      },
      {
        "id": "3871",
        "title": "G.W.F. Hegel",
        "folder": "g-w-f-hegel-3871"
      },
      {
        "id": "3966",
        "title": "Immanuel Kant",
        "folder": "immanuel-kant-2-3966"
      },
      {
        "id": "4029",
        "title": "John Locke",
        "folder": "john-locke-4029"
      },
      {
        "id": "4034",
        "title": "John Stuart Mill",
        "folder": "john-stuart-mill-4034"
      },
      {
        "id": "4053",
        "title": "Ludwig Wittgenstein",
        "folder": "ludwig-wittgenstein-4053"
      },
      {
        "id": "4102",
        "title": "Michel de Montaigne",
        "folder": "michel-de-montaigne-4102"
      },
      {
        "id": "4126",
        "title": "Nicholas of Cusa",
        "folder": "nicholas-of-cusa-4126"
      },
      {
        "id": "4173",
        "title": "Plato",
        "folder": "plato-4173"
      },
      {
        "id": "4174",
        "title": "Plotinus",
        "folder": "plotinus-4174"
      },
      {
        "id": "4260",
        "title": "Socrates",
        "folder": "socrates-4260"
      },
      {
        "id": "4265",
        "title": "Søren Kierkegaard",
        "folder": "soeren-kierkegaard-4265"
      },
      {
        "id": "4285",
        "title": "Thales of Miletus",
        "folder": "thales-of-miletus-4285"
      },
      {
        "id": "4293",
        "title": "Thomas Aquinas",
        "folder": "thomas-aquinas-4293"
      },
      {
        "id": "4344",
        "title": "William of Ockham",
        "folder": "william-of-ockham-4344"
      },
      {
        "id": "4352",
        "title": "Zeno of Citium",
        "folder": "zeno-of-citium-4352"
      },
      {
        "id": "4414",
        "title": "Karl Marx",
        "folder": "karl-marx-2-4414"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Philosophen+biografie&t=3752"
  },
  "physiker": {
    "slug": "physiker",
    "title": "Physiker",
    "category": "Physiker",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Physiker: Albert Einstein, Alessandro Volta, André-Marie Ampère, Benjamin Franklin, Christiaan Huygens u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Physiker.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3617",
        "title": "Albert Einstein",
        "folder": "albert-einstein-3617"
      },
      {
        "id": "3628",
        "title": "Alessandro Volta",
        "folder": "alessandro-volta-3628"
      },
      {
        "id": "3652",
        "title": "André-Marie Ampère",
        "folder": "andre-marie-ampere-3652"
      },
      {
        "id": "3701",
        "title": "Benjamin Franklin",
        "folder": "benjamin-franklin-3701"
      },
      {
        "id": "3745",
        "title": "Christiaan Huygens",
        "folder": "christiaan-huygens-3745"
      },
      {
        "id": "3769",
        "title": "Daniel Bernoulli",
        "folder": "daniel-bernoulli-3769"
      },
      {
        "id": "3806",
        "title": "Edward Witten",
        "folder": "edward-witten-3806"
      },
      {
        "id": "3833",
        "title": "Erwin Schrödinger",
        "folder": "erwin-schrodinger-3833"
      },
      {
        "id": "3880",
        "title": "Georg Simon Ohm",
        "folder": "georg-simon-ohm-3880"
      },
      {
        "id": "3930",
        "title": "Hans Christian Ørsted",
        "folder": "hans-christian-rsted-3930"
      },
      {
        "id": "3938",
        "title": "Heinrich Hertz",
        "folder": "heinrich-hertz-3938"
      },
      {
        "id": "3944",
        "title": "Henry Cavendish",
        "folder": "henry-cavendish-3944"
      },
      {
        "id": "3971",
        "title": "Isaac Newton",
        "folder": "isaac-newton-3971"
      },
      {
        "id": "3991",
        "title": "James Clerk Maxwell",
        "folder": "james-clerk-maxwell-3991"
      },
      {
        "id": "4046",
        "title": "Joseph-Louis Lagrange",
        "folder": "joseph-louis-lagrange-4046"
      },
      {
        "id": "4093",
        "title": "Max Planck",
        "folder": "max-planck-4093"
      },
      {
        "id": "4098",
        "title": "Michael Faraday",
        "folder": "michael-faraday-4098"
      },
      {
        "id": "4116",
        "title": "Murray Gell-Mann",
        "folder": "murray-gell-mann-4116"
      },
      {
        "id": "4127",
        "title": "Niels Bohr",
        "folder": "niels-bohr-4127"
      },
      {
        "id": "4140",
        "title": "Ole Rømer",
        "folder": "ole-roemer-4140"
      },
      {
        "id": "4197",
        "title": "Richard Feynman",
        "folder": "richard-feynman-4197"
      },
      {
        "id": "4204",
        "title": "Robert Boyle",
        "folder": "robert-boyle-4204"
      },
      {
        "id": "4250",
        "title": "Sheldon Glashow",
        "folder": "sheldon-glashow-4250"
      },
      {
        "id": "4255",
        "title": "Siméon Denis Poisson",
        "folder": "simeon-denis-poisson-4255"
      },
      {
        "id": "4273",
        "title": "Steven Weinberg",
        "folder": "steven-weinberg-4273"
      },
      {
        "id": "4298",
        "title": "Thomas Young",
        "folder": "thomas-young-4298"
      },
      {
        "id": "4335",
        "title": "Werner Heisenberg",
        "folder": "werner-heisenberg-4335"
      },
      {
        "id": "4338",
        "title": "Wilhelm Conrad Röntgen",
        "folder": "wilhelm-conrad-rontgen-4338"
      },
      {
        "id": "4407",
        "title": "Ludwig Boltzmann",
        "folder": "ludwig-boltzmann-4407"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Physiker+biografie&t=3752"
  },
  "politiker": {
    "slug": "politiker",
    "title": "Politiker",
    "category": "Politiker",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Politiker: Abraham Lincoln, Adolf Hitler, Alexander the Great, Catherine the Great, Charlemagne u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Politiker.",
    "keyPoints": [
      "Umfasst 26 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3604",
        "title": "Abraham Lincoln",
        "folder": "abraham-lincoln-2-3604"
      },
      {
        "id": "3610",
        "title": "Adolf Hitler",
        "folder": "adolf-hitler-2-3610"
      },
      {
        "id": "3633",
        "title": "Alexander the Great",
        "folder": "alexander-the-great-3633"
      },
      {
        "id": "3735",
        "title": "Catherine the Great",
        "folder": "catherine-the-great-3735"
      },
      {
        "id": "3737",
        "title": "Charlemagne",
        "folder": "charlemagne-3737"
      },
      {
        "id": "3741",
        "title": "Charles de Gaulle",
        "folder": "charles-de-gaulle-2-3741"
      },
      {
        "id": "3754",
        "title": "Cicero",
        "folder": "cicero-3754"
      },
      {
        "id": "3759",
        "title": "Cleopatra",
        "folder": "cleopatra-3759"
      },
      {
        "id": "3762",
        "title": "Confucius",
        "folder": "confucius-3762"
      },
      {
        "id": "3815",
        "title": "Elizabeth I",
        "folder": "elizabeth-i-3815"
      },
      {
        "id": "3888",
        "title": "George Washington",
        "folder": "george-washington-2-3888"
      },
      {
        "id": "3959",
        "title": "I.M. Pei",
        "folder": "i-m-pei-3959"
      },
      {
        "id": "4045",
        "title": "Joseph Stalin",
        "folder": "joseph-stalin-4045"
      },
      {
        "id": "4058",
        "title": "Mahatma Gandhi",
        "folder": "mahatma-gandhi-4058"
      },
      {
        "id": "4065",
        "title": "Mao Zedong",
        "folder": "mao-zedong-4065"
      },
      {
        "id": "4074",
        "title": "Margaret Thatcher",
        "folder": "margaret-thatcher-4074"
      },
      {
        "id": "4108",
        "title": "Mikhail Gorbachev",
        "folder": "mikhail-gorbachev-4108"
      },
      {
        "id": "4152",
        "title": "Otto von Bismarck",
        "folder": "otto-von-bismarck-2-4152"
      },
      {
        "id": "4159",
        "title": "Pericles",
        "folder": "pericles-4159"
      },
      {
        "id": "4163",
        "title": "Peter the Great",
        "folder": "peter-the-great-4163"
      },
      {
        "id": "4179",
        "title": "Qin Shi Huang",
        "folder": "qin-shi-huang-4179"
      },
      {
        "id": "4221",
        "title": "Romulus",
        "folder": "romulus-4221"
      },
      {
        "id": "4320",
        "title": "Victor Emmanuel II",
        "folder": "victor-emmanuel-ii-4320"
      },
      {
        "id": "4324",
        "title": "Vladimir Ilyich Lenin",
        "folder": "vladimir-ilyich-lenin-4324"
      },
      {
        "id": "4345",
        "title": "Winston Churchill",
        "folder": "winston-churchill-4345"
      },
      {
        "id": "4364",
        "title": "Julius Caesar",
        "folder": "julius-caesar-4364"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Politiker+biografie&t=3752"
  },
  "psychologen": {
    "slug": "psychologen",
    "title": "Psychologen",
    "category": "Psychologen",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Psychologen: Abraham Maslow, Albert Bandura, Alfred Adler, Alfred Binet, B.F. Skinner u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Psychologen.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3605",
        "title": "Abraham Maslow",
        "folder": "abraham-maslow-3605"
      },
      {
        "id": "3615",
        "title": "Albert Bandura",
        "folder": "albert-bandura-3615"
      },
      {
        "id": "3637",
        "title": "Alfred Adler",
        "folder": "alfred-adler-3637"
      },
      {
        "id": "3638",
        "title": "Alfred Binet",
        "folder": "alfred-binet-3638"
      },
      {
        "id": "3687",
        "title": "B.F. Skinner",
        "folder": "b-f-skinner-3687"
      },
      {
        "id": "3727",
        "title": "Carl Jung",
        "folder": "carl-jung-3727"
      },
      {
        "id": "3729",
        "title": "Carl Rogers",
        "folder": "carl-rogers-3729"
      },
      {
        "id": "3779",
        "title": "David Wechsler",
        "folder": "david-wechsler-3779"
      },
      {
        "id": "3805",
        "title": "Edward Thorndike",
        "folder": "edward-thorndike-3805"
      },
      {
        "id": "3828",
        "title": "Erik Erikson",
        "folder": "erik-erikson-3828"
      },
      {
        "id": "3908",
        "title": "Gordon Allport",
        "folder": "gordon-allport-3908"
      },
      {
        "id": "3931",
        "title": "Hans Eysenck",
        "folder": "hans-eysenck-3931"
      },
      {
        "id": "3948",
        "title": "Hermann Rorschach",
        "folder": "hermann-rorschach-3948"
      },
      {
        "id": "3977",
        "title": "Ivan Pavlov",
        "folder": "ivan-pavlov-3977"
      },
      {
        "id": "4005",
        "title": "Jean Piaget",
        "folder": "jean-piaget-4005"
      },
      {
        "id": "4021",
        "title": "John B. Watson",
        "folder": "john-b-watson-4021"
      },
      {
        "id": "4137",
        "title": "Noam Chomsky",
        "folder": "noam-chomsky-4137"
      },
      {
        "id": "4167",
        "title": "Philip Zimbardo",
        "folder": "philip-zimbardo-4167"
      },
      {
        "id": "4190",
        "title": "Raymond Cattell",
        "folder": "raymond-cattell-4190"
      },
      {
        "id": "4254",
        "title": "Sigmund Freud",
        "folder": "sigmund-freud-4254"
      },
      {
        "id": "4263",
        "title": "Solomon Asch",
        "folder": "solomon-asch-4263"
      },
      {
        "id": "4267",
        "title": "Stanley Milgram",
        "folder": "stanley-milgram-4267"
      },
      {
        "id": "4290",
        "title": "Theodore Simon",
        "folder": "theodore-simon-4290"
      },
      {
        "id": "4340",
        "title": "Wilhelm Wundt",
        "folder": "wilhelm-wundt-4340"
      },
      {
        "id": "4343",
        "title": "William James",
        "folder": "william-james-4343"
      },
      {
        "id": "4347",
        "title": "Wolfgang Köhler",
        "folder": "wolfgang-kohler-4347"
      },
      {
        "id": "4381",
        "title": "Kurt Lewin",
        "folder": "kurt-lewin-4381"
      },
      {
        "id": "4390",
        "title": "Leon Festinger",
        "folder": "leon-festinger-4390"
      },
      {
        "id": "4397",
        "title": "Lev Vygotsky",
        "folder": "lev-vygotsky-4397"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Psychologen+biografie&t=3752"
  },
  "religioese-fuehrer": {
    "slug": "religioese-fuehrer",
    "title": "Religiöse Führer",
    "category": "Religiöse Führer",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Religiöse Führer: Adi Shankara, Al-Ghazali, Baháʼu'lláh, Buddha, Dalai Lama u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Religiöse Führer.",
    "keyPoints": [
      "Umfasst 27 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3609",
        "title": "Adi Shankara",
        "folder": "adi-shankara-3609"
      },
      {
        "id": "3641",
        "title": "Al-Ghazali",
        "folder": "al-ghazali-3641"
      },
      {
        "id": "3689",
        "title": "Baháʼu'lláh",
        "folder": "baha-u-039-llah-3689"
      },
      {
        "id": "3720",
        "title": "Buddha",
        "folder": "buddha-3720"
      },
      {
        "id": "3766",
        "title": "Dalai Lama",
        "folder": "dalai-lama-3766"
      },
      {
        "id": "3921",
        "title": "Guru Nanak",
        "folder": "guru-nanak-3921"
      },
      {
        "id": "3964",
        "title": "Ignatius of Loyola",
        "folder": "ignatius-of-loyola-3964"
      },
      {
        "id": "4023",
        "title": "John Calvin",
        "folder": "john-calvin-4023"
      },
      {
        "id": "4031",
        "title": "John Paul II",
        "folder": "john-paul-ii-4031"
      },
      {
        "id": "4057",
        "title": "Maharishi Mahesh Yogi",
        "folder": "maharishi-mahesh-yogi-4057"
      },
      {
        "id": "4059",
        "title": "Maimonides",
        "folder": "maimonides-4059"
      },
      {
        "id": "4083",
        "title": "Martin Luther",
        "folder": "martin-luther-2-4083"
      },
      {
        "id": "4113",
        "title": "Mother Teresa",
        "folder": "mother-teresa-4113"
      },
      {
        "id": "4115",
        "title": "Muhammad",
        "folder": "muhammad-4115"
      },
      {
        "id": "4149",
        "title": "Osho",
        "folder": "osho-4149"
      },
      {
        "id": "4156",
        "title": "Paramahansa Yogananda",
        "folder": "paramahansa-yogananda-4156"
      },
      {
        "id": "4186",
        "title": "Ramakrishna",
        "folder": "ramakrishna-4186"
      },
      {
        "id": "4227",
        "title": "Rumi",
        "folder": "rumi-4227"
      },
      {
        "id": "4241",
        "title": "Sathya Sai Baba",
        "folder": "sathya-sai-baba-4241"
      },
      {
        "id": "4266",
        "title": "Sri Aurobindo",
        "folder": "sri-aurobindo-4266"
      },
      {
        "id": "4279",
        "title": "Swami Vivekananda",
        "folder": "swami-vivekananda-4279"
      },
      {
        "id": "4292",
        "title": "Thich Nhat Hanh",
        "folder": "thich-nhat-hanh-4292"
      },
      {
        "id": "4354",
        "title": "Zoroaster",
        "folder": "zoroaster-4354"
      },
      {
        "id": "4355",
        "title": "Zoroaster",
        "folder": "zoroaster-2-4355"
      },
      {
        "id": "4359",
        "title": "Billy Graham",
        "folder": "billy-graham-4359"
      },
      {
        "id": "4382",
        "title": "L. Ron Hubbard",
        "folder": "l-ron-hubbard-4382"
      },
      {
        "id": "4384",
        "title": "Lao Tzu",
        "folder": "lao-tzu-4384"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Religi%C3%B6se%20F%C3%BChrer+biografie&t=3752"
  },
  "russische-schriftsteller": {
    "slug": "russische-schriftsteller",
    "title": "Russische Schriftsteller",
    "category": "Russische Schriftsteller",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Russische Schriftsteller: Aleksandr Blok, Aleksandr Grin, Aleksandr Kuprin, Aleksandr Pushkin, Aleksandr Solzhenitsyn u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Russische Schriftsteller.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3621",
        "title": "Aleksandr Blok",
        "folder": "aleksandr-blok-3621"
      },
      {
        "id": "3622",
        "title": "Aleksandr Grin",
        "folder": "aleksandr-grin-3622"
      },
      {
        "id": "3623",
        "title": "Aleksandr Kuprin",
        "folder": "aleksandr-kuprin-3623"
      },
      {
        "id": "3624",
        "title": "Aleksandr Pushkin",
        "folder": "aleksandr-pushkin-3624"
      },
      {
        "id": "3625",
        "title": "Aleksandr Solzhenitsyn",
        "folder": "aleksandr-solzhenitsyn-3625"
      },
      {
        "id": "3658",
        "title": "Anna Akhmatova",
        "folder": "anna-akhmatova-3658"
      },
      {
        "id": "3664",
        "title": "Anton Chekhov",
        "folder": "anton-chekhov-3664"
      },
      {
        "id": "3716",
        "title": "Boris Akunin",
        "folder": "boris-akunin-3716"
      },
      {
        "id": "3717",
        "title": "Boris Pasternak",
        "folder": "boris-pasternak-3717"
      },
      {
        "id": "3771",
        "title": "Daniil Kharms",
        "folder": "daniil-kharms-3771"
      },
      {
        "id": "3787",
        "title": "Dmitri Merezhkovsky",
        "folder": "dmitri-merezhkovsky-3787"
      },
      {
        "id": "3869",
        "title": "Fyodor Dostoevsky",
        "folder": "fyodor-dostoevsky-3869"
      },
      {
        "id": "3870",
        "title": "Fyodor Tyutchev",
        "folder": "fyodor-tyutchev-3870"
      },
      {
        "id": "3975",
        "title": "Ivan Bunin",
        "folder": "ivan-bunin-3975"
      },
      {
        "id": "3976",
        "title": "Ivan Goncharov",
        "folder": "ivan-goncharov-3976"
      },
      {
        "id": "3978",
        "title": "Ivan Turgenev",
        "folder": "ivan-turgenev-3978"
      },
      {
        "id": "4077",
        "title": "Marina Tsvetaeva",
        "folder": "marina-tsvetaeva-4077"
      },
      {
        "id": "4095",
        "title": "Maxim Gorky",
        "folder": "maxim-gorky-4095"
      },
      {
        "id": "4107",
        "title": "Mikhail Bulgakov",
        "folder": "mikhail-bulgakov-4107"
      },
      {
        "id": "4109",
        "title": "Mikhail Lermontov",
        "folder": "mikhail-lermontov-4109"
      },
      {
        "id": "4110",
        "title": "Mikhail Sholokhov",
        "folder": "mikhail-sholokhov-4110"
      },
      {
        "id": "4133",
        "title": "Nikolai Gogol",
        "folder": "nikolai-gogol-4133"
      },
      {
        "id": "4134",
        "title": "Nikolai Leskov",
        "folder": "nikolai-leskov-4134"
      },
      {
        "id": "4135",
        "title": "Nikolai Nekrasov",
        "folder": "nikolai-nekrasov-4135"
      },
      {
        "id": "4150",
        "title": "Osip Mandelstam",
        "folder": "osip-mandelstam-4150"
      },
      {
        "id": "4325",
        "title": "Vladimir Mayakovsky",
        "folder": "vladimir-mayakovsky-4325"
      },
      {
        "id": "4326",
        "title": "Vladimir Nabokov",
        "folder": "vladimir-nabokov-4326"
      },
      {
        "id": "4348",
        "title": "Yevgeny Zamyatin",
        "folder": "yevgeny-zamyatin-4348"
      },
      {
        "id": "4393",
        "title": "Leonid Andreev",
        "folder": "leonid-andreev-4393"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Russische%20Schriftsteller+biografie&t=3752"
  },
  "spanische-schriftsteller": {
    "slug": "spanische-schriftsteller",
    "title": "Spanische Schriftsteller",
    "category": "Spanische Schriftsteller",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Spanische Schriftsteller: Almudena Grandes, Antonio Gala, Antonio Machado, Arturo Pérez-Reverte, Benito Pérez Galdós u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Spanische Schriftsteller.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3644",
        "title": "Almudena Grandes",
        "folder": "almudena-grandes-3644"
      },
      {
        "id": "3666",
        "title": "Antonio Gala",
        "folder": "antonio-gala-3666"
      },
      {
        "id": "3668",
        "title": "Antonio Machado",
        "folder": "antonio-machado-3668"
      },
      {
        "id": "3679",
        "title": "Arturo Pérez-Reverte",
        "folder": "arturo-perez-reverte-3679"
      },
      {
        "id": "3700",
        "title": "Benito Pérez Galdós",
        "folder": "benito-perez-galdos-3700"
      },
      {
        "id": "3722",
        "title": "Calderón de la Barca",
        "folder": "calderon-de-la-barca-3722"
      },
      {
        "id": "3724",
        "title": "Camilo José Cela",
        "folder": "camilo-jose-cela-3724"
      },
      {
        "id": "3732",
        "title": "Carlos Ruiz Zafón",
        "folder": "carlos-ruiz-zafon-3732"
      },
      {
        "id": "3733",
        "title": "Carmen Laforet",
        "folder": "carmen-laforet-3733"
      },
      {
        "id": "3819",
        "title": "Emilia Pardo Bazán",
        "folder": "emilia-pardo-bazan-3819"
      },
      {
        "id": "3842",
        "title": "Federico García Lorca",
        "folder": "federico-garcia-lorca-3842"
      },
      {
        "id": "3872",
        "title": "Gabriel García Márquez",
        "folder": "gabriel-garcia-marquez-3872"
      },
      {
        "id": "4002",
        "title": "Javier Marías",
        "folder": "javier-marias-4002"
      },
      {
        "id": "4039",
        "title": "Jorge Luis Borges",
        "folder": "jorge-luis-borges-4039"
      },
      {
        "id": "4040",
        "title": "José Hierro",
        "folder": "jose-hierro-4040"
      },
      {
        "id": "4041",
        "title": "José Martínez Ruiz",
        "folder": "jose-martinez-ruiz-4041"
      },
      {
        "id": "4048",
        "title": "Juan Goytisolo",
        "folder": "juan-goytisolo-4048"
      },
      {
        "id": "4050",
        "title": "Juan Ramón Jiménez",
        "folder": "juan-ramon-jimenez-4050"
      },
      {
        "id": "4055",
        "title": "Luis Buñuel",
        "folder": "luis-bunuel-4055"
      },
      {
        "id": "4078",
        "title": "Mario Vargas Llosa",
        "folder": "mario-vargas-llosa-4078"
      },
      {
        "id": "4105",
        "title": "Miguel de Cervantes",
        "folder": "miguel-de-cervantes-4105"
      },
      {
        "id": "4106",
        "title": "Miguel de Unamuno",
        "folder": "miguel-de-unamuno-4106"
      },
      {
        "id": "4154",
        "title": "Pablo Neruda",
        "folder": "pablo-neruda-4154"
      },
      {
        "id": "4172",
        "title": "Pío Baroja",
        "folder": "pio-baroja-4172"
      },
      {
        "id": "4182",
        "title": "Rafael Alberti",
        "folder": "rafael-alberti-4182"
      },
      {
        "id": "4187",
        "title": "Ramón del Valle-Inclán",
        "folder": "ramon-del-valle-inclan-4187"
      },
      {
        "id": "4223",
        "title": "Rosa Montero",
        "folder": "rosa-montero-4223"
      },
      {
        "id": "4319",
        "title": "Vicente Aleixandre",
        "folder": "vicente-aleixandre-4319"
      },
      {
        "id": "4402",
        "title": "Lope de Vega",
        "folder": "lope-de-vega-4402"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Spanische%20Schriftsteller+biografie&t=3752"
  },
  "sportler": {
    "slug": "sportler",
    "title": "Sportler",
    "category": "Sportler",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Sportler: Björn Borg, Bobby Fischer, Bruce Lee, Carl Lewis, Diego Maradona u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Sportler.",
    "keyPoints": [
      "Umfasst 29 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3711",
        "title": "Björn Borg",
        "folder": "bjorn-borg-3711"
      },
      {
        "id": "3714",
        "title": "Bobby Fischer",
        "folder": "bobby-fischer-3714"
      },
      {
        "id": "3719",
        "title": "Bruce Lee",
        "folder": "bruce-lee-3719"
      },
      {
        "id": "3728",
        "title": "Carl Lewis",
        "folder": "carl-lewis-3728"
      },
      {
        "id": "3782",
        "title": "Diego Maradona",
        "folder": "diego-maradona-3782"
      },
      {
        "id": "3789",
        "title": "Don Bradman",
        "folder": "don-bradman-3789"
      },
      {
        "id": "3984",
        "title": "Jackie Robinson",
        "folder": "jackie-robinson-3984"
      },
      {
        "id": "4013",
        "title": "Jesse Owens",
        "folder": "jesse-owens-4013"
      },
      {
        "id": "4015",
        "title": "Jim Thorpe",
        "folder": "jim-thorpe-4015"
      },
      {
        "id": "4018",
        "title": "Joe Louis",
        "folder": "joe-louis-4018"
      },
      {
        "id": "4051",
        "title": "Kareem Abdul-Jabbar",
        "folder": "kareem-abdul-jabbar-4051"
      },
      {
        "id": "4079",
        "title": "Mark Spitz",
        "folder": "mark-spitz-4079"
      },
      {
        "id": "4085",
        "title": "Martina Navratilova",
        "folder": "martina-navratilova-4085"
      },
      {
        "id": "4099",
        "title": "Michael Jordan",
        "folder": "michael-jordan-4099"
      },
      {
        "id": "4101",
        "title": "Michael Phelps",
        "folder": "michael-phelps-4101"
      },
      {
        "id": "4114",
        "title": "Muhammad Ali",
        "folder": "muhammad-ali-4114"
      },
      {
        "id": "4158",
        "title": "Pelé",
        "folder": "pele-4158"
      },
      {
        "id": "4219",
        "title": "Roger Federer",
        "folder": "roger-federer-4219"
      },
      {
        "id": "4220",
        "title": "Roger Maris",
        "folder": "roger-maris-4220"
      },
      {
        "id": "4244",
        "title": "Serena Williams",
        "folder": "serena-williams-4244"
      },
      {
        "id": "4257",
        "title": "Simone Biles",
        "folder": "simone-biles-4257"
      },
      {
        "id": "4268",
        "title": "Steffi Graf",
        "folder": "steffi-graf-4268"
      },
      {
        "id": "4301",
        "title": "Tiger Woods",
        "folder": "tiger-woods-4301"
      },
      {
        "id": "4306",
        "title": "Tom Brady",
        "folder": "tom-brady-4306"
      },
      {
        "id": "4313",
        "title": "Usain Bolt",
        "folder": "usain-bolt-4313"
      },
      {
        "id": "4333",
        "title": "Wayne Gretzky",
        "folder": "wayne-gretzky-4333"
      },
      {
        "id": "4358",
        "title": "Babe Ruth",
        "folder": "babe-ruth-2-4358"
      },
      {
        "id": "4383",
        "title": "Lance Armstrong",
        "folder": "lance-armstrong-4383"
      },
      {
        "id": "4385",
        "title": "Larissa Latynina",
        "folder": "larissa-latynina-4385"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sportler+biografie&t=3752"
  },
  "unternehmer": {
    "slug": "unternehmer",
    "title": "Unternehmer",
    "category": "Unternehmer",
    "shortDesc": "Interaktive Biografien und Übungen zu berühmten Unternehmer: Andrew Carnegie, Brian Chesky, Cornelius Vanderbilt, Elon Musk, Estée Lauder u. v. m.",
    "longDesc": "Hier findest du kurze Erklärungen, biografische Meilensteine und interaktive Übungen zu den wichtigsten Persönlichkeiten aus dem Bereich Unternehmer.",
    "keyPoints": [
      "Umfasst 30 herausragende Persönlichkeiten und historische Leitfiguren",
      "Wichtige Meilensteine, Werke und geschichtliche Einordnung",
      "Interaktive Lernmodule zum Festigen von Daten, Fakten und Biografien"
    ],
    "exercises": [
      {
        "id": "3653",
        "title": "Andrew Carnegie",
        "folder": "andrew-carnegie-3653"
      },
      {
        "id": "3718",
        "title": "Brian Chesky",
        "folder": "brian-chesky-3718"
      },
      {
        "id": "3763",
        "title": "Cornelius Vanderbilt",
        "folder": "cornelius-vanderbilt-3763"
      },
      {
        "id": "3816",
        "title": "Elon Musk",
        "folder": "elon-musk-3816"
      },
      {
        "id": "3834",
        "title": "Estée Lauder",
        "folder": "estee-lauder-3834"
      },
      {
        "id": "3838",
        "title": "Evan Spiegel",
        "folder": "evan-spiegel-3838"
      },
      {
        "id": "3945",
        "title": "Henry Ford",
        "folder": "henry-ford-3945"
      },
      {
        "id": "3955",
        "title": "Howard Schultz",
        "folder": "howard-schultz-3955"
      },
      {
        "id": "3968",
        "title": "Indra Nooyi",
        "folder": "indra-nooyi-3968"
      },
      {
        "id": "3980",
        "title": "J.P. Morgan",
        "folder": "j-p-morgan-3980"
      },
      {
        "id": "3982",
        "title": "Jack Dorsey",
        "folder": "jack-dorsey-3982"
      },
      {
        "id": "3983",
        "title": "Jack Ma",
        "folder": "jack-ma-3983"
      },
      {
        "id": "3997",
        "title": "Jan Koum",
        "folder": "jan-koum-3997"
      },
      {
        "id": "4010",
        "title": "Jeff Bezos",
        "folder": "jeff-bezos-4010"
      },
      {
        "id": "4025",
        "title": "John D. Rockefeller",
        "folder": "john-d-rockefeller-4025"
      },
      {
        "id": "4088",
        "title": "Mary Kay Ash",
        "folder": "mary-kay-ash-4088"
      },
      {
        "id": "4090",
        "title": "Masayoshi Son",
        "folder": "masayoshi-son-4090"
      },
      {
        "id": "4097",
        "title": "Michael Dell",
        "folder": "michael-dell-4097"
      },
      {
        "id": "4164",
        "title": "Peter Thiel",
        "folder": "peter-thiel-4164"
      },
      {
        "id": "4189",
        "title": "Ray Kroc",
        "folder": "ray-kroc-4189"
      },
      {
        "id": "4192",
        "title": "Reed Hastings",
        "folder": "reed-hastings-4192"
      },
      {
        "id": "4196",
        "title": "Richard Branson",
        "folder": "richard-branson-4196"
      },
      {
        "id": "4234",
        "title": "Sam Walton",
        "folder": "sam-walton-4234"
      },
      {
        "id": "4251",
        "title": "Sheryl Sandberg",
        "folder": "sheryl-sandberg-4251"
      },
      {
        "id": "4271",
        "title": "Steve Jobs",
        "folder": "steve-jobs-2-4271"
      },
      {
        "id": "4308",
        "title": "Travis Kalanick",
        "folder": "travis-kalanick-4308"
      },
      {
        "id": "4328",
        "title": "Walt Disney",
        "folder": "walt-disney-4328"
      },
      {
        "id": "4332",
        "title": "Warren Buffett",
        "folder": "warren-buffett-4332"
      },
      {
        "id": "4375",
        "title": "Kevin Systrom",
        "folder": "kevin-systrom-4375"
      },
      {
        "id": "4386",
        "title": "Larry Ellison",
        "folder": "larry-ellison-4386"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Unternehmer+biografie&t=3752"
  }
};
