export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface PhysikTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const physikCategories = [
  "Mechanik & Dynamik",
  "Optik & Lichtlehre",
  "Elektrizität & Magnetismus",
  "Thermodynamik & Akustik",
  "Atom-, Kern- & Quantenphysik",
  "Astronomie, Geophysik & Raumfahrt",
  "Grundlagen, Forscher & Rätsel"
];

export const physikTopics: Record<string, PhysikTopic> = {
  "einfache-maschinen-hebel-und-kraefte": {
    "slug": "einfache-maschinen-hebel-und-kraefte",
    "title": "Einfache Maschinen, Hebel & Kräfte",
    "category": "Mechanik & Dynamik",
    "shortDesc": "Kräfte, Hebelgesetz, Flaschenzug, geneigte Ebene, Rollen und Goldene Regel der Mechanik.",
    "longDesc": "Einfache Maschinen wie Hebel, Rollen, Flaschenzüge und schiefe Ebenen erleichtern die Arbeit des Menschen. Sie verringern die erforderliche Kraft, sparen aber nach der Goldenen Regel der Mechanik niemals physikalische Arbeit.",
    "keyPoints": [
      "Goldene Regel der Mechanik: Was an Kraft gespart wird, muss an Weg zugesetzt werden (Arbeit \\(W = F \\cdot s\\) bleibt idealerweise konstant)",
      "Hebelgesetz: Kraft mal Kraftarm = Last mal Lastarm ➔ \\(F_1 \\cdot l_1 = F_2 \\cdot l_2\\)",
      "Flaschenzug: Bei n tragenden Seilstücken verringert sich die Zugkraft auf \\(F = \\frac{F_G}{n}\\)",
      "Rollen und Räder: Feste Rollen ändern nur die Richtung der Kraft; lose Rollen halbieren die Zugkraft",
      "Geneigte Ebene: Verringert die benötigte Zugkraft beim Anheben einer Last proportional zur Steigung"
    ],
    "exercises": [
      {
        "id": "274",
        "title": "Kraft",
        "folder": "arbeit-energie-und-leistung-274"
      },
      {
        "id": "5253",
        "title": "Das Hebelgesetz",
        "folder": "das-hebelgesetz-5253"
      },
      {
        "id": "5315",
        "title": "Rolle Flaschenzug und Wellenrad",
        "folder": "rolle-flaschenzug-und-wellenrad-5315"
      },
      {
        "id": "600",
        "title": "Lerninhalt: Grundlagen der Mechanik",
        "folder": "lerninhalt-grundlagen-der-mechanik-2-600"
      },
      {
        "id": "7115",
        "title": "Wie funktioniert der Hebel",
        "folder": "wie-funktioniert-der-hebel"
      },
      {
        "id": "7113",
        "title": "Wie funktioniert der Flaschenzug",
        "folder": "wie-funktioniert-der-flaschenzug"
      },
      {
        "id": "588",
        "title": "Lerninhalt: Kräfte",
        "folder": "lerninhalt-krafte-588"
      },
      {
        "id": "587",
        "title": "Lerninhalt: Darstellung von Kräften",
        "folder": "lerninhalt-darstellung-von-kraften-587"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=hebel+mechanik&t=3752"
  },
  "kinematik-geschwindigkeit-und-beschleunigung": {
    "slug": "kinematik-geschwindigkeit-und-beschleunigung",
    "title": "Kinematik, Geschwindigkeit & Bewegung",
    "category": "Mechanik & Dynamik",
    "shortDesc": "Gleichförmige und beschleunigte Bewegungen, Geschwindigkeit, Trägheit und Diagramme.",
    "longDesc": "Die Kinematik beschreibt die Bewegung von Körpern rein geometrisch und zeitlich ohne Berücksichtigung der Kräfte. Sie umfasst Geschwindigkeiten, Beschleunigungen, Bremswege und Bewegungsgleichungen.",
    "keyPoints": [
      "Geschwindigkeit (v): Verhältnis von Wegstrecke zur benötigten Zeit (\\(v = \\frac{s}{t}\\) in m/s oder km/h)",
      "Trägheitsprinzip: Ein Körper verharrt ohne äußere Krafteinwirkung in Ruhe oder geradlinig gleichförmiger Bewegung",
      "Gleichförmige Bewegung: Konstante Geschwindigkeit ohne Richtungsänderung",
      "Gleichmäßig beschleunigte Bewegung: Die Geschwindigkeit ändert sich gleichmäßig mit der Beschleunigung a (\\(v = a \\cdot t\\), \\(s = \\frac{1}{2} a t^2\\))",
      "s-t- und v-t-Diagramme: Steigung im Weg-Zeit-Diagramm entspricht der Geschwindigkeit; Steigung im Geschwindigkeits-Zeit-Diagramm der Beschleunigung"
    ],
    "exercises": [
      {
        "id": "271",
        "title": "Akustik",
        "folder": "geschwindigkeit-271"
      },
      {
        "id": "272",
        "title": "Geschwindigkeit",
        "folder": "tragheit-272"
      },
      {
        "id": "273",
        "title": "Trägheit",
        "folder": "kraft-273"
      },
      {
        "id": "590",
        "title": "Kinematik - Geschwindigkeit und Bewegung",
        "folder": "lerninhalt-kinematik-geschwindigkeit-590"
      },
      {
        "id": "591",
        "title": "Kinematik - Bewegungsarten",
        "folder": "lerninhalt-kinematik-bewegungsarten-591"
      },
      {
        "id": "589",
        "title": "Trägheitsprinzip und Masse",
        "folder": "lerninhalt-tragheit-589"
      },
      {
        "id": "beschleunigung-sensor",
        "title": "Beschleunigungssensoren und Bewegungsmessung",
        "folder": "beschleunigungssensoren-und-wie-das-handy-weiss-wo-oben-ist"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geschwindigkeit+kinematik&t=3752"
  },
  "dynamik-newtonsche-gesetze-und-gravitation": {
    "slug": "dynamik-newtonsche-gesetze-und-gravitation",
    "title": "Dynamik, Newtonsche Gesetze & Gravitation",
    "category": "Mechanik & Dynamik",
    "shortDesc": "Newtonsche Axiome, Gravitationsgesetz, Schwerpunkt, Zentrifugalkraft, Druck und Auftrieb.",
    "longDesc": "Die Dynamik erforscht die Ursachen von Bewegungen – die Kräfte. Newtons berühmte Gesetze, die universelle Gravitation, der physikalische Schwerpunkt sowie Druck und Auftrieb erklären Phänomene im Alltag und im Kosmos.",
    "keyPoints": [
      "1. Newtonsches Gesetz (Trägheitsgesetz): Körper verharren im Bewegungszustand, solange keine resultierende Kraft wirkt",
      "2. Newtonsches Gesetz (Aktionsprinzip): \\(F = m \\cdot a\\) (Kraft ist Masse mal Beschleunigung)",
      "3. Newtonsches Gesetz (Wechselwirkungsprinzip): Actio = Reactio (Kräfte treten stets paarweise auf)",
      "Gravitation: Anziehungskraft zwischen Massen; auf der Erde wirkt die Fallbeschleunigung \\(g \\approx 9{,}81\\,\\text{m/s}^2\\)",
      "Schwerpunkt: Punkt, an dem die gesamte Gewichtskraft eines Körpers als angreifend gedacht werden kann",
      "Zentrifugalkraft & Zentripetalkraft: Trägheits- bzw. Führungskraft bei gekrümmten Bahnen",
      "Druck & Archimedisches Prinzip: Druck \\(p = \\frac{F}{A}\\); Auftriebskraft entspricht dem Gewicht des verdrängten Fluids"
    ],
    "exercises": [
      {
        "id": "5309",
        "title": "Newtonsche Gesetze",
        "folder": "newtonsche-gesetze-5309"
      },
      {
        "id": "5271",
        "title": "Der Schwerpunkt",
        "folder": "der-schwerpunkt-5271"
      },
      {
        "id": "5287",
        "title": "Die Zentrifugalkraft",
        "folder": "die-zentrifugalkraft-5287"
      },
      {
        "id": "5278",
        "title": "Die Gravitation",
        "folder": "die-gravitation-5278"
      },
      {
        "id": "7067",
        "title": "Wie funktioniert die Schwerkraft",
        "folder": "wie-funktioniert-die-schwerkraft"
      },
      {
        "id": "278",
        "title": "Druck",
        "folder": "druck-278"
      },
      {
        "id": "279",
        "title": "Auftrieb",
        "folder": "auftrieb-279"
      },
      {
        "id": "bernoulli",
        "title": "Wie funktioniert der Bernoulli-Effekt",
        "folder": "wie-funktioniert-der-bernoulli-effekt"
      },
      {
        "id": "586",
        "title": "Lerninhalt: Kraft und Gegenkraft",
        "folder": "lerninhalt-kraft-und-gegenkraft-586"
      },
      {
        "id": "584",
        "title": "Lerninhalt: Gewichtskraft",
        "folder": "lerninhalt-gewichtskraft-584"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=newton+gravitation&t=3752"
  },
  "arbeit-leistung-energie-und-impuls": {
    "slug": "arbeit-leistung-energie-und-impuls",
    "title": "Mechanische Arbeit, Energie & Impuls",
    "category": "Mechanik & Dynamik",
    "shortDesc": "Arbeit, Energieformen, mechanische Leistung, Energieerhaltung und Impulserhaltung.",
    "longDesc": "Arbeit und Energie sind Schlüsselbegriffe der gesamten Physik. Mechanische Energie tritt als Lageenergie (potenzielle Energie) und Bewegungsenergie (kinetische Energie) auf. Der Energieerhaltungssatz besagt, dass Energie niemals verloren geht.",
    "keyPoints": [
      "Mechanische Arbeit: \\(W = F \\cdot s\\) (in Joule bzw. Newtonmeter, wenn Kraft und Weg gleichgerichtet sind)",
      "Leistung (P): Verrichtete Arbeit pro Zeiteinheit (\\(P = \\frac{W}{t}\\) in Watt bzw. J/s)",
      "Kinetische Energie: \\(E_{\\text{kin}} = \\frac{1}{2} m v^2\\) (Bewegungsenergie)",
      "Potenzielle Energie: \\(E_{\\text{pot}} = m \\cdot g \\cdot h\\) (Lageenergie im Erdschwerefeld)",
      "Energieerhaltungssatz der Mechanik: In einem abgeschlossenen System ohne Reibung bleibt \\(E_{\\text{pot}} + E_{\\text{kin}}\\) konstant",
      "Impuls: \\(p = m \\cdot v\\) (Vektorgröße, Impulserhaltung bei Stößen)"
    ],
    "exercises": [
      {
        "id": "275",
        "title": "Arbeit, Energie und Leistung",
        "folder": "warme-und-temperatur-275"
      },
      {
        "id": "5297",
        "title": "Impuls und Impulserhaltung",
        "folder": "impuls-und-impulserhaltung-5297"
      },
      {
        "id": "581",
        "title": "Mechanische Arbeit",
        "folder": "lerninhalt-arbeit-581"
      },
      {
        "id": "582",
        "title": "Mechanische Leistung",
        "folder": "lerninhalt-leistung-582"
      },
      {
        "id": "580",
        "title": "Energieformen und Energieumwandlung",
        "folder": "lerninhalt-energie-580"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=arbeit+energie+leistung&t=3752"
  },
  "optik-licht-und-schatten": {
    "slug": "optik-licht-und-schatten",
    "title": "Lichtausbreitung, Schatten & Lichtgeschwindigkeit",
    "category": "Optik & Lichtlehre",
    "shortDesc": "Geradlinige Lichtausbreitung, Lichtquellen, Schattenwurf, Kern- und Halbschatten sowie Lichtgeschwindigkeit.",
    "longDesc": "Licht ermöglicht uns das Sehen und die Wahrnehmung unserer Umwelt. Licht bewegt sich mit der maximalen Naturgeschwindigkeit von rund 300.000 km/s im Vakuum aus und wirft hinter undurchsichtigen Körpern scharfe Schatten.",
    "keyPoints": [
      "Lichtquellen: Selbstleuchtende Körper (Sonne, Glühlampe, Flamme) vs. beleuchtete Körper (Mond, Gegenstände)",
      "Geradlinige Ausbreitung: Im homogenen Medium breitet sich Licht geradlinig als Lichtstrahl aus",
      "Schattenbildung: Bei punktförmiger Lichtquelle entsteht scharfer Kernschatten; bei ausgedehnter Lichtquelle Kern- und Halbschatten",
      "Finsternisse: Mond- und Sonnenfinsternis als gigantische Schattenspiele im Weltraum",
      "Lichtgeschwindigkeit: \\(c \\approx 300.000\\,\\text{km/s}\\) im Vakuum; fundamentale Naturkonstante"
    ],
    "exercises": [
      {
        "id": "2253",
        "title": "Die Ausbreitung von Licht",
        "folder": "die-ausbreitung-von-licht-2253"
      },
      {
        "id": "3246",
        "title": "Licht und Schatten",
        "folder": "licht-und-schatten-3246"
      },
      {
        "id": "5282",
        "title": "Die Lichtgeschwindigkeit",
        "folder": "die-lichtgeschwindigkeit-5282"
      },
      {
        "id": "5325",
        "title": "Verschiedene Lichtquellen",
        "folder": "verschiedene-lichtquellen-5325"
      },
      {
        "id": "laserstrahl",
        "title": "Wie funktioniert ein Laserstrahl",
        "folder": "wie-funktioniert-ein-laserstrahl"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=licht+schatten+optik&t=3752"
  },
  "reflexion-spiegel-und-farben": {
    "slug": "reflexion-spiegel-und-farben",
    "title": "Reflexion, Spiegel & Farbzerlegung",
    "category": "Optik & Lichtlehre",
    "shortDesc": "Reflexionsgesetz, ebene und gekrümmte Spiegel, Farbspektrum, additive und subtraktive Farbmischung.",
    "longDesc": "Trifft Licht auf glatte Grenzflächen, wird es nach dem Reflexionsgesetz zurückgeworfen. Bei der Zerlegung von weißem Licht mit einem Prisma wird sichtbar, dass Sonnenlicht aus einem kontinuierlichen Farbspektrum besteht.",
    "keyPoints": [
      "Reflexionsgesetz: Einfallswinkel \\(\\alpha\\) = Reflexionswinkel \\(\\alpha'\\) bezüglich des Einfallslotes",
      "Ebene Spiegel: Erzeugen ein aufrechtes, seitenverkehrtes virtuelles Spiegelbild im gleichen scheinbaren Abstand",
      "Gekrümmte Spiegel: Hohlspiegel (bündeln im Brennpunkt F) vs. Wölbspiegel (verkleinern, weites Sichtfeld)",
      "Spektralfarben: Weißes Licht spaltet sich in Rot, Orange, Gelb, Grün, Blau, Indigo und Violett auf",
      "Additive Farbmischung: Mischen von Lichtfarben (Rot + Grün + Blau = Weiß, RGB-Displays)",
      "Subtraktive Farbmischung: Mischen von Körperfarben / Pigmenten (Cyan + Magenta + Gelb = Schwarz, Farbdruck)"
    ],
    "exercises": [
      {
        "id": "2257",
        "title": "Das Farbspektrum",
        "folder": "das-farbspektrum-2257"
      },
      {
        "id": "2258",
        "title": "Additive und Subtraktive Farbmischung",
        "folder": "additive-und-subtraktive-farbmischung-2258"
      },
      {
        "id": "2259",
        "title": "Das Reflexionsgesetz",
        "folder": "das-reflexionsgesetz-2259"
      },
      {
        "id": "2260",
        "title": "Ebene Spiegel, Hohlspiegel und Wölbspiegel",
        "folder": "ebene-spiegel-hohlspiegel-und-wolbspiegel-2260"
      },
      {
        "id": "5314",
        "title": "Reflexion",
        "folder": "reflexion-5314"
      },
      {
        "id": "5289",
        "title": "Ebene und gewölbte Spiegel",
        "folder": "ebene-und-gewolbte-spiegel-5289"
      },
      {
        "id": "5328",
        "title": "Zerlegung des weißen Lichtes",
        "folder": "zerlegung-des-weiesen-lichtes-5328"
      },
      {
        "id": "regenbogen",
        "title": "Wie funktioniert ein Regenbogen",
        "folder": "wie-funktioniert-ein-regenbogen"
      },
      {
        "id": "2547",
        "title": "Wie funktioniert ein Parabolspiegel",
        "folder": "wie-funktioniert-ein-parabolspiegel-2547"
      },
      {
        "id": "2549",
        "title": "Wie funktioniert ein Periskop",
        "folder": "wie-funktioniert-ein-periskop-2549"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=spiegel+farben+optik&t=3752"
  },
  "lichtbrechung-und-linsen": {
    "slug": "lichtbrechung-und-linsen",
    "title": "Lichtbrechung, Linsen & Optische Instrumente",
    "category": "Optik & Lichtlehre",
    "shortDesc": "Snelliussches Brechungsgesetz, Sammel- und Zerstreuungslinsen, Lupe, Mikroskop, Teleskop, Beamer und Auge.",
    "longDesc": "Beim Übertritt von Licht in ein Medium mit anderer optischer Dichte ändert sich die Ausbreitungsgeschwindigkeit und der Strahl wird gebrochen. Mit Linsensystemen lassen sich kleinste Zellen unter dem Mikroskop oder ferne Galaxien durch Teleskope betrachten.",
    "keyPoints": [
      "Brechungsgesetz: Licht wird beim Übergang von optisch dünneren zu dichteren Medien zum Lot hin gebrochen",
      "Totalreflexion: Tritt beim Übergang vom dichteren zum dünneren Medium ab einem Grenzwinkel auf; Basis der Glasfaser-Datenübertragung",
      "Sammellinse (konvex): Bündelt achsenparallele Lichtstrahlen im Brennpunkt F (reelle oder vergrößerte virtuelle Bilder)",
      "Zerstreuungslinse (konkav): Streut einfallende Lichtstrahlen; erzeugt aufrechte, verkleinerte virtuelle Bilder",
      "Optische Instrumente: Lupe, Mikroskop (Objektiv + Okular), Teleskop, Fotoapparat und Projektoren",
      "Menschliches Auge: Hornhaut und Augenlinse werfen ein reelles, umgekehrtes Bild auf die Netzhaut; Sehfehlerkorrektur durch Brillen"
    ],
    "exercises": [
      {
        "id": "2255",
        "title": "Die Lichtbrechung",
        "folder": "die-lichtbrechung-2255"
      },
      {
        "id": "2256",
        "title": "Lichtbrechung mit Linsen",
        "folder": "lichtbrechung-mit-linsen-2256"
      },
      {
        "id": "2261",
        "title": "Die Lupe",
        "folder": "die-lupe-2261"
      },
      {
        "id": "2262",
        "title": "Der Projektor",
        "folder": "der-projektor-2262"
      },
      {
        "id": "2263",
        "title": "Mikroskop und Teleskop",
        "folder": "mikroskop-und-teleskop-2263"
      },
      {
        "id": "2264",
        "title": "So Funktioniert ein Beamer",
        "folder": "so-funktioniert-ein-beamer-2264"
      },
      {
        "id": "2265",
        "title": "So Funktioniert ein Fotoapparat",
        "folder": "so-funktioniert-ein-fotoapparat-2265"
      },
      {
        "id": "5248",
        "title": "Brechung von Licht",
        "folder": "brechung-von-licht-5248"
      },
      {
        "id": "5285",
        "title": "Die Totalreflexion",
        "folder": "die-totalreflexion-5285"
      },
      {
        "id": "5247",
        "title": "Bildentstehung bei Linsen",
        "folder": "bildentstehung-bei-linsen-5247"
      },
      {
        "id": "2562",
        "title": "Wie funktioniert ein Spektrometer",
        "folder": "wie-funktioniert-ein-spektrometer-2562"
      },
      {
        "id": "2565",
        "title": "Wie funktioniert ein Teleskop",
        "folder": "wie-funktioniert-ein-teleskop-2565"
      },
      {
        "id": "2515",
        "title": "Wie funktioniert ein Elektronenmikroskop",
        "folder": "wie-funktioniert-ein-elektronenmikroskop-2515"
      },
      {
        "id": "holographie",
        "title": "Wie funktioniert die Holographie",
        "folder": "wie-funktioniert-die-holographie"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=linsen+brechung+optik&t=3752"
  },
  "elektrostatik-und-stromkreise": {
    "slug": "elektrostatik-und-stromkreise",
    "title": "Elektrostatik, Stromkreise & Sicherheit",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Elektrische Ladungen, Reibungselektrizität, Stromkreise, Faraday-Käfig und Schutzmaßnahmen im Alltag.",
    "longDesc": "Die Elektrostatik behandelt ruhende elektrische Ladungen und die Kräfte zwischen ihnen. In geschlossenen Stromkreisen fließen Ladungsträger durch Leiter, während Isolatoren und der Faraday'sche Käfig vor Stromschlägen und Blitzschlag schützen.",
    "keyPoints": [
      "Elektrische Ladung: Positive (Protonen) und negative Ladungen (Elektronen); gleichnamige stoßen sich ab, ungleichnamige ziehen sich an",
      "Elektrischer Stromkreis: Benötigt geschlossenen Kreis mit Spannungsquelle, Leitern, Schalter und Verbraucher",
      "Elektrische Leiter und Isolatoren: Metalle leiten durch freie Leitungselektronen; Kunststoffe, Glas und Gummi isolieren",
      "Faraday'scher Käfig: Geschlossene metallische Hülle schirmt das Innere vollständig gegen äußere elektrostatische Felder und Blitze ab",
      "Sicherheitsmaßnahmen: Schutzleiter, FI-Schutzschalter und Schmelzsicherungen verhindern Überlastung und Unfälle"
    ],
    "exercises": [
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
        "id": "5261",
        "title": "Der Faraday'sche Käfig",
        "folder": "der-faraday-039-sche-kafig-5261"
      },
      {
        "id": "298",
        "title": "Elektrizität und Elektrostatik",
        "folder": "elektrizitat-und-elektrostatik-298"
      },
      {
        "id": "5290",
        "title": "Elektrische Ladung",
        "folder": "elektrische-ladung-5290"
      },
      {
        "id": "5250",
        "title": "Das elektrische Feld",
        "folder": "das-elektrische-feld-5250"
      },
      {
        "id": "299",
        "title": "Der Stromkreis",
        "folder": "der-stromkreis-299"
      },
      {
        "id": "erdung",
        "title": "Wie funktioniert die Erdung",
        "folder": "wie-funktioniert-die-erdung"
      },
      {
        "id": "blitz",
        "title": "Wie funktioniert der Blitz",
        "folder": "wie-funktioniert-der-blitz"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=elektrostatik+stromkreis&t=3752"
  },
  "elektrische-groessen-und-schaltungen": {
    "slug": "elektrische-groessen-und-schaltungen",
    "title": "Elektrische Größen, Ohmsches Gesetz & Schaltungen",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Spannung, Stromstärke, elektrischer Widerstand, Ohmsches Gesetz, Reihen- und Parallelschaltung, Relais.",
    "longDesc": "Spannung treibt den Strom durch den elektrischen Widerstand eines Leiters. Das Ohmsche Gesetz und Schaltungsregeln beschreiben exakt das Verhalten von einfachen und komplexen Stromkreisen.",
    "keyPoints": [
      "Spannung (U): Potenzialdifferenz in Volt (V); treibende Ursache des Stromflusses",
      "Stromstärke (I): Ladungsmenge pro Zeiteinheit in Ampere (A)",
      "Widerstand (R): Hemmung des Elektronenflusses in Ohm (\\(\\Omega\\))",
      "Ohmsches Gesetz: \\(U = R \\cdot I\\) bzw. \\(R = \\frac{U}{I}\\)",
      "Reihenschaltung: Gleicher Strom durch alle Bauteile; Gesamtspannung und Gesamtwiderstand addieren sich",
      "Parallelschaltung: Gleiche Spannung an allen Zweigen; Gesamtstrom ist die Summe der Teilströme",
      "Elektromagnetisches Relais: Schaltet mit kleinem Steuerstrom einen großen Arbeitsstromkreis gefahrlos ein oder aus"
    ],
    "exercises": [
      {
        "id": "315",
        "title": "Elektrische Arbeit und Leistung",
        "folder": "elektrische-arbeit-und-leistung-315"
      },
      {
        "id": "316",
        "title": "Wechselstrom, Gleichstrom und Stromrichtung",
        "folder": "wechselstrom-gleichstrom-und-stromrichtung-316"
      },
      {
        "id": "5256",
        "title": "Das Relais",
        "folder": "das-relais-5256"
      },
      {
        "id": "3880",
        "title": "Georg Simon Ohm und das Ohmsche Gesetz",
        "folder": "georg-simon-ohm-3880"
      },
      {
        "id": "2555",
        "title": "Wie funktioniert ein Relais?",
        "folder": "wie-funktioniert-ein-relais-2555"
      },
      {
        "id": "5257",
        "title": "Der elektrische Schwingkreis",
        "folder": "der-elektrische-schwingkreis-5257"
      },
      {
        "id": "kondensator",
        "title": "Wie funktioniert ein Kondensator",
        "folder": "wie-funktioniert-ein-kondensator"
      },
      {
        "id": "led",
        "title": "Wie funktioniert eine LED",
        "folder": "wie-funktioniert-eine-led"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=ohmsches+gesetz+widerstand&t=3752"
  },
  "magnetismus-und-erdmagnetfeld": {
    "slug": "magnetismus-und-erdmagnetfeld",
    "title": "Magnetismus, Magnetfelder & Erdmagnetismus",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Dauermagnete, Magnetpole, Magnetfeldlinien, Elementarmagnete, Kompass und Erdmagnetfeld.",
    "longDesc": "Magnete üben berührungslos anziehende oder abstoßende Kräfte auf ferromagnetische Stoffe (Eisen, Nickel, Kobalt) aus. Das Magnetfeld visualisiert den Kraftraum um jeden Magneten, und das Erdmagnetfeld schützt unseren Planeten vor kosmischer Strahlung.",
    "keyPoints": [
      "Magnetpole: Nord- und Südpol treten immer paarweise auf; ungleichnamige Pole ziehen sich an, gleichnamige stoßen sich ab",
      "Magnetfeldlinien: Treten am Nordpol aus und treten am Südpol ein; schneiden sich niemals",
      "Elementarmagnete: Ferromagnetische Stoffe besitzen mikroskopische magnetische Bereiche (Weiss-Bezirke)",
      "Erdmagnetfeld: Die Erde wirkt wie ein riesiger Stabmagnet mit magnetischem Südpol nahe dem geografischen Nordpol",
      "Kompass & Navigation: Die Magnetnadel richtet sich entlang der Feldlinien des Erdmagnetfelds aus"
    ],
    "exercises": [
      {
        "id": "726",
        "title": "Versuche mit dem Magneten",
        "folder": "versuche-mit-dem-magneten-726"
      },
      {
        "id": "2236",
        "title": "Der Erdmagnetismus",
        "folder": "der-erdmagnetismus-2236"
      },
      {
        "id": "5254",
        "title": "Das Magnetfeld der Erde",
        "folder": "das-magnetfeld-der-erde-5254"
      },
      {
        "id": "5255",
        "title": "Das Magnetfeld",
        "folder": "das-magnetfeld-5255"
      },
      {
        "id": "5308",
        "title": "Magnetische Influenz",
        "folder": "magnetische-influenz-5308"
      },
      {
        "id": "7074",
        "title": "Wie funktioniert der Magnetismus",
        "folder": "wie-funktioniert-der-magnetismus"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=magnetismus+erdmagnetfeld&t=3752"
  },
  "elektromagnetismus-und-induktion": {
    "slug": "elektromagnetismus-und-induktion",
    "title": "Elektromagnetismus & Elektromagnetische Induktion",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Elektromagnete, Lorentz-Kraft, elektromagnetische Induktion, Lenzsche Regel und Bewegung im Magnetfeld.",
    "longDesc": "Strom erzeugt Magnetfelder und sich ändernde Magnetfelder erzeugen elektrische Spannungen. Diese Entdeckung von Oersted und Faraday bildet das Herzstück moderner Energietechnik von Generatoren bis zu Wirbelstrombremsen.",
    "keyPoints": [
      "Elektromagnet: Spule mit weichmagnetischem Eisenkern; Magnetfeld lässt sich durch Stromfluss steuern und abschalten",
      "Lorentzkraft: Kraft auf bewegte elektrische Ladungen im Magnetfeld (Drei-Finger-Regel der rechten Hand)",
      "Elektromagnetische Induktion: Ändert sich das Magnetfeld in einer Spule, wird eine elektrische Spannung induziert",
      "Induktionsgesetz: Je schneller sich das Magnetfeld ändert und je mehr Windungen die Spule hat, desto höher ist die induzierte Spannung",
      "Lenz'sche Regel: Der Induktionsstrom ist stets so gerichtet, dass er der Ursache seiner Entstehung entgegenwirkt"
    ],
    "exercises": [
      {
        "id": "5259",
        "title": "Der Elektromagnet",
        "folder": "der-elektromagnet-2-5259"
      },
      {
        "id": "2242",
        "title": "Die Elektromagnetische Induktion",
        "folder": "die-elektromagnetische-induktion-2242"
      },
      {
        "id": "2243",
        "title": "Die elektromagnetische Kraft",
        "folder": "die-elektromagnetischeh-kraft-2243"
      },
      {
        "id": "5298",
        "title": "Induktion durch Bewegung",
        "folder": "induktion-durch-bewegung-5298"
      },
      {
        "id": "5305",
        "title": "Lenz'sche Regel",
        "folder": "lenz-039-sche-regel-5305"
      },
      {
        "id": "7060",
        "title": "Wie funktioniert ein Induktionskochfeld",
        "folder": "wie-funktioniert-ein-induktionskochfeld"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=induktion+elektromagnetismus&t=3752"
  },
  "elektromotoren-wellen-und-magnettechnik": {
    "slug": "elektromotoren-wellen-und-magnettechnik",
    "title": "Elektromotoren, Wellen & Magnettechnik",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Gleichstrommotoren, Wechselstrommotoren, Drehfelder, magnetische Datenspeicherung und Schwingungen.",
    "longDesc": "Elektromotoren wandeln elektrische Energie in rotierende mechanische Bewegung um. Die Beherrschung magnetischer Felder ermöglicht zudem Technologien von elektrischen Antrieben bis hin zu magnetischen Festplatten und Speicherbändern.",
    "keyPoints": [
      "Gleichstrommotor: Rotor mit Kommutator (Polwender), der im Feld von Stator-Magneten rotiert",
      "Wechselstrom- und Drehstrommotor: Erzeugt ein umlaufendes magnetisches Drehfeld ohne verschleißanfällige Schleifkontakte",
      "Elektromagnetische Wellen: Schwingende elektrische und magnetische Felder breiten sich mit Lichtgeschwindigkeit aus",
      "Magnetische Datenspeicherung: Schreib-/Leseköpfe magnetisieren winzige ferromagnetische Domänen auf Disks und Bändern",
      "Energiewandlung: Hoher Wirkungsgrad von Elektromotoren (>90 %) im Vergleich zu Verbrennungsmotoren"
    ],
    "exercises": [
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
        "id": "5260",
        "title": "Der Elektromotor",
        "folder": "der-elektromotor-5260"
      },
      {
        "id": "7098",
        "title": "Wie funktioniert die Magnetschwebebahn",
        "folder": "wie-funktioniert-die-magnetschwebebahn"
      },
      {
        "id": "7092",
        "title": "Wie funktioniert ein MRT (Magnetresonanztomograph)",
        "folder": "wie-funktioniert-ein-mrt-magnetresonanztomograph"
      },
      {
        "id": "2248",
        "title": "Die Elektromagnetische Datenspeicherung",
        "folder": "die-elektromagnetische-datenspeicherung-2248"
      },
      {
        "id": "5307",
        "title": "Magnetische Datenspeicherung",
        "folder": "magnetische-datenspeicherung-5307"
      },
      {
        "id": "5251",
        "title": "Das elektromagnetische Spektrum",
        "folder": "das-elektromagnetische-spektrum-5251"
      },
      {
        "id": "5291",
        "title": "Elektromagnetische Wellen",
        "folder": "elektromagnetische-wellen-5291"
      },
      {
        "id": "2240",
        "title": "Der elektrodynamische Lautsprecher",
        "folder": "der-elektrodynamische-lautsprecher-2240"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=elektromotor+wellen&t=3752"
  },
  "transformatoren-stromnetze-und-energieuebertragung": {
    "slug": "transformatoren-stromnetze-und-energieuebertragung",
    "title": "Transformatoren, Stromnetze & Energieübertragung",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Transformator-Prinzip, Drehstrom, Hochspannungsleitungen, Generatoren und verlustarmer Energietransport.",
    "longDesc": "Stromnetze transportieren Gigawatt an Leistung über hunderte Kilometer. Transformatoren wandeln Spannungen verlustarm auf Höchstspannungsniveau (bis 380 kV) hoch, um Leitungsverluste drastisch zu minimieren, und in Ortsnetzstationen wieder auf Haushaltsspannung herunter.",
    "keyPoints": [
      "Transformator-Gleichung: \\(\\frac{U_1}{U_2} = \\frac{N_1}{N_2}\\) (Verhältnis der Spannungen entspricht dem Windungsverhältnis)",
      "Minimierung von Leitungsverlusten: \\(P_{\\text{Verlust}} = I^2 \\cdot R\\); Verdopplung der Spannung viertelt den Leitungsverlust",
      "Drehstrom (Dreiphasenwechselstrom): Drei um 120° phasenverschobene Wechselspannungen ermöglichen effiziente Kraftübertragung",
      "Generatoren: Wandeln mechanische Drehung von Turbinen über elektromagnetische Induktion in Wechselspannung um",
      "Stromnetz-Ebenen: Übertragungsnetz (Höchstspannung), Verteilnetz (Mittel-/Niederspannung 230/400 V)"
    ],
    "exercises": [
      {
        "id": "2239",
        "title": "Das Stromnetz",
        "folder": "das-stromnetz-2239"
      },
      {
        "id": "2247",
        "title": "Der Generator",
        "folder": "der-generator-2247"
      },
      {
        "id": "5272",
        "title": "Der Transformator",
        "folder": "der-transformator-2-5272"
      },
      {
        "id": "5288",
        "title": "Drehstrom",
        "folder": "drehstrom-5288"
      },
      {
        "id": "5294",
        "title": "Generatoren Stromerzeugende Maschinen",
        "folder": "generatoren-stromerzeugende-maschinen-5294"
      },
      {
        "id": "5321",
        "title": "Übertragung Elektrischer Energie",
        "folder": "bertragung-elektrischer-energie-5321"
      },
      {
        "id": "5323",
        "title": "Umwandlung Elektrischer Energie",
        "folder": "umwandlung-elektrischer-energie-5323"
      },
      {
        "id": "7116",
        "title": "Wie funktioniert ein Transformator",
        "folder": "wie-funktioniert-ein-transformator"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=transformator+stromnetz&t=3752"
  },
  "energieerzeugung-und-kraftwerke": {
    "slug": "energieerzeugung-und-kraftwerke",
    "title": "Kraftwerke & Nachhaltige Energieerzeugung",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Wasserkraft, Windenergie, Photovoltaik, Solarthermie, Wärmekraftwerke, Atomkraft und Energiewende.",
    "longDesc": "Die moderne Energieversorgung basiert auf der Wandlung von Primärenergie in elektrische Nutzenergie. Während konventionelle Kraftwerke auf fossilen Brennstoffen oder Kernspaltung beruhen, sichern erneuerbare Energien (Wasser, Wind, Sonne) eine nachhaltige Zukunft.",
    "keyPoints": [
      "Wasserkraftwerke: Laufwasserkraftwerke für Grundlast, Pumpspeicherkraftwerke als gigantische Energiespeicher",
      "Windkraftanlagen: Rotoren wandeln die Strömungsenergie des Windes über Generator und Umrichter in Netzstrom um",
      "Photovoltaik & Solarthermie: Solarzellen nutzen den photoelektrischen Effekt; Solarthermie erzeugt Wärme und Dampf",
      "Wärmekraftwerke: Kohle- und Gaskraftwerke erzeugen Hochdruckdampf, der Dampfturbinen antreibt (Wirkungsgrad 35-60 %)",
      "Kernkraftwerke: Nutzen die Hitze kontrollierter Kernspaltung zur Dampferzeugung",
      "Energiewende: Umstellung auf CO2-neutrale Stromerzeugung und Speichertechnologien"
    ],
    "exercises": [
      {
        "id": "2249",
        "title": "Wasserkraftwerke",
        "folder": "wasserkraftwerke-2249"
      },
      {
        "id": "5242",
        "title": "Atomkraftwerke",
        "folder": "atomkraftwerke-2-5242"
      },
      {
        "id": "5302",
        "title": "Laufwasserkraftwerke",
        "folder": "laufwasserkraftwerke-5302"
      },
      {
        "id": "5311",
        "title": "Photovoltaik",
        "folder": "photovoltaik-5311"
      },
      {
        "id": "5318",
        "title": "Sonnenkraftwerke",
        "folder": "sonnenkraftwerke-5318"
      },
      {
        "id": "5319",
        "title": "Speicherkraftwerke",
        "folder": "speicherkraftwerke-5319"
      },
      {
        "id": "5326",
        "title": "Wärmekraftwerke",
        "folder": "warmekraftwerke-5326"
      },
      {
        "id": "5327",
        "title": "Windkraftwerke",
        "folder": "windkraftwerke-2-5327"
      },
      {
        "id": "7059",
        "title": "Wie funktioniert eine Windkraftanlage",
        "folder": "wie-funktioniert-eine-windkraftanlage"
      },
      {
        "id": "7100",
        "title": "Wie funktioniert ein Geothermiekraftwerk",
        "folder": "wie-funktioniert-ein-geothermiekraftwerk"
      },
      {
        "id": "7101",
        "title": "Wie funktioniert die Müllverbrennung und Energiegewinnung",
        "folder": "wie-funktioniert-die-muellverbrennung-und-energiegewinnung"
      },
      {
        "id": "7154",
        "title": "Wie funktioniert die Energiespeicherung durch Pumpspeicherwerke",
        "folder": "wie-funktioniert-die-energiespeicherung-durch-pumpspeicherwerke"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kraftwerke+energie&t=3752"
  },
  "waermelehre-temperatur-und-aggregatzustaende": {
    "slug": "waermelehre-temperatur-und-aggregatzustaende",
    "title": "Wärmelehre, Temperatur & Aggregatzustände",
    "category": "Thermodynamik & Akustik",
    "shortDesc": "Temperatur, Kelvin-Skala, Teilchenbewegung, Aggregatzustandsänderungen und spezifische Wärmekapazität.",
    "longDesc": "Wärme ist ungeordnete Teilchenbewegung. Die Thermodynamik beschreibt Temperatur, thermische Ausdehnung, Phasenumwandlungen zwischen fest, flüssig und gasförmig sowie die dafür notwendigen Energiemengen.",
    "keyPoints": [
      "Temperatur: Maß für die mittlere Bewegungsenergie der Teilchen; absoluter Nullpunkt bei -273,15 °C (0 Kelvin)",
      "Spezifische Wärmekapazität (c): Wärmemenge, um 1 kg eines Stoffes um 1 Kelvin zu erwärmen (\\(Q = c \\cdot m \\cdot \\Delta T\\))",
      "Phasenübergänge: Schmelzen/Erstarren, Verdampfen/Kondensieren, Sublimieren/Resublimieren",
      "Schmelz- und Verdampfungswärme: Energie zur Überwindung der Gitterkräfte ohne Temperaturanstieg",
      "Anomalie des Wassers: Höchste Dichte bei 4 °C; schützt Gewässer vor dem Durchfrieren bis zum Grund"
    ],
    "exercises": [
      {
        "id": "276",
        "title": "Wärme und Temperatur",
        "folder": "fest-flussig-und-gasformig-276"
      },
      {
        "id": "277",
        "title": "Fest, flüssig und gasförmig",
        "folder": "fest-flussig-und-gasformig-2-277"
      },
      {
        "id": "331",
        "title": "Wärmeenergie und spezifische Wärmekapazität",
        "folder": "warmeenergie-und-spezifische-warmekapazitat-331"
      },
      {
        "id": "333",
        "title": "Übergang zwischen den Aggregatzuständen",
        "folder": "bergang-zwischen-den-aggregatzustanden-333"
      },
      {
        "id": "7134",
        "title": "Wie funktioniert die Seifenblase (Oberflächenspannung)",
        "folder": "wie-funktioniert-die-seifenblase-oberflaechenspannung"
      },
      {
        "id": "barometer",
        "title": "Wie funktioniert ein Barometer",
        "folder": "wie-funktioniert-ein-barometer"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=waermelehre+temperatur&t=3752"
  },
  "waermeausbreitung-und-waermetechnik": {
    "slug": "waermeausbreitung-und-waermetechnik",
    "title": "Wärmeübertragung & Moderne Wärmetechnik",
    "category": "Thermodynamik & Akustik",
    "shortDesc": "Wärmeleitung, Konvektion, Wärmestrahlung, Wärmepumpen, Dampfmaschinen und Verbrennungsmotoren.",
    "longDesc": "Wärme fließt stets vom wärmeren zum kälteren Körper. Ingenieure nutzen die Prinzipien der Wärmeübertragung für effiziente Heizungen, Kühlschränke, Wärmepumpen und thermodynamische Kreisprozesse in Motoren.",
    "keyPoints": [
      "Drei Arten des Wärmetransports: Wärmeleitung (in Festkörpern), Wärmeströmung/Konvektion (in Fluiden), Wärmestrahlung (im Vakuum)",
      "Wärmedämmung: Schlechte Wärmeleiter (Luft, Styropor, Vakuum) reduzieren Energieverluste von Gebäuden",
      "Wärmepumpe & Kühlschrank: Entzieht einem kälteren Reservoir Wärme und gibt sie an ein wärmeres ab (unter Aufwand von Arbeitsenergie)",
      "Dampfmaschine & Dampfturbine: Historische und moderne Umwandlung von Wärmeenergie in mechanische Arbeit",
      "Verbrennungsmotoren: 4-Takt-Otto- und Dieselmotoren (Ansaugen, Verdichten, Arbeiten, Ausstoßen)"
    ],
    "exercises": [
      {
        "id": "334",
        "title": "Wärmetransport",
        "folder": "warmetransport-334"
      },
      {
        "id": "335",
        "title": "Kühlschrank und Wärmepumpe",
        "folder": "kuhlschrank-und-warmepumpe-335"
      },
      {
        "id": "336",
        "title": "Dampfmaschine",
        "folder": "dampfmaschine-336"
      },
      {
        "id": "337",
        "title": "Verbrennungsmotoren",
        "folder": "verbrennungsmotoren-337"
      },
      {
        "id": "7057",
        "title": "Wie funktioniert eine Wärmepumpe",
        "folder": "wie-funktioniert-eine-waermepumpe"
      },
      {
        "id": "2567",
        "title": "Wie funktioniert ein Thermostat",
        "folder": "wie-funktioniert-ein-thermostat-2567"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=waermepumpe+waermetransport&t=3752"
  },
  "akustik-schall-und-wellen": {
    "slug": "akustik-schall-und-wellen",
    "title": "Akustik, Schallwellen & Lärmschutz",
    "category": "Thermodynamik & Akustik",
    "shortDesc": "Schallwellen, Tonhöhe, Lautstärke, Schallgeschwindigkeit, Ultraschall, Resonanz und Lärmbekämpfung.",
    "longDesc": "Schall ist eine mechanische Welle, die sich durch elastische Medien wie Luft, Wasser oder Festkörper ausbreitet. Akustik umfasst die Eigenschaften von Tönen, Klängen, Lärm sowie die Anwendung von Ultraschall in Medizin und Technik.",
    "keyPoints": [
      "Schallwellen: Longitudinalwellen aus periodischen Dichte- und Druckschwankungen; breiten sich in Luft mit ca. 340 m/s aus",
      "Tonhöhe & Frequenz: Frequenz in Hertz (Hz) bestimmt die Tonhöhe; menschlicher Hörbereich ca. 20 Hz bis 20.000 Hz",
      "Lautstärke & Schalldruckpegel: Gemessen in Dezibel (dB); logarithmische Skala",
      "Ultraschall: Schallwellen oberhalb von 20 kHz; genutzt in Sonar, medizinischer Sonographie und bei Fledermäusen",
      "Infraschall: Frequenzen unter 20 Hz; Erdbebenwellen, Windkraftanlagen, Elefanten-Kommunikation",
      "Lärmschutz & Dämpfung: Absorption und Reflexion von Schallwellen zur Minderung von Gehörschäden"
    ],
    "exercises": [
      {
        "id": "270",
        "title": "Akustik Grundlagen",
        "folder": "akustik-270"
      },
      {
        "id": "5244",
        "title": "Ausbreitung von Schall & Schallwellen",
        "folder": "ausbreitung-von-schall-schallwellen-5244"
      },
      {
        "id": "5245",
        "title": "Schall und Frequenzen",
        "folder": "ausbreitung-von-schall-schallwellen-2-5245"
      },
      {
        "id": "5322",
        "title": "Ultraschall in Natur und Technik",
        "folder": "ultraschall-5322"
      },
      {
        "id": "7073",
        "title": "Wie funktioniert der Schall",
        "folder": "wie-funktioniert-der-schall"
      },
      {
        "id": "7110",
        "title": "Wie funktioniert die Schallunterdrückung (Noise Cancelling)",
        "folder": "wie-funktioniert-die-schallunterdrueckung-noise-cancelling"
      },
      {
        "id": "7117",
        "title": "Wie funktioniert Ultraschall",
        "folder": "wie-funktioniert-ultraschall"
      },
      {
        "id": "5317",
        "title": "Schwingungen und Wellen",
        "folder": "schwingungen-und-wellen-5317"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=akustik+schall&t=3752"
  },
  "atommodelle-und-strahlung": {
    "slug": "atommodelle-und-strahlung",
    "title": "Atommodelle, Radioaktivität & Strahlung",
    "category": "Atom-, Kern- & Quantenphysik",
    "shortDesc": "Atommodelle, Isotope, radioaktiver Zerfall, Alphastrahlung, Betastrahlung, Gammastrahlung und Röntgenstrahlen.",
    "longDesc": "Die Erkundung des Mikrokosmos offenbarte den Aufbau der Atome und die Phänomene ionisierender Strahlung. Becquerel, die Curies und Röntgen legten den Grundstein für die moderne Kern- und Medizintechnik.",
    "keyPoints": [
      "Atommodelle: Von Demokrit über Thomson und Rutherford bis zu Bohrs Schalenmodell",
      "Atomkern: Besteht aus Nukleonen (positiv geladene Protonen und neutrale Neutronen)",
      "Radioaktivität: Spontaner Zerfall instabiler Atomkerne unter Aussendung von ionisierender Strahlung",
      "Strahlungsarten: Alpha (Heliumkerne), Beta (schnelle Elektronen/Positronen), Gamma (energiereiche Photonen)",
      "Halbwertszeit: Zeitspanne, nach der die Hälfte der vorhandenen radioaktiven Kerne zerfallen ist",
      "Röntgenstrahlung: Elektromagnetische Strahlung zur Durchleuchtung von Gewebe und Kristallen"
    ],
    "exercises": [
      {
        "id": "2267",
        "title": "Die Entdeckung der Radioaktivität",
        "folder": "die-entdeckung-der-radioaktivitat-2267"
      },
      {
        "id": "2268",
        "title": "Natürliche und künstliche Radioaktivität",
        "folder": "naturliche-und-kunstliche-radioaktivitat-2268"
      },
      {
        "id": "2269",
        "title": "Nachweis Radioaktiver Strahlung",
        "folder": "nachweis-radioaktiver-strahlung-2269"
      },
      {
        "id": "2270",
        "title": "Radioaktiver Zerfall",
        "folder": "radioaktiver-zerfall-2270"
      },
      {
        "id": "2271",
        "title": "Röntgen",
        "folder": "rontgen-2271"
      },
      {
        "id": "5279",
        "title": "Die Halbwertszeit",
        "folder": "die-halbwertszeit-5279"
      },
      {
        "id": "5283",
        "title": "Die Röntgenstrahlung",
        "folder": "die-rontgenstrahlung-5283"
      },
      {
        "id": "5313",
        "title": "Radioaktivität",
        "folder": "radioaktivitat-5313"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=radioaktivitaet+atomphysik&t=3752"
  },
  "kernenergie-und-quantenphysik": {
    "slug": "kernenergie-und-quantenphysik",
    "title": "Kernenergie, Kernfusion & Quantenphysik",
    "category": "Atom-, Kern- & Quantenphysik",
    "shortDesc": "Kernspaltung, Kettenreaktion, Kernfusion, Strahlentherapie, Risiken und Einführung in die Quantenphysik.",
    "longDesc": "Die Spaltung schwerer Kerne und die Fusion leichter Atomkerne setzen unvorstellbare Energiemengen frei. Die Kernphysik findet Anwendung in der Strahlentherapie gegen Krebs, birgt jedoch bei Unfällen und Atommüll erhebliche Risiken. Die Quantenphysik beschreibt das Verhalten von Energiepaketen (Quanten).",
    "keyPoints": [
      "Kernspaltung: Uran-235 fängt ein langsames Neutron ein und spaltet sich in zwei leichtere Kerne unter Freisetzung weiterer Neutronen",
      "Kettenreaktion: Kontrolliert im Kernreaktor durch Steuerstäbe; unkontrolliert bei Kernwaffen",
      "Kernfusion: Verschmelzung von Deuterium und Tritium zu Helium; Treibstoff der Sterne und zukünftiger Fusionsreaktoren",
      "Strahlentherapie: Gezielte Zerstörung von Tumorzellen durch ionisierende Bestrahlung",
      "Quantenphänomene: Welle-Teilchen-Dualismus, Planck'sches Wirkungsquantum und photoelektrischer Effekt"
    ],
    "exercises": [
      {
        "id": "2272",
        "title": "Strahlentherapie",
        "folder": "strahlentherapie-2272"
      },
      {
        "id": "2273",
        "title": "Gefahr von Kernkraftwerken",
        "folder": "gefahr-von-kernkraftwerken-2273"
      },
      {
        "id": "7082",
        "title": "Wie funktioniert ein Quantencomputer",
        "folder": "wie-funktioniert-ein-quantencomputer"
      },
      {
        "id": "7149",
        "title": "Wie funktioniert eine Atomuhr",
        "folder": "wie-funktioniert-eine-atomuhr"
      },
      {
        "id": "kernfusion",
        "title": "Wie funktioniert die Kernfusion",
        "folder": "wie-funktioniert-die-kernfusion"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kernenergie+quantenphysik&t=3752"
  },
  "sonnensystem-und-planeten": {
    "slug": "sonnensystem-und-planeten",
    "title": "Sonnensystem, Planeten & Monde",
    "category": "Astronomie, Geophysik & Raumfahrt",
    "shortDesc": "Die 8 Planeten, Sonne, Mond, Zwergplaneten, Monde des Sonnensystems und astronomische Dimensionen.",
    "longDesc": "Unser Sonnensystem beherbergt die Sonne im Zentrum, acht Planeten mit ihren zahlreichen Monden sowie Zwergplaneten und Asteroiden. Physikalische Gesetze wie Gravitation und Keplersche Gesetze bestimmen die Bahnen aller Himmelskörper.",
    "keyPoints": [
      "Aufbau des Sonnensystems: Sonne, 4 innere Gesteinsplaneten (Merkur, Venus, Erde, Mars), 4 äußere Gas-/Eisriesen (Jupiter, Saturn, Uranus, Neptun)",
      "Erdmond: Gebundene Rotation, Mondphasen, Ebbe und Flut durch Gezeitenkräfte",
      "Gasriesen: Jupiter als größter Planet mit dem Großen Roten Fleck; Saturn mit ausgeprägtem Ringsystem",
      "Zwergplanet Pluto und der Kuipergürtel jenseits der Neptunbahn",
      "Astronomische Maßeinheiten: Astronomische Einheit (AE ≈ 149,6 Mio. km) und Lichtjahr (ca. 9,46 Billionen km)"
    ],
    "exercises": [
      {
        "id": "2280",
        "title": "Der Mond",
        "folder": "der-mond-2280"
      },
      {
        "id": "2281",
        "title": "Der Planet Jupiter",
        "folder": "der-planet-jupiter-2281"
      },
      {
        "id": "2282",
        "title": "Der Planet Mars",
        "folder": "der-planet-mars-2282"
      },
      {
        "id": "2283",
        "title": "Der Planet Merkur",
        "folder": "der-planet-merkur-2283"
      },
      {
        "id": "2284",
        "title": "Der Planet Neptun",
        "folder": "der-planet-neptun-2284"
      },
      {
        "id": "2285",
        "title": "Der Planet Saturn",
        "folder": "der-planet-saturn-2285"
      },
      {
        "id": "2286",
        "title": "Der Planet Uranus",
        "folder": "der-planet-uranus-2286"
      },
      {
        "id": "2287",
        "title": "Der Planet Venus",
        "folder": "der-planet-venus-2287"
      },
      {
        "id": "2288",
        "title": "Der Zwergplanet Pluto",
        "folder": "der-zwergplanet-pluto-2288"
      },
      {
        "id": "4477",
        "title": "Die Geburt der Erde – vom Staub zum Planeten",
        "folder": "die-geburt-der-erde-vom-staub-zum-planeten-4477"
      },
      {
        "id": "5324",
        "title": "Unser Sonnensystem",
        "folder": "unser-sonnensystem-5324"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=planeten+sonnensystem&t=3752"
  },
  "geophysik-und-himmelsphaenomene": {
    "slug": "geophysik-und-himmelsphaenomene",
    "title": "Geophysik & Himmelsphänomene",
    "category": "Astronomie, Geophysik & Raumfahrt",
    "shortDesc": "Erdaufbau, Plattentektonik, Vulkanismus, Erdbeben, Polarlichter und optische Phänomene am Himmel.",
    "longDesc": "Die Geophysik erforscht die Erde mit physikalischen Methoden von den Tiefen des Erdkerns bis in die obere Atmosphäre. Erscheinungen wie Polarlichter, Regenbögen und seismische Wellen verknüpfen Physik mit den Kräften unseres Planeten.",
    "keyPoints": [
      "Schalenaufbau der Erde: Erdkruste, Erdmantel, äußerer flüssiger und innerer fester Erdkern",
      "Plattentektonik & Seismik: Erdbebenwellen (P- und S-Wellen) durchdringen das Erdinnere und verraten dessen Struktur",
      "Vulkanismus und Konvektionsströme im zähplastischen Erdmantel",
      "Polarlichter (Aurora): Hochenergetische Teilchen des Sonnenwinds regen Gasmoleküle der Hochatmosphäre zum Leuchten an"
    ],
    "exercises": [
      {
        "id": "2043",
        "title": "Aufbau des Planeten Erde",
        "folder": "aufbau-des-planeten-erde-2043"
      },
      {
        "id": "5487",
        "title": "Erdbeben - Wie Geophysiker sie vorhersagen und überwachen",
        "folder": "erdbeben-wie-geophysiker-sie-vorhersagen-und-uberwachen-5487"
      },
      {
        "id": "7072",
        "title": "Wie funktioniert die Gezeitenkraft",
        "folder": "wie-funktioniert-die-gezeitenkraft"
      },
      {
        "id": "7077",
        "title": "Wie funktioniert das Polarlicht",
        "folder": "wie-funktioniert-das-polarlicht"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geophysik+erdbeben&t=3752"
  },
  "kosmologie-sterne-und-raumfahrt": {
    "slug": "kosmologie-sterne-und-raumfahrt",
    "title": "Kosmologie, Sterne & Raumfahrt",
    "category": "Astronomie, Geophysik & Raumfahrt",
    "shortDesc": "Der Urknall, Entwicklung des Universums, Sterne, Satelliten, Umlaufbahnen und Raumfahrttechnik.",
    "longDesc": "Von der Entstehung des Kosmos im Urknall bis zur bemannten Raumfahrt wendet die moderne Astrophysik physikalische Gesetze im kosmischen Maßstab an. Umlaufbahnen von Satelliten gehorchen denselben Naturgesetzen wie Planetenbahnen.",
    "keyPoints": [
      "Urknall-Theorie (Big Bang): Entstehung von Raum, Zeit und Materie vor rund 13,8 Milliarden Jahren",
      "Expansion des Weltalls: Rotverschiebung des Lichts ferner Galaxien (Hubble-Gesetz) und kosmische Hintergrundstrahlung",
      "Lebenszyklus der Sterne: Von der Molekülwolke über Hauptreihensterne bis zum Weißen Zwerg, Neutronenstern oder Schwarzen Loch",
      "Satellitenbahnen: Erste kosmische Geschwindigkeit (7,9 km/s) für eine niedrige Erdumlaufbahn; geostationäre Bahnen in ca. 35.800 km Höhe",
      "Raketenprinzip: Rückstoßantrieb nach dem 3. Newtonschen Gesetz (Actio = Reactio)"
    ],
    "exercises": [
      {
        "id": "2276",
        "title": "Umlaufbahnen von Planeten und Satelliten",
        "folder": "umlaufbahnen-von-planeten-und-satelliten-2276"
      },
      {
        "id": "3155",
        "title": "Der Urknall",
        "folder": "der-urknall-3155"
      },
      {
        "id": "2279",
        "title": "Kernfusion in der Sonne - Sternenphysik",
        "folder": "kernfusion-in-der-sonne-2279"
      },
      {
        "id": "5276",
        "title": "Die Entdeckung der Planetenbewegungen",
        "folder": "die-entdeckung-der-planetenbewegungen-5276"
      },
      {
        "id": "dlr",
        "title": "Das Deutsche Zentrum für Luft- und Raumfahrt",
        "folder": "das-deutsche-zentrum-fuer-luft-und-raumfahrt"
      },
      {
        "id": "5523",
        "title": "Umweltüberwachung durch Satellitentechnologie",
        "folder": "umweltuberwachung-durch-satellitentechnologie-5523"
      },
      {
        "id": "schwarzes-loch",
        "title": "Wie funktioniert ein schwarzes Loch",
        "folder": "wie-funktioniert-ein-schwarzes-loch"
      },
      {
        "id": "gps-atomuhren",
        "title": "Funktionsweise von GPS durch Atomuhren im Weltraum",
        "folder": "funktionsweise-von-gps-durch-atomuhren-im-weltraum"
      },
      {
        "id": "2494",
        "title": "Wie funktioniert ein Astrolabium",
        "folder": "wie-funktioniert-ein-astrolabium-2494"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kosmologie+urknall+sterne&t=3752"
  },
  "grundlagen-der-physik-und-materie": {
    "slug": "grundlagen-der-physik-und-materie",
    "title": "Grundlagen der Physik, Materie & Dichte",
    "category": "Grundlagen, Forscher & Rätsel",
    "shortDesc": "Teilbereiche der Physik, Teilchenmodell, Periodensystem, Atombindungen, Dichte und Stoffeigenschaften.",
    "longDesc": "Die Physik erforscht die grundlegenden Zusammenhänge von Materie, Energie, Raum und Zeit. Vom Aufbau der Stoffe aus Atomen über die Aggregatzustände bis hin zu Dichteberechnungen bildet dieser Bereich das unverzichtbare Fundament.",
    "keyPoints": [
      "Teilbereiche der Physik: Mechanik, Thermodynamik, Akustik, Optik, Elektrizitätslehre, Atom- und Astrophysik",
      "Aufbau der Materie: Reinstoffe, Gemische, Moleküle und Atome; Periodensystem der Elemente",
      "Atombindungen: Ionenbindung, kovalente Elektronenpaarbindung und Metallbindung",
      "Dichte (\\(\\rho\\)): Masse geteilt durch Volumen (\\(\\rho = \\frac{m}{V}\\)); spezifische Stoffeigenschaft",
      "Physik und Chemie: Gemeinsamkeiten und methodische Unterschiede bei der Erforschung von Stoffumwandlungen"
    ],
    "exercises": [
      {
        "id": "269",
        "title": "Einführung und Teilbereiche",
        "folder": "einfuhrung-und-teilbereiche-2-269"
      },
      {
        "id": "280",
        "title": "Aufbau der Materie",
        "folder": "aufbau-der-materie-280"
      },
      {
        "id": "281",
        "title": "Das Periodensystem der Elemente",
        "folder": "das-periodensystem-der-elemente-281"
      },
      {
        "id": "282",
        "title": "Atombindungen",
        "folder": "atombindungen-282"
      },
      {
        "id": "2237",
        "title": "Physik und Chemie: Gemeinsamkeiten und Unterschiede",
        "folder": "physik-und-chemie-gemeinsamkeiten-und-unterschiede-2237"
      },
      {
        "id": "5362",
        "title": "Die Geschichte der Physik",
        "folder": "die-geschichte-der-physik-5362"
      },
      {
        "id": "594",
        "title": "Lerninhalt: Dichte",
        "folder": "lerninhalt-dichte-594"
      },
      {
        "id": "vakuum",
        "title": "Wie funktioniert das Vakuum",
        "folder": "wie-funktioniert-das-vakuum"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=grundlagen+der+physik&t=3752"
  },
  "bedeutende-physiker-der-geschichte": {
    "slug": "bedeutende-physiker-der-geschichte",
    "title": "Bedeutende Physiker der Geschichte",
    "category": "Grundlagen, Forscher & Rätsel",
    "shortDesc": "Archimedes, Galileo Galilei, Isaac Newton, Marie Curie, Albert Einstein und ihre bahnbrechenden Entdeckungen.",
    "longDesc": "Hinter jedem physikalischen Gesetz stehen geniale Denker, die mit Neugier, Experimentierfreude und mathematischer Schärfe unser Verständnis der Natur revolutioniert haben.",
    "keyPoints": [
      "Archimedes von Syrakus (ca. 287–212 v. Chr.): Hebelgesetz, Flaschenzug, Auftriebsprinzip ('Heureka!')",
      "Galileo Galilei (1564–1642): Fallgesetze, Pendelgesetze, astronomische Entdeckungen mit dem Teleskop",
      "Isaac Newton (1643–1727): Begründer der klassischen Mechanik, Gravitationsgesetz, Optik und Infinitesimalrechnung",
      "Marie Curie (1867–1934): Entdeckung der Radioaktivität, Entdeckerin von Polonium und Radium, zweifache Nobelpreisträgerin",
      "Albert Einstein (1879–1955): Relativitätstheorie (\\(E = m \\cdot c^2\\)), Quantenhypothese des Lichts (Nobelpreis 1921)"
    ],
    "exercises": [
      {
        "id": "3001",
        "title": "Galileo Galilei",
        "folder": "galileo-galilei-3001"
      },
      {
        "id": "3617",
        "title": "Albert Einstein",
        "folder": "albert-einstein-3617"
      },
      {
        "id": "3672",
        "title": "Archimedes",
        "folder": "archimedes-3672"
      },
      {
        "id": "3971",
        "title": "Isaac Newton",
        "folder": "isaac-newton-3971"
      },
      {
        "id": "4076",
        "title": "Marie Curie",
        "folder": "marie-curie-4076"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=bedeutende+physiker&t=3752"
  },
  "escape-rooms-und-physikraetsel": {
    "slug": "escape-rooms-und-physikraetsel",
    "title": "Escape Rooms & Physik-Rätsel",
    "category": "Grundlagen, Forscher & Rätsel",
    "shortDesc": "Knacke physikalische Rätsel, entziffere Codes zu Mechanik, Strom und Optik und entkomme dem Raum!",
    "longDesc": "Interaktive digitale Escape Rooms fordern dein gesamtes physikalisches Wissen heraus! Löse Knobelaufgaben zu Mechanik, elektrischem Strom und den Grundlagen der Physik, um Schlösser zu knacken und Codes zu entschlüsseln.",
    "keyPoints": [
      "Kombiniere logisches Denken mit fundiertem Wissen aus Mechanik, Elektrizität und Grundlagen der Physik",
      "Entziffere Zahlen- und Farbcodes durch das richtige Lösen physikalischer Aufgaben",
      "Ideal zur spielerischen Wiederholung, für Stationenlernen oder kooperative Gruppenarbeit",
      "Schritt-für-Schritt-Hinweise helfen weiter, falls du einmal bei einem Schloss feststeckst"
    ],
    "exercises": [
      {
        "id": "3186",
        "title": "Escape Room \"Grundlagen der Physik\"",
        "folder": "escape-room-quot-grundlagen-der-physik-quot-3186"
      },
      {
        "id": "3187",
        "title": "Escape Room \"Mechanik\"",
        "folder": "escape-room-quot-mechanik-quot-3187"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=escape+room+physik&t=3752"
  }
};
