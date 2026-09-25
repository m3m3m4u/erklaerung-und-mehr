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
  "weltreligionen-ueberblick-und-dialog": {
    "slug": "weltreligionen-ueberblick-und-dialog",
    "title": "Die Weltreligionen im Überblick & Dialog",
    "category": "Die Weltreligionen",
    "shortDesc": "Gemeinsamkeiten, Unterschiede, interreligiöser Dialog und Escape Room zu den Weltreligionen.",
    "longDesc": "Die großen Weltreligionen prägen das Wertesystem, die Kultur und das Zusammenleben von Milliarden Menschen weltweit. Der interreligiöse Dialog fördert gegenseitigen Respekt, Frieden und das Verständnis für das Eigene und das Fremde.",
    "keyPoints": [
      "Monotheismus: Judentum, Christentum und Islam glauben an einen einzigen Gott (abrahamitische Religionen)",
      "Östliche Traditionen: Hinduismus und Buddhismus mit Konzepten wie Karma, Dharma, Wiedergeburt und Meditation",
      "Heilige Schriften: Tora, Bibel, Koran, Veden und Tipitaka als schriftliche Offenbarungen und Lebensweisheiten",
      "Interreligiöser Dialog: Gemeinsame ethische Grundwerte (Goldene Regel) als Basis für weltweiten Frieden"
    ],
    "exercises": [
      {
        "id": "874",
        "title": "Escape Room: Weltreligionen",
        "folder": "geheimcode-escaperoom-welreligionen-874"
      },
      {
        "id": "2425",
        "title": "Dialog der Religionen",
        "folder": "dialog-der-religionen-2425"
      },
      {
        "id": "2427",
        "title": "Begegnungen mit Angehörigen anderer Religionen",
        "folder": "begegnungen-mit-angehorigen-anderer-religionen-2427"
      },
      {
        "id": "6545",
        "title": "Der interreligiöse Dialog",
        "folder": "der-interreligiose-dialog-2-6545"
      },
      {
        "id": "6715",
        "title": "Religionsfreiheit",
        "folder": "religionsfreiheit-6715"
      },
      {
        "id": "3321",
        "title": "Weltreligionen",
        "folder": "weltreligionen-3321"
      },
      {
        "id": "6745",
        "title": "Weltreligionen in Deutschland",
        "folder": "weltreligionen-in-deutschland-6745"
      },
      {
        "id": "6714",
        "title": "Religion und persönliche Identität",
        "folder": "religion-und-personliche-identitat-6714"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=weltreligionen&t=3752"
  },
  "judentum-glaube-tora-und-synagoge": {
    "slug": "judentum-glaube-tora-und-synagoge",
    "title": "Judentum: Glaube, Tora & Synagoge",
    "category": "Die Weltreligionen",
    "shortDesc": "Monotheismus, Tanach, Tora-Rolle, Synagoge, Rabbiner, Sabbat und Messiaserwartung.",
    "longDesc": "Das Judentum ist die älteste monotheistische Religion der Welt und die Wiege von Christentum und Islam. Im Zentrum des jüdischen Lebens stehen der Bund mit Gott, das Studium der Tora und die Feier des wöchentlichen Ruhetags Schabbat.",
    "keyPoints": [
      "Monotheismus: Schma Jisrael ('Höre, Israel, der Herr ist unser Gott, der Herr ist eins')",
      "Tora & Tanach: Die fünf Bücher Mose bilden die Tora, ergänzt durch die Propheten (Newi'im) und Schriften (Ketuwim)",
      "Schabbat: Wöchentlicher Ruhetag von Freitagabend bis Samstagabend zur Besinnung, Ruhe und familiären Gemeinschaft",
      "Synagoge: Versammlungs-, Gebets- und Lehrhaus mit Toraschrein (Aron ha-Kodesch) und ewigem Licht (Ner Tamid)",
      "Messiaserwartung: Hoffnung auf ein messianisches Zeitalter von weltweitem Frieden und Gerechtigkeit"
    ],
    "exercises": [
      {
        "id": "819",
        "title": "Das Judentum",
        "folder": "das-judentum-819"
      },
      {
        "id": "849",
        "title": "Das Judentum (Vertiefung)",
        "folder": "das-judentum-2-849"
      },
      {
        "id": "2629",
        "title": "Die Rolle der Synagoge",
        "folder": "buddhismus-in-der-modernen-welt-10-2629"
      },
      {
        "id": "2635",
        "title": "Die Bedeutung des Sabbats",
        "folder": "buddhismus-in-der-modernen-welt-16-2635"
      },
      {
        "id": "2636",
        "title": "Die Thora und ihre Bedeutung",
        "folder": "buddhismus-in-der-modernen-welt-17-2636"
      },
      {
        "id": "6528",
        "title": "Der Sabbat und seine Bedeutung",
        "folder": "der-sabbat-und-seine-bedeutung-6528"
      },
      {
        "id": "6576",
        "title": "Der Tanach (Heilige Schrift des Judentums) und seine Struktur",
        "folder": "der-tanach-heilige-schrift-des-judentums-und-seine-struktur-6576"
      },
      {
        "id": "6589",
        "title": "Die Bedeutung des Messias im Judentum",
        "folder": "die-bedeutung-des-messias-im-judentum-6589"
      },
      {
        "id": "6623",
        "title": "Die Tora und ihre Bedeutung (Erweiterung)",
        "folder": "die-tora-und-ihre-bedeutung-6623"
      },
      {
        "id": "6654",
        "title": "Gottesvorstellungen im Judentum",
        "folder": "gottesvorstellungen-im-judentum-6654"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=judentum+tora&t=3752"
  },
  "judentum-feste-lebenskreis-und-kultur": {
    "slug": "judentum-feste-lebenskreis-und-kultur",
    "title": "Judentum: Feste, Lebenskreis & Traditionen",
    "category": "Die Weltreligionen",
    "shortDesc": "Pessach, Chanukka, Jom Kippur, Bar/Bat Mizwa, jüdische Kunst, Musik und Diaspora.",
    "longDesc": "Der jüdische Festkalender richtet sich nach dem Mondjahr und verbindet historische Erinnerung mit religiöser Dankbarkeit. Übergangsriten wie die Bar Mizwa markieren die religiöse Mündigkeit junger Jüdinnen und Juden.",
    "keyPoints": [
      "Hohe Feiertage: Rosch ha-Schana (Neujahr) und Jom Kippur (Versöhnungstag, strengster Fasttag)",
      "Wallfahrts- & Freudenfeste: Pessach (Auszug aus Ägypten, Sederabend, ungesäuertes Brot), Schawuot, Sukkot (Laubhüttenfest)",
      "Lichterfest Chanukka: Achtarmiger Leuchter (Chanukkia), Erinnerung an die Wiedereinweihung des Tempels",
      "Lebenskreis: Beschneidung (Brit Mila), Bar Mizwa (Jungen mit 13) und Bat Mizwa (Mädchen mit 12)",
      "Kultur & Diaspora: Jüdische Musik (Klezmer), Kunst und das Leben in der weltweiten Zerstreuung (Diaspora)"
    ],
    "exercises": [
      {
        "id": "2637",
        "title": "Jüdische Musik und Kunst",
        "folder": "buddhismus-in-der-modernen-welt-18-2637"
      },
      {
        "id": "2638",
        "title": "Jüdische Feste und Traditionen",
        "folder": "buddhismus-in-der-modernen-welt-19-2638"
      },
      {
        "id": "2639",
        "title": "Jüdische Diaspora",
        "folder": "buddhismus-in-der-modernen-welt-20-2639"
      },
      {
        "id": "6426",
        "title": "Bar Mizwa und Bat Mizwa",
        "folder": "bar-mizwa-und-bat-mizwa-6426"
      },
      {
        "id": "6636",
        "title": "Feste im Judentum",
        "folder": "feste-im-judentum-6636"
      },
      {
        "id": "6678",
        "title": "Jüdische Feiertage wie Pessach, Jom Kippur und Chanukka",
        "folder": "judische-feiertage-wie-pessach-jom-kippur-und-chanukka-6678"
      },
      {
        "id": "6466",
        "title": "Das Talmud und andere wichtige religiöse Schriften",
        "folder": "das-talmud-und-andere-wichtige-religiose-schriften-6466"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=judentum+feste&t=3752"
  },
  "islam-glaube-koran-und-fuenf-saeulen": {
    "slug": "islam-glaube-koran-und-fuenf-saeulen",
    "title": "Islam: Glaube, Koran & die Fünf Säulen",
    "category": "Die Weltreligionen",
    "shortDesc": "Glaubensbekenntnis, fünf Gebetszeiten, Mekka, Moschee, Sunniten, Schiiten und Islam in Europa.",
    "longDesc": "Der Islam wurde im 7. Jahrhundert durch den Propheten Mohammed auf der Arabischen Halbinsel gestiftet. Das Wort 'Islam' bedeutet Ergebung in den Willen des einen Gottes (Allah).",
    "keyPoints": [
      "Die 5 Säulen des Islam: 1. Schahada (Glaubensbekenntnis), 2. Salat (tägliches Gebet), 3. Zakat (Almosensteuer), 4. Saum (Fasten im Ramadan), 5. Hadsch (Pilgerfahrt nach Mekka)",
      "Der Heilige Koran: Wortwörtliche Offenbarung Gottes an Mohammed in arabischer Sprache, gegliedert in 114 Suren",
      "Gebet & Moschee: Gebetsruf durch den Muezzin, Gebetsnische (Mihrab) Richtung Kaaba in Mekka, Minarett",
      "Hauptströmungen: Sunniten (ca. 85–90 %) und Schiiten (Nachfolger Alis) – Gemeinsamkeiten und historische Spaltung",
      "Islam in Deutschland & Europa: Religiöses Leben, Moscheegemeinden und gesellschaftliche Vielfalt"
    ],
    "exercises": [
      {
        "id": "821",
        "title": "Der Islam",
        "folder": "der-islam-821"
      },
      {
        "id": "851",
        "title": "Der Islam (Vertiefung)",
        "folder": "der-islam-2-851"
      },
      {
        "id": "2641",
        "title": "Die Geschichte des Islam in Europa",
        "folder": "buddhismus-in-der-modernen-welt-22-2641"
      },
      {
        "id": "2642",
        "title": "Die Bedeutung des Gebets im Islam",
        "folder": "buddhismus-in-der-modernen-welt-23-2642"
      },
      {
        "id": "2645",
        "title": "Sunniten vs. Schiiten - Unterschiede und Gemeinsamkeiten",
        "folder": "buddhismus-in-der-modernen-welt-26-2645"
      },
      {
        "id": "3503",
        "title": "Der Islam in Deutschland",
        "folder": "der-islam-in-deutschland-3503"
      },
      {
        "id": "6067",
        "title": "Mekka",
        "folder": "mekka-6067"
      },
      {
        "id": "6608",
        "title": "Die Offenbarungen des Korans und seine Struktur",
        "folder": "die-offenbarungen-des-korans-und-seine-struktur-6608"
      },
      {
        "id": "6660",
        "title": "Islamisches Gottesverständnis",
        "folder": "islamisches-gottesverstandnis-6660"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=islam+fuenf+saeulen&t=3752"
  },
  "islam-prophet-ramadan-und-traditionen": {
    "slug": "islam-prophet-ramadan-und-traditionen",
    "title": "Islam: Prophet Muhammad, Ramadan & Feste",
    "category": "Die Weltreligionen",
    "shortDesc": "Leben des Propheten Muhammad, Fastenmonat Ramadan, Opferfest, islamische Kunst und Jesus im Islam.",
    "longDesc": "Der Prophet Muhammad gilt Muslimen als das 'Siegel der Propheten'. Der Fastenmonat Ramadan und die großen Feste prägen das religiöse Jahr und den sozialen Zusammenhalt.",
    "keyPoints": [
      "Prophet Muhammad: Geboren um 570 n. Chr. in Mekka; erste Offenbarung in der Höhle Hira durch Erzengel Gabriel (Dschibril); Hidschra (Auswanderung nach Medina 622)",
      "Ramadan: 9. Monat des islamischen Kalenders; Fasten von der Morgendämmerung bis zum Sonnenuntergang (Iftar); Zeit der Besinnung und Wohltätigkeit",
      "Große Feste: Eid al-Fitr (Zuckerfest am Ende des Ramadan) und Eid al-Adha (Opferfest zum Höhepunkt der Hadsch)",
      "Islamische Kunst: Bilderverbot Gottes führte zur Blüte kunstvoller Kalligrafie, geometrischer Ornamente (Arabesken) und prachtvoller Kuppelbauten",
      "Jesus im Islam: Isa ibn Maryam wird als bedeutender Prophet und Gesandter Gottes verehrt (nicht als Sohn Gottes)"
    ],
    "exercises": [
      {
        "id": "2630",
        "title": "Ramadan und das Fasten",
        "folder": "buddhismus-in-der-modernen-welt-11-2630"
      },
      {
        "id": "2643",
        "title": "Islamische Kunst und Architektur",
        "folder": "buddhismus-in-der-modernen-welt-24-2643"
      },
      {
        "id": "2644",
        "title": "Mohammed - Leben und Lehren",
        "folder": "buddhismus-in-der-modernen-welt-25-2644"
      },
      {
        "id": "6524",
        "title": "Der Ramadan",
        "folder": "der-ramadan-6524"
      },
      {
        "id": "6674",
        "title": "Jesus im Islam",
        "folder": "jesus-im-islam-6674"
      },
      {
        "id": "6697",
        "title": "Leben und Lehren des Propheten Muhammad",
        "folder": "leben-und-lehren-des-propheten-muhammad-6697"
      },
      {
        "id": "4115",
        "title": "Muhammad",
        "folder": "muhammad-4115"
      },
      {
        "id": "6659",
        "title": "Islamische Feiertage",
        "folder": "islamische-feiertage-6659"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=islam+ramadan&t=3752"
  },
  "buddhismus-lehre-und-praxis": {
    "slug": "buddhismus-lehre-und-praxis",
    "title": "Buddhismus: Lehre, Meditation & Praxis",
    "category": "Die Weltreligionen",
    "shortDesc": "Siddhartha Gautama, Vier Edle Wahrheiten, Achtfacher Pfad, Karma, Nirvana und Meditation.",
    "longDesc": "Der Buddhismus entstand vor über 2.500 Jahren im Norden Indiens. Im Zentrum steht die Befreiung aus dem Kreislauf des Leidens (Samsara) durch Achtsamkeit, Meditation und ethisches Handeln.",
    "keyPoints": [
      "Siddhartha Gautama (der Buddha): Prinz, der durch die 'Vier Ausfahrten' (Alter, Krankheit, Tod, Asket) die Erleuchtung (Bodhi) unter dem Feigenbaum erlangte",
      "Vier Edle Wahrheiten: 1. Leben ist Leiden (Dukkha), 2. Ursache ist Begierde, 3. Leiden kann beendet werden, 4. Der Weg ist der Achtfache Pfad",
      "Der Edle Achtfache Pfad: Rechte Erkenntnis, Gesinnung, Rede, Handeln, Lebenserwerb, Streben, Achtsamkeit und Konzentration",
      "Nirvana: Zustand vollkommener Ruhe und Erlösung vom Wiedergeburten-Kreislauf",
      "Praxis: Meditation (Vipassana, Zen), Gewaltlosigkeit (Ahimsa) und Mitgefühl mit allen Lebewesen"
    ],
    "exercises": [
      {
        "id": "822",
        "title": "Der Buddhismus",
        "folder": "der-buddhismus-822"
      },
      {
        "id": "2620",
        "title": "Buddhismus in der modernen Welt",
        "folder": "buddhismus-in-der-modernen-welt-2620"
      },
      {
        "id": "2621",
        "title": "Buddhismus in der modernen Welt (Teil 2)",
        "folder": "buddhismus-in-der-modernen-welt-2-2621"
      },
      {
        "id": "2622",
        "title": "Buddhismus in der modernen Welt (Teil 3)",
        "folder": "buddhismus-in-der-modernen-welt-3-2622"
      },
      {
        "id": "2623",
        "title": "Buddhismus in der modernen Welt (Teil 4)",
        "folder": "buddhismus-in-der-modernen-welt-4-2623"
      },
      {
        "id": "3720",
        "title": "Buddha",
        "folder": "buddha-3720"
      },
      {
        "id": "6441",
        "title": "Buddhistische Feiertage",
        "folder": "buddhistische-feiertage-6441"
      },
      {
        "id": "2624",
        "title": "Buddhismus in der modernen Welt (Teil 5)",
        "folder": "buddhismus-in-der-modernen-welt-5-2624"
      },
      {
        "id": "buddhd",
        "title": "Buddhismus in Deutschland",
        "folder": "buddhismus-in-deutschland"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=buddhismus&t=3752"
  },
  "hinduismus-goetter-und-reinkarnation": {
    "slug": "hinduismus-goetter-und-reinkarnation",
    "title": "Hinduismus: Götterwelt, Karma & Reinkarnation",
    "category": "Die Weltreligionen",
    "shortDesc": "Brahma, Vishnu, Shiva, Veden, Kastenwesen, Seelenwanderung und der ewige Kreislauf.",
    "longDesc": "Der Hinduismus ist eine der ältesten Religionen der Menschheit. Er umfasst eine reiche Vielfalt an philosophischen Schulen, Ritualen und Göttergestalten, die Erscheinungsformen der universellen Weltenseele (Brahman) darstellen.",
    "keyPoints": [
      "Trimurti (Göttliche Dreieinigkeit): Brahma (der Schöpfer), Vishnu (der Erhalter) und Shiva (der Zerstörer und Erneuerer)",
      "Samsara & Karma: Ewiger Kreislauf von Geburt, Tod und Wiedergeburt; jede Tat erzeugt unvermeidbare Wirkungen (Karma)",
      "Atman & Moksha: Das ewige, unsterbliche Selbst (Atman) strebt nach Befreiung (Moksha) und Einswerdung mit Brahman",
      "Heilige Schriften: Veden (älteste Texte), Upanischaden und das Epos Bhagavad Gita",
      "Heiliger Fluss Ganges & Feste: Rituelles Bad zur Reinigung von Sünden; farbenfrohe Feste wie Diwali und Holi"
    ],
    "exercises": [
      {
        "id": "820",
        "title": "Der Hinduismus",
        "folder": "der-hinduismus-820"
      },
      {
        "id": "850",
        "title": "Der Hinduismus (Vertiefung)",
        "folder": "der-hinduismus-2-850"
      },
      {
        "id": "6657",
        "title": "Hinduistische Rituale",
        "folder": "hinduistische-rituale-6657"
      },
      {
        "id": "4186",
        "title": "Ramakrishna",
        "folder": "ramakrishna-4186"
      },
      {
        "id": "4156",
        "title": "Paramahansa Yogananda",
        "folder": "paramahansa-yogananda-4156"
      },
      {
        "id": "4058",
        "title": "Mahatma Gandhi",
        "folder": "mahatma-gandhi-4058"
      },
      {
        "id": "2472",
        "title": "Ruhe und Besinnung - Meditative Praktiken",
        "folder": "ruhe-und-besinnung-meditative-praktiken-2472"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=hinduismus&t=3752"
  },
  "die-bibel-entstehung-und-aufbau": {
    "slug": "die-bibel-entstehung-und-aufbau",
    "title": "Die Bibel: Entstehung, Aufbau & Vielfalt",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "Buch der Bücher, Kanonbildung, hebräische und griechische Urtexte, Frauen in der Bibel und Wissenschaft.",
    "longDesc": "Die Bibel ist eine ganze Bibliothek aus 66 (evangelisch) bzw. 73 (katholisch) Einzelschriften. Sie entstand über einen Zeitraum von mehr als tausend Jahren und wurde in Hebräisch, Aramäisch und Griechisch verfasst.",
    "keyPoints": [
      "Zwei Testamente: Altes Testament (Erster Bund mit Israel) und Neues Testament (Neuer Bund durch Jesus Christus)",
      "Textgattungen: Geschichtsbücher, Gesetzestexte, prophetische Schriften, Weisheitsliteratur, Psalmen, Evangelien und Briefe",
      "Bibelübersetzungen: Septuaginta (griechisch), Vulgata (lateinisch) und Martin Luthers bahnbrechende deutsche Übersetzung (1522/1534)",
      "Frauen in der Bibel: Prophetinnen und Zeuginnen wie Mirjam, Debora, Rut, Maria von Nazaret und Maria Magdalena",
      "Bibel und Naturwissenschaft: Die Bibel ist kein naturwissenschaftliches Lehrbuch, sondern Glaubens- und Sinnzeugnis"
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
        "id": "6591",
        "title": "Die Bibel als Buch der Bücher",
        "folder": "die-bibel-als-buch-der-bucher-6591"
      },
      {
        "id": "6628",
        "title": "Entstehung der Bibel",
        "folder": "entstehung-der-bibel-6628"
      },
      {
        "id": "6638",
        "title": "Frauen in der Bibel",
        "folder": "frauen-in-der-bibel-6638"
      },
      {
        "id": "6429",
        "title": "Bibel und Wissenschaft",
        "folder": "bibel-und-wissenschaft-6429"
      },
      {
        "id": "6430",
        "title": "Bibelverse über den Tod",
        "folder": "bibelverse-uber-den-tod-6430"
      },
      {
        "id": "6439",
        "title": "Bibelübersetzungen im Vergleich",
        "folder": "bibelubersetzungen-im-vergleich-6439"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=bibel+aufbau&t=3752"
  },
  "altes-testament-urgeschichte-und-schoepfung": {
    "slug": "altes-testament-urgeschichte-und-schoepfung",
    "title": "Altes Testament: Schöpfung, Bund & Urgeschichte",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "Schöpfungsberichte (Gen 1-2), Schöpfung & Evolution, Arche Noah, Abraham und der Gottesbund.",
    "longDesc": "Die biblische Urgeschichte erzählt in symbolkräftigen Bildern von der Entstehung der Welt, der Bestimmung des Menschen als Gottes Ebenbild, dem Sündenfall und dem Bund Gottes mit Abraham.",
    "keyPoints": [
      "Schöpfungserzählung: Sieben-Tage-Werk (Gen 1) betont die Güte der Schöpfung ('Und siehe, es war sehr gut')",
      "Schöpfung & Evolution: Theologie deutet das 'Warum' des Lebens (Sinn, Würde), die Evolutionstheorie das biologische 'Wie'",
      "Arche Noah & Regenbogen: Erzählung von der Sintflut und Gottes unkündbarem Bund mit der gesamten Schöpfung",
      "Abrahams Berufung: Stammvater der drei monotheistischen Weltreligionen; Auszug ins gelobte Land im Vertrauen auf Gottes Verheißung",
      "Gottesbilder im Alten Testament: Gerechter Richter, barmherziger Vater, Schöpfer und Wegbegleiter"
    ],
    "exercises": [
      {
        "id": "2394",
        "title": "Die Schöpfungsgeschichte - Die Erschaffung der Welt",
        "folder": "die-weisheit-der-spruche-und-psalmen-2394"
      },
      {
        "id": "6723",
        "title": "Schöpfung und Evolution",
        "folder": "schopfung-und-evolution-6723"
      },
      {
        "id": "4581",
        "title": "Noah – Die Geschichte der Arche",
        "folder": "noah-die-geschichte-der-arche-4581"
      },
      {
        "id": "4577",
        "title": "Genesis – Die Geschichte von Abraham",
        "folder": "genesis-die-geschichte-von-abraham-4577"
      },
      {
        "id": "6648",
        "title": "Gott im Alten und Neuen Testament",
        "folder": "gott-im-alten-und-neuen-testament-6648"
      },
      {
        "id": "6651",
        "title": "Gottesbilder in der Bibel",
        "folder": "gottesbilder-in-der-bibel-6651"
      },
      {
        "id": "6646",
        "title": "Glaube in der Bibel - Vertrauen auf Gott",
        "folder": "glaube-in-der-bibel-vertrauen-auf-gott-6646"
      },
      {
        "id": "3607",
        "title": "Adam – Figur aus der Bibel",
        "folder": "adam-figur-aus-der-bibel-3607"
      },
      {
        "id": "4136",
        "title": "Noah – Figur aus der Bibel",
        "folder": "noah-figur-aus-der-bibel-4136"
      },
      {
        "id": "3603",
        "title": "Abraham – Figur aus der Bibel",
        "folder": "abraham-figur-aus-der-bibel-3603"
      },
      {
        "id": "6437",
        "title": "Bewahrung der Schöpfung",
        "folder": "bewahrung-der-schopfung-6437"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schoepfung+urgeschichte&t=3752"
  },
  "altes-testament-mose-und-zehn-gebote": {
    "slug": "altes-testament-mose-und-zehn-gebote",
    "title": "Mose & Die Zehn Gebote",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "Auszug aus Ägypten (Exodus), Brennender Dornbusch, Gesetzgebung am Sinai und Zehn Gebote.",
    "longDesc": "Mose ist die zentrale Leitfigur des Alten Testaments. Durch ihn befreite Gott die Israeliten aus der Sklaverei in Ägypten und schloss am Berg Sinai einen Bund, dessen ethisches Herzstück der Dekalog ist.",
    "keyPoints": [
      "Befreiung aus Ägypten: Mose am brennenden Dornbusch ('Ich bin, der ich bin'), die zehn Plagen und der Durchzug durchs Rote Meer",
      "Dekalog (Zehn Gebote): Erste Tafel regelt das Verhältnis des Menschen zu Gott (Gebote 1–3), zweite Tafel das Verhältnis der Menschen untereinander (Gebote 4–10)",
      "Schutz des Lebens & der Gemeinschaft: Verbot von Mord, Ehebruch, Diebstahl, Falschaussage und Neid",
      "Bedeutung heute: Zeitlose Leitlinien für Gerechtigkeit, soziale Verantwortung und Menschenwürde"
    ],
    "exercises": [
      {
        "id": "2396",
        "title": "Mose und die Befreiung der Israeliten aus Ägypten",
        "folder": "die-propheten-des-alten-testaments-2396"
      },
      {
        "id": "4576",
        "title": "Exodus - Die Geschichte von Moses",
        "folder": "exodus-die-geschichte-von-moses-4576"
      },
      {
        "id": "4578",
        "title": "Exodus – Die Zehn Gebote",
        "folder": "exodus-die-zehn-gebote-4578"
      },
      {
        "id": "2397",
        "title": "Die Zehn Gebote (Teil 1)",
        "folder": "schlusselgestalten-des-alten-testaments-2397"
      },
      {
        "id": "2398",
        "title": "Die Zehn Gebote (Teil 2)",
        "folder": "die-erschaffung-der-welt-genesis-1-2-2398"
      },
      {
        "id": "2399",
        "title": "Die Zehn Gebote heute",
        "folder": "noah-und-die-arche-2399"
      },
      {
        "id": "2400",
        "title": "Die Zehn Gebote - LZK",
        "folder": "abraham-2400"
      },
      {
        "id": "2402",
        "title": "Die Zehn Gebote",
        "folder": "die-zehn-gebote-2402"
      },
      {
        "id": "6749",
        "title": "Zehn Gebote - damals und heute",
        "folder": "zehn-gebote-damals-und-heute-6749"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=mose+zehn+gebote&t=3752"
  },
  "altes-testament-helden-koenige-und-propheten": {
    "slug": "altes-testament-helden-koenige-und-propheten",
    "title": "David, Salomo, Jona & Die Propheten",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "David und Goliath, König Salomo, Jona und der Wal, biblische Psalmen und Prophetenworte.",
    "longDesc": "Spannende Geschichten von Königen und Propheten spiegeln menschliche Stärken und Schwächen wider: Davids Mut, Salomos Weisheit, Jonas Flucht und die Mahnworte der Propheten für soziale Gerechtigkeit.",
    "keyPoints": [
      "David gegen Goliath: Sieg des scheinbar Schwachen durch Gottvertrauen; David als König, Psalmendichter und Vorfahr des Messias",
      "König Salomo: Berühmt für Weisheit (salomonisches Urteil), Reichtum und den Bau des ersten Tempels in Jerusalem",
      "Jona und der Wal: Jona will vor Gottes Auftrag fliehen, wird von einem großen Fisch gerettet und predigt Buße in Ninive",
      "Die Propheten: Mahner und Fürsprecher der Armen (z. B. Jesaja, Jeremia, Amos); Kritik an Ausbeutung und Verheißung von Frieden",
      "Psalmen: Sammlung von 150 Gebeten und Liedern (Klage-, Dank-, Lob- und Vertrauenspsalmen)"
    ],
    "exercises": [
      {
        "id": "4582",
        "title": "David – Der Kampf gegen Goliath",
        "folder": "david-der-kampf-gegen-goliath-4582"
      },
      {
        "id": "2407",
        "title": "König David",
        "folder": "konig-david-2407"
      },
      {
        "id": "2408",
        "title": "König Salomo",
        "folder": "konig-salomo-2408"
      },
      {
        "id": "4579",
        "title": "Jona – Der Prophet und der große Fisch",
        "folder": "jona-der-prophet-und-der-groese-fisch-4579"
      },
      {
        "id": "2406",
        "title": "Jona und der Wal",
        "folder": "jona-und-der-wal-2406"
      },
      {
        "id": "6612",
        "title": "Die Propheten",
        "folder": "die-propheten-6612"
      },
      {
        "id": "6711",
        "title": "Psalmen - Gebete und Lieder",
        "folder": "psalmen-gebete-und-lieder-6711"
      },
      {
        "id": "2395",
        "title": "Biblische Geschichten - Schlüsselereignisse im Alten Testament",
        "folder": "biblische-geschichten-schlusselereignisse-im-alten-testament-2395"
      },
      {
        "id": "2403",
        "title": "Das Buch Hiob",
        "folder": "das-buch-hiob-2403"
      },
      {
        "id": "3768",
        "title": "Daniel – Figur aus der Bibel",
        "folder": "daniel-figur-aus-der-bibel-3768"
      },
      {
        "id": "3810",
        "title": "Elija – Figur aus der Bibel",
        "folder": "elijah-figur-aus-der-bibel-3810"
      },
      {
        "id": "4012",
        "title": "Jeremia – Figur aus der Bibel",
        "folder": "jeremiah-figur-aus-der-bibel-4012"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=david+salomo+propheten&t=3752"
  },
  "jesus-von-nazaret-leben-und-botschaft": {
    "slug": "jesus-von-nazaret-leben-und-botschaft",
    "title": "Jesus von Nazaret: Leben, Botschaft & Christusbilder",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "Historischer Jesus, Geburt in Betlehem, Taufe im Jordan, Verklärung, Christusbilder in Kunst und Film.",
    "longDesc": "Jesus von Nazaret lebte vor 2.000 Jahren im römisch besetzten Judäa. Er verkündete das anbrechende Reich Gottes, wandte sich Ausgestoßenen zu und forderte Nächsten- und Feindesliebe.",
    "keyPoints": [
      "Historischer Jesus: Aufgewachsen in Galiläa als Zimmermannssohn; Wanderprediger mit messianischer Vollmacht",
      "Geburt Jesu: Weihnachtsberichte nach Lukas (Krippe, Hirten) und Matthäus (Sterndeuter, Flucht nach Ägypten)",
      "Taufe im Jordan: Johannes der Täufer tauft Jesus; Beginn des öffentlichen Wirkens Jesu",
      "Christologische Hoheitstitel: Messias/Christus (der Gesalbte), Sohn Gottes, Menschensohn, Heiland",
      "Rezeption: Wandelnde Jesusbilder in Kunst, Literatur und Monumentalfilmen im Lauf der Epochen"
    ],
    "exercises": [
      {
        "id": "818",
        "title": "Das Christentum",
        "folder": "das-christentum-818"
      },
      {
        "id": "2409",
        "title": "Jesus von Nazaret - Sein Leben und Wirken",
        "folder": "die-geburtsgeschichte-jesu-2409"
      },
      {
        "id": "2410",
        "title": "Die Geburt Jesu",
        "folder": "die-geburt-jesu-einzigartige-nacht-in-bethlehem-2410"
      },
      {
        "id": "6747",
        "title": "Wer war Jesus",
        "folder": "wer-war-jesus-6747"
      },
      {
        "id": "6673",
        "title": "Jesus im historischen Kontext",
        "folder": "jesus-im-historischen-kontext-6673"
      },
      {
        "id": "6670",
        "title": "Jesus - Gott oder Mensch",
        "folder": "jesus-gott-oder-mensch-6670"
      },
      {
        "id": "6671",
        "title": "Jesus als Lehrer und Prophet",
        "folder": "jesus-als-lehrer-und-prophet-6671"
      },
      {
        "id": "4588",
        "title": "Die Taufe Jesu - Jesus wird getauft",
        "folder": "die-taufe-jesu-jesus-wird-getauft-4588"
      },
      {
        "id": "4591",
        "title": "Die Verklärung Jesu - Jesus wird verklärt",
        "folder": "die-verklarung-jesu-jesus-wird-verklart-4591"
      },
      {
        "id": "6450",
        "title": "Christusbilder im Neuen Testament",
        "folder": "christusbilder-im-neuen-testament-6450"
      },
      {
        "id": "6675",
        "title": "Jesus in der Kunst",
        "folder": "jesus-in-der-kunst-6675"
      },
      {
        "id": "6758",
        "title": "Jesus im Film",
        "folder": "jesus-im-film-2-6758"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=jesus+von+nazaret&t=3752"
  },
  "jesu-gleichnisse-und-bergpredigt": {
    "slug": "jesu-gleichnisse-und-bergpredigt",
    "title": "Jesu Gleichnisse, Wunder & Die Bergpredigt",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "Gleichnisse vom Reich Gottes, Barmherziger Samariter, Seligpreisungen, Vaterunser und Wundererzählungen.",
    "longDesc": "In Gleichnissen sprach Jesus in Bildern aus der Lebenswelt seiner Zuhörer (Bauern, Fischer, Hirten). In der Bergpredigt (Mt 5-7) legte er die radikale Ethik der Nächsten- und Feindesliebe dar.",
    "keyPoints": [
      "Gleichnisse: Bildhafte Erzählungen zur Veranschaulichung des Reiches Gottes (z. B. Verlorener Sohn, Senfkorn, Sämann)",
      "Der barmherzige Samariter: Nächstenliebe kennt keine nationalen, religiösen oder gesellschaftlichen Grenzen",
      "Die Bergpredigt: Seligpreisungen der Armen, Sanftmütigen und Friedensstifter; Salz der Erde und Licht der Welt",
      "Das Vaterunser: Das zentrale christliche Gebet, von Jesus selbst gelehrt",
      "Wundererzählungen: Heilungswunder, Totenerweckungen und Naturwunder als Zeichen der heilenden Gegenwart Gottes"
    ],
    "exercises": [
      {
        "id": "6665",
        "title": "Jesu Gleichnisse",
        "folder": "jesu-gleichnisse-6665"
      },
      {
        "id": "2411",
        "title": "Gleichnisse Jesu",
        "folder": "begegnung-mit-der-samariterin-am-brunnen-2411"
      },
      {
        "id": "2412",
        "title": "Der barmherzige Samariter",
        "folder": "der-barmherzige-samariter-2412"
      },
      {
        "id": "2413",
        "title": "Die Botschaft der Bergpredigt",
        "folder": "die-botschaft-der-bergpredigt-2413"
      },
      {
        "id": "6590",
        "title": "Die Bergpredigt",
        "folder": "die-bergpredigt-6590"
      },
      {
        "id": "4589",
        "title": "Die Bergpredigt - Jesu Lehren und das Vaterunser",
        "folder": "die-bergpredigt-jesu-lehren-und-das-vaterunser-4589"
      },
      {
        "id": "2415",
        "title": "Wundererzählungen Jesu",
        "folder": "wunder-und-lehren-jesu-offentliches-wirken-2415"
      },
      {
        "id": "2416",
        "title": "Wundererzählungen Jesu - Teil 2",
        "folder": "wunder-und-zeichen-von-jesus-2416"
      },
      {
        "id": "2417",
        "title": "Jesu Heilungen - Zeichen seiner Liebe und Macht",
        "folder": "jesu-heilungen-zeichen-seiner-liebe-und-macht-2417"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=bergpredigt+gleichnisse&t=3752"
  },
  "passion-und-auferstehung-jesu": {
    "slug": "passion-und-auferstehung-jesu",
    "title": "Passion, Kreuzigung & Auferstehung Jesu",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "Palmsonntag, Letztes Abendmahl, Gethsemane, Verurteilung, Kreuzigung auf Golgota und Ostermorgen.",
    "longDesc": "Das Leiden, Sterben und die Auferstehung Jesu Christi bilden das theologische Herzstück des christlichen Glaubens. Sie deuten das Kreuz als Zeichen bedingungsloser Liebe und Überwindung des Todes.",
    "keyPoints": [
      "Einzug in Jerusalem: Jesus reitet auf einem Esel ein; Hosianna-Rufe und Palmzweige",
      "Das letzte Abendmahl: Einsetzung der Eucharistie ('Das ist mein Leib, das ist mein Blut'); Fußwaschung",
      "Gethsemane & Verrat: Todesangst Jesu am Ölberg; Verrat durch Judas Iskariot mit einem Kuss",
      "Kreuzigung auf Golgota: Verurteilung durch Pontius Pilatus; Jesu Kreuzigung und Tod ('Es ist vollbracht')",
      "Auferstehung am dritten Tag: Das leere Grab und die Erscheinungen des Auferstandenen vor den Jüngern"
    ],
    "exercises": [
      {
        "id": "4592",
        "title": "Der Einzug in Jerusalem - Jesus reitet in Jerusalem ein",
        "folder": "der-einzug-in-jerusalem-jesus-reitet-in-jerusalem-ein-4592"
      },
      {
        "id": "4593",
        "title": "Das letzte Abendmahl - Jesus stiftet das Abendmahl",
        "folder": "das-letzte-abendmahl-jesus-stiftet-das-abendmahl-4593"
      },
      {
        "id": "2419",
        "title": "Jesu letzte Tage auf Erden - Das letzte Abendmahl und die Verhaftung",
        "folder": "jesu-letzte-tage-auf-erden-das-letzte-abendmahl-und-die-verhaftung-2419"
      },
      {
        "id": "2420",
        "title": "Kreuzigung und Passion - Das Opfer aus Liebe",
        "folder": "kreuzigung-und-passion-das-opfer-aus-liebe-2420"
      },
      {
        "id": "4594",
        "title": "Die Kreuzigung Jesu - Jesus wird gekreuzigt",
        "folder": "die-kreuzigung-jesu-jesus-wird-gekreuzigt-4594"
      },
      {
        "id": "2422",
        "title": "Auferstehung und Himmelfahrt - Überwindung des Todes",
        "folder": "auferstehung-und-himmelfahrt-berwindung-des-todes-2422"
      },
      {
        "id": "6587",
        "title": "Die Auferstehung",
        "folder": "die-auferstehung-6587"
      },
      {
        "id": "4595",
        "title": "Die Auferstehung Jesu - Jesus ersteht von den Toten auf",
        "folder": "die-auferstehung-jesu-jesus-ersteht-von-den-toten-auf-4595"
      },
      {
        "id": "6666",
        "title": "Jesu Tod und Auferstehung",
        "folder": "jesu-tod-und-auferstehung-6666"
      },
      {
        "id": "541",
        "title": "Das Musical Jesus Christ Superstar",
        "folder": "das-musical-jesus-christ-superstar-541"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=passion+auferstehung&t=3752"
  },
  "apostel-evangelien-und-urkirche": {
    "slug": "apostel-evangelien-und-urkirche",
    "title": "Die vier Evangelien, Apostel & Paulus",
    "category": "Bibel & Religiöse Schriften",
    "shortDesc": "Matthäus, Markus, Lukas, Johannes, Jüngerberufung, Pfingsten und Paulus' Missionsreisen.",
    "longDesc": "Nach Jesu Auferstehung verbreiteten die Apostel die Frohe Botschaft im Römischen Reich. Aus dem Pharisäer Saulus wurde durch das Damaskuserlebnis der Völkerapostel Paulus.",
    "keyPoints": [
      "Die vier Evangelisten: Markus (ältestes Evangelium), Matthäus (Jesus als neuer Mose), Lukas (Barmherzigkeit), Johannes (theologische Tiefe)",
      "Die zwölf Apostel: Petrus ('Fels der Kirche'), Johannes, Jakobus, Andreas u. a. als Augenzeugen und Gesandte",
      "Urkirche in Jerusalem: Gemeinschaft der ersten Christen; Gütergemeinschaft, Gebet und Brotbrechen",
      "Apostel Paulus: Bekehrung vor Damaskus; vier große Missionsreisen im Mittelmeerraum und wegweisende Gemeindebriefe"
    ],
    "exercises": [
      {
        "id": "6583",
        "title": "Die 4 Evangelien",
        "folder": "die-4-evangelien-6583"
      },
      {
        "id": "2414",
        "title": "Die Berufung der Jünger",
        "folder": "die-berufung-der-junger-2414"
      },
      {
        "id": "6585",
        "title": "Die Apostel Jesu",
        "folder": "die-apostel-jesu-6585"
      },
      {
        "id": "4580",
        "title": "Apostelgeschichte – Paulus und seine Reisen",
        "folder": "apostelgeschichte-paulus-und-seine-reisen-4580"
      },
      {
        "id": "6708",
        "title": "Paulus und seine Briefe",
        "folder": "paulus-und-seine-briefe-6708"
      },
      {
        "id": "6586",
        "title": "Die Apostelgeschichte",
        "folder": "die-apostelgeschichte-6586"
      },
      {
        "id": "6607",
        "title": "Die Offenbarung des Johannes",
        "folder": "die-offenbarung-des-johannes-6607"
      },
      {
        "id": "2439",
        "title": "Der Weg zum Glauben - Grundlagen des Christentums",
        "folder": "der-weg-zum-glauben-grundlagen-des-christentums-2439"
      },
      {
        "id": "2440",
        "title": "Glaube und Gemeinschaft - Das Herzstück des Christentums",
        "folder": "glaube-und-gemeinschaft-das-herzstuck-des-christentums-2440"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=evangelien+apostel&t=3752"
  },
  "advent-weihnachten-und-epiphanias": {
    "slug": "advent-weihnachten-und-epiphanias",
    "title": "Advent, Weihnachten & Dreikönig",
    "category": "Feste, Symbole, Tod & Auferstehung",
    "shortDesc": "Adventszeit, Adventskranz, Heiliger Nikolaus, Christfest, Krippe und Heilige Drei Könige.",
    "longDesc": "Der Festkreis um Weihnachten beginnt mit dem Advent als Zeit der Erwartung und Vorbereitung. An Weihnachten feiert die Christenheit die Menschwerdung Gottes (Inkarnation) in einem neugeborenen Kind.",
    "keyPoints": [
      "Advent (lat. adventus = Ankunft): Vier Sonntage vor dem 25. Dezember; Symbole: Adventskranz mit 4 Kerzen, Adventskalender",
      "Heiliger Nikolaus (6. Dezember): Bischof von Myra, bekannt für Barmherzigkeit und Großzügigkeit gegenüber Notleidenden",
      "Weihnachten (24.–26. Dezember): Feier der Geburt Christi; Christmette, Krippenspiel, Tannenbaum als Lebenssymbol",
      "Heiliger Stephanus (26. Dezember): Erster christlicher Märtyrer (Erzmärtyrer)",
      "Epiphanias / Dreikönigstag (6. Januar): Erscheinung des Herrn; Sternsinger sammeln Spenden und schreiben den Segen 'C+M+B' an Türen"
    ],
    "exercises": [
      {
        "id": "2430",
        "title": "Advent und Weihnachten",
        "folder": "schlusselereignisse-der-kirchengeschichte-im-berblick-2430"
      },
      {
        "id": "6476",
        "title": "Der Advent",
        "folder": "der-advent-6476"
      },
      {
        "id": "2431",
        "title": "Weihnachten",
        "folder": "die-apostelgeschichte-die-verbreitung-des-evangeliums-2431"
      },
      {
        "id": "6744",
        "title": "Weihnachten - Ursprung und Bedeutung",
        "folder": "weihnachten-ursprung-und-bedeutung-6744"
      },
      {
        "id": "6496",
        "title": "Der Heilige Nikolaus Vom Bischof zum Gabenbringer",
        "folder": "der-heilige-nikolaus-vom-bischof-zum-gabenbringer-6496"
      },
      {
        "id": "6498",
        "title": "Der heilige Stephan und der 26. Dezember",
        "folder": "der-heilige-stephan-und-der-26-dezember-6498"
      },
      {
        "id": "2432",
        "title": "Der Dreikönigstag",
        "folder": "das-christentum-breitet-sich-aus-2432"
      },
      {
        "id": "6664",
        "title": "Jesu Geburt - Weihnachtsevangelien",
        "folder": "jesu-geburt-weihnachtsevangelien-6664"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=advent+weihnachten&t=3752"
  },
  "fastenzeit-und-karwoche": {
    "slug": "fastenzeit-und-karwoche",
    "title": "Fastenzeit, Palmsonntag & Karwoche",
    "category": "Feste, Symbole, Tod & Auferstehung",
    "shortDesc": "Aschermittwoch, 40 Tage Fastenzeit, Palmsonntag, Gründonnerstag und Karfreitag.",
    "longDesc": "Die 40-tägige Fastenzeit erinnert an Jesu Fasten in der Wüste und dient der inneren Einkehr und Umkehr. Die Karwoche (stille Woche) bildet den Höhepunkt der Vorbereitung auf Ostern.",
    "keyPoints": [
      "Aschermittwoch: Beginn der 40-tägigen Fastenzeit mit dem Aschenkreuz als Vergänglichkeitsmahnung",
      "Fasten als Herausforderung: Verzicht auf Genussmittel, Konsum oder digitale Medien zur Neuorientierung des Lebens",
      "Palmsonntag: Einzug Jesu in Jerusalem mit Palmweihe und Prozession",
      "Gründonnerstag: Gedenken an das Letzte Abendmahl mit der Fußwaschung; Verstummen der Kirchenglocken",
      "Karfreitag (althochdt. kara = Trauer, Klage): Strenger Fast- und Feiertag zum Gedenken an Jesu Kreuzestod zur Todesstunde (15 Uhr)"
    ],
    "exercises": [
      {
        "id": "2433",
        "title": "Die Fastenzeit",
        "folder": "papste-und-klerus-im-wandel-der-zeit-2433"
      },
      {
        "id": "6595",
        "title": "Die Fastenzeit im Christentum",
        "folder": "die-fastenzeit-im-christentum-6595"
      },
      {
        "id": "6634",
        "title": "Fastenzeit als Herausforderung",
        "folder": "fastenzeit-als-herausforderung-6634"
      },
      {
        "id": "6635",
        "title": "Fastenzeit in verschiedenen Religionen",
        "folder": "fastenzeit-in-verschiedenen-religionen-6635"
      },
      {
        "id": "6510",
        "title": "Der Palmsonntag",
        "folder": "der-palmsonntag-6510"
      },
      {
        "id": "6492",
        "title": "Der Gründonnerstag",
        "folder": "der-grundonnerstag-6492"
      },
      {
        "id": "2434",
        "title": "Karfreitag",
        "folder": "augustinus-von-hippo-2434"
      },
      {
        "id": "6502",
        "title": "Der Karfreitag",
        "folder": "der-karfreitag-6502"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=fastenzeit+karwoche&t=3752"
  },
  "ostern-pfingsten-und-kirchenjahr": {
    "slug": "ostern-pfingsten-und-kirchenjahr",
    "title": "Ostern, Pfingsten & Das Kirchenjahr",
    "category": "Feste, Symbole, Tod & Auferstehung",
    "shortDesc": "Osternacht, Auferstehung, Himmelfahrt, Pfingsten, Fronleichnam, Erntedank, Allerheiligen und Kirchenjahr.",
    "longDesc": "Ostern ist das höchste und älteste Fest der Christenheit. Mit Christi Himmelfahrt und der Sendung des Heiligen Geistes an Pfingsten schließt der Osterfestkreis ab.",
    "keyPoints": [
      "Ostern: Feier der Auferstehung Jesu Christi; Osterfeuer, Osterkerze ('Lumen Christi') und Osterwasser",
      "Christi Himmelfahrt (40 Tage nach Ostern): Rückkehr Jesu zum Vater im Himmel",
      "Pfingsten (50 Tage nach Ostern): Ausgießung des Heiligen Geistes über die Apostel; 'Geburtstag der Kirche'",
      "Fronleichnam: Fest des heiligsten Leibes und Blutes Christi mit Prozessionen durch Straßen und Fluren",
      "Herbstfeste & Jahreskreis: Erntedankfest, Allerheiligen (1. November), Allerseelen (2. November) und Totensonntag"
    ],
    "exercises": [
      {
        "id": "2435",
        "title": "Ostern",
        "folder": "konzile-und-meilensteine-des-glaubens-2435"
      },
      {
        "id": "6564",
        "title": "Das Osterfest",
        "folder": "das-osterfest-2-6564"
      },
      {
        "id": "2436",
        "title": "Christi Himmelfahrt",
        "folder": "christliche-kunst-und-symbole-2436"
      },
      {
        "id": "6700",
        "title": "Mariä Himmelfahrt",
        "folder": "maria-himmelfahrt-6700"
      },
      {
        "id": "2437",
        "title": "Pfingsten",
        "folder": "christliche-symbole-in-der-architektur-2437"
      },
      {
        "id": "2438",
        "title": "Fronleichnam",
        "folder": "einfluss-auf-kultur-und-kunst-2438"
      },
      {
        "id": "6641",
        "title": "Fronleichnam (Vertiefung)",
        "folder": "fronleichnam-6641"
      },
      {
        "id": "6630",
        "title": "Erntedank",
        "folder": "erntedank-6630"
      },
      {
        "id": "6425",
        "title": "Allerheiligen und Allerselen",
        "folder": "allerheiligen-und-allerselen-6425"
      },
      {
        "id": "6655",
        "title": "Halloween, Totensonntag und Allerheiligen",
        "folder": "halloween-totensonntag-und-allerheiligen-6655"
      },
      {
        "id": "5331",
        "title": "Das Kirchenjahr",
        "folder": "das-kirchenjahr-5331"
      },
      {
        "id": "6688",
        "title": "Kirchenjahr und seine Feste",
        "folder": "kirchenjahr-und-seine-feste-6688"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kirchenjahr+ostern&t=3752"
  },
  "tod-trauer-und-seelsorge": {
    "slug": "tod-trauer-und-seelsorge",
    "title": "Tod, Trauer, Bestattung & Seelsorge",
    "category": "Feste, Symbole, Tod & Auferstehung",
    "shortDesc": "Endlichkeit des Lebens, Trauerphasen, christliche Bestattung, Seelsorge und Hospizbegleitung.",
    "longDesc": "Die Konfrontation mit der Endlichkeit des eigenen Lebens und dem Verlust geliebter Menschen gehört zu den tiefgreifendsten Erfahrungen. Christliche Seelsorge spendet Trost und Hoffnung im Vertrauen auf Gottes Beistand.",
    "keyPoints": [
      "Umgang mit Endlichkeit: Sterben und Tod als unausweichlicher Teil des irdischen Lebens",
      "Trauerprozesse: Phasen der Trauer (Nicht-Wahrhaben-Wollen, aufbrechende Emotionen, Suchen/Sich-Trennen, neuer Selbstbezug)",
      "Christliche Bestattung: Begräbnisliturgie, Segnung des Grabes und Trostworte der Auferstehungshoffnung",
      "Seelsorge: Begleitung Schwerstkranker, Sterbender und Angehöriger in Krankenhäusern und Hospizen",
      "Hoffnung über den Tod: Glaube an die unzerstörbare Würde des Menschen bei Gott"
    ],
    "exercises": [
      {
        "id": "2404",
        "title": "Trauer und Begleitung",
        "folder": "die-geschichte-von-ruth-2404"
      },
      {
        "id": "6733",
        "title": "Umgang mit dem Tod",
        "folder": "umgang-mit-dem-tod-6733"
      },
      {
        "id": "6427",
        "title": "Beerdigung - Hoffnung über den Tod",
        "folder": "beerdigung-hoffnung-uber-den-tod-6427"
      },
      {
        "id": "6577",
        "title": "Der Tod im christlichen Glauben",
        "folder": "der-tod-im-christlichen-glauben-6577"
      },
      {
        "id": "6696",
        "title": "Leben nach dem Tod im christlichen Glauben",
        "folder": "leben-nach-dem-tod-im-christlichen-glauben-6696"
      },
      {
        "id": "6725",
        "title": "Seelsorge und Begleitung",
        "folder": "seelsorge-und-begleitung-6725"
      },
      {
        "id": "6640",
        "title": "Friedhöfe und ihre Symbolik",
        "folder": "friedhofe-und-ihre-symbolik-6640"
      },
      {
        "id": "6731",
        "title": "Trauerphasen",
        "folder": "trauerphasen-6731"
      },
      {
        "id": "4419",
        "title": "Der Umgang mit dem Tod",
        "folder": "der-umgang-mit-dem-tod-4419"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=tod+trauer+seelsorge&t=3752"
  },
  "jenseits-himmel-und-ewiges-leben": {
    "slug": "jenseits-himmel-und-ewiges-leben",
    "title": "Jenseits, Auferstehung & Ewiges Leben",
    "category": "Feste, Symbole, Tod & Auferstehung",
    "shortDesc": "Auferstehung der Toten, Himmel, Hölle, Fegefeuer und Jenseitsvorstellungen weltweit.",
    "longDesc": "Was kommt nach dem Tod? Religionen und Kulturen haben faszinierende Vorstellungen über ein Fortleben der Seele entwickelt: Von Reinkarnation über Ahnenkult bis zur Auferstehung bei Gott.",
    "keyPoints": [
      "Christliche Auferstehung: Keine bloße Seelenwanderung, sondern leibliche Verwandlung und Vollendung des Menschen bei Gott",
      "Klassische Jenseitsbilder: Himmel (vollendete Gemeinschaft mit Gott), Hölle (ewige Gottesferne), Fegefeuer/Purgatorium (katholische Reinigung vor der Gottesschau)",
      "Jenseitsvorstellungen weltweit: Schattenreich im antiken Griechenland (Hades), Walhall der Germanen, Wiedergeburt im Hinduismus, Paradies im Islam",
      "Künstlerische Darstellungen: Das Jüngste Gericht in mittelalterlichen Kathedralen, Dante Alighieris Göttliche Komödie"
    ],
    "exercises": [
      {
        "id": "2405",
        "title": "Auferstehung und Ewiges Leben",
        "folder": "der-prophet-jeremia-2405"
      },
      {
        "id": "6662",
        "title": "Jenseitsvorstellungen weltweit",
        "folder": "jenseitsvorstellungen-weltweit-6662"
      },
      {
        "id": "6656",
        "title": "Himmel, Hölle, Fegefeuer",
        "folder": "himmel-holle-fegefeuer-6656"
      },
      {
        "id": "6652",
        "title": "Gottesbilder in Kunst und Musik",
        "folder": "gottesbilder-in-kunst-und-musik-6652"
      },
      {
        "id": "6706",
        "title": "Nahtoderfahrungen",
        "folder": "nahtoderfahrungen-6706"
      },
      {
        "id": "6446",
        "title": "Christliche Hoffnung auf Auferstehung",
        "folder": "christliche-hoffnung-auf-auferstehung-6446"
      },
      {
        "id": "6443",
        "title": "Christi Himmelfahrt",
        "folder": "christi-himmelfahrt-6443"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=jenseits+ewiges+leben&t=3752"
  },
  "sakramente-der-initiation": {
    "slug": "sakramente-der-initiation",
    "title": "Sakramente: Taufe, Firmung & Konfirmation",
    "category": "Religion im Alltag & Gesellschaft",
    "shortDesc": "Sichtbare Zeichen unsichtbarer Gnade: Taufe, Firmung, Konfirmation und sakramentale Kunst.",
    "longDesc": "Sakramente sind von Christus eingesetzte Heilszeichen, die den Lebensweg von Christen begleiten. Taufe und Firmung (katholisch) bzw. Konfirmation (evangelisch) begründen die Aufnahme in die Kirche.",
    "keyPoints": [
      "Sakramentsbegriff: Sichtbares Zeichen der unsichtbaren Gnade Gottes (signum efficax)",
      "Taufe: Erstes und grundlegendes Sakrament; Übergießen mit Wasser im Namen des Vaters, des Sohnes und des Heiligen Geistes; Taufkerze, Taufkleid",
      "Firmung: Katholisches Sakrament der Reife; Salbung mit Chrisamöl und Handauflegung zur Stärkung durch den Heiligen Geist",
      "Konfirmation: Evangelische Bekräftigung des Taufbundes im Jugendalter mit Zulassung zum Abendmahl",
      "Siebenzahl der Sakramente: Katholische Kirche kennt 7 Sakramente, evangelische Kirche 2 (Taufe und Abendmahl)"
    ],
    "exercises": [
      {
        "id": "6618",
        "title": "Die Sakramente",
        "folder": "die-sakramente-6618"
      },
      {
        "id": "2476",
        "title": "Die Heiligen Sakramente in der Kunst dargestellt",
        "folder": "die-heiligen-sakramente-in-der-kunst-dargestellt-2476"
      },
      {
        "id": "6622",
        "title": "Die Taufe",
        "folder": "die-taufe-6622"
      },
      {
        "id": "2477",
        "title": "Die Bedeutung der Taufe",
        "folder": "die-bedeutung-der-taufe-2477"
      },
      {
        "id": "2478",
        "title": "Die Bedeutung der Taufe - Neue Wege des Glaubens",
        "folder": "die-bedeutung-der-taufe-neue-wege-des-glaubens-2478"
      },
      {
        "id": "2482",
        "title": "Die Firmung",
        "folder": "die-firmung-2482"
      },
      {
        "id": "2483",
        "title": "Die Firmung - Stärkung durch den Heiligen Geist",
        "folder": "die-firmung-starkung-durch-den-heiligen-geist-2483"
      },
      {
        "id": "6596",
        "title": "Die Firmung (Vertiefung)",
        "folder": "die-firmung-2-6596"
      },
      {
        "id": "6602",
        "title": "Die Konfirmation",
        "folder": "die-konfirmation-6602"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=taufe+firmung+sakramente&t=3752"
  },
  "eucharistie-kommunion-und-heilsdienste": {
    "slug": "eucharistie-kommunion-und-heilsdienste",
    "title": "Eucharistie, Erstkommunion & Weihesakramente",
    "category": "Religion im Alltag & Gesellschaft",
    "shortDesc": "Eucharistiefeier, Erstkommunionvorbereitung, Krankensalbung, Priesterweihe und Weiheamt.",
    "longDesc": "Die Eucharistie ist 'Quelle und Höhepunkt des ganzen christlichen Lebens'. Neben der Feier des Herrenmahls spenden Heilungs- und Weihesakramente Stärkung in Krankheit und Indienstnahme für die Gemeinde.",
    "keyPoints": [
      "Eucharistie (Danksagung): Wandlung von Brot und Wein in Leib und Blut Christi (Transsubstantiation)",
      "Erstkommunion: Festlicher Empfang des Sakraments der Eucharistie durch Kinder im Grundschulalter",
      "Krankensalbung: Sakrament der Heilung und Stärkung für Kranke durch Salbung mit geweihtem Öl",
      "Weihesakrament: Dreistufiges Amt der katholischen Kirche: Diakon, Priester, Bischof durch Handauflegung und Weihegebet",
      "Priesterweihe & Zölibat: Ehelosigkeit um des Himmelreiches willen in der römisch-katholischen Kirche"
    ],
    "exercises": [
      {
        "id": "2481",
        "title": "Vorbereitung auf die Erstkommunion - Gemeinschaft mit Christus",
        "folder": "vorbereitung-auf-die-erstkommunion-gemeinschaft-mit-christus-2481"
      },
      {
        "id": "6690",
        "title": "Kommunion - Empfang des Leibes Christi",
        "folder": "kommunion-empfang-des-leibes-christi-6690"
      },
      {
        "id": "2446",
        "title": "Die Eucharistie - Gemeinschaft mit Christus feiern",
        "folder": "die-eucharistie-gemeinschaft-mit-christus-feiern-2446"
      },
      {
        "id": "2447",
        "title": "Die Eucharistie",
        "folder": "die-eucharistie-2447"
      },
      {
        "id": "2448",
        "title": "Gemeinschaft mit Christus - Die Eucharistie in der Praxis",
        "folder": "gemeinschaft-mit-christus-die-eucharistie-in-der-praxis-2448"
      },
      {
        "id": "2485",
        "title": "Krankensalbung und Priesterweihe",
        "folder": "krankensalbung-und-priesterweihe-2485"
      },
      {
        "id": "2486",
        "title": "Krankensalbung und Priesterweihe - Heilung und Berufung",
        "folder": "krankensalbung-und-priesterweihe-heilung-und-berufung-2486"
      },
      {
        "id": "2487",
        "title": "Der heilende Segen - Krankensalbung und Priesterweihe",
        "folder": "der-heilende-segen-krankensalbung-und-priesterweihe-2487"
      },
      {
        "id": "6468",
        "title": "Das Weiheamt - Sakrament der Weihe",
        "folder": "das-weiheamt-sakrament-der-weihe-6468"
      },
      {
        "id": "6594",
        "title": "Die Erstkommunion",
        "folder": "die-erstkommunion-6594"
      },
      {
        "id": "2480",
        "title": "Vorbereitung auf die Erstkommunion",
        "folder": "vorbereitung-auf-die-erstkommunion-2480"
      },
      {
        "id": "6470",
        "title": "Das Zölibat - Warum leben Priester ehelos?",
        "folder": "das-zolibat-warum-leben-priester-ehelos-6470"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=eucharistie+kommunion&t=3752"
  },
  "liturgie-gottesdienst-und-gebet": {
    "slug": "liturgie-gottesdienst-und-gebet",
    "title": "Heilige Messe, Liturgie & Gebet",
    "category": "Religion im Alltag & Gesellschaft",
    "shortDesc": "Ablauf der Heiligen Messe, Wortgottesdienst, Predigt, Fürbitten, Glaubensbekenntnis und Kirchenraum.",
    "longDesc": "Im Gottesdienst versammelt sich die Gemeinde zum gemeinsamen Lobpreis, zur Schriftlesung und zum Gebet. Der Kirchenraum mit seinen architektonischen Symbolen spiegelt den himmlischen Festsaal wider.",
    "keyPoints": [
      "Ablauf der Messe: Eröffnung ➔ Wortgottesdienst (Lesungen, Evangelium, Predigt, Glaubensbekenntnis, Fürbitten) ➔ Eucharistiefeier (Gabenbereitung, Hochgebet, Kommunion) ➔ Entlassung und Segen",
      "Liturgische Farben: Weiß (Festtage), Rot (Pfingsten, Märtyrer), Grün (Jahreskreis), Violett (Advent, Fastenzeit)",
      "Gebetsformen: Bittgebet, Dankgebet, Lobpreis, Fürbitte, stilles Gebet und Meditation",
      "Kirchenraum: Altar (Tisch des Mahles), Ambo (Pult des Wortes), Tabernakel (Aufbewahrung des Allerheiligsten), Taufbecken, Beichtstuhl",
      "Glaubensbekenntnis (Credo): Zusammenfassung des christlichen Glaubens an den dreieinigen Gott"
    ],
    "exercises": [
      {
        "id": "6741",
        "title": "Was ist ein Gottesdienst - Formen und Bedeutungen",
        "folder": "was-ist-ein-gottesdienst-formen-und-bedeutungen-6741"
      },
      {
        "id": "6474",
        "title": "Der Ablauf der Heiligen Messe - Überblick",
        "folder": "der-ablauf-der-heiligen-messe-berblick-6474"
      },
      {
        "id": "6605",
        "title": "Die Liturgie",
        "folder": "die-liturgie-6605"
      },
      {
        "id": "6604",
        "title": "Die Liturgie des Wortes - Lesungen, Evangelium, Predigt",
        "folder": "die-liturgie-des-wortes-lesungen-evangelium-predigt-6604"
      },
      {
        "id": "6633",
        "title": "Evangelium im Gottesdienst",
        "folder": "evangelium-im-gottesdienst-6633"
      },
      {
        "id": "6611",
        "title": "Die Predigt im Gottesdienst",
        "folder": "die-predigt-im-gottesdienst-6611"
      },
      {
        "id": "6597",
        "title": "Die Fürbitten - Gebet für die Welt",
        "folder": "die-furbitten-gebet-fur-die-welt-6597"
      },
      {
        "id": "6644",
        "title": "Gebet - Dialog mit Gott",
        "folder": "gebet-dialog-mit-gott-6644"
      },
      {
        "id": "6737",
        "title": "Vaterunser und Friedensgruß - Gemeinschaft vor der Kommunion",
        "folder": "vaterunser-und-friedensgrues-gemeinschaft-vor-der-kommunion-6737"
      },
      {
        "id": "6456",
        "title": "Das Glaubensbekenntnis - gemeinsames Bekenntnis des Glaubens",
        "folder": "das-glaubensbekenntnis-gemeinsames-bekenntnis-des-glaubens-6456"
      },
      {
        "id": "6504",
        "title": "Der Kirchenraum - Orte und Symbole",
        "folder": "der-kirchenraum-orte-und-symbole-6504"
      },
      {
        "id": "2443",
        "title": "Der Kirchenraum - Orte des Glaubens",
        "folder": "tugenden-des-christentums-2443"
      },
      {
        "id": "2444",
        "title": "Symbole des Glaubens im Kirchenraum",
        "folder": "einfluss-des-glaubens-2444"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=liturgie+gottesdienst&t=3752"
  },
  "heilige-und-vorbilder-des-glaubens": {
    "slug": "heilige-und-vorbilder-des-glaubens",
    "title": "Heilige & Vorbilder des Glaubens",
    "category": "Religion im Alltag & Gesellschaft",
    "shortDesc": "Franz von Assisi, Martin von Tours, Elisabeth von Thüringen, Mutter Teresa und christliche Nächstenliebe.",
    "longDesc": "Heilige sind Menschen, die das Evangelium in ihrer jeweiligen Zeitepoche auf radikale und vorbildliche Weise gelebt haben. Ihr Einsatz für Arme, Kranke und die Schöpfung inspiriert bis heute.",
    "keyPoints": [
      "Franziskus von Assisi: Verzicht auf Reichtum, Gründung des Franziskanerordens, Sonnengesang und Ehrfurcht vor der Natur",
      "Martin von Tours: Römischer Soldat, der seinen Mantel mit einem frierenden Bettler teilt; Vorbild gelebter Nächstenliebe",
      "Elisabeth von Thüringen: Landgräfin, die Burgen verließ, um in Marburg ein Spital für Arme und Kranke zu errichten",
      "Mutter Teresa (Teresa von Kalkutta): Ordensgründerin der 'Missionarinnen der Nächstenliebe' in den Slums von Kalkutta; Friedensnobelpreisträgerin",
      "Schutzpatrone: Fürsprecher für Berufe, Orte und Lebenslagen"
    ],
    "exercises": [
      {
        "id": "2461",
        "title": "Vorbilder des Glaubens - Heilige und Schutzpatrone kennenlernen",
        "folder": "vorbilder-des-glaubens-heilige-und-schutzpatrone-kennenlernen-2461"
      },
      {
        "id": "2468",
        "title": "Franziskus von Assisi - Der Heilige der Armut und Natur",
        "folder": "franziskus-von-assisi-der-heilige-der-armut-und-natur-2468"
      },
      {
        "id": "2462",
        "title": "Martin von Tours - Der Heilige der Nächstenliebe und Barmherzigkeit",
        "folder": "martin-von-tours-der-heilige-der-nachstenliebe-und-barmherzigkeit-2462"
      },
      {
        "id": "2467",
        "title": "Elisabeth von Thüringen",
        "folder": "elisabeth-von-thuringen-2467"
      },
      {
        "id": "2460",
        "title": "Die Heilige Teresa von Kalkutta",
        "folder": "die-heilige-teresa-von-kalkutta-2460"
      },
      {
        "id": "2469",
        "title": "Teresa von Kalkutta - Die Heilige der Armen und Kranken",
        "folder": "teresa-von-kalkutta-die-heilige-der-armen-und-kranken-2469"
      },
      {
        "id": "2459",
        "title": "Auf den Spuren der Heiligen",
        "folder": "auf-den-spuren-der-heiligen-2459"
      },
      {
        "id": "2463",
        "title": "Johannes Bosco",
        "folder": "johannes-bosco-2463"
      },
      {
        "id": "2441",
        "title": "Glaubenszeugen - Inspirierende Lebensgeschichten",
        "folder": "glaubenszeugen-inspirierende-lebensgeschichten-im-christentum-2441"
      },
      {
        "id": "2474",
        "title": "Die Bedeutung von Pilgerstätten im Christentum",
        "folder": "die-bedeutung-von-pilgerstatten-im-christentum-2474"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=heilige+vorbilder&t=3752"
  },
  "papst-vatikan-und-konzilien": {
    "slug": "papst-vatikan-und-konzilien",
    "title": "Papst, Vatikan & Die Konzilien",
    "category": "Religion im Alltag & Gesellschaft",
    "shortDesc": "Bischof von Rom, Petersdom, Sixtinische Kapelle, Enzykliken, Erstes und Zweites Vatikanisches Konzil.",
    "longDesc": "Der Vatikanstaat in Rom ist das weltweite Zentrum der römisch-katholischen Kirche. Der Papst leitet als Nachfolger des Apostels Petrus die Universalkirche und äußert sich in Enzykliken zu Glaubens- und Weltfragen.",
    "keyPoints": [
      "Das Papstamt: Bischof von Rom, Oberhaupt der katholischen Kirche und Souverän des Staates der Vatikanstadt",
      "Konklave: Wahl des neuen Papstes durch das Kardinalskollegium in der Sixtinischen Kapelle (weißer Rauch)",
      "Die Konzilien: Erstes Vatikanum (1870: Unfehlbarkeitsdogma) und Zweites Vatikanum (1962–1965: Öffnung zur Welt, Volk Gottes, Landessprachen in der Liturgie)",
      "Vatikanstadt: Kleinster anerkannter Staat der Welt; Petersdom, Vatikanische Museen, Schweizergarde und Römische Kurie",
      "Enzykliken & Medien: Päpstliche Rundschreiben zu drängenden Zeitfragen (z. B. Umwelt-Enzyklika Laudato si')"
    ],
    "exercises": [
      {
        "id": "6514",
        "title": "Der Papst - Aufgaben und Bedeutung",
        "folder": "der-papst-aufgaben-und-bedeutung-6514"
      },
      {
        "id": "6516",
        "title": "Der Papst als Nachfolger Petri",
        "folder": "der-papst-als-nachfolger-petri-6516"
      },
      {
        "id": "2457",
        "title": "Papst Franziskus",
        "folder": "papst-franziskus-2457"
      },
      {
        "id": "5239",
        "title": "Papst Leo XIV.",
        "folder": "papst-leo-xiv-5239"
      },
      {
        "id": "6454",
        "title": "Das Erste Vatikanische Konzil (1870)",
        "folder": "das-erste-vatikanische-konzil-1870-6454"
      },
      {
        "id": "6472",
        "title": "Das Zweite Vatikanische Konzil (1962-1965) - Inhalte und Folgen",
        "folder": "das-zweite-vatikanische-konzil-1962-1965-inhalte-und-folgen-6472"
      },
      {
        "id": "6578",
        "title": "Der Vatikan als geistliches und politisches Zentrum",
        "folder": "der-vatikan-als-geistliches-und-politisches-zentrum-6578"
      },
      {
        "id": "6580",
        "title": "Der Vatikan und die römische Kurie",
        "folder": "der-vatikan-und-die-romische-kurie-6580"
      },
      {
        "id": "6692",
        "title": "Kritik am Vatikan - Transparenz und Machtfragen",
        "folder": "kritik-am-vatikan-transparenz-und-machtfragen-6692"
      },
      {
        "id": "6629",
        "title": "Enzykliken - wie der Papst zur Welt spricht",
        "folder": "enzykliken-wie-der-papst-zur-welt-spricht-6629"
      },
      {
        "id": "6701",
        "title": "Medienarbeit des Vatikans (Radio Vatikan, Vatican News)",
        "folder": "medienarbeit-des-vatikans-radio-vatikan-vatican-news-6701"
      },
      {
        "id": "6702",
        "title": "Michelangelo und seine Werke im Vatikan",
        "folder": "michelangelo-und-seine-werke-im-vatikan-6702"
      },
      {
        "id": "6621",
        "title": "Die Sixtinische Kapelle - Kunst und Liturgie vereint",
        "folder": "die-sixtinische-kapelle-kunst-und-liturgie-vereint-6621"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=papst+vatikan&t=3752"
  },
  "aemter-der-kirche-und-oekumene": {
    "slug": "aemter-der-kirche-und-oekumene",
    "title": "Ämter der Kirche, Ökumene & Gesellschaft",
    "category": "Religion im Alltag & Gesellschaft",
    "shortDesc": "Diakon, Priester, Bischof, Diözesen, Ökumene, Katholische/Evangelische Kirche und Kirche & Staat.",
    "longDesc": "Die Kirche wirkt durch Ämter, Gemeinden und caritative Einrichtungen mitten in der Gesellschaft. Die Ökumene bemüht sich um die Überwindung historischer Kirchenspaltungen zwischen den Konfessionen.",
    "keyPoints": [
      "Kirchliche Ämter: Bischof als Hirte der Diözese, Priester als Gemeindeleiter, Diakon im Dienst an den Armen",
      "Konfessionen im Dialog: Katholische Kirche (Papstprimat, 7 Sakramente) vs. Evangelische Kirche (Priestertum aller Gläubigen, 2 Sakramente)",
      "Ökumene: Gemeinsame Gottesdienste, theologische Annäherung und gemeinsamer Dienst an den Schwachen",
      "Kirche & Gesellschaft: Caritas und Diakonie als größte nichtstaatliche Wohlfahrtsverbände",
      "Kirche und Staat: Staatsleistungen, Religionsunterricht und Trennung von Staat und Kirche im säkularen Verfassungsstaat"
    ],
    "exercises": [
      {
        "id": "6593",
        "title": "Die drei Ämter der Kirche Diakon, Priester, Bischof",
        "folder": "die-drei-mter-der-kirche-diakon-priester-bischof-6593"
      },
      {
        "id": "6482",
        "title": "Der Bischof - Hirtendienst in der Diözese",
        "folder": "der-bischof-hirtendienst-in-der-diozese-6482"
      },
      {
        "id": "6614",
        "title": "Die Rolle der Ämter im Gottesdienst",
        "folder": "die-rolle-der-mter-im-gottesdienst-6614"
      },
      {
        "id": "6609",
        "title": "Die Ökumene",
        "folder": "die-kumene-6609"
      },
      {
        "id": "3514",
        "title": "Die katholische Kirche in Deutschland",
        "folder": "die-katholische-kirche-in-deutschland-3514"
      },
      {
        "id": "3511",
        "title": "Die evangelische Kirche in Deutschland",
        "folder": "die-evangelische-kirche-in-deutschland-3511"
      },
      {
        "id": "6686",
        "title": "Kirche und Politik",
        "folder": "kirche-und-politik-6686"
      },
      {
        "id": "2426",
        "title": "Kirche in der Gesellschaft",
        "folder": "die-okumenische-bewegung-und-ihre-bedeutung-fur-das-moderne-christentum-2426"
      },
      {
        "id": "6431",
        "title": "Architektur von Kirchen",
        "folder": "architektur-von-kirchen-6431"
      },
      {
        "id": "6458",
        "title": "Das Kreuz – mehr als ein Zeichen",
        "folder": "das-kreuz-mehr-als-ein-zeichen-6458"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=aemter+oekumene&t=3752"
  }
};
