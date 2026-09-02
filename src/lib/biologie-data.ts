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
  "Tiere & Zoologie",
  "Pflanzen & Botanik",
  "Zelle, Genetik & Evolution"
];

export const biologieTopics: Record<string, BiologieTopic> = {
  "sinnesorgane-des-menschen": {
    "slug": "sinnesorgane-des-menschen",
    "title": "Die Sinnesorgane des Menschen",
    "category": "Der menschliche Körper",
    "shortDesc": "Auge, Ohr, Nase, Zunge und Tastsinn – Aufbau, Funktion und Reizverarbeitung.",
    "longDesc": "Unsere Sinnesorgane erfassen Reize aus der Umwelt (Licht, Schall, chemische Stoffe, Druck, Temperatur) und wandeln sie in elektrische Nervenimpulse um, die im Gehirn verarbeitet werden.",
    "keyPoints": [
      "Auge: Hornhaut, Linse, Iris (Pupille als Blende), Netzhaut (Retina) mit Stäbchen (Hell-Dunkel) und Zapfen (Farbsehen), Sehnerv",
      "Ohr: Außenohr (Ohrmuschel, Gehörgang), Mittelohr (Trommelfell, Gehörknöchelchen: Hammer, Amboss, Steigbügel), Innenohr (Cochlea mit Haarsinneszellen) & Gleichgewichtsorgan",
      "Nase & Zunge: Geruchssinn (Riechschleimhaut) und Geschmackssinn (Geschmacksknospen für süß, sauer, salzig, bitter, umami)",
      "Haut als Sinnesorgan: Tastkörperchen (Mechanorezeptoren), Kälte-/Wärmerezeptoren und Schmerzrezeptoren"
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
      { "id": "2102", "title": "Das Auge - Aufbau und Sehvorgang", "folder": "das-auge-aufbau-und-sehvorgang-2102" },
      { "id": "2103", "title": "Das Auge - Linse und Netzhaut", "folder": "das-auge-linse-und-netzhaut-2103" },
      { "id": "2105", "title": "Die Nase - Aufbau und Sinus", "folder": "die-nase-aufbau-und-sinus-2105" },
      { "id": "2104", "title": "Die Zunge - Geschmacksinn und -knospen", "folder": "die-zunge-geschmacksinn-und-knospen-2104" },
      { "id": "2099", "title": "Die Haut - Tastsinn und Rezeptoren", "folder": "die-haut-tastsinn-und-rezeptoren-2099" },
      { "id": "2098", "title": "Die Haut - Schweiß- und Talgdrüsen", "folder": "die-haut-schweies-und-talgdrusen-2098" },
      {
        "id": "2232",
        "title": "Die Haut - Schutz und Sinnesorgan",
        "folder": "die-haut-schutz-und-sinnesorgan-2232"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=sinnesorgane+des+menschen&t=3752"
  },
  "herz-und-blutkreislauf": {
    "slug": "herz-und-blutkreislauf",
    "title": "Herz, Blut & Kreislaufsystem",
    "category": "Der menschliche Körper",
    "shortDesc": "Großer und kleiner Kreislauf, Herzanatomie, Blutbestandteile und Blutgruppen.",
    "longDesc": "Das Herz-Kreislauf-System transportiert Sauerstoff, Nährstoffe, Hormone und Abfallstoffe durch den Körper. Das Herz arbeitet als rhythmische Doppelpumpe.",
    "keyPoints": [
      "Doppelter Blutkreislauf: Lungenkreislauf (kleiner Kreislauf: Herz ➔ Lunge ➔ Herz) und Körperkreislauf (großer Kreislauf: Herz ➔ Körperorgane ➔ Herz)",
      "Gefäßarten: Arterien (führen sauerstoffreiches Blut vom Herzen weg – Ausnahme: Lungenarterie), Venen (führen sauerstoffarmes Blut zum Herzen hin), Kapillaren (Stoffaustausch)",
      "Herzanatomie: Rechter Vorhof, rechte Herzkammer (pumpen zur Lunge), linker Vorhof, linke Herzkammer (pumpen in die Aorta/Körper)",
      "Blutbestandteile: Blutplasma (55 %), Erythrozyten (rote Blutkörperchen mit Hämoglobin), Leukozyten (weiße Blutkörperchen), Thrombozyten (Blutplättchen zur Blutgerinnung)",
      "Blutgruppen (AB0-System & Rhesusfaktor): A, B, AB (Universalempfänger für Erythrozyten) und 0 (Universalspender für Erythrozyten)"
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
      { "id": "2109", "title": "Die Rolle der weißen Blutkörperchen", "folder": "die-rolle-der-weiesen-blutkorperchen-2109" },
      { "id": "2126", "title": "Immunsystem - Leukozyten und Antikörper", "folder": "immunsystem-leukozyten-und-antikorper-2-2126" },
      { "id": "1", "title": "Wie funktioniert die Blutgerinnung", "folder": "wie-funktioniert-die-blutgerinnung" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=herz+und+blutkreislauf&t=3752"
  },
  "verdauung-und-stoffwechsel": {
    "slug": "verdauung-und-stoffwechsel",
    "title": "Verdauungssystem & Stoffwechsel",
    "category": "Der menschliche Körper",
    "shortDesc": "Mund, Speiseröhre, Magen, Darm, Leber, Bauchspeicheldrüse und Nierenfunktion.",
    "longDesc": "Die Verdauung spaltet Nahrung mechanisch und biochemisch in verwertbare Nährstoffe (Kohlenhydrate, Fette, Proteine) auf, die über das Blut zu den Körperzellen gelangen.",
    "keyPoints": [
      "Verdauungsweg: Mund (Zerkleinerung, Amylase im Speichel) ➔ Speiseröhre (Peristaltik) ➔ Magen (Magensäure HCl, Pepsin) ➔ Dünndarm (Nährstoffaufnahme über Zotten) ➔ Dickdarm (Wasserentzug) ➔ Mastdarm",
      "Verdauungsdrüsen: Leber (Gallenproduktion zur Fettemulgierung), Gallenblase (Speicher), Bauchspeicheldrüse/Pankreas (Enzyme für Zucker, Eiweiß und Fett + Insulin/Glukagon)",
      "Nieren & Ausscheidung: Filtration des Blutes, Bildung von Primär- und Endharn, Regulation des Wasser- und Elektrolythaushalts",
      "Gebiss des Menschen: 32 Zähne beim Erwachsenen (Schneidezähne, Eckzähne, Backenzähne, Mahlzähne) vs. 20 Milchzähne"
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
        "title": "Verdauungstrakt - Mund und Speiseröhre",
        "folder": "verdauungstrakt-mund-und-speiserohre-2113"
      },
      {
        "id": "2114",
        "title": "Verdauungstrakt - Magen und Darm",
        "folder": "verdauungstrakt-magen-und-darm-2114"
      },
      {
        "id": "2115",
        "title": "Bauchspeicheldrüse - Insulin und Verdauungsenzyme",
        "folder": "bauchspeicheldruse-insulin-und-verdauungsenzyme-2115"
      },
      {
        "id": "2116",
        "title": "Das menschliche Gebiss – Zähne und Funktion",
        "folder": "das-menschliche-gebiss-zahne-und-funktion-2116"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=verdauung+und+stoffwechsel&t=3752"
  },
  "atmung-und-lunge": {
    "slug": "atmung-und-lunge",
    "title": "Atmungssystem & Gasaustausch",
    "category": "Der menschliche Körper",
    "shortDesc": "Atemwege, Lungenbläschen, Gasaustausch und Mechanik der Ein- und Ausatmung.",
    "longDesc": "Das Atmungssystem versorgt die Körperzellen mit lebensnotwendigem Sauerstoff für die Zellatmung und führt das Stoffwechsel-Endprodukt Kohlenstoffdioxid ab.",
    "keyPoints": [
      "Atemweg: Nase/Mund ➔ Rachen ➔ Kehlkopf (Stimmbänder, Kehldeckel) ➔ Luftröhre (Knorpelspangen, Flimmerepithel) ➔ Bronchien ➔ Bronchiolen ➔ Alveolen (Lungenbläschen)",
      "Gasaustausch: In den Alveolen diffundiert Sauerstoff ($O_2$) ins Blut und Kohlenstoffdioxid ($CO_2$) in die Atemluft",
      "Atemmechanik: Zwerchfellatmung (Bauchatmung) und Brustatmung (Zwischenrippenmuskeln) erzeugen Unterdruck beim Einatmen",
      "Vitalkapazität: Maximales ein- und ausatembare Luftvolumen der Lunge"
    ],
    "exercises": [
      {
        "id": "2121",
        "title": "Atemsystem - Atemwege und Lungen",
        "folder": "atemsystem-atemwege-und-lungen-2121"
      },
      {
        "id": "2122",
        "title": "Funktionen der Lunge",
        "folder": "funktionen-der-lunge-2122"
      },
      {
        "id": "2123",
        "title": "Das Zwerchfell - Atmung und Bewegung",
        "folder": "das-zwerchfell-atmung-und-bewegung-2123"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=atmung+und+lunge&t=3752"
  },
  "skelett-und-muskeln": {
    "slug": "skelett-und-muskeln",
    "title": "Skelett, Knochen & Muskelsystem",
    "category": "Der menschliche Körper",
    "shortDesc": "Knochenaufbau, Gelenktypen, Wirbelsäule und das Gegenspielerprinzip der Muskeln.",
    "longDesc": "Das menschliche Skelett (ca. 206 Knochen) verleiht dem Körper Stabilität, schützt innere Organe und ermöglicht zusammen mit den Muskeln und Sehnen Bewegung.",
    "keyPoints": [
      "Knochenaufbau: Knochenhaut (Periost), kompakte Knochenrinde (Kompakta), Spongiosa mit Knochenbälkchen und Knochenmark (Blutbildung)",
      "Wirbelsäule: Doppel-S-Form zur Stoßdämpfung (Hals-, Brust-, Lendenwirbelsäule, Kreuzbein, Steißbein) mit Bandscheiben als Puffer",
      "Gelenkarten: Kugelgelenk (Schulter, Hüfte), Scharniergelenk (Ellenbogen, Knie), Dreh-/Zapfengelenk (Atlas/Axis), Sattelgelenk (Daumen)",
      "Gegenspielerprinzip: Muskeln können sich nur aktiv zusammenziehen (kontrahieren), z. B. Bizeps (Beuger) und Trizeps (Strecker)"
    ],
    "exercises": [
      {
        "id": "2124",
        "title": "Muskulatur - Skelettmuskeln und glatte Muskeln",
        "folder": "muskulatur-skelettmuskeln-und-glatte-muskeln-2124"
      },
      {
        "id": "2125",
        "title": "Das menschliche Skelett - Knochen und Gelenke",
        "folder": "das-menschliche-skelett-knochen-und-gelenke-2125"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=skelett+und+muskeln&t=3752"
  },
  "nervensystem-und-gehirn": {
    "slug": "nervensystem-und-gehirn",
    "title": "Nervensystem & Gehirn",
    "category": "Der menschliche Körper",
    "shortDesc": "Zentrales und peripheres Nervensystem, Gehirnregionen, Neuronen und Reflexbogen.",
    "longDesc": "Das Nervensystem steuert und koordiniert alle Körperfunktionen, Reaktionen und Denkprozesse über elektrische Impulse und biochemische Botenstoffe.",
    "keyPoints": [
      "Gliederung: Zentrales Nervensystem (ZNS: Gehirn & Rückenmark) und Peripheres Nervensystem (PNS: sensorische und motorische Nervenbahnen)",
      "Aufbau des Gehirns: Großhirn (Denken, Sprache, Gedächtnis), Kleinhirn (Koordination & Gleichgewicht), Zwischenhirn (Thalamus/Hypothalamus), Hirnstamm (Lebensfunktionen wie Atmung, Puls)",
      "Aufbau eines Neurons: Dendriten (Signalaufnahme) ➔ Zellkörper (Soma) ➔ Axon (Reizweiterleitung mit Myelinscheide) ➔ Synaptische Endknöpfchen",
      "Synapse: Reizübertragung über Neurotransmitter (z. B. Dopamin, Acetylcholin, Serotonin) im synaptischen Spalt",
      "Reflexbogen: Unwillkürliche, extrem schnelle Reaktion über das Rückenmark ohne vorherige Großhirnbeteiligung (z. B. Kniesehnenreflex)"
    ],
    "exercises": [
      {
        "id": "2102",
        "title": "Das zentrale Nervensystem – Gehirn und Rückenmark",
        "folder": "das-zentrale-nervensystem-gehirn-und-ruckenmark-2102"
      },
      {
        "id": "2103",
        "title": "Nervenzellen und Reizweiterleitung",
        "folder": "nervenzellen-und-reizweiterleitung-2103"
      },
      {
        "id": "2104",
        "title": "Das periphere Nervensystem und Reflexe",
        "folder": "das-periphere-nervensystem-und-reflexe-2104"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nervensystem+und+gehirn&t=3752"
  },
  "immunsystem-und-abwehr": {
    "slug": "immunsystem-und-abwehr",
    "title": "Immunsystem, Abwehrkräfte & Infektionen",
    "category": "Der menschliche Körper",
    "shortDesc": "Leukozyten, Antikörper, Lymphsystem, Impfungen (aktiv/passiv), Allergien und Krankheitserreger.",
    "longDesc": "Das Immunsystem schützt vor Krankheitserregern (Bakterien, Viren, Pilze, Parasiten). Es unterscheidet zwischen angeborener unspezifischer und erworbener spezifischer Abwehr.",
    "keyPoints": [
      "Leukozyten: Fresszellen (Makrophagen), T-Helferzellen, T-Killerzellen, B-Lymphozyten (produzieren Antikörper) und B-Gedächtniszellen",
      "Schlüssel-Schloss-Prinzip: Antikörper binden hochspezifisch an passende Antigene auf der Oberfläche von Krankheitserregern",
      "Aktive Immunisierung (Schutzimpfung): Verabreichung abgeschwächter/inaktivierter Antigene ➔ Körper baut eigene Antikörper und Gedächtniszellen auf",
      "Passive Immunisierung (Heilimpfung): Verabreichung fertiger Antikörper für sofortige Soforthilfe",
      "Lymphsystem: Lymphgefäße, Lymphknoten (Filterstationen), Milz, Thymus und Mandeln"
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
      },
      {
        "id": "2081",
        "title": "Die Rolle der Milz im Immunsystem",
        "folder": "die-rolle-der-milz-im-immunsystem-2081"
      },
      {
        "id": "2082",
        "title": "Antigen-Antikörper-Reaktion",
        "folder": "antigen-antikorper-reaktion-2082"
      },
      {
        "id": "2083",
        "title": "Aktive und passive Immunisierung",
        "folder": "aktive-und-passive-immunisierung-2083"
      },
      {
        "id": "2084",
        "title": "Kinderkrankheiten und Immunsystem",
        "folder": "allergien-wenn-das-immunsystem-uberreagiert-2084"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=immunsystem+und+abwehr&t=3752"
  },
  "die-haut": {
    "slug": "die-haut",
    "title": "Die Haut & Schutzfunktionen",
    "category": "Der menschliche Körper",
    "shortDesc": "Schichten der Haut, Temperaturregulation, Schutz vor UV-Strahlung und Hautanhangsgebilde.",
    "longDesc": "Die Haut ist das flächenmäßig größte Organ des Menschen. Sie schützt vor mechanischen Verletzungen, Krankheitserregern, UV-Strahlung und Austrocknung.",
    "keyPoints": [
      "Hautschichten: Oberhaut (Epidermis mit Horn- und Keimschicht, Melanozyten für UV-Schutz), Lederhaut (Dermis mit Blutgefäßen, Tastkörperchen, Talg- und Schweißdrüsen), Unterhaut (Subkutis mit Fettgewebe)",
      "Thermoregulation: Schweißproduktion (Verdunstungskälte) und Weitstellung/Engstellung der Hautkapillaren",
      "Hautanhangsgebilde: Haare, Nägel, Talgdrüsen, Schweißdrüsen und Duftdrüsen",
      "Sonnenschutz: Melanin färbt die Haut dunkel; UV-Schutz verhindert DNA-Schäden in den Hautzellen"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=die+haut&t=3752"
  },
  "fortpflanzung-und-entwicklung": {
    "slug": "fortpflanzung-und-entwicklung",
    "title": "Fortpflanzung, Hormone & Entwicklung",
    "category": "Der menschliche Körper",
    "shortDesc": "Geschlechtsorgane, Menstruationszyklus, Befruchtung, Schwangerschaft und Hormone.",
    "longDesc": "Die menschliche Fortpflanzung basiert auf der Vereinigung von Eizelle und Spermium. Hormone steuern Pubertät, Zyklus, Schwangerschaft und Geburt.",
    "keyPoints": [
      "Geschlechtsorgane: Männlich (Hoden zur Spermienproduktion, Nebenhoden, Prostata, Penis) | Weiblich (Eierstöcke mit Eizellen, Eileiter, Gebärmutter, Vagina)",
      "Menstruationszyklus (ca. 28 Tage): Follikelphase (Östrogen) ➔ Eisprung (Ovulation um Tag 14) ➔ Lutealphase (Progesteron) ➔ Menstruation bei Nichtbefruchtung",
      "Befruchtung & Schwangerschaft: Verschmelzung im Eileiter zur Zygote ➔ Einnistung in die Gebärmutterschleimhaut (Endometrium) ➔ Versorgung über Plazenta und Nabelschnur (ca. 40 Wochen)",
      "Wichtige Hormone: Insulin/Glukagon (Blutzucker), Adrenalin (Stress/Leistung), Thyroxin (Schilddrüse), Testosteron & Östrogen/Progesteron"
    ],
    "exercises": [
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
        "folder": "geschlechtsorgane-und-fortpflanzung-2096"
      },
      {
        "id": "2097",
        "title": "Der Menstruationszyklus",
        "folder": "der-menstruationszyklus-2097"
      },
      {
        "id": "2098",
        "title": "Schwangerschaft und Fötusentwicklung",
        "folder": "schwangerschaft-und-fotusentwicklung-2098"
      },
      {
        "id": "2099",
        "title": "Die Plazenta – Lebensader des Ungeborenen",
        "folder": "die-plazenta-lebensader-des-ungeborenen-2099"
      },
      {
        "id": "2100",
        "title": "Hormone – die chemischen Botenstoffe",
        "folder": "hormone-die-chemischen-botenstoffe-2100"
      },
      {
        "id": "2101",
        "title": "Die Schilddrüse und Stoffwechselregulation",
        "folder": "die-schilddruse-und-stoffwechselregulation-2101"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=fortpflanzung+und+entwicklung&t=3752"
  },
  "sucht-und-drogen": {
    "slug": "sucht-und-drogen",
    "title": "Suchtgefahren, Drogen & Prävention",
    "category": "Der menschliche Körper",
    "shortDesc": "Wirkung von Alkohol, Nikotin, Cannabis und harten Drogen auf Gehirn und Körper.",
    "longDesc": "Suchtmittel beeinflussen Neurotransmitter im Gehirn (Belohnungszentrum) und können zu physischer und psychischer Abhängigkeit führen.",
    "keyPoints": [
      "Suchtentstehung: Genuss ➔ Gewöhnung ➔ Missbrauch ➔ psychische & physische Abhängigkeit (Toleranzentwicklung)",
      "Alkohol: Zellgift, dämpft das ZNS, schädigt Leber (Fettleber, Zirrhose), Gehirnzellen und das ungeborene Leben (FASD)",
      "Nikotin & Tabak/Vaping: Macht extrem schnell abhängig; Teerstoffe und Verbrennungsprodukte verursachen Lungenkrebs und Gefäßverengung",
      "Illegale Drogen: Cannabis (THC), Opioide (Morphin, Heroin), Stimulanzien (Kokain, Amphetamine), Halluzinogene (LSD)",
      "Prävention: Aufklärung, Stärkung des Selbstwertgefühls und Hilfsangebote (Suchtberatung)"
    ],
    "exercises": [
      {
        "id": "2117",
        "title": "Drogen – Arten und Wirkungen",
        "folder": "drogen-arten-und-wirkungen-2117"
      },
      {
        "id": "2118",
        "title": "Alkohol und seine Wirkung auf den Körper",
        "folder": "alkohol-und-seine-wirkung-auf-den-korper-2118"
      },
      {
        "id": "2119",
        "title": "Nikotin und Rauchen – Risiken und Folgen",
        "folder": "nikotin-und-rauchen-risiken-und-folgen-2119"
      },
      {
        "id": "2120",
        "title": "Cannabis – Wirkung und rechtliche Aspekte",
        "folder": "cannabis-wirkung-und-rechtliche-aspekte-2120"
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
      },
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=sucht+und+drogen&t=3752"
  },
  "pflanzen-grundlagen-und-aufbau": {
    "slug": "pflanzen-grundlagen-und-aufbau",
    "title": "Grundlagen der Botanik & Pflanzenaufbau",
    "category": "Pflanzen & Botanik",
    "shortDesc": "Wurzel, Sprossachse, Blattaufbau, Fotosynthese, Spaltöffnungen und Wassertransport.",
    "longDesc": "Pflanzen sind autotrophe Lebewesen: Sie erzeugen mithilfe von Sonnenlicht, Wasser und Kohlenstoffdioxid energiereiche Glukose und Sauerstoff (Fotosynthese).",
    "keyPoints": [
      "Grundorgane: Wurzel (Wasser-/Mineralstoffaufnahme & Verankerung), Sprossachse (Stabilität & Transport), Blatt (Fotosynthese & Transpiration)",
      "Blattaufbau: Cuticula, obere Epidermis, Palisadengewebe (Hauptort der Fotosynthese), Schwammgewebe mit Interzellularen, untere Epidermis mit Spaltöffnungen (Stomata)",
      "Fotosynthese-Formel: $6\\,CO_2 + 6\\,H_2O + \\text{Lichtenergie} \\rightarrow C_6H_{12}O_6 + 6\\,O_2$",
      "Leitbündel: Xylem (Transport von Wasser und Mineralien von der Wurzel aufwärts) und Phloem (Transport von Zucker/Assimilaten zu den Speicherorganen)",
      "Transpirationssog & Kapillarkräfte: Ermöglichen Wassertransport bis in hohe Baumkronen"
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
    "shortDesc": "Heimische Baumarten, Blatt- und Nadelmerkmale, Jahresringe und Stockwerke des Waldes.",
    "longDesc": "Bäume sind mehrjährige verholzte Pflanzen. Laubbäume werfen im Winter ihre Blätter ab, während Nadelbäume mit wachsüberzogenen Nadeln an Trockenheit und Kälte angepasst sind.",
    "keyPoints": [
      "Wichtige Laubbäume: Stieleiche/Traubeneiche, Rotbuche, Bergahorn, Hänge-Birke, Sommer-/Winterlinde, Gemeine Esche, Rosskastanie",
      "Wichtige Nadelbäume: Gemeine Fichte (Flachwurzler, hängende Zapfen), Weißtanne (Tiefwurzler, stehende Zapfen), Waldkiefer, Europäische Lärche (sommergrün / nadelt im Winter ab)",
      "Stammaufbau: Borke (äußerer Schutz), Bast (Nährstoffleitung), Kambium (Wachstumsschicht), Splintholz, Kernholz, Jahresringe (Frühholz: weitlumig, hell; Spätholz: englumig, dunkel)",
      "Stockwerke des Waldes: Wurzelschicht ➔ Moosschicht ➔ Krautschicht ➔ Strauchschicht ➔ Kronenschicht"
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
  "nutzpflanzen-und-kraeuter": {
    "slug": "nutzpflanzen-und-kraeuter",
    "title": "Nutzpflanzen, Getreide & Kräuter",
    "category": "Pflanzen & Botanik",
    "shortDesc": "Getreidearten, Knollenpflanzen, Hülsenfrüchte, Küchen- und Heilkräuter.",
    "longDesc": "Nutzpflanzen dienen dem Menschen als Grundnahrungsmittel, Futtermittel oder Heilmittel. Sie wurden über Jahrtausende züchterisch optimiert.",
    "keyPoints": [
      "Getreidearten (Süßgräser): Weizen (Ähre), Roggen (lange Grannen), Gerste (sehr lange Grannen), Hafer (Rispe), Mais (Kolben), Reis",
      "Knollen- & Wurzelgemüse: Kartoffel (Nachtschattengewächs, unterirdische Sprossknolle), Zuckerrübe, Karotte (Pfahlwurzel)",
      "Hülsenfrüchte (Leguminosen): Erbse, Bohne, Soja, Linse – leben in Symbiose mit Knöllchenbakterien zur Stickstofffixierung",
      "Kräuter & Heilpflanzen: Kamille, Pfefferminze, Salbei, Thymian, Rosmarin, Basilikum, Brennnessel – reich an ätherischen Ölen und sekundären Pflanzenstoffen"
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
        "id": "2214",
        "title": "Der Löwenzahn - Unkraut oder Heilpflanze?",
        "folder": "der-lowenzahn-unkraut-oder-heilpflanze-2214"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nutzpflanzen+und+kraeuter&t=3752"
  },
  "blumen-pilze-und-niedere-pflanzen": {
    "slug": "blumen-pilze-und-niedere-pflanzen",
    "title": "Blütenpflanzen, Pilze, Moose & Farne",
    "category": "Pflanzen & Botanik",
    "shortDesc": "Blütenaufbau, Bestäubung, Frühblüher, Pilze als Zersetzer, Moose und Farne.",
    "longDesc": "Blüten locken Bestäuber an, um die geschlechtliche Fortpflanzung zu sichern. Pilze bilden ein eigenes Reich und zersetzen organische Stoffe.",
    "keyPoints": [
      "Blütenaufbau: Kelchblätter (Schutz), Kronblätter (Schauapparat), Staubblätter (männlich: Staubbeutel mit Pollen), Stempel (weiblich: Narbe, Griffel, Fruchtknoten mit Samenanlage)",
      "Bestäubungsarten: Insektenbestäubung (auffällige Blüten, Nektar) vs. Windbestäubung (unscheinbare Blüten, massig leichter Pollen)",
      "Frühblüher: Schneeglöckchen, Krokus, Narzisse, Tulpe, Buschwindröschen – nutzen Licht vor dem Laubaustrieb der Bäume über Zwiebeln/Knollen",
      "Pilze: Keine Pflanzen (keine Fotosynthese!), heterotrophe Lebensweise, Zellwand aus Chitin; Fruchtkörper vs. unterirdisches Myzel; Symbiose als Mykorrhiza mit Baumwurzeln",
      "Sporenpflanzen: Moose (wurzel- und gefäßlos) und Farne (echte Gefäßkryptogamen) pflanzen sich über Sporen fort"
    ],
    "exercises": [
      {
        "id": "1084",
        "title": "Pilze",
        "folder": "pilze-1084"
      },
      {
        "id": "2205",
        "title": "Orchideen - Exotische Schönheiten",
        "folder": "orchideen-exotische-schonheiten-2205"
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
        "id": "2216",
        "title": "Der Efeu - Kletterkünstler und Bodendecker",
        "folder": "der-efeu-kletterkunstler-und-bodendecker-2216"
      },
      {
        "id": "2217",
        "title": "Der Farn - ein Überlebenskünstler der Wälder",
        "folder": "der-farn-ein-berlebenskunstler-der-walder-2217"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=blumen+pilze+und+niedere+pflanzen&t=3752"
  },
  "saeugetiere": {
    "slug": "saeugetiere",
    "title": "Säugetiere – Wild-, Haus- & Nutztiere",
    "category": "Tiere & Zoologie",
    "shortDesc": "Merkmale der Säugetiere, Gebisstypen, Huftiere, Raubtiere und Meeressäuger.",
    "longDesc": "Säugetiere sind gleichwarme (homoiotherme) Wirbeltiere mit Fell, die lebendgebärend sind und ihren Nachwuchs mit Muttermilch säugen.",
    "keyPoints": [
      "Hauptmerkmale: Behaarung/Fell, Lungenatmung, gleichwarm (konstante Körpertemperatur), vierkammeriges Herz, Säugen der Jungtiere, hochentwickeltes Gehirn",
      "Wildtiere unserer Wälder: Reh, Rothirsch (Paarzeher / Wiederkäuer), Wildschwein, Rotfuchs, Dachs, Feldhase, Eichhörnchen, Wolf, Luchs, Braunbär, Igel, Maulwurf, Fledermaus (Echoortung)",
      "Haustiere & Nutztiere: Hund (Raubtiergebiss), Hauskatze, Hausrind (Wiederkäuer-Magensystem mit Pansen, Netzmagen, Blättermagen, Labmagen), Hausschwein, Pferd (Unpaarhufer)",
      "Nagetiere: Nagezähne mit ständigem Nachwachsen (Biber, Meerschweinchen, Hamster, Maus, Ratte)",
      "Meeressäuger: Wale, Delfine, Robben – sekundär an das Wasserleben angepasst, tauchen mit Lungenatmung"
    ],
    "exercises": [
      {
        "id": "1423",
        "title": "Die Wirbeltiere",
        "folder": "die-wirbeltiere-1423"
      },
      {
        "id": "1030",
        "title": "Das Pferd",
        "folder": "das-pferd-1030"
      },
      {
        "id": "1041",
        "title": "Der Affe",
        "folder": "der-affe-1041"
      },
      {
        "id": "1043",
        "title": "Der Fuchs",
        "folder": "der-fuchs-1043"
      },
      {
        "id": "1044",
        "title": "Der Igel",
        "folder": "der-igel-1044"
      },
      {
        "id": "1045",
        "title": "Das Kamel",
        "folder": "das-kamel-1045"
      },
      {
        "id": "1064",
        "title": "Die Fledermaus",
        "folder": "die-fledermaus-1064"
      },
      {
        "id": "1066",
        "title": "Die Maus",
        "folder": "die-maus-1066"
      },
      {
        "id": "1074",
        "title": "Der Maulwurf",
        "folder": "der-maulwurf-1074"
      },
      {
        "id": "1077",
        "title": "Die Ratte",
        "folder": "die-ratte-1077"
      },
      {
        "id": "1081",
        "title": "Der Wal",
        "folder": "der-wal-1081"
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
        "id": "1094",
        "title": "Der Hirsch",
        "folder": "der-hirsch-1094"
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
        "id": "1414",
        "title": "Die Hauskatze",
        "folder": "die-hauskatze-1414"
      },
      {
        "id": "1415",
        "title": "Die Raubkatze",
        "folder": "die-raubkatze-1415"
      },
      {
        "id": "1416",
        "title": "Der Marder",
        "folder": "der-marder-1416"
      },
      {
        "id": "1419",
        "title": "Das Eichhörnchen",
        "folder": "das-eichhornchen-1419"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=saeugetiere&t=3752"
  },
  "voegel": {
    "slug": "voegel",
    "title": "Vögel, Fluganpassung & Vogelzug",
    "category": "Tiere & Zoologie",
    "shortDesc": "Federkleid, Skelettanpassungen zum Fliegen, Vogelei, Schnabelformen und Zugvögel.",
    "longDesc": "Vögel sind gleichwarme, eierlegende Wirbeltiere mit Federn und Flügeln. Ihr Skelett ist extrem leicht und stabil für den Flug gebaut.",
    "keyPoints": [
      "Anpassungen an das Fliegen: Pneumatisierte (luftgefüllte) Knochen, kräftiger Brustbeinkamm für Flugmuskeln, Stromlinienform, Luftsäcke zur Unterstützung der Lungenatmung",
      "Federaufbau: Spule, Schaft, Fahne aus verhakten Ästen und Strahlen (Konturfedern, Daunen zur Wärmeisolation)",
      "Vogelei: Kalkschale, Schalenhaut, Eiklar, Eidotter mit Keimscheibe, Hagelschnüre (Chalazen) halten Dotter in Position",
      "Schnabelformen zeigen Ernährung: Körnerfresser (Fink), Fleischfresser (Greifvogel), Insektenfresser (Schwalbe, Meise), Fischfresser (Reiher, Eisvogel)",
      "Vogelzug: Standvögel (Amsel, Spatz) vs. Zugvögel (Storch, Schwalbe, Kuckuck) nutzen Orientierung am Erdmagnetfeld, Sonnenstand und Sternen"
    ],
    "exercises": [
      {
        "id": "1422",
        "title": "Die Vögel",
        "folder": "die-vogel-1422"
      },
      {
        "id": "1031",
        "title": "Das Huhn",
        "folder": "das-huhn-1031"
      },
      {
        "id": "1040",
        "title": "Der Adler",
        "folder": "der-adler-1040"
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
        "id": "1420",
        "title": "Die Zugvögel",
        "folder": "die-zugvogel-1420"
      },
      {
        "id": "1421",
        "title": "Der Schwan",
        "folder": "der-schwan-1421"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=voegel&t=3752"
  },
  "reptilien-und-amphibien": {
    "slug": "reptilien-und-amphibien",
    "title": "Reptilien (Kriechtiere) & Amphibien (Lurche)",
    "category": "Tiere & Zoologie",
    "shortDesc": "Wechselwarme Wirbeltiere, Schuppenhaut vs. feuchte Haut, Metamorphose des Frosches.",
    "longDesc": "Reptilien und Amphibien sind wechselwarme (poikilotherme) Tiere. Amphibien vollziehen eine Metamorphose im Wasser, während Reptilien vollkommen an das Landleben angepasst sind.",
    "keyPoints": [
      "Wechselwarm: Körpertemperatur passt sich der Umgebungstemperatur an; Kältestarre im Winter",
      "Amphibien (Lurche): Feuchte, drüsenreiche Haut für Hautatmung; Laichablage im Wasser; Metamorphose: Ei ➔ Kaulquappe mit Kiemen & Ruderschwanz ➔ erwachsener Frosch mit Lunge und 4 Beinen",
      "Heimische Amphibien: Grasfrosch, Erdkröte, Laubfrosch, Feuersalamander, Bergmolch",
      "Reptilien (Kriechtiere): Trockene Hornschuppenhaut schützt vor Verdunstung; Lungenatmung; Eier mit lederartiger Schale (Amnioten)",
      "Heimische Reptilien: Zauneidechse, Blindschleiche (beinlose Echse!), Ringelnatter (ungiftig), Kreuzotter (Giftschlange mit Zickzackband)"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=reptilien+und+amphibien&t=3752"
  },
  "fische-und-leben-im-wasser": {
    "slug": "fische-und-leben-im-wasser",
    "title": "Fische & Anpassung an den Wasserlebensraum",
    "category": "Tiere & Zoologie",
    "shortDesc": "Kiemenatmung, Schwimmblase, Flossen, Seitenlinienorgan und heimische Fischarten.",
    "longDesc": "Fische sind wechselwarme Wirbeltiere, die perfekt an das Leben im Wasser angepasst sind. Sie atmen gelösten Sauerstoff über Kiemen und bewegen sich mit Flossen fort.",
    "keyPoints": [
      "Kiemenatmung: Wasser strömt durchs Maul über die Kiemenblättchen nach außen; Gegenstromprinzip sichert hocheffizienten Sauerstoffübergang ins Blut",
      "Schwimmblase: Dient der hydrostatischen Tarierung und dem Schweben in verschiedenen Wassertiefen durch Gasregulation",
      "Sinnesleistungen: Seitenlinienorgan registriert feinste Druckwellen und Wasserströmungen",
      "Körperbau: Stromlinienform, Schleimschicht & Schuppen verringern Reibungswiderstand; Flossen zur Steuerung und Fortbewegung (Schwanz-, Rücken-, Brust-, Bauch-, Afterflosse)",
      "Heimische Fische: Bachforelle, Karpfen, Hecht (Raubfisch), Flussbarsch, Zander, Wels, Aal (Wanderfisch)"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=fische+und+leben+im+wasser&t=3752"
  },
  "insekten-und-staatenbildner": {
    "slug": "insekten-und-staatenbildner",
    "title": "Insekten & staatenbildende Tiere",
    "category": "Tiere & Zoologie",
    "shortDesc": "Dreiteiliger Körperbau, Facettenaugen, Tracheenatmung, Metamorphose und der Bienenstaat.",
    "longDesc": "Insekten sind die artenreichste Tiergruppe der Erde. Sie besitzen ein Chitin-Außenskelett, sechs Beine und durchlaufen eine vollkommene oder unvollkommene Metamorphose.",
    "keyPoints": [
      "Körpergliederung: Kopf (Caput mit Facettenaugen und Fühlern), Brust (Thorax mit 3 Beinpaaren und meist 2 Flügelpaaren), Hinterleib (Abdomen)",
      "Atmung & Kreislauf: Tracheensystem (feine Röhren leiten Luft direkt zu den Zellen), offener Blutkreislauf mit Röhrenherz",
      "Metamorphose: Vollkommen (Ei ➔ Raupe/Larve ➔ Puppe ➔ Imago, z. B. Schmetterling, Käfer, Biene) vs. Unvollkommen (Ei ➔ Nymphe häutet sich schrittweise, z. B. Heuschrecke, Wanze)",
      "Staatenbildung am Beispiel der Honigbiene: Königin (Eiablage), Drohnen (männlich zur Begattung), Arbeiterinnen (Brutpflege, Bau, Nektarsammeln, Wächter); Schwänzeltanz zur Kommunikation",
      "Ökologische Bedeutung: Bestäuberleistung für Blütenpflanzen und Nahrungsgrundlage für Vögel und Kleinsäuger"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=insekten+und+staatenbildner&t=3752"
  },
  "spinnentiere-krebse-und-wirbellose": {
    "slug": "spinnentiere-krebse-und-wirbellose",
    "title": "Spinnentiere, Krebse & Wirbellose Tiere",
    "category": "Tiere & Zoologie",
    "shortDesc": "Spinnen (8 Beine), Krebstiere, Weichtiere (Schnecken, Muscheln) und Ringelwürmer.",
    "longDesc": "Wirbellose Tiere besitzen keine Wirbelsäule. Gliedertiere (Spinnen, Krebse) tragen ein Chitin-Exoskelett, Weichtiere oft eine kalkhaltige Schale.",
    "keyPoints": [
      "Spinnentiere (Arachnida): 8 Laufbeine, 2 Körperabschnitte (Kopfbruststück & Hinterleib), Punktaugen, Kieferklauen mit Giftdrüsen, Spinnwarzen zur Netzherstellung (z. B. Kreuzspinne, Zecke)",
      "Krebstiere (Crustacea): 10 oder mehr Beine (oft Scheren), Kiemenatmung, Panzer aus Chitin und Kalk (z. B. Flusskrebs, Krabbe, Hummer)",
      "Weichtiere (Mollusca): Schnecken (Raspelzunge/Radula, Gehäuse), Muscheln (zweiklappige Schale, Filtrierer), Kopffüßer (Tintenfische, Kraken – hochentwickeltes Nervensystem)",
      "Ringelwürmer (Annelida): Regenwurm mit segmentiertem Körperbau, Hautatmung, Zwitter, enorme Bedeutung für die Bodenbelüftung und Humusbildung"
    ],
    "exercises": [
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=spinnentiere+krebse+und+wirbellose&t=3752"
  },
  "zellbiologie-und-mikroskopie": {
    "slug": "zellbiologie-und-mikroskopie",
    "title": "Zellbiologie, Zellorganellen & Mikroskopie",
    "category": "Zelle, Genetik & Evolution",
    "shortDesc": "Tier- vs. Pflanzenzelle, Zellorganellen, Kennzeichen des Lebens und Mikroskopie.",
    "longDesc": "Die Zelle ist die kleinste Bau- und Funktionseinheit aller Lebewesen. Pflanzen- und Tierzellen besitzen gemeinsame Organellen, unterscheiden sich jedoch grundlegend.",
    "keyPoints": [
      "Kennzeichen des Lebens: Stoffwechsel, Fortpflanzung, Wachstum/Entwicklung, Reizbarkeit, Bewegung, Aufbau aus Zellen",
      "Organellen beider Zelltypen: Zellkern (DNA-Steuerzentrale), Mitochondrien (Zellatmung / ATP-Produktion), Ribosomen (Proteinsynthese), Endoplasmatisches Retikulum (ER), Golgi-Apparat, Zellmembran",
      "Nur in Pflanzenzellen: Feste Zellwand aus Cellulose (Stabilität), Chloroplasten (Fotosynthese mit Chlorophyll), Große Zentralvakuole (Zellsaft, Turgordruck)",
      "Mikroskop: Okularvergrößerung $\\times$ Objektivvergrößerung = Gesamtvergrößerung; Präparatherstellung mit Deckglas"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=zellbiologie+und+mikroskopie&t=3752"
  },
  "genetik-und-vererbung": {
    "slug": "genetik-und-vererbung",
    "title": "Genetik, DNA, Mitose & Vererbung",
    "category": "Zelle, Genetik & Evolution",
    "shortDesc": "DNA-Doppelhelix, Chromosomen, Mitose & Meiose, Mendel-Regeln und Mutationen.",
    "longDesc": "Die Genetik erforscht die Weitergabe von Erbinformationen. Die DNA im Zellkern codiert alle Bauanleitungen für Proteine.",
    "keyPoints": [
      "DNA-Struktur: Doppelhelix aus Zucker (Desoxyribose), Phosphat und 4 Basen nach dem Schlüssel-Schloss-Prinzip: Adenin-Thymin (A-T), Guanin-Cytosin (G-C)",
      "Chromosomen: Beim Menschen 46 Chromosomen (23 Paare: 22 Autosomenpaare + 1 Gonosomenpaar XX/XY)",
      "Mitose (Kernteilung für Körperzellen): Prophase, Metaphase, Anaphase, Telophase ➔ 2 identische diploide Tochterzellen (2n)",
      "Meiose (Reifeteilung für Keimzellen): Reduktionsteilung ➔ 4 haploide Geschlechtszellen (1n) mit neuer genetischer Kombination (Crossing-over)",
      "Mendel-Regeln: 1. Uniformitätsregel, 2. Spaltungsregel, 3. Unabhängigkeitsregel (dominant-rezessiver Erbgang)"
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
        "id": "5357",
        "title": "Die Geschichte der Genetik",
        "folder": "die-geschichte-der-genetik-5357"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=genetik+und+vererbung&t=3752"
  },
  "evolution-und-stammesgeschichte": {
    "slug": "evolution-und-stammesgeschichte",
    "title": "Evolution, Darwin & Stammesgeschichte",
    "category": "Zelle, Genetik & Evolution",
    "shortDesc": "Evolutionstheorie nach Charles Darwin, Selektion, Fossilien, Brückentiere und Menschenwerdung.",
    "longDesc": "Die Evolutionstheorie erklärt die Entstehung und den Wandel der Artenvielfalt über Jahrmillionen durch Mutation, Rekombination und natürliche Selektion.",
    "keyPoints": [
      "Darwins Evolutionstheorie: Überproduktion von Nachkommen, genetische Variabilität, Selektion (\"Survival of the Fittest\" = Überleben der am besten an die Umwelt Angepassten)",
      "Evolutionsfaktoren: Mutation (zufällige Genveränderung), Rekombination, Selektion, Isolation (geografische Trennung führt zu neuen Arten)",
      "Belege der Evolution: Fossilien (Versteinerungen, Einschlüsse), Brückentiere (z. B. Archaeopteryx: Merkmale von Reptil & Vogel; Schnabeltier), Rudimente & Atavismen, Homologie & Analogie",
      "Stammesgeschichte des Menschen: Hominidenentwicklung von Australopithecus über Homo habilis, Homo erectus, Homo neanderthalensis bis zum modernen Homo sapiens"
    ],
    "exercises": [
      {
        "id": "2221",
        "title": "Die Evolution der Pflanzen",
        "folder": "die-evolution-der-pflanzen-2221"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=evolution+und+stammesgeschichte&t=3752"
  },
  "oekologie-und-lebensraeume": {
    "slug": "oekologie-und-lebensraeume",
    "title": "Ökologie, Ökosysteme & Artenschutz",
    "category": "Zelle, Genetik & Evolution",
    "shortDesc": "Nahrungsketten, Trophieebenen, Stoffkreisläufe, Biotop/Biozönose und Biodiversität.",
    "longDesc": "Die Ökologie untersucht die Wechselbeziehungen zwischen Lebewesen und ihrer belebten (biotischen) sowie unbelebten (abiotischen) Umwelt.",
    "keyPoints": [
      "Grundbegriffe: Biotop (abiotischer Lebensraum: Licht, Temperatur, Wasser) + Biozönose (Lebensgemeinschaft) = Ökosystem",
      "Nahrungsbeziehungen: Produzenten (Pflanzen erzeugen Biomasse) ➔ Primärkonsumenten (Pflanzenfresser) ➔ Sekundärkonsumenten (Fleischfresser) ➔ Destruenten (Zersetzer wie Pilze, Bakterien, Regenwürmer)",
      "Nahrungsnetz & Energiefluss: Nur ca. 10 % der Energie wird von einer Trophieebene zur nächsten weitergegeben (Energiepyramide)",
      "Ökologische Wechselwirkungen: Räuber-Beute-Beziehung (Lotka-Volterra-Regeln), Symbiose (Vorteil für beide, z. B. Biene-Blüte, Flechte), Parasitismus (Schädigung des Wirts, z. B. Zecke)",
      "Artenschutz & Biodiversität: Schutz von Feuchtgebieten, Wäldern und Magerwiesen gegen Artensterben und Klimawandel"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=oekologie+und+lebensraeume&t=3752"
  }
};
