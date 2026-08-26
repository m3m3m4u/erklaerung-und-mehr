export interface H5PExercise {
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
  exercises: H5PExercise[];
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
    "shortDesc": "Judentum, Christentum, Islam, Hinduismus und Buddhismus im Vergleich: Stifter, heilige Schriften, Gottesbilder und Symbole.",
    "longDesc": "Weltweit bekennen sich Milliarden Menschen zu einer Religion. Die fünf großen Weltreligionen prägen Kulturen, Werte, Gesetze und das tägliche Leben. Während Judentum, Christentum und Islam monotheistisch sind (Glaube an einen einzigen Gott), basieren Hinduismus und Buddhismus auf östlichen Weisheits- und Wiedergeburtslehren.",
    "keyPoints": [
      "Monotheistische Religionen: Judentum (Tora, Abraham/Mose), Christentum (Bibel, Jesus Christus, Nächstenliebe), Islam (Koran, Prophet Mohammed, 5 Säulen des Islam)",
      "Östliche Religionen: Hinduismus (Veden, viele Gottheiten wie Brahma, Vishnu, Shiva, Karma und Samsara), Buddhismus (Siddhartha Gautama / Buddha, Vier Edle Wahrheiten, Achtfacher Pfad)",
      "Symbole: Davidsstern (Judentum), Kreuz (Christentum), Halbmond/Hilal (Islam), Om (Hinduismus), Rad der Lehre/Dharmachakra (Buddhismus)",
      "Gemeinsamkeiten: Die 'Goldene Regel' des respektvollen Umgangs miteinander findet sich in allen Weltreligionen"
    ],
    "exercises": [
      { id: "818", title: "Das Christentum", folder: "das-christentum-818" },
      { id: "819", title: "Das Judentum", folder: "das-judentum-819" },
      { id: "820", title: "Der Hinduismus", folder: "der-hinduismus-820" },
      { id: "821", title: "Der Islam", folder: "der-islam-821" },
      { id: "822", title: "Der Buddhismus", folder: "der-buddhismus-822" },
      { id: "5515", title: "Religion und ihre geographische Verteilung - Konflikte und Verständigung", folder: "religion-und-ihre-geographische-verteilung-konflikte-und-verstandigung-5515" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Weltreligionen+Religion&t=3752"
  },
  "die-bibel-altes-und-neues-testament": {
    "slug": "die-bibel-altes-und-neues-testament",
    "title": "Die Bibel: Altes und Neues Testament",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "Aufbau der Heiligen Schrift: Die 66 Bücher, Entstehungsgeschichte, Evangelien, Briefe und biblische Schöpfungserzählungen.",
    "longDesc": "Die Bibel ist das meistgedruckte und meistübersetzte Buch der Menschheitsgeschichte. Sie besteht aus zwei großen Hauptteilen: dem Alten Testament (Hebräische Bibel) und dem Neuen Testament, das vom Leben, Wirken, Sterben und der Auferstehung Jesu Christi berichtet.",
    "keyPoints": [
      "Aufbau: Altes Testament (39 Bücher: Geschichtsbücher, Psalmen, Propheten) und Neues Testament (27 Bücher: 4 Evangelien, Apostelgeschichte, Briefe, Offenbarung)",
      "Die vier Evangelisten: Matthäus, Markus, Lukas und Johannes berichten aus unterschiedlichen Perspektiven über das Wirken Jesu",
      "Schöpfungserzählungen: Biblische Schöpfungsberichte im Buch Genesis deuten die Welt als gute Schöpfung Gottes und den Menschen als Gottes Ebenbild",
      "Bibelübersetzungen: Martin Luthers Übersetzung ins Deutsche (1522/1534) prägte Sprache und Bildung nachhaltig"
    ],
    "exercises": [
      { id: "2392", title: "Die Bibel entdecken - Aufbau und Struktur", folder: "die-bibel-entdecken-aufbau-und-struktur-2392" },
      { id: "2393", title: "Die Vielfalt der Bibel", folder: "die-vielfalt-der-bibel-2393" },
      { id: "2394", title: "Die Weisheit der Sprüche und Psalmen", folder: "die-weisheit-der-spruche-und-psalmen-2394" },
      { id: "2395", title: "Biblische Geschichten - Schlüsselereignisse im Alten Testament", folder: "biblische-geschichten-schlusselereignisse-im-alten-testament-2395" },
      { id: "2396", title: "Die Propheten des Alten Testaments", folder: "die-propheten-des-alten-testaments-2396" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Bibel+Altes+Neues+Testament&t=3752"
  },
  "tod-trauer-und-auferstehung": {
    "slug": "tod-trauer-und-auferstehung",
    "title": "Tod, Trauer, Auferstehung & Ewiges Leben",
    "category": "Feste, Symbole, Tod & Auferstehung",
    "shortDesc": "Christliche Hoffnung auf Auferstehung, Jenseitsvorstellungen, Trauerphasen, Abschiedsrituale und Beerdigung.",
    "longDesc": "Fragen nach dem Sinn des Lebens, dem Sterben und dem, was danach kommt, berühren den Kern religiösen Denkens. Die christliche Osterbotschaft von der Auferstehung Jesu schenkt Hoffnung auf ewiges Leben und Trost im Umgang mit Trauer und Verlust.",
    "keyPoints": [
      "Auferstehungshoffnung: Zentraler Kern des christlichen Glaubens – der Tod ist nicht das endgültige Ende, sondern Übergang zum ewigen Leben bei Gott",
      "Karwoche und Ostern: Gründonnerstag (Letztes Abendmahl), Karfreitag (Kreuzigung und Tod Jesu), Ostersonntag (Feier der Auferstehung)",
      "Trauer und Abschied: Trauer ist ein wichtiger seelischer Prozess; kirchliche Rituale (Aussegnung, Beerdigung, Gebet) geben Halt und Raum für Abschied",
      "Jenseitsvorstellungen im Vergleich: Himmel, Auferstehung der Toten (Christentum/Islam) vs. Reinkarnation/Wiedergeburt (Hinduismus/Buddhismus)"
    ],
    "exercises": [
      { id: "2419", title: "Jesu letzte Tage auf Erden - das letzte Abendmahl und die Verhaftung", folder: "jesu-letzte-tage-auf-erden-das-letzte-abendmahl-und-die-verhaftung-2419" },
      { id: "2420", title: "Kreuzigung und Passion - das Opfer aus Liebe", folder: "kreuzigung-und-passion-das-opfer-aus-liebe-2420" },
      { id: "2421", title: "Der Kreuzweg - Jesu Opfer für die Menschheit", folder: "der-kreuzweg-jesu-opfer-fur-die-menschheit-2421" },
      { id: "2422", title: "Auferstehung und Himmelfahrt - Überwindung des Todes", folder: "auferstehung-und-himmelfahrt-berwindung-des-todes-2422" },
      { id: "2423", title: "Der Glaube als Quelle von Trost und Hoffnung", folder: "der-glaube-als-quelle-von-trost-und-hoffnung-2423" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Auferstehung+Ostern+Tod+Trauer&t=3752"
  },
  "religion-im-alltag-und-kirche": {
    "slug": "religion-im-alltag-und-kirche",
    "title": "Religion im Alltag, Gebet & Kirche in der Gesellschaft",
    "category": "Religion im Alltag & Gesellschaft",
    "shortDesc": "Gebet, Gottesdienst, Sakramente (Taufe, Abendmahl, Konfirmation/Firmung), Feiertage, Kirche und soziales Engagement.",
    "longDesc": "Wie wird Glaube im Alltag gelebt? Von täglichen Ritualen und Gebeten über wichtige Lebenswenden (Sakramente wie Taufe und Trauung) bis hin zu kirchlichen Hilfsorganisationen (Caritas, Diakonie) und dem interreligiösen Zusammenleben in einer säkularen Gesellschaft.",
    "keyPoints": [
      "Gelebter Glaube: Persönliches und gemeinschaftliches Gebet, Gottesdienstbesuch, Meditation, Nächstenliebe und soziales Handeln",
      "Sakramente und Lebenswenden: Taufe (Aufnahme in die Glaubensgemeinschaft), Abendmahl/Eucharistie, Konfirmation/Firmung, kirchliche Trauung",
      "Kirche in Deutschland & Europa: Evangelische und katholische Kirche, Diakonie und Caritas als größte nichtstaatliche Wohlfahrtsverbände",
      "Glaube und Beruf: Christliche Ethik im Arbeitsleben (Ehrlichkeit, Verantwortung, Gerechtigkeit und Fürsorge)",
      "Interreligiöser Dialog: Respektvoller Austausch zwischen Angehörigen verschiedener Religionen zur Förderung des Friedens"
    ],
    "exercises": [
      { id: "2451", title: "Nächstenliebe in der Praxis", folder: "nachstenliebe-in-der-praxis-2451" },
      { id: "2452", title: "Glaube im Alltag - die Bedeutung von Religion", folder: "glaube-im-alltag-die-bedeutung-von-religion-2452" },
      { id: "2453", title: "Glaube im Alltag", folder: "glaube-im-alltag-2453" },
      {
        "id": "2454",
        "title": "Glaube und Ethik im Berufsleben",
        "folder": "glaube-und-ethik-im-berufsleben-2454"
      },
      { id: "2455", title: "Religion in der modernen Welt", folder: "religion-in-der-modernen-welt-2455" },
      { id: "3514", title: "Die katholische Kirche in Deutschland", folder: "die-katholische-kirche-in-deutschland-3514" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Religion+Alltag+Kirche&t=3752"
  }
};
