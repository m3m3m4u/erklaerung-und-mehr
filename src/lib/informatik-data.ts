export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface TopicAttachment {
  title: string;
  filename: string;
  exerciseId?: string;
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
  attachments?: TopicAttachment[];
}

export const informatikCategories = [
  "Hardware & Digitale Grundlagen",
  "Software, Betriebssysteme & Office",
  "Netzwerke, Internet & Cloud",
  "IT-Sicherheit, Datenschutz & Kryptographie",
  "Algorithmen, Programmierung & KI",
  "Webentwicklung & Mediengestaltung",
  "Digitale Gesellschaft, Persönlichkeiten & Rätsel"
];

export const informatikTopics: Record<string, InformatikTopic> = {
  "hardware": {
    "slug": "hardware",
    "title": "Hardware & Komponenten",
    "category": "Hardware & Digitale Grundlagen",
    "shortDesc": "CPU, RAM, SSD/HDD, Mainboard, Grafikkarten, Schnittstellen, Laserdrucker und mechanische Tastaturen.",
    "longDesc": "Hardware umfasst alle physischen, anfassbaren Bauteile eines Computersystems. Vom Hauptprozessor (CPU) als Rechenzentrum über den schnellen Arbeitsspeicher (RAM) bis hin zu Massenspeichern (SSD/HDD) und externen Geräten arbeiten alle Komponenten im präzisen Zusammenspiel.",
    "keyPoints": [
      "Prozessor (CPU): Führt Rechenoperationen und Programmbefehle im Takt (GHz) aus; Mehrkernprozessoren für Multithreading",
      "Arbeitsspeicher (RAM): Schneller, flüchtiger Kurzzeitspeicher; verliert alle Daten beim Ausschalten",
      "Massenspeicher (SSD vs. HDD): Dauerhafter Speicher; SSDs nutzen Flash-Speicher ohne bewegliche Teile und sind viel schneller als mechanische Festplatten",
      "Hauptplatine (Mainboard): Verbindet alle Komponenten (CPU, RAM, GPU, Schnittstellen) über Bus-Systeme miteinander",
      "Eingabe- und Ausgabegeräte: Mechanische Tastaturen mit Einzelschaltern, Laserdrucker mit Toner und Belichtungstrommel, Webcams und Monitore"
    ],
    "exercises": [
      {
        "id": "306",
        "title": "Grundlagen der Informatik Hardware",
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
        "title": "CPU",
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
      },
      {
        "id": "2537",
        "title": "Wie funktioniert ein Laserdrucker",
        "folder": "wie-funktioniert-ein-laserdrucker-2537"
      },
      {
        "id": "2539",
        "title": "Wie funktioniert eine mechanische Tastatur",
        "folder": "wie-funktioniert-ein-mechanische-tastatur-2539"
      },
      {
        "id": "2561",
        "title": "Wie funktioniert ein Solid-State-Laufwerk (SSD)",
        "folder": "wie-funktioniert-ein-solid-state-laufwerk-ssd-2561"
      },
      {
        "id": "668",
        "title": "Kurs Grundlagen der Informatik Hardware",
        "folder": "kurs-grundlagen-der-informatik-hardware-668"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=hardware&t=896"
  },
  "digitale-grundlagen": {
    "slug": "digitale-grundlagen",
    "title": "Digitale Grundlagen & Binärcode",
    "category": "Hardware & Digitale Grundlagen",
    "shortDesc": "Das EVA-Prinzip, Binärzahlen (0 und 1), Bits & Bytes, Tastaturorientierung und Geschichte des Computers.",
    "longDesc": "Alle digitalen Geräte arbeiten nach universellen Grundprinzipien. Das EVA-Prinzip beschreibt den Weg von Nutzerdaten bis zur Ausgabe, während Binärcodes (Bits und Bytes) die elementare Sprache aller Computer darstellen.",
    "keyPoints": [
      "EVA-Prinzip: Eingabe (Tastatur/Maus) ➔ Verarbeitung (CPU/RAM) ➔ Ausgabe (Monitor/Drucker)",
      "Binärcode: Kleinste Informationseinheit ist das Bit (Zustände 0 = Strom aus, 1 = Strom an); 8 Bits bilden 1 Byte (256 Zustände)",
      "Größeneinheiten: 1 KB = 1024 Bytes | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB",
      "Geschichte des Computers: Von mechanischen Rechenmaschinen über Konrad Zuses Z3 und Röhrenrechner bis zum modernen Mikrochip",
      "Zehnfingersystem: Ergonomisches Schreiben auf der Tastatur über die Grundreihe (ASDF - JKLÖ)"
    ],
    "exercises": [
      {
        "id": "354",
        "title": "Geschichte des Computers",
        "folder": "geschichte-des-computers-354"
      },
      {
        "id": "5393",
        "title": "Geschichte des Computers",
        "folder": "geschichte-des-computers-2-5393"
      },
      {
        "id": "667",
        "title": "Kurs Geschichte des Computers",
        "folder": "kurs-geschichte-des-computers-667"
      },
      {
        "id": "670",
        "title": "Kurs Orientierung an der Tastatur",
        "folder": "kurs-orientierung-an-der-tastatur-670"
      },
      {
        "id": "471",
        "title": "Orientierung an der Tastatur",
        "folder": "orientierung-an-der-tastatur-471"
      },
      {
        "id": "8003",
        "title": "Binärcode: Strom an und aus",
        "folder": "binaercode-und-die-sprache-von-strom-an-und-aus"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=digitale+grundbildung&t=896"
  },
  "datenspeicherung-und-medien": {
    "slug": "datenspeicherung-und-medien",
    "title": "Datenspeicherung & Massenspeicher",
    "category": "Hardware & Digitale Grundlagen",
    "shortDesc": "Magnetische, optische und elektronische Speichermedien, Datenwiederherstellung und Backup-Strategien.",
    "longDesc": "Daten müssen sicher und dauerhaft gespeichert werden. Von magnetischen Festplatten und optischen Medien (CD/DVD/Blu-ray) bis hin zu Flash-Speichern und professionellen NAS-Backup-Systemen erfordert digitaler Datenerhalt durchdachte Strategien.",
    "keyPoints": [
      "Magnetische Speicherung: Festplatten (HDDs) und Magnetbänder speichern Daten durch Ausrichtung magnetischer Domänen",
      "Optische Speicherung: CDs, DVDs und Blu-rays nutzen mikroskopische Vertiefungen (Pits und Lands), die per Laser abgetastet werden",
      "Flash-Speicher: SSDs, USB-Sticks und SD-Karten speichern Daten in Floating-Gate- oder Charge-Trap-Transistoren ohne bewegliche Teile",
      "Datenwiederherstellung: Gelöschte Dateien werden oft erst überschrieben; Recovery-Tools rekonstruieren Dateisysteme aus Rohdaten",
      "3-2-1-Backup-Regel: 3 Kopien der Daten auf 2 verschiedenen Medientypen, davon 1 Kopie an einem externen Ort (Offsite/Cloud)"
    ],
    "exercises": [
      {
        "id": "468",
        "title": "Datenträger",
        "folder": "datentrager-468"
      },
      {
        "id": "5307",
        "title": "Magnetische Datenspeicherung",
        "folder": "magnetische-datenspeicherung-5307"
      },
      {
        "id": "5310",
        "title": "Optische Datenspeicherung",
        "folder": "optische-datenspeicherung-5310"
      },
      {
        "id": "7121",
        "title": "Wie funktioniert die Datenwiederherstellung",
        "folder": "wie-funktioniert-die-datenwiederherstellung"
      },
      {
        "id": "8015",
        "title": "Backup Strategien mit NAS und Offsite Lösungen",
        "folder": "backup-strategien-mit-nas-und-offsite-loesungen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=datenspeicherung&t=896"
  },
  "arbeitsheft-digitale-grundbildung-hardware": {
    "slug": "arbeitsheft-digitale-grundbildung-hardware",
    "title": "Arbeitsheft: Hardware, Systeme & Netze",
    "category": "Hardware & Digitale Grundlagen",
    "shortDesc": "Begleitende interaktive Aufgaben zur Geschichte des Internets, E-Mail-Kommunikation und Online-Recherche.",
    "longDesc": "Interaktive Übungsmodule zur Vertiefung und Festigung der Lerninhalte aus dem Arbeitsheft 'Digitale Grundbildung'. Sie verbinden Medienkompetenz mit praktischen Anwendungsaufgaben zu Rechnern, Netzen und Internetdiensten.",
    "keyPoints": [
      "Meilensteine des Internets: Vom ARPANET über TCP/IP bis zur Erfindung des World Wide Web durch Tim Berners-Lee",
      "E-Mail-Aufbau: Header, Empfänger (An, CC, BCC), Betreffzeile und Dateianhänge richtig nutzen",
      "Browser & Navigation: Adressleiste, Lesezeichen, Tabs und sichere Verbindungen (HTTPS)",
      "Gezielte Online-Recherche: Suchbegriffe kombinieren, Quellen kritisch prüfen und Suchoperatoren einsetzen"
    ],
    "exercises": [
      {
        "id": "285",
        "title": "Die Geschichte des Internets Interaktives Video",
        "folder": "die-geschichte-des-internets-interaktives-video-285"
      },
      {
        "id": "286",
        "title": "Geschichte des Internets Zeitleiste",
        "folder": "geschichte-des-internets-zeitleiste-286"
      },
      {
        "id": "288",
        "title": "Zusatzaufgaben zur Geschichte des Internets",
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
        "title": "Suchen und Finden im Internet",
        "folder": "suchen-und-finden-im-internet-475"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=arbeitsheft+digitale+grundbildung&t=896"
  },
  "betriebssysteme": {
    "slug": "betriebssysteme",
    "title": "Betriebssysteme & Systemarchitektur",
    "category": "Software, Betriebssysteme & Office",
    "shortDesc": "Windows, macOS, Linux, Android, iOS, MS-DOS sowie das Zusammenspiel von Kernel, Shell und GUI.",
    "longDesc": "Das Betriebssystem (OS) ist die fundamentale Schnittstelle zwischen Hardware und Anwendersoftware. Es verwaltet Speicher, Prozesse, Dateien und Geräte. Vom Unix-basierten Linux über mobile Betriebssysteme bis zu Windows prägen verschiedene Architekturen die digitale Welt.",
    "keyPoints": [
      "Kernel: Herzstück des Betriebssystems; steuert CPU-Zuteilung, RAM-Verwaltung und direkten Hardwarezugriff",
      "Shell & CLI: Textbasierte Befehlszeile zur direkten Steuerung und Skripterstellung (z. B. Bash, PowerShell)",
      "Grafische Benutzeroberfläche (GUI): Fenster, Menüs, Icons und Zeiger ermöglichen intuitive Bedienung",
      "Linux: Open-Source-Betriebssystem, dominiert Server, Supercomputer, Router und die Basis von Android",
      "Mobile Systeme: iOS (geschlossenes Ökosystem von Apple) vs. Android (Open-Source-Basis mit Google-Diensten)"
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
        "title": "MS-DOS & Kommandozeile",
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
      },
      {
        "id": "8014",
        "title": "Kernel, Shell und grafische Benutzeroberfläche (GUI)",
        "folder": "unterschiede-zwischen-kernel-und-shell-und-gui"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=betriebssysteme&t=896"
  },
  "sonstige-software": {
    "slug": "sonstige-software",
    "title": "Softwarearten, BIOS & Open Source",
    "category": "Software, Betriebssysteme & Office",
    "shortDesc": "Systemsoftware, Anwendungssoftware, BIOS/UEFI, Open-Source-Lizenzen und Spieleentwicklung.",
    "longDesc": "Software steuert jeden Computerprozess. Beim Starten führt das BIOS/UEFI den Hardware-Selbsttest aus, bevor das System bootet. Lizenzmodelle reichen von proprietärer Bezahlsoftware bis zu freier Open-Source-Software, deren Quellcode weltweit geteilt und weiterentwickelt wird.",
    "keyPoints": [
      "BIOS / UEFI: Firmware auf dem Mainboard; führt beim Einschalten den Power-On Self-Test (POST) durch und initialisiert Bootmedien",
      "Open-Source-Software: Quelltext ist öffentlich zugänglich (z. B. GPL, MIT-Lizenz); fördert Transparenz, Sicherheit und Zusammenarbeit",
      "Proprietäre Software: Quellcode ist Geschäftsgeheimnis; Nutzung wird über Endnutzer-Lizenzverträge (EULA) geregelt",
      "Computerspiele als Software: Kombination aus Game-Engine, Physik-Simulation, KI-Gegnern, Grafikrendering und Soundarchitektur"
    ],
    "exercises": [
      {
        "id": "312",
        "title": "Grundlagen der Informatik Software",
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
      },
      {
        "id": "669",
        "title": "Kurs Grundlagen der Informatik Software",
        "folder": "kurs-grundlagen-der-informatik-software-669"
      },
      {
        "id": "8013",
        "title": "Open Source und die Philosophie offener Software",
        "folder": "open-source-und-die-philosophie-offener-software"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=software&t=896"
  },
  "bueroprogramme": {
    "slug": "bueroprogramme",
    "title": "Büroprogramme & Tabellenkalkulation",
    "category": "Software, Betriebssysteme & Office",
    "shortDesc": "Textverarbeitung, Excel-Formeln, Präsentationen, relationale Datenbanken und PDF-Standards.",
    "longDesc": "Bürosoftware bildet das Rückgrat der modernen Arbeits- und Schulwelt. Sie reicht von Textverarbeitung und dynamischen Tabellenkalkulationen über Präsentationswerkzeuge bis hin zu relationalen Datenbanken und standardisierten PDF-Dokumenten.",
    "keyPoints": [
      "Tabellenkalkulation (Excel / Calc): Zellen, Zeilen, Spalten; Rechnen mit Formeln (=SUMME, =MITTELWERT, =WENN) und Diagrammerstellung",
      "Textverarbeitung: Formatierung von Fließtext, Formatvorlagen, automatische Inhaltsverzeichnisse und Fußnoten",
      "Präsentationen (PowerPoint / Impress): Folienmaster, visuelle Strukturierung und Medieneinbindung",
      "Datenbankprogramme: Tabellen mit Primär- und Fremdschlüsseln zur Vermeidung von Redundanzen; strukturierte SQL-Abfragen",
      "PDF-Format (Portable Document Format): Plattformunabhängiges Dateiformat, das Layout, Schriften und Grafiken exakt bewahrt"
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
        "title": "Präsentationsprogramme",
        "folder": "prasentationsprogramme-1305"
      },
      {
        "id": "1236",
        "title": "Datenbankprogramme",
        "folder": "datenbankprogramme-1236"
      },
      {
        "id": "1302",
        "title": "PDF-Dateiformat",
        "folder": "pdf-1302"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=excel+word&t=896"
  },
  "ms-word-grundkurs": {
    "slug": "ms-word-grundkurs",
    "title": "MS Word Grundkurs & Textverarbeitung",
    "category": "Software, Betriebssysteme & Office",
    "shortDesc": "Umfassender 11-teiliger Grundkurs: Menüs, Formatierung, Tabellen, Bilder, Tabstopps und Sonderzeichen.",
    "longDesc": "Schritt für Schritt zum Textprofi: Dieser strukturierte Grundkurs führt durch alle wesentlichen Werkzeuge der Textverarbeitung mit Microsoft Word – von ersten Formatierungen über Tabellenlayouts bis zur typografischen Gestaltung.",
    "keyPoints": [
      "Menüband & Symbolleisten: Schneller Zugriff auf Schriftarten, Absatzformate, Layouts und Ansichten",
      "Zwischenablage: Ausschneiden (Strg+X), Kopieren (Strg+C) und Einfügen (Strg+V) als universelle Tastenkombinationen",
      "Absatz- und Zeichenformatierung: Zeilenabstand, Ausrichtung (links, zentriert, Blocksatz), Einzüge und Aufzählungen",
      "Seitenlayout: Seitenränder, Hoch- und Querformat, Kopf- und Fußzeilen mit automatischer Seitennummerierung",
      "Tabellen & Tabstopps: Tabellarische Anordnung von Inhalten, Spaltenbreiten anpassen und Tabstopp-Arten (links, rechts, dezimal)"
    ],
    "exercises": [
      {
        "id": "969",
        "title": "MS Word - Menüs und Schaltflächen",
        "folder": "ms-word-menus-und-schaltflachen-969"
      },
      {
        "id": "970",
        "title": "MS Word speichern Rückgängig Machen Markieren",
        "folder": "ms-word-speichern-ruckgangig-machen-markieren-970"
      },
      {
        "id": "971",
        "title": "MS Word kopieren ausschneiden einfügen",
        "folder": "ms-word-kopieren-ausschneiden-einfugen-971"
      },
      {
        "id": "972",
        "title": "MS Word Texte überarbeiten und überprüfen",
        "folder": "ms-word-texte-uberarbeiten-und-uberprufen-972"
      },
      {
        "id": "973",
        "title": "MS Word Zeichen formatieren",
        "folder": "ms-word-zeichen-formatieren-973"
      },
      {
        "id": "974",
        "title": "MS Word Absätze formatieren",
        "folder": "ms-word-absatze-formatieren-974"
      },
      {
        "id": "975",
        "title": "MS Word Seiten formatieren",
        "folder": "ms-word-seiten-formatieren-975"
      },
      {
        "id": "976",
        "title": "MS Word Bilder einfügen",
        "folder": "ms-word-bilder-einfugen-976"
      },
      {
        "id": "977",
        "title": "MS Word Tabstopps",
        "folder": "ms-word-tabstopps-977"
      },
      {
        "id": "978",
        "title": "MS Word Tabellen",
        "folder": "ms-word-tabellen-978"
      },
      {
        "id": "979",
        "title": "MS Word Symbole und Sonderzeichen",
        "folder": "ms-word-symbole-und-sonderzeichen-979"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=word+grundkurs&t=896"
  },
  "netzwerke": {
    "slug": "netzwerke",
    "title": "Netzwerke, Topologien & WLAN",
    "category": "Netzwerke, Internet & Cloud",
    "shortDesc": "LAN, WLAN, Router, Switches, Netzwerktopologien, IP-Adressen, Subnetze und ADSL.",
    "longDesc": "Netzwerke verbinden Computer zum Austausch von Daten und Ressourcen. Ob kabelgebundenes Ethernet (LAN) oder Funknetzwerk (WLAN): Router leiten Datenpakete über optimale Routen weiter, während IP-Adressen jedes Gerät eindeutig identifizieren.",
    "keyPoints": [
      "Netzwerktopologien: Stern-Topologie (Standard in modernen LANs über Switch), Bus-, Ring- und Mesh-Topologien",
      "Router vs. Switch: Ein Switch verbindet Geräte im lokalen Netzwerk; ein Router verbindet verschiedene Netzwerke (z. B. Heimnetz mit dem Internet)",
      "WLAN (Wi-Fi): Kabellose Datenübertragung über Funkwellen (2,4 GHz und 5 GHz); Verschlüsselung über WPA2 / WPA3",
      "IP-Adresse & Subnetz: IPv4 (32 Bit, z. B. 192.168.0.1) und IPv6 (128 Bit für Milliarden Geräte im Internet der Dinge)",
      "Active Directory & Domain Controller: Zentrale Verwaltung von Benutzerkonten, Rechten und Computern in Unternehmensnetzwerken"
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
      },
      {
        "id": "672",
        "title": "Kurs Netzwerke",
        "folder": "kurs-netzwerke-672"
      },
      {
        "id": "7079",
        "title": "Wie funktioniert das WLAN",
        "folder": "wie-funktioniert-das-wlan"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=netzwerke&t=896"
  },
  "internet-grundlagen": {
    "slug": "internet-grundlagen",
    "title": "Internet-Grundlagen & Protokolle",
    "category": "Netzwerke, Internet & Cloud",
    "shortDesc": "Entwicklung des Internets, TCP/IP, DNS, Suchmaschinen-Crawler und Ranking-Algorithmen.",
    "longDesc": "Das Internet basiert auf dem Schichtenmodell und standardisierten Protokollen. Das Domain Name System (DNS) fungiert als weltweites Adressbuch, während Suchmaschinen mit automatisierten Webcrawlern das Web indexieren und relevante Treffer ranken.",
    "keyPoints": [
      "TCP/IP-Protokollfamilie: TCP zerlegt Daten in Pakete und garantiert fehlerfreie Zustellung; IP adressiert und routet die Pakete",
      "DNS (Domain Name System): Wandelt menschenlesbare Domains (z. B. www.wikipedia.org) in maschinenlesbare IP-Adressen um",
      "Suchmaschinen-Funktionsweise: Webcrawler (Spiders) folgen Links, erstellen einen Index aus Texten und bewerten Relevanz durch Algorithmen",
      "Client-Server-Modell: Der Webbrowser (Client) sendet HTTP-Anfragen an den Webserver, der die angeforderten Seiten zurücksendet"
    ],
    "exercises": [
      {
        "id": "287",
        "title": "Geschichte des Internets",
        "folder": "geschichte-der-internets-bungen-287"
      },
      {
        "id": "671",
        "title": "Kurs Geschichte des Internets",
        "folder": "kurs-geschichte-der-internets-bungen-671"
      },
      {
        "id": "8020",
        "title": "Suchmaschinen: Crawler und Ranking-Algorithmen",
        "folder": "aufbau-und-funktionsweise-von-suchmaschinen"
      },
      {
        "id": "dns",
        "title": "Das Domain Name System als Telefonbuch des Internets",
        "folder": "das-domain-name-system-als-telefonbuch-des-internets"
      },
      {
        "id": "seekabel",
        "title": "Seekabel und die globale Internet-Infrastruktur",
        "folder": "seekabel-und-die-reise-der-daten-durch-den-ozean"
      },
      {
        "id": "wlan",
        "title": "Wie funktioniert das WLAN?",
        "folder": "wie-funktioniert-das-wlan"
      },
      {
        "id": "glasfaser",
        "title": "Glasfaser und optische Datenübertragung",
        "folder": "wie-funktioniert-ein-optisches-kabel-glasfaser"
      },
      {
        "id": "sat-glasfaser",
        "title": "Satelliten- vs. Glasfaser-Internetverbindungen",
        "folder": "vergleich-von-satelliten-und-glasfaser-fuer-internetverbindungen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=internet+protokolle&t=896"
  },
  "browser-und-online-kommunikation": {
    "slug": "browser-und-online-kommunikation",
    "title": "Webbrowser & E-Mail-Kommunikation",
    "category": "Netzwerke, Internet & Cloud",
    "shortDesc": "Browser-Engines, Cookies, Cache, E-Mail-Übertragung, QR-Codes und Recherche-Strategien.",
    "longDesc": "Webbrowser und E-Mail-Programme sind unsere täglichen Eingangstore ins Internet. Sie übersetzen Code in ansprechende Oberflächen und ermöglichen weltweite Kommunikation in Sekundenbruchteilen.",
    "keyPoints": [
      "Browser-Funktionen: Rendering-Engine (Blink, Gecko, WebKit), Tab-Verwaltung, Lesezeichen und Verlauf",
      "Cookies & Cache: Cookies speichern Identifikatoren und Zustände; der Cache beschleunigt wiederholte Aufrufe durch Zwischenspeichern von Dateien",
      "E-Mail-Protokolle: SMTP zum Versenden von Mails; IMAP und POP3 zum Abrufen aus dem Postfach",
      "QR-Code (Quick Response): Zweidimensionaler Barcode mit Fehlerkorrektur (Reed-Solomon); speichert URLs, Texte oder WLAN-Zugangsdaten"
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
      },
      {
        "id": "472",
        "title": "Internetbrowser",
        "folder": "internetbrowser-472"
      },
      {
        "id": "673",
        "title": "Kurs Internetbrowser",
        "folder": "kurs-internetbrowser-673"
      },
      {
        "id": "674",
        "title": "Kurs Suchen und Finden im Internet",
        "folder": "kurs-suchen-und-finden-im-internet-674"
      },
      {
        "id": "7118",
        "title": "Wie funktioniert eine E-Mail-Übertragung",
        "folder": "wie-funktioniert-eine-e-mail-uebertragung"
      },
      {
        "id": "7120",
        "title": "Wie funktioniert ein QR-Code",
        "folder": "wie-funktioniert-ein-qr-code"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=browser+email&t=896"
  },
  "online-zusammenarbeit": {
    "slug": "online-zusammenarbeit",
    "title": "Cloud-Computing & Online-Zusammenarbeit",
    "category": "Netzwerke, Internet & Cloud",
    "shortDesc": "Cloud-Speicher, SaaS, IaaS, PaaS, Rechenzentren, kollaboratives Arbeiten und Urheberrecht online.",
    "longDesc": "Cloud-Computing verlagert Speicher und Rechenleistung in riesige Rechenzentren. Teams können in Echtzeit ortsunabhängig an Dokumenten arbeiten. Dabei müssen Verfügbarkeit, Datenschutz und Urheberrechte stets beachtet werden.",
    "keyPoints": [
      "Cloud-Servicemodelle: IaaS (Infrastruktur wie Server/VMs), PaaS (Plattformen für Entwickler), SaaS (fertige Software wie Microsoft 365, Google Docs)",
      "Vorteile & Risiken: Ortsunabhängiger Zugriff, automatische Backups vs. Abhängigkeit von Internetverbindung, Vendor Lock-in und Datenschutzrisiken",
      "Rechenzentren: Physische Knotenpunkte mit Server-Racks, unterbrechungsfreier Stromversorgung (USV) und immenser Kühlleistung",
      "Urheberrecht im Netz: Digitale Inhalte (Bilder, Texte, Musik) sind urheberrechtlich geschützt; Beachtung von Creative-Commons-Lizenzen"
    ],
    "exercises": [
      {
        "id": "1062",
        "title": "Cloud Computing",
        "folder": "cloud-computing-1062"
      },
      {
        "id": "1056",
        "title": "Cloud Computing: Nachteile und Risiken",
        "folder": "cloud-computing-nachteile-und-risiken-1056"
      },
      {
        "id": "1051",
        "title": "Cloud Computing: Vorteile",
        "folder": "cloud-computing-vorteile-1051"
      },
      {
        "id": "1059",
        "title": "Cloud-Speicher",
        "folder": "cloud-speicher-1059"
      },
      {
        "id": "8019",
        "title": "Rechenzentren & Cloud-Infrastruktur",
        "folder": "urheberrechte-476"
      },
      {
        "id": "476",
        "title": "Urheberrechte",
        "folder": "urheberrechte-476"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=cloud+computing&t=896"
  },
  "it-security": {
    "slug": "it-security",
    "title": "IT-Sicherheit, Viren & Phishing",
    "category": "IT-Sicherheit, Datenschutz & Kryptographie",
    "shortDesc": "Schadsoftware, Trojaner, Computerwürmer, Ransomware, Botnetze, Firewalls, Phishing und Passwörter.",
    "longDesc": "In einer vernetzten Welt ist Cybersicherheit überlebenswichtig. Angreifer nutzen Sicherheitslücken und menschliche Schwachstellen (Social Engineering) aus. Mit Firewalls, sicheren Passwörtern und wachsamen Verhaltensweisen schützen wir Systeme vor Sabotage und Spionage.",
    "keyPoints": [
      "Schadsoftware-Arten: Viren (benötigen Wirtsprogramm), Würmer (verbreiten sich selbstständig im Netz), Trojaner (tarnen sich als nützliche Software)",
      "Ransomware & Botnetze: Erpressungstrojaner verschlüsseln Festplatten; Botnetze steuern gekaperte Rechner für DDoS-Angriffe fern",
      "Phishing: Täuschungsversuche per gefälschter E-Mail oder Website zum Abgreifen sensibler Zugangsdaten",
      "Sichere Passwörter: Mindestens 12–16 Zeichen, Kombination aus Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen; Passwortmanager nutzen",
      "Firewall: Überwacht ein- und ausgehende Datenpakete und blockiert unautorisierte Zugriffe nach definierten Regeln"
    ],
    "exercises": [
      {
        "id": "474",
        "title": "Sicherheit im Umgang mit dem Computer",
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
      },
      {
        "id": "677",
        "title": "Kurs Sicherheit im Umgang mit dem Computer",
        "folder": "kurs-sicherheit-im-umgang-mit-dem-computer-677"
      },
      {
        "id": "7122",
        "title": "Wie funktioniert ein Botnetz",
        "folder": "wie-funktioniert-ein-botnetz"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=it+sicherheit&t=896"
  },
  "kryptographie-und-authentifizierung": {
    "slug": "kryptographie-und-authentifizierung",
    "title": "Kryptographie & Authentifizierung",
    "category": "IT-Sicherheit, Datenschutz & Kryptographie",
    "shortDesc": "Symmetrische & asymmetrische Verschlüsselung, Zwei-Faktor-Authentifizierung (2FA), Enigma und Darknet.",
    "longDesc": "Kryptographie ist die Wissenschaft der Informationsverschlüsselung. Sie stellt sicher, dass Daten vertraulich bleiben, nicht unbemerkt verändert werden (Integrität) und Absender eindeutig feststehen (Authentizität).",
    "keyPoints": [
      "Symmetrische Verschlüsselung: Ein einziger geheimer Schlüssel für Ver- und Entschlüsselung (z. B. AES); Problem des sicheren Schlüsselaustauschs",
      "Asymmetrische Verschlüsselung (Public-Key-Verfahren): Öffentlicher Schlüssel zum Verschlüsseln, privater geheimer Schlüssel zum Entschlüsseln (z. B. RSA)",
      "Zwei-Faktor-Authentifizierung (2FA): Kombination aus zwei unabhängigen Faktoren (Wissen = Passwort, Besitz = Smartphone/Token, Inhärenz = Fingerabdruck)",
      "Zwiebelprinzip (The Onion Router - Tor): Mehrfache Verschlüsselung über Relays im Darknet zur Verschleierung von IP-Adresse und Standort"
    ],
    "exercises": [
      {
        "id": "7080",
        "title": "Wie funktioniert die Kryptographie (Verschlüsselung)",
        "folder": "wie-funktioniert-die-kryptographie-verschluesselung"
      },
      {
        "id": "7119",
        "title": "Wie funktioniert die Zwei-Faktor-Authentifizierung",
        "folder": "wie-funktioniert-die-zwei-faktor-authentifizierung"
      },
      {
        "id": "8016",
        "title": "Symmetrische und asymmetrische Verschlüsselung",
        "folder": "unterschiede-zwischen-symmetrischer-und-asymmetrischer-verschluesselung"
      },
      {
        "id": "8017",
        "title": "Das Darknet und das Zwiebelprinzip",
        "folder": "zwiebelprinzip-und-funktionsweise-des-darknets"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=kryptographie&t=896"
  },
  "datenschutz-ueberwachung-und-recht": {
    "slug": "datenschutz-ueberwachung-und-recht",
    "title": "Datenschutz, Überwachung & Digitalrecht",
    "category": "IT-Sicherheit, Datenschutz & Kryptographie",
    "shortDesc": "DSGVO, Schutz personenbezogener Daten, staatliche Überwachung, Cyberkrieg und digitale Ethik.",
    "longDesc": "Persönliche Daten sind das 'Gold des 21. Jahrhunderts'. Die europäische DSGVO schützt die informationelle Selbstbestimmung jedes Bürgers vor kommerzieller Ausbeutung und unbefugter staatlicher Überwachung.",
    "keyPoints": [
      "DSGVO-Grundprinzipien: Rechtmäßigkeit, Zweckbindung, Datenminimierung, Speicherbegrenzung, Integrität und Vertraulichkeit",
      "Personenbezogene Daten: Alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen (Name, IP, Standortdaten, biometrische Merkmale)",
      "Überwachungskapitalismus & Tracking: Analyse von digitalem Fußabdruck und Nutzerverhalten für personalisierte Werbung und Profiling",
      "Cyberkrieg (Cyber Warfare): Gezielte digitale Angriffe auf kritische Infrastrukturen (Stromnetze, Krankenhäuser, Behörden) zwischen Staaten",
      "Ethisches Verhalten online: Respektvoller Umgang, Schutz der Privatsphäre anderer und Vermeidung digitaler Spaltung"
    ],
    "exercises": [
      {
        "id": "3595",
        "title": "Überwachung und Datenschutz",
        "folder": "berwachung-und-datenschutz-3595"
      },
      {
        "id": "3485",
        "title": "Cyberkrieg",
        "folder": "cyberkieg-3485"
      },
      {
        "id": "4434",
        "title": "Ethisches Verhalten im digitalen Raum",
        "folder": "ethisches-verhalten-im-digitalen-raum-4434"
      },
      {
        "id": "679",
        "title": "Kurs Urheberrechte",
        "folder": "kurs-urheberrechte-679"
      },
      {
        "id": "1058",
        "title": "Übertragung von Daten",
        "folder": "bertragung-von-daten-1058"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=datenschutz&t=896"
  },
  "algorithmen-und-logik": {
    "slug": "algorithmen-und-logik",
    "title": "Algorithmen, Logik & Problemlösung",
    "category": "Algorithmen, Programmierung & KI",
    "shortDesc": "Was ist ein Algorithmus, Kochrezept-Vergleich, Kontrollstrukturen, Rekursion und Clean Code.",
    "longDesc": "Ein Algorithmus ist eine eindeutige Handlungsvorschrift zur schrittweisen Lösung eines Problems. Vom Alltagsrezept bis zu komplexen Sortierverfahren steuern Kontrollstrukturen (Sequenz, Verzweigung, Schleife) die Ausführung von Programmen.",
    "keyPoints": [
      "Eigenschaften von Algorithmen: Eindeutigkeit, Ausführbarkeit, Endlichkeit (Terminierung) und Allgemeingültigkeit",
      "Kontrollstrukturen: Verzweigungen (WENN-DANN-SONST / if-else) und Schleifen (SOLANGE / for, while) zur Wiederholung von Schritten",
      "Rekursion: Eine Funktion ruft sich selbst mit verkleinerter Problemstellung auf, bis ein Basisfall erreicht ist (Selbstähnlichkeit)",
      "Clean Code & Dokumentation: Lesbare Variablenbezeichnungen, sinnvolle Einrückungen, Modularisierung und Kommentare erleichtern Wartung und Fehlerbehebung"
    ],
    "exercises": [
      {
        "id": "303",
        "title": "Algorithmen und Programmiersprachen",
        "folder": "algorithmen-und-programmiersprachen-303"
      },
      {
        "id": "681",
        "title": "Kurs Algorithmen und Programmiersprachen",
        "folder": "kurs-algorithmen-und-programmiersprachen-681"
      },
      {
        "id": "8004",
        "title": "Vergleich von Algorithmen mit Kochrezepten",
        "folder": "vergleich-von-algorithmen-mit-kochrezepten"
      },
      {
        "id": "8005",
        "title": "Arbeiten mit Bedingungen und Wiederholungen und Schleifen",
        "folder": "arbeiten-mit-bedingungen-und-wiederholungen-und-schleifen"
      },
      {
        "id": "8008",
        "title": "Rekursion und das Prinzip der Selbstähnlichkeit",
        "folder": "rekursion-und-das-prinzip-der-selbstaehnlichkeit"
      },
      {
        "id": "8009",
        "title": "Prinzipien für sauberen und dokumentierten Code",
        "folder": "prinzipien-fuer-sauberen-und-dokumentierten-code"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=algorithmen&t=896"
  },
  "programmiersprachen": {
    "slug": "programmiersprachen",
    "title": "Programmieren mit Scratch, Python, C & Java",
    "category": "Algorithmen, Programmierung & KI",
    "shortDesc": "Visuelle Blockprogrammierung (Scratch), Animationen, Spiele und textbasierte Programmiersprachen.",
    "longDesc": "Programmieren bedeutet, Gedanken in computerausführbare Anweisungen zu übersetzen. Einsteiger starten mit visueller Blockprogrammierung in Scratch, bevor textbasierte Sprachen wie Python, Java oder C erlernt werden.",
    "keyPoints": [
      "Visuelle Programmierung (Scratch): Bausteine schnappen fehlerfrei zusammen; ideal zum Erlernen von Variablen, Events und Schleifen",
      "Objektorientierung (Java, Python): Programme werden in Klassen und Objekte mit Attributen und Methoden unterteilt",
      "Systemnahe Sprachen (C / C++): Schnelle Ausführung, direkte Speicherverwaltung mit Zeigern (Pointern); Basis von Betriebssystemen",
      "Interpretiert vs. Kompiliert: Compiler übersetzen Quellcode vorab komplett in Maschinencode; Interpreter führen Code Zeile für Zeile aus"
    ],
    "exercises": [
      {
        "id": "1396",
        "title": "Programmiersprache C",
        "folder": "programmiersprache-c-1396"
      },
      {
        "id": "1306",
        "title": "Programmiersprache Java",
        "folder": "programmiersprache-java-1306"
      },
      {
        "id": "8006",
        "title": "Programmierung einfacher Abläufe mit Scratch oder ähnlichen Tools",
        "folder": "programmierung-einfacher-ablaeufe-mit-scratch-oder-aehnlichen-tools"
      },
      {
        "id": "8007",
        "title": "Programmierung einfacher Animationen oder Spiele in Scratch",
        "folder": "programmierung-einfacher-animationen-oder-spiele-in-scratch"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=programmieren+scratch&t=896"
  },
  "kuenstliche-intelligenz-und-zukunft": {
    "slug": "kuenstliche-intelligenz-und-zukunft",
    "title": "Künstliche Intelligenz, Machine Learning & Chips",
    "category": "Algorithmen, Programmierung & KI",
    "shortDesc": "Machine Learning, Deep Learning, Prompt-Engineering, Sprachassistenten, Halbleiter und Quantencomputer.",
    "longDesc": "Künstliche Intelligenz revolutioniert Gesellschaft und Wirtschaft. Maschinelles Lernen trainiert neuronale Netze an großen Datenmengen, während Halbleiter-Innovationen und Quantencomputer die Grenzen bisheriger Rechenleistung sprengen.",
    "keyPoints": [
      "Machine Learning & Deep Learning: Algorithmen lernen Muster aus Trainingsdaten; künstliche neuronale Netze mit mehreren verborgenen Schichten",
      "Large Language Models (LLMs): Statistische Sprachmodelle generieren Texte; Prompt-Engineering optimiert Ausgabequalität durch präzisen Kontext",
      "Sprachsteuerung: Natural Language Processing (NLP) wandelt gesprochene Sprache in Text um und interpretiert Benutzerabsichten",
      "Halbleiter-Wettlauf: Moore'sches Gesetz, Lithographie im Nanometerbereich und geopolitische Bedeutung von Chipfabriken (Foundries)",
      "Quantencomputer: Nutzen Qubits, die sich dank Superposition und Verschränkung gleichzeitig in mehreren Zuständen befinden können"
    ],
    "exercises": [
      {
        "id": "7123",
        "title": "Wie funktioniert das Deep Learning",
        "folder": "wie-funktioniert-das-deep-learning"
      },
      {
        "id": "7124",
        "title": "Wie funktioniert die Sprachsteuerung (z.B. Siri, Alexa)",
        "folder": "wie-funktioniert-die-sprachsteuerung-z-b-siri-alexa"
      },
      {
        "id": "8010",
        "title": "Chancen und Risiken von Künstlicher Intelligenz",
        "folder": "chancen-und-risiken-von-kuenstlicher-intelligenz"
      },
      {
        "id": "8011",
        "title": "Trainieren einfacher Machine Learning Modelle",
        "folder": "trainieren-einfacher-machine-learning-modelle"
      },
      {
        "id": "8012",
        "title": "Professionelles Prompting für Textgeneratoren und Bildgeneratoren",
        "folder": "professionelles-prompting-fuer-textgeneratoren-und-bildgeneratoren"
      },
      {
        "id": "8018",
        "title": "Halbleiterchips und Quantencomputer",
        "folder": "wettlauf-um-chips-und-quantencomputer"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=kuenstliche+intelligenz&t=896"
  },
  "html-grundkurs": {
    "slug": "html-grundkurs",
    "title": "HTML-Grundkurs & Webseitenbau",
    "category": "Webentwicklung & Mediengestaltung",
    "shortDesc": "Struktur von Webseiten, Tags, Absätze, Überschriften, Links, Listen, Bilder, Videos und Tabellen.",
    "longDesc": "HTML (HyperText Markup Language) ist die universelle Auszeichnungssprache des World Wide Web. Sie verleiht Dokumenten eine semantische Struktur aus Überschriften, Absätzen, Hyperlinks und multimedialen Elementen.",
    "keyPoints": [
      "Grundgerüst einer HTML-Seite: <!DOCTYPE html>, <html>, <head> (Metadaten, Titel) und <body> (sichtbarer Inhalt)",
      "Semantische Tags: <h1> bis <h6> für Überschriften, <p> für Absätze, <strong> und <em> für Textauszeichnungen",
      "Hyperlinks & Medien: <a href=\"...\"> verknüpft Seiten; <img src=\"...\" alt=\"...\"> und <video> binden Medien ein",
      "Listen & Tabellen: Geordnete (<ol>) und ungeordnete (<ul>) Listen; Tabellen mit <table>, <tr>, <th> und <td> strukturieren Daten tabellarisch"
    ],
    "exercises": [
      {
        "id": "1278",
        "title": "HTML Grundlagen",
        "folder": "html-1278"
      },
      {
        "id": "3129",
        "title": "HTML Grundlagen 2",
        "folder": "html-grundlagen-2-3129"
      },
      {
        "id": "3123",
        "title": "HTML Grundlagen Text",
        "folder": "html-grundlagen-3123"
      },
      {
        "id": "3124",
        "title": "Bilder und Videos mit HTML",
        "folder": "bilder-und-videos-mit-html-3124"
      },
      {
        "id": "3125",
        "title": "Links mit HTML",
        "folder": "links-mit-html-3125"
      },
      {
        "id": "3126",
        "title": "Listen mit HTML",
        "folder": "listen-mit-html-3126"
      },
      {
        "id": "3127",
        "title": "Tabellen mit HTML",
        "folder": "tabellen-mit-html-3127"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=html+grundkurs&t=896"
  },
  "css-javascript-und-frontend": {
    "slug": "css-javascript-und-frontend",
    "title": "CSS, JavaScript & Webserver",
    "category": "Webentwicklung & Mediengestaltung",
    "shortDesc": "Design mit CSS, dynamische Interaktivität mit JavaScript und Bereitstellung auf Webservern.",
    "longDesc": "Während HTML für die Struktur sorgt, hauchen CSS (Cascading Style Sheets) und JavaScript einer Website Leben ein. CSS gestaltet Farben, Abstände und responsive Layouts, während JavaScript dynamische Benutzerinteraktionen ermöglicht.",
    "keyPoints": [
      "CSS-Selektoren & Box-Modell: Selektoren sprechen HTML-Elemente, Klassen (.klasse) oder IDs (#id) an; Box-Modell aus Content, Padding, Border und Margin",
      "Responsive Webdesign: Media Queries passen Layouts flexibel an Smartphone-, Tablet- und Desktop-Bildschirme an (Flexbox, CSS Grid)",
      "JavaScript im Browser: Manipulation des Document Object Model (DOM), Reagieren auf Nutzerereignisse (Klicks, Eingaben) und Formularvalidierung",
      "Webserver-Hosting: Serversoftware (z. B. Apache, Nginx) lauscht auf Port 80 (HTTP) bzw. 443 (HTTPS) und liefert Webdateien an Clients aus"
    ],
    "exercises": [
      {
        "id": "1234",
        "title": "CSS Gestaltung",
        "folder": "css-1234"
      },
      {
        "id": "1376",
        "title": "JavaScript Grundlagen",
        "folder": "javascript-1376"
      },
      {
        "id": "8021",
        "title": "Webserver aufsetzen und konfigurieren",
        "folder": "aufsetzen-und-konfigurieren-eines-eigenen-webservers"
      },
      {
        "id": "html-css-coden",
        "title": "Webseiten programmieren mit HTML und CSS",
        "folder": "coden-von-webseiten-mit-html-und-css"
      },
      {
        "id": "api-schnittstellen",
        "title": "Web-APIs und Programmschnittstellen",
        "folder": "verbindung-von-programmen-ueber-schnittstellen"
      },
      {
        "id": "responsive-design",
        "title": "Responsive Webdesign und mobile Optimierung",
        "folder": "mobile-commerce-und-responsive-design"
      },
      {
        "id": "server-verarbeitung",
        "title": "Client-Server-Interaktion und Serververarbeitung",
        "folder": "serverseitige-verarbeitung-von-anfragen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=css+javascript&t=896"
  },
  "computergrafik-und-digitale-medien": {
    "slug": "computergrafik-und-digitale-medien",
    "title": "Computergrafik, 3D & Raytracing",
    "category": "Webentwicklung & Mediengestaltung",
    "shortDesc": "Pixel- vs. Vektorgrafiken, 3D-Polygonnetze, fotorealistisches Raytracing und Fotomontagen.",
    "longDesc": "Digitale Bilder entstehen entweder als Raster aus einzelnen Farbpunkten (Pixel) oder als mathematisch exakte Vektoren. In der 3D-Computergrafik simulieren moderne Grafikkarten mit Raytracing physikalische Lichtstrahlen für fotorealistische Darstellungen.",
    "keyPoints": [
      "Rastergrafiken vs. Vektorgrafiken: Pixelbilder (JPEG, PNG) verlieren beim Vergrößern an Schärfe; Vektorgrafiken (SVG) sind verlustfrei skalierbar",
      "Farbmodelle: RGB (Rot, Grün, Blau) für Monitore und Bildschirme; CMYK für den Vierfarbdruck",
      "3D-Drahtgittermodelle: Dreiecke (Polygone) bilden die geometrische Grundform aller 3D-Objekte, da drei Punkte immer eine ebene Fläche definieren",
      "Raytracing: Physikalische Simulation von Lichtstrahlen von der Kamera rückwärts zu den Lichtquellen für realistische Reflexionen, Schatten und Brechungen"
    ],
    "exercises": [
      {
        "id": "1255",
        "title": "Fotomontagen",
        "folder": "fotomontagen-1255"
      },
      {
        "id": "8022",
        "title": "Vektorgrafiken vs. Pixelbilder",
        "folder": "unterschied-zwischen-vektorgrafiken-und-pixelbildern"
      },
      {
        "id": "8023",
        "title": "Raytracing: Lichtsimulation in Computergrafik",
        "folder": "raytracing-und-die-physikalische-simulation-von-lichtstrahlen"
      },
      {
        "id": "8024",
        "title": "3D-Grafik: Warum Modelle aus Polygonen bestehen",
        "folder": "warum-fast-alle-3d-figuren-aus-dreiecken-bestehen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=computergrafik+vektor&t=896"
  },
  "soziale-netzwerke": {
    "slug": "soziale-netzwerke",
    "title": "Soziale Netzwerke, Messenger & Cybermobbing",
    "category": "Digitale Gesellschaft, Persönlichkeiten & Rätsel",
    "shortDesc": "WhatsApp, Instagram, TikTok, YouTube, Cybermobbing, Hate Speech, Cyberpsychologie und Handynutzung.",
    "longDesc": "Soziale Netzwerke und Messenger verbinden Milliarden Menschen weltweit, bergen aber auch Risiken wie Cybermobbing, Hassrede, Fake News und digitale Abhängigkeit. Ein reflektierter, verantwortungsvoller Umgang ist Voraussetzung für gelingende digitale Teilhabe.",
    "keyPoints": [
      "Funktionsweise von Algorithmen: Soziale Netzwerke belohnen Interaktionen (Likes, Shares, Verweildauer); Gefahr von Empörungsdynamiken und Filterblasen",
      "Cybermobbing & Hate Speech: Bloßstellen, Beleidigen oder Bedrohen im Netz; rechtliche Konsequenzen und Hilfsangebote für Betroffene",
      "Cyberpsychologie & FOMO: 'Fear of Missing Out', Dopamin-Schleifen durch Benachrichtigungen und psychologische Mechanismen von Social-Media-Apps",
      "Datensparsamkeit & Privatsphäre: Profile auf privat stellen, Berechtigungen von Apps beschränken und keine vertraulichen Daten öffentlich teilen",
      "Handy-Regelungen an Schulen: Debatten um Bildschirmzeit, Konzentration im Unterricht und pädagogische Konzepte zur Smartphone-Nutzung"
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
      },
      {
        "id": "676",
        "title": "Kurs Soziale Netzwerke",
        "folder": "kurs-soziale-netzwerke-676"
      },
      {
        "id": "3486",
        "title": "Cybermobbing und Hate Speech",
        "folder": "cybermobbing-und-hate-speech-3486"
      },
      {
        "id": "4416",
        "title": "Chancen und Risiken von Cyberfreundschaften",
        "folder": "chancen-und-risiken-von-cyberfreundschaften-4416"
      },
      {
        "id": "5758",
        "title": "Einführung in Cyberpsychologie",
        "folder": "einfuhrung-in-cyberpsychologie-5758"
      },
      {
        "id": "6415",
        "title": "TikTok-Verbot für Jugendliche unter 16",
        "folder": "tiktok-verbot-fur-jugendliche-unter-16-6415"
      },
      {
        "id": "6418",
        "title": "Handy-Verbot in der Schule",
        "folder": "handy-verbot-in-der-schule-6418"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=soziale+netzwerke&t=896"
  },
  "medien-und-gesundheit": {
    "slug": "medien-und-gesundheit",
    "title": "Medien, Gaming & Gesundheit",
    "category": "Digitale Gesellschaft, Persönlichkeiten & Rätsel",
    "shortDesc": "Smartphone- und Computerspielsucht, Ergonomie am Arbeitsplatz, Blaulicht und gesunde Mediennutzung.",
    "longDesc": "Digitale Medien bereichern unser Leben, können bei exzessiver Nutzung jedoch die körperliche und psychische Gesundheit beeinträchtigen. Ergonomische Arbeitsplätze, Bewegungsausgleich und bewusste Bildschirmzeiten schützen Körper und Geist.",
    "keyPoints": [
      "Medienabhängigkeit: Symptome von Smartphone- und Gaming-Sucht (Kontrollverlust, Vernachlässigung von Alltag und Freunden, Entzugserscheinungen)",
      "Ergonomie am Schreibtisch: Richtige Sitzhaltung, Bildschirmabstand (50–70 cm), Blickwinkel leicht nach unten, Sehpausen (20-20-20-Regel)",
      "Körperliche Folgen: Nacken- und Rückenschmerzen ('Handynacken'), Sehbeschwerden ('Gamer-Auge') und Schlafstörungen durch abendliches Blaulicht"
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
        "title": "Computer und Gesundheit",
        "folder": "computer-und-gesundheit-2-678"
      },
      {
        "id": "1361",
        "title": "Computerspiele",
        "folder": "computerspiele-2-1361"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=medien+gesundheit&t=896"
  },
  "persoenlichkeiten-der-it": {
    "slug": "persoenlichkeiten-der-it",
    "title": "Persönlichkeiten & Pioniere der IT",
    "category": "Digitale Gesellschaft, Persönlichkeiten & Rätsel",
    "shortDesc": "Ada Lovelace, Alan Turing, Bill Gates, Steve Jobs, Larry Page, Mark Zuckerberg und IT-Pioniere.",
    "longDesc": "Die Geschichte der Informatik wurde von visionären Persönlichkeiten geprägt. Von den mathematischen Grundlagen durch Ada Lovelace und Alan Turing bis zu den Gründern weltweiter Technologiekonzerne revolutionierten ihre Ideen die menschliche Kommunikation.",
    "keyPoints": [
      "Ada Lovelace (1815–1852): Erste Programmiererin der Geschichte; erkannte, dass Charles Babbages Analytical Engine mehr als reine Zahlen berechnen kann",
      "Alan Turing (1912–1954): Begründer der theoretischen Informatik (Turing-Maschine), Knacker der Enigma-Chiffriermaschine im Zweiten Weltkrieg",
      "Bill Gates & Paul Allen: Gründer von Microsoft; machten mit MS-DOS und Windows das Betriebssystem für jedermann zugänglich",
      "Steve Jobs & Steve Wozniak: Gründer von Apple; Pioniere des Personal Computers mit grafischer Benutzeroberfläche und des modernen Smartphones",
      "Larry Page & Sergey Brin: Erfinder des PageRank-Algorithmus und Gründer von Google"
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
      },
      {
        "id": "8001",
        "title": "Ada Lovelace als erste Programmiererin der Geschichte",
        "folder": "ada-lovelace-als-erste-programmiererin-der-geschichte"
      },
      {
        "id": "8002",
        "title": "Alan Turing und die Entschlüsselung der Enigma",
        "folder": "alan-turing-und-die-entschluesselung-der-enigma"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=pioniere+informatik&t=896"
  },
  "escape-room-informatik": {
    "slug": "escape-room-informatik",
    "title": "Escape Rooms & Informatik-Rätsel",
    "category": "Digitale Gesellschaft, Persönlichkeiten & Rätsel",
    "shortDesc": "Knacke Codes, löse digitale Rätsel zu Hardware, Netzwerken, Sicherheit und HTML und entkomme dem Raum!",
    "longDesc": "Sechs spannende, digitale Escape Rooms fordern dein gesamtes Informatikwissen heraus! Kombiniere logisches Denken mit fundierten Fachkenntnissen aus Hardware, Netzwerken, IT-Sicherheit und Webentwicklung, um Schlösser zu öffnen und den Raum zu verlassen.",
    "keyPoints": [
      "Kombiniere logisches Denken mit Fachwissen aus Hardware, Netzwerken und Webentwicklung",
      "Entziffere Zahlencodes, Binärfolgen und Passwörter durch das richtige Lösen von Informatik-Aufgaben",
      "Ideal für Partnerarbeit, spielerisches Wiederholen vor Klassenarbeiten oder Stationenlernen",
      "Schritt-für-Schritt-Hinweise helfen weiter, falls du bei einem Rätsel feststeckst"
    ],
    "exercises": [
      {
        "id": "3208",
        "title": "Escape Room \"Computergrundlagen\"",
        "folder": "escape-room-quot-computergrundlagen-quot-3208"
      },
      {
        "id": "3209",
        "title": "Escape Room \"Computersicherheit\"",
        "folder": "escape-room-quot-computersicherheit-quot-3209"
      },
      {
        "id": "3213",
        "title": "Escape Room \"Hardware\"",
        "folder": "escape-room-quot-hardware-quot-3213"
      },
      {
        "id": "3235",
        "title": "Escape Room \"HTML\"",
        "folder": "escape-room-quot-html-quot-3235"
      },
      {
        "id": "3206",
        "title": "Escape Room \"Netzwerke\"",
        "folder": "escape-room-quot-netzwerke-quot-3206"
      },
      {
        "id": "3207",
        "title": "Escape Room \"Soziale Netzwerke\"",
        "folder": "escape-room-quot-soziale-netzwerke-quot-3207"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/erklaerung-und-mehr-org?query=escape+room+informatik&t=896"
  }
};
