export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface GeographieTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const geographieCategories = [
  "Österreich & Alpenraum",
  "Deutschland & Mitteleuropa",
  "Die Schweiz",
  "Europa & Die EU",
  "Kontinente & Weltregionen",
  "Physische Geographie & Erde",
  "Kultur-, Stadt- & Wirtschaftsgeographie"
];

export const geographieTopics: Record<string, GeographieTopic> = {
  "geographie-oesterreichs": {
    "slug": "geographie-oesterreichs",
    "title": "Geographie Österreichs: Topographie & Wirtschaft",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Die 9 Bundesländer, Großlandschaften, Wirtschaftsräume und Österreich als Transitland.",
    "longDesc": "Österreich ist ein mitteleuropäischer Binnenstaat mit ausgeprägter alpiner Landschaft. Die 9 Bundesländer gliedern sich in fünf charakteristische Großlandschaften von den Hochalpen bis zum Wiener Becken.",
    "keyPoints": [
      "5 Großlandschaften: Alpen (ca. 63 %), Granit- und Gneishochland, Karpatenvorland, Wiener Becken, Ostvorland",
      "Höchster Gipfel: Großglockner (3.798 m) | Hauptstrom: Donau",
      "Wirtschaft & Industrie: Wichtige Industrieräume, Dienstleistungssektor und starker Tourismus",
      "Transitland: Zentrale Lage im Herzen Europas mit alpinen Nord-Süd-Verkehrsachsen"
],
    "exercises": [
      { "id": "414", "title": "Bundesländer und Wichtige Städte Österreichs", "folder": "bundeslander-und-wichtige-stadte-sterreichs-414" },
      { "id": "488", "title": "Alpen", "folder": "alpen-488" },
      { "id": "494", "title": "Wirtschaft in Österreich", "folder": "wirtschaft-in-sterreich-494" },
      { "id": "498", "title": "Klima und Wetter Österreichs", "folder": "klima-und-wetter-sterreichs-2-498" },
      { "id": "499", "title": "Bevölkerung Österreichs", "folder": "bevolkerung-sterreichs-2-499" },
      { "id": "2061", "title": "Bevölkerungsentwicklung in Österreich", "folder": "bevolkerungsentwicklung-in-sterreich-2061" },
      { "id": "2062", "title": "Österreich als Transitland", "folder": "sterreich-als-transitland-2062" },
      { "id": "2063", "title": "Industrieräume in Österreihch", "folder": "industrieraume-in-sterreihch-2063" },
      { "id": "1813", "title": "Österreich", "folder": "sterreich-1813" },
      { "id": "496", "title": "Klima und wetter sterreichs", "folder": "klima-und-wetter-sterreichs-496" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geographie+oesterreich&t=3752"
  },
  "oesterreich-bundeslaender-und-landschaften": {
    "slug": "oesterreich-bundeslaender-und-landschaften",
    "title": "Österreich: Bundesländer, Regionen & Nationalparks",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Von Ober- und Niederösterreich über das Innviertel bis zum Nationalpark Seewinkel und den Donau-Auen.",
    "longDesc": "Die Vielfalt Österreichs zeigt sich in seinen Bundesländern und einzigartigen Naturräumen: Vom Bregenzerwald in Vorarlberg über das oberösterreichische Innviertel bis zu den pannonischen Tiefebenen des Burgenlands.",
    "keyPoints": [
      "Bundesländer-Überblick: 9 eigenständige Bundesländer mit regionalen Besonderheiten",
      "Landschaftsformen: Karpatenvorland, Granithochland des Mühl- und Waldviertels sowie das Wiener Becken",
      "Nationalparks: Hohe Tauern, Kalkalpen, Thayatal, Donau-Auen und Neusiedler See-Seewinkel",
      "Kulturlandschaften: Traditionelle Bewirtschaftung, Weinbaugebiete und geschützte Feuchtgebiete"
],
    "exercises": [
      { "id": "489", "title": "Alpen und Karpatenvorland", "folder": "alpen-und-karpatenvorland-489" },
      { "id": "490", "title": "Wiener Becken", "folder": "wiener-becken-490" },
      { "id": "491", "title": "Granit und Gneishochland", "folder": "granit-und-gneishochland-491" },
      { "id": "492", "title": "Vorland im Osten und Südosten", "folder": "vorland-im-osten-und-sudosten-492" },
      { "id": "1199", "title": "Nationalparks in Österreich", "folder": "test-5-1199" },
      { "id": "480", "title": "Oberosterreich", "folder": "oberosterreich-480" },
      { "id": "481", "title": "Niederosterreich", "folder": "niederosterreich-481" },
      { "id": "5627", "title": "Der bregenzerwald", "folder": "der-bregenzerwald-5627" },
      { "id": "5669", "title": "Die geschichte niederosterreichs", "folder": "die-geschichte-niederosterreichs-5669" },
      { "id": "5670", "title": "Die geschichte oberosterreichs", "folder": "die-geschichte-oberosterreichs-5670" },
      { "id": "3236", "title": "Escape room quot groeslandschaften sterreichs quot", "folder": "escape-room-quot-groeslandschaften-sterreichs-quot-3236" },
      { "id": "5593", "title": "Das innviertel", "folder": "das-innviertel-5593" },
      { "id": "5642", "title": "Der nationalpark kalkalpen", "folder": "der-nationalpark-kalkalpen-5642" },
      { "id": "5660", "title": "Die donau auen", "folder": "die-donau-auen-5660" },
      { "id": "5717", "title": "Nationalpark seewinkel", "folder": "nationalpark-seewinkel-5717" },
      { "id": "133", "title": "Bundeslander sterreich einfach", "folder": "bundeslander-sterreich-einfach-133" },
      { "id": "134", "title": "Bundeslander sterreich schwer", "folder": "bundeslander-sterreich-schwer-134" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=oesterreich+bundeslaender&t=3752"
  },
  "wien-bundeshauptstadt-und-metropole": {
    "slug": "wien-bundeshauptstadt-und-metropole",
    "title": "Wien: Bundeshauptstadt, Bezirke & Metropole",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Innere Stadt, Ringstraße, Donauinsel, Kaffeehauskultur, UNO-City und Lebensqualität.",
    "longDesc": "Wien ist Bundeshauptstadt und zugleich Bundesland Österreichs. Die Millionenmetropole an der Donau verbindet reiches imperiales Erbe mit moderner Stadtplanung, hoher Lebensqualität und internationaler Bedeutung als UN-Sitz.",
    "keyPoints": [
      "Innere Stadt (1. Bezirk): Historisches Herz mit Stephansdom, Hofburg und Ringstraße",
      "Gewässer & Erholung: Donaukanal, Donauturm, Donauinsel, Wienfluss und der Grüngürtel Wienerwald",
      "Kultur & Lebensart: Wiener Kaffeehauskultur, traditionelle Küche, Musikverein und Zentralfriedhof",
      "Moderne Metropole: UNO-City als internationaler Konferenzstandort und das dichte U-Bahn-Netz der Wiener Linien"
],
    "exercises": [
      { "id": "1451", "title": "Wien 2", "folder": "wien-2-1451" },
      { "id": "5631", "title": "Der flughafen wien schwechat", "folder": "der-flughafen-wien-schwechat-5631" },
      { "id": "5650", "title": "Der wiener musikverein", "folder": "der-wiener-musikverein-5650" },
      { "id": "5651", "title": "Der wiener naschmarkt", "folder": "der-wiener-naschmarkt-5651" },
      { "id": "5652", "title": "Der wiener zentralfriedhof", "folder": "der-wiener-zentralfriedhof-5652" },
      { "id": "5653", "title": "Der wienerwald", "folder": "der-wienerwald-5653" },
      { "id": "5673", "title": "Die geschichte wiens", "folder": "die-geschichte-wiens-5673" },
      { "id": "5695", "title": "Die uno city wien", "folder": "die-uno-city-wien-5695" },
      { "id": "5697", "title": "Die wiener kaffeehauskultur", "folder": "die-wiener-kaffeehauskultur-5697" },
      { "id": "5698", "title": "Die wiener kuche", "folder": "die-wiener-kuche-5698" },
      { "id": "5699", "title": "Die wiener linien", "folder": "die-wiener-linien-5699" },
      { "id": "5700", "title": "Die wiener ringstraese", "folder": "die-wiener-ringstraese-5700" },
      { "id": "5727", "title": "Wien innere stadt der 1 bezirk", "folder": "wien-innere-stadt-der-1-bezirk-5727" },
      { "id": "6134", "title": "Wien 3", "folder": "wien-3-6134" },
      { "id": "5654", "title": "Der wien fluss", "folder": "der-wien-fluss-5654" },
      { "id": "5628", "title": "Der donaukanal", "folder": "der-donaukanal-5628" },
      { "id": "5629", "title": "Der donauturm", "folder": "der-donauturm-5629" },
      { "id": "5661", "title": "Die donauinsel", "folder": "die-donauinsel-5661" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wien+geographie&t=3752"
  },
  "oesterreichische-landeshauptstaedte": {
    "slug": "oesterreichische-landeshauptstaedte",
    "title": "Österreichische Landeshauptstädte",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Graz, Linz, Salzburg, Innsbruck, Klagenfurt, Bregenz und Eisenstadt im Stadtporträt.",
    "longDesc": "Die Landeshauptstädte der österreichischen Bundesländer sind historische Zentren und moderne Wirtschafts- sowie Bildungsstandorte. Jede Stadt besitzt eine unverwechselbare geographische und kulturelle Identität.",
    "keyPoints": [
      "Graz: Zweitgrößte Stadt Österreichs mit Schlossberg, Uhrturm und UNESCO-Altstadt",
      "Linz & Salzburg: Linz an der Donau als Industrie- und Kulturstadt; Festspielstadt Salzburg an der Salzach",
      "Alpenstädte: Innsbruck im Inntal als Olympiastadt; Klagenfurt am Wörthersee; Bregenz am Bodensee",
      "Eisenstadt: Kleinste Landeshauptstadt am Fuße des Leithagebirges mit Schloss Esterházy"
],
    "exercises": [
      { "id": "1437", "title": "Bregenz", "folder": "bregenz-1437" },
      { "id": "1446", "title": "Innsbruck", "folder": "innsbruck-1446" },
      { "id": "1448", "title": "Salzburg 2", "folder": "salzburg-2-1448" },
      { "id": "1449", "title": "Linz", "folder": "linz-1449" },
      { "id": "1450", "title": "Graz", "folder": "graz-1450" },
      { "id": "5632", "title": "Der grazer uhrturm", "folder": "der-grazer-uhrturm-5632" },
      { "id": "5665", "title": "Die festung hohensalzburg", "folder": "die-festung-hohensalzburg-5665" },
      { "id": "5671", "title": "Die geschichte salzburgs", "folder": "die-geschichte-salzburgs-5671" },
      { "id": "5702", "title": "Eisenstadt", "folder": "eisenstadt-5702" },
      { "id": "5704", "title": "Graz 2", "folder": "graz-2-5704" },
      { "id": "5706", "title": "Innsbruck 2", "folder": "innsbruck-2-5706" },
      { "id": "5714", "title": "Linz 2", "folder": "linz-2-5714" },
      { "id": "5720", "title": "Salzburg stadt", "folder": "salzburg-stadt-5720" },
      { "id": "1445", "title": "Klagenfurt", "folder": "klagenfurt-1445" },
      { "id": "5709", "title": "Klagenfurt 2", "folder": "klagenfurt-2-5709" },
      { "id": "5721", "title": "Salzburg und ihre salzbergwerke", "folder": "salzburg-und-ihre-salzbergwerke-5721" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=landeshauptstaedte+oesterreich&t=3752"
  },
  "wiener-neustadt-stadtportraet": {
    "slug": "wiener-neustadt-stadtportraet",
    "title": "Wiener Neustadt: Stadtporträt & Geschichte",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Zweitgrößte Stadt Niederösterreichs: Theresianische Militärakademie, Industrie und Stadtgeschichte.",
    "longDesc": "Wiener Neustadt im Steinfeld wurde 1194 mit dem Lösegeld für Richard Löwenherz gegründet. Als alte Kaiserresidenz Friedrichs III. und moderner Bildungs- und Wirtschaftsstandort verbindet die Stadt Tradition mit Hightech.",
    "keyPoints": [
      "Gründung 1194: Planstadt unter Herzog Leopold V. mit dem Lösegeld des englischen Königs Richard Löwenherz",
      "Theresianische Militärakademie: Älteste Militärakademie der Welt, gegründet 1751 von Maria Theresia",
      "St. Georgs-Kathedrale: Grabstätte von Kaiser Maximilian I. („Der letzte Ritter“)",
      "Wirtschaft & Innovation: Historische Lokomotiv- und Flugzeugindustrie, heute MedAustron und Fachhochschulen"
],
    "exercises": [
      { "id": "5729", "title": "Wiener Neustadt - Überblick", "folder": "wiener-neustadt-3-5729" },
      { "id": "5730", "title": "Wiener Neustadt - Geschichte", "folder": "wiener-neustadt-4-5730" },
      { "id": "5731", "title": "Wiener Neustadt - Sehenswürdigkeiten", "folder": "wiener-neustadt-5-5731" },
      { "id": "5732", "title": "Wiener Neustadt - Wirtschaft & Kultur", "folder": "wiener-neustadt-6-5732" },
      { "id": "1440", "title": "Wiener neustadt", "folder": "wiener-neustadt-1440" },
      { "id": "5728", "title": "Wiener neustadt 2", "folder": "wiener-neustadt-2-5728" },
      { "id": "5733", "title": "Wiener neustadt 7", "folder": "wiener-neustadt-7-5733" },
      { "id": "5734", "title": "Wiener neustadt 8", "folder": "wiener-neustadt-8-5734" },
      { "id": "5735", "title": "Wiener neustadt 9", "folder": "wiener-neustadt-9-5735" },
      { "id": "5736", "title": "Wiener neustadt 10", "folder": "wiener-neustadt-10-5736" },
      { "id": "5737", "title": "Wiener neustadt 11", "folder": "wiener-neustadt-11-5737" },
      { "id": "5738", "title": "Wiener neustadt 12", "folder": "wiener-neustadt-12-5738" },
      { "id": "5739", "title": "Wiener neustadt 13", "folder": "wiener-neustadt-13-5739" },
      { "id": "5740", "title": "Wiener neustadt 14", "folder": "wiener-neustadt-14-5740" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wiener+neustadt&t=3752"
  },
  "oesterreichische-staedte-und-bezirke": {
    "slug": "oesterreichische-staedte-und-bezirke",
    "title": "Österreichische Regionalstädte & Bezirke",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Baden bei Wien, Krems an der Donau und Braunau am Inn im geographischen Porträt.",
    "longDesc": "Abseits der Landeshauptstädte prägen traditionsreiche Regionalzentren die österreichische Städtelandschaft: Von der Kur- und Biedermeierstadt Baden über die Wachau-Pforte Krems bis zu den Innviertler Grenzstädten.",
    "keyPoints": [
      "Baden bei Wien: Bedeutende Kurstadt der Römerzeit und des Biedermeiers am Rand des Wienerwalds",
      "Krems an der Donau: Historische Handelsstadt und Tor zur UNESCO-Welterbelandschaft Wachau",
      "Braunau am Inn: Gotische Altstadt am bayerisch-oberösterreichischen Grenzfluss Inn",
      "Regionale Zentren: Wichtige Funktionen für Verwaltung, Bildung, Tourismus und Nahversorgung"
],
    "exercises": [
      { "id": "1551", "title": "Baden bei wien", "folder": "baden-bei-wien-1551" },
      { "id": "5581", "title": "Baden bei wien 2", "folder": "baden-bei-wien-2-5581" },
      { "id": "5710", "title": "Krems an der donau", "folder": "krems-an-der-donau-5710" },
      { "id": "1578", "title": "Braunau am inn", "folder": "braunau-am-inn-1578" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staedte+oesterreich&t=3752"
  },
  "oesterreich-alpen-und-gebirgsgipfel": {
    "slug": "oesterreich-alpen-und-gebirgsgipfel",
    "title": "Österreich: Alpen & Gebirgsgipfel",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Großglockner, Hohe Tauern, Kaisergebirge, Silvretta, Ötztaler & Zillertaler Alpen.",
    "longDesc": "Über 60 Prozent des österreichischen Staatsgebiets entfallen auf die Alpen. Gewaltige Dreitausender, markante Kalkgipfel und tiefe alpine Täler prägen Relief, Klima und Lebensraum im Alpenbogen.",
    "keyPoints": [
      "Höchste Gipfel: Großglockner (3.798 m) und Wildspitze (3.768 m) in den Hohen Tauern und Ötztaler Alpen",
      "Großgebirge: Zentralalpen (Kristallingestein) vs. Nördliche und Südliche Kalkalpen (Kalk/Dolomit)",
      "Markante Massive: Kaisergebirge, Silvretta, Stubaier Alpen, Karnische Alpen und Ennstaler Alpen",
      "Täler & Pässe: Inntal, Vorarlberger Rheintal, Zillertal und Brennerpass als Lebensadern"
],
    "exercises": [
      { "id": "493", "title": "Gebirge in Österreich", "folder": "gebirge-in-sterreich-493" },
      { "id": "1996", "title": "Der Großglockner", "folder": "der-groesglockner-1996" },
      { "id": "1998", "title": "Die Hohen Tauern", "folder": "die-hohen-tauern-1998" },
      { "id": "5594", "title": "Das kaisergebirge", "folder": "das-kaisergebirge-5594" },
      { "id": "5616", "title": "Das silvretta gebirge", "folder": "das-silvretta-gebirge-5616" },
      { "id": "5620", "title": "Das vorarlberger rheintal", "folder": "das-vorarlberger-rheintal-5620" },
      { "id": "5592", "title": "Das inntal", "folder": "das-inntal-5592" },
      { "id": "5598", "title": "Das lechtal und die lechtaler alpen", "folder": "das-lechtal-und-die-lechtaler-alpen-5598" },
      { "id": "5611", "title": "Das ztal und die ztaler alpen", "folder": "das-ztal-und-die-ztaler-alpen-5611" },
      { "id": "5617", "title": "Das stubaital und die stubaier alpen", "folder": "das-stubaital-und-die-stubaier-alpen-5617" },
      { "id": "5623", "title": "Das zilleretal und die zillertaler alpen", "folder": "das-zilleretal-und-die-zillertaler-alpen-5623" },
      { "id": "5664", "title": "Die ennstaler alpen", "folder": "die-ennstaler-alpen-5664" },
      { "id": "5674", "title": "Die gurktaler alpen", "folder": "die-gurktaler-alpen-5674" },
      { "id": "5679", "title": "Die karnischen alpen", "folder": "die-karnischen-alpen-5679" },
      { "id": "5680", "title": "Die kitzbuhler alpen", "folder": "die-kitzbuhler-alpen-5680" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=alpen+oesterreich&t=3752"
  },
  "oesterreich-fluesse-und-seen": {
    "slug": "oesterreich-fluesse-und-seen",
    "title": "Österreich: Flüsse & Seen",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Donau, Mur, Inn, Bregenzer Ach, Achensee, Attersee, Wörthersee und Neusiedler See.",
    "longDesc": "Österreich ist reich an Gewässern: Von der Donau als mächtigster mitteleuropäischer Stromachse über reißende Alpenflüsse bis hin zu den eiszeitlichen Salzkammergutseen und dem pannonischen Steppensee.",
    "keyPoints": [
      "Donau: Rund 350 km Flusslauf in Österreich, wichtigste Binnenschifffahrtsstraße und Wasserkraftquelle",
      "Alpenflüsse: Inn, Mur, Drau, Enns und Bregenzer Ach mit alpinen Einzugsgebieten",
      "Salzkammergutseen: Attersee, Traunsee, Wolfgangsee und der sagenumwobene Hallstätter See",
      "Besondere Seen: Wörthersee und Millstätter See in Kärnten; Achensee in Tirol; Steppensee Neusiedler See"
],
    "exercises": [
      { "id": "495", "title": "Gewässer in Österreich", "folder": "gewasser-in-sterreich-495" },
      { "id": "5658", "title": "Die bregenzer ach", "folder": "die-bregenzer-ach-5658" },
      { "id": "5624", "title": "Der achensee", "folder": "der-achensee-5624" },
      { "id": "5626", "title": "Der attersee", "folder": "der-attersee-5626" },
      { "id": "5634", "title": "Der hallstatter see", "folder": "der-hallstatter-see-5634" },
      { "id": "5640", "title": "Der millstatter see", "folder": "der-millstatter-see-5640" },
      { "id": "5643", "title": "Der neusiedler see", "folder": "der-neusiedler-see-5643" },
      { "id": "5648", "title": "Der traunsee", "folder": "der-traunsee-5648" },
      { "id": "5655", "title": "Der wolfgangsee", "folder": "der-wolfgangsee-5655" },
      { "id": "5656", "title": "Der worthersee", "folder": "der-worthersee-5656" },
      { "id": "5659", "title": "Die donau in sterreich", "folder": "die-donau-in-sterreich-5659" },
      { "id": "5685", "title": "Die mur", "folder": "die-mur-5685" },
      { "id": "5636", "title": "Der inn", "folder": "der-inn-5636" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=fluesse+seen+oesterreich&t=3752"
  },
  "geographie-deutschlands": {
    "slug": "geographie-deutschlands",
    "title": "Geographie Deutschlands: Physische Geographie & Topographie",
    "category": "Deutschland & Mitteleuropa",
    "shortDesc": "16 Bundesländer, Hauptstädte, Großlandschaften von Nord- und Ostsee bis zur Zugspitze.",
    "longDesc": "Deutschland liegt im Herzen Europas und gliedert sich in vier große naturräumliche Zonen: Das Norddeutsche Tiefland, die Mittelgebirgszone, das Alpenvorland und die Bayerischen Alpen.",
    "keyPoints": [
      "16 Bundesländer: 13 Flächenländer und 3 Stadtstaaten (Berlin, Hamburg, Bremen)",
      "Großlandschaften: Norddeutsches Tiefland ➔ Mittelgebirge ➔ Alpenvorland ➔ Alpen",
      "Flusssysteme: Rhein, Elbe, Donau, Weser, Oder und Main",
      "Höchster Berg: Die Zugspitze im Wettersteingebirge (2.962 m)"
],
    "exercises": [
      { "id": "310", "title": "Geographie Deutschlands Gebirge Seen Flüsse Inseln und Halbinseln", "folder": "geographie-deutschlands-gebirge-seen-flusse-inseln-und-halbinseln-310" },
      { "id": "311", "title": "Bundesländer Deutschlands", "folder": "bundeslander-deutschlands-311" },
      { "id": "403", "title": "Städte Deutschlands", "folder": "stadte-deutschlands-2-403" },
      { "id": "2059", "title": "Bevölkerungsentwicklung in Deutschland", "folder": "bevolkerungsentwicklung-in-deutschland-2059" },
      { "id": "2060", "title": "Industrieräume in Deutschland", "folder": "industrieraume-in-deutschland-2060" },
      { "id": "1609", "title": "Deutschland", "folder": "deutschland-1609" },
      { "id": "137", "title": "Bundeslander deutschland", "folder": "bundeslander-deutschland-137" },
      { "id": "138", "title": "Bundeslander deutschland memory", "folder": "bundeslander-deutschland-memory-138" },
      { "id": "139", "title": "Hauptstadte der bundeslander deutschland", "folder": "hauptstadte-der-bundeslander-deutschland-139" },
      { "id": "215", "title": "Gewasser in deutschland flusse seen meere", "folder": "gewasser-in-deutschland-flusse-seen-meere-215" },
      { "id": "397", "title": "Stadte deutschlands", "folder": "stadte-deutschlands-397" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geographie+deutschland&t=3752"
  },
  "deutschland-bundeslaender-und-regionen": {
    "slug": "deutschland-bundeslaender-und-regionen",
    "title": "Deutschland: Bundesländer & Regionen",
    "category": "Deutschland & Mitteleuropa",
    "shortDesc": "Nordrhein-Westfalen, Rheinland-Pfalz, Regionalräume und Landschaftszonen.",
    "longDesc": "Die Bundesländer Deutschlands weisen große landschaftliche und wirtschaftliche Unterschiede auf: Vom dicht besiedelten Ballungsraum Ruhrgebiet bis zu den Weinbau- und Flusslandschaften von Rhein und Mosel.",
    "keyPoints": [
      "Nordrhein-Westfalen: Bevölkerungsreichstes Bundesland mit dem Ruhrgebiet und der Rheinschiene",
      "Rheinland-Pfalz: Weinbau an Rhein und Mosel, Pfälzerwald, Eifel und Hunsrück",
      "Föderale Struktur: Eigenständige Landtage, Kultur- und Bildungshoheit der Bundesländer",
      "Regionale Identitäten: Dialekte, Wirtschaftsstrukturen und landschaftliche Eigenheiten"
],
    "exercises": [
      { "id": "962", "title": "Rheinland pfalz", "folder": "rheinland-pfalz-962" },
      { "id": "963", "title": "Nordrhein westfalen", "folder": "nordrhein-westfalen-963" },
      { "id": "1024", "title": "Rheinland pfalz 2", "folder": "rheinland-pfalz-2-1024" },
      { "id": "1046", "title": "Nordrhein westfalen 2", "folder": "nordrhein-westfalen-2-1046" },
      { "id": "1729", "title": "Langenfeld", "folder": "langenfeld-1729" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=deutschland+bundeslaender&t=3752"
  },
  "deutsche-grossstaedte-und-metropolen": {
    "slug": "deutsche-grossstaedte-und-metropolen",
    "title": "Deutsche Großstädte & Metropolen",
    "category": "Deutschland & Mitteleuropa",
    "shortDesc": "Berlin, Hamburg, Frankfurt am Main, Stuttgart, Dresden, Leipzig, Bremen und Hannover.",
    "longDesc": "Deutschlands Metropolen sind wirtschaftliche Motoren und historische Kulturzentren: Von der Bundeshauptstadt Berlin über die Hafenstadt Hamburg bis zum Finanzplatz Frankfurt am Main.",
    "keyPoints": [
      "Berlin: Bundeshauptstadt, Regierungssitz und größte Stadt mit bewegter Geschichte",
      "Hamburg & Bremen: Hansestädte mit Welthäfen und jahrhundertealter Seefahrtstradition",
      "Frankfurt & Stuttgart: Europäisches Finanzzentrum an der EZB bzw. Herz der Automobilindustrie",
      "Ostdeutsche Metropolen: Leipzig als Handels- und Messestadt; Dresden als barockes „Elbflorenz“"
],
    "exercises": [
      { "id": "1054", "title": "Bremen", "folder": "bremen-1054" },
      { "id": "1513", "title": "Hannover", "folder": "hannover-1513" },
      { "id": "1515", "title": "Bremen 2", "folder": "bremen-2-1515" },
      { "id": "1020", "title": "Berlin", "folder": "berlin-1020" },
      { "id": "1053", "title": "Hamburg", "folder": "hamburg-1053" },
      { "id": "1427", "title": "Berlin 2", "folder": "berlin-2-1427" },
      { "id": "1428", "title": "Hamburg 2", "folder": "hamburg-2-1428" },
      { "id": "1431", "title": "Frankfurt am main", "folder": "frankfurt-am-main-1431" },
      { "id": "1432", "title": "Stuttgart", "folder": "stuttgart-1432" },
      { "id": "1434", "title": "Stuttgart 2", "folder": "stuttgart-2-1434" },
      { "id": "1514", "title": "Dresden", "folder": "dresden-1514" },
      { "id": "1516", "title": "Leipzig", "folder": "leipzig-1516" },
      { "id": "1567", "title": "Berlin 3", "folder": "berlin-3-1567" },
      { "id": "1635", "title": "Frankfurt am main 2", "folder": "frankfurt-am-main-2-1635" },
      { "id": "1734", "title": "Leipzig 2", "folder": "leipzig-2-1734" },
      { "id": "1881", "title": "Stuttgart 3", "folder": "stuttgart-3-1881" },
      { "id": "5963", "title": "Berlin 4", "folder": "berlin-4-5963" },
      { "id": "6008", "title": "Hamburg 3", "folder": "hamburg-3-6008" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staedte+deutschland&t=3752"
  },
  "deutsche-staedte-im-profil": {
    "slug": "deutsche-staedte-im-profil",
    "title": "Deutsche Städte im Profil",
    "category": "Deutschland & Mitteleuropa",
    "shortDesc": "Kassel, Rostock, Mainz, Heidelberg, Darmstadt, Ingolstadt und Mittelzentren.",
    "longDesc": "Mittel- und Großstädte prägen das dicht gewobene Städtenetz Deutschlands. Jede Stadt zeichnet sich durch spezifische Funktionen in Wissenschaft, Kultur, Hafenwirtschaft oder Industrie aus.",
    "keyPoints": [
      "Kassel & Rostock: documenta-Stadt im hessischen Bergland bzw. traditionsreiche Ostsee-Universitätsstadt",
      "Mainz & Heidelberg: Gutenberg-Stadt am Rhein bzw. älteste Universitätsstadt Deutschlands am Neckar",
      "Darmstadt & Ingolstadt: Jugendstil- und Wissenschaftsstadt bzw. Automobil- und Industriestandort an der Donau",
      "Mittelzentren: Lebensqualität, Arbeitsplätze und Kultur in Neustadt, Filderstadt und Velbert"
],
    "exercises": [
      { "id": "1486", "title": "Kassel - Die documenta-Stadt", "folder": "kassel-1486" },
      { "id": "1487", "title": "Rostock - Hansestadt an der Ostsee", "folder": "rostock-1487" },
      { "id": "1488", "title": "Mainz - Landeshauptstadt am Rhein", "folder": "mainz-1488" },
      { "id": "1471", "title": "Ingolstadt", "folder": "ingolstadt-1471" },
      { "id": "1474", "title": "Darmstadt", "folder": "darmstadt-1474" },
      { "id": "1475", "title": "Heidelberg", "folder": "heidelberg-1475" },
      { "id": "1479", "title": "Ludwigshafen am rhein", "folder": "ludwigshafen-am-rhein-1479" },
      { "id": "1631", "title": "Filderstadt", "folder": "filderstadt-1631" },
      { "id": "1800", "title": "Neustadt an der weinstraese", "folder": "neustadt-an-der-weinstraese-1800" },
      { "id": "1919", "title": "Velbert", "folder": "velbert-1919" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=deutsche+staedte&t=3752"
  },
  "die-schweiz-kantone-mittelland-und-nordwestschweiz": {
    "slug": "die-schweiz-kantone-mittelland-und-nordwestschweiz",
    "title": "Die Schweiz: Kantone Mittelland & Nordwestschweiz",
    "category": "Die Schweiz",
    "shortDesc": "Zürich, Bern, Solothurn, Basel-Stadt, Basel-Landschaft und Aargau im Porträt.",
    "longDesc": "Das Schweizer Mittelland und die Nordwestschweiz bilden den wirtschaftlichen und bevölkerungsreichsten Kernraum der Eidgenossenschaft mit den Metropolen Zürich, Bern und Basel.",
    "keyPoints": [
      "Kanton Zürich: Bevölkerungsreichster Kanton mit der Wirtschafts- und Finanzmetropole Zürich",
      "Kanton Bern: Zweitgrößter Kanton von der Bundesstadt Bern bis ins Berner Oberland",
      "Die beiden Basel: Basel-Stadt als Life-Sciences-Zentrum am Rheinknie und Basel-Landschaft",
      "Aargau & Solothurn: Wichtige Industriekantone entlang der Aare und am Fuße des Juragebirges"
],
    "exercises": [
      { "id": "6307", "title": "Der Kanton Bern", "folder": "der-kanton-bern-6307" },
      { "id": "6327", "title": "Der Kanton Zürich", "folder": "der-kanton-zurich-6327" },
      { "id": "1560", "title": "Basel landschaft", "folder": "basel-landschaft-1560" },
      { "id": "1561", "title": "Basel stadt", "folder": "basel-stadt-1561" },
      { "id": "1568", "title": "Bern", "folder": "bern-1568" },
      { "id": "6304", "title": "Der kanton aargau", "folder": "der-kanton-aargau-6304" },
      { "id": "6306", "title": "Der kanton basel landschaft", "folder": "der-kanton-basel-landschaft-6306" },
      { "id": "6319", "title": "Der kanton solothurn", "folder": "der-kanton-solothurn-6319" },
      { "id": "6409", "title": "Der kanton basel landschaft 2", "folder": "der-kanton-basel-landschaft-2-6409" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+mittelland&t=3752"
  },
  "die-schweiz-kantone-romandie-tessin-und-graubuenden": {
    "slug": "die-schweiz-kantone-romandie-tessin-und-graubuenden",
    "title": "Die Schweiz: Kantone Romandie, Tessin & Graubünden",
    "category": "Die Schweiz",
    "shortDesc": "Waadt, Wallis, Neuenburg, Genf, Jura, Freiburg, Tessin und Graubünden.",
    "longDesc": "Die französisch-, italienisch- und rätoromanischsprachigen Kantone spiegeln die sprachliche und landschaftliche Vielfalt der Schweiz von den Genfer Palmen bis zu den Bündner Hochalpen wider.",
    "keyPoints": [
      "Romandie: Genf am Ausfluss der Rhone, Waadt am Genfersee, Neuenburg und der junge Kanton Jura",
      "Zweisprachig: Wallis mit mächtigen Viertausendern sowie Freiburg (Fribourg) an der Sprachgrenze",
      "Kanton Tessin: Sonnenstube der Schweiz mit mediterranem Flair südlich des Alpenhauptkamms",
      "Kanton Graubünden: Größter Kanton der Schweiz mit Dreisprachigkeit (Deutsch, Rätoromanisch, Italienisch)"
],
    "exercises": [
      { "id": "6311", "title": "Der Kanton Graubünden", "folder": "der-kanton-graubunden-6311" },
      { "id": "6325", "title": "Der Kanton Wallis", "folder": "der-kanton-wallis-6325" },
      { "id": "6321", "title": "Der Kanton Tessin", "folder": "der-kanton-tessin-6321" },
      { "id": "6309", "title": "Der Kanton Genf", "folder": "der-kanton-genf-6309" },
      { "id": "6308", "title": "Der kanton freiburg", "folder": "der-kanton-freiburg-6308" },
      { "id": "6312", "title": "Der kanton jura", "folder": "der-kanton-jura-6312" },
      { "id": "6314", "title": "Der kanton neuenburg", "folder": "der-kanton-neuenburg-6314" },
      { "id": "6324", "title": "Der kanton waadt", "folder": "der-kanton-waadt-6324" },
      { "id": "6353", "title": "Die kantone der schweiz", "folder": "die-kantone-der-schweiz-6353" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+romandie+tessin&t=3752"
  },
  "die-schweiz-kantone-zentral-und-ostschweiz": {
    "slug": "die-schweiz-kantone-zentral-und-ostschweiz",
    "title": "Die Schweiz: Kantone Zentral- & Ostschweiz",
    "category": "Die Schweiz",
    "shortDesc": "Luzern, Uri, Schwyz, Obwalden, Nidwalden, Glarus, Zug, St. Gallen, Appenzell & Thurgau.",
    "longDesc": "Die Zentral- und Ostschweiz ist die historische Wiege der Eidgenossenschaft: Vom Rütlischwur am Vierwaldstättersee über die Urkantone bis zum Bodensee und den Appenzeller Alpen.",
    "keyPoints": [
      "Urkantone: Uri, Schwyz und Unterwalden (Ob- und Nidwalden) als Keimzelle des Bundes von 1291",
      "Zentralschweiz: Luzern als Zentrum, Zug als wirtschaftsstarker Kanton am Zugersee",
      "Ostschweiz: St. Gallen mit berühmter Stiftsbibliothek, Thurgau als Apfelkanton und Glarus",
      "Appenzell: Die beiden Halbkantone Appenzell Ausserrhoden und Appenzell Innerrhoden"
],
    "exercises": [
      { "id": "1753", "title": "Luzern", "folder": "luzern-1753" },
      { "id": "6305", "title": "Der kanton appenzell ausserrhoden", "folder": "der-kanton-appenzell-ausserrhoden-6305" },
      { "id": "6310", "title": "Der kanton glarus", "folder": "der-kanton-glarus-6310" },
      { "id": "6313", "title": "Der kanton luzern", "folder": "der-kanton-luzern-6313" },
      { "id": "6315", "title": "Der kanton nidwalden", "folder": "der-kanton-nidwalden-6315" },
      { "id": "6316", "title": "Der kanton obwalden", "folder": "der-kanton-obwalden-6316" },
      { "id": "6317", "title": "Der kanton schaffhausen", "folder": "der-kanton-schaffhausen-6317" },
      { "id": "6318", "title": "Der kanton schwyz", "folder": "der-kanton-schwyz-6318" },
      { "id": "6320", "title": "Der kanton st gallen", "folder": "der-kanton-st-gallen-6320" },
      { "id": "6322", "title": "Der kanton thurgau", "folder": "der-kanton-thurgau-6322" },
      { "id": "6323", "title": "Der kanton uri", "folder": "der-kanton-uri-6323" },
      { "id": "6326", "title": "Der kanton zug", "folder": "der-kanton-zug-6326" },
      { "id": "6408", "title": "Der kanton appenzell innerrhoden", "folder": "der-kanton-appenzell-innerrhoden-6408" },
      { "id": "1964", "title": "Appenzell innerrhoden", "folder": "appenzell-innerrhoden-1964" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+kantone&t=3752"
  },
  "die-schweiz-politisches-system-und-staat": {
    "slug": "die-schweiz-politisches-system-und-staat",
    "title": "Die Schweiz: Politisches System, Demokratie & Neutralität",
    "category": "Die Schweiz",
    "shortDesc": "Direkte Demokratie, Bundesversammlung, Bürgerrecht, Föderalismus und Neutralität.",
    "longDesc": "Die Schweizerische Eidgenossenschaft zeichnet sich durch ein weltweit einzigartiges politisches Modell aus: Direkte Demokratie mit Volksabstimmungen, Kollegialregierung und gelebte dauernde Neutralität.",
    "keyPoints": [
      "Direkte Demokratie: Volksinitiative (Verfassungsänderung) und Referendum (Gesetzesprüfung)",
      "Bundesversammlung: Nationalrat (200 Sitze Volksvertretung) und Ständerat (46 Sitze Kantonsvertretung)",
      "Bundesrat: 7 gleichberechtigte Mitglieder als Kollegialregierung mit rotierendem Bundespräsidium",
      "Staatliche Grundsätze: Föderalismus, Schweizer Bürgerrecht, Milizsystem und Neutralität"
],
    "exercises": [
      { "id": "6292", "title": "Das politische System der Schweiz", "folder": "das-politische-system-der-schweiz-6292" },
      { "id": "6293", "title": "Das Schweizer Bürgerrecht", "folder": "das-schweizer-burgerrecht-6293" },
      { "id": "6391", "title": "Politische Parteien in der Schweiz", "folder": "politische-parteien-in-der-schweiz-6391" },
      { "id": "6283", "title": "Aussenpolitik der schweiz", "folder": "aussenpolitik-der-schweiz-6283" },
      { "id": "6298", "title": "Demokratie in der schweiz", "folder": "demokratie-in-der-schweiz-6298" },
      { "id": "6343", "title": "Die bundesversammlung der schweiz", "folder": "die-bundesversammlung-der-schweiz-6343" },
      { "id": "6350", "title": "Die hauptstadtfrage der schweiz", "folder": "die-hauptstadtfrage-der-schweiz-6350" },
      { "id": "6354", "title": "Die mediationszeit in der schweiz", "folder": "die-mediationszeit-in-der-schweiz-6354" },
      { "id": "6356", "title": "Die neutralitat der schweiz", "folder": "die-neutralitat-der-schweiz-6356" },
      { "id": "6363", "title": "Die schweizer armee", "folder": "die-schweizer-armee-6363" },
      { "id": "6383", "title": "Liechtenstein und die schweiz eine enge nachbarschaft", "folder": "liechtenstein-und-die-schweiz-eine-enge-nachbarschaft-6383" },
      { "id": "6400", "title": "Schweizer nachrichtendienste", "folder": "schweizer-nachrichtendienste-6400" },
      { "id": "6620", "title": "Die schweizer bundesfeier", "folder": "die-schweizer-bundesfeier-6620" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+politik&t=3752"
  },
  "die-schweiz-sprachen-kultur-und-gesellschaft": {
    "slug": "die-schweiz-sprachen-kultur-und-gesellschaft",
    "title": "Die Schweiz: Sprachen, Kultur & Gesellschaft",
    "category": "Die Schweiz",
    "shortDesc": "Viersprachigkeit, Schweizerdeutsch, Bündnerromanisch, Bildungssystem, Küche und Traditionen.",
    "longDesc": "Vier Landessprachen und reiche alpine Traditionen prägen das gesellschaftliche Leben der Schweiz: Von regionalen Dialekten und kulinarischen Spezialitäten bis zu dualer Bildung und Festkultur.",
    "keyPoints": [
      "Vier Landessprachen: Deutsch (ca. 62 %), Französisch (ca. 23 %), Italienisch (ca. 8 %), Rätoromanisch (ca. 0,5 %)",
      "Schweizerdeutsch: Alemannische Dialektvielfalt im Alltag vs. Hochdeutsch als Schriftsprache",
      "Bildung & Soziales: Duales Berufsbildungssystem, Spitzenuniversitäten (ETH/EPFL) und Gesundheitswesen",
      "Traditionen & Alltag: Schweizer Küche (Fondue, Raclette, Rösti), Bundesfeier und Feste"
],
    "exercises": [
      { "id": "1856", "title": "Schweiz", "folder": "schweiz-2-1856" },
      { "id": "6395", "title": "Sprachen in der Schweiz", "folder": "sprachen-in-der-schweiz-6395" },
      { "id": "6393", "title": "Schweizerdeutsch einfach erklärt", "folder": "schweizerdeutsch-einfach-erklart-6393" },
      { "id": "6286", "title": "Bündnerromanisch – Eine Sprache aus Graubünden", "folder": "bundnerromanisch-eine-sprache-aus-graubunden-6286" },
      { "id": "6288", "title": "Das Bildungssystem in der Schweiz", "folder": "das-bildungssystem-in-der-schweiz-6288" },
      { "id": "1009", "title": "Schweiz", "folder": "schweiz-1009" },
      { "id": "6289", "title": "Das gesundheitswesen in der schweiz", "folder": "das-gesundheitswesen-in-der-schweiz-6289" },
      { "id": "6297", "title": "Demografie der schweiz", "folder": "demografie-der-schweiz-6297" },
      { "id": "6333", "title": "Der schweizer film", "folder": "der-schweizer-film-6333" },
      { "id": "6364", "title": "Die schweizer kuche", "folder": "die-schweizer-kuche-6364" },
      { "id": "6371", "title": "Eidgenossische feste in der schweiz", "folder": "eidgenossische-feste-in-der-schweiz-6371" },
      { "id": "6372", "title": "Flora und fauna der schweiz", "folder": "flora-und-fauna-der-schweiz-6372" },
      { "id": "6377", "title": "Geschichte der landwirtschaft in der schweiz", "folder": "geschichte-der-landwirtschaft-in-der-schweiz-6377" },
      { "id": "6380", "title": "Klima der schweiz", "folder": "klima-der-schweiz-6380" },
      { "id": "6386", "title": "Medien in der schweiz", "folder": "medien-in-der-schweiz-6386" },
      { "id": "6394", "title": "Sozialpolitik in der schweiz", "folder": "sozialpolitik-in-der-schweiz-6394" },
      { "id": "6402", "title": "Sport in der schweiz", "folder": "sport-in-der-schweiz-6402" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+kultur&t=3752"
  },
  "die-schweiz-wirtschaft-infrastruktur-und-energie": {
    "slug": "die-schweiz-wirtschaft-infrastruktur-und-energie",
    "title": "Die Schweiz: Wirtschaft, Infrastruktur & Energie",
    "category": "Die Schweiz",
    "shortDesc": "Schweizer Franken, SBB, Wasserkraft, Kernenergie, Tourismus und UNESCO-Welterbe.",
    "longDesc": "Die Schweizer Wirtschaft zählt zu den wettbewerbsfähigsten der Welt. Ein hochentwickeltes Bahnnetz (SBB), verlässliche Energieversorgung und weltbekannter alpiner Tourismus sichern den Wohlstand.",
    "keyPoints": [
      "Wirtschaft & Währung: Der Schweizer Franken (CHF) als krisenfeste Währung, Pharma, Uhren und Finanzsektor",
      "Öffentlicher Verkehr: Schweizerische Bundesbahnen (SBB) mit dichtestem Taktfahrplan der Welt",
      "Energieversorgung: Hoher Anteil erneuerbarer Wasserkraft („Wasserschloss“) und Kernenergie",
      "Tourismus & Natur: Ganzjahrestourismus in den Alpen, mondäne Kurorte und UNESCO-Welterbestätten"
],
    "exercises": [
      { "id": "6398", "title": "Wirtschaft der Schweiz", "folder": "wirtschaft-der-schweiz-6398" },
      { "id": "6334", "title": "Der schweizer franken", "folder": "der-schweizer-franken-6334" },
      { "id": "6346", "title": "Die elektrizitatswirtschaft in der schweiz", "folder": "die-elektrizitatswirtschaft-in-der-schweiz-6346" },
      { "id": "6365", "title": "Die schweizerischen bundesbahnen sbb", "folder": "die-schweizerischen-bundesbahnen-sbb-6365" },
      { "id": "6379", "title": "Kernenergie in der schweiz", "folder": "kernenergie-in-der-schweiz-6379" },
      { "id": "6388", "title": "Naturraumliche gliederung der schweiz", "folder": "naturraumliche-gliederung-der-schweiz-6388" },
      { "id": "6397", "title": "Unesco welterbe in der schweiz", "folder": "unesco-welterbe-in-der-schweiz-6397" },
      { "id": "6404", "title": "Tourismus in der schweiz", "folder": "tourismus-in-der-schweiz-6404" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+wirtschaft&t=3752"
  },
  "die-schweiz-staedte-der-deutschschweiz": {
    "slug": "die-schweiz-staedte-der-deutschschweiz",
    "title": "Die Schweiz: Städte der Deutschschweiz",
    "category": "Die Schweiz",
    "shortDesc": "Zürich, Basel, Bern, Luzern, Winterthur, St. Gallen, Thun, Schaffhausen & Chur.",
    "longDesc": "Die Städte der deutschsprachigen Schweiz sind vitale Finanz-, Kultur- und Wissenschaftszentren: Vom kosmopolitischen Zürich über die Kulturstadt Basel am Rhein bis zur mittelalterlichen Bundesstadt Bern.",
    "keyPoints": [
      "Zürich: Größte Stadt der Schweiz, globaler Bankenplatz, ETH Zürich und Kulturmetropole an der Limmat",
      "Basel & Bern: Basel als Pharma- und Rheinhafenstadt; Bern als Bundesstadt mit UNESCO-geschützter Altstadt",
      "Zentralschweiz: Luzern am Vierwaldstättersee mit Kapellbrücke und Tourismusmagnet Pilatus/Rigi",
      "Regionalzentren: Winterthur, St. Gallen, Thun, Schaffhausen am Rheinfall, Chur und Davos"
],
    "exercises": [
      { "id": "6406", "title": "Zürich - Die größte Stadt der Schweiz", "folder": "zurich-die-groeste-stadt-der-schweiz-6406" },
      { "id": "6284", "title": "Basel – Eine Stadt am Rheinknie", "folder": "basel-eine-stadt-am-rheinknie-6284" },
      { "id": "6367", "title": "Die Stadt Bern", "folder": "die-stadt-bern-6367" },
      { "id": "6385", "title": "Luzern – Eine Stadt in der Zentralschweiz", "folder": "luzern-eine-stadt-in-der-zentralschweiz-6385" },
      { "id": "6282", "title": "Aarau eine stadt mit geschichte und kultur", "folder": "aarau-eine-stadt-mit-geschichte-und-kultur-6282" },
      { "id": "6287", "title": "Chur die alteste stadt der schweiz", "folder": "chur-die-alteste-stadt-der-schweiz-6287" },
      { "id": "6373", "title": "Frauenfeld eine stadt mit geschichte", "folder": "frauenfeld-eine-stadt-mit-geschichte-6373" },
      { "id": "6378", "title": "Herisau eine gemeinde in der schweiz", "folder": "herisau-eine-gemeinde-in-der-schweiz-6378" },
      { "id": "6381", "title": "Koniz eine gemeinde in der schweiz", "folder": "koniz-eine-gemeinde-in-der-schweiz-6381" },
      { "id": "6396", "title": "Thun eine stadt mit geschichte und kultur", "folder": "thun-eine-stadt-mit-geschichte-und-kultur-6396" },
      { "id": "6399", "title": "Schaffhausen eine stadt mit geschichte und kultur", "folder": "schaffhausen-eine-stadt-mit-geschichte-und-kultur-6399" },
      { "id": "6401", "title": "Solothurn eine stadt mit geschichte und kultur", "folder": "solothurn-eine-stadt-mit-geschichte-und-kultur-6401" },
      { "id": "6403", "title": "St gallen eine stadt mit geschichte und kultur", "folder": "st-gallen-eine-stadt-mit-geschichte-und-kultur-6403" },
      { "id": "6405", "title": "Winterthur eine stadt in der schweiz", "folder": "winterthur-eine-stadt-in-der-schweiz-6405" },
      { "id": "6368", "title": "Die stadt zug", "folder": "die-stadt-zug-6368" },
      { "id": "6296", "title": "Davos eine stadt in den alpen", "folder": "davos-eine-stadt-in-den-alpen-6296" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+staedte&t=3752"
  },
  "die-schweiz-staedte-der-romandie-und-tessin": {
    "slug": "die-schweiz-staedte-der-romandie-und-tessin",
    "title": "Die Schweiz: Städte der Romandie & Tessin",
    "category": "Die Schweiz",
    "shortDesc": "Genf, Lausanne, Lugano, Bellinzona, Neuenburg und La Chaux-de-Fonds.",
    "longDesc": "Die Westschweiz (Romandie) und das Tessin verbinden schweizerische Präzision mit französischem Esprit und mediterranem Lebensstil: Genf als Welthauptstadt der Diplomatie und Lugano als Tessiner Finanzplatz.",
    "keyPoints": [
      "Genf: Internationales Diplomatie- und UN-Zentrum am Genfersee mit Jet d’eau und Rotem Kreuz",
      "Lausanne: Olympische Hauptstadt am Genfersee, Sitz des IOC und der Spitzenuniversität EPFL",
      "Tessiner Zentren: Lugano als Banken- und Kulturstadt am See; Bellinzona mit den drei UNESCO-Burgen",
      "Uhrenmetropolen: Neuenburg (Neuchâtel) und La Chaux-de-Fonds im Jura als Wiege der Schweizer Uhrmacherei"
],
    "exercises": [
      { "id": "6375", "title": "Genf – Eine Stadt mit Geschichte und Bedeutung", "folder": "genf-eine-stadt-mit-geschichte-und-bedeutung-6375" },
      { "id": "6384", "title": "Lugano - Eine Stadt im Tessin", "folder": "lugano-eine-stadt-im-tessin-6384" },
      { "id": "1644", "title": "Genf", "folder": "genf-1644" },
      { "id": "1731", "title": "Lausanne", "folder": "lausanne-1731" },
      { "id": "1749", "title": "Lugano", "folder": "lugano-1749" },
      { "id": "6285", "title": "Bellinzona eine stadt im tessin", "folder": "bellinzona-eine-stadt-im-tessin-6285" },
      { "id": "6344", "title": "Die deutschschweiz", "folder": "die-deutschschweiz-6344" },
      { "id": "6352", "title": "Die italienische schweiz", "folder": "die-italienische-schweiz-6352" },
      { "id": "6359", "title": "Die romandie franzosischsprachige schweiz", "folder": "die-romandie-franzosischsprachige-schweiz-6359" },
      { "id": "6389", "title": "Neuenburg eine stadt in der schweiz", "folder": "neuenburg-eine-stadt-in-der-schweiz-6389" },
      { "id": "6382", "title": "La chaux de fonds eine stadt der uhren", "folder": "la-chaux-de-fonds-eine-stadt-der-uhren-6382" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+romandie+staedte&t=3752"
  },
  "die-schweiz-alpen-und-gebirge": {
    "slug": "die-schweiz-alpen-und-gebirge",
    "title": "Die Schweiz: Berge, Alpen & Relief",
    "category": "Die Schweiz",
    "shortDesc": "Matterhorn, Dufourspitze, Monte Rosa, Weisshorn, Dom, Juragebirge und Gotthard.",
    "longDesc": "Über 60 Prozent der Schweiz werden von den Alpen eingenommen. Monumentale Viertausender, tiefe Trogtäler und das Juragebirge bilden eine der spektakulärsten Gebirgslandschaften der Welt.",
    "keyPoints": [
      "Matterhorn (4.478 m): Der wohl berühmteste Berg der Welt und Wahrzeichen der Schweiz bei Zermatt",
      "Dufourspitze (4.634 m): Im Monte-Rosa-Massiv, höchster Gipfel der Schweiz",
      "Großräume: Juragebirge (ca. 10 %), Mittelland (ca. 30 %) und Hochalpen (ca. 60 %)",
      "Alpentransit: Gotthard-Massiv mit Gotthard-Basistunnel als längster Eisenbahntunnel der Welt"
],
    "exercises": [
      { "id": "6291", "title": "Das Matterhorn - Ein berühmter Berg", "folder": "das-matterhorn-ein-beruhmter-berg-6291" },
      { "id": "6345", "title": "Die Dufourspitze", "folder": "die-dufourspitze-6345" },
      { "id": "6387", "title": "Monte Rosa – Ein riesiger Berg in den Alpen", "folder": "monte-rosa-ein-riesiger-berg-in-den-alpen-6387" },
      { "id": "6295", "title": "Das Weisshorn in den Walliser Alpen", "folder": "das-weisshorn-in-den-walliser-alpen-6295" },
      { "id": "6302", "title": "Der Dom – Ein hoher Berg in den Alpen", "folder": "der-dom-ein-hoher-berg-in-den-alpen-6302" },
      { "id": "6290", "title": "Das Juragebirge", "folder": "das-juragebirge-6290" },
      { "id": "6349", "title": "Die Gotthard-Gruppe", "folder": "die-gotthard-gruppe-6349" },
      { "id": "6348", "title": "Die freiburger voralpen", "folder": "die-freiburger-voralpen-6348" },
      { "id": "6332", "title": "Der randen ein hohenzug in der schweiz", "folder": "der-randen-ein-hohenzug-in-der-schweiz-6332" },
      { "id": "6294", "title": "Das taminagebirge", "folder": "das-taminagebirge-6294" },
      { "id": "6329", "title": "Der liskamm ein berg in den alpen", "folder": "der-liskamm-ein-berg-in-den-alpen-6329" },
      { "id": "6347", "title": "Die emmentaler alpen", "folder": "die-emmentaler-alpen-6347" },
      { "id": "6366", "title": "Die schwyzer alpen", "folder": "die-schwyzer-alpen-6366" },
      { "id": "6370", "title": "Die walliser alpen", "folder": "die-walliser-alpen-6370" },
      { "id": "6376", "title": "Geologie und gebirge der schweiz", "folder": "geologie-und-gebirge-der-schweiz-6376" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=alpen+schweiz&t=3752"
  },
  "die-schweiz-gewaesser-seen-und-fluesse": {
    "slug": "die-schweiz-gewaesser-seen-und-fluesse",
    "title": "Die Schweiz: Gewässer, Seen & Flüsse",
    "category": "Die Schweiz",
    "shortDesc": "Genfersee, Vierwaldstättersee, Zürichsee, Thunersee, Rhone, Aare, Reuss und Thur.",
    "longDesc": "Als „Wasserschloss Europas“ entspringen in den Schweizer Alpen gewaltige Ströme wie Rhein und Rhone. Malerische eiszeitliche Zungenbeckenseen prägen die Landschaft zwischen Jura und Alpen.",
    "keyPoints": [
      "Genfersee (Lac Léman): Größter See des Alpenraums (580 km²), geteilt mit Frankreich",
      "Vierwaldstättersee & Zürichsee: Stark verzweigte Seen mit historischer Schifffahrt und dichter Besiedlung",
      "Flusssysteme: Die Aare als längster rein schweizerischer Fluss; Rhone entspringt im Rhonegletscher",
      "Seenvielfalt: Thuner-, Brienzer-, Bieler-, Zuger- und Neuenburgersee sowie die Tessiner Seen"
],
    "exercises": [
      { "id": "6303", "title": "Der Genfersee", "folder": "der-genfersee-6303" },
      { "id": "6337", "title": "Der Vierwaldstättersee", "folder": "der-vierwaldstattersee-6337" },
      { "id": "6340", "title": "Der Zürichsee", "folder": "der-zurichsee-6340" },
      { "id": "6328", "title": "Der Lago Maggiore", "folder": "der-lago-maggiore-6328" },
      { "id": "6330", "title": "Der Luganersee", "folder": "der-luganersee-6330" },
      { "id": "6336", "title": "Der Thunersee", "folder": "der-thunersee-6336" },
      { "id": "6358", "title": "Die Rhone – ein wichtiger Fluss in Europa", "folder": "die-rhone-ein-wichtiger-fluss-in-europa-6358" },
      { "id": "6369", "title": "Die Thur – Ein Fluss in der Ostschweiz", "folder": "die-thur-ein-fluss-in-der-ostschweiz-6369" },
      { "id": "6299", "title": "Der bielersee", "folder": "der-bielersee-6299" },
      { "id": "6300", "title": "Der brienzersee", "folder": "der-brienzersee-6300" },
      { "id": "6338", "title": "Der walensee", "folder": "der-walensee-6338" },
      { "id": "6331", "title": "Der neuenburgersee", "folder": "der-neuenburgersee-6331" },
      { "id": "6339", "title": "Der zugersee ein see in der schweiz", "folder": "der-zugersee-ein-see-in-der-schweiz-6339" },
      { "id": "6341", "title": "Die aare der langste fluss der schweiz", "folder": "die-aare-der-langste-fluss-der-schweiz-6341" },
      { "id": "6357", "title": "Die reuss ein fluss in der schweiz", "folder": "die-reuss-ein-fluss-in-der-schweiz-6357" },
      { "id": "6360", "title": "Die saane ein fluss in der schweiz", "folder": "die-saane-ein-fluss-in-der-schweiz-6360" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+seen+fluesse&t=3752"
  },
  "europa-ueberblick-und-topographie": {
    "slug": "europa-ueberblick-und-topographie",
    "title": "Europa: Überblick, Topographie & Regionen",
    "category": "Europa & Die EU",
    "shortDesc": "Topographie Europas, Großregionen von Mitteleuropa bis Skandinavien, Klima und Staaten.",
    "longDesc": "Europa bildet den westlichen Teil des riesigen eurasischen Doppelkontinents. Große landschaftliche, klimatische und kulturelle Vielfalt kennzeichnen seine Länder von der Atlantikküste bis zum Ural.",
    "keyPoints": [
      "Geographische Grenzen: Atlantik (Westen), Mittelmeer (Süden), Arktischer Ozean (Norden), Ural (Osten)",
      "Großregionen: Westeuropa, Nordeuropa, Mitteleuropa, Südeuropa, Osteuropa und Südosteuropa",
      "Klima & Vegetation: Vom mediterranen Mittelmeerklima über das gemäßigte Mitteleuropa bis zur Tundra",
      "Städtische Räume: Historische Entwicklung und Merkmale der typischen europäischen Stadt"
],
    "exercises": [
      { "id": "304", "title": "Europa im Überblick", "folder": "europa-im-berblick-304" },
      { "id": "307", "title": "Klima Europas", "folder": "klima-europas-307" },
      { "id": "305", "title": "Staaten Europas", "folder": "staaten-europas-305" },
      { "id": "398", "title": "Städte Europas", "folder": "stadte-europas-398" },
      { "id": "428", "title": "Mitteleuropa", "folder": "mitteleuropa-2-428" },
      { "id": "124", "title": "Mitteleuropa", "folder": "mitteleuropa-124" },
      { "id": "185", "title": "Lander europa", "folder": "lander-europa-185" },
      { "id": "2002", "title": "Die typische europaische stadt", "folder": "die-typische-europaische-stadt-2002" },
      { "id": "3223", "title": "Escape room quot lander europas quot", "folder": "escape-room-quot-lander-europas-quot-3223" },
      { "id": "5475", "title": "Die typische europaische stadt 2", "folder": "die-typische-europaische-stadt-2-5475" },
      { "id": "5557", "title": "Stadtestrukturen in europa wachstum wandel und herausforderungen", "folder": "stadtestrukturen-in-europa-wachstum-wandel-und-herausforderungen-5557" },
      { "id": "131", "title": "Hauptstadte europa", "folder": "hauptstadte-europa-131" },
      { "id": "5464", "title": "Die klimatische vielfalt europas von mittelmeerhitze bis polarkalte", "folder": "die-klimatische-vielfalt-europas-von-mittelmeerhitze-bis-polarkalte-5464" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=europa+topographie&t=3752"
  },
  "fluesse-seen-und-gebirge-europas": {
    "slug": "fluesse-seen-und-gebirge-europas",
    "title": "Flüsse, Seen & Gebirge Europas",
    "category": "Europa & Die EU",
    "shortDesc": "Alpen als Wasserscheide, Donau, Bodensee, Rhein-Main-Donau-Kanal, Meere und Gebirgszüge.",
    "longDesc": "Europas Landschaft wird durch mächtige Hoch- und Mittelgebirge sowie weitverzweigte Flusssysteme strukturiert. Sie dienten historisch als Handelsrouten und prägen Naturräume und Wirtschaft.",
    "keyPoints": [
      "Europäische Gebirge: Alpen, Pyrenäen, Karpaten, Apennin, Skandinavisches Gebirge und Ural",
      "Lebensadern: Donau als internationalster Fluss der Welt, Rhein, Wolga, Elbe und Rhone",
      "Alpenraum: Pragendes Landschaftsmerkmal und Wasserscheide zwischen Nordsee, Mittelmeer und Schwarzem Meer",
      "Meere & Kanäle: Nordsee, Ostsee, Mittelmeer sowie die Rhein-Main-Donau-Wasserstraße"
],
    "exercises": [
      { "id": "1997", "title": "Die Alpen", "folder": "die-alpen-1997" },
      { "id": "1995", "title": "Almwirtschaft", "folder": "almwirtschaft-1995" },
      { "id": "2018", "title": "Die Donau", "folder": "die-donau-2018" },
      { "id": "195", "title": "Gebirge europas", "folder": "gebirge-europas-195" },
      { "id": "196", "title": "Meere europas", "folder": "meere-europas-196" },
      { "id": "197", "title": "Flusse europas", "folder": "flusse-europas-197" },
      { "id": "5450", "title": "Die alpen als pragendes landschaftsmerkmal europas", "folder": "die-alpen-als-pragendes-landschaftsmerkmal-europas-5450" },
      { "id": "985", "title": "Der bodensee", "folder": "der-bodensee-985" },
      { "id": "2023", "title": "Die rhein main donau wasserstraese", "folder": "die-rhein-main-donau-wasserstraese-2023" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=europa+fluesse+gebirge&t=3752"
  },
  "die-europaeische-union-organe-und-wirtschaft": {
    "slug": "die-europaeische-union-organe-und-wirtschaft",
    "title": "Die Europäische Union: Organe & Binnenmarkt",
    "category": "Europa & Die EU",
    "shortDesc": "27 Mitgliedstaaten, EU-Parlament, EU-Kommission, EZB, Eurozone und Grundfreiheiten.",
    "longDesc": "Die Europäische Union (EU) ist ein einzigartiger Staatenverbund von 27 Demokratien. Der europäische Binnenmarkt und die gemeinsame Währung verbinden über 450 Millionen Bürger in Freiheit und Frieden.",
    "keyPoints": [
      "Entwicklung der EU: Von den Römischen Verträgen (1957) zur heutigen Union aus 27 Mitgliedstaaten",
      "EU-Organe: Europäisches Parlament (Straßburg/Brüssel), Europäische Kommission und EZB (Frankfurt)",
      "Europäischer Binnenmarkt: Vier Grundfreiheiten (Freier Verkehr von Waren, Personen, Dienstleistungen, Kapital)",
      "Der Euro: Gemeinsame Währung der Eurozone für wirtschaftliche Stabilität und einfaches Reisen"
],
    "exercises": [
      { "id": "308", "title": "Entwicklung der EU", "folder": "entwicklung-der-eu-308" },
      { "id": "309", "title": "Aufgaben und Organe der EU", "folder": "aufgaben-und-organe-der-eu-309" },
      { "id": "368", "title": "Der Euro", "folder": "der-euro-368" },
      { "id": "3500", "title": "Der Europäische Binnenmarkt", "folder": "der-europaische-binnenmarkt-3500" },
      { "id": "3492", "title": "Das EU Parlament", "folder": "das-eu-parlament-3492" },
      { "id": "3509", "title": "Die Europäische Kommission", "folder": "die-europaische-kommission-3509" },
      { "id": "3510", "title": "Die Europäische Zentralbank", "folder": "die-europaische-zentralbank-3510" },
      { "id": "3477", "title": "Arbeit des Europäischen Parlaments", "folder": "arbeit-des-europaischen-parlaments-3477" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=europaeische+union&t=3752"
  },
  "westeuropa-und-nordeuropa": {
    "slug": "westeuropa-und-nordeuropa",
    "title": "Westeuropa & Nordeuropa: Länder & Hauptstädte",
    "category": "Europa & Die EU",
    "shortDesc": "Frankreich, Vereinigtes Königreich, Irland, Benelux, Dänemark, Schweden, Norwegen, Finnland & Island.",
    "longDesc": "Von den Metropolen Paris und London über die Polder der Niederlande bis zu den Fjorden Norwegens und Vulkanen Islands: West- und Nordeuropa stehen für hohe Wirtschaftskraft und landschaftliche Extreme.",
    "keyPoints": [
      "Westeuropa: Frankreich (Paris), Vereinigtes Königreich (London), Irland (Dublin) und Monaco",
      "Benelux-Staaten: Belgien (Brüssel), Niederlande (Amsterdam) und Luxemburg mit dichtester Besiedlung",
      "Skandinavien & Norden: Dänemark (Kopenhagen), Schweden (Stockholm), Norwegen (Oslo), Finnland (Helsinki)",
      "Inselstaat Island: Land aus Feuer und Eis mit Geysiren, Gletschern und Vulkanen im Nordatlantik"
],
    "exercises": [
      { "id": "416", "title": "Westeuropa", "folder": "westeuropa-2-416" },
      { "id": "426", "title": "Nordeuropa", "folder": "nordeuropa-2-426" },
      { "id": "1564", "title": "Belgien", "folder": "belgien-1564" },
      { "id": "1127", "title": "Dänemark", "folder": "danemark-2-1127" },
      { "id": "1632", "title": "Finnland", "folder": "finnland-1632" },
      { "id": "1636", "title": "Frankreich", "folder": "frankreich-2-1636" },
      { "id": "1680", "title": "Irland", "folder": "irland-1680" },
      { "id": "1681", "title": "Island", "folder": "island-1681" },
      { "id": "1785", "title": "Monaco", "folder": "monaco-1785" },
      { "id": "1968", "title": "Niederlande", "folder": "niederlande-1968" },
      { "id": "1810", "title": "Norwegen", "folder": "norwegen-1810" },
      { "id": "1854", "title": "Schweden", "folder": "schweden-1854" },
      { "id": "1923", "title": "Vereinigtes Königreich", "folder": "vereinigtes-konigreich-1923" },
      { "id": "125", "title": "Westeuropa", "folder": "westeuropa-125" },
      { "id": "126", "title": "Nordeuropa", "folder": "nordeuropa-126" },
      { "id": "3227", "title": "Escape room quot lander nordeuropas quot", "folder": "escape-room-quot-lander-nordeuropas-quot-3227" },
      { "id": "3229", "title": "Escape room quot 5 wichtige lander westeuropas quot", "folder": "escape-room-quot-5-wichtige-lander-westeuropas-quot-3229" },
      { "id": "5576", "title": "Der europaische norden lebensweise und anpassung an extreme klimabedingungen", "folder": "der-europaische-norden-lebensweise-und-anpassung-an-extreme-klimabedingungen-5576" },
      { "id": "1038", "title": "Frankreich", "folder": "frankreich-1038" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=westeuropa+nordeuropa&t=3752"
  },
  "suedeuropa-und-mittelmeerraum": {
    "slug": "suedeuropa-und-mittelmeerraum",
    "title": "Südeuropa & Mittelmeerraum",
    "category": "Europa & Die EU",
    "shortDesc": "Italien, Spanien, Portugal, Griechenland, Andorra, Malta, San Marino & Vatikanstadt.",
    "longDesc": "Die Länder rund um das Mittelmeer sind Wiege der europäischen Antike und beliebte Urlaubsziele. Ihr mediterranes Klima bringt Oliven, Wein und Zitrusfrüchte hervor, birgt aber auch Trockenheitsrisiken.",
    "keyPoints": [
      "Iberische Halbinsel: Spanien (Madrid) und Portugal (Lissabon) mit weiten Hochebenen und Atlantikküsten",
      "Italien & Zwergstaaten: Der italienische Stiefel (Rom) sowie San Marino und die Vatikanstadt",
      "Griechenland: Tausende Inseln in der Ägäis, Wiege der Demokratie und mediterrane Kultur",
      "Insel- & Kleinstaaten: Malta im Herzen des Mittelmeers und das Fürstentum Andorra in den Pyrenäen"
],
    "exercises": [
      { "id": "427", "title": "Südeuropa", "folder": "sudeuropa-2-427" },
      { "id": "1534", "title": "Andorra", "folder": "andorra-1534" },
      { "id": "1656", "title": "Griechenland", "folder": "griechenland-1656" },
      { "id": "1684", "title": "Italien", "folder": "italien-3-1684" },
      { "id": "1765", "title": "Malta", "folder": "malta-1765" },
      { "id": "1969", "title": "Portugal", "folder": "portugal-1969" },
      { "id": "1846", "title": "San Marino", "folder": "san-marino-1846" },
      { "id": "1010", "title": "Spanien", "folder": "spanien-1010" },
      { "id": "1918", "title": "Vatikanstadt", "folder": "vatikanstadt-1918" },
      { "id": "123", "title": "Sudeuropa", "folder": "sudeuropa-123" },
      { "id": "3228", "title": "Escape room quot lander sudeuropas quot", "folder": "escape-room-quot-lander-sudeuropas-quot-3228" },
      { "id": "1007", "title": "Italien", "folder": "italien-1007" },
      { "id": "2050", "title": "Landwirtschaft in spanien", "folder": "landwirtschaft-in-spanien-2050" },
      { "id": "5381", "title": "Spanien heute", "folder": "spanien-heute-5381" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedeuropa+mittelmeer&t=3752"
  },
  "osteuropa-und-baltikum": {
    "slug": "osteuropa-und-baltikum",
    "title": "Osteuropa & Baltikum",
    "category": "Europa & Die EU",
    "shortDesc": "Polen, Tschechien, Slowakei, Ungarn, Ukraine, Weißrussland, Russland, Estland & Lettland.",
    "longDesc": "Der osteuropäische und baltische Raum verbindet mitteleuropäische Tradition mit weiten eurasischen Tiefebenen. Die Region erlebte nach 1989 tiefgreifende politische, gesellschaftliche und wirtschaftliche Transformationen.",
    "keyPoints": [
      "Mitteleuropäischer Übergang: Polen (Warschau), Tschechien (Prag) und die Slowakei (Bratislava)",
      "Ungarn: Die Pannonische Tiefebene und die Donau-Metropole Budapest",
      "Osteuropäische Tiefebene: Ukraine (Kiew), Weißrussland (Minsk) und Russland (Moskau)",
      "Baltische Staaten: Estland (Tallinn) und Lettland (Riga) an der östlichen Ostseeküste"
],
    "exercises": [
      { "id": "424", "title": "Osteuropa", "folder": "osteuropa-2-424" },
      { "id": "1583", "title": "Budapest", "folder": "budapest-1583" },
      { "id": "1627", "title": "Estland", "folder": "estland-1627" },
      { "id": "1738", "title": "Lettland", "folder": "lettland-1738" },
      { "id": "1829", "title": "Polen", "folder": "polen-2-1829" },
      { "id": "1937", "title": "Weißrussland", "folder": "weiesrussland-1937" },
      { "id": "1963", "title": "Slowakei", "folder": "test-8-1963" },
      { "id": "1909", "title": "Ukraine", "folder": "ukraine-2-1909" },
      { "id": "1910", "title": "Ungarn", "folder": "ungarn-1910" },
      { "id": "127", "title": "Osteuropa", "folder": "osteuropa-127" },
      { "id": "5562", "title": "Unterschiede zwischen west und osteuropa wirtschaftlich kulturell geografisch", "folder": "unterschiede-zwischen-west-und-osteuropa-wirtschaftlich-kulturell-geografisch-5562" },
      { "id": "1008", "title": "Polen", "folder": "polen-1008" },
      { "id": "1901", "title": "Tschechien", "folder": "tschechien-1901" },
      { "id": "1011", "title": "Ukraine", "folder": "ukraine-1011" },
      { "id": "1837", "title": "Russland", "folder": "russland-1837" },
      { "id": "1887", "title": "Tallinn", "folder": "tallinn-1887" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=osteuropa+baltikum&t=3752"
  },
  "suedosteuropa-und-der-balkan": {
    "slug": "suedosteuropa-und-der-balkan",
    "title": "Südosteuropa & der Balkan",
    "category": "Europa & Die EU",
    "shortDesc": "Kroatien, Serbien, Bosnien, Slowenien, Albanien, Bulgarien, Rumänien, Nordmazedonien & Türkei.",
    "longDesc": "Die Balkanhalbinsel ist ein Schnittpunkt der Kulturen, Religionen und Gebirge in Südosteuropa. Reiche Küsten an der Adria treffen auf markante Karstgebirge und die Weiten der Donautiefebene.",
    "keyPoints": [
      "Ehemaliges Jugoslawien: Slowenien, Kroatien, Bosnien-Herzegowina, Serbien, Montenegro, Kosovo, Nordmazedonien",
      "Schwarzmeer-Anrainer: Rumänien mit den Karpaten und Bulgarien mit dem Balkangebirge",
      "Albanien: Küsten an Adria und Ionischem Meer im dynamischen Wandel",
      "Brücke nach Asien: Die Türkei mit der Bosporus-Metropole Istanbul an der Nahtstelle der Kontinente"
],
    "exercises": [
      { "id": "425", "title": "Südosteuropa", "folder": "sudosteuropa-425" },
      { "id": "1527", "title": "Albanien", "folder": "albanien-1527" },
      { "id": "1573", "title": "Bosnien und Herzegowina", "folder": "bosnien-und-herzegowina-1573" },
      { "id": "1585", "title": "Bulgarien", "folder": "bulgarien-1585" },
      { "id": "1697", "title": "Kasachstan", "folder": "kasachstan-1697" },
      { "id": "1718", "title": "Kosovo", "folder": "kosovo-1718" },
      { "id": "1722", "title": "Kroatien", "folder": "kroatien-1722" },
      { "id": "1784", "title": "Moldawien", "folder": "moldawien-1784" },
      { "id": "1788", "title": "Montenegro", "folder": "montenegro-1788" },
      { "id": "1807", "title": "Nordmazedonien", "folder": "nordmazedonien-1807" },
      { "id": "1955", "title": "Rumänien", "folder": "algerien-3-1955" },
      { "id": "1860", "title": "Serbien", "folder": "serbien-1860" },
      { "id": "1869", "title": "Slowenien", "folder": "slowenien-1869" },
      { "id": "1905", "title": "Türkei", "folder": "turkei-1905" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=balkan+suedosteuropa&t=3752"
  },
  "nordamerika-usa-kanada-und-mexiko": {
    "slug": "nordamerika-usa-kanada-und-mexiko",
    "title": "Nordamerika: USA, Kanada & Mexiko",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Großräume Nordamerikas, Rocky Mountains, Wirtschaftszentren, Megastädte und Industrieräume.",
    "longDesc": "Nordamerika umfasst drei riesige Staaten: Kanada im arktischen Norden, die Vereinigten Staaten als globale Wirtschaftsmacht und Mexiko als Brücke zu Lateinamerika. Gewaltige Gebirgsketten prägen den Kontinent.",
    "keyPoints": [
      "Drei Großstaaten: Kanada (Ottawa), USA (Washington D.C.) und Mexiko (Mexiko-Stadt)",
      "Großrelief: Rocky Mountains im Westen, Appalachen im Osten und die Great Plains im Zentrum",
      "Wirtschaft & Industrie: Nordamerikanisches Freihandelsabkommen, Rust Belt, Silicon Valley und Sun Belt",
      "Infrastruktur: Transkontinentale Eisenbahnnetzwerke und gewaltige Metropolregionen"
],
    "exercises": [
      { "id": "1693", "title": "Kanada", "folder": "kanada-1693" },
      { "id": "1777", "title": "Mexiko", "folder": "mexiko-1777" },
      { "id": "1922", "title": "Vereinigte Staaten von Amerika", "folder": "vereinigte-staaten-von-amerika-1922" },
      { "id": "5484", "title": "Eisenbahnnetzwerke im vergleich europa asien und amerika", "folder": "eisenbahnnetzwerke-im-vergleich-europa-asien-und-amerika-5484" },
      { "id": "404", "title": "30 wichtige stadte der usa", "folder": "30-wichtige-stadte-der-usa-404" },
      { "id": "5466", "title": "Die rocky mountains und die anden geographische riesen beider kontinente", "folder": "die-rocky-mountains-und-die-anden-geographische-riesen-beider-kontinente-5466" },
      { "id": "5552", "title": "Nord und sudamerika im vergleich landschaften und klimazonen", "folder": "nord-und-sudamerika-im-vergleich-landschaften-und-klimazonen-5552" },
      { "id": "5563", "title": "Usa und kanada industrielander in verschiedenen klimazonen", "folder": "usa-und-kanada-industrielander-in-verschiedenen-klimazonen-5563" },
      { "id": "5572", "title": "Wirtschaftliche ballungsraume in nord und sudamerika", "folder": "wirtschaftliche-ballungsraume-in-nord-und-sudamerika-5572" },
      { "id": "5574", "title": "Usa und kanada industrielander in verschiedenen klimazonen 2", "folder": "usa-und-kanada-industrielander-in-verschiedenen-klimazonen-2-5574" },
      { "id": "6069", "title": "Mexiko stadt", "folder": "mexiko-stadt-6069" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nordamerika&t=3752"
  },
  "usa-suedstaaten-und-golfkueste": {
    "slug": "usa-suedstaaten-und-golfkueste",
    "title": "USA: Südstaaten & Golfküste",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Florida, Texas, Georgia, North & South Carolina, Virginia, Louisiana, Alabama & Tennessee.",
    "longDesc": "Die Südstaaten der USA sind geprägt durch subtropisches Klima, weite Küstenebenen am Golf von Mexiko und den Atlantik sowie dynamisches Wirtschaftswachstum im modernen Sun Belt.",
    "keyPoints": [
      "Großstaaten: Texas als zweitgrößter Bundesstaat (Öl, Raumfahrt, Hightech) und Florida (Tourismus, Zitrusfrüchte)",
      "Tiefer Süden: Georgia (Atlanta), Alabama, Mississippi und Louisiana (New Orleans, Mississippi-Delta)",
      "Upper South: Virginia, North Carolina, South Carolina, Tennessee und Kentucky",
      "Klima & Wirtschaft: Subtropisches Klima mit Hurrikan-Risiko; Boomregion des amerikanischen Südens"
],
    "exercises": [
      { "id": "1526", "title": "Alabama", "folder": "alabama-1526" },
      { "id": "1543", "title": "Arkansas", "folder": "arkansas-1543" },
      { "id": "1634", "title": "Florida", "folder": "florida-1634" },
      { "id": "1645", "title": "Georgia", "folder": "georgia-1645" },
      { "id": "1704", "title": "Kentucky", "folder": "kentucky-1704" },
      { "id": "1747", "title": "Louisiana", "folder": "louisiana-1747" },
      { "id": "1781", "title": "Mississippi", "folder": "mississippi-1781" },
      { "id": "1808", "title": "North Carolina", "folder": "north-carolina-1808" },
      { "id": "1872", "title": "South Carolina", "folder": "south-carolina-1872" },
      { "id": "1988", "title": "Tennessee", "folder": "tennessee-1988" },
      { "id": "1939", "title": "West Virginia", "folder": "west-virginia-1939" },
      { "id": "1891", "title": "Texas", "folder": "texas-1891" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=usa+suedstaaten&t=3752"
  },
  "usa-nordosten-und-neuengland": {
    "slug": "usa-nordosten-und-neuengland",
    "title": "USA: Nordosten & Neuengland",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "New York, Pennsylvania, Massachusetts, New Jersey, Connecticut, Maine, Maryland & Delaware.",
    "longDesc": "Der Nordosten ist die historische Wiege der USA und das dichtest besiedelte Industrie- und Finanzzentrum des Landes. Die Megalopolis Boswash (von Boston bis Washington) bildet das pulsierende Herz der US-Ostküste.",
    "keyPoints": [
      "Neuengland-Staaten: Maine, New Hampshire, Vermont, Massachusetts (Boston), Rhode Island, Connecticut",
      "Mittelatlantik-Staaten: New York (New York City), New Jersey, Pennsylvania (Philadelphia)",
      "Historische Bedeutung: Ankunft der Pilgerväter 1620, Schauplatz der Unabhängigkeitsbewegung",
      "Megalopolis Boswash: Dichtester Ballungsraum Nordamerikas mit globalem Finanz- und Bildungsfokus"
],
    "exercises": [
      { "id": "1602", "title": "Connecticut", "folder": "connecticut-1602" },
      { "id": "1605", "title": "Delaware", "folder": "delaware-1605" },
      { "id": "1757", "title": "Maine", "folder": "maine-1757" },
      { "id": "1771", "title": "Maryland", "folder": "maryland-1771" },
      { "id": "1772", "title": "Massachusetts", "folder": "massachusetts-1772" },
      { "id": "1803", "title": "New Hampshire", "folder": "new-hampshire-1803" },
      { "id": "1804", "title": "New Jersey", "folder": "new-jersey-1804" },
      { "id": "1806", "title": "New York", "folder": "new-york-1806" },
      { "id": "1825", "title": "Pennsylvania", "folder": "pennsylvania-1825" },
      { "id": "1986", "title": "Rhode Island", "folder": "rhode-island-1986" },
      { "id": "1924", "title": "Vermont", "folder": "vermont-1924" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=usa+nordosten&t=3752"
  },
  "usa-westen-und-pazifikstaaten": {
    "slug": "usa-westen-und-pazifikstaaten",
    "title": "USA: Westen & Pazifikstaaten",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Kalifornien, Washington, Oregon, Colorado, Arizona, Nevada, Utah, Alaska & Hawaii.",
    "longDesc": "Der amerikanische Westen fasziniert durch spektakuläre Naturräume: Von den Stränden und Metropolen Kaliforniens über die Wüsten Arizonas und Canyons Utahs bis zu den Gletschern Alaskas und Vulkanen Hawaiis.",
    "keyPoints": [
      "Pazifikküste: Kalifornien (Los Angeles, San Francisco, Silicon Valley), Oregon und Washington (Seattle)",
      "Mountain States: Colorado (Rocky Mountains), Utah (Nationalparks), Nevada (Las Vegas, Great Basin), Idaho, Montana, Wyoming",
      "Südwesten: Arizona (Grand Canyon) und New Mexico mit Halbwüsten und indigener Kultur",
      "Exklaven: Alaska als größter Bundesstaat im Norden; tropische Inselkette Hawaii im Pazifik"
],
    "exercises": [
      { "id": "1983", "title": "Alaska", "folder": "alaska-1983" },
      { "id": "1542", "title": "Arizona", "folder": "arizona-1542" },
      { "id": "1601", "title": "Colorado", "folder": "colorado-1601" },
      { "id": "1665", "title": "Hawaii", "folder": "hawaii-1665" },
      { "id": "1672", "title": "Idaho", "folder": "idaho-1672" },
      { "id": "1690", "title": "Kalifornien", "folder": "kalifornien-1690" },
      { "id": "1787", "title": "Montana", "folder": "montana-1787" },
      { "id": "1802", "title": "Nevada", "folder": "nevada-1802" },
      { "id": "1805", "title": "New Mexico", "folder": "new-mexico-1805" },
      { "id": "1987", "title": "Oregon", "folder": "oregon-1987" },
      { "id": "1915", "title": "Utah", "folder": "utah-1915" },
      { "id": "1935", "title": "Washington", "folder": "washington-1935" },
      { "id": "1950", "title": "Wyoming", "folder": "wyoming-1950" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=usa+westen&t=3752"
  },
  "usa-mittlerer-westen-und-great-plains": {
    "slug": "usa-mittlerer-westen-und-great-plains",
    "title": "USA: Mittlerer Westen & Great Plains",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Illinois, Ohio, Michigan, Indiana, Wisconsin, Minnesota, Iowa, Missouri, Kansas & Dakotas.",
    "longDesc": "Der Mittlere Westen („Midwest“) ist die „Kornkammer“ und traditionelle industrielle Herzkammer der USA. Von den Großen Seen über den Corn Belt bis zu den weiten Weideflächen der Great Plains.",
    "keyPoints": [
      "Große-Seen-Region: Illinois (Chicago), Ohio, Michigan (Detroit), Indiana, Wisconsin",
      "Agrarischer Corn Belt: Iowa, Minnesota, Missouri mit hochproduktiver Landwirtschaft und Getreideanbau",
      "Great Plains: Kansas, Nebraska, North Dakota, South Dakota und Oklahoma als Weideland und Prärie",
      "Verkehrsknoten Chicago: Größtes Binnen- und Eisenbahndrehkreuz Nordamerikas"
],
    "exercises": [
      { "id": "1673", "title": "Illinois", "folder": "illinois-1673" },
      { "id": "1674", "title": "Indiana", "folder": "indiana-1674" },
      { "id": "1677", "title": "Iowa", "folder": "iowa-1677" },
      { "id": "1694", "title": "Kansas", "folder": "kansas-1694" },
      { "id": "1778", "title": "Michigan", "folder": "michigan-1778" },
      { "id": "1780", "title": "Minnesota", "folder": "minnesota-1780" },
      { "id": "1782", "title": "Missouri", "folder": "missouri-1782" },
      { "id": "1795", "title": "Nebraska", "folder": "nebraska-1795" },
      { "id": "1809", "title": "North Dakota", "folder": "north-dakota-1809" },
      { "id": "1984", "title": "Ohio", "folder": "ohio-1984" },
      { "id": "1985", "title": "Oklahoma", "folder": "oklahoma-1985" },
      { "id": "1873", "title": "South Dakota", "folder": "south-dakota-1873" },
      { "id": "1945", "title": "Wisconsin", "folder": "wisconsin-1945" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=usa+mittlerer+westen&t=3752"
  },
  "mittelamerika-und-karibik": {
    "slug": "mittelamerika-und-karibik",
    "title": "Mittelamerika & Karibik",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Costa Rica, Panama, Guatemala, Honduras, Nicaragua, El Salvador, Belize und Karibik.",
    "longDesc": "Die mittelamerikanische Landbrücke verbindet Nord- und Südamerika zwischen Pazifik und Karibischem Meer. Tropischer Regenwald, aktive Vulkane und der Panamakanal machen die Region geopolitisch bedeutend.",
    "keyPoints": [
      "Zentralamerikanische Staaten: Guatemala, Belize, Honduras, El Salvador, Nicaragua, Costa Rica, Panama",
      "Panamakanal: Eine der wichtigsten künstlichen Wasserstraßen der Welt zwischen Atlantik und Pazifik",
      "Umwelt & Ökologie: Costa Rica als Vorreiter im Ökotourismus und bei erneuerbaren Energien",
      "Herausforderungen: Anfälligkeit für Hurrikane, Erdbeben, Vulkanismus und klimabedingte Migration"
],
    "exercises": [
      { "id": "1566", "title": "Belize", "folder": "belize-1566" },
      { "id": "1603", "title": "Costa Rica", "folder": "costa-rica-1603" },
      { "id": "1621", "title": "El Salvador", "folder": "el-salvador-1621" },
      { "id": "1657", "title": "Guatemala", "folder": "guatemala-1657" },
      { "id": "1671", "title": "Honduras", "folder": "honduras-1671" },
      { "id": "1979", "title": "Nicaragua", "folder": "nicaragua-1979" },
      { "id": "1819", "title": "Panama", "folder": "panama-1819" },
      { "id": "2074", "title": "Mittelamerika", "folder": "mittelamerika-2074" },
      { "id": "5506", "title": "Klimatische herausforderungen in mittelamerika und ihre auswirkungen auf migration", "folder": "klimatische-herausforderungen-in-mittelamerika-und-ihre-auswirkungen-auf-migration-5506" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=mittelamerika&t=3752"
  },
  "suedamerika-laender-und-landschaften": {
    "slug": "suedamerika-laender-und-landschaften",
    "title": "Südamerika: Länder, Anden & Amazonas",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Brasilien, Argentinien, Kolumbien, Chile, Peru, Bolivien, Ecuador, Anden und Regenwald.",
    "longDesc": "Südamerika besticht durch geographische Superlative: Die Anden als längste Gebirgskette der Erde, das Amazonasbecken als größte grüne Lunge unseres Planeten und dynamische Megastädte wie São Paulo und Buenos Aires.",
    "keyPoints": [
      "Großstaaten: Brasilien (Brasília, São Paulo, Rio de Janeiro) und Argentinien (Buenos Aires, Pampa)",
      "Andenstaaten: Kolumbien, Ecuador, Peru, Bolivien und Chile (schmalster Staat der Welt)",
      "Naturräume: Amazonas-Regenwald, Atacama-Wüste (trockenste Wüste), Altiplano und Patagonien",
      "Entwicklungsdisparitäten: Rohstoffreichtum vs. soziale Gegensätze und Schutz des Regenwaldes"
],
    "exercises": [
      { "id": "1711", "title": "Kolumbien", "folder": "kolumbien-1711" },
      { "id": "1821", "title": "Paraguay", "folder": "paraguay-1821" },
      { "id": "1827", "title": "Peru", "folder": "peru-1827" },
      { "id": "1884", "title": "Suriname", "folder": "suriname-1884" },
      { "id": "1912", "title": "Uruguay", "folder": "uruguay-1912" },
      { "id": "1920", "title": "Venezuela", "folder": "venezuela-1920" },
      { "id": "1541", "title": "Argentinien", "folder": "argentinien-2-1541" },
      { "id": "1571", "title": "Bolivien", "folder": "bolivien-1571" },
      { "id": "1576", "title": "Brasilien", "folder": "brasilien-1576" },
      { "id": "1596", "title": "Chile", "folder": "chile-1596" },
      { "id": "1618", "title": "Ecuador", "folder": "ecuador-1618" },
      { "id": "1661", "title": "Guyana", "folder": "guyana-1661" },
      { "id": "1122", "title": "Argentinien", "folder": "argentinien-1122" },
      { "id": "3225", "title": "Escape room quot lander sudamerikas quot", "folder": "escape-room-quot-lander-sudamerikas-quot-3225" },
      { "id": "5486", "title": "Entwicklungsunterschiede in lateinamerika ursachen und perspektiven", "folder": "entwicklungsunterschiede-in-lateinamerika-ursachen-und-perspektiven-5486" },
      { "id": "5559", "title": "Sudamerika zwischen regenwald und wustenregionen", "folder": "sudamerika-zwischen-regenwald-und-wustenregionen-5559" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedamerika&t=3752"
  },
  "afrika-nord-und-westafrika": {
    "slug": "afrika-nord-und-westafrika",
    "title": "Afrika: Nordafrika & Westafrika",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Ägypten, Algerien, Marokko, Libyen, Senegal, Côte d’Ivoire und die Sahara als Lebensraum.",
    "longDesc": "Nord- und Westafrika werden durch die Sahara als größte Trockenwüste der Erde verbunden und zugleich getrennt. Vom Nildelta und dem Maghreb bis zu den tropischen Küsten am Golf von Guinea.",
    "keyPoints": [
      "Nordafrika & Maghreb: Ägypten (Kairo, Nil), Algerien, Marokko, Libyen und Mauretanien",
      "Westafrika: Senegal (Dakar), Côte d’Ivoire, Benin, Gambia, Guinea-Bissau, Sierra Leone",
      "Die Sahara: Wendekreiswüste als gewaltige geographische Barriere und historischer Karawanenraum",
      "Kultur & Wirtschaft: Schnittpunkt arabischer, berberischer und westafrikanischer Kulturen"
],
    "exercises": [
      { "id": "1859", "title": "Senegal", "folder": "senegal-1859" },
      { "id": "1865", "title": "Sierra Leone", "folder": "sierra-leone-1865" },
      { "id": "1524", "title": "Ägypten", "folder": "gypten-1524" },
      { "id": "1958", "title": "Algerien", "folder": "algerien-6-1958" },
      { "id": "1970", "title": "Benin", "folder": "benin-1970" },
      { "id": "1971", "title": "Côte d'Ivoire (Elfenbeinküste)", "folder": "cote-d-039-ivoire-elfenbeinkuste-1971" },
      { "id": "1641", "title": "Gambia", "folder": "gambia-1641" },
      { "id": "1659", "title": "Guinea Bissau", "folder": "guinea-bissau-1659" },
      { "id": "1695", "title": "Kap Verde", "folder": "kap-verde-1695" },
      { "id": "1741", "title": "Libyen", "folder": "libyen-1741" },
      { "id": "1768", "title": "Marokko", "folder": "marokko-1768" },
      { "id": "1773", "title": "Mauretanien", "folder": "mauretanien-1773" },
      { "id": "5462", "title": "Die groesen regionen afrikas nord west ost zentral und sudafrika im vergleich", "folder": "die-groesen-regionen-afrikas-nord-west-ost-zentral-und-sudafrika-im-vergleich-5462" },
      { "id": "5473", "title": "Die sahara geographische barriere und lebensraum", "folder": "die-sahara-geographische-barriere-und-lebensraum-5473" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nordafrika+westafrika&t=3752"
  },
  "ostafrika-und-zentralafrika": {
    "slug": "ostafrika-und-zentralafrika",
    "title": "Afrika: Ostafrika & Zentralafrika",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Kenia, Äthiopien, Tansania, Kongo, Ruanda, Burundi, Sahelzone und Nilquellen.",
    "longDesc": "Vom Ostafrikanischen Grabenbruch (Rift Valley) mit schneebedeckten Gipfeln wie dem Kilimandscharo bis zum dichten Kongobecken: Ost- und Zentralafrika sind Brennpunkte von Ökologie, Wandel und Herausforderungen.",
    "keyPoints": [
      "Ostafrika: Kenia (Nairobi), Äthiopien (Addis Abeba), Dschibuti, Eritrea und Somalia am Horn von Afrika",
      "Zentralafrika: Demokratische Republik Kongo, Republik Kongo, Kamerun, Gabun, Ruanda, Burundi",
      "Naturräume: Ostafrikanischer Graben, Viktoriasee, Kongobecken und die karge Sahelzone",
      "Herausforderungen: Desertifikation, Wasserknappheit, Bevölkerungswachstum und Flüchtlingsbewegungen"
],
    "exercises": [
      { "id": "1836", "title": "Ruanda", "folder": "ruanda-1836" },
      { "id": "1871", "title": "Somalia", "folder": "somalia-1871" },
      { "id": "1540", "title": "Äquatorialguinea", "folder": "quatorialguinea-1540" },
      { "id": "1547", "title": "Äthiopien", "folder": "thiopien-1547" },
      { "id": "1589", "title": "Burundi", "folder": "burundi-1589" },
      { "id": "1613", "title": "Dschibuti", "folder": "dschibuti-1613" },
      { "id": "1625", "title": "Eritrea", "folder": "eritrea-1625" },
      { "id": "1640", "title": "Gabun", "folder": "gabun-1640" },
      { "id": "1692", "title": "Kamerun", "folder": "kamerun-1692" },
      { "id": "1703", "title": "Kenia", "folder": "kenia-1703" },
      { "id": "1714", "title": "Kongo Republik", "folder": "kongo-republik-1714" },
      { "id": "1713", "title": "Kongo Demokratische Republik", "folder": "kongo-demokratische-republik-1713" },
      { "id": "3224", "title": "Escape room quot lander afrikas quot", "folder": "escape-room-quot-lander-afrikas-quot-3224" },
      { "id": "5430", "title": "Afrika und der klimawandel ursachen auswirkungen anpassung", "folder": "afrika-und-der-klimawandel-ursachen-auswirkungen-anpassung-5430" },
      { "id": "5437", "title": "Bevolkerungswachstum in afrika chancen und herausforderungen", "folder": "bevolkerungswachstum-in-afrika-chancen-und-herausforderungen-5437" },
      { "id": "5480", "title": "Die wirtschaftliche entwicklung afrikas im globalen kontext", "folder": "die-wirtschaftliche-entwicklung-afrikas-im-globalen-kontext-5480" },
      { "id": "5524", "title": "Unterschiedliche klimazonen afrikas und ihre auswirkungen auf die lebensweise", "folder": "unterschiedliche-klimazonen-afrikas-und-ihre-auswirkungen-auf-die-lebensweise-5524" },
      { "id": "5561", "title": "Umweltprobleme in afrika wustenbildung abholzung wassermangel", "folder": "umweltprobleme-in-afrika-wustenbildung-abholzung-wassermangel-5561" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ostafrika+zentralafrika&t=3752"
  },
  "suedliches-afrika-und-inseln": {
    "slug": "suedliches-afrika-und-inseln",
    "title": "Afrika: Südliches Afrika & Inseln",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Südafrika, Kapstadt, Angola, Sambia, Simbabwe, Madagaskar, Mauritius & Seychellen.",
    "longDesc": "Das südliche Afrika vereint hochentwickelte Wirtschaftsregionen mit atemberaubenden Savannen und Wüsten. Die Inselstaaten im Indischen Ozean sind weltbekannt für endemische Tier- und Pflanzenwelten.",
    "keyPoints": [
      "Südafrika: Wirtschaftliches Kraftzentrum mit Kapstadt, Johannesburg und reichem Bodenschatzvorkommen",
      "Binnen- und Küstenstaaten: Angola, Sambia, Simbabwe, Malawi, Lesotho und Eswatini",
      "Inselwelten: Madagaskar (viertgrößte Insel der Erde mit Lemuren), Mauritius, Seychellen, Komoren",
      "Landschaften: Kalahari-Wüste, Namib-Wüste, Okavangodelta und die Victoriafälle"
],
    "exercises": [
      { "id": "1844", "title": "Sambia", "folder": "sambia-1844" },
      { "id": "1976", "title": "São Tomé und Príncipe", "folder": "sao-tome-und-principe-1976" },
      { "id": "1862", "title": "Seychellen", "folder": "seychellen-1862" },
      { "id": "1866", "title": "Simbabwe", "folder": "simbabwe-1866" },
      { "id": "1882", "title": "Südafrika", "folder": "sudafrika-1882" },
      { "id": "1535", "title": "Angola", "folder": "angola-1535" },
      { "id": "1628", "title": "Eswatini Swasiland", "folder": "eswatini-swasiland-1628" },
      { "id": "1712", "title": "Komoren", "folder": "komoren-1712" },
      { "id": "1737", "title": "Lesotho", "folder": "lesotho-1737" },
      { "id": "1972", "title": "Madagaskar", "folder": "madagaskar-1972" },
      { "id": "1760", "title": "Malawi", "folder": "malawi-1760" },
      { "id": "1774", "title": "Mauritius", "folder": "mauritius-1774" },
      { "id": "6036", "title": "Kapstadt", "folder": "kapstadt-6036" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedliches+afrika&t=3752"
  },
  "zentralasien-und-der-kaukasus": {
    "slug": "zentralasien-und-der-kaukasus",
    "title": "Asien: Zentralasien & Kaukasus",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Kasachstan, Usbekistan, Kirgisistan, Tadschikistan, Turkmenistan, Georgien, Armenien & Aserbaidschan.",
    "longDesc": "Die Länder entlang der historischen Seidenstraße und im Kaukasusgebirge verbinden Europa mit Ostasien. Weite Steppen, Hochgebirge wie Pamir und Tienschan sowie reiche Bodenschätze prägen den Raum.",
    "keyPoints": [
      "Zentralasiatische Republiken: Kasachstan (Astana, Steppen), Usbekistan (Taschkent, Samarkand), Kirgisistan, Tadschikistan, Turkmenistan",
      "Kaukasus: Georgien, Armenien und Aserbaidschan (Baku am Kaspischen Meer)",
      "Afghanistan: Gebirgsland am Hindukusch mit strategischer Lage in Zentralasien",
      "Umwelt & Landschaft: Aralsee-Katastrophe, Wüsten (Karakum/Kysylkum) und gewaltige Hochgebirge"
],
    "exercises": [
      { "id": "1523", "title": "Afghanistan", "folder": "afghanistan-1523" },
      { "id": "1907", "title": "Armenien", "folder": "armenien-2-1907" },
      { "id": "1546", "title": "Aserbaidschan", "folder": "aserbaidschan-1546" },
      { "id": "1646", "title": "Georgien", "folder": "georgien-1646" },
      { "id": "1707", "title": "Kirgisistan", "folder": "kirgisistan-1707" },
      { "id": "1886", "title": "Tadschikistan", "folder": "tadschikistan-1886" },
      { "id": "1906", "title": "Turkmenistan", "folder": "turkmenistan-1906" },
      { "id": "1913", "title": "Usbekistan", "folder": "usbekistan-1913" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=zentralasien+kaukasus&t=3752"
  },
  "vorderasien-und-der-nahe-osten": {
    "slug": "vorderasien-und-der-nahe-osten",
    "title": "Asien: Vorderasien & Naher Osten",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Saudi-Arabien, VAE, Israel, Palästina, Irak, Iran, Jordanien, Kuwait, Libanon & Syrien.",
    "longDesc": "Vorderasien verbindet drei Kontinente an historischen Handelswegen. Gewaltige Erdöl- und Erdgasreserven an der Arabischen Halbinsel treffen auf Wüstenlandschaften und jahrtausendealte Hochkulturen.",
    "keyPoints": [
      "Arabische Halbinsel: Saudi-Arabien (Riad, Mekka), VAE (Dubai, Abu Dhabi), Katar, Kuwait, Bahrain, Jemen, Oman",
      "Levante & Zweistromland: Israel, Palästina, Jordanien, Libanon, Syrien und Irak (Euphrat und Tigris)",
      "Iran: Gewaltiges Hochland mit jahrtausendealter persischer Geschichte",
      "Ressourcen & Konflikte: Globale Bedeutung fossiler Energieträger und Wasserknappheit als Schlüsselfrage"
],
    "exercises": [
      { "id": "1554", "title": "Bahrain", "folder": "bahrain-1554" },
      { "id": "1678", "title": "Irak", "folder": "irak-1678" },
      { "id": "1679", "title": "Iran", "folder": "iran-1679" },
      { "id": "1682", "title": "Israel", "folder": "israel-1682" },
      { "id": "1687", "title": "Jemen", "folder": "jemen-1687" },
      { "id": "1688", "title": "Jordanien", "folder": "jordanien-1688" },
      { "id": "1698", "title": "Katar", "folder": "katar-1698" },
      { "id": "1725", "title": "Kuwait", "folder": "kuwait-1725" },
      { "id": "1739", "title": "Libanon", "folder": "libanon-1739" },
      { "id": "616", "title": "Israel und Palästina", "folder": "israel-und-palastina-616" },
      { "id": "1850", "title": "Saudi Arabien", "folder": "saudi-arabien-1850" },
      { "id": "1885", "title": "Syrien", "folder": "syrien-1885" },
      { "id": "1921", "title": "Vereinigte Arabische Emirate", "folder": "vereinigte-arabische-emirate-1921" },
      { "id": "5478", "title": "Die unterschiede zwischen dem nahen osten zentralasien und fernost", "folder": "die-unterschiede-zwischen-dem-nahen-osten-zentralasien-und-fernost-5478" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=naher+osten&t=3752"
  },
  "suedasien-indien-und-nachbarstaaten": {
    "slug": "suedasien-indien-und-nachbarstaaten",
    "title": "Asien: Südasien (Indien & Nachbarn)",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Indien (Hyderabad), Pakistan, Bangladesch, Nepal, Sri Lanka, Malediven, Ganges & Monsun.",
    "longDesc": "Der indische Subkontinent beherbergt rund ein Fünftel der gesamten Menschheit. Der Wechsel der Monsunwinde, der gewaltige Himalaja und das fruchtbare Gangesbecken bestimmen Leben, Landwirtschaft und Kultur.",
    "keyPoints": [
      "Indien: Größte Demokratie der Erde mit rasant wachsenden IT- und Industriemetropolen (z. B. Hyderabad)",
      "Nachbarstaaten: Pakistan (Indus), Bangladesch (Ganges-Brahmaputra-Delta), Sri Lanka und Nepal am Himalaja",
      "Inselstaat Malediven: Tief liegendes Atoll-Paradies, akut bedroht durch den globalen Meeresspiegelanstieg",
      "Der Monsun: Lebensnotwendiger Regenbringer für den Reisanbau, bei Extremen Ursache verheerender Fluten"
],
    "exercises": [
      { "id": "1557", "title": "Bangladesch", "folder": "bangladesch-1557" },
      { "id": "1675", "title": "Indien", "folder": "indien-1675" },
      { "id": "1762", "title": "Malediven", "folder": "malediven-1762" },
      { "id": "1796", "title": "Nepal", "folder": "nepal-1796" },
      { "id": "1816", "title": "Pakistan", "folder": "pakistan-1816" },
      { "id": "1876", "title": "Sri Lanka", "folder": "sri-lanka-1876" },
      { "id": "5468", "title": "Die rolle von flusssystemen wie ganges jangtse und mekong in der asiatischen entwicklung", "folder": "die-rolle-von-flusssystemen-wie-ganges-jangtse-und-mekong-in-der-asiatischen-entwicklung-5468" },
      { "id": "6020", "title": "Hyderabad indien", "folder": "hyderabad-indien-6020" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedasien+indien&t=3752"
  },
  "suedostasien-laender-und-inseln": {
    "slug": "suedostasien-laender-und-inseln",
    "title": "Asien: Südostasien (Länder & Inselwelten)",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Indonesien, Vietnam, Thailand, Philippinen, Singapur, Malaysia, Myanmar, Kambodscha & Laos.",
    "longDesc": "Südostasien fasziniert durch die Mischung aus kontinentalen Flussreichen am Mekong und Tausenden tropischen Inseln. Dynamische Tigerstaaten und globale Handelsdrehkreuze treiben den Aufschwung voran.",
    "keyPoints": [
      "Inselstaaten: Indonesien (größter Inselstaat der Erde mit 17.000 Inseln) und die Philippinen",
      "Festlandstaaten: Thailand (Bangkok), Vietnam (Mekong-Delta), Myanmar, Kambodscha, Laos",
      "Wirtschaftsmächte: Stadtstaat Singapur als globaler Finanz- und Logistikhub; Malaysia mit den Petronas Towers",
      "Natur & Relief: Tropischer Regenwald, Vulkanbögen des Feuerrings, Reisterrassenfeldbau"
],
    "exercises": [
      { "id": "1580", "title": "Brunei", "folder": "brunei-1580" },
      { "id": "1676", "title": "Indonesien", "folder": "indonesien-1676" },
      { "id": "1691", "title": "Kambodscha", "folder": "kambodscha-1691" },
      { "id": "1730", "title": "Laos", "folder": "laos-1730" },
      { "id": "1761", "title": "Malaysia", "folder": "malaysia-1761" },
      { "id": "1792", "title": "Myanmar", "folder": "myanmar-1792" },
      { "id": "1977", "title": "Philippinen", "folder": "philippinen-1977" },
      { "id": "1868", "title": "Singapur", "folder": "singapur-1868" },
      { "id": "1892", "title": "Thailand", "folder": "thailand-1892" },
      { "id": "1815", "title": "Osttimor", "folder": "osttimor-1815" },
      { "id": "1927", "title": "Vietnam", "folder": "vietnam-1927" },
      { "id": "3226", "title": "Escape room quot lander asiens quot", "folder": "escape-room-quot-lander-asiens-quot-3226" },
      { "id": "5432", "title": "Asiens klimaextreme monsun trockenheit und arktische bedingungen", "folder": "asiens-klimaextreme-monsun-trockenheit-und-arktische-bedingungen-5432" },
      { "id": "5539", "title": "Asiens klimaextreme monsun trockenheit und arktische bedingungen 2", "folder": "asiens-klimaextreme-monsun-trockenheit-und-arktische-bedingungen-2-5539" },
      { "id": "5567", "title": "Vulkane erdbeben und tsunamis naturgewalten in asien", "folder": "vulkane-erdbeben-und-tsunamis-naturgewalten-in-asien-5567" },
      { "id": "6014", "title": "Ho chi minh stadt", "folder": "ho-chi-minh-stadt-6014" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedostasien&t=3752"
  },
  "ostasien-china-japan-und-korea": {
    "slug": "ostasien-china-japan-und-korea",
    "title": "Asien: Ostasien (China, Japan & Korea)",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "China, Japan, Südkorea, Nordkorea, Mongolei, Chinas Aufstieg, Megastädte & Hightech.",
    "longDesc": "Ostasien ist eines der wirtschaftlichen und technologischen Kraftzentren der Erde. Von der Milliarden-Wirtschaftsmacht China über den hochentwickelten Inselstaat Japan bis zur geteilten koreanischen Halbinsel.",
    "keyPoints": [
      "Volksrepublik China: Bevölkerungsreichste Supermacht, Chinas Aufstieg zur Weltwirtschaftsmacht, Neue Seidenstraße",
      "Japan: Inselstaat zwischen Jahrhunderte alter Tradition und futuristischer Hochtechnologie (Tokio-Megacity)",
      "Koreanische Halbinsel: Hightech-Demokratie Südkorea (Seoul) vs. isolierte Diktatur Nordkorea (Pjöngjang)",
      "Mongolei: Dünn besiedelter Binnenstaat mit weiten Steppen und der Wüste Gobi"
],
    "exercises": [
      { "id": "1597", "title": "China", "folder": "china-1597" },
      { "id": "1686", "title": "Japan", "folder": "japan-1686" },
      { "id": "1786", "title": "Mongolei", "folder": "mongolei-1786" },
      { "id": "1980", "title": "Nordkorea", "folder": "nordkorea-1980" },
      { "id": "1883", "title": "Südkorea", "folder": "sudkorea-1883" },
      { "id": "5521", "title": "Sudostasien geographische vielfalt und wirtschaftlicher aufstieg", "folder": "sudostasien-geographische-vielfalt-und-wirtschaftlicher-aufstieg-5521" },
      { "id": "5560", "title": "Technologischer fortschritt in ostasien und seine auswirkungen auf die region", "folder": "technologischer-fortschritt-in-ostasien-und-seine-auswirkungen-auf-die-region-5560" },
      { "id": "5573", "title": "Wirtschaftsmacht asien von china bis indien", "folder": "wirtschaftsmacht-asien-von-china-bis-indien-5573" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ostasien+china+japan&t=3752"
  },
  "ozeanien-und-die-polargebiete": {
    "slug": "ozeanien-und-die-polargebiete",
    "title": "Ozeanien & die Polargebiete",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Fidschi, Papua-Neuguinea, Pazifische Inselwelten, Arktis, Antarktis und polare Lebensräume.",
    "longDesc": "Die Inselwelten Ozeaniens erstrecken sich über Millionen Quadratkilometer des Pazifiks. An den entgegengesetzten Enden der Erde liegen die eisbedeckten Polarregionen Arktis und Antarktis.",
    "keyPoints": [
      "Ozeanien: Gliederung in Melanesien (Papua-Neuguinea, Fidschi, Salomonen), Mikronesien und Polynesien (Samoa, Tonga)",
      "Inseltypen: Vulkanische Hochinseln vs. flache Korallenatolle mit akuter Bedrohung durch Klimawandel",
      "Die Arktis: Gefrorener Ozean umgeben von Kontinenten; Heimat von Eisbären und indigenen Völkern",
      "Die Antarktis: Kältester und trockenster Eiskontinent der Erde, geschützt durch den Antarktisvertrag"
],
    "exercises": [
      { "id": "1820", "title": "Papua Neuguinea", "folder": "papua-neuguinea-1820" },
      { "id": "1630", "title": "Fidschi", "folder": "fidschi-1630" },
      { "id": "1708", "title": "Kiribati", "folder": "kiribati-1708" },
      { "id": "1770", "title": "Marshallinseln", "folder": "marshallinseln-1770" },
      { "id": "1779", "title": "Mikronesien", "folder": "mikronesien-1779" },
      { "id": "1794", "title": "Nauru", "folder": "nauru-1794" },
      { "id": "1817", "title": "Palau", "folder": "palau-1817" },
      { "id": "1842", "title": "Salomonen", "folder": "salomonen-1842" },
      { "id": "1845", "title": "Samoa", "folder": "samoa-1845" },
      { "id": "1896", "title": "Tonga", "folder": "tonga-1896" },
      { "id": "1917", "title": "Vanuatu", "folder": "vanuatu-1917" },
      { "id": "5544", "title": "Naturkatastrophen in Ozeanien - Vulkane, Erdbeben, Zyklone", "folder": "naturkatastrophen-in-ozeanien-vulkane-erdbeben-zyklone-2-5544" },
      { "id": "2037", "title": "Die antarktis", "folder": "die-antarktis-2037" },
      { "id": "2038", "title": "Die arktis", "folder": "die-arktis-2038" },
      { "id": "5454", "title": "Die bevolkerung ozeaniens traditionen sprachen und siedlungsmuster", "folder": "die-bevolkerung-ozeaniens-traditionen-sprachen-und-siedlungsmuster-5454" },
      { "id": "5494", "title": "Geographische isolation und ihre auswirkungen auf die kultur in ozeanien", "folder": "geographische-isolation-und-ihre-auswirkungen-auf-die-kultur-in-ozeanien-5494" },
      { "id": "5513", "title": "Naturkatastrophen in ozeanien vulkane erdbeben zyklone", "folder": "naturkatastrophen-in-ozeanien-vulkane-erdbeben-zyklone-5513" },
      { "id": "5514", "title": "Ozeanien inselwelten im pazifik vielfalt und herausforderungen", "folder": "ozeanien-inselwelten-im-pazifik-vielfalt-und-herausforderungen-5514" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ozeanien+polargebiete&t=3752"
  },
  "australien-und-neuseeland": {
    "slug": "australien-und-neuseeland",
    "title": "Australien & Neuseeland",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Australien, Neuseeland, Outback, Great Barrier Reef, Flora & Fauna und Klimazonen.",
    "longDesc": "Australien ist der kleinste Kontinent und zugleich das sechstgrößte Land der Erde. Jahrmillionen geographischer Isolation brachten eine weltweit einzigartige Tier- und Pflanzenwelt hervor.",
    "keyPoints": [
      "Australien: Ein Kontinent zwischen rotem Outback, tropischem Regenwald und modernen Küstenmetropolen",
      "Neuseeland: Nord- und Südinsel mit Vulkanen, Geysiren, Fjorden und den Neuseeländischen Alpen",
      "Einzigartige Fauna: Beuteltiere (Känguru, Koala), Schnabeltier und endemische Pflanzenarten",
      "Great Barrier Reef: Größtes Korallenriff der Erde vor Queensland, bedroht durch Meereserwärmung"
],
    "exercises": [
      { "id": "1548", "title": "Australien", "folder": "australien-3-1548" },
      { "id": "1799", "title": "Neuseeland", "folder": "neuseeland-1799" },
      { "id": "1003", "title": "Australien", "folder": "australien-1003" },
      { "id": "1037", "title": "Australien 2", "folder": "australien-2-1037" },
      { "id": "5434", "title": "Australien ein kontinent zwischen wuste regenwald und kusten", "folder": "australien-ein-kontinent-zwischen-wuste-regenwald-und-kusten-5434" },
      { "id": "5455", "title": "Die einzigartige flora und fauna australiens geographische ursachen", "folder": "die-einzigartige-flora-und-fauna-australiens-geographische-ursachen-5455" },
      { "id": "5469", "title": "Die rolle von klimazonen in australien und neuseeland", "folder": "die-rolle-von-klimazonen-in-australien-und-neuseeland-5469" },
      { "id": "5534", "title": "Wirtschaftliche entwicklung in australien und ozeanien im globalen kontext", "folder": "wirtschaftliche-entwicklung-in-australien-und-ozeanien-im-globalen-kontext-5534" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=australien+neuseeland&t=3752"
  },
  "klimazonen-und-wetter": {
    "slug": "klimazonen-und-wetter",
    "title": "Klimazonen, Wetterphänomene & Atmosphäre",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Tropen, Subtropen, Gemäßigte & Polare Zone, Wetterentstehung, Dürren und Klimawandel.",
    "longDesc": "Das weltweite Klimasystem bestimmt die Lebensbedingungen auf der Erde. Sonneneinstrahlung, globale Windgürtel und Meeresströmungen gliedern unseren Planeten in charakteristische Klimazonen.",
    "keyPoints": [
      "5 Hauptklimazonen: Polare Zone, Subpolare Zone, Gemäßigte Zone, Subtropen und Tropen",
      "Wetterphänomene: Hoch- und Tiefdruckgebiete, Inversionswetterlagen, Föhn und Wolkenbildung",
      "Niederschlagsmuster: Passatzirkulation, Monsun, innertropische Konvergenzzone (ITC) und Trockengürtel",
      "Klimawandel: Zunahme von Extremwetterereignissen, Dürren weltweit und Verschiebung von Klimagürteln"
],
    "exercises": [
      { "id": "757", "title": "Klima und Wetter", "folder": "klima-und-wetter-757" },
      { "id": "758", "title": "Die Polare Klimazone", "folder": "die-polare-klimazone-758" },
      { "id": "759", "title": "Die gemäßigte Klimazone", "folder": "die-gemaesigte-klimazone-759" },
      { "id": "760", "title": "Die Subtropische Klimazone", "folder": "die-subtropische-klimazone-760" },
      { "id": "761", "title": "Die Tropische Klimazone", "folder": "die-tropische-klimazone-761" },
      { "id": "338", "title": "Das wetter", "folder": "das-wetter-338" },
      { "id": "762", "title": "Die tropische klimazone 2", "folder": "die-tropische-klimazone-2-762" },
      { "id": "1989", "title": "Das alpine klima", "folder": "das-alpine-klima-1989" },
      { "id": "1990", "title": "Das atlantische klima", "folder": "das-atlantische-klima-1990" },
      { "id": "1991", "title": "Das illyrische klima", "folder": "das-illyrische-klima-1991" },
      { "id": "1992", "title": "Das pannonische klima", "folder": "das-pannonische-klima-1992" },
      { "id": "1994", "title": "Die inversionswetterlage", "folder": "die-inversionswetterlage-1994" },
      { "id": "3191", "title": "Escape room quot wetter und klima quot", "folder": "escape-room-quot-wetter-und-klima-quot-3191" },
      { "id": "5483", "title": "Durren weltweit klimatische ursachen und regionale auswirkungen", "folder": "durren-weltweit-klimatische-ursachen-und-regionale-auswirkungen-5483" },
      { "id": "5507", "title": "Klimazonen im wandel wie sich unser planet verandert", "folder": "klimazonen-im-wandel-wie-sich-unser-planet-verandert-5507" },
      { "id": "5516", "title": "Satellitenbilder in der klimaforschung", "folder": "satellitenbilder-in-der-klimaforschung-5516" },
      { "id": "5538", "title": "Klimawandel und die veranderung der globalen niederschlagsmuster", "folder": "klimawandel-und-die-veranderung-der-globalen-niederschlagsmuster-5538" },
      { "id": "5545", "title": "Klimazonen und ihre unterschiede wie sie das leben auf der erde pragen", "folder": "klimazonen-und-ihre-unterschiede-wie-sie-das-leben-auf-der-erde-pragen-5545" },
      { "id": "1993", "title": "Der fohn warmer wind im gebirge", "folder": "der-fohn-warmer-wind-im-gebirge-1993" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=klimazonen+wetter&t=3752"
  },
  "weltmeere-und-ozeane": {
    "slug": "weltmeere-und-ozeane",
    "title": "Weltmeere, Ozeane & Meeresströmungen",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Pazifik, Atlantik, Indischer Ozean, Mittelmeer, Nordsee, Golfstrom & Meeresschutz.",
    "longDesc": "Ozeane bedecken über 70 Prozent der Erdoberfläche. Als gewaltige Wärmespeicher und Motor des globalen Wasserkreislaufs steuern sie das weltweite Wetter und bergen riesige Ressourcen.",
    "keyPoints": [
      "Die 5 Ozeane: Pazifischer Ozean (größter), Atlantik, Indischer Ozean, Antarktischer und Arktischer Ozean",
      "Nebenmeere: Mittelmeer, Nordsee, Ostsee, Rotes Meer, Totes Meer und Golf von Mexiko",
      "Meeresströmungen: Der Golfstrom als mitteleuropäische „Warmwasserheizung“ und das globale Förderband",
      "Nutzung & Schutz: Offshore-Windparks, Schifffahrtsstraßen, Überfischung und internationale Meeresschutzabkommen"
],
    "exercises": [
      { "id": "2008", "title": "Der Atlantische Ozean", "folder": "der-atlantische-ozean-2008" },
      { "id": "2009", "title": "Der Pazifische Ozean", "folder": "der-pazifische-ozean-2009" },
      { "id": "2010", "title": "Der Indische Ozean", "folder": "der-indische-ozean-2010" },
      { "id": "2011", "title": "Das Mittelmeer", "folder": "das-mittelmeer-2011" },
      { "id": "2012", "title": "Das Polarmeer", "folder": "das-polarmeer-2012" },
      { "id": "2013", "title": "Das Rote Meer", "folder": "das-rote-meer-2013" },
      { "id": "2014", "title": "Das Tote Meer", "folder": "das-tote-meer-2014" },
      { "id": "2015", "title": "Die Nordsee", "folder": "die-nordsee-2015" },
      { "id": "2016", "title": "Die Ostsee", "folder": "die-ostsee-2016" },
      { "id": "2075", "title": "Der Gold von Mexiko", "folder": "der-gold-von-mexiko-2075" },
      { "id": "2019", "title": "Der Rmelkanal", "folder": "der-rmelkanal-2019" },
      { "id": "2020", "title": "Der Golfstrom", "folder": "der-golfstrom-2020" },
      { "id": "5448", "title": "Der klimawandel und seine bedrohung fur kleine inselstaaten im pazifik", "folder": "der-klimawandel-und-seine-bedrohung-fur-kleine-inselstaaten-im-pazifik-5448" },
      { "id": "2057", "title": "Offshore windparks in der nordsee", "folder": "offshore-windparks-in-der-nordsee-2057" },
      { "id": "2058", "title": "L der nordsee", "folder": "l-der-nordsee-2058" },
      { "id": "4498", "title": "Wasser im kreislauf regen fluss und meer", "folder": "wasser-im-kreislauf-regen-fluss-und-meer-4498" },
      { "id": "3545", "title": "Internationale abkommen zum schutz der meere", "folder": "internationale-abkommen-zum-schutz-der-meere-3545" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ozeane+meere&t=3752"
  },
  "vegetationszonen-und-biome": {
    "slug": "vegetationszonen-und-biome",
    "title": "Vegetationszonen & Biome der Erde",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Tropischer Regenwald, Savanne, Steppe, Wüste, Oasen, Mischwald, Taiga & Tundra.",
    "longDesc": "Von den artenreichen Tropen bis zur kargen Polartundra passen sich Pflanzen und Tiere an Klima und Böden an. Biome sind die großen Lebensräume der Erde, die den Kohlenstoffkreislauf regulieren.",
    "keyPoints": [
      "Tropischer Regenwald: Stockwerkbau, enorme Artenvielfalt, empfindlicher Nährstoffkreislauf und Gefährdung",
      "Savannen & Steppen: Feucht-, Trocken- und Dornstrauchsavanne; Grassteppen in Eurasien und Nordamerika",
      "Wüsten & Oasen: Wendekreiswüsten (Sahara), Kältewüsten und Grundwasseroasen",
      "Nördliche Zonen: Sommergrüne Laub- und Mischwälder, borealer Nadelwald (Taiga) und baumlose Tundra"
],
    "exercises": [
      { "id": "2026", "title": "Die Sahara", "folder": "die-sahara-2026" },
      { "id": "2027", "title": "Der Tropische Regenwald", "folder": "der-tropische-regenwald-2027" },
      { "id": "2028", "title": "Laubwald Nadelwald und Mischwald", "folder": "laubwald-nadelwald-und-mischwald-2028" },
      { "id": "2029", "title": "Steppe", "folder": "steppe-2-2029" },
      { "id": "2031", "title": "Tundra", "folder": "tundra-2031" },
      { "id": "2032", "title": "Savanne", "folder": "savanne-2032" },
      { "id": "2033", "title": "Kältewüsten", "folder": "kaltewusten-2033" },
      { "id": "2034", "title": "Die Oase", "folder": "die-oase-2034" },
      { "id": "2035", "title": "Fjorde", "folder": "fjorde-2035" },
      { "id": "2053", "title": "Schokolade aus dem regenwald", "folder": "schokolade-aus-dem-regenwald-2053" },
      { "id": "5495", "title": "Gletscher als naturliche archive des klimas", "folder": "gletscher-als-naturliche-archive-des-klimas-5495" },
      { "id": "5474", "title": "Die spuren der gletscher wie sie landschaften pragen", "folder": "die-spuren-der-gletscher-wie-sie-landschaften-pragen-5474" },
      { "id": "5438", "title": "Das mysteriose leben unter den gletschern was passiert unter dem eis", "folder": "das-mysteriose-leben-unter-den-gletschern-was-passiert-unter-dem-eis-5438" },
      { "id": "5447", "title": "Der great barrier reef geographie bedeutung und bedrohung", "folder": "der-great-barrier-reef-geographie-bedeutung-und-bedrohung-5447" },
      { "id": "5570", "title": "Wie gletscher zur bildung von talern und fjorden beitragen", "folder": "wie-gletscher-zur-bildung-von-talern-und-fjorden-beitragen-5570" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=vegetationszonen&t=3752"
  },
  "erdbeben-vulkanismus-und-plattentektonik": {
    "slug": "erdbeben-vulkanismus-und-plattentektonik",
    "title": "Endogene Kräfte: Erdbeben, Vulkane & Plattentektonik",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Plattengrenzen, Erdbebenrisiken, Tsunamis, Vulkanismus und Entstehung von Gebirgen.",
    "longDesc": "Im Erdinneren herrschen gewaltige Kräfte. Die Erdkruste ist in lithosphärische Platten zerbrochen, deren Drift Erdbeben erzeugt, Vulkane speist und über Jahrmillionen mächtige Gebirge auffaltet.",
    "keyPoints": [
      "Plattentektonik: Konvergierende (Kollision), divergierende (Auseinanderdriften) und konservative Grenzen",
      "Erdbeben: Hypozentrum und Epizentrum, Seismographen, Richter-Skala und Risiken in urbanen Zentren",
      "Tsunamis: Entstehung durch Seebeben und verheerende Ausbreitung über Ozeanbecken",
      "Pazifischer Feuerring: Zone höchster geologischer Aktivität mit Tiefseegräben und Vulkanbögen"
],
    "exercises": [
      { "id": "4503", "title": "Wenn die Erde bebt – Warum sie wackelt (Teil 1)", "folder": "wenn-die-erde-bebt-warum-sie-wackelt-5-4503" },
      { "id": "4504", "title": "Wenn die Erde bebt – Warum sie wackelt (Teil 2)", "folder": "wenn-die-erde-bebt-warum-sie-wackelt-6-4504" },
      { "id": "4505", "title": "Wenn die Erde bebt – Warum sie wackelt (Teil 3)", "folder": "wenn-die-erde-bebt-warum-sie-wackelt-7-4505" },
      { "id": "4497", "title": "Vulkan bricht aus heiese lava flieest raus", "folder": "vulkan-bricht-aus-heiese-lava-flieest-raus-4497" },
      { "id": "5460", "title": "Die geheimnisse der erdbeben ursachen und globale auswirkungen", "folder": "die-geheimnisse-der-erdbeben-ursachen-und-globale-auswirkungen-5460" },
      { "id": "5488", "title": "Erdbebenrisiken in urbanen ballungsraumen", "folder": "erdbebenrisiken-in-urbanen-ballungsraumen-5488" },
      { "id": "5522", "title": "Tsunamis ursachen ausbreitung und geographische risikogebiete", "folder": "tsunamis-ursachen-ausbreitung-und-geographische-risikogebiete-5522" },
      { "id": "5528", "title": "Vulkanausbruche und ihre globale verteilung", "folder": "vulkanausbruche-und-ihre-globale-verteilung-5528" },
      { "id": "5529", "title": "Vulkanische aktivitaten und ihre auswirkungen auf die landwirtschaft", "folder": "vulkanische-aktivitaten-und-ihre-auswirkungen-auf-die-landwirtschaft-5529" },
      { "id": "5530", "title": "Wie die erde durch vulkanismus und erdbeben standig in bewegung ist", "folder": "wie-die-erde-durch-vulkanismus-und-erdbeben-standig-in-bewegung-ist-5530" },
      { "id": "5531", "title": "Wie erdbeben gebirgsmuster und landschaften verandern", "folder": "wie-erdbeben-gebirgsmuster-und-landschaften-verandern-5531" },
      { "id": "5566", "title": "Vulkanausbruche gefahrliche schonheit der natur", "folder": "vulkanausbruche-gefahrliche-schonheit-der-natur-5566" },
      { "id": "5571", "title": "Wie sich vulkanismus und erdbeben gegenseitig beeinflussen", "folder": "wie-sich-vulkanismus-und-erdbeben-gegenseitig-beeinflussen-5571" },
      { "id": "5579", "title": "Vulkanismus und die entstehung von inseln und bergen", "folder": "vulkanismus-und-die-entstehung-von-inseln-und-bergen-5579" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=erdbeben+vulkanismus&t=3752"
  },
  "gebirge-und-grosslandschaften-der-erde": {
    "slug": "gebirge-und-grosslandschaften-der-erde",
    "title": "Gebirgsbildung & Großlandschaften der Erde",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Kontinente, Gradnetz der Erde, Gebirgssysteme, Orogenese und globale Landschaftsformen.",
    "longDesc": "Wie formt sich die Erde über Jahrmillionen? Das Zusammenspiel endogener Kräfte (Gebirgsbildung) und exogener Kräfte (Verwitterung, Erosion) gestaltet das Antlitz unseres Planeten.",
    "keyPoints": [
      "Die Kontinente: Kontinentaldrift von Pangaea zu den heutigen 7 Erdteilen",
      "Gradnetz der Erde: Längen- und Breitengrade, Nullmeridian (Greenwich) und Äquator zur Orientierung",
      "Gebirgssysteme: Entstehung von Faltengebirgen durch Kontinentalkollisionen (Alpen, Himalaja, Anden)",
      "Gletscher & Täler: Wie eiszeitliche Gletscher U-Täler, Fjorde und Moränenlandschaften schufen"
],
    "exercises": [
      { "id": "2017", "title": "Das Gradnetz der Erde", "folder": "das-gradnetz-der-erde-2017" },
      { "id": "120", "title": "Kontinente", "folder": "kontinente-120" },
      { "id": "121", "title": "Kontinente 2", "folder": "kontinente-2-121" },
      { "id": "122", "title": "Lander und kontinente", "folder": "lander-und-kontinente-122" },
      { "id": "313", "title": "Die erde kontinente und weltmeere", "folder": "die-erde-kontinente-und-weltmeere-313" },
      { "id": "2046", "title": "Die kontinente und die weltmeere", "folder": "die-kontinente-und-die-weltmeere-2046" },
      { "id": "2947", "title": "Die erde eine scheibe oder eine kugel", "folder": "die-erde-eine-scheibe-oder-eine-kugel-2947" },
      { "id": "5456", "title": "Die entstehung von gebirgen wie die erde sich uber jahrmillionen formt", "folder": "die-entstehung-von-gebirgen-wie-die-erde-sich-uber-jahrmillionen-formt-5456" },
      { "id": "5493", "title": "Gebirgssysteme vom ursprung der gebirgsketten bis zu heutigen landschaften", "folder": "gebirgssysteme-vom-ursprung-der-gebirgsketten-bis-zu-heutigen-landschaften-5493" },
      { "id": "5457", "title": "Die entstehung von gebirgsmassiven und ihre entwicklung", "folder": "die-entstehung-von-gebirgsmassiven-und-ihre-entwicklung-5457" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=gebirge+kontinente&t=3752"
  },
  "kulturgeographie-und-siedlung": {
    "slug": "kulturgeographie-und-siedlung",
    "title": "Kulturgeographie & Siedlungsräume",
    "category": "Kultur-, Stadt- & Wirtschaftsgeographie",
    "shortDesc": "Siedlungsformen weltweit, ländliche vs. urbane Räume, Kultur & geographische Barrieren.",
    "longDesc": "Kulturgeographie erforscht die Wechselbeziehung zwischen Raum und menschlicher Gesellschaft: Wie Geographie Kultur formt und wie Menschen ländliche und städtische Räume gestalten.",
    "keyPoints": [
      "Siedlungsformen: Weiler, Haufendörfer, Reihendörfer, Rundlinge und moderne Vororte",
      "Stadt vs. Land: Strukturwandel im ländlichen Raum, Daseinsvorsorge und Lebensqualität",
      "Kultur & Raum: Geographische Barrieren (Meere, Gebirge) und die Entstehung von Sprach- und Kulturräumen",
      "Ethnische Minderheiten: Geographische Verteilung von Bevölkerungsgruppen und Kulturräumen"
],
    "exercises": [
      { "id": "5508", "title": "Kultur und Identität - Die Rolle der Geographie in der kulturellen Entwicklung", "folder": "kultur-und-identitat-die-rolle-der-geographie-in-der-kulturellen-entwicklung-5508" },
      { "id": "5509", "title": "Kulturelle Identität und geographische Trennlinien", "folder": "kulturelle-identitat-und-geographische-trennlinien-5509" },
      { "id": "2068", "title": "Ethnische minderheiten in europa", "folder": "ethnische-minderheiten-in-europa-2068" },
      { "id": "2001", "title": "Leben im dorf und in der stadt im vergleich", "folder": "leben-im-dorf-und-in-der-stadt-im-vergleich-2001" },
      { "id": "5461", "title": "Die geographische verbreitung von sprachen und ihre kulturelle bedeutung", "folder": "die-geographische-verbreitung-von-sprachen-und-ihre-kulturelle-bedeutung-5461" },
      { "id": "5465", "title": "Die kulturellen unterschiede zwischen stadtischen und landlichen gebieten", "folder": "die-kulturellen-unterschiede-zwischen-stadtischen-und-landlichen-gebieten-5465" },
      { "id": "5489", "title": "Ethnische gruppen und ihre geographische verteilung weltweit", "folder": "ethnische-gruppen-und-ihre-geographische-verteilung-weltweit-5489" },
      { "id": "5515", "title": "Religion und ihre geographische verteilung konflikte und verstandigung", "folder": "religion-und-ihre-geographische-verteilung-konflikte-und-verstandigung-5515" },
      { "id": "5517", "title": "Siedlungsformen und ihre geographische verteilung weltweit", "folder": "siedlungsformen-und-ihre-geographische-verteilung-weltweit-5517" },
      { "id": "5540", "title": "Kulturelle identitat und geographische trennlinien 2", "folder": "kulturelle-identitat-und-geographische-trennlinien-2-5540" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kulturgeographie&t=3752"
  },
  "megacities-urbanisierung-und-mobilitaet": {
    "slug": "megacities-urbanisierung-und-mobilitaet",
    "title": "Megacities, Urbanisierung & Urbane Mobilität",
    "category": "Kultur-, Stadt- & Wirtschaftsgeographie",
    "shortDesc": "Verstädterung, Megastädte weltweit, Slums, Landflucht, Fahrradstädte & nachhaltiger ÖPNV.",
    "longDesc": "Mehr als die Hälfte der Menschheit lebt heute in Städten. Rasanter Zuzug führt im globalen Süden zu gigantischen Megastädten, während weltweit innovative Konzepte für nachhaltige Mobilität entstehen.",
    "keyPoints": [
      "Urbanisierung & Landflucht: Ursachen für den Zuzug in Ballungsräume (Push- und Pull-Faktoren)",
      "Megastädte & Metropolen: Agglomerationen mit über 10 Millionen Einwohnern (Tokio, Delhi, São Paulo)",
      "Informelle Siedlungen: Herausforderungen in Favelas und Slums bei Trinkwasser, Sanitär und Infrastruktur",
      "Zukunftskonzepte: Fahrradfreundliche Städte (Kopenhagen-Modell), Ausbau von ÖPNV und Smart Cities"
],
    "exercises": [
      { "id": "5547", "title": "Ländliche vs. urbane Gebiete - Lebensqualität und Entwicklung", "folder": "landliche-vs-urbane-gebiete-lebensqualitat-und-entwicklung-5547" },
      { "id": "5527", "title": "Verstadterung in afrika stadtewachstum und informelle siedlungen", "folder": "verstadterung-in-afrika-stadtewachstum-und-informelle-siedlungen-5527" },
      { "id": "5433", "title": "Asiens megastadte wachstum und herausforderungen", "folder": "asiens-megastadte-wachstum-und-herausforderungen-5433" },
      { "id": "5435", "title": "Bevolkerungsdichte und urbanisierung in sudasien", "folder": "bevolkerungsdichte-und-urbanisierung-in-sudasien-5435" },
      { "id": "2005", "title": "Probleme von megastadten", "folder": "probleme-von-megastadten-2005" },
      { "id": "2006", "title": "Elendsviertel der groesstadte", "folder": "elendsviertel-der-groesstadte-2006" },
      { "id": "4485", "title": "Global goal 11 lebendige stadte zukunft in urbanen raumen", "folder": "global-goal-11-lebendige-stadte-zukunft-in-urbanen-raumen-4485" },
      { "id": "5470", "title": "Die rolle von pnv in der nachhaltigen stadtentwicklung", "folder": "die-rolle-von-pnv-in-der-nachhaltigen-stadtentwicklung-5470" },
      { "id": "5479", "title": "Die ursachen und folgen von landflucht und stadtischer migration", "folder": "die-ursachen-und-folgen-von-landflucht-und-stadtischer-migration-5479" },
      { "id": "5490", "title": "Fahrradfreundliche stadte geographische bedingungen fur erfolgreiche konzepte", "folder": "fahrradfreundliche-stadte-geographische-bedingungen-fur-erfolgreiche-konzepte-5490" },
      { "id": "5499", "title": "Grunes wachstum in urbanen gebieten nachhaltigkeit in stadten", "folder": "grunes-wachstum-in-urbanen-gebieten-nachhaltigkeit-in-stadten-5499" },
      { "id": "5518", "title": "Stadtentwicklung wie sich stadte im 21 jahrhundert verandern", "folder": "stadtentwicklung-wie-sich-stadte-im-21-jahrhundert-verandern-5518" },
      { "id": "5519", "title": "Stadtische resilienz gegenuber naturkatastrophen", "folder": "stadtische-resilienz-gegenuber-naturkatastrophen-5519" },
      { "id": "5535", "title": "Zersiedelung die ausdehnung von stadten ins umland", "folder": "zersiedelung-die-ausdehnung-von-stadten-ins-umland-5535" },
      { "id": "5551", "title": "Nachhaltige verkehrskonzepte fur die stadte der zukunft", "folder": "nachhaltige-verkehrskonzepte-fur-die-stadte-der-zukunft-5551" },
      { "id": "5564", "title": "Verkehrsgeographie in urbanen raumen herausforderungen und losungen", "folder": "verkehrsgeographie-in-urbanen-raumen-herausforderungen-und-losungen-5564" },
      { "id": "5565", "title": "Verstadterung ursachen folgen und chancen fur die zukunft", "folder": "verstadterung-ursachen-folgen-und-chancen-fur-die-zukunft-5565" },
      { "id": "5575", "title": "Die sozialen und okologischen herausforderungen der verstadterung", "folder": "die-sozialen-und-okologischen-herausforderungen-der-verstadterung-5575" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=megacities+urbanisierung&t=3752"
  },
  "stadtmodelle-und-stadtfunktionen": {
    "slug": "stadtmodelle-und-stadtfunktionen",
    "title": "Stadtmodelle & Stadtfunktionen",
    "category": "Kultur-, Stadt- & Wirtschaftsgeographie",
    "shortDesc": "Entstehung von Städten, Funktionen, Umland, europäische, orientalische & nordamerikanische Stadt.",
    "longDesc": "Städte sind Kristallisationspunkte menschlicher Zivilisation. Je nach Epoche, Kulturraum und geographischen Bedingungen entwickelten sich charakteristische Stadtgrundrisse und Funktionsmuster.",
    "keyPoints": [
      "Stadtentstehung: Historische Gründungsmotive (Handel, Schutz, Verwaltung, Flussübergänge)",
      "Stadtfunktionen: Wohnen, Arbeiten, Bildung, Versorgung, Erholung und Steuerung",
      "Kulturraumspezifische Modelle: Die historische europäische Stadt vs. die schachbrettartige US-Stadt (CBD)",
      "Die orientalische Stadt: Merkmale traditioneller Medina mit Basar, Moschee und Sackgassensystem"
],
    "exercises": [
      { "id": "2003", "title": "Die typische nordamerikanische stadt", "folder": "die-typische-nordamerikanische-stadt-2003" },
      { "id": "5476", "title": "Die typische nordamerikanische stadt 2", "folder": "die-typische-nordamerikanische-stadt-2-5476" },
      { "id": "5533", "title": "Wie stadtplanung den verkehr beeinflusst", "folder": "wie-stadtplanung-den-verkehr-beeinflusst-5533" },
      { "id": "1999", "title": "Entstehung von stadten", "folder": "entstehung-von-stadten-1999" },
      { "id": "2000", "title": "Funktionen einer stadt", "folder": "funktionen-einer-stadt-2000" },
      { "id": "2004", "title": "Die typische orientalische stadt", "folder": "die-typische-orientalische-stadt-2004" },
      { "id": "2007", "title": "Das umland einer stadt", "folder": "das-umland-einer-stadt-2007" },
      { "id": "5477", "title": "Die typische orientalisch stadt", "folder": "die-typische-orientalisch-stadt-5477" },
      { "id": "5556", "title": "Stadtebau und stadtplanung im zeitalter der urbanisierung", "folder": "stadtebau-und-stadtplanung-im-zeitalter-der-urbanisierung-5556" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=stadtmodelle&t=3752"
  },
  "wirtschaftsgeographie-und-welthandel": {
    "slug": "wirtschaftsgeographie-und-welthandel",
    "title": "Wirtschaftsgeographie & Welthandel",
    "category": "Kultur-, Stadt- & Wirtschaftsgeographie",
    "shortDesc": "Globaler Seeverkehr, Containerhäfen, internationale Handelsrouten und globale Disparitäten.",
    "longDesc": "Moderne Volkswirtschaften sind über weltweite Transportketten vernetzt. Riesige Containerschiffe und strategische Nadelöhre wie Panama- und Sueskanal halten den globalen Warenverkehr in Gang.",
    "keyPoints": [
      "Containerisierung: Revolutionierung des Welthandels durch standardisierte Frachtbehälter",
      "Maritime Knotenpunkte: Welthäfen wie Shanghai, Singapur, Rotterdam und Hamburg",
      "Strategische Seewege: Straße von Malakka, Sueskanal, Panamakanal und Straße von Hormus",
      "Globale Disparitäten: Ungleiche Verteilung von Rohstoffen, Produktion und Wohlstand"
],
    "exercises": [
      { "id": "5555", "title": "Seeverkehr und globalhandel containerhafen als schlusselpunkte der weltwirtschaft", "folder": "seeverkehr-und-globalhandel-containerhafen-als-schlusselpunkte-der-weltwirtschaft-5555" },
      { "id": "5569", "title": "Wie digitalisierung die wirtschaftsgeographie verandert", "folder": "wie-digitalisierung-die-wirtschaftsgeographie-verandert-5569" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wirtschaftsgeographie&t=3752"
  }
};
