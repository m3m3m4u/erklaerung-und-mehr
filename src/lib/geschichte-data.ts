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
  "Kalter Krieg & Deutsche Teilung",
  "Weltgeschichte & Länderporträts",
  "Historische Chronik & Epochen-Zeitleisten"
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
      },
      {
        "id": "hist-urg-1",
        "title": "Afrika – Die Wiege der Menschheit",
        "folder": "afrika-die-wiege-der-menschheit-3082"
      },
      {
        "id": "3361",
        "title": "Escape Room: Frühe Kulturen & Metallzeiten (Bronze- und Eisenzeit)",
        "folder": "fruhe-kulturen-und-metallzeiten-3361"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Steinzeit+%26+Fr%C3%BChe+Menschheitsentwicklung+geschichte&t=147"
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
      },
      {
        "id": "hist-hk-1",
        "title": "Frühe Hochkulturen der Menschheit",
        "folder": "hochkulturen-2-5398"
      },
      {
        "id": "hist-hk-2",
        "title": "Die Indus-Kultur – Frühe Hochkultur in Südasien",
        "folder": "die-indus-kultur-3164"
      },
      {
        "id": "1205",
        "title": "Anubis",
        "folder": "anubis-1205"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Das+alte+%C3%84gypten+%26+Fr%C3%BChe+Hochkulturen+geschichte&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Antikes+Griechenland+Demokratie&t=147"
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
      },
      {
        "id": "1328",
        "title": "Zeus",
        "folder": "zeus-1328"
      },
      {
        "id": "1304",
        "title": "Poseidon",
        "folder": "poseidon-1304"
      },
      {
        "id": "1266",
        "title": "Hades",
        "folder": "hades-1266"
      },
      {
        "id": "1206",
        "title": "Aphrodite",
        "folder": "aphrodite-1206"
      },
      {
        "id": "1330",
        "title": "Apollo",
        "folder": "apollo-2-1330"
      },
      {
        "id": "1210",
        "title": "Ares",
        "folder": "ares-1210"
      },
      {
        "id": "1211",
        "title": "Artemis",
        "folder": "artemis-1211"
      },
      {
        "id": "1275",
        "title": "Hermes",
        "folder": "hermes-1275"
      },
      {
        "id": "6280",
        "title": "Antigone von Sophokles - Bezug zur Gegenwart",
        "folder": "antigone-von-sophokles-bezug-zur-gegenwart-2-6280"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Griechische+Mythologie+Kultur&t=147"
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
      },
      {
        "id": "1336",
        "title": "Juno",
        "folder": "juno-1336"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Roemische+Republik+Caesar&t=147"
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
      },
      {
        "id": "hist-rom-1",
        "title": "Pompeji und der Ausbruch des Vesuvs (79 n. Chr.)",
        "folder": "pompeij-und-der-vesuv-3267"
      },
      {
        "id": "hist-rom-2",
        "title": "Die Römische Armee – Legionen und Disziplin",
        "folder": "die-romische-armee-1367"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Roemisches+Kaiserreich+Limes&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kelten&t=147"
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
      },
      {
        "id": "hist-vw-1",
        "title": "Die Völkerwanderung – Ursachen und Verlauf",
        "folder": "die-volkerwanderung-2989"
      },
      {
        "id": "hist-vw-2",
        "title": "Völkerwanderung – Reiche der Germanen",
        "folder": "die-volkerwanderung-2-5385"
      },
      {
        "id": "hist-fr-1",
        "title": "Das Frankenreich – Von Chlodwig zu den Karolingern",
        "folder": "die-franken-3161"
      },
      {
        "id": "hist-got-1",
        "title": "Die Goten – Ostgoten und Westgoten",
        "folder": "die-goten-3163"
      },
      {
        "id": "hist-alm-1",
        "title": "Die Alamannen – Siedlungsgeschichte im Südwesten",
        "folder": "die-alemannen-3156"
      },
      {
        "id": "hist-lang-1",
        "title": "Die Langobarden – Von Pannonien nach Italien",
        "folder": "die-langobarden-3167"
      },
      {
        "id": "hist-de-ma",
        "title": "Deutschland im Mittelalter – Herrschaft und Alltag",
        "folder": "deutschland-im-mittelalter"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=St%C3%A4ndegesellschaft+%26+Alltag+im+Mittelalter+geschichte&t=147"
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
      },
      {
        "id": "hist-wik-1",
        "title": "Die Wikinger – Seefahrt, Raubzüge und Handel",
        "folder": "die-wikinger-2993"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rittertum%2C+Burgen+%26+Ritterausbildung+geschichte&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Mittelalterliche+St%C3%A4dte+%26+Die+Hanse+geschichte&t=147"
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
      },
      {
        "id": "2650",
        "title": "Die Ottonen – Herrschaft und Kaisertum im Mittelalter",
        "folder": "buddhismus-in-der-modernen-welt-31-2650"
      },
      {
        "id": "hist-kz-1",
        "title": "Die Kreuzzüge – Glaubenskriege im Heiligen Land",
        "folder": "die-kreuzzuge-2345"
      },
      {
        "id": "hist-bab-1",
        "title": "Die Babenberger – Erstes Herrschergeschlecht Österreichs",
        "folder": "die-babenberger-3089"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kirche%2C+Kl%C3%B6ster%2C+Kaiser+%26+Kreuzz%C3%BCge+geschichte&t=147"
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
        "id": "2342",
        "title": "Die Inquisition",
        "folder": "die-inquisition-2342"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Die+Deutschen+Bauernkriege+geschichte&t=147"
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
      },
      {
        "id": "hist-k5-1",
        "title": "Das Weltreich Karls V. – Reich ohne Sonnenuntergang",
        "folder": "das-weltreich-von-karl-v-2909"
      },
      {
        "id": "hist-k5-2",
        "title": "Kaiser Karl V. – Herrscher zwischen Reformation und Reich",
        "folder": "karl-v-3025"
      },
      {
        "id": "3339",
        "title": "Escape Room: Weltbilder im Wandel der Zeit – Vom Geozentrismus zum Humanismus",
        "folder": "weltbilder-3339"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Renaissance%2C+Humanismus+%26+Buchdruck+geschichte&t=147"
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
      },
      {
        "id": "2348",
        "title": "Das Osmanische Reich: Expansion & Kultur",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-2-2348"
      },
      {
        "id": "2354",
        "title": "Die Seidenstraße: Historischer Handels- und Kulturweg",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-8-2354"
      },
      {
        "id": "hist-ent-1",
        "title": "Die erste Weltumsegelung – Ferdinand Magellan",
        "folder": "die-erste-weltumsegelung-2-5344"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zeitalter+der+Entdeckungen+Kolumbus&t=147"
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
        "title": "Der Dreißigjährige Krieg (ausführlich)",
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
      },
      {
        "id": "hist-tb-1",
        "title": "Die Wiener Türkenbelagerungen (1529 & 1683)",
        "folder": "die-wiener-turkenbelagerungen-888"
      },
      {
        "id": "883",
        "title": "Der Dreißigjährige Krieg (Überblick)",
        "folder": "der-dreiesigjahrige-krieg-883"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Reformation%2C+Glaubensspaltung+%26+Drei%C3%9Figj%C3%A4hriger+Krieg+geschichte&t=147"
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
      },
      {
        "id": "3374",
        "title": "Escape Room: Der Absolutismus & Ludwig XIV.",
        "folder": "absolutismus-2-3374"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Absolutismus+Ludwig+XIV+geschichte&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Die+Aufklaerung+Kant+Rousseau&t=147"
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
      },
      {
        "id": "701",
        "title": "Ablauf der Französischen Revolution",
        "folder": "studypoint-zusammenfassung-ablauf-der-revolution-701"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Franzoesische+Revolution+1789&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Napoleon+Bonaparte+%26+Der+Wiener+Kongress+geschichte&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schulpflicht+aufklaerung&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=18+jahrhundert&t=147"
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
      },
      {
        "id": "hist-ch-1",
        "title": "Geschichte der Schweiz – Vom Bundesbrief zur Moderne",
        "folder": "geschichte-der-schweiz-5389"
      },
      {
        "id": "hist-ch-2",
        "title": "Die Schweizer Eidgenossenschaft im historischen Überblick",
        "folder": "die-geschichte-der-schweiz-2954"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweizer+geschichte&t=147"
  },
  "geschichte-der-usa": {
    "slug": "geschichte-der-usa",
    "title": "Geschichte der USA: Unabhängigkeit, Bürgerkrieg & Weltmacht",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Amerikanischer Unabhängigkeitskrieg, Verfassung, George Washington, Sezessionskrieg, Abraham Lincoln und Native Americans.",
    "longDesc": "Die Geschichte der Vereinigten Staaten von Amerika reicht von den indigenen Kulturen über die Kolonialzeit und die Unabhängigkeitserklärung 1776 bis hin zum Amerikanischen Bürgerkrieg und dem Aufstieg zur globalen Supermacht im 20. Jahrhundert.",
    "keyPoints": [
      "Unabhängigkeitserklärung 1776: Loslösung von Großbritannien und erste moderne Demokratie",
      "Gründungsväter & Verfassung: George Washington als erster Präsident und Prinzip der Gewaltenteilung",
      "Amerikanischer Bürgerkrieg (1861–1865): Konflikt zwischen Nord- und Südstaaten und Abschaffung der Sklaverei unter Abraham Lincoln",
      "Schicksal der indigenen Völker (Native Americans) im Zuge der Westexpansion",
      "Aufstieg zur wirtschaftlichen und militärischen Führungsmacht im 20. Jahrhundert"
    ],
    "exercises": [
      {
        "id": "hist-usa-1",
        "title": "Die Unabhängigkeit der USA (1776)",
        "folder": "die-unabhangigkeit-der-usa-2984"
      },
      {
        "id": "hist-usa-2",
        "title": "George Washington – Erster Präsident der USA",
        "folder": "george-washington-3002"
      },
      {
        "id": "hist-usa-3",
        "title": "Der Amerikanische Bürgerkrieg (1861–1865)",
        "folder": "der-amerikanische-burgerkrieg-743"
      },
      {
        "id": "hist-usa-4",
        "title": "Abraham Lincoln – Befreiung der Sklaven & Präsidentschaft",
        "folder": "abraham-lincoln-2885"
      },
      {
        "id": "hist-usa-5",
        "title": "Die Native Americans – Ureinwohner Nordamerikas",
        "folder": "die-native-americans-in-den-usa-2967"
      },
      {
        "id": "hist-usa-6",
        "title": "Bedeutende Präsidenten der USA im Überblick",
        "folder": "wichtige-prasidenten-der-usa-3338"
      },
      {
        "id": "5335",
        "title": "Der Amerikanische Bürgerkrieg",
        "folder": "der-amerikanische-burgerkrieg-2-5335"
      },
      {
        "id": "2292",
        "title": "Andrew Jackson – der siebte Präsident der USA",
        "folder": "andrew-jackson-der-siebte-prasident-der-usa-2292"
      },
      {
        "id": "2294",
        "title": "Die Auswanderung in die USA",
        "folder": "auswanderung-in-die-usa-2294"
      },
      {
        "id": "2971",
        "title": "Die Prohibition in den USA (1920)",
        "folder": "die-prohibition-in-den-usa-1920-2971"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geschichte+usa&t=147"
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
        "title": "Die Industrielle Revolution (Teil 2)",
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
      },
      {
        "id": "330",
        "title": "Die Industrielle Revolution",
        "folder": "industrielle-revolution-330"
      },
      {
        "id": "3367",
        "title": "Escape Room: Industrialisierung, Fabrikalltag und die Soziale Frage",
        "folder": "industrialisierung-und-die-folgen-3367"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Industrielle+Revolution+%26+Die+Soziale+Frage+geschichte&t=147"
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
      },
      {
        "id": "hist-zv-1",
        "title": "Der Deutsche Zollverein 1834 – Wegbereiter der Einheit",
        "folder": "der-deutsche-zollverein-3087"
      },
      {
        "id": "hist-bm-1",
        "title": "Die Biedermeierzeit – Bürgerkultur zwischen Restauration und Zensur",
        "folder": "die-biedermeierzeit-3158"
      },
      {
        "id": "3373",
        "title": "Escape Room: Deutschland im 19. Jahrhundert (Vormärz bis Paulskirche)",
        "folder": "deutschland-im-19-jahrhundert-3373"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Vorm%C3%A4rz+%26+Die+Revolution+von+1848%2F49+geschichte&t=147"
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
        "id": "hist-kg-1",
        "title": "Schlacht bei Königgrätz 1866 – Deutscher Krieg",
        "folder": "schlacht-bei-koniggratz-ursachen-verlauf-und-folgen-3057"
      },
      {
        "id": "hist-hz-1",
        "title": "Die Hohenzollern – Preußens Dynastie und Deutsche Kaiser",
        "folder": "die-hohenzoller-3090"
      },
      {
        "id": "hist-ris-1",
        "title": "Das Risorgimento – Die nationale Einigung Italiens",
        "folder": "die-nationale-einigung-italiens-2966"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Otto+von+Bismarck+%26+Das+Deutsche+Kaiserreich+geschichte&t=147"
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
        "id": "886",
        "title": "Deutsche Kolonien",
        "folder": "deutsche-kolonien-886"
      },
      {
        "id": "2950",
        "title": "Die ersten englischen Kolonien in Nordamerika",
        "folder": "die-ersten-englischen-kolonien-2950"
      },
      {
        "id": "2073",
        "title": "Deutsche Kolonien in Afrika und im Pazifik",
        "folder": "die-ehemaligen-deutschen-kolonien-2073"
      },
      {
        "id": "3508",
        "title": "Spuren des deutschen Kolonialismus heute",
        "folder": "die-ehemaligen-deutschen-kolonien-heute-3508"
      },
      {
        "id": "3264",
        "title": "Kolonialisierung und Imperialismus",
        "folder": "kolonialisierung-und-imperialismus-3264"
      },
      {
        "id": "3050",
        "title": "Plantagen und transatlantischer Sklavenhandel",
        "folder": "plantagen-und-sklavenwirtschaft-in-den-kolonien-3050"
      },
      {
        "id": "hist-imp-1",
        "title": "Imperialismus im 19. und 20. Jahrhundert",
        "folder": "imperialismus-346"
      },
      {
        "id": "hist-imp-2",
        "title": "Imperialismus und Wettlauf um Kolonien",
        "folder": "imperialismus-2-3347"
      },
      {
        "id": "hist-bemp-1",
        "title": "Das Britische Empire – Weltreich des Imperialismus",
        "folder": "das-britische-empire-2-5330"
      },
      {
        "id": "2293",
        "title": "Ausbeutung Amerikas",
        "folder": "ausbeutung-amerikas-2293"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kolonialismus+Imperialismus&t=147"
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
      },
      {
        "id": "3313",
        "title": "Höhepunkt und Zerfall des Österreichischen Kaiserreiches",
        "folder": "hohepunkt-und-zerfall-des-sterreichischen-kaiserreiches-3313"
      },
      {
        "id": "3311",
        "title": "Die Kaiser von Österreich (Franz I. bis Karl I.)",
        "folder": "kaiser-von-sterreich-3311"
      },
      {
        "id": "hist-oe-1",
        "title": "Kaiserin Elisabeth (Sisi) von Österreich-Ungarn",
        "folder": "elisabeth-von-sterreich-ungarn-2996"
      },
      {
        "id": "hist-oe-2",
        "title": "Das Kaisertum Österreich (1804–1867)",
        "folder": "das-sterreichische-kaiserreich-5334"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Habsburger+Kaisertum+Oesterreich&t=147"
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
        "id": "3070",
        "title": "Zerfall der Habsburgmonarchie",
        "folder": "zerfall-der-habsburgmonarchie-3070"
      },
      {
        "id": "5402",
        "title": "Was wäre, wenn das Osmanische Reich nie zerfallen wäre …",
        "folder": "was-ware-wenn-das-osmanische-reich-nie-zerfallen-ware-5402"
      },
      {
        "id": "3019",
        "title": "Kaiser Karl I. von Österreich-Ungarn",
        "folder": "kaiser-karl-i-von-sterreich-ungarn-3019"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Oesterreich-Ungarn+Vielvoelkerstaat&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erster+Weltkrieg+Ursachen+1914&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erster+Weltkrieg+Verlauf+Versailles&t=147"
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
      },
      {
        "id": "3326",
        "title": "Die Weimarer Republik – Entstehung & Verfassung",
        "folder": "die-weimarer-republik-2-3326"
      },
      {
        "id": "hist-wr-1",
        "title": "Ausrufung der Republik 1918 – Ende der Monarchie",
        "folder": "ausrufung-der-republik-1918-3266"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Die+Weimarer+Republik+%26+Krisenjahre+geschichte&t=147"
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
      },
      {
        "id": "2352",
        "title": "Die Russische Revolution (1917)",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-6-2352"
      },
      {
        "id": "hist-zk-1",
        "title": "Die Schattendorfer Vorfälle 1927 – Eskalation der Ersten Republik",
        "folder": "kampfe-von-schattendorf-3028"
      },
      {
        "id": "hist-zk-2",
        "title": "Die Vaterländische Front – Ständestaat in Österreich",
        "folder": "die-vaterlandische-front-2987"
      },
      {
        "id": "hist-zk-3",
        "title": "Karl Renner – Staatskanzler der Republik Österreich",
        "folder": "karl-renner-3024"
      },
      {
        "id": "hist-zk-4",
        "title": "Kurt Schuschnigg – Bundeskanzler vor dem Anschluss 1938",
        "folder": "kurt-schuschnigg-3027"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zwischenkriegszeit+%26+Faschismus+in+Europa+geschichte&t=147"
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
      },
      {
        "id": "hist-wr-2",
        "title": "Massenarbeitslosigkeit und soziale Krisen nach 1918",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-2889"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=weimarer+republik&t=147"
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
        "id": "2901",
        "title": "Das Ermächtigungsgesetz",
        "folder": "das-ermachtigungsgesetz-2901"
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
      },
      {
        "id": "3310",
        "title": "Nationalsozialistische Ideologie",
        "folder": "nationalsozialistische-idelogie-3310"
      },
      {
        "id": "3306",
        "title": "Führende Akteure des NS-Regimes",
        "folder": "nationalsozialismus-wichtige-personen-3306"
      },
      {
        "id": "3309",
        "title": "NS-Massenorganisationen (SA, SS, HJ, BDM)",
        "folder": "ns-organisationen-3309"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Machtergreifung%2C+NS-Ideologie+%26+F%C3%BChrerstaat+geschichte&t=147"
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
      },
      {
        "id": "2362",
        "title": "Hitlers Außenpolitik und Kriegsvorbereitung",
        "folder": "hitlers-auesenpolitik-2362"
      },
      {
        "id": "hist-zw-1",
        "title": "Der Weg in den Zweiten Weltkrieg – Hitlers Aggressionspolitik",
        "folder": "der-weg-in-den-zweiten-weltkrieg-2-3307"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zweiter+Weltkrieg+Blitzkrieg+1939&t=147"
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
      },
      {
        "id": "3319",
        "title": "Verlauf des Zweiten Weltkriegs",
        "folder": "verlauf-des-zweiten-weltkriegs-3319"
      },
      {
        "id": "697",
        "title": "Zweiter Weltkrieg: Wendepunkte & Chronologie (Quiz)",
        "folder": "studypoint-multiple-choice-zweiter-weltkrieg-697"
      },
      {
        "id": "hist-zw-2",
        "title": "Moskauer Deklaration 1943 & Konferenz von Jalta 1945",
        "folder": "die-moskauer-deklaration-und-die-konferenz-in-jalta-2965"
      },
      {
        "id": "hist-zw-3",
        "title": "Kriegsende 1945 – Kapitulation und weltweite Folgen",
        "folder": "ende-und-folgen-des-zweiten-weltkriegs-3320"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zweiter+Weltkrieg+Stalingrad+DDay&t=147"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Der+Holocaust+%26+Die+Verfolgung+der+Juden+geschichte&t=147"
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
      },
      {
        "id": "ges-reichsparteitag",
        "title": "Das Dokumentationszentrum Reichsparteitagsgelände",
        "folder": "das-dokumentationszentrum-reichsparteitagsgelaende"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Widerstand+im+Nationalsozialismus+geschichte&t=147"
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
      },
      {
        "id": "3064",
        "title": "Flucht und Vertreibung nach 1945",
        "folder": "vertreibung-nach-dem-zweiten-weltkrieg-3064"
      },
      {
        "id": "hist-nk-1",
        "title": "Deutschland nach 1945 – Potsdamer Konferenz und Besatzung",
        "folder": "deutschland-nach-dem-2-wk-3328"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Nachkriegszeit%2C+Stunde+Null+%26+Besatzungszonen+geschichte&t=147"
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
      },
      {
        "id": "5339",
        "title": "Der Kalte Krieg: Ursachen & bipolare Weltordnung",
        "folder": "der-kalte-krieg-2-5339"
      },
      {
        "id": "2347",
        "title": "Die Nuklearkatastrophe von Tschernobyl (1986)",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-2347"
      },
      {
        "id": "hist-kk-1",
        "title": "Die Kubakrise 1962 – Die Welt am Rande des Atomkriegs",
        "folder": "die-kubakrise-2963"
      },
      {
        "id": "hist-kk-2",
        "title": "Supermächte im Kalten Krieg: USA vs. Sowjetunion",
        "folder": "usa-gegen-sowjetunion-3340"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kalter+Krieg+Kubakrise+NATO&t=147"
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
      },
      {
        "id": "3342",
        "title": "Der Kalte Krieg: Stellvertreterkriege",
        "folder": "der-kalte-krieg-widerstand-und-stellvertreterkriege-3342"
      },
      {
        "id": "3337",
        "title": "Kriege der USA nach 1945: Korea und Vietnam",
        "folder": "kriege-der-usa-nach-dem-zweiten-weltkrieg-3337"
      },
      {
        "id": "hist-uno-1",
        "title": "Die Vereinten Nationen (UNO) – Gründung und Friedensmission",
        "folder": "die-geschichte-der-vereinten-nationen-5365"
      },
      {
        "id": "3362",
        "title": "Escape Room: Terrorismus im 20. Jahrhundert – Ursachen und Brennpunkte",
        "folder": "terrorismus-im-20-jahrhundert-3362"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Stellvertreterkriege+Vietnam+Korea&t=147"
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
      },
      {
        "id": "ostalgie",
        "title": "Ostalgie – Alltag und Erinnerungskultur in der DDR",
        "folder": "ostalgie-nostalgie-fuer-die-ddr"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Leben+in+der+DDR%2C+Mauerbau+1961+%26+Stasi+geschichte&t=147"
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
      },
      {
        "id": "2654",
        "title": "Die Deutsche Wiedervereinigung (1989/90)",
        "folder": "buddhismus-in-der-modernen-welt-35-2654"
      },
      {
        "id": "brd-seit-1990",
        "title": "Geschichte Deutschlands seit der Wiedervereinigung",
        "folder": "geschichte-deutschlands-seit-1990"
      },
      {
        "id": "hist-fr-ev",
        "title": "Der Fall des Eisernen Vorhangs 1989 (Teil 2)",
        "folder": "der-fall-des-eisernen-vorhangs-2-5338"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Friedliche+Revolution+%26+Wiedervereinigung+1989%2F90+geschichte&t=147"
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
      },
      {
        "id": "2916",
        "title": "Der erste, zweite und dritte Golfkrieg",
        "folder": "der-erste-zweite-und-dritte-golfkrieg-2916"
      },
      {
        "id": "741",
        "title": "Der Zerfall Jugoslawiens & die Balkankriege",
        "folder": "unabhangigkeit-der-teilrepubliken-jugoslawiens-741"
      },
      {
        "id": "3345",
        "title": "Kriege und Konflikte im 21. Jahrhundert",
        "folder": "kriege-und-krisen-im-21-jahrhundert-3345"
      },
      {
        "id": "hist-nah-1",
        "title": "Die Beziehungen der USA zu Israel im Nahostkonflikt",
        "folder": "die-beziehung-der-usa-mit-israel-5426"
      },
      {
        "id": "hist-nah-2",
        "title": "Israel und Iran – Entstehung der Feindschaft",
        "folder": "warum-israel-und-iran-feinde-sind-5429"
      },
      {
        "id": "3363",
        "title": "Escape Room: Der Nahe Osten und seine Konflikte",
        "folder": "naher-osten-und-konflikte-3363"
      },
      {
        "id": "5424",
        "title": "Ayatollah Ali Chamenei: Staatsoberhaupt und geistlicher Führer des Iran",
        "folder": "ali-chamenei-5424"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nahostkonflikt&t=147"
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
      },
      {
        "id": "3317",
        "title": "Österreich nach dem Zweiten Weltkrieg: Wiederaufbau",
        "folder": "sterreich-nach-dem-zweiten-weltkrieg-3317"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staatsvertrag+oesterreich&t=147"
  },
  "alltag-und-propaganda-im-ns-staat": {
    "slug": "alltag-und-propaganda-im-ns-staat",
    "title": "Alltag, Jugend & Propaganda im NS-Staat",
    "category": "Nationalsozialismus & Zweiter Weltkrieg",
    "shortDesc": "Hitlerjugend, BDM, Frauenbild, Schule, Propaganda, Kraft durch Freude, Reichsarbeitsdienst und die Olympischen Spiele 1936.",
    "longDesc": "Der Nationalsozialismus durchdrang den gesamten Alltag: Kinder wurden in der Schule und in HJ und BDM indoktriniert, Freizeit und Arbeit wurden organisiert, Propaganda und Bücherverbrennungen formten die öffentliche Meinung. Hier lernst du, wie das Regime die Menschen erfasste und lenkte.",
    "keyPoints": [
      "Hitlerjugend und BDM: Erziehung und Kontrolle der Jugend",
      "Schule und Frauenbild: Ideologie in Unterricht und Familie",
      "Propaganda: Goebbels, Volksgemeinschaft und Massenbeeinflussung",
      "Kraft durch Freude, Reichsarbeitsdienst und die Olympischen Spiele 1936 als Instrumente des Regimes"
    ],
    "exercises": [
      {
        "id": "2894",
        "title": "BDM und HJ - Die Jugend im Nationalsozialismus",
        "folder": "bdm-und-hj-die-jugend-im-nationalsozialismus-2894"
      },
      {
        "id": "2906",
        "title": "Das nationalsozialistische Frauenbild",
        "folder": "das-nationalsozialistische-frauenbild-2906"
      },
      {
        "id": "3059",
        "title": "Schule und Indoktrination im Nationalsozialismus",
        "folder": "schule-im-nationalsozialismus-3059"
      },
      {
        "id": "3308",
        "title": "NS-Propaganda und Volksgemeinschaft",
        "folder": "ns-sozialpolitik-3308"
      },
      {
        "id": "hist-ns-1",
        "title": "Propaganda der NSDAP – Methoden der Beeinflussung",
        "folder": "propaganda-der-nsdap-3051"
      },
      {
        "id": "hist-ns-2",
        "title": "Kraft durch Freude (KdF) – Organisation der Freizeit im NS-Staat",
        "folder": "kraft-durch-freude-kdf-3026"
      },
      {
        "id": "hist-ns-3",
        "title": "Der Reichsarbeitsdienst (RAD) im NS-Staat",
        "folder": "der-reichsarbeitsdienst-2924"
      },
      {
        "id": "hist-ns-4",
        "title": "Die Olympischen Spiele 1936 in Berlin als Propagandabühne",
        "folder": "die-olympischen-spiele-1936-2970"
      },
      {
        "id": "2895",
        "title": "Bücherverbrennung und Berufsverbote 1933",
        "folder": "berufsverbot-und-bucherverbrennung-im-ns-2895"
      }
    ]
  },
  "dekolonisierung-und-unabhaengigkeitsbewegungen": {
    "slug": "dekolonisierung-und-unabhaengigkeitsbewegungen",
    "title": "Dekolonisierung & Unabhängigkeitsbewegungen",
    "category": "Kalter Krieg & Deutsche Teilung",
    "shortDesc": "Das Ende der Kolonialreiche in Afrika, Asien und Südamerika, Gandhi und Indien, Apartheid in Südafrika.",
    "longDesc": "Nach dem Zweiten Weltkrieg zerfielen die europäischen Kolonialreiche. Neue Staaten entstanden, oft nach langen Unabhängigkeitskämpfen und mit bleibenden Konflikten. Entdecke die Wege Indiens unter Gandhi, die Dekolonisierung in Afrika, Asien und Südamerika und die Geschichte der Apartheid.",
    "keyPoints": [
      "Indien als britische Kolonie und der gewaltfreie Widerstand Mahatma Gandhis",
      "Dekolonisierung in Afrika, Asien und Südamerika nach 1945",
      "Das Ende des Britischen Empire",
      "Apartheid in Südafrika: Rassentrennung und ihr Ende"
    ],
    "exercises": [
      {
        "id": "824",
        "title": "Indien als britische Kolonie",
        "folder": "indien-als-britische-kolonie-824"
      },
      {
        "id": "887",
        "title": "Die Apartheid in Südafrika",
        "folder": "die-apartheid-887"
      },
      {
        "id": "3033",
        "title": "Mahatma Gandhi und die Unabhängigkeit Indiens",
        "folder": "mahatma-gandhi-und-die-unabhangigkeit-indiens-3033"
      },
      {
        "id": "hist-entk-1",
        "title": "Die Entkolonialisierung in Afrika",
        "folder": "die-entkolonialisierung-in-afrika-2944"
      },
      {
        "id": "hist-entk-2",
        "title": "Die Entkolonialisierung in Asien",
        "folder": "die-entkolonialisierung-in-asien-2945"
      },
      {
        "id": "hist-entk-3",
        "title": "Die Entkolonialisierung in Südamerika",
        "folder": "die-entkolonialisierung-in-sudamerika-2946"
      },
      {
        "id": "2072",
        "title": "Das Britische Empire & Dekolonisierung",
        "folder": "die-ehemaligen-britischen-kolonien-2072"
      },
      {
        "id": "3349",
        "title": "Escape Room: Die Entkolonialisierung & globale Befreiungsbewegungen",
        "folder": "die-entkolonialisierung-3349"
      }
    ]
  },
  "europaeische-laender-im-ueberblick": {
    "slug": "europaeische-laender-im-ueberblick",
    "title": "Europäische Länder im geschichtlichen Überblick",
    "category": "Weltgeschichte & Länderporträts",
    "shortDesc": "Geschichte Frankreichs, Großbritanniens, Italiens, Deutschlands, Dänemarks, Bayerns, Tirols, der Friesen sowie der Königreiche Bayern und Sachsen.",
    "longDesc": "Jedes Land hat seine eigene Geschichte: von den Anfängen über Blütezeiten und Krisen bis zur Gegenwart. Die Übersichten helfen, historische Entwicklungen in Europa einzuordnen und regionale Besonderheiten zu verstehen.",
    "keyPoints": [
      "Frankreich, Großbritannien und Italien: Entwicklung von Nationalstaaten und Weltmächten",
      "Deutschland, Bayern, Tirol und Sachsen: Regionen und Staaten im deutschsprachigen Raum",
      "Dänemark und die Friesen: Geschichte im Norden Europas",
      "Zeitliche Einordnung durch Überblicksdarstellungen"
    ],
    "exercises": [
      {
        "id": "5371",
        "title": "Die Geschichte Frankreichs",
        "folder": "die-geschichte-frankreichs-5371"
      },
      {
        "id": "5372",
        "title": "Die Geschichte Großbritanniens",
        "folder": "die-geschichte-groesbritanniens-5372"
      },
      {
        "id": "5375",
        "title": "Die Geschichte Italiens",
        "folder": "die-geschichte-italiens-5375"
      },
      {
        "id": "5370",
        "title": "Die Geschichte Deutschlands",
        "folder": "die-geschichte-deutschlands-5370"
      },
      {
        "id": "3091",
        "title": "Die Geschichte Dänemarks",
        "folder": "geschichte-danemarks-3091"
      },
      {
        "id": "5349",
        "title": "Die Geschichte Bayerns",
        "folder": "die-geschichte-bayerns-5349"
      },
      {
        "id": "3029",
        "title": "Das Königreich Bayern",
        "folder": "konigreich-bayern-3029"
      },
      {
        "id": "3030",
        "title": "Das Königreich Sachsen",
        "folder": "konigreich-sachsen-3030"
      },
      {
        "id": "5380",
        "title": "Die Geschichte Tirols",
        "folder": "die-geschichte-tirols-5380"
      },
      {
        "id": "friesen",
        "title": "Die Geschichte der Friesen",
        "folder": "die-geschichte-der-friesen"
      },
      {
        "id": "3365",
        "title": "Escape Room: Geschichte Großbritanniens – Von der Magna Carta zum Empire",
        "folder": "geschichte-groesbritanniens-3365"
      },
      {
        "id": "3343",
        "title": "Escape Room: Geschichte Italiens – Vom Römischen Reich zum Risorgimento",
        "folder": "geschichte-italiens-3343"
      }
    ]
  },
  "russland-asien-und-naher-osten": {
    "slug": "russland-asien-und-naher-osten",
    "title": "Russland, Asien & Naher Osten",
    "category": "Weltgeschichte & Länderporträts",
    "shortDesc": "Geschichte Russlands, Chinas, Indiens, Japans, der Türkei und des Nahostkonflikts mit Israel.",
    "longDesc": "Von der Entstehung Russlands über das Zarenreich, die Geschichte Chinas und Indiens bis zu Japan, der Türkei und aktuellen Konflikten: Dieses Thema bietet Länderporträts und Konfliktanalysen aus Osteuropa, Asien und dem Nahen Osten.",
    "keyPoints": [
      "Russland: Entstehung, Zarenreich und Geschichte bis heute",
      "China: Kaiserreich, 20. Jahrhundert und der Konflikt mit Taiwan",
      "Indien: Geschichte, Teilung 1947 und der Konflikt mit Pakistan",
      "Japan, Türkei und Israel: Entwicklungen und Spannungsfelder"
    ],
    "exercises": [
      {
        "id": "3111",
        "title": "Die Entstehung Russlands",
        "folder": "die-entstehung-russlands-3111"
      },
      {
        "id": "2908",
        "title": "Das russische Zarenreich",
        "folder": "das-russische-zarenreich-2908"
      },
      {
        "id": "5396",
        "title": "Die Geschichte Russlands",
        "folder": "geschichte-russlands-5396"
      },
      {
        "id": "5351",
        "title": "Die Geschichte Chinas",
        "folder": "die-geschichte-chinas-5351"
      },
      {
        "id": "646",
        "title": "China im 20. Jahrhundert",
        "folder": "china-im-20-jahrhundert-646"
      },
      {
        "id": "5241",
        "title": "Der Konflikt zwischen China und Taiwan",
        "folder": "der-konflikt-zwischen-china-und-taiwan-5241"
      },
      {
        "id": "5373",
        "title": "Die Geschichte Indiens",
        "folder": "die-geschichte-indiens-5373"
      },
      {
        "id": "2982",
        "title": "Die Teilung Indiens",
        "folder": "die-teilung-indiens-2982"
      },
      {
        "id": "5240",
        "title": "Der Konflikt zwischen Indien und Pakistan",
        "folder": "der-konflikt-zwischen-indien-und-pakistan-5240"
      },
      {
        "id": "5376",
        "title": "Die Geschichte Japans",
        "folder": "die-geschichte-japans-5376"
      },
      {
        "id": "5363",
        "title": "Die Geschichte der Türkei",
        "folder": "die-geschichte-der-turkei-5363"
      },
      {
        "id": "5428",
        "title": "Warum Israel (fast) nur von Feinden umgeben ist",
        "folder": "warum-israel-fast-nur-von-feinden-umgeben-ist-5428"
      },
      {
        "id": "3350",
        "title": "Escape Room: Frühe Geschichte und Entstehung Russlands",
        "folder": "fruhe-geschichte-und-entstehung-russlands-3350"
      },
      {
        "id": "3351",
        "title": "Escape Room: Die Sowjetunion und der Kommunismus",
        "folder": "sowjetunion-und-kommunismus-3351"
      }
    ]
  },
  "amerika-und-australien-im-ueberblick": {
    "slug": "amerika-und-australien-im-ueberblick",
    "title": "Amerika & Australien im geschichtlichen Überblick",
    "category": "Weltgeschichte & Länderporträts",
    "shortDesc": "Geschichte Kanadas, Mexikos, Brasiliens, Argentiniens, Chiles und Australiens.",
    "longDesc": "Vom Leben der indigenen Völker über Kolonisation und Unabhängigkeit bis zur Gegenwart: Die Länderporträts zeigen, wie Staaten in Nord- und Südamerika sowie Australien entstanden sind.",
    "keyPoints": [
      "Kanada und Mexiko: Nordamerikanische Nachbarn der USA",
      "Brasilien, Argentinien und Chile: Kolonialzeit und Unabhängigkeit in Südamerika",
      "Australien: Ureinwohner, Strafkolonie und moderne Nation"
    ],
    "exercises": [
      {
        "id": "5377",
        "title": "Die Geschichte Kanadas",
        "folder": "die-geschichte-kanadas-5377"
      },
      {
        "id": "5378",
        "title": "Die Geschichte Mexikos (ausführlich)",
        "folder": "die-geschichte-mexikos-2-5378"
      },
      {
        "id": "2955",
        "title": "Die Geschichte Mexikos (Kurzfassung)",
        "folder": "die-geschichte-mexikos-2955"
      },
      {
        "id": "5350",
        "title": "Die Geschichte Brasiliens (ausführlich)",
        "folder": "die-geschichte-brasiliens-5350"
      },
      {
        "id": "3071",
        "title": "Die Geschichte Brasiliens (Kurzfassung)",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-2-3071"
      },
      {
        "id": "5347",
        "title": "Die Geschichte Argentiniens",
        "folder": "die-geschichte-argentiniens-5347"
      },
      {
        "id": "2953",
        "title": "Die Geschichte Chiles",
        "folder": "die-geschichte-chiles-2953"
      },
      {
        "id": "5348",
        "title": "Die Geschichte Australiens",
        "folder": "die-geschichte-australiens-5348"
      },
      {
        "id": "3357",
        "title": "Escape Room: Geschichte Südamerikas – Präkolumbische Reiche bis zur Moderne",
        "folder": "geschichte-sudamerikas-3357"
      }
    ]
  },
  "kulturgeschichte-bildung-medizin-sport-technik": {
    "slug": "kulturgeschichte-bildung-medizin-sport-technik",
    "title": "Kulturgeschichte: Bildung, Medizin, Sport & Technik",
    "category": "Weltgeschichte & Länderporträts",
    "shortDesc": "Geschichte der Bildung, der Medizin, des Fußballs, der Eisenbahn und der Archäologie.",
    "longDesc": "Geschichte betrifft nicht nur Kriege und Herrscher: Schule, Heilkunde, Sport, Verkehr und die Erforschung der Vergangenheit haben unser Leben ebenso verändert. Diese Übersichten zeigen die Entwicklung wichtiger Lebensbereiche.",
    "keyPoints": [
      "Bildung: Vom Unterricht für Wenige zur allgemeinen Schulpflicht",
      "Medizin: Von der Antike zur modernen Heilkunde",
      "Fußball und Eisenbahn: Sport und Mobilität im Wandel",
      "Archäologie: Wie Funde Geschichte sichtbar machen"
    ],
    "exercises": [
      {
        "id": "5352",
        "title": "Die Geschichte der Bildung",
        "folder": "die-geschichte-der-bildung-5352"
      },
      {
        "id": "5359",
        "title": "Die Geschichte der Medizin",
        "folder": "die-geschichte-der-medizin-5359"
      },
      {
        "id": "5366",
        "title": "Die Geschichte des Fußballs",
        "folder": "die-geschichte-des-fuesballs-5366"
      },
      {
        "id": "3175",
        "title": "Die Geschichte der Eisenbahn",
        "folder": "geschichte-der-eisenbahn-3175"
      },
      {
        "id": "5388",
        "title": "Die Geschichte der Archäologie",
        "folder": "geschichte-der-archaologie-5388"
      },
      {
        "id": "3358",
        "title": "Escape Room: Geschichte Afrikas – Reiche, Kulturen & Umbrüche",
        "folder": "geschichte-afrikas-3358"
      }
    ]
  },
  "alternativgeschichte-was-waere-wenn": {
    "slug": "alternativgeschichte-was-waere-wenn",
    "title": "Alternativgeschichte: Was wäre, wenn …?",
    "category": "Weltgeschichte & Länderporträts",
    "shortDesc": "Gedankenexperimente zu Wendepunkten: Weltkrieg, Atombombe, DDR, Reformation, Entdeckung Amerikas und mehr.",
    "longDesc": "Was wäre geschehen, wenn ein historisches Ereignis anders verlaufen wäre? Diese Gedankenexperimente schärfen das Verständnis für Ursachen, Wendepunkte und Folgen und üben kritisches, kontrafaktisches Denken.",
    "keyPoints": [
      "Kontrafaktisches Denken: Ursachen und Folgen historischer Entscheidungen abwägen",
      "Wendepunkte des 20. Jahrhunderts: Zweiter Weltkrieg, Atombombe, DDR, Kaiserreich",
      "Frühe Neuzeit und Mittelalter: Reformation, Armada, Christianisierung",
      "Entdeckungen: Amerika und die Wikinger"
    ],
    "exercises": [
      {
        "id": "5400",
        "title": "Was wäre, wenn Amerika nie entdeckt worden wäre …?",
        "folder": "was-ware-wenn-amerika-nie-entdeckt-geworden-ware-5400"
      },
      {
        "id": "5415",
        "title": "Was wäre, wenn die Wikinger Amerika dauerhaft besiedelt hätten …?",
        "folder": "was-ware-wenn-die-wikinger-amerika-dauerhaft-besiedelt-hatten-5415"
      },
      {
        "id": "5418",
        "title": "Was wäre, wenn Europa nie christianisiert worden wäre …?",
        "folder": "was-ware-wenn-europa-nie-christianisiert-worden-ware-5418"
      },
      {
        "id": "5417",
        "title": "Was wäre, wenn es nie zur Reformation gekommen wäre …?",
        "folder": "was-ware-wenn-es-nie-zur-reformation-gekommen-ware-5417"
      },
      {
        "id": "5412",
        "title": "Was wäre, wenn die Spanische Armada England besiegt hätte …?",
        "folder": "was-ware-wenn-die-spanische-armada-england-besiegt-hatte-5412"
      },
      {
        "id": "5423",
        "title": "Was wäre, wenn Deutschland immer noch einen Kaiser hätte …?",
        "folder": "was-ware-wenn-deutschland-immer-noch-einen-kaiser-hatte-5423"
      },
      {
        "id": "5419",
        "title": "Was wäre, wenn Hitler an der Kunstakademie angenommen worden wäre …?",
        "folder": "was-ware-wenn-hitler-an-der-kunstakademie-angenommen-worden-ware-5419"
      },
      {
        "id": "5407",
        "title": "Was wäre, wenn Deutschland den Zweiten Weltkrieg gewonnen hätte …?",
        "folder": "was-ware-wenn-deutschland-den-zweiten-weltkrieg-gewonnen-hatte-5407"
      },
      {
        "id": "5414",
        "title": "Was wäre, wenn die USA nie in den Zweiten Weltkrieg eingetreten wären …?",
        "folder": "was-ware-wenn-die-usa-nie-in-den-zweiten-weltkrieg-eingetreten-waren-5414"
      },
      {
        "id": "5408",
        "title": "Was wäre, wenn die Atombombe nie entwickelt worden wäre …?",
        "folder": "was-ware-wenn-die-atombombe-nie-entwickelt-worden-ware-5408"
      },
      {
        "id": "5411",
        "title": "Was wäre, wenn die Nazis die Atombombe zuerst entwickelt hätten …?",
        "folder": "was-ware-wenn-die-nazis-die-atombombe-zuerst-entwickelt-hatten-5411"
      },
      {
        "id": "5416",
        "title": "Was wäre, wenn es die DDR immer noch geben würde …?",
        "folder": "was-ware-wenn-es-die-ddr-immer-noch-geben-wurde-5416"
      }
    ]
  },
  "chronik-1500-bis-1590-renaissance-und-reformation": {
    "slug": "chronik-1500-bis-1590-renaissance-und-reformation",
    "title": "Chronik 1500–1590: Renaissance & Reformation",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Schlüsselereignisse der Reformation, Renaissance und des 16. Jahrhunderts im Jahrzehntüberblick.",
    "longDesc": "Das 16. Jahrhundert war eine Zeit des radikalen Umbruchs in Europa: Martin Luthers Thesenanschlag 1517 leitete die Reformation ein, der Buchdruck revolutionierte die Verbreitung von Wissen, und die europäische Expansion veränderte das weltweite Machtgefüge.",
    "keyPoints": [
      "1517: Martin Luther und der Beginn der Reformation",
      "Bauernkriege und gesellschaftliche Umbrüche im Heiligen Römischen Reich",
      "Wissenschaftliche Entdeckungen der Renaissance und das kopernikanische Weltbild",
      "Religionskriege und der Augsburger Religionsfrieden 1555"
    ],
    "exercises": [
      {
        "id": "4792",
        "title": "Das Jahr 1500",
        "folder": "1500-4792"
      },
      {
        "id": "4793",
        "title": "Das Jahr 1510",
        "folder": "1510-4793"
      },
      {
        "id": "4794",
        "title": "Das Jahr 1520",
        "folder": "1520-4794"
      },
      {
        "id": "4795",
        "title": "Das Jahr 1530",
        "folder": "1530-4795"
      },
      {
        "id": "4796",
        "title": "Das Jahr 1540",
        "folder": "1540-4796"
      },
      {
        "id": "4797",
        "title": "Das Jahr 1550",
        "folder": "1550-4797"
      },
      {
        "id": "4798",
        "title": "Das Jahr 1560",
        "folder": "1560-4798"
      },
      {
        "id": "4799",
        "title": "Das Jahr 1570",
        "folder": "1570-4799"
      },
      {
        "id": "4800",
        "title": "Das Jahr 1580",
        "folder": "1580-4800"
      },
      {
        "id": "4801",
        "title": "Das Jahr 1590",
        "folder": "1590-4801"
      }
    ]
  },
  "chronik-1600-bis-1690-barock-und-dreissigjaehriger-krieg": {
    "slug": "chronik-1600-bis-1690-barock-und-dreissigjaehriger-krieg",
    "title": "Chronik 1600–1690: Barock & Dreißigjähriger Krieg",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Das 17. Jahrhundert: Dreißigjähriger Krieg, Westfälischer Friede und Zeitalter des Barock.",
    "longDesc": "Zwischen 1618 und 1648 verwüstete der Dreißigjährige Krieg weite Teile Mitteleuropas. Mit dem Westfälischen Frieden von 1648 entstand die Basis des modernen Völkerrechts und souveräner Staaten, während am Hof von Versailles der französische Absolutismus erblühte.",
    "keyPoints": [
      "1618–1648: Der Dreißigjährige Krieg – Konfessionskrieg und europäischer Machtkampf",
      "1648: Westfälischer Friede zu Münster und Osnabrück",
      "Aufstieg des Absolutismus unter Ludwig XIV. in Frankreich",
      "Wissenschaftliche Revolution: Galileo Galilei, Isaac Newton und René Descartes"
    ],
    "exercises": [
      {
        "id": "4802",
        "title": "Das Jahr 1600",
        "folder": "1600-4802"
      },
      {
        "id": "4803",
        "title": "Das Jahr 1610",
        "folder": "1610-4803"
      },
      {
        "id": "4804",
        "title": "Das Jahr 1620",
        "folder": "1620-4804"
      },
      {
        "id": "4805",
        "title": "Das Jahr 1630",
        "folder": "1630-4805"
      },
      {
        "id": "4806",
        "title": "Das Jahr 1640",
        "folder": "1640-4806"
      },
      {
        "id": "4807",
        "title": "Das Jahr 1650",
        "folder": "1650-4807"
      },
      {
        "id": "4808",
        "title": "Das Jahr 1660",
        "folder": "1660-4808"
      },
      {
        "id": "4809",
        "title": "Das Jahr 1670",
        "folder": "1670-4809"
      },
      {
        "id": "4810",
        "title": "Das Jahr 1680",
        "folder": "1680-4810"
      },
      {
        "id": "4811",
        "title": "Das Jahr 1690",
        "folder": "1690-4811"
      }
    ]
  },
  "chronik-1701-bis-1720-fruehe-aufklaerung": {
    "slug": "chronik-1701-bis-1720-fruehe-aufklaerung",
    "title": "Chronik 1701–1720: Frühaufklärung & Großer Nordischer Krieg",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Europäische Mächteverschiebungen, Spanischer Erbfolgekrieg und Frühaufklärung.",
    "longDesc": "Zu Beginn des 18. Jahrhunderts rangen die europäischen Großmächte im Spanischen Erbfolgekrieg und im Großen Nordischen Krieg um die Vorherrschaft. Zugleich gewannen die Ideen der Frühaufklärung an Einfluss.",
    "keyPoints": [
      "Spanischer Erbfolgekrieg (1701–1714) und Frieden von Utrecht",
      "Großer Nordischer Krieg und der Aufstieg Russlands unter Peter dem Großen",
      "Königskrönung Friedrichs I. in Preußen (1701)",
      "Frühe Aufklärungsphilosophie: Vernunft und Naturrecht"
    ],
    "exercises": [
      {
        "id": "4813",
        "title": "Das Jahr 1701",
        "folder": "1701-4813"
      },
      {
        "id": "4814",
        "title": "Das Jahr 1702",
        "folder": "1702-4814"
      },
      {
        "id": "4815",
        "title": "Das Jahr 1703",
        "folder": "1703-4815"
      },
      {
        "id": "4816",
        "title": "Das Jahr 1704",
        "folder": "1704-4816"
      },
      {
        "id": "4817",
        "title": "Das Jahr 1705",
        "folder": "1705-4817"
      },
      {
        "id": "4818",
        "title": "Das Jahr 1706",
        "folder": "1706-4818"
      },
      {
        "id": "4819",
        "title": "Das Jahr 1707",
        "folder": "1707-4819"
      },
      {
        "id": "4820",
        "title": "Das Jahr 1708",
        "folder": "1708-4820"
      },
      {
        "id": "4821",
        "title": "Das Jahr 1709",
        "folder": "1709-4821"
      },
      {
        "id": "4823",
        "title": "Das Jahr 1711",
        "folder": "1711-4823"
      },
      {
        "id": "4824",
        "title": "Das Jahr 1712",
        "folder": "1712-4824"
      },
      {
        "id": "4825",
        "title": "Das Jahr 1713",
        "folder": "1713-4825"
      },
      {
        "id": "4826",
        "title": "Das Jahr 1714",
        "folder": "1714-4826"
      },
      {
        "id": "4827",
        "title": "Das Jahr 1715",
        "folder": "1715-4827"
      },
      {
        "id": "4828",
        "title": "Das Jahr 1716",
        "folder": "1716-4828"
      },
      {
        "id": "4829",
        "title": "Das Jahr 1717",
        "folder": "1717-4829"
      },
      {
        "id": "4830",
        "title": "Das Jahr 1718",
        "folder": "1718-4830"
      },
      {
        "id": "4831",
        "title": "Das Jahr 1719",
        "folder": "1719-4831"
      }
    ]
  },
  "chronik-1721-bis-1740-absolutismus-in-europa": {
    "slug": "chronik-1721-bis-1740-absolutismus-in-europa",
    "title": "Chronik 1721–1740: Aufgeklärter Absolutismus & Barockzeit",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Pragmatische Sanktion, preußischer Militarismus und Kulturblüte des Spätbarock.",
    "longDesc": "In den 1720er- und 1730er-Jahren festigte sich in Österreich die Erbfolge Maria Theresias durch die Pragmatische Sanktion, während der Soldatenkönig Friedrich Wilhelm I. in Preußen Heer und Verwaltung straff organisierte.",
    "keyPoints": [
      "Konsolidierung der mitteleuropäischen Monarchien Österreich und Preußen",
      "Die Pragmatische Sanktion von 1713 und ihre Anerkennung",
      "Spätbarock und Rokoko in Kunst, Musik und Architektur",
      "Wirtschaftlicher Merkantilismus und Kameralismus"
    ],
    "exercises": [
      {
        "id": "4833",
        "title": "Das Jahr 1721",
        "folder": "1721-4833"
      },
      {
        "id": "4834",
        "title": "Das Jahr 1722",
        "folder": "1722-4834"
      },
      {
        "id": "4835",
        "title": "Das Jahr 1723",
        "folder": "1723-4835"
      },
      {
        "id": "4836",
        "title": "Das Jahr 1724",
        "folder": "1724-4836"
      },
      {
        "id": "4837",
        "title": "Das Jahr 1725",
        "folder": "1725-4837"
      },
      {
        "id": "4838",
        "title": "Das Jahr 1726",
        "folder": "1726-4838"
      },
      {
        "id": "4839",
        "title": "Das Jahr 1727",
        "folder": "1727-4839"
      },
      {
        "id": "4840",
        "title": "Das Jahr 1728",
        "folder": "1728-4840"
      },
      {
        "id": "4841",
        "title": "Das Jahr 1729",
        "folder": "1729-4841"
      },
      {
        "id": "4843",
        "title": "Das Jahr 1731",
        "folder": "1731-4843"
      },
      {
        "id": "4844",
        "title": "Das Jahr 1732",
        "folder": "1732-4844"
      },
      {
        "id": "4845",
        "title": "Das Jahr 1733",
        "folder": "1733-4845"
      },
      {
        "id": "4846",
        "title": "Das Jahr 1734",
        "folder": "1734-4846"
      },
      {
        "id": "4847",
        "title": "Das Jahr 1735",
        "folder": "1735-4847"
      },
      {
        "id": "4848",
        "title": "Das Jahr 1736",
        "folder": "1736-4848"
      },
      {
        "id": "4849",
        "title": "Das Jahr 1737",
        "folder": "1737-4849"
      },
      {
        "id": "4850",
        "title": "Das Jahr 1738",
        "folder": "1738-4850"
      },
      {
        "id": "4851",
        "title": "Das Jahr 1739",
        "folder": "1739-4851"
      }
    ]
  },
  "chronik-1741-bis-1760-schlesische-kriege": {
    "slug": "chronik-1741-bis-1760-schlesische-kriege",
    "title": "Chronik 1741–1760: Schlesische Kriege & Siebenjähriger Krieg",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Der Dualismus zwischen Preußen und Österreich sowie der globale Siebenjährige Krieg.",
    "longDesc": "Mit dem Regierungsantritt Friedrichs des Großen 1740 und dem Einmarsch in Schlesien begann der preußisch-österreichische Dualismus. Im Siebenjährigen Krieg (1756–1763) kämpften die Allianzen auch in Übersee um Kolonialmacht.",
    "keyPoints": [
      "Schlesische Kriege und Aufstieg Preußens zur fünften europäischen Großmacht",
      "Maria Theresias Reformen in Österreich: Bildung, Steuern und Militär",
      "Siebenjähriger Krieg (1756–1763): Erster weltweiter Konflikt mit Kriegsschauplätzen in Nordamerika und Indien",
      "Die Enzyklopädie von Diderot und d’Alembert als Meilenstein der Aufklärung"
    ],
    "exercises": [
      {
        "id": "4853",
        "title": "Das Jahr 1741",
        "folder": "1741-4853"
      },
      {
        "id": "4854",
        "title": "Das Jahr 1742",
        "folder": "1742-4854"
      },
      {
        "id": "4855",
        "title": "Das Jahr 1743",
        "folder": "1743-4855"
      },
      {
        "id": "4856",
        "title": "Das Jahr 1744",
        "folder": "1744-4856"
      },
      {
        "id": "4857",
        "title": "Das Jahr 1745",
        "folder": "1745-4857"
      },
      {
        "id": "4858",
        "title": "Das Jahr 1746",
        "folder": "1746-4858"
      },
      {
        "id": "4859",
        "title": "Das Jahr 1747",
        "folder": "1747-4859"
      },
      {
        "id": "4860",
        "title": "Das Jahr 1748",
        "folder": "1748-4860"
      },
      {
        "id": "4861",
        "title": "Das Jahr 1749",
        "folder": "1749-4861"
      },
      {
        "id": "4862",
        "title": "Das Jahr 1751",
        "folder": "1751-4862"
      },
      {
        "id": "4863",
        "title": "Das Jahr 1752",
        "folder": "1752-4863"
      },
      {
        "id": "4865",
        "title": "Das Jahr 1754",
        "folder": "1754-4865"
      },
      {
        "id": "4866",
        "title": "Das Jahr 1755",
        "folder": "1755-4866"
      },
      {
        "id": "4867",
        "title": "Das Jahr 1756",
        "folder": "1756-4867"
      },
      {
        "id": "4869",
        "title": "Das Jahr 1758",
        "folder": "1758-4869"
      },
      {
        "id": "4870",
        "title": "Das Jahr 1759",
        "folder": "1759-4870"
      },
      {
        "id": "4871",
        "title": "Das Jahr 1760",
        "folder": "1760-4871"
      }
    ]
  },
  "chronik-1761-bis-1780-vorabend-der-revolutionen": {
    "slug": "chronik-1761-bis-1780-vorabend-der-revolutionen",
    "title": "Chronik 1761–1780: Sturm und Drang & Amerikanische Unabhängigkeit",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Erste Teilung Polens, Amerikanische Unabhängigkeitserklärung und literarischer Sturm und Drang.",
    "longDesc": "Die 1760er- und 1770er-Jahre brachten welthistorische Zäsuren: 1776 erklärten die 13 nordamerikanischen Kolonien ihre Unabhängigkeit von Großbritannien. In Europa erlebten Literatur und Philosophie den Sturm und Drang.",
    "keyPoints": [
      "1776: Die Amerikanische Unabhängigkeitserklärung und Menschenrechte",
      "1772: Erste Teilung Polens unter Russland, Preußen und Österreich",
      "Sturm und Drang in der Literatur: Der junge Goethe und Schiller",
      "James Watts Dampfmaschine (1769) als Startschuss der Industriellen Revolution"
    ],
    "exercises": [
      {
        "id": "4873",
        "title": "Das Jahr 1762",
        "folder": "1762-4873"
      },
      {
        "id": "4874",
        "title": "Das Jahr 1763",
        "folder": "1763-4874"
      },
      {
        "id": "4875",
        "title": "Das Jahr 1764",
        "folder": "1764-4875"
      },
      {
        "id": "4877",
        "title": "Das Jahr 1766",
        "folder": "1766-4877"
      },
      {
        "id": "4878",
        "title": "Das Jahr 1767",
        "folder": "1767-4878"
      },
      {
        "id": "4879",
        "title": "Das Jahr 1768",
        "folder": "1768-4879"
      },
      {
        "id": "4881",
        "title": "Das Jahr 1770",
        "folder": "1770-4881"
      },
      {
        "id": "4882",
        "title": "Das Jahr 1771",
        "folder": "1771-4882"
      },
      {
        "id": "4883",
        "title": "Das Jahr 1772",
        "folder": "1772-4883"
      },
      {
        "id": "4884",
        "title": "Das Jahr 1773",
        "folder": "1773-4884"
      },
      {
        "id": "4885",
        "title": "Das Jahr 1774",
        "folder": "1774-4885"
      },
      {
        "id": "4886",
        "title": "Das Jahr 1775",
        "folder": "1775-4886"
      },
      {
        "id": "4887",
        "title": "Das Jahr 1776",
        "folder": "1776-4887"
      },
      {
        "id": "4889",
        "title": "Das Jahr 1778",
        "folder": "1778-4889"
      },
      {
        "id": "4890",
        "title": "Das Jahr 1779",
        "folder": "1779-4890"
      },
      {
        "id": "4891",
        "title": "Das Jahr 1780",
        "folder": "1780-4891"
      }
    ]
  },
  "chronik-1781-bis-1799-franzoesische-revolution": {
    "slug": "chronik-1781-bis-1799-franzoesische-revolution",
    "title": "Chronik 1781–1799: Französische Revolution & Koalitionskriege",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "1789: Sturm auf die Bastille, Erklärung der Menschenrechte, Schreckensherrschaft und Aufstieg Napoleons.",
    "longDesc": "Das Ende des Ancien Régime: 1789 stürzte die Französische Revolution die absolute Monarchie. Freiheit, Gleichheit, Brüderlichkeit wurden Leitparolen, gefolgt von der Jakobiner-Diktatur und den Koalitionskriegen bis zum Staatsstreich Napoleons 1799.",
    "keyPoints": [
      "1789: Sturm auf die Bastille und Erklärung der Menschen- und Bürgerrechte",
      "1792–1794: Erste Französische Republik und Phase der Terrorherrschaft (Terreur)",
      "Erster und Zweiter Koalitionskrieg gegen das revolutionäre Frankreich",
      "1799: Staatsstreich des 18. Brumaire durch Napoleon Bonaparte"
    ],
    "exercises": [
      {
        "id": "4893",
        "title": "Das Jahr 1782",
        "folder": "1782-4893"
      },
      {
        "id": "4894",
        "title": "Das Jahr 1783",
        "folder": "1783-4894"
      },
      {
        "id": "4895",
        "title": "Das Jahr 1784",
        "folder": "1784-4895"
      },
      {
        "id": "4896",
        "title": "Das Jahr 1785",
        "folder": "1785-4896"
      },
      {
        "id": "4897",
        "title": "Das Jahr 1786",
        "folder": "1786-4897"
      },
      {
        "id": "4898",
        "title": "Das Jahr 1787",
        "folder": "1787-4898"
      },
      {
        "id": "4899",
        "title": "Das Jahr 1788",
        "folder": "1788-4899"
      },
      {
        "id": "4900",
        "title": "Das Jahr 1789",
        "folder": "1789-4900"
      },
      {
        "id": "4901",
        "title": "Das Jahr 1790",
        "folder": "1790-4901"
      },
      {
        "id": "4902",
        "title": "Das Jahr 1791",
        "folder": "1791-4902"
      },
      {
        "id": "5124",
        "title": "Das Jahr 1792",
        "folder": "1792-5124"
      },
      {
        "id": "4903",
        "title": "Das Jahr 1793",
        "folder": "1793-4903"
      },
      {
        "id": "4904",
        "title": "Das Jahr 1794",
        "folder": "1794-4904"
      },
      {
        "id": "4905",
        "title": "Das Jahr 1795",
        "folder": "1795-4905"
      },
      {
        "id": "4906",
        "title": "Das Jahr 1796",
        "folder": "1796-4906"
      },
      {
        "id": "4907",
        "title": "Das Jahr 1797",
        "folder": "1797-4907"
      },
      {
        "id": "4908",
        "title": "Das Jahr 1798",
        "folder": "1798-4908"
      },
      {
        "id": "4909",
        "title": "Das Jahr 1799",
        "folder": "1799-4909"
      }
    ]
  },
  "chronik-1800-bis-1815-napoleonische-kriege": {
    "slug": "chronik-1800-bis-1815-napoleonische-kriege",
    "title": "Chronik 1800–1815: Napoleonische Kriege & Wiener Kongress",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Ende des Alten Reiches 1806, Befreiungskriege, Völkerschlacht bei Leipzig und Wiener Kongress 1815.",
    "longDesc": "Napoleon ordnete die Landkarte Europas neu: 1806 erlosch das Heilige Römische Reich Deutscher Nation. Nach dem Russlandfeldzug 1812 und den Befreiungskriegen ordnete der Wiener Kongress 1814/15 unter Metternich Europa neu.",
    "keyPoints": [
      "1804: Krönung Napoleons zum Kaiser und Einführung des Code Civil",
      "1806: Ende des Heiligen Römischen Reiches Deutscher Nation und Rheinbund",
      "1813: Völkerschlacht bei Leipzig und Zusammenbruch der napoleonischen Hegemonie",
      "1815: Wiener Kongress: Restauration, Gleichgewicht der Mächte und Gründung des Deutschen Bundes"
    ],
    "exercises": [
      {
        "id": "4910",
        "title": "Das Jahr 1800",
        "folder": "1800-4910"
      },
      {
        "id": "4911",
        "title": "Das Jahr 1801",
        "folder": "1801-4911"
      },
      {
        "id": "4912",
        "title": "Das Jahr 1802",
        "folder": "1802-4912"
      },
      {
        "id": "4913",
        "title": "Das Jahr 1803",
        "folder": "1803-4913"
      },
      {
        "id": "4914",
        "title": "Das Jahr 1804",
        "folder": "1804-4914"
      },
      {
        "id": "4915",
        "title": "Das Jahr 1805",
        "folder": "1805-4915"
      },
      {
        "id": "4916",
        "title": "Das Jahr 1806",
        "folder": "1806-4916"
      },
      {
        "id": "4917",
        "title": "Das Jahr 1807",
        "folder": "1807-4917"
      },
      {
        "id": "4918",
        "title": "Das Jahr 1808",
        "folder": "1808-4918"
      },
      {
        "id": "4919",
        "title": "Das Jahr 1809",
        "folder": "1809-4919"
      },
      {
        "id": "5125",
        "title": "Das Jahr 1810",
        "folder": "1810-5125"
      },
      {
        "id": "4920",
        "title": "Das Jahr 1811",
        "folder": "1811-4920"
      },
      {
        "id": "4921",
        "title": "Das Jahr 1812",
        "folder": "1812-4921"
      },
      {
        "id": "4922",
        "title": "Das Jahr 1813",
        "folder": "1813-4922"
      },
      {
        "id": "4923",
        "title": "Das Jahr 1814",
        "folder": "1814-4923"
      },
      {
        "id": "4924",
        "title": "Das Jahr 1815",
        "folder": "1815-4924"
      }
    ]
  },
  "chronik-1816-bis-1835-restauration-und-vormaerz": {
    "slug": "chronik-1816-bis-1835-restauration-und-vormaerz",
    "title": "Chronik 1816–1835: Restauration & Deutscher Bund",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Karlsbader Beschlüsse, Hambacher Fest 1832 und die erste Eisenbahn in Deutschland 1835.",
    "longDesc": "Die Epoche des Biedermeier und des beginnenden Vormärz war geprägt von Zensur und politischer Repression (Karlsbader Beschlüsse 1819), aber auch vom unaufhaltsamen Drang nach Freiheit, Einheit und der ersten deutschen Eisenbahnfahrt 1835.",
    "keyPoints": [
      "1819: Karlsbader Beschlüsse – Zensur, Demagogenverfolgung und Überwachung",
      "1830: Julirevolution in Frankreich und ihre europaweiten Impulse",
      "1832: Das Hambacher Fest – Forderung nach Freiheit, Einheit und Demokratie",
      "1835: Erste Eisenbahnlinie Nürnberg–Fürth läutet das Eisenbahnzeitalter ein"
    ],
    "exercises": [
      {
        "id": "4925",
        "title": "Das Jahr 1816",
        "folder": "1816-4925"
      },
      {
        "id": "4926",
        "title": "Das Jahr 1817",
        "folder": "1817-4926"
      },
      {
        "id": "4927",
        "title": "Das Jahr 1818",
        "folder": "1818-4927"
      },
      {
        "id": "4928",
        "title": "Das Jahr 1819",
        "folder": "1819-4928"
      },
      {
        "id": "4929",
        "title": "Das Jahr 1820",
        "folder": "1820-4929"
      },
      {
        "id": "4930",
        "title": "Das Jahr 1821",
        "folder": "1821-4930"
      },
      {
        "id": "4931",
        "title": "Das Jahr 1822",
        "folder": "1822-4931"
      },
      {
        "id": "4932",
        "title": "Das Jahr 1823",
        "folder": "1823-4932"
      },
      {
        "id": "4933",
        "title": "Das Jahr 1824",
        "folder": "1824-4933"
      },
      {
        "id": "4934",
        "title": "Das Jahr 1825",
        "folder": "1825-4934"
      },
      {
        "id": "4935",
        "title": "Das Jahr 1826",
        "folder": "1826-4935"
      },
      {
        "id": "4936",
        "title": "Das Jahr 1827",
        "folder": "1827-4936"
      },
      {
        "id": "4937",
        "title": "Das Jahr 1828",
        "folder": "1828-4937"
      },
      {
        "id": "4938",
        "title": "Das Jahr 1829",
        "folder": "1829-4938"
      },
      {
        "id": "4939",
        "title": "Das Jahr 1830",
        "folder": "1830-4939"
      },
      {
        "id": "4940",
        "title": "Das Jahr 1831",
        "folder": "1831-4940"
      },
      {
        "id": "4941",
        "title": "Das Jahr 1832",
        "folder": "1832-4941"
      },
      {
        "id": "4942",
        "title": "Das Jahr 1833",
        "folder": "1833-4942"
      },
      {
        "id": "4943",
        "title": "Das Jahr 1834",
        "folder": "1834-4943"
      },
      {
        "id": "4944",
        "title": "Das Jahr 1835",
        "folder": "1835-4944"
      }
    ]
  },
  "chronik-1836-bis-1850-fruehindustrialisierung-und-1848": {
    "slug": "chronik-1836-bis-1850-fruehindustrialisierung-und-1848",
    "title": "Chronik 1836–1850: Frühindustrialisierung & Revolution 1848",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Schlesischer Weberaufstand, Barrikadenkämpfe 1848 und Paulskirchenverfassung.",
    "longDesc": "Soziale Not und Pauperismus führten 1844 zum Weberaufstand. Im März 1848 brachen in Deutschland und Österreich Revolutionen aus: Die Frankfurter Nationalversammlung erarbeitete die erste demokratische Verfassung mit Grundrechtekatalog.",
    "keyPoints": [
      "Pauperismus, soziale Frage und der Weberaufstand 1844",
      "Märzrevolution 1848 in Berlin und Wien",
      "Die Frankfurter Nationalversammlung in der Paulskirche und die Grundrechte von 1848/49",
      "Ablehnung der Kaiserkrone durch Friedrich Wilhelm IV. und Scheitern der Revolution"
    ],
    "exercises": [
      {
        "id": "5126",
        "title": "Das Jahr 1836",
        "folder": "1836-5126"
      },
      {
        "id": "4945",
        "title": "Das Jahr 1837",
        "folder": "1837-4945"
      },
      {
        "id": "4946",
        "title": "Das Jahr 1838",
        "folder": "1838-4946"
      },
      {
        "id": "4947",
        "title": "Das Jahr 1839",
        "folder": "1839-4947"
      },
      {
        "id": "4948",
        "title": "Das Jahr 1840",
        "folder": "1840-4948"
      },
      {
        "id": "4949",
        "title": "Das Jahr 1841",
        "folder": "1841-4949"
      },
      {
        "id": "4950",
        "title": "Das Jahr 1842",
        "folder": "1842-4950"
      },
      {
        "id": "4951",
        "title": "Das Jahr 1843",
        "folder": "1843-4951"
      },
      {
        "id": "4952",
        "title": "Das Jahr 1844",
        "folder": "1844-4952"
      },
      {
        "id": "4953",
        "title": "Das Jahr 1845",
        "folder": "1845-4953"
      },
      {
        "id": "4954",
        "title": "Das Jahr 1846",
        "folder": "1846-4954"
      },
      {
        "id": "4955",
        "title": "Das Jahr 1847",
        "folder": "1847-4955"
      },
      {
        "id": "4957",
        "title": "Das Jahr 1849",
        "folder": "1849-4957"
      },
      {
        "id": "4958",
        "title": "Das Jahr 1850",
        "folder": "1850-4958"
      }
    ]
  },
  "chronik-1851-bis-1870-hochindustrialisierung-und-reichsgruendung": {
    "slug": "chronik-1851-bis-1870-hochindustrialisierung-und-reichsgruendung",
    "title": "Chronik 1851–1870: Hochindustrialisierung & Einigungskriege",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Gründerzeit, Deutsch-Dänischer Krieg, Deutscher Krieg 1866 und Deutsch-Französischer Krieg 1870.",
    "longDesc": "Wirtschaftlicher Boom der Schwerindustrie und Bismarcks Politik der „Blut und Eisen“-Strategie prägten die 1850er und 1860er Jahre. In drei Einigungskriegen setzte Preußen die kleindeutsche Lösung durch.",
    "keyPoints": [
      "Rasantes Wachstum von Kohle, Stahl und Eisenbahn im Ruhrgebiet und Schlesien",
      "Otto von Bismarck wird 1862 preußischer Ministerpräsident",
      "1866: Deutscher Krieg und Auflösung des Deutschen Bundes",
      "1870/71: Deutsch-Französischer Krieg führt zur nationalen Einigung"
    ],
    "exercises": [
      {
        "id": "4959",
        "title": "Das Jahr 1851",
        "folder": "1851-4959"
      },
      {
        "id": "4960",
        "title": "Das Jahr 1852",
        "folder": "1852-4960"
      },
      {
        "id": "4961",
        "title": "Das Jahr 1853",
        "folder": "1853-4961"
      },
      {
        "id": "4962",
        "title": "Das Jahr 1854",
        "folder": "1854-4962"
      },
      {
        "id": "4963",
        "title": "Das Jahr 1855",
        "folder": "1855-4963"
      },
      {
        "id": "4964",
        "title": "Das Jahr 1856",
        "folder": "1856-4964"
      },
      {
        "id": "4965",
        "title": "Das Jahr 1857",
        "folder": "1857-4965"
      },
      {
        "id": "4966",
        "title": "Das Jahr 1858",
        "folder": "1858-4966"
      },
      {
        "id": "4967",
        "title": "Das Jahr 1859",
        "folder": "1859-4967"
      },
      {
        "id": "4968",
        "title": "Das Jahr 1860",
        "folder": "1860-4968"
      },
      {
        "id": "4969",
        "title": "Das Jahr 1861",
        "folder": "1861-4969"
      },
      {
        "id": "4970",
        "title": "Das Jahr 1862",
        "folder": "1862-4970"
      },
      {
        "id": "4971",
        "title": "Das Jahr 1863",
        "folder": "1863-4971"
      },
      {
        "id": "4972",
        "title": "Das Jahr 1864",
        "folder": "1864-4972"
      },
      {
        "id": "4973",
        "title": "Das Jahr 1865",
        "folder": "1865-4973"
      },
      {
        "id": "4974",
        "title": "Das Jahr 1866",
        "folder": "1866-4974"
      },
      {
        "id": "4975",
        "title": "Das Jahr 1867",
        "folder": "1867-4975"
      },
      {
        "id": "4976",
        "title": "Das Jahr 1868",
        "folder": "1868-4976"
      },
      {
        "id": "4977",
        "title": "Das Jahr 1869",
        "folder": "1869-4977"
      },
      {
        "id": "4978",
        "title": "Das Jahr 1870",
        "folder": "1870-4978"
      }
    ]
  },
  "chronik-1871-bis-1885-deutsches-kaiserreich-und-bismarck-aera": {
    "slug": "chronik-1871-bis-1885-deutsches-kaiserreich-und-bismarck-aera",
    "title": "Chronik 1871–1885: Deutsches Kaiserreich & Bismarck-Ära",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Kaiserproklamation in Versailles 1871, Kulturkampf, Sozialistengesetze und Sozialgesetzgebung.",
    "longDesc": "Am 18. Januar 1871 wurde Wilhelm I. im Spiegelsaal von Versailles zum deutschen Kaiser proklamiert. Reichskanzler Bismarck prägte die Innenpolitik durch Kulturkampf und Sozialistengesetze, schuf jedoch auch die weltweit erste moderne Sozialversicherung.",
    "keyPoints": [
      "1871: Gründung des Deutschen Kaiserreichs als konstitutionelle Monarchie",
      "Kulturkampf gegen die katholische Kirche und Sozialistengesetze (1878)",
      "Einführung der Sozialversicherung: Kranken-, Unfall- und Rentenversicherung (1883–1889)",
      "Bismarcks komplexes Bündnissystem zur Friedenssicherung in Europa"
    ],
    "exercises": [
      {
        "id": "4980",
        "title": "Das Jahr 1872",
        "folder": "1872-4980"
      },
      {
        "id": "4981",
        "title": "Das Jahr 1873",
        "folder": "1873-4981"
      },
      {
        "id": "4982",
        "title": "Das Jahr 1874",
        "folder": "1874-4982"
      },
      {
        "id": "4983",
        "title": "Das Jahr 1875",
        "folder": "1875-4983"
      },
      {
        "id": "4984",
        "title": "Das Jahr 1876",
        "folder": "1876-4984"
      },
      {
        "id": "4985",
        "title": "Das Jahr 1877",
        "folder": "1877-4985"
      },
      {
        "id": "4986",
        "title": "Das Jahr 1878",
        "folder": "1878-4986"
      },
      {
        "id": "4987",
        "title": "Das Jahr 1879",
        "folder": "1879-4987"
      },
      {
        "id": "4988",
        "title": "Das Jahr 1880",
        "folder": "1880-4988"
      },
      {
        "id": "4989",
        "title": "Das Jahr 1881",
        "folder": "1881-4989"
      },
      {
        "id": "4990",
        "title": "Das Jahr 1882",
        "folder": "1882-4990"
      },
      {
        "id": "4991",
        "title": "Das Jahr 1883",
        "folder": "1883-4991"
      },
      {
        "id": "4992",
        "title": "Das Jahr 1884",
        "folder": "1884-4992"
      },
      {
        "id": "4993",
        "title": "Das Jahr 1885",
        "folder": "1885-4993"
      }
    ]
  },
  "chronik-1886-bis-1899-wilhelminische-epoche-und-imperialismus": {
    "slug": "chronik-1886-bis-1899-wilhelminische-epoche-und-imperialismus",
    "title": "Chronik 1886–1899: Wilhelminische Epoche & Imperialismus",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Dreikaiserjahr 1888, Bismarcks Entlassung 1890, Kolonialpolitik und Flottenrüstung.",
    "longDesc": "Im Dreikaiserjahr 1888 bestieg Wilhelm II. den Thron. 1890 entließ er Bismarck und steuerte das Kaiserreich auf einen expansionistischen „Neuen Kurs“ mit weltweiter Kolonialpolitik und fataler Flottenrüstung.",
    "keyPoints": [
      "1888: Das Dreikaiserjahr (Wilhelm I., Friedrich III., Wilhelm II.)",
      "1890: Entlassung Otto von Bismarcks und Abkehr von der Defensivpolitik",
      "Wettlauf um Afrika und deutscher Kolonialismus",
      "Flottengesetze und imperiale Rivalitäten am Ende des 19. Jahrhunderts"
    ],
    "exercises": [
      {
        "id": "4994",
        "title": "Das Jahr 1886",
        "folder": "1886-4994"
      },
      {
        "id": "4995",
        "title": "Das Jahr 1887",
        "folder": "1887-4995"
      },
      {
        "id": "4996",
        "title": "Das Jahr 1888",
        "folder": "1888-4996"
      },
      {
        "id": "4997",
        "title": "Das Jahr 1889",
        "folder": "1889-4997"
      },
      {
        "id": "4998",
        "title": "Das Jahr 1890",
        "folder": "1890-4998"
      },
      {
        "id": "4999",
        "title": "Das Jahr 1891",
        "folder": "1891-4999"
      },
      {
        "id": "5000",
        "title": "Das Jahr 1892",
        "folder": "1892-5000"
      },
      {
        "id": "5001",
        "title": "Das Jahr 1893",
        "folder": "1893-5001"
      },
      {
        "id": "5002",
        "title": "Das Jahr 1894",
        "folder": "1894-5002"
      },
      {
        "id": "5003",
        "title": "Das Jahr 1895",
        "folder": "1895-5003"
      },
      {
        "id": "5004",
        "title": "Das Jahr 1896",
        "folder": "1896-5004"
      },
      {
        "id": "5005",
        "title": "Das Jahr 1897",
        "folder": "1897-5005"
      },
      {
        "id": "5006",
        "title": "Das Jahr 1898",
        "folder": "1898-5006"
      },
      {
        "id": "5007",
        "title": "Das Jahr 1899",
        "folder": "1899-5007"
      }
    ]
  },
  "chronik-1900-bis-1918-jahrhundertwende-und-erster-weltkrieg": {
    "slug": "chronik-1900-bis-1918-jahrhundertwende-und-erster-weltkrieg",
    "title": "Chronik 1900–1918: Jahrhundertwende & Erster Weltkrieg",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Belle Époque, Balkankrisen, Julikrise 1914, industrialisierter Stellungskrieg und Revolution 1918.",
    "longDesc": "Vom Fortschrittsoptimismus der Jahrhundertwende in die Urkatastrophe des 20. Jahrhunderts: Das Attentat von Sarajevo 1914 entfesselte den Ersten Weltkrieg mit Giftgas, Panzern und Grabenkämpfen. 1918 endete das Kaiserreich in der Novemberrevolution.",
    "keyPoints": [
      "1914: Attentat von Sarajevo und Ausbruch des Ersten Weltkriegs",
      "Industrialisierter Abnutzungskrieg an West- und Ostfront (Verdun, Somme)",
      "1917: Kriegseintritt der USA und Oktoberrevolution in Russland",
      "Novemberrevolution 1918 in Deutschland und Ausrufung der Republik"
    ],
    "exercises": [
      {
        "id": "5008",
        "title": "Das Jahr 1900",
        "folder": "1900-5008"
      },
      {
        "id": "5009",
        "title": "Das Jahr 1901",
        "folder": "1901-5009"
      },
      {
        "id": "5010",
        "title": "Das Jahr 1902",
        "folder": "1902-5010"
      },
      {
        "id": "5011",
        "title": "Das Jahr 1903",
        "folder": "1903-5011"
      },
      {
        "id": "5012",
        "title": "Das Jahr 1904",
        "folder": "1904-5012"
      },
      {
        "id": "5013",
        "title": "Das Jahr 1905",
        "folder": "1905-5013"
      },
      {
        "id": "5014",
        "title": "Das Jahr 1906",
        "folder": "1906-5014"
      },
      {
        "id": "5015",
        "title": "Das Jahr 1907",
        "folder": "1907-5015"
      },
      {
        "id": "5016",
        "title": "Das Jahr 1908",
        "folder": "1908-5016"
      },
      {
        "id": "5017",
        "title": "Das Jahr 1909",
        "folder": "1909-5017"
      },
      {
        "id": "5018",
        "title": "Das Jahr 1910",
        "folder": "1910-5018"
      },
      {
        "id": "5019",
        "title": "Das Jahr 1911",
        "folder": "1911-5019"
      },
      {
        "id": "5020",
        "title": "Das Jahr 1912",
        "folder": "1912-5020"
      },
      {
        "id": "5021",
        "title": "Das Jahr 1913",
        "folder": "1913-5021"
      },
      {
        "id": "5022",
        "title": "Das Jahr 1914",
        "folder": "1914-5022"
      },
      {
        "id": "5023",
        "title": "Das Jahr 1915",
        "folder": "1915-5023"
      },
      {
        "id": "5024",
        "title": "Das Jahr 1916",
        "folder": "1916-5024"
      },
      {
        "id": "5025",
        "title": "Das Jahr 1917",
        "folder": "1917-5025"
      },
      {
        "id": "5026",
        "title": "Das Jahr 1918",
        "folder": "1918-5026"
      }
    ]
  },
  "chronik-1919-bis-1932-weimarer-republik": {
    "slug": "chronik-1919-bis-1932-weimarer-republik",
    "title": "Chronik 1919–1932: Weimarer Republik & Zwischenkriegszeit",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Versailler Vertrag, Hyperinflation 1923, Goldene Zwanziger und Weltwirtschaftskrise 1929.",
    "longDesc": "Die erste deutsche Demokratie stand von Beginn an unter Druck: Versailler Vertrag, politische Morde und die Hyperinflation von 1923 erschütterten das Land. Nach den Goldenen Zwanzigern leitete der Börsencrash von 1929 den Niedergang ein.",
    "keyPoints": [
      "1919: Verfassung von Weimar und der Versailler Vertrag",
      "1923: Krisenjahr mit Hyperinflation, Ruhrbesetzung und Hitler-Putsch",
      "1924–1929: Phase relativer Stabilität und kulturelle Blüte der Goldenen Zwanziger",
      "1929: Schwarzer Freitag und die Weltwirtschaftskrise mit Millionen Arbeitslosen"
    ],
    "exercises": [
      {
        "id": "5027",
        "title": "Das Jahr 1919",
        "folder": "1919-5027"
      },
      {
        "id": "5028",
        "title": "Das Jahr 1920",
        "folder": "1920-5028"
      },
      {
        "id": "5029",
        "title": "Das Jahr 1921",
        "folder": "1921-5029"
      },
      {
        "id": "5030",
        "title": "Das Jahr 1922",
        "folder": "1922-5030"
      },
      {
        "id": "5031",
        "title": "Das Jahr 1923",
        "folder": "1923-5031"
      },
      {
        "id": "5032",
        "title": "Das Jahr 1924",
        "folder": "1924-5032"
      },
      {
        "id": "5033",
        "title": "Das Jahr 1925",
        "folder": "1925-5033"
      },
      {
        "id": "5034",
        "title": "Das Jahr 1926",
        "folder": "1926-5034"
      },
      {
        "id": "5035",
        "title": "Das Jahr 1927",
        "folder": "1927-5035"
      },
      {
        "id": "5036",
        "title": "Das Jahr 1928",
        "folder": "1928-5036"
      },
      {
        "id": "5037",
        "title": "Das Jahr 1929",
        "folder": "1929-5037"
      },
      {
        "id": "5038",
        "title": "Das Jahr 1930",
        "folder": "1930-5038"
      },
      {
        "id": "5039",
        "title": "Das Jahr 1931",
        "folder": "1931-5039"
      },
      {
        "id": "5040",
        "title": "Das Jahr 1932",
        "folder": "1932-5040"
      }
    ]
  },
  "chronik-1933-bis-1945-ns-herrschaft-und-zweiter-weltkrieg": {
    "slug": "chronik-1933-bis-1945-ns-herrschaft-und-zweiter-weltkrieg",
    "title": "Chronik 1933–1945: NS-Herrschaft & Zweiter Weltkrieg",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Machtergreifung 1933, Gleichschaltung, Holocaust, Zweiter Weltkrieg und Befreiung 1945.",
    "longDesc": "Die dunkelste Epoche der deutschen Geschichte: Nach Hitlers Ernennung zum Reichskanzler 1933 folgten Gleichschaltung, Terror und die systematische Ermordung von sechs Millionen Juden im Holocaust. Der von Deutschland entfesselte Zweite Weltkrieg endete 1945 in der totalen Niederlage.",
    "keyPoints": [
      "1933: Machtübertragung an Adolf Hitler, Reichstagsbrand und Ermächtigungsgesetz",
      "Nürnberger Rassegesetze 1935 und Novemberpogrome 1938",
      "1939: Überfall auf Polen und Beginn des Zweiten Weltkriegs",
      "Systematische Vernichtungslager, Holocaust (Shoah) und bedingungslose Kapitulation am 8. Mai 1945"
    ],
    "exercises": [
      {
        "id": "5041",
        "title": "Das Jahr 1933",
        "folder": "1933-5041"
      },
      {
        "id": "5042",
        "title": "Das Jahr 1934",
        "folder": "1934-5042"
      },
      {
        "id": "5043",
        "title": "Das Jahr 1935",
        "folder": "1935-5043"
      },
      {
        "id": "5044",
        "title": "Das Jahr 1936",
        "folder": "1936-5044"
      },
      {
        "id": "5045",
        "title": "Das Jahr 1937",
        "folder": "1937-5045"
      },
      {
        "id": "5046",
        "title": "Das Jahr 1938",
        "folder": "1938-5046"
      },
      {
        "id": "5047",
        "title": "Das Jahr 1939",
        "folder": "1939-5047"
      },
      {
        "id": "5048",
        "title": "Das Jahr 1940",
        "folder": "1940-5048"
      },
      {
        "id": "5049",
        "title": "Das Jahr 1941",
        "folder": "1941-5049"
      },
      {
        "id": "5050",
        "title": "Das Jahr 1942",
        "folder": "1942-5050"
      },
      {
        "id": "5051",
        "title": "Das Jahr 1943",
        "folder": "1943-5051"
      },
      {
        "id": "5052",
        "title": "Das Jahr 1944",
        "folder": "1944-5052"
      },
      {
        "id": "5053",
        "title": "Das Jahr 1945",
        "folder": "1945-5053"
      }
    ]
  },
  "chronik-1946-bis-1965-nachkriegszeit-und-wirtschaftswunder": {
    "slug": "chronik-1946-bis-1965-nachkriegszeit-und-wirtschaftswunder",
    "title": "Chronik 1946–1965: Nachkriegszeit & Wirtschaftswunder",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Besatzungszonen, Währungsreform 1948, doppelte Staatsgründung 1949, Mauerbau 1961.",
    "longDesc": "Aus den Trümmern des Krieges entstanden im Kalten Krieg zwei deutsche Staaten: Die Bundesrepublik Deutschland und die DDR. Während im Westen das Wirtschaftswunder und die Westintegration unter Adenauer begannen, zementierte die DDR 1961 mit dem Mauerbau die Teilung.",
    "keyPoints": [
      "Nürnberger Prozesse und Entnazifizierung in den vier Besatzungszonen",
      "1948/49: Berliner Luftbrücke und doppelte Staatsgründung (BRD und DDR)",
      "Wirtschaftswunder und Soziale Marktwirtschaft unter Ludwig Erhard",
      "13. August 1961: Bau der Berliner Mauer"
    ],
    "exercises": [
      {
        "id": "5054",
        "title": "Das Jahr 1946",
        "folder": "1946-5054"
      },
      {
        "id": "5055",
        "title": "Das Jahr 1947",
        "folder": "1947-5055"
      },
      {
        "id": "5056",
        "title": "Das Jahr 1948",
        "folder": "1948-5056"
      },
      {
        "id": "5057",
        "title": "Das Jahr 1949",
        "folder": "1949-5057"
      },
      {
        "id": "5058",
        "title": "Das Jahr 1950",
        "folder": "1950-5058"
      },
      {
        "id": "5059",
        "title": "Das Jahr 1951",
        "folder": "1951-5059"
      },
      {
        "id": "5060",
        "title": "Das Jahr 1952",
        "folder": "1952-5060"
      },
      {
        "id": "5061",
        "title": "Das Jahr 1953",
        "folder": "1953-5061"
      },
      {
        "id": "5062",
        "title": "Das Jahr 1954",
        "folder": "1954-5062"
      },
      {
        "id": "5063",
        "title": "Das Jahr 1955",
        "folder": "1955-5063"
      },
      {
        "id": "5064",
        "title": "Das Jahr 1956",
        "folder": "1956-5064"
      },
      {
        "id": "5065",
        "title": "Das Jahr 1957",
        "folder": "1957-5065"
      },
      {
        "id": "5066",
        "title": "Das Jahr 1958",
        "folder": "1958-5066"
      },
      {
        "id": "5067",
        "title": "Das Jahr 1959",
        "folder": "1959-5067"
      },
      {
        "id": "5068",
        "title": "Das Jahr 1960",
        "folder": "1960-5068"
      },
      {
        "id": "5069",
        "title": "Das Jahr 1961",
        "folder": "1961-5069"
      },
      {
        "id": "5070",
        "title": "Das Jahr 1962",
        "folder": "1962-5070"
      },
      {
        "id": "5071",
        "title": "Das Jahr 1963",
        "folder": "1963-5071"
      },
      {
        "id": "5072",
        "title": "Das Jahr 1964",
        "folder": "1964-5072"
      },
      {
        "id": "5073",
        "title": "Das Jahr 1965",
        "folder": "1965-5073"
      }
    ]
  },
  "chronik-1966-bis-1982-kalter-krieg-und-gesellschaftswandel": {
    "slug": "chronik-1966-bis-1982-kalter-krieg-und-gesellschaftswandel",
    "title": "Chronik 1966–1982: Kalter Krieg & Gesellschaftswandel",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "68er-Bewegung, Neue Ostpolitik von Willy Brandt, Mondlandung 1969 und Ölkrise 1973.",
    "longDesc": "Eine Ära gesellschaftlicher Emanzipation und diplomatischer Entspannung: Die 68er-Bewegung veränderte Werte und Lebensstile nachhaltig. Bundeskanzler Willy Brandt leitete mit der Neuen Ostpolitik („Wandel durch Annäherung“) die Entspannung ein.",
    "keyPoints": [
      "Die Studenten- und 68er-Bewegung fordert Aufarbeitung der NS-Vergangenheit und Demokratisierung",
      "1969: Mondlandung von Apollo 11",
      "Kniefall von Warschau 1970 und die Ostverträge unter Willy Brandt",
      "1973: Erste globale Ölkrise und der Deutsche Herbst 1977 (RAF-Terror)"
    ],
    "exercises": [
      {
        "id": "5074",
        "title": "Das Jahr 1966",
        "folder": "1966-5074"
      },
      {
        "id": "5075",
        "title": "Das Jahr 1967",
        "folder": "1967-5075"
      },
      {
        "id": "5076",
        "title": "Das Jahr 1968",
        "folder": "1968-5076"
      },
      {
        "id": "5077",
        "title": "Das Jahr 1969",
        "folder": "1969-5077"
      },
      {
        "id": "5078",
        "title": "Das Jahr 1970",
        "folder": "1970-5078"
      },
      {
        "id": "5079",
        "title": "Das Jahr 1971",
        "folder": "1971-5079"
      },
      {
        "id": "5080",
        "title": "Das Jahr 1972",
        "folder": "1972-5080"
      },
      {
        "id": "5081",
        "title": "Das Jahr 1973",
        "folder": "1973-5081"
      },
      {
        "id": "5082",
        "title": "Das Jahr 1974",
        "folder": "1974-5082"
      },
      {
        "id": "5083",
        "title": "Das Jahr 1975",
        "folder": "1975-5083"
      },
      {
        "id": "5084",
        "title": "Das Jahr 1976",
        "folder": "1976-5084"
      },
      {
        "id": "5085",
        "title": "Das Jahr 1977",
        "folder": "1977-5085"
      },
      {
        "id": "5086",
        "title": "Das Jahr 1978",
        "folder": "1978-5086"
      },
      {
        "id": "5087",
        "title": "Das Jahr 1979",
        "folder": "1979-5087"
      },
      {
        "id": "5088",
        "title": "Das Jahr 1980",
        "folder": "1980-5088"
      },
      {
        "id": "5089",
        "title": "Das Jahr 1981",
        "folder": "1981-5089"
      },
      {
        "id": "5090",
        "title": "Das Jahr 1982",
        "folder": "1982-5090"
      }
    ]
  },
  "chronik-1983-bis-1999-mauerfall-und-jahrtausendwende": {
    "slug": "chronik-1983-bis-1999-mauerfall-und-jahrtausendwende",
    "title": "Chronik 1983–1999: Mauerfall, Einheit & Jahrtausendwende",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Glasnost und Perestroika, Friedliche Revolution 1989, Wiedervereinigung 1990 und Euro-Einführung.",
    "longDesc": "Michail Gorbatschows Reformpolitik leitete den Zusammenbruch des Ostblocks ein. Durch die Friedliche Revolution der DDR-Bürger fiel am 9. November 1989 die Berliner Mauer. Am 3. Oktober 1990 folgte die Deutsche Einheit.",
    "keyPoints": [
      "Gorbatschow, Glasnost und Perestroika in der Sowjetunion",
      "9. November 1989: Fall der Berliner Mauer",
      "3. Oktober 1990: Deutsche Wiedervereinigung und Zwei-plus-Vier-Vertrag",
      "Vertrag von Maastricht 1992 und Vorbereitung der europäischen Gemeinschaftswährung Euro"
    ],
    "exercises": [
      {
        "id": "5091",
        "title": "Das Jahr 1983",
        "folder": "1983-5091"
      },
      {
        "id": "5093",
        "title": "Das Jahr 1985",
        "folder": "1985-5093"
      },
      {
        "id": "5094",
        "title": "Das Jahr 1986",
        "folder": "1986-5094"
      },
      {
        "id": "5095",
        "title": "Das Jahr 1987",
        "folder": "1987-5095"
      },
      {
        "id": "5096",
        "title": "Das Jahr 1988",
        "folder": "1988-5096"
      },
      {
        "id": "5097",
        "title": "Das Jahr 1989",
        "folder": "1989-5097"
      },
      {
        "id": "5098",
        "title": "Das Jahr 1990",
        "folder": "1990-5098"
      },
      {
        "id": "5099",
        "title": "Das Jahr 1991",
        "folder": "1991-5099"
      },
      {
        "id": "5100",
        "title": "Das Jahr 1992",
        "folder": "1992-5100"
      },
      {
        "id": "5101",
        "title": "Das Jahr 1993",
        "folder": "1993-5101"
      },
      {
        "id": "5102",
        "title": "Das Jahr 1994",
        "folder": "1994-5102"
      },
      {
        "id": "5103",
        "title": "Das Jahr 1995",
        "folder": "1995-5103"
      },
      {
        "id": "5104",
        "title": "Das Jahr 1996",
        "folder": "1996-5104"
      },
      {
        "id": "5105",
        "title": "Das Jahr 1997",
        "folder": "1997-5105"
      },
      {
        "id": "5106",
        "title": "Das Jahr 1998",
        "folder": "1998-5106"
      },
      {
        "id": "5107",
        "title": "Das Jahr 1999",
        "folder": "1999-5107"
      }
    ]
  },
  "chronik-2000-bis-2010-das-neue-jahrtausend": {
    "slug": "chronik-2000-bis-2010-das-neue-jahrtausend",
    "title": "Chronik 2000–2010: Das neue Jahrtausend & Globalisierung",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "11. September 2001, Euro-Bargeld 2002, EU-Osterweiterung 2004 und globale Finanzkrise 2008.",
    "longDesc": "Das 21. Jahrhundert begann mit drastischen globalen Zäsuren: Die Terroranschläge vom 11. September 2001 veränderten die Weltpolitik. In Europa startete der Euro als Bargeld, während 2008 die weltweite Finanz- und Bankenkrise ausbrach.",
    "keyPoints": [
      "11. September 2001: Anschläge auf das World Trade Center und „Krieg gegen den Terror“",
      "1. Januar 2002: Einführung des Euro als physisches Zahlungsmittel in 12 Ländern",
      "2004: Große EU-Osterweiterung um 10 neue Mitgliedsstaaten",
      "2008: Kollaps von Lehman Brothers und Ausbruch der weltweiten Finanz- und Staatsschuldenkrise"
    ],
    "exercises": [
      {
        "id": "5108",
        "title": "Das Jahr 2000",
        "folder": "2000-5108"
      },
      {
        "id": "5109",
        "title": "Das Jahr 2001",
        "folder": "2001-5109"
      },
      {
        "id": "5110",
        "title": "Das Jahr 2002",
        "folder": "2002-5110"
      },
      {
        "id": "5111",
        "title": "Das Jahr 2003",
        "folder": "2003-5111"
      },
      {
        "id": "5112",
        "title": "Das Jahr 2004",
        "folder": "2004-5112"
      },
      {
        "id": "5113",
        "title": "Das Jahr 2005",
        "folder": "2005-5113"
      },
      {
        "id": "5114",
        "title": "Das Jahr 2006",
        "folder": "2006-5114"
      },
      {
        "id": "5115",
        "title": "Das Jahr 2007",
        "folder": "2007-5115"
      },
      {
        "id": "5116",
        "title": "Das Jahr 2008",
        "folder": "2008-5116"
      },
      {
        "id": "5117",
        "title": "Das Jahr 2009",
        "folder": "2009-5117"
      },
      {
        "id": "5118",
        "title": "Das Jahr 2010",
        "folder": "2010-5118"
      }
    ]
  },
  "chronik-2011-bis-heute-digitale-welt-und-gegenwart": {
    "slug": "chronik-2011-bis-heute-digitale-welt-und-gegenwart",
    "title": "Chronik 2011–heute: Digitale Welt & Gegenwart",
    "category": "Historische Chronik & Epochen-Zeitleisten",
    "shortDesc": "Arabischer Frühling, Fukushima, Flüchtlingskrise 2015, Corona-Pandemie und Zeitenwende.",
    "longDesc": "Gegenwart im Brennpunkt: Von der nuklearen Katastrophe in Fukushima über den Arabischen Frühling und die europäische Flüchtlingskrise bis hin zur weltweiten COVID-19-Pandemie und geopolitischen Umbrüchen der Gegenwart.",
    "keyPoints": [
      "2011: Nuklearkatastrophe von Fukushima und deutscher Atomausstiegsbeschluss",
      "Arabischer Frühling und Beginn des syrischen Bürgerkriegs",
      "2015: Große Fluchtmigration nach Europa und Pariser Klimaschutzabkommen",
      "2020: Globale COVID-19-Pandemie, Lockdowns und weltweite Impfkampagnen"
    ],
    "exercises": [
      {
        "id": "5119",
        "title": "Das Jahr 2011",
        "folder": "2011-5119"
      },
      {
        "id": "5120",
        "title": "Das Jahr 2012",
        "folder": "2012-5120"
      },
      {
        "id": "5121",
        "title": "Das Jahr 2013",
        "folder": "2013-5121"
      },
      {
        "id": "5122",
        "title": "Das Jahr 2014",
        "folder": "2014-5122"
      },
      {
        "id": "5127",
        "title": "Das Jahr 2015",
        "folder": "2015-5127"
      },
      {
        "id": "5128",
        "title": "Das Jahr 2016",
        "folder": "2016-5128"
      },
      {
        "id": "5129",
        "title": "Das Jahr 2017",
        "folder": "2017-5129"
      },
      {
        "id": "5130",
        "title": "Das Jahr 2018",
        "folder": "2018-5130"
      },
      {
        "id": "5131",
        "title": "Das Jahr 2019",
        "folder": "2019-5131"
      },
      {
        "id": "5132",
        "title": "Das Jahr 2020",
        "folder": "2020-5132"
      },
      {
        "id": "5133",
        "title": "Das Jahr 2021",
        "folder": "2021-5133"
      },
      {
        "id": "5134",
        "title": "Das Jahr 2022",
        "folder": "2022-5134"
      }
    ]
  },
  "urgeschichte-voelker-und-entdecker": {
    "slug": "urgeschichte-voelker-und-entdecker",
    "title": "Urgeschichte, frühe Völker & Entdecker",
    "category": "Frühgeschichte, Antike & Mittelalter",
    "shortDesc": "Vom Neandertaler und den Eiszeiten über Völkerwanderungen bis zu großen Entdeckungen.",
    "longDesc": "Die Frühphase der Menschheitsgeschichte und die formativen Epochen von Völkerwanderung und Entdeckungsreisen: Neandertaler, Eiszeiten, die Hunnen, germanische Stämme und Pioniere der Pol- und Weltumsegelung.",
    "keyPoints": [
      "Evolution des Menschen: Neandertaler, Homo sapiens und Anpassung an die eiszeitlichen Lebensräume",
      "Erdzeitalter und Paläoanthropologie: Chronologie der Urgeschichte der Erde",
      "Völkerwanderung: Der Ansturm der Hunnen und die Rolle germanischer Stämme (Markomannen, Thüringer)",
      "Entdeckungsfahrten: Vasco da Gama und die Erschließung der Seewege nach Indien sowie spätere Polarexpeditionen"
    ],
    "exercises": [
      {
        "id": "der-neandertaler-2-885",
        "title": "Der Neandertaler",
        "folder": "der-neandertaler-2-885"
      },
      {
        "id": "die-eiszeiten-2329",
        "title": "Die Eiszeiten",
        "folder": "die-eiszeiten-2329"
      },
      {
        "id": "die-erdzeitalter-2331",
        "title": "Die Erdzeitalter",
        "folder": "die-erdzeitalter-2331"
      },
      {
        "id": "entstehung-der-erde-3174",
        "title": "Entstehung der Erde",
        "folder": "entstehung-der-erde-3174"
      },
      {
        "id": "die-hunnen-2341",
        "title": "Die Hunnen",
        "folder": "die-hunnen-2341"
      },
      {
        "id": "die-markomannen-3168",
        "title": "Die Markomannen",
        "folder": "die-markomannen-3168"
      },
      {
        "id": "die-thuringer-3170",
        "title": "Die Thüringer",
        "folder": "die-thuringer-3170"
      },
      {
        "id": "vasco-da-gama-894",
        "title": "Vasco da Gama",
        "folder": "vasco-da-gama-894"
      },
      {
        "id": "die-nuklearkatastrophe-von-tschernobyl-9-2355",
        "title": "Erforschung des Nordpols",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-9-2355"
      },
      {
        "id": "die-nuklearkatastrophe-von-tschernobyl-10-2356",
        "title": "Erforschung des Südpols",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-10-2356"
      }
    ]
  },
  "ordnung-recht-und-kultur-in-mittelalter-und-neuzeit": {
    "slug": "ordnung-recht-und-kultur-in-mittelalter-und-neuzeit",
    "title": "Ordnung, Recht & Kultur in Mittelalter & Neuzeit",
    "category": "Neuzeit, Aufklärung & Revolutionen",
    "shortDesc": "Rechtstraditionen, Reformation, Aufklärung und Gesellschaftsordnung.",
    "longDesc": "Schlüsselmomente europäischer und globaler Verfassungs- und Sozialgeschichte: Die Goldene Bulle als Grundgesetz des Heiligen Römischen Reiches, die Leibeigenschaft, Glaubensflüchtlinge wie die Hugenotten, die Philosophie der Aufklärung und transatlantische Entwicklungen wie der Wilde Westen.",
    "keyPoints": [
      "Die Goldene Bulle von 1356: Wahlordnung der deutschen Könige und Kaiser durch die Kurfürsten",
      "Sozialordnung: Leibeigenschaft und feudale Abhängigkeitsverhältnisse in Stadt und Land",
      "Konfessionelle Konflikte: Die Hugenottenkriege und das Edikt von Nantes",
      "Das Zeitalter der Aufklärung: Vernunft, Menschenrechte, Gewaltenteilung und Religionsfreiheit",
      "Kulturelle Mythen: Die Erschließung Nordamerikas und der historische Wilde Westen"
    ],
    "exercises": [
      {
        "id": "die-goldene-bulle-2339",
        "title": "Die Goldene Bulle",
        "folder": "die-goldene-bulle-2339"
      },
      {
        "id": "die-leibeigenschaft-2346",
        "title": "Die Leibeigenschaft",
        "folder": "die-leibeigenschaft-2346"
      },
      {
        "id": "die-hugenotten-2340",
        "title": "Die Hugenotten",
        "folder": "die-hugenotten-2340"
      },
      {
        "id": "die-aufklarung-2327",
        "title": "Die Aufklärung",
        "folder": "die-aufklarung-2327"
      },
      {
        "id": "der-panslawismus-2923",
        "title": "Der Panslawismus",
        "folder": "der-panslawismus-2923"
      },
      {
        "id": "der-wilde-westen-2326",
        "title": "Der Wilde Westen",
        "folder": "der-wilde-westen-2326"
      },
      {
        "id": "geschichte-von-hollywood-3004",
        "title": "Geschichte von Hollywood",
        "folder": "geschichte-von-hollywood-3004"
      },
      {
        "id": "geschichte-von-walt-disney-3005",
        "title": "Geschichte von Walt Disney",
        "folder": "geschichte-von-walt-disney-3005"
      }
    ]
  },
  "terrorismus-widerstand-und-organisationen-des-20-jahrhunderts": {
    "slug": "terrorismus-widerstand-und-organisationen-des-20-jahrhunderts",
    "title": "Terrorismus, Krisen & Organisationen des 20. Jahrhunderts",
    "category": "Kalter Krieg, Geteiltes Deutschland & Zeitgeschichte",
    "shortDesc": "RAF, IRA, ETA, Olympia 1972, 11. September und UN-Organisationen.",
    "longDesc": "Politische Gewalt, Terrorismus und internationale Reaktionen in der zweiten Hälfte des 20. und zu Beginn des 21. Jahrhunderts: Vom Deutschen Herbst über den Nordirland- und Baskenland-Konflikt bis zu 9/11 und der Rolle internationaler Organisationen wie UNESCO und UNICEF.",
    "keyPoints": [
      "Terrorismus in Europa: RAF in Deutschland, IRA in Nordirland und ETA in Spanien",
      "Das Olympia-Attentat von München 1972: Schwarzer September und die Folgen für Sicherheitsbehörden",
      "Die Terroranschläge vom 11. September 2001: Zäsur der Weltpolitik und Beginn des „War on Terror“",
      "Internationale Institutionen: Aufgaben und Errungenschaften von UNESCO (Kulturerbe) und UNICEF (Kinderrechte)",
      "Technologische Katastrophen: Fukushima und weltweite Konsequenzen für die Kernenergienutzung"
    ],
    "exercises": [
      {
        "id": "die-raf-2972",
        "title": "Die RAF",
        "folder": "die-raf-2972"
      },
      {
        "id": "die-ira-2961",
        "title": "Die IRA",
        "folder": "die-ira-2961"
      },
      {
        "id": "die-eta-2951",
        "title": "Die ETA",
        "folder": "die-eta-2951"
      },
      {
        "id": "der-schwarze-september-1972-2928",
        "title": "Der Schwarze September 1972",
        "folder": "der-schwarze-september-1972-2928"
      },
      {
        "id": "terroranschlage-vom-11-september-908",
        "title": "Terroranschläge vom 11. September",
        "folder": "terroranschlage-vom-11-september-908"
      },
      {
        "id": "die-unesco-2985",
        "title": "Die UNESCO",
        "folder": "die-unesco-2985"
      },
      {
        "id": "die-unicef-2986",
        "title": "Die UNICEF",
        "folder": "die-unicef-2986"
      },
      {
        "id": "die-nuklearkatastrophe-von-tschernobyl-3-2349",
        "title": "Die Nuklearkatastrophe von Fukushima",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-3-2349"
      }
    ]
  },
  "fuehrende-politiker-und-staatsmaenner-der-zeitgeschichte": {
    "slug": "fuehrende-politiker-und-staatsmaenner-der-zeitgeschichte",
    "title": "Führende Politiker & Staatsmänner der Zeitgeschichte",
    "category": "Kalter Krieg, Geteiltes Deutschland & Zeitgeschichte",
    "shortDesc": "Stalin, JFK, Schmidt, Schröder, Mandela, Castro und weltpolitische Führer.",
    "longDesc": "Persönlichkeiten, die den Lauf der Weltgeschichte im 20. und 21. Jahrhundert maßgeblich beeinflussten: Vom totalitären Stalinismus über die Präsidentschaft John F. Kennedys und die deutsche Kanzlerschaft von Helmut Schmidt und Gerhard Schröder bis hin zu Nelson Mandelas historischem Kampf gegen die Apartheid.",
    "keyPoints": [
      "Josef Stalin: Herrschaftsapparat der Sowjetunion, Großer Terror und Rolle im Zweiten Weltkrieg und Kalten Krieg",
      "John F. Kennedy: Kubakrise, Bürgerrechtsbewegung und das Versprechen der Mondlandung",
      "Deutsche Bundeskanzler: Helmut Schmidt (Krisenmanager im Deutschen Herbst) und Gerhard Schröder (Agenda 2010 und Nein zum Irakkrieg)",
      "Nelson Mandela: Widerstand gegen das Apartheid-Regime, 27 Jahre Haft und Versöhnungspolitik in Südafrika",
      "Fidel Castro und Saddam Hussein: Autoritäre Herrschaft und geopolitische Konflikte"
    ],
    "exercises": [
      {
        "id": "josef-stalin-3015",
        "title": "Josef Stalin",
        "folder": "josef-stalin-3015"
      },
      {
        "id": "john-f-kennedy-3013",
        "title": "John F. Kennedy",
        "folder": "john-f-kennedy-3013"
      },
      {
        "id": "helmut-schmidt-890",
        "title": "Helmut Schmidt",
        "folder": "helmut-schmidt-890"
      },
      {
        "id": "gerhard-schroder-897",
        "title": "Gerhard Schröder",
        "folder": "gerhard-schroder-897"
      },
      {
        "id": "nelson-mandela-3038",
        "title": "Nelson Mandela",
        "folder": "nelson-mandela-3038"
      },
      {
        "id": "fidel-castro-2999",
        "title": "Fidel Castro",
        "folder": "fidel-castro-2999"
      },
      {
        "id": "saddam-hussein-3056",
        "title": "Saddam Hussein",
        "folder": "saddam-hussein-3056"
      },
      {
        "id": "osama-bin-laden-3043",
        "title": "Osama Bin Laden",
        "folder": "osama-bin-laden-3043"
      }
    ]
  }
};
