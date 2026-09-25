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
  "Verkehrsregeln, Schilder & Vorfahrt",
  "Gefahren, Unfallverhütung & Toter Winkel",
  "Schienenverkehr, Bahn & Magnetschwebebahn",
  "Automobil, E-Mobilität & Zukunft der Logistik"
];

export const verkehrTopics: Record<string, VerkehrTopic> = {
  "verkehrssicheres-fahrrad": {
    "slug": "verkehrssicheres-fahrrad",
    "title": "Das verkehrssichere Fahrrad & Ausrüstung",
    "category": "Fahrradausstattung & Sicherheit",
    "shortDesc": "Gesetzlich vorgeschriebene Teile nach StVZO, Bremsen, Beleuchtung, Kettenschaltung und Fahrradhelm.",
    "longDesc": "Ein Fahrrad darf erst dann im Straßenverkehr gefahren werden, wenn alle gesetzlich vorgeschriebenen Sicherheitseinrichtungen funktionstüchtig sind. Neben zwei voneinander unabhängigen Bremsen sind Klingel, Frontscheinwerfer, Rücklicht und eine vollständige Reflektorenausstattung Pflicht.",
    "keyPoints": [
      "Zwei unabhängige Bremsen: Vorder- und Hinterradbremse (Handbremse und/oder Rücktrittbremse)",
      "Vollständige Beleuchtung: Weißer Frontscheinwerfer mit weißem Frontreflektor; rote Schlussleuchte mit rotem Z-Großflächenreflektor",
      "Speichen- und Pedalreflektoren: Je 2 gelbe Reflektoren pro Rad (oder durchgehende reflektierende Reifenstreifen) sowie je 2 gelbe Pedalreflektoren",
      "Hell tönende Klingel: Für akustische Warnsignale vorgeschrieben",
      "Fahrradhelm & Technik: Schützt lebenswichtig vor schweren Kopfverletzungen; Kettenschaltung und Reifendruck regelmäßig prüfen"
    ],
    "exercises": [
      {
        "id": "875",
        "title": "Sicher Radfahren – Mein Fahrrad",
        "folder": "sicher-radfahren-mein-fahrrad-875"
      },
      {
        "id": "wie-funktioniert-ein-fahrrad-kettenschaltung",
        "title": "Fahrradtechnik & Kettenschaltung",
        "folder": "wie-funktioniert-ein-fahrrad-kettenschaltung"
      },
      {
        "id": "fahrradfreundliche-stadte-geographische-bedingungen-fur-erfolgreiche-konzepte-5490",
        "title": "Fahrradfreundliche Städte & Radinfrastruktur",
        "folder": "fahrradfreundliche-stadte-geographische-bedingungen-fur-erfolgreiche-konzepte-5490"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=fahrradpruefung+ausstattung&t=3752"
  },

  "verkehrsflaechen-und-radwege": {
    "slug": "verkehrsflaechen-und-radwege",
    "title": "Verkehrsflächen, Radwege & Gehwege",
    "category": "Fahrradausstattung & Sicherheit",
    "shortDesc": "Benutzungspflichtige Radwege, Schutzstreifen, Gehwege, Schrittgeschwindigkeit in Fußgängerzonen und Stadtplanung.",
    "longDesc": "Auf welchen Verkehrsflächen dürfen und müssen Radfahrer fahren? Die StVO unterscheidet klar zwischen benutzungspflichtigen Radwegen, reinen Gehwegen, Fahrradstraßen und Mischverkehrszonen.",
    "keyPoints": [
      "Benutzungspflichtige Radwege: Gekennzeichnet durch das blaue runde Radwegschild – hier muss der Radweg zwingend benutzt werden",
      "Reine Gehwege: Dürfen von Radfahrern ab 10 Jahren nicht befahren werden (Kinder bis 8 Jahre müssen, bis 10 Jahre dürfen auf dem Gehweg fahren)",
      "Schutzstreifen & Radfahrstreifen: Durch gestrichelte bzw. durchgezogene Linie auf der Fahrbahn markiert",
      "Rechtsfahrgebot: Auch auf dem Radweg und der Fahrbahn gilt immer das Rechtsfahrgebot",
      "Stadtplanung: Moderne Städte trennen Rad-, Fuß- und Autoverkehr für maximale Sicherheit aller Verkehrsteilnehmer"
    ],
    "exercises": [
      {
        "id": "876",
        "title": "Sicher Radfahren – Verkehrsflächen",
        "folder": "sicher-radfahren-verkehrsflachen-876"
      },
      {
        "id": "wie-stadtplanung-den-verkehr-beeinflusst-5533",
        "title": "Wie Stadtplanung den Verkehr beeinflusst",
        "folder": "wie-stadtplanung-den-verkehr-beeinflusst-5533"
      },
      {
        "id": "verkehrsgeographie-in-urbanen-raumen-herausforderungen-und-losungen-5564",
        "title": "Verkehrsgeographie in urbanen Räumen",
        "folder": "verkehrsgeographie-in-urbanen-raumen-herausforderungen-und-losungen-5564"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=verkehrsflaechen+radweg&t=3752"
  },

  "verkehrszeichen-und-schilder": {
    "slug": "verkehrszeichen-und-schilder",
    "title": "Wichtige Verkehrszeichen & Beschilderung",
    "category": "Verkehrsregeln, Schilder & Vorfahrt",
    "shortDesc": "Gefahrzeichen (Dreiecke), Vorschriftzeichen (Rund), Richtzeichen (Eckig), Zusatzschilder und Schnellstraßen.",
    "longDesc": "Verkehrsschilder regeln das sichere Miteinander auf den Straßen. Farben und Formen signalisieren ihre Funktion: Rot bedeutet Gefahr oder Verbot, Blau signalisiert Gebote oder vorgeschriebene Sonderwege für Radfahrer.",
    "keyPoints": [
      "Gefahrzeichen (Dreieckig mit rotem Rand): Mahnen zu erhöhter Aufmerksamkeit und Bremsbereitschaft (z. B. Baustelle, Fußgängerüberweg)",
      "Gebotszeichen (Rund, blau): Radwegbenutzungspflicht (Zeichen 237), gemeinsamer oder getrennter Geh- und Radweg",
      "Verbotszeichen (Rund mit rotem Rand): Verbot für Radfahrer (Zeichen 254), Verbot der Einfahrt (Einbahnstraße) – außer Zusatzschild 'Radfahrer frei'",
      "Vorfahrtregelnde Schilder: Vorfahrtstraße (gelbes Quadrat), Vorfahrt gewähren (weißes Dreieck auf der Spitze), Halt! Vorfahrt gewähren (Stoppschild)",
      "Fernstraßen: Autobahnen und Kraftfahrstraßen sind für Fahrräder streng verboten"
    ],
    "exercises": [
      {
        "id": "901",
        "title": "Verkehrsschilder für Radfahrer",
        "folder": "verkehrsschilder-fur-radfahrer-901"
      },
      {
        "id": "die-rolle-von-autobahnen-und-schnellstraesen-in-der-raumplanung-5467",
        "title": "Autobahnen, Schnellstraßen & Beschilderung",
        "folder": "die-rolle-von-autobahnen-und-schnellstraesen-in-der-raumplanung-5467"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=verkehrszeichen+fahrrad&t=3752"
  },

  "vorfahrtsregeln-und-vorrang": {
    "slug": "vorfahrtsregeln-und-vorrang",
    "title": "Vorfahrtsregeln & Vorrang",
    "category": "Verkehrsregeln, Schilder & Vorfahrt",
    "shortDesc": "Rechts vor Links, Vorfahrt an Schildern, Ampeln, Vorrang beim Abbiegen und Verkehrsachsen.",
    "longDesc": "Wer darf zuerst fahren? Die Vorfahrtsregelung verhindert Kollisionen an Kreuzungen und Einmündungen. Wenn weder Ampeln noch Schilder die Vorfahrt regeln, gilt uneingeschränkt die Grundregel 'Rechts vor Links'.",
    "keyPoints": [
      "Grundregel 'Rechts vor Links': Gilt an allen Kreuzungen und Einmündungen ohne Schilder oder Ampeln – Vorfahrt hat das von rechts kommende Fahrzeug",
      "Vorfahrtstraße (Zeichen 306): Wer sich auf der Vorfahrtstraße befindet, hat Vorfahrt bis zum Aufhebungszeichen",
      "Stoppschild (Zeichen 206): Unbedingte Haltepflicht an der Haltelinie (mindestens 3 Sekunden Stillstand mit Bodenkontakt)",
      "Vorrang beim Abbiegen: Wer links abbiegen möchte, muss Gegenverkehr und kreuzende Fußgänger durchlassen"
    ],
    "exercises": [
      {
        "id": "878",
        "title": "Sicher Radfahren – Vorrangregeln",
        "folder": "sicher-rad-fahren-vorrangregeln-878"
      },
      {
        "id": "die-bedeutung-von-verkehrsachsen-fur-wirtschaft-und-siedlungsentwicklung-5453",
        "title": "Verkehrsachsen, Hauptstraßen & Vorrang",
        "folder": "die-bedeutung-von-verkehrsachsen-fur-wirtschaft-und-siedlungsentwicklung-5453"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=vorfahrt+fahrradpruefung&t=3752"
  },

  "spezielle-kreuzungen-und-kreisverkehr": {
    "slug": "spezielle-kreuzungen-und-kreisverkehr",
    "title": "Spezielle Kreuzungen, Kreisverkehr & Linksabbiegen",
    "category": "Verkehrsregeln, Schilder & Vorfahrt",
    "shortDesc": "Kreisverkehr, abknickende Vorfahrt, Linksabbiegen in 8 Schritten und topografische Kreuzungsbauwerke.",
    "longDesc": "Kreisverkehre, abknickende Vorfahrtsstraßen und das Linksabbiegen erfordern besondere Aufmerksamkeit. Das richtige Einordnen und klare Handzeichen sind entscheidend für die Sicherheit aller Verkehrsteilnehmer.",
    "keyPoints": [
      "Kreisverkehr: Fahrzeuge im Kreisverkehr haben Vorfahrt; kein Handzeichen beim Einfahren, aber zwingend Handzeichen beim Verlassen des Kreisverkehrs",
      "Abknickende Vorfahrt: Wer dem Verlauf der Vorfahrtstraße folgt, muss Handzeichen geben; wer sie verlässt, muss Vorrang gewähren",
      "Linksabbiegen in 8 Schritten: Umschauen ➔ Handzeichen links ➔ Zur Fahrbahnmitte einordnen ➔ Vorfahrt von rechts prüfen ➔ Fußgänger beachten ➔ Gegenverkehr durchlassen ➔ Im weiten Bogen abbiegen ➔ Rechts einordnen",
      "Indirektes Linksabbiegen: Auf stark befahrenen Kreuzungen geradeaus überqueren, anhalten und im rechten Winkel mit dem Querverkehr weiterfahren"
    ],
    "exercises": [
      {
        "id": "877",
        "title": "Sicher Radfahren – Spezielle Kreuzungen",
        "folder": "sicher-rad-fahren-spezielle-kreuzungen-877"
      },
      {
        "id": "der-einfluss-topografischer-gegebenheiten-auf-verkehrswege-5442",
        "title": "Topografie & Kreuzungsbauwerke",
        "folder": "der-einfluss-topografischer-gegebenheiten-auf-verkehrswege-5442"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kreisverkehr+linksabbiegen+fahrrad&t=3752"
  },

  "gefaehrliche-situationen-und-toter-winkel": {
    "slug": "gefaehrliche-situationen-und-toter-winkel",
    "title": "Gefahrensituationen, Toter Winkel & Unfallverhütung",
    "category": "Gefahren, Unfallverhütung & Toter Winkel",
    "shortDesc": "Toter Winkel bei Lkw/Bussen, Dooring-Gefahr, Bremswegberechnung, Alkohol- und Drogenrisiken im Straßenverkehr.",
    "longDesc": "Viele Unfälle entstehen durch Fehleinschätzungen und unübersichtliche Situationen. Der 'Tote Winkel' großer Fahrzeuge ist lebensgefährlich. Vorausschauendes Fahren, ständige Bremsbereitschaft und Nüchternheit schützen Leben.",
    "keyPoints": [
      "Toter Winkel: Bereiche neben und hinter Lkw/Bussen, die der Fahrer trotz aller Spiegel nicht einsehen kann – niemals rechts neben abbiegende Lkw stellen!",
      "Dooring-Gefahr: Mindestens 1 Meter Sicherheitsabstand zu parkenden Autos halten, um nicht von plötzlich geöffneten Autotüren erfasst zu werden",
      "Anhalteweg: Reaktionsweg (Geschwindigkeit/10 * 3) + Bremsweg ((Geschwindigkeit/10)^2); verlängert sich bei Nässe und Unachtsamkeit drastisch",
      "Alkohol & Drogen: Verzögern Reaktionszeiten, schränken das Sichtfeld ein (Tunnelblick) und führen zu schweren strafrechtlichen Konsequenzen"
    ],
    "exercises": [
      {
        "id": "879",
        "title": "Sicher Radfahren – Gefährliche Situationen",
        "folder": "sicher-rad-fahren-gefahrliche-situationen-879"
      },
      {
        "id": "598",
        "title": "Unfallverhütung im Straßenverkehr",
        "folder": "lerninhalt-unfallverhutung-598"
      },
      {
        "id": "2233",
        "title": "Drogen & Alkohol im Straßenverkehr",
        "folder": "drogen-im-straesenverkehr-alkohol-und-drogen-am-steuer-2233"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=toter+winkel+fahrrad&t=3752"
  },

  "schienenverkehr-und-bahnnetze": {
    "slug": "schienenverkehr-und-bahnnetze",
    "title": "Schienenverkehr, Bahn & Magnetschwebebahn",
    "category": "Schienenverkehr, Bahn & Magnetschwebebahn",
    "shortDesc": "Geschichte der Eisenbahn, Deutsche Bahn, internationale Bahnnetze, Schweizer SBB und innovative Magnetschwebebahnen.",
    "longDesc": "Die Eisenbahn revolutionierte im 19. Jahrhundert die menschliche Mobilität und ist bis heute das Rückgrat eines klimafreundlichen Personen- und Güterverkehrs. Vom Dampfzeitalter über Hochgeschwindigkeitszüge (ICE, TGV, Shinkansen) bis zur Schwebebahn.",
    "keyPoints": [
      "Pioniere der Schiene: Stephenson's Rocket 1829, erste deutsche Eisenbahn Nürnberg–Fürth 1835 ('Adler')",
      "Schienennetze weltweit: Vergleich von Dichte, Elektrifizierungsgrad und Hochgeschwindigkeitskorridoren in Europa, Asien und den USA",
      "Technologie der Magnetschwebebahn (Maglev): Berührungsloses Schweben und Antreiben durch elektromagnetische Wechselfelder",
      "Wuppertaler Schwebebahn: Legendäres Einschienen-Hängebahnsystem als historisches Meisterwerk des städtischen Nahverkehrs",
      "Schweizer Bundesbahnen (SBB): Weltweit gerühmtes Vorbild für Pünktlichkeit, Taktfahrplan und Alpenquerung (Gotthard-Basistunnel)"
    ],
    "exercises": [
      {
        "id": "die-deutsche-bahn-einfach-erklaert",
        "title": "Die Deutsche Bahn einfach erklärt",
        "folder": "die-deutsche-bahn-einfach-erklaert"
      },
      {
        "id": "die-geschichte-der-eisenbahn-5356",
        "title": "Die Geschichte der Eisenbahn",
        "folder": "die-geschichte-der-eisenbahn-5356"
      },
      {
        "id": "die-geschichte-der-eisenbahn-in-deutschland",
        "title": "Eisenbahngeschichte in Deutschland",
        "folder": "die-geschichte-der-eisenbahn-in-deutschland"
      },
      {
        "id": "eisenbahnnetzwerke-im-vergleich-europa-asien-und-amerika-5484",
        "title": "Eisenbahnnetzwerke weltweit im Vergleich",
        "folder": "eisenbahnnetzwerke-im-vergleich-europa-asien-und-amerika-5484"
      },
      {
        "id": "die-wuppertaler-schwebebahn",
        "title": "Die Wuppertaler Schwebebahn",
        "folder": "die-wuppertaler-schwebebahn"
      },
      {
        "id": "wie-funktioniert-die-magnetschwebebahn",
        "title": "Wie funktioniert die Magnetschwebebahn?",
        "folder": "wie-funktioniert-die-magnetschwebebahn"
      },
      {
        "id": "die-schweizerischen-bundesbahnen-sbb-6365",
        "title": "Die Schweizerischen Bundesbahnen (SBB)",
        "folder": "die-schweizerischen-bundesbahnen-sbb-6365"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Eisenbahn+Schienenverkehr+Mobilitaet&t=3752"
  },

  "automobil-und-elektromobilitaet": {
    "slug": "automobil-und-elektromobilitaet",
    "title": "Automobil & Elektromobilität",
    "category": "Automobil, E-Mobilität & Zukunft der Logistik",
    "shortDesc": "Verbrenner vs. Elektroauto, Abgasreinigung durch Katalysatoren, Batterie- und Ladeinfrastruktur und deutsche Autoindustrie.",
    "longDesc": "Das Automobil prägte das 20. Jahrhundert wie kein anderes Fortbewegungsmittel. Heute steht die Fahrzeugbranche im Zeichen der Antriebswende: Weg von fossilen Verbrennungsmotoren hin zu batterieelektrischen Antrieben und Wasserstofftechnologien.",
    "keyPoints": [
      "Verbrennungsmotor vs. Elektroantrieb: Wirkungsgrad (Elektromotor ca. 90% vs. Verbrenner ca. 30%), Drehmoment und CO2-Bilanz über den Lebenszyklus",
      "Abgaskatalysator: Redoxreaktionen mit Platin/Rhodium wandeln Kohlenmonoxid, unverbrannte Kohlenwasserstoffe und Stickoxide in CO2, Wasser und Stickstoff um",
      "Batterietechnologie: Lithium-Ionen-Akkus, Ladeleistungen (AC-Normal- vs. DC-Schnellladen) und Rohstoffherkunft (Lithium, Kobalt, Nickel)",
      "Automobilindustrie: Wirtschaftliche Bedeutung für Beschäftigung, Zulieferketten und Forschung im deutschsprachigen Raum"
    ],
    "exercises": [
      {
        "id": "das-ende-des-verbrenners-der-gnadenlose-vergleich-zum-e-auto",
        "title": "Verbrenner vs. Elektroauto im Vergleich",
        "folder": "das-ende-des-verbrenners-der-gnadenlose-vergleich-zum-e-auto"
      },
      {
        "id": "elektromobilitat-im-aufschwung-chancen-und-grenzen-5485",
        "title": "Elektromobilität im Aufschwung: Chancen & Grenzen",
        "folder": "elektromobilitat-im-aufschwung-chancen-und-grenzen-5485"
      },
      {
        "id": "wie-funktioniert-ein-katalysator-im-auto",
        "title": "Der Katalysator im Auto",
        "folder": "wie-funktioniert-ein-katalysator-im-auto"
      },
      {
        "id": "die-automobilindustrie-in-deutschland",
        "title": "Die Automobilindustrie in Deutschland",
        "folder": "die-automobilindustrie-in-deutschland"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Elektromobilitaet+Autoindustrie+Verkehr&t=3752"
  },

  "nachhaltige-mobilitaet-und-logistik": {
    "slug": "nachhaltige-mobilitaet-und-logistik",
    "title": "Nachhaltige Mobilität, Verkehrspolitik & Globale Logistik",
    "category": "Automobil, E-Mobilität & Zukunft der Logistik",
    "shortDesc": "Verkehrsträgervergleich (Straße, Schiene, Luft, Wasser), Containerhäfen, Flughäfen, urbane Verkehrswende und Drohnenlogistik.",
    "longDesc": "Globale Warenströme und urbane Ballungsräume verlangen intelligente Verkehrskonzepte. Der Vergleich verschiedener Verkehrsträger zeigt, wie multimodale Transportketten, automatisierte Logistikzentren und nachhaltige Verkehrspolitik zusammenspielen.",
    "keyPoints": [
      "Modal Split: Anteile der verschiedenen Verkehrsträger am Personen- und Güterverkehr; Verlagerung von der Straße auf Schiene und Wasserstraße",
      "Seeverkehr & Containerisierung: Genormte ISO-Container revolutionierten den Welthandel; Mega-Containerhäfen als logistische Drehkreuze",
      "Flughäfen als internationale Verkehrsknoten: Drehkreuze (Hub-and-Spoke-Systeme) für Passagiere und zeitkritische Luftfracht",
      "Urbane Mobilitätswende: Carsharing, 15-Minuten-Städte, Ausbau des ÖPNV und autofreie Innenstadtbereiche",
      "Zukunft der Logistik: Autonome Lieferfahrzeuge, Drohnenzustellung und KI-gestützte Routenoptimierung"
    ],
    "exercises": [
      {
        "id": "nachhaltige-verkehrskonzepte-fur-die-stadte-der-zukunft-5551",
        "title": "Nachhaltige Verkehrskonzepte der Zukunft",
        "folder": "nachhaltige-verkehrskonzepte-fur-die-stadte-der-zukunft-5551"
      },
      {
        "id": "verkehrspolitik-im-spannungsfeld-zwischen-wachstum-und-umwelt-5526",
        "title": "Verkehrspolitik zwischen Wachstum und Umwelt",
        "folder": "verkehrspolitik-im-spannungsfeld-zwischen-wachstum-und-umwelt-5526"
      },
      {
        "id": "vergleich-der-verkehrsmittel-straese-schiene-luft-und-wasser-5525",
        "title": "Vergleich der Verkehrsmittel: Straße, Schiene, Luft & Wasser",
        "folder": "vergleich-der-verkehrsmittel-straese-schiene-luft-und-wasser-5525"
      },
      {
        "id": "flughafen-als-zentrale-verkehrsknotenpunkte-in-globalen-netzwerken-5491",
        "title": "Flughäfen als globale Verkehrsknotenpunkte",
        "folder": "flughafen-als-zentrale-verkehrsknotenpunkte-in-globalen-netzwerken-5491"
      },
      {
        "id": "seeverkehr-und-globalhandel-containerhafen-als-schlusselpunkte-der-weltwirtschaft-5555",
        "title": "Seeverkehr & Containerhäfen im Welthandel",
        "folder": "seeverkehr-und-globalhandel-containerhafen-als-schlusselpunkte-der-weltwirtschaft-5555"
      },
      {
        "id": "die-rolle-von-verkehrsknotenpunkten-in-globalen-lieferketten-5472",
        "title": "Verkehrsknotenpunkte in globalen Lieferketten",
        "folder": "die-rolle-von-verkehrsknotenpunkten-in-globalen-lieferketten-5472"
      },
      {
        "id": "zukunft-der-logistik-automatisierung-drohnen-und-nachhaltige-lieferketten-5577",
        "title": "Zukunft der Logistik: Automatisierung & Drohnen",
        "folder": "zukunft-der-logistik-automatisierung-drohnen-und-nachhaltige-lieferketten-5577"
      },
      {
        "id": "wie-globalisierung-die-verkehrsstrome-verandert-5532",
        "title": "Wie Globalisierung Verkehrsströme verändert",
        "folder": "wie-globalisierung-die-verkehrsstrome-verandert-5532"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Nachhaltige+Mobilitaet+Logistik+Verkehr&t=3752"
  }
};
