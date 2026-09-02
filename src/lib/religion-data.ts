export interface ReligionExercise {
  id: string;
  title: string;
  folder: string;
}

export interface ReligionTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: ReligionExercise[];
  worksheetLink?: string;
}

export const religionCategories: string[] = [
  "Die Weltreligionen",
  "Bibel & Religiöse Schriften",
  "Feste, Symbole, Tod & Auferstehung",
  "Religion im Alltag & Gesellschaft"
];

export const religionTopics: Record<string, ReligionTopic> = {
  "die-weltreligionen": {
    "slug": "die-weltreligionen",
    "title": "Die fünf großen Weltreligionen",
    "category": "Die Weltreligionen",
    "shortDesc": "Christentum, Judentum, Islam, Buddhismus und Hinduismus im Vergleich.",
    "longDesc": "Lerne die Entstehung, Glaubensgrundsätze, heiligen Schriften und Feste der fünf großen Weltreligionen kennen.",
    "keyPoints": [
      "Monotheismus: Judentum, Christentum und Islam glauben an einen einzigen Gott (abrahamitische Religionen)",
      "Östliche Religionen: Hinduismus (Vielzahl von Gottheiten, Karma, Wiedergeburt) und Buddhismus (Erleuchtung, Vier Edle Wahrheiten, Achtfacher Pfad)",
      "Heilige Schriften: Tora, Bibel, Koran, Veden und Tipitaka",
      "Interreligiöser Dialog: Respekt, Toleranz und Gemeinsamkeiten im Zusammenleben"
    ],
    "exercises": [
      {
        "id": "818",
        "title": "Das Christentum",
        "folder": "das-christentum-818"
      },
      {
        "id": "819",
        "title": "Das Judentum",
        "folder": "das-judentum-819"
      },
      {
        "id": "820",
        "title": "Der Hinduismus",
        "folder": "der-hinduismus-820"
      },
      {
        "id": "821",
        "title": "Der Islam",
        "folder": "der-islam-821"
      },
      {
        "id": "822",
        "title": "Der Buddhismus",
        "folder": "der-buddhismus-822"
      },
      {
        "id": "874",
        "title": "Escape Room: Weltreligionen",
        "folder": "geheimcode-escaperoom-welreligionen-874"
      },
      {
        "id": "2425",
        "title": "Dialog der Religionen",
        "folder": "dialog-der-religionen-2425"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=weltreligionen&t=3752"
  },
  "die-bibel-altes-und-neues-testament": {
    "slug": "die-bibel-altes-und-neues-testament",
    "title": "Die Bibel: Altes und Neues Testament",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "Aufbau der Bibel, Schöpfungsberichte, Mose, Propheten, Evangelien und Gleichnisse Jesu.",
    "longDesc": "Die Bibel ist das meistgedruckte Buch der Weltgeschichte. Sie gliedert sich in das Alte Testament (Bund Gottes mit dem Volk Israel) und das Neue Testament (Leben und Botschaft Jesu von Nazareth).",
    "keyPoints": [
      "Altes Testament: Schöpfung, Exodus (Auszug aus Ägypten), Zehn Gebote, Psalmen und Propheten",
      "Neues Testament: Vier Evangelien (Matthäus, Markus, Lukas, Johannes), Apostelgeschichte, Briefe und Offenbarung",
      "Gleichnisse Jesu: Bildhafte Erzählungen zur Vermittlung christlicher Werte (z. B. Barmherziger Samariter, Verlorener Sohn)",
      "Wundererzählungen: Zeichen der Zuwendung und der Hoffnung"
    ],
    "exercises": [
      {
        "id": "2392",
        "title": "Die Bibel entdecken: Aufbau und Struktur",
        "folder": "die-bibel-entdecken-aufbau-und-struktur-2392"
      },
      {
        "id": "2393",
        "title": "Die Vielfalt der Bibel",
        "folder": "die-vielfalt-der-bibel-2393"
      },
      {
        "id": "2401",
        "title": "Mose und der Auszug aus Ägypten",
        "folder": "mose-und-der-auszug-aus-gypten-2401"
      },
      {
        "id": "2416",
        "title": "Wunder und Zeichen von Jesus",
        "folder": "wunder-und-zeichen-von-jesus-2416"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=bibel&t=3752"
  },
  "tod-trauer-und-auferstehung": {
    "slug": "tod-trauer-und-auferstehung",
    "title": "Tod, Trauer, Auferstehung & Ewiges Leben",
    "category": "Feste, Symbole, Tod & Auferstehung",
    "shortDesc": "Umgang mit Sterben und Trauer, Bestattungsrituale, Hoffnung auf Auferstehung und Ewigkeit.",
    "longDesc": "Wie gehen Menschen und Religionen mit der Endlichkeit des Lebens um? Religiöse Riten und theologische Vorstellungen bieten Trost und Hoffnung.",
    "keyPoints": [
      "Trauerprozess: Phasen der Trauer (Schock, emotionale Aufwallung, Suchen & Sich-Trennen, Neuorientierung)",
      "Auferstehungshoffnung: Zentrales christliches Glaubensbekenntnis an das ewige Leben nach dem Tod",
      "Bestattungsformen: Erdbestattung, Feuerbestattung und Gedenkkultur",
      "Hospiz & Beistand: Sterbebegleitung und Trost in schweren Zeiten"
    ],
    "exercises": [
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
        "id": "4425",
        "title": "Die Bedeutung von Versöhnung",
        "folder": "die-bedeutung-von-versohnung-4425"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=tod+und+trauer&t=3752"
  },
  "religion-im-alltag-und-kirche": {
    "slug": "religion-im-alltag-und-kirche",
    "title": "Religion im Alltag, Gebet & Kirche in der Gesellschaft",
    "category": "Religion im Alltag & Gesellschaft",
    "shortDesc": "Gelebter Glaube, Sakramente, Kirchenfeste, Diakonie/Caritas und ethische Verantwortung.",
    "longDesc": "Glaube zeigt sich nicht nur in Texten, sondern im Alltag: durch Gebet, Feiern im Jahreskreis, soziales Engagement und kirchliche Traditionen.",
    "keyPoints": [
      "Sakramente: Zeichen der Nähe Gottes (Taufe, Eucharistie/Abendmahl, Firmung/Konfirmation, Beichte, Ehe, Priesterweihe, Krankensalbung)",
      "Kirchenjahr: Advent, Weihnachten, Fastenzeit, Karwoche, Ostern, Christi Himmelfahrt, Pfingsten und Erntedank",
      "Caritas und Diakonie: Nächstenliebe und gesellschaftliche Fürsorge für Bedürftige",
      "Ethik im Beruf: Verantwortungsvolles Handeln und christliche Werte"
    ],
    "exercises": [
      {
        "id": "2454",
        "title": "Glaube und Ethik im Berufsleben",
        "folder": "glaube-und-ethik-im-berufsleben-2454"
      },
      {
        "id": "2430",
        "title": "Schlüsselereignisse der Kirchengeschichte",
        "folder": "schlusselereignisse-der-kirchengeschichte-im-berblick-2430"
      },
      {
        "id": "2440",
        "title": "Glaube und Gemeinschaft im Christentum",
        "folder": "glaube-und-gemeinschaft-das-herzstuck-des-christentums-2440"
      },
      {
        "id": "2456",
        "title": "Papst Benedikt XVI.",
        "folder": "papst-benedikt-xvi-2456"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kirche+und+gesellschaft&t=3752"
  }
};
