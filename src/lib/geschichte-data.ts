export interface H5PExercise {
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
  exercises: H5PExercise[];
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
        "id": "500",
        "title": "Musikgeschichte - Steinzeit bis Antike",
        "folder": "musikgeschichte-steinzeit-bis-antike-500"
      },
      {
        "id": "607",
        "title": "Musikgeschichte - Steinzeit bis Antike dsgvo",
        "folder": "musikgeschichte-steinzeit-bis-antike-dsgvo-607"
      },
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
        "id": "3121",
        "title": "Kunst in der Steinzeit",
        "folder": "kunst-in-der-steinzeit-3121"
      },
      {
        "id": "2651",
        "title": "Die Hallstatt-Kultur",
        "folder": "buddhismus-in-der-modernen-welt-32-2651"
      },
      {
        "id": "5223",
        "title": "Die mykenische Kultur und das Ende der Bronzezeit in Griechenland",
        "folder": "die-mykenische-kultur-und-das-ende-der-bronzezeit-in-griechenland-5223"
      },
      {
        "id": "5346",
        "title": "Die Früh- und Urgeschichte",
        "folder": "die-fruh-und-urgeschichte-5346"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Steinzeit%20%26%20Fr%C3%BChe%20Menschheitsentwicklung+geschichte&t=3752"
  },
  "altes-aegypten-und-fruehe-hochkulturen": {
    "slug": "altes-aegypten-und-fruehe-hochkulturen",
    "title": "Das alte Ägypten & Frühe Hochkulturen",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Pharaonen als Gottkönige, Pyramidenbau, Nil als Lebensader, Hieroglyphen und die Reiche Mesopotamiens.",
    "longDesc": "Der Konflikt zwischen Israel und Palästina dauert bereits seit Jahrzehnten an. Immer wieder eskaliert die Lage, wobei historische, politische und religiöse Ursachen eine friedliche Lösung erschweren. Trotz zahlreicher Verhandlungen bleibt die Region von Spannungen, Gewalt und ungelösten Fragen geprägt. Die Geschichte des Konflikts reicht weit zurück, denn bereits im 6. Jahrhundert vor Christus wurden Juden von den Babyloniern vertrieben. Dadurch begann die jüdische Diaspora, sodass viele Juden jahrhundertelang ohne eigenen Staat lebten. Aufgrund von Diskriminierung und Verfolgung erstarkte im 19. Jahrhundert der Zionismus, der wiederum die Rückkehr nach Palästina forderte. Während des Zweiten Weltkriegs flohen viele Juden dorthin, weshalb es vermehrt zu Spannungen mit der arabischen Bevölkerung kam. Schließlich wurde 1948 der Staat Israel gegründet, wodurch sich der Konflikt weiter verschärfte. Danach folgten mehrere Kriege, beispielsweise der Sechs-Tage-Krieg 1967, sodass die geopolitische Lage bis heute komplex bleibt.",
    "keyPoints": [
      "Entstehung des Zionismus, wodurch die Forderung nach einem jüdischen Staat lauter wurde",
      "Gründung Israels 1948, sodass es zur Teilung des Landes kam",
      "Mehrere Kriege zwischen Israel und arabischen Staaten, wodurch Gebietsansprüche neu verhandelt wurden",
      "Rolle der PLO, da sie die Interessen der Palästinenser vertritt",
      "Einfluss internationaler Akteure, weshalb eine Lösung kompliziert bleibt",
      "Flüchtlingsfrage, weil viele Palästinenser vertrieben wurden",
      "Aktuelle Spannungen, da es immer wieder zu Anschlägen und militärischen Auseinandersetzungen kommt",
      "Zukunftsperspektiven, wobei verschiedene Lösungsansätze diskutiert werden"
    ],
    "exercises": [
      {
        "id": "57",
        "title": "Eigenschaften der Pyramide",
        "folder": "eigenschaften-der-pyramide-57"
      },
      {
        "id": "58",
        "title": "Volumen der Pyramide",
        "folder": "volumen-der-pyramide-58"
      },
      {
        "id": "59",
        "title": "Oberfläche der Pyramide",
        "folder": "oberflache-der-pyramide-59"
      },
      {
        "id": "98",
        "title": "Pyramide und Satz von Pythagoras",
        "folder": "pyramide-und-satz-von-pythagoras-98"
      },
      {
        "id": "99",
        "title": "Oberfläche der Pyramide",
        "folder": "oberflache-der-pyramide-2-99"
      },
      {
        "id": "100",
        "title": "Oberfläche der Pyramide",
        "folder": "oberflache-der-pyramide-3-100"
      },
      {
        "id": "384",
        "title": "Pyramide",
        "folder": "pyramide-384"
      },
      {
        "id": "616",
        "title": "Israel und Palästina",
        "folder": "israel-und-palastina-616"
      },
      {
        "id": "724",
        "title": "studypoint - Pyramide",
        "folder": "studypoint-pyramide-724"
      },
      {
        "id": "819",
        "title": "Das Judentum",
        "folder": "das-judentum-819"
      },
      {
        "id": "849",
        "title": "Das Judentum",
        "folder": "das-judentum-2-849"
      },
      {
        "id": "900",
        "title": "Die Ernährungspyramide",
        "folder": "die-ernahrungspyramide-900"
      },
      {
        "id": "1524",
        "title": "Ägypten",
        "folder": "gypten-1524"
      },
      {
        "id": "2295",
        "title": "Babylonien",
        "folder": "babylonien-2295"
      },
      {
        "id": "2317",
        "title": "Der Arabische Frühling",
        "folder": "der-arabische-fruhling-2317"
      },
      {
        "id": "2401",
        "title": "Mose und der Auszug aus Ägypten",
        "folder": "mose-und-der-auszug-aus-gypten-2401"
      },
      {
        "id": "2947",
        "title": "Die Erde - eine Scheibe oder eine Kugel",
        "folder": "die-erde-eine-scheibe-oder-eine-kugel-2947"
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
        "id": "5228",
        "title": "Die Erste Zwischenzeit in Ägypten",
        "folder": "die-erste-zwischenzeit-in-gypten-5228"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Das%20alte%20%C3%84gypten%20%26%20Fr%C3%BChe%20Hochkulturen+geschichte&t=3752"
  },
  "antikes-griechenland": {
    "slug": "antikes-griechenland",
    "title": "Antikes Griechenland & Attische Demokratie",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Polis-System, Wiege der Demokratie in Athen, Sparta, Alexander der Große, Olympische Spiele und Perserkriege.",
    "longDesc": "Hier findest du ein Erklärvideo sowie Übungen zu Hermes! Hermes ist in der griechischen Mythologie der Götterbote und eine der vielseitigsten Gottheiten des Olymps. Er ist der Sohn von Zeus und der Nymphe Maia und gilt als Schutzpatron der Reisenden, Händler und Diebe. Neben seiner Rolle als Bote ist Hermes auch der Gott der Weisheit und des Wissens, und er half den Menschen, die Schrift und die Mathematik zu erlernen. Er ist bekannt für seine Schnelligkeit und seine Fähigkeit, zwischen der Welt der Götter und der Welt der Menschen zu vermitteln. Hermes wird oft mit einem geflügelten Helm und geflügelten Sandalen dargestellt, die ihm bei seinen schnellen Reisen helfen. In der römischen Mythologie wird er als Merkur bezeichnet und hat ähnliche Attribute und Funktionen. Hermes ist ein Gott der Griechischen Mythologie. Er kann dem Schulfach Geschichte oder dem Fach Religion zugeordnet werden. Weitere bekannte griechische Götter sind Zeus, Hera, Poseidon, Athena und Aphrodite.",
    "keyPoints": [
      "Pella: Pella war sein Geburtsort. Denn diese Stadt war die Hauptstadt Makedoniens.",
      "Aristoteles: Aristoteles war Alexanders Lehrer. Außerdem vermittelte er ihm Wissen in verschiedenen Bereichen.",
      "Schlacht am Granikos: Die Schlacht am Granikos war eine bedeutende Schlacht gegen die Perser. Denn dieser Sieg war ein wichtiger Schritt auf seinem Eroberungszug.",
      "Schlacht bei Issos: Auch die Schlacht bei Issos war ein entscheidender Sieg gegen die Perser. Außerdem festigte dieser Sieg Alexanders Ruf als Feldherr.",
      "Belagerung von Tyros: Die Belagerung von Tyros war eine schwierige militärische Operation. Denn Alexander ließ extra einen Damm bauen, um die Stadt einzunehmen.",
      "Alexandria: Er gründete mehrere Städte, darunter Alexandria in Ägypten. Dadurch verbreitete sich die griechische Kultur im eroberten Gebiet.",
      "Feldzug nach Indien: Alexander führte sein Heer bis nach Indien. Allerdings kehrte er aufgrund der Erschöpfung seiner Truppen um.",
      "Otto I.: Otto I. war der erste König Griechenlands. Denn er kam aus Bayern."
    ],
    "exercises": [
      {
        "id": "1275",
        "title": "Hermes",
        "folder": "hermes-1275"
      },
      {
        "id": "881",
        "title": "Alexander der Große",
        "folder": "alexander-der-groese-881"
      },
      {
        "id": "1323",
        "title": "Trojaner",
        "folder": "trojaner-1323"
      },
      {
        "id": "1656",
        "title": "Griechenland",
        "folder": "griechenland-1656"
      },
      {
        "id": "2436",
        "title": "Das Kreuz ist eines der bekanntesten Symbole des christlichen Glaubens. Es steht für die Kreuzigung und Auferstehung Jesu Christi. In der Kunst wird es oft als Altarschmuck, in Gemälden oder als Skulptur dargestellt. Verschiedene Formen wie das lateinische Kreuz und das griechische Kreuz haben unterschiedliche Bedeutungen.",
        "folder": "christliche-kunst-und-symbole-2436"
      },
      {
        "id": "2903",
        "title": "Das Königreich Griechenland",
        "folder": "das-konigreich-griechenland-2903"
      },
      {
        "id": "2907",
        "title": "Das Perserreich",
        "folder": "das-perserreich-2907"
      },
      {
        "id": "1212",
        "title": "Athena",
        "folder": "athena-1212"
      },
      {
        "id": "3063",
        "title": "Umsturzversuch des Spartakusbundes",
        "folder": "umsturzversuch-des-spartakusbundes-3063"
      },
      {
        "id": "4703",
        "title": "Die Schule von Athen - Raffael (1511)",
        "folder": "die-schule-von-athen-raffael-1511-4703"
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
        "id": "5225",
        "title": "Die klassische Periode in Griechenland",
        "folder": "die-klassische-periode-in-griechenland-5225"
      },
      {
        "id": "5226",
        "title": "Die hellenistische Periode in Griechenland",
        "folder": "die-hellenistische-periode-in-griechenland-5226"
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
        "id": "5237",
        "title": "Alltag und Gesellschaft im antiken Griechenland",
        "folder": "alltag-und-gesellschaft-im-antiken-griechenland-5237"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Antikes%20Griechenland%20%26%20Attische%20Demokratie+geschichte&t=3752"
  },
  "das-roemische-reich-republik-und-kaiserzeit": {
    "slug": "das-roemische-reich-republik-und-kaiserzeit",
    "title": "Das Römische Reich: Republik & Kaiserzeit",
    "category": "Ur- & Frühgeschichte & Antike",
    "shortDesc": "Vom Stadtstaat zum Weltreich, Senat und Volk (SPQR), Julius Caesar, Kaiser Augustus, Legionen und Römisches Recht.",
    "longDesc": "Das Christentum zählt zu den größten Weltreligionen und ist auf fast allen Kontinenten verbreitet. Seine Geschichte reicht weit zurück, denn bereits vor über 2000 Jahren begannen die ersten Anhänger, den Glauben an Jesus Christus weiterzugeben. Bis heute prägt das Christentum nicht nur religiöse Traditionen, sondern auch Kunst, Kultur und gesellschaftliche Werte. Jesus Christus gilt als Begründer des Christentums, da er mit seinen Lehren viele Menschen beeinflusste. Er lebte damals im Gebiet der Juden und wurde von seinen Anhängern als Sohn Gottes verehrt. Seine Botschaft wurde weitergegeben, sodass sich die neue Glaubensrichtung schnell ausbreiten konnte. Schließlich wurde das Christentum im Römischen Reich zur Staatsreligion erklärt. Dadurch gewann es zunehmend an Bedeutung und erreichte viele Regionen weltweit. Heute gibt es mehrere christliche Kirchen, darunter die römisch-katholische, die orthodoxe sowie die evangelische Kirche. Obwohl sie sich in manchen Aspekten unterscheiden, teilen sie denselben Glauben an Jesus Christus.",
    "keyPoints": [
      "Die Bibel besteht aus dem Alten und dem Neuen Testament",
      "Die Dreifaltigkeit umfasst Gott, Jesus und den Heiligen Geist",
      "Weihnachten feiert die Geburt Jesu, während Ostern die Auferstehung würdigt",
      "Die Kirche spaltete sich in verschiedene Strömungen mit eigenen Traditionen",
      "Christliche Werte beeinflussen seit Jahrhunderten Ethik, Kultur und Gesellschaft",
      "geboren 1918 in Hamburg",
      "Studium der Staats- und Volkswirtschaft nach dem Krieg",
      "Eintritt in die SPD im Jahr 1946"
    ],
    "exercises": [
      {
        "id": "68",
        "title": "Romantik",
        "folder": "romantik-68"
      },
      {
        "id": "71",
        "title": "(13a) Musik in der Romantik",
        "folder": "13a-musik-in-der-romantik-71"
      },
      {
        "id": "170",
        "title": "Römische Zahlen einfach",
        "folder": "romische-zahlen-einfach-2-170"
      },
      {
        "id": "171",
        "title": "Römische Zahlen mittel",
        "folder": "romische-zahlen-mittel-171"
      },
      {
        "id": "172",
        "title": "Römische Zahlen schwer",
        "folder": "romische-zahlen-schwer-172"
      },
      {
        "id": "173",
        "title": "Römische Zahlen schwer",
        "folder": "romische-zahlen-schwer-2-173"
      },
      {
        "id": "292",
        "title": "Römische Zahlen (Erklärvideo und Übungen)",
        "folder": "romische-zahlen-erklarvideo-und-bungen-292"
      },
      {
        "id": "297",
        "title": "Renaissance - Barock - Klassik - Romantik",
        "folder": "renaissance-barock-klassik-romantik-297"
      },
      {
        "id": "299",
        "title": "Der Stromkreis",
        "folder": "der-stromkreis-299"
      },
      {
        "id": "300",
        "title": "Spannung, Stromstärke und Widerstand",
        "folder": "spannung-stromstarke-und-widerstand-300"
      },
      {
        "id": "316",
        "title": "Wechselstrom, Gleichstrom und Stromrichtung",
        "folder": "wechselstrom-gleichstrom-und-stromrichtung-316"
      },
      {
        "id": "332",
        "title": "Richtiger Umgang mit elektrischem Strom",
        "folder": "richtiger-umgang-mit-elektrischem-strom-332"
      },
      {
        "id": "341",
        "title": "Licht, Wärme und Kraft aus elektrischem Strom",
        "folder": "licht-warme-und-kraft-aus-elektrischem-strom-341"
      },
      {
        "id": "505",
        "title": "Musikgeschichte - Romantik",
        "folder": "musikgeschichte-romantik-505"
      },
      {
        "id": "624",
        "title": "Römische Zahlen",
        "folder": "romische-zahlen-624"
      },
      {
        "id": "636",
        "title": "Music from the Stone Age to Antiquity",
        "folder": "music-from-the-stone-age-to-antiquity-636"
      },
      {
        "id": "641",
        "title": "Music of the Romantic Period",
        "folder": "music-of-the-romantic-period-641"
      },
      {
        "id": "818",
        "title": "Das Christentum",
        "folder": "das-christentum-818"
      },
      {
        "id": "848",
        "title": "Das Christentum",
        "folder": "das-christentum-2-848"
      },
      {
        "id": "890",
        "title": "Helmut Schmidt",
        "folder": "helmut-schmidt-890"
      },
      {
        "id": "892",
        "title": "Karthago",
        "folder": "karthago-892"
      },
      {
        "id": "1036",
        "title": "Die Flüchtlingskrise",
        "folder": "die-fluchtlingskrise-1036"
      },
      {
        "id": "1169",
        "title": "Chrom",
        "folder": "chrom-1169"
      },
      {
        "id": "1178",
        "title": "Brom",
        "folder": "brom-1178"
      },
      {
        "id": "1263",
        "title": "Google Chrome",
        "folder": "google-chrome-1263"
      },
      {
        "id": "1364",
        "title": "Das Rechtssystem im antiken Rom",
        "folder": "das-rechtssystem-im-antiken-rom-1364"
      },
      {
        "id": "1365",
        "title": "Das römische Kaiserreich",
        "folder": "das-romische-kaiserreich-1365"
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
        "id": "1371",
        "title": "Fall des Weströmischen Reiches",
        "folder": "fall-des-westromischen-reiches-1371"
      },
      {
        "id": "1406",
        "title": "Römische Literatur",
        "folder": "romische-literatur-1406"
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
        "id": "1833",
        "title": "Rom",
        "folder": "rom-1833"
      },
      {
        "id": "2020",
        "title": "Der Golfstrom",
        "folder": "der-golfstrom-2020"
      },
      {
        "id": "2097",
        "title": "Geschlechtschromosomen - XX und XY",
        "folder": "geschlechtschromosomen-xx-und-xy-2097"
      },
      {
        "id": "2107",
        "title": "Das Ohr - Trommelfell und Gehörknöchelchen",
        "folder": "das-ohr-trommelfell-und-gehorknochelchen-2107"
      },
      {
        "id": "2167",
        "title": "Die Rolle der Chromosomen",
        "folder": "die-rolle-der-chromosomen-2167"
      },
      {
        "id": "2239",
        "title": "Das Stromnetz",
        "folder": "das-stromnetz-2239"
      },
      {
        "id": "2241",
        "title": "Der Elektromagnet",
        "folder": "der-elektromagnet-2241"
      },
      {
        "id": "2242",
        "title": "Die elektromagnetische Induktion",
        "folder": "die-elektromagnetische-induktion-2242"
      },
      {
        "id": "2243",
        "title": "Die elektromagnetische Kraft",
        "folder": "die-elektromagnetischeh-kraft-2243"
      },
      {
        "id": "2244",
        "title": "Der Gleichstrommotor",
        "folder": "der-gleichstrommotor-2244"
      },
      {
        "id": "2246",
        "title": "Der Wechselstrommotor",
        "folder": "der-wechselstrommotor-2246"
      },
      {
        "id": "2248",
        "title": "Die elektromagnetische Datenspeicherung",
        "folder": "die-elektromagnetische-datenspeicherung-2248"
      },
      {
        "id": "2292",
        "title": "Andrew Jackson",
        "folder": "andrew-jackson-der-siebte-prasident-der-usa-2292"
      },
      {
        "id": "2296",
        "title": "Barack Obama",
        "folder": "barack-obama-2296"
      },
      {
        "id": "2298",
        "title": "Bertha von Suttner",
        "folder": "bertha-von-suttner-2298"
      },
      {
        "id": "2307",
        "title": "Das Heilige Römische Reich",
        "folder": "das-heilige-romische-reich-2307"
      },
      {
        "id": "2308",
        "title": "Das Jahr ohne Sommer",
        "folder": "das-jahr-ohne-sommer-2308"
      },
      {
        "id": "2319",
        "title": "Der Englische Bürgerkrieg",
        "folder": "der-englische-burgerkrieg-2319"
      },
      {
        "id": "2333",
        "title": "Die Gallier",
        "folder": "die-gallier-2333"
      },
      {
        "id": "2339",
        "title": "Die Goldene Bulle",
        "folder": "die-goldene-bulle-2339"
      },
      {
        "id": "2342",
        "title": "Die Inquisition",
        "folder": "die-inquisition-2342"
      },
      {
        "id": "2343",
        "title": "Die Julirevolution",
        "folder": "die-julirevolution-2343"
      },
      {
        "id": "2346",
        "title": "Die Leibeigenschaft",
        "folder": "die-leibeigenschaft-2346"
      },
      {
        "id": "2351",
        "title": "Die Punischen Kriege",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-5-2351"
      },
      {
        "id": "2352",
        "title": "Die russische Revolution",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-6-2352"
      },
      {
        "id": "2357",
        "title": "Geschichte des Strafrechts",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-11-2357"
      },
      {
        "id": "2361",
        "title": "Vielvölkerstaat Österreich",
        "folder": "vielvolkerstaat-sterreich-2361"
      },
      {
        "id": "2374",
        "title": "Literaturepoche Romantik",
        "folder": "literaturepoche-romantik-2374"
      },
      {
        "id": "2383",
        "title": "Literaturepoche Neuromatik",
        "folder": "literaturepoche-neuromatik-2383"
      },
      {
        "id": "2435",
        "title": "Die Konstantinische Wende im Jahr 313 markiert den Übergang des Christentums von einer verfolgten zu einer akzeptierten Religion im Römischen Reich. Der römische Kaiser Konstantin und Kaiser Licinius erließen das Toleranzedikt von Mailand, das die Religionsfreiheit gewährleistete. Dadurch gewann das Christentum an Bedeutung und Einfluss.",
        "folder": "konzile-und-meilensteine-des-glaubens-2435"
      },
      {
        "id": "2497",
        "title": "Wie funktioniert ein Barometer",
        "folder": "wie-funktioniert-ein-barometer-2497"
      },
      {
        "id": "2562",
        "title": "Wie funktioniert ein Spektrometer",
        "folder": "wie-funktioniert-ein-spektrometer-2562"
      },
      {
        "id": "2650",
        "title": "Die Ottonen",
        "folder": "buddhismus-in-der-modernen-welt-31-2650"
      },
      {
        "id": "2685",
        "title": "Monochromatische Kunst",
        "folder": "monochromatische-kunst-2685"
      },
      {
        "id": "2819",
        "title": "Die Rettung der Andromeda von Pierre Mignard (1679)",
        "folder": "die-rettung-der-andromeda-von-pierre-mignard-1679-2819"
      },
      {
        "id": "2908",
        "title": "Das russische Zarenreich",
        "folder": "das-russische-zarenreich-2908"
      },
      {
        "id": "2923",
        "title": "Der Panslawismus",
        "folder": "der-panslawismus-2923"
      },
      {
        "id": "2954",
        "title": "Die Geschichte der Schweiz",
        "folder": "die-geschichte-der-schweiz-2954"
      },
      {
        "id": "2966",
        "title": "Die nationale Einigung Italiens",
        "folder": "die-nationale-einigung-italiens-2966"
      },
      {
        "id": "2989",
        "title": "Die Völkerwanderung",
        "folder": "die-volkerwanderung-2989"
      },
      {
        "id": "3009",
        "title": "Heinrich VIII. und die anglikanische Kirche",
        "folder": "heinrich-viii-und-die-anglikanische-kirche-3009"
      },
      {
        "id": "3013",
        "title": "John F. Kennedy",
        "folder": "john-f-kennedy-3013"
      },
      {
        "id": "3025",
        "title": "Karl V.",
        "folder": "karl-v-3025"
      },
      {
        "id": "3054",
        "title": "Richard Nixon und die Watergate-Affaire",
        "folder": "richard-nixon-und-die-watergateaffaire-3054"
      },
      {
        "id": "3112",
        "title": "Romanik und Gotik",
        "folder": "romanik-und-gotik-3112"
      },
      {
        "id": "3156",
        "title": "Die Alemannen",
        "folder": "die-alemannen-3156"
      },
      {
        "id": "3161",
        "title": "Die Franken",
        "folder": "die-franken-3161"
      },
      {
        "id": "3162",
        "title": "Die Germanen und die Römer",
        "folder": "die-germanen-und-die-romer-3162"
      },
      {
        "id": "3163",
        "title": "Die Goten",
        "folder": "die-goten-3163"
      },
      {
        "id": "3168",
        "title": "Die Markomannen",
        "folder": "die-markomannen-3168"
      },
      {
        "id": "3172",
        "title": "Die Vandalen (germanischer Stamm)",
        "folder": "die-vandalen-germanischer-stamm-3172"
      },
      {
        "id": "3173",
        "title": "Die Varusschlacht",
        "folder": "die-varusschlacht-3173"
      },
      {
        "id": "3175",
        "title": "Geschichte der Eisenbahn",
        "folder": "geschichte-der-eisenbahn-3175"
      },
      {
        "id": "3188",
        "title": "Escape Room \"Der elektrische Strom\"",
        "folder": "escape-room-quot-der-elektrische-strom-quot-3188"
      },
      {
        "id": "3189",
        "title": "Escape Room \"Strom im Alltag\"",
        "folder": "escape-room-quot-strom-im-alltag-quot-3189"
      },
      {
        "id": "3216",
        "title": "Escape Room \"Komponisten der Romantik 2\"",
        "folder": "escape-room-quot-komponisten-der-romantik-2-quot-3216"
      },
      {
        "id": "3217",
        "title": "Escape Room \"Komponisten der Romantik 1\"",
        "folder": "escape-room-quot-komponisten-der-romantik-1-quot-3217"
      },
      {
        "id": "3218",
        "title": "Escape Room \"Deutsche Komponisten der Romantik\"",
        "folder": "escape-room-quot-deutsche-komponisten-der-romantik-quot-3218"
      },
      {
        "id": "3219",
        "title": "Escape Room \"Österreichische Komponisten der Romantik\"",
        "folder": "escape-room-quot-sterreichische-komponisten-der-romantik-quot-3219"
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
        "id": "2341",
        "title": "Die Hunnen",
        "folder": "die-hunnen-2341"
      },
      {
        "id": "3122",
        "title": "Ostarrichi – Geburtsstunde Österreichs",
        "folder": "ostarrichi-geburtsstunde-sterreichs-3122"
      },
      {
        "id": "2323",
        "title": "Der Limes",
        "folder": "der-limes-2323"
      },
      {
        "id": "2354",
        "title": "Die Seidenstraße",
        "folder": "die-nuklearkatastrophe-von-tschernobyl-8-2354"
      },
      {
        "id": "2336",
        "title": "Die Germanen",
        "folder": "die-germanen-2336"
      },
      {
        "id": "3084",
        "title": "Das Frühmittelalter",
        "folder": "das-fruhmittelalter-3084"
      },
      {
        "id": "3104",
        "title": "Der Roman Die Heimsuchung von Jenny Erpenbck",
        "folder": "der-roman-die-heimsuchung-von-jenny-erpenbck-3104"
      },
      {
        "id": "3108",
        "title": "Der Roman Die Heimsuchung von Jenny Erpenbck - 1952 - Anfangsphase der DDR",
        "folder": "der-roman-die-heimsuchung-von-jenny-erpenbck-1952-anfangsphase-der-ddr-3108"
      },
      {
        "id": "3115",
        "title": "Die Karolinger",
        "folder": "die-karolinger-3115"
      },
      {
        "id": "3147",
        "title": "Die Kraft der Kompromisse - Wie man gemeinsam Lösungen findet",
        "folder": "die-kraft-der-kompromisse-wie-man-gemeinsam-losungen-findet-3147"
      },
      {
        "id": "3467",
        "title": "William Shakespeare – Romeo und Julia (Lernsong)",
        "folder": "william-shakespeare-romeo-und-julia-3467"
      },
      {
        "id": "3470",
        "title": "Günther Grass - Die Blechtrommel (Lernsong)",
        "folder": "gunther-grass-die-blechtrommel-3470"
      },
      {
        "id": "3832",
        "title": "Erwin Rommel",
        "folder": "erwin-rommel-3832"
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
        "id": "4375",
        "title": "Kevin Systrom",
        "folder": "kevin-systrom-4375"
      },
      {
        "id": "4573",
        "title": "William Shakespeare – Romeo und Julia",
        "folder": "william-shakespeare-romeo-und-julia-2-4573"
      },
      {
        "id": "4642",
        "title": "Literaturepoche Romantik",
        "folder": "literaturepoche-romantik-2-4642"
      },
      {
        "id": "4786",
        "title": "Die Kunstepoche Romantik",
        "folder": "die-kunstepoche-romantik-4786"
      },
      {
        "id": "5210",
        "title": "Prometheus von Johann Wolfgang von Goethe",
        "folder": "prometheus-von-johann-wolfgang-von-goethe-5210"
      },
      {
        "id": "5251",
        "title": "Das elektromagnetische Spektrum",
        "folder": "das-elektromagnetische-spektrum-5251"
      },
      {
        "id": "5259",
        "title": "Der Elektromagnet",
        "folder": "der-elektromagnet-2-5259"
      },
      {
        "id": "5260",
        "title": "Der Elektromotor",
        "folder": "der-elektromotor-5260"
      },
      {
        "id": "5288",
        "title": "Drehstrom",
        "folder": "drehstrom-5288"
      },
      {
        "id": "5291",
        "title": "Elektromagnetische Wellen",
        "folder": "elektromagnetische-wellen-5291"
      },
      {
        "id": "5294",
        "title": "Generatoren - stromerzeugende Maschinen",
        "folder": "generatoren-stromerzeugende-maschinen-5294"
      },
      {
        "id": "5395",
        "title": "Geschichte des Römischen Reiches",
        "folder": "geschichte-des-romischen-reiches-5395"
      },
      {
        "id": "5403",
        "title": "Was wäre, wenn das Römische Reich immer noch existieren würde …",
        "folder": "was-ware-wenn-das-romische-reich-immer-noch-existieren-wurde-5403"
      },
      {
        "id": "5485",
        "title": "Elektromobilität im Aufschwung - Chancen und Grenzen",
        "folder": "elektromobilitat-im-aufschwung-chancen-und-grenzen-5485"
      },
      {
        "id": "6100",
        "title": "Rom",
        "folder": "rom-2-6100"
      },
      {
        "id": "6580",
        "title": "Der Vatikan und die römische Kurie",
        "folder": "der-vatikan-und-die-romische-kurie-6580"
      },
      {
        "id": "6617",
        "title": "Die römische Kurie - Aufbau und Funktion",
        "folder": "die-romische-kurie-aufbau-und-funktion-6617"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Das%20R%C3%B6mische%20Reich%3A%20Republik%20%26%20Kaiserzeit+geschichte&t=3752"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=St%C3%A4ndegesellschaft%20%26%20Alltag%20im%20Mittelalter+geschichte&t=3752"
  },
  "ritter-burgen-und-ritterausbildung": {
    "slug": "ritter-burgen-und-ritterausbildung",
    "title": "Rittertum, Burgen & Ritterausbildung",
    "category": "Das Mittelalter",
    "shortDesc": "Vom Pagen zum Ritter mit Schwertleite, ritterliche Tugenden, Burgenbau, Belagerung und Turniere.",
    "longDesc": "Der Amerikanische Bürgerkrieg veränderte die Vereinigten Staaten für immer. Dabei ging es nicht nur um die Sklaverei, sondern auch um wirtschaftliche und politische Spannungen zwischen Nord- und Südstaaten. Schließlich führte der Konflikt zu einem der verlustreichsten Kriege des Landes. Doch welche Ursachen spielten eine Rolle, und welche Folgen hatte der Krieg für die Gesellschaft? Der Amerikanische Bürgerkrieg begann 1861, nachdem die Südstaaten die Union verließen. Denn sie fürchteten, dass die Abschaffung der Sklaverei ihre Wirtschaft ruinieren würde. Zudem bestanden große Unterschiede zwischen Nord und Süd, da die Nordstaaten auf Industrie setzten, während die Südstaaten stark von der Plantagenwirtschaft abhingen. Außerdem führten Schutzzölle, die die Nordstaaten forderten, zu Konflikten, weil die Südstaaten lieber freien Handel betrieben. Nachdem Abraham Lincoln Präsident wurde, gründeten die Südstaaten die Konföderation unter Jefferson Davis. Dadurch eskalierten die Spannungen weiter, sodass es schließlich zum Krieg kam. Der Konflikt begann mit dem Angriff auf Fort Sumter. Obwohl die Südstaaten anfangs Erfolge erzielten, konnten die Nordstaaten durch wirtschaftliche Stärke und bessere Strategie den Krieg für sich entscheiden.",
    "keyPoints": [
      "Sezession der Südstaaten nach Lincolns Wahl",
      "Eskalation der Spannungen durch politische Differenzen",
      "Beginn des Krieges mit dem Angriff auf Fort Sumter",
      "Wirtschaftliche Blockade der Südstaaten durch die Union",
      "Entscheidende Schlachten wie Gettysburg und Antietam",
      "Kapitulation der Südstaaten 1865 nach schweren Verlusten",
      "Abschaffung der Sklaverei und Stärkung der Bundesregierung",
      "Langfristige soziale und wirtschaftliche Auswirkungen auf die USA"
    ],
    "exercises": [
      {
        "id": "479",
        "title": "Salzburg",
        "folder": "salzburg-479"
      },
      {
        "id": "484",
        "title": "Burgenland",
        "folder": "burgenland-484"
      },
      {
        "id": "743",
        "title": "Der amerikanische Bürgerkrieg",
        "folder": "der-amerikanische-burgerkrieg-743"
      },
      {
        "id": "882",
        "title": "Angela Merkel",
        "folder": "angela-merkel-882"
      },
      {
        "id": "960",
        "title": "Brandenburg",
        "folder": "brandenburg-960"
      },
      {
        "id": "965",
        "title": "Mecklenburg-Vorpommern",
        "folder": "mecklenburg-vorpommern-965"
      },
      {
        "id": "1021",
        "title": "Brandenburg",
        "folder": "brandenburg-2-1021"
      },
      {
        "id": "1048",
        "title": "Mecklenburg-Vorpommern",
        "folder": "mecklenburg-vorpommern-2-1048"
      },
      {
        "id": "1053",
        "title": "Hamburg",
        "folder": "hamburg-1053"
      },
      {
        "id": "1435",
        "title": "Klosterneuburg",
        "folder": "klosterneuburg-1435"
      },
      {
        "id": "1448",
        "title": "Salzburg",
        "folder": "salzburg-2-1448"
      },
      {
        "id": "1493",
        "title": "Freiburg im Breisgau",
        "folder": "freiburg-im-breisgau-1493"
      },
      {
        "id": "1494",
        "title": "Magdeburg",
        "folder": "magdeburg-1494"
      },
      {
        "id": "1503",
        "title": "Augsburg",
        "folder": "augsburg-1503"
      },
      {
        "id": "1511",
        "title": "Duisburg",
        "folder": "duisburg-1511"
      },
      {
        "id": "1545",
        "title": "Aschaffenburg",
        "folder": "aschaffenburg-1545"
      },
      {
        "id": "1599",
        "title": "Cloppenburg",
        "folder": "cloppenburg-1599"
      },
      {
        "id": "1615",
        "title": "Duisburg",
        "folder": "duisburg-2-1615"
      },
      {
        "id": "1619",
        "title": "Edinburgh",
        "folder": "edinburgh-1619"
      },
      {
        "id": "1633",
        "title": "Flensburg",
        "folder": "flensburg-1633"
      },
      {
        "id": "1637",
        "title": "Freiburg",
        "folder": "freiburg-1637"
      },
      {
        "id": "1742",
        "title": "Limburg an der Lahn",
        "folder": "limburg-an-der-lahn-1742"
      },
      {
        "id": "1758",
        "title": "Klosterneuburg",
        "folder": "klosterneuburg-2-1758"
      },
      {
        "id": "1766",
        "title": "Marburg",
        "folder": "marburg-1766"
      },
      {
        "id": "1849",
        "title": "Sankt Petersburg",
        "folder": "sankt-petersburg-1849"
      },
      {
        "id": "1864",
        "title": "Siegburg",
        "folder": "siegburg-1864"
      },
      {
        "id": "2313",
        "title": "Aufstieg der Habsburger",
        "folder": "aufstieg-der-habsburger-2313"
      },
      {
        "id": "2885",
        "title": "Abraham Lincoln",
        "folder": "abraham-lincoln-2885"
      },
      {
        "id": "2909",
        "title": "Das Weltreich von Karl V.",
        "folder": "das-weltreich-von-karl-v-2909"
      },
      {
        "id": "2912",
        "title": "Der Augsburger Religionsfriede",
        "folder": "der-augsburger-religionsfriede-2912"
      },
      {
        "id": "2959",
        "title": "Die Heiratspolitik der Habsburger",
        "folder": "die-heiratspolitik-der-habsburger-2959"
      },
      {
        "id": "2992",
        "title": "Die WHO",
        "folder": "die-who-2992"
      },
      {
        "id": "3018",
        "title": "Kaiser Josef II. und seine Reformen",
        "folder": "kaiser-josef-ii-und-seine-reformen-3018"
      },
      {
        "id": "3019",
        "title": "Kaiser Karl I. von Österreich-Ungarn",
        "folder": "kaiser-karl-i-von-sterreich-ungarn-3019"
      },
      {
        "id": "3022",
        "title": "Kaiserin Maria Theresia",
        "folder": "kaiserin-maria-theresia-3022"
      },
      {
        "id": "3028",
        "title": "Kämpfe von Schattendorf",
        "folder": "kampfe-von-schattendorf-3028"
      },
      {
        "id": "3048",
        "title": "Paul von Hindenburg",
        "folder": "paul-von-hindenburg-3048"
      },
      {
        "id": "3055",
        "title": "Ritter und Burgen im Mittelalter",
        "folder": "ritter-und-burgen-im-mittelalter-3055"
      },
      {
        "id": "3159",
        "title": "Die Burgunden",
        "folder": "die-burgunden-3159"
      },
      {
        "id": "3312",
        "title": "Die Habsburger",
        "folder": "die-habsburger-3312"
      },
      {
        "id": "3085",
        "title": "Das Hochmittelalter",
        "folder": "das-hochmittelalter-3085"
      },
      {
        "id": "3070",
        "title": "Zerfall der Habsburgmonarchie",
        "folder": "zerfall-der-habsburgmonarchie-3070"
      },
      {
        "id": "3072",
        "title": "Wien zur Zeit der Monarchie",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-3-3072"
      },
      {
        "id": "5665",
        "title": "Die Festung Hohensalzburg",
        "folder": "die-festung-hohensalzburg-5665"
      },
      {
        "id": "5667",
        "title": "Die Geschichte des Burgenlandes",
        "folder": "die-geschichte-des-burgenlandes-5667"
      },
      {
        "id": "5671",
        "title": "Die Geschichte Salzburgs",
        "folder": "die-geschichte-salzburgs-5671"
      },
      {
        "id": "5675",
        "title": "Die Hofburg",
        "folder": "die-hofburg-5675"
      },
      {
        "id": "5690",
        "title": "Die Schattenburg",
        "folder": "die-schattenburg-5690"
      },
      {
        "id": "5720",
        "title": "Salzburg (Stadt)",
        "folder": "salzburg-stadt-5720"
      },
      {
        "id": "5721",
        "title": "Salzburg und ihre Salzbergwerke",
        "folder": "salzburg-und-ihre-salzbergwerke-5721"
      },
      {
        "id": "6008",
        "title": "Hamburg",
        "folder": "hamburg-3-6008"
      },
      {
        "id": "6031",
        "title": "Johannesburg",
        "folder": "johannesburg-6031"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rittertum%2C%20Burgen%20%26%20Ritterausbildung+geschichte&t=3752"
  },
  "staedte-und-die-hanse": {
    "slug": "staedte-und-die-hanse",
    "title": "Mittelalterliche Städte & Die Hanse",
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
        "id": "2345",
        "title": "Die Kreuzzüge",
        "folder": "die-kreuzzuge-2345"
      },
      {
        "id": "2364",
        "title": "Karl der Große",
        "folder": "karl-der-groese-2364"
      },
      {
        "id": "2456",
        "title": "Papst Benedikt XVI.",
        "folder": "papst-benedikt-xvi-2456"
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
        "id": "5596",
        "title": "Das Klostertal",
        "folder": "das-klostertal-5596"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kirche%2C%20Kl%C3%B6ster%2C%20Kaiser%20%26%20Kreuzz%C3%BCge+geschichte&t=3752"
  },
  "schwarzer-tod-die-pest": {
    "slug": "schwarzer-tod-die-pest",
    "title": "Der Schwarze Tod: Die Pest im Mittelalter",
    "category": "Das Mittelalter",
    "shortDesc": "Die Pestepidemie ab 1347, Ursachen, Geißelzüge, Judenpogrome und die tiefgreifenden Folgen für Europa.",
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
        "id": "1583",
        "title": "Budapest",
        "folder": "budapest-1583"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Der%20Schwarze%20Tod%3A%20Die%20Pest%20im%20Mittelalter+geschichte&t=3752"
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
        "id": "502",
        "title": "Musikgeschichte - Renaissance",
        "folder": "musikgeschichte-renaissance-502"
      },
      {
        "id": "612",
        "title": "Das kopernikanische Weltbild",
        "folder": "das-kopernikanische-weltbild-612"
      },
      {
        "id": "639",
        "title": "Music in the Renaissance",
        "folder": "music-in-the-renaissance-639"
      },
      {
        "id": "2332",
        "title": "Die Erfindung des Buchdrucks",
        "folder": "die-erfindung-des-buchdrucks-2332"
      },
      {
        "id": "2369",
        "title": "Literaturepoche Renaissance",
        "folder": "literaturepoche-renaissance-2369"
      },
      {
        "id": "2797",
        "title": "Das Abendmahl von Leonardo da Vinci (ca. 1495–1498)",
        "folder": "das-abendmahl-von-leonardo-da-vinci-ca-1495-1498-2797"
      },
      {
        "id": "2828",
        "title": "Mona Lisa von Leonardo da Vinci (1503–1517)",
        "folder": "mona-lisa-von-leonardo-da-vinci-1503-1517-2828"
      },
      {
        "id": "2872",
        "title": "Atheismus",
        "folder": "atheismus-2872"
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
        "id": "4052",
        "title": "Leonardo da Vinci",
        "folder": "leonardo-da-vinci-2-4052"
      },
      {
        "id": "4637",
        "title": "Literaturepoche Renaissance",
        "folder": "literaturepoche-renaissance-2-4637"
      },
      {
        "id": "4666",
        "title": "Anbetung der Könige - Leonardo da Vinci (1481)",
        "folder": "anbetung-der-konige-leonardo-da-vinci-1481-4666"
      },
      {
        "id": "4676",
        "title": "Das letzte Abendmahl - Leonardo da Vinci (1498)",
        "folder": "das-letzte-abendmahl-leonardo-da-vinci-1498-4676"
      },
      {
        "id": "4724",
        "title": "Madonna Litta - Leonardo da Vinci (1490)",
        "folder": "madonna-litta-leonardo-da-vinci-1490-4724"
      },
      {
        "id": "4754",
        "title": "Vitruvianischer Mensch - Leonardo da Vinci (1490)",
        "folder": "vitruvianischer-mensch-leonardo-da-vinci-1490-4754"
      },
      {
        "id": "4761",
        "title": "Mona Lisa - Leonardo da Vinci (1503)",
        "folder": "mona-lisa-leonardo-da-vinci-1503-4761"
      },
      {
        "id": "4784",
        "title": "Die Kunstepoche Renaissance",
        "folder": "die-kunstepoche-renaissance-4784"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Renaissance%2C%20Humanismus%20%26%20Buchdruck+geschichte&t=3752"
  },
  "zeitalter-der-entdeckungen": {
    "slug": "zeitalter-der-entdeckungen",
    "title": "Das Zeitalter der Entdeckungen & Kolumbus",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Seeweg nach Indien, Christoph Kolumbus 1492, Magellan, Inka, Azteken, Kolonialismus und Dreieckshandel.",
    "longDesc": "Die Entdeckung Amerikas ist ein faszinierendes und viel diskutiertes Thema. Christoph Kolumbus spielte dabei eine zentrale Rolle, aber er war bei Weitem nicht der Einzige, der diesen Kontinent \"entdeckt\" hat. Kolumbus' Reise im Jahr 1492 war der Beginn einer neuen Ära. Er suchte nach einem westlichen Seeweg nach Indien, doch stattdessen stieß er auf einen neuen Kontinent. Obwohl er selbst glaubte, in Indien gelandet zu sein, erkannte Amerigo Vespucci später, dass es sich um ein anderes Land handelte. Die \"Entdeckung\" Amerikas durch die Europäer hatte weitreichende Folgen. Sie führte zu einem Austausch von Gütern, Wissen und Kulturen, aber auch zu Konflikten und zur Ausbeutung der indigenen Bevölkerung. Die Kolonialisierung Amerikas veränderte die Welt auf dramatische Weise.",
    "keyPoints": [
      "Die indigenen Völker: Amerika war bereits vor der Ankunft der Europäer von indigenen Völkern besiedelt, die eine reiche Kultur und Geschichte hatten.",
      "Die Rolle anderer Entdecker: Neben Kolumbus gab es auch andere europäische Entdecker, die Amerika erkundeten und kartografierten.",
      "Die langfristigen Folgen: Die Entdeckung Amerikas hatte langfristige Auswirkungen auf die Welt, sowohl positive als auch negative.",
      "Extreme Bedingungen: Monatelange Seereisen führten zu Hunger, Krankheiten und Meutereien.",
      "Navigationsprobleme: Ohne genaue Karten war die Orientierung oft schwierig.",
      "Bedeutende Entdeckungen: Die Magellanstraße eröffnete neue Handelsrouten.",
      "Langfristige Folgen: Die Weltumsegelung bestätigte, dass die Erde rund ist.",
      "Wirtschaftlicher Einfluss: Die neuen Gewürzhandelsrouten veränderten den globalen Markt nachhaltig."
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
        "id": "2293",
        "title": "Ausbeutung Amerikas",
        "folder": "ausbeutung-amerikas-2293"
      },
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
        "id": "2990",
        "title": "Die wahren Entdecker Amerikas",
        "folder": "die-wahren-entdecker-amerikas-2990"
      },
      {
        "id": "3061",
        "title": "Spanien erobert Südamerika",
        "folder": "spanien-erobert-sudamerika-3061"
      },
      {
        "id": "3152",
        "title": "Amerika vor Kolumbus",
        "folder": "amerika-vor-kolumbus-3152"
      },
      {
        "id": "3348",
        "title": "Die größten Kolonialreiche",
        "folder": "die-groesten-kolonialreiche-3348"
      },
      {
        "id": "3843",
        "title": "Ferdinand Magellan",
        "folder": "ferdinand-magellan-3843"
      },
      {
        "id": "4096",
        "title": "Maya Angelou",
        "folder": "maya-angelou-4096"
      },
      {
        "id": "4325",
        "title": "Vladimir Mayakovsky",
        "folder": "vladimir-mayakovsky-4325"
      },
      {
        "id": "4346",
        "title": "Wole Soyinka",
        "folder": "wole-soyinka-4346"
      },
      {
        "id": "5386",
        "title": "Die Wiederentdeckung Amerikas durch Kolumbus",
        "folder": "die-wiederentdeckung-amerikas-durch-kolumbus-5386"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Das%20Zeitalter%20der%20Entdeckungen%20%26%20Kolumbus+geschichte&t=3752"
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
        "id": "643",
        "title": "Martin Luther",
        "folder": "martin-luther-643"
      },
      {
        "id": "742",
        "title": "Die Hexenverfolgung",
        "folder": "die-hexenverfolgung-742"
      },
      {
        "id": "883",
        "title": "Der Dreißigjährige Krieg",
        "folder": "der-dreiesigjahrige-krieg-883"
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
        "title": "Der Jesuitenorden erhielt 1540 die offizielle Anerkennung des Papstes. Ignatius wurde der erste Generalobere des Ordens. Die rasche Ausbreitung des Ordens führte zu seiner Beteiligung an der Gegenreformation, einem Versuch, die katholische Kirche zu reformieren und zu stärken.",
        "folder": "ignatius-von-loyola-2464"
      },
      {
        "id": "2891",
        "title": "Aufstieg Österreichs zur Großmacht",
        "folder": "aufstieg-sterreichs-zur-groesmacht-2891"
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
        "id": "3030",
        "title": "Königreich Sachsen",
        "folder": "konigreich-sachsen-3030"
      },
      {
        "id": "3034",
        "title": "Martin Luther King",
        "folder": "martin-luther-king-3034"
      },
      {
        "id": "3052",
        "title": "Rassenprobleme und Bürgerrechtskämpfe in den USA",
        "folder": "rassenprobleme-und-burgerrechtskampfe-in-den-usa-3052"
      },
      {
        "id": "3354",
        "title": "Reformation und Gegenbewegungen",
        "folder": "reformation-und-gegenbewegungen-3354"
      },
      {
        "id": "3426",
        "title": "Friedrich Schiller - Wallenstein (Lernsong)",
        "folder": "friedrich-schiller-wallenstein-3426"
      },
      {
        "id": "4082",
        "title": "Martin Luther King Jr.",
        "folder": "martin-luther-king-jr-4082"
      },
      {
        "id": "4083",
        "title": "Martin Luther",
        "folder": "martin-luther-2-4083"
      },
      {
        "id": "4531",
        "title": "Friedrich Schiller - Wallenstein",
        "folder": "friedrich-schiller-wallenstein-2-4531"
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
        "id": "5417",
        "title": "Was wäre, wenn es nie zur Reformation gekommen wäre …",
        "folder": "was-ware-wenn-es-nie-zur-reformation-gekommen-ware-5417"
      },
      {
        "id": "6526",
        "title": "Der Reformationstag",
        "folder": "der-reformationstag-6526"
      },
      {
        "id": "6712",
        "title": "Reformation und ihre Folgen",
        "folder": "reformation-und-ihre-folgen-6712"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Reformation%2C%20Glaubensspaltung%20%26%20Drei%C3%9Figj%C3%A4hriger%20Krieg+geschichte&t=3752"
  },
  "absolutismus-und-ludwig-xiv": {
    "slug": "absolutismus-und-ludwig-xiv",
    "title": "Absolutismus & Der Sonnenkönig Ludwig XIV.",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "'L'État, c'est moi', Schloss Versailles, die 5 Säulen der Macht, Merkantilismus und Hofleben.",
    "longDesc": "Hast du dich schon einmal gefragt, wie Könige früher regiert haben? Besonders ein König, der als \"Sonnenkönig\" bekannt wurde, hat durch den Absolutismus Geschichte geschrieben. Wenn du mehr über diese faszinierende Epoche erfahren möchtest, bist du hier genau richtig! Der Absolutismus ist eine der spannendsten Zeiten der Geschichte. Stell dir vor: Ein einziger Mensch hält die gesamte Macht in seinen Händen. Genau so war es im Absolutismus. Wir werfen einen Blick auf Ludwig XIV., den berühmtesten Vertreter des Absolutismus, der als Inbegriff eines absoluten Herrschers gilt. Seine Entscheidungen und Bauwerke wie das prachtvolle Schloss Versailles prägen bis heute unser Bild vom Absolutismus. Das bedeutet, dass der König uneingeschränkte Macht hat. Er konnte Gesetze erlassen und das Land regieren, ohne andere um Zustimmung bitten zu müssen. Der Absolutismus war die Regierungsform, die vor allem in Frankreich unter Ludwig XIV. zur Perfektion gebracht wurde. Ludwig XIV., bekannt als der Sonnenkönig, war der mächtigste König seiner Zeit und ein Symbol für den Absolutismus. Er regierte Frankreich mit absoluter Macht und setzte Maßstäbe für diese Regierungsform. Ludwig XIV. ließ beeindruckende Bauwerke errichten, darunter das weltberühmte Schloss Versailles. Seine Politik und Entscheidungen stärkten die königliche Macht und etablierten den Absolutismus als prägende Epoche der französischen Geschichte.",
    "keyPoints": [
      "Einführung von Schutzzöllen zur Begrenzung des Imports",
      "Ausbau von Manufakturen durch staatliche Förderung",
      "Nutzung billiger Rohstoffe aus den Kolonien",
      "Export eigener Produkte zur Gewinnsteigerung",
      "Kontrolle der Märkte durch staatliche Vorgaben",
      "Rückgang der Abhängigkeit von ausländischer Ware",
      "Stärkung der nationalen Wirtschaft durch klare Ziele",
      "Verbindung zwischen politischer Macht und Wirtschaft"
    ],
    "exercises": [
      {
        "id": "611",
        "title": "Absolutismus",
        "folder": "absolutismus-611"
      },
      {
        "id": "744",
        "title": "Der Merkantilismus",
        "folder": "der-merkantilismus-744"
      },
      {
        "id": "2340",
        "title": "Die Hugenotten",
        "folder": "die-hugenotten-2340"
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
        "id": "3020",
        "title": "Kaiser Wilhelm I.",
        "folder": "kaiser-wilhelm-i-3020"
      },
      {
        "id": "3374",
        "title": "Absolutismus",
        "folder": "absolutismus-2-3374"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Absolutismus%20%26%20Der%20Sonnenk%C3%B6nig%20Ludwig%20XIV.+geschichte&t=3752"
  },
  "aufklaerung-und-franzoesische-revolution": {
    "slug": "aufklaerung-und-franzoesische-revolution",
    "title": "Aufklärung & Die Französische Revolution 1789",
    "category": "Frühe Neuzeit & Revolutionen",
    "shortDesc": "Kant, Gewaltenteilung (Montesquieu), Sturm auf die Bastille, Erklärung der Menschenrechte und Jakobinerherrschaft.",
    "longDesc": "Die Französische Revolution war ein einschneidendes Ereignis in der europäischen Geschichte, das Frankreich und die Welt nachhaltig veränderte. Dieses Video fasst die wichtigsten Ereignisse zusammen. Vor der Revolution existierte in Frankreich eine Ständegesellschaft. Dabei mussten der dritte Stand, bestehend aus Bürgern, Bauern und Arbeitern, alle Steuern bezahlen, während der Klerus und der Adel privilegiert waren. Aufgrund dieser Ungerechtigkeit und wirtschaftlicher Not kam es zu Aufständen und Plünderungen. Schließlich mündeten diese Unruhen 1789 im Sturm auf die Bastille, dem Staatsgefängnis, was als Beginn der Revolution gilt.",
    "keyPoints": [
      "Die Forderung nach Gleichheit, Freiheit und Brüderlichkeit: Die Revolutionäre forderten Gleichheit vor dem Gesetz, persönliche Freiheit und Brüderlichkeit unter allen Bürgern. Dadurch stellten sie die bestehende Ordnung radikal in Frage.",
      "Die Entmachtung und Hinrichtung des Königs: Im Zuge der Revolution wurde der König entmachtet und später hingerichtet. Somit endete die Monarchie in Frankreich vorläufig.",
      "Die Schreckensherrschaft und Napoleon: Nach der Hinrichtung des Königs folgte eine Phase der Schreckensherrschaft mit verschiedenen Anführern. Schließlich beendete Napoleon Bonaparte die Revolution 1799 durch einen Staatsstreich und errichtete eine neue Ordnung.",
      "Die Betonung der Vernunft: Die Aufklärer betonten die Bedeutung der menschlichen Vernunft als wichtigstes Instrument zur Erkenntnis der Welt. Dadurch stellten sie traditionelle religiöse und politische Dogmen in Frage.",
      "Die Forderung nach Toleranz und Menschenrechten: Die Aufklärung setzte sich für Toleranz gegenüber Andersdenkenden und für die Verwirklichung der Menschenrechte ein. Ebenso forderten sie die Trennung von Staat und Kirche.",
      "Die Verbreitung von Wissen durch Enzyklopädien: Die Aufklärung förderte die Verbreitung von Wissen durch Enzyklopädien und andere Publikationen. Somit wurde Bildung einem breiteren Publikum zugänglich gemacht.",
      "Der Gesellschaftsvertrag: In diesem Werk entwickelte Rousseau die Idee vom „edlen Wilden“, der frei und glücklich in der Natur lebt. Außerdem argumentierte er für einen Gesellschaftsvertrag, der den allgemeinen Willen der Bürger berücksichtigt.",
      "Emil oder Über die Erziehung: Dieses Werk befasst sich intensiv mit der Erziehung des Menschen. Dabei betonte Rousseau die Bedeutung der natürlichen Entwicklung des Kindes und die Förderung der Selbstständigkeit."
    ],
    "exercises": [
      {
        "id": "328",
        "title": "Französische Revolution",
        "folder": "franzosische-revolution-328"
      },
      {
        "id": "1424",
        "title": "Immanuel Kant",
        "folder": "immanuel-kant-1424"
      },
      {
        "id": "2327",
        "title": "Die Aufklärung",
        "folder": "die-aufklarung-2327"
      },
      {
        "id": "2363",
        "title": "Jean Jacques Rousseau",
        "folder": "jean-jacques-rousseau-2363"
      },
      {
        "id": "2371",
        "title": "Literaturepoche Aufklärung",
        "folder": "literaturepoche-aufklarung-2371"
      },
      {
        "id": "2805",
        "title": "Der Sturm auf die Bastille von Jean-Pierre Houël (1789)",
        "folder": "der-sturm-auf-die-bastille-von-jean-pierre-houel-1789-2805"
      },
      {
        "id": "2867",
        "title": "Umweltaufklärung und nachhaltiger Lebensstil",
        "folder": "umweltaufklarung-und-nachhaltiger-lebensstil-2867"
      },
      {
        "id": "2946",
        "title": "Die Entkolonialisierung in Südamerika",
        "folder": "die-entkolonialisierung-in-sudamerika-2946"
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
        "id": "2983",
        "title": "Die Todesstrafe",
        "folder": "die-todesstrafe-2983"
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
        "title": "Die Französische Revolution 2 - Bastille",
        "folder": "die-franzosische-revolution-2-bastille-3260"
      },
      {
        "id": "3261",
        "title": "Die Französische Revolution 2 - Bastille",
        "folder": "die-franzosische-revolution-2-bastille-2-3261"
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
        "id": "3519",
        "title": "Die Todesstrafe",
        "folder": "die-todesstrafe-2-3519"
      },
      {
        "id": "3966",
        "title": "Immanuel Kant",
        "folder": "immanuel-kant-2-3966"
      },
      {
        "id": "4639",
        "title": "Literaturepoche Aufklärung",
        "folder": "literaturepoche-aufklarung-2-4639"
      },
      {
        "id": "5342",
        "title": "Die Aufklärung",
        "folder": "die-aufklarung-2-5342"
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
        "id": "5748",
        "title": "Denkformen der Aufklärung",
        "folder": "denkformen-der-aufklarung-5748"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Aufkl%C3%A4rung%20%26%20Die%20Franz%C3%B6sische%20Revolution%201789+geschichte&t=3752"
  },
  "napoleon-bonaparte-und-wiener-kongress": {
    "slug": "napoleon-bonaparte-und-wiener-kongress",
    "title": "Napoleon Bonaparte & Der Wiener Kongress",
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
        "id": "3029",
        "title": "Königreich Bayern",
        "folder": "konigreich-bayern-3029"
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
        "id": "4701",
        "title": "Die Krönung Napoleons - Jacques-Louis David (1807)",
        "folder": "die-kronung-napoleons-jacques-louis-david-1807-4701"
      },
      {
        "id": "5421",
        "title": "Was wäre, wenn Napoleon in Russland gesiegt hätte …",
        "folder": "was-ware-wenn-napoleon-in-russland-gesiegt-hatte-5421"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Napoleon%20Bonaparte%20%26%20Der%20Wiener%20Kongress+geschichte&t=3752"
  },
  "industrielle-revolution-und-soziale-frage": {
    "slug": "industrielle-revolution-und-soziale-frage",
    "title": "Industrielle Revolution & Die Soziale Frage",
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
        "id": "330",
        "title": "Industrielle Revolution",
        "folder": "industrielle-revolution-330"
      },
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
        "id": "2290",
        "title": "Alfred Escher",
        "folder": "alfred-escher-2290"
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
        "id": "2326",
        "title": "Der Wilde Westen",
        "folder": "der-wilde-westen-2326"
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
        "id": "3006",
        "title": "Gewaltherrschaft Stalins",
        "folder": "gewaltherrschaft-stalins-3006"
      },
      {
        "id": "3015",
        "title": "Josef Stalin",
        "folder": "josef-stalin-3015"
      },
      {
        "id": "3023",
        "title": "Karl Marx",
        "folder": "karl-marx-3023"
      },
      {
        "id": "3071",
        "title": "Die Geschichte Brasiliens",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-2-3071"
      },
      {
        "id": "3153",
        "title": "Der Atlantische Dreieckshandel",
        "folder": "der-atlantische-dreieckshandel-3153"
      },
      {
        "id": "3367",
        "title": "Industrialisierung und die Folgen",
        "folder": "industrialisierung-und-die-folgen-3367"
      },
      {
        "id": "4414",
        "title": "Karl Marx",
        "folder": "karl-marx-2-4414"
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
        "id": "5502",
        "title": "Industrialisierung und ihre Auswirkungen auf das Umweltmanagement",
        "folder": "industrialisierung-und-ihre-auswirkungen-auf-das-umweltmanagement-5502"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Industrielle%20Revolution%20%26%20Die%20Soziale%20Frage+geschichte&t=3752"
  },
  "vormaerz-und-revolution-1848": {
    "slug": "vormaerz-und-revolution-1848",
    "title": "Vormärz & Die Revolution von 1848/49",
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
        "id": "1866",
        "title": "Simbabwe",
        "folder": "simbabwe-1866"
      },
      {
        "id": "2376",
        "title": "Literaturepoche Vormärz",
        "folder": "literaturepoche-vormarz-2376"
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
        "id": "495",
        "title": "Das Jahr 1848",
        "folder": "gewasser-in-sterreich-495"
      },
      {
        "id": "4956",
        "title": "Das Jahr 1848",
        "folder": "1848-4956"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Vorm%C3%A4rz%20%26%20Die%20Revolution%20von%201848%2F49+geschichte&t=3752"
  },
  "otto-von-bismarck-und-deutsches-kaiserreich": {
    "slug": "otto-von-bismarck-und-deutsches-kaiserreich",
    "title": "Otto von Bismarck & Das Deutsche Kaiserreich",
    "category": "19. Jahrhundert & Deutsches Kaiserreich",
    "shortDesc": "Reichsgründung 1871 in Versailles, 'Eiserner Kanzler', Bündnissystem, Kulturkampf, Sozialistengesetze und Imperialismus.",
    "longDesc": "Der Imperialismus beschreibt das Streben von Staaten nach weltweiter Macht und politischem Einfluss. Insbesondere im Zeitraum von 1492 (Entdeckung Amerikas) bis nach dem Zweiten Weltkrieg teilten europäische Mächte große Teile der Welt unter sich auf und beuteten diese aus. Verschiedene Faktoren befeuerten den Imperialismus. Zum einen benötigten die Industriestaaten Europas billige Rohstoffe für ihre wachsende Produktion. Zum anderen suchten sie nach neuen Absatzmärkten für ihre produzierten Güter. Darüber hinaus spielten machtpolitische Überlegungen und der Glaube an die eigene kulturelle Überlegenheit eine bedeutende Rolle.",
    "keyPoints": [
      "Ausbeutung und Unterdrückung: Die europäischen Kolonialherren beuteten die Ressourcen und Arbeitskraft der indigenen Bevölkerung in den Kolonien rücksichtslos aus. Oftmals wurden die Einheimischen wie Sklaven behandelt und ihrer Rechte beraubt.",
      "Missionierung und „Zivilisierung“: Außerdem versuchten die Europäer, die kolonisierten Völker zum Christentum zu bekehren und ihre vermeintlich „unzivilisierten“ Lebensweisen zu „verbessern“.",
      "Territoriale Aufteilung: Schließlich teilten die europäischen Mächte die Welt unter sich auf, wobei Spanien, England und Frankreich die größten Kolonialreiche besaßen.",
      "Gründung des Kaisertums Österreich 1804",
      "Kriege gegen Napoleon mit Gebietsverlusten",
      "Vielvölkerstaat mit häufigen Aufständen",
      "Revolution von 1848 und ihre Folgen",
      "Bildung der Doppelmonarchie 1867"
    ],
    "exercises": [
      {
        "id": "346",
        "title": "Imperialismus",
        "folder": "imperialismus-346"
      },
      {
        "id": "350",
        "title": "Das österreichische Kaiserreich",
        "folder": "das-osterreichische-kaiserreich-2-350"
      },
      {
        "id": "886",
        "title": "Deutsche Kolonien",
        "folder": "deutsche-kolonien-886"
      },
      {
        "id": "2328",
        "title": "Die Außenpolitik des Deutschen Kaiserreichs",
        "folder": "die-auesenpolitik-des-deutschen-kaiserreichs-2328"
      },
      {
        "id": "2943",
        "title": "Die Doppelmonarchie Österreich-Ungarn",
        "folder": "die-doppelmonarchie-sterreich-ungarn-2943"
      },
      {
        "id": "2996",
        "title": "Elisabeth von Österreich-Ungarn",
        "folder": "elisabeth-von-sterreich-ungarn-2996"
      },
      {
        "id": "3021",
        "title": "Kaiser Wilhelm II.",
        "folder": "kaiser-wilhelm-ii-3021"
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
        "id": "3264",
        "title": "Kolonialisierung und Imperialismus",
        "folder": "kolonialisierung-und-imperialismus-3264"
      },
      {
        "id": "3347",
        "title": "Imperialismus",
        "folder": "imperialismus-2-3347"
      },
      {
        "id": "4152",
        "title": "Otto von Bismarck",
        "folder": "otto-von-bismarck-2-4152"
      },
      {
        "id": "5334",
        "title": "Das Österreichische Kaiserreich",
        "folder": "das-sterreichische-kaiserreich-5334"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Otto%20von%20Bismarck%20%26%20Das%20Deutsche%20Kaiserreich+geschichte&t=3752"
  },
  "der-erste-weltkrieg-1914-1918": {
    "slug": "der-erste-weltkrieg-1914-1918",
    "title": "Der Erste Weltkrieg (1914–1918)",
    "category": "Erster Weltkrieg & Zwischenkriegszeit",
    "shortDesc": "Attentat von Sarajevo, Julikrise, Schlieffen-Plan, Stellungskrieg bei Verdun, Materialschlachten und Versailler Vertrag.",
    "longDesc": "Der Erste Weltkrieg war ein globaler Konflikt, der von 1914 bis 1918 dauerte und zu mehr als 17 Millionen Todesfällen führte. Er war der Auslöser für eine Reihe von weiteren Konflikten im 20. Jahrhundert, darunter der Zweite Weltkrieg und der Kalte Krieg. Die Ursachen des Ersten Weltkriegs waren komplex und vielfältig, aber einige der bedeutendsten Faktoren waren: Der Auslöser des Ersten Weltkriegs war die Ermordung des österreichischen Thronfolgers Erzherzog Franz Ferdinand und seiner Frau Sophie in Sarajevo am 28. Juni 1914. Österreich-Ungarn erließ daraufhin ein Ultimatum an Serbien, das Serbien nicht akzeptierte. Dies führte zur Kriegserklärung Österreich-Ungarns an Serbien.",
    "keyPoints": [
      "Nationalismus: Viele Nationen in Europa glaubten, dass sie ein Recht auf ein eigenes Territorium und eine eigene Regierung haben. Dies führte zu Spannungen zwischen verschiedenen Gruppen, insbesondere zwischen den Deutschen und den Franzosen.",
      "Imperialismus: Die europäischen Mächte waren bestrebt, ihre Kolonien in Afrika und Asien zu erweitern. Dies führte zu Konflikten zwischen den verschiedenen Mächten, insbesondere zwischen Großbritannien und Deutschland.",
      "Militärismus: Die europäischen Mächte investierten massiv in ihre Armeen und Marinen. Dies führte zu einem Wettrüsten, das die Spannungen weiter verschärfte.",
      "Allianzen: Die europäischen Mächte bildeten Allianzen, um sich gegenseitig zu schützen. Dies führte zu einem System von Bündnissen, das es schwierig machte, Konflikte zu lösen.",
      "Kriegsbegeisterung zu Beginn, später Ernüchterung durch den Stellungskrieg",
      "Einsatz neuer Waffen wie Panzer, Giftgas und U-Boote",
      "Hungersnöte und wirtschaftliche Engpässe durch Ressourcenknappheit",
      "Kriegsschauplätze nicht nur in Europa, sondern auch in Afrika und Asien"
    ],
    "exercises": [
      {
        "id": "351",
        "title": "Der Erste Weltkrieg - Gründe und Auslöser",
        "folder": "der-erste-weltkrieg-grunde-und-ausloser-351"
      },
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
        "id": "2301",
        "title": "Charles de Gaulle",
        "folder": "charles-de-gaulle-2301"
      },
      {
        "id": "2302",
        "title": "Das Attentat von Sarajevo",
        "folder": "das-attentat-von-sarajevo-2302"
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
        "id": "2889",
        "title": "Arbeitslosigkeit nach dem Ersten Weltkrieg",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-2889"
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
        "id": "3003",
        "title": "Geschichte des Frauenwahlrechts",
        "folder": "geschichte-des-frauenwahlrechts-3003"
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
        "id": "3024",
        "title": "Karl Renner",
        "folder": "karl-renner-3024"
      },
      {
        "id": "3068",
        "title": "Wladimir Iljitsch Lenin",
        "folder": "wladimir-iljitsch-lenin-3068"
      },
      {
        "id": "3171",
        "title": "Die USA im Ersten Weltkrieg",
        "folder": "die-usa-im-ersten-weltkrieg-3171"
      },
      {
        "id": "3304",
        "title": "Österreich im Ersten Weltkrieg",
        "folder": "sterreich-im-ersten-weltkrieg-3304"
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
        "id": "3090",
        "title": "Die Hohenzollern",
        "folder": "die-hohenzoller-3090"
      },
      {
        "id": "3091",
        "title": "Geschichte Dänemarks",
        "folder": "geschichte-danemarks-3091"
      },
      {
        "id": "3106",
        "title": "Die Heimsuchung - 1912 - Vorkriegszeit des Ersten Weltkriegs und Antisemitismus",
        "folder": "die-heimsuchung-1912-vorkriegszeit-des-ersten-weltkriegs-und-antisemitismus-3106"
      },
      {
        "id": "3081",
        "title": "Der Gemeindebau - sozialer Wohnbau in Wien",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-12-3081"
      },
      {
        "id": "3080",
        "title": "Arbeitslosigkeit nach dem Ersten Weltkrieg",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-11-3080"
      },
      {
        "id": "3075",
        "title": "Deutsche Gebietsverluste nach dem Ersten Weltkrieg",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-6-3075"
      },
      {
        "id": "3066",
        "title": "Wettrüsten und Blockbildung vor dem Ersten Weltkrieg",
        "folder": "wettrusten-und-blockbildung-vor-dem-ersten-weltkrieg-3066"
      },
      {
        "id": "5337",
        "title": "Der Erste Weltkrieg",
        "folder": "der-erste-weltkrieg-5337"
      },
      {
        "id": "5406",
        "title": "Was wäre, wenn Deutschland den Ersten Weltkrieg gewonnen hätte …",
        "folder": "was-ware-wenn-deutschland-den-ersten-weltkrieg-gewonnen-hatte-5406"
      },
      {
        "id": "5422",
        "title": "Was wäre, wenn Österreich-Ungarn den Ersten Weltkrieg überlebt hätte …",
        "folder": "was-ware-wenn-sterreich-ungarn-den-ersten-weltkrieg-uberlebt-hatte-5422"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Der%20Erste%20Weltkrieg%20(1914%E2%80%931918)+geschichte&t=3752"
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
        "id": "3326",
        "title": "Die Weimarer Republik",
        "folder": "die-weimarer-republik-2-3326"
      },
      {
        "id": "3067",
        "title": "Wirtschaft der Weimarer Republik",
        "folder": "wirtschaft-der-weimarer-republik-3067"
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
        "id": "2924",
        "title": "Der Reichsarbeitsdienst",
        "folder": "der-reichsarbeitsdienst-2924"
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
        "id": "2970",
        "title": "Die Olympischen Spiele 1936",
        "folder": "die-olympischen-spiele-1936-2970"
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
        "id": "3051",
        "title": "Propaganda der NSDAP",
        "folder": "propaganda-der-nsdap-3051"
      },
      {
        "id": "3059",
        "title": "Schule im Nationalsozialismus",
        "folder": "schule-im-nationalsozialismus-3059"
      },
      {
        "id": "3610",
        "title": "Adolf Hitler",
        "folder": "adolf-hitler-2-3610"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Machtergreifung%2C%20NS-Ideologie%20%26%20F%C3%BChrerstaat+geschichte&t=3752"
  },
  "der-holocaust-und-die-judenverfolgung": {
    "slug": "der-holocaust-und-die-judenverfolgung",
    "title": "Der Holocaust & Die Verfolgung der Juden",
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
  "der-zweite-weltkrieg-1939-1945": {
    "slug": "der-zweite-weltkrieg-1939-1945",
    "title": "Der Zweite Weltkrieg (1939–1945)",
    "category": "Nationalsozialismus & Zweiter Weltkrieg",
    "shortDesc": "Überfall auf Polen, Blitzkriege, Angriff auf die UdSSR, Schlacht um Stalingrad, D-Day und bedingungslose Kapitulation 1945.",
    "longDesc": "Der Weg in den Zweiten Weltkrieg war geprägt von aggressiver Aufrüstung, territorialer Expansion und politischen Fehleinschätzungen. Die Achsenmächte, allen voran das Deutsche Reich, sorgten für zunehmende Spannungen in Europa. Schließlich eskalierten die Konflikte, und der Krieg brach aus. In den Jahren vor dem Zweiten Weltkrieg verstärkten die Achsenmächte ihre militärische Präsenz erheblich. Deutschland führte die Wehrpflicht wieder ein und rüstete massiv auf. Italien griff Äthiopien an, während Japan einen Krieg gegen China führte. Gleichzeitig dehnte das Deutsche Reich sein Einflussgebiet aus, indem es Österreich annektierte und das Sudetenland besetzte. Besonders das Münchner Abkommen, das eine friedliche Lösung versprechen sollte, wurde schnell von Hitler gebrochen, als er Böhmen und Mähren besetzte. Der Weg in den Zweiten Weltkrieg war damit unumkehrbar.",
    "keyPoints": [
      "Die massive Aufrüstung des Deutschen Reiches",
      "Die aggressive Expansion in Europa",
      "Die Politik der Westmächte, die anfangs beschwichtigend reagierten",
      "Der deutsch-sowjetische Nichtangriffspakt mit geheimer Gebietsaufteilung Polens",
      "Der Überfall auf Polen am 1. September 1939",
      "Die Kriegserklärung Englands und Frankreichs an Deutschland",
      "Deutsche Expansion bereits vor Kriegsbeginn",
      "Blitzkrieg in Polen, Frankreich und anderen Ländern"
    ],
    "exercises": [
      {
        "id": "421",
        "title": "Der Weg in den Zweiten Weltkrieg",
        "folder": "der-weg-in-den-zweiten-weltkrieg-421"
      },
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
        "id": "697",
        "title": "studypoint - multiple choice - Zweiter Weltkrieg",
        "folder": "studypoint-multiple-choice-zweiter-weltkrieg-697"
      },
      {
        "id": "741",
        "title": "Unabhängigkeit der Teilrepubliken Jugoslawiens",
        "folder": "unabhangigkeit-der-teilrepubliken-jugoslawiens-741"
      },
      {
        "id": "893",
        "title": "Konrad Adenauer",
        "folder": "konrad-adenauer-893"
      },
      {
        "id": "895",
        "title": "Willy Brandt",
        "folder": "willy-brandt-895"
      },
      {
        "id": "899",
        "title": "Der Prager Frühling",
        "folder": "der-prager-fruhling-899"
      },
      {
        "id": "953",
        "title": "Die UNO",
        "folder": "die-uno-953"
      },
      {
        "id": "2335",
        "title": "Die Genfer Flüchtlingskonvention",
        "folder": "die-genfer-fluchtlingskonvention-2335"
      },
      {
        "id": "2362",
        "title": "Hitlers Außenpolitik",
        "folder": "hitlers-auesenpolitik-2362"
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
        "id": "2910",
        "title": "Der Angriff des Deutschen Reiches auf die Sowjetunion",
        "folder": "der-angriff-des-deutschen-reiches-auf-die-sowjetunion-2910"
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
        "id": "2939",
        "title": "Die Allgemeine Erklärung der Menschenrechte",
        "folder": "die-allgemeine-erklarung-der-menschenrechte-2939"
      },
      {
        "id": "2944",
        "title": "Die Entkolonialisierung in Afrika",
        "folder": "die-entkolonialisierung-in-afrika-2944"
      },
      {
        "id": "2945",
        "title": "Die Entkolonialisierung in Asien",
        "folder": "die-entkolonialisierung-in-asien-2945"
      },
      {
        "id": "2949",
        "title": "Die erste Atombombe",
        "folder": "die-erste-atombombe-2949"
      },
      {
        "id": "2964",
        "title": "Die Luftschlacht um England",
        "folder": "die-luftschlacht-um-england-2964"
      },
      {
        "id": "2965",
        "title": "Die Moskauer Deklaration und die Konferenz in Jalta",
        "folder": "die-moskauer-deklaration-und-die-konferenz-in-jalta-2965"
      },
      {
        "id": "2986",
        "title": "Die UNICEF",
        "folder": "die-unicef-2986"
      },
      {
        "id": "2995",
        "title": "Einmarsch deutscher Truppen in Böhmen und Mähren",
        "folder": "einmarsch-deutscher-truppen-in-bohmen-und-mahren-2995"
      },
      {
        "id": "3004",
        "title": "Geschichte von Hollywood",
        "folder": "geschichte-von-hollywood-3004"
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
        "id": "3039",
        "title": "Nichtangriffspakt Hitlers mit Stalin",
        "folder": "nichtangriffspakt-hitlers-mit-stalin-3039"
      },
      {
        "id": "3040",
        "title": "Nikita Chruschtschow",
        "folder": "nikita-chruschtschow-3040"
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
        "id": "3064",
        "title": "Vertreibung nach dem Zweiten Weltkrieg",
        "folder": "vertreibung-nach-dem-zweiten-weltkrieg-3064"
      },
      {
        "id": "3305",
        "title": "Österreich im Zweiten Weltkrieg",
        "folder": "sterreich-im-zweiten-weltkrieg-3305"
      },
      {
        "id": "3307",
        "title": "Der Weg in den Zweiten Weltkrieg",
        "folder": "der-weg-in-den-zweiten-weltkrieg-2-3307"
      },
      {
        "id": "3317",
        "title": "Österreich nach dem Zweiten Weltkrieg",
        "folder": "sterreich-nach-dem-zweiten-weltkrieg-3317"
      },
      {
        "id": "3318",
        "title": "Beginn des Zweiten Weltkriegs",
        "folder": "beginn-des-zweiten-weltkriegs-3318"
      },
      {
        "id": "3319",
        "title": "Verlauf des Zweiten Weltkriegs",
        "folder": "verlauf-des-zweiten-weltkriegs-3319"
      },
      {
        "id": "3320",
        "title": "Ende und Folgen des Zweiten Weltkriegs",
        "folder": "ende-und-folgen-des-zweiten-weltkriegs-3320"
      },
      {
        "id": "3337",
        "title": "Kriege der USA nach dem Zweiten Weltkrieg",
        "folder": "kriege-der-usa-nach-dem-zweiten-weltkrieg-3337"
      },
      {
        "id": "3077",
        "title": "Die Berlinblockade und die Luftbrücke",
        "folder": "arbeitslosigkeit-nach-dem-ersten-weltkrieg-8-3077"
      },
      {
        "id": "5341",
        "title": "Der Zweite Weltkrieg",
        "folder": "der-zweite-weltkrieg-5341"
      },
      {
        "id": "5407",
        "title": "Was wäre, wenn Deutschland den Zweiten Weltkrieg gewonnen hätte …",
        "folder": "was-ware-wenn-deutschland-den-zweiten-weltkrieg-gewonnen-hatte-5407"
      },
      {
        "id": "5414",
        "title": "Was wäre, wenn die USA nie in den Zweiten Weltkrieg eingetreten wären …",
        "folder": "was-ware-wenn-die-usa-nie-in-den-zweiten-weltkrieg-eingetreten-waren-5414"
      },
      {
        "id": "6579",
        "title": "Der Vatikan im Zweiten Weltkrieg",
        "folder": "der-vatikan-im-zweiten-weltkrieg-6579"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Der%20Zweite%20Weltkrieg%20(1939%E2%80%931945)+geschichte&t=3752"
  },
  "widerstand-im-nationalsozialismus": {
    "slug": "widerstand-im-nationalsozialismus",
    "title": "Widerstand im Nationalsozialismus",
    "category": "Nationalsozialismus & Zweiter Weltkrieg",
    "shortDesc": "Die Weiße Rose (Geschwister Scholl), Stauffenberg-Attentat vom 20. Juli 1944, Edelweißpiraten und kirchlicher Widerstand.",
    "longDesc": "Die Geschichte Südafrikas ist geprägt von dunklen Kapiteln – eines davon ist die Apartheid. Jahrzehntelang bestimmten strenge Trennungsgesetze das Leben der Menschen. Dabei entstand ein System, das viele Ungerechtigkeiten festigte und tiefgreifende Spuren hinterließ. Die Apartheid in Südafrika war ein politisches System, das Menschen anhand ihrer Hautfarbe voneinander trennte. Dabei entstanden unterschiedliche Lebenswelten für Schwarze und Weiße. Schulen, Krankenhäuser oder Verkehrsmittel – alles war strikt nach Hautfarbe geregelt. Die Lebensbedingungen der schwarzen Bevölkerung waren dadurch massiv eingeschränkt. Der Begriff „Apartheid“ stammt aus dem Afrikaans und bedeutet „Getrenntheit“. Frederik Willem de Klerk und Nelson Mandela spielten später zentrale Rollen im Übergang zur Demokratie. Auch wenn die Apartheid offiziell endete, spüren viele Menschen die Folgen bis heute.",
    "keyPoints": [
      "Apartheid bedeutete die strikte Trennung nach Hautfarbe",
      "Schwarze Menschen lebten oft in sogenannten „Homelands“",
      "Öffentliche Einrichtungen waren nach Rassen getrennt",
      "Die Einrichtungen für Weiße waren meist deutlich besser",
      "Viele wehrten sich mit Streiks und Demonstrationen",
      "Nelson Mandela wurde Symbolfigur des Widerstands",
      "Internationale Sanktionen trafen das Apartheid-Regime",
      "1994 wurde Mandela zum Präsidenten gewählt"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Nachkriegszeit%2C%20Stunde%20Null%20%26%20Besatzungszonen+geschichte&t=3752"
  },
  "der-kalte-krieg-und-globale-konflikte": {
    "slug": "der-kalte-krieg-und-globale-konflikte",
    "title": "Der Kalte Krieg & Globale Konflikte",
    "category": "Kalter Krieg & Deutsche Teilung",
    "shortDesc": "Ost-West-Konflikt, NATO vs. Warschauer Pakt, nukleares Wettrüsten, Kuba-Krise, Vietnam, Korea und Wettlauf ins All.",
    "longDesc": "Der Kalte Krieg prägte über Jahrzehnte die Weltpolitik und führte zu einer anhaltenden Konfrontation zwischen den USA und der UdSSR. Dabei ging es nicht nur um Ideologien, sondern auch um Macht, Einfluss und technologische Überlegenheit. Diese Spannungen reichten von politischen Krisen bis hin zu gefährlichen militärischen Drohgebärden. Dennoch kam es nie zu einem direkten Krieg zwischen den Supermächten. Während des Kalten Krieges standen sich zwei feindliche Lager gegenüber. Die NATO, angeführt von den USA, umfasste westliche Demokratien, während der Warschauer Pakt, dominiert von der UdSSR, sozialistische Staaten einschloss. Dadurch entstanden zahlreiche Spannungen, die zu Stellvertreterkriegen führten. Beispielsweise kämpften die USA in Korea und Vietnam gegen kommunistische Kräfte, während die UdSSR in anderen Regionen Einfluss ausbaute. Außerdem symbolisierte der Eiserne Vorhang die tiefe Spaltung Europas. Besonders drastisch zeigte sich das in Deutschland, wo die Berliner Mauer Ost und West trennte.",
    "keyPoints": [
      "Stellvertreterkriege in Korea und Vietnam, wodurch sich der Konflikt weltweit ausweitete",
      "Raumfahrtwettlauf mit Sputnik und der Mondlandung, sodass beide Seiten technologische Dominanz anstrebten",
      "Kubakrise als gefährlichster Moment, da die Welt am Rande eines Atomkriegs stand",
      "Wettrüsten zwischen den USA und der UdSSR, weshalb beide Staaten immer mehr aufrüsteten",
      "Aufteilung Deutschlands durch die Berliner Mauer, wodurch Familien über Jahrzehnte getrennt wurden",
      "Ende des Kalten Krieges mit dem Zerfall der UdSSR, weshalb sich das geopolitische Gleichgewicht veränderte",
      "Neutrale Staaten wie Österreich und die Schweiz, die daher zwischen beiden Blöcken vermittelten",
      "Stellvertreterkrieg zwischen den USA und der UdSSR"
    ],
    "exercises": [
      {
        "id": "613",
        "title": "Der Kalte Krieg",
        "folder": "der-kalte-krieg-613"
      },
      {
        "id": "614",
        "title": "Der Vietnamkrieg",
        "folder": "der-vietnamkrieg-614"
      },
      {
        "id": "898",
        "title": "Die Kuba-Krise",
        "folder": "die-kuba-krise-898"
      },
      {
        "id": "909",
        "title": "Der Koreakrieg und seine Folgen",
        "folder": "der-koreakrieg-und-seine-folgen-909"
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
        "id": "2916",
        "title": "Der erste, zweite und dritte Golfkrieg",
        "folder": "der-erste-zweite-und-dritte-golfkrieg-2916"
      },
      {
        "id": "2919",
        "title": "DIE IAEO",
        "folder": "der-iaeo-2919"
      },
      {
        "id": "2933",
        "title": "Der Ungarnaufstand 1956",
        "folder": "der-ungarnaufstand-1956-2933"
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
        "id": "2942",
        "title": "Die Diktatur Nikkolae Ceausescus",
        "folder": "die-diktatur-nikkolae-ceausescus-2942"
      },
      {
        "id": "2962",
        "title": "Die Krimkrise 2015",
        "folder": "die-krimkrise-2015-2962"
      },
      {
        "id": "3056",
        "title": "Saddam Hussein",
        "folder": "saddam-hussein-3056"
      },
      {
        "id": "3062",
        "title": "Studentenunruhen 1968",
        "folder": "studentenunruhen-1968-3062"
      },
      {
        "id": "3341",
        "title": "Ende des Kalten Krieges",
        "folder": "ende-des-kalten-krieges-3341"
      },
      {
        "id": "5420",
        "title": "Was wäre, wenn immer noch Kalter Kriege wäre …",
        "folder": "was-ware-wenn-immer-noch-kalter-kriege-ware-5420"
      },
      {
        "id": "5413",
        "title": "Was wäre, wenn die UdSSR den Kalten Krieg gewonnen hätte …",
        "folder": "was-ware-wenn-die-udssr-den-kalten-krieg-gewonnen-hatte-5413"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Der%20Kalte%20Krieg%20%26%20Globale%20Konflikte+geschichte&t=3752"
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
        "title": "Der Bau der Berliner Mauer 1961",
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
        "title": "Schule und Bildung in der DDR",
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
        "title": "Opposition und Bürgerrechtsbewegung in der DDR",
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
        "id": "5416",
        "title": "Was wäre, wenn es die DDR immer noch geben würde …",
        "folder": "was-ware-wenn-es-die-ddr-immer-noch-geben-wurde-5416"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Friedliche%20Revolution%20%26%20Wiedervereinigung%201989%2F90+geschichte&t=3752"
  }
};
