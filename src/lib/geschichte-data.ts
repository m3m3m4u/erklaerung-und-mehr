export interface GeschichteExercise {
  id: string;
  title: string;
  folder: string;
}

export interface GeschichteTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: GeschichteExercise[];
  worksheetLink?: string;
}

export const geschichteCategories: string[] = [
  "Ur- & Frühgeschichte & Antike",
  "Das Mittelalter",
  "Frühe Neuzeit & Revolutionen",
  "19. Jahrhundert & Deutsches Kaiserreich",
  "Erster Weltkrieg & Zwischenkriegszeit",
  "Nationalsozialismus & Zweiter Weltkrieg",
  "Kalter Krieg & Deutsche Teilung"
];

export const geschichteTopics: Record<string, GeschichteTopic> = {
  "steinzeit-und-fruehe-menschheit": {
    "slug": "steinzeit-und-fruehe-menschheit",
    "title": "Steinzeit & Frühe Menschheitsentwicklung",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Altsteinzeit, Höhlenmalerei, Jäger und Sammler, neolithische Revolution und der Mann aus dem Eis (Ötzi).",
    "longDesc": "Menschen haben schon immer Spuren hinterlassen – in Form von Gegenständen, Schriften oder Bildern. Wer heute Geschichte verstehen möchte, braucht diese Hinweise aus der Vergangenheit, denn sie zeigen, wie sich unser Leben über Jahrtausende verändert hat. Die Geschichte beginnt mit dem, was früher geschah – deshalb kommt das Wort „Geschichte“ auch von „geschehen“. Sie beschreibt das Leben der Menschen in früheren Zeiten und betrachtet dabei auch politische Entwicklungen, wirtschaftliche Veränderungen oder das Zusammenleben in der Gesellschaft. Historiker erforschen diese Zusammenhänge und stützen sich dabei auf verschiedene Quellen. Besonders spannend ist dabei, dass nicht alle Kulturen dieselbe Zeitrechnung nutzen. Während in Europa die Geburt Christi als Ausgangspunkt dient, folgen andere Regionen eigenen Kalendern. Daher ist es wichtig, geschichtliche Ereignisse stets im jeweiligen Kontext zu betrachten.",
    "keyPoints": [
      "Fünf große Epochen prägen die Menschheitsgeschichte",
      "Urgeschichte reicht bis zur Entwicklung der Schrift",
      "Antike endet etwa im Jahr 500 nach Christus",
      "Mittelalter dauert bis zur Entdeckung Amerikas",
      "Neuzeit beginnt danach und endet mit der Zeitgeschichte",
      "Zeitgeschichte betrifft Ereignisse, an die sich Menschen erinnern können",
      "Archäologen finden Gegenstände bei Ausgrabungen",
      "Schriften, Bilder und Höhlenmalereien sind bedeutende Quellen"
    ],
    "exercises": [
      {
        "id": "814",
        "title": "Geschichte Grundlagen",
        "folder": "geschichte-grundlagen-814"
      },
      {
        "id": "815",
        "title": "Die Steinzeit",
        "folder": "die-steinzeit-815"
      },
      {
        "id": "816",
        "title": "Die Bronzezeit",
        "folder": "die-bronzezeit-816"
      },
      {
        "id": "817",
        "title": "Die Eisenzeit",
        "folder": "die-eisenzeit-817"
      },
      {
        "id": "3265",
        "title": "Neolithische Revolution",
        "folder": "neolithische-revolution-3265"
      },
      {
        "id": "3360",
        "title": "Menschheitsentwicklung und Steinzeit",
        "folder": "menschheitsentwicklung-und-steinzeit-3360"
      },
      {
        "id": "2651",
        "title": "Die Hallstatt-Kultur",
        "folder": "buddhismus-in-der-modernen-welt-32-2651"
      },
      {
        "id": "5346",
        "title": "Die Früh- und Urgeschichte",
        "folder": "die-fruh-und-urgeschichte-5346"
      },
      {
        "id": "3121",
        "title": "Kunst in der Steinzeit",
        "folder": "kunst-in-der-steinzeit-3121"
      },
      {
        "id": "3359",
        "title": "Fruhgeschichte und entwicklung der erde",
        "folder": "fruhgeschichte-und-entwicklung-der-erde-3359"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Steinzeit%20%26%20Fr%C3%BChe%20Menschheitsentwicklung+geschichte&t=3752"
  },
  "altes-aegypten-und-fruehe-hochkulturen": {
    "slug": "altes-aegypten-und-fruehe-hochkulturen",
    "title": "Das alte Ägypten & Frühe Hochkulturen",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Pharaonen als Gottkönige, Pyramidenbau, Nil als Lebensader, Hieroglyphen und die Reiche Mesopotamiens.",
    "longDesc": "Das antike Ägypten zählt zu den faszinierendsten frühen Hochkulturen der Menschheitsgeschichte. Entlang des Nils entwickelte sich eine hochentwickelte Zivilisation, die von Pharaonen als göttlichen Herrschern regiert wurde. Der jährliche Nilüberlauf sorgte für fruchtbares Schwemmland und bildete das wirtschaftliche Fundament des Reiches. Mit monumentalen Bauwerken wie den Pyramiden von Gizeh, der Entwicklung der Hieroglyphenschrift, ausgefeilter Verwaltung, Astronomie und ausgeprägtem Totenkult (Mumifizierung) prägte Ägypten über drei Jahrtausende hinweg die Antike – parallel zu den mesopotamischen Hochkulturen der Sumerer, Babylonier und Assyrer.",
    "keyPoints": [
      "Der Nil als Lebensader: Jährliche Nilschwemme ermöglichte ertragreiche Landwirtschaft und Städtebildung",
      "Pharaonen als gottgleiche Herrscher: Vereinigung von politischer, militärischer und religiöser Macht",
      "Monumentalarchitektur & Totenkult: Pyramidenbau als monumentale Königsgräber und Glaube an ein Weiterleben im Jenseits",
      "Schrift & Verwaltung: Hieroglyphen für Tempelinschriften und hieratische/demotische Schrift auf Papyrus",
      "Gesellschaftsstruktur: Strenge Hierarchie vom Pharao über Wesire, Priester, Schreiber und Handwerker bis zu Bauern",
      "Parallele Hochkulturen in Mesopotamien: Sumerer (Keilschrift, Zikkurate), Babylonier (Kodex Hammurapi) und Assyrer"
    ],
    "exercises": [
      {
        "id": "2295",
        "title": "Babylonien",
        "folder": "babylonien-2295"
      },
      {
        "id": "2960",
        "title": "Die Hochkultur Mesopotamien",
        "folder": "die-hochkultur-mesopotamien-2960"
      },
      {
        "id": "2980",
        "title": "Die Sumerer",
        "folder": "die-sumerer-2980"
      },
      {
        "id": "5214",
        "title": "Religion, Mythologie und Tempel im antiken Ägypten",
        "folder": "religion-mythologie-und-tempel-im-antiken-gypten-5214"
      },
      {
        "id": "5216",
        "title": "Ramses II. und seine Herrschaft in Ägypten",
        "folder": "ramses-ii-und-seine-herrschaft-in-gypten-5216"
      },
      {
        "id": "5218",
        "title": "Kunst, Architektur und Alltag im antiken Ägypten",
        "folder": "kunst-architektur-und-alltag-im-antiken-gypten-5218"
      },
      {
        "id": "5220",
        "title": "Die Zweite Zwischenzeit und die Hyksos-Invasion in Ägypten",
        "folder": "die-zweite-zwischenzeit-und-die-hyksos-invasion-in-gypten-5220"
      },
      {
        "id": "5221",
        "title": "Die prädynastische und frühdynastische Periode in Ägypten",
        "folder": "die-pradynastische-und-fruhdynastische-periode-in-gypten-5221"
      },
      {
        "id": "5231",
        "title": "Die Amarna-Zeit und die religiöse Revolution unter Echnaton in Ägypten",
        "folder": "die-amarna-zeit-und-die-religiose-revolution-unter-echnaton-in-gypten-5231"
      },
      {
        "id": "5233",
        "title": "Das Neue Reich und die Expansion Ägyptens",
        "folder": "das-neue-reich-und-die-expansion-gyptens-5233"
      },
      {
        "id": "5234",
        "title": "Das Mittlere Reich und die Wiedervereinigung Ägyptens",
        "folder": "das-mittlere-reich-und-die-wiedervereinigung-gyptens-5234"
      },
      {
        "id": "5235",
        "title": "Das Alte Reich und die Pyramidenzeit in Ägypten",
        "folder": "das-alte-reich-und-die-pyramidenzeit-in-gypten-5235"
      },
      {
        "id": "5329",
        "title": "Das alte Ägypten",
        "folder": "das-alte-gypten-5329"
      },
      {
        "id": "2303",
        "title": "Das chinesische Kaiserreich",
        "folder": "das-chinesische-kaiserreich-2303"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Das%20alte%20%C3%84gypten%20%26%20Fr%C3%BChe%20Hochkulturen+geschichte&t=3752"
  },
  "antikes-griechenland-demokratie-und-kriege": {
    "slug": "antikes-griechenland-demokratie-und-kriege",
    "title": "Antikes Griechenland: Demokratie, Poleis & Kriege",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Entstehung der Polis, Attische Demokratie in Athen, Kriegerstaat Sparta, Perserkriege und Peloponnesischer Krieg.",
    "longDesc": "Die Wiege der europäischen Demokratie: Entdecke, wie in Athen die Volksherrschaft entstand, während im benachbarten Sparta eine straffe Militärgesellschaft herrschte. Erfahre mehr über die Perserkriege, den Peloponnesischen Krieg und den Siegeszug Alexanders des Großen.",
    "keyPoints": [
      "Die Polis als Stadtstaat: Unabhängige politische Einheiten mit eigenem Rechts- und Gesellschaftssystem",
      "Attische Demokratie: Volksversammlung (Ekklesia), Scherbengericht (Ostrakismos) und Losverfahren unter Perikles",
      "Sparta: Straffe Militärordnung, Heloten als Unfreie und Doppelherrschaft der Könige",
      "Perserkriege (Marathon, Thermopylen, Salamis) und Peloponnesischer Bruderkrieg zwischen Athen und Sparta",
      "Alexander der Große: Ausbreitung der griechischen Kultur bis nach Indien (Hellenismus)"
    ],
    "exercises": [
      {
        "id": "881",
        "title": "Alexander der Große",
        "folder": "alexander-der-groese-881"
      },
      {
        "id": "2907",
        "title": "Das Perserreich",
        "folder": "das-perserreich-2907"
      },
      {
        "id": "5222",
        "title": "Die Perserkriege und Griechenland",
        "folder": "die-perserkriege-und-griechenland-5222"
      },
      {
        "id": "5224",
        "title": "Sparta und seine Gesellschaftsordnung in Griechenland",
        "folder": "sparta-und-seine-gesellschaftsordnung-in-griechenland-5224"
      },
      {
        "id": "5226",
        "title": "Die hellenistische Periode in Griechenland",
        "folder": "die-hellenistische-periode-in-griechenland-5226"
      },
      {
        "id": "5232",
        "title": "Der Peloponnesische Krieg in Griechenland",
        "folder": "der-peloponnesische-krieg-in-griechenland-5232"
      },
      {
        "id": "5236",
        "title": "Athen und die attische Demokratie in Griechenland",
        "folder": "athen-und-die-attische-demokratie-in-griechenland-5236"
      },
      {
        "id": "5238",
        "title": "Alexander der Große und seine Eroberungen aus Griechenland",
        "folder": "alexander-der-groese-und-seine-eroberungen-aus-griechenland-5238"
      },
      {
        "id": "5391",
        "title": "Geschichte des antiken Griechenlands",
        "folder": "geschichte-des-antiken-griechenlands-5391"
      },
      {
        "id": "2903",
        "title": "Das Königreich Griechenland",
        "folder": "das-konigreich-griechenland-2903"
      },
      {
        "id": "3063",
        "title": "Umsturzversuch des Spartakusbundes",
        "folder": "umsturzversuch-des-spartakusbundes-3063"
      },
      {
        "id": "5361",
        "title": "Die Geschichte der Olympischen Spiele",
        "folder": "die-geschichte-der-olympischen-spiele-5361"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Antikes+Griechenland+Demokratie&t=3752"
  },
  "griechische-antike-kultur-und-mythologie": {
    "slug": "griechische-antike-kultur-und-mythologie",
    "title": "Griechische Antike: Kultur, Mythologie & Philosophie",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Götterhimmel auf dem Olymp, Philosophie von Sokrates und Platon, antikes Theater, Kunst und mykenische Kultur.",
    "longDesc": "Kunst, Glaube und Philosophie der Antike prägen unsere Kultur bis heute: Lerne die Götter des Olymps um Zeus und Athena kennen, verstehe die Ursprünge der Olympischen Spiele, die Entstehung des Theaters und die bahnbrechenden Ideen der Philosophen.",
    "keyPoints": [
      "Götterwelt des Olymps: Zeus, Hera, Poseidon, Athena und das Orakel von Delphi",
      "Olympische Spiele: Panhellenische Wettkämpfe zu Ehren der Götter und heiliger Frieden (Ekecheiria)",
      "Philosophie & Wissenschaft: Sokrates, Platon und Aristoteles als Begründer des westlichen Denkens",
      "Theater & Dichtung: Tragödien und Komödien (Sophokles, Euripides) sowie Homers Epen Ilias und Odyssee",
      "Architektur & Kunst: Dorische, ionische und korinthische Säulenordnung sowie monumentale Tempel wie der Parthenon"
    ],
    "exercises": [
      {
        "id": "5223",
        "title": "Die mykenische Kultur und das Ende der Bronzezeit in Griechenland",
        "folder": "die-mykenische-kultur-und-das-ende-der-bronzezeit-in-griechenland-5223"
      },
      {
        "id": "1212",
        "title": "Athena",
        "folder": "athena-1212"
      },
      {
        "id": "5215",
        "title": "Religion und Kulte im antiken Griechenland",
        "folder": "religion-und-kulte-im-antiken-griechenland-5215"
      },
      {
        "id": "5217",
        "title": "Philosophie und Wissenschaft im antiken Griechenland",
        "folder": "philosophie-und-wissenschaft-im-antiken-griechenland-5217"
      },
      {
        "id": "5219",
        "title": "Kunst und Architektur im antiken Griechenland",
        "folder": "kunst-und-architektur-im-antiken-griechenland-5219"
      },
      {
        "id": "5225",
        "title": "Die klassische Periode in Griechenland",
        "folder": "die-klassische-periode-in-griechenland-5225"
      },
      {
        "id": "5227",
        "title": "Die griechische Mythologie und ihre Bedeutung",
        "folder": "die-griechische-mythologie-und-ihre-bedeutung-5227"
      },
      {
        "id": "5229",
        "title": "Die dunklen Jahrhunderte in Griechenland",
        "folder": "die-dunklen-jahrhunderte-in-griechenland-5229"
      },
      {
        "id": "5230",
        "title": "Die archaische Periode in Griechenland",
        "folder": "die-archaische-periode-in-griechenland-5230"
      },
      {
        "id": "5237",
        "title": "Alltag und Gesellschaft im antiken Griechenland",
        "folder": "alltag-und-gesellschaft-im-antiken-griechenland-5237"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Griechische+Mythologie+Kultur&t=3752"
  },
  "roemische-republik-und-expansion": {
    "slug": "roemische-republik-und-expansion",
    "title": "Die Römische Republik: Verfassung & Expansion",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Gründung Roms (Romulus & Remus), Patrizier und Plebejer, Senat, Punische Kriege, Hannibal und Julius Caesar.",
    "longDesc": "Vom kleinen Bauerndorf am Tiber zur mächtigsten Republik des Mittelmeers: Lerne die Gründungslegende, die Ständekämpfe, das ausgeklügelte Verfassungssystem der Republik und die dramatische Zeit der Bürgerkriege bis zur Ermordung Caesars kennen.",
    "keyPoints": [
      "Gründungsmythos: Romulus und Remus 753 v. Chr. („Rom entstieg den Kinderschuhen“)",
      "Verfassung der Republik: Konsuln, Senat und Volksversammlung mit striktem Kollegialitäts- und Annuitätsprinzip",
      "Ständekämpfe: Konflikte zwischen adligen Patriziern und bürgerlichen Plebejern (Zwölftafelgesetz, Volkstribune)",
      "Punische Kriege: Ringen gegen Karthago um die Vorherrschaft im Mittelmeer, Hannibals Alpenüberquerung",
      "Krise der Republik: Agrarkrise, Gracchen, Triumvirate und Aufstieg und Ermordung von Julius Caesar 44 v. Chr."
    ],
    "exercises": [
      {
        "id": "892",
        "title": "Karthago",
        "folder": "karthago-892"
      },
      {
        "id": "1364",
        "title": "Das Rechtssystem im antiken Rom",
        "folder": "das-rechtssystem-im-antiken-rom-1364"
      },
      {
        "id": "1366",
        "title": "Die Gründung Roms",
        "folder": "die-grundung-roms-1366"
      },
      {
        "id": "1368",
        "title": "Die Römische Republik",
        "folder": "die-romische-republik-1368"
      },
      {
        "id": "2351",
        "title": "Die Punischen Kriege",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-5-2351"
      },
      {
        "id": "3371",
        "title": "Kriege und militärische Aspekte des römischen Reiches",
        "folder": "kriege-und-militarische-aspekte-des-romischen-reiches-3371"
      },
      {
        "id": "3372",
        "title": "Geschichte und Politik im antiken Rom",
        "folder": "geschichte-und-politik-im-antiken-rom-3372"
      },
      {
        "id": "3929",
        "title": "Hannibal",
        "folder": "hannibal-3929"
      },
      {
        "id": "4221",
        "title": "Romulus",
        "folder": "romulus-4221"
      },
      {
        "id": "4364",
        "title": "Julius Caesar",
        "folder": "julius-caesar-4364"
      },
      {
        "id": "3754",
        "title": "Cicero",
        "folder": "cicero-3754"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Roemische+Republik+Caesar&t=3752"
  },
  "roemische-kaiserzeit-und-alltag": {
    "slug": "roemische-kaiserzeit-und-alltag",
    "title": "Das Römische Kaiserreich: Alltag, Limes & Provinzen",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Pax Romana, Gladiatorenspiele im Kolosseum, Pompeji, Grenzwälle am Limes, Germanen und der Fall Westroms.",
    "longDesc": "Auf den Trümmern der Republik begründete Augustus das Prinzipat. Entdecke den Alltag im Römischen Imperium: Leben in der Großstadt Rom, Gladiatorenkämpfe, die Zerstörung von Pompeji durch den Vesuv, Grenzsicherung am Limes und den Untergang des Reiches.",
    "keyPoints": [
      "Das Prinzipat unter Augustus: Begründung der Kaiserzeit und Epoche des inneren Friedens (Pax Romana)",
      "Alltag & Metropole: Leben in Insulae (Miethäusern), Aquädukte, Thermen und „Brot und Spiele“ (Panem et circenses)",
      "Pompeji 79 n. Chr.: Verschüttung durch den Vesuv als einzigartiges archäologisches Zeitfenster in die Antike",
      "Limes & Provinzen: Grenzbefestigungen gegen Germanen und Kelten (Varusschlacht 9 n. Chr. im Teutoburger Wald)",
      "Spätantike & Fall Roms: Völkerwanderung, Teilung in Ost- und Westrom 395 n. Chr. und Absetzung des letzten weströmischen Kaisers 476 n. Chr."
    ],
    "exercises": [
      {
        "id": "1365",
        "title": "Das römische Kaiserreich",
        "folder": "das-romische-kaiserreich-1365"
      },
      {
        "id": "1371",
        "title": "Fall des Weströmischen Reiches",
        "folder": "fall-des-westromischen-reiches-1371"
      },
      {
        "id": "1395",
        "title": "Pompeji und das römische Alltagsleben",
        "folder": "pompeji-und-das-romische-alltagsleben-1395"
      },
      {
        "id": "1407",
        "title": "Römische Spiele und Unterhaltung",
        "folder": "romische-spiele-und-unterhaltung-1407"
      },
      {
        "id": "2323",
        "title": "Der Limes",
        "folder": "der-limes-2323"
      },
      {
        "id": "2333",
        "title": "Die Gallier",
        "folder": "die-gallier-2333"
      },
      {
        "id": "3162",
        "title": "Die Germanen und die Römer",
        "folder": "die-germanen-und-die-romer-3162"
      },
      {
        "id": "3173",
        "title": "Die Varusschlacht",
        "folder": "die-varusschlacht-3173"
      },
      {
        "id": "3369",
        "title": "Römisches Leben und Gesellschaft",
        "folder": "romisches-leben-und-gesellschaft-3369"
      },
      {
        "id": "3370",
        "title": "Römische Kultur und Kunst",
        "folder": "romische-kultur-und-kunst-3370"
      },
      {
        "id": "5395",
        "title": "Geschichte des Römischen Reiches",
        "folder": "geschichte-des-romischen-reiches-5395"
      },
      {
        "id": "5403",
        "title": "Was wäre, wenn das Römische Reich nie gefallen wäre –",
        "folder": "was-ware-wenn-das-romische-reich-immer-noch-existieren-wurde-5403"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Roemisches+Kaiserreich+Limes&t=3752"
  },
  "die-kelten-in-europa": {
    "slug": "die-kelten-in-europa",
    "title": "Die Kelten: Kultur, Handwerk & Gesellschaft",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Hallstatt- und Latènezeit, Druiden, Fürstensitze, Oppida und Salzbergbau im Alpenraum.",
    "longDesc": "Die Kelten prägten die europäische Eisenzeit entscheidend. Von den Alpen über West- und Mitteleuropa bis nach Britannien schufen sie meisterhafte Metallkunst, befestigte Großsiedlungen (Oppida) und ein weitverzweigtes Handelsnetz.",
    "keyPoints": [
      "Zwei Epochen: Ältere Eisenzeit (Hallstattzeit ca. 800–450 v. Chr.) und jüngere Eisenzeit (Latènezeit ca. 450 v. Chr. bis zur Zeitenwende)",
      "Wirtschaftszentrum Hallstatt: Unterirdischer Steinsalzbergbau schuf Reichtum und weitreichende Handelsbeziehungen",
      "Gesellschaftsordnung: Adelige Kriegerelite, freie Bauern/Handwerker und Druiden (Priester, Richter und Gelehrte)",
      "Städtebau: Entstehung befestigter stadtartiger Großsiedlungen (Oppida, wie Manching oder Heuneburg) ab dem 2. Jh. v. Chr."
    ],
    "exercises": [
      {
        "id": "3116",
        "title": "Die Kelten",
        "folder": "die-kelten-3116"
      },
      {
        "id": "2336",
        "title": "Die Germanen",
        "folder": "die-germanen-2336"
      },
      {
        "id": "3159",
        "title": "Die Burgunden",
        "folder": "die-burgunden-3159"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kelten&t=3752"
  },
  "staendegesellschaft-und-alltag-im-mittelalter": {
    "slug": "staendegesellschaft-und-alltag-im-mittelalter",
    "title": "Ständegesellschaft & Alltag im Mittelalter",
    "category": "Das Mittelalter",
    "shortDesc": "Drei-Stände-Ordnung, Feudalismus, Lehnswesen, Grundherrschaft, Frondienst und das harte Leben der Bauern.",
    "longDesc": "Das Leben der Bauern im Mittelalter war von harter Arbeit und Entbehrungen geprägt. Sie bildeten jedoch das Fundament der mittelalterlichen Gesellschaft. Die Bauern verrichteten schwere Feldarbeit und kümmerten sich um das Vieh. Zudem waren ihre Tätigkeiten stark vom Verlauf der Jahreszeiten abhängig.",
    "keyPoints": [
      "Arbeit auf dem Feld: Die meiste Zeit verbrachten die Bauern mit der Feldarbeit, wo sie Getreide und andere Nahrungsmittel anbauten.",
      "Tierhaltung: Neben der Feldarbeit betrieben die Bauern Viehzucht und hielten Tiere wie Kühe, Schweine und Hühner.",
      "Abhängigkeit vom Adel: Die Bauern waren häufig vom Adel abhängig und mussten Abgaben leisten sowie Frondienste verrichten.",
      "Einfache Ernährung: Die Ernährung der Bauern war schlicht und bestand vorwiegend aus Getreidebrei und Gemüse; Fleisch gab es nur selten.",
      "Dreifelderwirtschaft: Im Laufe des Mittelalters entwickelte sich die Dreifelderwirtschaft und steigerte so die Effizienz der Landwirtschaft.",
      "Lehenswesen: Fokus auf persönliche Beziehungen: Im Lehenswesen standen die persönlichen Beziehungen zwischen Adeligen im Vordergrund. So leistete der Vasall seinem Lehnsherrn Treue und Heerfolge.",
      "Grundherrschaft: Fokus auf wirtschaftliche Beziehungen: Die Grundherrschaft regelte primär die wirtschaftlichen Beziehungen zwischen Grundherrn und Bauern. Hierbei leisteten die Bauern Abgaben und Frondienste.",
      "Gemeinsamkeit: Hierarchie: Beide Systeme basierten auf einer hierarchischen Struktur. Sowohl im Lehenswesen als auch in der Grundherrschaft gab es klare Über- und Unterordnungsverhältnisse."
    ],
    "exercises": [
      {
        "id": "2893",
        "title": "Bauern im Mittelalter",
        "folder": "bauern-im-mittelalter-2893"
      },
      {
        "id": "3031",
        "title": "Lehenswesen und Grundherrschaft im Mittelalter",
        "folder": "lehenswesen-und-grundherrschaft-im-mittelalter-3031"
      },
      {
        "id": "3335",
        "title": "Adelsgeschlechter im Mittelalter",
        "folder": "adelsgeschlechter-im-mittelalter-3335"
      },
      {
        "id": "1088",
        "title": "Geschichte Vorarlbergs im Mittelalter",
        "folder": "geschichte-vorarlbergs-im-mittelalter-1088"
      },
      {
        "id": "3084",
        "title": "Das Frühmittelalter",
        "folder": "das-fruhmittelalter-3084"
      },
      {
        "id": "3085",
        "title": "Das Hochmittelalter",
        "folder": "das-hochmittelalter-3085"
      },
      {
        "id": "3331",
        "title": "Politik im Mittelalter",
        "folder": "politik-im-mittelalter-3331"
      },
      {
        "id": "3332",
        "title": "Das Mittelalter im Überblick",
        "folder": "das-mittelalter-im-berblick-3332"
      },
      {
        "id": "3334",
        "title": "Wirtschaft im Mittelalter",
        "folder": "wirtschaft-im-mittelalterr-3334"
      },
      {
        "id": "5333",
        "title": "Das Mittelalter",
        "folder": "das-mittelalter-5333"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=St%C3%A4ndegesellschaft%20%26%20Alltag%20im%20Mittelalter+geschichte&t=3752"
  },
  "ritter-burgen-und-ritterausbildung": {
    "slug": "ritter-burgen-und-ritterausbildung",
    "title": "Rittertum, Burgen & Ritterausbildung",
    "category": "Das Mittelalter",
    "shortDesc": "Vom Pagen zum Ritter mit Schwertleite, ritterliche Tugenden, Burgenbau, Belagerung und Turniere.",
    "longDesc": "Das Rittertum bildete den kriegerischen und gesellschaftlichen Kern des mittelalterlichen Adels. Der Weg zum Ritter war lang und streng geregelt: Vom siebenjährigen Pagen über den vierzehnjährigen Knappen bis zur feierlichen Schwertleite mit Ritterschlag. Burgen dienten als wehrhafte Verteidigungsanlagen, Wohnsitz des Adels und Verwaltungszentren. Ritterliche Tugenden wie Tapferkeit, Treue, Minne und Frömmigkeit prägten das ritterliche Selbstverständnis, das sich auch in Turnieren und Ritterorden widerspiegelte.",
    "keyPoints": [
      "Stufen der Ritterausbildung: Page (ab 7 Jahren, Erziehung bei Hofe) ➔ Knappe (ab 14 Jahren, Waffen- und Reitdienst) ➔ Ritter (ab 21 Jahren)",
      "Die Schwertleite & der Ritterschlag: Feierliche Zeremonie mit Waffenübergabe, Treueeid und Einsegnung durch die Kirche",
      "Ritterliche Tugenden (Codex): Tapferkeit (strenuitas), Treue (triuwe), Mäßigung (maeze), Freigiebigkeit (milte) und Minne",
      "Burgenbau & Wehrarchitektur: Bergfried als letzter Rückzugsort, Wehrmauern, Burggraben, Zugbrücke, Palas (Wohngebäude) und Kemenate",
      "Turniere & Waffenschau: Lanzengang (Tjost) und Massenkampf (Buhurt) als Training für den Ernstfall und gesellschaftliches Spektakel",
      "Ritterorden im Mittelalter: Geistliche Ritterorden wie Templer, Johanniter und Deutscher Orden während der Kreuzzüge"
    ],
    "exercises": [
      {
        "id": "3055",
        "title": "Ritter und Burgen im Mittelalter",
        "folder": "ritter-und-burgen-im-mittelalter-3055"
      },
      {
        "id": "3333",
        "title": "Gesellschaft im Mittelalter",
        "folder": "gesellschaft-im-mittelalter-3333"
      },
      {
        "id": "5690",
        "title": "Die Schattenburg",
        "folder": "die-schattenburg-5690"
      },
      {
        "id": "3178",
        "title": "Sprache und Schrift der Germanen",
        "folder": "sprache-und-schrift-der-germanen-3178"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rittertum%2C%20Burgen%20%26%20Ritterausbildung+geschichte&t=3752"
  },
  "staedte-und-die-hanse": {
    "slug": "staedte-und-die-hanse",
    "title": "Mittelalterliche Städte & die Hanse",
    "category": "Das Mittelalter",
    "shortDesc": "'Stadtluft macht frei', Marktrechte, Zünfte der Handwerker, Fugger und der mächtige Hansebund.",
    "longDesc": "Eine Augsburger Familie prägte über Generationen hinweg die europäische Wirtschafts- und Politikgeschichte. Diese Familie ist bekannt als die Fugger. Der Grundstein für den Aufstieg der Fugger wurde im 14. Jahrhundert durch Hans Fugger gelegt, der in Augsburg einen Textilhandel gründete. Dabei bauten seine Nachkommen das Geschäft kontinuierlich aus und weiteten es auf ganz Europa aus. Besonders Jakob Fugger, genannt „der Reiche“, spielte eine entscheidende Rolle. Aufgrund seiner geschickten Geschäftspraktiken im Bergbau, Münzhandel und Bankwesen, insbesondere mit der katholischen Kirche, mehrte sich das Familienvermögen enorm.",
    "keyPoints": [
      "Der Textilhandel: Anfänglich konzentrierten sich die Fugger auf den Handel mit Textilien. Dadurch legten sie den Grundstein für ihren späteren Erfolg.",
      "Der Bergbau und Metallhandel: Jakob Fugger investierte erfolgreich in den Bergbau und den Handel mit Metallen, was zu einem erheblichen Vermögenszuwachs führte.",
      "Das Bankwesen und die Finanzierung der Habsburger: Die Fugger betrieben ein florierendes Bankgeschäft und finanzierten unter anderem die Habsburger, was ihnen großen politischen Einfluss sicherte. Außerdem gründeten sie die Fuggerei, eine Sozialsiedlung für bedürftige Augsburger Bürger, die bis heute existiert.",
      "Ursprung bei Kaufleuten: Anfangs schlossen sich Kaufleute aus Städten wie Lübeck und Hamburg zusammen, um gemeinsam Handel zu treiben und sich besser zu schützen.",
      "Schutz vor Piraten: Ein wichtiger Grund für den Zusammenschluss war der Schutz vor Piraterie; somit konnten die Kaufleute ihre Handelsrouten sichern.",
      "Hansetage als Entscheidungsgremium: Die Hanse hielt eigene Versammlungen ab, die sogenannten Hansetage, auf denen wichtige Entscheidungen getroffen wurden.",
      "Internationale Mitgliedschaft: Nicht nur deutsche, sondern auch Städte in anderen europäischen Ländern gehörten der Hanse an, darunter beispielsweise Riga und Brügge.",
      "Vielfältige Handelsgüter: Die Hanse handelte mit verschiedenen Gütern, wie Salz, Fisch, Getreide und Tuche. Diese Waren waren im Mittelalter begehrt."
    ],
    "exercises": [
      {
        "id": "907",
        "title": "Die Fugger",
        "folder": "die-fugger-907"
      },
      {
        "id": "2653",
        "title": "Die Hanse",
        "folder": "buddhismus-in-der-modernen-welt-34-2653"
      },
      {
        "id": "2978",
        "title": "Die Stadt im Mittelalter",
        "folder": "die-stadt-im-mittelalter-2978"
      },
      {
        "id": "3120",
        "title": "Handwerker und Zünfte",
        "folder": "handwerker-und-zunfte-3120"
      },
      {
        "id": "3083",
        "title": "Aufstieg des Bürgertums",
        "folder": "aufstieg-des-burgertums-3083"
      },
      {
        "id": "3086",
        "title": "Das Spätmittelalter",
        "folder": "das-spatmittelalter-3086"
      },
      {
        "id": "5358",
        "title": "Die Geschichte der Hanse",
        "folder": "die-geschichte-der-hanse-5358"
      },
      {
        "id": "5459",
        "title": "Die Entwicklung von Städten - Vom antiken Zentrum bis zur Megastadt",
        "folder": "die-entwicklung-von-stadten-vom-antiken-zentrum-bis-zur-megastadt-5459"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Mittelalterliche%20St%C3%A4dte%20%26%20Die%20Hanse+geschichte&t=3752"
  },
  "kirche-kloester-und-kreuzzuege": {
    "slug": "kirche-kloester-und-kreuzzuege",
    "title": "Kirche, Klöster, Kaiser & Kreuzzüge",
    "category": "Das Mittelalter",
    "shortDesc": "Macht der Kirche, 'Ora et labora', Karl der Große, Investiturstreit (Canossa) und Kreuzzüge nach Jerusalem.",
    "longDesc": "Das Fränkische Reich war ein bedeutendes Reich im Mittelalter. Es erstreckte sich über weite Teile Europas und prägte somit die Geschichte des Kontinents maßgeblich. Das Fränkische Reich entstand aus verschiedenen fränkischen Stämmen. Im Laufe der Zeit vereinigten sie sich dann unter der Herrschaft der Merowinger.",
    "keyPoints": [
      "Merowinger: Die Merowinger waren die erste fränkische Königsdynastie. Das heißt, sie legten den Grundstein für das Reich.",
      "Chlodwig: Chlodwig war ein bedeutender Merowingerkönig. Er vereinigte die Franken und nahm das Christentum an.",
      "Karl der Große: Karl der Große war einer der bekanntesten fränkischen Herrscher. Er erweiterte das Reich erheblich und wurde zum Kaiser gekrönt.",
      "Teilung des Reiches: Nach dem Tod Karls des Großen wurde das Reich unter seinen Enkeln aufgeteilt. Dies führte zur Entstehung verschiedener Nachfolgestaaten.",
      "Vertrag von Verdun: Der Vertrag von Verdun im Jahr 843 besiegelte die Teilung des Fränkischen Reiches. Hierdurch entstanden das Westfrankenreich, das Ostfrankenreich und das Mittelreich.",
      "Der Konflikt zwischen Papst Gregor VII. und König Heinrich IV.: Dieser Konflikt gilt als der Höhepunkt des Investiturstreits. Dabei exkommunizierte der Papst den König, woraufhin dieser den berühmten Gang nach Canossa antrat.",
      "Das Wormser Konkordat (1122): Dieses Abkommen beendete den Investiturstreit vorläufig. Demnach verzichtete der König auf die Investitur mit Ring und Stab, also den geistlichen Symbolen. Allerdings durfte er weiterhin bei der Wahl der Bischöfe anwesend sein und diese mit den weltlichen Herrschaftsrechten belehnen.",
      "Die Bedeutung für die Trennung von Kirche und Staat: Der Investiturstreit trug maßgeblich zur Trennung von geistlicher und weltlicher Macht bei und stärkte die Position des Papsttums."
    ],
    "exercises": [
      {
        "id": "2304",
        "title": "Das Fränkische Reich",
        "folder": "das-frankische-reich-2304"
      },
      {
        "id": "2321",
        "title": "Der Investiturstreit",
        "folder": "der-investiturstreit-2321"
      },
      {
        "id": "2364",
        "title": "Karl der Große",
        "folder": "karl-der-groese-2364"
      },
      {
        "id": "2652",
        "title": "Die Staufer",
        "folder": "buddhismus-in-der-modernen-welt-33-2652"
      },
      {
        "id": "3037",
        "title": "Mönche, Nonnen und Klöster im Mittelalter",
        "folder": "monche-nonnen-und-kloster-im-mittelalter-3037"
      },
      {
        "id": "3113",
        "title": "Rolle der Frau im Mittelalter",
        "folder": "rolle-der-frau-im-mittelalter-3113"
      },
      {
        "id": "5383",
        "title": "Die Kreuzzüge",
        "folder": "die-kreuzzuge-2-5383"
      },
      {
        "id": "6512",
        "title": "Der Papst - Amt, Bedeutung und Geschichte",
        "folder": "der-papst-amt-bedeutung-und-geschichte-6512"
      },
      {
        "id": "3353",
        "title": "Religiöse Konflikte und Machtfragen im Mittelalter",
        "folder": "religiose-konflikte-und-machtfragen-im-mittelalter-3353"
      },
      {
        "id": "6684",
        "title": "Kirche im Mittelalter",
        "folder": "kirche-im-mittelalter-6684"
      },
      {
        "id": "2307",
        "title": "Das Heilige Römische Reich",
        "folder": "das-heilige-romische-reich-2307"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kirche%2C%20Kl%C3%B6ster%2C%20Kaiser%20%26%20Kreuzz%C3%BCge+geschichte&t=3752"
  },
  "schwarzer-tod-die-pest": {
    "slug": "schwarzer-tod-die-pest",
    "title": "Schwarzer Tod, Seuchen & Gesellschaft im Spätmittelalter",
    "category": "Das Mittelalter",
    "shortDesc": "Die Pest (Schwarzer Tod) 1347–1353, Geißlerzüge, Judenverfolgung, die Inquisition, Hexenverfolgung und Deutsche Bauernkriege 1525.",
    "longDesc": "Die Lebensbedingungen der Bauern im 16. Jahrhundert waren hart. Hohe Abgaben, Hungersnöte und politische Machtlosigkeit führten zu wachsender Unzufriedenheit. Schließlich erhoben sich die Bauern gegen die Adligen und Geistlichen, um für mehr Rechte und bessere Lebensbedingungen zu kämpfen. Doch ihr Aufstand wurde blutig niedergeschlagen, und die Folgen prägten die Gesellschaft noch lange. Nach der Pest wuchs die Bevölkerung, doch die Ernteerträge blieben gering. Missernten und hohe Steuern trieben viele Bauern in die Armut. Obwohl sie den Großteil der Gesellschaft bildeten, hatten sie keinerlei politische Mitsprache. Gleichzeitig gab ihnen Martin Luthers Schrift „Von der Freyheith eines Christenmenschen“ Hoffnung. Sie deuteten seine Worte als Aufruf zur Befreiung und forderten Veränderungen. Erste Versammlungen führten 1524 zur Formulierung der 12 Artikel, die grundlegende Rechte verlangten. Doch die Adligen reagierten mit Gewalt, wodurch sich der Konflikt zuspitzte.",
    "keyPoints": [
      "1525 begann der bewaffnete Aufstand mit Plünderungen und Kämpfen.",
      "Die Bauern kämpften mit einfachen Werkzeugen gegen die gut ausgerüsteten Truppen.",
      "Nach mehreren Niederlagen wurden viele Bauern hingerichtet oder verstümmelt.",
      "Die Überlebenden verloren ihre Waffen und mussten hohe Strafen zahlen.",
      "Langfristig führte der Aufstand zu einem stärkeren Bewusstsein für soziale Gerechtigkeit."
    ],
    "exercises": [
      {
        "id": "823",
        "title": "Die Deutschen Bauernkriege",
        "folder": "die-deutschen-bauernkriege-823"
      },
      {
        "id": "3284",
        "title": "Die Merowinger",
        "folder": "die-merowinger-3284"
      },
      {
        "id": "3115",
        "title": "Die Karolinger",
        "folder": "die-karolinger-3115"
      },
      {
        "id": "3172",
        "title": "Die Vandalen",
        "folder": "die-vandalen-germanischer-stamm-3172"
      },
      {
        "id": "3177",
        "title": "Lebensweise der Germanen",
        "folder": "lebensweise-der-germanen-3177"
      },
      {
        "id": "3342",
        "title": "Die Inquisition",
        "folder": "die-inquisition-2342"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Die%20Deutschen%20Bauernkriege+geschichte&t=3752"
  },
  "renaissance-humanismus-und-buchdruck": {
    "slug": "renaissance-humanismus-und-buchdruck",
    "title": "Renaissance, Humanismus & Buchdruck",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Wiedergeburt der Antike, das neue Menschenbild, Leonardo da Vinci und Johannes Gutenbergs Druckrevolution.",
    "longDesc": "Die Vorstellung vom Universum hat sich im Laufe der Jahrhunderte stark verändert. Während das geozentrische Weltbild lange Zeit als unumstößlich galt, stellte Nikolaus Kopernikus mit seiner Theorie alles infrage. Doch erst durch die Unterstützung von Wissenschaftlern wie Johannes Kepler und Galileo Galilei konnte sich das kopernikanische Weltbild durchsetzen. Im 2. Jahrhundert beschrieb Claudius Ptolemäus das geozentrische Weltbild, nach dem die Erde der Mittelpunkt des Universums sei. Sonne, Mond und Planeten sollten um sie kreisen, befestigt an unsichtbaren Sphären. Diese Vorstellung wurde von der Kirche gestützt und blieb lange Zeit unangefochten. Allerdings veröffentlichte Nikolaus Kopernikus 1543 seine revolutionäre Theorie: Nicht die Erde, sondern die Sonne steht im Zentrum. Diese Erkenntnis traf auf starken Widerstand, wobei auch Wissenschaftler wie Johannes Kepler und Galileo Galilei versuchten, sie zu belegen. Trotz aller Gegenwehr konnte die Kirche letztlich nicht verhindern, dass sich das kopernikanische Weltbild durchsetzte.",
    "keyPoints": [
      "Kopernikus stellte fest, dass sich die Erde um die eigene Achse dreht",
      "Johannes Kepler erkannte, dass die Planeten sich auf elliptischen Bahnen bewegen",
      "Galileo Galilei belegte mit seinen Entdeckungen die Thesen von Kopernikus",
      "Die Kirche widersetzte sich lange, musste jedoch ihre Haltung später aufgeben",
      "Bis zum 18. Jahrhundert war das kopernikanische Weltbild allgemein anerkannt",
      "Bücher wurden günstiger, sodass mehr Menschen sie kaufen konnten",
      "Wissen verbreitete sich schneller und erreichte weitere Kreise",
      "Die Alphabetisierung nahm zu, weil Lesen nun einfacher war"
    ],
    "exercises": [
      {
        "id": "612",
        "title": "Das kopernikanische Weltbild",
        "folder": "das-kopernikanische-weltbild-612"
      },
      {
        "id": "2332",
        "title": "Die Erfindung des Buchdrucks",
        "folder": "die-erfindung-des-buchdrucks-2332"
      },
      {
        "id": "2918",
        "title": "Der Humanismus",
        "folder": "der-humanismus-2918"
      },
      {
        "id": "2973",
        "title": "Die Renaissance",
        "folder": "die-renaissance-2973"
      },
      {
        "id": "3001",
        "title": "Galileo Galilei",
        "folder": "galileo-galilei-3001"
      },
      {
        "id": "3032",
        "title": "Leonardo da Vinci",
        "folder": "leonardo-da-vinci-3032"
      },
      {
        "id": "3041",
        "title": "Nikolaus Kopernikus",
        "folder": "nikolaus-kopernikus-3041"
      },
      {
        "id": "3169",
        "title": "Die Neuzeit",
        "folder": "die-neuzeit-3169"
      },
      {
        "id": "3222",
        "title": "Escape Room \"Komponisten in Mittelalter und Renaissance\"",
        "folder": "escape-room-quot-komponisten-in-mittelalter-und-renaissance-quot-3222"
      },
      {
        "id": "2369",
        "title": "Literaturepoche Renaissance",
        "folder": "literaturepoche-renaissance-2369"
      },
      {
        "id": "3356",
        "title": "Gesellschaftliche und soziale Umwälzungen in der frühen Neuzeit",
        "folder": "gesellschaftliche-und-soziale-umwalzungen-in-der-fruhen-neuzeit-3356"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Renaissance%2C%20Humanismus%20%26%20Buchdruck+geschichte&t=3752"
  },
  "zeitalter-der-entdeckungen": {
    "slug": "zeitalter-der-entdeckungen",
    "title": "Das Zeitalter der Entdeckungen & Seefahrer",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Christoph Kolumbus 1492, Ferdinand Magellan, Vasco da Gama, Seewege nach Indien und Amerika vor Kolumbus.",
    "longDesc": "Im 15. und 16. Jahrhundert veränderte sich das Weltbild der Europäer grundlegend: Mit Kompass, Astrolabium und Karavellen wagten sich wagemutige Seefahrer auf die Weltmeere. Lerne die Entdeckungsfahrten von Kolumbus, Magellan und Vasco da Gama kennen.",
    "keyPoints": [
      "Motive der Entdecker: Suche nach einem Seeweg nach Indien zur Umgehung des osmanischen Gewürzmonopols",
      "Technische Neuerungen: Karavelle, Astrolabium, Kompass und verbesserte Kartographie",
      "Christoph Kolumbus 1492: Landung in der Karibik im Glauben, den westlichen Seeweg nach Asien gefunden zu haben",
      "Ferdinand Magellan: Erste Weltumsegelung (1519–1522) bewies endgültig die Kugelgestalt der Erde",
      "Amerika vor Kolumbus: Hochkulturen der Maya, Inka und Azteken mit hochstehender Astronomie und Baukunst"
    ],
    "exercises": [
      {
        "id": "615",
        "title": "Die Entdeckung Amerikas durch Christoph Kolumubus",
        "folder": "die-entdeckung-amerikas-durch-christoph-kolumubus-615"
      },
      {
        "id": "644",
        "title": "Die erste Weltumsegelung",
        "folder": "die-erste-weltumsegelung-644"
      },
      {
        "id": "891",
        "title": "Hochkulturen in Amerika",
        "folder": "hochkulturen-in-amerika-891"
      },
      {
        "id": "2990",
        "title": "Die wahren Entdecker Amerikas",
        "folder": "die-wahren-entdecker-amerikas-2990"
      },
      {
        "id": "3152",
        "title": "Amerika vor Kolumbus",
        "folder": "amerika-vor-kolumbus-3152"
      },
      {
        "id": "3843",
        "title": "Ferdinand Magellan",
        "folder": "ferdinand-magellan-3843"
      },
      {
        "id": "5386",
        "title": "Die Wiederentdeckung Amerikas durch Kolumbus",
        "folder": "die-wiederentdeckung-amerikas-durch-kolumbus-5386"
      },
      {
        "id": "2330",
        "title": "Die Entdeckung Australiens",
        "folder": "die-entdeckung-australiens-2330"
      },
      {
        "id": "3336",
        "title": "Entdeckung und Unabhängigkeit der USA",
        "folder": "entdeckung-und-unabhangigkeit-der-usa-3336"
      },
      {
        "id": "3346",
        "title": "Entdeckungen und Eroberungen in der Neuzeit",
        "folder": "entdeckungen-und-eroberungen-in-der-neuzeit-3346"
      },
      {
        "id": "5276",
        "title": "Die Entdeckung der Planetenbewegungen",
        "folder": "die-entdeckung-der-planetenbewegungen-5276"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zeitalter+der+Entdeckungen+Kolumbus&t=3752"
  },
  "reformation-und-dreissigjaehriger-krieg": {
    "slug": "reformation-und-dreissigjaehriger-krieg",
    "title": "Reformation, Glaubensspaltung & Dreißigjähriger Krieg",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Martin Luther, 95 Thesen 1517, Calvinismus, Hexenverfolgung und der Westfälische Friede 1648.",
    "longDesc": "Martin Luther prägte die Geschichte wie kaum ein anderer. Seine Thesen lösten eine kirchliche Revolution aus, die bis heute nachwirkt. Doch was führte ihn auf diesen Weg? Von seiner Ausbildung über den Thesenanschlag bis zu seinem Erbe – sein Leben zeigt, wie tief Überzeugungen die Welt verändern können. Geboren 1483 in Eisleben, erhielt Martin Luther eine umfassende schulische Ausbildung. Zunächst studierte er Rechtswissenschaften, doch nach einem prägenden Erlebnis trat er 1505 dem Augustinerorden bei. Dort begann er sein Theologiestudium und wurde bald Priester. Schließlich übernahm er eine Professur in Wittenberg, wodurch er seine reformatorischen Gedanken weiterentwickeln konnte. Allerdings geriet er zunehmend in Konflikt mit der katholischen Kirche. Denn er erkannte, dass nicht Ablassbriefe oder kirchliche Rituale, sondern allein der Glaube zählt. Daher veröffentlichte er 1517 seine berühmten 95 Thesen, die eine Welle der Veränderung auslösten.",
    "keyPoints": [
      "Eintritt in den Augustinerorden nach einem lebensverändernden Ereignis",
      "Theologiestudium und Professur für Bibelauslegung in Wittenberg",
      "Veröffentlichung der 95 Thesen als Protest gegen den Ablasshandel",
      "Exkommunikation durch den Papst und Schutz auf der Wartburg",
      "Übersetzung der Bibel ins Deutsche zur Förderung des Glaubensverständnisses",
      "Rückkehr nach Wittenberg, um seine reformatorische Arbeit fortzusetzen",
      "Spaltung der Kirche, die schließlich Europa nachhaltig veränderte",
      "Die Hexenprozesse: Diese Prozesse waren oft von Folter geprägt, um Geständnisse zu erzwingen. Dabei wurden den Beschuldigten die unglaublichsten Taten vorgeworfen."
    ],
    "exercises": [
      {
        "id": "742",
        "title": "Die Hexenverfolgung",
        "folder": "die-hexenverfolgung-742"
      },
      {
        "id": "2315",
        "title": "Der Ablasshandel",
        "folder": "der-ablasshandel-2315"
      },
      {
        "id": "2334",
        "title": "Die Gegenreformation",
        "folder": "die-gegenreformation-2334"
      },
      {
        "id": "2464",
        "title": "Ignatius von Loyola",
        "folder": "ignatius-von-loyola-2464"
      },
      {
        "id": "2898",
        "title": "Das Augsburger Bekenntnis",
        "folder": "das-augsburger-bekenntnis-2898"
      },
      {
        "id": "2914",
        "title": "Der Calvinismus",
        "folder": "der-calvinismus-2914"
      },
      {
        "id": "3354",
        "title": "Reformation und Gegenbewegungen",
        "folder": "reformation-und-gegenbewegungen-3354"
      },
      {
        "id": "4083",
        "title": "Martin Luther",
        "folder": "martin-luther-2-4083"
      },
      {
        "id": "5336",
        "title": "Der Dreißigjährige Krieg",
        "folder": "der-dreiesigjahrige-krieg-2-5336"
      },
      {
        "id": "5384",
        "title": "Die Reformation und ihre Folgen",
        "folder": "die-reformation-und-ihre-folgen-5384"
      },
      {
        "id": "2912",
        "title": "Der Augsburger Religionsfriede",
        "folder": "der-augsburger-religionsfriede-2912"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Reformation%2C%20Glaubensspaltung%20%26%20Drei%C3%9Figj%C3%A4hriger%20Krieg+geschichte&t=3752"
  },
  "absolutismus-und-ludwig-xiv": {
    "slug": "absolutismus-und-ludwig-xiv",
    "title": "Absolutismus & der Sonnenkönig Ludwig XIV.",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "L'État, c'est moi! – Schloss Versailles, Hofhaltung, stehendes Heer, Staatsverwaltung und Merkantilismus.",
    "longDesc": "Der Absolutismus war eine Epoche königlicher Alleinherrschaft in Europa im 17. und 18. Jahrhundert, deren berühmtester Vertreter König Ludwig XIV. von Frankreich (der 'Sonnenkönig', Regierungszeit 1643–1715) war. Nach dem Leitsatz 'L'État, c'est moi' (Der Staat bin ich) konzentrierte der König die gesamte legislative, exekutive und judikative Macht auf seine Person. Gestützt auf ein stehendes Heer, eine loyale Beamtenschaft, die katholische Staatskirche und das Wirtschaftssystem des Merkantilismus nach Jean-Baptiste Colbert wurde das prunkvolle Schloss Versailles zum strahlenden Zentrum europäischer Macht.",
    "keyPoints": [
      "Fünf Säulen der absolutistischen Herrschaft: 1. Stehendes Heer, 2. Staatsverwaltung mit Beamten, 3. Hofstaat in Versailles, 4. Staatsreligion (Katholizismus), 5. Merkantilismus",
      "Schloss Versailles: Politisches Zentrum und goldener Käfig für den Adel, um dessen Entmachtung und ständige Kontrolle zu sichern",
      "Wirtschaftssystem Merkantilismus (Colbert): Maximierung von Exporten (Fertigwaren) und Minimierung von Importen (Zölle), Manufakturen und Rohstoffgewinnung in Kolonien",
      "Ständegesellschaft im Absolutismus: Klerus (1. Stand) und Adel (2. Stand) genossen Steuerprivilegien; Bürger und Bauern (3. Stand, über 95 %) trugen die gesamte Steuerlast",
      "Kriege & Staatsverschuldung: Expansionskriege und prunkvolle Hofhaltung führten Frankreich in eine schwere Finanzkrise, die später die Revolution 1789 auslöste"
    ],
    "exercises": [
      {
        "id": "611",
        "title": "Absolutismus",
        "folder": "absolutismus-611"
      },
      {
        "id": "2904",
        "title": "Das Leben am königlichen Hof im Absolutismus",
        "folder": "das-leben-am-koniglichen-hof-im-absolutismus-2904"
      },
      {
        "id": "2929",
        "title": "Der Sonnenkönig Ludwig XIV.",
        "folder": "der-sonnenkonig-ludwig-xiv-2929"
      },
      {
        "id": "2956",
        "title": "Die Gesellschaft im Absolutismus",
        "folder": "die-geselllschaft-im-absolutismus-2956"
      },
      {
        "id": "2319",
        "title": "Der Englische Bürgerkrieg",
        "folder": "der-englische-burgerkrieg-2319"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Absolutismus%20Ludwig%20XIV+geschichte&t=3752"
  },
  "die-aufklaerung-ideen-und-denker": {
    "slug": "die-aufklaerung-ideen-und-denker",
    "title": "Die Aufklärung: Ideen, Vernunft & Philosophen",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Kant, Rousseau, Gewaltenteilung, Menschenrechte und das Zeitalter der Vernunft.",
    "longDesc": "„Habe Mut, dich deines eigenen Verstandes zu bedienen!“ Mit diesem Leitspruch forderte Immanuel Kant die Menschen auf, Dogmen zu hinterfragen. Lerne die Denker der europäischen Aufklärung (Kant, Rousseau, Locke, Montesquieu) und ihre Ideen von Freiheit, Toleranz und Gewaltenteilung kennen.",
    "keyPoints": [
      "Leitgedanke: Vernunft (Rationalismus) und Erfahrung (Empirismus) als Maßstab allen Handelns",
      "Immanuel Kant: Kritik der reinen Vernunft und der Kategorische Imperativ als moralisches Handlungsgesetz",
      "Gewaltenteilung nach Montesquieu: Trennung in Legislative (Gesetzgebung), Exekutive (Ausführung) und Judikative (Rechtsprechung)",
      "Gesellschaftsvertrag nach Rousseau: Volkssouveränität und Gemeinwille gegen absolute Fürstenherrschaft",
      "Toleranz und Menschenrechte: Bekämpfung religiöser Intoleranz, Zensur und Folter"
    ],
    "exercises": [
      {
        "id": "1424",
        "title": "Immanuel Kant",
        "folder": "immanuel-kant-1424"
      },
      {
        "id": "2363",
        "title": "Jean-Jacques Rousseau",
        "folder": "jean-jacques-rousseau-2363"
      },
      {
        "id": "5342",
        "title": "Die Aufklärung",
        "folder": "die-aufklarung-2-5342"
      },
      {
        "id": "5748",
        "title": "Denkformen der Aufklärung",
        "folder": "denkformen-der-aufklarung-5748"
      },
      {
        "id": "4327",
        "title": "Voltaire",
        "folder": "voltaire-4327"
      },
      {
        "id": "4029",
        "title": "John Locke",
        "folder": "john-locke-4029"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Die+Aufklaerung+Kant+Rousseau&t=3752"
  },
  "die-franzoesische-revolution-1789": {
    "slug": "die-franzoesische-revolution-1789",
    "title": "Die Französische Revolution (1789–1799)",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Sturm auf die Bastille, Menschenrechtserklärung, Guillotine, Schreckensherrschaft von Robespierre und die Jakobiner.",
    "longDesc": "Freiheit, Gleichheit, Brüderlichkeit (Liberté, Égalité, Fraternité): 1789 stürzte das französische Volk die alte Ordnung des Ancien Régime. Erfahre alles über den Ballhausschwur, die Erklärung der Menschenrechte, die Hinrichtung Ludwigs XVI. und die Schreckensherrschaft der Jakobiner.",
    "keyPoints": [
      "Ursachen: Staatsbankrott Frankreichs, Missernten und krasse Ungerechtigkeit der Drei-Stände-Ordnung",
      "Ausbruch 1789: Einberufung der Generalstände, Ballhausschwur des Dritten Standes und Sturm auf die Bastille am 14. Juli",
      "Erklärung der Menschen- und Bürgerrechte: Gleichheit aller Bürger vor dem Gesetz, Eigentums- und Meinungsfreiheit",
      "Radikalisierung & Jakobiner-Terror: Hinrichtung Ludwigs XVI. 1793, Schreckensherrschaft (La Terreur) unter Maximilien de Robespierre",
      "Folgen: Ende des Feudalismus in Europa, Trennung von Staat und Kirche und Entstehung moderner Verfassungsstaaten"
    ],
    "exercises": [
      {
        "id": "328",
        "title": "Französische Revolution",
        "folder": "franzosische-revolution-328"
      },
      {
        "id": "2948",
        "title": "Die Erklärung der Menschen- und Bürgerrechte 1789",
        "folder": "die-erklarung-der-menschen-und-burgerreichte-1789-2948"
      },
      {
        "id": "2975",
        "title": "Die Schreckensherrschaft von Robespierre",
        "folder": "die-schreckensherrschaft-von-robespierre-2975"
      },
      {
        "id": "3232",
        "title": "Escape Room \"Robespierre und Napoleon\"",
        "folder": "escape-room-quot-robespierre-und-napoleon-quot-3232"
      },
      {
        "id": "3259",
        "title": "Die Französische Revolution 1 - 1789",
        "folder": "die-franzosische-revolution-1-1789-3259"
      },
      {
        "id": "3260",
        "title": "Die Französische Revolution – Bastille",
        "folder": "die-franzosische-revolution-2-bastille-3260"
      },
      {
        "id": "3262",
        "title": "Die Französische Revolution 3 - Robespierre",
        "folder": "die-franzosische-revolution-3-robespierre-3262"
      },
      {
        "id": "3366",
        "title": "Die französische Revolution und die Folgen",
        "folder": "die-franzosische-revolution-und-die-folgen-3366"
      },
      {
        "id": "5345",
        "title": "Die französische Revolution, Napoleon und die Folgen",
        "folder": "die-franzosische-revolution-napoleon-und-die-folgen-5345"
      },
      {
        "id": "5409",
        "title": "Was wäre, wenn die Französische Revolution gescheitert wäre …",
        "folder": "was-ware-wenn-die-franzosische-revolution-gescheitert-ware-5409"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Franzoesische+Revolution+1789&t=3752"
  },
  "napoleon-bonaparte-und-wiener-kongress": {
    "slug": "napoleon-bonaparte-und-wiener-kongress",
    "title": "Napoleon Bonaparte & der Wiener Kongress",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Kaiserkrönung, Code Civil, Russlandfeldzug 1812, Schlacht bei Waterloo und Wiener Kongress 1815.",
    "longDesc": "Napoleon Bonaparte zählt zu den bekanntesten Persönlichkeiten der europäischen Geschichte. Seine Laufbahn vom korsischen Jungen zum mächtigen Kaiser faszinierte nicht nur seine Zeitgenossen, sondern wirkt bis heute nach. Doch hinter dem Mythos steckt eine komplexe Geschichte voller Erfolge, Niederlagen und Reformen. Napoleon Bonaparte wurde 1769 auf Korsika geboren und entschied sich früh für eine militärische Karriere. Während der Französischen Revolution kämpfte er für die neuen Ideale und gewann schnell an Einfluss. 1799 riss er durch einen Putsch die Macht an sich und ernannte sich wenige Jahre später zum Kaiser. Napoleon Bonaparte wollte Europa neu ordnen und kämpfte in zahlreichen Koalitionskriegen gegen andere Großmächte. Seine Reformen, insbesondere der „Code Civil“, schufen neue rechtliche Strukturen, die in vielen Ländern bis heute Bestand haben. Obwohl seine Herrschaft mit der Niederlage bei Waterloo endete, prägte er Politik und Gesellschaft nachhaltig.",
    "keyPoints": [
      "Geburt 1769 auf Korsika",
      "Militärkarriere während der Französischen Revolution",
      "Machtübernahme durch Staatsstreich 1799",
      "Selbstkrönung zum Kaiser 1804",
      "Einführung des „Code Civil“ als einheitliches Gesetzbuch",
      "Russlandfeldzug 1812 mit schweren Verlusten",
      "Niederlage in der Völkerschlacht von Leipzig 1813",
      "Rückkehr aus dem Exil und „Herrschaft der 100 Tage“ 1815"
    ],
    "exercises": [
      {
        "id": "321",
        "title": "Napoleon",
        "folder": "napoleon-321"
      },
      {
        "id": "329",
        "title": "Wiener Kongress",
        "folder": "wiener-kongress-329"
      },
      {
        "id": "2344",
        "title": "Die Koalitionskriege",
        "folder": "die-koalitionskriege-2344"
      },
      {
        "id": "2927",
        "title": "Der Russlandfeldzug Napoleons",
        "folder": "der-russlandfeldzug-napoleons-2927"
      },
      {
        "id": "2988",
        "title": "Die Völkerschlacht von Leipzig",
        "folder": "die-volkerschlacht-von-leipzig-2988"
      },
      {
        "id": "3035",
        "title": "Metternich und der Vormärz in Österreich",
        "folder": "metternich-und-der-vormarz-in-sterreich-3035"
      },
      {
        "id": "4118",
        "title": "Napoleon Bonaparte",
        "folder": "napoleon-bonaparte-4118"
      },
      {
        "id": "5421",
        "title": "Was wäre, wenn Napoleon in Russland gesiegt hätte …",
        "folder": "was-ware-wenn-napoleon-in-russland-gesiegt-hatte-5421"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Napoleon%20Bonaparte%20%26%20Der%20Wiener%20Kongress+geschichte&t=3752"
  },
  "aufklaerung-schulpflicht-und-reformen": {
    "slug": "aufklaerung-schulpflicht-und-reformen",
    "title": "Aufklärung, Bildung & Schulpflicht",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Maria Theresia, Josephinismus, Allgemeine Schulordnung 1774 und die Emanzipation durch Bildung.",
    "longDesc": "Im 18. Jahrhundert erfasste der Geist der europäischen Aufklärung auch die Habsburgermonarchie. Mit der Einführung der allgemeinen Schulpflicht 1774 legte Maria Theresia den Grundstein für das moderne Bildungswesen.",
    "keyPoints": [
      "Allgemeine Schulordnung (1774): Einführung der 6-jährigen Schulpflicht für alle Jungen und Mädchen von 6 bis 12 Jahren",
      "Drei Schultypen: Trivialschulen (auf dem Land), Hauptschulen (in Städten) und Normalschulen (zur Lehrerausbildung)",
      "Leitziel der Aufklärung: 'Sapere aude!' (Habe Mut, dich deines eigenen Verstandes zu bedienen) – Überwindung von Analphabetismus und Aberglauben",
      "Josephinismus: Kaiser Joseph II. schaffte die Leibeigenschaft ab und erließ das Toleranzpatent für Religionsfreiheit"
    ],
    "exercises": [
      {
        "id": "3160",
        "title": "Die Einführung der Schulpflicht",
        "folder": "die-einfuhrung-der-schulpflicht-3160"
      },
      {
        "id": "3018",
        "title": "Kaiser Josef II. und seine Reformen",
        "folder": "kaiser-josef-ii-und-seine-reformen-3018"
      },
      {
        "id": "3022",
        "title": "Kaiserin Maria Theresia",
        "folder": "kaiserin-maria-theresia-3022"
      },
      {
        "id": "544",
        "title": "Das Musical Maria Theresia",
        "folder": "das-musical-maria-theresia-544"
      },
      {
        "id": "aufkmus",
        "title": "Die Rolle von Musik in der Aufklärung",
        "folder": "die-rolle-von-musik-in-der-aufklaerung"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schulpflicht+aufklaerung&t=3752"
  },
  "chronik-des-18-jahrhunderts": {
    "slug": "chronik-des-18-jahrhunderts",
    "title": "Chronik des 18. Jahrhunderts (1753–1785)",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Jahreschronik der europäischen Aufklärung, des Siebenjährigen Krieges und der Vorboten der Moderne.",
    "longDesc": "Die zweite Hälfte des 18. Jahrhunderts war eine Epoche tiefgreifender Umbrüche: Der Siebenjährige Krieg ordnete die Mächteverhältnisse neu, Philosophen wie Voltaire, Rousseau und Kant formulierten die Menschenrechte, und in Amerika entzündete sich der Unabhängigkeitskrieg.",
    "keyPoints": [
      "Siebenjähriger Krieg (1756–1763): Globaler Konflikt zwischen Preußen/Großbritannien und Österreich/Frankreich/Russland",
      "Amerikanischer Unabhängigkeitskrieg (1775–1783): Unabhängigkeitserklärung der USA 1776 als Meilenstein moderner Demokratie",
      "Kulturelle Blüte: Wiener Klassik (Haydn, Mozart), Aufklärungsliteratur und wissenschaftliche Enzyklopädien"
    ],
    "exercises": [
      {
        "id": "4864",
        "title": "Das Jahr 1753 im Überblick",
        "folder": "1753-4864"
      },
      {
        "id": "4868",
        "title": "Das Jahr 1757 im Überblick",
        "folder": "1757-4868"
      },
      {
        "id": "4872",
        "title": "Das Jahr 1761 im Überblick",
        "folder": "1761-4872"
      },
      {
        "id": "4876",
        "title": "Das Jahr 1765 im Überblick",
        "folder": "1765-4876"
      },
      {
        "id": "4880",
        "title": "Das Jahr 1769 im Überblick",
        "folder": "1769-4880"
      },
      {
        "id": "4888",
        "title": "Das Jahr 1777 im Überblick",
        "folder": "1777-4888"
      },
      {
        "id": "4892",
        "title": "Das Jahr 1781 im Überblick",
        "folder": "1781-4892"
      },
      {
        "id": "4812",
        "title": "Das Jahr 1700 im Überblick",
        "folder": "1700-4812"
      },
      {
        "id": "4822",
        "title": "Das Jahr 1710 im Überblick",
        "folder": "1710-4822"
      },
      {
        "id": "4832",
        "title": "Das Jahr 1720 im Überblick",
        "folder": "1720-4832"
      },
      {
        "id": "4842",
        "title": "Das Jahr 1730 im Überblick",
        "folder": "1730-4842"
      },
      {
        "id": "4852",
        "title": "Das Jahr 1740 im Überblick",
        "folder": "1740-4852"
      },
      {
        "id": "5123",
        "title": "Das Jahr 1750 im Überblick",
        "folder": "1750-5123"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=18+jahrhundert&t=3752"
  },
  "die-schweizer-eidgenossenschaft-und-bundesstaat": {
    "slug": "die-schweizer-eidgenossenschaft-und-bundesstaat",
    "title": "Schweizer Geschichte: Eidgenossenschaft & Bundesstaat",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Vom Bundesbrief 1291 über die Helvetik und den Sonderbundskrieg zur Bundesverfassung 1848.",
    "longDesc": "Die Entstehung der modernen Schweiz ist ein einzigartiger Prozess vom mittelalterlichen Bündnisgeflecht der Urkantone über fremde Vorherrschaft bis zum modernen Bundesstaat mit dauerhafter Neutralität.",
    "keyPoints": [
      "Bundesbrief von 1291: Bündnis der drei Waldstätte Uri, Schwyz und Unterwalden zur Wahrung ihres Friedens und Rechts",
      "Alte Eidgenossenschaft: Dreizehn Alte Orte schufen ein Geflecht aus Bündnissen und Gemeinen Herrschaften",
      "Helvetische Republik (1798–1803): Von Frankreich aufgezwungener Zentralstaat, Vorläufer moderner Bürgerrechte",
      "Sonderbundskrieg (1847) & Bundesstaat (1848): Letzter Bürgerkrieg führte zur fortschrittlichen Bundesverfassung von 1848"
    ],
    "exercises": [
      {
        "id": "6301",
        "title": "Der Bundesbrief von 1291",
        "folder": "der-bundesbrief-von-1291-6301"
      },
      {
        "id": "6342",
        "title": "Die Alte Eidgenossenschaft",
        "folder": "die-alte-eidgenossenschaft-6342"
      },
      {
        "id": "6351",
        "title": "Die Helvetische Republik",
        "folder": "die-helvetische-republik-6351"
      },
      {
        "id": "6335",
        "title": "Der Sonderbundskrieg",
        "folder": "der-sonderbundskrieg-6335"
      },
      {
        "id": "6724",
        "title": "Schweizer Garde - Geschichte und Aufgaben",
        "folder": "schweizer-garde-geschichte-und-aufgaben-6724"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweizer+geschichte&t=3752"
  },
  "industrielle-revolution-und-soziale-frage": {
    "slug": "industrielle-revolution-und-soziale-frage",
    "title": "Industrielle Revolution & die Soziale Frage",
    "category": "19. Jahrhundert & Deutsches Kaiserreich",
    "shortDesc": "Dampfmaschine, Fabrikarbeit, Landflucht, Kinderarbeit, Karl Marx, Arbeiterbewegung und Sozialgesetzgebung.",
    "longDesc": "Die Industrielle Revolution war eine Epoche tiefgreifender Veränderungen, die das Leben der Menschen und die Gesellschaft nachhaltig prägte. Die Industrielle Revolution begann im späten 18. Jahrhundert in Großbritannien und breitete sich im Laufe des 19. Jahrhunderts auf andere Teile Europas und die Welt aus. Dabei kennzeichnete sie der Übergang von einer Agrar- zur Industriegesellschaft. Aufgrund neuer Erfindungen und Technologien, insbesondere im Bereich der Textilindustrie und der Dampfmaschine, veränderte sich die Produktion grundlegend. Zudem trugen Faktoren wie Bevölkerungswachstum, verbesserte Agrarmethoden und der Zugang zu Rohstoffen aus den Kolonien zur Industrialisierung bei.",
    "keyPoints": [
      "Neue Technologien und Fabriken: Die Erfindung neuer Maschinen, wie des mechanischen Webstuhls und der Dampfmaschine, ermöglichte die Massenproduktion in Fabriken. Dadurch veränderte sich die Arbeitswelt grundlegend.",
      "Wachstum der Städte und soziale Veränderungen: Die Industrialisierung führte zu einem starken Wachstum der Städte, da viele Menschen vom Land in die Städte zogen, um in den Fabriken zu arbeiten. Infolgedessen entstanden neue soziale Probleme wie Armut, Überbevölkerung und schlechte Arbeitsbedingungen.",
      "Verbesserungen im Transportwesen: Die Erfindung der Dampflokomotive und des Dampfschiffs revolutionierte den Transport von Gütern und Personen. Dadurch wurden Handel und Kommunikation erleichtert und beschleunigt.",
      "Der Kommunismus nach Marx und Engels: Karl Marx und Friedrich Engels analysierten die Situation der Arbeiterklasse und entwickelten die kommunistische Ideologie. Demnach sahen sie den Klassenkampf zwischen Bourgeoisie und Proletariat als treibende Kraft der Geschichte und forderten eine Revolution zur Errichtung einer klassenlosen Gesellschaft.",
      "Die soziale Verantwortung der Kirche: Die Kirche reagierte ebenfalls auf die soziale Not. Beispielsweise betonte Papst Leo XIII. in der Enzyklika „Rerum Novarum“ die soziale Verantwortung der Unternehmer und forderte gerechtere Arbeitsbedingungen.",
      "Die Sozialgesetzgebung Bismarcks: Im Deutschen Reich führte Otto von Bismarck Sozialgesetze ein, wie Kranken-, Unfall- und Rentenversicherungen. Dadurch versuchte er, die Lebensbedingungen der Arbeiter zu verbessern und den Einfluss der Sozialdemokratie einzudämmen.",
      "Bau der ersten großen Eisenbahnlinien",
      "Gründung der Nordostbahn-Gesellschaft"
    ],
    "exercises": [
      {
        "id": "336",
        "title": "Dampfmaschine",
        "folder": "dampfmaschine-336"
      },
      {
        "id": "347",
        "title": "Die soziale Frage - Kapitalismus und Sozialismus",
        "folder": "die-soziale-frage-kapitalismus-und-sozialismus-347"
      },
      {
        "id": "2309",
        "title": "Das kommunistische Manifest",
        "folder": "das-kommunistische-manifest-2309"
      },
      {
        "id": "2320",
        "title": "Der Frühkapitalismus",
        "folder": "der-fruhkapitalismus-2320"
      },
      {
        "id": "2994",
        "title": "Die Zweite Industrielle Revolution",
        "folder": "die-zweite-industrielle-revolution-2994"
      },
      {
        "id": "3000",
        "title": "Friedrich Engels",
        "folder": "friedrich-engels-3000"
      },
      {
        "id": "3023",
        "title": "Karl Marx",
        "folder": "karl-marx-3023"
      },
      {
        "id": "5382",
        "title": "Die Industrielle Revolution",
        "folder": "die-industrielle-revolution-5382"
      },
      {
        "id": "5410",
        "title": "Was wäre, wenn die Industrialisierung nie stattgefunden hätte …",
        "folder": "was-ware-wenn-die-industrialisierung-nie-stattgefunden-hatte-5410"
      },
      {
        "id": "5501",
        "title": "Industrialisierung - Der Weg von der Agrar- zur Industriegesellschaft",
        "folder": "industrialisierung-der-weg-von-der-agrar-zur-industriegesellschaft-5501"
      },
      {
        "id": "3552",
        "title": "Kinderarbeit",
        "folder": "kinderarbeit-3552"
      },
      {
        "id": "3540",
        "title": "Gewerkschaften in Deutschland",
        "folder": "gewerkschaften-in-deutschland-3540"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Industrielle%20Revolution%20%26%20Die%20Soziale%20Frage+geschichte&t=3752"
  },
  "vormaerz-und-revolution-1848": {
    "slug": "vormaerz-und-revolution-1848",
    "title": "Vormärz & die Revolution von 1848/49",
    "category": "19. Jahrhundert & Deutsches Kaiserreich",
    "shortDesc": "Hambacher Fest, Märzrevolution 1848, Nationalversammlung in der Frankfurter Paulskirche und Grundrechte.",
    "longDesc": "Im 19. Jahrhundert veränderte sich in Deutschland vieles. Zuerst lebten die Menschen in einem lockeren Staatenbund. Doch bald wuchs der Wunsch nach einem gemeinsamen Land. Vor allem Bürger und Studenten hofften auf einen Nationalstaat. Es folgten wichtige politische Umbrüche, Kriege und schließlich die Gründung des Deutschen Kaiserreichs. Der Deutsche Bund entstand beim Wiener Kongress. Dabei schlossen sich 39 Staaten locker zusammen. Allerdings wollten viele Menschen ein einheitliches Deutschland. Deshalb kam es 1848 zu Protesten und zur Nationalversammlung in Frankfurt. Diese scheiterte jedoch. Österreich und Preußen stritten weiter um die Führung. Erst Otto von Bismarck brachte Bewegung. Er wurde 1862 Reichskanzler. Danach gewann Preußen den Krieg gegen Österreich. Darauf gründete sich der Norddeutsche Bund. Wenig später führte Bismarck auch einen Krieg gegen Frankreich. Sogar Paris wurde belagert. Damit war der Weg zur Kaiserkrönung frei. 1871 wurde Wilhelm I. in Versailles zum Kaiser gekrönt.",
    "keyPoints": [
      "Wiener Kongress und Gründung des Deutschen Bundes",
      "Forderung nach einem Nationalstaat, aber Scheitern 1848",
      "Machtkampf zwischen Preußen und Österreich",
      "Otto von Bismarck wird Reichskanzler",
      "Krieg gegen Österreich, danach Gründung des Norddeutschen Bundes",
      "Krieg gegen Frankreich, Sieg der deutschen Staaten",
      "Kaiserkrönung 1871 in Versailles",
      "Kulturkampf und Sozialgesetze unter Bismarck"
    ],
    "exercises": [
      {
        "id": "348",
        "title": "Deutschland im 19. Jahrhundert - deutscher Bund und Kaiserreich",
        "folder": "deutschland-im-19-jahrhundert-deutscher-bund-und-kaiserreich-348"
      },
      {
        "id": "2941",
        "title": "Die Deutsche Nationalversammlung in Frankfurt a.M.",
        "folder": "die-deutsche-nationalversammlung-in-frankfurt-a-m-2941"
      },
      {
        "id": "3053",
        "title": "Revolutionen 1848 und 1849",
        "folder": "revolutionen-1848-und-1849-3053"
      },
      {
        "id": "3076",
        "title": "Der deutsche Bund",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-7-3076"
      },
      {
        "id": "4956",
        "title": "Das Jahr 1848",
        "folder": "1848-4956"
      },
      {
        "id": "2375",
        "title": "Literaturepoche Biedermeier",
        "folder": "literaturepoche-biedermeier-2375"
      },
      {
        "id": "2343",
        "title": "Die Julirevolution",
        "folder": "die-julirevolution-2343"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Vorm%C3%A4rz%20%26%20Die%20Revolution%20von%201848%2F49+geschichte&t=3752"
  },
  "otto-von-bismarck-und-deutsches-kaiserreich": {
    "slug": "otto-von-bismarck-und-deutsches-kaiserreich",
    "title": "Otto von Bismarck & das Deutsche Kaiserreich",
    "category": "19. Jahrhundert & Deutsches Kaiserreich",
    "shortDesc": "Reichsgründung 1871 in Versailles, drei Einigungskriege, Bismarcks Bündnissystem, Kulturkampf und Sozialistengesetze.",
    "longDesc": "Otto von Bismarck (1815–1898) war als preußischer Ministerpräsident und erster Reichskanzler die dominierende politische Gestalt bei der Gründung des Deutschen Kaiserreichs 1871. Durch die drei 'Einigungskriege' (1864 gegen Dänemark, 1866 gegen Österreich, 1870/71 gegen Frankreich) setzte er die kleindeutsche Lösung unter preußischer Führung durch. Seine Innenpolitik war geprägt vom Kampf gegen Katholiken (Kulturkampf) und Sozialdemokraten (Sozialistengesetze), flankiert durch die weltweit erste staatliche Sozialgesetzgebung. Außenpolitisch sicherte er den Frieden in Europa durch ein komplexes Bündnissystem zur Isolation Frankreichs.",
    "keyPoints": [
      "Die drei Einigungskriege: Deutsch-Dänischer Krieg 1864, Deutscher Krieg 1866 (Sieg über Österreich) und Deutsch-Französischer Krieg 1870/71",
      "Kaiserproklamation von Versailles (18. Januar 1871): Ausrufung Wilhelms I. zum deutschen Kaiser im Spiegelsaal von Versailles",
      "Reichsverfassung 1871: Preußische Hegemonie, starker Reichskanzler und konstitutionelle Monarchie mit Reichstag",
      "Bismarcks Bündnissystem: Außenpolitische Absicherung des Status quo und Isolation Frankreichs (Dreikaiserabkommen, Zweibund, Rückversicherungsvertrag)",
      "Innenpolitik & Gesetze: Kulturkampf gegen das Zentrum, Sozialistengesetz gegen die Arbeiterbewegung und Einführung der bahnbrechenden Sozialversicherung (Kranken-, Unfall- und Rentenversicherung)"
    ],
    "exercises": [
      {
        "id": "2328",
        "title": "Die Außenpolitik des Deutschen Kaiserreichs",
        "folder": "die-auesenpolitik-des-deutschen-kaiserreichs-2328"
      },
      {
        "id": "3045",
        "title": "Otto von Bismarck",
        "folder": "otto-von-bismarck-3045"
      },
      {
        "id": "3263",
        "title": "Otto von Bismarck und das Reich",
        "folder": "otto-von-bismarck-und-das-reich-3263"
      },
      {
        "id": "3323",
        "title": "Vom Deutschen Bund zum Kaiserreich",
        "folder": "vom-deutschen-bund-zum-kaiserreich-3323"
      },
      {
        "id": "3324",
        "title": "Politik des deutschen Kaiserreichs",
        "folder": "politik-des-deutschen-kaiserreichs-3324"
      },
      {
        "id": "4979",
        "title": "1871",
        "folder": "1871-4979"
      },
      {
        "id": "2337",
        "title": "Die Gesellschaft im deutschen Kaiserreich",
        "folder": "die-gesellschaft-im-deutschen-kaiserreich-2337"
      },
      {
        "id": "2900",
        "title": "Das deutsche Kaiserreich",
        "folder": "das-deutsche-kaiserreich-2900"
      },
      {
        "id": "3020",
        "title": "Kaiser Wilhelm I.",
        "folder": "kaiser-wilhelm-i-3020"
      },
      {
        "id": "3021",
        "title": "Kaiser Wilhelm II.",
        "folder": "kaiser-wilhelm-ii-3021"
      },
      {
        "id": "5401",
        "title": "Was wäre, wenn das Deutsche Kaiserreich zur Demokratie reformiert worden wäre?",
        "folder": "was-ware-wenn-das-deutsche-kaiserreich-zur-demokratie-reformiert-worden-ware-5401"
      },
      {
        "id": "4152",
        "title": "Otto von Bismarck (2)",
        "folder": "otto-von-bismarck-2-4152"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Otto%20von%20Bismarck%20%26%20Das%20Deutsche%20Kaiserreich+geschichte&t=3752"
  },
  "kolonialismus-und-imperialismus": {
    "slug": "kolonialismus-und-imperialismus",
    "title": "Kolonialismus, Imperialismus & Globale Konflikte",
    "category": "19. Jahrhundert & Deutsches Kaiserreich",
    "shortDesc": "Britisches Empire, Kolonien in Afrika, amerikanischer Sezessionskrieg, Dreieckshandel und Apartheid.",
    "longDesc": "Im Zeitalter des Hochimperialismus teilten die europäischen Großmächte die Welt unter sich auf. Lerne die wirtschaftliche Ausbeutung der Kolonien, den transatlantischen Sklavenhandel, das britische Empire in Indien, deutsche Kolonien in Afrika, den amerikanischen Bürgerkrieg und die Apartheid kennen.",
    "keyPoints": [
      "Imperialismus & Wettlauf um Afrika: Berliner Kongokampagne 1884/85 und Aufteilung des afrikanischen Kontinents",
      "Britisches Empire: „Die Perle der Krone“ Indien und weltweites Kolonialreich der Krone",
      "Deutsche Kolonialpolitik: Erwerb von Kolonien unter Bismarck und Wilhelm II. (Deutsch-Südwestafrika, Deutsch-Ostafrika)",
      "Transatlantischer Dreieckshandel: Verschleppung von Millionen versklavter Menschen aus Afrika nach Amerika",
      "Amerikanischer Bürgerkrieg (1861–1865): Sezessionskrieg zwischen Nord- und Südstaaten und Abschaffung der Sklaverei unter Lincoln",
      "Apartheid in Südafrika: Gesetzliche Rassentrennung, Unterdrückung der schwarzen Bevölkerungsmehrheit und Nelson Mandela"
    ],
    "exercises": [
      {
        "id": "2311",
        "title": "Das portugiesische Kolonialreich",
        "folder": "das-portugiesische-kolonialreich-2311"
      },
      {
        "id": "2312",
        "title": "Das Spanische Kolonialreich",
        "folder": "das-spanische-kolonialreich-2312"
      },
      {
        "id": "2365",
        "title": "Kolonialpolitik in Afrika",
        "folder": "kolonialpolitik-in-afrika-2365"
      },
      {
        "id": "2899",
        "title": "Das britische Empire",
        "folder": "das-britische-empire-2899"
      },
      {
        "id": "2932",
        "title": "Der Transatlantische Sklavenhandel",
        "folder": "der-transatlantische-sklavenhandel-2932"
      },
      {
        "id": "2955",
        "title": "Die Geschichte Mexikos",
        "folder": "die-geschichte-mexikos-2955"
      },
      {
        "id": "3348",
        "title": "Die größten Kolonialreiche",
        "folder": "die-groesten-kolonialreiche-3348"
      },
      {
        "id": "3153",
        "title": "Der Atlantische Dreieckshandel",
        "folder": "der-atlantische-dreieckshandel-3153"
      },
      {
        "id": "5335",
        "title": "Der Amerikanische Bürgerkrieg",
        "folder": "der-amerikanische-burgerkrieg-2-5335"
      },
      {
        "id": "824",
        "title": "Indien als britische Kolonie",
        "folder": "indien-als-britische-kolonie-824"
      },
      {
        "id": "886",
        "title": "Deutsche Kolonien",
        "folder": "deutsche-kolonien-886"
      },
      {
        "id": "887",
        "title": "Die Apartheid in Südafrika",
        "folder": "die-apartheid-887"
      },
      {
        "id": "3071",
        "title": "Die Geschichte Brasiliens",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-2-3071"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kolonialismus+Imperialismus&t=3752"
  },
  "das-kaisertum-oesterreich-und-die-habsburger": {
    "slug": "das-kaisertum-oesterreich-und-die-habsburger",
    "title": "Das Kaisertum Österreich & Die Habsburgerdynastie",
    "category": "19. Jahrhundert & Deutsches Kaiserreich",
    "shortDesc": "Aufstieg zur Großmacht, Heiratspolitik, Franz Joseph I., Kaiserin Sisi und die Hofburg.",
    "longDesc": "„Bella gerant alii, tu felix Austria nube“ (Kriege mögen andere führen, du glückliches Österreich heirate): Entdecke den Aufstieg des Hauses Habsburg zur europäischen Großmacht, die Gründung des Kaisertums Österreich 1804 und die Epoche von Kaiser Franz Joseph I.",
    "keyPoints": [
      "Habsburger Heiratspolitik: Territorialgewinne und Dynastiebildung durch geschickte Ehebündnisse quer durch Europa",
      "Gründung des Kaisertums 1804: Franz I. begründet das österreichische Erbkaisertum als Reaktion auf Napoleons Krönung",
      "Kaiser Franz Joseph I. (1848–1916): 68 Jahre Regentschaft, Bau der Wiener Ringstraße und Repräsentanz im Schloss Schönbrunn",
      "Kaiserin Elisabeth („Sisi“): Legendäre Kaiserin, Reiselust und tragisches Schicksal in Genf 1898",
      "Die Wiener Hofburg: Politisches Machtzentrum der Habsburger vom Mittelalter bis zum Ende der Monarchie"
    ],
    "exercises": [
      {
        "id": "349",
        "title": "Das österreichische Kaiserreich",
        "folder": "das-osterreichische-kaiserreich-349"
      },
      {
        "id": "2313",
        "title": "Aufstieg der Habsburger",
        "folder": "aufstieg-der-habsburger-2313"
      },
      {
        "id": "2891",
        "title": "Aufstieg Österreichs zur Großmacht",
        "folder": "aufstieg-sterreichs-zur-groesmacht-2891"
      },
      {
        "id": "2959",
        "title": "Die Heiratspolitik der Habsburger",
        "folder": "die-heiratspolitik-der-habsburger-2959"
      },
      {
        "id": "3312",
        "title": "Die Habsburger",
        "folder": "die-habsburger-3312"
      },
      {
        "id": "5675",
        "title": "Die Hofburg",
        "folder": "die-hofburg-5675"
      },
      {
        "id": "3072",
        "title": "Wien zur Zeit der Monarchie",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-3-3072"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Habsburger+Kaisertum+Oesterreich&t=3752"
  },
  "oesterreich-ungarn-vielvoelkerstaat-und-regionalgeschichte": {
    "slug": "oesterreich-ungarn-vielvoelkerstaat-und-regionalgeschichte",
    "title": "Österreich-Ungarn: Vielvölkerstaat & Regionalgeschichte",
    "category": "19. Jahrhundert & Deutsches Kaiserreich",
    "shortDesc": "Ausgleich 1867, Doppelmonarchie, Nationalitätenkonflikte, Vorarlberger Landesgeschichte und Zerfall 1918.",
    "longDesc": "Die österreichisch-ungarische Doppelmonarchie (k. u. k.) vereinte über ein Dutzend Nationalitäten auf ihrem Staatsgebiet. Lerne den Ausgleich mit Ungarn 1867, die regionalen Besonderheiten der Kronländer (wie Vorarlberg) und die Spannungen kennen, die 1918 zum Zerfall des Reiches führten.",
    "keyPoints": [
      "Der Ausgleich von 1867: Entstehung der Realunion Österreich-Ungarn mit gemeinsamen Ministerien (Äußeres, Krieg, Finanzen)",
      "Vielvölkerstaat: Zusammenleben von Deutschen, Ungarn, Tschechen, Polen, Ukrainern, Slowaken, Kroaten, Serben, Rumänen und Italienern",
      "Spannungsfeld Nationalismus: Wachsende Autonomiebestrebungen der slawischen Völker im Reich",
      "Regionalgeschichte Vorarlbergs: Vom alamannischen Siedlungsraum über das Mittelalter bis zur Industrialisierung und Moderne",
      "Zerfall der Monarchie 1918: Ende des Ersten Weltkriegs besiegelt den Untergang des Vielvölkerreiches und die Entstehung von Nationalstaaten"
    ],
    "exercises": [
      {
        "id": "2943",
        "title": "Die Doppelmonarchie Österreich-Ungarn",
        "folder": "die-doppelmonarchie-sterreich-ungarn-2943"
      },
      {
        "id": "1087",
        "title": "Geschichte Vorarlbergs bis 500",
        "folder": "geschichte-vorarlbergs-bis-500-1087"
      },
      {
        "id": "1089",
        "title": "Vorarlberg in der Neuzeit",
        "folder": "vorarlberg-in-der-neuzeit-1089"
      },
      {
        "id": "1090",
        "title": "Geschichte Vorarlbergs ab 1900",
        "folder": "geschichte-vorarlbergs-ab-1900-1090"
      },
      {
        "id": "2360",
        "title": "Vielvölkerstaat Österreich (1)",
        "folder": "vielvolkerstaat-sterreich-2360"
      },
      {
        "id": "2361",
        "title": "Vielvölkerstaat Österreich (2)",
        "folder": "vielvolkerstaat-sterreich-2361"
      },
      {
        "id": "3070",
        "title": "Zerfall der Habsburgmonarchie",
        "folder": "zerfall-der-habsburgmonarchie-3070"
      },
      {
        "id": "5402",
        "title": "Was wäre, wenn das Osmanische Reich nie zerfallen wäre …",
        "folder": "was-ware-wenn-das-osmanische-reich-nie-zerfallen-ware-5402"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Oesterreich-Ungarn+Vielvoelkerstaat&t=3752"
  },
  "der-erste-weltkrieg-ursachen-und-ausbruch": {
    "slug": "der-erste-weltkrieg-ursachen-und-ausbruch",
    "title": "Der Erste Weltkrieg: Ursachen, Bündnisse & Ausbruch",
    "category": "Erster Weltkrieg & Zwischenkriegszeit",
    "shortDesc": "Attentat von Sarajevo, Julikrise 1914, Wettrüsten, Bündnissysteme in Europa und Kriegsausbruch.",
    "longDesc": "Die „Urkatastrophe des 20. Jahrhunderts“: Wie konnte aus einem regionalen Attentat auf den österreichischen Thronfolger Franz Ferdinand in Sarajevo ein globaler Flächenbrand entstehen? Lerne das Wettrüsten, die verfeindeten Bündnisblöcke und den verhängnisvollen Automatismus der Julikrise 1914 kennen.",
    "keyPoints": [
      "Bündnissysteme vor 1914: Dreibund (Deutschland, Österreich-Ungarn, Italien) vs. Triple Entente (Großbritannien, Frankreich, Russland)",
      "Imperialismus & Wettrüsten: Flottenwettrüsten zwischen Deutschland und Großbritannien und Heeresvergrößerungen",
      "Balkankrisen: Der Balkan als „Pulverfass Europas“ nach dem Zerfall des Osmanischen Reiches",
      "Das Attentat von Sarajevo am 28. Juni 1914: Ermordung von Thronfolger Franz Ferdinand durch Gavrilo Princip",
      "Die Julikrise 1914: Blankovollmacht des Deutschen Reiches, Ultimatum an Serbien und Kettenreaktion der Kriegserklärungen"
    ],
    "exercises": [
      {
        "id": "351",
        "title": "Der Erste Weltkrieg - Gründe und Auslöser",
        "folder": "der-erste-weltkrieg-grunde-und-ausloser-351"
      },
      {
        "id": "2302",
        "title": "Das Attentat von Sarajevo",
        "folder": "das-attentat-von-sarajevo-2302"
      },
      {
        "id": "3010",
        "title": "Italien im Ersten Weltkrieg",
        "folder": "italien-im-ersten-weltkrieg-3010"
      },
      {
        "id": "3017",
        "title": "Kaiser Franz Josef I.",
        "folder": "kaiser-franz-josef-ii-3017"
      },
      {
        "id": "3068",
        "title": "Wladimir Iljitsch Lenin",
        "folder": "wladimir-iljitsch-lenin-3068"
      },
      {
        "id": "3304",
        "title": "Österreich im Ersten Weltkrieg",
        "folder": "sterreich-im-ersten-weltkrieg-3304"
      },
      {
        "id": "3106",
        "title": "Die Heimsuchung - 1912 - Vorkriegszeit des Ersten Weltkriegs und Antisemitismus",
        "folder": "die-heimsuchung-1912-vorkriegszeit-des-ersten-weltkriegs-und-antisemitismus-3106"
      },
      {
        "id": "3066",
        "title": "Wettrüsten und Blockbildung vor dem Ersten Weltkrieg",
        "folder": "wettrusten-und-blockbildung-vor-dem-ersten-weltkrieg-3066"
      },
      {
        "id": "5406",
        "title": "Was wäre, wenn Deutschland den Ersten Weltkrieg gewonnen hätte …",
        "folder": "was-ware-wenn-deutschland-den-ersten-weltkrieg-gewonnen-hatte-5406"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erster+Weltkrieg+Ursachen+1914&t=3752"
  },
  "der-erste-weltkrieg-verlauf-und-folgen": {
    "slug": "der-erste-weltkrieg-verlauf-und-folgen",
    "title": "Der Erste Weltkrieg: Materialschlachten, Epochenwende & Frieden",
    "category": "Erster Weltkrieg & Zwischenkriegszeit",
    "shortDesc": "Stellungskrieg an der Westfront, Verdun, Kriegseintritt der USA, Pariser Vorortverträge (Versailles, St. Germain) und Völkerbund.",
    "longDesc": "Der erste industrialisierte Massenkrieg der Geschichte: Maschinengewehre, Giftgas, Flugzeuge und Panzer führten an der Westfront zu jahrelangem, zermürbendem Stellungskrieg. Lerne die Hölle von Verdun, den Kriegseintritt der USA 1917 und die Friedensverträge von 1919 kennen.",
    "keyPoints": [
      "Stellungskrieg & Grabenkrieg: Scheitern des Schlieffen-Plans und Erstarrung der Westfront in Schützengräben",
      "Materialschlachten 1916: Unerbittliches Trommelfeuer und Massensterben vor Verdun und an der Somme",
      "Neue Kriegswaffentechnologie: Einsatz von Giftgas, Flammenwerfern, Flugzeugen, Zeppelinen, U-Booten und Panzern",
      "Wendejahr 1917: Oktoberrevolution und Kriegsaustritt Russlands sowie Kriegseintritt der USA",
      "Pariser Vorortverträge: Vertrag von Versailles (Kriegsschuldartikel 231, Gebietsabtretungen) und Vertrag von St. Germain für Österreich",
      "Völkerbund & 14-Punkte-Plan: Wilsons Vision einer kollektiven Friedensordnung und Nachkriegskrisen"
    ],
    "exercises": [
      {
        "id": "352",
        "title": "Der erste Weltkrieg - Verlauf",
        "folder": "der-erste-weltkrieg-verlauf-352"
      },
      {
        "id": "353",
        "title": "Der Erste Weltkrieg - Ende und Folgen",
        "folder": "der-erste-weltkrieg-ende-und-folgen-353"
      },
      {
        "id": "2305",
        "title": "Das Genfer Protokoll",
        "folder": "das-genfer-protokoll-2305"
      },
      {
        "id": "2367",
        "title": "Völkerbund",
        "folder": "volkerbund-2367"
      },
      {
        "id": "2884",
        "title": "14-Punkte-Programm Wilsons",
        "folder": "14-punkte-programm-wilsons-2884"
      },
      {
        "id": "2934",
        "title": "Der Vertrag von St. Germain",
        "folder": "der-vertrag-von-st-germain-2934"
      },
      {
        "id": "2935",
        "title": "Der Vertrag von Versailles",
        "folder": "der-vertrag-von-versailles-2935"
      },
      {
        "id": "2981",
        "title": "Die Südtirolfrage",
        "folder": "die-sudtirolfrage-2981"
      },
      {
        "id": "3171",
        "title": "Die USA im Ersten Weltkrieg",
        "folder": "die-usa-im-ersten-weltkrieg-3171"
      },
      {
        "id": "3329",
        "title": "Beginn und Verlauf des Ersten Weltkriegs",
        "folder": "beginn-und-verlauf-des-ersten-weltkriegs-3329"
      },
      {
        "id": "3330",
        "title": "Ende und Folgen des Ersten Weltkriegs",
        "folder": "ende-und-folgen-des-ersten-weltkriegs-3330"
      },
      {
        "id": "5337",
        "title": "Der Erste Weltkrieg",
        "folder": "der-erste-weltkrieg-5337"
      },
      {
        "id": "5422",
        "title": "Was wäre, wenn Österreich-Ungarn den Ersten Weltkrieg überlebt hätte …",
        "folder": "was-ware-wenn-sterreich-ungarn-den-ersten-weltkrieg-uberlebt-hatte-5422"
      },
      {
        "id": "3075",
        "title": "Deutsche Gebietsverluste nach dem Ersten Weltkrieg",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-6-3075"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erster+Weltkrieg+Verlauf+Versailles&t=3752"
  },
  "die-weimarer-republik-1918-1933": {
    "slug": "die-weimarer-republik-1918-1933",
    "title": "Die Weimarer Republik & Krisenjahre",
    "category": "Erster Weltkrieg & Zwischenkriegszeit",
    "shortDesc": "Erste deutsche Demokratie, Hyperinflation 1923, Goldene Zwanziger, Weltwirtschaftskrise 1929 und Präsidialkabinette.",
    "longDesc": "Nach dem Ende des Ersten Weltkriegs stand Deutschland vor einer tiefgreifenden politischen und wirtschaftlichen Umwälzung. Die Weimarer Republik entstand als erste demokratische Staatsform des Landes, doch ihre Existenz war von Anfang an von Krisen, Konflikten und Unsicherheiten geprägt. Trotz einer Phase der Stabilisierung in den Goldenen 20er-Jahren führten wirtschaftliche Probleme schließlich zum Aufstieg der Nationalsozialisten. Mit der Kapitulation Deutschlands im Jahr 1918 endete der Erste Weltkrieg, und der Kaiser dankte ab. Philipp Scheidemann rief die Republik aus, während das Land mit den Folgen des Versailler Vertrags kämpfte. Die ersten Jahre waren von Inflation, politischer Gewalt und wirtschaftlichen Schwierigkeiten geprägt. Der Spartakusaufstand sowie der Mord an Rosa Luxemburg und Karl Liebknecht verschärften die Unsicherheiten zusätzlich. Erst mit der Währungsreform von 1923 und internationalen Krediten stabilisierte sich die Lage vorübergehend.",
    "keyPoints": [
      "Kunst, Kultur und Wissenschaft erlebten in den Goldenen 20er-Jahren eine Blütezeit",
      "Die Weltwirtschaftskrise 1929 führte zu Massenarbeitslosigkeit und politischer Radikalisierung",
      "Die Nationalsozialisten gewannen durch wirtschaftliche Ängste und Unsicherheiten an Einfluss",
      "1933 ernannte Hindenburg Adolf Hitler zum Reichskanzler",
      "Mit Hitlers Machtübernahme begann die Umwandlung der Demokratie in eine Diktatur",
      "Aufschwung in Wirtschaft und Unterhaltung",
      "Jazz, Charleston und neue Freizeitangebote",
      "Mehr Rechte für Frauen und Zugang zu Bildung"
    ],
    "exercises": [
      {
        "id": "407",
        "title": "Die Weimarer Republik",
        "folder": "die-weimarer-republik-407"
      },
      {
        "id": "418",
        "title": "Die Goldenen 20er-Jahre und die Weltwirtschaftskrise 1929",
        "folder": "die-goldenen-20er-jahre-und-die-weltwirtschaftskrise-1929-418"
      },
      {
        "id": "1137",
        "title": "Weltwirtschaftskrise 1929",
        "folder": "weltwirtschaftskrise-1929-1137"
      },
      {
        "id": "3065",
        "title": "Wahlen in der Weimarer Republik",
        "folder": "wahlen-in-der-weimarer-republik-3065"
      },
      {
        "id": "3067",
        "title": "Wirtschaft der Weimarer Republik",
        "folder": "wirtschaft-der-weimarer-republik-3067"
      },
      {
        "id": "3048",
        "title": "Paul von Hindenburg",
        "folder": "paul-von-hindenburg-3048"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Die%20Weimarer%20Republik%20%26%20Krisenjahre+geschichte&t=3752"
  },
  "zwischenkriegszeit-und-diktaturen-in-europa": {
    "slug": "zwischenkriegszeit-und-diktaturen-in-europa",
    "title": "Zwischenkriegszeit & Faschismus in Europa",
    "category": "Erster Weltkrieg & Zwischenkriegszeit",
    "shortDesc": "Diktaturen in Europa, Faschismus in Italien (Mussolini), Spanischer Bürgerkrieg und Österreich in der Zwischenkriegszeit.",
    "longDesc": "Europa stand in der Zwischenkriegszeit vor großen Herausforderungen. Viele Länder kämpften mit wirtschaftlichen Krisen, sozialer Unruhe und politischer Unsicherheit. Daher wuchs die Unzufriedenheit mit der Demokratie, sodass autoritäre Herrscher immer mehr Anhänger fanden. Nach dem Ersten Weltkrieg veränderte sich die politische Lage in vielen Ländern. In Russland stürzten die Bolschewiken unter Lenin die Regierung und übernahmen 1917 die Macht. Danach gründeten sie die UdSSR, die Stalin später mit harter Hand führte. In Italien nutzte Mussolini die wirtschaftliche Krise und riss 1922 die Macht an sich. Außerdem setzte er auf Propaganda und Gewalt, um seine Herrschaft zu sichern. In Spanien führte General Franco einen Bürgerkrieg, den er schließlich gewann. Er errichtete eine Diktatur und unterdrückte politische Gegner. In Österreich regierte Engelbert Dollfuß autoritär und schloss das Parlament aus. Schließlich führte das zu schweren Unruhen und einem Ständestaat.",
    "keyPoints": [
      "Abschaffung demokratischer Strukturen",
      "Verfolgung politischer Gegner",
      "Einsatz von Propaganda zur Machtsicherung",
      "Ausbau des Militärs und Vorbereitung auf Kriege",
      "Staatliche Kontrolle über Wirtschaft und Gesellschaft",
      "Angst und Unterdrückung in der Bevölkerung",
      "Abschaffung der Monarchie und Ausrufung der Republik",
      "Verbot des Staatsnamens durch die Siegermächte"
    ],
    "exercises": [
      {
        "id": "408",
        "title": "Diktaturen Europas in der Zwischenkriegszeit",
        "folder": "diktaturen-europas-in-der-zwischenkriegszeit-408"
      },
      {
        "id": "417",
        "title": "Österreich in der Zwischenkriegszeit",
        "folder": "sterreich-in-der-zwischenkriegszeit-417"
      },
      {
        "id": "2297",
        "title": "Benito Mussolini",
        "folder": "benito-mussolini-2297"
      },
      {
        "id": "2897",
        "title": "Bürgerkrieg und Putschversuch in Österreich 1934",
        "folder": "burgerkrieg-und-putschversuch-in-sterreich-1934-2897"
      },
      {
        "id": "2902",
        "title": "Das faschistische Italien",
        "folder": "das-faschistische-italien-2902"
      },
      {
        "id": "2917",
        "title": "Der Faschismus",
        "folder": "der-faschismus-2917"
      },
      {
        "id": "2930",
        "title": "Der Spanische Bürgerkrieg",
        "folder": "der-spanische-burgerkrieg-2930"
      },
      {
        "id": "2997",
        "title": "Engelbert Dollfuß",
        "folder": "engelbert-dollfues-2997"
      },
      {
        "id": "3046",
        "title": "Parteien und Wahlen in der Zwischenkriegszeit (Deutschland)",
        "folder": "parteien-und-wahlen-in-der-zwischenkriegszeit-deutschland-3046"
      },
      {
        "id": "3047",
        "title": "Parteien und Wahlen in der Zwischenkriegszeit (Österreich)",
        "folder": "parteien-und-wahlen-in-der-zwischenkriegszeit-sterreich-3047"
      },
      {
        "id": "3314",
        "title": "Österreich in der Zwischenkriegszeit (1)",
        "folder": "sterreich-in-der-zwischenkriegszeit-1-3314"
      },
      {
        "id": "3315",
        "title": "Österreich in der Zwischenkriegszeit (2)",
        "folder": "sterreich-in-der-zwischenkriegszeit-2-3315"
      },
      {
        "id": "3325",
        "title": "Zwischenkriegszeit",
        "folder": "zwischenkriegszeit-3325"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zwischenkriegszeit%20%26%20Faschismus%20in%20Europa+geschichte&t=3752"
  },
  "weimarer-republik-und-grossstadtkrisen": {
    "slug": "weimarer-republik-und-grossstadtkrisen",
    "title": "Die Weimarer Republik: Großstadtleben & Wirtschaftskrisen",
    "category": "Erster Weltkrieg & Zwischenkriegszeit",
    "shortDesc": "Goldene Zwanziger, Inflation, Massenarbeitslosigkeit und Alfred Döblins Berlin Alexanderplatz.",
    "longDesc": "Die erste deutsche Demokratie war geprägt vom Spannungsfeld zwischen kultureller Avantgarde der 'Goldenen Zwanziger' und tiefgreifenden sozialen Krisen wie Hyperinflation, Not und Massenarbeitslosigkeit.",
    "keyPoints": [
      "Großstadtleben in Berlin: Metropole der Kunst, des Kinos, Kabaretts und der neuen Medien – zugleich Schauplatz sozialer Not",
      "Alfred Döblins 'Berlin Alexanderplatz' (1929): Meisterwerk der literarischen Moderne über das Schicksal von Franz Biberkopf im Großstadtdschungel",
      "Weltwirtschaftskrise (1929): Zusammenbruch der New Yorker Börse (Schwarzer Freitag) löste weltweite Massenarbeitslosigkeit aus",
      "Radikalisierung: Wirtschaftliche Verzweiflung trieb Wähler zu den extremen Rändern (KPD und NSDAP)"
    ],
    "exercises": [
      {
        "id": "4507",
        "title": "Alfred Döblin – Berlin Alexanderplatz",
        "folder": "alfred-doblin-berlin-alexanderplatz-2-4507"
      },
      {
        "id": "3080",
        "title": "Arbeitslosigkeit nach dem Ersten Weltkrieg",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-11-3080"
      },
      {
        "id": "3081",
        "title": "Der Gemeindebau - sozialer Wohnbau in Wien",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-12-3081"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=weimarer+republik&t=3752"
  },
  "machtergreifung-und-ns-ideologie": {
    "slug": "machtergreifung-und-ns-ideologie",
    "title": "Machtergreifung, NS-Ideologie & Führerstaat",
    "category": "Nationalsozialismus & Zweiter Weltkrieg",
    "shortDesc": "30. Januar 1933, Reichstagsbrand, Ermächtigungsgesetz, Gleichschaltung, Rassenlehre, Führerprinzip und Propaganda.",
    "longDesc": "Der Nationalsozialismus prägte Deutschland durch eine totalitäre Ideologie, die alle Lebensbereiche durchdrang. Dabei spielten Rassenlehre, Propaganda und Verfolgung eine zentrale Rolle. Besonders die Nürnberger Rassegesetze sowie die massive Kontrolle von Bildung und Medien führten dazu, dass sich die nationalsozialistische Herrschaft fest etablierte. Die nationalsozialistische Rassenlehre teilte Menschen in sogenannte „Arier“ und „Minderwertige“ ein. Dabei galten Juden als Feindbild, weshalb sie systematisch entrechtet und verfolgt wurden. Die NSDAP nutzte Organisationen wie die SA, die SS und die GESTAPO, um Gegner auszuschalten. Außerdem beeinflusste Propaganda die öffentliche Meinung, sodass viele Menschen das Regime unterstützten. In Schulen wurde die Ideologie ebenfalls vermittelt, sodass Kinder früh indoktriniert wurden.",
    "keyPoints": [
      "Verbreitung antisemitischer Ideologie durch Gesetze sowie gezielte Propaganda",
      "Verfolgung politischer Gegner, insbesondere durch die Geheime Staatspolizei (GESTAPO)",
      "Einfluss auf Bildung und Jugendorganisationen wie beispielsweise die Hitlerjugend (HJ)",
      "Wirtschaftliche Mobilisierung durch Rüstungsproduktion und den Reichsarbeitsdienst",
      "Instrumentalisierung von Ereignissen, darunter der Reichstagsbrand, zur Machtsicherung",
      "Kontrolle der Medien, sodass nur regimetreue Inhalte verbreitet wurden",
      "Politische Gleichschaltung: Die politische Gleichschaltung umfasste das Verbot aller politischen Parteien außer der NSDAP. Dadurch wurde der politische Pluralismus beseitigt und eine Einparteienherrschaft errichtet.",
      "Wirtschaftliche Gleichschaltung durch die NSDAP: Die Wirtschaft wurde ebenfalls durch die NSDAP gleichgeschaltet und auf die Bedürfnisse des NS-Staates ausgerichtet. Unternehmen wurden entweder direkt staatlich kontrolliert oder mussten sich den Zielen der NSDAP unterordnen."
    ],
    "exercises": [
      {
        "id": "420",
        "title": "Der Nationalsozialismus - Aufstieg, Ideologie und Alltag",
        "folder": "der-nationalsozialismus-aufstieg-ideologie-und-alltag-420"
      },
      {
        "id": "2338",
        "title": "Die Gleichschaltung durch die NSDAP",
        "folder": "die-gleichschaltung-durch-die-nsdap-2338"
      },
      {
        "id": "2874",
        "title": "Die NSDAP",
        "folder": "die-nsdap-2874"
      },
      {
        "id": "2894",
        "title": "BDM und HJ - Die Jugend im Nationalsozialismus",
        "folder": "bdm-und-hj-die-jugend-im-nationalsozialismus-2894"
      },
      {
        "id": "2901",
        "title": "Das Ermächtigungsgesetz",
        "folder": "das-ermachtigungsgesetz-2901"
      },
      {
        "id": "2906",
        "title": "Das nationalsozialistische Frauenbild",
        "folder": "das-nationalsozialistische-frauenbild-2906"
      },
      {
        "id": "2925",
        "title": "Der Reichstagsbrand",
        "folder": "der-reichstagsbrand-2925"
      },
      {
        "id": "2957",
        "title": "Die GESTAPO",
        "folder": "die-gestapo-2957"
      },
      {
        "id": "2974",
        "title": "Die SA",
        "folder": "die-sa-2974"
      },
      {
        "id": "3008",
        "title": "Heinrich Himmler",
        "folder": "heinrich-himmler-3008"
      },
      {
        "id": "3014",
        "title": "Josef Goebbels",
        "folder": "josef-goebbels-3014"
      },
      {
        "id": "2289",
        "title": "Adolf Hitler",
        "folder": "adolf-hitler-2289"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Machtergreifung%2C%20NS-Ideologie%20%26%20F%C3%BChrerstaat+geschichte&t=3752"
  },
  "der-zweite-weltkrieg-weg-in-den-krieg-und-blitzkriege": {
    "slug": "der-zweite-weltkrieg-weg-in-den-krieg-und-blitzkriege",
    "title": "Der Zweite Weltkrieg: Weg in den Krieg & Blitzkriege",
    "category": "Nationalsozialismus & Zweiter Weltkrieg",
    "shortDesc": "Aufrüstung, Münchner Abkommen 1938, Hitler-Stalin-Pakt, Überfall auf Polen, Westfeldzug und Luftschlacht um England.",
    "longDesc": "Wie Hitler Europa in den Abgrund stürzte: Lerne die aggressive Außenpolitik des NS-Regimes, das Versagen der Appeasementpolitik, den Überfall auf Polen am 1. September 1939 und die Phase der scheinbar unaufhaltsamen „Blitzkriege“ kennen.",
    "keyPoints": [
      "Revision des Versailler Vertrages: Wiedereinführung der Wehrpflicht 1935 und Remilitarisierung des Rheinlandes",
      "Appeasement & Münchner Abkommen 1938: Nachgiebigkeit Großbritanniens und Frankreichs und Zerschlagung der Tschechoslowakei",
      "Hitler-Stalin-Pakt 1939: Zynischer Nichtangriffspakt mit geheimem Zusatzprotokoll zur Aufteilung Polens",
      "Überfall auf Polen am 1. September 1939: Beginn des Zweiten Weltkriegs in Europa",
      "Blitzkriege im Westen 1940: Besetzung Dänemarks, Norwegens, der Benelux-Staaten und Kapitulation Frankreichs",
      "Luftschlacht um England: Erste strategische Niederlage der deutschen Luftwaffe gegen die Royal Air Force"
    ],
    "exercises": [
      {
        "id": "421",
        "title": "Der Weg in den Zweiten Weltkrieg",
        "folder": "der-weg-in-den-zweiten-weltkrieg-421"
      },
      {
        "id": "2888",
        "title": "Appeasementpolitik der Westmächte",
        "folder": "appeasementpolitik-der-westmachte-2888"
      },
      {
        "id": "2890",
        "title": "Aufrüstung des nationalsozialistischen Deutschlands",
        "folder": "aufrustung-des-nationalsozialistischen-deutschlands-2890"
      },
      {
        "id": "2905",
        "title": "Das Münchner Abkommen",
        "folder": "das-munchner-abkommen-2905"
      },
      {
        "id": "2911",
        "title": "Der Anschluss Österreichs",
        "folder": "der-anschluss-sterreichs-2911"
      },
      {
        "id": "2913",
        "title": "Der Blitzkrieg",
        "folder": "der-blitzkrieg-2913"
      },
      {
        "id": "2964",
        "title": "Die Luftschlacht um England",
        "folder": "die-luftschlacht-um-england-2964"
      },
      {
        "id": "2995",
        "title": "Einmarsch deutscher Truppen in Böhmen und Mähren",
        "folder": "einmarsch-deutscher-truppen-in-bohmen-und-mahren-2995"
      },
      {
        "id": "3039",
        "title": "Nichtangriffspakt Hitlers mit Stalin",
        "folder": "nichtangriffspakt-hitlers-mit-stalin-3039"
      },
      {
        "id": "3305",
        "title": "Österreich im Zweiten Weltkrieg",
        "folder": "sterreich-im-zweiten-weltkrieg-3305"
      },
      {
        "id": "3318",
        "title": "Beginn des Zweiten Weltkriegs",
        "folder": "beginn-des-zweiten-weltkriegs-3318"
      },
      {
        "id": "6579",
        "title": "Der Vatikan im Zweiten Weltkrieg",
        "folder": "der-vatikan-im-zweiten-weltkrieg-6579"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zweiter+Weltkrieg+Blitzkrieg+1939&t=3752"
  },
  "der-zweite-weltkrieg-wendepunkte-und-kriegsende": {
    "slug": "der-zweite-weltkrieg-wendepunkte-und-kriegsende",
    "title": "Der Zweite Weltkrieg: Wendepunkte, Totaler Krieg & Kriegsende",
    "category": "Nationalsozialismus & Zweiter Weltkrieg",
    "shortDesc": "Stalingrad, Kriegseintritt der USA nach Pearl Harbor, D-Day, Bombennächte, Atombombenabwurf und bedingungslose Kapitulation 1945.",
    "longDesc": "Vom Vernichtungskrieg im Osten bis zur totalen Niederlage: Lerne die entscheidenden Wendepunkte des Zweiten Weltkriegs kennen – die Schlacht von Stalingrad, den Eintritt der USA nach Pearl Harbor, die Invasion in der Normandie (D-Day) und das Ende durch die Atombombenabwürfe auf Hiroshima und Nagasaki.",
    "keyPoints": [
      "Unternehmen Barbarossa 1941: Rassenideologischer Vernichtungskrieg gegen die Sowjetunion",
      "Pearl Harbor & Kriegseintritt der USA: Japanischer Angriff am 7. Dezember 1941 macht den Krieg zum Weltkrieg",
      "Schlacht von Stalingrad (Winter 1942/43): Psychologischer und militärischer Wendepunkt an der Ostfront",
      "Der „Totale Krieg“: Goebbels Sportpalastrede 1943, Mobilisierung der Heimatfront und alliierter Bombenkrieg",
      "D-Day am 6. Juni 1944: Landung der Alliierten in der Normandie eröffnet die zweite Front im Westen",
      "Kriegsende & Kapitulation 1945: Selbstmord Hitlers, bedingungslose Kapitulation am 8. Mai 1945 und Atombomben auf Japan"
    ],
    "exercises": [
      {
        "id": "422",
        "title": "Der Verlauf des Zweiten Weltkriegs",
        "folder": "der-verlauf-des-zweiten-weltkriegs-422"
      },
      {
        "id": "423",
        "title": "Die Folgen des Zweiten Weltkriegs",
        "folder": "die-folgen-des-zweiten-weltkriegs-423"
      },
      {
        "id": "2910",
        "title": "Der Angriff des Deutschen Reiches auf die Sowjetunion",
        "folder": "der-angriff-des-deutschen-reiches-auf-die-sowjetunion-2910"
      },
      {
        "id": "2915",
        "title": "Der D-Day",
        "folder": "der-d-day-2915"
      },
      {
        "id": "2926",
        "title": "Der Russlandfeldzug des NS Deutschland",
        "folder": "der-russlandfeldzug-des-ns-deutschland-2926"
      },
      {
        "id": "2931",
        "title": "Der totale Krieg",
        "folder": "der-totale-krieg-2931"
      },
      {
        "id": "2949",
        "title": "Die erste Atombombe",
        "folder": "die-erste-atombombe-2949"
      },
      {
        "id": "3011",
        "title": "Italien im Zweiten Weltkrieg",
        "folder": "italien-im-zweiten-weltkrieg-3011"
      },
      {
        "id": "3012",
        "title": "Japan im Zweiten Weltkrieg",
        "folder": "japan-im-zweiten-weltkrieg-3012"
      },
      {
        "id": "3044",
        "title": "Oskar Schindler",
        "folder": "oskar-schindler-3044"
      },
      {
        "id": "3049",
        "title": "Pearl Harbor",
        "folder": "pearl-harbor-3049"
      },
      {
        "id": "3058",
        "title": "Schlacht von Stalingrad",
        "folder": "schlacht-von-stalingrad-3058"
      },
      {
        "id": "5341",
        "title": "Der Zweite Weltkrieg",
        "folder": "der-zweite-weltkrieg-5341"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zweiter+Weltkrieg+Stalingrad+DDay&t=3752"
  },
  "der-holocaust-und-die-judenverfolgung": {
    "slug": "der-holocaust-und-die-judenverfolgung",
    "title": "Der Holocaust & die Verfolgung der Juden",
    "category": "Nationalsozialismus & Zweiter Weltkrieg",
    "shortDesc": "Nürnberger Gesetze 1935, Novemberpogrome 1938, Wannsee-Konferenz, Deportationen und Vernichtungslager (Auschwitz).",
    "longDesc": "Der Holocaust zählt zu den dunkelsten Kapiteln der Menschheitsgeschichte. Nationalsozialisten verfolgten jüdische Menschen systematisch, entrechteten sie und ermordeten Millionen. Diese beispiellose Gewalt entwickelte sich über Jahre hinweg und führte zu unermesslichem Leid. Bis heute bleibt das Gedenken daran von großer Bedeutung. Nach der Machtübernahme 1933 begannen die Nationalsozialisten damit, jüdische Menschen auszugrenzen. Antisemitische Gesetze nahmen ihnen zunächst viele Rechte, während Propaganda gezielt Hass schürte. Schon bald zerstörten Pogrome jüdische Geschäfte und Synagogen, sodass viele fliehen mussten. Trotzdem fanden nicht alle einen sicheren Zufluchtsort. Während des Krieges verschleppten die Nationalsozialisten Millionen in Ghettos, wo Hunger und Krankheiten zum Alltag gehörten. Danach folgte die Deportation in Konzentrations- und Vernichtungslager. Dort zwang man sie zur Arbeit oder trieb sie direkt in die Gaskammern.",
    "keyPoints": [
      "Antisemitische Gesetze nahmen jüdischen Menschen nach und nach alle Rechte",
      "Pogrome richteten immense Zerstörung an und trieben viele in die Flucht",
      "Ghettos trennten jüdische Familien von der restlichen Gesellschaft",
      "Konzentrationslager zwangen Menschen zu unmenschlicher Arbeit",
      "Vernichtungslager setzten auf systematische Massenmorde",
      "Nach dem Krieg deckten Prozesse die Verbrechen immer weiter auf",
      "Gedenkstätten und Bildung sorgen dafür, dass diese Geschichte nicht vergessen wird",
      "Rassismus und Antisemitismus zur gezielten Ausgrenzung von Minderheiten"
    ],
    "exercises": [
      {
        "id": "419",
        "title": "Der Holocaust",
        "folder": "der-holocaust-419"
      },
      {
        "id": "1109",
        "title": "Holocaust (Video)",
        "folder": "holocaust-video-1109"
      },
      {
        "id": "2353",
        "title": "Die Säulen des Nationalsozialismus",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-7-2353"
      },
      {
        "id": "2887",
        "title": "Anne Frank",
        "folder": "anne-frank-2887"
      },
      {
        "id": "2969",
        "title": "Die Nürnberger Rassengesetze",
        "folder": "die-nurnberger-rassengesetze-2969"
      },
      {
        "id": "2977",
        "title": "Die SS",
        "folder": "die-ss-2977"
      },
      {
        "id": "3042",
        "title": "Novemberpogrome und die Reichskristallnacht",
        "folder": "novemberpogrome-und-die-reichskristallnacht-3042"
      },
      {
        "id": "3176",
        "title": "Konzentrationslager im Nationalsozialismus",
        "folder": "konzentrationslager-im-nationalsozialismus-3176"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Der%20Holocaust%20%26%20Die%20Verfolgung%20der%20Juden+geschichte&t=3752"
  },
  "widerstand-im-nationalsozialismus": {
    "slug": "widerstand-im-nationalsozialismus",
    "title": "Widerstand im Nationalsozialismus",
    "category": "Nationalsozialismus & Zweiter Weltkrieg",
    "shortDesc": "Die Weiße Rose (Geschwister Scholl), Stauffenberg-Attentat vom 20. Juli 1944, Edelweißpiraten und Kreisauer Kreis.",
    "longDesc": "Trotz massiven Terrors, Gestapo-Überwachung und Todesstrafen leisteten mutige Menschen im nationalsozialistischen Deutschland Widerstand gegen das Terrorregime Hitlers. Der Widerstand reichte von Flugblattaktionen junger Studenten (Die Weiße Rose um Sophie und Hans Scholl) über jugendliche Gegenbewegungen (Edelweißpiraten, Swing-Jugend), bürgerlich-intellektuelle Kreise (Kreisauer Kreis) bis hin zum militärischen Attentatsversuch am 20. Juli 1944 durch Claus Schenk Graf von Stauffenberg ('Operation Walküre').",
    "keyPoints": [
      "Die Weiße Rose (München 1942/43): Flugblattaktionen gegen Krieg und Massenmord durch Sophie Scholl, Hans Scholl, Christoph Probst, Alexander Schmorell, Willi Graf und Prof. Kurt Huber",
      "Attentat vom 20. Juli 1944: Bombenattentat im Führerhauptquartier 'Wolfsschanze' und geplanter Staatsstreich ('Operation Walküre') durch Graf von Stauffenberg und zivile Mitverschwörer",
      "Jugendopposition: Edelweißpiraten und Swing-Jugend als unangepasste Protestbewegungen gegen Hitlerjugend und Drill",
      "Kreisauer Kreis um Helmuth James Graf von Moltke: Ausarbeitung einer demokratischen, christlich-humanistischen Nachkriegsordnung",
      "Kirchlicher Widerstand: Bekennende Kirche (Dietrich Bonhoeffer, Martin Niemöller) und katholische Proteste (Bischof von Galen gegen Euthanasie)",
      "Rettungswiderstand & Stille Helden: Verstecken und Rettung verfolgter jüdischer Mitbürger unter Einsatz des eigenen Lebens"
    ],
    "exercises": [
      {
        "id": "2991",
        "title": "Die Weiße Rose (Geschwister Scholl)",
        "folder": "die-weiese-rose-2991"
      },
      {
        "id": "3007",
        "title": "Graf Stauffenberg und das Attentat vom 20. Juli 1944",
        "folder": "graf-stauffenberg-und-das-attentat-3007"
      },
      {
        "id": "3322",
        "title": "Widerstand im Nationalsozialismus",
        "folder": "widerstand-ns-3322"
      },
      {
        "id": "4472",
        "title": "Widerstand gegen Ungerechtigkeit",
        "folder": "widerstand-gegen-ungerechtigkeit-4472"
      },
      {
        "id": "dachau",
        "title": "Das Konzentrationslager Dachau",
        "folder": "das-konzentrationslager-dachau"
      },
      {
        "id": "3006",
        "title": "Gewaltherrschaft Stalins",
        "folder": "gewaltherrschaft-stalins-3006"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Widerstand%20im%20Nationalsozialismus+geschichte&t=3752"
  },
  "nachkriegszeit-und-besatzungszonen": {
    "slug": "nachkriegszeit-und-besatzungszonen",
    "title": "Nachkriegszeit, Stunde Null & Besatzungszonen",
    "category": "Kalter Krieg & Deutsche Teilung",
    "shortDesc": "Potsdamer Konferenz 1945, Nürnberger Prozesse, Trümmerfrauen, Marshallplan und Berliner Luftbrücke 1948.",
    "longDesc": "Nach dem Zweiten Weltkrieg musste Österreich 1945 bis 1955 viele Herausforderungen bewältigen. Die Besatzungsmächte teilten das Land, während die Bevölkerung unter schwierigen Bedingungen lebte. Dennoch begann der Wiederaufbau, wobei vor allem der Marshallplan half. Erst 1955 endete die Besatzung, sodass Österreich seine Souveränität zurückerhielt. Nach Kriegsende teilten die Alliierten Österreich in vier Besatzungszonen auf. Wien wurde ebenfalls aufgeteilt, wobei die Kontrolle im ersten Bezirk regelmäßig wechselte. Währenddessen kämpfte die Bevölkerung mit Versorgungsproblemen, denn Lebensmittel blieben knapp. Allerdings unterstützten die Trümmerfrauen den Wiederaufbau erheblich, indem sie Schutt räumten und zerstörte Gebäude instand setzten. Gleichzeitig brachte der Marshallplan dringend benötigte finanzielle Hilfe, sodass die Wirtschaft allmählich stabiler wurde. Auch die Politik veränderte sich, denn 1945 bildete Karl Renner eine provisorische Regierung. Nachdem die ersten Wahlen stattfanden, übernahm Leopold Figl als Bundeskanzler. Trotzdem blieb Österreich bis 1955 unter alliierter Kontrolle.",
    "keyPoints": [
      "Bildung der provisorischen Regierung durch Karl Renner",
      "Erste Wahlen mit ÖVP-Mehrheit und Kanzler Leopold Figl",
      "Finanzielle Hilfe durch den Marshallplan für den Wiederaufbau",
      "Heimkehr vieler Kriegsgefangener, allerdings erst 1955 aus der Sowjetunion",
      "Abschluss des Staatsvertrags, sodass die Besatzungsmächte abzogen",
      "Einführung der Neutralität, wodurch Österreich international unabhängiger wurde",
      "Aufteilung Deutschlands in vier Besatzungszonen durch die Alliierten",
      "Entnazifizierung und Strafverfolgung nationalsozialistischer Täter"
    ],
    "exercises": [
      {
        "id": "740",
        "title": "Österreich 1945 bis 1955",
        "folder": "sterreich-1945-bis-1955-740"
      },
      {
        "id": "983",
        "title": "Die Nachkriegszeit",
        "folder": "die-nachkriegszeit-983"
      },
      {
        "id": "2921",
        "title": "Der Marshallplan",
        "folder": "der-marshallplan-2921"
      },
      {
        "id": "2938",
        "title": "Der Österreichische Staatsvertrag",
        "folder": "der-sterreichische-staatsvertrag-2938"
      },
      {
        "id": "2968",
        "title": "Die Nürnberger Prozesse",
        "folder": "die-nurnberger-prozesse-2968"
      },
      {
        "id": "893",
        "title": "Konrad Adenauer",
        "folder": "konrad-adenauer-893"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Nachkriegszeit%2C%20Stunde%20Null%20%26%20Besatzungszonen+geschichte&t=3752"
  },
  "der-kalte-krieg-ost-west-konflikt": {
    "slug": "der-kalte-krieg-ost-west-konflikt",
    "title": "Der Kalte Krieg: Blockkonfrontation & Wettrüsten",
    "category": "Kalter Krieg & Deutsche Teilung",
    "shortDesc": "Eiserner Vorhang, Berlinblockade 1948, Kubakrise 1962, NATO & Warschauer Pakt, Wettrüsten und Ende des Kalten Krieges.",
    "longDesc": "Fast ein halbes Jahrhundert lang stand die Welt am Rande eines atomaren Weltkriegs: Lerne die bipolare Konfrontation zwischen den Supermächten USA und Sowjetunion kennen – von der Berliner Luftbrücke über die Zitterpartie der Kubakrise bis zu den Abrüstungsverträgen.",
    "keyPoints": [
      "Bipolare Weltordnung: Westmächte (Kapitalismus, Demokratie) vs. Ostblock (Kommunismus, Planwirtschaft)",
      "Eiserner Vorhang & Eindämmungspolitik (Containment-Politik und Truman-Doktrin)",
      "Militärbündnisse: Gründung der NATO 1949 und des Warschauer Paktes 1955",
      "Kubakrise 1962: Höhepunkt des Konflikts und Einrichtung des „Roten Telefons“ zur Krisenvermeidung",
      "Nukleares Wettrüsten & Gleichgewicht des Schreckens (Mutually Assured Destruction - MAD)",
      "Entspannungspolitik & Mauerfall: Neue Ostpolitik unter Willy Brandt, Glasnost & Perestroika unter Gorbatschow"
    ],
    "exercises": [
      {
        "id": "613",
        "title": "Der Kalte Krieg",
        "folder": "der-kalte-krieg-613"
      },
      {
        "id": "898",
        "title": "Die Kuba-Krise",
        "folder": "die-kuba-krise-898"
      },
      {
        "id": "947",
        "title": "Die NATO",
        "folder": "die-nato-947"
      },
      {
        "id": "2300",
        "title": "Bruno Kreisky",
        "folder": "bruno-kreisky-2300"
      },
      {
        "id": "2896",
        "title": "Boris Jelzin",
        "folder": "boris-jelzin-2896"
      },
      {
        "id": "2919",
        "title": "DIE IAEO",
        "folder": "der-iaeo-2919"
      },
      {
        "id": "2936",
        "title": "Der Warschauer Pakt",
        "folder": "der-warschauer-pakt-2936"
      },
      {
        "id": "2937",
        "title": "Der Wettlauf ins All",
        "folder": "der-wettlauf-ins-all-2937"
      },
      {
        "id": "3341",
        "title": "Ende des Kalten Krieges",
        "folder": "ende-des-kalten-krieges-3341"
      },
      {
        "id": "5420",
        "title": "Was wäre, wenn immer noch Kalter Krieg wäre …",
        "folder": "was-ware-wenn-immer-noch-kalter-kriege-ware-5420"
      },
      {
        "id": "5413",
        "title": "Was wäre, wenn die UdSSR den Kalten Krieg gewonnen hätte …",
        "folder": "was-ware-wenn-die-udssr-den-kalten-krieg-gewonnen-hatte-5413"
      },
      {
        "id": "895",
        "title": "Willy Brandt",
        "folder": "willy-brandt-895"
      },
      {
        "id": "3077",
        "title": "Die Berlinblockade und die Luftbrücke",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-8-3077"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kalter+Krieg+Kubakrise+NATO&t=3752"
  },
  "globale-stellvertreterkriege-und-brennpunkte": {
    "slug": "globale-stellvertreterkriege-und-brennpunkte",
    "title": "Globale Stellvertreterkriege & Krisenherde",
    "category": "Kalter Krieg & Deutsche Teilung",
    "shortDesc": "Koreakrieg, Vietnamkrieg, Ungarnaufstand 1956, Prager Frühling 1968, Afghanistan-Krieg und weltweite Spannungen.",
    "longDesc": "Da eine direkte nukleare Konfrontation die Menschheit vernichtet hätte, trugen die Supermächte ihre Konflikte in Stellvertreterkriegen in Asien, Afrika und Lateinamerika aus. Entdecke den Koreakrieg, das Trauma von Vietnam, die Aufstände im Ostblock und den Afghanistan-Krieg.",
    "keyPoints": [
      "Koreakrieg (1950–1953): Erster heißer Konflikt des Kalten Krieges und Teilung Koreas am 38. Breitengrad",
      "Vietnamkrieg (1955–1975): Dschungelkrieg, Entlaubungsmittel Agent Orange, Antikriegsbewegung und Niederlage der USA",
      "Aufstände im Ostblock: Volksaufstand in Ungarn 1956 und Niederschlagung des Prager Frühlings 1968 durch Warschauer-Pakt-Truppen",
      "Sowjetischer Krieg in Afghanistan (1979–1989): Das „sowjetische Vietnam“ und Aufstieg der Mudschahedin",
      "Bürgerrechtsbewegung in den USA: Kampf von Martin Luther King gegen Rassendiskriminierung und Studentenproteste 1968"
    ],
    "exercises": [
      {
        "id": "614",
        "title": "Der Vietnamkrieg",
        "folder": "der-vietnamkrieg-614"
      },
      {
        "id": "909",
        "title": "Der Koreakrieg und seine Folgen",
        "folder": "der-koreakrieg-und-seine-folgen-909"
      },
      {
        "id": "2933",
        "title": "Der Ungarnaufstand 1956",
        "folder": "der-ungarnaufstand-1956-2933"
      },
      {
        "id": "2942",
        "title": "Die Diktatur Nikkolae Ceausescus",
        "folder": "die-diktatur-nikkolae-ceausescus-2942"
      },
      {
        "id": "3062",
        "title": "Studentenunruhen 1968",
        "folder": "studentenunruhen-1968-3062"
      },
      {
        "id": "899",
        "title": "Der Prager Frühling",
        "folder": "der-prager-fruhling-899"
      },
      {
        "id": "3040",
        "title": "Nikita Chruschtschow",
        "folder": "nikita-chruschtschow-3040"
      },
      {
        "id": "2316",
        "title": "Der Afghanistan-Krieg",
        "folder": "der-afghanistan-krieg-2316"
      },
      {
        "id": "2366",
        "title": "Krieg gegen den Terror",
        "folder": "krieg-gegen-den-terror-2366"
      },
      {
        "id": "3052",
        "title": "Rassenprobleme und Bürgerrechtskämpfe in den USA",
        "folder": "rassenprobleme-und-burgerrechtskampfe-in-den-usa-3052"
      },
      {
        "id": "5405",
        "title": "Was wäre, wenn der Prager Frühling erfolgreich gewesen wäre …",
        "folder": "was-ware-wenn-der-prager-fruhling-erfolgreich-gewesen-ware-5405"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Stellvertreterkriege+Vietnam+Korea&t=3752"
  },
  "leben-in-der-ddr-und-der-mauerbau": {
    "slug": "leben-in-der-ddr-und-der-mauerbau",
    "title": "Leben in der DDR, Mauerbau 1961 & Stasi",
    "category": "Kalter Krieg & Deutsche Teilung",
    "shortDesc": "13. August 1961 Bau der Berliner Mauer, SED-Herrschaft, Staatssicherheit (Stasi), FDJ und Alltag im Sozialismus.",
    "longDesc": "Die Teilung Deutschlands in zwei Staaten prägte nicht nur das Leben der Menschen, sondern auch das politische und wirtschaftliche System beider Länder. Während die Bundesrepublik westlich orientiert war, entwickelte sich die DDR unter sowjetischem Einfluss zu einem streng kontrollierten Staat mit Planwirtschaft und Überwachung. Die Deutsche Demokratische Republik, kurz DDR, entstand 1949 auf dem Gebiet der sowjetischen Besatzungszone. Obwohl Berlin im Osten lag, war die Stadt ebenfalls geteilt. In der DDR herrschte keine Demokratie, denn nur die SED hatte das Sagen. Eine freie Meinungsäußerung war kaum möglich, da die Stasi viele Bürger streng überwachte. Außerdem gab es in der Planwirtschaft keine freien Märkte. Der Staat bestimmte, was produziert wurde. Aus diesem Grund fehlten viele westliche Produkte. Bis 1961 flohen deshalb Millionen in den Westen, bevor die Grenzen geschlossen wurden.",
    "keyPoints": [
      "Gegründet 1949 unter sowjetischem Einfluss",
      "Politisches System ohne freie Wahlen",
      "Alleinige Macht der SED",
      "Staatssicherheit kontrollierte das Volk",
      "Planwirtschaft statt freiem Markt",
      "Kaum westliche Produkte verfügbar",
      "Zwei bekannte Automarken: Trabant und Wartburg",
      "Mauerbau 1961 als Folge zahlreicher Fluchten"
    ],
    "exercises": [
      {
        "id": "645",
        "title": "Die DDR im Überblick",
        "folder": "die-ddr-645"
      },
      {
        "id": "2940",
        "title": "Die Berliner Mauer (1961–1989)",
        "folder": "die-berliner-mauer-2940"
      },
      {
        "id": "3109",
        "title": "Die Heimsuchung - 1961-62 - Bau der Berliner Mauer",
        "folder": "die-heimsuchung-1961-62-bau-der-berliner-mauer-3109"
      },
      {
        "id": "2979",
        "title": "Die Stasi – Ministerium für Staatssicherheit",
        "folder": "die-stasi-2979"
      },
      {
        "id": "2952",
        "title": "Die FDJ – Freie Deutsche Jugend",
        "folder": "die-fdj-2952"
      },
      {
        "id": "2976",
        "title": "Die SED – Sozialistische Einheitspartei Deutschlands",
        "folder": "die-sed-2976"
      },
      {
        "id": "2998",
        "title": "Erich Honecker",
        "folder": "erich-honecker-2998"
      },
      {
        "id": "3060",
        "title": "Schule in der DDR",
        "folder": "schule-in-der-ddr-3060"
      },
      {
        "id": "3092",
        "title": "Das Wirtschaftssystem der DDR (Planwirtschaft)",
        "folder": "das-wirtschaftssystem-der-ddr-3092"
      },
      {
        "id": "3114",
        "title": "Die Gründung der DDR 1949",
        "folder": "die-grundung-der-ddr-3114"
      },
      {
        "id": "3128",
        "title": "Opposition und Widerstand in der DDR",
        "folder": "opposition-und-widerstand-in-der-ddr-3128"
      },
      {
        "id": "3130",
        "title": "Jugend in der DDR",
        "folder": "jugend-in-der-ddr-3130"
      },
      {
        "id": "3131",
        "title": "Frauen in der DDR",
        "folder": "frauen-in-der-ddr-3131"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Leben%20in%20der%20DDR%2C%20Mauerbau%201961%20%26%20Stasi+geschichte&t=3752"
  },
  "friedliche-revolution-und-deutsche-einheit": {
    "slug": "friedliche-revolution-und-deutsche-einheit",
    "title": "Friedliche Revolution & Wiedervereinigung 1989/90",
    "category": "Kalter Krieg & Deutsche Teilung",
    "shortDesc": "Montagsdemonstrationen 'Wir sind das Volk', 9. November 1989 Mauerfall, Zwei-plus-Vier-Vertrag und 3. Oktober 1990.",
    "longDesc": "Ein Mann mit klarer Haltung, langem Atem und großem Einfluss: Helmut Kohl veränderte Deutschland nachhaltig. Dabei spielte nicht nur seine Rolle bei der Wiedervereinigung eine zentrale Rolle, sondern auch sein Einsatz für Europa war entscheidend – gerade weil er viele Dinge frühzeitig erkannte und entschlossen umsetzte. Helmut Kohl wurde 1938 in Ludwigshafen geboren und wuchs in einer katholischen, konservativen Familie auf. Früh interessierte er sich für Politik, weshalb er bereits mit 16 Jahren der CDU beitrat. Nach seinem Studium von Geschichte und Staatswissenschaften begann er seine politische Laufbahn. Zuerst wurde er Ministerpräsident von Rheinland-Pfalz, später übernahm er die CDU-Führung. 1982 wählte ihn der Bundestag zum Bundeskanzler. Dabei blieb er insgesamt 16 Jahre im Amt – länger als alle seine Vorgänger. Besonders bekannt wurde er, weil er sich stark für die deutsche Einheit einsetzte. Ebenso setzte er sich unermüdlich für ein starkes Europa ein, wodurch er als einer der Väter des Euro gilt. Außerdem erhielt er für seine Verdienste die seltene Auszeichnung als „Ehrenbürger Europas“.",
    "keyPoints": [
      "Geboren 1938 in Ludwigshafen und geprägt durch seine Familie",
      "Beitritt zur CDU schon mit 16 Jahren",
      "Studium von Geschichte sowie Staatswissenschaften",
      "Ministerpräsident von Rheinland-Pfalz bereits mit 39 Jahren",
      "CDU-Vorsitzender ab dem Jahr 1973",
      "Bundeskanzler von 1982 bis 1998",
      "Führte Deutschland in die Wiedervereinigung",
      "Förderte die Einführung des Euro"
    ],
    "exercises": [
      {
        "id": "889",
        "title": "Helmut Kohl – Kanzler der Einheit",
        "folder": "helmut-kohl-889"
      },
      {
        "id": "3513",
        "title": "Herausforderungen der deutschen Wiedervereinigung",
        "folder": "die-herausforderungen-der-deutschen-wiedervereinigung-3513"
      },
      {
        "id": "739",
        "title": "Der Fall des Eisernen Vorhangs 1989",
        "folder": "der-fall-des-eisernen-vorhangs-739"
      },
      {
        "id": "3036",
        "title": "Michail Gorbatschow – Glasnost & Perestroika",
        "folder": "michail-gorbatschow-3036"
      },
      {
        "id": "dhm",
        "title": "Das Deutsche Historische Museum",
        "folder": "das-deutsche-historische-museum"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Friedliche%20Revolution%20%26%20Wiedervereinigung%201989%2F90+geschichte&t=3752"
  },
  "islamische-revolution-und-nahostkonflikte": {
    "slug": "islamische-revolution-und-nahostkonflikte",
    "title": "Der Nahe Osten: Die Islamische Revolution im Iran 1979",
    "category": "Kalter Krieg & Deutsche Teilung",
    "shortDesc": "Sturz des Schahs, Entstehung der Islamischen Republik unter Ajatollah Chomeini und geopolitische Folgen.",
    "longDesc": "Die Islamische Revolution von 1979 im Iran veränderte die politische Landschaft des Nahen Ostens dramatisch und begründete einen theokratischen Staat in direktem Gegensatz zu den westlichen Demokratien.",
    "keyPoints": [
      "Sturz des Schahs Mohammad Reza Pahlavi: Ende einer pro-westlichen, autoritären Monarchie infolge massiver Massenproteste",
      "Rückkehr von Ajatollah Chomeini: Etablierung des Prinzips der 'Herrschaft des Rechtsgelehrten' (Velayat-e Faqih)",
      "Geiselkrise von Teheran (1979–1981): 444 Tage Besetzung der US-Botschaft besiegelte den Bruch mit den USA",
      "Erster Golfkrieg (1980–1988): Achtjähriger verheerender Abnutzungskrieg zwischen dem Irak von Saddam Hussein und dem Iran"
    ],
    "exercises": [
      {
        "id": "3165",
        "title": "Die islamische Revolution im Iran",
        "folder": "die-islamische-revolution-im-iran-3165"
      },
      {
        "id": "3210",
        "title": "Escape Room: Geschichte Israels",
        "folder": "escape-room-quot-geschichte-israels-quot-3210"
      },
      {
        "id": "3211",
        "title": "Escape Room: Nahostkonflikt – Kriege und Krisen",
        "folder": "escape-room-quot-nahostkonflikt-kriege-und-krisen-quot-3211"
      },
      {
        "id": "3212",
        "title": "Escape Room: Nahostkonflikt – Friedensbemühungen",
        "folder": "escape-room-quot-nahostkonflikt-friedensbemuhungen-quot-3212"
      },
      {
        "id": "5374",
        "title": "Die Geschichte Israels",
        "folder": "die-geschichte-israels-5374"
      },
      {
        "id": "2325",
        "title": "Der syrische Bürgerkrieg",
        "folder": "der-syrische-burgerkrieg-2325"
      },
      {
        "id": "3073",
        "title": "Die Ölkrise",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-4-3073"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nahostkonflikt&t=3752"
  },
  "oesterreich-nachkriegszeit-und-nationalfeiertag": {
    "slug": "oesterreich-nachkriegszeit-und-nationalfeiertag",
    "title": "Österreich nach 1945: Staatsvertrag & Nationalfeiertag",
    "category": "Kalter Krieg & Deutsche Teilung",
    "shortDesc": "Besatzungszonen 1945–1955, Staatsvertrag vom 15. Mai 1955 und der Nationalfeiertag am 26. Oktober.",
    "longDesc": "Nach zehn Jahren vierfacher alliierter Besatzung erlangte Österreich am 15. Mai 1955 seine volle Souveränität zurück. Mit der Erklärung der 'immerwährenden Neutralität' am 26. Oktober 1955 fand die Republik ihre neue Identität.",
    "keyPoints": [
      "Vier Besatzungszonen (1945–1955): USA, Sowjetunion, Großbritannien und Frankreich teilten Österreich und Wien auf",
      "Österreichischer Staatsvertrag (15. Mai 1955): Unterzeichnung im Schloss Belvedere ('Österreich ist frei!')",
      "Bundesverfassungsgesetz über die Neutralität (26. Oktober 1955): Freiwillige Erklärung der dauernden Neutralität",
      "Der Nationalfeiertag: Seit 1965 am 26. Oktober als Tag der Fahne und der österreichischen Souveränität begangen"
    ],
    "exercises": [
      {
        "id": "6541",
        "title": "Der Österreichische Nationalfeiertag",
        "folder": "der-sterreichische-nationalfeiertag-2-6541"
      },
      {
        "id": "984",
        "title": "Das Wirtschaftswunder",
        "folder": "das-wirtschaftswunder-984"
      },
      {
        "id": "5609",
        "title": "Das Österreichische Parlament",
        "folder": "das-sterreichische-parlament-5609"
      },
      {
        "id": "3119",
        "title": "Die Nationalratswahl 2024",
        "folder": "die-nationalratswahl-2024-in-sterreich-3119"
      },
      {
        "id": "5700",
        "title": "Die Wiener Ringstraße",
        "folder": "die-wiener-ringstraese-5700"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staatsvertrag+oesterreich&t=3752"
  }
};
