export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface BiologieTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const biologieCategories: string[] = [
  "Der menschliche Körper",
  "Pflanzen & Botanik",
  "Tiere & Zoologie",
  "Zelle, Genetik & Evolution"
];

export const biologieTopics: Record<string, BiologieTopic> = {
  "sinnesorgane-des-menschen": {
    "slug": "sinnesorgane-des-menschen",
    "title": "Die Sinnesorgane des Menschen",
    "category": "Der menschliche Körper",
    "shortDesc": "Auge, Ohr, Nase, Zunge und Tastsinn – Aufbau, Funktion und optische Sehfehler.",
    "longDesc": "Unsere Sinnesorgane erfassen Reize aus der Umwelt (Licht, Schall, chemische Stoffe, Druck, Temperatur) und wandeln sie in elektrische Nervenimpulse um, die im Gehirn verarbeitet werden. Optische Korrekturen helfen bei Fehlsichtigkeiten wie Kurz- und Weitsichtigkeit.",
    "keyPoints": [
      "Auge: Hornhaut, Linse, Iris, Netzhaut (Retina) mit Stäbchen (Hell-Dunkel) und Zapfen (Farben), Sehnerv",
      "Sehfehler: Kurzsichtigkeit (Augapfel zu lang, Zerstreuungslinse) und Weitsichtigkeit (Augapfel zu kurz, Sammellinse)",
      "Ohr: Außenohr, Mittelohr (Trommelfell, Hammer, Amboss, Steigbügel), Innenohr (Cochlea mit Haarzellen) & Gleichgewichtsorgan",
      "Nase & Zunge: Riechschleimhaut und Geschmacksknospen (süß, sauer, salzig, bitter, umami)",
      "Haut als Sinnesorgan: Mechanorezeptoren (Druck, Berührung), Thermorezeptoren (Temperatur) und Nozizeptoren (Schmerz)"
    ],
    "exercises": [
      {
        "id": "2105",
        "title": "Die Nase - Aufbau und Sinus",
        "folder": "die-nase-aufbau-und-sinus-2105"
      },
      {
        "id": "2106",
        "title": "Das Ohr - Gehör und Gleichgewicht",
        "folder": "das-ohr-gehor-und-gleichgewicht-2106"
      },
      {
        "id": "2107",
        "title": "Das Ohr - Trommelfell und Gehörknöchelchen",
        "folder": "das-ohr-trommelfell-und-gehorknochelchen-2107"
      },
      {
        "id": "2102",
        "title": "Das Auge - Aufbau und Sehvorgang",
        "folder": "das-auge-aufbau-und-sehvorgang-2102"
      },
      {
        "id": "2103",
        "title": "Das Auge - Linse und Netzhaut",
        "folder": "das-auge-linse-und-netzhaut-2103"
      },
      {
        "id": "2104",
        "title": "Die Zunge - Geschmacksinn und -knospen",
        "folder": "die-zunge-geschmacksinn-und-knospen-2104"
      },
      {
        "id": "2099",
        "title": "Die Haut - Tastsinn und Rezeptoren",
        "folder": "die-haut-tastsinn-und-rezeptoren-2099"
      },
      {
        "id": "2098",
        "title": "Die Haut - Schweiß- und Talgdrüsen",
        "folder": "die-haut-schweies-und-talgdrusen-2098"
      },
      {
        "id": "2232",
        "title": "Die Haut - Schutz und Sinnesorgan",
        "folder": "die-haut-schutz-und-sinnesorgan-2232"
      },
      {
        "id": "5243",
        "title": "Augenfehler und ihre Korrektur",
        "folder": "augenfehler-und-ihre-korrektur-5243"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=sinnesorgane+des+menschen&t=3752"
  },
  "herz-und-blutkreislauf": {
    "slug": "herz-und-blutkreislauf",
    "title": "Herz, Blut & Kreislaufsystem",
    "category": "Der menschliche Körper",
    "shortDesc": "Großer und kleiner Kreislauf, Herzanatomie, Blutbestandteile und Blutgerinnung.",
    "longDesc": "Das Herz-Kreislauf-System transportiert Sauerstoff, Nährstoffe, Hormone und Abfallstoffe durch den Körper. Das Herz arbeitet als rhythmische Doppelpumpe mit Vorhöfen und Herzkammern.",
    "keyPoints": [
      "Doppelter Kreislauf: Lungenkreislauf (kleiner Kreislauf) und Körperkreislauf (großer Kreislauf)",
      "Blutgefäße: Arterien (führen vom Herzen weg), Venen (führen zum Herzen hin), Kapillaren (Stoffaustausch)",
      "Herzanatomie: Rechter/linker Vorhof, rechte/linke Herzkammer, Segel- und Taschenklappen",
      "Blutbestandteile: Plasma (55 %), Erythrozyten (Sauerstofftransport), Leukozyten (Abwehr), Thrombozyten (Gerinnung)",
      "Blutgerinnung: Kaskade aus Gerinnungsfaktoren, Fibrinogen wird zu Fibrinfasern vernetzt"
    ],
    "exercises": [
      {
        "id": "2108",
        "title": "Der Aufbau des menschlichen Herzens",
        "folder": "der-aufbau-des-menschlichen-herzens-2108"
      },
      {
        "id": "2110",
        "title": "Der Blutkreislauf - Arterien und Venen",
        "folder": "der-blutkreislauf-arterien-und-venen-2110"
      },
      {
        "id": "2109",
        "title": "Die Rolle der weißen Blutkörperchen",
        "folder": "die-rolle-der-weiesen-blutkorperchen-2109"
      },
      {
        "id": "2126",
        "title": "Immunsystem - Leukozyten und Antikörper",
        "folder": "immunsystem-leukozyten-und-antikorper-2-2126"
      },
      {
        "id": "blutgerinnung",
        "title": "Wie funktioniert die Blutgerinnung?",
        "folder": "wie-funktioniert-die-blutgerinnung"
      },
      {
        "id": "2126-blut",
        "title": "Blutbestandteile und Blutgruppen",
        "folder": "blutbestandteile-und-blutgruppen-2126"
      },
      {
        "id": "bluttransfusion",
        "title": "Wie funktioniert die Bluttransfusion?",
        "folder": "wie-funktioniert-die-bluttransfusion"
      },
      {
        "id": "herzschrittmacher",
        "title": "Wie funktioniert ein Herzschrittmacher?",
        "folder": "wie-funktioniert-ein-herzschrittmacher"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=herz+und+blutkreislauf&t=3752"
  },
  "verdauung-und-stoffwechsel": {
    "slug": "verdauung-und-stoffwechsel",
    "title": "Verdauungssystem & Stoffwechsel",
    "category": "Der menschliche Körper",
    "shortDesc": "Magen, Dünndarm, Dickdarm, Leber, Nieren, Verdauungsenzyme und Gärungsprozesse.",
    "longDesc": "Die Verdauung zerlegt Nahrung mechanisch und biochemisch in verwertbare Nährstoffe. Leber und Bauchspeicheldrüse liefern Enzyme, während die Nieren das Blut filtern und Stoffwechselendprodukte ausscheiden.",
    "keyPoints": [
      "Verdauungsweg: Mundhöhle ➔ Speiseröhre ➔ Magen (Magensäure, Pepsin) ➔ Dünndarm (Nährstoffaufnahme) ➔ Dickdarm (Wasserentzug)",
      "Verdauungsdrüsen: Leber (Gallenflüssigkeit zur Fettemulgierung), Bauchspeicheldrüse (Amylase, Trypsin, Lipase)",
      "Nierenfunktion: Filtration des Blutes in den Nephronen, Bildung von Primär- und Endharn",
      "Biochemie: Eiweißspaltung in Aminosäuren und anaerobe Stoffwechselwege wie die alkoholische Gärung"
    ],
    "exercises": [
      {
        "id": "2111",
        "title": "Wie funktionieren die Nieren?",
        "folder": "wie-funktionieren-die-nieren-2111"
      },
      {
        "id": "2112",
        "title": "Die Rolle der Leber im Stoffwechsel",
        "folder": "die-rolle-der-leber-im-stoffwechsel-2112"
      },
      {
        "id": "2113",
        "title": "Verdauungstrakt: Mund und Speiseröhre",
        "folder": "verdauungstrakt-mund-und-speiserohre-2113"
      },
      {
        "id": "2114",
        "title": "Verdauungstrakt: Magen und Darm",
        "folder": "verdauungstrakt-magen-und-darm-2114"
      },
      {
        "id": "2115",
        "title": "Bauchspeicheldrüse, Insulin und Verdauungsenzyme",
        "folder": "bauchspeicheldruse-insulin-und-verdauungsenzyme-2115"
      },
      {
        "id": "2116",
        "title": "Das menschliche Gebiss und Zahnpflege",
        "folder": "das-lymphsystem-lymphknoten-und-gefaese-2116"
      },
      {
        "id": "633",
        "title": "Sprechender Dünndarm",
        "folder": "sprechender-dunndarm-633"
      },
      {
        "id": "634",
        "title": "Sprechender Magen",
        "folder": "sprechender-magen-634"
      },
      {
        "id": "635",
        "title": "Sprechender Dickdarm",
        "folder": "sprechender-dickdarm-635"
      },
      {
        "id": "920",
        "title": "Eiweiß – Aufbau und Bedeutung",
        "folder": "eiweies-920"
      },
      {
        "id": "5138",
        "title": "Alkoholische Gärung",
        "folder": "alkoholische-garung-5138"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=verdauung+und+stoffwechsel&t=3752"
  },
  "atmung-und-lunge": {
    "slug": "atmung-und-lunge",
    "title": "Atmungssystem & Gasaustausch",
    "category": "Der menschliche Körper",
    "shortDesc": "Atemwege, Lungenbläschen, Gasaustausch und die Mechanik von Brust- und Bauchatmung.",
    "longDesc": "Das Atmungssystem versorgt den Organismus mit lebensnotwendigem Sauerstoff für die Zellatmung und gibt das Stoffwechselabfallprodukt Kohlendioxid an die Umgebung ab.",
    "keyPoints": [
      "Atemwege: Nase/Mund ➔ Rachen ➔ Kehlkopf mit Stimmbändern ➔ Luftröhre mit Knorpelspangen ➔ Bronchien ➔ Bronchiolen",
      "Gasaustausch: In den Alveolen (Lungenbläschen) durch Diffusion entlang des Konzentrationsgefälles",
      "Atemmechanik: Einatmung (Zwerchfell senkt sich, Brustkorb weitet sich) vs. Ausatmung (passive Erschlaffung)",
      "Schutzmechanismen: Flimmerepithel und Schleim befördern Schmutzpartikel nach oben"
    ],
    "exercises": [
      {
        "id": "2121",
        "title": "Die Lunge und das Atemsystem",
        "folder": "atemsystem-atemwege-und-lungen-2121"
      },
      {
        "id": "2122",
        "title": "Der Gasaustausch in den Lungenbläschen",
        "folder": "funktionen-der-lunge-2122"
      },
      {
        "id": "2123",
        "title": "Brust- und Bauchatmung - Funktionsweise",
        "folder": "das-zwerchfell-atmung-und-bewegung-2123"
      },
      {
        "id": "1156",
        "title": "Sauerstoff - Aufnahme und Gasaustausch",
        "folder": "sauerstoff-1156"
      },
      {
        "id": "5184",
        "title": "Zusammensetzung der Atemluft",
        "folder": "zusammensetzung-der-luft-5184"
      },
      {
        "id": "5171",
        "title": "Luftschadstoffe und Lungenbelastung",
        "folder": "luftschadstoffe-5171"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=atmung+und+lunge&t=3752"
  },
  "skelett-und-muskeln": {
    "slug": "skelett-und-muskeln",
    "title": "Skelett, Knochen & Muskelsystem",
    "category": "Der menschliche Körper",
    "shortDesc": "Knochenaufbau, Gelenkarten, Wirbelsäule und das Zusammenspiel von Beuger und Strecker.",
    "longDesc": "Das menschliche Skelett verleiht dem Körper Stabilität, schützt innere Organe und bildet zusammen mit Muskeln, Sehnen und Bändern den aktiven und passiven Bewegungsapparat.",
    "keyPoints": [
      "Skelett: Über 200 Knochen; Schädel, doppel-S-förmige Wirbelsäule, Brustkorb, Becken und Gliedmaßen",
      "Knochenaufbau: Knochenhaut (Periost), kompakte Rindenschicht (Kompakta), Spongiosa mit Knochenmark",
      "Gelenktypen: Kugelgelenk (Schulter, Hüfte), Scharniergelenk (Ellbogen, Knie), Dreh-/Zapfengelenk",
      "Muskelantagonismus: Muskeln können sich nur aktiv zusammenziehen; Beuger und Strecker arbeiten als Gegenspieler"
    ],
    "exercises": [
      {
        "id": "2125",
        "title": "Das Skelett des Menschen - Knochen und Gelenke",
        "folder": "das-menschliche-skelett-knochen-und-gelenke-2125"
      },
      {
        "id": "2124",
        "title": "Muskeln und Sehnen - Wie Bewegung entsteht",
        "folder": "muskulatur-skelettmuskeln-und-glatte-muskeln-2124"
      },
      {
        "id": "muskel-funkt",
        "title": "Wie funktioniert ein Muskel? - Kontraktion und Kraft",
        "folder": "wie-funktioniert-ein-muskel"
      },
      {
        "id": "2727",
        "title": "Sportverletzungen und Heilung des Bewegungsapparats",
        "folder": "mentales-training-und-sportverletzungen-2727"
      },
      {
        "id": "4431",
        "title": "Muskelaufbau, Substanzen und Leistungssteigerung",
        "folder": "doping-und-manipulation-im-sport-4431"
      },
      {
        "id": "2841",
        "title": "Doping, Muskelermüdung und Fair Play",
        "folder": "ethik-im-sport-doping-und-fair-play-2841"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=skelett+und+muskeln&t=3752"
  },
  "nervensystem-und-gehirn": {
    "slug": "nervensystem-und-gehirn",
    "title": "Nervensystem & Gehirn",
    "category": "Der menschliche Körper",
    "shortDesc": "Zentrales und peripheres Nervensystem, Gehirnareale, Neuronen, Synapsen und Reflexbögen.",
    "longDesc": "Das Nervensystem steuert und koordiniert alle Körperfunktionen, Wahrnehmungen, Gedanken und Reaktionen. Es gliedert sich in das zentrale Nervensystem (Gehirn, Rückenmark) und das periphere Nervensystem.",
    "keyPoints": [
      "ZNS und PNS: Gehirn und Rückenmark bilden die Schaltzentrale; periphere Nerven leiten Signale",
      "Gehirnareale: Großhirn (Denken, Sprache, Bewusstsein), Kleinhirn (Koordination), Zwischenhirn, Hirnstamm (Lebensfunktionen)",
      "Neuron: Zellkörper (Soma), Dendriten (Signalempfang), Axon mit Myelinscheide (Weiterleitung) und Endknöpfchen",
      "Synapse: Übertragung des elektrischen Impulses durch chemische Botenstoffe (Neurotransmitter)",
      "Reflexbogen: Schnelle, unwillkürliche Reaktion über das Rückenmark ohne Umweg über das Großhirn"
    ],
    "exercises": [
      {
        "id": "2087",
        "title": "Das Nervensystem - Zentrales und peripheres",
        "folder": "das-menschliche-gehirn-struktur-und-funktion-2087"
      },
      {
        "id": "2088",
        "title": "Nervenzellen (Neuronen) und Synapsen",
        "folder": "das-menschliche-gehirn-struktur-und-funktion-2-2088"
      },
      {
        "id": "2089",
        "title": "Das Gehirn - Aufbau und Funktionen",
        "folder": "das-menschliche-gehirn-2089"
      },
      {
        "id": "2090",
        "title": "Reflexe und Reiz-Reaktions-Kette",
        "folder": "das-nervensystem-gehirn-und-ruckenmark-2090"
      },
      {
        "id": "2091",
        "title": "Vegetatives Nervensystem - Sympathikus und Parasympathikus",
        "folder": "das-nervensystem-nervenzellen-und-synapsen-2091"
      },
      {
        "id": "2233",
        "title": "Das Rückenmark und der Reflexbogen",
        "folder": "drogen-im-straesenverkehr-alkohol-und-drogen-am-steuer-2233"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nervensystem+und+gehirn&t=3752"
  },
  "immunsystem-und-abwehr": {
    "slug": "immunsystem-und-abwehr",
    "title": "Immunsystem, Antikörper & Impfung",
    "category": "Der menschliche Körper",
    "shortDesc": "Unspezifische und spezifische Abwehr, Leukozyten, Antikörper, Milz und Impfschutz.",
    "longDesc": "Das körpereigene Immunsystem schützt vor Krankheitserregern. Während Fresszellen Erreger unspezifisch beseitigen, bilden T- und B-Lymphozyten maßgeschneiderte Antikörper und langlebige Gedächtniszellen.",
    "keyPoints": [
      "Abwehrlinien: Äußere Barrieren (Haut, Schleimhäute, Magensäure), unspezifische Abwehr (Phagozyten), spezifische Abwehr",
      "Spezifische Abwehr: B-Zellen (Antikörperproduktion) und T-Zellen (T-Helferzellen, zytotoxische T-Zellen) im Thymus geprägt",
      "Lymphatische Organe: Milz (Blutfilter und Abwehrzellenlager), Lymphknoten, Mandeln und Knochenmark",
      "Impfungen: Aktive Immunisierung (abgeschwächte Erreger, körpereigene Gedächtniszellen) vs. Passive Immunisierung (fertige Antikörper)"
    ],
    "exercises": [
      {
        "id": "2080",
        "title": "Das Immunsystem – Abwehrkräfte des Körpers",
        "folder": "lymphsystem-lymphflussigkeit-und-immunabwehr-2080"
      },
      {
        "id": "2081",
        "title": "Die Rolle der weißen Blutkörperchen (Leukozyten)",
        "folder": "die-rolle-der-milz-im-immunsystem-2081"
      },
      {
        "id": "2082",
        "title": "Antigen-Antikörper-Reaktion",
        "folder": "immunsystem-und-stress-2082"
      },
      {
        "id": "2083",
        "title": "Aktive und passive Immunisierung",
        "folder": "das-immunsystem-und-ernahrung-2083"
      },
      {
        "id": "2085",
        "title": "Wie Antikörper funktionieren",
        "folder": "wie-antikorper-funktionieren-2085"
      },
      {
        "id": "2086",
        "title": "Wie Impfungen funktionieren",
        "folder": "wie-impfungen-funktionieren-2086"
      },
      {
        "id": "2168",
        "title": "Thymus - Entwicklung der T-Zellen",
        "folder": "thymus-entwicklung-der-t-zellen-2168"
      },
      {
        "id": "2169",
        "title": "T-Zellen und B-Zellen - die Abwehrspezialisten",
        "folder": "t-zellen-und-b-zellen-die-abwehrspezialisten-2169"
      },
      {
        "id": "2128",
        "title": "Immunsystem - Aufbau und Bestandteile",
        "folder": "immunsystem-aufbau-und-bestandteile-2-2128"
      },
      {
        "id": "2129",
        "title": "Wie Antikörper funktionieren (Vertiefung)",
        "folder": "wie-antikorper-funktionieren-2-2129"
      },
      {
        "id": "2130",
        "title": "Die Rolle der Milz im Immunsystem",
        "folder": "die-rolle-der-milz-im-immunsystem-2-2130"
      },
      {
        "id": "2133",
        "title": "Wie Impfungen funktionieren (Erweiterung)",
        "folder": "wie-impfungen-funktionieren-2-2133"
      },
      {
        "id": "2134",
        "title": "Impfkalender - Wichtige Impfungen",
        "folder": "impfkalender-wichtige-impfungen-2134"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=immunsystem+und+abwehr&t=3752"
  },
  "allergien-und-autoimmunitaet": {
    "slug": "allergien-und-autoimmunitaet",
    "title": "Allergien, Autoimmunität & Entzündungen",
    "category": "Der menschliche Körper",
    "shortDesc": "Fehlsteuerungen des Immunsystems: Allergien, Histaminausschüttung, Autoimmunerkrankungen und chronische Entzündungen.",
    "longDesc": "Manchmal richtet sich das Immunsystem gegen harmlose Umweltstoffe (Allergien) oder sogar gegen körpereigenes Gewebe (Autoimmunerkrankungen). Auch Dauerstress schwächt die Immunbalance.",
    "keyPoints": [
      "Allergie: Überempfindlichkeitsreaktion des Immunsystems auf eigentlich harmlose Antigene (Pollen, Tierhaare, Hausstaubmilben)",
      "Histamin: Gewebehormon, das bei allergischen Reaktionen aus Mastzellen freigesetzt wird und Entzündungssymptome auslöst",
      "Autoimmunerkrankungen: Das Immunsystem verliert die Selbsttoleranz und greift körpereigene Zellen an (z. B. Diabetes Typ 1, Multiple Sklerose, Rheuma)",
      "Entzündungszeichen: Rötung (Rubor), Überwärmung (Calor), Schwellung (Tumor), Schmerz (Dolor) und Funktionseinschränkung (Functio laesa)",
      "Stress & Immunsystem: Chronisch erhöhte Cortisolspiegel dämpfen die Immunabwehr und begünstigen Entzündungsprozesse"
    ],
    "exercises": [
      {
        "id": "938",
        "title": "Allergien – Grundlagen",
        "folder": "allergien-938"
      },
      {
        "id": "2127",
        "title": "Immunsystem und Stress",
        "folder": "immunsystem-und-stress-2-2127"
      },
      {
        "id": "2135",
        "title": "Allergien - Ursachen und Symptome",
        "folder": "allergien-ursachen-und-symptome-2135"
      },
      {
        "id": "2136",
        "title": "Histamin - Rolle bei Allergien",
        "folder": "histamin-rolle-bei-allergien-2136"
      },
      {
        "id": "2141",
        "title": "Autoimmunerkrankungen - Beispiele und Erklärungen",
        "folder": "autoimmunerkrankungen-beispiele-und-erklarungen-2141"
      },
      {
        "id": "2142",
        "title": "Autoimmunerkrankungen - Was passiert im Körper?",
        "folder": "autoimmunerkrankungen-was-passiert-im-korper-2142"
      },
      {
        "id": "2149",
        "title": "Entzündungen - Symptome und Ursachen",
        "folder": "entzundungen-symptome-und-ursachen-2149"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=allergien+und+autoimmunitaet&t=3752"
  },
  "infektionskrankheiten-und-medizin": {
    "slug": "infektionskrankheiten-und-medizin",
    "title": "Infektionskrankheiten, Erreger & Medizin",
    "category": "Der menschliche Körper",
    "shortDesc": "Viren, Bakterien, Übertragungswege, Grippe, Kinderkrankheiten, Tuberkulose, Sepsis und HIV.",
    "longDesc": "Infektionskrankheiten werden durch pathogene Mikroorganismen hervorgerufen. Das Verständnis von Übertragungswegen (Tröpfchen-, Schmier-, Vektorinfektion) und Abwehrmechanismen ist der Schlüssel zu Hygiene und moderner Medizin.",
    "keyPoints": [
      "Erregerarten: Bakterien (eigene Zellstruktur, behandelbar mit Antibiotika) vs. Viren (keine Lebewesen, benötigen Wirtszellen)",
      "Übertragungswege: Tröpfcheninfektion (Husten, Niesen), Kontakt-/Schmierinfektion, kontaminierte Nahrung/Wasser, Vektoren (Zecken, Mücken)",
      "Atemwegsinfektionen: Erkältung (Grippaler Infekt) vs. Echte Grippe (Influenza) – Verlauf, Gefahren und Prävention",
      "Schwere Infektionen: Sepsis (lebensbedrohliche Blutvergiftung), Hepatitis (Leberentzündung), Tuberkulose und HIV/AIDS",
      "Klassische Kinderkrankheiten: Masern, Mumps, Röteln, Windpocken und deren Verlauf"
    ],
    "exercises": [
      {
        "id": "2084",
        "title": "Kinderkrankheiten und Immunsystem",
        "folder": "kinderkrankheiten-und-immunsystem-2084"
      },
      {
        "id": "2132",
        "title": "Kinderkrankheiten und Immunsystem (Vertiefung)",
        "folder": "kinderkrankheiten-und-immunsystem-2-2132"
      },
      {
        "id": "2137",
        "title": "Grippe und Erkältung",
        "folder": "grippe-und-erkaltung-2137"
      },
      {
        "id": "2138",
        "title": "Grippe und Erkältung - Unterschiede und Gemeinsamkeiten",
        "folder": "grippe-und-erkaltung-unterschiede-und-gemeinsamkeiten-2138"
      },
      {
        "id": "2139",
        "title": "Bakterielle Infektionen und Abwehr",
        "folder": "bakterielle-infektionen-und-abwehr-2139"
      },
      {
        "id": "2140",
        "title": "Infektionskrankheiten - Übertragungswege",
        "folder": "infektionskrankheiten-bertragungswege-2140"
      },
      {
        "id": "2143",
        "title": "Krebs und Immunabwehr",
        "folder": "krebs-und-immunabwehr-2143"
      },
      {
        "id": "2144",
        "title": "HIV und AIDS - Wirkung auf das Immunsystem",
        "folder": "hiv-und-aids-wirkung-auf-das-immunsystem-2144"
      },
      {
        "id": "2145",
        "title": "Tropenkrankheiten und Immunantwort",
        "folder": "tropenkrankheiten-und-immunantwort-2145"
      },
      {
        "id": "2146",
        "title": "Tuberkulose - Erreger und Behandlung",
        "folder": "tuberkulose-erreger-und-behandlung-2146"
      },
      {
        "id": "2147",
        "title": "Sepsis - Ursachen und Symptome",
        "folder": "sepsis-ursachen-und-symptome-2147"
      },
      {
        "id": "2148",
        "title": "Hepatitis - A, B und C",
        "folder": "hepatitis-a-b-und-c-2148"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=infektionskrankheiten+und+medizin&t=3752"
  },
  "die-haut": {
    "slug": "die-haut",
    "title": "Die Haut & Schutzfunktionen",
    "category": "Der menschliche Körper",
    "shortDesc": "Oberhaut, Lederhaut, Unterhaut, Thermoregulation und der Säureschutzmantel des Körpers.",
    "longDesc": "Die Haut ist das flächenmäßig größte Organ des Menschen. Sie schützt vor mechanischen Einwirkungen, UV-Strahlung, Austrocknung und Erregern und reguliert die Körpertemperatur.",
    "keyPoints": [
      "Hautschichten: Oberhaut (Epidermis mit Horn- und Keimschicht), Lederhaut (Dermis mit Blutgefäßen und Tastsinn), Unterhaut (Subkutis mit Fettgewebe)",
      "Thermoregulation: Gefäßerweiterung/-verengung und Schweißverdunstung zur Kühlung",
      "Schutzmantel: Hydro-Lipid-Film mit leicht saurem pH-Wert (ca. 5,5) hemmt das Bakterienwachstum",
      "Anhangsgebilde: Haare, Nägel, Schweiß-, Talg- und Duftdrüsen"
    ],
    "exercises": [
      {
        "id": "2109",
        "title": "Die Haut – Schichten und Funktionen",
        "folder": "die-haut-schichten-und-funktionen-2109"
      },
      {
        "id": "2232",
        "title": "Die Haut - Schutz und Sinnesorgan",
        "folder": "die-haut-schutz-und-sinnesorgan-2232"
      },
      {
        "id": "2100",
        "title": "Haut als Barriere - Erste Verteidigungslinie",
        "folder": "haut-als-barriere-erste-verteidigungslinie-2100"
      },
      {
        "id": "2101",
        "title": "Die Rolle der Schleimhäute",
        "folder": "die-rolle-der-schleimhaute-2101"
      },
      {
        "id": "wundheilung",
        "title": "Wie funktioniert die Heilung einer Wunde?",
        "folder": "wie-funktioniert-die-heilung-einer-wunde"
      },
      {
        "id": "gaensehaut",
        "title": "Gänsehaut und Hautreaktionen",
        "folder": "horror-buecher-und-die-gaensehaut-beim-lesen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=die+haut+schutzfunktionen&t=3752"
  },
  "fortpflanzung-und-entwicklung": {
    "slug": "fortpflanzung-und-entwicklung",
    "title": "Fortpflanzung, Hormone & Sexualität",
    "category": "Der menschliche Körper",
    "shortDesc": "Geschlechtsorgane, Menstruationszyklus, Schwangerschaft, Fötusentwicklung, Hormone und Vielfalt.",
    "longDesc": "Die menschliche Fortpflanzung basiert auf der Verschmelzung von Ei- und Samenzelle. Hormonelle Regelkreise steuern die Pubertät, den Monatszyklus und die Entwicklung des ungeborenen Lebens.",
    "keyPoints": [
      "Geschlechtsorgane: Primäre Geschlechtsmerkmale bei Mann (Hoden, Penis) und Frau (Eierstöcke, Gebärmutter, Vagina)",
      "Menstruationszyklus: Gesteuert durch FSH, LH, Östrogen und Progesteron; Follikelreifung, Eisprung und Menstruation",
      "Schwangerschaft & Fötus: Befruchtung im Eileiter, Einnistung, Versorgung über die Plazenta und Nabelschnur",
      "Hormone: Chemische Signalstoffe aus endokrinen Drüsen (Hypophyse, Schilddrüse, Nebennieren, Keimdrüsen)",
      "Sexuelle Identität & Orientierung: Vielfalt menschlicher Liebes- und Lebensformen, Akzeptanz und Aufklärung"
    ],
    "exercises": [
      {
        "id": "2092",
        "title": "Die weiblichen Geschlechtsorgane",
        "folder": "die-weiblichen-geschlechtsorgane-2092"
      },
      {
        "id": "2093",
        "title": "Fortpflanzungsmedizin - IVF und andere Methoden",
        "folder": "fortpflanzungsmedizin-ivf-und-andere-methoden-2093"
      },
      {
        "id": "2094",
        "title": "Fortpflanzungsorgane - Eierstöcke und Eizellen",
        "folder": "fortpflanzungsorgane-eierstocke-und-eizellen-2094"
      },
      {
        "id": "2095",
        "title": "Fortpflanzungsorgane - Hoden und Spermien",
        "folder": "fortpflanzungsorgane-hoden-und-spermien-2095"
      },
      {
        "id": "2096",
        "title": "Geschlechtsorgane und Fortpflanzung",
        "folder": "geschlechtsbestimmung-wie-es-funktioniert-2096"
      },
      {
        "id": "2097",
        "title": "Der Menstruationszyklus",
        "folder": "geschlechtschromosomen-xx-und-xy-2097"
      },
      {
        "id": "2098",
        "title": "Schwangerschaft und Fötusentwicklung",
        "folder": "die-haut-schweies-und-talgdrusen-2098"
      },
      {
        "id": "2099",
        "title": "Die Plazenta – Lebensader des Ungeborenen",
        "folder": "die-haut-tastsinn-und-rezeptoren-2099"
      },
      {
        "id": "2100",
        "title": "Hormone – die chemischen Botenstoffe",
        "folder": "haut-als-barriere-erste-verteidigungslinie-2100"
      },
      {
        "id": "2101",
        "title": "Die Schilddrüse und Stoffwechselregulation",
        "folder": "die-rolle-der-schleimhaute-2101"
      },
      {
        "id": "2720",
        "title": "Hormone und Verhalten",
        "folder": "hormone-und-verhalten-2720"
      },
      {
        "id": "2747",
        "title": "Sexuelle Orientierung und Identität",
        "folder": "sexuelle-orientierung-und-identitat-2747"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=fortpflanzung+und+entwicklung&t=3752"
  },
  "sucht-und-drogen": {
    "slug": "sucht-und-drogen",
    "title": "Suchtmittel & Drogenwirkungen",
    "category": "Der menschliche Körper",
    "shortDesc": "Wirkung von Alkohol, Nikotin, Cannabis, Opiaten und Stimulanzien auf Gehirn und Nervensystem.",
    "longDesc": "Suchtstoffe greifen direkt in die neuronale Signalübertragung des Gehirns ein. Durch Veränderungen im Belohnungssystem kommt es zu Gewöhnung, Toleranzentwicklung und physischer sowie psychischer Abhängigkeit.",
    "keyPoints": [
      "Suchtentstehung: Genuss ➔ Gewöhnung ➔ Missbrauch ➔ psychische & körperliche Abhängigkeit (Toleranzerhöhung)",
      "Alkohol: Zellgift, dämpft das ZNS, führt zu Leberschäden, Gehirnabbau und Suchtentwicklung",
      "Tabak & Nikotin: Äußerst hohes Suchtpotenzial, verengt Gefäße, Teerstoffe schädigen Lunge und Herz",
      "Cannabis: THC bindet an Cannabinoid-Rezeptoren; dämpfende und halluzinogene Wirkungen",
      "Opiate & Stimulanzien: Heroin/Morphin (stark schmerzdämpfend, hohes Überdosierungsrisiko) vs. Kokain/Amphetamin (Euphorie, Herz-Kreislauf-Kollaps)"
    ],
    "exercises": [
      {
        "id": "2117",
        "title": "Drogen – Arten und Wirkungen",
        "folder": "die-funktion-der-lymphknoten-2117"
      },
      {
        "id": "2118",
        "title": "Alkohol und seine Wirkung auf den Körper",
        "folder": "lymphsystem-lymphflussigkeit-und-immunabwehr-2-2118"
      },
      {
        "id": "2119",
        "title": "Nikotin und Rauchen – Risiken und Folgen",
        "folder": "das-endokrine-system-hormone-und-signalwege-2119"
      },
      {
        "id": "2120",
        "title": "Cannabis – Wirkung und rechtliche Aspekte",
        "folder": "hormonsystem-hypophyse-und-schilddruse-2120"
      },
      {
        "id": "2150",
        "title": "Opiate - Heroin und Schmerzmittel",
        "folder": "opiate-heroin-und-schmerzmittel-2150"
      },
      {
        "id": "2151",
        "title": "Alkohol - Wirkung und Risiken",
        "folder": "alkohol-wirkung-und-risiken-2151"
      },
      {
        "id": "2152",
        "title": "Cannabis - Inhaltsstoffe und Wirkungsweise",
        "folder": "cannabis-inhaltsstoffe-und-wirkungsweise-2152"
      },
      {
        "id": "2153",
        "title": "Stimulanzien - Koffein, Amphetamine und Kokain",
        "folder": "stimulanzien-koffein-amphetamine-und-kokain-2153"
      },
      {
        "id": "2154",
        "title": "Tabak und Nikotin - Einfluss auf den Körper",
        "folder": "tabak-und-nikotin-einfluss-auf-den-korper-2154"
      },
      {
        "id": "2155",
        "title": "Medikamentenmissbrauch - Antidepressiva und Beruhigungsmittel",
        "folder": "medikamentenmissbrauch-antidepressiva-und-beruhigungsmittel-2155"
      },
      {
        "id": "2156",
        "title": "Designerdrogen - Typen und Gefahren",
        "folder": "designerdrogen-typen-und-gefahren-2156"
      },
      {
        "id": "2157",
        "title": "Sucht und Abhängigkeit - Mechanismen und Symptome",
        "folder": "sucht-und-abhangigkeit-mechanismen-und-symptome-2157"
      },
      {
        "id": "2158",
        "title": "Drogen und das Nervensystem",
        "folder": "drogen-und-das-nervensystem-2158"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=sucht+und+drogen&t=3752"
  },
  "suchtpraevention-und-gesellschaft": {
    "slug": "suchtpraevention-und-gesellschaft",
    "title": "Suchtprävention, Verkehr & Gesellschaft",
    "category": "Der menschliche Körper",
    "shortDesc": "Drogen im Straßenverkehr, Einfluss auf Schulleistung, Dopamin-Regulation und Verhaltenssüchte.",
    "longDesc": "Sucht betrifft nicht nur den Einzelnen, sondern hat weitreichende soziale, rechtliche und gesundheitspolitische Dimensionen. Präventionsarbeit zielt darauf ab, Lebenskompetenzen zu stärken und Risikoverhalten zu verhindern.",
    "keyPoints": [
      "Präventionsstrategien: Aufklärung, Stärkung von Selbstwert und Resilienz, Peer-Education und Hilfsangebote",
      "Drogen im Straßenverkehr: Verlängerte Reaktionszeit, Tunnelblick, Selbstüberschätzung – Gefahren und rechtliche Konsequenzen",
      "Schule & Alltag: Leistungsabfall, Konzentrationsstörungen, sozialer Rückzug und Motivationsverlust durch Substanzkonsum",
      "Neurobiologie der Sucht: Das Belohnungszentrum (Nucleus accumbens) und die Rolle des Botenstoffs Dopamin",
      "Verhaltenssüchte: Nicht-stoffgebundene Süchte wie Glücksspiel-, Gaming- und Mediensucht"
    ],
    "exercises": [
      {
        "id": "2160",
        "title": "Drogenprävention - Strategien und Methoden",
        "folder": "drogenpravention-strategien-und-methoden-2160"
      },
      {
        "id": "2161",
        "title": "Die Rolle der Dopamin-Regulation bei Sucht",
        "folder": "die-rolle-der-dopamin-regulation-bei-sucht-2161"
      },
      {
        "id": "2162",
        "title": "Verhaltenssüchte - Glücksspiel und Internet",
        "folder": "verhaltenssuchte-glucksspiel-und-internet-2162"
      },
      {
        "id": "2159",
        "title": "Drogen und die Gesellschaft - Legalität und Tabus",
        "folder": "drogen-und-die-gesellschaft-legalitat-und-tabus-2159"
      },
      {
        "id": "2163",
        "title": "Einfluss von Drogen auf die Schulleistung",
        "folder": "einfluss-von-drogen-auf-die-schulleistung-2163"
      },
      {
        "id": "2234",
        "title": "Drogen im Straßenverkehr - Alkohol und Drogen am Steuer",
        "folder": "drogen-im-straesenverkehr-alkohol-und-drogen-am-steuer-2234"
      },
      {
        "id": "2235",
        "title": "Drogen im Straßenverkehr - Alkohol und Drogen am Steuer (Teil 2)",
        "folder": "drogen-im-straesenverkehr-alkohol-und-drogen-am-steuer-2-2235"
      },
      {
        "id": "3527",
        "title": "Drogenmissbrauch und Suchtprävention",
        "folder": "drogenmissbrauch-und-suchtpravention-3527"
      },
      {
        "id": "5894",
        "title": "Strategien zur Suchtprävention",
        "folder": "strategien-zur-suchtpravention-5894"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=suchtpraevention+und+gesellschaft&t=3752"
  },
  "pflanzen-grundlagen-und-aufbau": {
    "slug": "pflanzen-grundlagen-und-aufbau",
    "title": "Grundlagen der Botanik & Pflanzenaufbau",
    "category": "Pflanzen & Botanik",
    "shortDesc": "Pflanzenzelle, Gewebe, Fotosynthese, Transpiration und Keimung.",
    "longDesc": "Pflanzen sind die autotrophen Grundlagen des Lebens auf der Erde. Durch Fotosynthese wandeln sie Sonnenlicht, Wasser und Kohlendioxid in organische Nährstoffe und Sauerstoff um.",
    "keyPoints": [
      "Pflanzenzelle: Zellwand aus Cellulose, Chloroplasten mit Chlorophyll und große Zentralvakuole",
      "Fotosynthese-Formel: 6 CO2 + 6 H2O + Licht ➔ C6H12O6 (Glucose) + 6 O2",
      "Leitgewebe: Xylem (Transport von Wasser und Mineralstoffen von den Wurzeln nach oben) und Phloem (Transport von Assimilaten)",
      "Transpiration: Verdunstung über Spaltöffnungen (Stomata) erzeugt den lebenswichtigen Transpirationssog",
      "Samen & Keimung: Bedingungen für die Keimung (Wasser, Wärme, Sauerstoff) und Bildung des Keimlings"
    ],
    "exercises": [
      {
        "id": "2224",
        "title": "Pflanzenzellen - Struktur und Funktionen",
        "folder": "pflanzenzellen-struktur-und-funktionen-2224"
      },
      {
        "id": "2225",
        "title": "Pflanzengewebe - Epidermis, Grundgewebe, Leitgewebe",
        "folder": "pflanzengewebe-epidermis-grundgewebe-leitgewebe-2225"
      },
      {
        "id": "2226",
        "title": "Atmung in Pflanzen",
        "folder": "atmung-in-pflanzen-2226"
      },
      {
        "id": "2227",
        "title": "Transpiration - der Wassertransport in Pflanzen",
        "folder": "transpiration-der-wassertransport-in-pflanzen-2227"
      },
      {
        "id": "4495",
        "title": "Pflanzen nutzen Sonnenlicht – Licht wird zu Nahrung",
        "folder": "pflanzen-nutzen-sonnenlicht-licht-wird-zu-nahrung-4495"
      },
      {
        "id": "2183",
        "title": "Nährstoffaufnahme - Wurzeln und Erde",
        "folder": "nahrstoffaufnahme-wurzeln-und-erde-2183"
      },
      {
        "id": "2218",
        "title": "Fortpflanzung bei Pflanzen",
        "folder": "fortpflanzung-bei-pflanzen-2218"
      },
      {
        "id": "2219",
        "title": "Samen und Keimung",
        "folder": "samen-und-keimung-2219"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=pflanzen+grundlagen+und+aufbau&t=3752"
  },
  "baeume-laub-und-nadelbaeume": {
    "slug": "baeume-laub-und-nadelbaeume",
    "title": "Laubbäume, Nadelbäume & der Wald",
    "category": "Pflanzen & Botanik",
    "shortDesc": "Heimische Baumarten, Stockwerke des Waldes, Holznutzung und Anpassungen an die Jahreszeiten.",
    "longDesc": "Wälder sind komplexe Ökosysteme und wichtige Klimaregulatoren. Bäume zeichnen sich durch verholzte Stämme aus und gliedern sich in sommergrüne Laubbäume und meist immergrüne Nadelbäume.",
    "keyPoints": [
      "Laubbäume: Eiche, Buche, Ahorn, Linde, Weide; werfen im Herbst Laub ab, um Verdunstungsschutz im Winter zu gewährleisten",
      "Nadelbäume: Fichte, Tanne, Kiefer, Lärche (wirft Nadeln ab); Nadeln besitzen dicke Wachsschicht (Kutikula) gegen Frosttrocknis",
      "Stockwerke des Waldes: Wurzelschicht, Moosschicht, Krautschicht, Strauchschicht und Baumkronenschicht",
      "Bedeutung: Sauerstoffproduzent, CO2-Speicher, Erosionsschutz, Wasserspeicher und Holzlieferant"
    ],
    "exercises": [
      {
        "id": "2184",
        "title": "Laubbäume und ihre Merkmale",
        "folder": "laubbaume-und-ihre-merkmale-2184"
      },
      {
        "id": "2185",
        "title": "Die Weide - Baum des Wassers",
        "folder": "die-weide-baum-des-wassers-2185"
      },
      {
        "id": "2186",
        "title": "Die Linde - Bedeutung und Nutzung",
        "folder": "die-linde-bedeutung-und-nutzung-2186"
      },
      {
        "id": "2187",
        "title": "Der Ahorn - Vielseitig und farbenfroh",
        "folder": "der-ahorn-vielseitig-und-farbenfroh-2187"
      },
      {
        "id": "2190",
        "title": "Die Eiche - ein Baum mit Geschichte",
        "folder": "die-eiche-ein-baum-mit-geschichte-2190"
      },
      {
        "id": "2191",
        "title": "Nadelbäume - von Fichte bis Kiefer",
        "folder": "nadelbaume-von-fichte-bis-kiefer-2191"
      },
      {
        "id": "2192",
        "title": "Die Kiefer - ein Nadelbaum und seine Nutzung",
        "folder": "die-kiefer-ein-nadelbaum-und-seine-nutzung-2192"
      },
      {
        "id": "2193",
        "title": "Der Apfelbaum - von der Blüte zur Frucht",
        "folder": "der-apfelbaum-von-der-blute-zur-frucht-2193"
      },
      {
        "id": "2199",
        "title": "Der Olivenbaum - Symbol des Mittelmeers",
        "folder": "der-olivenbaum-symbol-des-mittelmeers-2199"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=baeume+laub+und+nadelbaeume&t=3752"
  },
  "nutzpflanzen-und-landwirtschaft": {
    "slug": "nutzpflanzen-und-landwirtschaft",
    "title": "Nutzpflanzen, Früchte & Gartenbau",
    "category": "Pflanzen & Botanik",
    "shortDesc": "Kartoffel, Getreide, Kürbis, Tropenfrüchte, Weinbau und nachhaltige Pflanzenpflege.",
    "longDesc": "Nutzpflanzen sind vom Menschen kultivierte Pflanzen zur Gewinnung von Nahrungsmitteln, Genussmitteln oder Rohstoffen. Ihr Anbau prägt Kulturlandschaften weltweit.",
    "keyPoints": [
      "Knollen- & Wurzelgemüse: Kartoffel (Nachtschattengewächs, Herkunft Südamerika), Zwiebel (Lauchgewächs)",
      "Fruchtgemüse & Früchte: Kürbis, Zitrone, Avocado, Banane; Anpassungen an tropische und mediterrane Klimate",
      "Genuss- & Kulturpflanzen: Kaffeepflanze (Koffein in Kaffeekirschen), Weinrebe (Kletterpflanze, Kelterung)",
      "Gartenbau: Standortansprüche, Bodenbeschaffenheit, Gießen, Düngung und biologischer Pflanzenschutz"
    ],
    "exercises": [
      {
        "id": "2194",
        "title": "Die Zwiebel - mehr als ein Gewürz",
        "folder": "die-zwiebel-mehr-als-ein-gewurz-2194"
      },
      {
        "id": "2195",
        "title": "Die Kartoffel - eine wichtige Nutzpflanze",
        "folder": "die-kartoffel-eine-wichtige-nutzpflanze-2195"
      },
      {
        "id": "2196",
        "title": "Der Kürbis - Vielseitig und nahrhaft",
        "folder": "der-kurbis-vielseitig-und-nahrhaft-2196"
      },
      {
        "id": "2197",
        "title": "Die Weinrebe - von Trauben zu Wein",
        "folder": "die-weinrebe-von-trauben-zu-wein-2197"
      },
      {
        "id": "2198",
        "title": "Die Kaffeepflanze - Herkunft und Anbau",
        "folder": "die-kaffeepflanze-herkunft-und-anbau-2198"
      },
      {
        "id": "2200",
        "title": "Die Zitrone - Säuerlich und gesund",
        "folder": "die-zitrone-sauerlich-und-gesund-2200"
      },
      {
        "id": "2201",
        "title": "Der Rhabarber - Sauer macht lustig",
        "folder": "der-rhabarber-sauer-macht-lustig-2201"
      },
      {
        "id": "2202",
        "title": "Die Kokospalme - ein tropischer Alleskönner",
        "folder": "die-kokospalme-ein-tropischer-alleskonner-2202"
      },
      {
        "id": "2203",
        "title": "Die Avocado - Superfood aus der Natur",
        "folder": "die-avocado-superfood-aus-der-natur-2203"
      },
      {
        "id": "2204",
        "title": "Die Bananenstaude - mehr als nur eine Frucht",
        "folder": "die-bananenstaude-mehr-als-nur-eine-frucht-2204"
      },
      {
        "id": "2661",
        "title": "Gartenarbeit und Pflanzenpflege",
        "folder": "gartenarbeit-und-pflanzenpflege-2661"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nutzpflanzen+und+landwirtschaft&t=3752"
  },
  "kraeuter-und-heilpflanzen": {
    "slug": "kraeuter-und-heilpflanzen",
    "title": "Heilkräuter, Würzpflanzen & Algen",
    "category": "Pflanzen & Botanik",
    "shortDesc": "Heimische Wildkräuter, Küchenkräuter, Heilwirkungen und Algen als marine Urpflanzen.",
    "longDesc": "Kräuter enthalten ätherische Öle, Bitterstoffe und Flavonoide, die ihnen aromatische Düfte und heilsame Eigenschaften verleihen. Algen repräsentieren evolutionsbiologisch frühe pflanzliche Lebensformen.",
    "keyPoints": [
      "Küchen- & Würzgewürze: Thymian, Oregano, Salbei, Majoran, Basilikum, Schnittlauch (Lippenblütler & Lauchgewächse)",
      "Wild- & Heilkräuter: Brennnessel (reich an Eisen und Kieselsäure), Wegerich (Wundheilung), Löwenzahn (Bitterstoffe für Leber/Galle)",
      "Beruhigende Heilkräuter: Lavendel (ätherische Öle fördern Entspannung und Schlaf)",
      "Algen: Von einzelligen Kieselalgen bis zu riesigen Tangwäldern; produzieren über 50 % des weltweiten Sauerstoffs"
    ],
    "exercises": [
      {
        "id": "1117",
        "title": "Algen",
        "folder": "algen-1117"
      },
      {
        "id": "2214",
        "title": "Der Löwenzahn - Unkraut oder Heilpflanze?",
        "folder": "der-lowenzahn-unkraut-oder-heilpflanze-2214"
      },
      {
        "id": "3379",
        "title": "Die Brennessel",
        "folder": "die-brennessel-3379"
      },
      {
        "id": "3380",
        "title": "Der Thymian",
        "folder": "der-thymian-3380"
      },
      {
        "id": "3381",
        "title": "Der Wegerich",
        "folder": "der-wegerich-3381"
      },
      {
        "id": "3382",
        "title": "Der Schnittlauch",
        "folder": "der-schnittlauch-3382"
      },
      {
        "id": "3384",
        "title": "Der Oregano",
        "folder": "der-oregano-3384"
      },
      {
        "id": "3385",
        "title": "Der Salbei",
        "folder": "der-salbei-3385"
      },
      {
        "id": "3386",
        "title": "Der Löwenzahn",
        "folder": "der-lowenzahn-3386"
      },
      {
        "id": "3387",
        "title": "Der Majoran",
        "folder": "der-majoran-3387"
      },
      {
        "id": "3390",
        "title": "Der Lavendel",
        "folder": "der-lavendel-3390"
      },
      {
        "id": "3396",
        "title": "Das Basilikum",
        "folder": "das-basilikum-3396"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kraeuter+und+heilpflanzen&t=3752"
  },
  "bluetenpflanzen-und-blumen": {
    "slug": "bluetenpflanzen-und-blumen",
    "title": "Blütenpflanzen & Zierblumen",
    "category": "Pflanzen & Botanik",
    "shortDesc": "Aufbau der Blüte, Bestäubung, Tulpen, Rosen, Orchideen und Zierpflanzen.",
    "longDesc": "Blütenpflanzen (Angiospermen) haben durch auffällige Blüten, Düfte und Nektar eine enge Symbiose mit tierischen Bestäubern entwickelt. Sie dominieren die heutige Pflanzenwelt.",
    "keyPoints": [
      "Blütenaufbau: Kelchblätter, Kronblätter, Staubblätter (männlich: Staubbeutel mit Pollen), Fruchtblatt (weiblich: Narbe, Griffel, Fruchtknoten)",
      "Bestäubung: Insektenbestäubung (auffällige Blüten, Duft, Nektar) vs. Windbestäubung (unscheinbar, riesige Pollenmengen)",
      "Klassifizierung: Einkeimblättrige (parallelnervig, z. B. Tulpen) vs. Zweikeimblättrige Pflanzen (netznervig, z. B. Rosen)",
      "Zierblumen: Orchideen (Epiphyten, hochspezialisierte Bestäubung), Magnolien, Hibiskus, Jasmin und Geranien"
    ],
    "exercises": [
      {
        "id": "2205",
        "title": "Orchideen - Exotische Schönheiten",
        "folder": "orchideen-exotische-schonheiten-2205"
      },
      {
        "id": "2209",
        "title": "Tulpen - Geschichte und Bedeutung",
        "folder": "tulpen-geschichte-und-bedeutung-2209"
      },
      {
        "id": "2210",
        "title": "Rosen - mehr als nur schöne Blumen",
        "folder": "rosen-mehr-als-nur-schone-blumen-2210"
      },
      {
        "id": "2211",
        "title": "Magnolien - Blühende Riesen",
        "folder": "magnolien-bluhende-riesen-2211"
      },
      {
        "id": "2212",
        "title": "Der Hibiskus - Tropische Blütenpracht",
        "folder": "der-hibiskus-tropische-blutenpracht-2212"
      },
      {
        "id": "2213",
        "title": "Der Jasmin - Duft und Symbolik",
        "folder": "der-jasmin-duft-und-symbolik-2213"
      },
      {
        "id": "2215",
        "title": "Die Geranie - Beliebt im Haus und Garten",
        "folder": "die-geranie-beliebt-im-haus-und-garten-2215"
      },
      {
        "id": "2220",
        "title": "Blütenpflanzen - Aufbau und Fortpflanzung",
        "folder": "blutenpflanzen-aufbau-und-fortpflanzung-2220"
      },
      {
        "id": "2222",
        "title": "Familien der Blütenpflanzen",
        "folder": "familien-der-blutenpflanzen-2222"
      },
      {
        "id": "2223",
        "title": "Einkeimblättrige und Zweikeimblättrige Pflanzen",
        "folder": "einkeimblattrige-und-zweikeimblattrige-pflanzen-2223"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=bluetenpflanzen+und+blumen&t=3752"
  },
  "pilze-moose-und-farne": {
    "slug": "pilze-moose-und-farne",
    "title": "Pilze, Farne & Wüstenpflanzen",
    "category": "Pflanzen & Botanik",
    "shortDesc": "Pilzmyzel, Sporenpflanzen, Farne, Efeu, lebende Fossilien und Kakteen.",
    "longDesc": "Pilze bilden ein eigenes Reich der Lebewesen und leben heterotroph. Farne und Moose vermehren sich über Sporen, während Kakteen Meister der Wasserspeicherung in extrem trockenen Zonen sind.",
    "keyPoints": [
      "Pilze: Weder Pflanze noch Tier; Zellwand aus Chitin, fadenförmiges Myzel im Boden, oberirdischer Fruchtkörper; Destruenten im Ökosystem",
      "Farne: Gefäßsporenpflanzen aus dem Karbon; Sporenbehälter (Sori) auf der Blattunterseite",
      "Ginkgo: Lebendes Fossil mit fächerförmigen Blättern, Bindeglied zwischen Nadel- und Laubbäumen",
      "Kakteen: Sukkulenten, Blätter zu Dornen umgebildet zur Verdunstungsreduktion und Abwehr, Wasserspeicherung im Stamm",
      "Efeu: Immergrüner Wurzelkletterer mit Haftwurzeln"
    ],
    "exercises": [
      {
        "id": "1084",
        "title": "Pilze",
        "folder": "pilze-1084"
      },
      {
        "id": "2206",
        "title": "Der Ginkgo - ein lebendes Fossil",
        "folder": "der-ginkgo-ein-lebendes-fossil-2206"
      },
      {
        "id": "2207",
        "title": "Kaktus - Überlebenskünstler der Wüste",
        "folder": "kaktus-berlebenskunstler-der-wuste-2207"
      },
      {
        "id": "2216",
        "title": "Der Efeu - Kletterkünstler und Bodendecker",
        "folder": "der-efeu-kletterkunstler-und-bodendecker-2216"
      },
      {
        "id": "2217",
        "title": "Der Farn - ein Überlebenskünstler der Wälder",
        "folder": "der-farn-ein-berlebenskunstler-der-walder-2217"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=pilze+moose+und+farne&t=3752"
  },
  "waldtiere-und-raubtiere": {
    "slug": "waldtiere-und-raubtiere",
    "title": "Waldtiere & heimische Raubtiere",
    "category": "Tiere & Zoologie",
    "shortDesc": "Wolf, Fuchs, Bär, Wildschwein, Biber, Dachs und heimische Fleischfresser.",
    "longDesc": "Heimische Wälder beherbergen faszinierende Säugetiere und Beutegreifer. Raubtiere spielen als Spitzenprädatoren eine entscheidende Rolle für das ökologische Gleichgewicht.",
    "keyPoints": [
      "Große Beutegreifer: Wolf (Rudeltier, Kommunikation, Rückkehr nach Mitteleuropa) und Braunbär (Allesfresser, Winterruhe)",
      "Waldjäger: Rotfuchs (Kulturfolger, ausgeprägter Geruchssinn), Dachs (Bau im Erdreich, Allesfresser), Baummarder",
      "Ökosystem-Ingenieur: Der Biber gestaltet durch Dämme Feuchtbiotope für zahlreiche Tierarten",
      "Paarhufer des Waldes: Wildschwein (Bache, Frischlinge, Allesfresser) und Elch"
    ],
    "exercises": [
      {
        "id": "1043",
        "title": "Der Fuchs",
        "folder": "der-fuchs-1043"
      },
      {
        "id": "1072",
        "title": "Der Fuchs (Vertiefung)",
        "folder": "der-fuchs-2-1072"
      },
      {
        "id": "1115",
        "title": "Das Wildschwein",
        "folder": "das-wildschwein-1115"
      },
      {
        "id": "1140",
        "title": "Der Biber",
        "folder": "der-biber-video-fehlt-1140"
      },
      {
        "id": "1141",
        "title": "Der Bär",
        "folder": "der-bar-video-fehlt-1141"
      },
      {
        "id": "1148",
        "title": "Der Wolf",
        "folder": "der-wolf-video-fehlt-1148"
      },
      {
        "id": "1416",
        "title": "Der Marder",
        "folder": "der-marder-1416"
      },
      {
        "id": "3391",
        "title": "Der Elch",
        "folder": "der-elch-3391"
      },
      {
        "id": "3392",
        "title": "Der Bison",
        "folder": "der-bison-3392"
      },
      {
        "id": "3393",
        "title": "Der Dachs",
        "folder": "der-dachs-3393"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=waldtiere+und+raubtiere&t=3752"
  },
  "kleinsaeuger-und-alpentierwelt": {
    "slug": "kleinsaeuger-und-alpentierwelt",
    "title": "Kleine Wildtiere & Alpentierwelt",
    "category": "Tiere & Zoologie",
    "shortDesc": "Hirsch, Reh, Murmeltier, Hase, Eichhörnchen, Igel, Fledermaus und Maulwurf.",
    "longDesc": "Kleine Wildtiere und Gebirgsbewohner haben beeindruckende Überlebensstrategien für den Winter entwickelt: Winterschlaf, Winterruhe, Vorratshaltung oder Ultraschall-Echoortung.",
    "keyPoints": [
      "Alpenbewohner: Murmeltier (Warnpfiffe, monatelanger Winterschlaf) und Rothirsch/Reh (Geweihentwicklung, Wiederkäuer)",
      "Überwinterungsstrategien: Igel (echter Winterschlaf), Eichhörnchen (Winterruhe und Nüsse vergraben)",
      "Sinnesspezialisten: Fledermaus (einziges flugfähiges Säugetier, Echoortung mit Ultraschall) und Maulwurf (Graborgane, Tastsinn)",
      "Feldhase: Nestflüchter, lange Hinterläufe für Fluchtsprünge"
    ],
    "exercises": [
      {
        "id": "1044",
        "title": "Der Igel",
        "folder": "der-igel-1044"
      },
      {
        "id": "1064",
        "title": "Die Fledermaus",
        "folder": "die-fledermaus-1064"
      },
      {
        "id": "1074",
        "title": "Der Maulwurf",
        "folder": "der-maulwurf-1074"
      },
      {
        "id": "1094",
        "title": "Der Hirsch",
        "folder": "der-hirsch-1094"
      },
      {
        "id": "1419",
        "title": "Das Eichhörnchen",
        "folder": "das-eichhornchen-1419"
      },
      {
        "id": "1029",
        "title": "Das Murmeltier",
        "folder": "das-murmeltier-1029"
      },
      {
        "id": "1113",
        "title": "Das Reh",
        "folder": "das-reh-1113"
      },
      {
        "id": "3389",
        "title": "Der Hase",
        "folder": "der-hase-3389"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kleinsaeuger+und+alpentierwelt&t=3752"
  },
  "exotische-saeugetiere-und-savanne": {
    "slug": "exotische-saeugetiere-und-savanne",
    "title": "Exotische Säugetiere & Savannentiere",
    "category": "Tiere & Zoologie",
    "shortDesc": "Elefant, Giraffe, Großkatzen, Menschenaffen, Känguru, Koala, Zebra und Nashorn.",
    "longDesc": "Von den weiten Savannen Afrikas über tropische Regenwälder bis zu den Wüsten Australiens: Exotische Säugetiere zeigen atemberaubende anatomische Anpassungen an extreme Lebensräume.",
    "keyPoints": [
      "Afrikanische Savanne: Elefant (Rüssel als Greiforgan, Stoßzähne), Giraffe (langer Hals, Kreislaufanpassung), Zebra (Streifenmuster zur Insektenabwehr), Nashorn",
      "Großkatzen: Löwe, Leopard, Gepard (schnellstes Landtier) mit einziehbaren Krallen und Schleichjagd",
      "Primaten: Gorilla und Schimpanse (nächste lebende Verwandte des Menschen, Werkzeuggebrauch, Sozialstrukturen)",
      "Beuteltiere Australiens: Känguru (Sprungfortbewegung, Beutel) und Koala (spezialisierter Eukalyptusfresser)",
      "Extreme Lebensräume: Kamel (Höcker als Fettspeicher, Wassereinsparung) und Eisbär (Wärmeisolation in der Arktis)"
    ],
    "exercises": [
      {
        "id": "1041",
        "title": "Der Affe",
        "folder": "der-affe-1041"
      },
      {
        "id": "1045",
        "title": "Das Kamel",
        "folder": "das-kamel-1045"
      },
      {
        "id": "1095",
        "title": "Der Schimpanse",
        "folder": "der-schimpanse-1095"
      },
      {
        "id": "1099",
        "title": "Der Eisbär",
        "folder": "der-eisbar-1099"
      },
      {
        "id": "1100",
        "title": "Der Elefant",
        "folder": "der-elefant-1100"
      },
      {
        "id": "1413",
        "title": "Die Giraffe",
        "folder": "die-giraffe-1413"
      },
      {
        "id": "1415",
        "title": "Die Raubkatze",
        "folder": "die-raubkatze-1415"
      },
      {
        "id": "1101",
        "title": "Der Gorilla",
        "folder": "der-gorilla-1101"
      },
      {
        "id": "1116",
        "title": "Das Zebra",
        "folder": "das-zebra-1116"
      },
      {
        "id": "1142",
        "title": "Das Känguru",
        "folder": "das-kanguru-video-fehlt-1142"
      },
      {
        "id": "1144",
        "title": "Der Koala",
        "folder": "der-koala-video-fehlt-1144"
      },
      {
        "id": "3383",
        "title": "Der Tapir",
        "folder": "der-tapir-3383"
      },
      {
        "id": "3395",
        "title": "Das Nashorn",
        "folder": "das-nashorn-3395"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=exotische+saeugetiere+und+savanne&t=3752"
  },
  "nutztiere-und-landwirtschaft": {
    "slug": "nutztiere-und-landwirtschaft",
    "title": "Nutztiere, Landwirtschaft & Tierethik",
    "category": "Tiere & Zoologie",
    "shortDesc": "Rind, Schaf, Ziege, Pferd, Esel, Lama, Massentierhaltung und Tierschutz.",
    "longDesc": "Seit Jahrtausenden hält und züchtet der Mensch Tiere zur Gewinnung von Milch, Wolle, Fleisch und als Arbeitstiere. Moderne Haltungsformen werfen wichtige ethische Fragen auf.",
    "keyPoints": [
      "Wiederkäuer: Hausrind, Schaf und Ziege besitzen einen vierteiligen Magen (Pansen, Netzmagen, Blättermagen, Labmagen) zur Celluloseverdauung",
      "Equiden: Pferd und Esel als ausdauernde Begleiter und Lasttiere des Menschen",
      "Kameliden: Lama und Alpaka aus den Anden als Woll- und Tragtiere",
      "Tierethik & Massentierhaltung: Tierschutz, Flächenbedarf, Antibiotikaeinsatz und Alternativen wie Weidehaltung",
      "Tierversuche: Ethische Abwägung zwischen medizinischem Fortschritt und Tierwohl, 3R-Prinzip (Replace, Reduce, Refine)"
    ],
    "exercises": [
      {
        "id": "1030",
        "title": "Das Pferd",
        "folder": "das-pferd-1030"
      },
      {
        "id": "1114",
        "title": "Das Schaf",
        "folder": "das-schaf-1114"
      },
      {
        "id": "1119",
        "title": "Das Hausrind",
        "folder": "das-hausrind-1119"
      },
      {
        "id": "1138",
        "title": "Der Esel",
        "folder": "der-esel-video-fehlt-1138"
      },
      {
        "id": "3375",
        "title": "Die Ziege",
        "folder": "die-ziege-3375"
      },
      {
        "id": "3394",
        "title": "Das Lama Das Alpaka",
        "folder": "das-lama-das-alpaka-3394"
      },
      {
        "id": "4451",
        "title": "Massentierhaltung und ihre Folgen",
        "folder": "massentierhaltung-und-ihre-folgen-4451"
      },
      {
        "id": "4458",
        "title": "Tierversuche",
        "folder": "tierversuche-4458"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nutztiere+und+landwirtschaft&t=3752"
  },
  "haustiere-und-heimtiere": {
    "slug": "haustiere-und-heimtiere",
    "title": "Haustiere, Heimtiere & Tierverhalten",
    "category": "Tiere & Zoologie",
    "shortDesc": "Hund, Katze, Nagetiere, artgerechte Haltung und Verhaltensbiologie.",
    "longDesc": "Haustiere sind enge soziale Gefährten des Menschen. Verhaltensbiologische Kenntnisse helfen dabei, Körpersprache richtig zu deuten und Tiere artgerecht zu versorgen.",
    "keyPoints": [
      "Haushund: Abstammung vom Wolf, feine Geruchswelt, Körpersprache (Rutenstellung, Ohren, Beschwichtigungssignale)",
      "Hauskatze: Schleichjäger, Vibrissen (Tasthaare), Rückziehbarkeit der Krallen und Revierverhalten",
      "Heimtiere: Meerschweinchen, Hamster, Maus und Ratte – soziale Bedürfnisse und Nagetiergebiss",
      "Verhaltensbiologie (Ethologie): Angeborenes vs. erlerntes Verhalten, Konditionierung und Sozialverhalten"
    ],
    "exercises": [
      {
        "id": "1066",
        "title": "Die Maus",
        "folder": "die-maus-1066"
      },
      {
        "id": "1077",
        "title": "Die Ratte",
        "folder": "die-ratte-1077"
      },
      {
        "id": "1092",
        "title": "Der Hamster",
        "folder": "der-hamster-1092"
      },
      {
        "id": "1093",
        "title": "Der Haushund",
        "folder": "der-haushund-1093"
      },
      {
        "id": "1414",
        "title": "Die Hauskatze",
        "folder": "die-hauskatze-1414"
      },
      {
        "id": "1120",
        "title": "Das Meerschweinchen",
        "folder": "das-meerschweinchen-1120"
      },
      {
        "id": "5932",
        "title": "Grundlagen des Tierverhaltens",
        "folder": "grundlagen-des-tierverhaltens-5932"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=haustiere+und+heimtiere&t=3752"
  },
  "fische-und-leben-im-wasser": {
    "slug": "fische-und-leben-im-wasser",
    "title": "Fische & Meeressäuger",
    "category": "Tiere & Zoologie",
    "shortDesc": "Kiemenatmung, Schwimmblase, Haie, Aale, Wale, Delfine und Robben.",
    "longDesc": "Das Leben im Wasser erfordert spezielle anatomische Anpassungen: Von der stromlinienförmigen Körperform und Kiemenatmung der Fische bis zur Lungenatmung sekundär aquatischer Meeressäuger.",
    "keyPoints": [
      "Knochenfische: Kiemendeckel, Schuppenkleid, Schwimmblase zur Schwebe-Regulation, Seitenlinienorgan",
      "Knorpelfische: Haie besitzen Knorpelskelett, Revolvergebiss und Lorenzinische Ampullen für elektrische Felder",
      "Wanderfische: Aale wandern zur Fortpflanzung tausende Kilometer in die Sargassosee",
      "Meeressäuger: Wale, Delfine und Robben atmen mit Lungen, gebären lebende Junge und säugen sie; dicke Blubberschicht gegen Kälte"
    ],
    "exercises": [
      {
        "id": "1411",
        "title": "Die Fische",
        "folder": "die-fische-1411"
      },
      {
        "id": "1091",
        "title": "Der Hai",
        "folder": "der-hai-1091"
      },
      {
        "id": "1098",
        "title": "Der Aal",
        "folder": "der-aal-1098"
      },
      {
        "id": "1081",
        "title": "Der Wal",
        "folder": "der-wal-1081"
      },
      {
        "id": "1139",
        "title": "Der Delfin",
        "folder": "der-delfin-video-fehlt-1139"
      },
      {
        "id": "3376",
        "title": "Die Robbe",
        "folder": "die-robbe-3376"
      },
      {
        "id": "1069",
        "title": "Die Qualle - Nesseltiere",
        "folder": "die-qualle-1069"
      },
      {
        "id": "1080",
        "title": "Tintenfisch und Weichtiere der Meere",
        "folder": "tintenfisch-1080"
      },
      {
        "id": "4488",
        "title": "Leben im Wasser - Ozeane schützen & Arten retten",
        "folder": "global-goal-14-leben-im-wasser-ozeane-schutzen-arten-retten-4488"
      },
      {
        "id": "3545",
        "title": "Internationale Abkommen zum Schutz der Meere",
        "folder": "internationale-abkommen-zum-schutz-der-meere-3545"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=fische+und+leben+im+wasser&t=3752"
  },
  "heimische-singvoegel-und-greifvoegel": {
    "slug": "heimische-singvoegel-und-greifvoegel",
    "title": "Greifvögel, Wasservögel & Heimische Vögel",
    "category": "Tiere & Zoologie",
    "shortDesc": "Adler, Eulen, Störche, Schwäne, Gänse, Hühner und Wachteln.",
    "longDesc": "Vögel beherrschen den Luftraum durch ihren leichten, hohlen Knochenbau und ihr Gefieder. Heimische Greif- und Wasservögel zeigen beeindruckende Jagd- und Schwimmtechniken.",
    "keyPoints": [
      "Fluganpassungen: Pneumatisierte (hohle) Knochen, kräftiger Brustbeinkamm für die Flugmuskulatur, Federn",
      "Greifvögel & Eulen: Adler mit scharfen Sehkrallen und Hakenschnabel; Eulen jagen lautlos durch fransige Schwungfedern",
      "Wasservögel: Schwan, Gans und Ente mit Schwimmhäuten und Bürzeldrüse zur Gefiederfettung",
      "Hühnervögel: Haushuhn und Wachtel als bodenlebende Scharrvögel mit kräftigen Beinen"
    ],
    "exercises": [
      {
        "id": "1422",
        "title": "Die Vögel",
        "folder": "die-vogel-1422"
      },
      {
        "id": "1040",
        "title": "Der Adler",
        "folder": "der-adler-1040"
      },
      {
        "id": "1082",
        "title": "Der Storch",
        "folder": "der-storch-1082"
      },
      {
        "id": "1412",
        "title": "Die Gans",
        "folder": "die-gans-1412"
      },
      {
        "id": "1421",
        "title": "Der Schwan",
        "folder": "der-schwan-1421"
      },
      {
        "id": "1031",
        "title": "Das Huhn",
        "folder": "das-huhn-1031"
      },
      {
        "id": "3377",
        "title": "Die Wachtel",
        "folder": "die-wachtel-3377"
      },
      {
        "id": "3378",
        "title": "Die Eule",
        "folder": "die-eule-3378"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=heimische+singvoegel+und+greifvoegel&t=3752"
  },
  "zugvoegel-und-exotische-voegel": {
    "slug": "zugvoegel-und-exotische-voegel",
    "title": "Zugvögel, Laufvögel & Exotische Vögel",
    "category": "Tiere & Zoologie",
    "shortDesc": "Vogelzug, Orientierung, Pinguine, Flamingos, Strauße, Emus und Papageien.",
    "longDesc": "Viele Vögel unternehmen alljährlich weite Zugreisen zwischen Brut- und Wintergebieten. Andere Arten haben sich an das Laufen in Wüsten oder das Tauchen in eisigen Meeren angepasst.",
    "keyPoints": [
      "Vogelzug: Zugvögel (z. B. Schwalben, Störche) vs. Standvögel; Orientierung an Erdmagnetfeld, Sternen und Landmarken",
      "Laufvögel: Afrikanischer Strauß (größter lebender Vogel) und australischer Emu mit zurückgebildeten Flügeln",
      "Meeresflieger & Taucher: Pinguine haben ihre Flügel zu Flossen für die Unterwasserjagd umgebildet",
      "Exotische Anpassungen: Flamingos seihen mit ihrem Lamellenschnabel Kleinkrebse aus dem Wasser; Papageien mit Kletterfuß"
    ],
    "exercises": [
      {
        "id": "1420",
        "title": "Die Zugvögel",
        "folder": "die-zugvogel-1420"
      },
      {
        "id": "1075",
        "title": "Der Papagei",
        "folder": "der-papagei-1075"
      },
      {
        "id": "1076",
        "title": "Der Pfau",
        "folder": "der-pfau-1076"
      },
      {
        "id": "1078",
        "title": "Der Pinguin",
        "folder": "der-pinguin-1078"
      },
      {
        "id": "1143",
        "title": "Der Flamingo",
        "folder": "der-flamingo-video-fehlt-1143"
      },
      {
        "id": "1147",
        "title": "Der Strauss",
        "folder": "der-strauss-video-fehlt-1147"
      },
      {
        "id": "3388",
        "title": "Der Emu",
        "folder": "der-emu-3388"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=zugvoegel+und+exotische+voegel&t=3752"
  },
  "reptilien-und-amphibien": {
    "slug": "reptilien-und-amphibien",
    "title": "Reptilien (Kriechtiere) & Amphibien (Lurche)",
    "category": "Tiere & Zoologie",
    "shortDesc": "Eidechsen, Schlangen, Frösche, Kröten, Dinosaurier und wechselwarme Lebensweisen.",
    "longDesc": "Reptilien und Amphibien sind wechselwarme (poikilotherme) Wirbeltiere. Während Amphibien für ihre Fortpflanzung zwingend ans Wasser gebunden sind, sind Reptilien voll an Landleben angepasst.",
    "keyPoints": [
      "Amphibien (Lurche): Froschlurche (Frösche, Kröten) und Schwanzlurche; Metamorphose von der Kaulquappe zum Landtier, feuchte Hautatmung",
      "Reptilien (Kriechtiere): Eidechsen, Schlangen, Schildkröten, Krokodile; trockene Schuppenhaut schützt vor Austrocknung",
      "Amnioten-Ei: Das Reptilienei mit Schale und Dottersack ermöglichte die Unabhängigkeit vom Wasser",
      "Dinosaurier: Fossile Urzeit-Reptilien, aus denen sich die heutigen Vögel entwickelt haben"
    ],
    "exercises": [
      {
        "id": "1063",
        "title": "Die Eidechse",
        "folder": "die-eidechse-1063"
      },
      {
        "id": "1065",
        "title": "Die Kröte",
        "folder": "die-krote-1065"
      },
      {
        "id": "1071",
        "title": "Der Frosch",
        "folder": "der-frosch-1071"
      },
      {
        "id": "1096",
        "title": "Die Schlange",
        "folder": "die-schlange-1096"
      },
      {
        "id": "1042",
        "title": "Der Dinosaurier",
        "folder": "der-dinosaurier-1042"
      },
      {
        "id": "1108",
        "title": "Das Reptil",
        "folder": "das-reptil-1108"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=reptilien+und+amphibien&t=3752"
  },
  "insekten-und-staatenbildner": {
    "slug": "insekten-und-staatenbildner",
    "title": "Insekten & staatenbildende Tiere",
    "category": "Tiere & Zoologie",
    "shortDesc": "Biene, Ameise, Wespe, Schmetterling, Käfer, Mücke und die Metamorphose.",
    "longDesc": "Insekten sind die artenreichste Tiergruppe der Erde. Ihr dreigeteilter Körper, das Chitin-Außenskelett und staatenbildende Sozialsysteme machen sie zu Meistern der Evolution.",
    "keyPoints": [
      "Körperbau: Kopf (Caput mit Facettenaugen und Fühlern), Brust (Thorax mit 3 Beinpaaren und Flügeln), Hinterleib (Abdomen)",
      "Atmung: Tracheensystem leitet Luft direkt zu den Zellen",
      "Metamorphose: Vollständige Metamorphose (Ei ➔ Raupe/Larve ➔ Puppe ➔ Imago, z. B. Schmetterling, Käfer) vs. Unvollständige Metamorphose",
      "Insektenstaaten: Bienen und Ameisen mit ausgeprägter Arbeitsteilung (Königin, Arbeiterinnen, Drohnen) und Pheromon-Kommunikation"
    ],
    "exercises": [
      {
        "id": "1418",
        "title": "Die Insekten",
        "folder": "die-insekten-1418"
      },
      {
        "id": "1085",
        "title": "Die Biene",
        "folder": "die-biene-1085"
      },
      {
        "id": "1086",
        "title": "Die Ameise",
        "folder": "die-ameise-1086"
      },
      {
        "id": "1067",
        "title": "Die Mücke",
        "folder": "die-mucke-1067"
      },
      {
        "id": "1073",
        "title": "Der Marienkäfer",
        "folder": "der-marienkafer-1073"
      },
      {
        "id": "1097",
        "title": "Die Wespe, Hornisse, Hummel",
        "folder": "die-wespe-hornisse-hummel-1097"
      },
      {
        "id": "1417",
        "title": "Der Maikäfer",
        "folder": "der-maikafer-1417"
      },
      {
        "id": "1146",
        "title": "Der Schmetterling",
        "folder": "der-schmetterling-video-fehlt-1146"
      },
      {
        "id": "4496",
        "title": "Verwandlung in der Natur – vom Ei zum Schmetterling",
        "folder": "verwandlung-in-der-natur-vom-ei-zum-schmetterling-4496"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=insekten+und+staatenbildner&t=3752"
  },
  "spinnentiere-krebse-und-wirbellose": {
    "slug": "spinnentiere-krebse-und-wirbellose",
    "title": "Spinnentiere, Krebse & Wirbellose Tiere",
    "category": "Tiere & Zoologie",
    "shortDesc": "Spinnen, Zecken, Krebse, Weichtiere, Ringelwürmer und Quallen.",
    "longDesc": "Wirbellose Tiere besitzen keine Wirbelsäule und machen über 95 % aller Tierarten aus. Spinnen, Krebstiere, Weichtiere und Nesseltiere zeigen eine enorme Vielfalt an Bauplänen.",
    "keyPoints": [
      "Spinnentiere (Arachnida): 4 Beinpaare, 2 Körperabschnitte, keine Fühler, Spinndrüsen und Kieferklauen (Cheliceren)",
      "Parasitäre Spinnentiere: Zecken als Blutsauger und Überträger von FSME und Borreliose",
      "Krebstiere: Zweigliedriger Panzer, Kiemen, Scheren und Spaltbeine",
      "Weichtiere & Ringelwürmer: Muscheln, Schnecken, Tintenfische (hochentwickelte Augen) sowie Regenwürmer als Bodenverbesserer"
    ],
    "exercises": [
      {
        "id": "1423",
        "title": "Die Wirbeltiere",
        "folder": "die-wirbeltiere-1423"
      },
      {
        "id": "1070",
        "title": "Die Spinne",
        "folder": "die-spinne-1070"
      },
      {
        "id": "1079",
        "title": "Die Vogelspinne",
        "folder": "die-vogelspinne-1079"
      },
      {
        "id": "1083",
        "title": "Der Regenwurm",
        "folder": "der-regenwurm-1083"
      },
      {
        "id": "1068",
        "title": "Die Muschel",
        "folder": "die-muschel-1068"
      },
      {
        "id": "1069",
        "title": "Die Qualle",
        "folder": "die-qualle-1069"
      },
      {
        "id": "1080",
        "title": "Tintenfisch",
        "folder": "tintenfisch-1080"
      },
      {
        "id": "1123",
        "title": "Die Zecke",
        "folder": "die-zecke-1123"
      },
      {
        "id": "1145",
        "title": "Der Krebs",
        "folder": "der-krebs-video-fehlt-1145"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=spinnentiere+krebse+und+wirbellose&t=3752"
  },
  "zellbiologie-und-mikroskopie": {
    "slug": "zellbiologie-und-mikroskopie",
    "title": "Zellbiologie, Zellorganellen & Mikroskopie",
    "category": "Zelle, Genetik & Evolution",
    "shortDesc": "Pflanzen- und Tierzelle, Organellen, Zellgewebe, Lupe und Mikroskopiertechniken.",
    "longDesc": "Die Zelle ist die kleinste lebensfähige Grundeinheit aller Organismen. Mikroskope erschließen die Welt der Zellorganellen und Gewebestrukturen.",
    "keyPoints": [
      "Zellorganellen: Zellkern (Steuerzentrale mit DNA), Mitochondrien ('Kraftwerke' der Zelle), Ribosomen, ER, Golgi-Apparat",
      "Vergleich: Pflanzenzelle (Zellwand, Chloroplasten, Vakuole) vs. Tierzelle (nur Zellmembran)",
      "Mikroskopie: Okular, Objektiv, Tubus, Objekttisch, Kondensor und Trieb; Vergrößerung = Okularvergrößerung × Objektivvergrößerung",
      "Gewebebildung: Zellen schließen sich zu spezialisierten Geweben (z. B. Epithel-, Leit-, Binde- und Muskelgewebe) zusammen"
    ],
    "exercises": [
      {
        "id": "2224",
        "title": "Pflanzenzellen - Struktur und Funktionen",
        "folder": "pflanzenzellen-struktur-und-funktionen-2224"
      },
      {
        "id": "2225",
        "title": "Pflanzengewebe - Epidermis, Grundgewebe, Leitgewebe",
        "folder": "pflanzengewebe-epidermis-grundgewebe-leitgewebe-2225"
      },
      {
        "id": "5353",
        "title": "Die Geschichte der Biologie",
        "folder": "die-geschichte-der-biologie-5353"
      },
      {
        "id": "5306",
        "title": "Lupe, Mikroskop und Fernrohr",
        "folder": "lupe-mikroskop-und-fernrohr-5306"
      },
      {
        "id": "photosynthese",
        "title": "Wie funktioniert die Photosynthese in Pflanzen?",
        "folder": "wie-funktioniert-die-photosynthese-in-pflanzen"
      },
      {
        "id": "dna-replikation",
        "title": "Wie funktioniert die DNA-Replikation?",
        "folder": "wie-funktioniert-die-dna-replikation"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=zellbiologie+und+mikroskopie&t=3752"
  },
  "genetik-dna-und-vererbung": {
    "slug": "genetik-dna-und-vererbung",
    "title": "Molekulargenetik & Klassische Vererbung",
    "category": "Zelle, Genetik & Evolution",
    "shortDesc": "DNA-Doppelhelix, Replikation, RNA, Chromosomen, Genexpression und Mendelsche Gesetze.",
    "longDesc": "Die Genetik erforscht die Weitergabe von Erbinformationen von Generation zu Generation. Die DNA speichert den Bauplan aller Proteine in einer universellen Basenabfolge.",
    "keyPoints": [
      "DNA-Aufbau: Doppelhelix aus Zucker (Desoxyribose), Phosphat und vier Basen: Adenin-Thymin, Guanin-Cytosin",
      "Replikation & Proteinbiosynthese: Semikonservative Verdopplung; Transkription (DNA ➔ mRNA) und Translation (mRNA ➔ Protein an den Ribosomen)",
      "Chromosomen: Träger der Erbanlagen; Mensch hat 46 Chromosomen (23 Paare: 22 Autosomenpaare + 1 Gonosomenpaar XX/XY)",
      "Mendelsche Regeln: Uniformitätsregel, Spaltungsregel und Unabhängigkeitsregel (dominant-rezessive Erbgänge)",
      "Epigenetik: Veränderung der Genaktivität ohne Änderung der DNA-Sequenz (z. B. durch Methylierung)"
    ],
    "exercises": [
      {
        "id": "2164",
        "title": "DNA - Bausteine des Lebens",
        "folder": "dna-bausteine-des-lebens-2164"
      },
      {
        "id": "2165",
        "title": "DNA-Replikation - kopieren der Erbinformation",
        "folder": "dna-replikation-kopieren-der-erbinformation-2165"
      },
      {
        "id": "2166",
        "title": "Die Rolle der RNA",
        "folder": "die-rolle-der-rna-2166"
      },
      {
        "id": "2167",
        "title": "Die Rolle der Chromosomen",
        "folder": "die-rolle-der-chromosomen-2167"
      },
      {
        "id": "2170",
        "title": "Genexpression - wie Gene aktiviert werden",
        "folder": "genexpression-wie-gene-aktiviert-werden-2170"
      },
      {
        "id": "2171",
        "title": "Epigenetik - Vererbung jenseits der DNA",
        "folder": "epigenetik-vererbung-jenseits-der-dna-2171"
      },
      {
        "id": "2172",
        "title": "Mendelsche Vererbungslehre",
        "folder": "mendelsche-vererbungslehre-2172"
      },
      {
        "id": "3245",
        "title": "DNA – Der genetische Code",
        "folder": "dna-3245"
      },
      {
        "id": "5357",
        "title": "Die Geschichte der Genetik",
        "folder": "die-geschichte-der-genetik-5357"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=genetik+dna+und+vererbung&t=3752"
  },
  "gentechnik-biotechnologie-und-medizin": {
    "slug": "gentechnik-biotechnologie-und-medizin",
    "title": "Gentechnik, Mutationen & Biotechnologie",
    "category": "Zelle, Genetik & Evolution",
    "shortDesc": "Mutationen, Erbkrankheiten, Genomentschlüsselung, GVO, Klonen und CRISPR.",
    "longDesc": "Moderne molekularbiologische Methoden ermöglichen das gezielte Lesen, Verändern und Übertragen von Genen. Dies eröffnet Chancen in Medizin und Landwirtschaft, erfordert aber verantwortungsvolle ethische Grenzen.",
    "keyPoints": [
      "Mutationen: Spontane oder mutagen-induzierte Basenveränderungen (Punktmutation, Deletion, Insertion); Ursache für Erbkrankheiten und Evolution",
      "Gentechnische Werkzeuge: Restriktionsenzyme (Genscheren), Plasmide als Vektoren und moderne Genom-Editierung (CRISPR/Cas9)",
      "Klonen: Reproduktives Klonen (z. B. Klonschaf Dolly) vs. therapeutisches Klonen zur Gewinnung von Stammzellen",
      "GVO in der Landwirtschaft: Herbizidresistente oder schädlingsresistente Nutzpflanzen (Bt-Mais, Golden Rice)",
      "Gentests & Medizin: Früherkennung genetisch bedingter Krankheiten und ethische Debatten um Eingriffe in die menschliche Keimbahn"
    ],
    "exercises": [
      {
        "id": "2173",
        "title": "Erbkrankheiten und genetische Tests",
        "folder": "erbkrankheiten-und-genetische-tests-2173"
      },
      {
        "id": "2174",
        "title": "Genetisch veränderte Organismen (GVO)",
        "folder": "genetisch-veranderte-organismen-gvo-2174"
      },
      {
        "id": "2175",
        "title": "Die Entschlüsselung des menschlichen Genoms",
        "folder": "die-entschlusselung-des-menschlichen-genoms-2175"
      },
      {
        "id": "2176",
        "title": "Biotechnologie - Anwendungen der Genetik",
        "folder": "biotechnologie-anwendungen-der-genetik-2176"
      },
      {
        "id": "2177",
        "title": "Genetische Variation und Anpassung",
        "folder": "genetische-variation-und-anpassung-2177"
      },
      {
        "id": "2178",
        "title": "Mutationen - Veränderungen im Erbgut",
        "folder": "mutationen-veranderungen-im-erbgut-2178"
      },
      {
        "id": "2179",
        "title": "Klonen - Möglichkeiten und Risiken",
        "folder": "klonen-moglichkeiten-und-risiken-2179"
      },
      {
        "id": "2857",
        "title": "Klonen und Gentechnik",
        "folder": "klonen-und-gentechnik-2857"
      },
      {
        "id": "4432",
        "title": "Eingriffe in das menschliche Erbgut mit Gentechnik",
        "folder": "eingriffe-in-das-menschliche-erbgut-mit-gentechnik-4432"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=gentechnik+biotechnologie+und+medizin&t=3752"
  },
  "evolution-und-stammesgeschichte": {
    "slug": "evolution-und-stammesgeschichte",
    "title": "Evolution, Darwin & Stammesgeschichte",
    "category": "Zelle, Genetik & Evolution",
    "shortDesc": "Evolutionstheorie, Selektion, Stammbaum des Menschen und der Neandertaler.",
    "longDesc": "Die biologische Evolution beschreibt den kontinuierlichen Wandel der Lebewesen über Generationen hinweg. Mutation, Rekombination, Selektion und Isolation treiben die Artbildung an.",
    "keyPoints": [
      "Evolutionsfaktoren: Mutation (neue Gene), Rekombination (neue Kombinationen), Selektion ('Survival of the fittest'), Isolation",
      "Darwins Evolutionstheorie: Natürliche Auslese begünstigt Individuen mit vorteilhaften Merkmalen",
      "Evolutionäre Belege: Fossilien, Brückentiere (z. B. Archaeopteryx), Homologien (gleicher Grundbauplan) und Rudimente",
      "Hominidenevolution: Stammbaum des Menschen von Australopithecus über Homo habilis, Homo erectus bis zum Neandertaler und Homo sapiens"
    ],
    "exercises": [
      {
        "id": "2221",
        "title": "Die Evolution der Pflanzen",
        "folder": "die-evolution-der-pflanzen-2221"
      },
      {
        "id": "2177",
        "title": "Genetische Variation und Anpassung (Evolution)",
        "folder": "genetische-variation-und-anpassung-2177"
      },
      {
        "id": "2178",
        "title": "Mutationen - Motor der Evolution",
        "folder": "mutationen-veranderungen-im-erbgut-2178"
      },
      {
        "id": "884",
        "title": "Der Neandertaler",
        "folder": "der-neandertaler-884"
      },
      {
        "id": "885",
        "title": "Der Neandertaler (Teil 2)",
        "folder": "der-neandertaler-2-885"
      },
      {
        "id": "3088",
        "title": "Der Stammbaum des Menschen",
        "folder": "der-stammbaum-des-menschen-3088"
      },
      {
        "id": "6723",
        "title": "Schöpfung und Evolution im Vergleich",
        "folder": "schopfung-und-evolution-6723"
      },
      {
        "id": "2324",
        "title": "Kritische Analyse: Sozialdarwinismus vs. Biologie",
        "folder": "der-sozialdarwinismus-2324"
      },
      {
        "id": "5760",
        "title": "Einführung in die Evolutionspsychologie",
        "folder": "einfuhrung-in-evolutionspsychologie-5760"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=evolution+und+stammesgeschichte&t=3752"
  },
  "oekologie-und-lebensraeume": {
    "slug": "oekologie-und-lebensraeume",
    "title": "Ökologie, Ökosysteme & Artenschutz",
    "category": "Zelle, Genetik & Evolution",
    "shortDesc": "Bodentypen, Nährstoffkreisläufe, Regenwald, Pflanzenschutz und Biodiversität.",
    "longDesc": "Die Ökologie untersucht die Beziehungen der Lebewesen zu ihrer belebten (biotischen) und unbelebten (abiotischen) Umwelt. Der Erhalt der biologischen Vielfalt ist für das globale Überleben essenziell.",
    "keyPoints": [
      "Ökosystem-Komponenten: Biotop (abiotischer Lebensraum: Licht, Wasser, Temperatur, Boden) und Biozönose (Lebensgemeinschaft)",
      "Nahrungsketten & Nahrungsnetze: Produzenten (Pflanzen) ➔ Primärkonsumenten (Pflanzenfresser) ➔ Sekundärkonsumenten (Fleischfresser) ➔ Destruenten (Zersetzer)",
      "Böden & Pflanzenernährung: Bodenhorizonte, Versauerung, Nährstoffe (Stickstoff, Phosphor, Kalium) und Kalkung",
      "Tropischer Regenwald: Enorme Artenvielfalt, empfindlicher Nährstoffkreislauf in der dünnen Humusschicht",
      "Biodiversität & Schutz: Artenschutz, biologischer Pflanzenschutz statt Pestizideinsatz"
    ],
    "exercises": [
      {
        "id": "2180",
        "title": "Dünger und Nährstoffe",
        "folder": "dunger-und-nahrstoffe-2180"
      },
      {
        "id": "2181",
        "title": "Bodenversauerung und Kalkung",
        "folder": "bodenversauerung-und-kalkung-2181"
      },
      {
        "id": "2182",
        "title": "Bodentypen und Pflanzenwachstum",
        "folder": "bodentypen-und-pflanzenwachstum-2182"
      },
      {
        "id": "2208",
        "title": "Der Regenwald und seine Flora",
        "folder": "der-regenwald-und-seine-flora-2208"
      },
      {
        "id": "2228",
        "title": "Ökologischer Pflanzenschutz",
        "folder": "kologischer-pflanzenschutz-2228"
      },
      {
        "id": "2229",
        "title": "Pflanzenkrankheiten - Pilze, Bakterien, Viren",
        "folder": "pflanzenkrankheiten-pilze-bakterien-viren-2229"
      },
      {
        "id": "2230",
        "title": "Schädlinge und Pflanzenschutz",
        "folder": "schadlinge-und-pflanzenschutz-2230"
      },
      {
        "id": "1118",
        "title": "Artenvielfalt",
        "folder": "artenvielfalt-1118"
      },
      {
        "id": "biber",
        "title": "Rückkehr der Baumeister - Der Siegeszug des Bibers",
        "folder": "die-rueckkehr-der-baumeister-der-siegeszug-des-bibers-in-mitteleuropa"
      },
      {
        "id": "4489",
        "title": "Natur bewahren - Wälder und Arten schützen",
        "folder": "global-goal-15-natur-bewahren-walder-und-arten-schutzen-4489"
      },
      {
        "id": "2028",
        "title": "Laubwald, Nadelwald und Mischwald",
        "folder": "laubwald-nadelwald-und-mischwald-2028"
      },
      {
        "id": "2027",
        "title": "Der tropische Regenwald - Schichten und Artenvielfalt",
        "folder": "der-tropische-regenwald-2027"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=oekologie+und+lebensraeume&t=3752"
  }
};
