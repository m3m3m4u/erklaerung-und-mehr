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

export const biologieCategories = [
  "Zelle & Organismen",
  "Der menschliche Körper",
  "Pflanzen, Tiere & Ökologie",
  "Genetik & Evolution"
];

export const biologieTopics: Record<string, BiologieTopic> = {
  "biologie-grundlagen": {
    "slug": "biologie-grundlagen",
    "title": "Zellbiologie & Grundlagen des Lebens",
    "category": "Zelle & Organismen",
    "shortDesc": "Zellaufbau, Tier- vs. Pflanzenzelle, Zellorganellen, Mikroskopie und Kennzeichen des Lebens.",
    "longDesc": "Die Zelle ist die kleinste lebens- und vermehrungsfähige Bau- und Funktionseinheit aller Lebewesen. Pflanzenzellen unterscheiden sich von tierischen Zellen durch Zellwand, Chloroplasten und eine große Vakuole.",
    "keyPoints": [
      "Kennzeichen des Lebens: Stoffwechsel, Fortpflanzung/Vermehrung, Wachstum, Reizbarkeit, Bewegung, Aufbau aus Zellen",
      "Zellorganellen: Zellkern (Steuerzentrale mit DNA), Mitochondrien (\"Kraftwerke der Zelle\" zur Zellatmung/ATP), Ribosomen (Proteinsynthese)",
      "Pflanzliche Besonderheiten: Chloroplasten (Fotosynthese mit Chlorophyll), feste Zellwand aus Cellulose, Zentralvakuole",
      "Mikroskopie: Okular mal Objektiv = Gesamtvergrößerung"
    ],
    "exercises": [
      {
        "id": "2078",
        "title": "Immunsystem Aufbau Und Bestandteile",
        "folder": "immunsystem-aufbau-und-bestandteile-2078"
      },
      {
        "id": "2079",
        "title": "Immunsystem Leukozyten Und Antikorper",
        "folder": "immunsystem-leukozyten-und-antikorper-2079"
      },
      {
        "id": "2080",
        "title": "Lymphsystem – Lymphflüssigkeit und Immunabwehr",
        "folder": "lymphsystem-lymphflussigkeit-und-immunabwehr-2080"
      },
      {
        "id": "280",
        "title": "Aufbau Der Materie",
        "folder": "aufbau-der-materie-280"
      },
      {
        "id": "281",
        "title": "Das Periodensystem Der Elemente",
        "folder": "das-periodensystem-der-elemente-281"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=zelle+biologie&t=3752"
  },
  "immunsystem-und-gesundheit": {
    "slug": "immunsystem-und-gesundheit",
    "title": "Das Immunsystem & Abwehrkräfte",
    "category": "Der menschliche Körper",
    "shortDesc": "Leukozyten, Antikörper, Lymphsystem, Impfungen (aktiv/passiv), Allergien und Erreger.",
    "longDesc": "Das Immunsystem schützt den Organismus vor Krankheitserregern (Viren, Bakterien, Pilze, Parasiten). Die unspezifische (angeborene) und spezifische (erworbene) Immunabwehr arbeiten Hand in Hand.",
    "keyPoints": [
      "Weiße Blutkörperchen (Leukozyten): Fresszellen (Makrophagen), T-Zellen (Helfer- und Killerzellen), B-Zellen (Antikörper-Produktion)",
      "Antigen-Antikörper-Reaktion: Antikörper binden passgenau nach dem Schlüssel-Schloss-Prinzip an Antigene der Erreger",
      "Aktive Impfung (Schutzimpfung): Verabreichung abgeschwächter Erreger ➔ Körper bildet eigene Gedächtniszellen für langanhaltenden Schutz",
      "Passive Impfung (Heilimpfung): Verabreichung fertiger Antikörper für sofortige, aber kurzzeitige Hilfe",
      "Autoimmunerkrankungen & Allergien: Überreaktion des Immunsystems gegen harmlose Stoffe oder körpereigene Zellen"
    ],
    "exercises": [
      {
        "id": "2078",
        "title": "Immunsystem Aufbau Und Bestandteile",
        "folder": "immunsystem-aufbau-und-bestandteile-2078"
      },
      {
        "id": "2079",
        "title": "Immunsystem Leukozyten Und Antikorper",
        "folder": "immunsystem-leukozyten-und-antikorper-2079"
      },
      {
        "id": "2080",
        "title": "Lymphsystem – Lymphflüssigkeit und Immunabwehr",
        "folder": "lymphsystem-lymphflussigkeit-und-immunabwehr-2080"
      },
      {
        "id": "2081",
        "title": "Die Rolle Der Milz Im Immunsystem",
        "folder": "die-rolle-der-milz-im-immunsystem-2081"
      },
      {
        "id": "2082",
        "title": "Immunsystem Und Stress",
        "folder": "immunsystem-und-stress-2082"
      },
      {
        "id": "2083",
        "title": "Das Immunsystem Und Ernahrung",
        "folder": "das-immunsystem-und-ernahrung-2083"
      },
      {
        "id": "2084",
        "title": "Kinderkrankheiten Und Immunsystem",
        "folder": "kinderkrankheiten-und-immunsystem-2084"
      },
      {
        "id": "2085",
        "title": "Wie Antikorper Funktionieren",
        "folder": "wie-antikorper-funktionieren-2085"
      },
      {
        "id": "2086",
        "title": "Wie Impfungen Funktionieren",
        "folder": "wie-impfungen-funktionieren-2086"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=immunsystem&t=3752"
  },
  "skelett-und-muskeln": {
    "slug": "skelett-und-muskeln",
    "title": "Skelett, Muskeln & Bewegung",
    "category": "Der menschliche Körper",
    "shortDesc": "Knochenbau, Gelenktypen, Wirbelsäule, Doppel-S-Form, Muskelkontraktion und Gegenspielerprinzip.",
    "longDesc": "Das menschliche Skelett aus über 200 Knochen verleiht dem Körper Stabilität, schützt innere Organe und ermöglicht zusammen mit Muskeln, Sehnen und Bändern koordinierte Bewegungen.",
    "keyPoints": [
      "Aufbau der Wirbelsäule: Doppel-S-Krümmung dämpft Stöße beim Gehen und Laufen ab (Bandscheiben als Stoßdämpfer)",
      "Gelenktypen: Kugelgelenk (Schulter, Hüfte), Scharniergelenk (Ellenbogen, Knie), Dreh-/Zapfengelenk (Halswirbel Atlas/Axis), Sattelgelenk (Daumen)",
      "Gegenspielerprinzip (Agonist & Antagonist): Muskeln können sich nur aktiv zusammenziehen (z. B. Bizeps beugt, Trizeps streckt den Arm)",
      "Knochenaufbau: Knochenhaut (Periost), kompakte Knochenrinde (Kompakta), Spongiosa mit Knochenbälkchen und Knochenmark"
    ],
    "exercises": [
      {
        "id": "2095",
        "title": "Fortpflanzungsorgane Hoden Und Spermien",
        "folder": "fortpflanzungsorgane-hoden-und-spermien-2095"
      },
      {
        "id": "2096",
        "title": "Geschlechtsbestimmung Wie Es Funktioniert",
        "folder": "geschlechtsbestimmung-wie-es-funktioniert-2096"
      },
      {
        "id": "5253",
        "title": "Das Hebelgesetz",
        "folder": "das-hebelgesetz-5253"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=skelett&t=3752"
  },
  "verdauung-und-organismus": {
    "slug": "verdauung-und-organismus",
    "title": "Verdauung, Ernährung & Organe",
    "category": "Der menschliche Körper",
    "shortDesc": "Verdauungstrakt, Enzyme, Magen, Dünndarm, Dickdarm, Leber, Bauchspeicheldrüse und Nährstoffaufnahme.",
    "longDesc": "Das Verdauungssystem spaltet Nahrung mechanisch und chemisch in ihre molekularen Bausteine auf, damit sie über das Blut zu den Zellen transportiert und zur Energiegewinnung genutzt werden können.",
    "keyPoints": [
      "Stationen der Verdauung: Mundhöhle (Amylase spaltet Stärke) ➔ Speiseröhre ➔ Magen (Magensäure pH 1-2 & Pepsin) ➔ Dünndarm (Nährstoffaufnahme) ➔ Dickdarm (Wasserrückresorption)",
      "Darmzotten & Mikrovilli: Riesige Oberflächenvergrößerung des Dünndarms auf über 200 m²",
      "Leber & Bauchspeicheldrüse: Leber produziert Galle zur Fettemulgierung; Bauchspeicheldrüse liefert Verdauungsenzyme und Insulin/Glukagon"
    ],
    "exercises": [
      {
        "id": "2092",
        "title": "Die Weiblichen Geschlechtsorgane",
        "folder": "die-weiblichen-geschlechtsorgane-2092"
      },
      {
        "id": "2093",
        "title": "Fortpflanzungsmedizin Ivf Und Andere Methoden",
        "folder": "fortpflanzungsmedizin-ivf-und-andere-methoden-2093"
      },
      {
        "id": "2094",
        "title": "Fortpflanzungsorgane Eierstocke Und Eizellen",
        "folder": "fortpflanzungsorgane-eierstocke-und-eizellen-2094"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=verdauung&t=3752"
  },
  "sinnesorgane-und-nervensystem": {
    "slug": "sinnesorgane-und-nervensystem",
    "title": "Sinnesorgane & Nervensystem",
    "category": "Der menschliche Körper",
    "shortDesc": "Auge, Ohr, Nase, Zunge, Haut, Neuronen, Synapsen, Gehirn, Rückenmark und Reflexe.",
    "longDesc": "Sinnesorgane nehmen Reize aus der Umwelt auf und wandeln sie in elektrische Nervenimpulse um. Das Nervensystem verarbeitet diese Signale in Millisekunden und steuert Reaktionen.",
    "keyPoints": [
      "Sinnesorgane: Auge (Sehsinn: Stäbchen für Hell/Dunkel, Zapfen für Farben), Ohr (Hör- und Gleichgewichtssinn), Nase (Geruch), Zunge (Geschmack)",
      "Aufbau eines Neurons: Zellkörper, Dendriten (Signalempfang), Axon (Signalweiterleitung), Myelinscheide, Synapse mit Neurotransmittern",
      "ZNS vs. PNS: Gehirn und Rückenmark (ZNS) steuern Denkprozesse und Reflexe",
      "Reflexe: Schnelle Schutzreaktionen ohne zeitverzögerte Gehirnbeteiligung"
    ],
    "exercises": [
      {
        "id": "2087",
        "title": "Das Menschliche Gehirn Struktur Und Funktion",
        "folder": "das-menschliche-gehirn-struktur-und-funktion-2087"
      },
      {
        "id": "2088",
        "title": "Das Menschliche Gehirn Struktur Und Funktion",
        "folder": "das-menschliche-gehirn-struktur-und-funktion-2-2088"
      },
      {
        "id": "2089",
        "title": "Das Menschliche Gehirn",
        "folder": "das-menschliche-gehirn-2089"
      },
      {
        "id": "2090",
        "title": "Das Nervensystem Gehirn Und Ruckenmark",
        "folder": "das-nervensystem-gehirn-und-ruckenmark-2090"
      },
      {
        "id": "2091",
        "title": "Das Nervensystem Nervenzellen Und Synapsen",
        "folder": "das-nervensystem-nervenzellen-und-synapsen-2091"
      },
      {
        "id": "2142",
        "title": "Autoimmunerkrankungen – Was passiert im Körper?",
        "folder": "autoimmunerkrankungen-was-passiert-im-korper-2142"
      },
      {
        "id": "2143",
        "title": "Krebs Und Immunabwehr",
        "folder": "krebs-und-immunabwehr-2143"
      },
      {
        "id": "2144",
        "title": "Hiv Und Aids Wirkung Auf Das Immunsystem",
        "folder": "hiv-und-aids-wirkung-auf-das-immunsystem-2144"
      },
      {
        "id": "2145",
        "title": "Tropenkrankheiten Und Immunantwort",
        "folder": "tropenkrankheiten-und-immunantwort-2145"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nervensystem&t=3752"
  },
  "pflanzenwelt-und-botanik": {
    "slug": "pflanzenwelt-und-botanik",
    "title": "Botanik & Pflanzenkunde",
    "category": "Pflanzen, Tiere & Ökologie",
    "shortDesc": "Aufbau von Blütenpflanzen, Fotosynthese, Bestäubung, Nutzpflanzen, Bäume und Pflanzenschutz.",
    "longDesc": "Pflanzen sind die Grundlage aller terrestrischen Ökosysteme. Durch Fotosynthese erzeugen sie Sauerstoff und Traubenzucker und bilden das Fundament der Nahrungspyramide.",
    "keyPoints": [
      "Fotosynthese: Lichtenergie + CO2 + H2O ➔ Traubenzucker + Sauerstoff",
      "Blütenaufbau: Kelch-, Kron-, Staubblätter und Stempel/Fruchtknoten",
      "Boden & Wurzeln: Nährstoffaufnahme aus dem Bodenwasser über feine Wurzelhaare",
      "Heimische & exotische Nutzpflanzen: Getreide, Kartoffeln, Kakao, Kaffee, Baumwolle"
    ],
    "exercises": [
      {
        "id": "2105",
        "title": "Die Nase Aufbau Und Sinus",
        "folder": "die-nase-aufbau-und-sinus-2105"
      },
      {
        "id": "2106",
        "title": "Das Ohr Gehor Und Gleichgewicht",
        "folder": "das-ohr-gehor-und-gleichgewicht-2106"
      },
      {
        "id": "2107",
        "title": "Das Ohr Trommelfell Und Gehorknochelchen",
        "folder": "das-ohr-trommelfell-und-gehorknochelchen-2107"
      },
      {
        "id": "2108",
        "title": "Der Aufbau Des Menschlichen Herzens",
        "folder": "der-aufbau-des-menschlichen-herzens-2108"
      },
      {
        "id": "2109",
        "title": "Die Rolle Der Weiesen Blutkorperchen",
        "folder": "die-rolle-der-weiesen-blutkorperchen-2109"
      },
      {
        "id": "2110",
        "title": "Der Blutkreislauf Arterien Und Venen",
        "folder": "der-blutkreislauf-arterien-und-venen-2110"
      },
      {
        "id": "2111",
        "title": "Wie Funktionieren Die Nieren",
        "folder": "wie-funktionieren-die-nieren-2111"
      },
      {
        "id": "2112",
        "title": "Die Rolle Der Leber Im Stoffwechsel",
        "folder": "die-rolle-der-leber-im-stoffwechsel-2112"
      },
      {
        "id": "2113",
        "title": "Verdauungstrakt Mund Und Speiserohre",
        "folder": "verdauungstrakt-mund-und-speiserohre-2113"
      },
      {
        "id": "2114",
        "title": "Verdauungstrakt Magen Und Darm",
        "folder": "verdauungstrakt-magen-und-darm-2114"
      },
      {
        "id": "2115",
        "title": "Bauchspeicheldruse Insulin Und Verdauungsenzyme",
        "folder": "bauchspeicheldruse-insulin-und-verdauungsenzyme-2115"
      },
      {
        "id": "2116",
        "title": "Das Lymphsystem – Lymphknoten und Gefäße",
        "folder": "das-lymphsystem-lymphknoten-und-gefaese-2116"
      },
      {
        "id": "2117",
        "title": "Die Funktion Der Lymphknoten",
        "folder": "die-funktion-der-lymphknoten-2117"
      },
      {
        "id": "2118",
        "title": "Lymphsystem – Lymphflüssigkeit und Immunabwehr",
        "folder": "lymphsystem-lymphflussigkeit-und-immunabwehr-2-2118"
      },
      {
        "id": "2119",
        "title": "Das Endokrine System Hormone Und Signalwege",
        "folder": "das-endokrine-system-hormone-und-signalwege-2119"
      },
      {
        "id": "2120",
        "title": "Hormonsystem Hypophyse Und Schilddruse",
        "folder": "hormonsystem-hypophyse-und-schilddruse-2120"
      },
      {
        "id": "2121",
        "title": "Atemsystem Atemwege Und Lungen",
        "folder": "atemsystem-atemwege-und-lungen-2121"
      },
      {
        "id": "2122",
        "title": "Funktionen Der Lunge",
        "folder": "funktionen-der-lunge-2122"
      },
      {
        "id": "2123",
        "title": "Das Zwerchfell Atmung Und Bewegung",
        "folder": "das-zwerchfell-atmung-und-bewegung-2123"
      },
      {
        "id": "2124",
        "title": "Muskulatur Skelettmuskeln Und Glatte Muskeln",
        "folder": "muskulatur-skelettmuskeln-und-glatte-muskeln-2124"
      },
      {
        "id": "2125",
        "title": "Das Menschliche Skelett Knochen Und Gelenke",
        "folder": "das-menschliche-skelett-knochen-und-gelenke-2125"
      },
      {
        "id": "2126",
        "title": "Immunsystem Leukozyten Und Antikorper",
        "folder": "immunsystem-leukozyten-und-antikorper-2-2126"
      },
      {
        "id": "2127",
        "title": "Immunsystem Und Stress",
        "folder": "immunsystem-und-stress-2-2127"
      },
      {
        "id": "2128",
        "title": "Immunsystem Aufbau Und Bestandteile",
        "folder": "immunsystem-aufbau-und-bestandteile-2-2128"
      },
      {
        "id": "2129",
        "title": "Wie Antikorper Funktionieren",
        "folder": "wie-antikorper-funktionieren-2-2129"
      },
      {
        "id": "2130",
        "title": "Die Rolle Der Milz Im Immunsystem",
        "folder": "die-rolle-der-milz-im-immunsystem-2-2130"
      },
      {
        "id": "2131",
        "title": "Das Immunsystem Und Ernahrung",
        "folder": "das-immunsystem-und-ernahrung-2-2131"
      },
      {
        "id": "2132",
        "title": "Kinderkrankheiten Und Immunsystem",
        "folder": "kinderkrankheiten-und-immunsystem-2-2132"
      },
      {
        "id": "2133",
        "title": "Wie Impfungen Funktionieren",
        "folder": "wie-impfungen-funktionieren-2-2133"
      },
      {
        "id": "2134",
        "title": "Impfkalender Wichtige Impfungen",
        "folder": "impfkalender-wichtige-impfungen-2134"
      },
      {
        "id": "2135",
        "title": "Allergien Ursachen Und Symptome",
        "folder": "allergien-ursachen-und-symptome-2135"
      },
      {
        "id": "2136",
        "title": "Histamin Rolle Bei Allergien",
        "folder": "histamin-rolle-bei-allergien-2136"
      },
      {
        "id": "2137",
        "title": "Grippe Und Erkaltung",
        "folder": "grippe-und-erkaltung-2137"
      },
      {
        "id": "2138",
        "title": "Grippe Und Erkaltung Unterschiede Und Gemeinsamkeiten",
        "folder": "grippe-und-erkaltung-unterschiede-und-gemeinsamkeiten-2138"
      },
      {
        "id": "2139",
        "title": "Bakterielle Infektionen Und Abwehr",
        "folder": "bakterielle-infektionen-und-abwehr-2139"
      },
      {
        "id": "2140",
        "title": "Infektionskrankheiten Bertragungswege",
        "folder": "infektionskrankheiten-bertragungswege-2140"
      },
      {
        "id": "2141",
        "title": "Autoimmunerkrankungen Beispiele Und Erklarungen",
        "folder": "autoimmunerkrankungen-beispiele-und-erklarungen-2141"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=botanik&t=3752"
  },
  "insekten-und-tierwelt": {
    "slug": "insekten-und-tierwelt",
    "title": "Insekten & Tierreich",
    "category": "Pflanzen, Tiere & Ökologie",
    "shortDesc": "Bauplan der Insekten, vollständige & unvollständige Metamorphose, Bienenstaat und ökologische Rolle.",
    "longDesc": "Insekten sind die artenreichste Tiergruppe unseres Planeten. Mit Chitinpanzer, Tracheenatmung und Facettenaugen sind sie perfekt an verschiedenste Ökosysteme angepasst.",
    "keyPoints": [
      "Körpergliederung: Kopf, Brust (3 Beinpaare, Flügel) und Hinterleib",
      "Metamorphose: Vollständig (Schmetterling: Ei ➔ Raupe ➔ Puppe ➔ Falter) vs. Unvollständig (Heuschrecke)",
      "Honigbiene: Staatenbildung, Arbeitsteilung, Wabenbau, Schwänzeltanz zur Kommunikation"
    ],
    "exercises": [
      {
        "id": "2129",
        "title": "Wie Antikorper Funktionieren",
        "folder": "wie-antikorper-funktionieren-2-2129"
      },
      {
        "id": "2130",
        "title": "Die Rolle Der Milz Im Immunsystem",
        "folder": "die-rolle-der-milz-im-immunsystem-2-2130"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=insekten&t=3752"
  },
  "genetik-und-vererbung": {
    "slug": "genetik-und-vererbung",
    "title": "Genetik & Vererbung",
    "category": "Genetik & Evolution",
    "shortDesc": "Chromosomen, DNA-Doppelhelix, Mendelsche Regeln, Mutationen und moderne Gentechnik.",
    "longDesc": "Die Genetik erforscht die Weitergabe biologischer Merkmale über die DNA. Gregor Mendels Kreuzungsversuche legten die mathematischen Grundlagen der Vererbungslehre.",
    "keyPoints": [
      "DNA-Aufbau: Doppelhelix aus Zucker, Phosphat und den 4 Basen Adenin, Thymin, Guanin, Cytosin",
      "Mendelsche Regeln: Uniformitätsregel, Spaltungsregel, Unabhängigkeitsregel",
      "Gentechnik: Molekularbiologische Methoden zur gezielten Erbgutmodifikation"
    ],
    "exercises": [
      {
        "id": "2097",
        "title": "Geschlechtschromosomen Xx Und Xy",
        "folder": "geschlechtschromosomen-xx-und-xy-2097"
      },
      {
        "id": "2098",
        "title": "Die Haut Schweies Und Talgdrusen",
        "folder": "die-haut-schweies-und-talgdrusen-2098"
      },
      {
        "id": "2099",
        "title": "Die Haut Tastsinn Und Rezeptoren",
        "folder": "die-haut-tastsinn-und-rezeptoren-2099"
      },
      {
        "id": "2100",
        "title": "Haut Als Barriere Erste Verteidigungslinie",
        "folder": "haut-als-barriere-erste-verteidigungslinie-2100"
      },
      {
        "id": "2101",
        "title": "Die Rolle Der Schleimhaute",
        "folder": "die-rolle-der-schleimhaute-2101"
      },
      {
        "id": "2102",
        "title": "Das Auge Aufbau Und Sehvorgang",
        "folder": "das-auge-aufbau-und-sehvorgang-2102"
      },
      {
        "id": "2103",
        "title": "Das Auge Linse Und Netzhaut",
        "folder": "das-auge-linse-und-netzhaut-2103"
      },
      {
        "id": "2104",
        "title": "Die Zunge Geschmacksinn Und Knospen",
        "folder": "die-zunge-geschmacksinn-und-knospen-2104"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=genetik&t=3752"
  }
};
