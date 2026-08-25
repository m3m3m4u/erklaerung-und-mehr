export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface VerkehrTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const verkehrCategories = [
  "Fahrradausstattung & Sicherheit",
  "Verkehrszeichen & Schilder",
  "Verkehrsflächen & Radwege",
  "Vorfahrt & Vorrangregeln",
  "Gefahren & Spezielle Situationen"
];

export const verkehrTopics: Record<string, VerkehrTopic> = {
  "verkehrssicheres-fahrrad": {
    slug: "verkehrssicheres-fahrrad",
    title: "Das verkehrssichere Fahrrad & Ausrüstung",
    category: "Fahrradausstattung & Sicherheit",
    shortDesc: "Gesetzlich vorgeschriebene Teile nach StVZO, Bremsen, Beleuchtung, Reflektoren und der Fahrradhelm.",
    longDesc: "Ein Fahrrad darf erst dann im Straßenverkehr gefahren werden, wenn alle gesetzlich vorgeschriebenen Sicherheitseinrichtungen funktionstüchtig sind. Neben zwei voneinander unabhängigen Bremsen sind Klingel, Frontscheinwerfer, Rücklicht und eine vollständige Reflektorenausstattung Pflicht.",
    keyPoints: [
      "Zwei unabhängige Bremsen: Vorder- und Hinterradbremse (Handbremse und/oder Rücktrittbremse)",
      "Vollständige Beleuchtung: Weißer Frontscheinwerfer mit weißem Frontreflektor; rote Schlussleuchte mit rotem Z-Großflächenreflektor",
      "Speichen- und Pedalreflektoren: Je 2 gelbe Reflektoren pro Rad (oder durchgehende reflektierende Reifenstreifen) sowie je 2 gelbe Pedalreflektoren",
      "Hell tönende Klingel: Für akustische Warnsignale vorgeschrieben",
      "Fahrradhelm: Schützt lebenswichtig vor schweren Kopfverletzungen – passgenau und waagerecht tragen (nicht in den Nacken geschoben)"
    ],
    exercises: [
      { id: "875", title: "Sicher Radfahren – Mein Fahrrad & Ausrüstung", folder: "sicher-radfahren-mein-fahrrad-875" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=fahrradpruefung+ausstattung&t=3752"
  },
  "verkehrszeichen-und-schilder": {
    slug: "verkehrszeichen-und-schilder",
    title: "Wichtige Verkehrszeichen für Radfahrer",
    category: "Verkehrszeichen & Schilder",
    shortDesc: "Gefahrzeichen (Dreiecke), Vorschriftzeichen (Rund), Richtzeichen (Eckig) und Zusatzschilder.",
    longDesc: "Verkehrsschilder regeln das sichere Miteinander auf den Straßen. Farben und Formen signalisieren ihre Funktion: Rot bedeutet Gefahr oder Verbot, Blau signalisiert Gebote oder vorgeschriebene Sonderwege für Radfahrer.",
    keyPoints: [
      "Gefahrzeichen (Dreieckig mit rotem Rand): Mahnen zu erhöhter Aufmerksamkeit und Bremsbereitschaft (z.B. Baustelle, Fußgängerüberweg, Kurve)",
      "Gebotszeichen (Rund, blau mit weißem Symbol): Radwegbenutzungspflicht (Zeichen 237), gemeinsamer Geh- und Radweg (Zeichen 240), getrennter Geh- und Radweg (Zeichen 241)",
      "Verbotszeichen (Rund mit rotem Rand): Verbot für Radfahrer (Zeichen 254), Verbot der Einfahrt (Einbahnstraße) – außer Zusatzschild 'Radfahrer frei'",
      "Vorfahrtregelnde Schilder: Vorfahrtstraße (gelbes Quadrat), Vorfahrt gewähren (weißes Dreieck mit rotem Rand auf der Spitze), Halt! Vorfahrt gewähren (Stoppschild)",
      "Richtzeichen: Einbahnstraße, Fußgängerzone, verkehrsberuhigter Bereich (Spielstraße: nur Schrittgeschwindigkeit)"
    ],
    exercises: [
      { id: "901", title: "Verkehrsschilder für Radfahrer", folder: "verkehrsschilder-fur-radfahrer-901" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=verkehrszeichen+fahrrad&t=3752"
  },
  "verkehrsflaechen-und-wege": {
    slug: "verkehrsflaechen-und-wege",
    title: "Verkehrsflächen, Radwege & Gehwege",
    category: "Verkehrsflächen & Radwege",
    shortDesc: "Radwege, Schutzstreifen, Gehwege, Radfahrer auf der Fahrbahn und Fußgängerzonen.",
    longDesc: "Auf welchen Verkehrsflächen dürfen und müssen Radfahrer fahren? Die StVO unterscheidet klar zwischen benutzungspflichtigen Radwegen, reinen Gehwegen, Fahrradstraßen und Mischverkehrszonen.",
    keyPoints: [
      "Benutzungspflichtige Radwege: Gekennzeichnet durch das blaue runde Radwegschild – hier muss der Radweg zwingend benutzt werden",
      "Reine Gehwege: Dürfen von Radfahrern ab 10 Jahren nicht befahren werden (Kinder bis 8 Jahre müssen, bis 10 Jahre dürfen auf dem Gehweg fahren)",
      "Schutzstreifen & Radfahrstreifen: Durch gestrichelte bzw. durchgezogene Linie auf der Fahrbahn markiert",
      "Rechtsfahrgebot: Auch auf dem Radweg und der Fahrbahn gilt immer das Rechtsfahrgebot",
      "Fußgängerzonen & Zebrastreifen: In Fußgängerzonen nur Schrittgeschwindigkeit bei 'Radfahrer frei'; am Zebrastreifen nur Vorrang beim Absteigen und Schieben"
    ],
    exercises: [
      { id: "876", title: "Sicher Radfahren – Verkehrsflächen", folder: "sicher-radfahren-verkehrsflachen-876" },
      { id: "5490", title: "Fahrradfreundliche Infrastruktur & Wege", folder: "fahrradfreundliche-stadte-geographische-bedingungen-fur-erfolgreiche-konzepte-5490" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=verkehrsflaechen+radweg&t=3752"
  },
  "vorfahrtsregeln-und-kreuzungen": {
    slug: "vorfahrtsregeln-und-kreuzungen",
    title: "Vorfahrtsregeln & Vorrang an Kreuzungen",
    category: "Vorfahrt & Vorrangregeln",
    shortDesc: "Rechts vor Links, Vorfahrt an Schildern, Ampeln, Kreisverkehr und Abknickende Vorfahrt.",
    longDesc: "Wer darf zuerst fahren? Die Vorfahrtsregelung verhindert Kollisionen an Kreuzungen und Einmündungen. Wenn weder Ampeln noch Schilder die Vorfahrt regeln, gilt uneingeschränkt die Grundregel 'Rechts vor Links'.",
    keyPoints: [
      "Grundregel 'Rechts vor Links': Gilt an allen Kreuzungen und Einmündungen ohne Schilder oder Ampeln – Vorfahrt hat immer das von rechts kommende Fahrzeug",
      "Vorfahrtstraße (Zeichen 306): Wer sich auf der Vorfahrtstraße befindet, hat Vorfahrt bis zum Zeichen 'Ende der Vorfahrtstraße'",
      "Vorfahrt gewähren (Zeichen 205): Bremsbereit heranfahren, Vorfahrt des Querverkehrs beachten und erst bei freier Straße weiterfahren",
      "Stoppschild (Zeichen 206): Unbedingte Haltepflicht an der Haltelinie (mindestens 3 Sekunden Stillstand mit beiden Füßen)",
      "Kreisverkehr: Fahrzeuge im Kreisverkehr haben Vorfahrt vor einfahrenden Fahrzeugen (kein Blinken beim Einfahren, aber zwingend beim Ausfahren)"
    ],
    exercises: [
      { id: "878", title: "Sicher Radfahren – Vorrangregeln & Vorfahrt", folder: "sicher-rad-fahren-vorrangregeln-878" },
      { id: "877", title: "Sicher Radfahren – Spezielle Kreuzungen", folder: "sicher-rad-fahren-spezielle-kreuzungen-877" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=vorfahrt+fahrradpruefung&t=3752"
  },
  "linksabbiegen-und-toter-winkel": {
    slug: "linksabbiegen-und-toter-winkel",
    title: "Gefahren im Verkehr: Linksabbiegen & Toter Winkel",
    category: "Gefahren & Spezielle Situationen",
    shortDesc: "Die 8 Schritte des Linksabbiegens, Toter Winkel bei Lkw/Bussen und Gefahrenabwehr.",
    longDesc: "Das Linksabbiegen ist eines der anspruchsvollsten und unfallträchtigsten Fahrmanöver. Zudem birgt der 'Tote Winkel' großer Fahrzeuge tödliche Gefahren, wenn Radfahrer sich neben abbiegenden Lkw oder Bussen aufhalten.",
    keyPoints: [
      "Die 8 Schritte beim Linksabbiegen: 1. Umschauen nach hinten ➔ 2. Deutliches Handzeichen links ➔ 3. Zur Fahrbahnmitte einordnen ➔ 4. Vorfahrt von rechts prüfen ➔ 5. Fußgänger auf Querung beachten ➔ 6. Gegenverkehr durchlassen ➔ 7. Im weiten Bogen abbiegen ➔ 8. Rechts einordnen",
      "Toter Winkel: Bereiche neben und hinter Lkw/Bussen, die der Fahrer trotz Spiegeln nicht sehen kann",
      "Überlebensregel an der Kreuzung: Niemals rechts neben einen Lkw oder Bus stellen – immer mit mindestens einer Fahrzeuglänge Abstand dahinter warten!",
      "Dooring-Gefahr: Mindestens 1 Meter Sicherheitsabstand zu parkenden Autos halten, um nicht von sich öffnenden Türen erfasst zu werden",
      "Blickkontakt suchen: Nur wenn man sicher ist, dass der Autofahrer einen wahrgenommen hat, losfahren"
    ],
    exercises: [
      { id: "879", title: "Sicher Radfahren – Gefährliche Situationen & Toter Winkel", folder: "sicher-rad-fahren-gefahrliche-situationen-879" },
      { id: "877", title: "Sicher Radfahren – Kreuzungsmanöver & Abbiegen", folder: "sicher-rad-fahren-spezielle-kreuzungen-877" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=linksabbiegen+fahrrad&t=3752"
  }
};
