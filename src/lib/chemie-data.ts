export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface ChemieTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const chemieCategories = [
  "Allgemeine & Anorganische Chemie",
  "Reaktionslehre & Physikalische Chemie",
  "Metalle, Werkstoffe & Elektrochemie",
  "Organische Chemie & Kohlenwasserstoffe",
  "Biochemie & Naturstoffe",
  "Angewandte Chemie & Umweltchemie",
  "Rätsel & Escape Rooms"
];

export const chemieTopics: Record<string, ChemieTopic> = {
  "grundlagen-der-chemie-und-atombau": {
    "slug": "grundlagen-der-chemie-und-atombau",
    "title": "Grundlagen der Chemie & Atombau",
    "category": "Allgemeine & Anorganische Chemie",
    "shortDesc": "Reinstoffe, Gemische, Trennverfahren, Atombau, Periodensystem und chemische Bindungen.",
    "longDesc": "Die Chemie erforscht die Eigenschaften, Zusammensetzung und Umwandlung von Stoffen. Vom Aufbau der Atome aus Protonen, Neutronen und Elektronen über das Periodensystem der Elemente bis hin zu chemischen Bindungen (Ionen-, Atombindung) bildet dieser Bereich das unverzichtbare Fundament.",
    "keyPoints": [
      "Reinstoffe vs. Gemische: Reinstoffe (Elemente und Verbindungen) besitzen feste Stoffeigenschaften; Stoffgemische (homogen/heterogen) lassen sich physikalisch trennen",
      "Trennverfahren: Filtration, Destillation, Chromatographie, Zentrifugieren und Sedimentieren nutzen unterschiedliche Stoffeigenschaften (Siedepunkt, Teilchengröße, Dichte)",
      "Atombau (Rutherford & Bohr): Positiv geladener Atomkern aus Protonen und Neutronen, umgeben von einer Elektronenhülle mit Energiestufen",
      "Periodensystem der Elemente (PSE): Nach Ordnungszahl (Protonenzahl) geordnet; Hauptgruppen bestimmen die Anzahl der Valenzelektronen",
      "Chemische Bindungen: Elektronenpaarbindung (kovalent) zwischen Nichtmetallen; Ionenbindung zwischen Metallen und Nichtmetallen; Metallbindung"
    ],
    "exercises": [
      {
        "id": "593",
        "title": "Grundlagen der Chemie",
        "folder": "lerninhalt-grundlagen-der-chemie-593"
      },
      {
        "id": "601",
        "title": "Die Sprache der Chemie",
        "folder": "lerninhalt-die-sprache-der-chemie-601"
      },
      {
        "id": "327",
        "title": "Stoffgemische, Reinstoffe und Elemente",
        "folder": "stoffgemische-reinstoffe-und-elemente-327"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=chemie+grundlagen&t=3752"
  },
  "geschichte-der-chemie-und-alchemie": {
    "slug": "geschichte-der-chemie-und-alchemie",
    "title": "Geschichte der Chemie & Alchemie",
    "category": "Allgemeine & Anorganische Chemie",
    "shortDesc": "Von der Alchemie und dem Stein der Weisen zur modernen Naturwissenschaft und Elemententdeckung.",
    "longDesc": "Die Wurzeln der Chemie reichen von den Experimenten antiker Handwerker über die mystische Alchemie des Mittelalters bis zur Begründung der modernen quantitativen Chemie durch Antoine Lavoisier, John Dalton und Dmitri Mendelejew.",
    "keyPoints": [
      "Alchemie: Suche nach dem Stein der Weisen (Transmutation unedler Metalle in Gold) und dem Lebenselixier legte experimentelle Grundlagen (Destillation, Laborgeräte)",
      "Phlogistontheorie: Historische Theorie zur Erklärung von Verbrennungsvorgängen, widerlegt durch Lavoisiers Entdeckung des Sauerstoffs",
      "Massenerhaltungssatz (Lavoisier): Bei chemischen Vorgängen bleibt die Masse der Ausgangsstoffe gleich der Masse der Produkte",
      "Daltons Atomhypothese: Elemente bestehen aus unteilbaren, für jedes Element charakteristischen Atomen gleicher Masse",
      "Periodensystem (Mendelejew & Meyer): Ordnung der bekannten Elemente nach Atommassen und periodisch wiederkehrenden chemischen Eigenschaften"
    ],
    "exercises": [
      {
        "id": "320",
        "title": "Geschichte der Chemie",
        "folder": "geschichte-der-chemie-320"
      },
      {
        "id": "5354",
        "title": "Die Geschichte der Chemie",
        "folder": "die-geschichte-der-chemie-5354"
      },
      {
        "id": "3663",
        "title": "Antoine Lavoisier - Begründer der modernen Chemie",
        "folder": "antoine-lavoisier-3663"
      },
      {
        "id": "3786",
        "title": "Dmitri Mendelejew - Entdecker des Periodensystems",
        "folder": "dmitri-mendeleev-3786"
      },
      {
        "id": "4026",
        "title": "John Dalton und die chemische Atomhypothese",
        "folder": "john-dalton-4026"
      },
      {
        "id": "4076",
        "title": "Marie Curie - Entdeckung von Radium und Polonium",
        "folder": "marie-curie-4076"
      },
      {
        "id": "3639",
        "title": "Alfred Nobel - Chemische Innovationen und Dynamit",
        "folder": "alfred-nobel-3639"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geschichte+der+chemie&t=3752"
  },
  "nichtmetalle-halogene-und-edelgase": {
    "slug": "nichtmetalle-halogene-und-edelgase",
    "title": "Nichtmetalle, Halogene & Edelgase",
    "category": "Allgemeine & Anorganische Chemie",
    "shortDesc": "Wasserstoff, Sauerstoff, Stickstoff, Kohlenstoff, Halogene (Fluor, Chlor, Brom, Iod) und Edelgase.",
    "longDesc": "Nichtmetalle zeichnen sich durch hohe Elektronegativität aus und bilden untereinander kovalente Bindungen. Von lebenswichtigen Elementen wie Sauerstoff und Stickstoff über hochreaktive Halogene bis hin zu reaktionsträgen Edelgasen umfasst diese Gruppe faszinierende Stoffe.",
    "keyPoints": [
      "Wasserstoff (H₂): Häufigstes Element des Universums; hochentzündliches Knallgas; sauberer Energieträger der Zukunft",
      "Lebenselemente (C, N, O, P, S): Grundbausteine aller organischen Moleküle, Proteine, Nukleinsäuren und Zellstrukturen",
      "Halogene (7. Hauptgruppe): Salzbildner (Fluor, Chlor, Brom, Iod); sehr reaktiv durch 7 Valenzelektronen; bilden mit Metallen Salze",
      "Edelgase (8. Hauptgruppe): Helium, Neon, Argon, Krypton, Xenon, Radon; stabile Elektronenkonfiguration (Edelgaskonfiguration / Oktettregel)",
      "Radon (Rn): Natürliches radioaktives Edelgas aus dem Zerfall von Radium; kann sich in Gebäuden ansammeln"
    ],
    "exercises": [
      {
        "id": "1128",
        "title": "Wasserstoff",
        "folder": "wasserstoff-1128"
      },
      {
        "id": "1154",
        "title": "Kohlenstoff",
        "folder": "kohlenstoff-1154"
      },
      {
        "id": "1155",
        "title": "Stickstoff",
        "folder": "stickstoff-1155"
      },
      {
        "id": "1156",
        "title": "Sauerstoff",
        "folder": "sauerstoff-1156"
      },
      {
        "id": "1163",
        "title": "Phosphor",
        "folder": "phosphor-1163"
      },
      {
        "id": "1197",
        "title": "Schwefel",
        "folder": "schwefel-2-1197"
      },
      {
        "id": "5165",
        "title": "Halogene",
        "folder": "halogene-5165"
      },
      {
        "id": "1157",
        "title": "Fluor",
        "folder": "fluor-1157"
      },
      {
        "id": "1164",
        "title": "Chlor",
        "folder": "chlor-1164"
      },
      {
        "id": "1178",
        "title": "Brom",
        "folder": "brom-1178"
      },
      {
        "id": "1184",
        "title": "Iod",
        "folder": "iod-1184"
      },
      {
        "id": "1195",
        "title": "Das Edelgas Radon",
        "folder": "schwefel-1195"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nichtmetalle+halogene&t=3752"
  },
  "chemische-reaktionen-und-katalyse": {
    "slug": "chemische-reaktionen-und-katalyse",
    "title": "Chemische Reaktionen & Katalyse",
    "category": "Reaktionslehre & Physikalische Chemie",
    "shortDesc": "Reaktionsgleichungen, exotherm und endotherm, Aktivierungsenergie, Redoxreaktionen und Katalysatoren.",
    "longDesc": "Bei chemischen Reaktionen entstehen aus Ausgangsstoffen (Edukten) neue Stoffe (Produkte) mit veränderten Bindungen und Eigenschaften. Die Energetik beschreibt, ob Energie freigesetzt (exotherm) oder benötigt wird (endotherm). Katalysatoren beschleunigen Reaktionen, indem sie die Aktivierungsenergie herabsetzen.",
    "keyPoints": [
      "Reaktionsgleichungen & Stöchiometrie: Gesetz der Erhaltung der Masse und der konstanten Proportionen",
      "Exotherm vs. Endotherm: Exotherme Reaktionen geben Wärme an die Umgebung ab (ΔH < 0); endotherme Reaktionen nehmen Wärme auf (ΔH > 0)",
      "Aktivierungsenergie: Mindestenergie zur Auslösung einer chemischen Reaktion; Katalysatoren senken diese Energieschwelle, ohne selbst verbraucht zu werden",
      "Redoxreaktionen: Elektronenübergangsreaktionen (Oxidation = Elektronenabgabe, Reduktion = Elektronenaufnahme)",
      "Fahrzeugkatalysator: Wandelt Schadstoffe (CO, NOx, unverbrannte Kohlenwasserstoffe) an Edelmetalloberflächen (Platin, Rhodium) in CO₂, N₂ und H₂O um"
    ],
    "exercises": [
      {
        "id": "5144",
        "title": "Chemische Reaktionen",
        "folder": "chemische-reaktionen-5144"
      },
      {
        "id": "5135",
        "title": "Aktivierungs- und Reaktionsenergie",
        "folder": "aktivierungs-und-reaktionsenergie-5135"
      },
      {
        "id": "5174",
        "title": "Oxidation",
        "folder": "oxidation-5174"
      },
      {
        "id": "5177",
        "title": "Reduktion",
        "folder": "reduktion-5177"
      },
      {
        "id": "5151",
        "title": "Der Katalysator",
        "folder": "der-katalysator-5151"
      },
      {
        "id": "7104",
        "title": "Wie funktioniert ein Katalysator im Auto",
        "folder": "Wie funktioniert ein Katalysator im Auto"
      },
      {
        "id": "7133",
        "title": "Wie funktioniert ein Feuerzeug",
        "folder": "Wie funktioniert ein Feuerzeug"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=chemische+reaktionen+katalysator&t=3752"
  },
  "saeuren-basen-und-salze": {
    "slug": "saeuren-basen-und-salze",
    "title": "Säuren, Basen & Salze",
    "category": "Reaktionslehre & Physikalische Chemie",
    "shortDesc": "Protonenübertragungen, pH-Wert-Skala, Neutralisation, Indikatoren und organische Säuren.",
    "longDesc": "Nach Brønsted sind Säuren Protonendonatoren (H⁺-Spender) und Basen Protonenakzeptoren (H⁺-Empfänger). Bei der Neutralisation reagieren saure und alkalische Lösungen zu neutralem Wasser und Salz. Der pH-Wert quantifiziert die Acidität auf einer logarithmischen Skala.",
    "keyPoints": [
      "Säure-Base-Definition nach Brønsted: Säuren geben H⁺ ab, Basen nehmen H⁺ auf; konjugierte Säure-Base-Paare",
      "pH-Wert: Negativer dekadischer Logarithmus der Oxonium-Ionen-Konzentration [H₃O⁺]; pH < 7 sauer, pH = 7 neutral, pH > 7 basisch/alkalisch",
      "Indikatoren: Farbstoffe (z. B. Lackmus, Phenolphthalein, Universalindikator), die durch Protonierung ihre Farbe ändern",
      "Neutralisation: \\(\\text{H}_3\\text{O}^+ + \\text{OH}^- \\rightarrow 2\\,\\text{H}_2\\text{O}\\) (Säure + Base ➔ Salz + Wasser)",
      "Essigsäure (CH₃COOH): Typische schwache Carbonsäure, unvollständig dissoziiert in Wasser; wichtiger Speise- und Konservierungsstoff"
    ],
    "exercises": [
      {
        "id": "340",
        "title": "Säuren, Basen und Salze",
        "folder": "sauren-basen-und-salze-340"
      },
      {
        "id": "5159",
        "title": "Essigsäure (Ethansäure)",
        "folder": "essigsaure-ethansaure-5159"
      },
      {
        "id": "5142",
        "title": "Carbonsäuren - Organische Säuren im Alltag",
        "folder": "carbonsauren-5142"
      },
      {
        "id": "5147",
        "title": "Baukalk und Löschkalk - Basen und Neutralisation",
        "folder": "der-baustoff-baukalk-loschkalk-5147"
      },
      {
        "id": "2181",
        "title": "Bodenversauerung und Kalkung - pH-Wert und Bodenneutralisation",
        "folder": "bodenversauerung-und-kalkung-2181"
      },
      {
        "id": "entsalzung",
        "title": "Wie funktioniert die Entsalzung von Meerwasser?",
        "folder": "wie-funktioniert-die-entsalzung-von-meerwasser"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=saeuren+basen+salze&t=3752"
  },
  "wasser-loesungen-und-trennverfahren": {
    "slug": "wasser-loesungen-und-trennverfahren",
    "title": "Wasser, Lösungen & Trennverfahren",
    "category": "Reaktionslehre & Physikalische Chemie",
    "shortDesc": "Dipolmolekül Wasser, Wasserstoffbrücken, Dichteanomalie, Meerwasserentsalzung und Trennverfahren.",
    "longDesc": "Wasser ist das universelle Lösungsmittel des Lebens. Seine polare Elektronenpaarbindung und gewinkelte Struktur erzeugen Wasserstoffbrückenbindungen, die für die hohe Oberflächenspannung und die Dichteanomalie verantwortlich sind. Chemische Trennverfahren wie Destillation und Chromatographie trennen Gemische nach ihren physikalischen Eigenschaften.",
    "keyPoints": [
      "Molekülgeometrie & Dipolcharakter: Gewinkelte H₂O-Struktur (Bindungswinkel ca. 104,5°) mit Partialladungen (δ⁻ am Sauerstoff, δ⁺ an Wasserstoffen)",
      "Wasserstoffbrückenbindung: Verursacht ungewöhnlich hohe Siede- und Schmelzpunkte sowie hohe Oberflächenspannung",
      "Dichteanomalie des Wassers: Größte Dichte bei 4 °C; Eis schwimmt auf flüssigem Wasser, wodurch Gewässer von oben zufrieren",
      "Destillation & Meerwasserentsalzung: Trennung von flüssigen Gemischen durch Verdampfen und anschließendes Kondensieren",
      "Chromatographie & Zentrifugation: Trennung von Stoffgemischen durch unterschiedliche Verteilung zwischen stationärer und mobiler Phase bzw. Dichteunterschiede"
    ],
    "exercises": [
      {
        "id": "1149",
        "title": "Wasserstoff und Reaktionen",
        "folder": "wasserstoff-2-1149"
      },
      {
        "id": "5182",
        "title": "Wasserstoffgas",
        "folder": "wasserstoffgas-5182"
      },
      {
        "id": "5275",
        "title": "Die Anomalie des Wassers",
        "folder": "die-anomalie-des-wassers-5275"
      },
      {
        "id": "5145",
        "title": "Das Wassermolekül",
        "folder": "das-wassermolekul-5145"
      },
      {
        "id": "2054",
        "title": "Wasser - ein bedeutender Rohstoff",
        "folder": "wasser-ein-bedeutender-rohstoff-2054"
      },
      {
        "id": "7099",
        "title": "Wie funktioniert die Entsalzung von Meerwasser",
        "folder": "Wie funktioniert die Entsalzung von Meerwasser"
      },
      {
        "id": "7102",
        "title": "Wie funktioniert die Destillation",
        "folder": "Wie funktioniert die Destillation"
      },
      {
        "id": "7103",
        "title": "Wie funktioniert die Chromatographie",
        "folder": "Wie funktioniert die Chromatographie"
      },
      {
        "id": "7062",
        "title": "Wie funktioniert eine Zentrifuge",
        "folder": "Wie funktioniert eine Zentrifuge"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=wasser+trennverfahren&t=3752"
  },
  "metalle-und-legierungen": {
    "slug": "metalle-und-legierungen",
    "title": "Metalle, Legierungen & Gebrauchsmetalle",
    "category": "Metalle, Werkstoffe & Elektrochemie",
    "shortDesc": "Metallbindung, Eigenschaften, Legierungen, Alkalimetalle, Eisen, Aluminium, Kupfer und Zink.",
    "longDesc": "Metalle zeichnen sich durch metallischen Glanz, hervorragende Leitfähigkeit für Strom und Wärme sowie Verformbarkeit (Duktilität) aus. Die Metallbindung erklärt diese Eigenschaften durch positiv geladene Atomrümpfe im frei beweglichen Elektronengas. Legierungen kombinieren Metalle zu Hochleistungswerkstoffen.",
    "keyPoints": [
      "Metallbindung: Regelmäßiges Gitter positiver Atomrümpfe, umgeben von delokalisierten Elektronen (Elektronengas)",
      "Alkalimetalle (1. Hauptgruppe): Weiche, extrem reaktive Metalle (Lithium, Natrium, Kalium); reagieren heftig mit Wasser zu Laugen und Wasserstoff",
      "Wichtige Gebrauchsmetalle: Eisen (Basis der Stahlherstellung), Kupfer (Elektrotechnik, Leitungen), Aluminium (Leichtbau, Flugzeuge), Zink (Korrosionsschutz)",
      "Legierungen: Homogene Gemische aus mindestens einem Metall (z. B. Bronze = Kupfer + Zinn, Messing = Kupfer + Zink, Stahl = Eisen + Kohlenstoff)",
      "Vorteile von Legierungen: Erhöhte Festigkeit, Härte, Korrosionsbeständigkeit oder spezifische Schmelzpunkte"
    ],
    "exercises": [
      {
        "id": "699",
        "title": "Metalle",
        "folder": "studypoint-worter-markieren-metalle-699"
      },
      {
        "id": "571",
        "title": "Legierungs- und Begleitelemente",
        "folder": "lerninhalt-legierungs-und-begleitelemente-571"
      },
      {
        "id": "572",
        "title": "Nichteisenmetalle",
        "folder": "lerninhalt-nichteisenmetalle-572"
      },
      {
        "id": "5136",
        "title": "Alkalimetalle",
        "folder": "alkalimetalle-5136"
      },
      {
        "id": "1161",
        "title": "Aluminium",
        "folder": "aluminium-1161"
      },
      {
        "id": "1171",
        "title": "Eisen",
        "folder": "eisen-1171"
      },
      {
        "id": "1174",
        "title": "Kupfer",
        "folder": "kupfer-1174"
      },
      {
        "id": "1175",
        "title": "Zink",
        "folder": "zink-1175"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=metalle+legierungen&t=3752"
  },
  "edelmetalle-und-weitere-metalle": {
    "slug": "edelmetalle-und-weitere-metalle",
    "title": "Edelmetalle, Schwermetalle & Baustoffe",
    "category": "Metalle, Werkstoffe & Elektrochemie",
    "shortDesc": "Gold, Zinn, Quecksilber, Blei, Stahl, Edelstahl und metallische Baustoffe.",
    "longDesc": "Von edlen Metallen wie Gold, die chemisch äußerst beständig sind, über toxische Schwermetalle wie Quecksilber und Blei bis hin zu modernen Verbundwerkstoffen und Edelstahl prägen diese Metalle Industrie, Technik und Architektur.",
    "keyPoints": [
      "Edelmetalle (Gold, Silber, Platin): Sehr hohe Standardpotenziale; oxidieren an Luft und in Wasser nicht; hohe chemische Beständigkeit",
      "Quecksilber (Hg): Einziges bei Raumtemperatur flüssiges Metall; giftig durch Dampfbildung; Amalgam-Legierungen",
      "Schwermetalle (Blei, Cadmium, Quecksilber): Dichte > 5 g/cm³; toxisch durch Anreicherung in Nahrungsketten und Blockade von Enzymen",
      "Eisen, Stahl & Edelstahl: Kohlenstoffanteil unter 2 % macht Eisen zu schmiedbarem Stahl; Chrom- und Nickelzusatz erzeugen rostfreien Edelstahl",
      "Metallische Baustoffe: Aluminiumprofile, Kupferbleche und Stahlträger als tragende Säulen moderner Bauwerke"
    ],
    "exercises": [
      {
        "id": "1182",
        "title": "Zinn",
        "folder": "zinn-1182"
      },
      {
        "id": "1190",
        "title": "Gold",
        "folder": "gold-1190"
      },
      {
        "id": "1191",
        "title": "Quecksilber",
        "folder": "quecksilber-1191"
      },
      {
        "id": "1192",
        "title": "Blei",
        "folder": "blei-1192"
      },
      {
        "id": "5146",
        "title": "Der Baustoff Aluminium",
        "folder": "der-baustoff-aluminium-5146"
      },
      {
        "id": "5150",
        "title": "Der Baustoff Kupfer",
        "folder": "der-baustoff-kupfer-5150"
      },
      {
        "id": "5156",
        "title": "Eisen, Stahl und Edelstahl",
        "folder": "eisen-stahl-und-edelstahl-5156"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=edelmetalle+stahl&t=3752"
  },
  "elektrochemie-korrosion-und-brennstoffzellen": {
    "slug": "elektrochemie-korrosion-und-brennstoffzellen",
    "title": "Elektrochemie, Korrosion & Brennstoffzellen",
    "category": "Metalle, Werkstoffe & Elektrochemie",
    "shortDesc": "Elektrolyse, Galvanotechnik, Korrosion, Rostschutz, Brennstoffzellen und Batterien.",
    "longDesc": "Die Elektrochemie verknüpft chemische Reaktionen mit elektrischem Strom. Die Elektrolyse erzwingt durch äußere Spannung chemische Reaktionen (z. B. Wasserstoffgewinnung), während Galvanik und Brennstoffzellen chemische Energie gezielt nutzen und Korrosion verhüten.",
    "keyPoints": [
      "Elektrolyse: Umkehrung einer freiwillig ablaufenden Redoxreaktion durch Anlegen einer Gleichspannung (Anode = Oxidation, Kathode = Reduktion)",
      "Galvanik & Vergoldung: Abscheidung einer dünnen Metallschicht auf einem Werkstück zur Veredelung und zum Schutz vor Korrosion",
      "Korrosion & Rostbildung: Elektrochemische Zersetzung von Eisen durch Reaktion mit Sauerstoff und Wasser zu hydratisiertem Eisen(III)-oxid",
      "Korrosionsschutz: Passive Schutzschichten (Lacke, Kunststoffe), Verzinken (Opferanode) und Passivierung",
      "Brennstoffzelle: Kontrollierte 'kalte Verbrennung' von Wasserstoff und Sauerstoff direkt zu Wasser und elektrischer Energie (hoher Wirkungsgrad)"
    ],
    "exercises": [
      {
        "id": "5152",
        "title": "Die Elektrolyse",
        "folder": "die-elektrolyse-5152"
      },
      {
        "id": "7144",
        "title": "Wie funktioniert die Elektrolyse",
        "folder": "Wie funktioniert die Elektrolyse"
      },
      {
        "id": "7180",
        "title": "Wie funktioniert die Vergoldung (Galvanik)",
        "folder": "Wie funktioniert die Vergoldung (Galvanik)"
      },
      {
        "id": "7105",
        "title": "Wie funktioniert die Korrosion (Rost)",
        "folder": "Wie funktioniert die Korrosion (Rost)"
      },
      {
        "id": "7061",
        "title": "Wie funktioniert eine Brennstoffzelle",
        "folder": "Wie funktioniert ein Brennstoffzelle"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=elektrochemie+korrosion&t=3752"
  },
  "kohlenwasserstoffe-erdoel-und-erdgas": {
    "slug": "kohlenwasserstoffe-erdoel-und-erdgas",
    "title": "Kohlenwasserstoffe, Erdöl & Erdgas",
    "category": "Organische Chemie & Kohlenwasserstoffe",
    "shortDesc": "Alkane, Alkene, Alkine, Erdölentstehung, fraktionierte Destillation, Erdgas und alternative Treibstoffe.",
    "longDesc": "Kohlenwasserstoffe bestehen ausschließlich aus Kohlenstoff und Wasserstoff. Sie bilden das Grundgerüst der fossilen Energieträger Erdöl und Erdgas. In Raffinerien werden Rohöle fraktioniert, um Benzin, Kerosin, Diesel und chemische Ausgangsstoffe herzustellen.",
    "keyPoints": [
      "Homologe Reihe der Alkane (CₙH₂ₙ₊₂): Gesättigte Kohlenwasserstoffe von Methan (CH₄) über Propan und Butan bis zu langkettigen Paraffinen",
      "Ungesättigte Kohlenwasserstoffe: Alkene (C=C Doppelbindung) und Alkine (C≡C Dreifachbindung) sind reaktionsfreudig für Additionsreaktionen",
      "Entstehung von Erdöl & Erdgas: Anaerober Abbau von marinem Plankton unter hohem Druck und Temperatur über Jahrmillionen",
      "Fraktionierte Destillation in der Raffinerie: Auftrennung des Rohöls nach Siedebereichen (Gase, Benzin, Kerosin, Diesel, Schweröl, Bitumen)",
      "Alternative Treibstoffe & E-Fuels: Biokraftstoffe, Wasserstoff und synthetische Kraftstoffe zur Reduzierung fossiler CO₂-Emissionen"
    ],
    "exercises": [
      {
        "id": "5170",
        "title": "Kohlenwasserstoffe",
        "folder": "kohlenwasserstoffe-5170"
      },
      {
        "id": "5157",
        "title": "Erdgas",
        "folder": "erdgas-5157"
      },
      {
        "id": "5158",
        "title": "Erdöl",
        "folder": "erdol-5158"
      },
      {
        "id": "2055",
        "title": "Erdöl - das schwarze Gold",
        "folder": "erdol-das-schwarze-gold-2055"
      },
      {
        "id": "5153",
        "title": "Die Erdölraffinerie",
        "folder": "die-erdolraffinerie-5153"
      },
      {
        "id": "7145",
        "title": "Wie funktioniert die Raffination von Erdöl",
        "folder": "Wie funktioniert die Raffination von Erdöl"
      },
      {
        "id": "5139",
        "title": "Alternative Treibstoffe",
        "folder": "alternative-treibstoffe-5139"
      },
      {
        "id": "5168",
        "title": "Kohlenstoffdioxid",
        "folder": "kohlenstoffdioxid-5168"
      },
      {
        "id": "5169",
        "title": "Kohlenstoffmonoxid",
        "folder": "kohlenstoffmonoxid-5169"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kohlenwasserstoffe+erdoel&t=3752"
  },
  "organische-verbindungen-und-kunststoffe": {
    "slug": "organische-verbindungen-und-kunststoffe",
    "title": "Organische Verbindungen & Kunststoffe",
    "category": "Organische Chemie & Kohlenwasserstoffe",
    "shortDesc": "Alkohole, Carbonsäuren, Ester, Kunststoffe, Polymerisation, FCKW, Seifen und Kunststoff-Recycling.",
    "longDesc": "Organische Moleküle erhalten durch funktionelle Gruppen spezifische chemische Eigenschaften: Hydroxylgruppen in Alkoholen, Carboxylgruppen in Carbonsäuren und Estergruppen in Aromastoffen. Über Polymerisationsreaktionen entstehen synthetische Kunststoffe, die unseren Alltag prägen.",
    "keyPoints": [
      "Alkohole: Enthalten die funktionelle Hydroxylgruppe (-OH); Methanol (giftig), Ethanol (Genussmittel & Desinfektion), Glycerin (dreiwertig)",
      "Carbonsäuren & Ester: Carbonsäuren (-COOH) reagieren mit Alkoholen unter Wasserabspaltung zu duftenden Estern (Fruchtaromen, Fette)",
      "Polymerisation: Verknüpfung ungesättigter Monomere mit Doppelbindungen zu langen Kettenmolekülen (z. B. Ethen zu Polyethylen PE)",
      "Kunststoffarten: Thermoplaste (schmelzbar), Duroplaste (hitzebeständig, nicht schmelzbar) und Elastomere (elastisch dehnbar)",
      "Recycling & Seifenherstellung: Werkstoffliches vs. chemisches Recycling von Kunststoffen; Verseifung von Fetten mit Laugen zu Seifenmolekülen"
    ],
    "exercises": [
      {
        "id": "5137",
        "title": "Alkohole",
        "folder": "alkohole-5137"
      },
      {
        "id": "5142",
        "title": "Carbonsäuren",
        "folder": "carbonsauren-5142"
      },
      {
        "id": "5160",
        "title": "Ester",
        "folder": "ester-5160"
      },
      {
        "id": "5163",
        "title": "Fluorchlorkohlenwasserstoff",
        "folder": "fluorchlorkohlenwasserstoff-5163"
      },
      {
        "id": "7106",
        "title": "Wie funktioniert die Polymerisation (Kunststoffherstellung)",
        "folder": "Wie funktioniert die Polymerisation (Herstellung von Kunststoff)"
      },
      {
        "id": "7181",
        "title": "Wie funktioniert das Recycling von Kunststoffen",
        "folder": "Wie funktioniert das Recycling von Kunststoffen"
      },
      {
        "id": "7147",
        "title": "Wie funktioniert die Seifenherstellung",
        "folder": "Wie funktioniert die Seifenherstellung"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kunststoffe+polymere&t=3752"
  },
  "biochemie-und-makromolekuele": {
    "slug": "biochemie-und-makromolekuele",
    "title": "Biochemie & Makromoleküle des Lebens",
    "category": "Biochemie & Naturstoffe",
    "shortDesc": "Kohlenhydrate, Fette, Proteine, Aminosäuren, Stärke und Fettsäuren in lebenden Organismen.",
    "longDesc": "Die Biochemie untersucht die Moleküle und chemischen Prozesse in lebenden Zellen. Die drei Hauptklassen der Makromoleküle – Kohlenhydrate (Energieträger), Lipide (Energiespeicher & Membranen) und Proteine (Baustoffe & Enzyme) – steuern den gesamten Stoffwechsel.",
    "keyPoints": [
      "Kohlenhydrate: Monosaccharide (Glucose, Fructose), Disaccharide (Saccharose, Lactose) und Polysaccharide (Stärke, Glykogen, Cellulose)",
      "Fette & Öle: Ester aus dem dreiwertigen Alkohol Glycerin und drei Fettsäuren (Triglyceride); Energiespeicher mit höchster Energiedichte (37 kJ/g)",
      "Gesättigte vs. ungesättigte Fettsäuren: Gesättigte ohne Doppelbindungen (feste tierische Fette); ungesättigte mit C=C-Doppelbindungen (flüssige Pflanzenöle)",
      "Proteine: Aus 20 verschiedenen proteinogenen Aminosäuren über Peptidbindungen aufgebaute Riesenmoleküle mit Primär-, Sekundär-, Tertiär- und Quartärstruktur",
      "Stärke & Cellulose: Polysaccharide aus Glucose; Stärke dient Pflanzen als Speicher, Cellulose als unlösliches Gerüstmaterial der Zellwände"
    ],
    "exercises": [
      {
        "id": "921",
        "title": "Kohlenhydrate",
        "folder": "kohlenhydrate-921"
      },
      {
        "id": "936",
        "title": "Fette",
        "folder": "fette-936"
      },
      {
        "id": "5162",
        "title": "Fett und Öle",
        "folder": "fett-und-le-5162"
      },
      {
        "id": "5176",
        "title": "Proteine",
        "folder": "proteine-5176"
      },
      {
        "id": "5180",
        "title": "Stärke",
        "folder": "starke-5180"
      },
      {
        "id": "5164",
        "title": "Gesättigte und ungesättigte Fettsäuren",
        "folder": "gesattigte-und-ungesattigte-fettsauren-5164"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=biochemie+proteine+fette&t=3752"
  },
  "chemische-prozesse-in-natur-und-ernaehrung": {
    "slug": "chemische-prozesse-in-natur-und-ernaehrung",
    "title": "Chemische Prozesse in Natur & Ernährung",
    "category": "Biochemie & Naturstoffe",
    "shortDesc": "Alkoholische Gärung, Bier- und Weinherstellung, Mineralstoffe und nachwachsende Rohstoffe.",
    "longDesc": "Biochemische Reaktionen werden in Natur und Ernährung durch Mikroorganismen und Enzyme gesteuert. Die alkoholische Gärung durch Hefepilze ist einer der ältesten biotechnologischen Prozesse der Menschheit zur Veredelung von Nahrungsmitteln.",
    "keyPoints": [
      "Alkoholische Gärung: Anaerober Abbau von Glucose durch Hefe zu Ethanol und Kohlenstoffdioxid: \\(\\text{C}_6\\text{H}_{12}\\text{O}_6 \\rightarrow 2\\,\\text{C}_2\\text{H}_5\\text{OH} + 2\\,\\text{CO}_2\\)",
      "Bier- und Weinherstellung: Maischen, enzymatische Spaltung von Getreidestärke in Malzzucker bzw. Vergärung von Traubensaft, Hopfenzusatz und Gärführung",
      "Mineralstoffe & Spurenelemente: Anorganische Nährstoffe (Natrium, Kalium, Calcium, Magnesium, Eisen, Zink, Iod), die für Nervenleitung, Knochenaufbau und Sauerstofftransport essenziell sind",
      "Holz als nachwachsender Rohstoff: Besteht hauptsächlich aus Cellulose, Hemicellulose und Lignin; CO₂-neutraler Baustoff und Energieträger"
    ],
    "exercises": [
      {
        "id": "5138",
        "title": "Alkoholische Gärung",
        "folder": "alkoholische-garung-5138"
      },
      {
        "id": "7143",
        "title": "Wie funktioniert die Herstellung von Bier und Wein",
        "folder": "Wie funktioniert die Herstellung von Bier und Wein"
      },
      {
        "id": "935",
        "title": "Mineralstoffe",
        "folder": "mineralstoffe-935"
      },
      {
        "id": "2056",
        "title": "Holz - ein nachwachsender Rohstoff",
        "folder": "holz-ein-nachwachsender-rohstoff-2056"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=gaerung+biochemie&t=3752"
  },
  "werkstoffe-und-industrielle-chemie": {
    "slug": "werkstoffe-und-industrielle-chemie",
    "title": "Werkstoffe & Industrielle Chemie",
    "category": "Angewandte Chemie & Umweltchemie",
    "shortDesc": "Herstellung von Glas, Zement, Beton, Papier und industrielle Großverfahren.",
    "longDesc": "Die chemische Industrie wandelt Naturstoffe in langlebige Werkstoffe um. Durch Hochtemperaturprozesse entstehen Glas aus Quarzsand, Zement durch Brennen von Kalkstein und Ton sowie Papier durch chemischen Aufschluss von Pflanzenfasern.",
    "keyPoints": [
      "Glasherstellung: Schmelzen von Quarzsand (SiO₂), Soda (Na₂CO₃) und Kalkstein (CaCO₃) bei über 1400 °C zu einer amorphen, erstarrten Schmelze",
      "Zementherstellung: Brennen von Kalkstein und Ton bei ca. 1450 °C zu Zementklinker; hydraulisches Bindemittel, das mit Wasser zu unlöslichem Stein erstarrt",
      "Beton: Verbundbaustoff aus Zement, Wasser und Gesteinskörnung (Sand, Kies); Stahlbeton widersteht hohen Zug- und Druckkräften",
      "Papierherstellung: Chemischer Aufschluss von Holzfasern (Entfernung von Lignin durch Sulfat-/Sulfitverfahren), Mahlung, Blattbildung und Trocknung"
    ],
    "exercises": [
      {
        "id": "5149",
        "title": "Der Baustoff Glas",
        "folder": "der-baustoff-glas-5149"
      },
      {
        "id": "7146",
        "title": "Wie funktioniert die Herstellung von Glas",
        "folder": "Wie funktioniert die Herstellung von Glas"
      },
      {
        "id": "7137",
        "title": "Wie funktioniert die Zementherstellung",
        "folder": "Wie funktioniert die Zementherstellung"
      },
      {
        "id": "7170",
        "title": "Wie funktioniert die Herstellung von Papier",
        "folder": "Wie funktioniert die Herstellung von Papier"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=glas+zement+werkstoffe&t=3752"
  },
  "umweltchemie-schadstoffe-und-laborsicherheit": {
    "slug": "umweltchemie-schadstoffe-und-laborsicherheit",
    "title": "Umweltchemie, Schadstoffe & Laborsicherheit",
    "category": "Angewandte Chemie & Umweltchemie",
    "shortDesc": "Gefahrstoffkennzeichnung (GHS), Luft- und Gewässerschadstoffe, Kläranlagen und Carbon Capture.",
    "longDesc": "Umweltchemie analysiert die Quellen, Reaktionen und Auswirkungen chemischer Substanzen auf Atmosphäre, Böden und Gewässer. Zugleich vermittelt die Laborsicherheit den sicheren Umgang mit Chemikalien nach dem weltweit harmonisierten System (GHS).",
    "keyPoints": [
      "GHS-Gefahrenpiktogramme: International standardisierte Rauten mit roten Rändern (z. B. entzündbar, ätzend, giftig, umweltgefährdend, explosiv)",
      "Luftschadstoffe: Feinstaub, Stickoxide (NOx), Schwefeldioxid (SO₂) und bodennahes Ozon (Smog, saurer Regen)",
      "Gewässerschadstoffe & Eutrophierung: Überdüngung durch Nitrate und Phosphate führt zu Algenblüten und Sauerstoffmangel",
      "Abwasserreinigung (Kläranlage): Dreistufige Reinigung – mechanisch (Rechen, Absetzbecken), biologisch (Mikroorganismen) und chemisch (Phosphatfällung)",
      "Carbon Capture & Storage (CCS): Abscheidung von CO₂ aus Rauchgasen von Kraftwerken und Industrieanlagen zur unterirdischen Speicherung"
    ],
    "exercises": [
      {
        "id": "5167",
        "title": "Kennzeichnung von Gefahrstoffen",
        "folder": "kennzeichnung-von-gefahrenstoffen-5167"
      },
      {
        "id": "5171",
        "title": "Luftschadstoffe",
        "folder": "luftschadstoffe-5171"
      },
      {
        "id": "5178",
        "title": "Schadstoffe in Gewässern",
        "folder": "schadstoffe-in-gewassern-5178"
      },
      {
        "id": "7138",
        "title": "Wie funktioniert die Abwasserreinigung",
        "folder": "Wie funktioniert die Abwasserreinigung"
      },
      {
        "id": "7155",
        "title": "Wie funktioniert die CO₂-Abscheidung (Carbon Capture)",
        "folder": "Wie funktioniert die CO2-Abscheidung (Carbon Capture)"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=umweltchemie+gefahrstoffe&t=3752"
  },
  "escape-rooms-und-chemieraetsel": {
    "slug": "escape-rooms-und-chemieraetsel",
    "title": "Escape Rooms & Chemie-Rätsel",
    "category": "Rätsel & Escape Rooms",
    "shortDesc": "Löse chemische Codes, knacke Zahlenschlösser und kombiniere Wissen zu Atombau und Elementen!",
    "longDesc": "Interaktive digitale Escape Rooms fordern dein gesamtes chemisches Wissen heraus! Löse spannende Rätsel zu Periodensystem, Atombau, Nichtmetallen und Formeln, um Schlösser zu knacken und Codes zu entschlüsseln.",
    "keyPoints": [
      "Kombiniere logisches Denken mit fundiertem Wissen aus Anorganik und Reaktionslehre",
      "Entziffere chemische Symbole, Formeln und Wertigkeiten zur Entschlüsselung von Rätseln",
      "Ideal für Partnerarbeit, spielerische Klausurvorbereitung oder Stationenlernen",
      "Schritt-für-Schritt-Hinweise helfen weiter, falls du bei einem Schloss feststeckst"
    ],
    "exercises": [
      {
        "id": "3192",
        "title": "Escape Room \"Grundlagen der Chemie\"",
        "folder": "escape-room-quot-grundlagen-der-chemie-quot-3192"
      },
      {
        "id": "3193",
        "title": "Escape Room \"Nichtmetalle\"",
        "folder": "escape-room-quot-nichtmetalle-quot-3193"
      },
      {
        "id": "3233",
        "title": "Escape Room \"Nährstoffe & Biochemie\"",
        "folder": "escape-room-quot-nahrstoffe-quot-3233"
      },
      {
        "id": "601",
        "title": "Die Sprache der Chemie - Symbole und Nomenklatur-Rätsel",
        "folder": "lerninhalt-die-sprache-der-chemie-601"
      },
      {
        "id": "2238",
        "title": "Physik und Chemie im Vergleich - Rätsel und Zuordnungen",
        "folder": "physik-und-chemie-gemeinsamkeiten-und-unterschiede-2238"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=escape+room+chemie&t=3752"
  }
};
