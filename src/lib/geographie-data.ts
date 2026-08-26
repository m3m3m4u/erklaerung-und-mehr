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
  "Österreich & Mitteleuropa",
  "Europa & Die EU",
  "Physische Geographie & Erde"
];

export const geographieTopics: Record<string, GeographieTopic> = {
  "geographie-oesterreichs": {
    "slug": "geographie-oesterreichs",
    "title": "Geographie Österreichs",
    "category": "Österreich & Mitteleuropa",
    "shortDesc": "9 Bundesländer, Landeshauptstädte, Alpen, Großlandschaften, Gewässer und Wirtschaft.",
    "longDesc": "Österreich ist ein mitteleuropäischer Binnenstaat mit ausgeprägter alpiner Landschaft. Die 9 Bundesländer gliedern sich in 5 Großlandschaften von den Hochalpen bis zum Wiener Becken.",
    "keyPoints": [
      "9 Bundesländer & Hauptstädte: Wien, St. Pölten, Linz, Salzburg, Innsbruck, Bregenz, Klagenfurt, Graz, Eisenstadt",
      "5 Großlandschaften: Alpen (ca. 63 %), Granit- und Gneishochland, Alpen- und Karpatenvorland, Wiener Becken, Vorland im Osten",
      "Höchster Berg: Großglockner (3.798 m) | Längster Fluss: Donau (350 km in AT)",
      "Wirtschaft: Tourismus, Industrie, erneuerbare Energien (Wasserkraft)"
    ],
    "exercises": [
      {
        "id": "414",
        "title": "Bundesländer und Wichtige Städte Österreichs",
        "folder": "bundeslander-und-wichtige-stadte-sterreichs-414"
      },
      {
        "id": "488",
        "title": "Alpen",
        "folder": "alpen-488"
      },
      {
        "id": "489",
        "title": "Alpen und Karpatenvorland",
        "folder": "alpen-und-karpatenvorland-489"
      },
      {
        "id": "490",
        "title": "Wiener Becken",
        "folder": "wiener-becken-490"
      },
      {
        "id": "491",
        "title": "Granit und Gneishochland",
        "folder": "granit-und-gneishochland-491"
      },
      { id: "492", title: "Vorland im Osten und Südosten", folder: "vorland-im-osten-und-sudosten-492" },
      {
        "id": "493",
        "title": "Gebirge in Österreich",
        "folder": "gebirge-in-sterreich-493"
      },
      {
        "id": "494",
        "title": "Wirtschaft in Österreich",
        "folder": "wirtschaft-in-sterreich-494"
      },
      {
        "id": "495",
        "title": "Gewässer in Österreich",
        "folder": "gewasser-in-sterreich-495"
      },
      {
        "id": "498",
        "title": "Klima und Wetter Österreichs",
        "folder": "klima-und-wetter-sterreichs-2-498"
      },
      {
        "id": "499",
        "title": "Bevölkerung Österreichs",
        "folder": "bevolkerung-sterreichs-2-499"
      },
      { id: "1199", title: "Nationalparks in Österreich", folder: "test-5-1199" },
      {
        "id": "2061",
        "title": "Bevölkerungsentwicklung in Österreich",
        "folder": "bevolkerungsentwicklung-in-sterreich-2061"
      },
      {
        "id": "2062",
        "title": "Österreich als Transitland",
        "folder": "sterreich-als-transitland-2062"
      },
      { id: "2063", title: "Industrieräume in Österreihch", folder: "industrieraume-in-sterreihch-2063" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geographie+oesterreich&t=3752"
  },
  "geographie-deutschlands": {
    "slug": "geographie-deutschlands",
    "title": "Geographie Deutschlands",
    "category": "Österreich & Mitteleuropa",
    "shortDesc": "16 Bundesländer, Hauptstädte, Großlandschaften von Nord- und Ostsee bis zu den Alpen.",
    "longDesc": "Deutschland ist das bevölkerungsreichste Land Mitteleuropas. Seine Geographie reicht von den Küsten der Nord- und Ostsee über das Norddeutsche Tiefland und die Mittelgebirge bis zum Alpenvorland.",
    "keyPoints": [
      "16 Bundesländer: 13 Flächenländer und 3 Stadtstaaten (Berlin, Hamburg, Bremen)",
      "Großlandschaften: Norddeutsches Tiefland ➔ Mittelgebirgszone ➔ Alpenvorland ➔ Bayerische Alpen",
      "Flüsse & Berge: Rhein, Elbe, Donau, Oder, Weser | Höchster Berg: Zugspitze (2.962 m)"
    ],
    "exercises": [
      {
        "id": "310",
        "title": "Geographie Deutschlands Gebirge Seen Flüsse Inseln und Halbinseln",
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
      { id: "2060", title: "Industrieräume in Deutschland", folder: "industrieraume-in-deutschland-2060" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geographie+deutschland&t=3752"
  },
  "europa-und-die-eu": {
    "slug": "europa-und-die-eu",
    "title": "Europa & die Europäische Union",
    "category": "Europa & Die EU",
    "shortDesc": "Topographie Europas, Regionen, Mitgliedsstaaten der EU, Organe, Binnenmarkt und Eurozone.",
    "longDesc": "Europa bildet den westlichen Teil des eurasischen Kontinents. Die Europäische Union (EU) ist ein einzigartiger wirtschaftlicher und politischer Staatenverbund von derzeit 27 Mitgliedsländern.",
    "keyPoints": [
      "Geografische Grenzen: Atlantik (Westen), Mittelmeer (Süden), Arktischer Ozean (Norden), Ural (Osten)",
      "Großregionen: Nordeuropa, Westeuropa, Mitteleuropa, Südeuropa, Osteuropa",
      "Die Europäische Union: 27 Mitgliedstaaten, Grundfreiheiten, EU-Parlament, Kommission und Rat"
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
        "title": "Der Europäische Binnenmarkt",
        "folder": "der-europaische-binnenmarkt-3500"
      },
      {
        "id": "3492",
        "title": "Das EU Parlament",
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
      },
      {
        "id": "416",
        "title": "Westeuropa",
        "folder": "westeuropa-2-416"
      },
      {
        "id": "426",
        "title": "Nordeuropa",
        "folder": "nordeuropa-2-426"
      },
      {
        "id": "428",
        "title": "Mitteleuropa",
        "folder": "mitteleuropa-2-428"
      },
      {
        "id": "427",
        "title": "Südeuropa",
        "folder": "sudeuropa-2-427"
      },
      {
        "id": "424",
        "title": "Osteuropa",
        "folder": "osteuropa-2-424"
      },
      {
        "id": "425",
        "title": "Südosteuropa",
        "folder": "sudosteuropa-425"
      },
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
        "id": "1996",
        "title": "Der Großglockner",
        "folder": "der-groesglockner-1996"
      },
      {
        "id": "1998",
        "title": "Die Hohen Tauern",
        "folder": "die-hohen-tauern-1998"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=europa+eu&t=3752"
  },
  "staaten-europas": {
    "slug": "staaten-europas",
    "title": "Staaten & Hauptstädte Europas (A–Z)",
    "category": "Europa & Die EU",
    "shortDesc": "Interaktives Länderlexikon: Alle Staaten Europas von Albanien bis Zypern mit Hauptstädten und Flaggen.",
    "longDesc": "Europa umfasst rund 50 souveräne Staaten mit großer kultureller, sprachlicher und landschaftlicher Vielfalt. Lerne alle Länder, Hauptstädte, Flaggen und geografischen Besonderheiten interaktiv kennen.",
    "keyPoints": [
      "Nordeuropa: Schweden, Norwegen, Finnland, Dänemark, Island",
      "Westeuropa: Frankreich, Vereinigtes Königreich, Irland, Niederlande, Belgien",
      "Südeuropa: Italien, Spanien, Portugal, Griechenland, Kroatien",
      "Osteuropa: Polen, Tschechien, Ungarn, Rumänien, Ukraine"
    ],
    "exercises": [
      {
        "id": "1527",
        "title": "Albanien",
        "folder": "albanien-1527"
      },
      {
        "id": "1534",
        "title": "Andorra",
        "folder": "andorra-1534"
      },
      {
        "id": "1564",
        "title": "Belgien",
        "folder": "belgien-1564"
      },
      {
        "id": "1573",
        "title": "Bosnien und Herzegowina",
        "folder": "bosnien-und-herzegowina-1573"
      },
      {
        "id": "1585",
        "title": "Bulgarien",
        "folder": "bulgarien-1585"
      },
      { id: "1127", title: "Dänemark", folder: "danemark-2-1127" },
      {
        "id": "1609",
        "title": "Deutschland",
        "folder": "deutschland-1609"
      },
      {
        "id": "1627",
        "title": "Estland",
        "folder": "estland-1627"
      },
      {
        "id": "1632",
        "title": "Finnland",
        "folder": "finnland-1632"
      },
      {
        "id": "1636",
        "title": "Frankreich",
        "folder": "frankreich-2-1636"
      },
      {
        "id": "1656",
        "title": "Griechenland",
        "folder": "griechenland-1656"
      },
      {
        "id": "1680",
        "title": "Irland",
        "folder": "irland-1680"
      },
      {
        "id": "1681",
        "title": "Island",
        "folder": "island-1681"
      },
      {
        "id": "1684",
        "title": "Italien",
        "folder": "italien-3-1684"
      },
      {
        "id": "1697",
        "title": "Kasachstan",
        "folder": "kasachstan-1697"
      },
      {
        "id": "1718",
        "title": "Kosovo",
        "folder": "kosovo-1718"
      },
      {
        "id": "1722",
        "title": "Kroatien",
        "folder": "kroatien-1722"
      },
      {
        "id": "1738",
        "title": "Lettland",
        "folder": "lettland-1738"
      },
      {
        "id": "1765",
        "title": "Malta",
        "folder": "malta-1765"
      },
      {
        "id": "1784",
        "title": "Moldawien",
        "folder": "moldawien-1784"
      },
      {
        "id": "1785",
        "title": "Monaco",
        "folder": "monaco-1785"
      },
      {
        "id": "1788",
        "title": "Montenegro",
        "folder": "montenegro-1788"
      },
      {
        "id": "1968",
        "title": "Niederlande",
        "folder": "niederlande-1968"
      },
      {
        "id": "1807",
        "title": "Nordmazedonien",
        "folder": "nordmazedonien-1807"
      },
      {
        "id": "1810",
        "title": "Norwegen",
        "folder": "norwegen-1810"
      },
      {
        "id": "1813",
        "title": "Österreich",
        "folder": "sterreich-1813"
      },
      {
        "id": "1829",
        "title": "Polen",
        "folder": "polen-2-1829"
      },
      {
        "id": "1969",
        "title": "Portugal",
        "folder": "portugal-1969"
      },
      { id: "1955", title: "Rumänien", folder: "algerien-3-1955" },
      {
        "id": "1937",
        "title": "Weißrussland",
        "folder": "weiesrussland-1937"
      },
      {
        "id": "1846",
        "title": "San Marino",
        "folder": "san-marino-1846"
      },
      {
        "id": "1854",
        "title": "Schweden",
        "folder": "schweden-1854"
      },
      {
        "id": "1856",
        "title": "Schweiz",
        "folder": "schweiz-2-1856"
      },
      {
        "id": "1860",
        "title": "Serbien",
        "folder": "serbien-1860"
      },
      { id: "1963", title: "Slowakei", folder: "test-8-1963" },
      {
        "id": "1869",
        "title": "Slowenien",
        "folder": "slowenien-1869"
      },
      {
        "id": "1010",
        "title": "Spanien",
        "folder": "spanien-1010"
      },
      {
        "id": "1905",
        "title": "Türkei",
        "folder": "turkei-1905"
      },
      {
        "id": "1909",
        "title": "Ukraine",
        "folder": "ukraine-2-1909"
      },
      {
        "id": "1910",
        "title": "Ungarn",
        "folder": "ungarn-1910"
      },
      {
        "id": "1918",
        "title": "Vatikanstadt",
        "folder": "vatikanstadt-1918"
      },
      {
        "id": "1923",
        "title": "Vereinigtes Königreich",
        "folder": "vereinigtes-konigreich-1923"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staaten+europa&t=3752"
  },
  "klima-ozeane-und-vegetation": {
    "slug": "klima-ozeane-und-vegetation",
    "title": "Klima, Ozeane, Flüsse & Vegetationszonen",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Klimazonen, Beleuchtungszonen, die großen Weltmeere, Flusssysteme und Vegetationszonen.",
    "longDesc": "Die physische Geographie erforscht die natürlichen Gegebenheiten der Erde: Das globale Klimasystem, Meere und Ozeane, Flusssysteme und die Vegetationszonen von den Tropen bis zur Tundra.",
    "keyPoints": [
      "Klimazonen: Tropen, Subtropen, Gemäßigte Zone, Subpolare und Polare Zone",
      "Die Weltmeere: Pazifischer, Atlantischer, Indischer, Arktischer und Antarktischer Ozean",
      "Flusssysteme: Nil, Amazonas, Jangtsekiang, Mississippi, Donau, Rhein",
      "Vegetationszonen: Tropischer Regenwald, Savanne, Wüste, Hartlaubwald, Laub-/Mischwald, Taiga, Tundra"
    ],
    "exercises": [
      {
        "id": "757",
        "title": "Klima und Wetter",
        "folder": "klima-und-wetter-757"
      },
      {
        "id": "758",
        "title": "Die Polare Klimazone",
        "folder": "die-polare-klimazone-758"
      },
      {
        "id": "759",
        "title": "Die gemäßigte Klimazone",
        "folder": "die-gemaesigte-klimazone-759"
      },
      {
        "id": "760",
        "title": "Die Subtropische Klimazone",
        "folder": "die-subtropische-klimazone-760"
      },
      {
        "id": "761",
        "title": "Die Tropische Klimazone",
        "folder": "die-tropische-klimazone-761"
      },
      {
        "id": "2008",
        "title": "Der Atlantische Ozean",
        "folder": "der-atlantische-ozean-2008"
      },
      {
        "id": "2009",
        "title": "Der Pazifische Ozean",
        "folder": "der-pazifische-ozean-2009"
      },
      {
        "id": "2010",
        "title": "Der Indische Ozean",
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
        "id": "2075",
        "title": "Der Gold von Mexiko",
        "folder": "der-gold-von-mexiko-2075"
      },
      {
        "id": "2017",
        "title": "Das Gradnetz der Erde",
        "folder": "das-gradnetz-der-erde-2017"
      },
      {
        "id": "2018",
        "title": "Die Donau",
        "folder": "die-donau-2018"
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
        "id": "2026",
        "title": "Die Sahara",
        "folder": "die-sahara-2026"
      },
      {
        "id": "2027",
        "title": "Der Tropische Regenwald",
        "folder": "der-tropische-regenwald-2027"
      },
      {
        "id": "2028",
        "title": "Laubwald Nadelwald und Mischwald",
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
      { id: "2033", title: "Kältewüsten", folder: "kaltewusten-2033" },
      {
        "id": "2034",
        "title": "Die Oase",
        "folder": "die-oase-2034"
      },
      {
        "id": "2035",
        "title": "Fjorde",
        "folder": "fjorde-2035"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=klimazonen&t=3752"
  },
  "staaten-der-welt": {
    "slug": "staaten-der-welt",
    "title": "Staaten der Welt (Afrika, Asien, Amerika, Ozeanien)",
    "category": "Physische Geographie & Erde",
    "shortDesc": "Staaten und Hauptstädte in Afrika, Asien, Nord- & Südamerika, US-Bundesstaaten und Ozeanien.",
    "longDesc": "Entdecke die Vielfalt aller Kontinente: Von den afrikanischen Staaten über Asien und die amerikanischen Bundesstaaten bis hin zu den Inselstaaten Ozeaniens.",
    "keyPoints": [
      "Afrika: Ägypten, Nigeria, Südafrika, Kenia, Marokko, Algerien uvm.",
      "Asien: China, Indien, Japan, Indonesien, Saudi-Arabien, Türkei uvm.",
      "Amerika: USA (50 Bundesstaaten), Kanada, Mexiko, Brasilien, Argentinien, Kolumbien",
      "Australien & Ozeanien: Australien, Neuseeland, Fidschi, Papua-Neuguinea"
    ],
    "exercises": [
      {
        "id": "1836",
        "title": "Ruanda",
        "folder": "ruanda-1836"
      },
      {
        "id": "1844",
        "title": "Sambia",
        "folder": "sambia-1844"
      },
      { id: "1976", title: "São Tomé und Príncipe", folder: "sao-tome-und-principe-1976" },
      {
        "id": "1859",
        "title": "Senegal",
        "folder": "senegal-1859"
      },
      {
        "id": "1862",
        "title": "Seychellen",
        "folder": "seychellen-1862"
      },
      {
        "id": "1865",
        "title": "Sierra Leone",
        "folder": "sierra-leone-1865"
      },
      {
        "id": "1866",
        "title": "Simbabwe",
        "folder": "simbabwe-1866"
      },
      {
        "id": "1871",
        "title": "Somalia",
        "folder": "somalia-1871"
      },
      {
        "id": "1882",
        "title": "Südafrika",
        "folder": "sudafrika-1882"
      },
      {
        "id": "1524",
        "title": "Ägypten",
        "folder": "gypten-1524"
      },
      {
        "id": "1958",
        "title": "Algerien",
        "folder": "algerien-6-1958"
      },
      {
        "id": "1535",
        "title": "Angola",
        "folder": "angola-1535"
      },
      {
        "id": "1540",
        "title": "Äquatorialguinea",
        "folder": "quatorialguinea-1540"
      },
      {
        "id": "1547",
        "title": "Äthiopien",
        "folder": "thiopien-1547"
      },
      {
        "id": "1970",
        "title": "Benin",
        "folder": "benin-1970"
      },
      {
        "id": "1589",
        "title": "Burundi",
        "folder": "burundi-1589"
      },
      { id: "1971", title: "Côte d'Ivoire (Elfenbeinküste)", folder: "cote-d-039-ivoire-elfenbeinkuste-1971" },
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
        "id": "1628",
        "title": "Eswatini Swasiland",
        "folder": "eswatini-swasiland-1628"
      },
      {
        "id": "1640",
        "title": "Gabun",
        "folder": "gabun-1640"
      },
      {
        "id": "1641",
        "title": "Gambia",
        "folder": "gambia-1641"
      },
      {
        "id": "1820",
        "title": "Papua Neuguinea",
        "folder": "papua-neuguinea-1820"
      },
      {
        "id": "1659",
        "title": "Guinea Bissau",
        "folder": "guinea-bissau-1659"
      },
      {
        "id": "1692",
        "title": "Kamerun",
        "folder": "kamerun-1692"
      },
      {
        "id": "1695",
        "title": "Kap Verde",
        "folder": "kap-verde-1695"
      },
      {
        "id": "1703",
        "title": "Kenia",
        "folder": "kenia-1703"
      },
      {
        "id": "1712",
        "title": "Komoren",
        "folder": "komoren-1712"
      },
      {
        "id": "1714",
        "title": "Kongo Republik",
        "folder": "kongo-republik-1714"
      },
      {
        "id": "1713",
        "title": "Kongo Demokratische Republik",
        "folder": "kongo-demokratische-republik-1713"
      },
      {
        "id": "1737",
        "title": "Lesotho",
        "folder": "lesotho-1737"
      },
      {
        "id": "1741",
        "title": "Libyen",
        "folder": "libyen-1741"
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
        "id": "1774",
        "title": "Mauritius",
        "folder": "mauritius-1774"
      },
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
        "id": "1554",
        "title": "Bahrain",
        "folder": "bahrain-1554"
      },
      {
        "id": "1557",
        "title": "Bangladesch",
        "folder": "bangladesch-1557"
      },
      {
        "id": "1580",
        "title": "Brunei",
        "folder": "brunei-1580"
      },
      {
        "id": "1597",
        "title": "China",
        "folder": "china-1597"
      },
      {
        "id": "1646",
        "title": "Georgien",
        "folder": "georgien-1646"
      },
      {
        "id": "1675",
        "title": "Indien",
        "folder": "indien-1675"
      },
      {
        "id": "1676",
        "title": "Indonesien",
        "folder": "indonesien-1676"
      },
      {
        "id": "1678",
        "title": "Irak",
        "folder": "irak-1678"
      },
      {
        "id": "1679",
        "title": "Iran",
        "folder": "iran-1679"
      },
      {
        "id": "1682",
        "title": "Israel",
        "folder": "israel-1682"
      },
      {
        "id": "1686",
        "title": "Japan",
        "folder": "japan-1686"
      },
      {
        "id": "1687",
        "title": "Jemen",
        "folder": "jemen-1687"
      },
      {
        "id": "1688",
        "title": "Jordanien",
        "folder": "jordanien-1688"
      },
      {
        "id": "1691",
        "title": "Kambodscha",
        "folder": "kambodscha-1691"
      },
      {
        "id": "1698",
        "title": "Katar",
        "folder": "katar-1698"
      },
      {
        "id": "1707",
        "title": "Kirgisistan",
        "folder": "kirgisistan-1707"
      },
      {
        "id": "1725",
        "title": "Kuwait",
        "folder": "kuwait-1725"
      },
      {
        "id": "1730",
        "title": "Laos",
        "folder": "laos-1730"
      },
      {
        "id": "1739",
        "title": "Libanon",
        "folder": "libanon-1739"
      },
      {
        "id": "1761",
        "title": "Malaysia",
        "folder": "malaysia-1761"
      },
      {
        "id": "1762",
        "title": "Malediven",
        "folder": "malediven-1762"
      },
      {
        "id": "1786",
        "title": "Mongolei",
        "folder": "mongolei-1786"
      },
      {
        "id": "1792",
        "title": "Myanmar",
        "folder": "myanmar-1792"
      },
      {
        "id": "1796",
        "title": "Nepal",
        "folder": "nepal-1796"
      },
      {
        "id": "1980",
        "title": "Nordkorea",
        "folder": "nordkorea-1980"
      },
      {
        "id": "641",
        "title": "Music Of The Romantic Period",
        "folder": "music-of-the-romantic-period-641"
      },
      {
        "id": "1816",
        "title": "Pakistan",
        "folder": "pakistan-1816"
      },
      {
        "id": "616",
        "title": "Israel und Palästina",
        "folder": "israel-und-palastina-616"
      },
      {
        "id": "1977",
        "title": "Philippinen",
        "folder": "philippinen-1977"
      },
      {
        "id": "1937",
        "title": "Weißrussland",
        "folder": "weiesrussland-1937"
      },
      {
        "id": "1850",
        "title": "Saudi Arabien",
        "folder": "saudi-arabien-1850"
      },
      {
        "id": "1868",
        "title": "Singapur",
        "folder": "singapur-1868"
      },
      {
        "id": "1876",
        "title": "Sri Lanka",
        "folder": "sri-lanka-1876"
      },
      {
        "id": "1883",
        "title": "Südkorea",
        "folder": "sudkorea-1883"
      },
      {
        "id": "1885",
        "title": "Syrien",
        "folder": "syrien-1885"
      },
      {
        "id": "1886",
        "title": "Tadschikistan",
        "folder": "tadschikistan-1886"
      },
      {
        "id": "1892",
        "title": "Thailand",
        "folder": "thailand-1892"
      },
      {
        "id": "1906",
        "title": "Turkmenistan",
        "folder": "turkmenistan-1906"
      },
      {
        "id": "1815",
        "title": "Osttimor",
        "folder": "osttimor-1815"
      },
      {
        "id": "1913",
        "title": "Usbekistan",
        "folder": "usbekistan-1913"
      },
      {
        "id": "1921",
        "title": "Vereinigte Arabische Emirate",
        "folder": "vereinigte-arabische-emirate-1921"
      },
      {
        "id": "1927",
        "title": "Vietnam",
        "folder": "vietnam-1927"
      },
      {
        "id": "1711",
        "title": "Kolumbien",
        "folder": "kolumbien-1711"
      },
      {
        "id": "1821",
        "title": "Paraguay",
        "folder": "paraguay-1821"
      },
      {
        "id": "1827",
        "title": "Peru",
        "folder": "peru-1827"
      },
      {
        "id": "1884",
        "title": "Suriname",
        "folder": "suriname-1884"
      },
      {
        "id": "1912",
        "title": "Uruguay",
        "folder": "uruguay-1912"
      },
      {
        "id": "1920",
        "title": "Venezuela",
        "folder": "venezuela-1920"
      },
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
        "id": "1922",
        "title": "Vereinigte Staaten von Amerika",
        "folder": "vereinigte-staaten-von-amerika-1922"
      },
      {
        "id": "1548",
        "title": "Australien",
        "folder": "australien-3-1548"
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
        "id": "1799",
        "title": "Neuseeland",
        "folder": "neuseeland-1799"
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
      },
      {
        "id": "1917",
        "title": "Vanuatu",
        "folder": "vanuatu-1917"
      },
      {
        "id": "1541",
        "title": "Argentinien",
        "folder": "argentinien-2-1541"
      },
      {
        "id": "1571",
        "title": "Bolivien",
        "folder": "bolivien-1571"
      },
      {
        "id": "1576",
        "title": "Brasilien",
        "folder": "brasilien-1576"
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
        "id": "1661",
        "title": "Guyana",
        "folder": "guyana-1661"
      },
      {
        "id": "1526",
        "title": "Alabama",
        "folder": "alabama-1526"
      },
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
        "id": "1543",
        "title": "Arkansas",
        "folder": "arkansas-1543"
      },
      {
        "id": "1601",
        "title": "Colorado",
        "folder": "colorado-1601"
      },
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
        "id": "1690",
        "title": "Kalifornien",
        "folder": "kalifornien-1690"
      },
      {
        "id": "1694",
        "title": "Kansas",
        "folder": "kansas-1694"
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
        "id": "1781",
        "title": "Mississippi",
        "folder": "mississippi-1781"
      },
      {
        "id": "1782",
        "title": "Missouri",
        "folder": "missouri-1782"
      },
      {
        "id": "1787",
        "title": "Montana",
        "folder": "montana-1787"
      },
      {
        "id": "1795",
        "title": "Nebraska",
        "folder": "nebraska-1795"
      },
      {
        "id": "1802",
        "title": "Nevada",
        "folder": "nevada-1802"
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
        "id": "1805",
        "title": "New Mexico",
        "folder": "new-mexico-1805"
      },
      {
        "id": "1806",
        "title": "New York",
        "folder": "new-york-1806"
      },
      {
        "id": "1808",
        "title": "North Carolina",
        "folder": "north-carolina-1808"
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
        "id": "1987",
        "title": "Oregon",
        "folder": "oregon-1987"
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
        "id": "1872",
        "title": "South Carolina",
        "folder": "south-carolina-1872"
      },
      {
        "id": "1873",
        "title": "South Dakota",
        "folder": "south-dakota-1873"
      },
      {
        "id": "1988",
        "title": "Tennessee",
        "folder": "tennessee-1988"
      },
      {
        "id": "1891",
        "title": "Texas",
        "folder": "texas-1891"
      },
      {
        "id": "1915",
        "title": "Utah",
        "folder": "utah-1915"
      },
      {
        "id": "1924",
        "title": "Vermont",
        "folder": "vermont-1924"
      },
      {
        "id": "1939",
        "title": "West Virginia",
        "folder": "west-virginia-1939"
      },
      {
        "id": "1935",
        "title": "Washington",
        "folder": "washington-1935"
      },
      {
        "id": "1945",
        "title": "Wisconsin",
        "folder": "wisconsin-1945"
      },
      {
        "id": "1950",
        "title": "Wyoming",
        "folder": "wyoming-1950"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=staaten+der+welt&t=3752"
  }
};
