export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface MathTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const mathCategories = [
  'Zahlen und Rechnen',
  'Geometrie',
  'Größen und Maße',
  'Algebra',
  'Tools & Spezialseiten',
];

export const mathTopics: Record<string, MathTopic> = {
  "grundlagen-und-begriffe": {
    "slug": "grundlagen-und-begriffe",
    "title": "Grundlagen & Begriffe",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Fachbegriffe der 4 Grundrechenarten: Summand, Summe, Faktor, Produkt, Quotient etc.",
    "longDesc": "Die Mathematik nutzt präzise Fachbegriffe für alle Rechenoperationen. Wer die Begriffe der Grundrechenarten (Addition, Subtraktion, Multiplikation und Division) sicher beherrscht, kann mathematische Aufgaben und Anweisungen fehlerfrei verstehen und lösen.",
    "keyPoints": [
      "Addition (+): 1. Summand + 2. Summand = Summe (Wert der Summe)",
      "Subtraktion (-): Minuend - Subtrahend = Differenz (Wert der Differenz)",
      "Multiplikation (·): 1. Faktor · 2. Faktor = Produkt (Wert des Produkts)",
      "Division (:): Dividend : Divisor = Quotient (Wert des Quotienten)",
      "Vorrangregeln: Klammern werden zuerst berechnet, dann Punktrechnung vor Strichrechnung (KlaPuStri)"
    ],
    "exercises": [
      {
        "id": "157",
        "title": "Begriffe der Grundrechnungsarten",
        "folder": "begriffe-der-grundrechnungsarten-157"
      },
      {
        "id": "794",
        "title": "Begriffe zuordnen",
        "folder": "begriffe-zuordnen-794"
      },
      {
        "id": "617",
        "title": "Additionen im Kopf lösen",
        "folder": "additionen-im-kopf-losen-617"
      },
      {
        "id": "618",
        "title": "Additionen und Subtraktionen im Kopf lösen",
        "folder": "additionen-und-subtraktionen-im-kopf-losen-618"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=grundrechenarten&t=1118"
  },
  "zahlen-und-zahlenmengen": {
    "slug": "zahlen-und-zahlenmengen",
    "title": "Zahlen & Zahlenmengen",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Zahlenbereiche (N, Z, Q, R), römische Zahlen und Binärzahlen.",
    "longDesc": "Zahlen lassen sich in verschiedene Mengen einteilen: von den natürlichen Zählzahlen über negative ganze Zahlen und Brüche bis hin zu den reellen Zahlen. Zudem gibt es historische Zahlsysteme wie die römischen Zahlen oder technische Systeme wie das Binärsystem.",
    "keyPoints": [
      "Natürliche Zahlen (ℕ): 0, 1, 2, 3, 4, ... (Zählzahlen)",
      "Ganze Zahlen (ℤ): ..., -3, -2, -1, 0, 1, 2, 3, ... (inklusive negativer Zahlen)",
      "Rationale Zahlen (ℚ): Alle Zahlen, die sich als Bruch zweier ganzer Zahlen darstellen lassen",
      "Reelle Zahlen (ℝ): Umfasst alle rationalen und irrationalen Zahlen (z. B. √2, π)",
      "Römische Zahlen: I (1), V (5), X (10), L (50), C (100), D (500), M (1000)",
      "Binärsystem: Zahlendarstellung ausschließlich mit den Ziffern 0 und 1"
    ],
    "exercises": [
      {
        "id": "2078",
        "title": "Immunsystem - Aufbau und Bestandteile",
        "folder": "immunsystem-aufbau-und-bestandteile-2078"
      },
      {
        "id": "2079",
        "title": "Immunsystem - Leukozyten und Antikörper",
        "folder": "immunsystem-leukozyten-und-antikorper-2079"
      },
      {
        "id": "2080",
        "title": "Lymphsystem - Lymphflüssigkeit und Immunabwehr",
        "folder": "lymphsystem-lymphflussigkeit-und-immunabwehr-2080"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=zahlenmengen&t=1118"
  },
  "natuerliche-zahlen": {
    "slug": "natuerliche-zahlen",
    "title": "Natürliche Zahlen",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Stellenwerttafel, Runden, Kopfrechnen und Vorrangregeln (KlaPuStri).",
    "longDesc": "Natürliche Zahlen bilden das Fundament des Rechnens. Mit der Stellenwerttafel (Einer, Zehner, Hunderter, Tausender...) lassen sich beliebig große Zahlen darstellen, vergleichen, runden und im Kopf oder schriftlich berechnen.",
    "keyPoints": [
      "Stellenwerttafel: E (Einer), Z (Zehner), H (Hunderter), T (Tausender), ZT (Zehntausender), HT (Hunderttausender), M (Millionen)",
      "Rundungsregel: Bei 0, 1, 2, 3, 4 wird abgerundet; bei 5, 6, 7, 8, 9 wird aufgerundet",
      "KlaPuStri-Regel: 1. Klammern berechnen, 2. Punktrechnung (·, :), 3. Strichrechnung (+, -)",
      "Rechengesetze: Kommutativgesetz (Vertauschungsgesetz) und Assoziativgesetz (Verbindungsgesetz)"
    ],
    "exercises": [
      {
        "id": "152",
        "title": "Gleitkommadarstellung",
        "folder": "gleitkommadarstellung-152"
      },
      {
        "id": "153",
        "title": "KlaPuStri-Aufgaben mit Komma",
        "folder": "klapustri-aufgaben-mit-komma-153"
      },
      {
        "id": "154",
        "title": "KlaPuStri-Aufgaben ohne Komma",
        "folder": "klapustri-aufgaben-ohne-komma-154"
      },
      {
        "id": "155",
        "title": "Übungen zu Flächenmaßen",
        "folder": "bungen-zu-flachenmaesen-155"
      },
      {
        "id": "156",
        "title": "Übungen zu Rechteck und Quadrat",
        "folder": "bungen-zu-rechteck-und-quadrat-156"
      },
      {
        "id": "157",
        "title": "Begriffe der Grundrechnungsarten",
        "folder": "begriffe-der-grundrechnungsarten-157"
      },
      {
        "id": "158",
        "title": "Übungen zu Flächenmaßen",
        "folder": "bungen-zu-langenmaesen-158"
      },
      {
        "id": "159",
        "title": "Übungen zu Rechteck und Quadrat",
        "folder": "multiplikation-von-dezimalzahlen-159"
      },
      {
        "id": "617",
        "title": "Additionen im Kopf lösen",
        "folder": "additionen-im-kopf-losen-617"
      },
      {
        "id": "618",
        "title": "Additionen und Subtraktionen im Kopf lösen",
        "folder": "additionen-und-subtraktionen-im-kopf-losen-618"
      },
      {
        "id": "794",
        "title": "Begriffe zuordnen",
        "folder": "begriffe-zuordnen-794"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=nat%C3%BCrliche+zahlen&t=1118"
  },
  "schriftliches-rechnen": {
    "slug": "schriftliches-rechnen",
    "title": "Schriftliches Rechnen",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Schriftliche Addition, Subtraktion, Multiplikation und Division.",
    "longDesc": "Das schriftliche Rechnen hilft dabei, große und komplexe Zahlen strukturiert und fehlerfrei zu addieren, zu subtrahieren, zu multiplizieren und zu dividieren. Dabei werden die Zahlen stellenwertrichtig untereinander geschrieben und schrittweise von rechts nach links berechnet.",
    "keyPoints": [
      "Schriftliche Addition: Einer unter Einer, Zehner unter Zehner usw. Überträge sauber notieren",
      "Schriftliche Subtraktion: Abziehverfahren oder Ergänzungsverfahren mit Übertrag",
      "Schriftliche Multiplikation: Schrittweises Multiplizieren stellenweise von links oder rechts mit anschließendem Aufsummieren",
      "Schriftliche Division: Schrittweises Teilen von links nach rechts mit Restübertrag"
    ],
    "exercises": [
      {
        "id": "902",
        "title": "Die schriftliche Addition",
        "folder": "die-schriftliche-addition-902"
      },
      {
        "id": "903",
        "title": "Die schriftliche Subtraktion (Ergänzungsverfahren)",
        "folder": "die-schriftliche-subtraktion-erganzungsverfahren-903"
      },
      {
        "id": "904",
        "title": "Die schriftliche Subtraktion (Entbündelungsverfahren)",
        "folder": "die-schriftliche-subtraktion-entbundelungsverfahren-904"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=schriftliches+rechnen&t=1118"
  },
  "das-kleine-einmaleins": {
    "slug": "das-kleine-einmaleins",
    "title": "Das kleine Einmaleins (1x1)",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Sicheres Beherrschen der Malreihen von 1 bis 10 und Quadratzahlen.",
    "longDesc": "Das kleine Einmaleins ist das unverzichtbare Werkzeug für alle weiteren mathematischen Themen. Wer die Malreihen von 1 bis 10 und die Quadratzahlen automatisiert hat, spart bei allen Berechnungen enorm viel Zeit und vermeidet Flüchtigkeitsfehler.",
    "keyPoints": [
      "Kernaufgaben: 1er-, 2er-, 5er- und 10er-Reihe bilden die Basis für alle anderen Reihen",
      "Tauschaufgaben (Kommutativgesetz): 7 · 8 ist dasselbe wie 8 · 7 = 56",
      "Quadratzahlen: Zahlen mit sich selbst multipliziert (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)",
      "Verdoppeln & Halbieren nutzen: Die 4er-Reihe ist das Doppelte der 2er-Reihe, die 8er-Reihe das Doppelte der 4er-Reihe"
    ],
    "exercises": [
      {
        "id": "617",
        "title": "Additionen im Kopf lösen",
        "folder": "additionen-im-kopf-losen-617"
      },
      {
        "id": "618",
        "title": "Additionen und Subtraktionen im Kopf lösen",
        "folder": "additionen-und-subtraktionen-im-kopf-losen-618"
      },
      {
        "id": "794",
        "title": "Begriffe zuordnen",
        "folder": "begriffe-zuordnen-794"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=einmaleins&t=1118"
  },
  "dezimalzahlen": {
    "slug": "dezimalzahlen",
    "title": "Dezimalzahlen",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Addition, Subtraktion, Multiplikation und Umwandlung von Kommazahlen.",
    "longDesc": "Dezimalzahlen (Kommazahlen) erweitern unser Stellenwertsystem nach rechts hinter das Komma (Zehntel, Hundertstel, Tausendstel). Sie ermöglichen das exakte Erfassen von Bruchteilen, Geldbeträgen und Messwerten.",
    "keyPoints": [
      "Stellenwerttafel: Z (Zehner), E (Einer) , z (Zehntel), h (Hundertstel), t (Tausendstel)",
      "Addition & Subtraktion: Das Komma muss immer exakt untereinander stehen",
      "Multiplikation: Wie gewohnt ohne Komma rechnen; das Ergebnis hat so viele Nachkommastellen wie beide Faktoren zusammen",
      "Division durch Zehnerpotenzen: Komma nach links verschieben (z. B. 45,6 : 10 = 4,56)",
      "Multiplikation mit Zehnerpotenzen: Komma nach rechts verschieben (z. B. 3,4 · 100 = 340)"
    ],
    "exercises": [
      {
        "id": "151",
        "title": "Addition und Subtraktion von Dezimalzahlen",
        "folder": "addition-und-subtraktion-von-dezimalzahlen-151"
      },
      {
        "id": "38",
        "title": "Brüche und Dezimalzahlen",
        "folder": "bruche-und-dezimalzahlen-38"
      },
      {
        "id": "810",
        "title": "Überschlagsrechnungen ohne Komma",
        "folder": "berschlagsrechnungen-ohne-komma-810"
      },
      {
        "id": "811",
        "title": "Überschlagsrechnungen mit Komma",
        "folder": "berschlagsrechnungen-mit-komma-811"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=dezimalzahlen&t=1118"
  },
  "negative-zahlen": {
    "slug": "negative-zahlen",
    "title": "Negative Zahlen",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Zahlenstrahl, Vorzeichenregeln, Betrag, Addition und Multiplikation mit Minus.",
    "longDesc": "Negative Zahlen liegen auf dem Zahlenstrahl links von der Null und werden für Temperaturen unter Null, Schulden oder Höhen unter dem Meeresspiegel verwendet. Mit den richtigen Vorzeichenregeln gelingen alle Grundrechenarten mühelos.",
    "keyPoints": [
      "Zahlenstrahl: Je weiter links eine Zahl liegt, desto kleiner ist sie (z. B. -5 < -2)",
      "Betrag einer Zahl: Der Abstand einer Zahl zur Null (| -7 | = 7)",
      "Gegenzahl: Zahl mit umgekehrtem Vorzeichen (Gegenzahl zu +4 ist -4)",
      "Zusammentreffen von Vor- und Rechenzeichen: + (+) = +, + (-) = -, - (+) = -, - (-) = +",
      "Multiplikation & Division: Gleiche Vorzeichen ergeben Plus (+), verschiedene Vorzeichen ergeben Minus (-)"
    ],
    "exercises": [
      {
        "id": "144",
        "title": "Der Würfel (Erklärvideo mit Fragen)",
        "folder": "der-wurfel-erklarvideo-mit-fragen-144"
      },
      {
        "id": "145",
        "title": "Addieren und subtrahieren mit negativen Zahlen",
        "folder": "addieren-und-subtrahieren-mit-negativen-zahlen-145"
      },
      {
        "id": "146",
        "title": "Multiplizieren und Dividieren mit negativen Zahlen",
        "folder": "multiplizieren-und-dividieren-mit-negativen-zahlen-146"
      },
      {
        "id": "147",
        "title": "Gleitkommadarstellung Zuordnungsübung",
        "folder": "gleitkommadarstellung-zuordnungsubung-147"
      },
      {
        "id": "148",
        "title": "Kla-Pu-Stri-Aufgaben mit Dezimalzahlen",
        "folder": "kla-pu-stri-aufgaben-mit-dezimalzahlen-148"
      },
      {
        "id": "149",
        "title": "Gemischte Aufgaben mit Dezimalzahlen",
        "folder": "gemischte-aufgaben-mit-dezimalzahlen-149"
      },
      {
        "id": "150",
        "title": "Division von Dezimalzahlen",
        "folder": "division-von-dezimalzahlen-150"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=negative+zahlen&t=1118"
  },
  "brueche": {
    "slug": "brueche",
    "title": "Bruchrechnen",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Brucharten, Erweitern, Kürzen, Hauptnenner und Grundrechenarten.",
    "longDesc": "Ein Bruch beschreibt den Teil eines Ganzen. Er besteht aus Zähler (oben), Bruchstrich (geteilt durch) und Nenner (unten). Mit Brüchen lassen sich Anteile exakt ohne Rundungsfehler darstellen und berechnen.",
    "keyPoints": [
      "Echter Bruch: Zähler < Nenner (z. B. 3/4)",
      "Unechter Bruch: Zähler ≥ Nenner (z. B. 7/4 = 1 3/4 als gemischte Zahl)",
      "Erweitern: Zähler und Nenner mit derselben Zahl multiplizieren (Wert bleibt gleich)",
      "Kürzen: Zähler und Nenner durch denselben Teiler teilen",
      "Addition/Subtraktion: Brüche müssen erst gleichnamig gemacht werden (gleicher Hauptnenner)",
      "Multiplikation: Zähler · Zähler und Nenner · Nenner (vorher kürzen!)",
      "Division: Mit dem Kehrwert des zweiten Bruchs multiplizieren"
    ],
    "exercises": [
      {
        "id": "28",
        "title": "Brüche - Arten von Brüchen - graphische Darstellung - kürzen und erweitern",
        "folder": "bruche-arten-von-bruchen-graphische-darstellung-kurzen-und-erweitern-28"
      },
      {
        "id": "29",
        "title": "Brucharten bestimmen",
        "folder": "brucharten-bestimmen-29"
      },
      {
        "id": "32",
        "title": "Brüche erweitern",
        "folder": "bruche-erweitern-32"
      },
      {
        "id": "34",
        "title": "Brüche erweitern und kürzen",
        "folder": "bruche-erweitern-und-kurzen-34"
      },
      {
        "id": "41",
        "title": "Brüche addieren und subtrahieren",
        "folder": "bruche-addieren-und-subtrahieren-41"
      },
      {
        "id": "38",
        "title": "Brüche und Dezimalzahlen",
        "folder": "bruche-und-dezimalzahlen-38"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=br%C3%BCche&t=1118"
  },
  "teilbarkeit": {
    "slug": "teilbarkeit",
    "title": "Teilbarkeit & Primzahlen",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Teilbarkeitsregeln (2, 3, 4, 5, 6, 8, 9, 10), Primzahlen, ggT und kgV.",
    "longDesc": "Die Teilbarkeitslehre untersucht, welche Zahlen sich ohne Rest durch andere teilen lassen. Mit Teilbarkeitsregeln, Primfaktorzerlegung, dem größten gemeinsamen Teiler (ggT) und dem kleinsten gemeinsamen Vielfachen (kgV) lassen sich Brüche optimal kürzen und gleichnamig machen.",
    "keyPoints": [
      "Teilbar durch 2: Letzte Ziffer ist gerade (0, 2, 4, 6, 8)",
      "Teilbar durch 3 / 9: Die Quersumme der Ziffern ist durch 3 bzw. 9 teilbar",
      "Teilbar durch 5 / 10: Letzte Ziffer ist 0 oder 5 (bzw. 0 bei 10)",
      "Teilbar durch 4: Die letzten beiden Ziffern bilden eine durch 4 teilbare Zahl",
      "Primzahl: Eine Zahl größer als 1, die nur durch 1 und sich selbst teilbar ist (2, 3, 5, 7, 11, 13, 17, ...)",
      "ggT (Größter gemeinsamer Teiler): Größte Zahl, durch die zwei Zahlen teilbar sind (zum Kürzen)",
      "kgV (Kleinstes gemeinsames Vielfaches): Kleinste Zahl, die Vielfaches beider Zahlen ist (Hauptnenner)"
    ],
    "exercises": [
      {
        "id": "177",
        "title": "Primzahlen",
        "folder": "primzahlen-177"
      },
      {
        "id": "178",
        "title": "Potenzen berechnen",
        "folder": "potenzen-berechnen-178"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=teilbarkeit&t=1118"
  },
  "prozentrechnung": {
    "slug": "prozentrechnung",
    "title": "Prozentrechnung",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Grundwert G, Prozentwert W und Prozentsatz p% berechnen.",
    "longDesc": "Prozent bedeutet \"von Hundert\" (Symbol: %). Die Prozentrechnung wird im Alltag überall verwendet, um Anteile anschaulich darzustellen, Rabatte zu berechnen, Preiserhöhungen zu kalkulieren oder Statistiken zu vergleichen.",
    "keyPoints": [
      "Grundwert (G): Das Ganze bzw. 100 %",
      "Prozentsatz (p %): Der Anteil in Hundertsteln",
      "Prozentwert (W): Der tatsächliche Wert des Anteils",
      "Formeln: W = (G · p) / 100 | p = (W · 100) / G | G = (W · 100) / p",
      "Wichtige Umrechnungen: 50% = 1/2 = 0,5 | 25% = 1/4 = 0,25 | 10% = 1/10 = 0,1 | 20% = 1/5 = 0,2"
    ],
    "exercises": [
      {
        "id": "79",
        "title": "Prozent: graphische Darstellung",
        "folder": "prozent-graphische-darstellung-79"
      },
      {
        "id": "80",
        "title": "Prozent und Brüche",
        "folder": "prozent-und-bruche-80"
      },
      {
        "id": "85",
        "title": "Prozentsatz berechnen (einfach)",
        "folder": "prozentsatz-berechnen-einfach-85"
      },
      {
        "id": "258",
        "title": "Prozentsatz berechnen (mit Brüchen)",
        "folder": "prozentsatz-berechnen-mit-bruchen-258"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=prozent&t=1118"
  },
  "zinsrechnung": {
    "slug": "zinsrechnung",
    "title": "Zinsrechnung",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Kapital, Zinssatz, Jahreszinsen, Monatszinsen und Zinseszins.",
    "longDesc": "Die Zinsrechnung ist eine direkte Anwendung der Prozentrechnung auf Geldbeträge über einen bestimmten Zeitraum. Sie regelt, wie viel Geld man für Sparguthaben erhält oder für Kredite und Darlehen bezahlen muss.",
    "keyPoints": [
      "Kapital (K): Das angelegte oder geliehene Geld (entspricht dem Grundwert G)",
      "Zinssatz (p %): Der Prozentsatz pro Jahr (p.a. = per annum)",
      "Zinsen (Z): Der Zinsertrag in Euro (entspricht dem Prozentwert W)",
      "Jahreszinsen: Z = (K · p) / 100",
      "Monatszinsen (m Monate): Z = (K · p · m) / (100 · 12)",
      "Tageszinsen (t Tage, Bankjahr mit 360 Tagen): Z = (K · p · t) / (100 · 360)"
    ],
    "exercises": [
      {
        "id": "2882",
        "title": "Abzahlungsdarlehen",
        "folder": "abzahlungsdarlehen-2882"
      },
      {
        "id": "2883",
        "title": "Annuitätendarlehen",
        "folder": "annuitatendarlehen-2883"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=zinsrechnung&t=1118"
  },
  "potenzen-und-wurzeln": {
    "slug": "potenzen-und-wurzeln",
    "title": "Potenzen & Wurzeln",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Basis, Exponent, Potenzgesetze, Quadratwurzeln und wissenschaftliche Notation.",
    "longDesc": "Potenzen sind eine Kurzschreibweise für die wiederholte Multiplikation derselben Zahl (z. B. 2⁴ = 2 · 2 · 2 · 2 = 16). Das Wurzelziehen ist die Umkehroperation zum Potenzieren.",
    "keyPoints": [
      "Aufbau einer Potenz: Basis hoch Exponent (aⁿ = a · a · ... · a, n-mal)",
      "Sonderfälle: a⁰ = 1, a¹ = a, a⁻ⁿ = 1 / aⁿ",
      "Gleiche Basis multiplizieren: aʳ · aˢ = aʳ⁺ˢ | Dividieren: aʳ : aˢ = aʳ⁻ˢ",
      "Potenzieren einer Potenz: (aʳ)ˢ = aʳ · ˢ",
      "Quadratwurzel (√a): Diejenige nicht-negative Zahl, deren Quadrat wieder a ergibt (z. B. √49 = 7)",
      "Wissenschaftliche Schreibweise: 3 000 000 = 3 · 10⁶ | 0,0005 = 5 · 10⁻⁴"
    ],
    "exercises": [
      {
        "id": "777",
        "title": "Binomische Formeln",
        "folder": "binomische-formeln-4-777"
      },
      {
        "id": "94",
        "title": "Binomische Formeln 1",
        "folder": "binomische-formeln-1-94"
      },
      {
        "id": "95",
        "title": "Binomische Formeln",
        "folder": "binomische-formeln-2-95"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=potenzen&t=1118"
  },
  "statistik": {
    "slug": "statistik",
    "title": "Statistik & Diagramme",
    "category": "Zahlen und Rechnen",
    "shortDesc": "Mittelwerte, Median, Boxplot, Säulendiagramme und Häufigkeiten.",
    "longDesc": "Die Statistik befasst sich mit der Erhebung, Auswertung und verständlichen Darstellung von Daten. Kenngrößen wie der Mittelwert und der Median sowie grafische Diagramme fassen Datensätze übersichtlich zusammen.",
    "keyPoints": [
      "Arithmetisches Mittel (Durchschnitt): Summe aller Werte geteilt durch die Anzahl der Werte",
      "Median (Zentralwert): Der Wert, der in einer sortierten Reihe genau in der Mitte steht",
      "Modalwert (Modus): Der am häufigsten vorkommende Wert in einer Datenreihe",
      "Spannweite: Differenz zwischen dem größten (Maximum) und kleinsten (Minimum) Wert",
      "Boxplot (Kastengrafik): Zeigt Minimum, unteres Quartil (q1), Median (q2), oberes Quartil (q3) und Maximum",
      "Absolute Häufigkeit: Tatsächliche Anzahl (z. B. 6 Schüler) | Relative Häufigkeit: Anteil als Bruch oder Prozent (z. B. 6/24 = 25 %)"
    ],
    "exercises": [
      {
        "id": "8",
        "title": "Berechne: Mittelwerte und statistische Grundbegriffe",
        "folder": "berechne-mittelwerte-und-statistische-grundbegriffe-8"
      },
      {
        "id": "238",
        "title": "Übungen zum Boxplot",
        "folder": "bungen-zum-boxplot-238"
      },
      {
        "id": "188",
        "title": "Erklärvideo Statistik (Häufigkeiten und Diagramme) mit Fragen",
        "folder": "erklarvideo-statistik-haufigkeiten-und-diagramme-mit-fragen-188"
      },
      {
        "id": "186",
        "title": "Hauptstädte Europas Auswahlübung",
        "folder": "erklarvideo-statistik-mittelwerte-und-boxplot-mit-fragen-186"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=statistik&t=1118"
  },
  "rechteck-und-quadrat": {
    "slug": "rechteck-und-quadrat",
    "title": "Rechteck & Quadrat",
    "category": "Geometrie",
    "shortDesc": "Flächeninhalt, Umfang, Umkehraufgaben und zusammengesetzte Figuren.",
    "longDesc": "Rechtecke und Quadrate sind die grundlegendsten ebenen Figuren der Geometrie. Sie besitzen vier rechte Winkel (90°) und gegenüberliegende Seiten sind jeweils parallel und gleich lang. Beim Quadrat sind alle vier Seiten exakt gleich lang.",
    "keyPoints": [
      "Rechteck Umfang: u = 2 · a + 2 · b = 2 · (a + b)",
      "Rechteck Fläche: A = a · b",
      "Quadrat Umfang: u = 4 · a",
      "Quadrat Fläche: A = a · a = a²",
      "Umkehraufgaben: Gegeben A und a ➔ b = A / a | Gegeben u und a ➔ b = (u / 2) - a",
      "Zusammengesetzte Flächen: In Teilrechtecke zerlegen oder zu einem großen Rechteck ergänzen und Fehlflächen abziehen"
    ],
    "exercises": [
      {
        "id": "21",
        "title": "Übung zur Klaviatur",
        "folder": "bung-zur-klaviatur-21"
      },
      {
        "id": "22",
        "title": "Schwarze Tasten am Klavier",
        "folder": "schwarze-tasten-am-klavier-22"
      },
      {
        "id": "23",
        "title": "Klaviatur und Noten",
        "folder": "klaviatur-und-noten-23"
      },
      {
        "id": "24",
        "title": "Josef Haydn",
        "folder": "josef-haydn-24"
      },
      {
        "id": "25",
        "title": "Städte in Österreich",
        "folder": "josef-haydn-2-25"
      },
      {
        "id": "26",
        "title": "Ludwig van Beethoven",
        "folder": "ludwig-van-beethoven-26"
      },
      {
        "id": "27",
        "title": "Wolfgang Amadeus Mozart",
        "folder": "wolfgang-amadeus-mozart-27"
      },
      {
        "id": "180",
        "title": "Satz von Pythagoras (am Rechteck) - Video mit Fragen",
        "folder": "satz-von-pythagoras-am-rechteck-video-mit-fragen-180"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=rechteck&t=1118"
  },
  "dreiecke": {
    "slug": "dreiecke",
    "title": "Dreiecke",
    "category": "Geometrie",
    "shortDesc": "Rechtwinklige, gleichschenklige und allgemeine Dreiecke, Höhen und Flächen.",
    "longDesc": "Ein Dreieck ist eine geometrische Figur mit 3 Ecken, 3 Seiten und 3 Innenwinkeln. Die Summe aller drei Innenwinkel beträgt in jedem ebenen Dreieck immer exakt 180°.",
    "keyPoints": [
      "Winkelsumme: α + β + γ = 180°",
      "Einteilung nach Seiten: Gleichseitig (alle Seiten gleich), gleichschenklig (2 Seiten gleich), ungleichseitig",
      "Einteilung nach Winkeln: Spitzwinklig (alle < 90°), rechtwinklig (ein 90°-Winkel), stumpfwinklig (ein > 90°-Winkel)",
      "Flächeninhalt: A = (Grundseite · Höhe) / 2 = (c · h_c) / 2",
      "Rechtwinkliges Dreieck Fläche: A = (a · b) / 2 (Katheten als Grundseite und Höhe)",
      "Umfang: u = a + b + c"
    ],
    "exercises": [
      {
        "id": "74",
        "title": "Allgemeine Dreiecke",
        "folder": "allgemeine-dreiecke-74"
      },
      {
        "id": "956",
        "title": "Arten von Dreiecken (nur Video)",
        "folder": "arten-von-dreiecken-nur-video-956"
      },
      {
        "id": "323",
        "title": "Satz von Pythagoras - gleichschenkliges Dreieck",
        "folder": "satz-von-pythagoras-gleichschenkliges-dreieck-323"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=dreiecke&t=1118"
  },
  "vierecke": {
    "slug": "vierecke",
    "title": "Vierecke",
    "category": "Geometrie",
    "shortDesc": "Parallelogramm, Raute, Deltoid, Trapez – Eigenschaften, Umfang und Flächen.",
    "longDesc": "Vierecke haben 4 Ecken und eine Innenwinkelsumme von 360°. Je nach Symmetrie, parallelen Seiten und Seitenlängen unterscheidet man Rechteck, Quadrat, Parallelogramm, Raute (Rhombus), Drachenviereck (Deltoid) und Trapez.",
    "keyPoints": [
      "Innenwinkelsumme im Viereck: Immer 360°",
      "Parallelogramm: Gegenüberliegende Seiten parallel & gleich lang | A = a · h_a | u = 2a + 2b",
      "Raute (Rhombus): Alle 4 Seiten gleich lang, Diagonalen stehen senkrecht | A = a · h_a = (e · f) / 2 | u = 4a",
      "Deltoid (Drachenviereck): Je zwei benachbarte Seiten gleich lang | A = (e · f) / 2 | u = 2a + 2b",
      "Trapez: Mindestens zwei gegenüberliegende Seiten sind parallel (a || c) | A = ((a + c) / 2) · h | u = a + b + c + d"
    ],
    "exercises": [
      {
        "id": "267",
        "title": "Flächenenberechnungen (Rechteck, Quadrat, Dreieck, Parallelogramm, Trapez, Deltoid, Raute)",
        "folder": "flachenenberechnungen-rechteck-quadrat-dreieck-parallelogramm-trapez-deltoid-raute-267"
      },
      {
        "id": "804",
        "title": "Flächeninhalt von Parallelogramm und Raute",
        "folder": "flacheninhalt-von-parallelogramm-und-raute-804"
      },
      {
        "id": "805",
        "title": "Flächeninhalt von Deltoid (Drachenviereck) und Raute",
        "folder": "flacheninhalt-von-deltoid-drachenviereck-und-raute-805"
      },
      {
        "id": "806",
        "title": "Flächeninhalt von Trapezen",
        "folder": "flacheninhalt-von-trapezen-806"
      },
      {
        "id": "807",
        "title": "Flächeninhalt von Vierecken",
        "folder": "flacheninhalt-von-vierecken-807"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=vierecke&t=1118"
  },
  "kreis": {
    "slug": "kreis",
    "title": "Kreis",
    "category": "Geometrie",
    "shortDesc": "Radius, Durchmesser, Kreiszahl Pi, Umfang und Kreisfläche.",
    "longDesc": "Ein Kreis besteht aus allen Punkten einer Ebene, die denselben Abstand (Radius r) zum Mittelpunkt M haben. Mit der Kreiszahl Pi (π ≈ 3,14159...) lassen sich Umfang und Flächeninhalt exakt berechnen.",
    "keyPoints": [
      "Durchmesser: d = 2 · r (doppelter Radius)",
      "Kreiszahl Pi (π): Verhältnis von Umfang zu Durchmesser (π ≈ 3,14159265...)",
      "Umfang: u = 2 · π · r = π · d",
      "Flächeninhalt: A = π · r² = (π · d²) / 4",
      "Kreissektor (Kreisausschnitt): A_sek = (π · r² · α) / 360°",
      "Kreisbogen: b = (2 · π · r · α) / 360°"
    ],
    "exercises": [
      {
        "id": "256",
        "title": "Der Kreis",
        "folder": "der-kreis-256"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=kreis&t=1118"
  },
  "kopfgeometrie": {
    "slug": "kopfgeometrie",
    "title": "Kopfgeometrie & Raumvorstellung",
    "category": "Geometrie",
    "shortDesc": "Grundriss, Aufriss, Schrägriss, Ansichten, Würfelbauten und Raumvorstellung.",
    "longDesc": "Kopfgeometrie schult das räumliche Vorstellungsvermögen und das logische Denken ohne Lineal und Geodreieck. Hierbei geht es um das Erkennen von Körpern aus verschiedenen Blickwinkeln (Grundriss von oben, Aufriss von vorne, Kreuzriss von der Seite) sowie Würfelnetze und Schrägrisse.",
    "keyPoints": [
      "Grundriss: Senkrechte Ansicht von oben auf den Körper",
      "Aufriss: Ansicht des Körpers von vorne",
      "Kreuzriss / Seitenriss: Ansicht des Körpers von der Seite (links oder rechts)",
      "Schrägriss (Kavalierperspektive): Vorderfläche in Originalgröße, nach hinten verlaufende Kanten im 45°-Winkel um die Hälfte verkürzt (Verkürzungsfaktor 0,5)",
      "Würfelnetze: Ein Würfel besitzt genau 11 verschiedene Abwicklungen (Netze) aus 6 Quadraten"
    ],
    "exercises": [
      {
        "id": "200",
        "title": "Aufrisse 1",
        "folder": "aufrisse-1-200"
      },
      {
        "id": "201",
        "title": "Aufrisse",
        "folder": "aufrisse-2-201"
      },
      {
        "id": "202",
        "title": "Aufrisse",
        "folder": "aufrisse-3-202"
      },
      {
        "id": "203",
        "title": "Aufrisse",
        "folder": "aufrisse-4-203"
      },
      {
        "id": "204",
        "title": "Aufrisse",
        "folder": "aufrisse-5-204"
      },
      {
        "id": "457",
        "title": "Aufrisse erkennen",
        "folder": "aufrisse-erkennen-457"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=kopfgeometrie&t=1118"
  },
  "symmetrie": {
    "slug": "symmetrie",
    "title": "Symmetrie & Spiegelungen",
    "category": "Geometrie",
    "shortDesc": "Achsensymmetrie, Punktsymmetrie, Spiegelachsen und Drehungen.",
    "longDesc": "Symmetrie beschreibt die Eigenschaft von Figuren, durch bestimmte geometrische Operationen (Spiegelung, Drehung, Verschiebung) wieder exakt mit sich selbst zur Deckung gebracht zu werden.",
    "keyPoints": [
      "Achsensymmetrie (Spiegelsymmetrie): Eine Gerade (Spiegelachse) teilt die Figur in zwei deckungsgleiche Hälften",
      "Punktsymmetrie (Zentralsymmetrie): Drehung um 180° um ein Symmetriezentrum Z lässt die Figur unverändert",
      "Verbindungslinie zwischen Original- und Bildpunkt: Steht senkrecht auf der Spiegelachse",
      "Abstandstreue: Der Abstand des Originalpunkts zur Achse ist exakt gleich dem Abstand des Bildpunkts zur Achse",
      "Längen- und Winkeltreue: Form und Größe der Figur bleiben bei einer Spiegelung vollständig erhalten"
    ],
    "exercises": [
      {
        "id": "665",
        "title": "Spiegelungen (Achsensymmetrie)",
        "folder": "spiegelungen-achsensymmetrie-665"
      },
      {
        "id": "666",
        "title": "Spiegelungen (Achsensymmetrie)",
        "folder": "spiegelungen-achsensymmetrie-2-666"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=symmetrie&t=1118"
  },
  "winkel": {
    "slug": "winkel",
    "title": "Winkel",
    "category": "Geometrie",
    "shortDesc": "Winkelarten, Winkel schätzen, messen, zeichnen und Winkelbeziehungen.",
    "longDesc": "Ein Winkel beschreibt die Weite einer Drehung zwischen zwei Halbgeraden (Schenkeln), die an einem gemeinsamen Scheitelpunkt zusammentreffen. Die Messung erfolgt in Grad (°).",
    "keyPoints": [
      "Nullwinkel: genau 0°",
      "Spitzer Winkel: zwischen 0° und 90°",
      "Rechter Winkel: genau 90° (gekennzeichnet mit einem Punkt im Bogen)",
      "Stumpfer Winkel: zwischen 90° und 180°",
      "Gestreckter Winkel: genau 180° (eine gerade Linie)",
      "Überstumpfer Winkel: zwischen 180° und 360°",
      "Vollwinkel: genau 360° (ein vollständiger Kreis)",
      "Nebenwinkel: Ergänzen sich zu 180° | Scheitelwinkel: Sind gleich groß"
    ],
    "exercises": [
      {
        "id": "218",
        "title": "Einteilung von Winkeln",
        "folder": "einteilung-von-winkeln-218"
      },
      {
        "id": "662",
        "title": "Kurs Winkel schätzen",
        "folder": "kurs-winkel-schatzen-662"
      },
      {
        "id": "567",
        "title": "Lerninhalt: Winkel",
        "folder": "lerninhalt-winkel-567"
      },
      {
        "id": "381",
        "title": "Winkel",
        "folder": "winkel-381"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=winkel&t=1118"
  },
  "koordinatensystem": {
    "slug": "koordinatensystem",
    "title": "Koordinatensystem",
    "category": "Geometrie",
    "shortDesc": "Kartesisches Koordinatensystem, 4 Quadranten, Punkte eintragen und ablesen.",
    "longDesc": "Ein kartesisches 2D-Koordinatensystem besteht aus zwei senkrecht aufeinander stehenden Achsen: der horizontalen x-Achse (Rechtsachse / Abszisse) und der vertikalen y-Achse (Hochachse / Ordinate). Der Schnittpunkt ist der Koordinatenursprung (0|0).",
    "keyPoints": [
      "Punktbezeichnung: P(x | y) – erst der Wert auf der x-Achse, dann auf der y-Achse (\"Erst ins Haus, dann die Treppe rauf\")",
      "Koordinatenursprung: Nullpunkt (0 | 0)",
      "Quadrant I: (+x, +y) | Quadrant II: (-x, +y) | Quadrant III: (-x, -y) | Quadrant IV: (+x, -y)",
      "Streckenlänge zwischen zwei Punkten: d = √((x₂ - x₁)² + (y₂ - y₁)²)"
    ],
    "exercises": [
      {
        "id": "289",
        "title": "Lineare Funktionen (Erklärvideo und Übungen)",
        "folder": "lineare-funktionen-erklarvideo-und-bungen-289"
      },
      {
        "id": "290",
        "title": "Verschiedene Funktionen (Erklärvideo und Übungen)",
        "folder": "verschiedene-funktionen-erklarvideo-und-bungen-290"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=koordinatensystem&t=1118"
  },
  "satz-von-pythagoras": {
    "slug": "satz-von-pythagoras",
    "title": "Satz des Pythagoras",
    "category": "Geometrie",
    "shortDesc": "Rechtwinklige Dreiecke, Katheten, Hypotenuse (a² + b² = c²) und Raumdiagonale.",
    "longDesc": "In jedem rechtwinkligen Dreieck ist die Summe der Flächeninhalte der Kathetenquadrate gleich dem Flächeninhalt des Hypotenusenquadrats: a² + b² = c².",
    "keyPoints": [
      "Formel: a² + b² = c²",
      "Voraussetzung: Gilt ausschließlich in rechtwinkligen Dreiecken (90°-Winkel)",
      "Katheten: Die beiden kürzeren Seiten am rechten Winkel",
      "Hypotenuse (c): Die längste Seite gegenüber dem 90°-Winkel",
      "Berechnung der Hypotenuse: c = √(a² + b²)",
      "Berechnung einer Kathete: a = √(c² - b²) bzw. b = √(c² - a²)",
      "Anwendungen: Diagonale im Rechteck d = √(a² + b²), Raumdiagonale im Quader d = √(a² + b² + c²)"
    ],
    "exercises": [
      {
        "id": "180",
        "title": "Satz von Pythagoras (am Rechteck) - Video mit Fragen",
        "folder": "satz-von-pythagoras-am-rechteck-video-mit-fragen-180"
      },
      {
        "id": "322",
        "title": "Satz von Pythagoras - rechtwinkliges Dreieck und Rechteck",
        "folder": "satz-von-pythagoras-rechtwinkliges-dreieck-und-rechteck-322"
      },
      {
        "id": "323",
        "title": "Satz von Pythagoras - gleichschenkliges Dreieck",
        "folder": "satz-von-pythagoras-gleichschenkliges-dreieck-323"
      },
      {
        "id": "324",
        "title": "Satz von Pythagoras - Raute",
        "folder": "satz-von-pythagoras-raute-324"
      },
      {
        "id": "325",
        "title": "Satz von Pythagoras - Deltoid",
        "folder": "satz-von-pythagoras-deltoid-325"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=pythagoras&t=1118"
  },
  "wuerfel-und-quader": {
    "slug": "wuerfel-und-quader",
    "title": "Würfel & Quader",
    "category": "Geometrie",
    "shortDesc": "Eigenschaften, Kantenmodelle, Netze, Oberfläche und Volumen.",
    "longDesc": "Würfel und Quader sind rechtwinklige dreidimensionale Körper. Sie besitzen jeweils 8 Ecken, 12 Kanten und 6 Begrenzungsflächen. Beim Quader sind die Flächen Rechtecke, beim Würfel 6 kongruente Quadrate.",
    "keyPoints": [
      "Geometrische Merkmale: 8 Ecken, 12 Kanten, 6 Seitenflächen",
      "Quader Volumen: V = a · b · c (Länge · Breite · Höhe)",
      "Quader Oberfläche: O = 2 · (a·b + b·c + a·c)",
      "Würfel Volumen: V = a · a · a = a³",
      "Würfel Oberfläche: O = 6 · a²",
      "Raumdiagonale Quader: d = √(a² + b² + c²)"
    ],
    "exercises": [
      {
        "id": "382",
        "title": "Würfel und Quader",
        "folder": "wurfel-und-quader-382"
      },
      {
        "id": "191",
        "title": "Berechnungen zum Prisma (mit Umkehraufgaben)",
        "folder": "berechnungen-zum-prisma-mit-umkehraufgaben-191"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=quader&t=1118"
  },
  "prismen-und-pyramiden": {
    "slug": "prismen-und-pyramiden",
    "title": "Prismen & Pyramiden",
    "category": "Geometrie",
    "shortDesc": "Gerade Prismen, Zylinder, Pyramiden und Kegel – Oberfläche und Volumen.",
    "longDesc": "Prismen und Pyramiden sind vielseitige geometrische Körper. Ein gerades Prisma hat zwei zueinander parallele und deckungsgleiche Grundflächen (Dreieck, Sechseck etc.) und Rechtecke als Mantelfläche. Eine Pyramide verjüngt sich von einer Grundfläche spitz zur Spitze S.",
    "keyPoints": [
      "Prisma Volumen: V = G · h (Grundfläche · Körperhöhe)",
      "Prisma Oberfläche: O = 2 · G + M (2 Grundflächen + Mantelfläche)",
      "Prisma Mantel: M = u_G · h (Umfang der Grundfläche · Höhe)",
      "Pyramide Volumen: V = (G · h) / 3 (Ein Drittel des entsprechenden Prismas)",
      "Pyramide Oberfläche: O = G + M (Grundfläche + Dreiecks-Mantelflächen)",
      "Zylinder: V = π · r² · h | Kegel: V = (π · r² · h) / 3"
    ],
    "exercises": [
      {
        "id": "101",
        "title": "Berechnungen: Volumen und Oberfläche der Pyramide mit Bildern",
        "folder": "berechnungen-volumen-und-oberflache-der-pyramide-mit-bildern-101"
      },
      {
        "id": "191",
        "title": "Berechnungen zum Prisma (mit Umkehraufgaben)",
        "folder": "berechnungen-zum-prisma-mit-umkehraufgaben-191"
      },
      {
        "id": "383",
        "title": "Prismen",
        "folder": "prismen-383"
      },
      {
        "id": "384",
        "title": "Pyramide",
        "folder": "pyramide-384"
      },
      {
        "id": "385",
        "title": "Zylinder - Kegel - Kugel",
        "folder": "zylinder-kegel-kugel-385"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=prisma&t=1118"
  },
  "laengenmasse": {
    "slug": "laengenmasse",
    "title": "Längenmaße",
    "category": "Größen und Maße",
    "shortDesc": "mm, cm, dm, m, km – Umrechnungszahlen, Kommaschreibweise und Messen.",
    "longDesc": "Längenmaße beschreiben die Ausdehnung von Strecken und Distanzen. Die gesetzliche Basiseinheit ist der Meter (m). Durch Zehnerpotenzen werden kleinere Einheiten (mm, cm, dm) und größere Einheiten (km) abgeleitet.",
    "keyPoints": [
      "Einheitenreihe: mm ➔ cm ➔ dm ➔ m ➔ km",
      "Umrechnungszahl 10: 1 cm = 10 mm | 1 dm = 10 cm | 1 m = 10 dm = 100 cm = 1000 mm",
      "Umrechnungszahl 1000 bei km: 1 km = 1000 m",
      "Kommaschreibweise: 2 m 35 cm = 2,35 m | 4 km 50 m = 4,050 km = 4,05 km"
    ],
    "exercises": [
      {
        "id": "377",
        "title": "Längenmaße",
        "folder": "langenmaese-377"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=l%C3%A4ngenma%C3%9Fe&t=1118"
  },
  "flaechenmasse": {
    "slug": "flaechenmasse",
    "title": "Flächenmaße",
    "category": "Größen und Maße",
    "shortDesc": "mm², cm², dm², m², a, ha, km² – Umrechnungszahl 100.",
    "longDesc": "Flächenmaße geben die Größe einer zweidimensionalen Ebene an. Die Grundeinheit ist der Quadratmeter (m²). Für Grundstücke und Landwirtschaft werden die Maße Ar (a) und Hektar (ha) verwendet.",
    "keyPoints": [
      "Einheitenreihe: mm² ➔ cm² ➔ dm² ➔ m² ➔ a ➔ ha ➔ km²",
      "Feste Umrechnungszahl ist immer 100!",
      "1 cm² = 100 mm² | 1 dm² = 100 cm² | 1 m² = 100 dm²",
      "1 a (Ar) = 100 m² | 1 ha (Hektar) = 100 a = 10 000 m²",
      "1 km² = 100 ha = 1 000 000 m²",
      "Stellenwerttafel: Jede Flächeneinheit hat genau 2 Stellen (z. B. 3 m² 5 dm² = 3,05 m²)"
    ],
    "exercises": [
      {
        "id": "379",
        "title": "Flächenmaße",
        "folder": "flachenmaese-379"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=fl%C3%A4chenma%C3%9Fe&t=1118"
  },
  "raum-und-hohlmasse": {
    "slug": "raum-und-hohlmasse",
    "title": "Raum- und Hohlmaße",
    "category": "Größen und Maße",
    "shortDesc": "mm³, cm³, dm³, m³, Liter, Milliliter, Hektoliter – Umrechnungszahl 1000.",
    "longDesc": "Raummaße (Volumeneinheiten) beschreiben das Fassungsvermögen oder das Volumen dreidimensionaler Körper. Ein Kubikdezimeter (1 dm³) entspricht exakt einem Liter (1 l) Flüssigkeit.",
    "keyPoints": [
      "Kubikmaße (Umrechnungszahl 1000): 1 cm³ = 1000 mm³ | 1 dm³ = 1000 cm³ | 1 m³ = 1000 dm³",
      "Flüssigkeitsmaße (Liter): 1 l = 1000 ml = 100 cl = 10 dl",
      "Hektoliter: 1 hl = 100 l",
      "Die Brücke zwischen Kubik- und Hohlmaßen: 1 dm³ = 1 Liter | 1 cm³ = 1 Milliliter (ml) | 1 m³ = 1000 Liter = 10 hl"
    ],
    "exercises": [
      {
        "id": "380",
        "title": "Raum- und Hohlmaße",
        "folder": "raum-und-hohlmaese-380"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=raumma%C3%9Fe&t=1118"
  },
  "massenmasse": {
    "slug": "massenmasse",
    "title": "Massenmaße (Gewichte)",
    "category": "Größen und Maße",
    "shortDesc": "mg, g, dag, kg, t – Umrechnung von Gewichten und Kommaschreibweise.",
    "longDesc": "Massenmaße (umgangssprachlich Gewichte) geben an, wie schwer ein Gegenstand oder Stoff ist. Die internationale Standardeinheit ist das Kilogramm (kg).",
    "keyPoints": [
      "Einheitenreihe: mg (Milligramm) ➔ g (Gramm) ➔ dag (Dekagramm) ➔ kg (Kilogramm) ➔ t (Tonne)",
      "1 g = 1000 mg",
      "1 dag = 10 g (vor allem in Österreich im Lebensmittelhandel gebräuchlich)",
      "1 kg = 100 dag = 1000 g",
      "1 t = 1000 kg",
      "Kommaschreibweise: 3 kg 450 g = 3,450 kg = 3,45 kg | 2 t 80 kg = 2,080 t = 2,08 t"
    ],
    "exercises": [
      {
        "id": "378",
        "title": "Massenmaße (Gewicht)",
        "folder": "massenmaese-gewicht-378"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=massenma%C3%9Fe&t=1118"
  },
  "zeit": {
    "slug": "zeit",
    "title": "Zeit & Uhrzeit",
    "category": "Größen und Maße",
    "shortDesc": "Sekunden, Minuten, Stunden, Tage, analoge und digitale Uhrzeit, Zeitspannen.",
    "longDesc": "Zeitmaße basieren auf astronomischen Zyklen (Erdrotation und Sonnenumlauf) und nutzen daher keine reinen Zehnerschritte, sondern das 60er- und 24er-System.",
    "keyPoints": [
      "Zeiteinheiten: 1 min = 60 s | 1 h = 60 min = 3600 s | 1 d (Tag) = 24 h",
      "Woche & Jahr: 1 Woche = 7 d | 1 Jahr = 365 d (Schaltjahr = 366 d) = 52 Wochen = 12 Monate",
      "Analoge Uhr: Kleiner Zeiger = Stunden, großer Zeiger = Minuten, dünner Zeiger = Sekunden",
      "Digitale Uhrzeit: 24-Stunden-Format (z. B. 16:45 Uhr)",
      "Zeitspannen berechnen: Immer schrittweise über volle Stunden rechnen (z. B. von 08:45 bis 11:15 = 15 min + 2 h + 15 min = 2 h 30 min)"
    ],
    "exercises": [
      {
        "id": "262",
        "title": "Uhrzeit (Halbe Stunden)",
        "folder": "uhrzeit-viertelstunden-262"
      },
      {
        "id": "263",
        "title": "Uhrzeit (Viertelstunden)",
        "folder": "uhrzeit-ganze-stunden-2-263"
      },
      {
        "id": "264",
        "title": "Uhrzeit (Ganze Stunden)",
        "folder": "koordinatensystem-positiver-bereich-264"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=zeit&t=1118"
  },
  "massstab": {
    "slug": "massstab",
    "title": "Maßstab",
    "category": "Größen und Maße",
    "shortDesc": "Verkleinerung und Vergrößerung, Pläne, Landkarten und Originalgrößen berechnen.",
    "longDesc": "Ein Maßstab gibt das Verhältnis einer Zeichnung, eines Modells oder einer Karte zur tatsächlichen Wirklichkeit an. Ein Maßstab von 1 : 100 bedeutet: 1 cm auf dem Papier entspricht 100 cm (1 m) in der Realität.",
    "keyPoints": [
      "Verkleinerung (1 : n): Bild ist kleiner als Wirklichkeit (z. B. 1 : 50 000 bei Wanderkarten)",
      "Vergrößerung (n : 1): Bild ist größer als Wirklichkeit (z. B. 5 : 1 bei mikroskopischen Bauteilen)",
      "Berechnung der Wirklichkeit: Planlänge · Maßstabszahl",
      "Berechnung der Planlänge: Wirkliche Länge : Maßstabszahl (vorher in dieselbe Einheit umrechnen!)",
      "Wichtig: Vor dem Rechnen immer auf gleiche Einheiten (meist cm) achten!"
    ],
    "exercises": [
      {
        "id": "293",
        "title": "Maßstab (Erklärvideo Übungen)",
        "folder": "maesstab-erklarvideo-bungen-293"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=ma%C3%9Fstab&t=1118"
  },
  "terme": {
    "slug": "terme",
    "title": "Terme",
    "category": "Algebra",
    "shortDesc": "Grundrechenarten mit Termen, Klammern, Ausmultiplizieren und binomische Formeln.",
    "longDesc": "Ein Term ist ein sinnvoller mathematischer Rechenausdruck aus Zahlen, Variablen (Buchstaben) und Rechenzeichen. Beim Umformen und Vereinfachen von Termen fassen wir gleichartige Glieder zusammen und wenden Rechengesetze an.",
    "keyPoints": [
      "Gleichartige Glieder zusammenfassen: 4x + 7x = 11x | 3a + 2b - a = 2a + 2b",
      "Plus vor der Klammer: Klammer kann einfach weggelassen werden: +(a - b) = a - b",
      "Minus vor der Klammer: Dreht alle Vorzeichen in der Klammer um: -(a - b) = -a + b",
      "Distributivgesetz (Ausmultiplizieren): a · (b + c) = a·b + a·c | (a + b) · (c + d) = ac + ad + bc + bd",
      "1. Binomische Formel: (a + b)² = a² + 2ab + b²",
      "2. Binomische Formel: (a - b)² = a² - 2ab + b²",
      "3. Binomische Formel: (a + b) · (a - b) = a² - b²"
    ],
    "exercises": [
      {
        "id": "235",
        "title": "Grundrechnungsarten mit Termen (Erklärvideos und Übungen)",
        "folder": "grundrechnungsarten-mit-termen-erklarvideos-und-bungen-235"
      },
      {
        "id": "771",
        "title": "Terme addieren und subtrahieren",
        "folder": "terme-addieren-und-subtrahieren-2-771"
      },
      {
        "id": "772",
        "title": "Terme multiplizieren",
        "folder": "terme-multiplizieren-2-772"
      },
      {
        "id": "773",
        "title": "Terme dividieren",
        "folder": "terme-dividieren-773"
      },
      {
        "id": "236",
        "title": "Terme mit Klammern (Erklärvideos und Übungen)",
        "folder": "terme-mit-klammern-erklarvideos-und-bungen-236"
      },
      {
        "id": "774",
        "title": "Terme mit Klammern addieren und subtrahieren",
        "folder": "terme-mit-klammern-addieren-und-subtrahieren-2-774"
      },
      {
        "id": "775",
        "title": "Terme mit Klammern multiplizieren (Monom mal Binom)",
        "folder": "terme-mit-klammern-multiplizieren-monom-mal-binom-775"
      },
      {
        "id": "375",
        "title": "Herausheben gemeinsamer Faktoren",
        "folder": "herausheben-gemeinsamer-faktoren-2-375"
      },
      {
        "id": "776",
        "title": "Terme mit Klammern multiplizieren (Binom mal Binom)",
        "folder": "terme-mit-klammern-multiplizieren-binom-mal-binom-776"
      },
      {
        "id": "400",
        "title": "Die Probe",
        "folder": "die-probe-2-400"
      },
      {
        "id": "777",
        "title": "Binomische Formeln",
        "folder": "binomische-formeln-4-777"
      },
      {
        "id": "93",
        "title": "Binome multiplizieren",
        "folder": "binome-multiplizieren-93"
      },
      {
        "id": "94",
        "title": "Binomische Formeln 1",
        "folder": "binomische-formeln-1-94"
      },
      {
        "id": "95",
        "title": "Binomische Formeln",
        "folder": "binomische-formeln-2-95"
      },
      {
        "id": "96",
        "title": "Binomische Formeln ergänzen",
        "folder": "binomische-formeln-erganzen-96"
      },
      {
        "id": "237",
        "title": "Binomische Formeln (Erklärvideo und Übungen)",
        "folder": "binomische-formeln-erklarvideo-und-bungen-237"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=terme&t=1118"
  },
  "bruchterme": {
    "slug": "bruchterme",
    "title": "Bruchterme",
    "category": "Algebra",
    "shortDesc": "Definitionsmenge, Erweitern, Kürzen und Grundrechenarten mit Bruchtermen.",
    "longDesc": "Ein Bruchterm ist ein Term, bei dem im Nenner mindestens eine Variable (z. B. x) vorkommt. Da der Nenner eines Bruchs niemals 0 sein darf, muss bei Bruchtermen immer zuerst die Definitionsmenge bestimmt werden.",
    "keyPoints": [
      "Definitionsmenge (D): Nenner gleich 0 setzen und diese Nullstellen aus der Grundmenge ausschließen (z. B. D = ℝ \\ {3} bei 5 / (x - 3))",
      "Kürzen von Bruchtermen: Nur Faktoren in Produkten kürzen (\"Aus Differenzen und Summen kürzen nur die Dummen!\")",
      "Faktorisieren vor dem Kürzen: Zuerst Ausklammern oder binomische Formeln anwenden",
      "Addition / Subtraktion: Bruchterme durch Faktorisieren auf den gemeinsamen Hauptnenner bringen",
      "Multiplikation & Division: Zähler · Zähler, Nenner · Nenner bzw. Kehrwert bilden"
    ],
    "exercises": [
      {
        "id": "376",
        "title": "Bruchterme",
        "folder": "bruchterme-376"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=bruchterme&t=1118"
  },
  "gleichungen": {
    "slug": "gleichungen",
    "title": "Gleichungen",
    "category": "Algebra",
    "shortDesc": "Äquivalenzumformungen, lineare Gleichungen lösen und Textgleichungen.",
    "longDesc": "Eine Gleichung besteht aus zwei Termen, die durch ein Gleichheitszeichen verbunden sind. Sie drückt ein Gleichgewicht aus (wie eine Waage). Durch Äquivalenzumformungen wird die gesuchte Variable schrittweise isoliert.",
    "keyPoints": [
      "Äquivalenzumformung: Auf beiden Seiten der Gleichung dieselbe Rechenoperation durchführen (| + Zahl, | - Zahl, | · Zahl ≠ 0, | : Zahl ≠ 0)",
      "Vorgehensweise: 1. Klammern auflösen, 2. Beide Seiten zusammenfassen, 3. Variablen auf eine Seite bringen, 4. Variable isolieren",
      "Probe machen: Die gefundene Lösung in die ursprüngliche Gleichung einsetzen und prüfen, ob eine wahre Aussage entsteht",
      "Textgleichungen: Text systematisch lesen, Unbekannte als Variable (z. B. x) festlegen, mathematischen Ansatz aufstellen und lösen"
    ],
    "exercises": [
      {
        "id": "116",
        "title": "Das kleine 1x1",
        "folder": "gleichungen-116"
      },
      {
        "id": "184",
        "title": "Gleichungen im Kopf lösen",
        "folder": "gleichungen-im-kopf-losen-184"
      },
      {
        "id": "326",
        "title": "Gleichungen lösen (Erklärung und Übungen)",
        "folder": "gleichungen-losen-erklarung-und-bungen-326"
      },
      {
        "id": "179",
        "title": "Gleichungen - Video mit Fragen",
        "folder": "gleichungen-video-mit-fragen-179"
      },
      {
        "id": "160",
        "title": "Begriffe der Grundrechnungsarten",
        "folder": "textgleichungen-einfach-160"
      },
      {
        "id": "199",
        "title": "Umkehraufgaben zum Thema Flächeninhalt und Umfang",
        "folder": "umkehraufgaben-zum-thema-flacheninhalt-und-umfang-199"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=gleichungen&t=1118"
  },
  "funktionen": {
    "slug": "funktionen",
    "title": "Funktionen",
    "category": "Algebra",
    "shortDesc": "Lineare Funktionen, Steigung k, y-Achsenabschnitt d, Funktionsgraphen und Nullstellen.",
    "longDesc": "Eine Funktion ist eine eindeutige Zuordnung, die jedem Ausgangswert x aus einer Definitionsmenge genau einen Zielwert y = f(x) zuordnet. Lineare Funktionen stellen im Koordinatensystem Geraden dar.",
    "keyPoints": [
      "Funktionsgleichung: f(x) = k · x + d (bzw. y = m · x + b)",
      "Steigung k (bzw. m): Gibt an, wie stark die Gerade steigt (k > 0) oder fällt (k < 0) | k = Δy / Δx = (y₂ - y₁) / (x₂ - x₁)",
      "y-Achsenabschnitt d (bzw. b): Schnittpunkt der Geraden mit der y-Achse bei (0 | d)",
      "Nullstelle: Schnittpunkt mit der x-Achse, berechnet durch Nullsetzen: f(x) = 0 ➔ x = -d / k",
      "Steigungsdreieck: 1 Einheit nach rechts auf der x-Achse, k Einheiten nach oben/unten auf der y-Achse"
    ],
    "exercises": [
      {
        "id": "289",
        "title": "Lineare Funktionen (Erklärvideo und Übungen)",
        "folder": "lineare-funktionen-erklarvideo-und-bungen-289"
      },
      {
        "id": "290",
        "title": "Verschiedene Funktionen (Erklärvideo und Übungen)",
        "folder": "verschiedene-funktionen-erklarvideo-und-bungen-290"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=funktionen&t=1118"
  },
  "schlussrechnen": {
    "slug": "schlussrechnen",
    "title": "Schlussrechnen & Dreisatz",
    "category": "Algebra",
    "shortDesc": "Direkte und indirekte Proportionalität, Dreisatz-Verfahren im Alltag.",
    "longDesc": "Das Schlussrechnen (Dreisatz) ist eine der nützlichsten Methoden der Schulmathematik. Es dient dazu, aus drei bekannten Werten eines proportionalen oder antiproportionalen Verhältnisses den vierten gesuchten Wert zu berechnen.",
    "keyPoints": [
      "Direktes Verhältnis (je mehr, desto mehr / je weniger, desto weniger): Quotient ist konstant (y / x = const.) ➔ z. B. Menge und Preis von Äpfeln",
      "Indirektes Verhältnis (je mehr, desto weniger / je weniger, desto mehr): Produkt ist konstant (x · y = const.) ➔ z. B. Anzahl der Arbeiter und Baudauer",
      "Der klassische 3-Schritt beim Dreisatz: 1. Ausgangssatz notieren, 2. Auf die Einheit (1) herabrechnen, 3. Auf die gesuchte Vielheit hochrechnen"
    ],
    "exercises": [
      {
        "id": "245",
        "title": "Schlussrechnungen",
        "folder": "schlussrechnungen-245"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=schlussrechnung&t=1118"
  },
  "kopfrechnen-und-kopfgeometrie": {
    "slug": "kopfrechnen-und-kopfgeometrie",
    "title": "Kopfrechnen & 10-Minuten-Training",
    "category": "Tools & Spezialseiten",
    "shortDesc": "10 Aufgaben in 10 Minuten – Tägliches Schnelltraining für Kopfrechnen und Raumvorstellung.",
    "longDesc": "Regelmäßiges kurzes Kopfrechentraining stärkt das Zahlengespür, die Konzentration und die Rechensicherheit. Ob als Warm-Up zu Beginn der Schulstunde oder für das tägliche 10-Minuten-Selbststudium.",
    "keyPoints": [
      "Ziel: Schnelles Erkennen von Zahlenstrukturen und Rechenvorteilen",
      "Rechenvorteile nutzen: Zahlen zu vollen Zehnern/Hundertern ergänzen (z. B. 48 + 37 = 48 + 2 + 35 = 50 + 35 = 85)",
      "Aufteilen beim Multiplizieren: 14 · 6 = 10 · 6 + 4 · 6 = 60 + 24 = 84",
      "Überschlagsrechnung: Ergebnisse vor dem genauen Rechnen grob schätzen"
    ],
    "exercises": [
      {
        "id": "617",
        "title": "Additionen im Kopf lösen",
        "folder": "additionen-im-kopf-losen-617"
      },
      {
        "id": "618",
        "title": "Additionen und Subtraktionen im Kopf lösen",
        "folder": "additionen-und-subtraktionen-im-kopf-losen-618"
      },
      {
        "id": "794",
        "title": "Begriffe zuordnen",
        "folder": "begriffe-zuordnen-794"
      },
      {
        "id": "457",
        "title": "Aufrisse erkennen",
        "folder": "aufrisse-erkennen-457"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=kopfrechnen&t=1118"
  },
  "die-groessten-mathematiker": {
    "slug": "die-groessten-mathematiker",
    "title": "Die größten Mathematiker",
    "category": "Tools & Spezialseiten",
    "shortDesc": "Meilensteine der Mathematikgeschichte: Pythagoras, Euklid, Gauß, Euler, Ada Lovelace uvm.",
    "longDesc": "Die Mathematik ist eine der ältesten Wissenschaften der Menschheit. Von der Antike über die Renaissance bis ins moderne Computerzeitalter haben geniale Denkerinnen und Denker die Grundlagen für unsere moderne Welt geschaffen.",
    "keyPoints": [
      "Pythagoras von Samos (~570–495 v. Chr.): Satz des Pythagoras und Harmonielehre",
      "Euklid von Alexandria (~300 v. Chr.): \"Elemente\" – Begründer der axiomatischen Geometrie",
      "Archimedes (~287–212 v. Chr.): Hebelgesetz, Kreisberechnung und Auftriebskraft",
      "Carl Friedrich Gauß (1777–1855): \"Fürst der Mathematiker\", Normalverteilung (Gauß-Glocke), Zahlentheorie",
      "Leonhard Euler (1707–1783): Eulersche Zahl e, Funktionsschreibweise f(x) und Formel e^(iπ) + 1 = 0",
      "Ada Lovelace (1815–1852): Erste Programmiererin der Weltgeschichte",
      "Alan Turing (1912–1954): Begründer der modernen Informatik und theoretischen Mathematik"
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
        "id": "3631",
        "title": "Alexander Grothendieck",
        "folder": "alexander-grothendieck-3631"
      },
      {
        "id": "3655",
        "title": "Andrew Wiles",
        "folder": "andrew-wiles-3655"
      },
      {
        "id": "3671",
        "title": "Apollonius of Perga",
        "folder": "apollonius-of-perga-3671"
      },
      {
        "id": "3684",
        "title": "Augustin-Louis Cauchy",
        "folder": "augustin-louis-cauchy-3684"
      },
      {
        "id": "3703",
        "title": "Bernhard Riemann",
        "folder": "bernhard-riemann-3703"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=mathematik+geschichte&t=1118"
  },
  "escape-room-mathematik": {
    "slug": "escape-room-mathematik",
    "title": "Escape Room Mathematik",
    "category": "Tools & Spezialseiten",
    "shortDesc": "Spannende Rätsel und Rechencodes lösen, um aus dem Escape Room zu entkommen!",
    "longDesc": "Mathematische Escape Rooms verbinden logisches Denken, Rechenfähigkeiten und Detektivarbeit zu einem motivierenden Spielerlebnis. Löse knifflige Mathe-Aufgaben, um Zahlencodes zu knacken und das Rätsel zu lüften.",
    "keyPoints": [
      "Löse jede Teilaufgabe sorgfältig auf einem Notizblatt",
      "Achte genau auf Ziffernfolgen und Zwischenergebnisse für den finalen Lösungscode",
      "Kombiniere mathematische Regeln aus Geometrie, Bruchrechnen und Algebra"
    ],
    "exercises": [
      {
        "id": "177",
        "title": "Primzahlen",
        "folder": "primzahlen-177"
      },
      {
        "id": "178",
        "title": "Potenzen berechnen",
        "folder": "potenzen-berechnen-178"
      },
      {
        "id": "180",
        "title": "Satz von Pythagoras (am Rechteck) - Video mit Fragen",
        "folder": "satz-von-pythagoras-am-rechteck-video-mit-fragen-180"
      },
      {
        "id": "188",
        "title": "Erklärvideo Statistik (Häufigkeiten und Diagramme) mit Fragen",
        "folder": "erklarvideo-statistik-haufigkeiten-und-diagramme-mit-fragen-188"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=escape+room+mathe&t=1118"
  }
};
