export interface SportExercise {
  id: string;
  title: string;
  folder: string;
}

export interface SportTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: SportExercise[];
  worksheetLink?: string;
}

export const sportCategories: string[] = [
  "Ballsport & Spiel",
  "Rückschlagspiele & Präzision",
  "Individualsport & Fitness",
  "Winter- & Wassersport",
  "Sport in Gesellschaft & Kultur"
];

export const sportTopics: Record<string, SportTopic> = {
  "ballsportarten-und-teamsport": {
    slug: "ballsportarten-und-teamsport",
    title: "Ballsportarten & Teamsport",
    category: "Ballsport & Spiel",
    shortDesc: "Regeln, Spielfelder und Taktiken beliebter Mannschafts- und Ballsportarten weltweit.",
    longDesc: "Von Basketball und Volleyball bis hin zu American Football, Rugby und Baseball – lerne die Grundlagen, Spielregeln, Spielfeldmaße und strategischen Spielzüge faszinierender Ballsportarten und Teamwettkämpfe kennen.",
    keyPoints: [
      "Teamgeist, Kooperation und taktisches Spielverständnis im Mannschaftssport",
      "Regeln, Punktevergabe und Spielfeldzonen bei Basketball, Volleyball und American Football",
      "Internationale Varianten: Rugby, Australian Football, Gaelic Football und Cricket",
      "Dynamische Spielzüge, Schiedsrichterzeichen und Fair-Play-Grundsätze"
    ],
    exercises: [
      {
        id: "sport-basketball",
        title: "Basketball einfach und kurz erklärt",
        folder: "basketball-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-volleyball",
        title: "Volleyball einfach und kurz erklärt",
        folder: "volleyball-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-american-football",
        title: "American Football einfach und kurz erklärt",
        folder: "american-football-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-flag-football",
        title: "Flag Football einfach und kurz erklärt",
        folder: "flag-football-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-australian-football",
        title: "Australian Football einfach und kurz erklärt",
        folder: "australian-football-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-gaelic-football",
        title: "Gaelic Football einfach und kurz erklärt",
        folder: "gaelic-football-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-rugby",
        title: "Rugby einfach und kurz erklärt",
        folder: "rugby-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-baseball",
        title: "Baseball einfach und kurz erklärt",
        folder: "baseball-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-cricket",
        title: "Cricket einfach und kurz erklärt",
        folder: "cricket-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-lacrosse",
        title: "Lacrosse einfach und kurz erklärt",
        folder: "lacrosse-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-netball",
        title: "Netball einfach und kurz erklärt",
        folder: "netball-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-wasserball",
        title: "Wasserball einfach und kurz erklärt",
        folder: "wasserball-einfach-und-kurz-erklaert"
      }
    ]
  },

  "rueckschlagspiele-und-praezisionssport": {
    slug: "rueckschlagspiele-und-praezisionssport",
    title: "Rückschlagspiele & Präzisionssportarten",
    category: "Rückschlagspiele & Präzision",
    shortDesc: "Tennis, Tischtennis, Badminton, Golf, Darts und Billard im Überblick.",
    longDesc: "Rückschlagspiele erfordern Reaktionsschnelligkeit, Auge-Hand-Koordination und präzise Schlagtechniken. Präzisionssportarten wie Darts, Golf und Snooker schulen zudem Konzentration, Nervenstärke und geometrisches Spielverständnis.",
    keyPoints: [
      "Rückschlagspiele: Ballwechsel, Zählweise und Schlagarten bei Tennis, Tischtennis und Badminton",
      "Trendsportarten im Racketsport: Padel-Tennis, Pickleball und Squash",
      "Präzisionssport: Konzentration, Zielführung und Ballphysik bei Golf, Billard und Snooker",
      "Wurf- und Zielsicherheit: Darts und traditionelle Spielformen wie Hurling"
    ],
    exercises: [
      {
        id: "sport-tennis",
        title: "Tennis einfach und kurz erklärt",
        folder: "tennis-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-tischtennis",
        title: "Tischtennis einfach und kurz erklärt",
        folder: "tischtennis-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-badminton",
        title: "Badminton einfach und kurz erklärt",
        folder: "badminton-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-padel-tennis",
        title: "Padel-Tennis einfach und kurz erklärt",
        folder: "padel-tennis-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-pickleball",
        title: "Pickleball einfach und kurz erklärt",
        folder: "pickleball-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-squash",
        title: "Squash einfach und kurz erklärt",
        folder: "squash-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-golf",
        title: "Golf einfach und kurz erklärt",
        folder: "golf-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-darts",
        title: "Darts einfach und kurz erklärt",
        folder: "darts-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-billard",
        title: "Billard einfach und kurz erklärt",
        folder: "billard-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-snooker",
        title: "Snooker einfach und kurz erklärt",
        folder: "snooker-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-hurling",
        title: "Hurling einfach und kurz erklärt",
        folder: "hurling-einfach-und-kurz-erklaert"
      }
    ]
  },

  "leichtathletik-turnen-und-kraftsport": {
    slug: "leichtathletik-turnen-und-kraftsport",
    title: "Leichtathletik, Turnen & Ausdauersport",
    category: "Individualsport & Fitness",
    shortDesc: "Lauf-, Sprung- und Wurfdisziplinen, Gerätturnen, Radsport, Klettern und Kampfsport.",
    longDesc: "Die klassischen Grundformen menschlicher Bewegung: Laufen, Springen, Werfen und Klettern. Entdecke leichtathletische Disziplinen, Gerätturnen, Ausdauersportarten wie Triathlon und Radrennen sowie Selbstverteidigung und Kampfsportarten.",
    keyPoints: [
      "Leichtathletik: Sprint, Mittel- und Langstrecke, Weitsprung, Hochsprung, Kugelstoßen und Speerwurf",
      "Turnen & Akrobatik: Körperbeherrschung, Beweglichkeit und Gerätedisziplinen",
      "Ausdauer & Fitness: Radrennen, Triathlon, Crossfit und Bouldern/Klettern",
      "Kampfsportarten: Judo, Karate, Taekwondo, Ringen und Sumo-Ringen mit Respekt und Disziplin"
    ],
    exercises: [
      {
        id: "sport-leichtathletik",
        title: "Leichtathletik einfach und kurz erklärt",
        folder: "leichtathletik-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-turnen",
        title: "Turnen einfach und kurz erklärt",
        folder: "turnen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-radrennen",
        title: "Radrennen einfach und kurz erklärt",
        folder: "radrennen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-triathlon",
        title: "Triathlon einfach und kurz erklärt",
        folder: "triathlon-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-klettern",
        title: "Klettern einfach und kurz erklärt",
        folder: "klettern-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-bouldern",
        title: "Bouldern einfach und kurz erklärt",
        folder: "bouldern-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-crossfit",
        title: "Crossfit einfach und kurz erklärt",
        folder: "crossfit-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-skateboarden",
        title: "Skateboarden einfach und kurz erklärt",
        folder: "skateboarden-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-fechten",
        title: "Fechten einfach und kurz erklärt",
        folder: "fechten-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-boxen",
        title: "Boxen einfach und kurz erklärt",
        folder: "boxen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-judo",
        title: "Judo einfach und kurz erklärt",
        folder: "judo-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-karate",
        title: "Karate einfach und kurz erklärt",
        folder: "karate-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-taekwondo",
        title: "Taekwondo einfach und kurz erklärt",
        folder: "taekwondo-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-ringen",
        title: "Ringen einfach und kurz erklärt",
        folder: "ringen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-sumo-ringen",
        title: "Sumo-Ringen einfach und kurz erklärt",
        folder: "sumo-ringen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-schach",
        title: "Schach einfach und kurz erklärt",
        folder: "schach-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-polo",
        title: "Polo einfach und kurz erklärt",
        folder: "polo-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-formel-1",
        title: "Formel 1 einfach und kurz erklärt",
        folder: "formel-1-einfach-und-kurz-erklaert"
      }
    ]
  },

  "winter-und-wassersport": {
    slug: "winter-und-wassersport",
    title: "Winter- & Wassersport",
    category: "Winter- & Wassersport",
    shortDesc: "Schwimmen, Rudern, Surfen, Eishockey, Skispringen und Snowboarden im Detail.",
    longDesc: "Sportarten im und auf dem Wasser sowie im Schnee und auf dem Eis. Von olympischen Schwimmstilen und Rudern über Trendsportarten wie Wellenreiten, Kitesurfen und Stand-up-Paddling bis hin zum alpinen Wintersport und Eiskanalwettbewerben.",
    keyPoints: [
      "Schwimmsport: Kraul-, Brust-, Rücken- und Schmetterlingsschwimmen sowie Synchronschwimmen",
      "Wassersport: Rudern, Segeln, Surfen, Kitesurfen, Stand-up-Paddling und Wakeboarden",
      "Eissport: Schnelligkeit und Eleganz bei Eishockey, Eiskunstlauf, Eisschnelllauf und Curling",
      "Schnee- und Eiskanal: Skispringen, Snowboarden, Biathlon, Bobfahren, Rodeln und Skeleton"
    ],
    exercises: [
      {
        id: "sport-schwimmen",
        title: "Schwimmen einfach und kurz erklärt",
        folder: "schwimmen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-synchronschwimmen",
        title: "Synchronschwimmen einfach und kurz erklärt",
        folder: "synchronschwimmen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-rudern",
        title: "Rudern einfach und kurz erklärt",
        folder: "rudern-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-segeln",
        title: "Segeln einfach und kurz erklärt",
        folder: "segeln-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-surfen",
        title: "Surfen einfach und kurz erklärt",
        folder: "surfen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-stand-up-paddling",
        title: "Stand-up-Paddling (SUP) einfach und kurz erklärt",
        folder: "stand-up-paddling-sup-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-wakeboarden",
        title: "Wakeboarden einfach und kurz erklärt",
        folder: "wakeboarden-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-kitesurfen",
        title: "Kitesurfen einfach und kurz erklärt",
        folder: "kitesurfen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-eishockey",
        title: "Eishockey einfach und kurz erklärt",
        folder: "eishockey-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-eiskunstlauf",
        title: "Eiskunstlauf einfach und kurz erklärt",
        folder: "eiskunstlauf-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-eisschnelllauf",
        title: "Eisschnelllauf einfach und kurz erklärt",
        folder: "eisschnelllauf-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-skispringen",
        title: "Skispringen einfach und kurz erklärt",
        folder: "skispringen-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-snowboarden",
        title: "Snowboarden einfach und kurz erklärt",
        folder: "snowboarden-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-biathlon",
        title: "Biathlon einfach und kurz erklärt",
        folder: "biathlon-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-bobfahren",
        title: "Bobfahren einfach und kurz erklärt",
        folder: "bobfahren-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-curling",
        title: "Curling einfach und kurz erklärt",
        folder: "curling-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-rodeln",
        title: "Rodeln einfach und kurz erklärt",
        folder: "rodeln-einfach-und-kurz-erklaert"
      },
      {
        id: "sport-skeleton",
        title: "Skeleton einfach und kurz erklärt",
        folder: "skeleton-einfach-und-kurz-erklaert"
      }
    ]
  },

  "sport-in-gesellschaft-und-kultur": {
    slug: "sport-in-gesellschaft-und-kultur",
    title: "Sport in Gesellschaft, Gesundheit & Wirtschaft",
    category: "Sport in Gesellschaft & Kultur",
    shortDesc: "Gesundheitsförderung, soziale Integration und wirtschaftliche Aspekte des Sports.",
    longDesc: "Sport ist weit mehr als Bewegung: Er verbindet Menschen über Kulturen und Generationen hinweg, stärkt Gesundheit und Wohlbefinden und ist zugleich ein bedeutender Wirtschaftszweig mit globaler Reichweite und medialer Inszenierung.",
    keyPoints: [
      "Gesundheitliche und psychologische Vorteile regelmäßiger sportlicher Betätigung",
      "Sport als Motor für Teamgeist, Integration, Toleranz und soziale Werte",
      "Kommerzialisierung, Profisport, Sponsoring und Medienrechte"
    ],
    exercises: [
      {
        id: "4423",
        title: "Die Bedeutung von Sport für die Gesellschaft",
        folder: "die-bedeutung-von-sport-fur-die-gesellschaft-4423"
      },
      {
        id: "3518",
        title: "Die Rolle von Sport für die Gesellschaft",
        folder: "die-rolle-von-sport-fur-die-gesellschaft-3518"
      },
      {
        id: "4446",
        title: "Kommerzialisierung des Sports",
        folder: "kommerzialisierung-des-sports-4446"
      }
    ,
      {
        "id": "das-olympiastadion-berlin",
        "title": "Das Olympiastadion Berlin",
        "folder": "das-olympiastadion-berlin"
      }
    ]
  }
};
