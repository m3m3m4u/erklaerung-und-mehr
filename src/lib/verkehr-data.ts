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
  "Spezielle Kreuzungen",
  "Gefahren & Toter Winkel"
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
      { id: "875", title: "Sicher Radfahren – Mein Fahrrad", folder: "sicher-radfahren-mein-fahrrad-875" }
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
  "verkehrsflaechen-und-radwege": {
    slug: "verkehrsflaechen-und-radwege",
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
      { id: "876", title: "Sicher Radfahren – Verkehrsflächen", folder: "sicher-radfahren-verkehrsflachen-876" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=verkehrsflaechen+radweg&t=3752"
  },
  "vorfahrtsregeln-und-vorrang": {
    slug: "vorfahrtsregeln-und-vorrang",
    title: "Vorfahrtsregeln & Vorrang",
    category: "Vorfahrt & Vorrangregeln",
    shortDesc: "Rechts vor Links, Vorfahrt an Schildern, Ampeln und Vorrang beim Abbiegen.",
    longDesc: "Wer darf zuerst fahren? Die Vorfahrtsregelung verhindert Kollisionen an Kreuzungen und Einmündungen. Wenn weder Ampeln noch Schilder die Vorfahrt regeln, gilt uneingeschränkt die Grundregel 'Rechts vor Links'.",
    keyPoints: [
      "Grundregel 'Rechts vor Links': Gilt an allen Kreuzungen und Einmündungen ohne Schilder oder Ampeln – Vorfahrt hat immer das von rechts kommende Fahrzeug",
      "Vorfahrtstraße (Zeichen 306): Wer sich auf der Vorfahrtstraße befindet, hat Vorfahrt bis zum Zeichen 'Ende der Vorfahrtstraße'",
      "Vorfahrt gewähren (Zeichen 205): Bremsbereit heranfahren, Vorfahrt des Querverkehrs beachten und erst bei freier Straße weiterfahren",
      "Stoppschild (Zeichen 206): Unbedingte Haltepflicht an der Haltelinie (mindestens 3 Sekunden Stillstand mit beiden Füßen)",
      "Vorrang beim Abbiegen: Wer links abbiegen möchte, muss entgegenkommende Fahrzeuge und Fußgänger durchlassen"
    ],
    exercises: [
      { id: "878", title: "Sicher Radfahren – Vorrangregeln", folder: "sicher-rad-fahren-vorrangregeln-878" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=vorfahrt+fahrradpruefung&t=3752"
  },
  "spezielle-kreuzungen-und-kreisverkehr": {
    slug: "spezielle-kreuzungen-und-kreisverkehr",
    title: "Spezielle Kreuzungen, Kreisverkehr & Linksabbiegen",
    category: "Spezielle Kreuzungen",
    shortDesc: "Kreisverkehr, abknickende Vorfahrt, Linksabbiegen in 8 Schritten und mehrspurige Kreuzungen.",
    longDesc: "Kreisverkehre, abknickende Vorfahrtsstraßen und das Linksabbiegen erfordern besondere Aufmerksamkeit. Das richtige Einordnen und klare Handzeichen sind entscheidend für die Sicherheit aller Verkehrsteilnehmer.",
    keyPoints: [
      "Kreisverkehr: Fahrzeuge im Kreisverkehr haben Vorfahrt vor einfahrenden Fahrzeugen (kein Blinken beim Einfahren, aber zwingend Handzeichen beim Ausfahren)",
      "Abknickende Vorfahrt: Dem Verlauf der Vorfahrtstraße folgen erfordert Blinken/Handzeichen; wer die Vorfahrtstraße verlässt, muss Vorrang gewähren",
      "Die 8 Schritte beim Linksabbiegen: 1. Umschauen nach hinten ➔ 2. Deutliches Handzeichen links ➔ 3. Zur Fahrbahnmitte einordnen ➔ 4. Vorfahrt von rechts prüfen ➔ 5. Fußgänger auf Querung beachten ➔ 6. Gegenverkehr durchlassen ➔ 7. Im weiten Bogen abbiegen ➔ 8. Rechts einordnen",
      "Direktes vs. Indirektes Linksabbiegen: Auf stark befahrenen Straßen können Radfahrer auch indirekt abbiegen (geradeaus über die Kreuzung, anhalten, nach links drehen und mit dem Querverkehr weiterfahren)"
    ],
    exercises: [
      { id: "877", title: "Sicher Radfahren – Spezielle Kreuzungen", folder: "sicher-rad-fahren-spezielle-kreuzungen-877" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=kreisverkehr+linksabbiegen+fahrrad&t=3752"
  },
  "gefaehrliche-situationen-und-toter-winkel": {
    slug: "gefaehrliche-situationen-und-toter-winkel",
    title: "Gefährliche Situationen & Der Tote Winkel",
    category: "Gefahren & Toter Winkel",
    shortDesc: "Toter Winkel bei LKW/Bussen, Dooring-Gefahr bei parkenden Autos und vorausschauendes Fahren.",
    longDesc: "Viele Unfälle entstehen durch Fehleinschätzungen und unübersichtliche Situationen. Der 'Tote Winkel' großer Fahrzeuge ist lebensgefährlich. Vorausschauendes Fahren und ständige Bremsbereitschaft schützen vor Gefahren.",
    keyPoints: [
      "Toter Winkel: Bereiche neben und hinter Lkw/Bussen, die der Fahrer trotz aller Spiegel nicht einsehen kann",
      "Überlebensregel an der Kreuzung: Niemals rechts neben einen abbiegenden Lkw oder Bus stellen – immer mit sicherem Abstand dahinter warten!",
      "Dooring-Gefahr: Mindestens 1 Meter Sicherheitsabstand zu parkenden Autos halten, um nicht von plötzlich geöffneten Autotüren erfasst zu werden",
      "Blickkontakt suchen: Erst losfahren, wenn man sicher Blickkontakt mit Autofahrern hergestellt hat",
      "Witterung & Dunkelheit: Bei Nässe verlängert sich der Bremsweg; reflektierende Kleidung erhöht die Sichtbarkeit enorm"
    ],
    exercises: [
      { id: "879", title: "Sicher Radfahren – Gefährliche Situationen", folder: "sicher-rad-fahren-gefahrliche-situationen-879" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=toter+winkel+fahrrad&t=3752"
  }
};
