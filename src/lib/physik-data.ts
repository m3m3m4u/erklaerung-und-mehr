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
  'Grundlagen & Stoffeigenschaften',
  'Mechanik & Dynamik',
  'Thermodynamik & Akustik',
  'Optik & Licht',
  'Elektrizität & Magnetismus',
  'Moderne Physik & Astronomie',
];

export const physikTopics: Record<string, PhysikTopic> = {
  "grundlagen-der-physik": {
    "slug": "grundlagen-der-physik",
    "title": "Grundlagen der Physik & Materie",
    "category": "Grundlagen & Stoffeigenschaften",
    "shortDesc": "Teilchenmodell, Aggregatzustände, Dichte, Masse, Volumen und physikalische Messgrößen.",
    "longDesc": "Die Physik erforscht die grundlegenden Gesetze der Natur, Materie und Energie. Vom mikroskopischen Teilchenmodell über die Aggregatzustände (fest, flüssig, gasförmig) bis hin zur präzisen Messung physikalischer Größen wie Dichte, Masse und Volumen bilden diese Grundlagen das Fundament aller Naturwissenschaften.",
    "keyPoints": [
      "Teilchenmodell: Alle Körper bestehen aus kleinsten Teilchen (Atome/Moleküle), die sich in ständiger unregelmäßiger Bewegung befinden (Brownsche Bewegung)",
      "Aggregatzustände: Fest (feste Plätze, feste Form/Volumen), Flüssig (verschiebbare Teilchen, festes Volumen), Gasförmig (freie Bewegung, füllt jeden Raum aus)",
      "Phasenübergänge: Schmelzen / Erstarren, Verdampfen / Kondensieren, Sublimieren / Resublimieren",
      "Dichte (\\rho): Verhältnis von Masse (m) zu Volumen (V) ➔ \\(\\rho = \\frac{m}{V}\\) in \\(\\text{g/cm}^3\\) oder \\(\\text{kg/m}^3\\)",
      "Messgenauigkeit & Einheiten: SI-Basiseinheiten (Meter, Kilogramm, Sekunde, Ampere, Kelvin, Mol, Candela)"
    ],
    "exercises": [
      { id: "269", title: "Einführung und Teilbereiche", folder: "einfuhrung-und-teilbereiche-2-269" },
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=physik+grundlagen&t=3752"
  },
  "mechanik": {
    "slug": "mechanik",
    "title": "Klassische Mechanik & Einfache Maschinen",
    "category": "Mechanik & Dynamik",
    "shortDesc": "Kräfte, Hebelgesetz, Flaschenzug, schiefe Ebene, Reibung, Druck und Auftrieb.",
    "longDesc": "Die Mechanik beschreibt die Bewegung von Körpern und die Wirkung von Kräften. Einfache Maschinen wie Hebel, Flaschenzug und schiefe Ebene sparen zwar Kraft, aber niemals physikalische Arbeit (Goldene Regel der Mechanik).",
    "keyPoints": [
      "Kraft (F): Vektorielle Größe in Newton (N); bewirkt Verformung oder Änderung des Bewegungszustands (\\(F = m \\cdot a\\))",
      "Hebelgesetz: Kraft mal Kraftarm = Last mal Lastarm ➔ \\(F_1 \\cdot l_1 = F_2 \\cdot l_2\\)",
      "Goldene Regel der Mechanik: Was man an Kraft spart, muss man an Weg zusetzen (Arbeit \\(W = F \\cdot s\\) bleibt konstant)",
      "Flaschenzug: Bei n tragenden Seilstücken verringert sich die aufzubringende Zugkraft auf \\(F = \\frac{F_G}{n}\\)",
      "Druck (p): Kraft pro Fläche ➔ \\(p = \\frac{F}{A}\\) (in Pascal / bar); Schweredruck in Flüssigkeiten \\(p = \\rho \\cdot g \\cdot h\\)",
      "Archimedisches Prinzip: Der Auftrieb eines Körpers im Wasser entspricht der Gewichtskraft des verdrängten Wassers"
    ],
    "exercises": [
      { id: "272", title: "Geschwindigkeit", folder: "tragheit-272" },
      { id: "273", title: "Trägheit", folder: "kraft-273" },
      { id: "274", title: "Kraft", folder: "arbeit-energie-und-leistung-274" },
      { id: "275", title: "Arbeit, Energie und Leistung", folder: "warme-und-temperatur-275" },
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=mechanik&t=3752"
  },
  "dynamik-impuls": {
    "slug": "dynamik-impuls",
    "title": "Dynamik, Impuls & Bewegung",
    "category": "Mechanik & Dynamik",
    "shortDesc": "Newtonsche Axiome, Impulserhaltung, gleichförmige & beschleunigte Bewegung, Gravitation.",
    "longDesc": "Die Dynamik untersucht die Ursachen von Bewegungen. Newtons berühmte Gesetze, das Konzept des Impulses und die universelle Gravitationskraft erklären Bewegungen auf der Erde und im Weltall.",
    "keyPoints": [
      "1. Newtonsches Gesetz (Trägheitsprinzip): Ein Körper verharrt in Ruhe oder geradlinig gleichförmiger Bewegung, solange keine resultierende Kraft auf ihn wirkt",
      "2. Newtonsches Gesetz (Aktionsprinzip): Kraft = Masse mal Beschleunigung (\\(F = m \\cdot a\\))",
      "3. Newtonsches Gesetz (Reaktionsprinzip): Actio = Reactio (Kräfte treten immer paarweise auf)",
      "Impuls (p): Produkt aus Masse und Geschwindigkeit ➔ \\(p = m \\cdot v\\) (in \\(\\text{kg}\\cdot\\text{m/s}\\))",
      "Impulserhaltungssatz: In einem abgeschlossenen System bleibt die Summe aller Impulse konstant (Grundlage des Raketenantriebs)"
    ],
    "exercises": [
      { id: "272", title: "Geschwindigkeit", folder: "tragheit-272" },
      { id: "274", title: "Kraft", folder: "arbeit-energie-und-leistung-274" },
      {
        "id": "5271",
        "title": "Der Schwerpunkt",
        "folder": "der-schwerpunkt-5271"
      },
      {
        "id": "5287",
        "title": "Die Zentrifugalkraft",
        "folder": "die-zentrifugalkraft-5287"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=dynamik&t=3752"
  },
  "waermelehre": {
    "slug": "waermelehre",
    "title": "Wärmelehre (Thermodynamik)",
    "category": "Thermodynamik & Akustik",
    "shortDesc": "Temperatur, Wärmeübertragung, Wärmeausdehnung, Aggregatzustandsänderungen und Wärmekraftmaschinen.",
    "longDesc": "Die Thermodynamik befasst sich mit thermischer Energie, Wärme und Temperatur. Sie erklärt, warum sich Stoffe bei Erwärmung ausdehnen, wie Wärme übertragen wird (Leitung, Strömung, Strahlung) und wie Motoren Wärme in mechanische Arbeit umwandeln.",
    "keyPoints": [
      "Temperatur (T): Maß für die mittlere kinetische Energie der Teilchen (Celsius, Kelvin; absoluter Nullpunkt bei \\(-273{,}15^\\circ\\text{C} = 0\\,\\text{K}\\))",
      "Wärme (Q): Energieform in Joule (J); fließt stets vom Körper höherer Temperatur zum Körper niedrigerer Temperatur",
      "Arten der Wärmeübertragung: Wärmeleitung (im Festkörper), Wärmeströmung/Konvektion (in Flüssigkeiten/Gasen), Wärmestrahlung (durch elektromagnetische Wellen im Vakuum)",
      "Anomalie des Wassers: Wasser hat seine höchste Dichte bei \\(4^\\circ\\text{C}\\) – deshalb frieren Seen von oben nach unten zu und Fische überleben am Grund",
      "Wärmekraftmaschinen: 4-Takt-Ottomotor, Dieselmotor und Dampfturbinen wandeln Verbrennungswärme in Bewegung um"
    ],
    "exercises": [
      { id: "276", title: "Wärme und Temperatur", folder: "fest-flussig-und-gasformig-276" },
      {
        "id": "277",
        "title": "Fest, flüssig und gasförmig",
        "folder": "fest-flussig-und-gasformig-2-277"
      },
      {
        "id": "333",
        "title": "Übergang zwischen den Aggregatzuständen",
        "folder": "bergang-zwischen-den-aggregatzustanden-333"
      },
      {
        "id": "331",
        "title": "Wärmeenergie und spezifische Wärmekapazität",
        "folder": "warmeenergie-und-spezifische-warmekapazitat-331"
      },
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=waermelehre&t=3752"
  },
  "akustik": {
    "slug": "akustik",
    "title": "Akustik & Schalllehre",
    "category": "Thermodynamik & Akustik",
    "shortDesc": "Schallwellen, Tonhöhe, Lautstärke, Schallgeschwindigkeit, Resonanz, Doppler-Effekt und Lärmschutz.",
    "longDesc": "Akustik ist die Lehre vom Schall und seiner Ausbreitung. Schallwellen sind mechanische Longitudinalwellen in der Luft oder anderen Medien, deren Schwingungsfrequenz die Tonhöhe und deren Amplitude die Lautstärke bestimmt.",
    "keyPoints": [
      "Schallentstehung: Mechanische Schwingungen eines Schallsenders erzeugen periodische Druckschwankungen in der Luft",
      "Frequenz (f): Schwingungen pro Sekunde in Hertz (Hz) bestimmt die Tonhöhe (Hörbereich des Menschen: ca. 20 Hz bis 20.000 Hz)",
      "Schallgeschwindigkeit (v): In Luft ca. \\(340\\,\\text{m/s}\\) (ca. \\(1224\\,\\text{km/h}\\)); in Wasser ca. \\(1500\\,\\text{m/s}\\); im Festkörper noch schneller",
      "Vakuum: Schall benötigt stets ein materielles Trägermedium und kann sich im luftleeren Raum (Weltall) nicht ausbreiten",
      "Lautstärke & Schalldruckpegel: Gemessen in Dezibel (dB); logarithmische Skala (+10 dB entspricht einer Verdopplung der wahrgenommenen Lautstärke)"
    ],
    "exercises": [
      { id: "271", title: "Akustik", folder: "geschwindigkeit-271" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=akustik&t=3752"
  },
  "optik": {
    "slug": "optik",
    "title": "Optik & Lichtlehre",
    "category": "Optik & Licht",
    "shortDesc": "Lichtausbreitung, Reflexion, Brechung, Linsen, Mikroskop, Fernrohr, Auge, Farben und Farbmischung.",
    "longDesc": "Die Optik erforscht das Licht, seine Ausbreitung als Strahl und Welle sowie seine Wechselwirkung mit Materie. Phänomene wie Schattenbildung, Spiegelung, Brechung und optische Instrumente lassen sich mit den Gesetzen der geometrischen Optik exakt beschreiben.",
    "keyPoints": [
      "Geradlinige Lichtausbreitung: Licht breitet sich im homogenen Medium geradlinig mit Lichtgeschwindigkeit (ca. \\(300.000\\,\\text{km/s}\\)) aus",
      "Reflexionsgesetz: Einfallswinkel gleich Reflexionswinkel ➔ \\(\\alpha = \\alpha'\\)",
      "Lichtbrechung (Snelliussches Brechungsgesetz): Licht wird beim Übergang zwischen optisch unterschiedlich dichten Medien gebrochen (hin zum Lot oder weg vom Lot)",
      "Linsenarten: Sammellinsen (konvex, bündeln paralleles Licht im Brennpunkt F) vs. Zerstreuungslinsen (konkav, streuen das Licht)",
      "Optische Instrumente: Lupe, Mikroskop, Teleskop / Fernrohr, Kamera, menschliches Auge und Brillenkorrekturen",
      "Farbenlehre: Weißes Sonnenlicht besteht aus allen Spektralfarben (Regenbogen); additive Farbmischung (RGB) vs. subtraktive Farbmischung (CMYK)"
    ],
    "exercises": [
      {
        "id": "2253",
        "title": "Die Ausbreitung von Licht",
        "folder": "die-ausbreitung-von-licht-2253"
      },
      {
        "id": "2254",
        "title": "Lichtgeschwindigkeit",
        "folder": "lichtgeschwindigkeit-2254"
      },
      {
        "id": "2255",
        "title": "Die Lichtbrechung",
        "folder": "die-lichtbrechung-2255"
      },
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
      { id: "2260", title: "Ebene Spiegel, Hohlspiegel und Wölbspiegel", folder: "ebene-spiegel-hohlspiegel-und-wolbspiegel-2260" },
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=optik&t=3752"
  },
  "magnetismus": {
    "slug": "magnetismus",
    "title": "Magnetismus & Magnetfelder",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Dauermagnete, Magnetpole, Magnetfeldlinien, Elementarmagnete, Erdmagnetfeld und Kompass.",
    "longDesc": "Magnete üben berührungslos anziehende oder abstoßende Kräfte auf ferromagnetische Stoffe (Eisen, Nickel, Kobalt) aus. Das Magnetfeld visualisiert den Kraftraum um jeden Magneten.",
    "keyPoints": [
      "Magnetpole: Jeder Magnet besitzt immer einen Nord- und einen Südpol; gleichnamige Pole stoßen sich ab, ungleichnamige ziehen sich an",
      "Nicht-Teilbarkeit von Magneten: Zerbricht man einen Magneten, entstehen stets zwei vollständige Magnete mit jeweils Nord- und Südpol",
      "Magnetfeldlinien: Verlaufen außerhalb des Magneten vom Nordpol zum Südpol, kreuzen sich nie und stehen dicht bei starkem Feld",
      "Elementarmagnete-Modell: Ferromagnetische Metalle bestehen aus mikroskopischen Elementarmagneten (Weiss-Bezirke), die durch äußere Felder ausgerichtet werden",
      "Erdmagnetfeld: Die Erde verhält sich wie ein riesiger Stabmagnet (der magnetische Südpol liegt nahe dem geografischen Nordpol); schützt vor kosmischer Strahlung"
    ],
    "exercises": [
      {
        "id": "5255",
        "title": "Das Magnetfeld",
        "folder": "das-magnetfeld-5255"
      },
      {
        "id": "5259",
        "title": "Der Elektromagnet",
        "folder": "der-elektromagnet-2-5259"
      },
      {
        "id": "5254",
        "title": "Das Magnetfeld der Erde",
        "folder": "das-magnetfeld-der-erde-5254"
      },
      { id: "5261", title: "Der Faraday'sche Käfig", folder: "der-faraday-039-sche-kafig-5261" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=magnetismus&t=3752"
  },
  "elektromagnetismus": {
    "slug": "elektromagnetismus",
    "title": "Elektrizität & Elektromagnetismus",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Stromkreise, Spannung, Stromstärke, Widerstand, Ohmsches Gesetz, Induktion, Elektromotor & Generator.",
    "longDesc": "Elektrischer Strom ist die gerichtete Bewegung von Ladungsträgern (Elektronen). Das Zusammenspiel von elektrischem und magnetischem Feld bildet die Grundlage unserer modernen Stromversorgung, von Elektromotoren bis hin zu Transformatoren.",
    "keyPoints": [
      "Elektrische Größen: Spannung (U in Volt), Stromstärke (I in Ampere), elektrischer Widerstand (R in Ohm \\(\\Omega\\))",
      "Ohmsches Gesetz: \\(U = R \\cdot I\\) bzw. \\(R = \\frac{U}{I}\\) und \\(I = \\frac{U}{R}\\)",
      "Elektrische Leistung (P) & Arbeit (W): \\(P = U \\cdot I\\) (in Watt) und \\(W = P \\cdot t\\) (in Wattsekunden bzw. Kilowattstunden kWh)",
      "Schaltungsarten: Reihenschaltung (Stromstärke überall gleich, Spannungen addieren sich) vs. Parallelschaltung (Spannung an allen Zweigen gleich, Ströme addieren sich)",
      "Elektromagnetische Induktion: Durch Änderung eines Magnetfelds in einer Spule wird eine elektrische Spannung induziert (Funktionsprinzip von Generatoren & Fahrraddynamos)",
      "Elektromotor: Wandelt elektrische Energie durch Lorentzkraft im Magnetfeld in mechanische Drehbewegung um"
    ],
    "exercises": [
      {
        "id": "2241",
        "title": "Der Elektromagnet",
        "folder": "der-elektromagnet-2241"
      },
      {
        "id": "2242",
        "title": "Die Elektromagnetische Induktion",
        "folder": "die-elektromagnetische-induktion-2242"
      },
      { id: "2243", title: "Die elektromagnetischeh Kraft", folder: "die-elektromagnetischeh-kraft-2243" },
      {
        "id": "2244",
        "title": "Der Gleichstrommotor",
        "folder": "der-gleichstrommotor-2244"
      },
      {
        "id": "5272",
        "title": "Der Transformator",
        "folder": "der-transformator-2-5272"
      },
      {
        "id": "2246",
        "title": "Der Wechselstrommotor",
        "folder": "der-wechselstrommotor-2246"
      },
      {
        "id": "2247",
        "title": "Der Generator",
        "folder": "der-generator-2247"
      },
      {
        "id": "2248",
        "title": "Die Elektromagnetische Datenspeicherung",
        "folder": "die-elektromagnetische-datenspeicherung-2248"
      },
      {
        "id": "5298",
        "title": "Induktion durch Bewegung",
        "folder": "induktion-durch-bewegung-5298"
      },
      {
        "id": "5294",
        "title": "Generatoren Stromerzeugende Maschinen",
        "folder": "generatoren-stromerzeugende-maschinen-5294"
      },
      {
        "id": "5260",
        "title": "Der Elektromotor",
        "folder": "der-elektromotor-5260"
      },
      {
        "id": "5305",
        "title": "Lenz'sche Regel",
        "folder": "lenz-039-sche-regel-5305"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=elektrizitaet&t=3752"
  },
  "kraftwerke": {
    "slug": "kraftwerke",
    "title": "Kraftwerke & Energieerzeugung",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Wasserkraft, Windkraft, Photovoltaik, Kernkraft, Wärmekraftwerke und Energiewende.",
    "longDesc": "Kraftwerke wandeln primäre Energieformen (Wasser, Wind, Sonne, fossile Brennstoffe, Kernbrennstoffe) in elektrische Nutzenergie um. Der Übergang zu erneuerbaren Energien ist einer der zentralen Schwerpunkte moderner Technik.",
    "keyPoints": [
      "Energieerhaltungssatz: Energie kann weder erzeugt noch vernichtet, sondern nur von einer Form in eine andere umgewandelt werden",
      "Wasserkraftwerke: Nutzen potentielle/kinetische Lageenergie des Wassers über Wasserturbinen zur Stromerzeugung (Laufkraftwerke, Pumpspeicherkraftwerke)",
      "Windkraftanlagen: Rotoren wandeln die Bewegungsenergie des Windes über ein Getriebe und einen Generator in elektrische Energie um",
      "Photovoltaik: Solarzellen wandeln Sonnenlicht über den photoelektrischen Effekt direkt in Gleichstrom um (Wechselrichter wandelt in Wechselstrom)",
      "Wärmekraftwerke & Kernkraftwerke: Erzeugen Dampf unter hohem Druck, der Dampfturbinen und Generatoren antreibt",
      "Wirkungsgrad (\\eta): Verhältnis von nutzbarer Energie zu aufgewendeter Energie (\\(\\eta = \\frac{E_{\\text{nutz}}}{E_{\\text{zu}}}\\))"
    ],
    "exercises": [
      {
        "id": "2249",
        "title": "Wasserkraftwerke",
        "folder": "wasserkraftwerke-2249"
      },
      {
        "id": "5327",
        "title": "Windkraftwerke",
        "folder": "windkraftwerke-2-5327"
      },
      {
        "id": "5311",
        "title": "Photovoltaik",
        "folder": "photovoltaik-5311"
      },
      {
        "id": "5242",
        "title": "Atomkraftwerke",
        "folder": "atomkraftwerke-2-5242"
      },
      {
        "id": "2247",
        "title": "Der Generator",
        "folder": "der-generator-2247"
      },
      { id: "5326", title: "Wärmekraftwerke", folder: "warmekraftwerke-5326" },
      {
        "id": "5302",
        "title": "Laufwasserkraftwerke",
        "folder": "laufwasserkraftwerke-5302"
      },
      {
        "id": "5319",
        "title": "Speicherkraftwerke",
        "folder": "speicherkraftwerke-5319"
      },
      {
        "id": "5318",
        "title": "Sonnenkraftwerke",
        "folder": "sonnenkraftwerke-5318"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kraftwerke&t=3752"
  },
  "stromnetze-und-energieuebertragung": {
    "slug": "stromnetze-und-energieuebertragung",
    "title": "Stromnetze & Energieübertragung",
    "category": "Elektrizität & Magnetismus",
    "shortDesc": "Hochspannungsleitungen, Transformatoren, Wechselstrom, Verlustminimierung und Netzstabilität.",
    "longDesc": "Um elektrische Energie über hunderte Kilometer mit minimalen Leitungsverlusten zu transportieren, wird die Spannung auf bis zu 380.000 Volt (Hochspannung) transformiert. Transformatoren passen die Spannung schrittweise für Haushalte (230 V) an.",
    "keyPoints": [
      "Transformator: Besteht aus Eisenkern und zwei Spulen; wandelt Wechselspannungen nach dem Windungsverhältnis um: \\(\\frac{U_1}{U_2} = \\frac{N_1}{N_2}\\)",
      "Leitungsverluste: Der Leitungsverlust hängt quadratisch von der Stromstärke ab (\\(P_{\\text{Verlust}} = I^2 \\cdot R\\)) ➔ Hohe Spannung = kleine Stromstärke = minimale Wärmeentwicklung",
      "Spannungsebenen: Höchstspannung (380 kV, überregional), Hochspannung (110 kV, regional), Mittelspannung (10-30 kV, Städte), Niederspannung (230 V / 400 V, Haushalte)",
      "Netzfrequenz: In Europa konstant 50 Hz; Gleichgewicht zwischen Stromeinspeisung und Stromverbrauch ist für die Netzstabilität entscheidend"
    ],
    "exercises": [
      {
        "id": "5288",
        "title": "Drehstrom",
        "folder": "drehstrom-5288"
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
        "id": "5256",
        "title": "Das Relais",
        "folder": "das-relais-5256"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=stromnetze&t=3752"
  },
  "atomphysik": {
    "slug": "atomphysik",
    "title": "Atom- & Kernphysik",
    "category": "Moderne Physik & Astronomie",
    "shortDesc": "Atomaufbau, Isotope, Radioaktivität (Alpha, Beta, Gamma), Halbwertszeit, Kernspaltung und Fusion.",
    "longDesc": "Die Atom- und Kernphysik erforscht den Aufbau der Atome aus Atomkern und Elektronenhülle sowie die Kernkräfte. Radioaktivität, radioaktiver Zerfall und die Prozesse der Kernspaltung und Kernfusion sind fundamentale Phänomene des Kosmos.",
    "keyPoints": [
      "Atommodell von Rutherford & Bohr: Kleiner, positiv geladener Atomkern (Protonen + Neutronen) und weit ausgedehnte Elektronenhülle",
      "Isotope: Atome desselben Elements mit gleicher Protonenanzahl (gleiche Ordnungszahl), aber unterschiedlicher Neutronenanzahl",
      "Strahlungsarten: Alpha-Strahlung (Heliumkerne, geringe Reichweite), Beta-Strahlung (schnelle Elektronen/Positronen), Gamma-Strahlung (hochenergetische elektromagnetische Wellen)",
      "Halbwertszeit (\\(T_{1/2}\\)): Die Zeitspanne, nach der die Hälfte aller instabilen Atomkerne zerfallen ist (Zerfallsgesetz)",
      "Kernspaltung: Spaltung schwerer Kerne (z. B. Uran-235) durch Neutronenbeschuss unter Freisetzung enormer Energie und weiterer Neutronen (Kettenreaktion)",
      "Kernfusion: Verschmelzung leichter Kerne (z. B. Wasserstoffisotope Deuterium und Tritium zu Helium) – Energiequelle der Sonne und aller Sterne"
    ],
    "exercises": [
      { id: "2267", title: "Die Entdeckung der Radioaktivität", folder: "die-entdeckung-der-radioaktivitat-2267" },
      { id: "2268", title: "Natürliche und künstliche Radioaktivität", folder: "naturliche-und-kunstliche-radioaktivitat-2268" },
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
      { id: "2271", title: "Röntgen", folder: "rontgen-2271" },
      {
        "id": "2272",
        "title": "Strahlentherapie",
        "folder": "strahlentherapie-2272"
      },
      {
        "id": "2252",
        "title": "Atomkraftwerke",
        "folder": "atomkraftwerke-2252"
      },
      {
        "id": "2273",
        "title": "Gefahr von Kernkraftwerken",
        "folder": "gefahr-von-kernkraftwerken-2273"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=atomphysik&t=3752"
  },
  "astronomie-und-raumfahrt": {
    "slug": "astronomie-und-raumfahrt",
    "title": "Astronomie & Raumfahrt",
    "category": "Moderne Physik & Astronomie",
    "shortDesc": "Sonnensystem, Planeten, Sonne, Gravitation, Satellitenbahnen und Raumfahrtgeschichte.",
    "longDesc": "Die Astronomie wendet physikalische Gesetze auf Himmelsobjekte an. Die Keplerschen Gesetze und das Gravitationsgesetz beschreiben die Bewegung von Planeten, Monden und künstlichen Satelliten im All.",
    "keyPoints": [
      "Sonnensystem: Die Sonne im Zentrum, 8 Planeten (Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun), Asteroidengürtel und Kometen",
      "Keplersche Gesetze: Planeten bewegen sich auf elliptischen Bahnen mit der Sonne in einem Brennpunkt",
      "Satelliten & Erste kosmische Geschwindigkeit: Mindestgeschwindigkeit (ca. \\(7{,}9\\,\\text{km/s}\\)), um eine stabile Erdumlaufbahn zu halten",
      "Geostationäre Umlaufbahn: Satelliten in ca. 35.786 km Höhe drehen sich synchron mit der Erde und stehen scheinbar fest über einem Punkt"
    ],
    "exercises": [
      {
        "id": "2276",
        "title": "Umlaufbahnen von Planeten und Satelliten",
        "folder": "umlaufbahnen-von-planeten-und-satelliten-2276"
      },
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
        "id": "3155",
        "title": "Der Urknall",
        "folder": "der-urknall-3155"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=astronomie&t=3752"
  },
  "bedeutende-physiker": {
    "slug": "bedeutende-physiker",
    "title": "Bedeutende Physiker der Geschichte",
    "category": "Moderne Physik & Astronomie",
    "shortDesc": "Galileo Galilei, Isaac Newton, Albert Einstein, Marie Curie, Michael Faraday, James Clerk Maxwell uvm.",
    "longDesc": "Die Entwicklung unseres naturwissenschaftlichen Weltbildes wurde von außergewöhnlichen Forscherpersönlichkeiten geprägt. Ihre bahnbrechenden Entdeckungen bildeten die Grundlage moderner Technologien.",
    "keyPoints": [
      "Galileo Galilei (1564–1642): Begründer der experimentellen Methode, Fallgesetze, Entdeckung der Jupitermonde mit dem Teleskop",
      "Isaac Newton (1643–1727): Gravitationsgesetz, klassische Mechanik (Newtonsche Axiome), Optik & Infinitesimalrechnung",
      "Michael Faraday & James Clerk Maxwell: Entdeckung der elektromagnetischen Induktion und Vereinheitlichung von Elektrizität und Magnetismus",
      "Marie Curie (1867–1934): Entdeckung der Radioaktivität, Entdeckerin von Polonium und Radium, zweifache Nobelpreisträgerin",
      "Albert Einstein (1879–1955): Spezielle und Allgemeine Relativitätstheorie (\\(E = m \\cdot c^2\\)), Photoelektrischer Effekt (Nobelpreis 1921)",
      "Max Planck & Niels Bohr: Väter der Quantenphysik und des modernen Atommodells"
    ],
    "exercises": [
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
        "id": "3001",
        "title": "Galileo Galilei",
        "folder": "galileo-galilei-3001"
      },
      {
        "id": "4076",
        "title": "Marie Curie",
        "folder": "marie-curie-4076"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=physiker&t=3752"
  },
  "escape-room-physik": {
    "slug": "escape-room-physik",
    "title": "Escape Room Physik",
    "category": "Moderne Physik & Astronomie",
    "shortDesc": "Knacke physikalische Rätsel, entziffere Codes zu Mechanik, Strom und Optik und entkomme dem Raum!",
    "longDesc": "Ein interaktiver digitaler Escape Room für den Physikunterricht. Kombiniere logisches Denken mit physikalischem Wissen über Stromkreise, Kräfte und Licht, um alle Schlösser zu öffnen.",
    "keyPoints": [
      "Halte Stift und Papier für Notizen und Berechnungen bereit",
      "Kombiniere Fachwissen aus Mechanik, Optik, Wärmelehre und Stromkreisen",
      "Ideal zur spielerischen Wiederholung vor Tests oder für Partnerarbeit"
    ],
    "exercises": [
      { id: "272", title: "Geschwindigkeit", folder: "tragheit-272" },
      {
        "id": "2241",
        "title": "Der Elektromagnet",
        "folder": "der-elektromagnet-2241"
      },
      {
        "id": "2253",
        "title": "Die Ausbreitung von Licht",
        "folder": "die-ausbreitung-von-licht-2253"
      },
      { id: "276", title: "Wärme und Temperatur", folder: "fest-flussig-und-gasformig-276" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=escape+room+physik&t=3752"
  }
};
