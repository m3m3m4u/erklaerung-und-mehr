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
  "Frühgeschichte, Antike & Mittelalter",
  "Renaissance & Manierismus",
  "Barock, Rokoko & Goldenes Zeitalter",
  "Klassizismus, Romantik & 19. Jahrhundert",
  "Impressionismus, Postimpressionismus & Spätmoderne",
  "Expressionismus, Wiener Moderne & Abstraktion",
  "Avantgarde des 20. Jahrhunderts: Kubismus, Dada & Bauhaus",
  "Zeitgenössische Kunst, Pop Art & Neue Medien",
  "Kunsttheorie, Techniken, Gattungen & Museen"
];

export const kunstTopics: Record<string, KunstTopic> = {
  "antike-und-fruehe-kunst": {
    "slug": "antike-und-fruehe-kunst",
    "title": "Prähistorische Kunst, Antike & Klassische Skulptur",
    "category": "Frühgeschichte, Antike & Mittelalter",
    "shortDesc": "Höhlenmalerei, griechische Plastik, Proportionen der Antike und Meisterwerke von Myron bis Laokoon.",
    "longDesc": "Die Kunst der Antike legte den Grundstein des abendländischen Kunstverständnisses: Von den Anfängen der Höhlenmalerei der Eiszeit über das klassische Schönheitsideal griechischer Bildhauer bis hin zur dramatischen Ausdruckskraft hellenistischer Meisterwerke und römischer Porträtstatuen.",
    "keyPoints": [
      "Prähistorische Anfänge: Höhlenmalereien (Löwen, Bisons, Handabdrücke) als magisch-kultische Jagd- und Fruchtbarkeitsrituale",
      "Klassisches Schönheitsideal: Stand- und Spielbein (Kontrapost), athletische Harmonie und Kanon der Proportionen (Polykleit, Myron)",
      "Hellenistische Dramatik: Emotionale Expressivität, Schmerz und virtuose Bewegung (Laokoon-Gruppe, Nike von Samothrake)",
      "Römische Bildhauerei: Realistische Porträtbüsten, historische Reliefs und monumentale Reiterstandbilder (Marcus Aurelius)"
    ],
    "exercises": [
      {
        "id": "2817",
        "title": "Die Höhle der Löwen – Prähistorische Höhlenmalerei",
        "folder": "die-hohle-der-lowen-von-unbekannter-kunstler-ca-30-000-32-000-v-chr-2817"
      },
      {
        "id": "4707",
        "title": "Diskuswerfer – Myron (Griechische Klassik)",
        "folder": "diskuswerfer-myron-ca-450-v-chr-4707"
      },
      {
        "id": "4687",
        "title": "Der sterbende Gallier – Hellenistische Skulptur",
        "folder": "der-sterbende-gallier-unbekannter-kunstler-ca-230-v-chr-4687"
      },
      {
        "id": "4728",
        "title": "Nike von Samothrake – Meisterwerk des Hellenismus",
        "folder": "nike-von-samothrake-unbekannter-kunstler-ca-190-v-chr-4728"
      },
      {
        "id": "4751",
        "title": "Venus von Milo – Vollendung der Antike",
        "folder": "venus-von-milo-unbekannter-kunstler-100-v-chr-4751"
      },
      {
        "id": "4720",
        "title": "Laokoon und seine Söhne – Dramatik und Expressivität",
        "folder": "laokoon-und-seine-sohne-unbekannter-kunstler-60-4720"
      },
      {
        "id": "4734",
        "title": "Reiterstandbild des Marcus Aurelius – Römische Plastik",
        "folder": "reiterstandbild-des-marcus-aurelius-unbekannter-kunstler-175-4734"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Antike+Kunst+Skulptur&t=3752"
  },
  "mittelalter-romanik-und-gotik": {
    "slug": "mittelalter-romanik-und-gotik",
    "title": "Mittelalterliche Kunst: Romanik, Gotik & Sakralbauten",
    "category": "Frühgeschichte, Antike & Mittelalter",
    "shortDesc": "Romanische Rundbögen, gotische Kathedralen, christliche Symbolik, Jan van Eyck und Hieronymus Bosch.",
    "longDesc": "Das europäische Mittelalter brachte architektonische Meisterleistungen wie die gotischen Kathedralen hervor, die den Menschen dem Himmel näher bringen sollten. In der Spätgotik und frühen Renaissance entwickelten altniederländische Meister wie Jan van Eyck und Hieronymus Bosch faszinierende, detailreiche Bildwelten voller Symbolik.",
    "keyPoints": [
      "Romanik: Dicke Mauern, Rundbögen, Wehrhaftigkeit, Würfelkapitelle und monumentale Wandmalereien",
      "Gotik: Spitzbögen, Kreuzrippengewölbe, Strebebögen, monumentale Glasfenster und Auflösung der Wände ins Licht",
      "Sakralarchitektur: Basilika, Kathedralen, Vierung, Querschiff und die theologische Symbolik des Lichts",
      "Altniederländische Meisterschaft: Jan van Eycks Öllasurtechnik, Mikrokosmos der Details und verborgene Symbole",
      "Hieronymus Bosch & Pieter Bruegel: Apokalyptische Visionen, Moralallegorien und das pralle Volksleben"
    ],
    "exercises": [
      {
        "id": "4772",
        "title": "Die Kunstepoche Gotik",
        "folder": "die-kunstepoche-gotik-4772"
      },
      {
        "id": "3112",
        "title": "Romanik und Gotik im Epochenvergleich",
        "folder": "romanik-und-gotik-3112"
      },
      {
        "id": "6431",
        "title": "Architektur von Kirchen und Kathedralen",
        "folder": "architektur-von-kirchen-6431"
      },
      {
        "id": "4693",
        "title": "Die Arnolfini-Hochzeit – Jan van Eyck (1434)",
        "folder": "die-arnolfini-hochzeit-jan-van-eyck-1434-4693"
      },
      {
        "id": "4683",
        "title": "Der Garten der Lüste – Hieronymus Bosch (1500)",
        "folder": "der-garten-der-luste-hieronymus-bosch-1500-4683"
      },
      {
        "id": "4691",
        "title": "Der Triumph des Todes – Pieter Bruegel der Ältere (1562)",
        "folder": "der-triumph-des-todes-pieter-bruegel-der-ltere-1562-4691"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Gotik+Romanik+Mittelalter&t=3752"
  },
  "renaissance-meister-und-florenz": {
    "slug": "renaissance-meister-und-florenz",
    "title": "Früh- und Hochrenaissance: Botticelli, Dürer & Florenz",
    "category": "Renaissance & Manierismus",
    "shortDesc": "Wiedergeburt der Antike, Zentralperspektive, Albrecht Dürer und Sandro Botticellis mythologische Poesie.",
    "longDesc": "Die Renaissance (Wiedergeburt) stellte den Menschen und die Naturbeobachtung ins Zentrum des Schaffens. In Florenz und Nürnberg schufen Meister wie Sandro Botticelli und Albrecht Dürer unsterbliche Gemälde, bahnbrechende Kupferstiche und erforschten die mathematische Gesetzmäßigkeit der Perspektive.",
    "keyPoints": [
      "Wiedergeburt der Antike: Rückbesinnung auf antike Mythologie, Philosophie, Anatomie und Humanismus",
      "Erfindung der Zentralperspektive: Filippo Brunelleschi und Leon Battista Alberti revolutionieren die Raumdarstellung",
      "Albrecht Dürer (1471–1528): Kupferstich- und Holzschnitt-Pionier, Meister des Selbstporträts und Naturstudien (Feldhase)",
      "Sandro Botticelli (1445–1510): Poetische Eleganz, Linienführung und Renaissance-Platonismus in Florenz",
      "Wandel des Künstlerbildes: Vom einfachen Handwerker zum geachteten, intellektuellen Schöpfergeist"
    ],
    "exercises": [
      {
        "id": "4784",
        "title": "Die Kunstepoche Renaissance",
        "folder": "die-kunstepoche-renaissance-4784"
      },
      {
        "id": "1354",
        "title": "Albrecht Dürer – Biografie und Meisterwerke",
        "folder": "albrecht-durer-1354"
      },
      {
        "id": "4741",
        "title": "Selbstbildnis als Künstler – Albrecht Dürer (1498)",
        "folder": "selbstbildnis-als-kunstler-albrecht-durer-1498-4741"
      },
      {
        "id": "1400",
        "title": "Sandro Botticelli – Leben und Werk",
        "folder": "sandro-botticelli-1400"
      },
      {
        "id": "4699",
        "title": "Die Geburt der Venus – Sandro Botticelli (1486)",
        "folder": "die-geburt-der-venus-sandro-botticelli-1486-4699"
      },
      {
        "id": "4718",
        "title": "La Primavera (Der Frühling) – Sandro Botticelli (1482)",
        "folder": "la-primavera-sandro-botticelli-1482-4718"
      },
      {
        "id": "4750",
        "title": "Venus und Mars – Sandro Botticelli (1480)",
        "folder": "venus-und-mars-sandro-botticelli-1480-4750"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Renaissance+Duerer+Botticelli&t=3752"
  },
  "leonardo-da-vinci-und-universalgenies": {
    "slug": "leonardo-da-vinci-und-universalgenies",
    "title": "Leonardo da Vinci: Universalgenie, Mona Lisa & Abendmahl",
    "category": "Renaissance & Manierismus",
    "shortDesc": "Sfumato-Technik, Vitruvianischer Mensch, Das letzte Abendmahl und das rätselhafte Lächeln der Mona Lisa.",
    "longDesc": "Leonardo da Vinci (1452–1519) verkörperte wie kein anderer das Ideal des Renaissance-Universalgenies (Uomo Universale): Maler, Anatom, Ingenieur, Naturforscher und Philosoph in einer Person. Seine Gemälde bestechen durch psychologische Tiefe und die meisterhafte Sfumato-Schleiertechnik.",
    "keyPoints": [
      "Universalgenie: Verbindung von Naturbeobachtung, Anatomiestudien, technischer Erfindungskraft und bildender Kunst",
      "Sfumato: Rauchige Übergänge ohne harte Konturen verleihen Gesichtern und Landschaften lebendige Sanftheit",
      "Mona Lisa (La Gioconda): Das berühmteste Porträt der Kunstgeschichte mit geheimnisvollem Lächeln und atmosphärischer Landschaft",
      "Das letzte Abendmahl (Santa Maria delle Grazie): Psychologische Studie der zwölf Apostel im Moment der Verratsankündigung",
      "Der vitruvianische Mensch: Perfekte Harmonie von menschlichem Körper, Geometrie (Kreis und Quadrat) und Kosmos"
    ],
    "exercises": [
      {
        "id": "4761",
        "title": "Mona Lisa – Leonardo da Vinci (1503)",
        "folder": "mona-lisa-leonardo-da-vinci-1503-4761"
      },
      {
        "id": "4676",
        "title": "Das letzte Abendmahl – Leonardo da Vinci (1498)",
        "folder": "das-letzte-abendmahl-leonardo-da-vinci-1498-4676"
      },
      {
        "id": "4754",
        "title": "Vitruvianischer Mensch – Leonardo da Vinci (1490)",
        "folder": "vitruvianischer-mensch-leonardo-da-vinci-1490-4754"
      },
      {
        "id": "4666",
        "title": "Anbetung der Könige – Leonardo da Vinci (1481)",
        "folder": "anbetung-der-konige-leonardo-da-vinci-1481-4666"
      },
      {
        "id": "4724",
        "title": "Madonna Litta – Leonardo da Vinci (1490)",
        "folder": "madonna-litta-leonardo-da-vinci-1490-4724"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Leonardo+da+Vinci+Mona+Lisa&t=3752"
  },
  "michelangelo-raffael-und-hochrenaissance": {
    "slug": "michelangelo-raffael-und-hochrenaissance",
    "title": "Michelangelo Buonarroti & Raffael Sanzio: Hochrenaissance",
    "category": "Renaissance & Manierismus",
    "shortDesc": "David, Sixtinische Kapelle, Pietà, Schule von Athen und die Vollendung der Hochrenaissance in Rom.",
    "longDesc": "In Rom trafen unter den Päpsten die größten Genies der Hochrenaissance aufeinander: Michelangelo, der Titan der Bildhauerei und Deckenmalerei, und Raffael, der Meister der klassischen Harmonie, Anmut und Raumkomposition. Ihre Schöpfungen prägen die Kunstgeschichte bis heute.",
    "keyPoints": [
      "Michelangelo Buonarroti (1475–1564): Bildhauer, Maler, Architekt und Dichter – Suche nach der menschlichen Gestalt im Marmor",
      "Skulpturen: David (Ideal der florentinischen Freiheit und Anatomie) und die herzzerreißende Pietà im Petersdom",
      "Sixtinische Deckenfresken & Jüngstes Gericht: Monumentale Schöpfungsgeschichte, Sibyllen, Propheten und die dramatische Weltgerichtsvision",
      "Raffael Sanzio (1483–1520): Meister der heiteren Klarheit, Madonnenbilder und der Ausgewogenheit von Farbe und Form",
      "Die Schule von Athen (Stanza della Segnatura): Die antiken Philosophen Platon, Aristoteles und Sokrates in vollendeter Renaissance-Architektur"
    ],
    "exercises": [
      {
        "id": "1388",
        "title": "Michelangelo Buonarroti – Universalbildhauer der Renaissance",
        "folder": "michelangelo-1388"
      },
      {
        "id": "4678",
        "title": "David – Michelangelo (1504)",
        "folder": "david-michelangelo-1504-4678"
      },
      {
        "id": "4731",
        "title": "Pietà – Michelangelo (1499)",
        "folder": "pieta-michelangelo-1499-4731"
      },
      {
        "id": "4697",
        "title": "Die Erschaffung Adams – Michelangelo (1512)",
        "folder": "die-erschaffung-adams-michelangelo-1512-4697"
      },
      {
        "id": "2810",
        "title": "Deckenfresken der Sixtinischen Kapelle – Michelangelo",
        "folder": "die-erschaffung-von-eva-sistine-chapel-ceiling-von-michelangelo-1508-1512-2810"
      },
      {
        "id": "4757",
        "title": "Das Jüngste Gericht – Michelangelo (1541)",
        "folder": "das-jungste-gericht-michelangelo-1541-4757"
      },
      {
        "id": "4703",
        "title": "Die Schule von Athen – Raffael (1511)",
        "folder": "die-schule-von-athen-raffael-1511-4703"
      },
      {
        "id": "4744",
        "title": "Sixtinische Madonna – Raffael (1512)",
        "folder": "sixtinische-madonna-raffael-1512-4744"
      },
      {
        "id": "4749",
        "title": "Triumph der Galatea – Raffael (1512)",
        "folder": "triumph-der-galatea-raffael-1512-4749"
      },
      {
        "id": "4723",
        "title": "Madonna della Seggiola – Raffael (1559)",
        "folder": "madonna-della-seggiola-raffael-1559-4723"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Michelangelo+Raffael+Sixtinische+Kapelle&t=3752"
  },
  "venezianische-malerei-und-manierismus": {
    "slug": "venezianische-malerei-und-manierismus",
    "title": "Venezianische Schule & Manierismus: Tizian & Giorgione",
    "category": "Renaissance & Manierismus",
    "shortDesc": "Farbenpracht Venedigs, Giorgiones Poesie, Tizians Sinnlichkeit und manieristische Raumverzerrungen.",
    "longDesc": "Während Florenz und Rom die Linie und Kontur (Disegno) betonten, feierte Venedig die Macht und Sinnlichkeit der reinen Farbe (Colorito). Tizian und Giorgione schufen leuchtende Atmosphären, während der Manierismus die klassischen Harmonien durch überlängte Figuren und bizarre Eleganz aufbrach.",
    "keyPoints": [
      "Colorito vs. Disegno: Das venezianische Licht, atmosphärische Landschaften und warmer Farbauftrag",
      "Giorgione (1478–1510): Rätselhafte Stimmungslandschaften und die ruhende Weiblichkeit (Schlafende Venus)",
      "Tizian (1488–1576): Fürst der venezianischen Malerei, Meister der Porträts und Mythologien (Venus von Urbino)",
      "Der Manierismus: Abkehr von perfekter Naturharmonie zugunsten von Figura Serpentinata, überstreckten Proportionen und Affektiertheit",
      "Parmigianino: Meister des Manierismus (Madonna mit dem langen Hals)"
    ],
    "exercises": [
      {
        "id": "4778",
        "title": "Die Kunstepoche Manierismus",
        "folder": "die-kunstepoche-manierismus-4778"
      },
      {
        "id": "4737",
        "title": "Schlafende Venus – Giorgione (1510)",
        "folder": "schlafende-venus-giorgione-1510-4737"
      },
      {
        "id": "4752",
        "title": "Venus von Urbino – Tizian (1538)",
        "folder": "venus-von-urbino-tizian-1538-4752"
      },
      {
        "id": "4668",
        "title": "Bacchus und Ariadne – Tizian (1523)",
        "folder": "bacchus-und-ariadne-tizian-1523-4668"
      },
      {
        "id": "4725",
        "title": "Madonna mit dem langen Hals – Parmigianino (1534)",
        "folder": "madonna-mit-dem-langen-hals-parmigianino-1534-4725"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Tizian+Venedig+Manierismus&t=3752"
  },
  "barock-und-chiaroscuro": {
    "slug": "barock-und-chiaroscuro",
    "title": "Barock in Rom & Europa: Caravaggio, Gentileschi & Bernini",
    "category": "Barock, Rokoko & Goldenes Zeitalter",
    "shortDesc": "Chiaroscuro, theatralisches Licht, Caravaggios Radikalismus, Artemisia Gentileschi und Berninis Marmorzauber.",
    "longDesc": "Dramatik, extreme Hell-Dunkel-Kontraste (Chiaroscuro) und überwältigende Emotionalität prägen die Kunst des Barocks. Caravaggio schockierte und faszinierte mit ungeschöntem Realismus, Artemisia Gentileschi setzte triumphale weibliche Akzente, Bernini hauchte Marmor Leben ein und Rubens entfachte barocke Farbenfeste.",
    "keyPoints": [
      "Chiaroscuro / Tenebrismus: Scheinwerferartiges Licht bricht aus tiefstem Dunkel hervor und betont den dramatischen Moment",
      "Caravaggio (1571–1610): Schockierender Realismus mit einfachen Menschen als Heiligenmodellen",
      "Artemisia Gentileschi (1593–1653): Kühne barocke Heldin, psychologische Wucht und heroische Motive (Judith enthauptet Holofernes)",
      "Gian Lorenzo Bernini (1598–1680): Bildhauer und Architekt Roms, meisterhafte Illusion von schwebendem Stein und Ekstase",
      "Peter Paul Rubens (1577–1640): Dynamik, opulente Körperformen und flämische Vitalität",
      "Diego Velázquez (1599–1660): Hofmaler in Madrid, meisterhaftes Spiel mit Blickachsen und Illusion (Las Meninas)"
    ],
    "exercises": [
      {
        "id": "4766",
        "title": "Die Kunstepoche Barock",
        "folder": "die-kunstepoche-barock-4766"
      },
      {
        "id": "1359",
        "title": "Caravaggio – Meister des Lichts und Schattens",
        "folder": "caravaggio-1359"
      },
      {
        "id": "1357",
        "title": "Artemisia Gentileschi – Barocke Meisterin",
        "folder": "artemisia-gentileschi-1357"
      },
      {
        "id": "4714",
        "title": "Judith und Holofernes – Artemisia Gentileschi (1612)",
        "folder": "judith-und-holofernes-artemisia-gentileschi-1612-4714"
      },
      {
        "id": "4708",
        "title": "Ekstase der heiligen Teresa – Gian Lorenzo Bernini (1652)",
        "folder": "ekstase-der-heiligen-teresa-gian-lorenzo-bernini-1652-4708"
      },
      {
        "id": "1393",
        "title": "Peter Paul Rubens – Flämischer Barockfürst",
        "folder": "peter-paul-rubens-1393"
      },
      {
        "id": "4696",
        "title": "Die drei Grazien – Peter Paul Rubens (1635)",
        "folder": "die-drei-grazien-peter-paul-rubens-1635-4696"
      },
      {
        "id": "1369",
        "title": "Diego Velázquez – Der spanische Hofmaler",
        "folder": "diego-velazquez-1369"
      },
      {
        "id": "4721",
        "title": "Las Meninas – Diego Velázquez (1656)",
        "folder": "las-meninas-diego-velazquez-1656-4721"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Barock+Caravaggio+Bernini&t=3752"
  },
  "goldenes-zeitalter-der-niederlande": {
    "slug": "goldenes-zeitalter-der-niederlande",
    "title": "Goldenes Zeitalter & Rokoko: Rembrandt, Vermeer & Fragonard",
    "category": "Barock, Rokoko & Goldenes Zeitalter",
    "shortDesc": "Die Nachtwache, Rembrandts Selbstporträts, Vermeers Perlenohrring, Rokoko und Schloss Nymphenburg.",
    "longDesc": "Im 17. Jahrhundert erlebte die niederländische Republik eine beispiellose Blütezeit der bürgerlichen Malerei: Rembrandt van Rijn erforschte die seelische Tiefe des Menschen, während Johannes Vermeer die Magie des ruhigen Alltagslichts festhielt. Im 18. Jahrhundert folgte das verspielte, pastellfarbene Rokoko.",
    "keyPoints": [
      "Das Goldene Zeitalter (Gouden Eeuw): Bürgertum als Kunstauftraggeber statt Kirche und Adel",
      "Rembrandt van Rijn (1606–1669): Genie der Gruppenporträts (Die Nachtwache), Helldunkel und schonungslose Selbstbeobachtung",
      "Johannes Vermeer (1632–1675): Delft, meisterhafte Lichtreflexe, Ultramarinblau und intime Interieurszenen",
      "Rokoko: Galante Feste, pastorale Idylle, Asymmetrie, Rocaillen und heitere Verspieltheit (Fragonards Die Schaukel)",
      "Barockarchitektur: Prunkvolle Schlossanlagen, Spiegelsäle, weitläufige Parks und barocke Residenzen"
    ],
    "exercises": [
      {
        "id": "1398",
        "title": "Rembrandt van Rijn – Biografie und Meisterwerke",
        "folder": "rembrandt-van-rijn-1398"
      },
      {
        "id": "4702",
        "title": "Die Nachtwache – Rembrandt (1642)",
        "folder": "die-nachtwache-rembrandt-1642-4702"
      },
      {
        "id": "4759",
        "title": "Die Anatomie des Dr. Tulp – Rembrandt (1632)",
        "folder": "die-anatomie-des-dr-tulp-rembrandt-1633-4759"
      },
      {
        "id": "4692",
        "title": "Die Anatomie des Dr. Tulp – Interaktive Analyse",
        "folder": "die-anatomie-des-dr-tulp-rembrandt-1632-4692"
      },
      {
        "id": "4739",
        "title": "Selbstbildnis – Rembrandt (1660)",
        "folder": "selbstbildnis-rembrandt-1660-4739"
      },
      {
        "id": "4677",
        "title": "Das Mädchen mit dem Perlenohrring – Johannes Vermeer (1665)",
        "folder": "das-madchen-mit-dem-perlenohrring-johannes-vermeer-1665-4677"
      },
      {
        "id": "4667",
        "title": "Ansicht von Delft – Johannes Vermeer (1660)",
        "folder": "ansicht-von-delft-johannes-vermeer-1660-4667"
      },
      {
        "id": "4785",
        "title": "Die Kunstepoche Rokoko",
        "folder": "die-kunstepoche-rokoko-4785"
      },
      {
        "id": "4748",
        "title": "The Swing (Die Schaukel) – Jean-Honoré Fragonard (1767)",
        "folder": "the-swing-jean-honore-fragonard-1767-4748"
      },
      {
        "id": "schloss-nymphenburg-ein-barockes-meisterwerk",
        "title": "Schloss Nymphenburg – Barockes Gesamtkunstwerk",
        "folder": "schloss-nymphenburg-ein-barockes-meisterwerk"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rembrandt+Vermeer+Rokoko&t=3752"
  },
  "klassizismus-und-historienmalerei": {
    "slug": "klassizismus-und-historienmalerei",
    "title": "Klassizismus & Französische Revolution: Jacques-Louis David",
    "category": "Klassizismus, Romantik & 19. Jahrhundert",
    "shortDesc": "Klarheit, Vernunft, Tugendideal, Schwur der Horatier, Tod des Marat und die Krönung Napoleons.",
    "longDesc": "Als Gegenbewegung zum verspielten Rokoko forderte der Klassizismus eine Rückkehr zu antiker Strenge, bürgerlichen Tugenden und edler Einfalt. Jacques-Louis David wurde zum führenden Maler der Französischen Revolution und zum Hofmaler Napoleons, dessen monumentale Historienbilder Weltruhm erlangten.",
    "keyPoints": [
      "Klassizismus: 'Edle Einfalt, stille Größe' (J.J. Winckelmann), geometrische Klarheit und geschlossene Konturen",
      "Künstler im Dienst der Revolution: Kunst als politisches Erziehungsmittel für Freiheit, Vaterlandsliebe und Bürgerstolz",
      "Der Schwur der Horatier (1784): Das Manifest des Klassizismus – heroische Entschlossenheit vs. weichende Trauer",
      "Der Tod des Marat (1793): Sakrale Verklärung eines ermordeten Revolutionsführers zur säkularen Ikone",
      "Die Krönung Napoleons (1807): Monumentale Kaiserpropaganda im Louvre voller Prunk, Detailgenauigkeit und politischer Selbstinszenierung"
    ],
    "exercises": [
      {
        "id": "4774",
        "title": "Die Kunstepoche Klassizismus",
        "folder": "die-kunstepoche-klassizismus-4774"
      },
      {
        "id": "4686",
        "title": "Der Schwur der Horatier – Jacques-Louis David (1784)",
        "folder": "der-schwur-der-horatier-jacques-louis-david-1784-4686"
      },
      {
        "id": "4690",
        "title": "Der Tod des Sokrates – Jacques-Louis David (1787)",
        "folder": "der-tod-des-sokrates-jacques-louis-david-1787-4690"
      },
      {
        "id": "4689",
        "title": "Der Tod des Marat – Jacques-Louis David (1793)",
        "folder": "der-tod-des-marat-jacques-louis-david-1793-4689"
      },
      {
        "id": "4701",
        "title": "Die Krönung Napoleons – Jacques-Louis David (1807)",
        "folder": "die-kronung-napoleons-jacques-louis-david-1807-4701"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Klassizismus+Jacques-Louis+David&t=3752"
  },
  "romantik-und-landschaftsmalerei": {
    "slug": "romantik-und-landschaftsmalerei",
    "title": "Die Kunstepoche Romantik: Caspar David Friedrich & Turner",
    "category": "Klassizismus, Romantik & 19. Jahrhundert",
    "shortDesc": "Wanderer über dem Nebelmeer, Mönch am Meer, Naturmystik, J.M.W. Turner und Hokusais Welle.",
    "longDesc": "Die Romantik wandte sich gegen den reinen Rationalismus der Aufklärung und stellte Gefühl, Sehnsucht, Naturmystik und das Unendliche ins Zentrum. Caspar David Friedrich erfand die Seelenlandschaft mit einsamen Rückenfiguren, während J.M.W. Turner in England die entfesselten Naturgewalten in Licht und Nebel auflöste.",
    "keyPoints": [
      "Die Romantik: Hinwendung zum Unbewussten, zur Nacht, zur Religion und zur erhabenen, unbezähmbaren Natur",
      "Caspar David Friedrich (1774–1840): Die Rückenfigur als Brücke für den Betrachter ins Unendliche (Wanderer über dem Nebelmeer)",
      "Naturmetaphorik: Ruinen, Nebel, Eisschollen und Kreidefelsen als Sinnbilder für Vergänglichkeit, Tod und Hoffnung",
      "J.M.W. Turner (1775–1851): Der 'Maler des Lichts', Vorläufer der Abstraktion durch lodernde Farbstrudel und Dampf",
      "Ostasiatische Romantik & Wellenmotiv: Katsushika Hokusai und der Einfluss des japanischen Farbholzschnitts (Japonismus)"
    ],
    "exercises": [
      {
        "id": "4786",
        "title": "Die Kunstepoche Romantik",
        "folder": "die-kunstepoche-romantik-4786"
      },
      {
        "id": "4755",
        "title": "Wanderer über dem Nebelmeer – Caspar David Friedrich (1818)",
        "folder": "wanderer-uber-dem-nebelmeer-caspar-david-friedrich-1818-4755"
      },
      {
        "id": "4726",
        "title": "Mönch am Meer – Caspar David Friedrich (1808)",
        "folder": "monch-am-meer-caspar-david-friedrich-1808-4726"
      },
      {
        "id": "4673",
        "title": "Das Eismeer (Die gescheiterte Hoffnung) – Caspar David Friedrich (1823)",
        "folder": "das-eismeer-caspar-david-friedrich-1823-4673"
      },
      {
        "id": "4736",
        "title": "Schiffbruch – J.M.W. Turner (1835)",
        "folder": "schiffbruch-j-m-w-turner-1835-4736"
      },
      {
        "id": "4675",
        "title": "Das kämpfende Temeraire – J.M.W. Turner (1839)",
        "folder": "das-kampfende-temeraire-j-m-w-turner-1839-4675"
      },
      {
        "id": "4700",
        "title": "Die große Welle vor Kanagawa – Katsushika Hokusai (1831)",
        "folder": "die-groese-welle-vor-kanagawa-katsushika-hokusai-1831-4700"
      },
      {
        "id": "4756",
        "title": "Ophelia – John Everett Millais (Präraffaeliten, 1851)",
        "folder": "a-sunday-afternoon-on-the-island-of-la-grande-jatte-georges-seurat-1887-4756"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Romantik+Caspar+David+Friedrich+Turner&t=3752"
  },
  "revolution-realismus-und-goya": {
    "slug": "revolution-realismus-und-goya",
    "title": "Umbruch zur Moderne: Goya, Delacroix, Realismus & Rodin",
    "category": "Klassizismus, Romantik & 19. Jahrhundert",
    "shortDesc": "Goyas Kriegsgreuel, Delacroix' Barrikaden, Realismus ohne Illusion und Rodins Der Denker.",
    "longDesc": "Das 19. Jahrhundert war geprägt von Revolutionen, Kriegen und industriellem Wandel. Francisco Goya brach radikal mit höfischer Schmeichelei, Théodore Géricault und Eugène Delacroix brachten das Drama der Wirklichkeit auf Großformate, der Realismus zeigte das harte Leben der Arbeiterklasse und Auguste Rodin befreite die Bildhauerei in die Moderne.",
    "keyPoints": [
      "Francisco Goya (1746–1828): Schöpfer der modernen Kunst, Anklage von Kriegsgreueln (Der 3. Mai 1808) und düstere Pinturas Negras",
      "Romantische Revolution: Eugène Delacroix' 'Die Freiheit führt das Volk' als weltweites Symbol für den Freiheitskampf",
      "Théodore Géricaults 'Das Floß der Medusa': Ein reales Schiffswrack als Anklage gegen Inkompetenz und gesellschaftliches Versagen",
      "Realismus: Wahrheit statt Verklärung – Darstellung einfacher Bauern, Arbeiter und gesellschaftlicher Missstände",
      "Auguste Rodin (1840–1917): Expressive Modellierung, unfertige Oberflächen (Non-Finito) und existenzielle Tiefe (Der Denker)"
    ],
    "exercises": [
      {
        "id": "4783",
        "title": "Die Kunstepoche Realismus",
        "folder": "die-kunstepoche-realismus-4783"
      },
      {
        "id": "4679",
        "title": "Der 3. Mai 1808 – Francisco Goya (1814)",
        "folder": "der-3-mai-1808-francisco-goya-1814-4679"
      },
      {
        "id": "4735",
        "title": "Saturn verschlingt seinen Sohn – Francisco Goya (1819)",
        "folder": "saturn-verschlingt-seinen-sohn-francisco-goya-1819-4735"
      },
      {
        "id": "4674",
        "title": "Das Floß der Medusa – Théodore Géricault (1819)",
        "folder": "das-floes-der-medusa-theodore-gericault-1819-4674"
      },
      {
        "id": "4698",
        "title": "Die Freiheit führt das Volk – Eugène Delacroix (1830)",
        "folder": "die-freiheit-fuhrt-das-volk-eugene-delacroix-1830-4698"
      },
      {
        "id": "1358",
        "title": "Auguste Rodin – Bahnbrecher der modernen Plastik",
        "folder": "auguste-rodin-1358"
      },
      {
        "id": "4682",
        "title": "Der Denker – Auguste Rodin (1902)",
        "folder": "der-denker-auguste-rodin-1902-4682"
      },
      {
        "id": "4695",
        "title": "Die Bürger von Calais – Auguste Rodin (1889)",
        "folder": "die-burger-von-calais-auguste-rodin-1889-4695"
      },
      {
        "id": "4790",
        "title": "Die Kunstepoche Symbolismus",
        "folder": "die-kunstepoche-symbolismus-4790"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Realismus+Goya+Delacroix+Rodin&t=3752"
  },
  "impressionismus-und-lichtmalerei": {
    "slug": "impressionismus-und-lichtmalerei",
    "title": "Impressionismus & Pleinairmalerei: Claude Monet & Édouard Manet",
    "category": "Impressionismus, Postimpressionismus & Spätmoderne",
    "shortDesc": "Impression Sonnenaufgang, Seerosen, Pleinairmalerei, Frühstück im Grünen und die Revolution der Farbe.",
    "longDesc": "Der Impressionismus revolutionierte die Malerei durch die Abkehr von starren Atelierregeln: Künstler malten unter freiem Himmel (En plein air), fingen den flüchtigen Moment des Sonnenlichts mit sichtbaren Pinselstrichen ein und verzichteten auf schwarze Schatten. Édouard Manet rüttelte den Pariser Salon auf, während Claude Monet die Serie meisterhaft kultivierte.",
    "keyPoints": [
      "Impressionismus (1872): Namensgebend durch Monets 'Impression, soleil levant' – Skizzenhafter Farbauftrag fängt den Augenblick ein",
      "Pleinairmalerei: Erfindung der Tubenfarben ermöglicht das Malen direkt vor dem Motiv in der freien Natur",
      "Optische Farbmischung: Reine Farben nebeneinander gesetzt verschmelzen erst im Auge des Betrachters",
      "Édouard Manet (1832–1883): Wegbereiter der Moderne, Tabubruch mit 'Frühstück im Grünen' und 'Olympia'",
      "Claude Monet (1840–1926): Meister der Serienmalerei (Kathedrale von Rouen, Heuschober, Seerosengarten in Giverny)"
    ],
    "exercises": [
      {
        "id": "4773",
        "title": "Die Kunstepoche Impressionismus",
        "folder": "die-kunstepoche-impressionismus-4773"
      },
      {
        "id": "1360",
        "title": "Claude Monet – Pionier des Impressionismus",
        "folder": "claude-monet-1360"
      },
      {
        "id": "4713",
        "title": "Impression, Sonnenaufgang – Claude Monet (1872)",
        "folder": "impression-sonnenaufgang-claude-monet-1872-4713"
      },
      {
        "id": "4738",
        "title": "Seerosen – Claude Monet (1906)",
        "folder": "seerosen-claude-monet-1906-4738"
      },
      {
        "id": "4710",
        "title": "Frühstück im Grünen – Édouard Manet (1863)",
        "folder": "fruhstuck-im-grunen-douard-manet-1863-4710"
      },
      {
        "id": "4730",
        "title": "Olympia – Édouard Manet (1863)",
        "folder": "olympia-douard-manet-1863-4730"
      },
      {
        "id": "2812",
        "title": "Die Erschießung des Kaisers Maximilian – Édouard Manet (1867)",
        "folder": "die-erschieesung-von-kaiser-maximilian-von-douard-manet-1867-2812"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Impressionismus+Monet+Manet&t=3752"
  },
  "spaetimpressionismus-und-pointillismus": {
    "slug": "spaetimpressionismus-und-pointillismus",
    "title": "Spätimpressionismus & Pointillismus: Degas, Renoir & Seurat",
    "category": "Impressionismus, Postimpressionismus & Spätmoderne",
    "shortDesc": "Tanzende Ballerinnen, Lebensfreude bei Renoir, Georges Seurats Punkttechnik und Farbzerlegung.",
    "longDesc": "Während Claude Monet die Natur erforschte, wandten sich Edgar Degas und Pierre-Auguste Renoir dem pulsierenden Pariser Stadtleben zu: Bewegung auf der Ballettbühne, Pferderennen und sommerliche Tanzgesellschaften. Georges Seurat und Paul Signac begründeten den Pointillismus (Divisionismus) auf streng wissenschaftlicher Farbtheorie.",
    "keyPoints": [
      "Edgar Degas (1834–1917): Meister des Pastells, der ungewöhnlichen Blickwinkel, Momentaufnahmen und Ballerinen",
      "Pierre-Auguste Renoir (1841–1919): Feier der Sinnlichkeit, des Lichts durch Baumkronen und der Pariser Lebensfreude",
      "Pointillismus / Divisionismus: Das Bild setzt sich aus Millionen winziger Farbpunkte zusammen (Georges Seurat)",
      "Wissenschaftliche Farbtheorie: Komplementärfarben erzeugen im Auge des Betrachters maximale Leuchtkraft",
      "Postimpressionismus: Weiterentwicklung zu strengeren Formen, subjektivem Ausdruck und strukturierter Bildarchitektur"
    ],
    "exercises": [
      {
        "id": "2681",
        "title": "Impressionismus – Stilmerkmale und Techniken",
        "folder": "impressionismus-2681"
      },
      {
        "id": "1370",
        "title": "Edgar Degas – Maler der Bewegung",
        "folder": "edgar-degas-1370"
      },
      {
        "id": "4746",
        "title": "Tanzende Ballerinnen – Edgar Degas (1874)",
        "folder": "tanzende-ballerinnen-edgar-degas-1874-4746"
      },
      {
        "id": "4717",
        "title": "L’Absinthe – Edgar Degas (1876)",
        "folder": "l-absinthe-edgar-degas-1876-4717"
      },
      {
        "id": "4669",
        "title": "Bal du moulin de la Galette – Pierre-Auguste Renoir (1876)",
        "folder": "bal-du-moulin-de-la-galette-pierre-auguste-renoir-1876-4669"
      },
      {
        "id": "2816",
        "title": "Die Frühstückspause (Ruderer) – Pierre-Auguste Renoir (1876)",
        "folder": "die-fruhstuckspause-von-pierre-auguste-renoir-1876-2816"
      },
      {
        "id": "4670",
        "title": "Bathers at Asnières – Georges Seurat (1884)",
        "folder": "bathers-at-asnieres-georges-seurat-1884-4670"
      },
      {
        "id": "4782",
        "title": "Die Kunstepoche Postimpressionismus",
        "folder": "die-kunstepoche-postimpressionismus-4782"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Pointillismus+Degas+Renoir+Seurat&t=3752"
  },
  "paul-cezanne-und-paul-gauguin": {
    "slug": "paul-cezanne-und-paul-gauguin",
    "title": "Wegbereiter der Moderne: Cézanne, Gauguin & Spätmoderne",
    "category": "Impressionismus, Postimpressionismus & Spätmoderne",
    "shortDesc": "Zylinder, Kugel und Kegel bei Cézanne, Gauguins Südsee-Symbolismus und moderne Figurenmalerei.",
    "longDesc": "Paul Cézanne gilt als Vater der modernen Malerei: Er zerlegte die Natur in geometrische Grundkörper und baute Landschaften aus Farbflächen auf. Paul Gauguin floh vor der Zivilisation in die Südsee und schuf flächige, farbenprächtige Meisterwerke des Primitivismus und Symbolismus.",
    "keyPoints": [
      "Paul Cézanne (1839–1906): 'Behandle die Natur gemäß Zylinder, Kugel und Kegel' – Fundament des Kubismus",
      "Modulation statt Modellierung: Raum und Volumen entstehen allein durch das Zusammenspiel warmer und kalter Farbtöne",
      "Paul Gauguin (1848–1903): Flucht nach Tahiti, Abkehr von der Zentralperspektive, breite Farbflächen und spirituelle Sehnsucht",
      "Cloisonismus & Primitivismus: Dunkle Konturen umschließen reine Farbflächen, Inspiration durch exotische Volkskunst",
      "Einfluss auf die Moderne: Brücke zu Fauvismus, Expressionismus und zur gegenstandslosen Malerei"
    ],
    "exercises": [
      {
        "id": "1392",
        "title": "Paul Gauguin – Meister des Symbolismus und Primitivismus",
        "folder": "paul-gauguin-1392"
      },
      {
        "id": "4753",
        "title": "Vision nach der Predigt – Paul Gauguin (1888)",
        "folder": "vision-nach-der-predigt-paul-gauguin-1888-4753"
      },
      {
        "id": "4747",
        "title": "The Card Players (Die Kartenspieler) – Paul Cézanne (1892)",
        "folder": "the-card-players-paul-cezanne-1892-4747"
      },
      {
        "id": "4760",
        "title": "Die großen Badenden – Paul Cézanne (1898)",
        "folder": "die-groesen-badenden-paul-cezanne-1898-4760"
      },
      {
        "id": "1385",
        "title": "Lucian Freud – Meister der modernen Porträtkunst",
        "folder": "lucian-freud-1385"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Cezanne+Gauguin+Postimpressionismus&t=3752"
  },
  "vincent-van-gogh-leben-und-werk": {
    "slug": "vincent-van-gogh-leben-und-werk",
    "title": "Vincent van Gogh: Sternennacht, Farbkraft & Seelenbilder",
    "category": "Impressionismus, Postimpressionismus & Spätmoderne",
    "shortDesc": "Sternennacht, Caféterrasse bei Nacht, Sonnenblumen, Kussbrücke und van Goghs expressiver Pinselstrich.",
    "longDesc": "Vincent van Gogh (1853–1890) ist einer der einflussreichsten und faszinierendsten Maler aller Zeiten. Mit pastosem, wirbelndem Farbauftrag und leuchtendem Gelb und Kobaltblau malte er nicht das, was er mit den Augen sah, sondern das, was seine Seele empfand. Seine Meisterwerke begründeten den modernen Expressionismus.",
    "keyPoints": [
      "Vincent van Gogh: Vom Prediger im Borinage zum revolutionären Maler in Paris, Arles, Saint-Rémy und Auvers-sur-Oise",
      "Pastoser Farbauftrag: Dicke Farbstränge direkt aus der Tube, dynamische rhythmische Pinselstriche voller Energie",
      "Farbpsychologie: Leuchtendes Gelb für Sonne, Leben und Hoffnung; tiefes Blau für Nacht, Einsamkeit und Transzendenz",
      "Die Sternennacht (1889): Wirbelnder Himmel über dem zyppressengeschmückten Dorf als kosmisches Gefühlsdrama",
      "Caféterrasse bei Nacht & Porträts: Meisterhafte Lichtstimmungen, schonungslose Selbstporträts und Porträt des Dr. Gachet"
    ],
    "exercises": [
      {
        "id": "4704",
        "title": "Die Sternennacht – Vincent van Gogh (1889)",
        "folder": "die-sternennacht-vincent-van-gogh-1889-4704"
      },
      {
        "id": "4672",
        "title": "Caféterrasse bei Nacht – Vincent van Gogh (1888)",
        "folder": "cafeterrasse-bei-nacht-vincent-van-gogh-1888-4672"
      },
      {
        "id": "4745",
        "title": "Sternennacht über der Rhône – Vincent van Gogh (1888)",
        "folder": "sternennacht-uber-der-rhone-vincent-van-gogh-1888-4745"
      },
      {
        "id": "2818",
        "title": "Die Kussbrücke (Brücke von Langlois) – Vincent van Gogh (1888)",
        "folder": "die-kussbrucke-von-vincent-van-gogh-1888-2818"
      },
      {
        "id": "4740",
        "title": "Selbstbildnis – Vincent van Gogh (1889)",
        "folder": "selbstbildnis-vincent-van-gogh-1889-4740"
      },
      {
        "id": "4733",
        "title": "Porträt des Dr. Gachet – Vincent van Gogh (1890)",
        "folder": "portrat-des-dr-gachet-vincent-van-gogh-1890-4733"
      },
      {
        "id": "4727",
        "title": "Mühle in Auvers – Vincent van Gogh (1890)",
        "folder": "muhle-in-auvers-vincent-van-gogh-1890-4727"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Vincent+van+Gogh+Sternennacht&t=3752"
  },
  "expressionismus-und-wiener-moderne": {
    "slug": "expressionismus-und-wiener-moderne",
    "title": "Expressionismus & Wiener Moderne: Klimt, Schiele & Munch",
    "category": "Expressionismus, Wiener Moderne & Abstraktion",
    "shortDesc": "Der Schrei, Gustav Klimts Kuss, Jugendstil, Egon Schiele und die Künstlergruppe Die Brücke.",
    "longDesc": "Der Expressionismus stellte den subjektiven Gefühlsausdruck über die realistische Abbildung der Wirklichkeit. Während Edvard Munch in Norwegen die Urängste des modernen Menschen im 'Schrei' bannte, feierte Wien um 1900 mit Gustav Klimt den goldenen Jugendstil und mit Egon Schiele die schonungslose Sezierung der Psyche.",
    "keyPoints": [
      "Expressionismus: Befreiung der Farbe vom Gegenstand, Verformung, Holzschnittästhetik und emotionale Wucht",
      "Edvard Munch (1863–1944): Der Schrei als universelle Ikone der modernen Existenzangst und Verzweiflung",
      "Wiener Secession & Gustav Klimt (1862–1918): Ornamentik, Blattgold, Erotik und Lebensfries (Der Kuss, Adele Bloch-Bauer I)",
      "Egon Schiele (1890–1918): Radikale Linienführung, zerbrechliche Körper, Melancholie und existentielle Schonungslosigkeit",
      "Die Brücke (Dresden 1905): Ernst Ludwig Kirchner und Freunde suchen den direkten, unverfälschten Ausdruck"
    ],
    "exercises": [
      {
        "id": "4769",
        "title": "Die Kunstepoche Expressionismus",
        "folder": "die-kunstepoche-expressionismus-4769"
      },
      {
        "id": "2680",
        "title": "Expressionismus – Bildsprache und Techniken",
        "folder": "expressionismus-2680"
      },
      {
        "id": "4685",
        "title": "Der Schrei – Edvard Munch (1893)",
        "folder": "der-schrei-edvard-munch-1893-4685"
      },
      {
        "id": "4684",
        "title": "Der Kuss – Gustav Klimt (1907)",
        "folder": "der-kuss-gustav-klimt-1907-4684"
      },
      {
        "id": "4732",
        "title": "Porträt der Adele Bloch-Bauer I – Gustav Klimt (1907)",
        "folder": "portrat-der-adele-bloch-bauer-i-gustav-klimt-1907-4732"
      },
      {
        "id": "4742",
        "title": "Selbstbildnis mit Strohhut – Egon Schiele (1912)",
        "folder": "selbstbildnis-mit-strohhut-egon-schiele-1912-4742"
      },
      {
        "id": "4743",
        "title": "Selbstbildnis mit Zauberhut – Ernst Ludwig Kirchner (1913)",
        "folder": "selbstbildnis-mit-zauberhut-ernst-ludwig-kirchner-1913-4743"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Expressionismus+Klimt+Munch+Schiele&t=3752"
  },
  "der-blaue-reiter-und-abstraktion": {
    "slug": "der-blaue-reiter-und-abstraktion",
    "title": "Der Blaue Reiter, Fauvismus & Geistige Abstraktion",
    "category": "Expressionismus, Wiener Moderne & Abstraktion",
    "shortDesc": "Franz Marc, Kandinskys Weg zur Abstraktion, Henri Matisses Farbenrausch und Modigliani.",
    "longDesc": "In München formierte sich mit dem 'Blauen Reiter' um Wassily Kandinsky und Franz Marc eine Bewegung, die Kunst als geistiges, synästhetisches Erlebnis verstand und schließlich die ersten völlig gegenstandslosen Gemälde schuf. In Frankreich befreite Henri Matisse mit den Fauves die Farben zu purer Lebensfreude.",
    "keyPoints": [
      "Der Blaue Reiter (1911): Geistige Erneuerung der Kunst, Synästhesie (Klang der Farben) und Harmonie mit der Schöpfung",
      "Wassily Kandinsky (1866–1944): Pionier der abstrakten Kunst ('Über das Geistige in der Kunst', Komposition VII & VIII)",
      "Franz Marc (1880–1916): Beseelte Tierdarstellungen, Farbmetaphorik (Blau = männlich-herb, Gelb = weiblich-heiter)",
      "Fauvismus: Henri Matisse und die 'wilden Tiere' – strahlende Primärfarben, Scherenschnitte und reine Bildharmonie (Der Tanz)",
      "Amedeo Modigliani (1884–1920): Gestreckte Hälse, maskenhafte Gesichter und vollendete Melancholie in Paris"
    ],
    "exercises": [
      {
        "id": "4770",
        "title": "Die Kunstepoche Fauvismus",
        "folder": "die-kunstepoche-fauvismus-4770"
      },
      {
        "id": "4681",
        "title": "Der Blaue Reiter – Franz Marc (1911)",
        "folder": "der-blaue-reiter-franz-marc-1911-4681"
      },
      {
        "id": "4715",
        "title": "Komposition VII – Wassily Kandinsky (1913)",
        "folder": "komposition-vii-wassily-kandinsky-1913-4715"
      },
      {
        "id": "4716",
        "title": "Komposition VIII – Wassily Kandinsky (1923)",
        "folder": "komposition-viii-wassily-kandinsky-1923-4716"
      },
      {
        "id": "4688",
        "title": "Der Tanz – Henri Matisse (1910)",
        "folder": "der-tanz-henri-matisse-1910-4688"
      },
      {
        "id": "4671",
        "title": "Blue Nude – Henri Matisse (1907)",
        "folder": "blue-nude-henri-matisse-1907-4671"
      },
      {
        "id": "1355",
        "title": "Amedeo Modigliani – Porträts und Eleganz",
        "folder": "amedeo-modigliani-1355"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kandinsky+Franz+Marc+Matisse&t=3752"
  },
  "pablo-picasso-und-kubismus": {
    "slug": "pablo-picasso-und-kubismus",
    "title": "Pablo Picasso & Kubismus: Revolution der Perspektive",
    "category": "Avantgarde des 20. Jahrhunderts: Kubismus, Dada & Bauhaus",
    "shortDesc": "Guernica, Les Demoiselles d'Avignon, Blaue & Rosa Periode, Analytischer und Synthetischer Kubismus.",
    "longDesc": "Pablo Picasso (1881–1973) veränderte die Kunst des 20. Jahrhunderts wie kein anderer. Zusammen mit Georges Braque begründete er den Kubismus, der die jahrhundertealte Zentralperspektive zertrümmerte und Objekte gleichzeitig aus mehreren Blickwinkeln zeigte. Mit 'Guernica' schuf Picasso das eindringlichste Antikriegsbild der Menschheit.",
    "keyPoints": [
      "Pablo Picasso: Vom spanischen Wunderkind über die melancholische Blaue und Rosa Periode zur Avantgarde",
      "Les Demoiselles d'Avignon (1907): Die Geburtsstunde der Moderne – afrikanische Masken und kantige Figuren zerschlagen die Illusion",
      "Analytischer Kubismus: Zerlegung von Objekten in geometrische Facetten, monochrome Erd- und Grautöne",
      "Synthetischer Kubismus: Zusammensetzen neuer Bildwelten, Erfindung der Collage (Papier collé)",
      "Guernica (1937): Monumentale Anklage der Bombardierung der baskischen Stadt im Spanischen Bürgerkrieg"
    ],
    "exercises": [
      {
        "id": "1390",
        "title": "Pablo Picasso – Jahrhundertgenie der Moderne",
        "folder": "pablo-picasso-1390"
      },
      {
        "id": "4777",
        "title": "Die Kunstepoche Kubismus",
        "folder": "die-kunstepoche-kubismus-4777"
      },
      {
        "id": "4680",
        "title": "Der alte Gitarrist – Pablo Picasso (1903)",
        "folder": "der-alte-gitarrist-pablo-picasso-1903-4680"
      },
      {
        "id": "4758",
        "title": "Das Mädchen von Avignon – Pablo Picasso (1907)",
        "folder": "das-madchen-von-avignon-pablo-picasso-1907-4758"
      },
      {
        "id": "2827",
        "title": "Les Demoiselles d'Avignon – Meisterwerkanalyse",
        "folder": "les-demoiselles-d-039-avignon-von-pablo-picasso-1907-2827"
      },
      {
        "id": "4711",
        "title": "Guernica – Pablo Picasso (1937)",
        "folder": "guernica-pablo-picasso-1937-4711"
      },
      {
        "id": "4705",
        "title": "Die weinende Frau – Pablo Picasso (1937)",
        "folder": "die-weinende-frau-pablo-picasso-1937-4705"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Picasso+Kubismus+Guernica&t=3752"
  },
  "dada-und-surrealismus": {
    "slug": "dada-und-surrealismus",
    "title": "Dada & Surrealismus: Dalí, Magritte, Duchamp & Kahlo",
    "category": "Avantgarde des 20. Jahrhunderts: Kubismus, Dada & Bauhaus",
    "shortDesc": "Fließende Uhren, Dies ist keine Pfeife, Duchamps Readymade-Urinal, Dada-Revolte und Frida Kahlos Seelenporträts.",
    "longDesc": "Dada entstand während des Ersten Weltkriegs im Zürcher Cabaret Voltaire als provokante Anti-Kunst gegen den Wahnsinn der Epoche. Aus Dada erwuchs der Surrealismus, der inspiriert von Sigmund Freuds Traumdeutung das Unbewusste, Phantastische und Absurde feierte – verkörpert durch Salvador Dalí, René Magritte und Frida Kahlo.",
    "keyPoints": [
      "Dadaismus (1916): Tabubruch, Collage, Lautgedichte und die Infragestellung dessen, was Kunst überhaupt ist",
      "Marcel Duchamp (1887–1968): Das Readymade (Fountain, 1917) – Nicht die handwerkliche Herstellung, sondern die Idee und Wahl des Künstlers macht das Kunstwerk",
      "Surrealismus: Traumwelten, Assoziationen, automatische Malerei (Écriture automatique) und Verfremdung der Realität",
      "Salvador Dalí (1904–1989): Paranoisch-kritische Methode, fließende Uhren und akribische Altmeistertechnik (Die Beständigkeit der Erinnerung)",
      "René Magritte (1898–1967): Bild-Sprache-Rätsel ('La trahison des images' – Ceci n'est pas une pipe)",
      "Frida Kahlo (1907–1954): Schmerz, mexikanische Volkskultur, Identität und surreale Selbstporträts (Die zwei Fridas)"
    ],
    "exercises": [
      {
        "id": "4768",
        "title": "Die Kunstepoche Dada",
        "folder": "die-kunstepoche-dada-4768"
      },
      {
        "id": "4789",
        "title": "Die Kunstepoche Surrealismus",
        "folder": "die-kunstepoche-surrealismus-4789"
      },
      {
        "id": "2693",
        "title": "Surrealismus – Bildwelten und Denkweisen",
        "folder": "surrealismus-2693"
      },
      {
        "id": "4709",
        "title": "Fountain (Readymade) – Marcel Duchamp (1917)",
        "folder": "fountain-marcel-duchamp-1917-4709"
      },
      {
        "id": "4722",
        "title": "L.H.O.O.Q. – Marcel Duchamp (1919)",
        "folder": "lhooq-marcel-duchamp-1919-4722"
      },
      {
        "id": "4729",
        "title": "Nude Descending a Staircase – Marcel Duchamp (1912)",
        "folder": "nude-descending-a-staircase-no-2-marcel-duchamp-1912-4729"
      },
      {
        "id": "4694",
        "title": "Die Beständigkeit der Erinnerung – Salvador Dalí (1931)",
        "folder": "die-bestandigkeit-der-erinnerung-salvador-dali-1931-4694"
      },
      {
        "id": "4719",
        "title": "La trahison des images – René Magritte (1929)",
        "folder": "la-trahison-des-images-rene-magritte-1929-4719"
      },
      {
        "id": "4706",
        "title": "Die zwei Fridas – Frida Kahlo (1939)",
        "folder": "die-zwei-fridas-frida-kahlo-1939-4706"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Dada+Surrealismus+Dali+Magritte&t=3752"
  },
  "bauhaus-konstruktivismus-und-de-stijl": {
    "slug": "bauhaus-konstruktivismus-und-de-stijl",
    "title": "Bauhaus, De Stijl, Konstruktivismus & Avantgarden",
    "category": "Avantgarde des 20. Jahrhunderts: Kubismus, Dada & Bauhaus",
    "shortDesc": "Form follows function, Walter Gropius, Piet Mondrians Primärfarben, Art Déco und Marc Chagall.",
    "longDesc": "Die 1920er Jahre brachten radikale Neuerungen im Design und in der Architektur hervor: Das 1919 gegründete Staatliche Bauhaus vereinte Kunst, Handwerk und Industrieproduktion unter dem Leitsatz 'Form folgt Funktion'. In den Niederlanden reduzierte De Stijl (Mondrian) die Welt auf Primärfarben und rechte Winkel, während in Russland Konstruktivismus und Suprematismus erblühten.",
    "keyPoints": [
      "Staatliches Bauhaus (Weimar, Dessau, Berlin): Walter Gropius, Hannes Meyer, Mies van der Rohe – Schlichtheit, Stahlrohrmöbel und Glasfassaden",
      "Form follows function: Zweckmäßigkeit und Ästhetik in moderner Industrieproduktion",
      "De Stijl & Piet Mondrian (1872–1944): Neoplastizismus – strenge Raster mit Schwarz, Weiß, Rot, Gelb und Blau",
      "Suprematismus & Konstruktivismus: Malewitschs 'Schwarzes Quadrat', geometrische Formen als Ausdruck eines neuen Zeitalters",
      "Art Déco: Eleganz, edle Materialien und geometrische Ornamente der Zwischenkriegszeit",
      "Marc Chagall & Grant Wood: Poetische Bildwelten osteuropäischer Folklore und amerikanischer Regionalismus"
    ],
    "exercises": [
      {
        "id": "4767",
        "title": "Die Kunstepoche Bauhaus",
        "folder": "die-kunstepoche-bauhaus-4767"
      },
      {
        "id": "4765",
        "title": "Die Kunstepoche Art Déco",
        "folder": "die-kunstepoche-art-deco-4765"
      },
      {
        "id": "4771",
        "title": "Die Kunstepoche Futurismus",
        "folder": "die-kunstepoche-futurismus-4771"
      },
      {
        "id": "4775",
        "title": "Die Kunstepoche Konstruktivismus",
        "folder": "die-kunstepoche-konstruktivismus-4775"
      },
      {
        "id": "4788",
        "title": "Die Kunstepoche Suprematismus",
        "folder": "die-kunstepoche-suprematismus-4788"
      },
      {
        "id": "1394",
        "title": "Piet Mondrian – Meister des Neoplastizismus",
        "folder": "piet-mondrian-1394"
      },
      {
        "id": "1378",
        "title": "Marc Chagall – Poet der Moderne",
        "folder": "marc-chagall-1378"
      },
      {
        "id": "4712",
        "title": "I and the Village (Ich und das Dorf) – Marc Chagall",
        "folder": "i-and-the-village-marc-chagall-1911-4712"
      },
      {
        "id": "4665",
        "title": "Amerikanische Gotik – Grant Wood (1930)",
        "folder": "amerikanische-gotik-grant-wood-1930-4665"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Bauhaus+Mondrian+Konstruktivismus&t=3752"
  },
  "abstrakter-expressionismus-und-pop-art": {
    "slug": "abstrakter-expressionismus-und-pop-art",
    "title": "Abstrakter Expressionismus & Pop Art: Warhol, Pollock & Basquiat",
    "category": "Zeitgenössische Kunst, Pop Art & Neue Medien",
    "shortDesc": "Action Painting, Drip Painting, Campbell's Soup, Andy Warhol, Joan Miró und Jean-Michel Basquiat.",
    "longDesc": "Nach dem Zweiten Weltkrieg verlagerte sich das Zentrum der Kunstwelt von Paris nach New York. Jackson Pollock begründete mit 'Action Painting' und Drippings eine ungezügelte gestische Malerei. Ab den 1960er Jahren holte die Pop Art um Andy Warhol den Konsum, Comic und Werbeikonen in die Galerien, gefolgt von Jean-Michel Basquiats neoexpressionistischer Wucht.",
    "keyPoints": [
      "Abstrakter Expressionismus (New York School): Monumentale Leinwände, physischer Körpereinsatz und Farbfeldmalerei",
      "Jackson Pollock (1912–1956): Drip Painting – Farbe tropft und fließt im Tanz über die am Boden liegende Leinwand",
      "Joan Miró (1893–1983): Traumhafte Zeichen, Primärfarben und organische Formen zwischen Abstraktion und Poesie",
      "Pop Art (1960er Jahre): Aufhebung der Grenze zwischen Hochkultur und Alltagskommerz (Campbell's Dosen, Marilyn Monroe)",
      "Andy Warhol (1928–1987): The Factory, Siebdrucktechnik, Massenreproduktion und Kritik des Starkults",
      "Jean-Michel Basquiat (1960–1988): SAMO-Graffiti, Street-Art-Pionier, Jazz, Rassismus und expressive Kronenmotive"
    ],
    "exercises": [
      {
        "id": "4764",
        "title": "Die Kunstepoche Abstrakte Kunst",
        "folder": "die-kunstepoche-abstrakte-kunst-4764"
      },
      {
        "id": "1375",
        "title": "Jackson Pollock – König des Action Painting",
        "folder": "jackson-pollock-1375"
      },
      {
        "id": "1382",
        "title": "Joan Miró – Fantasie und Formensprache",
        "folder": "joan-miro-1382"
      },
      {
        "id": "4781",
        "title": "Die Kunstepoche Pop Art",
        "folder": "die-kunstepoche-pop-art-4781"
      },
      {
        "id": "1356",
        "title": "Andy Warhol – Die Ikone der Pop Art",
        "folder": "andy-warhol-1356"
      },
      {
        "id": "1377",
        "title": "Jean-Michel Basquiat – Biografie und Schaffen",
        "folder": "jean-michel-basquiat-1377"
      },
      {
        "id": "2822",
        "title": "Ehrenmann / Man from Naples – Jean-Michel Basquiat (1982)",
        "folder": "ehrenmann-von-jean-michel-basquiat-1982-2822"
      },
      {
        "id": "4780",
        "title": "Die Kunstepoche Neoexpressionismus",
        "folder": "die-kunstepoche-neoexpressionismus-4780"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Pop+Art+Warhol+Pollock+Basquiat&t=3752"
  },
  "zeitgenoessische-kunst-street-art-und-medien": {
    "slug": "zeitgenoessische-kunst-street-art-und-medien",
    "title": "Zeitgenössische Kunst: Minimal Art, Street Art & Digitale Kunst",
    "category": "Zeitgenössische Kunst, Pop Art & Neue Medien",
    "shortDesc": "Konzeptkunst, Minimalismus, Banksy & Murals, Land Art, Video-Installationen und Netzkunst.",
    "longDesc": "Die Kunst der Gegenwart überschreitet traditionelle Gattungsgrenzen: Von der radikalen Reduktion der Minimal Art über die geistige Idee der Konzeptkunst bis hin zu weltweiter Street Art im öffentlichen Raum. Neue Medien, interaktive Videoinstallationen und digitale Computerkunst spiegeln unsere digitalisierte Gesellschaft wider.",
    "keyPoints": [
      "Minimal Art: Geometrische Grundstrukturen, industrielle Fertigung, 'What you see is what you see' (Frank Stella)",
      "Konzeptkunst: Die Idee und das Konzept stehen über dem materiellen Kunstobjekt (Joseph Kosuth)",
      "Postmoderne Kunst: Stilpluralismus, Zitat, Ironie und das Verschmelzen verschiedenster Epochen",
      "Street Art & Murals: Urbaner Raum als Galerie, gesellschaftskritische Schablonengraffiti (Banksy, Keith Haring)",
      "Umweltkunst / Land Art: Eingriffe in die freie Natur mit vergänglichen Naturmaterialien (Christo, Goldsworthy)",
      "Digitale Kunst & Videokunst: Pixel, generative Algorithmen, künstliche Intelligenz und immersive Räume"
    ],
    "exercises": [
      {
        "id": "4779",
        "title": "Die Kunstepoche Minimal Art",
        "folder": "die-kunstepoche-minimal-art-4779"
      },
      {
        "id": "4776",
        "title": "Die Kunstepoche Konzeptkunst",
        "folder": "die-kunstepoche-konzeptkunst-4776"
      },
      {
        "id": "2688",
        "title": "Postmoderne Kunst – Vielfalt und Zitate",
        "folder": "postmoderne-kunst-2688"
      },
      {
        "id": "4787",
        "title": "Die Kunstepoche Street Art",
        "folder": "die-kunstepoche-street-art-4787"
      },
      {
        "id": "2692",
        "title": "Street Art – Kunst im öffentlichen Raum",
        "folder": "street-art-2692"
      },
      {
        "id": "2695",
        "title": "Umweltkunst und Land Art",
        "folder": "umweltkunst-2695"
      },
      {
        "id": "2696",
        "title": "Video-Kunst und Medieninstallationen",
        "folder": "video-kunst-2696"
      },
      {
        "id": "2679",
        "title": "Digitale Kunst und Computergrafik",
        "folder": "digitale-kunst-2679"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Street+Art+Digitale+Kunst+Medien&t=3752"
  },
  "bildanalyse-gattungen-und-darstellungsformen": {
    "slug": "bildanalyse-gattungen-und-darstellungsformen",
    "title": "Bildanalyse, Gattungen der Malerei & Komposition",
    "category": "Kunsttheorie, Techniken, Gattungen & Museen",
    "shortDesc": "Stillleben, Porträt, Stadtansichten, Tiermalerei, Zentralperspektive und Kompositionsgesetze.",
    "longDesc": "Wie betrachtet und entschlüsselt man ein Kunstwerk? Die klassische Kunsttheorie unterscheidet grundlegende Gattungen wie Porträt, Stillleben, Landschaft oder Historie. Das Erlernen von Kompositionsachsen, Kontrasten, Perspektivarten und Symboldeutungen öffnet die Augen für die Bildsprache der Meister.",
    "keyPoints": [
      "Gattungen der Malerei: Historienmalerei, Porträt, Genremalerei, Landschaftsmalerei und Stillleben",
      "Stillleben & Vanitas: Vergänglichkeitssymbole (Totenkopf, Sanduhr, welkende Blumen, umgestürzter Becher)",
      "Porträt & Selbstbildnis: Physiognomie, Standesattribute, Psychologie und Selbstdarstellung im Wandel der Zeit",
      "Stadtansichten (Veduten): Exakte topografische Architekturansichten von Canaletto bis zur modernen Skyline",
      "Perspektive & Raumillusion: Zentralperspektive, Frosch- und Vogelperspektive, Farb- und Luftperspektive",
      "Bildkomposition: Goldener Schnitt, Dreiecksaufbau, Diagonale, Horizontlinie und optische Gewichtung"
    ],
    "exercises": [
      {
        "id": "2691",
        "title": "Stillleben – Motive und Vanitas-Symbolik",
        "folder": "stillleben-2691"
      },
      {
        "id": "2689",
        "title": "Das Porträt und Selbstporträt in der Kunst",
        "folder": "selbstportrat-2689"
      },
      {
        "id": "2690",
        "title": "Stadtansichten und Vedutenmalerei",
        "folder": "stadtansichten-2690"
      },
      {
        "id": "2694",
        "title": "Tiermotive in der Kunstgeschichte",
        "folder": "tiermotive-2694"
      },
      {
        "id": "2687",
        "title": "Perspektive und räumliche Wahrnehmung",
        "folder": "perspektive-2687"
      },
      {
        "id": "2684",
        "title": "Linien und Formen in der Bildkomposition",
        "folder": "linien-und-formen-2684"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Bildanalyse+Perspektive+Stillleben&t=3752"
  },
  "werkstoffe-plastik-und-architektur": {
    "slug": "werkstoffe-plastik-und-architektur",
    "title": "Werkstoffe, Plastik, Keramik & Grafikdesign",
    "category": "Kunsttheorie, Techniken, Gattungen & Museen",
    "shortDesc": "Architekturprinzipien, Keramik & Glasuren, Tonbrennen, Monochromie und Vektorgrafiken.",
    "longDesc": "Kunst entsteht aus der schöpferischen Auseinandersetzung mit Material und Raum. Von der Bildhauerei und Töpferei über Jahrtausende der Architekturgeschichte bis hin zum modernen Grafikdesign: Materialeigenschaften, Haptik, Lichtwirkung und Formgebung prägen die dreidimensionale und angewandte Kunst.",
    "keyPoints": [
      "Grundlagen der Architektur: Statik, Pfeiler, Säulenordnungen (dorisch, ionisch, korinthisch), Bogenformen und Raumwirkung",
      "Keramik & Töpferei: Schrühbrand, Glasurbrand, Drehscheibe und Oberflächengestaltung von Terrakotta bis Porzellan",
      "Monochromatische Kunst: Arbeiten mit einer einzigen Farbe, Schattierungen und Grisaille-Technik",
      "Plastik vs. Skulptur: Aufbauendes Verfahren (Modellieren mit Ton/Gips) vs. abtragendes Verfahren (Hauen aus Marmor/Holz)",
      "Grafikdesign im digitalen Zeitalter: Vektorgrafiken (skalierbare Pfade) vs. Pixelgrafiken (Rasterbilder)"
    ],
    "exercises": [
      {
        "id": "2678",
        "title": "Grundlagen der Architektur und Baukunst",
        "folder": "architektur-2678"
      },
      {
        "id": "architekturgeschichte-deutschlands",
        "title": "Architekturgeschichte im Überblick",
        "folder": "architekturgeschichte-deutschlands"
      },
      {
        "id": "2682",
        "title": "Keramik und Töpferei als Kunsthandwerk",
        "folder": "keramik-und-topferei-2682"
      },
      {
        "id": "2683",
        "title": "Keramik-Glasuren und Oberflächenbehandlung",
        "folder": "keramik-glasuren-und-oberflachenbehandlung-2683"
      },
      {
        "id": "2685",
        "title": "Monochromatische Kunst und Grisaille",
        "folder": "monochromatische-kunst-2685"
      },
      {
        "id": "unterschied-zwischen-vektorgrafiken-und-pixelbildern",
        "title": "Vektorgrafiken vs. Pixelbilder in der Grafik",
        "folder": "unterschied-zwischen-vektorgrafiken-und-pixelbildern"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Architektur+Keramik+Plastik+Design&t=3752"
  },
  "kunstreflexion-museen-und-therapie": {
    "slug": "kunstreflexion-museen-und-therapie",
    "title": "Kunstphilosophie, Museen & Kunsttherapie",
    "category": "Kunsttheorie, Techniken, Gattungen & Museen",
    "shortDesc": "Was ist Kunst?, Kunsttherapie, MuseumsQuartier Wien, Museumsinsel Berlin und Identität im Bild.",
    "longDesc": "Was berührt uns an einem Kunstwerk? Warum schaffen Menschen Kunst? Dieses Themenfeld beleuchtet die Philosophie der Kunst, die heilsame Kraft des Gestaltens in der Kunsttherapie und die Rolle moderner Museen als lebendige Lern- und Begegnungsorte unseres kulturellen Gedächtnisses.",
    "keyPoints": [
      "Was ist Kunst?: Ästhetik, Kunstbegriff, Provokation, Schönheit und der gesellschaftliche Diskurs",
      "Persönlicher Ausdruck & Identität: Das Kunstwerk als Spiegel des Selbst und nonverbale Kommunikation",
      "Grundlagen der Kunsttherapie: Heilsame Wirkung des Malens, Modellierens und kreativen Gestaltens für die Psyche",
      "Das MuseumsQuartier Wien: Eines der größten Kunst- und Kulturareale weltweit (Leopold Museum, mumok)",
      "Museumsinsel Berlin & Sammlungen: Weltkulturerbe der UNESCO und Bewahrung der Menschheitsgeschichte"
    ],
    "exercises": [
      {
        "id": "2775",
        "title": "Die Frage nach der Bedeutung von Kunst",
        "folder": "die-frage-nach-der-bedeutung-von-kunst-2775"
      },
      {
        "id": "2686",
        "title": "Persönlicher Ausdruck und Identität in der Kunst",
        "folder": "personlicher-ausdruck-und-identitat-in-der-kunst-2686"
      },
      {
        "id": "5812",
        "title": "Grundlagen der Kunsttherapie",
        "folder": "grundlagen-der-kunsttherapie-5812"
      },
      {
        "id": "5606",
        "title": "Das MuseumsQuartier – Moderner Kunstraum",
        "folder": "das-museumsquartier-5606"
      },
      {
        "id": "die-museumsinsel-in-berlin",
        "title": "Die Museumsinsel in Berlin – Weltkulturerbe",
        "folder": "die-museumsinsel-in-berlin"
      },
      {
        "id": "das-germanische-nationalmuseum-in-nuernberg",
        "title": "Das Germanische Nationalmuseum in Nürnberg",
        "folder": "das-germanische-nationalmuseum-in-nuernberg"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kunsttherapie+Museum+Kunsttheorie&t=3752"
  }
};
