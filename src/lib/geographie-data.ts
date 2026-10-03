export interface GeoExercise {
  id: string;
  title: string;
  folder: string;
}

export interface GeoTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: GeoExercise[];
  worksheetLink?: string;
}

export const geographieCategories: string[] = [
  "Österreich & Alpenraum",
  "Deutschland",
  "Die Schweiz",
  "Europa & Die EU",
  "Kontinente & Weltregionen",
  "Physische Geographie & Erde",
  "Kultur-, Stadt- & Wirtschaftsgeographie"
];

export const geographieTopics: Record<string, GeoTopic> = {
  "geographie-oesterreichs": {
    "slug": "geographie-oesterreichs",
    "title": "Geographie Österreichs: Topographie & Staat",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Die 9 Bundesländer, Großlandschaften, Wirtschaftsräume, Staatsgründung und Bevölkerung.",
    "longDesc": "Österreich ist ein mitteleuropäischer Binnenstaat mit ausgeprägter alpiner Landschaft. Die 9 Bundesländer gliedern sich in fünf charakteristische Großlandschaften von den Hochalpen bis zum Wiener Becken.",
    "keyPoints": [
      "5 Großlandschaften: Alpen (ca. 63 %), Granit- und Gneishochland, Karpatenvorland, Wiener Becken, Ostvorland",
      "Höchster Gipfel: Großglockner (3.798 m) | Hauptstrom: Donau",
      "Wirtschaft & Transit: Zentrale Lage in Europa mit alpinen Nord-Süd-Achsen und starker Industrie",
      "Staat & Geschichte: Ostarrichi 996, Erste Republik 1918 und Staatsvertrag 1955"
    ],
    "exercises": [
      {
        "id": "414",
        "title": "Bundesländer und wichtige Städte Österreichs",
        "folder": "bundeslander-und-wichtige-stadte-sterreichs-414"
      },
      {
        "id": "133",
        "title": "Bundesländer Österreichs (einfach)",
        "folder": "bundeslander-sterreich-einfach-133"
      },
      {
        "id": "134",
        "title": "Bundesländer Österreichs (schwer)",
        "folder": "bundeslander-sterreich-schwer-134"
      },
      {
        "id": "aut-allg-5",
        "title": "Österreich im Überblick – Geographie und Topographie",
        "folder": "sterreich-im-berblick-487"
      },
      {
        "id": "aut-allg-7",
        "title": "Hauptstädte der 9 österreichischen Bundesländer",
        "folder": "hauptstadte-der-bundeslander-sterreich-136"
      },
      {
        "id": "aut-allg-8",
        "title": "Bundesländer Österreich Memory",
        "folder": "bundeslander-sterreich-memory-135"
      },
      {
        "id": "488",
        "title": "Alpen",
        "folder": "alpen-488"
      },
      {
        "id": "494",
        "title": "Wirtschaft in Österreich",
        "folder": "wirtschaft-in-sterreich-494"
      },
      {
        "id": "2061",
        "title": "Bevölkerungsentwicklung in Österreich",
        "folder": "bevolkerungsentwicklung-in-sterreich-2061"
      },
      {
        "id": "aut-allg-6",
        "title": "Bevölkerung Österreichs – Demographie und Siedlungsräume",
        "folder": "bevolkerung-sterreichs-497"
      },
      {
        "id": "2062",
        "title": "Österreich als Transitland",
        "folder": "sterreich-als-transitland-2062"
      },
      {
        "id": "2063",
        "title": "Industrieräume in Österreihch",
        "folder": "industrieraume-in-sterreihch-2063"
      },
      {
        "id": "1813",
        "title": "Österreich",
        "folder": "sterreich-1813"
      },
      {
        "id": "496",
        "title": "Klima und Wetter Österreichs",
        "folder": "klima-und-wetter-sterreichs-496"
      },
      {
        "id": "aut-lw-1",
        "title": "Landwirtschaft in Österreich – Bergbauern & Ackerbau",
        "folder": "landwirtschaft-in-sterreich-2052"
      },
      {
        "id": "aut-min-1",
        "title": "Volksgruppen & Minderheiten in Österreich",
        "folder": "minderheiten-in-sterreich-5715"
      },
      {
        "id": "aut-allg-1",
        "title": "Ostarrichi – Urkunde und Geburtsstunde Österreichs (996)",
        "folder": "ostarrichi-geburtsstunde-sterreichs-3122"
      },
      {
        "id": "aut-allg-2",
        "title": "Die Entstehung Österreichs – Vom Herzogtum zur Großmacht",
        "folder": "entstehung-sterreichs-3316"
      },
      {
        "id": "aut-allg-3",
        "title": "Ausrufung der Republik Österreich 1918",
        "folder": "ausrufung-der-republik-sterreich-1918-2892"
      },
      {
        "id": "aut-allg-4",
        "title": "Der Österreichische Nationalfeiertag (26. Oktober)",
        "folder": "der-sterreichische-nationalfeiertag-6508"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geographie+oesterreich&t=3752"
  },
  "oesterreich-grosslandschaften": {
    "slug": "oesterreich-grosslandschaften",
    "title": "Österreich: Die 5 Großlandschaften & Naturräume",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Granit- und Gneishochland, Karpatenvorland, Wiener Becken, Ostvorland und Nationalparks.",
    "longDesc": "Österreich gliedert sich naturräumlich in fünf große Einheiten: Das böhmische Massiv (Granit- und Gneishochland), das Alpen- und Karpatenvorland, das Wiener Becken, das Vorland im Osten und Südosten sowie die Alpen.",
    "keyPoints": [
      "Die 5 Großlandschaften im geologischen und klimatischen Profil",
      "Wiener Becken & Vorland: Senkungszonen und fruchtbare Übergänge zur Pannonischen Tiefebene",
      "Schutzgebiete: Nationalparks von den Auwäldern an der Donau bis zu den Alpen"
    ],
    "exercises": [
      {
        "id": "489",
        "title": "Alpen- und Karpatenvorland",
        "folder": "alpen-und-karpatenvorland-489"
      },
      {
        "id": "490",
        "title": "Wiener Becken",
        "folder": "wiener-becken-490"
      },
      {
        "id": "491",
        "title": "Granit- und Gneishochland",
        "folder": "granit-und-gneishochland-491"
      },
      {
        "id": "492",
        "title": "Vorland im Osten und Südosten",
        "folder": "vorland-im-osten-und-sudosten-492"
      },
      {
        "id": "3236",
        "title": "Escape Room: Großlandschaften Österreichs",
        "folder": "escape-room-quot-groeslandschaften-sterreichs-quot-3236"
      },
      {
        "id": "1199",
        "title": "Nationalparks in Österreich",
        "folder": "test-5-1199"
      },
      {
        "id": "5660",
        "title": "Die Donau-Auen",
        "folder": "die-donau-auen-5660"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=grosslandschaften+oesterreich&t=3752"
  },
  "oesterreich-hochalpen-und-gipfel": {
    "slug": "oesterreich-hochalpen-und-gipfel",
    "title": "Österreich: Hochgebirge, Tauern & Alpengipfel",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Großglockner, Hohe Tauern, Pasterze, Gebirgsbildung und alpenweite Hauptkämme.",
    "longDesc": "Die österreichischen Zentralalpen bilden das alpine Rückgrat des Landes. Mit dem Nationalpark Hohe Tauern und dem Großglockner beherbergen sie die mächtigsten Gletscher- und Felsmassive Österreichs.",
    "keyPoints": [
      "Großglockner (3.798 m): Höchster Berg Österreichs in den Hohen Tauern",
      "Nationalpark Hohe Tauern: Größtes Schutzgebiet der Alpen mit Pasterzengletscher",
      "Geologie der Alpen: Entstehung, Faltengebirge, Permafrost und Gletscherschmelze"
    ],
    "exercises": [
      {
        "id": "493",
        "title": "Gebirge in Österreich",
        "folder": "gebirge-in-sterreich-493"
      },
      {
        "id": "1996",
        "title": "Der Großglockner",
        "folder": "der-groesglockner-1996"
      },
      {
        "id": "aut-gg-1",
        "title": "Der Großglockner – Höchster Berg Österreichs",
        "folder": "der-groesglockner-2-5633"
      },
      {
        "id": "1998",
        "title": "Die Hohen Tauern",
        "folder": "die-hohen-tauern-1998"
      },
      {
        "id": "aut-alp-1",
        "title": "Die Hohen Tauern – Dach der österreichischen Alpen",
        "folder": "die-hohen-tauern-2-5676"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=alpen+oesterreich&t=3752"
  },
  "oesterreich-gewaesser-und-donau": {
    "slug": "oesterreich-gewaesser-und-donau",
    "title": "Österreich: Donau & Flusssysteme",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Die Donau in Österreich, Wasserkraft, Binnenschifffahrt und alpenweite Flussläufe.",
    "longDesc": "Die Donau ist die Lebensader Mitteleuropas und durchquert Österreich auf rund 350 Kilometern. Sie entwässert fast das gesamte Bundesgebiet ins Schwarze Meer und ist von zentraler Bedeutung für Energie und Transport.",
    "keyPoints": [
      "Die Donau in Österreich: Stromlauf, Donaukraftwerke und Hochwasserschutz",
      "Europäische Hauptwasserscheiden und das Einzugsgebiet der Donau",
      "Binnenschifffahrt auf der Rhein-Main-Donau-Großschifffahrtsstraße"
    ],
    "exercises": [
      {
        "id": "495",
        "title": "Gewässer in Österreich",
        "folder": "gewasser-in-sterreich-495"
      },
      {
        "id": "5659",
        "title": "Die Donau in Österreich",
        "folder": "die-donau-in-sterreich-5659"
      },
      {
        "id": "aut-gew-5",
        "title": "Die Thaya – Grenzfluss und Nationalpark Thayatal",
        "folder": "die-thaya-5693"
      },
      {
        "id": "aut-gew-6",
        "title": "Der Kamp – Waldviertler Stauseen",
        "folder": "der-kamp-5637"
      },
      {
        "id": "aut-gew-4",
        "title": "Die March – Grenzfluss zu Slowakei und Mähren",
        "folder": "die-march-5682"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=donau+oesterreich&t=3752"
  },
  "oesterreich-niederoesterreich": {
    "slug": "oesterreich-niederoesterreich",
    "title": "Niederösterreich: Regionen, Viertel & Städte",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Die 4 Viertel (Wald-, Wein-, Most-, Industrieviertel), Wachau, Marchfeld, St. Pölten, Wiener Neustadt und Regionalstädte.",
    "longDesc": "Niederösterreich ist das flächenmäßig größte Bundesland Österreichs. Es umgibt die Bundeshauptstadt Wien und gliedert sich traditionell in vier Viertel: Vom Granithochland des Waldviertels über das Lösshügelland des Weinviertels bis zum alpinen Mostviertel und dem Industrieviertel.",
    "keyPoints": [
      "Vier Viertel: Waldviertel, Weinviertel, Mostviertel, Industrieviertel",
      "Kultur- & Naturräume: Die Wachau (UNESCO-Welterbe), Marchfeld und Nationalpark Thayatal",
      "Städte & Zentren: Landeshauptstadt St. Pölten, Wiener Neustadt, Krems, Amstetten, Mödling, Klosterneuburg, Schwechat, Tulln"
    ],
    "exercises": [
      {
        "id": "481",
        "title": "Niederösterreich",
        "folder": "niederosterreich-481"
      },
      {
        "id": "5669",
        "title": "Die Geschichte Niederösterreichs",
        "folder": "die-geschichte-niederosterreichs-5669"
      },
      {
        "id": "aut-lh-4",
        "title": "St. Pölten – Landeshauptstadt Niederösterreichs",
        "folder": "st-polten-5723"
      },
      {
        "id": "aut-wac-1",
        "title": "Die Wachau – Weltkulturerbe & Weinbaulandschaft an der Donau",
        "folder": "die-wachau-5696"
      },
      {
        "id": "aut-no-1",
        "title": "Das Waldviertel – Granithochland & Moore",
        "folder": "das-waldviertel-5621"
      },
      {
        "id": "aut-no-2",
        "title": "Das Weinviertel – Lösshügelland & Kellergassen",
        "folder": "das-weinviertel-5622"
      },
      {
        "id": "aut-no-3",
        "title": "Das Mostviertel – Von der Donau bis zum Ötscher",
        "folder": "das-mostviertel-5604"
      },
      {
        "id": "aut-reg-1",
        "title": "Das Industrieviertel",
        "folder": "das-industrieviertel-5591"
      },
      {
        "id": "aut-reg-2",
        "title": "Das Marchfeld – Kornkammer Österreichs",
        "folder": "das-marchfeld-5601"
      },
      {
        "id": "aut-np-2",
        "title": "Der Nationalpark Thayatal",
        "folder": "nationalpark-thayatal-5718"
      },
      {
        "id": "5581",
        "title": "Baden bei Wien",
        "folder": "baden-bei-wien-2-5581"
      },
      {
        "id": "aut-st-wn",
        "title": "Wiener Neustadt – Statutarstadt im Steinfeld",
        "folder": "wiener-neustadt-1440"
      },
      {
        "id": "5710",
        "title": "Krems an der Donau – Stadt und Tor zur Wachau",
        "folder": "krems-an-der-donau-5710"
      },
      {
        "id": "aut-st-1",
        "title": "Amstetten – Zentralort im Mostviertel",
        "folder": "amstetten-2-5580"
      },
      {
        "id": "aut-st-3",
        "title": "Mödling – Historische Stadt am Wienerwald",
        "folder": "modling-2-5716"
      },
      {
        "id": "aut-st-4",
        "title": "Klosterneuburg – Stift und Babenbergerstadt",
        "folder": "klosterneuburg-2-1758"
      },
      {
        "id": "aut-st-5",
        "title": "Schwechat – Industriestadt und Flughafen",
        "folder": "schwechat-1853"
      },
      {
        "id": "aut-st-6",
        "title": "Tulln an der Donau – Gartenstadt",
        "folder": "tulln-1903"
      },
      {
        "id": "aut-st-23",
        "title": "Perchtoldsdorf – Marktgemeinde und Weinhauerort bei Wien",
        "folder": "perchtoldsdorf-1826"
      },
      {
        "id": "aut-st-24",
        "title": "Ternitz – Industriestadt im Schwarzatal",
        "folder": "ternitz-1889"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=niederoesterreich&t=3752"
  },
  "oesterreich-oberoesterreich": {
    "slug": "oesterreich-oberoesterreich",
    "title": "Oberösterreich: Viertel, Salzkammergut & Zentralraum",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Mühl-, Inn-, Hausruck- und Traunviertel, Nationalpark Kalkalpen, Linz, Wels, Steyr und Salzkammergut.",
    "longDesc": "Oberösterreich verbindet das Granithochland des Mühlviertels nördlich der Donau mit dem fruchtbaren Alpenvorland und den majestätischen Kalkalpen im Süden. Der Linzer Zentralraum bildet den industriellen Kern Österreichs.",
    "keyPoints": [
      "Die 4 Viertel: Mühlviertel, Innviertel, Hausruckviertel, Traunviertel",
      "Landschaften & Natur: Das Salzkammergut, Traunsee, Attersee, Hallstätter See und der Nationalpark Kalkalpen",
      "Städte: Landeshauptstadt Linz, Wels, Steyr, Gmunden, Braunau am Inn, Traun und Leonding"
    ],
    "exercises": [
      {
        "id": "480",
        "title": "Oberösterreich",
        "folder": "oberosterreich-480"
      },
      {
        "id": "5670",
        "title": "Die Geschichte Oberösterreichs",
        "folder": "die-geschichte-oberosterreichs-5670"
      },
      {
        "id": "5714",
        "title": "Linz",
        "folder": "linz-2-5714"
      },
      {
        "id": "5593",
        "title": "Das Innviertel",
        "folder": "das-innviertel-5593"
      },
      {
        "id": "aut-reg-3",
        "title": "Das Hausruckviertel – Hügelland und Braunkohlerevier",
        "folder": "das-hausruckviertel-5589"
      },
      {
        "id": "aut-reg-4",
        "title": "Das Mühlviertel – Granithochland nördlich der Donau",
        "folder": "das-muhlviertel-5605"
      },
      {
        "id": "aut-oo-1",
        "title": "Das Traunviertel – Alpenvorland und Voralpen",
        "folder": "das-traunviertel-5619"
      },
      {
        "id": "aut-skg-1",
        "title": "Das Salzkammergut – Seen- und Kulturlandschaft",
        "folder": "das-salzkammergut-5613"
      },
      {
        "id": "5642",
        "title": "Der Nationalpark Kalkalpen",
        "folder": "der-nationalpark-kalkalpen-5642"
      },
      {
        "id": "aut-ds-1",
        "title": "Das Dachsteinmassiv – Gletscher & Karst",
        "folder": "das-dachsteinmassiv-5584"
      },
      {
        "id": "aut-tr-1",
        "title": "Die Traun – Vom Salzkammergut zur Donau",
        "folder": "die-traun-5694"
      },
      {
        "id": "5626",
        "title": "Der Attersee",
        "folder": "der-attersee-5626"
      },
      {
        "id": "5648",
        "title": "Der Traunsee",
        "folder": "der-traunsee-5648"
      },
      {
        "id": "5634",
        "title": "Der hallstatter see",
        "folder": "der-hallstatter-see-5634"
      },
      {
        "id": "aut-st-7",
        "title": "Wels – Zweitgrößte Stadt Oberösterreichs",
        "folder": "wels-2-5726"
      },
      {
        "id": "aut-st-8",
        "title": "Steyr – Romantikstadt an Enns und Steyr",
        "folder": "steyr-2-5724"
      },
      {
        "id": "aut-st-9",
        "title": "Gmunden – Keramikstadt am Traunsee",
        "folder": "gmunden-5703"
      },
      {
        "id": "1578",
        "title": "Braunau am Inn",
        "folder": "braunau-am-inn-1578"
      },
      {
        "id": "aut-st-10",
        "title": "Traun – Industriestadt im Zentralraum",
        "folder": "traun-1898"
      },
      {
        "id": "aut-st-11",
        "title": "Leonding – Stadt im Linzer Zentralraum",
        "folder": "leonding-2-5713"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=oberoesterreich&t=3752"
  },
  "oesterreich-salzburg": {
    "slug": "oesterreich-salzburg",
    "title": "Salzburg: Stadt, Gaue, Tauern & Salzgewinnung",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Die 5 Gaue (Flach-, Tenn-, Pon-, Pin-, Lungau), Festung Hohensalzburg, Salzach, Krimmler Wasserfälle.",
    "longDesc": "Das Bundesland Salzburg erstreckt sich von der historischen Mozartstadt Salzburg und den sanften Hügeln des Flachgaus bis zu den eisbedeckten Dreitausendern der Hohen Tauern.",
    "keyPoints": [
      "Die 5 Gaue: Flachgau, Tennengau, Pongau, Pinzgau, Lungau (UNESCO-Biosphärenpark)",
      "Landeshauptstadt Salzburg: Festung Hohensalzburg, Altstadt (UNESCO-Weltkulturerbe) und Salzbergbau",
      "Naturwunder: Krimmler Wasserfälle, Salzach, Wolfgangsee und alpine Talschaften"
    ],
    "exercises": [
      {
        "id": "aut-bnd-sb",
        "title": "Salzburg – Landeskunde & Alpenvorland",
        "folder": "salzburg-479"
      },
      {
        "id": "5720",
        "title": "Salzburg (Stadt)",
        "folder": "salzburg-stadt-5720"
      },
      {
        "id": "5671",
        "title": "Die Geschichte Salzburgs",
        "folder": "die-geschichte-salzburgs-5671"
      },
      {
        "id": "5665",
        "title": "Die Festung Hohensalzburg",
        "folder": "die-festung-hohensalzburg-5665"
      },
      {
        "id": "5721",
        "title": "Salzburg und ihre Salzbergwerke",
        "folder": "salzburg-und-ihre-salzbergwerke-5721"
      },
      {
        "id": "aut-reg-5",
        "title": "Der Flachgau – Salzburger Seengebiet",
        "folder": "das-flachgau-5585"
      },
      {
        "id": "aut-reg-6",
        "title": "Der Tennengau – Salzachöfen und Hallein",
        "folder": "der-tennengau-5647"
      },
      {
        "id": "aut-reg-7",
        "title": "Der Pongau – Salzburger Hochtal und Tauern",
        "folder": "das-pongau-5612"
      },
      {
        "id": "aut-reg-8",
        "title": "Der Pinzgau – Hohe Tauern und Zeller See",
        "folder": "der-pinzgau-5644"
      },
      {
        "id": "aut-reg-9",
        "title": "Der Lungau – UNESCO-Biosphärenpark",
        "folder": "das-lungau-5600"
      },
      {
        "id": "aut-st-12",
        "title": "Saalfelden am Steinernen Meer",
        "folder": "saalfelden-2-5719"
      },
      {
        "id": "aut-st-13",
        "title": "Hallein – Kelten- und Salzstadt an der Salzach",
        "folder": "hallein-2-5705"
      },
      {
        "id": "aut-gew-3",
        "title": "Die Salzach – Hauptfluss Salzburgs",
        "folder": "die-salzach-5689"
      },
      {
        "id": "aut-gew-9",
        "title": "Die Krimmler Wasserfälle – Höchste Wasserfälle Österreichs",
        "folder": "die-krimmler-wasserfalle-5681"
      },
      {
        "id": "5655",
        "title": "Der Wolfgangsee",
        "folder": "der-wolfgangsee-5655"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=salzburg&t=3752"
  },
  "oesterreich-tirol": {
    "slug": "oesterreich-tirol",
    "title": "Tirol: Gebirgswelt, Talschaften & Städte",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Innsbruck, Inntal, Ötztal, Zillertal, Stubaital, Lechtal, Kaisergebirge, Kufstein, Kitzbühel und Osttirol.",
    "longDesc": "Tirol ist das Herz der österreichischen Alpen. Gekennzeichnet durch das mächtige Inntal und verzweigte Hochgebirgstäler, beherbergt es berühmte Gebirgsmassive und Wintersportzentren.",
    "keyPoints": [
      "Landeshauptstadt Innsbruck: Goldenes Dachl, Nordkette und Knotenpunkt am Brennerkorridor",
      "Täler & Alpen: Inntal, Ötztal, Stubaital, Zillertal, Lechtal, Kaisergebirge und Kitzbüheler Alpen",
      "Städte & Orte: Kufstein, Kitzbühel, Schwaz, Telfs und die Exklave Osttirol"
    ],
    "exercises": [
      {
        "id": "aut-bnd-tr",
        "title": "Tirol – Land im Gebirge",
        "folder": "tirol-478"
      },
      {
        "id": "aut-bnd-tr-g",
        "title": "Die Geschichte Tirols",
        "folder": "die-geschichte-tirols-2-5672"
      },
      {
        "id": "5706",
        "title": "Innsbruck",
        "folder": "innsbruck-2-5706"
      },
      {
        "id": "aut-lh-2",
        "title": "Das Goldene Dachl in Innsbruck",
        "folder": "das-goldene-dachl-5587"
      },
      {
        "id": "5592",
        "title": "Das Inntal",
        "folder": "das-inntal-5592"
      },
      {
        "id": "5636",
        "title": "Der Inn",
        "folder": "der-inn-5636"
      },
      {
        "id": "5624",
        "title": "Der Achensee",
        "folder": "der-achensee-5624"
      },
      {
        "id": "5594",
        "title": "Das Kaisergebirge",
        "folder": "das-kaisergebirge-5594"
      },
      {
        "id": "5611",
        "title": "Das ztal und die ztaler alpen",
        "folder": "das-ztal-und-die-ztaler-alpen-5611"
      },
      {
        "id": "5617",
        "title": "Das Stubaital und die Stubaier Alpen",
        "folder": "das-stubaital-und-die-stubaier-alpen-5617"
      },
      {
        "id": "5623",
        "title": "Das Zilleretal und die Zillertaler Alpen",
        "folder": "das-zilleretal-und-die-zillertaler-alpen-5623"
      },
      {
        "id": "5598",
        "title": "Das Lechtal und die Lechtaler Alpen",
        "folder": "das-lechtal-und-die-lechtaler-alpen-5598"
      },
      {
        "id": "aut-gew-7",
        "title": "Der Lech – Wildfluss durch das Lechtal",
        "folder": "der-lech-5639"
      },
      {
        "id": "5680",
        "title": "Die kitzbuhler alpen",
        "folder": "die-kitzbuhler-alpen-5680"
      },
      {
        "id": "aut-st-14",
        "title": "Kufstein – Festungsstadt an der grünen Inn",
        "folder": "kufstein-2-5711"
      },
      {
        "id": "aut-st-15",
        "title": "Kitzbühel – Hahnenkamm und Kitzbüheler Alpen",
        "folder": "kitzbuhel-5708"
      },
      {
        "id": "aut-st-16",
        "title": "Schwaz in Tirol – Mittelalterliche Silberstadt",
        "folder": "schwaz-5722"
      },
      {
        "id": "aut-st-25",
        "title": "Telfs – Marktgemeinde im Tiroler Oberinntal",
        "folder": "telfs-1888"
      },
      {
        "id": "aut-ot-1",
        "title": "Osttirol – Zwischen Hohen Tauern und Karnischen Alpen",
        "folder": "das-osttirol-5610"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=tirol&t=3752"
  },
  "oesterreich-vorarlberg": {
    "slug": "oesterreich-vorarlberg",
    "title": "Vorarlberg: Rheintal, Bregenzerwald & Hochalpen",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Bregenz, Dornbirn, Feldkirch, Rheintal, Bregenzerwald, Montafon, Klostertal, Walsertal und Rätikon.",
    "longDesc": "Vorarlberg liegt ganz im Westen Österreichs zwischen Bodensee und Arlberg. Das dicht besiedelte Rheintal bildet einen dynamischen Wirtschaftsraum, umgeben von alpinen Talschaften.",
    "keyPoints": [
      "Landeshauptstadt Bregenz: Bodenseestadt mit Festspielen und Pfänder",
      "Städte: Dornbirn (größte Stadt), Feldkirch mit Schattenburg, Lustenau",
      "Täler & Massive: Rheintal, Bregenzerwald, Montafon, Klostertal, Großes Walsertal, Kleinwalsertal, Walgau, Silvretta und Rätikon"
    ],
    "exercises": [
      {
        "id": "483",
        "title": "Vorarlberg",
        "folder": "vorarlberg-483"
      },
      {
        "id": "1437",
        "title": "Bregenz",
        "folder": "bregenz-1437"
      },
      {
        "id": "aut-lh-1",
        "title": "Dornbirn – Bevölkerungsreichste Stadt Vorarlbergs",
        "folder": "dornbirn-1441"
      },
      {
        "id": "aut-st-17",
        "title": "Feldkirch – Historische Montfortstadt",
        "folder": "feldkirch-1438"
      },
      {
        "id": "aut-lh-3",
        "title": "Die Schattenburg in Feldkirch",
        "folder": "die-schattenburg-5690"
      },
      {
        "id": "aut-st-18",
        "title": "Lustenau – Größte Marktgemeinde Österreichs am Rhein",
        "folder": "lustenau-1751"
      },
      {
        "id": "5620",
        "title": "Das Vorarlberger Rheintal",
        "folder": "das-vorarlberger-rheintal-5620"
      },
      {
        "id": "5627",
        "title": "Der Bregenzerwald",
        "folder": "der-bregenzerwald-5627"
      },
      {
        "id": "5658",
        "title": "Die Bregenzer Ach",
        "folder": "die-bregenzer-ach-5658"
      },
      {
        "id": "aut-reg-10",
        "title": "Das Montafon – Alpentalschaft im Rätikon",
        "folder": "das-montafon-5603"
      },
      {
        "id": "aut-reg-11",
        "title": "Das Kleinwalsertal – Österreichische Enklave in den Allgäuer Alpen",
        "folder": "das-kleinwalsertal-5595"
      },
      {
        "id": "aut-reg-12",
        "title": "Das Klostertal – Vom Arlberg nach Bludenz",
        "folder": "das-klostertal-5596"
      },
      {
        "id": "aut-reg-13",
        "title": "Das Große Walsertal – Biosphärenpark",
        "folder": "das-groese-walsertal-5588"
      },
      {
        "id": "aut-reg-14",
        "title": "Das Leiblachtal – Am Übergang zum Allgäu",
        "folder": "das-leiblachtal-5599"
      },
      {
        "id": "aut-reg-15",
        "title": "Der Walgau – Illtal im Süden Vorarlbergs",
        "folder": "der-walgau-5649"
      },
      {
        "id": "aut-gew-8",
        "title": "Die Ill – Größter Alpenfluss Vorarlbergs",
        "folder": "die-ill-5677"
      },
      {
        "id": "5616",
        "title": "Das Silvretta-Gebirge",
        "folder": "das-silvretta-gebirge-5616"
      },
      {
        "id": "aut-alp-4",
        "title": "Die Rätikon-Gruppe – Grenzgebirge der Ostalpen",
        "folder": "die-ratikon-gruppe-5688"
      },
      {
        "id": "aut-alp-5",
        "title": "Der Arlberg – Pass und Wasserscheide zwischen Tirol und Vorarlberg",
        "folder": "der-arlberg-5625"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=vorarlberg&t=3752"
  },
  "oesterreich-steiermark": {
    "slug": "oesterreich-steiermark",
    "title": "Steiermark: Das grüne Herz Österreichs",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Graz (Schlossberg & Uhrturm), Ober-, Mittel- und Südsteiermark, Mur, Erzberg, Ennstaler Alpen, Nationalpark Gesäuse.",
    "longDesc": "Die Steiermark ist das waldreichste Bundesland Österreichs. Sie reicht von den alpinen Kalkwänden des Dachsteins und Gesäuses über den Montanraum um den Erzberg bis zu den sanften südsteirischen Weinbergen.",
    "keyPoints": [
      "Landeshauptstadt Graz: Zweitgrößte Stadt Österreichs mit Schlossberg, Uhrturm und UNESCO-Altstadt",
      "Drei Regionen: Obersteiermark (Alpen & Industrie), Mittelsteiermark (Mur-Mürz-Furche), Südsteiermark (Weinland)",
      "Highlights: Nationalpark Gesäuse, Erzberg, Ennstaler Alpen, Mur, Leoben und Kapfenberg"
    ],
    "exercises": [
      {
        "id": "aut-bnd-st",
        "title": "Steiermark – Das grüne Herz Österreichs",
        "folder": "steiermark-485"
      },
      {
        "id": "aut-bnd-st-g",
        "title": "Die Geschichte der Steiermark",
        "folder": "die-geschichte-der-steiermark-5666"
      },
      {
        "id": "5704",
        "title": "Graz",
        "folder": "graz-2-5704"
      },
      {
        "id": "5632",
        "title": "Der Grazer Uhrturm",
        "folder": "der-grazer-uhrturm-5632"
      },
      {
        "id": "aut-steier-reg-1",
        "title": "Die Obersteiermark – Montanregion & Hochalpen",
        "folder": "die-obersteiermark-5687"
      },
      {
        "id": "aut-steier-reg-2",
        "title": "Die Mittelsteiermark – Mur-Mürz-Furche",
        "folder": "die-mittelsteiermark-5684"
      },
      {
        "id": "aut-steier-reg-3",
        "title": "Die Südsteiermark – Steirisches Weinland",
        "folder": "die-sudsteiermark-5692"
      },
      {
        "id": "aut-reg-18",
        "title": "Die steirische Thermenregion – Vulkanland und Heilquellen",
        "folder": "die-steirische-thermenregion-5691"
      },
      {
        "id": "5685",
        "title": "Die Mur",
        "folder": "die-mur-5685"
      },
      {
        "id": "aut-gew-2",
        "title": "Die Enns – Ältester Grenzfluss und Alpenstrom",
        "folder": "die-enns-5663"
      },
      {
        "id": "5664",
        "title": "Die Ennstaler Alpen",
        "folder": "die-ennstaler-alpen-5664"
      },
      {
        "id": "aut-np-1",
        "title": "Der Nationalpark Gesäuse",
        "folder": "der-nationalpark-gesause-5641"
      },
      {
        "id": "aut-alp-6",
        "title": "Der Steirische Erzberg – Tagebau und Steirische Pyramide",
        "folder": "der-erzberg-5630"
      },
      {
        "id": "aut-alp-2",
        "title": "Die Niederen Tauern – Schladminger und Wölzer Tauern",
        "folder": "die-niederen-tauern-5686"
      },
      {
        "id": "aut-st-19",
        "title": "Leoben – Zweitgrößte Stadt der Steiermark und Montanuniversität",
        "folder": "leoben-2-5712"
      },
      {
        "id": "aut-st-20",
        "title": "Kapfenberg – Industriemetropole und Burg Oberkapfenberg",
        "folder": "kapfenberg-2-5707"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=steiermark&t=3752"
  },
  "oesterreich-kaernten": {
    "slug": "oesterreich-kaernten",
    "title": "Kärnten: Land der Seen und Berge",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Klagenfurt, Villach, Wörthersee, Millstätter See, Drau, Karawanken, Karnische Alpen, Gail- und Lavanttal.",
    "longDesc": "Kärnten ist das südlichste Bundesland Österreichs, eingebettet im Klagenfurter Becken zwischen den Tauern im Norden und den Karawanken und Karnischen Alpen an der Grenze zu Italien und Slowenien.",
    "keyPoints": [
      "Landeshauptstadt Klagenfurt am Wörthersee mit Lindwurmbrunnen",
      "Kärntner Seen: Wörthersee, Millstätter See, Ossiacher See, Faaker See, Weißensee",
      "Täler & Berge: Drautal, Gailtal, Lavanttal, Karawanken, Gurktaler und Karnische Alpen",
      "Städte: Villach (Verkehrsknoten), Wolfsberg, Feldkirchen"
    ],
    "exercises": [
      {
        "id": "aut-bnd-kt",
        "title": "Kärnten – Land der Seen und Berge",
        "folder": "karnten-486"
      },
      {
        "id": "aut-bnd-kt-g",
        "title": "Die Geschichte Kärntens",
        "folder": "die-geschichte-karntens-5668"
      },
      {
        "id": "5709",
        "title": "Klagenfurt",
        "folder": "klagenfurt-2-5709"
      },
      {
        "id": "aut-st-21",
        "title": "Villach – Eisenbahnknoten und Draustadt",
        "folder": "villach-2-5725"
      },
      {
        "id": "1948",
        "title": "Wolfsberg",
        "folder": "wolfsberg-1948"
      },
      {
        "id": "aut-st-22",
        "title": "Feldkirchen in Kärnten – Tor zum Tiebel- und Glantal",
        "folder": "feldkirchen-in-karnten-1629"
      },
      {
        "id": "aut-gew-1",
        "title": "Die Drau – Hauptstrom Kärntens",
        "folder": "die-drau-5662"
      },
      {
        "id": "5656",
        "title": "Der worthersee",
        "folder": "der-worthersee-5656"
      },
      {
        "id": "5640",
        "title": "Der millstatter see",
        "folder": "der-millstatter-see-5640"
      },
      {
        "id": "aut-reg-16",
        "title": "Das Gailtal – Längstal zwischen Karnischen und Gailtaler Alpen",
        "folder": "das-gailtal-5586"
      },
      {
        "id": "aut-reg-17",
        "title": "Das Lavanttal – Kärntner Paradies",
        "folder": "das-lavanttal-5597"
      },
      {
        "id": "aut-alp-3",
        "title": "Die Karawanken – Kalkalpenkette an der slowenischen Grenze",
        "folder": "die-karawanken-5678"
      },
      {
        "id": "5674",
        "title": "Die Gurktaler Alpen",
        "folder": "die-gurktaler-alpen-5674"
      },
      {
        "id": "5679",
        "title": "Die Karnischen Alpen",
        "folder": "die-karnischen-alpen-5679"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kaernten&t=3752"
  },
  "oesterreich-burgenland": {
    "slug": "oesterreich-burgenland",
    "title": "Burgenland: Pannonische Tiefebene & Neusiedler See",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Nord-, Mittel- und Südburgenland, Eisenstadt (Schloss Esterházy), Neusiedler See und Nationalpark Seewinkel.",
    "longDesc": "Das Burgenland ist Österreichs östlichstes und jüngstes Bundesland (seit 1921). Es gehört weitgehend zur Kleinen Ungarischen Tiefebene und ist geprägt vom pannonischen Steppenklima und Weinbau.",
    "keyPoints": [
      "Landeshauptstadt Eisenstadt: Haydn-Stadt und barockes Schloss Esterházy",
      "Drei Landesteile: Nordburgenland, Mittelburgenland (Blaufränkischland), Südburgenland",
      "Naturwunder: Neusiedler See (UNESCO-Welterbe) und der Nationalpark Neusiedler See - Seewinkel"
    ],
    "exercises": [
      {
        "id": "aut-bnd-bg",
        "title": "Burgenland – Geographie & Landeskunde",
        "folder": "burgenland-484"
      },
      {
        "id": "aut-bnd-bg-g",
        "title": "Die Geschichte des Burgenlandes",
        "folder": "die-geschichte-des-burgenlandes-5667"
      },
      {
        "id": "5702",
        "title": "Eisenstadt",
        "folder": "eisenstadt-5702"
      },
      {
        "id": "aut-lh-5",
        "title": "Schloss Esterházy in Eisenstadt",
        "folder": "das-schloss-esterhazy-5614"
      },
      {
        "id": "5643",
        "title": "Der Neusiedler See",
        "folder": "der-neusiedler-see-5643"
      },
      {
        "id": "5717",
        "title": "Nationalpark Seewinkel",
        "folder": "nationalpark-seewinkel-5717"
      },
      {
        "id": "aut-bg-1",
        "title": "Das Nordburgenland & Neusiedler See",
        "folder": "das-nordburgenland-5608"
      },
      {
        "id": "aut-bg-2",
        "title": "Das Mittelburgenland – Blaufränkischland",
        "folder": "das-mittelburgenland-5602"
      },
      {
        "id": "aut-bg-3",
        "title": "Das Südburgenland – Hügelland & Naturparke",
        "folder": "das-sudburgenland-5618"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=burgenland&t=3752"
  },
  "wien-bundeshauptstadt-und-metropole": {
    "slug": "wien-bundeshauptstadt-und-metropole",
    "title": "Wien: Geschichte, Zentrum & Kultur",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Innere Stadt, Ringstraße, imperiale Geschichte, Kaffeehauskultur, Wiener Küche und UNO-City.",
    "longDesc": "Wien ist historische Kaiserresidenz, Bundeshauptstadt und eine der vier Hauptsitze der Vereinten Nationen. Das historische Stadtzentrum gehört zum UNESCO-Weltkulturerbe.",
    "keyPoints": [
      "Innere Stadt & Ringstraße: Prachtbauten der Gründerzeit (Staatsoper, Parlament, Rathaus, Burgtheater)",
      "Weltkulturerbe: Historische Altstadt, Stephansdom, Hofburg und Wiener Kaffeehauskultur",
      "Internationale Diplomatie: Die UNO-City an der Donau als globales Konferenzzentrum"
    ],
    "exercises": [
      {
        "id": "5727",
        "title": "Wien innere Stadt - der 1. Bezirk",
        "folder": "wien-innere-stadt-der-1-bezirk-5727"
      },
      {
        "id": "5673",
        "title": "Die Geschichte Wiens",
        "folder": "die-geschichte-wiens-5673"
      },
      {
        "id": "5700",
        "title": "Die wiener ringstraese",
        "folder": "die-wiener-ringstraese-5700"
      },
      {
        "id": "5697",
        "title": "Die Wiener Kaffeehauskultur",
        "folder": "die-wiener-kaffeehauskultur-5697"
      },
      {
        "id": "5698",
        "title": "Die wiener kuche",
        "folder": "die-wiener-kuche-5698"
      },
      {
        "id": "5650",
        "title": "Der Wiener Musikverein",
        "folder": "der-wiener-musikverein-5650"
      },
      {
        "id": "5651",
        "title": "Der Wiener Naschmarkt",
        "folder": "der-wiener-naschmarkt-5651"
      },
      {
        "id": "5652",
        "title": "Der Wiener Zentralfriedhof",
        "folder": "der-wiener-zentralfriedhof-5652"
      },
      {
        "id": "wien-bb-1",
        "title": "Das Schloss Schönbrunn – Kaiserliche Sommerresidenz",
        "folder": "das-schloss-schonbrunn-5615"
      },
      {
        "id": "wien-bb-2",
        "title": "Das Schloss Belvedere – Barockes Gesamtkunstwerk",
        "folder": "das-belvedere-5582"
      },
      {
        "id": "wien-bb-3",
        "title": "Der Stephansdom – Wahrzeichen Wiens",
        "folder": "der-stephansdom-5646"
      },
      {
        "id": "wien-bb-4",
        "title": "Die Wiener Hofburg – Kaiserpalast und Amtssitz",
        "folder": "die-hofburg-5675"
      },
      {
        "id": "wien-bb-5",
        "title": "Das Österreichische Parlament – Ringstraßenarchitektur",
        "folder": "das-sterreichische-parlament-5609"
      },
      {
        "id": "wien-bb-6",
        "title": "Die Wiener Staatsoper – Haus am Ring",
        "folder": "die-wiener-staatsoper-5701"
      },
      {
        "id": "wien-bb-7",
        "title": "Das Burgtheater – Österreichische Nationalbühne",
        "folder": "das-burgtheater-5583"
      },
      {
        "id": "wien-bb-8",
        "title": "Das Kunst- und Naturhistorische Museum",
        "folder": "das-naturhistorische-museum-5607"
      },
      {
        "id": "wien-bb-9",
        "title": "Das MuseumsQuartier (MQ) – Kulturareal",
        "folder": "das-museumsquartier-5606"
      },
      {
        "id": "wien-bb-10",
        "title": "Die Albertina – Kunstpalast und Bastei",
        "folder": "die-albertina-5657"
      },
      {
        "id": "wien-bb-11",
        "title": "Der Karlsplatz mit der Karlskirche",
        "folder": "der-karlsplatz-mit-der-karlskirche-5638"
      },
      {
        "id": "wien-bb-12",
        "title": "Das Hundertwasserhaus – Bunte Architektur der Moderne",
        "folder": "das-hundertwasserhaus-5590"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wien+geographie&t=3752"
  },
  "wien-infrastruktur-donau-und-natur": {
    "slug": "wien-infrastruktur-donau-und-natur",
    "title": "Wien: Donau, Naturräume & Mobilität",
    "category": "Österreich & Alpenraum",
    "shortDesc": "Donauinsel, Wienerwald, Wiener Linien, Wienfluss und der Flughafen Wien-Schwechat.",
    "longDesc": "Mit über 50 Prozent Grünflächenanteil zählt Wien zu den grünsten Millionenstädten weltweit. Das ausgeklügelte Hochwasserschutzsystem an der Donau und die Wiener Linien setzen Maßstäbe.",
    "keyPoints": [
      "Hochwasserschutz & Erholung: Neue Donau und die 21 km lange Donauinsel",
      "Grüngürtel: Der Wienerwald als UNESCO-Biosphärenpark und Naherholungsgebiet",
      "Mobilität: Effizientes U-Bahn- und Straßenbahnnetz der Wiener Linien und Flughafen Schwechat"
    ],
    "exercises": [
      {
        "id": "5661",
        "title": "Die Donauinsel",
        "folder": "die-donauinsel-5661"
      },
      {
        "id": "5629",
        "title": "Der Donauturm",
        "folder": "der-donauturm-5629"
      },
      {
        "id": "5628",
        "title": "Der Donaukanal",
        "folder": "der-donaukanal-5628"
      },
      {
        "id": "5654",
        "title": "Der Wien-Fluss",
        "folder": "der-wien-fluss-5654"
      },
      {
        "id": "5653",
        "title": "Der Wienerwald",
        "folder": "der-wienerwald-5653"
      },
      {
        "id": "5699",
        "title": "Die Wiener Linien",
        "folder": "die-wiener-linien-5699"
      },
      {
        "id": "5631",
        "title": "Der Flughafen Wien-Schwechat",
        "folder": "der-flughafen-wien-schwechat-5631"
      },
      {
        "id": "6134",
        "title": "Wien",
        "folder": "wien-3-6134"
      },
      {
        "id": "wien-inf-1",
        "title": "Der Wiener Prater & Riesenrad",
        "folder": "der-prater-5645"
      },
      {
        "id": "wien-inf-2",
        "title": "Die Mariahilfer Straße – Größte Einkaufsstraße Österreichs",
        "folder": "die-mariahilfer-straese-5683"
      },
      {
        "id": "wien-inf-3",
        "title": "Der Wiener Heurige – Weinkultur in Grinzing & Neustift",
        "folder": "der-heurige-5635"
      },
      {
        "id": "wien-inf-4",
        "title": "Wien – Bundesland und Bundeshauptstadt",
        "folder": "wien-482"
      },
      {
        "id": "5695",
        "title": "Die UNO-City Wien (VIC & Donau City)",
        "folder": "die-uno-city-wien-5695"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wien+geographie&t=3752"
  },
  "geographie-deutschlands": {
    "slug": "geographie-deutschlands",
    "title": "Geographie Deutschlands: Physische Geographie & Topographie",
    "category": "Deutschland",
    "shortDesc": "Topographie, Großlandschaften, Gebirge, Flüsse, Seen, Wirtschaft und Bevölkerung.",
    "longDesc": "Deutschland liegt im Herzen Europas und gliedert sich in vier große naturräumliche Großlandschaften: Das Norddeutsche Tiefland, die Mittelgebirgszone, das Alpenvorland und die Bayerischen Alpen.",
    "keyPoints": [
      "16 Bundesländer: 13 Flächenländer und 3 Stadtstaaten (Berlin, Hamburg, Bremen)",
      "Großlandschaften: Norddeutsches Tiefland ➔ Mittelgebirge ➔ Alpenvorland ➔ Alpen",
      "Flusssysteme: Rhein, Elbe, Donau, Weser, Oder und Main",
      "Höchster Berg: Die Zugspitze im Wettersteingebirge (2.962 m)"
    ],
    "exercises": [
      {
        "id": "310",
        "title": "Geographie Deutschlands - Gebirge, Seen, Flüsse, Inseln und Halbinseln",
        "folder": "geographie-deutschlands-gebirge-seen-flusse-inseln-und-halbinseln-310"
      },
      {
        "id": "311",
        "title": "Bundesländer Deutschlands",
        "folder": "bundeslander-deutschlands-311"
      },
      {
        "id": "403",
        "title": "Städte Deutschlands",
        "folder": "stadte-deutschlands-2-403"
      },
      {
        "id": "2059",
        "title": "Bevölkerungsentwicklung in Deutschland",
        "folder": "bevolkerungsentwicklung-in-deutschland-2059"
      },
      {
        "id": "2060",
        "title": "Industrieräume in Deutschland",
        "folder": "industrieraume-in-deutschland-2060"
      },
      {
        "id": "1609",
        "title": "Deutschland",
        "folder": "deutschland-1609"
      },
      {
        "id": "137",
        "title": "Bundeslander deutschland",
        "folder": "bundeslander-deutschland-137"
      },
      {
        "id": "138",
        "title": "Bundeslander deutschland memory",
        "folder": "bundeslander-deutschland-memory-138"
      },
      {
        "id": "139",
        "title": "Hauptstadte der bundeslander deutschland",
        "folder": "hauptstadte-der-bundeslander-deutschland-139"
      },
      {
        "id": "215",
        "title": "Gewasser in deutschland flusse seen meere",
        "folder": "gewasser-in-deutschland-flusse-seen-meere-215"
      },
      {
        "id": "397",
        "title": "Stadte deutschlands",
        "folder": "stadte-deutschlands-397"
      },
      {
        "id": "natparkde",
        "title": "Nationalparks in Deutschland",
        "folder": "nationalparks-in-deutschland"
      },
      {
        "id": "weinbaude",
        "title": "Weinbau in Deutschland",
        "folder": "weinbau-in-deutschland"
      },
      {
        "id": "tourismusde",
        "title": "Tourismus in Deutschland",
        "folder": "tourismus-in-deutschland"
      },
      {
        "id": "wirtschaftde",
        "title": "Wirtschaft Deutschlands",
        "folder": "wirtschaft-deutschlands"
      },
      {
        "id": "test-9-2873",
        "title": "Fragen zum Deutschlandspiel",
        "folder": "test-9-2873"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geographie+deutschland&t=3752"
  },
  "deutschland-bundeslaender": {
    "slug": "deutschland-bundeslaender",
    "title": "Deutschland: Die 16 Bundesländer",
    "category": "Deutschland",
    "shortDesc": "Alle 16 deutschen Bundesländer von Bayern und Baden-Württemberg bis Schleswig-Holstein und den Stadtstaaten.",
    "longDesc": "Die Bundesrepublik Deutschland ist ein föderaler Bundesstaat bestehend aus 16 Bundesländern. Jedes Land besitzt eine eigene Landesverfassung, eine eigene Landesregierung und spezifische wirtschaftliche wie landschaftliche Schwerpunkte.",
    "keyPoints": [
      "16 Länder: Baden-Württemberg, Bayern, Berlin, Brandenburg, Bremen, Hamburg, Hessen, Mecklenburg-Vorpommern, Niedersachsen, Nordrhein-Westfalen, Rheinland-Pfalz, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein, Thüringen",
      "Stadtstaaten: Berlin, Hamburg und Bremen",
      "Föderalismus: Kultur-, Bildungs- und Polizeihoheit liegen primär bei den Bundesländern",
      "Hauptstädte: Von München und Stuttgart über Hannover und Dresden bis Kiel und Schwerin"
    ],
    "exercises": [
      {
        "id": "bw-1049",
        "title": "Baden-Württemberg",
        "folder": "baden-wurttemberg-2-1049"
      },
      {
        "id": "by-1050",
        "title": "Bayern",
        "folder": "bayern-1050"
      },
      {
        "id": "be-1020",
        "title": "Berlin",
        "folder": "berlin-1020"
      },
      {
        "id": "bb-1021",
        "title": "Brandenburg",
        "folder": "brandenburg-2-1021"
      },
      {
        "id": "hb-1054",
        "title": "Bremen",
        "folder": "bremen-1054"
      },
      {
        "id": "hh-1053",
        "title": "Hamburg",
        "folder": "hamburg-1053"
      },
      {
        "id": "he-1022",
        "title": "Hessen",
        "folder": "hessen-1022"
      },
      {
        "id": "mv-1048",
        "title": "Mecklenburg-Vorpommern",
        "folder": "mecklenburg-vorpommern-2-1048"
      },
      {
        "id": "ni-1023",
        "title": "Niedersachsen",
        "folder": "niedersachsen-2-1023"
      },
      {
        "id": "nrw-1046",
        "title": "Nordrhein-Westfalen",
        "folder": "nordrhein-westfalen-2-1046"
      },
      {
        "id": "rp-1024",
        "title": "Rheinland-Pfalz",
        "folder": "rheinland-pfalz-2-1024"
      },
      {
        "id": "sl-1047",
        "title": "Saarland",
        "folder": "saarland-2-1047"
      },
      {
        "id": "sn-1025",
        "title": "Sachsen",
        "folder": "sachsen-2-1025"
      },
      {
        "id": "st-1026",
        "title": "Sachsen-Anhalt",
        "folder": "sachsen-anhalt-2-1026"
      },
      {
        "id": "sh-1027",
        "title": "Schleswig-Holstein",
        "folder": "schleswig-holstein-2-1027"
      },
      {
        "id": "th-1028",
        "title": "Thüringen",
        "folder": "thuringen-1028"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=deutschland+bundeslaender&t=3752"
  },
  "deutsche-regionen-kuesten-und-inseln": {
    "slug": "deutsche-regionen-kuesten-und-inseln",
    "title": "Deutsche Regionen: Küsten, Inseln & Kulturlandschaften",
    "category": "Deutschland",
    "shortDesc": "Wattenmeer, Ostfriesland, Rügen, Pellworm, Lüneburger Heide, Sauerland und Ruhrgebiet.",
    "longDesc": "Deutschlands Regionen zeichnen sich durch markante Kultur- und Naturräume aus: Von den Gezeiten des Wattenmeers und den Kreidefelsen auf Rügen über Heide- und Moorlandschaften bis zum Industrierevier Ruhrgebiet.",
    "keyPoints": [
      "Küsten & Inseln: UNESCO-Weltnaturerbe Wattenmeer, Ostfriesland, Pellworm, Helgoland und Rügen",
      "Kulturlandschaften: Fischland-Darß-Zingst, Lüneburger Heide und Insel Poel",
      "Industrie & Flusslandschaften: Das Ruhrgebiet, Bergisches Land, Sauerland und der Mittelrhein",
      "Süddeutschland: Das Bayerische Alpenvorland und Schloss Neuschwanstein"
    ],
    "exercises": [
      {
        "id": "ostfriesland",
        "title": "Ostfriesland - Eine Region an der Nordsee",
        "folder": "ostfriesland-eine-region-an-der-nordsee"
      },
      {
        "id": "wattenmeer",
        "title": "Das Wattenmeer der Nordsee",
        "folder": "das-wattenmeer-der-nordsee"
      },
      {
        "id": "pellworm",
        "title": "Pellworm - Eine Insel im Wattenmeer",
        "folder": "pellworm-eine-insel-im-wattenmeer"
      },
      {
        "id": "helgoland",
        "title": "Helgoland - Eine Insel in der Nordsee",
        "folder": "helgoland-eine-insel-in-der-nordsee"
      },
      {
        "id": "ruegen",
        "title": "Rügen - Deutschlands größte Insel",
        "folder": "ruegen-deutschlands-groesste-insel"
      },
      {
        "id": "insel-poel",
        "title": "Die Insel Poel",
        "folder": "die-insel-poel"
      },
      {
        "id": "darss-zingst",
        "title": "Fischland-Darß-Zingst",
        "folder": "fischland-darss-zingst"
      },
      {
        "id": "lueneburger-heide",
        "title": "Die Lüneburger Heide",
        "folder": "die-lueneburger-heide"
      },
      {
        "id": "sauerland",
        "title": "Das Sauerland - Eine Region in Westfalen",
        "folder": "das-sauerland-eine-region-in-westfalen"
      },
      {
        "id": "bergisches-land",
        "title": "Das Bergische Land",
        "folder": "das-bergische-land"
      },
      {
        "id": "mittelrhein",
        "title": "Der Mittelrhein - Eine besondere Region",
        "folder": "der-mittelrhein-eine-besondere-region"
      },
      {
        "id": "ruhrgebiet",
        "title": "Das Ruhrgebiet",
        "folder": "das-ruhrgebiet"
      },
      {
        "id": "alpenvorland",
        "title": "Das Alpenvorland",
        "folder": "das-alpenvorland"
      },
      {
        "id": "bay-alpenvorland",
        "title": "Das Bayerische Alpenvorland",
        "folder": "das-bayerische-alpenvorland"
      },
      {
        "id": "schloss-neuschwanstein",
        "title": "Schloss Neuschwanstein",
        "folder": "schloss-neuschwanstein"
      },
      {
        "id": "haefen-bremen",
        "title": "Die Häfen von Bremen und Bremerhaven",
        "folder": "die-haefen-von-bremen-und-bremerhaven"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=deutschland+regionen&t=3752"
  },
  "deutsche-mittelgebirge-und-berge": {
    "slug": "deutsche-mittelgebirge-und-berge",
    "title": "Deutsche Mittelgebirge & Alpengipfel",
    "category": "Deutschland",
    "shortDesc": "Schwarzwald, Harz, Erzgebirge, Bayerischer Wald, Thüringer Wald, Taunus, Eifel und Zugspitze.",
    "longDesc": "Die deutsche Mittelgebirgszone prägt das Relief der Landesmitte und des Südens. Schiefergebirge, vulkanische Kuppen und bewaldete Bergrücken reichen von der Eifel über den Harz bis zum Schwarzwald und den Bayerischen Alpen.",
    "keyPoints": [
      "Höchste Mittelgebirge: Schwarzwald (Feldberg, 1.493 m) und Bayerischer Wald (Großer Arber, 1.456 m)",
      "Mittelgebirgszone: Harz mit Brocken, Erzgebirge mit Fichtelberg, Thüringer Wald, Rhön mit Wasserkuppe, Taunus, Eifel und Hunsrück",
      "Hochgebirge: Die Nördlichen Kalkalpen mit der Zugspitze (2.962 m) als höchstem Berg Deutschlands",
      "Geologie & Natur: Erloschene Vulkane (Rhön, Vogelsberg), Sandsteinmassive und UNESCO-Geoparks"
    ],
    "exercises": [
      {
        "id": "schwarzwald",
        "title": "Der Schwarzwald - Ein Überblick",
        "folder": "der-schwarzwald-ein-ueberblick"
      },
      {
        "id": "feldberg-schwarzwald",
        "title": "Der Feldberg im Schwarzwald",
        "folder": "der-feldberg-im-schwarzwald"
      },
      {
        "id": "bayerischer-wald",
        "title": "Der Bayerische Wald",
        "folder": "der-bayerische-wald"
      },
      {
        "id": "harz",
        "title": "Der Harz - Ein besonderes Mittelgebirge",
        "folder": "der-harz-ein-besonderes-mittelgebirge"
      },
      {
        "id": "brocken",
        "title": "Der Brocken - Höchster Berg des Harzes",
        "folder": "der-brocken-hoechster-berg-des-harzes"
      },
      {
        "id": "erzgebirge",
        "title": "Das Erzgebirge",
        "folder": "das-erzgebirge"
      },
      {
        "id": "fichtelberg",
        "title": "Der Fichtelberg - Höchster Berg Sachsens",
        "folder": "der-fichtelberg-hoechster-berg-sachsens"
      },
      {
        "id": "fichtelgebirge",
        "title": "Das Fichtelgebirge",
        "folder": "das-fichtelgebirge"
      },
      {
        "id": "frankenwald",
        "title": "Der Frankenwald - Ein Mittelgebirge in Bayern",
        "folder": "der-frankenwald-ein-mittelgebirge-in-bayern"
      },
      {
        "id": "thueringer-wald",
        "title": "Der Thüringer Wald",
        "folder": "der-thueringer-wald"
      },
      {
        "id": "rhoen",
        "title": "Die Rhön - Ein Mittelgebirge in Deutschland",
        "folder": "die-rhoen-ein-mittelgebirge-in-deutschland"
      },
      {
        "id": "wasserkuppe",
        "title": "Die Wasserkuppe - Hessens höchster Berg",
        "folder": "die-wasserkuppe-hessens-hoechster-berg"
      },
      {
        "id": "taunus",
        "title": "Der Taunus - Ein Mittelgebirge in Deutschland",
        "folder": "der-taunus-ein-mittelgebirge-in-deutschland"
      },
      {
        "id": "grosser-feldberg",
        "title": "Der Große Feldberg im Taunus",
        "folder": "der-grosse-feldberg-im-taunus"
      },
      {
        "id": "eifel",
        "title": "Die Eifel - Ein Mittelgebirge in Deutschland",
        "folder": "die-eifel-ein-mittelgebirge-in-deutschland"
      },
      {
        "id": "hunsrueck",
        "title": "Der Hunsrück - Ein Mittelgebirge in Deutschland",
        "folder": "der-hunsrueck-ein-mittelgebirge-in-deutschland"
      },
      {
        "id": "odenwald",
        "title": "Der Odenwald - Ein Mittelgebirge in Deutschland",
        "folder": "der-odenwald-ein-mittelgebirge-in-deutschland"
      },
      {
        "id": "schwaebische-alb",
        "title": "Die Schwäbische Alb",
        "folder": "die-schwaebische-alb"
      },
      {
        "id": "zugspitze",
        "title": "Die Zugspitze - Deutschlands höchster Berg",
        "folder": "die-zugspitze-deutschlands-hoechster-berg"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=gebirge+deutschland&t=3752"
  },
  "deutsche-nationalparks-und-naturraeume": {
    "slug": "deutsche-nationalparks-und-naturraeume",
    "title": "Deutsche Nationalparks & Waldlandschaften",
    "category": "Deutschland",
    "shortDesc": "Schutzgebiete von Berchtesgaden und Bayerischer Wald bis zum Wattenmeer, Jasmund und Harz.",
    "longDesc": "In den deutschen Nationalparks gilt der Grundsatz 'Natur Natur sein lassen'. Sie schützen wertvolle Urwälder, alpine Bergwelten, Wattmeere und Buchenurwälder für kommende Generationen.",
    "keyPoints": [
      "16 Nationalparks: Vom Alpen-Nationalpark Berchtesgaden über Waldnationalparks bis zu den Wattenmeer-Schutzgebieten",
      "Wald & Buchen: Alte Buchenwälder in Jasmund, Kellerwald-Edersee und Hainich",
      "Biodiversität: Schutz von Luchs, Wolf, Seeadler, Kegelrobbe und seltenen Flora-Arten",
      "Fluss- & Moorlandschaften: Müritz-Nationalpark und das Untere Odertal"
    ],
    "exercises": [
      {
        "id": "np-bayerischer-wald",
        "title": "Der Nationalpark Bayerischer Wald",
        "folder": "der-nationalpark-bayerischer-wald"
      },
      {
        "id": "np-berchtesgaden",
        "title": "Der Nationalpark Berchtesgaden",
        "folder": "der-nationalpark-berchtesgaden"
      },
      {
        "id": "np-schwarzwald",
        "title": "Der Nationalpark Schwarzwald",
        "folder": "der-nationalpark-schwarzwald"
      },
      {
        "id": "np-harz",
        "title": "Der Nationalpark Harz",
        "folder": "der-nationalpark-harz"
      },
      {
        "id": "np-eifel",
        "title": "Der Nationalpark Eifel",
        "folder": "der-nationalpark-eifel"
      },
      {
        "id": "np-hunsrueck",
        "title": "Der Nationalpark Hunsrück-Hochwald",
        "folder": "der-nationalpark-hunsrueck-hochwald"
      },
      {
        "id": "np-kellerwald",
        "title": "Der Nationalpark Kellerwald-Edersee",
        "folder": "der-nationalpark-kellerwald-edersee"
      },
      {
        "id": "np-jasmund",
        "title": "Der Nationalpark Jasmund",
        "folder": "der-nationalpark-jasmund"
      },
      {
        "id": "np-mueritz",
        "title": "Der Müritz-Nationalpark",
        "folder": "der-mueritz-nationalpark"
      },
      {
        "id": "np-unteres-odertal",
        "title": "Der Nationalpark Unteres Odertal",
        "folder": "der-nationalpark-unteres-odertal"
      },
      {
        "id": "np-boddenlandschaft",
        "title": "Der Nationalpark Vorpommersche Boddenlandschaft",
        "folder": "der-nationalpark-vorpommersche-boddenlandschaft"
      },
      {
        "id": "np-saechsische-schweiz",
        "title": "Der Nationalpark Sächsische Schweiz",
        "folder": "der-nationalpark-saechsische-schweiz"
      },
      {
        "id": "np-sh-wattenmeer",
        "title": "Der Nationalpark Schleswig-Holsteinisches Wattenmeer",
        "folder": "der-nationalpark-schleswig-holsteinisches-wattenmeer"
      },
      {
        "id": "np-nds-wattenmeer",
        "title": "Der Nationalpark Niedersächsisches Wattenmeer",
        "folder": "der-nationalpark-niedersaechsisches-wattenmeer"
      },
      {
        "id": "np-hh-wattenmeer",
        "title": "Der Nationalpark Hamburgisches Wattenmeer",
        "folder": "der-nationalpark-hamburgisches-wattenmeer"
      },
      {
        "id": "wald-in-deutschland",
        "title": "Der Wald in Deutschland",
        "folder": "der-wald-in-deutschland"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nationalpark+deutschland&t=3752"
  },
  "deutsche-gewaesser-fluesse-und-seen": {
    "slug": "deutsche-gewaesser-fluesse-und-seen",
    "title": "Deutsche Gewässer: Flüsse, Seen & Kanäle",
    "category": "Deutschland",
    "shortDesc": "Main, Mosel, Weser, Neckar, Müritz, Chiemsee sowie wichtige Schifffahrtskanäle.",
    "longDesc": "Deutschland verfügt über ein dichtes Netz an Wasserstraßen und Binnengewässern. Flüsse verbinden Industriegebiete mit Seehäfen, während die großen Seen im Norden und Süden wichtige Trinkwasserspeicher und Naturparadiese sind.",
    "keyPoints": [
      "Flüsse: Rhein-Zuflüsse Main, Mosel und Neckar sowie das Wesersystem zur Nordsee",
      "Große Binnenseen: Die Müritz in Mecklenburg und der Chiemsee im bayerischen Alpenvorland",
      "Kanalbauten: Main-Donau-Kanal als transkontinentale Verbindung und der Rhein-Herne-Kanal im Ruhrgebiet",
      "Ökologie & Hochwasserschutz: Flussbegradigungen, Renaturierung und Auenlandschaften"
    ],
    "exercises": [
      {
        "id": "fluss-main",
        "title": "Der Main - Ein wichtiger Fluss in Deutschland",
        "folder": "der-main-ein-wichtiger-fluss-in-deutschland"
      },
      {
        "id": "fluss-mosel",
        "title": "Die Mosel - Ein Fluss in Europa",
        "folder": "die-mosel-ein-fluss-in-europa"
      },
      {
        "id": "fluss-weser",
        "title": "Die Weser - Ein Fluss in Deutschland",
        "folder": "die-weser-ein-fluss-in-deutschland"
      },
      {
        "id": "fluss-neckar",
        "title": "Der Neckar - Ein wichtiger Fluss in Deutschland",
        "folder": "der-neckar-ein-wichtiger-fluss-in-deutschland"
      },
      {
        "id": "see-mueritz",
        "title": "Die Müritz - Ein besonderer See in Deutschland",
        "folder": "die-mueritz-ein-besonderer-see-in-deutschland"
      },
      {
        "id": "see-chiemsee",
        "title": "Der Chiemsee - Bayerns größter See",
        "folder": "der-chiemsee-bayerns-groesster-see"
      },
      {
        "id": "kanal-main-donau",
        "title": "Der Main-Donau-Kanal",
        "folder": "der-main-donau-kanal"
      },
      {
        "id": "kanal-rhein-herne",
        "title": "Der Rhein-Herne-Kanal",
        "folder": "der-rhein-herne-kanal"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=fluesse+deutschland&t=3752"
  },
  "deutsche-grossstaedte-und-metropolen": {
    "slug": "deutsche-grossstaedte-und-metropolen",
    "title": "Deutsche Metropolen: Die Großstädte",
    "category": "Deutschland",
    "shortDesc": "Berlin, Hamburg, München, Köln, Frankfurt am Main, Stuttgart, Düsseldorf, Leipzig und weitere Metropolen.",
    "longDesc": "Deutschlands Metropolen bilden die wirtschaftlichen, politischen und kulturellen Motoren des Landes. Vom Regierungssitz Berlin über das Handels- und Hafenzentrum Hamburg bis zum Finanzplatz Frankfurt und den süddeutschen Innovationszentren.",
    "keyPoints": [
      "Millionenstädte: Berlin (3,8 Mio.), Hamburg (1,9 Mio.), München (1,5 Mio.) und Köln (1,1 Mio.)",
      "Finanz- & Dienstleistungszentren: Frankfurt am Main und Düsseldorf",
      "Industrie & Technologie: Stuttgart, Nürnberg und das Ruhrgebiet mit Dortmund und Essen",
      "Mitteldeutschland: Die dynamischen Messestädte und Kulturmetropolen Leipzig und Dresden"
    ],
    "exercises": [
      {
        "id": "berlin-metropole",
        "title": "Berlin - Die Hauptstadt Deutschlands",
        "folder": "berlin-die-hauptstadt-deutschlands"
      },
      {
        "id": "hamburg-metropole",
        "title": "Hamburg - Eine Stadt mit Geschichte und Vielfalt",
        "folder": "hamburg-eine-stadt-mit-geschichte-und-vielfalt"
      },
      {
        "id": "muenchen-metropole",
        "title": "München - Die Hauptstadt Bayerns",
        "folder": "muenchen-die-hauptstadt-bayerns"
      },
      {
        "id": "koeln-metropole",
        "title": "Köln - Eine Stadt mit Geschichte und Kultur",
        "folder": "koeln-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "frankfurt-moderne",
        "title": "Frankfurt am Main - Eine Stadt mit Geschichte und Moderne",
        "folder": "frankfurt-am-main-eine-stadt-mit-geschichte-und-moderne"
      },
      {
        "id": "stuttgart-landeshauptstadt",
        "title": "Stuttgart - Die Landeshauptstadt Baden-Württemberg",
        "folder": "stuttgart-die-landeshauptstadt-baden-wuerttemberg"
      },
      {
        "id": "duesseldorf-metropole",
        "title": "Düsseldorf - Eine Stadt am Rhein",
        "folder": "duesseldorf-eine-stadt-am-rhein"
      },
      {
        "id": "leipzig-kultur",
        "title": "Leipzig - Eine Stadt mit Geschichte und Kultur",
        "folder": "leipzig-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "dortmund-metropole",
        "title": "Dortmund - Eine Stadt im Ruhrgebiet",
        "folder": "dortmund-eine-stadt-im-ruhrgebiet"
      },
      {
        "id": "essen-metropole",
        "title": "Essen - Eine Stadt im Ruhrgebiet",
        "folder": "essen-eine-stadt-im-ruhrgebiet"
      },
      {
        "id": "bremen-stadt",
        "title": "Die Stadt Bremen",
        "folder": "die-stadt-bremen"
      },
      {
        "id": "dresden-kultur",
        "title": "Dresden - Eine Stadt mit Geschichte und Kultur",
        "folder": "dresden-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "hannover-hauptstadt",
        "title": "Hannover - Die Hauptstadt Niedersachsens",
        "folder": "hannover-die-hauptstadt-niedersachsens"
      },
      {
        "id": "nuernberg-kultur",
        "title": "Nürnberg - Eine Stadt mit Geschichte und Kultur",
        "folder": "nuernberg-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "duisburg-metropole",
        "title": "Duisburg - Eine Stadt mit Geschichte und Industrie",
        "folder": "duisburg-eine-stadt-mit-geschichte-und-industrie"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staedte+deutschland&t=3752"
  },
  "deutsche-staedte-im-profil-nord-und-ost": {
    "slug": "deutsche-staedte-im-profil-nord-und-ost",
    "title": "Deutsche Städte im Profil: Nord & Ost",
    "category": "Deutschland",
    "shortDesc": "Potsdam, Kiel, Lübeck, Rostock, Schwerin, Magdeburg, Erfurt, Jena, Weimar, Chemnitz und weitere Zentren.",
    "longDesc": "Die nord- und ostdeutschen Städte verbinden reiche Hanse- und Universitätsgeschichte mit Schlossarchitektur und modernen Innovationsparks.",
    "keyPoints": [
      "Hanse & Meer: Lübeck, Rostock, Kiel, Flensburg, Greifswald und Oldenburg",
      "Klassik & Wissenschaft: Weimar, Jena, Potsdam und Halle (Saale)",
      "Landeshauptstädte: Schwerin, Magdeburg und Erfurt",
      "Wirtschaftszentren: Chemnitz, Braunschweig und Osnabrück"
    ],
    "exercises": [
      {
        "id": "potsdam-profil",
        "title": "Potsdam - Eine Stadt mit Geschichte und Kultur",
        "folder": "potsdam-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "kiel-profil",
        "title": "Kiel - Die Landeshauptstadt Schleswig-Holsteins",
        "folder": "kiel-die-landeshauptstadt-schleswig-holsteins"
      },
      {
        "id": "luebeck-profil",
        "title": "Lübeck - Eine historische Hansestadt",
        "folder": "luebeck-eine-historische-hansestadt"
      },
      {
        "id": "rostock-profil",
        "title": "Rostock - Eine Stadt an der Ostsee",
        "folder": "rostock-eine-stadt-an-der-ostsee"
      },
      {
        "id": "schwerin-profil",
        "title": "Schwerin - Die Hauptstadt Mecklenburg-Vorpommerns",
        "folder": "schwerin-die-hauptstadt-mecklenburg-vorpommerns"
      },
      {
        "id": "magdeburg-profil",
        "title": "Magdeburg - Die Hauptstadt Sachsen-Anhalts",
        "folder": "magdeburg-die-hauptstadt-sachsen-anhalts"
      },
      {
        "id": "halle-saale-profil",
        "title": "Halle (Saale) - Eine Stadt mit Geschichte und Kultur",
        "folder": "halle-saale-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "erfurt-profil",
        "title": "Erfurt - Die Landeshauptstadt Thüringens",
        "folder": "erfurt-die-landeshauptstadt-thueringens"
      },
      {
        "id": "jena-profil",
        "title": "Jena - Eine Stadt mit Geschichte und Wissenschaft",
        "folder": "jena-eine-stadt-mit-geschichte-und-wissenschaft"
      },
      {
        "id": "weimar-profil",
        "title": "Weimar - Eine Stadt mit Geschichte und Kultur",
        "folder": "weimar-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "chemnitz-profil",
        "title": "Chemnitz - Eine Stadt mit Geschichte und Kultur",
        "folder": "chemnitz-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "braunschweig-profil",
        "title": "Braunschweig - Eine Stadt mit Geschichte und Wissenschaft",
        "folder": "braunschweig-eine-stadt-mit-geschichte-und-wissenschaft"
      },
      {
        "id": "osnabrueck-profil",
        "title": "Osnabrück - Eine Stadt mit Geschichte und Natur",
        "folder": "osnabrueck-eine-stadt-mit-geschichte-und-natur"
      },
      {
        "id": "oldenburg-profil",
        "title": "Oldenburg - Eine Stadt mit Geschichte und Kultur",
        "folder": "oldenburg-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "flensburg-profil",
        "title": "Flensburg - Eine Stadt mit Geschichte und Kultur",
        "folder": "flensburg-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "greifswald-profil",
        "title": "Greifswald - Eine Stadt mit Geschichte und Kultur",
        "folder": "greifswald-eine-stadt-mit-geschichte-und-kultur"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staedte+deutschland&t=3752"
  },
  "deutsche-staedte-im-profil-sued-und-west": {
    "slug": "deutsche-staedte-im-profil-sued-und-west",
    "title": "Deutsche Städte im Profil: Süd & West",
    "category": "Deutschland",
    "shortDesc": "Aachen, Bonn, Münster, Wiesbaden, Mainz, Karlsruhe, Mannheim, Heidelberg, Augsburg, Würzburg, Trier u.v.m.",
    "longDesc": "Von den römischen Gründungen wie Trier, Mainz und Augsburg über traditionsreiche Universitätsstädte bis zu den wirtschaftsstarken Zentren Süd- und Westdeutschlands.",
    "keyPoints": [
      "Römerstädte & Geschichte: Trier (älteste Stadt Deutschlands), Mainz, Augsburg, Aachen und Regensburg",
      "Wissenschaft & Bildung: Heidelberg, Münster, Tübingen, Bonn, Würzburg und Darmstadt",
      "Landeshauptstädte: Wiesbaden (Hessen), Mainz (Rheinland-Pfalz) und Saarbrücken (Saarland)",
      "Oberzentren: Karlsruhe, Mannheim, Ulm, Kassel und Bielefeld"
    ],
    "exercises": [
      {
        "id": "aachen-profil",
        "title": "Aachen - Eine Stadt mit Geschichte und Kultur",
        "folder": "aachen-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "bonn-profil",
        "title": "Bonn - Eine Stadt mit Geschichte und Bedeutung",
        "folder": "bonn-eine-stadt-mit-geschichte-und-bedeutung"
      },
      {
        "id": "muenster-profil",
        "title": "Münster - Eine Stadt mit Geschichte und Kultur",
        "folder": "muenster-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "bielefeld-profil",
        "title": "Bielefeld - Eine Stadt in Nordrhein-Westfalen",
        "folder": "bielefeld-eine-stadt-in-nordrhein-westfalen"
      },
      {
        "id": "wuppertal-profil",
        "title": "Wuppertal - Eine Stadt im Grünen",
        "folder": "wuppertal-eine-stadt-im-gruenen"
      },
      {
        "id": "mainz-profil",
        "title": "Mainz - Landeshauptstadt am Rhein",
        "folder": "mainz-1488"
      },
      {
        "id": "wiesbaden-profil",
        "title": "Wiesbaden - Die Landeshauptstadt Hessens",
        "folder": "wiesbaden-die-landeshauptstadt-hessens"
      },
      {
        "id": "darmstadt-profil",
        "title": "Darmstadt - Eine Stadt mit Geschichte und Wissenschaft",
        "folder": "darmstadt-eine-stadt-mit-geschichte-und-wissenschaft"
      },
      {
        "id": "kassel-profil",
        "title": "Kassel - Die documenta-Stadt",
        "folder": "kassel-1486"
      },
      {
        "id": "karlsruhe-profil",
        "title": "Karlsruhe - Eine Stadt mit Geschichte und Besonderheiten",
        "folder": "karlsruhe-eine-stadt-mit-geschichte-und-besonderheiten"
      },
      {
        "id": "mannheim-profil",
        "title": "Mannheim - Eine Stadt mit Geschichte und Kultur",
        "folder": "mannheim-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "heidelberg-profil",
        "title": "Heidelberg - Eine Stadt mit Geschichte und Kultur",
        "folder": "heidelberg-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "tuebingen-profil",
        "title": "Tübingen - Eine Stadt mit Geschichte und Kultur",
        "folder": "tuebingen-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "ulm-profil",
        "title": "Ulm - Eine Stadt mit Geschichte und Kultur",
        "folder": "ulm-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "augsburg-profil",
        "title": "Augsburg - Eine Stadt mit Geschichte und Kultur",
        "folder": "augsburg-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "wuerzburg-profil",
        "title": "Würzburg - Eine Stadt mit Geschichte und Kultur",
        "folder": "wuerzburg-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "regensburg-profil",
        "title": "Regensburg - Eine Stadt mit Geschichte und Kultur",
        "folder": "regensburg-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "saarbruecken-profil",
        "title": "Saarbrücken - Eine Stadt mit Geschichte und Kultur",
        "folder": "saarbruecken-eine-stadt-mit-geschichte-und-kultur"
      },
      {
        "id": "trier-profil",
        "title": "Trier - Die älteste Stadt Deutschlands",
        "folder": "trier-die-aelteste-stadt-deutschlands"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staedte+deutschland&t=3752"
  },
  "deutsche-staedte-im-profil-weitere-zentren": {
    "slug": "deutsche-staedte-im-profil-weitere-zentren",
    "title": "Deutsche Städte im Profil: Historische Zentren & Mittelstädte",
    "category": "Deutschland",
    "shortDesc": "Ingolstadt, Ludwigshafen, Stolberg, Velbert, Filderstadt, Neustadt an der Weinstraße, Wolfsburg, Erlangen u.v.m.",
    "longDesc": "Mittelstädte und regionale Wirtschaftszentren prägen das facettenreiche Städtenetz Deutschlands: Von Automobil- und Industriestandorten über Fachwerk- und Residenzstädte bis zu rheinischen Handelsorten.",
    "keyPoints": [
      "Industrie & Innovation: Ingolstadt (Audi), Wolfsburg (VW), Erlangen (Siemens) und Ludwigshafen (BASF)",
      "Tradition & Handwerk: Solingen (Klingenstadt), Velbert (Schlösser & Beschläge) und Stolberg (Kupferstadt)",
      "Wein & Kultur: Neustadt an der Weinstraße und Filderstadt",
      "Regionale Identität: Villingen-Schwenningen und Rosenheim"
    ],
    "exercises": [
      {
        "id": "ingolstadt-profil",
        "title": "Ingolstadt",
        "folder": "ingolstadt-1471"
      },
      {
        "id": "ludwigshafen-profil",
        "title": "Ludwigshafen am Rhein",
        "folder": "ludwigshafen-am-rhein-1479"
      },
      {
        "id": "filderstadt-profil",
        "title": "Filderstadt",
        "folder": "filderstadt-1631"
      },
      {
        "id": "neustadt-weinstrasse",
        "title": "Neustadt an der Weinstraße",
        "folder": "neustadt-an-der-weinstraese-1800"
      },
      {
        "id": "velbert-profil",
        "title": "Velbert",
        "folder": "velbert-1919"
      },
      {
        "id": "stolberg-profil",
        "title": "Stolberg",
        "folder": "stolberg-1879"
      },
      {
        "id": "langenfeld-profil",
        "title": "Langenfeld",
        "folder": "langenfeld-1729"
      },
      {
        "id": "wolfsburg-profil",
        "title": "Wolfsburg - Eine Stadt mit Geschichte und Industrie",
        "folder": "wolfsburg-eine-stadt-mit-geschichte-und-industrie"
      },
      {
        "id": "erlangen-profil",
        "title": "Erlangen - Eine Stadt mit Geschichte und Zukunft",
        "folder": "erlangen-eine-stadt-mit-geschichte-und-zukunft"
      },
      {
        "id": "solingen-profil",
        "title": "Solingen",
        "folder": "solingen-1480"
      },
      {
        "id": "rosenheim-profil",
        "title": "Rosenheim - Eine Stadt mit Geschichte und Natur",
        "folder": "rosenheim-eine-stadt-mit-geschichte-und-natur"
      },
      {
        "id": "villingen-schwenningen-profil",
        "title": "Villingen-Schwenningen - Eine Doppelstadt im Schwarzwald",
        "folder": "villingen-schwenningen-eine-doppelstadt-im-schwarzwald"
      },
      {
        "id": "siegen-profil",
        "title": "Siegen - Eine Stadt mit Geschichte und Natur",
        "folder": "siegen-eine-stadt-mit-geschichte-und-natur"
      },
      {
        "id": "remscheid-profil",
        "title": "Remscheid - Eine Stadt im Bergischen Land",
        "folder": "remscheid-eine-stadt-im-bergischen-land"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staedte+deutschland&t=3752"
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
      {
        "id": "6307",
        "title": "Der Kanton Bern",
        "folder": "der-kanton-bern-6307"
      },
      {
        "id": "6327",
        "title": "Der Kanton Zürich",
        "folder": "der-kanton-zurich-6327"
      },
      {
        "id": "1560",
        "title": "Basel-Landschaft",
        "folder": "basel-landschaft-1560"
      },
      {
        "id": "1561",
        "title": "Basel-Stadt",
        "folder": "basel-stadt-1561"
      },
      {
        "id": "1568",
        "title": "Bern",
        "folder": "bern-1568"
      },
      {
        "id": "6304",
        "title": "Der Kanton Aargau",
        "folder": "der-kanton-aargau-6304"
      },
      {
        "id": "6306",
        "title": "Der Kanton Basel-Landschaft",
        "folder": "der-kanton-basel-landschaft-6306"
      },
      {
        "id": "6319",
        "title": "Der Kanton Solothurn",
        "folder": "der-kanton-solothurn-6319"
      },
      {
        "id": "6409",
        "title": "Der Kanton Basel-Stadt",
        "folder": "der-kanton-basel-landschaft-2-6409"
      },
      {
        "id": "ch-ag-1",
        "title": "Kanton Aargau – Wasserschloss der Schweiz",
        "folder": "aargau-1522"
      },
      {
        "id": "ch-so-1",
        "title": "Kanton Solothurn – Barockstadt & Jura",
        "folder": "solothurn-1870"
      }
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
      {
        "id": "6311",
        "title": "Der Kanton Graubünden",
        "folder": "der-kanton-graubunden-6311"
      },
      {
        "id": "6325",
        "title": "Der Kanton Wallis",
        "folder": "der-kanton-wallis-6325"
      },
      {
        "id": "6321",
        "title": "Der Kanton Tessin",
        "folder": "der-kanton-tessin-6321"
      },
      {
        "id": "6309",
        "title": "Der Kanton Genf",
        "folder": "der-kanton-genf-6309"
      },
      {
        "id": "6308",
        "title": "Der Kanton Freiburg",
        "folder": "der-kanton-freiburg-6308"
      },
      {
        "id": "6312",
        "title": "Der Kanton Jura",
        "folder": "der-kanton-jura-6312"
      },
      {
        "id": "6314",
        "title": "Der Kanton Neuenburg",
        "folder": "der-kanton-neuenburg-6314"
      },
      {
        "id": "6324",
        "title": "Der Kanton Waadt",
        "folder": "der-kanton-waadt-6324"
      },
      {
        "id": "6353",
        "title": "Die Kantone der Schweiz",
        "folder": "die-kantone-der-schweiz-6353"
      },
      {
        "id": "ch-gr-1",
        "title": "Kanton Graubünden – Dreisprachiger Gebirgskanton & Engadin",
        "folder": "graubunden-1653"
      },
      {
        "id": "ch-ti-1",
        "title": "Kanton Tessin (Ticino) – Italienische Schweiz & Südalpen",
        "folder": "tessin-1890"
      },
      {
        "id": "ch-vs-1",
        "title": "Kanton Wallis (Valais) – Rhônetal & Viertausender",
        "folder": "wallis-1933"
      },
      {
        "id": "ch-vd-1",
        "title": "Kanton Waadt (Vaud) – Genfersee & Waadtländer Jura",
        "folder": "waadt-1931"
      },
      {
        "id": "ch-ne-1",
        "title": "Kanton Neuenburg (Neuchâtel) – Uhrenindustrie & Jura",
        "folder": "neuenburg-1797"
      },
      {
        "id": "ch-ju-1",
        "title": "Kanton Jura – Jüngster Kanton der Schweiz",
        "folder": "jura-1689"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+romandie+tessin&t=3752"
  },
  "die-schweiz-kantone-zentralschweiz": {
    "slug": "die-schweiz-kantone-zentralschweiz",
    "title": "Die Schweiz: Kantone der Zentralschweiz",
    "category": "Die Schweiz",
    "shortDesc": "Die Urkantone Uri, Schwyz, Unterwalden (Ob-/Nidwalden) sowie Luzern und Zug.",
    "longDesc": "Die Zentralschweiz ist die historische Wiege der Eidgenossenschaft rund um den Vierwaldstättersee.",
    "keyPoints": [
      "Urkantone von 1291: Uri, Schwyz und Unterwalden (heute Obwalden und Nidwalden)",
      "Luzern: Historisches Zentrum und Kulturmetropole am Vierwaldstättersee",
      "Zug: Wirtschafts- und Finanzzentrum mit tiefen Unternehmenssteuern"
    ],
    "exercises": [
      {
        "id": "1753",
        "title": "Luzern",
        "folder": "luzern-1753"
      },
      {
        "id": "6313",
        "title": "Der Kanton Luzern",
        "folder": "der-kanton-luzern-6313"
      },
      {
        "id": "6315",
        "title": "Der Kanton Nidwalden",
        "folder": "der-kanton-nidwalden-6315"
      },
      {
        "id": "6316",
        "title": "Der Kanton Obwalden",
        "folder": "der-kanton-obwalden-6316"
      },
      {
        "id": "6318",
        "title": "Der Kanton Schwyz",
        "folder": "der-kanton-schwyz-6318"
      },
      {
        "id": "6323",
        "title": "Der Kanton Uri",
        "folder": "der-kanton-uri-6323"
      },
      {
        "id": "6326",
        "title": "Der Kanton Zug",
        "folder": "der-kanton-zug-6326"
      },
      {
        "id": "ch-ur-1",
        "title": "Kanton Uri – Gotthardmassiv & Reusstal",
        "folder": "uri-1911"
      },
      {
        "id": "ch-sz-1",
        "title": "Kanton Schwyz – Urkanton am Vierwaldstättersee",
        "folder": "schwyz-1858"
      },
      {
        "id": "ch-nw-1",
        "title": "Kanton Nidwalden",
        "folder": "nidwalden-1965"
      },
      {
        "id": "ch-ow-1",
        "title": "Kanton Obwalden",
        "folder": "obwalden-1966"
      },
      {
        "id": "ch-zg-1",
        "title": "Kanton Zug",
        "folder": "zug-1953"
      },
      {
        "id": "ch-gl-1",
        "title": "Kanton Glarus – Glarner Alpen & Linth",
        "folder": "glarus-1648"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+kantone&t=3752"
  },
  "die-schweiz-kantone-ostschweiz": {
    "slug": "die-schweiz-kantone-ostschweiz",
    "title": "Die Schweiz: Kantone der Ostschweiz",
    "category": "Die Schweiz",
    "shortDesc": "St. Gallen, Thurgau, Schaffhausen, Glarus und die beiden Halbkantone Appenzell.",
    "longDesc": "Die Ostschweiz spannt den Bogen vom Bodensee über das Rheintal bis zu den Glarner Alpen.",
    "keyPoints": [
      "St. Gallen & Thurgau: Wirtschaftsraum zwischen Bodensee und Alpstein",
      "Appenzell Innerrhoden & Ausserrhoden: Traditionelle Landsgemeinde und Alpwirtschaft",
      "Schaffhausen: Der einzige Schweizer Kanton nördlich des Hochrheins"
    ],
    "exercises": [
      {
        "id": "6305",
        "title": "Der Kanton Appenzell Ausserrhoden",
        "folder": "der-kanton-appenzell-ausserrhoden-6305"
      },
      {
        "id": "6408",
        "title": "Der Kanton Appenzell Innerrhoden",
        "folder": "der-kanton-appenzell-innerrhoden-6408"
      },
      {
        "id": "1964",
        "title": "Appenzell Innerrhoden",
        "folder": "appenzell-innerrhoden-1964"
      },
      {
        "id": "6310",
        "title": "Der Kanton Glarus",
        "folder": "der-kanton-glarus-6310"
      },
      {
        "id": "6317",
        "title": "Der Kanton Schaffhausen",
        "folder": "der-kanton-schaffhausen-6317"
      },
      {
        "id": "6320",
        "title": "Der Kanton St. Gallen",
        "folder": "der-kanton-st-gallen-6320"
      },
      {
        "id": "6322",
        "title": "Der Kanton Thurgau",
        "folder": "der-kanton-thurgau-6322"
      },
      {
        "id": "ch-sg-1",
        "title": "Kanton St. Gallen – Bodensee bis Säntis",
        "folder": "st-gallen-1877"
      },
      {
        "id": "ch-tg-1",
        "title": "Kanton Thurgau – Obstgarten am Bodensee",
        "folder": "thurgau-1894"
      },
      {
        "id": "ch-sh-1",
        "title": "Kanton Schaffhausen – Nördlich des Rheins & Rheinfall",
        "folder": "schaffhausen-1851"
      },
      {
        "id": "ch-ar-1",
        "title": "Kanton Appenzell Ausserrhoden",
        "folder": "appenzell-ausserrhoden-1539"
      }
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
      {
        "id": "6292",
        "title": "Das politische System der Schweiz",
        "folder": "das-politische-system-der-schweiz-6292"
      },
      {
        "id": "6293",
        "title": "Das Schweizer Bürgerrecht",
        "folder": "das-schweizer-burgerrecht-6293"
      },
      {
        "id": "6391",
        "title": "Politische Parteien in der Schweiz",
        "folder": "politische-parteien-in-der-schweiz-6391"
      },
      {
        "id": "6283",
        "title": "Aussenpolitik der Schweiz",
        "folder": "aussenpolitik-der-schweiz-6283"
      },
      {
        "id": "6298",
        "title": "Demokratie in der Schweiz",
        "folder": "demokratie-in-der-schweiz-6298"
      },
      {
        "id": "6343",
        "title": "Die Bundesversammlung der Schweiz",
        "folder": "die-bundesversammlung-der-schweiz-6343"
      },
      {
        "id": "6350",
        "title": "Die Hauptstadtfrage der Schweiz",
        "folder": "die-hauptstadtfrage-der-schweiz-6350"
      },
      {
        "id": "6354",
        "title": "Die Mediationszeit in der Schweiz",
        "folder": "die-mediationszeit-in-der-schweiz-6354"
      },
      {
        "id": "6356",
        "title": "Die Neutralität der Schweiz",
        "folder": "die-neutralitat-der-schweiz-6356"
      },
      {
        "id": "6363",
        "title": "Die Schweizer Armee",
        "folder": "die-schweizer-armee-6363"
      },
      {
        "id": "6383",
        "title": "Liechtenstein und die Schweiz - Eine enge Nachbarschaft",
        "folder": "liechtenstein-und-die-schweiz-eine-enge-nachbarschaft-6383"
      },
      {
        "id": "6400",
        "title": "Schweizer Nachrichtendienste",
        "folder": "schweizer-nachrichtendienste-6400"
      },
      {
        "id": "6620",
        "title": "Die Schweizer Bundesfeier",
        "folder": "die-schweizer-bundesfeier-6620"
      },
      {
        "id": "ch-ueb-1",
        "title": "Die Schweiz im Überblick",
        "folder": "schweiz-1009"
      },
      {
        "id": "ch-hist-1",
        "title": "Der Bundesbrief von 1291 – Gründung der Eidgenossenschaft",
        "folder": "der-bundesbrief-von-1291-6301"
      },
      {
        "id": "ch-hist-2",
        "title": "Die Alte Eidgenossenschaft – Von den Urkantonen zu den 13 Orten",
        "folder": "die-alte-eidgenossenschaft-6342"
      },
      {
        "id": "ch-hist-3",
        "title": "Die Helvetische Republik (1798–1803)",
        "folder": "die-helvetische-republik-6351"
      },
      {
        "id": "ch-hist-4",
        "title": "Der Sonderbundskrieg 1847 – Weg zum modernen Bundesstaat",
        "folder": "der-sonderbundskrieg-6335"
      },
      {
        "id": "ch-hist-5",
        "title": "Die Schweiz im Ersten Weltkrieg",
        "folder": "die-schweiz-im-ersten-weltkrieg-6361"
      },
      {
        "id": "ch-hist-6",
        "title": "Die Schweiz nach dem Zweiten Weltkrieg",
        "folder": "die-schweiz-nach-dem-zweiten-weltkrieg-6362"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+politik&t=3752"
  },
  "die-schweiz-sprachen-kultur-und-gesellschaft": {
    "slug": "die-schweiz-sprachen-kultur-und-gesellschaft",
    "title": "Die Schweiz: Sprachen & Kultur",
    "category": "Die Schweiz",
    "shortDesc": "Viersprachigkeit, Schweizerdeutsch, Rätoromanisch, Film, Kulinarik und eidgenössische Feste.",
    "longDesc": "Die Schweizer Kultur ist durch die Viersprachigkeit (Deutsch, Französisch, Italienisch, Rätoromanisch) und ein starkes Bekenntnis zu gelebter Vielfalt geprägt.",
    "keyPoints": [
      "4 Landessprachen: Deutsch (ca. 62 %), Französisch (23 %), Italienisch (8 %), Rätoromanisch (0,5 %)",
      "Dialektvielfalt: Schweizerdeutsch als alltägliche gesprochene Sprache in der Deutschschweiz",
      "Bräuche & Traditionen: Schwingen, Chalandamarz und kulinarische Ikonen wie Fondue und Raclette"
    ],
    "exercises": [
      {
        "id": "1856",
        "title": "Schweiz",
        "folder": "schweiz-2-1856"
      },
      {
        "id": "6395",
        "title": "Sprachen in der Schweiz",
        "folder": "sprachen-in-der-schweiz-6395"
      },
      {
        "id": "6393",
        "title": "Schweizerdeutsch einfach erklärt",
        "folder": "schweizerdeutsch-einfach-erklart-6393"
      },
      {
        "id": "6286",
        "title": "Bündnerromanisch – Eine Sprache aus Graubünden",
        "folder": "bundnerromanisch-eine-sprache-aus-graubunden-6286"
      },
      {
        "id": "6333",
        "title": "Der Schweizer Film",
        "folder": "der-schweizer-film-6333"
      },
      {
        "id": "6364",
        "title": "Die schweizer kuche",
        "folder": "die-schweizer-kuche-6364"
      },
      {
        "id": "6371",
        "title": "Eidgenössische Feste in der Schweiz",
        "folder": "eidgenossische-feste-in-der-schweiz-6371"
      },
      {
        "id": "ch-rel-1",
        "title": "Religionen & Konfessionen in der Schweiz",
        "folder": "religionen-in-der-schweiz-6407"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+kultur&t=3752"
  },
  "die-schweiz-gesellschaft-bildung-und-sport": {
    "slug": "die-schweiz-gesellschaft-bildung-und-sport",
    "title": "Die Schweiz: Gesellschaft, Bildung & Lebensraum",
    "category": "Die Schweiz",
    "shortDesc": "Bildungssystem, Gesundheitswesen, Sozialpolitik, Medien, Sport, Flora, Fauna und Klima.",
    "longDesc": "Hohe Lebensqualität, ein durchlässiges Bildungssystem mit dualer Berufslehre und ein modernes Gesundheitssystem prägen den Schweizer Alltag.",
    "keyPoints": [
      "Duales Bildungssystem: Hohe Anerkennung der beruflichen Grundbildung neben Gymnasien und ETHs",
      "Gesundheit & Soziales: Obligatorische Krankenpflegeversicherung und Drei-Säulen-Vorsorge",
      "Lebensraum Schweiz: Klimatische Zonen und alpine Biodiversität von den Tälern bis zu den Gletschern"
    ],
    "exercises": [
      {
        "id": "6288",
        "title": "Das Bildungssystem in der Schweiz",
        "folder": "das-bildungssystem-in-der-schweiz-6288"
      },
      {
        "id": "6289",
        "title": "Das Gesundheitswesen in der Schweiz",
        "folder": "das-gesundheitswesen-in-der-schweiz-6289"
      },
      {
        "id": "6297",
        "title": "Demografie der Schweiz",
        "folder": "demografie-der-schweiz-6297"
      },
      {
        "id": "6386",
        "title": "Medien in der Schweiz",
        "folder": "medien-in-der-schweiz-6386"
      },
      {
        "id": "6394",
        "title": "Sozialpolitik in der Schweiz",
        "folder": "sozialpolitik-in-der-schweiz-6394"
      },
      {
        "id": "6402",
        "title": "Sport in der Schweiz",
        "folder": "sport-in-der-schweiz-6402"
      },
      {
        "id": "6372",
        "title": "Flora und Fauna der Schweiz",
        "folder": "flora-und-fauna-der-schweiz-6372"
      },
      {
        "id": "6377",
        "title": "Geschichte der Landwirtschaft in der Schweiz",
        "folder": "geschichte-der-landwirtschaft-in-der-schweiz-6377"
      },
      {
        "id": "6380",
        "title": "Klima der Schweiz",
        "folder": "klima-der-schweiz-6380"
      }
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
      {
        "id": "6398",
        "title": "Wirtschaft der Schweiz",
        "folder": "wirtschaft-der-schweiz-6398"
      },
      {
        "id": "6334",
        "title": "Der Schweizer Franken",
        "folder": "der-schweizer-franken-6334"
      },
      {
        "id": "6346",
        "title": "Die Elektrizitätswirtschaft in der Schweiz",
        "folder": "die-elektrizitatswirtschaft-in-der-schweiz-6346"
      },
      {
        "id": "6365",
        "title": "Die Schweizerischen Bundesbahnen (SBB)",
        "folder": "die-schweizerischen-bundesbahnen-sbb-6365"
      },
      {
        "id": "6379",
        "title": "Kernenergie in der Schweiz",
        "folder": "kernenergie-in-der-schweiz-6379"
      },
      {
        "id": "6388",
        "title": "Naturräumliche Gliederung der Schweiz",
        "folder": "naturraumliche-gliederung-der-schweiz-6388"
      },
      {
        "id": "6397",
        "title": "UNESCO-Welterbe in der Schweiz",
        "folder": "unesco-welterbe-in-der-schweiz-6397"
      },
      {
        "id": "6404",
        "title": "Tourismus in der Schweiz",
        "folder": "tourismus-in-der-schweiz-6404"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+wirtschaft&t=3752"
  },
  "die-schweiz-staedte-der-deutschschweiz": {
    "slug": "die-schweiz-staedte-der-deutschschweiz",
    "title": "Schweizer Großstädte: Zürich, Basel, Bern & Luzern",
    "category": "Die Schweiz",
    "shortDesc": "Zürich, Basel, Bern, Luzern, Winterthur, St. Gallen, Schaffhausen und Zug im Stadtporträt.",
    "longDesc": "Die wirtschaftlichen und politischen Hauptzentren der Deutschschweiz: Vom Weltfinanzplatz Zürich über die Pharmametropole Basel bis zur Bundesstadt Bern.",
    "keyPoints": [
      "Zürich: Größte Stadt der Schweiz, Bankenplatz und Kulturzentrum an der Limmat",
      "Basel: Am Rheinknie, Dreiländereck, Zentrum der globalen chemisch-pharmazeutischen Industrie",
      "Bern: Bundessitz mit UNESCO-geschützter Sandstein-Altstadt an der Aareschlaufe"
    ],
    "exercises": [
      {
        "id": "6406",
        "title": "Zürich - Die größte Stadt der Schweiz",
        "folder": "zurich-die-groeste-stadt-der-schweiz-6406"
      },
      {
        "id": "6284",
        "title": "Basel – Eine Stadt am Rheinknie",
        "folder": "basel-eine-stadt-am-rheinknie-6284"
      },
      {
        "id": "6367",
        "title": "Die Stadt Bern",
        "folder": "die-stadt-bern-6367"
      },
      {
        "id": "6385",
        "title": "Luzern – Eine Stadt in der Zentralschweiz",
        "folder": "luzern-eine-stadt-in-der-zentralschweiz-6385"
      },
      {
        "id": "6405",
        "title": "Winterthur - Eine Stadt in der Schweiz",
        "folder": "winterthur-eine-stadt-in-der-schweiz-6405"
      },
      {
        "id": "6403",
        "title": "St. Gallen – Eine Stadt mit Geschichte und Kultur",
        "folder": "st-gallen-eine-stadt-mit-geschichte-und-kultur-6403"
      },
      {
        "id": "6399",
        "title": "Schaffhausen - Eine Stadt mit Geschichte und Kultur",
        "folder": "schaffhausen-eine-stadt-mit-geschichte-und-kultur-6399"
      },
      {
        "id": "6368",
        "title": "Die Stadt Zug",
        "folder": "die-stadt-zug-6368"
      },
      {
        "id": "ch-wint-1",
        "title": "Winterthur – Sechstgrößte Stadt der Schweiz",
        "folder": "winterthur-1943"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+staedte&t=3752"
  },
  "die-schweiz-regionalstaedte-deutschschweiz": {
    "slug": "die-schweiz-regionalstaedte-deutschschweiz",
    "title": "Schweizer Regionalstädte & Hauptorte",
    "category": "Die Schweiz",
    "shortDesc": "Aarau, Chur, Frauenfeld, Herisau, Köniz, Thun, Solothurn und Davos.",
    "longDesc": "Charakteristische Hauptorte und historische Regionalzentren der Schweiz: Von der Barockstadt Solothurn über die älteste Stadt Chur bis zur alpinen Kongressstadt Davos.",
    "keyPoints": [
      "Chur: Älteste Stadt der Schweiz, Tor zu den Bündner Pässen",
      "Solothurn: Schönste Barockstadt der Schweiz an der Aare",
      "Davos: Höchstgelegene Stadt Europas und Tagungsort des World Economic Forum (WEF)"
    ],
    "exercises": [
      {
        "id": "6282",
        "title": "Aarau – Eine Stadt mit Geschichte und Kultur",
        "folder": "aarau-eine-stadt-mit-geschichte-und-kultur-6282"
      },
      {
        "id": "6287",
        "title": "Chur – Die älteste Stadt der Schweiz",
        "folder": "chur-die-alteste-stadt-der-schweiz-6287"
      },
      {
        "id": "6373",
        "title": "Frauenfeld - Eine Stadt mit Geschichte",
        "folder": "frauenfeld-eine-stadt-mit-geschichte-6373"
      },
      {
        "id": "6378",
        "title": "Herisau – Eine Gemeinde in der Schweiz",
        "folder": "herisau-eine-gemeinde-in-der-schweiz-6378"
      },
      {
        "id": "6381",
        "title": "Köniz - Eine Gemeinde in der Schweiz",
        "folder": "koniz-eine-gemeinde-in-der-schweiz-6381"
      },
      {
        "id": "6396",
        "title": "Thun – Eine Stadt mit Geschichte und Kultur",
        "folder": "thun-eine-stadt-mit-geschichte-und-kultur-6396"
      },
      {
        "id": "6401",
        "title": "Solothurn - Eine Stadt mit Geschichte und Kultur",
        "folder": "solothurn-eine-stadt-mit-geschichte-und-kultur-6401"
      },
      {
        "id": "6296",
        "title": "Davos – Eine Stadt in den Alpen",
        "folder": "davos-eine-stadt-in-den-alpen-6296"
      },
      {
        "id": "ch-chur-1",
        "title": "Chur – Älteste Stadt der Schweiz",
        "folder": "chur-1598"
      },
      {
        "id": "ch-thun-1",
        "title": "Thun – Tor zum Berner Oberland",
        "folder": "thun-1893"
      },
      {
        "id": "ch-ust-1",
        "title": "Uster – Stadt am Greifensee",
        "folder": "uster-1914"
      }
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
      {
        "id": "6375",
        "title": "Genf – Eine Stadt mit Geschichte und Bedeutung",
        "folder": "genf-eine-stadt-mit-geschichte-und-bedeutung-6375"
      },
      {
        "id": "6384",
        "title": "Lugano - Eine Stadt im Tessin",
        "folder": "lugano-eine-stadt-im-tessin-6384"
      },
      {
        "id": "1644",
        "title": "Genf",
        "folder": "genf-1644"
      },
      {
        "id": "1731",
        "title": "Lausanne",
        "folder": "lausanne-1731"
      },
      {
        "id": "1749",
        "title": "Lugano",
        "folder": "lugano-1749"
      },
      {
        "id": "6285",
        "title": "Bellinzona - Eine Stadt im Tessin",
        "folder": "bellinzona-eine-stadt-im-tessin-6285"
      },
      {
        "id": "6344",
        "title": "Die Deutschschweiz",
        "folder": "die-deutschschweiz-6344"
      },
      {
        "id": "6352",
        "title": "Die italienische Schweiz",
        "folder": "die-italienische-schweiz-6352"
      },
      {
        "id": "6359",
        "title": "Die Romandie – Französischsprachige Schweiz",
        "folder": "die-romandie-franzosischsprachige-schweiz-6359"
      },
      {
        "id": "6389",
        "title": "Neuenburg – Eine Stadt in der Schweiz",
        "folder": "neuenburg-eine-stadt-in-der-schweiz-6389"
      },
      {
        "id": "6382",
        "title": "La Chaux-de-Fonds - Eine Stadt der Uhren",
        "folder": "la-chaux-de-fonds-eine-stadt-der-uhren-6382"
      },
      {
        "id": "ch-fr-1",
        "title": "Freiburg im Üechtland (Fribourg)",
        "folder": "freiburg-im-echtland-6374"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+romandie+staedte&t=3752"
  },
  "die-schweiz-alpen-und-gebirge": {
    "slug": "die-schweiz-alpen-und-gebirge",
    "title": "Schweizer Alpen: Viertausender & Hochgebirge",
    "category": "Die Schweiz",
    "shortDesc": "Matterhorn, Dufourspitze, Monte Rosa, Weisshorn, Dom, Walliser Alpen und alpine Geologie.",
    "longDesc": "Die Schweizer Hochalpen beherbergen 48 der 82 Viertausender der Alpen. Die majestätischen Massive des Wallis und des Berner Oberlands prägen das Landschaftsbild.",
    "keyPoints": [
      "Dufourspitze (4.634 m): Höchster Punkt der Schweiz im Monte-Rosa-Massiv",
      "Matterhorn (4.478 m): Der weltberühmte Pyramidenberg bei Zermatt",
      "Alpine Faltung: Tektonische Kollision der eurasischen und afrikanischen Kontinentalplatte"
    ],
    "exercises": [
      {
        "id": "6291",
        "title": "Das Matterhorn - Ein berühmter Berg",
        "folder": "das-matterhorn-ein-beruhmter-berg-6291"
      },
      {
        "id": "6345",
        "title": "Die Dufourspitze",
        "folder": "die-dufourspitze-6345"
      },
      {
        "id": "6387",
        "title": "Monte Rosa – Ein riesiger Berg in den Alpen",
        "folder": "monte-rosa-ein-riesiger-berg-in-den-alpen-6387"
      },
      {
        "id": "6295",
        "title": "Das Weisshorn in den Walliser Alpen",
        "folder": "das-weisshorn-in-den-walliser-alpen-6295"
      },
      {
        "id": "6302",
        "title": "Der Dom – Ein hoher Berg in den Alpen",
        "folder": "der-dom-ein-hoher-berg-in-den-alpen-6302"
      },
      {
        "id": "6329",
        "title": "Der Liskamm – Ein Berg in den Alpen",
        "folder": "der-liskamm-ein-berg-in-den-alpen-6329"
      },
      {
        "id": "6370",
        "title": "Die Walliser Alpen",
        "folder": "die-walliser-alpen-6370"
      },
      {
        "id": "6376",
        "title": "Geologie und Gebirge der Schweiz",
        "folder": "geologie-und-gebirge-der-schweiz-6376"
      },
      {
        "id": "ch-alp-1",
        "title": "Die Mont-Blanc-Gruppe – Westalpen-Massiv im Dreiländereck",
        "folder": "die-mont-blanc-gruppe-6355"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=alpen+schweiz&t=3752"
  },
  "die-schweiz-voralpen-und-jura": {
    "slug": "die-schweiz-voralpen-und-jura",
    "title": "Schweizer Gebirge: Jura, Voralpen & Massive",
    "category": "Die Schweiz",
    "shortDesc": "Juragebirge, Gotthard-Gruppe, Freiburger Voralpen, Randen, Emmentaler und Schwyzer Alpen.",
    "longDesc": "Neben den Hochalpen gliedern das Faltenjura im Nordwesten und die Voralpen die Schweizer Topographie.",
    "keyPoints": [
      "Juragebirge: Kalkstein-Mittelgebirgszug entlang der französischen Grenze",
      "Gotthard-Massiv: Zentrale europäische Wasserscheide und legendärer Alpenpass",
      "Voralpen: Grüne Flysch- und Schrattenkalkzonen zwischen Mittelland und Hochgebirge"
    ],
    "exercises": [
      {
        "id": "6290",
        "title": "Das Juragebirge",
        "folder": "das-juragebirge-6290"
      },
      {
        "id": "6349",
        "title": "Die Gotthard-Gruppe",
        "folder": "die-gotthard-gruppe-6349"
      },
      {
        "id": "6348",
        "title": "Die Freiburger Voralpen",
        "folder": "die-freiburger-voralpen-6348"
      },
      {
        "id": "6332",
        "title": "Der Randen – Ein Höhenzug in der Schweiz",
        "folder": "der-randen-ein-hohenzug-in-der-schweiz-6332"
      },
      {
        "id": "6294",
        "title": "Das Taminagebirge",
        "folder": "das-taminagebirge-6294"
      },
      {
        "id": "6347",
        "title": "Die Emmentaler Alpen",
        "folder": "die-emmentaler-alpen-6347"
      },
      {
        "id": "6366",
        "title": "Die Schwyzer Alpen",
        "folder": "die-schwyzer-alpen-6366"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=alpen+schweiz&t=3752"
  },
  "die-schweiz-gewaesser-seen-und-fluesse": {
    "slug": "die-schweiz-gewaesser-seen-und-fluesse",
    "title": "Schweizer Seenlandschaften",
    "category": "Die Schweiz",
    "shortDesc": "Genfersee, Vierwaldstättersee, Zürichsee, Lago Maggiore, Luganersee, Thuner- und Brienzersee.",
    "longDesc": "Die großen Schweizer Seen sind eiszeitliche Zungenbeckenseen von herausragender Schönheit und Bedeutung für Trinkwasser und Schifffahrt.",
    "keyPoints": [
      "Genfersee: Größter See Mitteleuropas (580 km²), geteilt zwischen Schweiz und Frankreich",
      "Vierwaldstättersee: Stark verzweigter Fjordsee im Herzen der Urschweiz",
      "Tessiner Seen: Mediterranes Flair am Lago Maggiore und Luganersee"
    ],
    "exercises": [
      {
        "id": "6303",
        "title": "Der Genfersee",
        "folder": "der-genfersee-6303"
      },
      {
        "id": "6337",
        "title": "Der Vierwaldstättersee",
        "folder": "der-vierwaldstattersee-6337"
      },
      {
        "id": "6340",
        "title": "Der Zürichsee",
        "folder": "der-zurichsee-6340"
      },
      {
        "id": "6328",
        "title": "Der Lago Maggiore",
        "folder": "der-lago-maggiore-6328"
      },
      {
        "id": "6330",
        "title": "Der Luganersee",
        "folder": "der-luganersee-6330"
      },
      {
        "id": "6336",
        "title": "Der Thunersee",
        "folder": "der-thunersee-6336"
      },
      {
        "id": "6299",
        "title": "Der Bielersee",
        "folder": "der-bielersee-6299"
      },
      {
        "id": "6300",
        "title": "Der Brienzersee",
        "folder": "der-brienzersee-6300"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schweiz+seen+fluesse&t=3752"
  },
  "die-schweiz-fluesse-und-gewaessersysteme": {
    "slug": "die-schweiz-fluesse-und-gewaessersysteme",
    "title": "Schweizer Flüsse & Gewässersysteme",
    "category": "Die Schweiz",
    "shortDesc": "Aare, Rhone, Reuss, Thur, Saane, Walensee, Neuenburgersee und Zugersee.",
    "longDesc": "Die Schweiz gilt als das 'Wasserschloss Europas'. Hier entspringen Rhein, Rhone, Inn und Tessin und fließen in vier verschiedene Meere.",
    "keyPoints": [
      "Aare: Längster gänzlich innerhalb der Schweiz verlaufender Fluss (295 km)",
      "Rhone & Rhein: Wichtige europäische Flusssysteme mit Ursprung in Schweizer Gletschern",
      "Hydrologische Bedeutung: Wasserkraft deckt über 55 % des Schweizer Strombedarfs"
    ],
    "exercises": [
      {
        "id": "6358",
        "title": "Die Rhone – ein wichtiger Fluss in Europa",
        "folder": "die-rhone-ein-wichtiger-fluss-in-europa-6358"
      },
      {
        "id": "6369",
        "title": "Die Thur – Ein Fluss in der Ostschweiz",
        "folder": "die-thur-ein-fluss-in-der-ostschweiz-6369"
      },
      {
        "id": "6341",
        "title": "Die Aare - Der längste Fluss der Schweiz",
        "folder": "die-aare-der-langste-fluss-der-schweiz-6341"
      },
      {
        "id": "6357",
        "title": "Die Reuss – Ein Fluss in der Schweiz",
        "folder": "die-reuss-ein-fluss-in-der-schweiz-6357"
      },
      {
        "id": "6360",
        "title": "Die Saane – Ein Fluss in der Schweiz",
        "folder": "die-saane-ein-fluss-in-der-schweiz-6360"
      },
      {
        "id": "6338",
        "title": "Der Walensee",
        "folder": "der-walensee-6338"
      },
      {
        "id": "6331",
        "title": "Der Neuenburgersee",
        "folder": "der-neuenburgersee-6331"
      },
      {
        "id": "6339",
        "title": "Der Zugersee – Ein See in der Schweiz",
        "folder": "der-zugersee-ein-see-in-der-schweiz-6339"
      }
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
      {
        "id": "304",
        "title": "Europa im Überblick",
        "folder": "europa-im-berblick-304"
      },
      {
        "id": "307",
        "title": "Klima Europas",
        "folder": "klima-europas-307"
      },
      {
        "id": "305",
        "title": "Staaten Europas",
        "folder": "staaten-europas-305"
      },
      {
        "id": "398",
        "title": "Städte Europas",
        "folder": "stadte-europas-398"
      },
      {
        "id": "428",
        "title": "Mitteleuropa",
        "folder": "mitteleuropa-2-428"
      },
      {
        "id": "185",
        "title": "Lander europa",
        "folder": "lander-europa-185"
      },
      {
        "id": "5475",
        "title": "Die typische europäische Stadt",
        "folder": "die-typische-europaische-stadt-2-5475"
      },
      {
        "id": "3223",
        "title": "Escape Room: Länder Europas",
        "folder": "escape-room-quot-lander-europas-quot-3223"
      },
      {
        "id": "5557",
        "title": "Städtestrukturen in Europa - Wachstum, Wandel und Herausforderungen",
        "folder": "stadtestrukturen-in-europa-wachstum-wandel-und-herausforderungen-5557"
      },
      {
        "id": "131",
        "title": "Hauptstadte europa",
        "folder": "hauptstadte-europa-131"
      },
      {
        "id": "5464",
        "title": "Die klimatische Vielfalt Europas - Von Mittelmeerhitze bis Polarkälte",
        "folder": "die-klimatische-vielfalt-europas-von-mittelmeerhitze-bis-polarkalte-5464"
      }
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
      {
        "id": "1997",
        "title": "Die Alpen",
        "folder": "die-alpen-1997"
      },
      {
        "id": "1995",
        "title": "Almwirtschaft",
        "folder": "almwirtschaft-1995"
      },
      {
        "id": "2018",
        "title": "Die Donau",
        "folder": "die-donau-2018"
      },
      {
        "id": "195",
        "title": "Gebirge Europas",
        "folder": "gebirge-europas-195"
      },
      {
        "id": "196",
        "title": "Meere Europas",
        "folder": "meere-europas-196"
      },
      {
        "id": "197",
        "title": "Flusse europas",
        "folder": "flusse-europas-197"
      },
      {
        "id": "5450",
        "title": "Die Alpen als prägendes Landschaftsmerkmal Europas",
        "folder": "die-alpen-als-pragendes-landschaftsmerkmal-europas-5450"
      },
      {
        "id": "985",
        "title": "Der Bodensee",
        "folder": "der-bodensee-985"
      },
      {
        "id": "2023",
        "title": "Die rhein main donau wasserstraese",
        "folder": "die-rhein-main-donau-wasserstraese-2023"
      }
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
      {
        "id": "308",
        "title": "Entwicklung der EU",
        "folder": "entwicklung-der-eu-308"
      },
      {
        "id": "309",
        "title": "Aufgaben und Organe der EU",
        "folder": "aufgaben-und-organe-der-eu-309"
      },
      {
        "id": "368",
        "title": "Der Euro",
        "folder": "der-euro-368"
      },
      {
        "id": "3500",
        "title": "Der europäische Binnenmarkt",
        "folder": "der-europaische-binnenmarkt-3500"
      },
      {
        "id": "3492",
        "title": "Das EU-Parlament",
        "folder": "das-eu-parlament-3492"
      },
      {
        "id": "3509",
        "title": "Die Europäische Kommission",
        "folder": "die-europaische-kommission-3509"
      },
      {
        "id": "3510",
        "title": "Die Europäische Zentralbank",
        "folder": "die-europaische-zentralbank-3510"
      },
      {
        "id": "3477",
        "title": "Arbeit des Europäischen Parlaments",
        "folder": "arbeit-des-europaischen-parlaments-3477"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=europaeische+union&t=3752"
  },
  "westeuropa-laender-und-hauptstaedte": {
    "slug": "westeuropa-laender-und-hauptstaedte",
    "title": "Westeuropa: Länder & Hauptstädte",
    "category": "Europa & Die EU",
    "shortDesc": "Frankreich, Vereinigtes Königreich, Irland, Benelux-Staaten und Monaco.",
    "longDesc": "Westeuropa gehört zu den am dichtesten besiedelten und wirtschaftlich stärksten Regionen der Welt mit Weltmetropolen wie London und Paris.",
    "keyPoints": [
      "Wirtschaftsachse: Die sogenannte 'Blaue Banane' von London über Benelux nach Norditalien",
      "Frankreich & UK: Führende Industrie- und Kulturnationen mit globalem Einfluss",
      "Benelux: Gründungsmitglieder der EU mit den Welthäfen Rotterdam und Antwerpen"
    ],
    "exercises": [
      {
        "id": "416",
        "title": "Westeuropa",
        "folder": "westeuropa-2-416"
      },
      {
        "id": "1564",
        "title": "Belgien",
        "folder": "belgien-1564"
      },
      {
        "id": "1038",
        "title": "Frankreich",
        "folder": "frankreich-1038"
      },
      {
        "id": "1680",
        "title": "Irland",
        "folder": "irland-1680"
      },
      {
        "id": "1785",
        "title": "Monaco",
        "folder": "monaco-1785"
      },
      {
        "id": "1968",
        "title": "Niederlande",
        "folder": "niederlande-1968"
      },
      {
        "id": "1923",
        "title": "Vereinigtes Königreich",
        "folder": "vereinigtes-konigreich-1923"
      },
      {
        "id": "3229",
        "title": "Escape Room: 5 wichtige Länder Westeuropas",
        "folder": "escape-room-quot-5-wichtige-lander-westeuropas-quot-3229"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=westeuropa+nordeuropa&t=3752"
  },
  "nordeuropa-und-skandinavien": {
    "slug": "nordeuropa-und-skandinavien",
    "title": "Nordeuropa & Skandinavien",
    "category": "Europa & Die EU",
    "shortDesc": "Norwegen, Schweden, Finnland, Dänemark und Island: Fjorde, Taiga und Polarlichter.",
    "longDesc": "Nordeuropa zeichnet sich durch weite Naturräume, skandinavische Gebirge, Inselwelten und hochentwickelte Wohlfahrtsstaaten aus.",
    "keyPoints": [
      "Skandinavische Halbinsel: Norwegen (Fjordküste, Erdöl) und Schweden (Erze, Wälder)",
      "Finnland & Island: Das Land der tausend Seen und die Vulkaninsel auf dem Mittelatlantischen Rücken",
      "Hoher Norden: Anpassung an lange Winter und die Mitternachtssonne im Sommer"
    ],
    "exercises": [
      {
        "id": "426",
        "title": "Nordeuropa",
        "folder": "nordeuropa-2-426"
      },
      {
        "id": "1127",
        "title": "Dänemark",
        "folder": "danemark-2-1127"
      },
      {
        "id": "1632",
        "title": "Finnland",
        "folder": "finnland-1632"
      },
      {
        "id": "1681",
        "title": "Island",
        "folder": "island-1681"
      },
      {
        "id": "1810",
        "title": "Norwegen",
        "folder": "norwegen-1810"
      },
      {
        "id": "1854",
        "title": "Schweden",
        "folder": "schweden-1854"
      },
      {
        "id": "3227",
        "title": "Escape Room: Länder Nordeuropas",
        "folder": "escape-room-quot-lander-nordeuropas-quot-3227"
      },
      {
        "id": "5576",
        "title": "Der europäische Norden - Lebensweise und Anpassung an extreme Klimabedingungen",
        "folder": "der-europaische-norden-lebensweise-und-anpassung-an-extreme-klimabedingungen-5576"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=westeuropa+nordeuropa&t=3752"
  },
  "suedeuropa-und-mittelmeerraum": {
    "slug": "suedeuropa-und-mittelmeerraum",
    "title": "Südeuropa: Iberische Halbinsel",
    "category": "Europa & Die EU",
    "shortDesc": "Spanien, Portugal und Andorra: Meseta, Landwirtschaft, Mittelmeerküste und Atlantik.",
    "longDesc": "Die Iberische Halbinsel bildet die Brücke zwischen Europa und Afrika. Das mediterrane Klima prägt Landwirtschaft, Tourismus und Lebensweise.",
    "keyPoints": [
      "Spanien: Zentrales Hochland (Meseta), Küstenebenen und wirtschaftliche Entwicklung",
      "Portugal: Atlantische Prägung, Korkeichenwälder und traditionelle Seefahrernation",
      "Wasserknappheit: Herausforderungen durch Dürren und intensive Bewässerungslandwirtschaft"
    ],
    "exercises": [
      {
        "id": "427",
        "title": "Südeuropa",
        "folder": "sudeuropa-2-427"
      },
      {
        "id": "123",
        "title": "Südeuropa – Bildpaare",
        "folder": "sudeuropa-123"
      },
      {
        "id": "1010",
        "title": "Spanien",
        "folder": "spanien-1010"
      },
      {
        "id": "5381",
        "title": "Spanien heute",
        "folder": "spanien-heute-5381"
      },
      {
        "id": "2050",
        "title": "Landwirtschaft in Spanien",
        "folder": "landwirtschaft-in-spanien-2050"
      },
      {
        "id": "1969",
        "title": "Portugal",
        "folder": "portugal-1969"
      },
      {
        "id": "1534",
        "title": "Andorra",
        "folder": "andorra-1534"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedeuropa+mittelmeer&t=3752"
  },
  "italien-und-zentraler-mittelmeerraum": {
    "slug": "italien-und-zentraler-mittelmeerraum",
    "title": "Italien & Zentraler Mittelmeerraum",
    "category": "Europa & Die EU",
    "shortDesc": "Italien, Griechenland, Malta, San Marino und Vatikanstadt im geographischen Überblick.",
    "longDesc": "Der zentrale Mittelmeerraum ist die Wiege der europäischen Antike und zeichnet sich durch vulkanische Inseln und reiche Kulturlandschaften aus.",
    "keyPoints": [
      "Italien: Nord-Süd-Gefälle zwischen industrieller Po-Ebene und agrarischem Mezzogiorno",
      "Griechenland: Über 3.000 Inseln in der Ägäis und stark zerklüftetes Festland",
      "Vulkanismus: Aktive Vulkane wie Ätna, Vesuv und Stromboli"
    ],
    "exercises": [
      {
        "id": "1684",
        "title": "Italien",
        "folder": "italien-3-1684"
      },
      {
        "id": "1656",
        "title": "Griechenland",
        "folder": "griechenland-1656"
      },
      {
        "id": "1765",
        "title": "Malta",
        "folder": "malta-1765"
      },
      {
        "id": "1846",
        "title": "San Marino",
        "folder": "san-marino-1846"
      },
      {
        "id": "1918",
        "title": "Vatikanstadt",
        "folder": "vatikanstadt-1918"
      },
      {
        "id": "3228",
        "title": "Escape Room: Länder Südeuropas",
        "folder": "escape-room-quot-lander-sudeuropas-quot-3228"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedeuropa+mittelmeer&t=3752"
  },
  "osteuropa-laender-und-metropolen": {
    "slug": "osteuropa-laender-und-metropolen",
    "title": "Osteuropa: Länder & Metropolen",
    "category": "Europa & Die EU",
    "shortDesc": "Polen, Tschechien, Slowakei, Ungarn und Budapest im geographischen Wandel.",
    "longDesc": "Die ostmitteleuropäischen Staaten haben seit dem Fall des Eisernen Vorhangs eine rasante Transformation durchlaufen und sind zentrale EU-Wirtschaftspartner.",
    "keyPoints": [
      "Mitteleuropäischer Übergang: Karpatenbogen, Böhmische Masse und Pannonische Tiefebene",
      "Polen & Tschechien: Starke Industriestandorte und wachsende Metropolen Warschau und Prag",
      "Ungarn & Slowakei: Autoproduktion und agrarische Fruchtbarkeit an der Donau"
    ],
    "exercises": [
      {
        "id": "424",
        "title": "Osteuropa",
        "folder": "osteuropa-2-424"
      },
      {
        "id": "1829",
        "title": "Polen",
        "folder": "polen-2-1829"
      },
      {
        "id": "1901",
        "title": "Tschechien",
        "folder": "tschechien-1901"
      },
      {
        "id": "1963",
        "title": "Slowakei",
        "folder": "test-8-1963"
      },
      {
        "id": "1910",
        "title": "Ungarn",
        "folder": "ungarn-1910"
      },
      {
        "id": "1583",
        "title": "Budapest",
        "folder": "budapest-1583"
      },
      {
        "id": "5562",
        "title": "Unterschiede zwischen West- und Osteuropa - Wirtschaftlich, kulturell, geografisch",
        "folder": "unterschiede-zwischen-west-und-osteuropa-wirtschaftlich-kulturell-geografisch-5562"
      },
      {
        "id": "1944",
        "title": "Posen (Poznań) – Polens historische Handelsmetropole",
        "folder": "wirtschaft-1944"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=osteuropa+baltikum&t=3752"
  },
  "baltikum-und-osteuropa-ost": {
    "slug": "baltikum-und-osteuropa-ost",
    "title": "Baltikum, Ukraine & Osteuropa",
    "category": "Europa & Die EU",
    "shortDesc": "Estland, Lettland, Tallinn, Ukraine, Weißrussland und Russland im Überblick.",
    "longDesc": "Vom Ostseeraum der baltischen Staaten über die weiten Schwarzerdeböden der Ukraine bis zu den osteuropäischen Tiefebenen.",
    "keyPoints": [
      "Baltische Staaten: Estland, Lettland und Litauen als moderne digitale Pioniere an der Ostsee",
      "Ukraine: Bedeutende Kornkammer mit fruchtbarsten Schwarzerdeböden der Erde",
      "Osteuropäische Tiefebene: Weitläufige Flusssysteme (Dnepr, Wolga, Don)"
    ],
    "exercises": [
      {
        "id": "1627",
        "title": "Estland",
        "folder": "estland-1627"
      },
      {
        "id": "1738",
        "title": "Lettland",
        "folder": "lettland-1738"
      },
      {
        "id": "1887",
        "title": "Tallinn",
        "folder": "tallinn-1887"
      },
      {
        "id": "1937",
        "title": "Weißrussland",
        "folder": "weiesrussland-1937"
      },
      {
        "id": "1909",
        "title": "Ukraine",
        "folder": "ukraine-2-1909"
      },
      {
        "id": "1837",
        "title": "Russland",
        "folder": "russland-1837"
      },
      {
        "id": "3352",
        "title": "Modernes Russland und Krisen",
        "folder": "modernes-russland-und-krisen-3352"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=osteuropa+baltikum&t=3752"
  },
  "suedosteuropa-und-der-balkan": {
    "slug": "suedosteuropa-und-der-balkan",
    "title": "Balkanhalbinsel: Westlicher Balkan",
    "category": "Europa & Die EU",
    "shortDesc": "Slowenien, Kroatien, Bosnien-Herzegowina, Serbien, Montenegro, Kosovo und Albanien.",
    "longDesc": "Die Staaten des westlichen Balkans zeichnen sich durch die Dinarischen Alpen, Karstlandschaften und die Adria-Küste aus.",
    "keyPoints": [
      "Dinarischer Karst: Höhlen, Dolinen und Poljen als geologische Besonderheiten",
      "Adria-Küste: Stark gegliederte Insel- und Fjordküsten (z. B. Bucht von Kotor)",
      "Transformation: Aufstrebende Tourismusdestinationen und europäische Integrationsprozesse"
    ],
    "exercises": [
      {
        "id": "1869",
        "title": "Slowenien",
        "folder": "slowenien-1869"
      },
      {
        "id": "1722",
        "title": "Kroatien",
        "folder": "kroatien-1722"
      },
      {
        "id": "1573",
        "title": "Bosnien und Herzegowina",
        "folder": "bosnien-und-herzegowina-1573"
      },
      {
        "id": "1860",
        "title": "Serbien",
        "folder": "serbien-1860"
      },
      {
        "id": "1788",
        "title": "Montenegro",
        "folder": "montenegro-1788"
      },
      {
        "id": "1718",
        "title": "Kosovo",
        "folder": "kosovo-1718"
      },
      {
        "id": "1527",
        "title": "Albanien",
        "folder": "albanien-1527"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=balkan+suedosteuropa&t=3752"
  },
  "suedosteuropa-und-schwarzmeerraum": {
    "slug": "suedosteuropa-und-schwarzmeerraum",
    "title": "Südosteuropa & Schwarzmeerraum",
    "category": "Europa & Die EU",
    "shortDesc": "Bulgarien, Rumänien, Nordmazedonien, Moldawien, Türkei und Kasachstan.",
    "longDesc": "Der Schwarzmeerraum bildet die Nahtstelle zwischen Südosteuropa, Vorderasien und Zentralasien mit den Karpaten und dem Bosporus.",
    "keyPoints": [
      "Donaudelta & Karpaten: Einzigartige Biosphärenreservate in Rumänien",
      "Türkei & Bosporus: Transkontinentaler Staat zwischen Europa und Asien",
      "Schwarzmeer-Geographie: Wichtige Handels- und Energierouten"
    ],
    "exercises": [
      {
        "id": "425",
        "title": "Südosteuropa",
        "folder": "sudosteuropa-425"
      },
      {
        "id": "1585",
        "title": "Bulgarien",
        "folder": "bulgarien-1585"
      },
      {
        "id": "1955",
        "title": "Rumänien",
        "folder": "algerien-3-1955"
      },
      {
        "id": "1807",
        "title": "Nordmazedonien",
        "folder": "nordmazedonien-1807"
      },
      {
        "id": "1784",
        "title": "Moldawien",
        "folder": "moldawien-1784"
      },
      {
        "id": "1905",
        "title": "Türkei",
        "folder": "turkei-1905"
      },
      {
        "id": "1697",
        "title": "Kasachstan",
        "folder": "kasachstan-1697"
      }
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
      {
        "id": "1693",
        "title": "Kanada",
        "folder": "kanada-1693"
      },
      {
        "id": "1777",
        "title": "Mexiko",
        "folder": "mexiko-1777"
      },
      {
        "id": "1922",
        "title": "Vereinigte Staaten von Amerika",
        "folder": "vereinigte-staaten-von-amerika-1922"
      },
      {
        "id": "5484",
        "title": "Eisenbahnnetzwerke im Vergleich - Europa, Asien und Amerika",
        "folder": "eisenbahnnetzwerke-im-vergleich-europa-asien-und-amerika-5484"
      },
      {
        "id": "404",
        "title": "30 wichtige Städte der USA",
        "folder": "30-wichtige-stadte-der-usa-404"
      },
      {
        "id": "5466",
        "title": "Die Rocky Mountains und die Anden - Geographische Riesen beider Kontinente",
        "folder": "die-rocky-mountains-und-die-anden-geographische-riesen-beider-kontinente-5466"
      },
      {
        "id": "5552",
        "title": "Nord- und Südamerika im Vergleich - Landschaften und Klimazonen",
        "folder": "nord-und-sudamerika-im-vergleich-landschaften-und-klimazonen-5552"
      },
      {
        "id": "5563",
        "title": "USA und Kanada - Industrieländer in verschiedenen Klimazonen",
        "folder": "usa-und-kanada-industrielander-in-verschiedenen-klimazonen-5563"
      },
      {
        "id": "5572",
        "title": "Wirtschaftliche ballungsraume in nord und sudamerika",
        "folder": "wirtschaftliche-ballungsraume-in-nord-und-sudamerika-5572"
      },
      {
        "id": "5574",
        "title": "Gebirgssysteme und ihre geologische Bedeutung",
        "folder": "usa-und-kanada-industrielander-in-verschiedenen-klimazonen-2-5574"
      },
      {
        "id": "6069",
        "title": "Mexiko-Stadt",
        "folder": "mexiko-stadt-6069"
      }
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
      {
        "id": "1526",
        "title": "Alabama",
        "folder": "alabama-1526"
      },
      {
        "id": "1543",
        "title": "Arkansas",
        "folder": "arkansas-1543"
      },
      {
        "id": "1634",
        "title": "Florida",
        "folder": "florida-1634"
      },
      {
        "id": "1645",
        "title": "Georgia",
        "folder": "georgia-1645"
      },
      {
        "id": "1704",
        "title": "Kentucky",
        "folder": "kentucky-1704"
      },
      {
        "id": "1747",
        "title": "Louisiana",
        "folder": "louisiana-1747"
      },
      {
        "id": "1781",
        "title": "Mississippi",
        "folder": "mississippi-1781"
      },
      {
        "id": "1808",
        "title": "North Carolina",
        "folder": "north-carolina-1808"
      },
      {
        "id": "1872",
        "title": "South Carolina",
        "folder": "south-carolina-1872"
      },
      {
        "id": "1988",
        "title": "Tennessee",
        "folder": "tennessee-1988"
      },
      {
        "id": "1939",
        "title": "West Virginia",
        "folder": "west-virginia-1939"
      },
      {
        "id": "1891",
        "title": "Texas",
        "folder": "texas-1891"
      }
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
      {
        "id": "1602",
        "title": "Connecticut",
        "folder": "connecticut-1602"
      },
      {
        "id": "1605",
        "title": "Delaware",
        "folder": "delaware-1605"
      },
      {
        "id": "1757",
        "title": "Maine",
        "folder": "maine-1757"
      },
      {
        "id": "1771",
        "title": "Maryland",
        "folder": "maryland-1771"
      },
      {
        "id": "1772",
        "title": "Massachusetts",
        "folder": "massachusetts-1772"
      },
      {
        "id": "1803",
        "title": "New Hampshire",
        "folder": "new-hampshire-1803"
      },
      {
        "id": "1804",
        "title": "New Jersey",
        "folder": "new-jersey-1804"
      },
      {
        "id": "1806",
        "title": "New York",
        "folder": "new-york-1806"
      },
      {
        "id": "1825",
        "title": "Pennsylvania",
        "folder": "pennsylvania-1825"
      },
      {
        "id": "1986",
        "title": "Rhode Island",
        "folder": "rhode-island-1986"
      },
      {
        "id": "1924",
        "title": "Vermont",
        "folder": "vermont-1924"
      }
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
      {
        "id": "1983",
        "title": "Alaska",
        "folder": "alaska-1983"
      },
      {
        "id": "1542",
        "title": "Arizona",
        "folder": "arizona-1542"
      },
      {
        "id": "1601",
        "title": "Colorado",
        "folder": "colorado-1601"
      },
      {
        "id": "1665",
        "title": "Hawaii",
        "folder": "hawaii-1665"
      },
      {
        "id": "1672",
        "title": "Idaho",
        "folder": "idaho-1672"
      },
      {
        "id": "1690",
        "title": "Kalifornien",
        "folder": "kalifornien-1690"
      },
      {
        "id": "1787",
        "title": "Montana",
        "folder": "montana-1787"
      },
      {
        "id": "1802",
        "title": "Nevada",
        "folder": "nevada-1802"
      },
      {
        "id": "1805",
        "title": "New Mexico",
        "folder": "new-mexico-1805"
      },
      {
        "id": "1987",
        "title": "Oregon",
        "folder": "oregon-1987"
      },
      {
        "id": "1915",
        "title": "Utah",
        "folder": "utah-1915"
      },
      {
        "id": "1935",
        "title": "Washington",
        "folder": "washington-1935"
      },
      {
        "id": "1950",
        "title": "Wyoming",
        "folder": "wyoming-1950"
      }
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
      {
        "id": "1673",
        "title": "Illinois",
        "folder": "illinois-1673"
      },
      {
        "id": "1674",
        "title": "Indiana",
        "folder": "indiana-1674"
      },
      {
        "id": "1677",
        "title": "Iowa",
        "folder": "iowa-1677"
      },
      {
        "id": "1694",
        "title": "Kansas",
        "folder": "kansas-1694"
      },
      {
        "id": "1778",
        "title": "Michigan",
        "folder": "michigan-1778"
      },
      {
        "id": "1780",
        "title": "Minnesota",
        "folder": "minnesota-1780"
      },
      {
        "id": "1782",
        "title": "Missouri",
        "folder": "missouri-1782"
      },
      {
        "id": "1795",
        "title": "Nebraska",
        "folder": "nebraska-1795"
      },
      {
        "id": "1809",
        "title": "North Dakota",
        "folder": "north-dakota-1809"
      },
      {
        "id": "1984",
        "title": "Ohio",
        "folder": "ohio-1984"
      },
      {
        "id": "1985",
        "title": "Oklahoma",
        "folder": "oklahoma-1985"
      },
      {
        "id": "1873",
        "title": "South Dakota",
        "folder": "south-dakota-1873"
      },
      {
        "id": "1945",
        "title": "Wisconsin",
        "folder": "wisconsin-1945"
      }
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
      {
        "id": "1566",
        "title": "Belize",
        "folder": "belize-1566"
      },
      {
        "id": "1603",
        "title": "Costa Rica",
        "folder": "costa-rica-1603"
      },
      {
        "id": "1621",
        "title": "El Salvador",
        "folder": "el-salvador-1621"
      },
      {
        "id": "1657",
        "title": "Guatemala",
        "folder": "guatemala-1657"
      },
      {
        "id": "1671",
        "title": "Honduras",
        "folder": "honduras-1671"
      },
      {
        "id": "1979",
        "title": "Nicaragua",
        "folder": "nicaragua-1979"
      },
      {
        "id": "1819",
        "title": "Panama",
        "folder": "panama-1819"
      },
      {
        "id": "2074",
        "title": "Mittelamerika",
        "folder": "mittelamerika-2074"
      },
      {
        "id": "5506",
        "title": "Klimatische Herausforderungen in Mittelamerika und ihre Auswirkungen auf Migration",
        "folder": "klimatische-herausforderungen-in-mittelamerika-und-ihre-auswirkungen-auf-migration-5506"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=mittelamerika&t=3752"
  },
  "suedamerika-laender-und-landschaften": {
    "slug": "suedamerika-laender-und-landschaften",
    "title": "Südamerika: Andenstaaten & Pazifik",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Kolumbien, Peru, Bolivien, Chile, Ecuador und Venezuela: Hochgebirge, Atacama und Pazifik.",
    "longDesc": "Die Anden sind die längste kontinentale Gebirgskette der Erde. Sie prägen das Klima von den feuchten Tropen bis zur trockensten Wüste der Welt, der Atacama.",
    "keyPoints": [
      "Die Anden: Über 7.000 km lange Kette mit Altiplano und Sechstausendern wie dem Aconcagua",
      "Klimazonen: Höhenstufen der Tropen von Tierra caliente bis Tierra nevada",
      "Rohstoffe: Reich an Kupfer (Chile), Lithium (Bolivien) und Erdöl (Venezuela)"
    ],
    "exercises": [
      {
        "id": "1711",
        "title": "Kolumbien",
        "folder": "kolumbien-1711"
      },
      {
        "id": "1827",
        "title": "Peru",
        "folder": "peru-1827"
      },
      {
        "id": "1571",
        "title": "Bolivien",
        "folder": "bolivien-1571"
      },
      {
        "id": "1596",
        "title": "Chile",
        "folder": "chile-1596"
      },
      {
        "id": "1618",
        "title": "Ecuador",
        "folder": "ecuador-1618"
      },
      {
        "id": "1920",
        "title": "Venezuela",
        "folder": "venezuela-1920"
      },
      {
        "id": "5559",
        "title": "Sudamerika zwischen regenwald und wustenregionen",
        "folder": "sudamerika-zwischen-regenwald-und-wustenregionen-5559"
      },
      {
        "id": "5486",
        "title": "Entwicklungsunterschiede in Lateinamerika - Ursachen und Perspektiven",
        "folder": "entwicklungsunterschiede-in-lateinamerika-ursachen-und-perspektiven-5486"
      },
      {
        "id": "3061",
        "title": "Spanien erobert Südamerika",
        "folder": "spanien-erobert-sudamerika-3061"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedamerika&t=3752"
  },
  "suedamerika-atlantik-und-amazonas": {
    "slug": "suedamerika-atlantik-und-amazonas",
    "title": "Südamerika: Brasilien & Río de la Plata",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Brasilien, Argentinien, Uruguay, Paraguay, Guyana und Suriname: Amazonas und Pampa.",
    "longDesc": "Das atlantische Südamerika wird dominiert vom Amazonasbecken, dem größten Regenwald der Erde, und den fruchtbaren Grasländern der Pampa.",
    "keyPoints": [
      "Amazonas: Wasserreichster Fluss der Erde mit riesigem Flusssystem und Biodiversität",
      "Brasilien: Wirtschaftlicher Gigant Südamerikas mit Megacities São Paulo und Rio de Janeiro",
      "Río-de-la-Plata-Raum: Fruchtbare Pampa für Landwirtschaft und Rinderzucht"
    ],
    "exercises": [
      {
        "id": "1576",
        "title": "Brasilien",
        "folder": "brasilien-1576"
      },
      {
        "id": "1122",
        "title": "Argentinien",
        "folder": "argentinien-1122"
      },
      {
        "id": "1912",
        "title": "Uruguay",
        "folder": "uruguay-1912"
      },
      {
        "id": "1821",
        "title": "Paraguay",
        "folder": "paraguay-1821"
      },
      {
        "id": "1661",
        "title": "Guyana",
        "folder": "guyana-1661"
      },
      {
        "id": "1884",
        "title": "Suriname",
        "folder": "suriname-1884"
      },
      {
        "id": "3225",
        "title": "Escape Room: Länder Südamerikas",
        "folder": "escape-room-quot-lander-sudamerikas-quot-3225"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedamerika&t=3752"
  },
  "afrika-nord-und-westafrika": {
    "slug": "afrika-nord-und-westafrika",
    "title": "Nordafrika & Sahara",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Ägypten, Marokko, Algerien, Libyen, Mauretanien und die Sahara als Lebensraum.",
    "longDesc": "Nordafrika ist durch das Atlasgebirge, die Mittelmeerküste und die Sahara, die größte Trockenwüste der Erde, charakterisiert.",
    "keyPoints": [
      "Nil: Lebensader Ägyptens und längster Fluss Afrikas mit fruchtbarem Niltal",
      "Die Sahara: 9 Mio. km² Wüste mit Sand-, Kies- und Felsformationen (Erg, Serir, Hammada)",
      "Maghreb: Kultur- und Wirtschaftsraum zwischen Mittelmeer und Wüste"
    ],
    "exercises": [
      {
        "id": "1524",
        "title": "Ägypten",
        "folder": "gypten-1524"
      },
      {
        "id": "1741",
        "title": "Libyen",
        "folder": "libyen-1741"
      },
      {
        "id": "1958",
        "title": "Algerien",
        "folder": "algerien-6-1958"
      },
      {
        "id": "1768",
        "title": "Marokko",
        "folder": "marokko-1768"
      },
      {
        "id": "1773",
        "title": "Mauretanien",
        "folder": "mauretanien-1773"
      },
      {
        "id": "5473",
        "title": "Die Sahara - Geographische Barriere und Lebensraum",
        "folder": "die-sahara-geographische-barriere-und-lebensraum-5473"
      },
      {
        "id": "5462",
        "title": "Die groesen regionen afrikas nord west ost zentral und sudafrika im vergleich",
        "folder": "die-groesen-regionen-afrikas-nord-west-ost-zentral-und-sudafrika-im-vergleich-5462"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nordafrika+westafrika&t=3752"
  },
  "afrika-westafrika-und-sahel": {
    "slug": "afrika-westafrika-und-sahel",
    "title": "Westafrika & Atlantikküste",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Senegal, Côte d'Ivoire, Benin, Sierra Leone, Gambia, Guinea-Bissau und Kap Verde.",
    "longDesc": "Westafrika erstreckt sich von der trockenen Sahelzone bis zu den feuchttropischen Küsten am Golf von Guinea.",
    "keyPoints": [
      "Sahelzone: Übergangszone zwischen Sahara und Feuchtsavanne, bedroht durch Desertifikation",
      "Wirtschaft: Kakao- und Kaffeeanbau an der Guineaküste, Bergbau und Fischerei",
      "Demografie: Rasches Bevölkerungswachstum und dynamische Metropolen wie Abidjan und Dakar"
    ],
    "exercises": [
      {
        "id": "1859",
        "title": "Senegal",
        "folder": "senegal-1859"
      },
      {
        "id": "1865",
        "title": "Sierra Leone",
        "folder": "sierra-leone-1865"
      },
      {
        "id": "1970",
        "title": "Benin",
        "folder": "benin-1970"
      },
      {
        "id": "1971",
        "title": "Côte d'Ivoire (Elfenbeinküste)",
        "folder": "cote-d-039-ivoire-elfenbeinkuste-1971"
      },
      {
        "id": "1641",
        "title": "Gambia",
        "folder": "gambia-1641"
      },
      {
        "id": "1659",
        "title": "Guinea-Bissau",
        "folder": "guinea-bissau-1659"
      },
      {
        "id": "1695",
        "title": "Kap Verde",
        "folder": "kap-verde-1695"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nordafrika+westafrika&t=3752"
  },
  "ostafrika-und-zentralafrika": {
    "slug": "ostafrika-und-zentralafrika",
    "title": "Ostafrika & Das Horn von Afrika",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Kenia, Äthiopien, Ruanda, Burundi, Dschibuti, Eritrea, Somalia und Ostafrikanischer Graben.",
    "longDesc": "Ostafrika ist geprägt durch den Großen Afrikanischen Grabenbruch (Rift Valley), Vulkangipfel wie den Kilimandscharo und reiche Savannenfauna.",
    "keyPoints": [
      "Großer Grabenbruch: Tektonisches Auseinanderdriften mit tiefen Seen (Tanganjika, Viktoriasee)",
      "Horn von Afrika: Geostrategisch wichtige Lage am Roten Meer und Indischen Ozean",
      "Savannen & Tierwelt: Berühmte Nationalparks (Serengeti, Masai Mara) und Ökotourismus"
    ],
    "exercises": [
      {
        "id": "1703",
        "title": "Kenia",
        "folder": "kenia-1703"
      },
      {
        "id": "1547",
        "title": "Äthiopien",
        "folder": "thiopien-1547"
      },
      {
        "id": "1836",
        "title": "Ruanda",
        "folder": "ruanda-1836"
      },
      {
        "id": "1589",
        "title": "Burundi",
        "folder": "burundi-1589"
      },
      {
        "id": "1613",
        "title": "Dschibuti",
        "folder": "dschibuti-1613"
      },
      {
        "id": "1625",
        "title": "Eritrea",
        "folder": "eritrea-1625"
      },
      {
        "id": "1871",
        "title": "Somalia",
        "folder": "somalia-1871"
      },
      {
        "id": "3224",
        "title": "Escape Room: Länder Afrikas",
        "folder": "escape-room-quot-lander-afrikas-quot-3224"
      },
      {
        "id": "5430",
        "title": "Afrika und der Klimawandel - Ursachen, Auswirkungen, Anpassung",
        "folder": "afrika-und-der-klimawandel-ursachen-auswirkungen-anpassung-5430"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ostafrika+zentralafrika&t=3752"
  },
  "zentralafrika-und-afrikas-zukunft": {
    "slug": "zentralafrika-und-afrikas-zukunft",
    "title": "Zentralafrika & Afrikas Entwicklung",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Kongo-Becken, Kamerun, Gabun, Rohstoffe, Bevölkerungswachstum und Umweltperspektiven.",
    "longDesc": "Zentralafrika beherbergt das zweitgrößte tropische Regenwaldgebiet der Erde entlang des mächtigen Kongoflusses.",
    "keyPoints": [
      "Kongo-Becken: Grünes Herz Afrikas mit enormer Biodiversität und Kohlenstoffspeicherfunktion",
      "Rohstoffreichtum: Kobalt, Coltan, Diamanten, Kupfer und Holz",
      "Zukunftsfragen: Demografische Dynamik, Urbanisierung und nachhaltige Ressourcennutzung"
    ],
    "exercises": [
      {
        "id": "1714",
        "title": "Kongo, Republik",
        "folder": "kongo-republik-1714"
      },
      {
        "id": "1713",
        "title": "Kongo, Demokratische Republik",
        "folder": "kongo-demokratische-republik-1713"
      },
      {
        "id": "1692",
        "title": "Kamerun",
        "folder": "kamerun-1692"
      },
      {
        "id": "1640",
        "title": "Gabun",
        "folder": "gabun-1640"
      },
      {
        "id": "1540",
        "title": "Äquatorialguinea",
        "folder": "quatorialguinea-1540"
      },
      {
        "id": "5437",
        "title": "Bevölkerungswachstum in Afrika - Chancen und Herausforderungen",
        "folder": "bevolkerungswachstum-in-afrika-chancen-und-herausforderungen-5437"
      },
      {
        "id": "5480",
        "title": "Die wirtschaftliche Entwicklung Afrikas im globalen Kontext",
        "folder": "die-wirtschaftliche-entwicklung-afrikas-im-globalen-kontext-5480"
      },
      {
        "id": "5524",
        "title": "Unterschiedliche Klimazonen Afrikas und ihre Auswirkungen auf die Lebensweise",
        "folder": "unterschiedliche-klimazonen-afrikas-und-ihre-auswirkungen-auf-die-lebensweise-5524"
      },
      {
        "id": "5561",
        "title": "Umweltprobleme in afrika wustenbildung abholzung wassermangel",
        "folder": "umweltprobleme-in-afrika-wustenbildung-abholzung-wassermangel-5561"
      }
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
      {
        "id": "1844",
        "title": "Sambia",
        "folder": "sambia-1844"
      },
      {
        "id": "1976",
        "title": "São Tomé und Príncipe",
        "folder": "sao-tome-und-principe-1976"
      },
      {
        "id": "1862",
        "title": "Seychellen",
        "folder": "seychellen-1862"
      },
      {
        "id": "1866",
        "title": "Simbabwe",
        "folder": "simbabwe-1866"
      },
      {
        "id": "1882",
        "title": "Südafrika",
        "folder": "sudafrika-1882"
      },
      {
        "id": "1535",
        "title": "Angola",
        "folder": "angola-1535"
      },
      {
        "id": "1628",
        "title": "Eswatini (Swasiland)",
        "folder": "eswatini-swasiland-1628"
      },
      {
        "id": "1712",
        "title": "Komoren",
        "folder": "komoren-1712"
      },
      {
        "id": "1737",
        "title": "Lesotho",
        "folder": "lesotho-1737"
      },
      {
        "id": "1972",
        "title": "Madagaskar",
        "folder": "madagaskar-1972"
      },
      {
        "id": "1760",
        "title": "Malawi",
        "folder": "malawi-1760"
      },
      {
        "id": "1774",
        "title": "Mauritius",
        "folder": "mauritius-1774"
      },
      {
        "id": "6036",
        "title": "Kapstadt",
        "folder": "kapstadt-6036"
      }
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
      {
        "id": "1523",
        "title": "Afghanistan",
        "folder": "afghanistan-1523"
      },
      {
        "id": "1907",
        "title": "Armenien",
        "folder": "armenien-2-1907"
      },
      {
        "id": "1546",
        "title": "Aserbaidschan",
        "folder": "aserbaidschan-1546"
      },
      {
        "id": "1646",
        "title": "Georgien",
        "folder": "georgien-1646"
      },
      {
        "id": "1707",
        "title": "Kirgisistan",
        "folder": "kirgisistan-1707"
      },
      {
        "id": "1886",
        "title": "Tadschikistan",
        "folder": "tadschikistan-1886"
      },
      {
        "id": "1906",
        "title": "Turkmenistan",
        "folder": "turkmenistan-1906"
      },
      {
        "id": "1913",
        "title": "Usbekistan",
        "folder": "usbekistan-1913"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=zentralasien+kaukasus&t=3752"
  },
  "vorderasien-und-der-nahe-osten": {
    "slug": "vorderasien-und-der-nahe-osten",
    "title": "Vorderasien: Levante & Fruchtbarer Halbmond",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Israel, Palästina, Jordanien, Libanon, Syrien und Irak: Historischer Ursprung und geopolitische Lage.",
    "longDesc": "Der Nahe Osten und der Fruchtbare Halbmond zwischen Euphrat und Tigris sind historische Zentren der Sesshaftwerdung und der ersten Hochkulturen.",
    "keyPoints": [
      "Euphrat & Tigris: Die Wiege der Zivilisation in Mesopotamien",
      "Geopolitische Brennpunkte: Wasserknappheit am Jordan und territorialer Konflikt",
      "Klimatische Bandbreite: Vom mediterranen Küstenklima bis zu extremen Trockenwüsten"
    ],
    "exercises": [
      {
        "id": "1682",
        "title": "Israel",
        "folder": "israel-1682"
      },
      {
        "id": "616",
        "title": "Israel und Palästina",
        "folder": "israel-und-palastina-616"
      },
      {
        "id": "1688",
        "title": "Jordanien",
        "folder": "jordanien-1688"
      },
      {
        "id": "1739",
        "title": "Libanon",
        "folder": "libanon-1739"
      },
      {
        "id": "1885",
        "title": "Syrien",
        "folder": "syrien-1885"
      },
      {
        "id": "1678",
        "title": "Irak",
        "folder": "irak-1678"
      },
      {
        "id": "5478",
        "title": "Die Unterschiede zwischen dem Nahen Osten, Zentralasien und Fernost",
        "folder": "die-unterschiede-zwischen-dem-nahen-osten-zentralasien-und-fernost-5478"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=naher+osten&t=3752"
  },
  "arabische-halbinsel-und-golfstaaten": {
    "slug": "arabische-halbinsel-und-golfstaaten",
    "title": "Arabische Halbinsel & Golfstaaten",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Saudi-Arabien, VAE, Katar, Kuwait, Bahrain, Jemen und Iran: Erdöl, Wüste und Metropolen.",
    "longDesc": "Die Arabische Halbinsel vereint die riesige Sandwüste Rub al-Chali mit einigen der modernsten Metropolen der Welt wie Dubai und Doha.",
    "keyPoints": [
      "Erdöl & Erdgas: Größte bekannte Vorkommen am Persischen Golf, Straße von Hormus",
      "Wirtschaftliche Transformation: Von der Ölförderung zu Tourismus, Finanzen und erneuerbaren Energien",
      "Wüstenlandschaften: Die Rub al-Chali ('Leeres Viertel') als größte Sandwüste der Erde"
    ],
    "exercises": [
      {
        "id": "1850",
        "title": "Saudi-Arabien",
        "folder": "saudi-arabien-1850"
      },
      {
        "id": "1921",
        "title": "Vereinigte Arabische Emirate",
        "folder": "vereinigte-arabische-emirate-1921"
      },
      {
        "id": "1698",
        "title": "Katar",
        "folder": "katar-1698"
      },
      {
        "id": "1725",
        "title": "Kuwait",
        "folder": "kuwait-1725"
      },
      {
        "id": "1554",
        "title": "Bahrain",
        "folder": "bahrain-1554"
      },
      {
        "id": "1687",
        "title": "Jemen",
        "folder": "jemen-1687"
      },
      {
        "id": "1679",
        "title": "Iran",
        "folder": "iran-1679"
      }
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
      {
        "id": "1557",
        "title": "Bangladesch",
        "folder": "bangladesch-1557"
      },
      {
        "id": "1675",
        "title": "Indien",
        "folder": "indien-1675"
      },
      {
        "id": "1762",
        "title": "Malediven",
        "folder": "malediven-1762"
      },
      {
        "id": "1796",
        "title": "Nepal",
        "folder": "nepal-1796"
      },
      {
        "id": "1816",
        "title": "Pakistan",
        "folder": "pakistan-1816"
      },
      {
        "id": "1876",
        "title": "Sri Lanka",
        "folder": "sri-lanka-1876"
      },
      {
        "id": "5468",
        "title": "Die Rolle von Flusssystemen wie Ganges, Jangtse und Mekong in der asiatischen Entwicklung",
        "folder": "die-rolle-von-flusssystemen-wie-ganges-jangtse-und-mekong-in-der-asiatischen-entwicklung-5468"
      },
      {
        "id": "6020",
        "title": "Hyderabad (Indien)",
        "folder": "hyderabad-indien-6020"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedasien+indien&t=3752"
  },
  "suedostasien-laender-und-inseln": {
    "slug": "suedostasien-laender-und-inseln",
    "title": "Südostasien: Festland & Mekong-Region",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Thailand, Vietnam, Kambodscha, Laos und Myanmar: Reiskammern, Monsun und Mekong.",
    "longDesc": "Das südostasiatische Festland wird vom mächtigen Mekong durchzogen. Tropische Monsunwälder und Reisanbau prägen Landschaft und Wirtschaft.",
    "keyPoints": [
      "Mekong: Über 4.300 km lange Lebensader Südostasiens mit gigantischem Delta",
      "Monsunklima: Wechsel von feuchtem Sommermonsun und trockenem Wintermonsun",
      "Wirtschaft: Führende Agrarexporteure (Reis, Kautschuk) und aufstrebende Industriestandorte"
    ],
    "exercises": [
      {
        "id": "1892",
        "title": "Thailand",
        "folder": "thailand-1892"
      },
      {
        "id": "1927",
        "title": "Vietnam",
        "folder": "vietnam-1927"
      },
      {
        "id": "1691",
        "title": "Kambodscha",
        "folder": "kambodscha-1691"
      },
      {
        "id": "1730",
        "title": "Laos",
        "folder": "laos-1730"
      },
      {
        "id": "1792",
        "title": "Myanmar",
        "folder": "myanmar-1792"
      },
      {
        "id": "6014",
        "title": "Ho-Chi-Minh-Stadt",
        "folder": "ho-chi-minh-stadt-6014"
      },
      {
        "id": "3226",
        "title": "Escape Room: Länder Asiens",
        "folder": "escape-room-quot-lander-asiens-quot-3226"
      },
      {
        "id": "5432",
        "title": "Asiens Klimaextreme - Monsun, Trockenheit und arktische Bedingungen",
        "folder": "asiens-klimaextreme-monsun-trockenheit-und-arktische-bedingungen-5432"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suedostasien&t=3752"
  },
  "suedostasien-inseln-und-ozeanien": {
    "slug": "suedostasien-inseln-und-ozeanien",
    "title": "Südostasien: Maritime Inselwelten",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Indonesien, Malaysia, Singapur, Philippinen, Brunei und Osttimor: Pazifischer Feuerring.",
    "longDesc": "Der Malaiische Archipel bildet die größte Inselwelt der Erde auf dem Pazifischen Feuerring mit reger vulkanischer Aktivität.",
    "keyPoints": [
      "Pazifischer Feuerring: Hohe Dichte aktiver Vulkane und Erdbebenzonen",
      "Singapur & Malakkastraße: Eines der meistbefahrenen maritimen Nadelöhre des Welthandels",
      "Inselstaaten: Indonesien mit über 17.000 Inseln und die Philippinen mit über 7.000 Inseln"
    ],
    "exercises": [
      {
        "id": "1676",
        "title": "Indonesien",
        "folder": "indonesien-1676"
      },
      {
        "id": "1761",
        "title": "Malaysia",
        "folder": "malaysia-1761"
      },
      {
        "id": "1868",
        "title": "Singapur",
        "folder": "singapur-1868"
      },
      {
        "id": "1977",
        "title": "Philippinen",
        "folder": "philippinen-1977"
      },
      {
        "id": "1580",
        "title": "Brunei",
        "folder": "brunei-1580"
      },
      {
        "id": "1815",
        "title": "Osttimor",
        "folder": "osttimor-1815"
      },
      {
        "id": "5567",
        "title": "Vulkane, Erdbeben und Tsunamis - Naturgewalten in Asien",
        "folder": "vulkane-erdbeben-und-tsunamis-naturgewalten-in-asien-5567"
      }
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
      {
        "id": "1597",
        "title": "China",
        "folder": "china-1597"
      },
      {
        "id": "1686",
        "title": "Japan",
        "folder": "japan-1686"
      },
      {
        "id": "1786",
        "title": "Mongolei",
        "folder": "mongolei-1786"
      },
      {
        "id": "1980",
        "title": "Nordkorea",
        "folder": "nordkorea-1980"
      },
      {
        "id": "1883",
        "title": "Südkorea",
        "folder": "sudkorea-1883"
      },
      {
        "id": "5521",
        "title": "Südostasien - Geographische Vielfalt und wirtschaftlicher Aufstieg",
        "folder": "sudostasien-geographische-vielfalt-und-wirtschaftlicher-aufstieg-5521"
      },
      {
        "id": "5560",
        "title": "Technologischer Fortschritt in Ostasien und seine Auswirkungen auf die Region",
        "folder": "technologischer-fortschritt-in-ostasien-und-seine-auswirkungen-auf-die-region-5560"
      },
      {
        "id": "5573",
        "title": "Wirtschaftsmacht Asien - Von China bis Indien",
        "folder": "wirtschaftsmacht-asien-von-china-bis-indien-5573"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ostasien+china+japan&t=3752"
  },
  "ozeanien-und-die-polargebiete": {
    "slug": "ozeanien-und-die-polargebiete",
    "title": "Ozeanien: Inselstaaten des Südpazifiks",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Papua-Neuguinea, Fidschi, Kiribati, Marshallinseln, Mikronesien, Nauru, Palau, Salomonen, Samoa, Tonga.",
    "longDesc": "Ozeanien umfasst zehntausende Inseln und Atolle in den drei Kulturräumen Melanesien, Mikronesien und Polynesien.",
    "keyPoints": [
      "Inseltypen: Vulkanische Hochinseln und flache Korallenatolle",
      "Klimawandel: Existenzielle Bedrohung tiefliegender Atollstaaten (Kiribati, Tuvalu) durch Meeresspiegelanstieg",
      "Tradition & Seefahrt: Jahrtausendealte Navigationskunst über weite Ozeandistanzen"
    ],
    "exercises": [
      {
        "id": "1820",
        "title": "Papua-Neuguinea",
        "folder": "papua-neuguinea-1820"
      },
      {
        "id": "1630",
        "title": "Fidschi",
        "folder": "fidschi-1630"
      },
      {
        "id": "1708",
        "title": "Kiribati",
        "folder": "kiribati-1708"
      },
      {
        "id": "1770",
        "title": "Marshallinseln",
        "folder": "marshallinseln-1770"
      },
      {
        "id": "1779",
        "title": "Mikronesien",
        "folder": "mikronesien-1779"
      },
      {
        "id": "1794",
        "title": "Nauru",
        "folder": "nauru-1794"
      },
      {
        "id": "1817",
        "title": "Palau",
        "folder": "palau-1817"
      },
      {
        "id": "1842",
        "title": "Salomonen",
        "folder": "salomonen-1842"
      },
      {
        "id": "1845",
        "title": "Samoa",
        "folder": "samoa-1845"
      },
      {
        "id": "1896",
        "title": "Tonga",
        "folder": "tonga-1896"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ozeanien+polargebiete&t=3752"
  },
  "die-polargebiete-arktis-und-antarktis": {
    "slug": "die-polargebiete-arktis-und-antarktis",
    "title": "Polargebiete & Pazifische Geographie",
    "category": "Kontinente & Weltregionen",
    "shortDesc": "Arktis, Antarktis, Vanuatu, geographische Isolation und Naturkatastrophen im Pazifik.",
    "longDesc": "Die eisigen Extremräume der Erde: Die Arktis als gefrorener Ozean und die Antarktis als kältester Kontinent mit gigantischen Eisschilden.",
    "keyPoints": [
      "Antarktis: 14 Mio. km² Eiswüste mit bis zu 4.000 m dickem Eisschild und 70 % der weltweiten Süßwasserreserven",
      "Arktis: Meereis, Tundra und Permafrostböden rund um den Nordpol",
      "Klimaindikatoren: Schnelleres Abschmelzen der Polkappen beschleunigt globale Erwärmung"
    ],
    "exercises": [
      {
        "id": "2037",
        "title": "Die Antarktis",
        "folder": "die-antarktis-2037"
      },
      {
        "id": "2038",
        "title": "Die Arktis",
        "folder": "die-arktis-2038"
      },
      {
        "id": "1917",
        "title": "Vanuatu",
        "folder": "vanuatu-1917"
      },
      {
        "id": "5454",
        "title": "Die Bevölkerung Ozeaniens - Traditionen, Sprachen und Siedlungsmuster",
        "folder": "die-bevolkerung-ozeaniens-traditionen-sprachen-und-siedlungsmuster-5454"
      },
      {
        "id": "5494",
        "title": "Geographische Isolation und ihre Auswirkungen auf die Kultur in Ozeanien",
        "folder": "geographische-isolation-und-ihre-auswirkungen-auf-die-kultur-in-ozeanien-5494"
      },
      {
        "id": "5513",
        "title": "Naturkatastrophen in Ozeanien - Vulkane, Erdbeben, Zyklone",
        "folder": "naturkatastrophen-in-ozeanien-vulkane-erdbeben-zyklone-5513"
      },
      {
        "id": "5514",
        "title": "Ozeanien - Inselwelten im Pazifik – Vielfalt und Herausforderungen",
        "folder": "ozeanien-inselwelten-im-pazifik-vielfalt-und-herausforderungen-5514"
      }
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
      {
        "id": "1037",
        "title": "Australien",
        "folder": "australien-2-1037"
      },
      {
        "id": "1799",
        "title": "Neuseeland",
        "folder": "neuseeland-1799"
      },
      {
        "id": "5434",
        "title": "Australien - Ein Kontinent zwischen Wüste, Regenwald und Küsten",
        "folder": "australien-ein-kontinent-zwischen-wuste-regenwald-und-kusten-5434"
      },
      {
        "id": "5455",
        "title": "Die einzigartige Flora und Fauna Australiens - Geographische Ursachen",
        "folder": "die-einzigartige-flora-und-fauna-australiens-geographische-ursachen-5455"
      },
      {
        "id": "5469",
        "title": "Die Rolle von Klimazonen in Australien und Neuseeland",
        "folder": "die-rolle-von-klimazonen-in-australien-und-neuseeland-5469"
      },
      {
        "id": "5534",
        "title": "Wirtschaftliche Entwicklung in Australien und Ozeanien im globalen Kontext",
        "folder": "wirtschaftliche-entwicklung-in-australien-und-ozeanien-im-globalen-kontext-5534"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=australien+neuseeland&t=3752"
  },
  "klimazonen-und-wetter": {
    "slug": "klimazonen-und-wetter",
    "title": "Klimazonen der Erde",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Polare, gemäßigte, subtropische und tropische Klimazone sowie Klimawandel.",
    "longDesc": "Die solaren und physischen Klimazonen spiegeln den unterschiedlichen Einstrahlungswinkel der Sonne wider und bestimmen Vegetation und Lebensweisen.",
    "keyPoints": [
      "Tropen: Tageszeitenklima, ganzjährig hohe Temperaturen und intensive Niederschläge (Zenitalregen)",
      "Subtropen & Gemäßigte Zone: Ausgeprägte Jahreszeiten, Westwindzone und Wanderung von Tiefdruckgebieten",
      "Polare Zone: Schrägwinklige Einstrahlung, Polartag und Polarnacht, Kältewüsten"
    ],
    "exercises": [
      {
        "id": "757",
        "title": "Klima und Wetter",
        "folder": "klima-und-wetter-757"
      },
      {
        "id": "338",
        "title": "Das Wetter",
        "folder": "das-wetter-338"
      },
      {
        "id": "758",
        "title": "Die polare Klimazone",
        "folder": "die-polare-klimazone-758"
      },
      {
        "id": "759",
        "title": "Die gemäßigte Klimazone",
        "folder": "die-gemaesigte-klimazone-759"
      },
      {
        "id": "760",
        "title": "Die subtropische Klimazone",
        "folder": "die-subtropische-klimazone-760"
      },
      {
        "id": "761",
        "title": "Die tropische Klimazone",
        "folder": "die-tropische-klimazone-761"
      },
      {
        "id": "5507",
        "title": "Klimazonen im Wandel - Wie sich unser Planet verändert",
        "folder": "klimazonen-im-wandel-wie-sich-unser-planet-verandert-5507"
      },
      {
        "id": "5545",
        "title": "Klimazonen und ihre Unterschiede - Wie sie das Leben auf der Erde prägen",
        "folder": "klimazonen-und-ihre-unterschiede-wie-sie-das-leben-auf-der-erde-pragen-5545"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=klimazonen+wetter&t=3752"
  },
  "wetterphaenomene-und-klimawandel": {
    "slug": "wetterphaenomene-und-klimawandel",
    "title": "Wetterphänomene & Klimaforschung",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Alpines, atlantisches und pannonisches Klima, Föhn, Inversion, Dürren und Satellitendaten.",
    "longDesc": "Lokale Wetterphänomene wie Föhn und Inversion sowie globale Klimadaten zeigen, wie dynamisch die Atmosphäre auf Geländestrukturen und Erwärmung reagiert.",
    "keyPoints": [
      "Lokale Windsysteme: Der Föhn als trocken-warmer Fallwind im Gebirge",
      "Wetterlagen: Inversionswetterlage mit Kaltluftseen in Tälern",
      "Klimaforschung: Satellitenfernerkundung und Analyse von Niederschlagsextremen"
    ],
    "exercises": [
      {
        "id": "1989",
        "title": "Das alpine Klima",
        "folder": "das-alpine-klima-1989"
      },
      {
        "id": "1990",
        "title": "Das atlantische Klima",
        "folder": "das-atlantische-klima-1990"
      },
      {
        "id": "1991",
        "title": "Das illyrische Klima",
        "folder": "das-illyrische-klima-1991"
      },
      {
        "id": "1992",
        "title": "Das pannonische Klima",
        "folder": "das-pannonische-klima-1992"
      },
      {
        "id": "1994",
        "title": "Die Inversionswetterlage",
        "folder": "die-inversionswetterlage-1994"
      },
      {
        "id": "1993",
        "title": "Der Föhn - warmer Wind im Gebirge",
        "folder": "der-fohn-warmer-wind-im-gebirge-1993"
      },
      {
        "id": "5483",
        "title": "Dürren weltweit - Klimatische Ursachen und regionale Auswirkungen",
        "folder": "durren-weltweit-klimatische-ursachen-und-regionale-auswirkungen-5483"
      },
      {
        "id": "5516",
        "title": "Satellitenbilder in der Klimaforschung",
        "folder": "satellitenbilder-in-der-klimaforschung-5516"
      },
      {
        "id": "5538",
        "title": "Klimawandel und die Veränderung der globalen Niederschlagsmuster",
        "folder": "klimawandel-und-die-veranderung-der-globalen-niederschlagsmuster-5538"
      },
      {
        "id": "3191",
        "title": "Escape Room: Wetter und Klima",
        "folder": "escape-room-quot-wetter-und-klima-quot-3191"
      },
      {
        "id": "hagel",
        "title": "Wie funktioniert die Bildung von Hagel",
        "folder": "wie-funktioniert-die-bildung-von-hagel"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=klimazonen+wetter&t=3752"
  },
  "weltmeere-und-ozeane": {
    "slug": "weltmeere-und-ozeane",
    "title": "Die Ozeane & Großmeere der Erde",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Pazifik, Atlantik, Indischer Ozean, Mittelmeer, Polarmeer, Rotes und Totes Meer.",
    "longDesc": "Die Weltmeere bedecken über 70 Prozent der Erdoberfläche. Sie regulieren das Weltklima und beherbergen gigantische Ökosysteme.",
    "keyPoints": [
      "Pazifischer Ozean: Größter und tiefster Ozean mit dem Marianengraben (11.000 m)",
      "Atlantik & Indischer Ozean: Zentrale Handelsrouten und ozeanische Rücken",
      "Binnen- und Randmeere: Mittelmeer, Rotes Meer und das hypersaline Tote Meer"
    ],
    "exercises": [
      {
        "id": "2008",
        "title": "Der atlantische Ozean",
        "folder": "der-atlantische-ozean-2008"
      },
      {
        "id": "2009",
        "title": "Der pazifische Ozean",
        "folder": "der-pazifische-ozean-2009"
      },
      {
        "id": "2010",
        "title": "Der indische Ozean",
        "folder": "der-indische-ozean-2010"
      },
      {
        "id": "2011",
        "title": "Das Mittelmeer",
        "folder": "das-mittelmeer-2011"
      },
      {
        "id": "2012",
        "title": "Das Polarmeer",
        "folder": "das-polarmeer-2012"
      },
      {
        "id": "2013",
        "title": "Das Rote Meer",
        "folder": "das-rote-meer-2013"
      },
      {
        "id": "2014",
        "title": "Das Tote Meer",
        "folder": "das-tote-meer-2014"
      },
      {
        "id": "2075",
        "title": "Der Gold von Mexiko",
        "folder": "der-gold-von-mexiko-2075"
      },
      {
        "id": "5448",
        "title": "Der Klimawandel und seine Bedrohung für kleine Inselstaaten im Pazifik",
        "folder": "der-klimawandel-und-seine-bedrohung-fur-kleine-inselstaaten-im-pazifik-5448"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ozeane+meere&t=3752"
  },
  "meere-meeresstroemungen-und-kuesten": {
    "slug": "meere-meeresstroemungen-und-kuesten",
    "title": "Randmeere, Meeresströmungen & Schutz",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Nordsee, Ostsee, Ärmelkanal, Golfstrom, Offshore-Energie und Meeresschutzabkommen.",
    "longDesc": "Meeresströmungen wie der Golfstrom fungieren als gigantische Wärmepumpen des Planeten. Randmeere wie Nord- und Ostsee sind intensiv genutzte Wirtschaftsräume.",
    "keyPoints": [
      "Golfstrom: Globale thermohaline Zirkulation sichert mildes Klima in Nordwesteuropa",
      "Nordsee & Ostsee: Schelfmeere mit Gezeiten (Nordsee) vs. Brackwasser (Ostsee)",
      "Nutzung & Schutz: Offshore-Windkraft, Schifffahrt und internationale Meeresschutzabkommen"
    ],
    "exercises": [
      {
        "id": "2015",
        "title": "Die Nordsee",
        "folder": "die-nordsee-2015"
      },
      {
        "id": "2016",
        "title": "Die Ostsee",
        "folder": "die-ostsee-2016"
      },
      {
        "id": "2019",
        "title": "Der Rmelkanal",
        "folder": "der-rmelkanal-2019"
      },
      {
        "id": "2020",
        "title": "Der Golfstrom",
        "folder": "der-golfstrom-2020"
      },
      {
        "id": "golfstrom",
        "title": "Wie funktioniert der Golfstrom",
        "folder": "wie-funktioniert-der-golfstrom"
      },
      {
        "id": "2057",
        "title": "Offshore Windparks in der Nordsee",
        "folder": "offshore-windparks-in-der-nordsee-2057"
      },
      {
        "id": "2058",
        "title": "L der nordsee",
        "folder": "l-der-nordsee-2058"
      },
      {
        "id": "4498",
        "title": "Wasser im Kreislauf – Regen, Fluss und Meer",
        "folder": "wasser-im-kreislauf-regen-fluss-und-meer-4498"
      },
      {
        "id": "3545",
        "title": "Internationale Abkommen zum Schutz der Meere",
        "folder": "internationale-abkommen-zum-schutz-der-meere-3545"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ozeane+meere&t=3752"
  },
  "vegetationszonen-und-biome": {
    "slug": "vegetationszonen-und-biome",
    "title": "Vegetationszonen & Biome der Erde",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Tropischer Regenwald, Savanne, Steppe, Wüsten, Laub- und Nadelwälder sowie Tundra.",
    "longDesc": "Biome spiegeln das Zusammenspiel von Temperatur, Niederschlag und Boden wider: Von der artenreichen Regenwaldvegetation bis zur kargen Kältewüste.",
    "keyPoints": [
      "Tropischer Regenwald: Stockwerkbau der Vegetation, ganzjährige Vegetationsperiode",
      "Savannen: Feucht-, Trocken- und Dornstrauchsavanne mit ausgeprägter Trockenzeit",
      "Taiga & Tundra: Borealer Nadelwald und baumlose Moostundra der Subpolarzone"
    ],
    "exercises": [
      {
        "id": "2026",
        "title": "Die Sahara",
        "folder": "die-sahara-2026"
      },
      {
        "id": "2027",
        "title": "Der tropische Regenwald",
        "folder": "der-tropische-regenwald-2027"
      },
      {
        "id": "2028",
        "title": "Laubwald, Nadelwald und Mischwald",
        "folder": "laubwald-nadelwald-und-mischwald-2028"
      },
      {
        "id": "2029",
        "title": "Steppe",
        "folder": "steppe-2-2029"
      },
      {
        "id": "2031",
        "title": "Tundra",
        "folder": "tundra-2031"
      },
      {
        "id": "2032",
        "title": "Savanne",
        "folder": "savanne-2032"
      },
      {
        "id": "2033",
        "title": "Kältewüsten",
        "folder": "kaltewusten-2033"
      },
      {
        "id": "2034",
        "title": "Die Oase",
        "folder": "die-oase-2034"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=vegetationszonen&t=3752"
  },
  "gletscher-fjorde-und-korallenriffe": {
    "slug": "gletscher-fjorde-und-korallenriffe",
    "title": "Gletscher, Fjorde & Korallenriffe",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Gletscher als Klimaarchive, Fjordbildung, Trog- und Hängetäler sowie das Great Barrier Reef.",
    "longDesc": "Gletscher haben im Pleistozän Täler und Fjordküsten geformt. Korallenriffe wie das Great Barrier Reef bilden submarine Biodiversitäts-Hotspots.",
    "keyPoints": [
      "Gletscher-Formen: U-förmige Trogtäler, Moränen, Zungenbecken und Fjorde",
      "Klimaarchive: Eisbohrkerne speichern Luftbläschen aus hunderttausenden Jahren",
      "Great Barrier Reef: Größtes Korallenriffsystem der Erde, bedroht durch Korallenbleiche"
    ],
    "exercises": [
      {
        "id": "2035",
        "title": "Fjorde",
        "folder": "fjorde-2035"
      },
      {
        "id": "2053",
        "title": "Schokolade aus dem Regenwald",
        "folder": "schokolade-aus-dem-regenwald-2053"
      },
      {
        "id": "5495",
        "title": "Gletscher als natürliche Archive des Klimas",
        "folder": "gletscher-als-naturliche-archive-des-klimas-5495"
      },
      {
        "id": "5474",
        "title": "Die Spuren der Gletscher – Wie sie Landschaften prägen",
        "folder": "die-spuren-der-gletscher-wie-sie-landschaften-pragen-5474"
      },
      {
        "id": "5438",
        "title": "Das mysteriöse Leben unter den Gletschern - Was passiert unter dem Eis",
        "folder": "das-mysteriose-leben-unter-den-gletschern-was-passiert-unter-dem-eis-5438"
      },
      {
        "id": "5447",
        "title": "Der Great Barrier Reef - Geographie, Bedeutung und Bedrohung",
        "folder": "der-great-barrier-reef-geographie-bedeutung-und-bedrohung-5447"
      },
      {
        "id": "5570",
        "title": "Wie Gletscher zur Bildung von Tälern und Fjorden beitragen",
        "folder": "wie-gletscher-zur-bildung-von-talern-und-fjorden-beitragen-5570"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=vegetationszonen&t=3752"
  },
  "erdbeben-vulkanismus-und-plattentektonik": {
    "slug": "erdbeben-vulkanismus-und-plattentektonik",
    "title": "Erdbeben & Plattentektonik",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Tektonische Platten, Erdbebenentstehung, Seismologie, Tsunamis und Schadensrisiken.",
    "longDesc": "Die Lithosphäre der Erde zerbricht in starre Platten, die auf der Asthenosphäre driften. Verhaken sie sich, entladen sich Erdbeben.",
    "keyPoints": [
      "Plattengrenzen: Konvergierende (Kollision), divergierende (Spaltung) und Transformstörungen",
      "Seismik: Hypozentrum (Erdbebenherd) und Epizentrum an der Erdoberfläche, Richter-Skala",
      "Tsunamis: Durch submarine Erdbeben ausgelöste Riesenwellen mit enormer Zerstörungskraft"
    ],
    "exercises": [
      {
        "id": "4503",
        "title": "Wenn die Erde bebt – Warum sie wackelt (Teil",
        "folder": "wenn-die-erde-bebt-warum-sie-wackelt-5-4503"
      },
      {
        "id": "5460",
        "title": "Die Geheimnisse der Erdbeben - Ursachen und globale Auswirkungen",
        "folder": "die-geheimnisse-der-erdbeben-ursachen-und-globale-auswirkungen-5460"
      },
      {
        "id": "5488",
        "title": "Erdbebenrisiken in urbanen Ballungsräumen",
        "folder": "erdbebenrisiken-in-urbanen-ballungsraumen-5488"
      },
      {
        "id": "5522",
        "title": "Tsunamis - Ursachen, Ausbreitung und geographische Risikogebiete",
        "folder": "tsunamis-ursachen-ausbreitung-und-geographische-risikogebiete-5522"
      },
      {
        "id": "5531",
        "title": "Wie Erdbeben Gebirgsmuster und Landschaften verändern",
        "folder": "wie-erdbeben-gebirgsmuster-und-landschaften-verandern-5531"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=erdbeben+vulkanismus&t=3752"
  },
  "vulkanismus-und-magmatismus": {
    "slug": "vulkanismus-und-magmatismus",
    "title": "Vulkanismus & Magmatismus",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Schicht- und Schildvulkane, Lava, Aschewolken, Hotspots und vulkanische Böden.",
    "longDesc": "Aufsteigendes Magma schafft neue Erdkruste, formt Vulkankegel und Inseln und reichert Böden mit fruchtbaren Mineralien an.",
    "keyPoints": [
      "Vulkantypen: Explosive Schichtvulkane (Stratovulkane) vs. effusive Schildvulkane (z. B. Hawaii)",
      "Hotspots & Inselbildung: Vulkanische Inselketten über ortsfesten Mantelplumes",
      "Nutzen & Risiko: Fruchtbare Vulkanerde für die Landwirtschaft vs. pyroklastische Ströme"
    ],
    "exercises": [
      {
        "id": "4497",
        "title": "Vulkan bricht aus – Heiße Lava fließt raus",
        "folder": "vulkan-bricht-aus-heiese-lava-flieest-raus-4497"
      },
      {
        "id": "5528",
        "title": "Vulkanausbrüche und ihre globale Verteilung",
        "folder": "vulkanausbruche-und-ihre-globale-verteilung-5528"
      },
      {
        "id": "5529",
        "title": "Vulkanische Aktivitäten und ihre Auswirkungen auf die Landwirtschaft",
        "folder": "vulkanische-aktivitaten-und-ihre-auswirkungen-auf-die-landwirtschaft-5529"
      },
      {
        "id": "5530",
        "title": "Wie die Erde durch Vulkanismus und Erdbeben ständig in Bewegung ist",
        "folder": "wie-die-erde-durch-vulkanismus-und-erdbeben-standig-in-bewegung-ist-5530"
      },
      {
        "id": "5566",
        "title": "Vulkanausbruche gefahrliche schonheit der natur",
        "folder": "vulkanausbruche-gefahrliche-schonheit-der-natur-5566"
      },
      {
        "id": "5571",
        "title": "Wie sich Vulkanismus und Erdbeben gegenseitig beeinflussen",
        "folder": "wie-sich-vulkanismus-und-erdbeben-gegenseitig-beeinflussen-5571"
      },
      {
        "id": "5579",
        "title": "Vulkanismus und die Entstehung von Inseln und Bergen",
        "folder": "vulkanismus-und-die-entstehung-von-inseln-und-bergen-5579"
      }
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
      {
        "id": "2017",
        "title": "Das Gradnetz der Erde",
        "folder": "das-gradnetz-der-erde-2017"
      },
      {
        "id": "zeitzonen",
        "title": "Wie funktioniert die Zeitverschiebung (Zeitzonen)",
        "folder": "wie-funktioniert-die-zeitverschiebung-zeitzonen"
      },
      {
        "id": "120",
        "title": "Kontinente",
        "folder": "kontinente-120"
      },
      {
        "id": "122",
        "title": "Lander und kontinente",
        "folder": "lander-und-kontinente-122"
      },
      {
        "id": "313",
        "title": "Die Erde, Kontinente und Weltmeere",
        "folder": "die-erde-kontinente-und-weltmeere-313"
      },
      {
        "id": "2046",
        "title": "Die Kontinente und die Weltmeere",
        "folder": "die-kontinente-und-die-weltmeere-2046"
      },
      {
        "id": "2947",
        "title": "Die Erde - eine Scheibe oder eine Kugel",
        "folder": "die-erde-eine-scheibe-oder-eine-kugel-2947"
      },
      {
        "id": "5456",
        "title": "Die Entstehung von Gebirgen - Wie die Erde sich über Jahrmillionen formt",
        "folder": "die-entstehung-von-gebirgen-wie-die-erde-sich-uber-jahrmillionen-formt-5456"
      },
      {
        "id": "5493",
        "title": "Gebirgssysteme - Vom Ursprung der Gebirgsketten bis zu heutigen Landschaften",
        "folder": "gebirgssysteme-vom-ursprung-der-gebirgsketten-bis-zu-heutigen-landschaften-5493"
      },
      {
        "id": "5457",
        "title": "Die Entstehung von Gebirgsmassiven und ihre Entwicklung",
        "folder": "die-entstehung-von-gebirgsmassiven-und-ihre-entwicklung-5457"
      }
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
      {
        "id": "5508",
        "title": "Kultur und Identität - Die Rolle der Geographie in der kulturellen Entwicklung",
        "folder": "kultur-und-identitat-die-rolle-der-geographie-in-der-kulturellen-entwicklung-5508"
      },
      {
        "id": "5509",
        "title": "Kulturelle Identität und geographische Trennlinien",
        "folder": "kulturelle-identitat-und-geographische-trennlinien-5509"
      },
      {
        "id": "2068",
        "title": "Ethnische Minderheiten in Europa",
        "folder": "ethnische-minderheiten-in-europa-2068"
      },
      {
        "id": "2001",
        "title": "Leben im Dorf und in der Stadt im Vergleich",
        "folder": "leben-im-dorf-und-in-der-stadt-im-vergleich-2001"
      },
      {
        "id": "5461",
        "title": "Die geographische Verbreitung von Sprachen und ihre kulturelle Bedeutung",
        "folder": "die-geographische-verbreitung-von-sprachen-und-ihre-kulturelle-bedeutung-5461"
      },
      {
        "id": "5465",
        "title": "Die kulturellen Unterschiede zwischen städtischen und ländlichen Gebieten",
        "folder": "die-kulturellen-unterschiede-zwischen-stadtischen-und-landlichen-gebieten-5465"
      },
      {
        "id": "5489",
        "title": "Ethnische Gruppen und ihre geographische Verteilung weltweit",
        "folder": "ethnische-gruppen-und-ihre-geographische-verteilung-weltweit-5489"
      },
      {
        "id": "5515",
        "title": "Religion und ihre geographische Verteilung - Konflikte und Verständigung",
        "folder": "religion-und-ihre-geographische-verteilung-konflikte-und-verstandigung-5515"
      },
      {
        "id": "5517",
        "title": "Siedlungsformen und ihre geographische Verteilung weltweit",
        "folder": "siedlungsformen-und-ihre-geographische-verteilung-weltweit-5517"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kulturgeographie&t=3752"
  },
  "megacities-urbanisierung-und-mobilitaet": {
    "slug": "megacities-urbanisierung-und-mobilitaet",
    "title": "Megacities & Globale Verstädterung",
    "category": "Kultur-, Stadt- & Wirtschaftsgeographie",
    "shortDesc": "Megastädte, Landflucht, Slums, urbane Disparitäten und Global Goal 11.",
    "longDesc": "Weltweit leben heute mehr als die Hälfte aller Menschen in Städten. Megacities mit über 10 Millionen Einwohnern wachsen rasant.",
    "keyPoints": [
      "Verstädterung: Push- und Pull-Faktoren treiben die Landflucht vor allem im globalen Süden an",
      "Informelle Siedlungen: Mangel an Infrastruktur, Wasser, Sanitär und Wohnraum in Slums",
      "Global Goal 11: Ziel der Vereinten Nationen für inklusive, sichere und widerstandsfähige Städte"
    ],
    "exercises": [
      {
        "id": "5547",
        "title": "Ländliche vs. urbane Gebiete - Lebensqualität und Entwicklung",
        "folder": "landliche-vs-urbane-gebiete-lebensqualitat-und-entwicklung-5547"
      },
      {
        "id": "5527",
        "title": "Verstädterung in Afrika - Städtewachstum und informelle Siedlungen",
        "folder": "verstadterung-in-afrika-stadtewachstum-und-informelle-siedlungen-5527"
      },
      {
        "id": "5433",
        "title": "Asiens Megastädte - Wachstum und Herausforderungen",
        "folder": "asiens-megastadte-wachstum-und-herausforderungen-5433"
      },
      {
        "id": "5435",
        "title": "Bevolkerungsdichte und urbanisierung in sudasien",
        "folder": "bevolkerungsdichte-und-urbanisierung-in-sudasien-5435"
      },
      {
        "id": "2005",
        "title": "Probleme von megastadten",
        "folder": "probleme-von-megastadten-2005"
      },
      {
        "id": "2006",
        "title": "Elendsviertel der groesstadte",
        "folder": "elendsviertel-der-groesstadte-2006"
      },
      {
        "id": "5479",
        "title": "Die Ursachen und Folgen von Landflucht und städtischer Migration",
        "folder": "die-ursachen-und-folgen-von-landflucht-und-stadtischer-migration-5479"
      },
      {
        "id": "4485",
        "title": "Global Goal 11 - Lebendige Städte – Zukunft in urbanen Räumen",
        "folder": "global-goal-11-lebendige-stadte-zukunft-in-urbanen-raumen-4485"
      },
      {
        "id": "5565",
        "title": "Verstadterung ursachen folgen und chancen fur die zukunft",
        "folder": "verstadterung-ursachen-folgen-und-chancen-fur-die-zukunft-5565"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=megacities+urbanisierung&t=3752"
  },
  "urbane-mobilitaet-und-nachhaltige-stadt": {
    "slug": "urbane-mobilitaet-und-nachhaltige-stadt",
    "title": "Urbane Mobilität & Nachhaltige Stadt",
    "category": "Kultur-, Stadt- & Wirtschaftsgeographie",
    "shortDesc": "ÖPNV, Radverkehr, Zersiedelung, Stadtklima, Verkehrsgeographie und Resilienz.",
    "longDesc": "Nachhaltige Stadtplanung setzt auf Reduzierung des Individualverkehrs, Stärkung des Umweltverbunds und grüne Infrastruktur gegen Überhitzung.",
    "keyPoints": [
      "Umweltverbund: Leistungsfähiger ÖPNV, sichere Radnetze und Fußgängerzonen",
      "Stadtklima & Grüngürtel: Parks, Dachbegrünung und Frischluftschneisen gegen Hitzeinseln",
      "Kompakte Stadt: Vermeidung von Zersiedelung (Urban Sprawl) durch Verdichtung nach innen"
    ],
    "exercises": [
      {
        "id": "5470",
        "title": "Die Rolle von ÖPNV in der nachhaltigen Stadtentwicklung",
        "folder": "die-rolle-von-pnv-in-der-nachhaltigen-stadtentwicklung-5470"
      },
      {
        "id": "5490",
        "title": "Fahrradfreundliche Städte - Geographische Bedingungen für erfolgreiche Konzepte",
        "folder": "fahrradfreundliche-stadte-geographische-bedingungen-fur-erfolgreiche-konzepte-5490"
      },
      {
        "id": "5499",
        "title": "Grünes Wachstum in urbanen Gebieten - Nachhaltigkeit in Städten",
        "folder": "grunes-wachstum-in-urbanen-gebieten-nachhaltigkeit-in-stadten-5499"
      },
      {
        "id": "5518",
        "title": "Stadtentwicklung wie sich stadte im 21 jahrhundert verandern",
        "folder": "stadtentwicklung-wie-sich-stadte-im-21-jahrhundert-verandern-5518"
      },
      {
        "id": "5519",
        "title": "Stadtische resilienz gegenuber naturkatastrophen",
        "folder": "stadtische-resilienz-gegenuber-naturkatastrophen-5519"
      },
      {
        "id": "5535",
        "title": "Zersiedelung - Die Ausdehnung von Städten ins Umland",
        "folder": "zersiedelung-die-ausdehnung-von-stadten-ins-umland-5535"
      },
      {
        "id": "5551",
        "title": "Nachhaltige Verkehrskonzepte für die Städte der Zukunft",
        "folder": "nachhaltige-verkehrskonzepte-fur-die-stadte-der-zukunft-5551"
      },
      {
        "id": "5564",
        "title": "Verkehrsgeographie in urbanen Räumen - Herausforderungen und Lösungen",
        "folder": "verkehrsgeographie-in-urbanen-raumen-herausforderungen-und-losungen-5564"
      },
      {
        "id": "5575",
        "title": "Die sozialen und ökologischen Herausforderungen der Verstädterung",
        "folder": "die-sozialen-und-okologischen-herausforderungen-der-verstadterung-5575"
      }
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
      {
        "id": "5476",
        "title": "Die typische nordamerikanische Stadt",
        "folder": "die-typische-nordamerikanische-stadt-2-5476"
      },
      {
        "id": "5533",
        "title": "Wie Stadtplanung den Verkehr beeinflusst",
        "folder": "wie-stadtplanung-den-verkehr-beeinflusst-5533"
      },
      {
        "id": "1999",
        "title": "Entstehung von stadten",
        "folder": "entstehung-von-stadten-1999"
      },
      {
        "id": "2000",
        "title": "Funktionen einer Stadt",
        "folder": "funktionen-einer-stadt-2000"
      },
      {
        "id": "2004",
        "title": "Die typische orientalische Stadt",
        "folder": "die-typische-orientalische-stadt-2004"
      },
      {
        "id": "2007",
        "title": "Das Umland einer Stadt",
        "folder": "das-umland-einer-stadt-2007"
      },
      {
        "id": "5477",
        "title": "Die typische orientalisch Stadt",
        "folder": "die-typische-orientalisch-stadt-5477"
      },
      {
        "id": "5556",
        "title": "Städtebau und Stadtplanung im Zeitalter der Urbanisierung",
        "folder": "stadtebau-und-stadtplanung-im-zeitalter-der-urbanisierung-5556"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=stadtmodelle&t=3752"
  },
  "wirtschaftsgeographie-und-welthandel": {
    "slug": "wirtschaftsgeographie-und-welthandel",
    "title": "Wirtschaftsgeographie & Welthandel",
    "category": "Kultur-, Stadt- & Wirtschaftsgeographie",
    "shortDesc": "Globaler Seeverkehr, Containerhäfen, internationale Handelsrouten, WTO und globale Lieferketten.",
    "longDesc": "Moderne Volkswirtschaften sind über weltweite Transportketten vernetzt. Riesige Containerschiffe und strategische Nadelöhre wie Panama-, Sueskanal und die Straße von Hormus halten den globalen Warenverkehr in Gang.",
    "keyPoints": [
      "Containerisierung: Revolutionierung des Welthandels durch standardisierte Frachtbehälter",
      "Maritime Knotenpunkte: Welthäfen wie Shanghai, Singapur, Rotterdam und Hamburg",
      "Strategische Seewege: Straße von Malakka, Sueskanal, Panamakanal und Straße von Hormus",
      "Globale Disparitäten: Ungleiche Verteilung von Rohstoffen, Produktion und Wohlstand"
    ],
    "exercises": [
      {
        "id": "5555",
        "title": "Seeverkehr und Globalhandel - Containerhäfen als Schlüsselpunkte der Weltwirtschaft",
        "folder": "seeverkehr-und-globalhandel-containerhafen-als-schlusselpunkte-der-weltwirtschaft-5555"
      },
      {
        "id": "5569",
        "title": "Wie Digitalisierung die Wirtschaftsgeographie verändert",
        "folder": "wie-digitalisierung-die-wirtschaftsgeographie-verandert-5569"
      },
      {
        "id": "hormus",
        "title": "Die Straße von Hormus und ihre Bedeutung für den Welthandel",
        "folder": "die-strasse-von-hormus-und-ihre-bedeutung-fuer-den-welthandel"
      },
      {
        "id": "logistik-welt",
        "title": "Logistik im Welthandel Containerschifffahrt",
        "folder": "logistik-im-welthandel-containerschifffahrt"
      },
      {
        "id": "2022",
        "title": "Die größten Häfen der Erde",
        "folder": "die-groesten-hafen-der-erde-2022"
      },
      {
        "id": "2021",
        "title": "Die größten Flughäfen der Erde",
        "folder": "die-groesten-flughafen-der-erde-2021"
      },
      {
        "id": "5496",
        "title": "Globale Transportnetze und ihre Anfälligkeit gegenüber Krisen",
        "folder": "globale-transportnetze-und-ihre-anfalligkeit-gegenuber-krisen-5496"
      },
      {
        "id": "5472",
        "title": "Die Rolle von Verkehrsknotenpunkten in globalen Lieferketten",
        "folder": "die-rolle-von-verkehrsknotenpunkten-in-globalen-lieferketten-5472"
      },
      {
        "id": "5458",
        "title": "Die Entwicklung von Handelsrouten im Zeitalter der Globalisierung",
        "folder": "die-entwicklung-von-handelsrouten-im-zeitalter-der-globalisierung-5458"
      },
      {
        "id": "wto",
        "title": "Die Rolle der Welthandelsorganisation WTO",
        "folder": "die-rolle-der-welthandelsorganisation-wto"
      },
      {
        "id": "5577",
        "title": "Zukunft der Logistik - Automatisierung, Drohnen und nachhaltige Lieferketten",
        "folder": "zukunft-der-logistik-automatisierung-drohnen-und-nachhaltige-lieferketten-5577"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wirtschaftsgeographie&t=3752"
  }
};
