export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface KunstTopic {
  id?: number;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const kunstCategories: string[] = [
  "Künstler nach Epochen",
  "Meisterwerke & Kunstepochen",
  "Kunstrichtungen & Techniken"
];

export const kunstTopics: Record<string, KunstTopic> = {
  "kuenstler-der-renaissance": {
    "id": 34103,
    "slug": "kuenstler-der-renaissance",
    "title": "Künstler der Renaissance",
    "category": "Künstler nach Epochen",
    "shortDesc": "Albrecht Dürer, Sandro Botticelli, Leonardo da Vinci und die Meister der Renaissance.",
    "longDesc": "Die Renaissance markiert die Wiedergeburt der Antike und die Entdeckung des Individuums. Lerne die Meisterwerke, Proportionsstudien und Techniken der Renaissance-Künstler kennen.",
    "keyPoints": [
      "Wiedergeburt der Antike: Rückbesinnung auf klassische Proportionen, menschliche Anatomie und Zentralperspektive",
      "Albrecht Dürer (1471–1528): Nürnberger Meister des Holzschnitts und Kupferstichs (Melencolia I, Feldhase, Selbstbildnisse)",
      "Sandro Botticelli (1445–1510): Meister der Florentiner Frührenaissance (Die Geburt der Venus, Primavera)",
      "Universalgenies: Verbindung von bildender Kunst, Naturwissenschaft, Mathematik und Philosophie"
    ],
    "exercises": [
      {
        "id": "1354",
        "title": "Albrecht Dürer",
        "folder": "albrecht-durer-1354"
      },
      {
        "id": "1400",
        "title": "Sandro Botticelli",
        "folder": "sandro-botticelli-1400"
      }
    ]
  },
  "kuenstler-des-barocks": {
    "id": 34104,
    "slug": "kuenstler-des-barocks",
    "title": "Künstler des Barocks",
    "category": "Künstler nach Epochen",
    "shortDesc": "Artemisia Gentileschi, Caravaggio, Diego Velázquez, Peter Paul Rubens und Rembrandt van Rijn.",
    "longDesc": "Dramatik, Hell-Dunkel-Kontraste (Chiaroscuro) und emotionale Wucht: Die Barockmalerei überwältigte die Betrachter mit lebendigen Szenen, Pracht und psychologischer Tiefe.",
    "keyPoints": [
      "Chiaroscuro & Dramatik: Meisterhafter Einsatz von extremem Licht und tiefem Schatten (Caravaggio)",
      "Rembrandt van Rijn (1606–1669): Das niederländische Genie der Porträtkunst und Historienmalerei (Die Nachtwache)",
      "Peter Paul Rubens (1577–1640): Flämischer Meister dynamischer Großformate, Mythologie und üppiger Farbenpracht",
      "Artemisia Gentileschi (1593–1653): Herausragende Malerin des römischen Barock voller Entschlossenheit und Ausdruckskraft",
      "Diego Velázquez (1599–1660): Hofmaler am spanischen Königshof (Las Meninas)"
    ],
    "exercises": [
      {
        "id": "1357",
        "title": "Artemisia Gentileschi",
        "folder": "artemisia-gentileschi-1357"
      },
      {
        "id": "1359",
        "title": "Caravaggio",
        "folder": "caravaggio-1359"
      },
      {
        "id": "1369",
        "title": "Diego Velázquez",
        "folder": "diego-velazquez-1369"
      },
      {
        "id": "1393",
        "title": "Peter Paul Rubens",
        "folder": "peter-paul-rubens-1393"
      },
      {
        "id": "1398",
        "title": "Rembrandt van Rijn",
        "folder": "rembrandt-van-rijn-1398"
      }
    ]
  },
  "kuenstler-des-impressionismus": {
    "id": 34107,
    "slug": "kuenstler-des-impressionismus",
    "title": "Künstler des Impressionismus",
    "category": "Künstler nach Epochen",
    "shortDesc": "Claude Monet, Edgar Degas, Pierre-Auguste Renoir und die Erfassung des flüchtigen Augenblicks.",
    "longDesc": "Licht, Farbe und der Zauber des Moments: Die Impressionisten verließen die Ateliers, malten unter freiem Himmel (Pleinairmalerei) und revolutionierten die Malerei mit sichtbaren Pinselstrichen.",
    "keyPoints": [
      "Freilichtmalerei (En plein air): Malen in der Natur, um wechselnde Lichtstimmungen exakt einzufangen",
      "Claude Monet (1840–1926): Namensgeber der Bewegung mit 'Impression, Sonnenaufgang' (1872) und den Seerosen-Serien",
      "Edgar Degas (1834–1917): Meister der Bewegung, Pariser Ballettszenen, Pferderennen und ungewöhnliche Blickwinkel",
      "Farbzerlegung: Farben werden nicht auf der Palette gemischt, sondern als Tupfen nebeneinander gesetzt (optische Mischung im Auge des Betrachters)"
    ],
    "exercises": [
      {
        "id": "1360",
        "title": "Claude Monet",
        "folder": "claude-monet-1360"
      },
      {
        "id": "1370",
        "title": "Edgar Degas",
        "folder": "edgar-degas-1370"
      }
    ]
  },
  "kuenstler-des-realismus": {
    "id": 34108,
    "slug": "kuenstler-des-realismus",
    "title": "Künstler des Realismus",
    "category": "Künstler nach Epochen",
    "shortDesc": "Gustave Courbet, Lucian Freud und die ungeschönte Darstellung der Wirklichkeit.",
    "longDesc": "Gegen die Idealisierung der Klassik und Romantik: Der Realismus zeigt die Welt und den arbeitenden Menschen so, wie sie wirklich sind – ungeschönt, wahrhaftig und sozialkritisch.",
    "keyPoints": [
      "Wahrheit statt Idealisierung: Alltagsszenen von Bauern, Fabrikarbeitern und dem einfachen Leben",
      "Gustave Courbet (1819–1877): Begründer des französischen Realismus ('Die Steinklopfer', 'Ein Begräbnis in Ornans')",
      "Lucian Freud (1922–2011): Moderner Meister der psychologisch schonungslosen Porträt- und Aktmalerei",
      "Historischer Kontext: Industrielle Revolution, Entstehung der Arbeiterklasse und sozialer Wandel"
    ],
    "exercises": [
      {
        "id": "1358",
        "title": "Auguste Rodin",
        "folder": "auguste-rodin-1358"
      },
      {
        "id": "1385",
        "title": "Lucian Freud",
        "folder": "lucian-freud-1385"
      }
    ]
  },
  "kuenstler-des-expressionismus": {
    "id": 34105,
    "slug": "kuenstler-des-expressionismus",
    "title": "Künstler des Expressionismus",
    "category": "Künstler nach Epochen",
    "shortDesc": "Edvard Munch, Egon Schiele, Ernst Ludwig Kirchner, Franz Marc und der Ausdruck seelischer Emotionen.",
    "longDesc": "Nicht die äußere Wirklichkeit, sondern das innere Erleben: Mit leuchtenden, verzerrten Farben und kantigen Formen brachten die Expressionisten Gefühle, Ängste und Sehnsüchte auf die Leinwand.",
    "keyPoints": [
      "Ausdruck des Inneren: Subjektive Gefühle, Ängste, Leidenschaft und Zerrissenheit stehen im Mittelpunkt",
      "Künstlergruppen: 'Die Brücke' in Dresden (Kirchner, Heckel, Schmidt-Rottluff) und 'Der Blaue Reiter' in München (Kandinsky, Marc)",
      "Edvard Munch (1863–1944): Wegbereiter mit 'Der Schrei' – Symbol der modernen menschlichen Existenzangst",
      "Egon Schiele (1890–1918): Wiener Meister der expressiven Zeichenkunst, schonungslose Selbstporträts",
      "Franz Marc (1880–1916): Symbolische Farbgebung ('Blaues Pferd', 'Reh im Walde')"
    ],
    "exercises": [
      {
        "id": "1355",
        "title": "Amedeo Modigliani",
        "folder": "amedeo-modigliani-1355"
      },
      {
        "id": "1375",
        "title": "Jackson Pollock",
        "folder": "jackson-pollock-1375"
      },
      {
        "id": "1377",
        "title": "Jean-Michel Basquiat",
        "folder": "jean-michel-basquiat-1377"
      },
      {
        "id": "1382",
        "title": "Joan Miró",
        "folder": "joan-miro-1382"
      },
      {
        "id": "1382",
        "title": "Joan Miró",
        "folder": "joan-miro-1382"
      }
    ]
  },
  "kuenstler-der-moderne": {
    "id": 34106,
    "slug": "kuenstler-der-moderne",
    "title": "Künstler der Moderne",
    "category": "Künstler nach Epochen",
    "shortDesc": "Pablo Picasso, Andy Warhol, Frida Kahlo, Salvador Dalí und die Revolutionen des 20. Jahrhunderts.",
    "longDesc": "Vom Kubismus und Surrealismus bis zur Pop Art: Die Moderne brach radikal mit alten Sehgewohnheiten, erfand neue Techniken und definierte Kunst völlig neu.",
    "keyPoints": [
      "Pablo Picasso (1881–1973): Schöpfer des Kubismus, Zersplitterung der Perspektiven, Monumentalwerk 'Guernica'",
      "Salvador Dalí (1904–1989): Meister des Surrealismus, Traumwelten und schmelzende Uhren ('Die Beständigkeit der Erinnerung')",
      "Frida Kahlo (1907–1954): Ikonische mexikanische Malerin – Schmerz, Identität, Volkskunst und Selbstporträts",
      "Andy Warhol (1928–1987): König der Pop Art – Siebdrucke von Suppendosen, Marilyn Monroe und Konsumkultur"
    ],
    "exercises": [
      {
        "id": "1356",
        "title": "Andy Warhol",
        "folder": "andy-warhol-1356"
      },
      {
        "id": "1378",
        "title": "Marc Chagall",
        "folder": "marc-chagall-1378"
      },
      {
        "id": "1394",
        "title": "Piet Mondrian",
        "folder": "piet-mondrian-1394"
      },
      {
        "id": "1390",
        "title": "Pablo Picasso",
        "folder": "pablo-picasso-1390"
      }
    ]
  },
  "beruehmte-kunstwerke": {
    "id": 68369,
    "slug": "beruehmte-kunstwerke",
    "title": "Berühmte Kunstwerke",
    "category": "Meisterwerke & Kunstepochen",
    "shortDesc": "Die berühmtesten Gemälde und Skulpturen der Menschheit von Bernini, Bosch, Botticelli, Da Vinci, Michelangelo, Van Gogh u. a.",
    "longDesc": "Hier findest du Videos und interaktive Übungen zu den berühmtesten Kunstwerken der Weltgeschichte, sortiert nach den großen Meistern der Bildenden Kunst.",
    "keyPoints": [
      "Renaissance-Meisterwerke: Leonardo da Vincis 'Mona Lisa', Botticellis 'Geburt der Venus', Michelangelos 'Erschaffung Adams'",
      "Barock & Romantik: Rembrandts 'Nachtwache', Caspar David Friedrichs 'Wanderer über dem Nebelmeer'",
      "Moderne Ikonen: Munchs 'Der Schrei', Klimts 'Der Kuss', Van Goghs 'Sternennacht', Picassos 'Guernica'",
      "Bildanalyse: Motive, Bildaufbau, Farbkomposition, Lichtführung und historische Bedeutung"
    ],
    "exercises": [
      {
        "id": "4708",
        "title": "Ekstase der heiligen Teresa (1652)",
        "folder": "ekstase-der-heiligen-teresa-gian-lorenzo-bernini-1652-4708"
      },
      {
        "id": "4683",
        "title": "Der Garten der Lüste (1500)",
        "folder": "der-garten-der-luste-hieronymus-bosch-1500-4683"
      },
      {
        "id": "4750",
        "title": "Venus und Mars (1480)",
        "folder": "venus-und-mars-sandro-botticelli-1480-4750"
      },
      {
        "id": "4718",
        "title": "La Primavera (1482)",
        "folder": "la-primavera-sandro-botticelli-1482-4718"
      },
      {
        "id": "4699",
        "title": "Die Geburt der Venus (1486)",
        "folder": "die-geburt-der-venus-sandro-botticelli-1486-4699"
      },
      {
        "id": "4691",
        "title": "Der Triumph des Todes (1562)",
        "folder": "der-triumph-des-todes-pieter-bruegel-der-ltere-1562-4691"
      },
      {
        "id": "4747",
        "title": "The Card Players (1892)",
        "folder": "the-card-players-paul-cezanne-1892-4747"
      },
      {
        "id": "4760",
        "title": "Die großen Badenden (1898)",
        "folder": "die-groesen-badenden-paul-cezanne-1898-4760"
      },
      {
        "id": "4712",
        "title": "I and the Village",
        "folder": "i-and-the-village-marc-chagall-1911-4712"
      },
      {
        "id": "4666",
        "title": "Anbetung der Könige (1481)",
        "folder": "anbetung-der-konige-leonardo-da-vinci-1481-4666"
      },
      {
        "id": "4724",
        "title": "Madonna Litta (1490)",
        "folder": "madonna-litta-leonardo-da-vinci-1490-4724"
      },
      {
        "id": "4754",
        "title": "Vitruvianischer Mensch (1490)",
        "folder": "vitruvianischer-mensch-leonardo-da-vinci-1490-4754"
      },
      {
        "id": "4676",
        "title": "Das letzte Abendmahl (1498)",
        "folder": "das-letzte-abendmahl-leonardo-da-vinci-1498-4676"
      },
      {
        "id": "4694",
        "title": "Die Beständigkeit der Erinnerung (1931)",
        "folder": "die-bestandigkeit-der-erinnerung-salvador-dali-1931-4694"
      },
      {
        "id": "4686",
        "title": "Der Schwur der Horatier (1784)",
        "folder": "der-schwur-der-horatier-jacques-louis-david-1784-4686"
      },
      {
        "id": "4690",
        "title": "Der Tod des Sokrates (1787)",
        "folder": "der-tod-des-sokrates-jacques-louis-david-1787-4690"
      },
      {
        "id": "4689",
        "title": "Der Tod des Marat (1793)",
        "folder": "der-tod-des-marat-jacques-louis-david-1793-4689"
      },
      {
        "id": "4701",
        "title": "Die Krönung Napoleons (1807)",
        "folder": "die-kronung-napoleons-jacques-louis-david-1807-4701"
      },
      {
        "id": "4746",
        "title": "Tanzende Ballerinnen (1874)",
        "folder": "tanzende-ballerinnen-edgar-degas-1874-4746"
      },
      {
        "id": "4717",
        "title": "L’Absinthe (1876)",
        "folder": "l-absinthe-edgar-degas-1876-4717"
      },
      {
        "id": "4698",
        "title": "Die Freiheit führt das Volk (1830)",
        "folder": "die-freiheit-fuhrt-das-volk-eugene-delacroix-1830-4698"
      },
      {
        "id": "4729",
        "title": "Nude Descending a Staircase, No. 2 (1912)",
        "folder": "nude-descending-a-staircase-no-2-marcel-duchamp-1912-4729"
      },
      {
        "id": "4709",
        "title": "Fountain (1917)",
        "folder": "fountain-marcel-duchamp-1917-4709"
      },
      {
        "id": "4722",
        "title": "LHOOQ (1919)",
        "folder": "lhooq-marcel-duchamp-1919-4722"
      },
      {
        "id": "4741",
        "title": "Selbstbildnis als Künstler (1498)",
        "folder": "selbstbildnis-als-kunstler-albrecht-durer-1498-4741"
      },
      {
        "id": "4748",
        "title": "The Swing (1767)",
        "folder": "the-swing-jean-honore-fragonard-1767-4748"
      },
      {
        "id": "4726",
        "title": "Mönch am Meer (1808)",
        "folder": "monch-am-meer-caspar-david-friedrich-1808-4726"
      },
      {
        "id": "4755",
        "title": "Wanderer über dem Nebelmeer (1818)",
        "folder": "wanderer-uber-dem-nebelmeer-caspar-david-friedrich-1818-4755"
      },
      {
        "id": "4673",
        "title": "Das Eismeer (1823)",
        "folder": "das-eismeer-caspar-david-friedrich-1823-4673"
      },
      {
        "id": "4753",
        "title": "Vision nach der Predigt (1888)",
        "folder": "vision-nach-der-predigt-paul-gauguin-1888-4753"
      },
      {
        "id": "4714",
        "title": "Judith und Holofernes (1612)",
        "folder": "judith-und-holofernes-artemisia-gentileschi-1612-4714"
      },
      {
        "id": "4674",
        "title": "Das Floß der Medusa (1819)",
        "folder": "das-floes-der-medusa-theodore-gericault-1819-4674"
      },
      {
        "id": "4737",
        "title": "Schlafende Venus (1510)",
        "folder": "schlafende-venus-giorgione-1510-4737"
      },
      {
        "id": "4679",
        "title": "Der 3. Mai 1808 (1814)",
        "folder": "der-3-mai-1808-francisco-goya-1814-4679"
      },
      {
        "id": "4735",
        "title": "Saturn verschlingt seinen Sohn (1819)",
        "folder": "saturn-verschlingt-seinen-sohn-francisco-goya-1819-4735"
      },
      {
        "id": "4700",
        "title": "Die große Welle vor Kanagawa (1831)",
        "folder": "die-groese-welle-vor-kanagawa-katsushika-hokusai-1831-4700"
      },
      {
        "id": "4706",
        "title": "Die zwei Fridas (1939)",
        "folder": "die-zwei-fridas-frida-kahlo-1939-4706"
      },
      {
        "id": "4715",
        "title": "Komposition VII (1913)",
        "folder": "komposition-vii-wassily-kandinsky-1913-4715"
      },
      {
        "id": "4716",
        "title": "Komposition VIII (1923)",
        "folder": "komposition-viii-wassily-kandinsky-1923-4716"
      },
      {
        "id": "4743",
        "title": "Selbstbildnis mit Zauberhut (1913)",
        "folder": "selbstbildnis-mit-zauberhut-ernst-ludwig-kirchner-1913-4743"
      },
      {
        "id": "4684",
        "title": "Der Kuss (1907)",
        "folder": "der-kuss-gustav-klimt-1907-4684"
      },
      {
        "id": "4732",
        "title": "Porträt der Adele Bloch-Bauer I (1907)",
        "folder": "portrat-der-adele-bloch-bauer-i-gustav-klimt-1907-4732"
      },
      {
        "id": "4719",
        "title": "La trahison des images (1929)",
        "folder": "la-trahison-des-images-rene-magritte-1929-4719"
      },
      {
        "id": "4710",
        "title": "Frühstück im Grünen (1863)",
        "folder": "fruhstuck-im-grunen-douard-manet-1863-4710"
      },
      {
        "id": "4730",
        "title": "Olympia (1863)",
        "folder": "olympia-douard-manet-1863-4730"
      },
      {
        "id": "4681",
        "title": "Der blaue Reiter (1911)",
        "folder": "der-blaue-reiter-franz-marc-1911-4681"
      },
      {
        "id": "4671",
        "title": "Blue Nude (1907)",
        "folder": "blue-nude-henri-matisse-1907-4671"
      },
      {
        "id": "4688",
        "title": "Der Tanz(1910)",
        "folder": "der-tanz-henri-matisse-1910-4688"
      },
      {
        "id": "4731",
        "title": "Pietà (1499)",
        "folder": "pieta-michelangelo-1499-4731"
      },
      {
        "id": "4678",
        "title": "David (1504)",
        "folder": "david-michelangelo-1504-4678"
      },
      {
        "id": "4697",
        "title": "Die Erschaffung Adams (1504)",
        "folder": "die-erschaffung-adams-michelangelo-1512-4697"
      },
      {
        "id": "4757",
        "title": "Das Jüngste Gericht (1541)",
        "folder": "das-jungste-gericht-michelangelo-1541-4757"
      },
      {
        "id": "4756",
        "title": "Ophelia (1851)",
        "folder": "a-sunday-afternoon-on-the-island-of-la-grande-jatte-georges-seurat-1887-4756"
      },
      {
        "id": "4713",
        "title": "Impression, Sonnenaufgang (1872)",
        "folder": "impression-sonnenaufgang-claude-monet-1872-4713"
      },
      {
        "id": "4738",
        "title": "Seerosen (1906)",
        "folder": "seerosen-claude-monet-1906-4738"
      },
      {
        "id": "4685",
        "title": "Der Schrei (1892)",
        "folder": "der-schrei-edvard-munch-1893-4685"
      },
      {
        "id": "4707",
        "title": "Diskuswerfer (ca. 450 v. Chr.)",
        "folder": "diskuswerfer-myron-ca-450-v-chr-4707"
      },
      {
        "id": "4725",
        "title": "Madonna mit dem langen Hals (1534)",
        "folder": "madonna-mit-dem-langen-hals-parmigianino-1534-4725"
      },
      {
        "id": "4680",
        "title": "Der alte Gitarrist (1903)",
        "folder": "der-alte-gitarrist-pablo-picasso-1903-4680"
      },
      {
        "id": "4758",
        "title": "Das Mädchen von Avignon (1907)",
        "folder": "das-madchen-von-avignon-pablo-picasso-1907-4758"
      },
      {
        "id": "4705",
        "title": "Die weinende Frau (1937)",
        "folder": "die-weinende-frau-pablo-picasso-1937-4705"
      },
      {
        "id": "4711",
        "title": "Guernica (1937)",
        "folder": "guernica-pablo-picasso-1937-4711"
      },
      {
        "id": "4703",
        "title": "Die Schule von Athen (1511)",
        "folder": "die-schule-von-athen-raffael-1511-4703"
      },
      {
        "id": "4744",
        "title": "Sixtinische Madonna (1512)",
        "folder": "sixtinische-madonna-raffael-1512-4744"
      },
      {
        "id": "4749",
        "title": "Triumph der Galatea (1512)",
        "folder": "triumph-der-galatea-raffael-1512-4749"
      },
      {
        "id": "4723",
        "title": "Madonna della Seggiola (1559)",
        "folder": "madonna-della-seggiola-raffael-1559-4723"
      },
      {
        "id": "4759",
        "title": "Die Anatomie des Dr. Tulp (1632)",
        "folder": "die-anatomie-des-dr-tulp-rembrandt-1633-4759"
      },
      {
        "id": "4702",
        "title": "Die Nachtwache (1642)",
        "folder": "die-nachtwache-rembrandt-1642-4702"
      },
      {
        "id": "4739",
        "title": "Selbstbildnis (1660)",
        "folder": "selbstbildnis-rembrandt-1660-4739"
      },
      {
        "id": "4669",
        "title": "Bal du moulin de la Galette (1876)",
        "folder": "bal-du-moulin-de-la-galette-pierre-auguste-renoir-1876-4669"
      },
      {
        "id": "4695",
        "title": "Die Bürger von Calais (1889)",
        "folder": "die-burger-von-calais-auguste-rodin-1889-4695"
      },
      {
        "id": "4682",
        "title": "Der Denker (1902)",
        "folder": "der-denker-auguste-rodin-1902-4682"
      },
      {
        "id": "4696",
        "title": "Die drei Grazien (1635)",
        "folder": "die-drei-grazien-peter-paul-rubens-1635-4696"
      },
      {
        "id": "4742",
        "title": "Selbstbildnis mit Strohhut (1912)",
        "folder": "selbstbildnis-mit-strohhut-egon-schiele-1912-4742"
      },
      {
        "id": "4670",
        "title": "Bathers at Asnières (1884)",
        "folder": "bathers-at-asnieres-georges-seurat-1884-4670"
      },
      {
        "id": "4668",
        "title": "Bacchus und Ariadne (1523)",
        "folder": "bacchus-und-ariadne-tizian-1523-4668"
      },
      {
        "id": "4752",
        "title": "Venus von Urbino (1538)",
        "folder": "venus-von-urbino-tizian-1538-4752"
      },
      {
        "id": "4736",
        "title": "Schiffbruch (1835)",
        "folder": "schiffbruch-j-m-w-turner-1835-4736"
      },
      {
        "id": "4675",
        "title": "Das kämpfende Temeraire (1839)",
        "folder": "das-kampfende-temeraire-j-m-w-turner-1839-4675"
      },
      {
        "id": "4693",
        "title": "Die Arnolfini-Hochzeit (1434)",
        "folder": "die-arnolfini-hochzeit-jan-van-eyck-1434-4693"
      },
      {
        "id": "4672",
        "title": "Caféterrasse bei Nacht (1888)",
        "folder": "cafeterrasse-bei-nacht-vincent-van-gogh-1888-4672"
      },
      {
        "id": "4745",
        "title": "Sternennacht über der Rhône (1888)",
        "folder": "sternennacht-uber-der-rhone-vincent-van-gogh-1888-4745"
      },
      {
        "id": "4704",
        "title": "Die Sternennacht (1889)",
        "folder": "die-sternennacht-vincent-van-gogh-1889-4704"
      },
      {
        "id": "4740",
        "title": "Selbstbildnis (1889)",
        "folder": "selbstbildnis-vincent-van-gogh-1889-4740"
      },
      {
        "id": "4727",
        "title": "Mühle in Auvers (1890)",
        "folder": "muhle-in-auvers-vincent-van-gogh-1890-4727"
      },
      {
        "id": "4733",
        "title": "Porträt des Dr. Gachet (1890)",
        "folder": "portrat-des-dr-gachet-vincent-van-gogh-1890-4733"
      },
      {
        "id": "4721",
        "title": "Las Meninas (1656)",
        "folder": "las-meninas-diego-velazquez-1656-4721"
      },
      {
        "id": "4667",
        "title": "Ansicht von Delft (1660)",
        "folder": "ansicht-von-delft-johannes-vermeer-1660-4667"
      },
      {
        "id": "4677",
        "title": "Das Mädchen mit dem Perlenohrring (1665)",
        "folder": "das-madchen-mit-dem-perlenohrring-johannes-vermeer-1665-4677"
      },
      {
        "id": "4665",
        "title": "Amerikanische Gotik (1930)",
        "folder": "amerikanische-gotik-grant-wood-1930-4665"
      },
      {
        "id": "4751",
        "title": "Venus von Milo (100 v. Chr.)",
        "folder": "venus-von-milo-unbekannter-kunstler-100-v-chr-4751"
      },
      {
        "id": "4734",
        "title": "Reiterstandbild des Marcus Aurelius (175)",
        "folder": "reiterstandbild-des-marcus-aurelius-unbekannter-kunstler-175-4734"
      },
      {
        "id": "4720",
        "title": "Laokoon und seine Söhne (60)",
        "folder": "laokoon-und-seine-sohne-unbekannter-kunstler-60-4720"
      },
      {
        "id": "4728",
        "title": "Nike von Samothrake (ca. 190 v. Chr.)",
        "folder": "nike-von-samothrake-unbekannter-kunstler-ca-190-v-chr-4728"
      },
      {
        "id": "4687",
        "title": "Der sterbende Gallier (ca. 230 v. Chr.)",
        "folder": "der-sterbende-gallier-unbekannter-kunstler-ca-230-v-chr-4687"
      }
    ]
  },
  "die-epochen-der-kunst": {
    "id": 68536,
    "slug": "die-epochen-der-kunst",
    "title": "Kunstepochen",
    "category": "Meisterwerke & Kunstepochen",
    "shortDesc": "Von Antike und Gotik über Renaissance, Barock und Romantik bis Bauhaus, Surrealismus und Pop Art.",
    "longDesc": "Reise durch die Epochen der Kunstgeschichte: Entdecke die Stilmerkmale, Weltanschauungen und architektonischen Meisterleistungen jeder Stilepoche.",
    "keyPoints": [
      "Mittelalter bis Barock: Gotik, Renaissance, Manierismus und Barock",
      "18. & 19. Jahrhundert: Rokoko, Klassizismus, Romantik, Realismus und Impressionismus",
      "Frühe Moderne: Jugendstil, Expressionismus, Kubismus, Fauvismus, Futurismus und Dada",
      "Moderne & Gegenwart: Surrealismus, Bauhaus, Konstruktivismus, Pop Art, Minimal Art und Street Art"
    ],
    "exercises": [
      {
        "id": "4784",
        "title": "Renaissance",
        "folder": "die-kunstepoche-renaissance-4784"
      },
      {
        "id": "4766",
        "title": "Barock",
        "folder": "die-kunstepoche-barock-4766"
      },
      {
        "id": "4785",
        "title": "Rokoko",
        "folder": "die-kunstepoche-rokoko-4785"
      },
      {
        "id": "4774",
        "title": "Klassizismus",
        "folder": "die-kunstepoche-klassizismus-4774"
      },
      {
        "id": "4786",
        "title": "Romatik",
        "folder": "die-kunstepoche-romantik-4786"
      },
      {
        "id": "4783",
        "title": "Realismus",
        "folder": "die-kunstepoche-realismus-4783"
      },
      {
        "id": "4773",
        "title": "Impressionismus",
        "folder": "die-kunstepoche-impressionismus-4773"
      },
      {
        "id": "4782",
        "title": "Postimpressionismus",
        "folder": "die-kunstepoche-postimpressionismus-4782"
      },
      {
        "id": "4769",
        "title": "Expressionismus",
        "folder": "die-kunstepoche-expressionismus-4769"
      },
      {
        "id": "4777",
        "title": "Kubismus",
        "folder": "die-kunstepoche-kubismus-4777"
      },
      {
        "id": "4771",
        "title": "Futurismus",
        "folder": "die-kunstepoche-futurismus-4771"
      },
      {
        "id": "4768",
        "title": "Dada",
        "folder": "die-kunstepoche-dada-4768"
      },
      {
        "id": "4789",
        "title": "Surrealismus",
        "folder": "die-kunstepoche-surrealismus-4789"
      },
      {
        "id": "4764",
        "title": "Abstrakte Kunst",
        "folder": "die-kunstepoche-abstrakte-kunst-4764"
      },
      {
        "id": "4776",
        "title": "Konzeptkunst",
        "folder": "die-kunstepoche-konzeptkunst-4776"
      },
      {
        "id": "4781",
        "title": "Pop Art",
        "folder": "die-kunstepoche-pop-art-4781"
      },
      {
        "id": "4779",
        "title": "Minimal Art",
        "folder": "die-kunstepoche-minimal-art-4779"
      },
      {
        "id": "4780",
        "title": "Neoexpressionismus",
        "folder": "die-kunstepoche-neoexpressionismus-4780"
      },
      {
        "id": "4787",
        "title": "Street Art",
        "folder": "die-kunstepoche-street-art-4787"
      },
      {
        "id": "4772",
        "title": "Gotik",
        "folder": "die-kunstepoche-gotik-4772"
      },
      {
        "id": "4778",
        "title": "Manierismus",
        "folder": "die-kunstepoche-manierismus-4778"
      },
      {
        "id": "4790",
        "title": "Symbolismus",
        "folder": "die-kunstepoche-symbolismus-4790"
      },
      {
        "id": "4770",
        "title": "Fauvismus",
        "folder": "die-kunstepoche-fauvismus-4770"
      },
      {
        "id": "4775",
        "title": "Konstruktivismus",
        "folder": "die-kunstepoche-konstruktivismus-4775"
      },
      {
        "id": "4788",
        "title": "Suprematismus",
        "folder": "die-kunstepoche-suprematismus-4788"
      },
      {
        "id": "4767",
        "title": "Bauhaus",
        "folder": "die-kunstepoche-bauhaus-4767"
      },
      {
        "id": "4765",
        "title": "Art Deco",
        "folder": "die-kunstepoche-art-deco-4765"
      }
    ]
  },
  "kunststile-und-ihre-entwicklung": {
    "id": 45308,
    "slug": "kunststile-und-ihre-entwicklung",
    "title": "Kunststile und ihre Entwicklung",
    "category": "Kunstrichtungen & Techniken",
    "shortDesc": "Postmoderne Kunst, Impressionismus, Expressionismus, Surrealismus und Umweltkunst.",
    "longDesc": "Wie entstehen und verändern sich Kunststile? Entdecke die theoretischen Hintergründe, gesellschaftlichen Antriebe und gestalterischen Prinzipien hinter den großen Stilrichtungen.",
    "keyPoints": [
      "Evolution der Stile: Wie Künstler auf vorangegangene Epochen reagierten und neue Wege erforschten",
      "Postmoderne Kunst: Pluralismus, Zitate, Ironie und Aufhebung von Gattungsgrenzen",
      "Umweltkunst (Land Art): Kunstwerke in und mit der Natur unter Verwendung natürlicher Materialien",
      "Surrealismus & Unterbewusstsein: Traumlogik und automatische Techniken (Écriture automatique)"
    ],
    "exercises": [
      {
        "id": "2688",
        "title": "Postmoderne Kunst",
        "folder": "postmoderne-kunst-2688"
      },
      {
        "id": "2681",
        "title": "Impressionismus",
        "folder": "impressionismus-2681"
      },
      {
        "id": "2680",
        "title": "Expressionismus",
        "folder": "expressionismus-2680"
      },
      {
        "id": "2693",
        "title": "Surrealismus",
        "folder": "surrealismus-2693"
      },
      {
        "id": "2695",
        "title": "Umweltkunst",
        "folder": "umweltkunst-2695"
      }
    ]
  },
  "kuenstlerische-techniken-und-medien": {
    "id": 45309,
    "slug": "kuenstlerische-techniken-und-medien",
    "title": "Künstlerische Techniken und Medien",
    "category": "Kunstrichtungen & Techniken",
    "shortDesc": "Digitale Kunst, Videokunst, Monochromie, Linien und Formen, Keramik, Glasuren und Töpferei.",
    "longDesc": "Vom klassischen Pinsel und Ton bis zum digitalen Grafiktablett und Videokunst: Entdecke die Vielfalt der künstlerischen Arbeitsweisen und Werkzeuge.",
    "keyPoints": [
      "Malerei & Grafik: Linienführung, Schraffuren, Monochromie und Farbauftrag",
      "Keramik & Bildhauerei: Tonverarbeitung, Drehen an der Töpferscheibe, Glasuren und Brenntechniken",
      "Digitale Medien: Pixel- und Vektorgrafik, digitale Bildbearbeitung und 3D-Modellierung",
      "Videokunst & Installation: Bewegtbild, Sounddesign und räumliche Inszenierung"
    ],
    "exercises": [
      {
        "id": "2679",
        "title": "Digitale Kunst",
        "folder": "digitale-kunst-2679"
      },
      {
        "id": "2696",
        "title": "Video-Kunst",
        "folder": "video-kunst-2696"
      },
      {
        "id": "2685",
        "title": "Monochromatische Kunst",
        "folder": "monochromatische-kunst-2685"
      },
      {
        "id": "2684",
        "title": "Linien und Formen",
        "folder": "linien-und-formen-2684"
      },
      {
        "id": "2683",
        "title": "Keramik-Glasuren und Oberflächenbehandlung",
        "folder": "keramik-glasuren-und-oberflachenbehandlung-2683"
      },
      {
        "id": "2682",
        "title": "Keramik und Töpferei",
        "folder": "keramik-und-topferei-2682"
      }
    ]
  },
  "darstellungsformen-in-der-kunst": {
    "id": 45310,
    "slug": "darstellungsformen-in-der-kunst",
    "title": "Darstellungsformen in der Kunst",
    "category": "Kunstrichtungen & Techniken",
    "shortDesc": "Stillleben, Stadtansichten, Selbstporträt, Tiermotive und Street Art.",
    "longDesc": "Von der klassischen Gattung des Stilllebens über Selbstbildnisse und Tiermalerei bis hin zur modernen Street Art im öffentlichen Raum.",
    "keyPoints": [
      "Stillleben: Arrangement unbelebter Gegenstände, Symbolik von Vergänglichkeit (Vanitas)",
      "Selbstporträt: Künstlerische Selbstbefragung, Identität und seelische Selbstdarstellung",
      "Stadtansichten (Veduten) & Landschaften: Erfassung von städtischem Raum, Licht und Architektur",
      "Tiermotive: Naturbeobachtung und mythologische Tierallegorien",
      "Street Art: Graffiti, Stencils (Schablonenkunst) und gesellschaftskritische Kunst im öffentlichen Raum (z. B. Banksy)"
    ],
    "exercises": [
      {
        "id": "2691",
        "title": "Stillleben",
        "folder": "stillleben-2691"
      },
      {
        "id": "2690",
        "title": "Stadtansichten",
        "folder": "stadtansichten-2690"
      },
      {
        "id": "2689",
        "title": "Selbstporträt",
        "folder": "selbstportrat-2689"
      },
      {
        "id": "2694",
        "title": "Tiermotive",
        "folder": "tiermotive-2694"
      },
      {
        "id": "2692",
        "title": "Street Art",
        "folder": "street-art-2692"
      }
    ]
  },
  "kunst-und-raeumliche-wahrnehmung": {
    "id": 45311,
    "slug": "kunst-und-raeumliche-wahrnehmung",
    "title": "Kunst und räumliche Wahrnehmung",
    "category": "Kunstrichtungen & Techniken",
    "shortDesc": "Perspektive, Raumillusion, persönlicher Ausdruck, Identität und Architektur.",
    "longDesc": "Wie erzeugt ein zweidimensionales Bild die Illusion von Tiefe? Lerne die Gesetzmäßigkeiten der Fluchtpunktperspektive, Farb- und Luftperspektive sowie architektonische Raumgestaltung kennen.",
    "keyPoints": [
      "Zentralperspektive: Fluchtpunkt, Horizontlinie und Fluchtlinien schaffen geometrische Raumtiefe",
      "Farb- und Luftperspektive: Warme Farben treten nach vorne, kühle bläuliche Farben weichen in den Hintergrund; Kontraste nehmen mit der Distanz ab",
      "Bedeutungsperspektive: In mittelalterlicher Kunst bestimmt die theologische Wichtigkeit die Figurengröße",
      "Architektur & Skulptur: Reale Dreidimensionalität, Proportionen und Raumwirkung"
    ],
    "exercises": [
      {
        "id": "2687",
        "title": "Perspektive",
        "folder": "perspektive-2687"
      },
      {
        "id": "2686",
        "title": "Persönlicher Ausdruck und Identität in der Kunst",
        "folder": "personlicher-ausdruck-und-identitat-in-der-kunst-2686"
      },
      {
        "id": "2678",
        "title": "Architektur",
        "folder": "architektur-2678"
      }
    ]
  }
};
