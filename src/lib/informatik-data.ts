export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface InformatikTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const informatikCategories = [
  'Hardware & Grundlagen',
  'Software & Systeme',
  'Internet, Web & Netzwerke',
  'Sicherheit, Medien & Gesellschaft',
  'Programmierung & Webentwicklung',
  'Arbeitsheft & Spezialthemen',
];

export const informatikTopics: Record<string, InformatikTopic> = {
  "hardware": {
    "slug": "hardware",
    "title": "Hardware & Komponenten",
    "category": "Hardware & Grundlagen",
    "shortDesc": "CPU, RAM, SSD/HDD, Mainboard, Grafikkarten, Schnittstellen und Peripheriegeräte.",
    "longDesc": "Hardware umfasst alle physischen, anfassbaren Bauteile eines Computersystems. Vom Hauptprozessor (CPU) als Rechenzentrum über den schnellen Arbeitsspeicher (RAM) bis hin zu Massenspeichern (SSD/HDD) und externen Geräten arbeiten alle Komponenten im Zusammenspiel.",
    "keyPoints": [
      "Prozessor (CPU): Führt Rechenoperationen und Programmbefehle im Takt (GHz) aus",
      "Arbeitsspeicher (RAM): Schneller, flüchtiger Kurzzeitspeicher; verliert alle Daten beim Ausschalten",
      "Massenspeicher (SSD vs. HDD): Dauerhafter Speicher; SSDs sind lautlos, robust und um ein Vielfaches schneller als mechanische Festplatten (HDDs)",
      "Hauptplatine (Mainboard / Motherboard): Verbindet alle Komponenten (CPU, RAM, GPU, Schnittstellen) miteinander",
      "Grafikkarte (GPU): Spezialisiert auf die schnelle Berechnung und Ausgabe visueller Daten und 3D-Grafiken",
      "Schnittstellen: USB (Universal Serial Bus), HDMI/DisplayPort für Bild/Ton, LAN (RJ45) für kabelgebundene Netzwerke",
      "Eingabegeräte: Tastatur, Maus, Touchscreen, Mikrofon | Ausgabegeräte: Monitor, Drucker, Lautsprecher"
    ],
    "exercises": [
      {
        "id": "306",
        "title": "Grundlagen Der Informatik Hardware",
        "folder": "grundlagen-der-informatik-hardware-306"
      },
      {
        "id": "1227",
        "title": "Computermaus",
        "folder": "computermaus-1227"
      },
      {
        "id": "1209",
        "title": "Arbeitsspeicher",
        "folder": "arbeitsspeicher-1209"
      },
      {
        "id": "1233",
        "title": "Cpu",
        "folder": "cpu-1233"
      },
      {
        "id": "1270",
        "title": "HDD und SSD",
        "folder": "hdd-und-ssd-1270"
      },
      {
        "id": "1298",
        "title": "Optische Laufwerke",
        "folder": "optische-laufwerke-1298"
      },
      {
        "id": "1326",
        "title": "Webcam",
        "folder": "webcam-1326"
      },
      {
        "id": "1324",
        "title": "VGA-Anschluss",
        "folder": "vga-anschluss-1324"
      },
      {
        "id": "1384",
        "title": "Laserdrucker",
        "folder": "laserdrucker-1384"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=hardware&t=896"
  },
  "digitale-grundlagen": {
    "slug": "digitale-grundlagen",
    "title": "Digitale Grundlagen & EVA-Prinzip",
    "category": "Hardware & Grundlagen",
    "shortDesc": "Das EVA-Prinzip (Eingabe-Verarbeitung-Ausgabe), Zahlensysteme, Bits & Bytes und Tastatur.",
    "longDesc": "Alle digitalen Geräte arbeiten nach universellen Grundprinzipien. Das EVA-Prinzip beschreibt den Weg von Nutzerdaten bis zur Ausgabe, während Binärcodes (Bits und Bytes) die elementare Sprache aller Computer darstellen.",
    "keyPoints": [
      "EVA-Prinzip: Eingabe (z. B. Tastatur/Maus) ➔ Verarbeitung (CPU/RAM) ➔ Ausgabe (Monitor/Drucker)",
      "Bit (Binary Digit): Die kleinste digitale Informationseinheit mit den Zuständen 0 oder 1",
      "Byte: Eine Gruppe von 8 Bits (kann 256 verschiedene Zeichen darstellen, z. B. nach ASCII)",
      "Größeneinheiten: 1 KB = 1024 Bytes | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB",
      "Zehnfingersystem: Ergonomisches Schreiben auf der Tastatur über die Grundreihe (ASDF - JKLÖ)"
    ],
    "exercises": [
      {
        "id": "354",
        "title": "Geschichte Des Computers",
        "folder": "geschichte-des-computers-354"
      },
      {
        "id": "306",
        "title": "Grundlagen Der Informatik Hardware",
        "folder": "grundlagen-der-informatik-hardware-306"
      },
      {
        "id": "1209",
        "title": "Arbeitsspeicher",
        "folder": "arbeitsspeicher-1209"
      },
      {
        "id": "1227",
        "title": "Computermaus",
        "folder": "computermaus-1227"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=digitale+grundbildung&t=896"
  },
  "betriebssysteme": {
    "slug": "betriebssysteme",
    "title": "Betriebssysteme",
    "category": "Software & Systeme",
    "shortDesc": "Windows, macOS, Linux, Android und iOS – Aufgaben, Benutzeroberflächen und Dateiverwaltung.",
    "longDesc": "Das Betriebssystem (Operating System, OS) ist die grundlegende Software eines Computers oder Smartphones. Es verwaltet die Hardware-Ressourcen, stellt das Dateisystem bereit und ermöglicht die Ausführung von Anwendungsprogrammen.",
    "keyPoints": [
      "Hauptaufgaben: Hardwaresteuerung (Treiber), Speicherverwaltung, Dateiverwaltung, Prozess- und Multitasking-Steuerung, Benutzerrechte",
      "Desktop-Systeme: Microsoft Windows (am weitesten verbreitet), macOS (Apple), Linux (Open Source, flexibel, serverdominant)",
      "Mobile Betriebssysteme: Android (Google / Open Handset Alliance), iOS (Apple iPhone)",
      "Grafische Benutzeroberfläche (GUI): Fenster, Icons, Menüs und Zeiger (WIMP-Prinzip) vs. Befehlszeile (CLI / Terminal)",
      "Dateisystem & Pfade: Hierarchische Struktur aus Laufwerken, Ordnern und Dateierweiterungen (z. B. .docx, .pdf, .jpg, .exe)"
    ],
    "exercises": [
      {
        "id": "1208",
        "title": "Apple Ios",
        "folder": "apple-ios-1208"
      },
      {
        "id": "1286",
        "title": "Linux",
        "folder": "linux-1286"
      },
      {
        "id": "1363",
        "title": "Das Betriebssystem \"Android\"",
        "folder": "das-betriebssystem-quot-android-quot-1363"
      },
      {
        "id": "1959",
        "title": "Algerien",
        "folder": "algerien-7-1959"
      },
      {
        "id": "463",
        "title": "Betriebssysteme",
        "folder": "betriebssysteme-463"
      },
      {
        "id": "466",
        "title": "Betriebssysteme",
        "folder": "betriebssysteme-2-466"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=betriebssysteme&t=896"
  },
  "sonstige-software": {
    "slug": "sonstige-software",
    "title": "Softwarearten & BIOS",
    "category": "Software & Systeme",
    "shortDesc": "Systemsoftware, Anwendungssoftware, BIOS/UEFI, Open-Source vs. proprietäre Software.",
    "longDesc": "Software lässt sich in verschiedene Kategorien einteilen. BIOS und UEFI bilden die hardwarenahe Firmware beim Startvorgang, während Anwendungssoftware für die tägliche Arbeit genutzt wird. Lizenzmodelle reichen von kostenloser Open-Source-Software bis zu kommerziellen Programmen.",
    "keyPoints": [
      "Systemsoftware: Betriebssysteme, Gerätetreiber und Dienstprogramme",
      "Anwendungssoftware (Apps): Textverarbeitung, Spiele, Bildbearbeitung, Webbrowser etc.",
      "BIOS / UEFI: Firmware auf dem Mainboard, die beim Einschalten den Selbsttest (POST) durchführt und das Betriebssystem lädt",
      "Open-Source-Software: Quellcode ist öffentlich einsehbar, veränderbar und meist kostenlos (z. B. Linux, LibreOffice, Firefox)",
      "Proprietäre Software: Quellcode ist geschützt und das Nutzungsrecht wird über Lizenzen erworben (z. B. Windows, Photoshop)"
    ],
    "exercises": [
      {
        "id": "312",
        "title": "Grundlagen Der Informatik Software",
        "folder": "grundlagen-der-informatik-software-312"
      },
      {
        "id": "1235",
        "title": "Das Bios",
        "folder": "das-bios-1235"
      },
      {
        "id": "1297",
        "title": "Open Source Software",
        "folder": "open-source-software-1297"
      },
      {
        "id": "1228",
        "title": "Computerspiele",
        "folder": "computerspiele-1228"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=software&t=896"
  },
  "bueroprogramme": {
    "slug": "bueroprogramme",
    "title": "Büroprogramme (Office)",
    "category": "Software & Systeme",
    "shortDesc": "Textverarbeitung (Word), Tabellenkalkulation (Excel) und Präsentationen (PowerPoint).",
    "longDesc": "Office-Pakete sind Standardwerkzeuge in Schule, Studium und Beruf. Sie ermöglichen das professionelle Verfassen von Dokumenten, das automatische Berechnen von Daten mit Formeln sowie das ansprechende Präsentieren von Inhalten.",
    "keyPoints": [
      "Textverarbeitung (z. B. MS Word, Docs): Formatierung von Texten, Absätzen, Kopf-/Fußzeilen, Inhaltsverzeichnissen und Bildern",
      "Tabellenkalkulation (z. B. MS Excel, Calc): Rechnen mit Formeln (z. B. =SUMME, =MITTELWERT, =WENN), Zellbezüge und Diagramme",
      "Präsentationsprogramme (z. B. PowerPoint, Impress): Folienlayouts, visuelle Strukturierung, Animationen und Referentenansicht",
      "Datenbanken (z. B. MS Access, SQL): Strukturierte Speicherung, Verknüpfung und Abfrage großer Datenmengen"
    ],
    "exercises": [
      {
        "id": "1320",
        "title": "Textverarbeitungsprogramme",
        "folder": "textverarbeitungsprogramme-1320"
      },
      {
        "id": "1319",
        "title": "Tabellenkalkulationen",
        "folder": "tabellenkalkulationen-1319"
      },
      {
        "id": "1305",
        "title": "Prasentationsprogramme",
        "folder": "prasentationsprogramme-1305"
      },
      {
        "id": "1236",
        "title": "Datenbankprogramme",
        "folder": "datenbankprogramme-1236"
      },
      {
        "id": "1302",
        "title": "Pdf",
        "folder": "pdf-1302"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=word+excel&t=896"
  },
  "internet-grundlagen": {
    "slug": "internet-grundlagen",
    "title": "Internet Grundlagen & Web",
    "category": "Internet, Web & Netzwerke",
    "shortDesc": "Funktionsweise des Internets, WWW, DNS-Server, IP-Adressen, URLs und Online-Recherche.",
    "longDesc": "Das Internet ist ein weltweites Netz miteinander verbundener Computernetzwerke. Dienste wie das World Wide Web (WWW), E-Mail oder Streaming nutzen standardisierte Protokolle (TCP/IP, HTTP/HTTPS), um Datenpakete global in Millisekunden zu übertragen.",
    "keyPoints": [
      "Unterschied Internet vs. WWW: Das Internet ist die weltweite Netzwerkinfrastruktur; das WWW ist ein Dienst darauf zur Anzeige von Webseiten",
      "IP-Adresse (IPv4 / IPv6): Eindeutige Kennung jedes Geräts im Netzwerk (z. B. 192.168.1.1 oder 2001:db8::1)",
      "DNS (Domain Name System): \"Telefonbuch des Internets\", übersetzt Domainnamen (wie beispiel.de) in IP-Adressen",
      "URL (Uniform Resource Locator): Webadresse aus Protokoll (https://), Domain (schule.at) und Pfad (/informatik)",
      "Suchmaschinen: Webcrawler durchsuchen das Netz und indexieren Seiten; Suchoperatoren (z. B. Anführungszeichen \"...\") verfeinern Treffer"
    ],
    "exercises": [
      {
        "id": "468",
        "title": "Datentrager",
        "folder": "datentrager-468"
      },
      {
        "id": "470",
        "title": "Netzwerke",
        "folder": "netzwerke-470"
      },
      {
        "id": "1263",
        "title": "Google Chrome",
        "folder": "google-chrome-1263"
      },
      {
        "id": "1292",
        "title": "Mozilla Firefox",
        "folder": "mozilla-firefox-1292"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=internet&t=896"
  },
  "browser": {
    "slug": "browser",
    "title": "Webbrowser",
    "category": "Internet, Web & Netzwerke",
    "shortDesc": "Navigation, Rendering-Engine, Cache, Cookies, Verlauf, Lesezeichen und Datenschutz.",
    "longDesc": "Ein Webbrowser ist das Anwendungsprogramm zur Darstellung von Webseiten im World Wide Web. Er lädt HTML-, CSS- und JavaScript-Dateien vom Webserver herunter und rendert diese zu interaktiven Seiten.",
    "keyPoints": [
      "Bekannte Browser: Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge, Brave",
      "Cache: Lokaler Zwischenspeicher für Bilder und Dateien zur schnelleren Ladezeit bei wiederholten Besuchen",
      "Cookies: Kleine Textdateien, die Login-Zustände, Spracheinstellungen oder Tracking-Informationen speichern",
      "Inkognito- / Privater Modus: Speichert nach dem Schließen des Fensters weder Verlauf noch Cookies lokal auf dem Rechner",
      "HTTPS & Schloss-Symbol: Verschlüsselte Übertragung zwischen Browser und Webserver (Schutz vor Abhören)"
    ],
    "exercises": [
      {
        "id": "1263",
        "title": "Google Chrome",
        "folder": "google-chrome-1263"
      },
      {
        "id": "1292",
        "title": "Mozilla Firefox",
        "folder": "mozilla-firefox-1292"
      },
      {
        "id": "1290",
        "title": "Microsoft Edge",
        "folder": "microsoft-edge-1290"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=browser&t=896"
  },
  "netzwerke": {
    "slug": "netzwerke",
    "title": "Netzwerke & Topologien",
    "category": "Internet, Web & Netzwerke",
    "shortDesc": "LAN, WAN, WLAN, Router, Switch, Client-Server-Modell, Active Directory und Protokolle.",
    "longDesc": "Rechnernetzwerke ermöglichen den Austausch von Daten und die gemeinsame Nutzung von Ressourcen (z. B. Drucker, Server, Speicher). Router verbinden verschiedene Netze, während Switches Datenpakete gezielt an Zielgeräte weiterleiten.",
    "keyPoints": [
      "Netzwerktypen: LAN (Local Area Network, Heim-/Schulnetz), WLAN (kabelloses LAN), WAN (Wide Area Network, z. B. Internet)",
      "Router: Vermittelt Datenpakete zwischen verschiedenen Netzwerken (z. B. zwischen Heimnetz und Internet)",
      "Switch: Verteilt Datenpakete innerhalb eines lokalen Netzwerks gezielt an die MAC-Adresse des Empfängers",
      "Client-Server-Modell: Clients (z. B. PCs, Handys) fordern Dienste an; Server stellen diese zentral bereit (Webserver, Mailserver, Dateiserver)",
      "Active Directory: Zentraler Verzeichnisdienst in Microsoft-Netzwerken zur Verwaltung von Benutzern, Rechten und Computern"
    ],
    "exercises": [
      {
        "id": "470",
        "title": "Netzwerke",
        "folder": "netzwerke-470"
      },
      {
        "id": "1201",
        "title": "Active Directory",
        "folder": "active-directory-1201"
      },
      {
        "id": "1308",
        "title": "Router",
        "folder": "router-1308"
      },
      {
        "id": "1242",
        "title": "Domain Controller",
        "folder": "domain-controller-1242"
      },
      {
        "id": "1279",
        "title": "Intranet",
        "folder": "intranet-1279"
      },
      {
        "id": "1202",
        "title": "Adsl",
        "folder": "adsl-1202"
      },
      {
        "id": "1374",
        "title": "IP-Adresse",
        "folder": "ip-adresse-1374"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=netzwerke&t=896"
  },
  "online-zusammenarbeit": {
    "slug": "online-zusammenarbeit",
    "title": "Online-Zusammenarbeit & Cloud",
    "category": "Internet, Web & Netzwerke",
    "shortDesc": "Cloud-Computing, MS Teams, OneDrive, Google Drive, kollaborative Tools und Mobilfunk.",
    "longDesc": "Digitale Zusammenarbeit (Kollaboration) ermöglicht es Teams und Schulklassen, ortsunabhängig und zeitgleich an Dokumenten zu arbeiten, Videokonferenzen abzuhalten und Daten sicher in der Cloud zu teilen.",
    "keyPoints": [
      "Cloud-Computing: Bereitstellung von Speicherplatz, Rechenleistung und Software über das Internet (IaaS, PaaS, SaaS)",
      "Cloud-Speicher: OneDrive, Google Drive, Dropbox, Nextcloud – automatische Synchronisation auf allen Geräten",
      "Kollaboratives Arbeiten: Gleichzeitiges Bearbeiten von Texten und Tabellen mit Versionsverlauf und Kommentaren",
      "Kommunikationsplattformen: Microsoft Teams, Zoom, Slack – Chatkanäle, Videokonferenzen und Dateiaustausch"
    ],
    "exercises": [
      {
        "id": "473",
        "title": "Internetbrowser",
        "folder": "internetbrowser-2-473"
      },
      {
        "id": "475",
        "title": "Suchen Und Finden Im Internet",
        "folder": "suchen-und-finden-im-internet-475"
      },
      {
        "id": "476",
        "title": "Urheberrechte",
        "folder": "urheberrechte-476"
      },
      {
        "id": "1201",
        "title": "Active Directory",
        "folder": "active-directory-1201"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=cloud&t=896"
  },
  "it-security": {
    "slug": "it-security",
    "title": "IT-Security & Datenschutz",
    "category": "Sicherheit, Medien & Gesellschaft",
    "shortDesc": "Schadsoftware (Viren, Trojaner, Ransomware), Phishing, sichere Passwörter, 2FA und Backups.",
    "longDesc": "Informationssicherheit schützt Systeme, Netzwerke und Daten vor unbefugtem Zugriff, Diebstahl und Manipulation. Ein verantwortungsbewusster Umgang mit Passwörtern, Backups und Vorsicht bei verdächtigen Links sind die wichtigsten Schutzmaßnahmen.",
    "keyPoints": [
      "Schadsoftware (Malware): Computerviren (vervielfältigen sich), Würmer (verbreiten sich über Netze), Trojaner (tarnen sich als nützliche Programme), Ransomware (erpresst durch Verschlüsselung)",
      "Phishing: Gefälschte E-Mails oder Webseiten, die versuchen, Zugangsdaten oder Kreditkarteninformationen abzugreifen",
      "Sichere Passwörter: Mindestens 12 Zeichen, Kombination aus Groß-/Kleinbuchstaben, Ziffern und Sonderzeichen; keine Wörterbuchwörter oder Namen",
      "Zwei-Faktor-Authentifizierung (2FA): Kombination aus zwei Faktoren (z. B. Passwort + SMS/App-Code) für maximalen Kontoschutz",
      "3-2-1-Backup-Regel: 3 Kopien der Daten, auf 2 verschiedenen Speichermedien, 1 Kopie extern an einem anderen Ort aufbewahren",
      "Datenschutz (DSGVO): Recht auf informationelle Selbstbestimmung und Schutz personenbezogener Daten"
    ],
    "exercises": [
      {
        "id": "474",
        "title": "Sicherheit Im Umgang Mit Dem Computer",
        "folder": "sicherheit-im-umgang-mit-dem-computer-474"
      },
      {
        "id": "1229",
        "title": "Computerviren",
        "folder": "computerviren-1229"
      },
      {
        "id": "1323",
        "title": "Trojaner",
        "folder": "trojaner-1323"
      },
      {
        "id": "1213",
        "title": "Backups",
        "folder": "backups-1213"
      },
      {
        "id": "1253",
        "title": "Firewall",
        "folder": "firewall-1253"
      },
      {
        "id": "1255",
        "title": "Fotomontagen",
        "folder": "fotomontagen-1255"
      },
      {
        "id": "1252",
        "title": "Fake News",
        "folder": "fake-news-1252"
      },
      {
        "id": "1391",
        "title": "Passwörter",
        "folder": "passworter-1391"
      },
      {
        "id": "1362",
        "title": "Computerwurm",
        "folder": "computerwurm-1362"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=it+security&t=896"
  },
  "soziale-netzwerke": {
    "slug": "soziale-netzwerke",
    "title": "Soziale Netzwerke & Messenger",
    "category": "Sicherheit, Medien & Gesellschaft",
    "shortDesc": "Social Media (Instagram, TikTok, YouTube), Messenger (WhatsApp), Privatsphäre und Cybermobbing.",
    "longDesc": "Soziale Medien prägen die Kommunikation, Informationsbeschaffung und Unterhaltung von Milliarden Menschen. Sie bieten enorme Chancen zur Vernetzung, erfordern jedoch kritisches Bewusstsein für Algorithmen, Datenschutz, Fake News und Cybermobbing.",
    "keyPoints": [
      "Plattformen & Dienste: WhatsApp, Signal, Instagram, TikTok, YouTube, Snapchat, BeReal",
      "Privatsphäre-Einstellungen: Profile auf \"Privat\" stellen, Standortfreigabe deaktivieren, Sichtbarkeit von Beiträgen einschränken",
      "Recht am eigenen Bild & Urheberrecht: Fotos anderer Personen dürfen nicht ohne deren ausdrückliche Zustimmung veröffentlicht werden",
      "Cybermobbing: Gezieltes Beleidigen, Bloßstellen oder Ausgrenzen im Internet – Sofortmaßnahmen: Beweise sichern (Screenshots), Blockieren, Vertrauenspersonen einbeziehen",
      "Algorithmen & Filterblasen: Plattformen zeigen Inhalte, die maximale Verweildauer erzeugen, wodurch einseitige Sichtweisen verstärkt werden können"
    ],
    "exercises": [
      {
        "id": "477",
        "title": "Soziale Netzwerke",
        "folder": "soziale-netzwerke-477"
      },
      {
        "id": "825",
        "title": "Youtube",
        "folder": "youtube-825"
      },
      {
        "id": "826",
        "title": "Facebook",
        "folder": "facebook-826"
      },
      {
        "id": "827",
        "title": "Instagram",
        "folder": "instagram-827"
      },
      {
        "id": "828",
        "title": "Snapchat",
        "folder": "snapchat-828"
      },
      {
        "id": "829",
        "title": "Tiktok",
        "folder": "tiktok-829"
      },
      {
        "id": "830",
        "title": "Whatsapp",
        "folder": "whatsapp-830"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=social+media&t=896"
  },
  "medien-und-gesundheit": {
    "slug": "medien-und-gesundheit",
    "title": "Medien & Gesundheit",
    "category": "Sicherheit, Medien & Gesellschaft",
    "shortDesc": "Ergonomie am Bildschirm, Blaulicht, Medienkonsum, Schlafhygiene und Digital Detox.",
    "longDesc": "Die dauerhafte Nutzung digitaler Geräte beeinflusst die körperliche und psychische Gesundheit. Ergonomische Arbeitsplätze, regelmäßige Bildschirmpausen und ein bewusster Umgang mit der Bildschirmzeit fördern das Wohlbefinden.",
    "keyPoints": [
      "Ergonomie am Schreibtisch: Aufrechte Sitzhaltung, Oberarme und Oberschenkel im 90°-Winkel, Monitor auf Augenhöhe ca. 50–70 cm entfernt",
      "20-20-20-Regel für die Augen: Alle 20 Minuten für 20 Sekunden auf einen Punkt in 20 Fuß Entfernung (ca. 6 Meter) schauen",
      "Blaulicht & Schlaf: Blaulicht von Displays hemmt die Ausschüttung des Schlafhormons Melatonin; mind. 1 Stunde vor dem Schlafen Bildschirme meiden",
      "Digital Detox: Bewusste medienfreie Phasen einlegen, Push-Benachrichtigungen reduzieren"
    ],
    "exercises": [
      {
        "id": "1267",
        "title": "Handysucht",
        "folder": "handysucht-1267"
      },
      {
        "id": "1121",
        "title": "Computerspielsucht",
        "folder": "computerspielsucht-1121"
      },
      {
        "id": "678",
        "title": "Computer Und Gesundheit",
        "folder": "computer-und-gesundheit-2-678"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=medienkompetenz&t=896"
  },
  "persoenlichkeiten-der-it": {
    "slug": "persoenlichkeiten-der-it",
    "title": "Persönlichkeiten der IT",
    "category": "Sicherheit, Medien & Gesellschaft",
    "shortDesc": "Pioniere der Computergeschichte: Alan Turing, Ada Lovelace, Bill Gates, Steve Jobs, Linus Torvalds uvm.",
    "longDesc": "Hinter den Technologien, die unseren Alltag bestimmen, stehen visionäre Denker, Mathematiker und Erfinder. Ihre Entdeckungen haben das moderne Informationszeitalter begründet.",
    "keyPoints": [
      "Ada Lovelace (1815–1852): Verfasste den ersten Algorithmus für die mechanische Rechenmaschine von Charles Babbage",
      "Alan Turing (1912–1954): Turing-Maschine, theoretische Grundlagen der Informatik, Knackung der Enigma-Verschlüsselung",
      "Bill Gates & Paul Allen: Gründer von Microsoft (MS-DOS, Windows), brachten den PC in jedes Büro und jedes Zuhause",
      "Steve Jobs & Steve Wozniak: Gründer von Apple (Apple II, Macintosh, iPhone), Revolution von GUI und Smartphones",
      "Tim Berners-Lee: Erfinder des World Wide Web (HTML, HTTP, URLs) am CERN im Jahr 1989",
      "Linus Torvalds: Entwickler des Linux-Kernels und des Versionskontrollsystems Git"
    ],
    "exercises": [
      {
        "id": "1216",
        "title": "Bill Gates",
        "folder": "bill-gates-1216"
      },
      {
        "id": "1316",
        "title": "Steve Jobs",
        "folder": "steve-jobs-1316"
      },
      {
        "id": "1383",
        "title": "Larry Page",
        "folder": "larry-page-1383"
      },
      {
        "id": "1387",
        "title": "Mark Zuckerberg",
        "folder": "mark-zuckerberg-1387"
      },
      {
        "id": "3614",
        "title": "Alan Turing",
        "folder": "alan-turing-3614"
      },
      {
        "id": "3606",
        "title": "Ada Lovelace",
        "folder": "ada-lovelace-3606"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=informatik+geschichte&t=896"
  },
  "programmiersprachen": {
    "slug": "programmiersprachen",
    "title": "Algorithmen & Programmieren",
    "category": "Programmierung & Webentwicklung",
    "shortDesc": "Algorithmen, Flussdiagramme, Variablen, Schleifen, Verzweigungen (If/Else) und Programmiersprachen.",
    "longDesc": "Ein Algorithmus ist eine eindeutige, schrittweise Handlungsanweisung zur Lösung eines Problems. Programmieren bedeutet, diese Anweisungen in einer Sprache zu formulieren, die der Computer ausführen kann.",
    "keyPoints": [
      "Eigenschaften eines Algorithmus: Eindeutigkeit, Ausführbarkeit, Endlichkeit (Terminierung) und Allgemeingültigkeit",
      "Grundbausteine der Programmierung: Sequenz (Schritt für Schritt), Verzweigung (Wenn-Dann-Sonst / If-Else), Schleife (Wiederholung / For/While)",
      "Variablen: Benannte Speicherplätze für Werte (z. B. Zahlen, Text, Wahrheitswerte)",
      "Visuelle Programmiersprachen: Scratch, Blockly – ideal für den spielerischen Einstieg mit Bausteinen",
      "Textbasierte Sprachen: Python (einfache Syntax, KI, Datenanalyse), JavaScript (interaktives Web), C++ / Java (System- und App-Entwicklung)"
    ],
    "exercises": [
      {
        "id": "303",
        "title": "Algorithmen Und Programmiersprachen",
        "folder": "algorithmen-und-programmiersprachen-303"
      },
      {
        "id": "3124",
        "title": "Bilder Und Videos Mit Html",
        "folder": "bilder-und-videos-mit-html-3124"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=programmieren&t=896"
  },
  "html-grundkurs": {
    "slug": "html-grundkurs",
    "title": "HTML & Webseitenbau",
    "category": "Programmierung & Webentwicklung",
    "shortDesc": "HTML-Tags, Webseitenstruktur, Überschriften, Links, Bilder, Tabellen und Einbettungen.",
    "longDesc": "HTML (HyperText Markup Language) ist die universelle Auszeichnungssprache für Webseiten im Internet. Sie legt die semantische Struktur von Texten, Bildern, Formularen und Links fest.",
    "keyPoints": [
      "Grundgerüst: <!DOCTYPE html>, <html>, <head> (Metadaten, Titel), <body> (sichtbarer Inhalt)",
      "Tags & Attribute: Elemente bestehen meist aus öffnendem <tag> und schließendem </tag> (z. B. <p>Absatz</p>)",
      "Überschriften: <h1> (wichtigste Überschrift) bis <h6> (Unterüberschrift)",
      "Verlinkungen: <a href=\"https://...\">Linktext</a> | Bilder: <img src=\"bild.jpg\" alt=\"Beschreibung\" />",
      "Listen: <ul> (ungeordnet mit Aufzählungspunkten) und <ol> (nummeriert mit Ziffern)",
      "Zusammenspiel im Web: HTML (Struktur), CSS (Design & Farben), JavaScript (Interaktivität)"
    ],
    "exercises": [
      {
        "id": "3124",
        "title": "Bilder Und Videos Mit Html",
        "folder": "bilder-und-videos-mit-html-3124"
      },
      {
        "id": "468",
        "title": "Datentrager",
        "folder": "datentrager-468"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=html&t=896"
  },
  "arbeitsheft-digitale-grundbildung": {
    "slug": "arbeitsheft-digitale-grundbildung",
    "title": "Arbeitsheft Digitale Grundbildung",
    "category": "Arbeitsheft & Spezialthemen",
    "shortDesc": "Alle 15 interaktiven Erklärvideos und Übungsmodule zum Arbeitsheft \"Digitale Grundbildung\".",
    "longDesc": "Dieses Modul bündelt alle Lernvideos und Übungen, die exakt auf das Arbeitsheft \"Digitale Grundbildung\" abgestimmt sind. Es deckt den kompletten Lehrplan von Hardware über Sicherheit bis hin zu Mediengestaltung ab.",
    "keyPoints": [
      "Komplette Begleitung zum Arbeitsheft für Schüler und Lehrpersonen",
      "Schwerpunkte: Orientierung am PC, Dateiverwaltung, Internet-Recherche, Sicherheit und Urheberrecht",
      "15 direkt aufeinander aufbauende interaktive H5P-Einheiten"
    ],
    "exercises": [
      {
        "id": "354",
        "title": "Geschichte Des Computers",
        "folder": "geschichte-des-computers-354"
      },
      {
        "id": "306",
        "title": "Grundlagen Der Informatik Hardware",
        "folder": "grundlagen-der-informatik-hardware-306"
      },
      {
        "id": "312",
        "title": "Grundlagen Der Informatik Software",
        "folder": "grundlagen-der-informatik-software-312"
      },
      {
        "id": "303",
        "title": "Algorithmen Und Programmiersprachen",
        "folder": "algorithmen-und-programmiersprachen-303"
      },
      {
        "id": "468",
        "title": "Datentrager",
        "folder": "datentrager-468"
      },
      {
        "id": "470",
        "title": "Netzwerke",
        "folder": "netzwerke-470"
      },
      {
        "id": "474",
        "title": "Sicherheit Im Umgang Mit Dem Computer",
        "folder": "sicherheit-im-umgang-mit-dem-computer-474"
      },
      {
        "id": "285",
        "title": "Die Geschichte Des Internets Interaktives Video",
        "folder": "die-geschichte-des-internets-interaktives-video-285"
      },
      {
        "id": "286",
        "title": "Geschichte Des Internets Zeitleiste",
        "folder": "geschichte-des-internets-zeitleiste-286"
      },
      {
        "id": "288",
        "title": "Zusatzaufgaben Zur Geschichte Des Internets",
        "folder": "zusatzaufgaben-zur-geschichte-des-internets-288"
      },
      {
        "id": "302",
        "title": "E Mail",
        "folder": "e-mail-302"
      },
      {
        "id": "473",
        "title": "Internetbrowser",
        "folder": "internetbrowser-2-473"
      },
      {
        "id": "475",
        "title": "Suchen Und Finden Im Internet",
        "folder": "suchen-und-finden-im-internet-475"
      },
      {
        "id": "477",
        "title": "Soziale Netzwerke",
        "folder": "soziale-netzwerke-477"
      },
      {
        "id": "476",
        "title": "Urheberrechte",
        "folder": "urheberrechte-476"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=digitale+grundbildung&t=896"
  },
  "escape-room-informatik": {
    "slug": "escape-room-informatik",
    "title": "Escape Room Informatik",
    "category": "Arbeitsheft & Spezialthemen",
    "shortDesc": "Löse knifflige Informatik-Rätsel, entschlüssele Binärcodes und entkomme aus dem digitalen Escape Room!",
    "longDesc": "Ein interaktiver digitaler Escape Room für das Fach Informatik. Wende dein Wissen über Netzwerke, Hardware, Passwörter und Binärcodes an, um die Rätselstationen zu knacken.",
    "keyPoints": [
      "Halte Stift und Papier für Zwischencodes und Notizen bereit",
      "Kombiniere Fachwissen aus IT-Security, Netzwerken und Hardware",
      "Ideal zur spielerischen Wiederholung und Gruppenarbeit im Unterricht"
    ],
    "exercises": [
      {
        "id": "474",
        "title": "Sicherheit Im Umgang Mit Dem Computer",
        "folder": "sicherheit-im-umgang-mit-dem-computer-474"
      },
      {
        "id": "470",
        "title": "Netzwerke",
        "folder": "netzwerke-470"
      },
      {
        "id": "306",
        "title": "Grundlagen Der Informatik Hardware",
        "folder": "grundlagen-der-informatik-hardware-306"
      },
      {
        "id": "1229",
        "title": "Computerviren",
        "folder": "computerviren-1229"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=escape+room+informatik&t=896"
  },
  "ms-word-grundkurs": {
    "slug": "ms-word-grundkurs",
    "title": "MS Word Grundkurs & Textverarbeitung",
    "category": "Software & Systeme",
    "shortDesc": "Erklärvideos und interaktive Übungen von Menüs, Formatierung und Tabellen bis zu Tabstopps und Sonderzeichen.",
    "longDesc": "Der MS Word Grundkurs führt Schritt für Schritt in professionelle Textverarbeitung ein. Von den Grundlagen der Menüführung über Zeichen- und Absatzformatierung, das Einfügen von Grafiken und Tabellen bis hin zu Tabstopps und Überarbeitungsfunktionen.",
    "keyPoints": [
      "Menüband (Ribbon): Registerkarten (Start, Einfügen, Layout, Überprüfen) und Schnellzugriffsleiste",
      "Grundfunktionen: Speichern (Strg+S), Rückgängig machen (Strg+Z), Wiederholen (Strg+Y), Text markieren",
      "Zwischenablage: Ausschneiden (Strg+X), Kopieren (Strg+C), Einfügen (Strg+V)",
      "Zeichenformatierung: Schriftart, Schriftgrad, Schriftschnitte (Fett Strg+Shift+F / Strg+B, Kursiv Strg+Shift+K / Strg+I, Unterstrichen Strg+Shift+U / Strg+U), Textfarben",
      "Absatzformatierung: Ausrichtung (linksbündig, zentriert, rechtsbündig, Blocksatz), Zeilenabstand, Aufzählungszeichen und Nummerierung",
      "Seitenlayout: Seitenränder, Ausrichtung (Hochformat / Querformat), Umbrüche, Kopf- und Fußzeilen",
      "Objekte & Tabellen: Bilder positionieren, Zeilen/Spalten in Tabellen einfügen, Tabellenformatvorlagen",
      "Tabstopps: Linksbündige, rechtsbündige, zentrierte und Dezimal-Tabstopps für saubere Textausrichtung"
    ],
    "exercises": [
      {
        "id": "969",
        "title": "Ms Word Menus Und Schaltflachen",
        "folder": "ms-word-menus-und-schaltflachen-969"
      },
      {
        "id": "970",
        "title": "Ms Word Speichern Rückgängig Machen Markieren",
        "folder": "ms-word-speichern-ruckgangig-machen-markieren-970"
      },
      {
        "id": "971",
        "title": "Ms Word Kopieren Ausschneiden Einfügen",
        "folder": "ms-word-kopieren-ausschneiden-einfugen-971"
      },
      {
        "id": "972",
        "title": "Ms Word Texte Überarbeiten Und Überprüfen",
        "folder": "ms-word-texte-uberarbeiten-und-uberprufen-972"
      },
      {
        "id": "973",
        "title": "Ms Word Zeichen Formatieren",
        "folder": "ms-word-zeichen-formatieren-973"
      },
      {
        "id": "974",
        "title": "Ms Word Absätze Formatieren",
        "folder": "ms-word-absatze-formatieren-974"
      },
      {
        "id": "975",
        "title": "Ms Word Seiten Formatieren",
        "folder": "ms-word-seiten-formatieren-975"
      },
      {
        "id": "976",
        "title": "Ms Word Bilder Einfügen",
        "folder": "ms-word-bilder-einfugen-976"
      },
      {
        "id": "977",
        "title": "Ms Word Tabstopps",
        "folder": "ms-word-tabstopps-977"
      },
      {
        "id": "978",
        "title": "Ms Word Tabellen",
        "folder": "ms-word-tabellen-978"
      },
      {
        "id": "979",
        "title": "Ms Word Symbole Und Sonderzeichen",
        "folder": "ms-word-symbole-und-sonderzeichen-979"
      },
      {
        "id": "1320",
        "title": "Textverarbeitungsprogramme",
        "folder": "textverarbeitungsprogramme-1320"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=word&t=3752"
  }
};
