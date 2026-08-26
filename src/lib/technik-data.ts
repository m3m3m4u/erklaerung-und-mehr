export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface TechnikTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const technikCategories: string[] = [
  "Werkstoffe & Fertigung",
  "Mechanik & Antriebe",
  "Elektrotechnik & Messtechnik",
  "Fahrzeug- & Verkehrstechnik",
  "Energie- & Umwelttechnik",
  "Alltagstechnik & Geräte"
];

export const technikTopics: Record<string, TechnikTopic> = {
  "werkstoffe-und-metalle": {
    "slug": "werkstoffe-und-metalle",
    "title": "Werkstoffkunde & Metalle",
    "category": "Werkstoffe & Fertigung",
    "shortDesc": "Eisenguss, Stähle, Nichteisenmetalle (Aluminium, Kupfer, Messing), Legierungen und Werkstoffeigenschaften.",
    "longDesc": "Werkstoffe sind die materielle Basis aller technischen Konstruktionen. Hier lernst du die Einteilung der Metalle in Eisen- und Nichteisenmetalle kennen, erfährst Wissenswertes über Schmelzpunkte, Zähigkeit, Korrosionsbeständigkeit und thermische Leitfähigkeit.",
    "keyPoints": [
      "Einteilung der Werkstoffe: Metalle, Kunststoffe, Keramik, Naturwerkstoffe (Holz, Stein) und Verbundwerkstoffe",
      "Eisenwerkstoffe: Stahl (schmiedbar, Kohlenstoffgehalt unter 2,06 %) und Gusseisen (nicht schmiedbar, gießbar)",
      "Nichteisenmetalle (NE-Metalle): Schwermetalle (Kupfer, Zink, Blei, Zinn) und Leichtmetalle (Aluminium, Magnesium, Titan mit Dichte < 5 g/cm³)",
      "Legierungen: Metallgemische zur Optimierung von Härte, Zugfestigkeit oder Korrosionsbeständigkeit (z. B. Messing = Kupfer + Zink, Bronze = Kupfer + Zinn)",
      "Prüfverfahren: Härteprüfung (Brinell, Vickers, Rockwell), Zugversuch und Kerbschlagbiegeversuch"
    ],
    "exercises": [
      {
        "id": "596",
        "title": "Lerninhalt: Werkstoffkunde",
        "folder": "lerninhalt-werkstoffkunde-596"
      },
      {
        "id": "577",
        "title": "Lerninhalt: Eisengusswerkstoffe",
        "folder": "lerninhalt-eisengusswerkstoffe-577"
      },
      {
        "id": "572",
        "title": "Lerninhalt: Nichteisenmetalle",
        "folder": "lerninhalt-nichteisenmetalle-572"
      },
      {
        "id": "3401",
        "title": "Die Metalltechnik",
        "folder": "die-metalltechnik-3401"
      },
      {
        "id": "699",
        "title": "studypoint - wörter markieren - Metalle",
        "folder": "studypoint-worter-markieren-metalle-699"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Metalle+Werkstoffkunde+Technik&t=1251"
  },
  "kunststoffe-und-polymere": {
    "slug": "kunststoffe-und-polymere",
    "title": "Kunststoffe & Polymere",
    "category": "Werkstoffe & Fertigung",
    "shortDesc": "Thermoplaste, Duroplaste, Elastomere: Molekülketten, Verarbeitung, Eigenschaften und Recycling.",
    "longDesc": "Kunststoffe sind synthetische oder halbsynthetische Makromoleküle mit maßgeschneiderten Eigenschaften: Vom formbaren Thermoplast über hitzebeständige Duroplaste bis hin zu elastischen Dichtungen.",
    "keyPoints": [
      "Thermoplaste: Lineare oder verzweigte Ketten, unter Wärmezufuhr wiederholt verformbar und schweißbar (z. B. PE, PP, PVC, PET)",
      "Duroplaste: Engmaschig räumlich vernetzt, nach dem Aushärten hitzebeständig und unschmelzbar (z. B. Epoxidharz, Bakelit, Melamin)",
      "Elastomere: Weitmaschig vernetzte Ketten, gummielastisch, federn nach Belastung in ihre Ausgangsform zurück (z. B. Kautschuk, Silikon)",
      "Syntheseverfahren: Polymerisation (Kettenreaktion ohne Nebenprodukt), Polykondensation (unter Wasserabspaltung) und Polyaddition",
      "Kreislaufwirtschaft: Mechanisches Recycling, chemisches Recycling und Entwicklung biobasierter/biologisch abbaubarer Biokunststoffe"
    ],
    "exercises": [
      {
        "id": "5140",
        "title": "Arten von Kunststoffen",
        "folder": "arten-von-kunststoffen-5140"
      },
      {
        "id": "5166",
        "title": "Herstellung von Kunststoffen",
        "folder": "herstellung-von-kunststoffen-5166"
      },
      {
        "id": "595",
        "title": "Lerninhalt: Kunststoffe",
        "folder": "lerninhalt-kunststoffe-595"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kunststoffe+Technikunterricht&t=1251"
  },
  "fertigungsverfahren-und-werkzeuge": {
    "slug": "fertigungsverfahren-und-werkzeuge",
    "title": "Fertigungsverfahren & Werkzeuge",
    "category": "Werkstoffe & Fertigung",
    "shortDesc": "Messen, Anreißen, Sägen, Feilen, Bohren, Gewindeschneiden, Fügen und Prüfwerkzeuge.",
    "longDesc": "Wie entstehen Bauteile in Handwerk und Industrie? Lerne die Grundlagen der Fertigungstechnik nach DIN 8580 kennen: Vom maßgenauen Messen und Anreißen über spanende Verfahren bis hin zum Fügen durch Schrauben, Löten und Schweißen.",
    "keyPoints": [
      "Hauptgruppen nach DIN 8580: Urformen (Gießen), Umformen (Biegen, Walzen), Trennen (Sägen, Feilen, Fräsen), Fügen (Kleben, Löten, Schweißen) und Beschichten",
      "Mess- und Prüfmittel: Messschieber (Nonius), Bügelmessschraube (Mikrometer), Haarlineal und Winkelmesser",
      "Anreißen: Übertragen von Maßen auf Werkstücke mittels Reißnadel, Körner und Schlosserwinkel",
      "Spanen mit geometrisch bestimmter Schneide: Feilen (Hiebarten 1-3), Bohren, Drehen und Fräsen",
      "Arbeitsschutz im Werkraum: Schutzbrille bei spanenden Arbeiten, Haarnetz an Standbohrmaschinen, keine Handschuhe an rotierenden Spindeln"
    ],
    "exercises": [
      {
        "id": "560",
        "title": "Lerninhalt: Anreißwerkzeuge",
        "folder": "lerninhalt-anreieswerkzeuge-560"
      },
      {
        "id": "565",
        "title": "Lerninhalt: Messwerkzeuge",
        "folder": "lerninhalt-messwerkzeuge-565"
      },
      {
        "id": "566",
        "title": "Lerninhalt: Markierungswerkzeuge",
        "folder": "lerninhalt-markierungswerkzeuge-566"
      },
      {
        "id": "561",
        "title": "Lerninhalt: Feiltechnik",
        "folder": "lerninhalt-feiltechnik-561"
      },
      {
        "id": "2540",
        "title": "Wie funktioniert ein Metalldetektor",
        "folder": "wie-funktioniert-ein-metalldetektor-2540"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Fertigungstechnik+Werkzeuge&t=1251"
  },
  "kraefte-hebel-und-getriebe": {
    "slug": "kraefte-hebel-und-getriebe",
    "title": "Kräfte, Hebel & Getriebe",
    "category": "Mechanik & Antriebe",
    "shortDesc": "Hebelgesetz, Drehmoment, feste/lose Rollen, Flaschenzug, Zahnradgetriebe und Übersetzungsverhältnis.",
    "longDesc": "Einfache Maschinen erleichtern die Arbeit des Menschen: Sie verringern die aufzuwendende Kraft, indem sie den Weg verlängern ('Goldene Regel der Mechanik'). Entdecke die Gesetze von Hebeln, Flaschenzügen und Zahnradübersetzungen.",
    "keyPoints": [
      "Goldene Regel der Mechanik: Was man an Kraft spart, muss man an Weg zusetzen (Arbeit W = F · s bleibt konstant)",
      "Hebelgesetz: Kraft · Kraftarm = Last · Lastarm (F1 · l1 = F2 · l2) im Gleichgewichtszustand",
      "Einseitiger vs. zweiseitiger Hebel: Zweiseitig (Wippe, Zange), einseitig (Schubkarre, Flaschenöffner, Nussknacker)",
      "Flaschenzug: Kombination fester und loser Rollen; bei n tragenden Seilen verringert sich die Zugkraft auf F = F_L / n",
      "Zahnradgetriebe & Übersetzung: i = z2 / z1 = n1 / n2 (Übersetzung ins Langsame steigert das Drehmoment)"
    ],
    "exercises": [
      {
        "id": "5253",
        "title": "Das Hebelgesetz",
        "folder": "das-hebelgesetz-5253"
      },
      {
        "id": "585",
        "title": "Lerninhalt: Drehmoment und Hebel",
        "folder": "lerninhalt-drehmoment-und-hebel-585"
      },
      {
        "id": "5315",
        "title": "Rolle, Flaschenzug und Wellenrad",
        "folder": "rolle-flaschenzug-und-wellenrad-5315"
      },
      {
        "id": "2518",
        "title": "Wie funktioniert ein Getriebe",
        "folder": "wie-funktioniert-ein-getriebe-2518"
      },
      {
        "id": "2496",
        "title": "Wie funktioniert ein Automatikgetriebe",
        "folder": "wie-funktioniert-ein-automatikgetriebe-2496"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Hebel+Getriebe+Mechanik+Technik&t=1251"
  },
  "motoren-und-verbrennungskraftmaschinen": {
    "slug": "motoren-und-verbrennungskraftmaschinen",
    "title": "Motoren & Verbrennungskraftmaschinen",
    "category": "Mechanik & Antriebe",
    "shortDesc": "Dampfmaschine, Viertakt-Ottomotor, Dieselmotor, Kurbeltrieb und Funktionsweise thermischer Kraftmaschinen.",
    "longDesc": "Von der James-Watt-Dampfmaschine als Schrittmacher der industriellen Revolution bis zum modernen Verbrennungsmotor: Wie Wärmeenergie durch Ausdehnung von Gasen in mechanische Rotationsarbeit umgewandelt wird.",
    "keyPoints": [
      "Dampfmaschine: Erzeugung von Hochdruckdampf im Kessel, Steuerung über Schieber und Kolbenbewegung",
      "Die 4 Takte des Ottomotors: 1. Ansaugen (Kraftstoff-Luft-Gemisch) ➔ 2. Verdichten ➔ 3. Arbeiten (Zündung durch Zündkerze) ➔ 4. Ausstoßen der Abgase",
      "Dieselmotor: Reine Luft wird hoch verdichtet, erhitzt sich stark; Kraftstoff entzündet sich bei Einspritzung selbst (Selbstzünder)",
      "Kurbeltrieb: Kolben, Pleuel und Kurbelwelle wandeln die lineare Auf- und Abwärtsbewegung in eine kontinuierliche Drehbewegung um",
      "Wirkungsgrad: Thermischer Wirkungsgrad, mechanische Reibungsverluste und Kühlung"
    ],
    "exercises": [
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
        "id": "579",
        "title": "Lerninhalt: Verbrennungsmotoren",
        "folder": "lerninhalt-verbrennungsmotoren-579"
      },
      {
        "id": "2572",
        "title": "Wie funktioniert ein Verbrennungsmotor",
        "folder": "wie-funktioniert-ein-verbrennungsmotor-2572"
      },
      {
        "id": "2524",
        "title": "Wie funktioniert ein Heckmotor",
        "folder": "wie-funktioniert-ein-heckmotor-2524"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Verbrennungsmotor+Motoren+Technik&t=1251"
  },
  "pneumatik-und-hydraulik": {
    "slug": "pneumatik-und-hydraulik",
    "title": "Pneumatik & Hydraulik",
    "category": "Mechanik & Antriebe",
    "shortDesc": "Fluidtechnik: Druckluft, Hydrauliköl, Zylinder, Ventile, Druckübertragung und industrielle Kraftverstärkung.",
    "longDesc": "Pneumatik nutzt komprimierte Luft, Hydraulik unkomprimierbare Flüssigkeiten: Entdecke, wie Bagger gewaltige Lasten heben und Montagebänder pneumatisch getaktet gesteuert werden.",
    "keyPoints": [
      "Pneumatik: Druckluft als elastisches Arbeitsmedium (schnell, sauber, aber kompressibel)",
      "Hydraulik: Hydrauliköl als inkompressibles Medium – erzeugt extrem hohe Kräfte bei kompakten Zylindermaßen (Pascalsches Prinzip: p = F / A)",
      "Ventilarten: Wegeventile (z. B. 3/2- oder 5/2-Wegeventil), Sperrventile, Drosselventile und Druckbegrenzungsventile",
      "Aktoren: Einfach- und doppeltwirkende Zylinder sowie Rotationsmotoren",
      "Anwendungsfelder: Baumaschinen, Fahrzeugbremsen, Hebebühnen, automatisierte Fertigungsstraßen"
    ],
    "exercises": [
      {
        "id": "2552",
        "title": "Wie funktioniert ein Pneumatiksystem",
        "folder": "wie-funktioniert-ein-pneumatiksystem-2552"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Pneumatik+Hydraulik+Technik&t=1251"
  },
  "grundlagen-der-elektrotechnik": {
    "slug": "grundlagen-der-elektrotechnik",
    "title": "Grundlagen der Elektrotechnik",
    "category": "Elektrotechnik & Messtechnik",
    "shortDesc": "Stromkreis, Ohmsches Gesetz, Relais, Schalter, Leiter/Isolatoren, Schutzmaßnahmen und Glasfasertechnik.",
    "longDesc": "Elektrizität treibt unsere moderne Welt an. Hier verstehst du die grundlegenden elektrotechnischen Gesetzmäßigkeiten, das Zusammenspiel von Spannung, Stromstärke und Widerstand sowie optische Signalübertragung.",
    "keyPoints": [
      "Grundgrößen: Elektrische Spannung U (Volt), Stromstärke I (Ampere), Widerstand R (Ohm) und Leistung P = U · I (Watt)",
      "Ohmsches Gesetz: U = R · I – linearer Zusammenhang zwischen Spannung und Stromstärke an ohmschen Verbrauchern",
      "Elektromagnetisches Relais: Durch einen kleinen Steuerstrom schaltet ein Elektromagnet einen getrennten Laststromkreis",
      "Sicherheitsregeln: Leitungsschutzschalter (Sicherungen), Fehlerstrom-Schutzschalter (FI/RCD) und Schutzleiter (PE)",
      "Lichtwellenleiter & Glasfasertechnik: Datenübertragung mittels Lichtimpulsen durch Totalreflexion im Glaskern mit Lichtgeschwindigkeit"
    ],
    "exercises": [
      {
        "id": "1981",
        "title": "Die Elektrotechnik - VIDEO FEHLT!",
        "folder": "die-elektrotechnik-1981"
      },
      {
        "id": "3399",
        "title": "Die Elektrotechnik",
        "folder": "die-elektrotechnik-2-3399"
      },
      {
        "id": "2555",
        "title": "Wie funktioniert ein Relais",
        "folder": "wie-funktioniert-ein-relais-2555"
      },
      {
        "id": "5295",
        "title": "Glasfasertechnik",
        "folder": "glasfasertechnik-5295"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Elektrotechnik+Grundlagen+Technik&t=1251"
  },
  "elektrische-maschinen-und-generatoren": {
    "slug": "elektrische-maschinen-und-generatoren",
    "title": "Elektrische Maschinen & Generatoren",
    "category": "Elektrotechnik & Messtechnik",
    "shortDesc": "Elektromotoren, Generatoren, Gleichstrom, Drehstrom, Induktion, Asynchronmotor und Schrittmotoren.",
    "longDesc": "Wie wird aus elektrischem Strom mechanische Bewegung – und umgekehrt? Lerne das elektromagnetische Induktionsgesetz kennen, das Kraftwerke und E-Autos weltweit antreibt.",
    "keyPoints": [
      "Elektromagnetische Induktion: Bewegung eines elektrischen Leiters im Magnetfeld erzeugt eine Induktionsspannung (Generatorprinzip)",
      "Lorentzkraft auf stromdurchflossene Leiter: Magnetfeld übt Kraft auf Elektronen aus ➔ kontinuierliche Drehung (Motorprinzip)",
      "Gleichstrommotor: Stator (Dauermagnet/Elektromagnet), Rotor (Anker) und Kommutator (Polwender)",
      "Drehstrom-Asynchronmotor: Drehfeld im Stator induziert Ströme im Kurzschlussläufer (Käfigläufer); arbeitet robust und bürstenlos",
      "Schrittmotor: Präzise Drehung in definierten Winkelschritten – unentbehrlich für 3D-Drucker, Roboterarme und CNC-Fräsen"
    ],
    "exercises": [
      {
        "id": "5260",
        "title": "Der Elektromotor",
        "folder": "der-elektromotor-5260"
      },
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
        "id": "2495",
        "title": "Wie funktioniert ein Asynchronmotor",
        "folder": "wie-funktioniert-ein-asynchronmotor-2495"
      },
      {
        "id": "2556",
        "title": "Wie funktioniert ein Schrittmotor",
        "folder": "wie-funktioniert-ein-schrittmotor-2556"
      },
      {
        "id": "2514",
        "title": "Wie funktioniert ein Dynamo",
        "folder": "wie-funktioniert-ein-dynamo-2514"
      },
      {
        "id": "5294",
        "title": "Generatoren - stromerzeugende Maschinen",
        "folder": "generatoren-stromerzeugende-maschinen-5294"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Elektromotor+Generator+Technik&t=1251"
  },
  "sensorik-und-messgeraete": {
    "slug": "sensorik-und-messgeraete",
    "title": "Sensorik & Messgeräte",
    "category": "Elektrotechnik & Messtechnik",
    "shortDesc": "Infrarotsensoren, Beschleunigungssensoren, PIR-Bewegungsmelder, Temperaturfühler, Barometer und Seismographen.",
    "longDesc": "Sensoren sind die Sinnesorgane technischer Systeme. Sie wandeln physikalische Größen (Druck, Beschleunigung, Infrarotstrahlung, Temperatur) in elektrische Signale um, die Steuerungen verarbeiten können.",
    "keyPoints": [
      "PIR-Bewegungsmelder: Passiv-Infrarot-Sensor reagiert auf Temperaturänderungen bewegter Wärmequellen (z. B. Mensch oder Tier)",
      "MEMS-Beschleunigungssensoren: Mikroskopische Feder-Masse-Systeme auf Siliziumbasis messen g-Kräfte in Smartphones und Airbag-Systemen",
      "Temperaturmessung: Thermoelemente (Seebeck-Effekt), Widerstandsthermometer (Pt100) und NTC/PTC-Heiß-/Kaltleiter",
      "Drucksensoren & Barometer: Piezoresistive Membranen oder kapazitive Druckdosen zur Höhen- und Wetterbestimmung",
      "Seismographen: Träge Masse registriert Bodenbewegungen und Erdbebenwellen dreidimensional"
    ],
    "exercises": [
      {
        "id": "2501",
        "title": "Wie funktioniert ein Bewegungsmelder",
        "folder": "wie-funktioniert-ein-bewegungsmelder-2501"
      },
      {
        "id": "2529",
        "title": "Wie funktioniert ein Infrarotsensor",
        "folder": "wie-funktioniert-ein-infrarotsensor-2529"
      },
      {
        "id": "2499",
        "title": "Wie funktioniert ein Beschleunigungssensor",
        "folder": "wie-funktioniert-ein-beschleunigungssensor-2499"
      },
      {
        "id": "2566",
        "title": "Wie funktioniert ein Temperatursensor",
        "folder": "wie-funktioniert-ein-temperatursensor-2566"
      },
      {
        "id": "2497",
        "title": "Wie funktioniert ein Barometer",
        "folder": "wie-funktioniert-ein-barometer-2497"
      },
      {
        "id": "2559",
        "title": "Wie funktioniert ein Seismograph",
        "folder": "wie-funktioniert-ein-seismograph-2559"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Sensoren+Messtechnik+Technik&t=1251"
  },
  "kfz-technik-und-antrieb": {
    "slug": "kfz-technik-und-antrieb",
    "title": "Kfz-Technik & Antriebsstrang",
    "category": "Fahrzeug- & Verkehrstechnik",
    "shortDesc": "Automobilbau, Allradantrieb, Front-/Heckantrieb, Fahrwerk, Kupplung und Elektromobilität.",
    "longDesc": "Wie kommt die Kraft vom Motor auf die Straße? Entdecke die mechanischen und elektronischen Baugruppen moderner Personenkraftwagen: Vom Schalt- und Automatikgetriebe über Differenziale bis zum modernen Elektroantrieb.",
    "keyPoints": [
      "Antriebskonzepte: Frontantrieb (kompakt), Heckantrieb (ausgewogene Gewichtsverteilung) und Allradantrieb (optimale Traktion bei Nässe und Schnee)",
      "Differenzialgetriebe (Ausgleichsgetriebe): Ermöglicht unterschiedliche Drehzahlen der Räder in Kurvenfahrten",
      "Kupplung & Getriebe: Trennung des Kraftflusses beim Schalten; Wandlung von Drehmoment und Drehzahl",
      "Fahrwerk & Federung: McPherson-Federbeine, Mehrlenkerachsen, Stoßdämpfer und Stabilisatoren für Spurtreue",
      "Wandel zur Elektromobilität: Batteriepaket im Unterboden, Leistungselektronik, Rekuperation beim Bremsen"
    ],
    "exercises": [
      {
        "id": "3400",
        "title": "Die KFZtechnik",
        "folder": "die-kfztechnik-3400"
      },
      {
        "id": "5392",
        "title": "Geschichte des Autos",
        "folder": "geschichte-des-autos-5392"
      },
      {
        "id": "2492",
        "title": "Wie funktioniert ein Allradantrieb",
        "folder": "wie-funktioniert-ein-allradantrieb-2492"
      },
      {
        "id": "2523",
        "title": "Wie funktioniert ein Heckantrieb",
        "folder": "wie-funktioniert-ein-heckantrieb-2523"
      },
      {
        "id": "4657",
        "title": "Tesla - Revolution in der Autoindustrie",
        "folder": "tesla-revolution-in-der-autoindustrie-4657"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Kfz+Technik+Fahrzeugtechnik&t=1251"
  },
  "sicherheitssysteme-und-abgasreinigung": {
    "slug": "sicherheitssysteme-und-abgasreinigung",
    "title": "Sicherheitssysteme & Abgasreinigung",
    "category": "Fahrzeug- & Verkehrstechnik",
    "shortDesc": "Antiblockiersystem (ABS), ESP, Katalysatoren, Rußpartikelfilter und aktive/passive Fahrzeugsicherheit.",
    "longDesc": "Moderne Fahrzeuge müssen höchste Sicherheits- und Umweltstandards erfüllen. Lerne die Regelkreise von ABS und ESP sowie die chemische Abgasnachbehandlung durch Drei-Wege-Katalysator und SCR-Technologie kennen.",
    "keyPoints": [
      "Antiblockiersystem (ABS): Radsensoren messen Schlupf; modulierter Bremsdruck verhindert Blockieren der Räder – Fahrzeug bleibt voll lenkbar",
      "Elektronisches Stabilitätsprogramm (ESP): Bremst gezielt einzelne Räder ab, um Schleudern bei Unter- oder Übersteuern zu verhindern",
      "Drei-Wege-Katalysator: Wandelt Kohlenmonoxid (CO), unverbrannte Kohlenwasserstoffe (HC) und Stickoxide (NOx) in CO2, H2O und N2 um",
      "Diesel-Partikelfilter (DPF): Filtert Rußpartikel mechanisch aus dem Abgasstrom und brennt sie periodisch bei hohen Temperaturen frei (Regeneration)",
      "Passive Sicherheit: Knautschzone zur Energieabsorption, starre Fahrgastzelle, Gurtstraffer und Airbags"
    ],
    "exercises": [
      {
        "id": "2488",
        "title": "Wie funktioniert ein ABS-System",
        "folder": "wie-funktioniert-ein-abs-system-2488"
      },
      {
        "id": "2532",
        "title": "Wie funktioniert ein Katalysator",
        "folder": "wie-funktioniert-ein-katalysator-2532"
      },
      {
        "id": "2548",
        "title": "Wie funktioniert ein Partikelfilter",
        "folder": "wie-funktioniert-ein-partikelfilter-2548"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Fahrzeugsicherheit+ABS+Abgas&t=1251"
  },
  "luft-und-schifffahrtstechnik": {
    "slug": "luft-und-schifffahrtstechnik",
    "title": "Luft-, Schiffs- & Spezialfahrzeuge",
    "category": "Fahrzeug- & Verkehrstechnik",
    "shortDesc": "Hubschrauber (Taumelscheibe), Jetantrieb, Heißluftballon, Hovercraft, U-Boot und Segway.",
    "longDesc": "Technik erobert die Lüfte und die Weltmeere: Entdecke die Aerodynamik von Rotorblättern und Strahltriebwerken, den statischen Auftrieb von Heißluftballons sowie das Tauchprinzip von Unterseebooten.",
    "keyPoints": [
      "Hubschrauber: Hauptrotor erzeugt Auftrieb und Vortrieb; Heckrotor gleicht das Gegen-Drehmoment des Rumpfes aus; Taumelscheibe steuert Blattneigung",
      "Jetantrieb (Strahltriebwerk): Einlass ➔ Verdichter ➔ Brennkammer ➔ Turbine ➔ Schubdüse erzeugt Vorwärtsschub nach dem Rückstoßprinzip (Actio = Reactio)",
      "Heißluftballon: Statischer Auftrieb (Archimedisches Prinzip) durch Erwärmung der Luft im Balloninneren (geringere Dichte als Umgebungsluft)",
      "U-Boot: Tauch- und Regelzellen; Fluten mit Seewasser erhöht Gesamtgewicht zum Abtauchen, Ausblasen mit Pressluft erzeugt Auftrieb zum Auftauchen",
      "Segway & Gyroskoptechnik: Kreiselsensoren messen Neigungswinkel; Elektromotoren balancieren das Fahrzeug dynamisch aus"
    ],
    "exercises": [
      {
        "id": "2528",
        "title": "Wie funktioniert ein Hubschrauber",
        "folder": "wie-funktioniert-ein-hubschrauber-2528"
      },
      {
        "id": "2525",
        "title": "Wie funktioniert ein Heißluftballon",
        "folder": "wie-funktioniert-ein-heiesluftballon-2525"
      },
      {
        "id": "2530",
        "title": "Wie funktioniert ein Jetantrieb",
        "folder": "wie-funktioniert-ein-jetantrieb-2530"
      },
      {
        "id": "2526",
        "title": "Wie funktioniert ein Hovercraft",
        "folder": "wie-funktioniert-ein-hovercraft-2526"
      },
      {
        "id": "2570",
        "title": "Wie funktioniert ein U-Boot",
        "folder": "wie-funktioniert-ein-u-boot-2570"
      },
      {
        "id": "2558",
        "title": "Wie funktioniert ein Segway",
        "folder": "wie-funktioniert-ein-segway-2558"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Luftfahrt+Schifffahrt+Technik&t=1251"
  },
  "erneuerbare-energien-und-kraftwerke": {
    "slug": "erneuerbare-energien-und-kraftwerke",
    "title": "Erneuerbare Energien & Kraftwerke",
    "category": "Energie- & Umwelttechnik",
    "shortDesc": "Windenergie, Wellenkraft, Photovoltaik, Biomasse, Kraftwerkstypen und Stromnetz.",
    "longDesc": "Die Transformation unserer Energieversorgung ist eine der größten ingenieurwissenschaftlichen Aufgaben der Menschheit. Erfahre, wie Windräder, Meeresströmungen und Solaranlagen saubere Energie für Millionen Menschen erzeugen.",
    "keyPoints": [
      "Windkraftanlagen: Auftriebsprinzip an aerodynamischen Rotorblättern, Getriebe/Direktantrieb, Generator, Netzeinspeisung",
      "Wellen- und Gezeitenkraftwerke: Nutzung der kinetischen und potenziellen Energie der Meereswellen und Tidenhubs",
      "Photovoltaik: Photoelektrischer Effekt im dotierten Silizium-Halbleiter wandelt Sonnenlicht direkt in Gleichstrom um (Wechselrichter für Netzstrom)",
      "Wärmekraftwerke: Verbrennung von Kohle, Gas oder Biomasse erhitzt Dampf, der Hochdruckturbinen antreibt (Kraft-Wärme-Kopplung)",
      "Netzstabilität: Frequenzhaltung bei exakt 50 Hertz in Europa erfordert sekundenschnelle Regelenergie"
    ],
    "exercises": [
      {
        "id": "2251",
        "title": "Windkraftwerke",
        "folder": "windkraftwerke-2251"
      },
      {
        "id": "5327",
        "title": "Windkraftwerke",
        "folder": "windkraftwerke-2-5327"
      },
      {
        "id": "2580",
        "title": "Wie funktioniert ein Wellenkraftwerk",
        "folder": "wie-funktioniert-ein-wellenkraftwerk-2580"
      },
      {
        "id": "2502",
        "title": "Wie funktioniert ein Biodieselgenerator",
        "folder": "wie-funktioniert-ein-biodieselgenerator-2502"
      },
      {
        "id": "2533",
        "title": "Wie funktioniert ein Kernreaktor",
        "folder": "wie-funktioniert-ein-kernreaktor-2533"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erneuerbare+Energien+Windkraft+Technik&t=1251"
  },
  "energiespeicher-und-akkumulatoren": {
    "slug": "energiespeicher-und-akkumulatoren",
    "title": "Energiespeicher & Akkumulatoren",
    "category": "Energie- & Umwelttechnik",
    "shortDesc": "Lithium-Ionen-Akkus, Nickel-Cadmium, Blei-Säure, Umwandlung und Fernübertragung elektrischer Energie.",
    "longDesc": "Erneuerbare Energien fließen unregelmäßig – ohne leistungsfähige Speichertechnologien keine Energiewende. Verstehe die chemischen Reaktionen in Batterien und Akkus sowie die verlustarme Stromübertragung über Hochspannungsleitungen.",
    "keyPoints": [
      "Primär- vs. Sekundärzellen: Batterien sind nach Entladung unbrauchbar (nicht reversibel); Akkumulatoren lassen sich chemisch wieder aufladen",
      "Lithium-Ionen-Akku: Hohe Energiedichte, kein Memory-Effekt; Lithium-Ionen wandern beim Laden und Entladen zwischen Graphit-Anode und Metalloxid-Kathode",
      "Spannungsübertragung: Hochspannungs-Gleichstrom-Übertragung (HGÜ) und 380-kV-Wechselstromleitungen minimieren Leitungsverluste über lange Strecken",
      "Pumpspeicherkraftwerke: Mechanische Speicherung von überschüssigem Strom durch Hochpumpen von Wasser in Bergstauseen (Wirkungsgrad ca. 75–80 %)",
      "Zukunftstechnologien: Feststoffbatterien, Natrium-Ionen-Akkus und grüner Wasserstoff als chemischer Langzeitspeicher"
    ],
    "exercises": [
      {
        "id": "5246",
        "title": "Batterien und Akkumulatoren",
        "folder": "batterien-und-akkumulatoren-5246"
      },
      {
        "id": "2490",
        "title": "Wie funktioniert ein Akku",
        "folder": "wie-funktioniert-ein-akku-2490"
      },
      {
        "id": "2543",
        "title": "Wie funktioniert ein Nickel-Cadmium-Akku",
        "folder": "wie-funktioniert-ein-nickel-cadmium-akku-2543"
      },
      {
        "id": "5321",
        "title": "Übertragung elektrischer Energie",
        "folder": "bertragung-elektrischer-energie-5321"
      },
      {
        "id": "5323",
        "title": "Umwandlung elektrischer Energie",
        "folder": "umwandlung-elektrischer-energie-5323"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Akkus+Batterien+Energiespeicher&t=1251"
  },
  "umwelttechnik-und-recycling": {
    "slug": "umwelttechnik-und-recycling",
    "title": "Umwelt- & Verfahrenstechnik",
    "category": "Energie- & Umwelttechnik",
    "shortDesc": "Kläranlagen (mechanische/biologische/chemische Reinigung), Wärmetauscher und Wasserspeicherung.",
    "longDesc": "Umwelttechnik schützt Luft, Wasser und Boden durch geschickte ingenieurmäßige Verfahren. Entdecke, wie Kläranlagen Abwässer reinigen und Wärmetauscher wertvolle Energie zurückgewinnen.",
    "keyPoints": [
      "Die 4 Reinigungsstufen im Klärwerk: 1. Mechanisch (Rechen, Sandfang, Vorklärbecken) ➔ 2. Biologisch (Belebungsbecken mit Bakterien) ➔ 3. Chemisch (Phosphatfällung) ➔ 4. Spurenstoffelimination (Aktivkohle/Ozon)",
      "Wärmetauscher: Gegenstrom- oder Gleichstromprinzip – Wärmeübertragung zwischen zwei getrennten Medien ohne Vermischung",
      "Wasserspeicher & Talsperren: Hochwasserschutz, Trinkwasserversorgung und Niedrigwasseraufhöhung",
      "Kreislaufwirtschaft: Reduktion von Emissionen, thermische Verwertung und Wertstofftrennung"
    ],
    "exercises": [
      {
        "id": "2534",
        "title": "Wie funktioniert ein Klärwerk",
        "folder": "wie-funktioniert-ein-klarwerk-2534"
      },
      {
        "id": "2577",
        "title": "Wie funktioniert ein Wärmetauscher",
        "folder": "wie-funktioniert-ein-warmetauscher-2577"
      },
      {
        "id": "2578",
        "title": "Wie funktioniert ein Wasserspeicher",
        "folder": "wie-funktioniert-ein-wasserspeicher-2578"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Klaerwerk+Umwelttechnik&t=1251"
  },
  "haushaltsgeraete-und-klimatechnik": {
    "slug": "haushaltsgeraete-und-klimatechnik",
    "title": "Haushaltsgeräte & Klimatechnik",
    "category": "Alltagstechnik & Geräte",
    "shortDesc": "Waschmaschinen, Kühlschränke (Kältekreislauf), Kaffeemaschinen, Mikrowellen und Klimaanlagen.",
    "longDesc": "Täglich nutzen wir hochentwickelte Maschinen im Haushalt. Verstehe die physikalischen Prinzipien dahinter: Den thermodynamischen Kältekreislauf, elektromagnetische Mikrowellenstrahlung und Trommelmechanik.",
    "keyPoints": [
      "Kältekreislauf im Kühlschrank: Kompressor verdichtet Kältemittel ➔ Verflüssiger gibt Wärme nach außen ab ➔ Drosselventil entspannt Flüssigkeit ➔ Verdampfer im Innenraum entzieht Wärme",
      "Waschmaschine: Einspülung, Trommelantrieb über Keilriemen/Direktantrieb, Laugenpumpe, Heizstab, Fliehkraft beim Schleudern",
      "Mikrowellenherd: Magnetron erzeugt 2,45 GHz Mikrowellen, die Dipol-Wassermoleküle in der Nahrung in Schwingung versetzen und durch Reibung erwärmen",
      "Klimaanlage & Wärmepumpe: Umkehrbarer thermodynamischer Kreisprozess zum Kühlen im Sommer oder Heizen im Winter",
      "Dampfbügeleisen: Verdampfungskammer, Heizelement mit Bimetall-Thermostat und Sohle mit Dampfaustrittsdüsen"
    ],
    "exercises": [
      {
        "id": "2582",
        "title": "Wie funktioniert eine Waschmaschine",
        "folder": "wie-funktioniert-eine-waschmaschine-2582"
      },
      {
        "id": "2536",
        "title": "Wie funktioniert ein Kühlschrank",
        "folder": "wie-funktioniert-ein-kuhlschrank-2536"
      },
      {
        "id": "2531",
        "title": "Wie funktioniert ein Kaffeemaschine",
        "folder": "wie-funktioniert-ein-kaffeemaschine-2531"
      },
      {
        "id": "2542",
        "title": "Wie funktioniert ein Mikrowellenherd",
        "folder": "wie-funktioniert-ein-mikrowellenherd-2542"
      },
      {
        "id": "2535",
        "title": "Wie funktioniert ein Klimaanlage",
        "folder": "wie-funktioniert-ein-klimaanlage-2535"
      },
      {
        "id": "2507",
        "title": "Wie funktioniert ein Dampfbügeleisen",
        "folder": "wie-funktioniert-ein-dampfbugeleisen-2507"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Haushaltsgeraete+Alltagstechnik&t=1251"
  },
  "werkzeuge-und-alltagstechnik": {
    "slug": "werkzeuge-und-alltagstechnik",
    "title": "Werkzeuge & Optoelektronik",
    "category": "Alltagstechnik & Geräte",
    "shortDesc": "Akkuschrauber (Planetengetriebe & Rutschkupplung), Blitzableiter, Diodenlaser und Kameras.",
    "longDesc": "Vom unverzichtbaren Akkuschrauber über den Schutz von Gebäuden vor Blitzschlägen bis zu hochpräzisen Diodenlasern und Kameraoptiken: Technik steckt in jedem Werkzeugkoffer und Alltagsgegenstand.",
    "keyPoints": [
      "Akkuschrauber: Bürstenloser Motor, mehrstufiges Planetengetriebe, Drehmomenteinstellung (Rutschkupplung) und Schnellspann-Bohrfutter",
      "Blitzableiter (Faradayscher Käfig): Fangstangen, Ableitungen und Tiefenerder leiten Blitzströme von bis zu 100.000 Ampere sicher ins Erdreich",
      "Diodenlaser: Halbleiterlaser erzeugen monochromatisches, kohärentes Lichtbündel (Barcode-Scanner, Lasernivelliergeräte, Entfernungsmesser)",
      "Optische Kamera: Linsensystem (Objektiv), Blende zur Regulierung der Schärfentiefe, Verschluss und digitaler CMOS-Bildsensor"
    ],
    "exercises": [
      {
        "id": "2491",
        "title": "Wie funktioniert ein Akkuschrauber",
        "folder": "wie-funktioniert-ein-akkuschrauber-2491"
      },
      {
        "id": "2504",
        "title": "Wie funktioniert ein Blitzableiter",
        "folder": "wie-funktioniert-ein-blitzableiter-2504"
      },
      {
        "id": "2510",
        "title": "Wie funktioniert ein Diodenlaser",
        "folder": "wie-funktioniert-ein-diodenlaser-2510"
      },
      {
        "id": "2581",
        "title": "Wie funktioniert eine Kamera",
        "folder": "wie-funktioniert-eine-kamera-2581"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Werkzeuge+Technikunterricht&t=1251"
  }
};
