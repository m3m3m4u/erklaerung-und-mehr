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
  "Vorfahrtsregeln & Kreuzungen",
  "Fahrpraxis & Gefahren im Verkehr"
];

export const verkehrTopics: Record<string, VerkehrTopic> = {
  "verkehrssicheres-fahrrad": {
    slug: "verkehrssicheres-fahrrad",
    title: "Das verkehrssichere Fahrrad & Ausrüstung",
    category: "Fahrradausstattung & Sicherheit",
    shortDesc: "Gesetzlich vorgeschriebene Teile nach StVZO, Bremsen, Beleuchtung, Reflektoren und der Fahrradhelm.",
    longDesc: "Ein Fahrrad darf erst dann im Straßenverkehr gefahren werden, wenn alle vorgeschriebenen Sicherheitseinrichtungen funktionstüchtig sind. Neben zwei voneinander unabhängigen Bremsen sind Klingel, Scheinwerfer, Rücklicht und eine vollständige Reflektorenausstattung gesetzliche Pflicht.",
    keyPoints: [
      "Zwei unabhängige Bremsen: Vorder- und Hinterradbremse (Handbremse und/oder Rücktritt)",
      "Beleuchtung: Weißer Frontscheinwerfer mit weißem Frontreflektor; rote Schlussleuchte mit rotem Groß- und Kleinreflektor (Z-Reflektor)",
      "Speichen- und Pedalreflektoren: Mindestens 2 gelbe Reflektoren pro Rad (oder reflektierende Reifenstreifen) und je 2 gelbe Pedalreflektoren",
      "Hell tönende Klingel: Für akustische Warnsignale",
      "Fahrradhelm: Schützt lebenswichtig vor schweren Kopfverletzungen – passgenau und waagerecht tragen (nicht im Nacken)"
    ],
    exercises: [
      { id: "875", title: "Sicher Radfahren – Mein Fahrrad", folder: "sicher-radfahren-mein-fahrrad-875" },
      { id: "876", title: "Sicher Radfahren – Verkehrsflächen", folder: "sicher-radfahren-verkehrsflachen-876" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=fahrradpruefung+ausstattung&t=3752"
  },
  "verkehrszeichen-und-schilder": {
    slug: "verkehrszeichen-und-schilder",
    title: "Wichtige Verkehrszeichen & Schilder",
    category: "Verkehrszeichen & Schilder",
    shortDesc: "Gefahrzeichen (Dreiecke), Vorschriftzeichen (Rund), Richtzeichen (Eckig) und Zusatzzeichen.",
    longDesc: "Verkehrsschilder regeln das sichere Miteinander auf den Straßen. Sie sind in verschiedene Gruppen eingeteilt, deren Farben und Formen klare Bedeutungen signalisieren: Rot bedeutet meist Verbot oder Gefahr, Blau signalisiert Gebot oder Empfehlung.",
    keyPoints: [
      "Gefahrzeichen (Dreieckig mit rotem Rand, z.B. Baustelle, Fußgängerüberweg, Kurve): Mahnen zu erhöhter Aufmerksamkeit und Bremsbereitschaft",
      "Vorschriftzeichen – Gebote (Rund, blau mit weißem Symbol, z.B. Radwegbenutzungspflicht, Fußweg, Fahrtrichtung)",
      "Vorschriftzeichen – Verbote (Rund mit rotem Rand, z.B. Verbot für Radfahrer, Durchfahrt verboten, Einfahrt verboten)",
      "Vorfahrtregelnde Schilder: Vorfahrtstraße (gelbes Quadrat), Vorfahrt gewähren (auf der Spitze stehendes Dreieck), Stoppschild (Achteck mit Haltepflicht an Haltelinie)",
      "Richtzeichen (Rechteckig/quadratisch, z.B. Einbahnstraße, Spielstraße/Verkehrsberuhigter Bereich, Sackgasse)"
    ],
    exercises: [
      { id: "876", title: "Verkehrszeichen & Verkehrsflächen", folder: "sicher-radfahren-verkehrsflachen-876" },
      { id: "875", title: "Schildererkennung für Radfahrer", folder: "sicher-radfahren-mein-fahrrad-875" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=verkehrszeichen+fahrrad&t=3752"
  },
  "vorfahrtsregeln-und-kreuzungen": {
    slug: "vorfahrtsregeln-und-kreuzungen",
    title: "Vorfahrtsregeln, Kreuzungen & Einmündungen",
    category: "Vorfahrtsregeln & Kreuzungen",
    shortDesc: "Rechts vor Links, Vorfahrt an Schildern, Kreisverkehr und ampelgeregelte Kreuzungen.",
    longDesc: "Wer darf zuerst fahren? Die Vorfahrt entscheidet darüber, welche Fahrzeuge an Kreuzungen und Einmündungen Vorrang haben. Wenn keine Schilder oder Ampeln vorhanden sind, gilt ausnahmslos die Grundregel 'Rechts vor Links'.",
    keyPoints: [
      "Grundregel 'Rechts vor Links': Gilt immer dann, wenn keine Verkehrsschilder, Ampeln oder Polizeibeamte die Vorfahrt regeln",
      "Vorfahrtstraße (Zeichen 306): Wer sich auf der Vorfahrtstraße befindet, hat an allen folgenden Kreuzungen Vorfahrt bis zum Zeichen 'Ende der Vorfahrtstraße'",
      "Vorfahrt gewähren (Zeichen 205): Bremsbereit heranfahren, querenden Verkehr durchlassen, erst bei freier Bahn weiterfahren",
      "Halt! Vorfahrt gewähren (Stoppschild): Jeder Radfahrer muss 3 Sekunden lang mit beiden Füßen sicher anhalten und den Verkehr prüfen",
      "Kreisverkehr: Fahrzeuge im Kreisverkehr haben Vorfahrt (bei Schild 'Vorfahrt gewähren' vor der Einfahrt)"
    ],
    exercises: [
      { id: "876", title: "Kreuzungen & Vorfahrtsregeln", folder: "sicher-radfahren-verkehrsflachen-876" },
      { id: "875", title: "Vorfahrt im Straßenverkehr", folder: "sicher-radfahren-mein-fahrrad-875" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=vorfahrt+fahrradpruefung&t=3752"
  },
  "linksabbiegen-und-toter-winkel": {
    slug: "linksabbiegen-und-toter-winkel",
    title: "Linksabbiegen in 8 Schritten & Der Tote Winkel",
    category: "Fahrpraxis & Gefahren im Verkehr",
    shortDesc: "Schrittfolge beim Linksabbiegen, Umschauen, Toter Winkel bei Lkw und Bussen.",
    longDesc: "Das Linksabbiegen ist das unfallträchtigste Fahrmanöver für Radfahrer. Deshalb muss die 8-Schritte-Folge automatisiert beherrscht werden. Zudem birgt der 'Tote Winkel' von Lastwagen und Bussen lebensgefährliche Risiken, wenn man sich neben ihnen aufhält.",
    keyPoints: [
      "Die 8 Schritte beim Linksabbiegen: 1. Umschauen nach hinten ➔ 2. Deutliches Handzeichen links ➔ 3. Zur Fahrbahnmitte einordnen ➔ 4. Vorfahrt von rechts beachten ➔ 5. Fußgänger auf Querung beachten ➔ 6. Gegenverkehr durchlassen ➔ 7. Im weiten Bogen abbiegen ➔ 8. In rechte Fahrbahnhälfte einordnen",
      "Toter Winkel: Bereiche rund um ein Fahrzeug, die der Fahrer trotz aller Spiegel nicht einsehen kann",
      "Grundregel an Kreuzungen: Niemals rechts neben einen stehenden oder langsam fahrenden LKW/Bus stellen – immer mit sicherem Abstand dahinter bleiben!",
      "Blickkontakt: Erst losfahren, wenn man sicher Blickkontakt mit dem Fahrer hergestellt hat",
      "Tür-Zone ('Dooring'): Mindestens 1 Meter Sicherheitsabstand zu parkenden Autos halten, um nicht von sich öffnenden Türen getroffen zu werden"
    ],
    exercises: [
      { id: "875", title: "Fahrradprüfung Praxis & Verhalten", folder: "sicher-radfahren-mein-fahrrad-875" },
      { id: "876", title: "Sicheres Verhalten im Verkehr", folder: "sicher-radfahren-verkehrsflachen-876" }
    ],
    worksheetLink: "https://eduki.com/de/autor/1430402/about-the-world-org?query=linksabbiegen+fahrrad&t=3752"
  }
};
