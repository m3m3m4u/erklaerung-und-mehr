export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface MedienTopic {
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

export const medienCategories: string[] = [
  "Mediengeschichte, Presse & Journalismus",
  "Medienkompetenz, Fake News & Desinformation",
  "Social Media, Content Creation & Digitale Jugendkultur",
  "Medienrecht, Datenschutz & Werbekompetenz",
  "Medien in Fachbereichen, Gesellschaft & Krisen"
];

export const medienTopics: Record<string, MedienTopic> = {
  "mediengeschichte": {
    "slug": "mediengeschichte",
    "title": "Mediengeschichte: Vom Buchdruck bis zum Internet",
    "category": "Mediengeschichte, Presse & Journalismus",
    "shortDesc": "Gutenbergs Druckerpresse, Fotografie, Filmgeschichte, Farbfernsehen, Internet und Popkultur.",
    "longDesc": "Von Gutenbergs Erfindung des Buchdrucks mit beweglichen Lettern über die Erfindung der Fotografie und des Kinos bis zum Farbfernsehen und der weltweiten Vernetzung durch das Internet: Erkunde die Meilensteine der Mediengeschichte.",
    "keyPoints": [
      "Johannes Gutenbergs Druckerpresse (um 1450): Beginn der massenhaften Wissensverbreitung und Alphabetisierung",
      "Fotografie & Stummfilm: Das bewegte Bild entsteht – von der Daguerreotypie über die Brüder Lumière bis zum Tonfilm",
      "Fernsehen & Farbfernsehen (PAL/NTSC): Das Wohnzimmer wird zum medialen Mittelpunkt der Gesellschaft",
      "Die Rolle des Internets: Vom Arpanet und World Wide Web (Web 1.0) zur interaktiven Mitmachkultur (Web 2.0)",
      "Medien in der Popkultur: Musikfernsehen, Filmreihen und weltweite popkulturelle Trends"
    ],
    "exercises": [
      {
        "id": "2584",
        "title": "Die Entwicklung des Fernsehens",
        "folder": "die-entwicklung-des-fernsehens-2584"
      },
      {
        "id": "5252",
        "title": "Das Farbfernsehen – Geschichte und Technik",
        "folder": "das-farbfernsehen-5252"
      },
      {
        "id": "2606",
        "title": "Filmgeschichte und Filmanalyse",
        "folder": "filmgeschichte-und-analyse-2606"
      },
      {
        "id": "2586",
        "title": "Die Rolle des Internets in der Medienlandschaft",
        "folder": "die-rolle-des-internets-in-der-medienlandschaft-2586"
      },
      {
        "id": "2587",
        "title": "Die Rolle von Fotografie in den Medien",
        "folder": "die-rolle-von-fotografie-in-den-medien-2587"
      },
      {
        "id": "2597",
        "title": "Die Rolle von Medien in der Popkultur",
        "folder": "die-rolle-von-medien-in-der-popkultur-2597"
      },
      {
        "id": "wie-funktioniert-die-druckerpresse",
        "title": "Wie funktioniert die Druckerpresse?",
        "folder": "wie-funktioniert-die-druckerpresse"
      },
      {
        "id": "2585",
        "title": "Die Geschichte der Videospiele",
        "folder": "die-geschichte-der-videospiele-2585"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Mediengeschichte&t=1721"
  },
  "presse-zeitungen-und-journalismus": {
    "slug": "presse-zeitungen-und-journalismus",
    "title": "Presse, Zeitungen & Qualitätsjournalismus",
    "category": "Mediengeschichte, Presse & Journalismus",
    "shortDesc": "Nachrichtenkriterien, Pressefreiheit, Der Spiegel, Süddeutsche Zeitung, Bild-Zeitung und Fernsehsender.",
    "longDesc": "Qualitätsjournalismus filtert, überprüft und ordnet die tägliche Flut an Nachrichten ein. Entdecke, wie Redaktionen arbeiten, wie Nachrichtenagenturen funktionieren und welche Rolle Leitmedien, Boulevardzeitungen und Rundfunkanstalten in der Demokratie spielen.",
    "keyPoints": [
      "Aufbau einer Zeitung: Titelseite, Ressorts (Politik, Wirtschaft, Kultur, Sport, Lokales), Leitartikel und Glosse",
      "Nachrichtenfaktoren: Aktualität, Nähe, Prominenz, Dramatik und Tragweite bestimmen den Nachrichtenwert",
      "Qualitätsjournalismus vs. Boulevard: Sorgfältige Quellentrennung (Zwei-Quellen-Prinzip) vs. Sensationsschlagzeilen",
      "Der Spiegel & Süddeutsche Zeitung: Investigativer Journalismus und Aufdeckung politischer Affären",
      "Rundfunklandschaft: Öffentlich-rechtlicher Rundfunk mit Bildungsauftrag vs. private Fernsehsender mit Werbefinanzierung"
    ],
    "exercises": [
      {
        "id": "5360",
        "title": "Die Geschichte der Nachrichten",
        "folder": "die-geschichte-der-nachrichten-5360"
      },
      {
        "id": "medien-in-deutschland",
        "title": "Die Medienlandschaft in Deutschland",
        "folder": "medien-in-deutschland"
      },
      {
        "id": "der-spiegel-ein-wichtiges-nachrichtenmagazin",
        "title": "Der Spiegel – Ein wichtiges deutsches Nachrichtenmagazin",
        "folder": "der-spiegel-ein-wichtiges-nachrichtenmagazin"
      },
      {
        "id": "die-sueddeutsche-zeitung",
        "title": "Die Süddeutsche Zeitung – Überregionale Qualitätspresse",
        "folder": "die-sueddeutsche-zeitung"
      },
      {
        "id": "die-bild-zeitung-geschichte-und-bedeutung",
        "title": "Die Bild-Zeitung – Geschichte und Phänomen des Boulevards",
        "folder": "die-bild-zeitung-geschichte-und-bedeutung"
      },
      {
        "id": "die-zeitung-die-zeit-fuer-kinder-erklaert",
        "title": "Die Wochenzeitung DIE ZEIT – Journalismus mit Tiefgang",
        "folder": "die-zeitung-die-zeit-fuer-kinder-erklaert"
      },
      {
        "id": "listen-von-fernsehsendern",
        "title": "Fernsehsender: Öffentlich-rechtlich vs. Privatfernsehen",
        "folder": "listen-von-fernsehsendern"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Journalismus+Presse+Zeitung&t=1721"
  },
  "fake-news-desinformation-und-deepfakes": {
    "slug": "fake-news-desinformation-und-deepfakes",
    "title": "Fake News, Desinformation & Deepfakes erkennen",
    "category": "Medienkompetenz, Fake News & Desinformation",
    "shortDesc": "Desinformation entlarven, Fact-Checking, KI-generierte Deepfakes, Manipulation bei Wahlen und Medienethik.",
    "longDesc": "Gezielte Falschmeldungen (Fake News), manipulierte Bilder und KI-generierte Deepfakes bedrohen das Vertrauen in demokratische Institutionen. Lerne professionelle Fact-Checking-Methoden, die Erkennung digitaler Täuschungen und rechtliche Konsequenzen von Manipulation.",
    "keyPoints": [
      "Definition: Unterschied zwischen Fehlinformation (irrtümlich falsch) und Desinformation (gezielte Täuschung)",
      "Deepfakes & KI-Manipulation: Durch neuronale Netze täuschend echt generierte Stimmen und Videos politischer Akteure",
      "Fact-Checking-Tools: Umgekehrte Bildersuche (Reverse Image Search), Metadaten-Checks und offizielle Prüfportale",
      "Wahlbeeinflussung: Social Bots, Microtargeting und gezielte Kampagnen zur Wählerverunsicherung",
      "Rechtliche Folgen: Strafbarkeit von Verleumdung, Volksverhetzung, Urheberrechtsverletzungen und Betrug"
    ],
    "exercises": [
      {
        "id": "erkennen-von-fake-news-und-manipulation-und-desinformation",
        "title": "Erkennen von Fake News, Manipulation und Desinformation",
        "folder": "erkennen-von-fake-news-und-manipulation-und-desinformation"
      },
      {
        "id": "deepfakes-und-wahlbetrug-die-neue-aera-der-digitalen-manipulation",
        "title": "Deepfakes und Wahlbetrug – Die neue Ära digitaler Manipulation",
        "folder": "deepfakes-und-wahlbetrug-die-neue-aera-der-digitalen-manipulation"
      },
      {
        "id": "rechtliche-konsequenzen-manipulierter-medieninhalte",
        "title": "Rechtliche Konsequenzen manipulierter Medieninhalte",
        "folder": "rechtliche-konsequenzen-manipulierter-medieninhalte"
      },
      {
        "id": "einfluss-von-social-media-algorithmen-auf-wahlen",
        "title": "Einfluss von Social-Media-Algorithmen auf Wahlen",
        "folder": "einfluss-von-social-media-algorithmen-auf-wahlen"
      },
      {
        "id": "2605",
        "title": "Die Rolle von Medien in Wahlen",
        "folder": "die-rolle-von-medien-in-wahlen-2605"
      },
      {
        "id": "fischer-im-netz-der-radikalen-warum-extremisten-auf-social-media-triumphieren",
        "title": "Fischer im Netz der Radikalen – Extremismus auf Social Media",
        "folder": "fischer-im-netz-der-radikalen-warum-extremisten-auf-social-media-triumphieren"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Fake+News+Desinformation+Deepfakes&t=1721"
  },
  "filterblasen-meinungsbildung-und-medienpsychologie": {
    "slug": "filterblasen-meinungsbildung-und-medienpsychologie",
    "title": "Filterblasen, Meinungsbildung & Medienpsychologie",
    "category": "Medienkompetenz, Fake News & Desinformation",
    "shortDesc": "Echokammern, Empfehlungs-Algorithmen, Werbepsychologie, Konzentrationsverlust und Dystopien der Medienwelt.",
    "longDesc": "Algorithmen sozialer Netzwerke belohnen Emotionen, Empörung und Bestätigung eigener Ansichten. Dadurch entstehen Filterblasen und Echokammern, die die gesellschaftliche Spaltung verstärken. Verstehe die psychologischen Mechanismen der Medienwirkung und die literarische Medienkritik.",
    "keyPoints": [
      "Filterblasen & Echokammern: Personalisierte Feeds schirmen widersprechende Meinungen systematisch ab",
      "Medienpsychologie: Bestätigungsfehler (Confirmation Bias), Kognitive Dissonanz und emotionale Trigger",
      "Werbewirkung: Priming, Wiederholungseffekt, Testimonials und subtile Verhaltenssteuerung",
      "Aufmerksamkeitsökonomie: Wie Infinite Scrolling und Push-Benachrichtigungen unsere Lesekonzentration verändern",
      "Medienkritik in der Literatur: Suzanne Collins' 'Die Tribute von Panem' als messerscharfe Kritik an Sensationsmedien"
    ],
    "exercises": [
      {
        "id": "entstehung-und-wirkung-von-filterblasen",
        "title": "Entstehung und Wirkung von Filterblasen",
        "folder": "entstehung-und-wirkung-von-filterblasen"
      },
      {
        "id": "5813",
        "title": "Grundlagen der Medienpsychologie",
        "folder": "grundlagen-der-medienpsychologie-5813"
      },
      {
        "id": "2709",
        "title": "Einfluss der Werbung auf das menschliche Verhalten",
        "folder": "einfluss-der-werbung-auf-das-verhalten-2709"
      },
      {
        "id": "wie-social-media-unsere-konzentration-beim-lesen-veraendert",
        "title": "Wie Social Media unsere Konzentration beim Lesen verändert",
        "folder": "wie-social-media-unsere-konzentration-beim-lesen-veraendert"
      },
      {
        "id": "die-tribute-von-panem-kritik-an-unserer-fernsehwelt",
        "title": "Die Tribute von Panem – Kritik an unserer Fernsehwelt",
        "folder": "die-tribute-von-panem-kritik-an-unserer-fernsehwelt"
      },
      {
        "id": "suzanne-collins-und-die-kritik-an-der-medienwelt",
        "title": "Suzanne Collins und die Kritik an der modernen Medienwelt",
        "folder": "suzanne-collins-und-die-kritik-an-der-medienwelt"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Filterblasen+Medienpsychologie+Werbung&t=1721"
  },
  "youtube-und-content-creation": {
    "slug": "youtube-und-content-creation",
    "title": "YouTube, Content Creation & Videoproduktion",
    "category": "Social Media, Content Creation & Digitale Jugendkultur",
    "shortDesc": "Vom Video-Dreh zum YouTube-Star: Schnitt, Audio, Monetarisierung, Werbeeinnahmen und Creator-Druck.",
    "longDesc": "YouTube und Videoplattformen prägen den Alltag junger Menschen. Doch hinter erfolgreichen Kanälen steckt professionelle Medienproduktion: Von Konzeption, Bildbearbeitung und Audiomischung bis hin zur harten Realität von Algorithmen, Urheberrecht und Monetarisierung.",
    "keyPoints": [
      "Traumberuf YouTuber / Content Creator: Monetarisierung via AdSense, Sponsorings, Merchandising und Affiliate-Links",
      "Algorithmische Abhängigkeit: Watchtime, Klickrate (CTR), Thumbnails und der permanente Produktionsdruck",
      "Medienproduktion in der Praxis: Tonaufnahme, Beleuchtung, Schnitttechniken und Storyboarding für Lern- und Webvideos",
      "Bild- und Grafikgestaltung: Farbkorrekturen, Thumbnails und kreative Bildbearbeitung",
      "Influencer im Buch- und Medienmarkt: Reichweite vs. inhaltliche Qualität bei Creator-Publikationen"
    ],
    "exercises": [
      {
        "id": "6548",
        "title": "Der harte Weg zum YouTube-Star – Geld verdienen ist schwierig",
        "folder": "der-harte-weg-zum-youtube-star-geld-verdienen-ist-schwierig-2-6548"
      },
      {
        "id": "6494",
        "title": "Der Weg zum YouTube-Star – Realitätscheck und Monetarisierung",
        "folder": "der-harte-weg-zum-youtube-star-geld-verdienen-ist-schwierig-6494"
      },
      {
        "id": "produktion-von-audiobeitraegen-und-videobeitraegen-wie-podcasts-oder-lernvideos",
        "title": "Produktion von Audio- und Videobeiträgen (Podcasts & Lernvideos)",
        "folder": "produktion-von-audiobeitraegen-und-videobeitraegen-wie-podcasts-oder-lernvideos"
      },
      {
        "id": "bildbearbeitung-und-kreative-mediengestaltung",
        "title": "Bildbearbeitung und kreative Mediengestaltung",
        "folder": "bildbearbeitung-und-kreative-mediengestaltung"
      },
      {
        "id": "influencer-als-autoren-qualitaet-gegen-reichweite",
        "title": "Influencer als Autoren – Qualität gegen Reichweite",
        "folder": "influencer-als-autoren-qualitaet-gegen-reichweite"
      },
      {
        "id": "gedichte-fuer-social-media-kurz-und-knackig",
        "title": "Texten für Social Media – Kurz, knackig und zielgruppenorientiert",
        "folder": "gedichte-fuer-social-media-kurz-und-knackig"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=YouTube+Content+Creation+Video&t=1721"
  },
  "social-media-tiktok-und-digitale-suchtdynamik": {
    "slug": "social-media-tiktok-und-digitale-suchtdynamik",
    "title": "TikTok, Social Networks, Podcasts & Streaming",
    "category": "Social Media, Content Creation & Digitale Jugendkultur",
    "shortDesc": "TikTok-Suchtspirale, Short Content, Hörspiele vs. Podcasts, Streamingdienste und ökologischer Fußabdruck.",
    "longDesc": "Soziale Netzwerke und Streamingdienste bestimmen die moderne Freizeitgestaltung. Von ultra-kurzen TikTok-Clips und deren psychologischer Suchtwirkung über den Boom von Podcasts bis hin zum gewaltigen Energie- und Serverbedarf globaler Rechenzentren.",
    "keyPoints": [
      "TikTok & Short Video Formate: Der 'For You'-Algorithmus, Dopamin-Kicks und die Diskussion um Bildschirmzeitbegrenzungen",
      "Social-Media-Escape-Room: Interaktives Lösen von Aufgaben rund um Profile, Sicherheit und Gruppendynamik",
      "Streaming-Revolution: On-Demand-Kultur bei Netflix, Spotify und Co. löst das lineare Programm ab",
      "Hörspiele vs. Podcasts: Vom geskripteten Hörspiel mit Geräuschemachern zum authentischen Gesprächspodcast",
      "Ökologischer Fußabdruck des Streamings: Rechenzentren, Serverfarmen, Kühlenergie und CO₂-Emissionen des Datenverkehrs"
    ],
    "exercises": [
      {
        "id": "das-ewige-tiktok-limit-der-kampf-um-ein-radikales-plattform-verbot",
        "title": "Das TikTok-Limit – Der Kampf um Plattform-Regulierung",
        "folder": "das-ewige-tiktok-limit-der-kampf-um-ein-radikales-plattform-verbot"
      },
      {
        "id": "tiktok-trance-die-knallharte-suchtgefahr-durch-short-content",
        "title": "TikTok-Trance – Suchtgefahr durch Short Content",
        "folder": "tiktok-trance-die-knallharte-suchtgefahr-durch-short-content"
      },
      {
        "id": "3207",
        "title": "Escape Room: Soziale Netzwerke",
        "folder": "escape-room-quot-soziale-netzwerke-quot-3207"
      },
      {
        "id": "1317",
        "title": "Streamingdienste – Musik, Film und Serien on Demand",
        "folder": "streamingdienste-1317"
      },
      {
        "id": "hoerspiele-gegen-podcasts-was-wir-lieber-hoeren",
        "title": "Hörspiele vs. Podcasts – Audiomedien im Wandel",
        "folder": "hoerspiele-gegen-podcasts-was-wir-lieber-hoeren"
      },
      {
        "id": "podcasts-ueber-buecher-die-moderne-talkrunde",
        "title": "Podcasts über Bücher – Die moderne literarische Talkrunde",
        "folder": "podcasts-ueber-buecher-die-moderne-talkrunde"
      },
      {
        "id": "oekologischer-fussabdruck-von-serverfarmen-und-streaming",
        "title": "Ökologischer Fußabdruck von Serverfarmen und Streaming",
        "folder": "oekologischer-fussabdruck-von-serverfarmen-und-streaming"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=TikTok+Social+Media+Streaming&t=1721"
  },
  "gaming-videospiele-und-esports": {
    "slug": "gaming-videospiele-und-esports",
    "title": "Gaming, Videospiele, E-Sports & Storytelling",
    "category": "Social Media, Content Creation & Digitale Jugendkultur",
    "shortDesc": "Videospiele als Kulturgut, interaktives Storytelling, E-Sports, Latenzzeiten und In-Game-Abzocke.",
    "longDesc": "Gaming ist längst das wirtschaftlich stärkste Unterhaltungsmedium weltweit: Komplexe narrative Welten, professioneller E-Sport vor Millionen Zuschauern, aber auch heikle Themen wie Pay-to-Win, Lootboxen und In-App-Kaufanreize für Minderjährige.",
    "keyPoints": [
      "Gaming als Kunst- und Kulturgut: Narrative Welten, emotionale Bindung und interaktive Entscheidungsfreiheit",
      "E-Sports: Professioneller Wettbewerb, Reaktionsgeschwindigkeit, Teamtaktik und Trainingsstrukturen",
      "Technische Grundlagen: Bildwiederholraten (FPS), Latenzzeiten (Ping) und Server-Synchronisation beim Online-Gaming",
      "In-App-Käufe & Dark Patterns: Glücksspielähnliche Lootboxen, Battle Passes und manipulative Kaufanreize",
      "Literatur & Gaming: Ursula Poznanskis 'Erebos' – Die Verschmelzung von Realität und computergesteuertem Spiel"
    ],
    "exercises": [
      {
        "id": "e-sports-einfach-und-kurz-erklaert",
        "title": "E-Sports – Wettkampf und Professionalisierung im Gaming",
        "folder": "e-sports-einfach-und-kurz-erklaert"
      },
      {
        "id": "storytelling-in-videospielen-besser-als-im-buch",
        "title": "Storytelling in Videospielen – Interaktive Erzählkunst",
        "folder": "storytelling-in-videospielen-besser-als-im-buch"
      },
      {
        "id": "gaming-und-literatur-wenn-spiele-geschichten-erzaehlen",
        "title": "Gaming und Literatur – Wenn Spiele Geschichten erzählen",
        "folder": "gaming-und-literatur-wenn-spiele-geschichten-erzaehlen"
      },
      {
        "id": "latenzzeit-als-groesste-bremse-beim-online-gaming",
        "title": "Latenzzeit und Ping als Bremse beim Online-Gaming",
        "folder": "latenzzeit-als-groesste-bremse-beim-online-gaming"
      },
      {
        "id": "in-app-abzocke-wie-videospiele-kindern-das-geld-aus-der-tasche-ziehen",
        "title": "In-App-Abzocke – Wie Videospiele Kasse machen",
        "folder": "in-app-abzocke-wie-videospiele-kindern-das-geld-aus-der-tasche-ziehen"
      },
      {
        "id": "ursula-poznanski-thriller-zwischen-realitaet-und-gaming",
        "title": "Ursula Poznanski – Thriller zwischen Realität und Gaming",
        "folder": "ursula-poznanski-thriller-zwischen-realitaet-und-gaming"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Gaming+Videospiele+Esports&t=1721"
  },
  "datenschutz-privatsphaere-und-medienrecht": {
    "slug": "datenschutz-privatsphaere-und-medienrecht",
    "title": "Datenschutz, Privatsphäre, Urheberrecht & Medienrecht",
    "category": "Medienrecht, Datenschutz & Werbekompetenz",
    "shortDesc": "DSGVO im Alltag, Recht am eigenen Bild, Urheberrecht, Zensur, App-Berechtigungen und Werbepsychologie.",
    "longDesc": "Wer Medien konsumiert und produziert, muss die rechtlichen Spielregeln kennen: Vom Schutz eigener Fotos und Daten nach der DSGVO über das Urheberrecht bei Musik und Memes bis hin zu Zensurmaßnahmen autoritärer Staaten und werblichen Manipulationsstrategien.",
    "keyPoints": [
      "Datenschutz-Grundverordnung (DSGVO): Recht auf Auskunft, Datenminimierung und Löschung ('Recht auf Vergessenwerden')",
      "Recht am eigenen Bild (§ 22 KUG): Warum man fremde Personen niemals ohne Erlaubnis fotografieren oder posten darf",
      "Urheberrecht & Creative Commons: Schöpfungshöhe, Lizenzmodelle und faire Nutzung von Medieninhalten",
      "Pressefreiheit & Zensur: Grundgesetz Artikel 5, Zensurmethoden weltweit und Schutz von Journalisten",
      "Werbepsychologie & Kennzeichnungspflicht: Subtile Produktplatzierungen, Influencer-Werbung und Schleichwerbung"
    ],
    "exercises": [
      {
        "id": "2607",
        "title": "Medien und Datenschutz – Grundlagen",
        "folder": "medien-und-datenschutz-2607"
      },
      {
        "id": "schutz-persoenlicher-daten-in-apps-und-sozialen-medien",
        "title": "Schutz persönlicher Daten in Apps und sozialen Medien",
        "folder": "schutz-persoenlicher-daten-in-apps-und-sozialen-medien"
      },
      {
        "id": "datenschutz-und-dsgvo-im-alltag",
        "title": "Datenschutz und DSGVO im Alltag",
        "folder": "datenschutz-und-dsgvo-im-alltag"
      },
      {
        "id": "4429",
        "title": "Digitale Identität und Schutz der Privatsphäre",
        "folder": "digitale-identitat-und-privatsphare-4429"
      },
      {
        "id": "urheberrecht-und-faire-nutzung-von-medieninhalten",
        "title": "Urheberrecht und faire Nutzung von Medieninhalten",
        "folder": "urheberrecht-und-faire-nutzung-von-medieninhalten"
      },
      {
        "id": "2618",
        "title": "Medienrecht und Zensur",
        "folder": "medienrecht-und-zensur-2618"
      },
      {
        "id": "2619",
        "title": "Werbung und ihre psychologischen Strategien",
        "folder": "werbung-und-ihre-psychologischen-strategien-2619"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Datenschutz+Medienrecht+Urheberrecht&t=1721"
  },
  "medien-in-wissenschaft-und-technik": {
    "slug": "medien-in-wissenschaft-und-technik",
    "title": "Medien in Wissenschaft, Technik & Umwelt",
    "category": "Medien in Fachbereichen, Gesellschaft & Krisen",
    "shortDesc": "Wissenschaftsjournalismus in Informatik, Umwelttechnik, Raumfahrt, Robotik, Physik und Biologie.",
    "longDesc": "Wissenschaftliche Erkenntnisse müssen verständlich, sachlich und präzise an die Öffentlichkeit vermittelt werden. Entdecke die Rolle der Medien bei der Dokumentation bahnbrechender Entdeckungen in Naturwissenschaften und Zukunftstechnologien.",
    "keyPoints": [
      "Wissenschaftskommunikation: Übersetzung von Laborforschung in allgemeinverständliche Reportagen",
      "Medien in Informatik & Robotik: Visualisierung von Algorithmen, künstlicher Intelligenz und Automatisierung",
      "Raumfahrt-Medien: Faszination des Weltalls durch Satellitenbilder, Livestreams und Teleskopaufnahmen",
      "Umwelt- und Geojournalismus: Aufklärung über Umweltzerstörung, erneuerbare Energien und Klimadaten",
      "Bildgebung in Physik & Biologie: Visualisierung von subatomaren Teilchen bis zu zellulären Prozessen"
    ],
    "exercises": [
      {
        "id": "2593",
        "title": "Die Rolle von Medien in der Informatik",
        "folder": "die-rolle-von-medien-in-der-informatik-2593"
      },
      {
        "id": "2600",
        "title": "Die Rolle von Medien in der Umwelttechnologie",
        "folder": "die-rolle-von-medien-in-der-umwelttechnologie-2600"
      },
      {
        "id": "2617",
        "title": "Medien und Umwelttechnologie – Kommunikation grüner Innovationen",
        "folder": "medien-und-umwelttechnologie-2617"
      },
      {
        "id": "2598",
        "title": "Die Rolle von Medien in der Raumfahrt",
        "folder": "die-rolle-von-medien-in-der-raumfahrt-2598"
      },
      {
        "id": "2599",
        "title": "Die Rolle von Medien in der Robotertechnologie",
        "folder": "die-rolle-von-medien-in-der-robotertechnologie-2599"
      },
      {
        "id": "2591",
        "title": "Die Rolle von Medien in der Biologie",
        "folder": "die-rolle-von-medien-in-der-biologie-2591"
      },
      {
        "id": "2596",
        "title": "Die Rolle von Medien in der Physik",
        "folder": "die-rolle-von-medien-in-der-physik-2596"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Wissenschaftskommunikation+Medien&t=1721"
  },
  "medien-in-fachbereichen-und-wirtschaft": {
    "slug": "medien-in-fachbereichen-und-wirtschaft",
    "title": "Medien in Kultur, Medizin, Wirtschaft & Augmented Reality",
    "category": "Medien in Fachbereichen, Gesellschaft & Krisen",
    "shortDesc": "Medienanwendungen in Kunst, Geschichte, Medizin, PR, Archäologie, Anthropologie und Augmented Reality.",
    "longDesc": "Fachspezifische Medienanwendungen reichen von virtuellen Museumstouren über medizinische Diagnosevisualisierungen bis hin zu interaktiven Augmented-Reality-Brillen in industriellen Fertigungsprozessen.",
    "keyPoints": [
      "Medien in Kunst & Museen: Virtuelle Galerien, digitale Restauration und kunsthistorische Bildarchive",
      "Historische Ton- und Filmdokumente: Archive als Gedächtnis der Menschheit",
      "Medizinische Medien: Patientenaufklärung, bildgebende Diagnostik und Telemedizin",
      "Wirtschaftskommunikation & PR: Professionelle Öffentlichkeitsarbeit von Unternehmen und Institutionen",
      "Augmented Reality (AR): Überlagerung der physischen Realität mit digitalen Zusatzinformationen"
    ],
    "exercises": [
      {
        "id": "2594",
        "title": "Die Rolle von Medien in der Kunst",
        "folder": "die-rolle-von-medien-in-der-kunst-2594"
      },
      {
        "id": "2592",
        "title": "Die Rolle von Medien in der Geschichte",
        "folder": "die-rolle-von-medien-in-der-geschichte-2592"
      },
      {
        "id": "2595",
        "title": "Die Rolle von Medien in der Medizin",
        "folder": "die-rolle-von-medien-in-der-medizin-2595"
      },
      {
        "id": "2601",
        "title": "Die Rolle von Medien in der Wirtschaftskommunikation",
        "folder": "die-rolle-von-medien-in-der-wirtschaftskommunikation-2601"
      },
      {
        "id": "2589",
        "title": "Die Rolle von Medien in der Archäologie",
        "folder": "die-rolle-von-medien-in-der-archaologie-2589"
      },
      {
        "id": "2588",
        "title": "Die Rolle von Medien in der Anthropologie",
        "folder": "die-rolle-von-medien-in-der-anthropologie-2588"
      },
      {
        "id": "2590",
        "title": "Die Rolle von Medien in der Augmented Reality",
        "folder": "die-rolle-von-medien-in-der-augmented-reality-2590"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medien+Fachbereiche&t=1721"
  },
  "medien-und-gesellschaft": {
    "slug": "medien-und-gesellschaft",
    "title": "Medien, Gesellschaft, Kultur & Soziale Bewegungen",
    "category": "Medien in Fachbereichen, Gesellschaft & Krisen",
    "shortDesc": "Vierte Gewalt, Diversität, Kulturberichterstattung, Religion, Umwelt und soziale Bewegungen.",
    "longDesc": "Medien wirken als Spiegel und Motor des gesellschaftlichen Wandels. Sie transportieren Werte, schaffen Identifikationsfiguren, hinterfragen Machtstrukturen und geben sozialen Bewegungen eine weltweite Stimme.",
    "keyPoints": [
      "Medien als vierte Gewalt: Kontrollfunktion gegenüber Regierung, Parlament und Justiz",
      "Diversität & Inklusion: Sensible Darstellung von Minderheiten, Geschlechtern und Kulturen",
      "Medien und Religion: Berichterstattung über Glaube, ethische Konflikte und interreligiösen Dialog",
      "Soziale Bewegungen: Von der Bürgerrechtsbewegung über den Arabischen Frühling bis zu #FridaysForFuture",
      "Kulturberichterstattung: Feuilleton, Filmkritik, Literaturdebatten und Theaterrezensionen"
    ],
    "exercises": [
      {
        "id": "2583",
        "title": "Die Darstellung von Rasse und Ethnizität in den Medien",
        "folder": "die-darstellung-von-rasse-und-ethnizitat-in-den-medien-2583"
      },
      {
        "id": "2612",
        "title": "Medien und Politik – Einfluss und Interaktion",
        "folder": "medien-und-politik-einfluss-und-interaktion-2612"
      },
      {
        "id": "2614",
        "title": "Medien und Religion",
        "folder": "medien-und-religion-2614"
      },
      {
        "id": "2609",
        "title": "Medien und Kultur",
        "folder": "medien-und-kultur-2609"
      },
      {
        "id": "2616",
        "title": "Medien und Umwelt",
        "folder": "medien-und-umwelt-2616"
      },
      {
        "id": "2604",
        "title": "Die Rolle von Medien in sozialen Bewegungen",
        "folder": "die-rolle-von-medien-in-sozialen-bewegungen-2604"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medien+und+Gesellschaft&t=1721"
  },
  "medien-in-krisen-und-industrie": {
    "slug": "medien-in-krisen-und-industrie",
    "title": "Krisenberichterstattung, Krieg, FinTech & Industrie",
    "category": "Medien in Fachbereichen, Gesellschaft & Krisen",
    "shortDesc": "Katastrophenjournalismus, Kriegspropaganda, Finanztechnologie, Mode, Luftfahrt und Transport.",
    "longDesc": "In Krisen und Kriegen stehen Medienschaffende vor extremen ethischen Herausforderungen zwischen Faktenvermittlung und Zensur. Gleichzeitig steuern Medien vitale industrielle Sektoren wie Finanzmärkte, Luftfahrt und globale Transportnetze.",
    "keyPoints": [
      "Kriegs- und Krisenberichterstattung: Verifizierungspflicht an vorderster Front und Gefahren von Kriegspropaganda",
      "Katastrophenkommunikation: Alarmierungs-Apps (NINA, KATWARN), behördliche Notfallmeldungen und Sensationsvermeidung",
      "Finanzmedien & FinTech: Echtzeitkurse, Börsenanalysen und automatisierte Finanznachrichten",
      "Industrielle Mediensysteme: Passagierinformationssysteme in Luftfahrt, Bahnverkehr und städtischer Mobilität",
      "Mode- und Lifestyle-Medien: Globale Modewochen, digitale Trends und E-Commerce-Plattformen"
    ],
    "exercises": [
      {
        "id": "2602",
        "title": "Die Rolle von Medien in der Katastrophenberichterstattung",
        "folder": "die-rolle-von-medien-in-katastrophenberichterstattung-2602"
      },
      {
        "id": "2603",
        "title": "Die Rolle von Medien in Kriegen und Konflikten",
        "folder": "die-rolle-von-medien-in-kriegen-und-konflikten-2603"
      },
      {
        "id": "2608",
        "title": "Medien und Finanztechnologie",
        "folder": "medien-und-finanztechnologie-2608"
      },
      {
        "id": "2610",
        "title": "Medien und Luftfahrt",
        "folder": "medien-und-luftfahrt-2610"
      },
      {
        "id": "2611",
        "title": "Medien und Mode",
        "folder": "medien-und-mode-2611"
      },
      {
        "id": "2615",
        "title": "Medien und Transport",
        "folder": "medien-und-transport-2615"
      },
      {
        "id": "2613",
        "title": "Medien und Raumfahrttechnik",
        "folder": "medien-und-raumfahrt-2613"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Medien+Krisen+Konflikte&t=1721"
  }
};
