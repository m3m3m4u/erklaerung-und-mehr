export interface KlimaExercise {
  id: string;
  title: string;
  folder: string;
}

export interface KlimaTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: KlimaExercise[];
  worksheetLink?: string;
}

export const klimaCategories: string[] = [
  "Die 17 Nachhaltigkeitsziele (SDGs)",
  "Klimawandel, Atmosphäre & Klimazonen",
  "Klimaschutz, Klimapolitik & CO₂-Bepreisung",
  "Erneuerbare Energien & Energiewende",
  "Kreislaufwirtschaft, Recycling & Müll",
  "Ressourcen, Ökologie & Globale Umweltfragen"
];

export const klimaTopics: Record<string, KlimaTopic> = {
  "sdgs-menschen-und-wohlstand": {
    "slug": "sdgs-menschen-und-wohlstand",
    "title": "SDGs: Menschen, Bildung, Gesundheit & Gerechtigkeit",
    "category": "Die 17 Nachhaltigkeitsziele (SDGs)",
    "shortDesc": "Kein Hunger, hochwertige Bildung, Geschlechtergerechtigkeit, faire Arbeit und globale Partnerschaften.",
    "longDesc": "Die 17 Nachhaltigkeitsziele der Vereinten Nationen (Agenda 2030) stellen den Menschen und soziale Gerechtigkeit in den Mittelpunkt. Lerne die Kernziele zur Überwindung von Armut, zur Förderung hochwertiger Bildung für alle und zum weltweiten Schutz von Menschenrechten und Frieden kennen.",
    "keyPoints": [
      "Agenda 2030: Verabschiedet von allen 193 UN-Mitgliedsstaaten als globaler Fahrplan für eine lebenswerte Zukunft",
      "SDG 2 (Kein Hunger): Ernährungssicherheit, kleinbäuerliche Förderung und nachhaltige Landwirtschaft",
      "SDG 4 (Hochwertige Bildung): Inklusive, chancengerechte Bildung und lebenslanges Lernen für alle",
      "SDG 5 & 10 (Gleichstellung & Weniger Ungleichheiten): Frauenrechte, Chancengleichheit und Antidiskriminierung",
      "SDG 8 (Menschenwürdige Arbeit): Faire Löhne, sichere Arbeitsbedingungen und nachhaltiges Wirtschaftswachstum",
      "SDG 16 & 17 (Frieden & Partnerschaften): Rechtsstaatlichkeit, Bekämpfung von Korruption und multilaterale Kooperation"
    ],
    "exercises": [
      {
        "id": "4478",
        "title": "Global Goal 2: Kein Hunger – Ernährung sichern, Hunger stoppen",
        "folder": "global-goal-2-kein-hunger-ernahrung-sichern-hunger-stoppen-4478"
      },
      {
        "id": "4479",
        "title": "Global Goal 4: Gute Bildung – Wissen für jede Lebensreise",
        "folder": "global-goal-4-gute-bildung-wissen-fur-jede-lebensreise-4479"
      },
      {
        "id": "4480",
        "title": "Global Goal 5: Gleichstellung leben – Frauenrechte für alle sichern",
        "folder": "global-goal-5-gleichstellung-leben-frauenrechte-fur-alle-sichern-4480"
      },
      {
        "id": "4482",
        "title": "Global Goal 8: Gute Arbeit – Wachstum und faire Chancen",
        "folder": "global-goal-8-gute-arbeit-wachstum-und-faire-chancen-4482"
      },
      {
        "id": "4484",
        "title": "Global Goal 10: Weniger Ungleichheit – Chancen gerecht verteilen",
        "folder": "global-goal-10-weniger-ungleichheit-chancen-gerecht-verteilen-4484"
      },
      {
        "id": "4490",
        "title": "Global Goal 16: Frieden leben – Gerechtigkeit und Sicherheit fördern",
        "folder": "global-goal-16-frieden-leben-gerechtigkeit-und-sicherheit-fordern-4490"
      },
      {
        "id": "4491",
        "title": "Global Goal 17: Partnerschaften stärken – Gemeinsam für nachhaltige Zukunft",
        "folder": "global-goal-17-partnerschaften-starken-gemeinsam-fur-nachhaltige-zukunft-4491"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=nachhaltigkeitsziele+menschenrechte&t=3752"
  },
  "sdgs-planet-und-nachhaltigkeit": {
    "slug": "sdgs-planet-und-nachhaltigkeit",
    "title": "SDGs: Planet, Ökosysteme & Nachhaltige Städte",
    "category": "Die 17 Nachhaltigkeitsziele (SDGs)",
    "shortDesc": "Saubere Energie, nachhaltige Städte, Klimaschutz, Meeres- und Artenschutz (SDGs 7, 9, 11–15).",
    "longDesc": "Die ökologische Dimension der UN-Nachhaltigkeitsziele: Wie wir Städte resilient und grün gestalten, Ozeane vor Plastik und Überfischung schützen, Wälder bewahren und nachhaltige Konsummuster etablieren.",
    "keyPoints": [
      "SDG 7 (Saubere Energie): Universeller Zugang zu bezahlbarer, verlässlicher und moderner erneuerbarer Energie",
      "SDG 9 (Industrie, Innovation & Infrastruktur): Umweltfreundliche Technologien, resilienter Netzausbau und Forschung",
      "SDG 11 (Nachhaltige Städte): Bezahlbarer Wohnraum, Ausbau des ÖPNV, Grünflächen und Luftreinhaltung in Metropolen",
      "SDG 12 (Nachhaltiger Konsum): Kreislaufwirtschaft, Reduktion von Lebensmittelverschwendung und umweltgerechte Beschaffung",
      "SDG 13 (Maßnahmen zum Klimaschutz): Dringende Maßnahmen zur Minderung von Treibhausgasen und Anpassung an Klimafolgen",
      "SDG 14 & 15 (Leben unter Wasser & an Land): Stopp des Artensterbens, Meeresschutzgebiete und Schutz von Wäldern und Böden"
    ],
    "exercises": [
      {
        "id": "4481",
        "title": "Global Goal 7: Saubere Energie – Erneuerbar für unsere Zukunft",
        "folder": "global-goal-7-saubere-energie-erneuerbar-fur-unsere-zukunft-4481"
      },
      {
        "id": "4483",
        "title": "Global Goal 9: Innovation leben – Industrie und Technik fördern",
        "folder": "global-goal-9-innovation-leben-industrie-und-technik-fordern-4483"
      },
      {
        "id": "4485",
        "title": "Global Goal 11: Lebendige Städte – Zukunft in urbanen Räumen",
        "folder": "global-goal-11-lebendige-stadte-zukunft-in-urbanen-raumen-4485"
      },
      {
        "id": "4486",
        "title": "Global Goal 12: Nachhaltiger Konsum – Produktion im Einklang mit Natur",
        "folder": "global-goal-12-nachhaltiger-konsum-produktion-im-einklang-mit-natur-4486"
      },
      {
        "id": "4487",
        "title": "Global Goal 13: Klimaschutz jetzt – Klimawandel stoppen, Zukunft sichern",
        "folder": "global-goal-13-klimaschutz-jetzt-klimawandel-stoppen-zukunft-sichern-4487"
      },
      {
        "id": "4488",
        "title": "Global Goal 14: Leben im Wasser – Ozeane schützen, Arten retten",
        "folder": "global-goal-14-leben-im-wasser-ozeane-schutzen-arten-retten-4488"
      },
      {
        "id": "4489",
        "title": "Global Goal 15: Natur bewahren – Wälder und Arten schützen",
        "folder": "global-goal-15-natur-bewahren-walder-und-arten-schutzen-4489"
      },
      {
        "id": "2862",
        "title": "Nachhaltigkeit und faire Produktion",
        "folder": "nachhaltigkeit-und-faire-produktion-2862"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=SDG+Klimaschutz+Oekosysteme&t=3752"
  },
  "klimawandel-und-klimazonen": {
    "slug": "klimawandel-und-klimazonen",
    "title": "Klimawandel, Treibhauseffekt & Klimazonen",
    "category": "Klimawandel, Atmosphäre & Klimazonen",
    "shortDesc": "Treibhauseffekt, Erderwärmung, Ozon, Vulkane und die vier großen Klimazonen der Erde.",
    "longDesc": "Die naturwissenschaftlichen Grundlagen des irdischen Klimasystems: Wie Treibhausgase Sonnenwärme in der Atmosphäre festhalten, welche Rolle Ozon und vulkanische Eruptionen spielen und wie sich die globale Erwärmung auf die Klimazonen von den Tropen bis zu den Polen auswirkt.",
    "keyPoints": [
      "Natürlicher vs. anthropogener Treibhauseffekt: Ohne Treibhausgase läge die globale Durchschnittstemperatur bei -18 °C statt +15 °C",
      "Haupt-Treibhausgase: Kohlenstoffdioxid ($CO_2$), Methan ($CH_4$), Distickstoffmonoxid ($N_2O$) und fluorierte Gase",
      "Ozonschicht vs. bodennahes Ozon: Schutzschild gegen ultraviolette UV-Strahlung in der Stratosphäre vs. Sommersmog in Bodennähe",
      "Klimazonen der Erde: Tropen (Tageszeitenklima), Subtropen (Passatzone), Gemäßigte Zone (Jahreszeiten) und Polare Zone (Kältewüste)",
      "Natürliche Klimaeinflüsse: Einfluss vulkanischer Schwefel-Aerosole auf globale Abkühlung und Milanković-Zyklen",
      "Klimawandel in Deutschland: Häufung von Hitzetagen, Verschiebung der Vegetationsphasen und Zunahme von Starkregenereignissen"
    ],
    "exercises": [
      {
        "id": "317",
        "title": "Klima, Wetter und Klimazonen",
        "folder": "klima-wetter-und-klimazonen-317"
      },
      {
        "id": "339",
        "title": "Veränderungen des Klimas",
        "folder": "veranderungen-des-klimas-339"
      },
      {
        "id": "wie-funktioniert-der-treibhauseffekt",
        "title": "Wie funktioniert der Treibhauseffekt",
        "folder": "wie-funktioniert-der-treibhauseffekt"
      },
      {
        "id": "das-klima-in-deutschland",
        "title": "Das Klima in Deutschland",
        "folder": "das-klima-in-deutschland"
      },
      {
        "id": "758",
        "title": "Die polare Klimazone",
        "folder": "die-polare-klimazone-758"
      },
      {
        "id": "759",
        "title": "Die gemäßigte Klimazone",
        "folder": "die-gemaesigte-klimazone-759"
      },
      {
        "id": "760",
        "title": "Die subtropische Klimazone",
        "folder": "die-subtropische-klimazone-760"
      },
      {
        "id": "761",
        "title": "Die tropische Klimazone",
        "folder": "die-tropische-klimazone-761"
      },
      {
        "id": "5446",
        "title": "Der Einfluss von Vulkanen auf die Atmosphäre und das Klima",
        "folder": "der-einfluss-von-vulkanen-auf-die-atmosphare-und-das-klima-5446"
      },
      {
        "id": "5175",
        "title": "Ozon",
        "folder": "ozon-5175"
      },
      {
        "id": "schneefreie-alpen",
        "title": "Schneefreie Alpen – Der bittere Untergang des Wintersports",
        "folder": "schneefreie-alpen-der-bittere-untergang-des-wintersports"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Treibhauseffekt+Klimazonen&t=3752"
  },
  "klimaschutz-politik-und-ethik": {
    "slug": "klimaschutz-politik-und-ethik",
    "title": "Klimapolitik, Pariser Abkommen & Umweltethik",
    "category": "Klimaschutz, Klimapolitik & CO₂-Bepreisung",
    "shortDesc": "Pariser 1,5-Grad-Ziel, CO₂-Bepreisung, Emissionshandel, Fridays for Future und ethische Verantwortung.",
    "longDesc": "Wie reagieren Politik, Zivilgesellschaft und Ethik auf die Klimakrise? Untersuche völkerrechtliche Verträge wie das Pariser Abkommen, ökonomische Steuerungsinstrumente wie den Emissionshandel (EU-ETS) und die Bewegung Fridays for Future.",
    "keyPoints": [
      "Pariser Klimaschutzabkommen (2015): Völkerrechtlich verbindliches Ziel zur Begrenzung der Erderwärmung auf deutlich unter 2 °C, möglichst 1,5 °C",
      "CO₂-Bepreisung & Zertifikatehandel: Verursacherprinzip – wer klimaschädliche Gase ausstößt, zahlt einen Preis pro Tonne",
      "Klimagerechtigkeit: Historische Verantwortung der Industrieländer gegenüber besonders betroffenen Ländern des Globalen Südens",
      "Fridays for Future & Klimabewegung: Jugendproteste für wissenschaftsbasierte Klimapolitik und Einhaltung von Klimabudgets",
      "Umweltpsychologie: Warum fällt klimafreundliches Handeln oft schwer? ('Attitude-Behavior-Gap' und soziale Normen)",
      "Schöpfungsethik: Theologische und philosophische Begründungen für den achtsamen Umgang mit Natur und künftigen Generationen"
    ],
    "exercises": [
      {
        "id": "3554",
        "title": "Klimapolitik und ihre Herausforderungen",
        "folder": "klimapolitik-und-ihre-herausforderungen-3554"
      },
      {
        "id": "3555",
        "title": "Klimaschutzabkommen von Paris",
        "folder": "klimaschutzabkommen-von-paris-3555"
      },
      {
        "id": "6569",
        "title": "CO₂-Bepreisung",
        "folder": "co-bepreisung-2-6569"
      },
      {
        "id": "3535",
        "title": "Fridays for Future",
        "folder": "fridays-for-future-3535"
      },
      {
        "id": "6437",
        "title": "Bewahrung der Schöpfung",
        "folder": "bewahrung-der-schopfung-6437"
      },
      {
        "id": "6689",
        "title": "Klimawandel und Glaube",
        "folder": "klimawandel-und-glaube-6689"
      },
      {
        "id": "6705",
        "title": "Nachhaltigkeit – christlich begründet",
        "folder": "nachhaltigkeit-christlich-begrundet-6705"
      },
      {
        "id": "5778",
        "title": "Einführung in Umweltpsychologie",
        "folder": "einfuhrung-in-umweltpsychologie-5778"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Klimapolitik+Pariser+Abkommen&t=3752"
  },
  "erneuerbare-energien-und-energiewende": {
    "slug": "erneuerbare-energien-und-energiewende",
    "title": "Erneuerbare Energien & Energiewende",
    "category": "Erneuerbare Energien & Energiewende",
    "shortDesc": "Windkraft, Pumpspeicherkraftwerke, Energiewirtschaft, Stromnetze und Energiehunger von KI & Bitcoin.",
    "longDesc": "Der Umbau der Energieversorgung von fossilen Brennstoffen (Kohle, Erdöl, Gas) zu regenerativen Quellen: Funktionsweise moderner Windenergieanlagen, Netzstabilität, Pumpspeicher als riesige Batterien und die ökologischen Schattenseiten neuer Digitaltechnologien.",
    "keyPoints": [
      "Erneuerbare Energieträger: Windenergie, Photovoltaik, Wasserkraft, Biomasse und Geothermie als CO₂-arme Alternativen",
      "Windkraftanlagen: Aerodynamik der Rotorblätter, Generator, Pitch-Regelung und Netzeinspeisung",
      "Speichertechnologien: Pumpspeicherkraftwerke zur schnellen Netzstabilisierung bei Dunkelflauten",
      "Energiewirtschaft im Wandel: Dezentrale Stromerzeugung, Smart Grids und europäischer Verbundnetzbetrieb",
      "Photosynthese & Bioenergie: Wie Pflanzen Sonnenlicht biochemisch in energiereiche Biomasse umwandeln",
      "Digitaler Strombedarf: Rechenzentren, Cloud-Server, Krypto-Mining (Bitcoin) und KI-Modelle als wachsende Stromverbraucher"
    ],
    "exercises": [
      {
        "id": "wie-funktioniert-eine-windkraftanlage",
        "title": "Wie funktioniert eine Windkraftanlage",
        "folder": "wie-funktioniert-eine-windkraftanlage"
      },
      {
        "id": "wie-funktioniert-die-energiespeicherung-durch-pumpspeicherwerke",
        "title": "Wie funktioniert die Energiespeicherung durch Pumpspeicherwerke",
        "folder": "wie-funktioniert-die-energiespeicherung-durch-pumpspeicherwerke"
      },
      {
        "id": "die-deutsche-energiewirtschaft",
        "title": "Die deutsche Energiewirtschaft",
        "folder": "die-deutsche-energiewirtschaft"
      },
      {
        "id": "4495",
        "title": "Pflanzen nutzen Sonnenlicht – Licht wird zu Nahrung",
        "folder": "pflanzen-nutzen-sonnenlicht-licht-wird-zu-nahrung-4495"
      },
      {
        "id": "hoher-energieverbrauch-von-ki-und-bitcoin",
        "title": "Hoher Energieverbrauch von KI und Bitcoin",
        "folder": "hoher-energieverbrauch-von-ki-und-bitcoin"
      },
      {
        "id": "6721",
        "title": "Russlands Energie im Wandel",
        "folder": "russlands-energie-im-wandel-6721"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erneuerbare+Energien+Windkraft&t=3752"
  },
  "kreislaufwirtschaft-und-recycling": {
    "slug": "kreislaufwirtschaft-und-recycling",
    "title": "Kreislaufwirtschaft, Müllvermeidung & Recycling",
    "category": "Kreislaufwirtschaft, Recycling & Müll",
    "shortDesc": "Kunststoffrecycling, Müllverbrennung, Elektroschrott, Reparierbarkeit und digitale Nachhaltigkeit.",
    "longDesc": "Vom linearen Wegwerfmodell zur zirkulären Kreislaufwirtschaft (Circular Economy): Wie Sortieranlagen Kunststoffe trennen, wie Müllverbrennungsanlagen Fernwärme und Strom liefern und warum das Recht auf Reparatur und Elektroschrott-Recycling essenziell sind.",
    "keyPoints": [
      "Abfallhierarchie: 1. Vermeiden ➔ 2. Wiederverwenden ➔ 3. Recyceln ➔ 4. Energetisch verwerten ➔ 5. Beseitigen (Deponie)",
      "Recycling von Kunststoffen: Mechanisches Recycling (Schreddern, Waschen, Regranulat) vs. chemisches Recycling",
      "Thermische Verwertung: Müllheizkraftwerke erzeugen Strom und Fernwärme bei gleichzeitiger Rauchgasreinigung",
      "Elektroschrott (E-Waste): Wertvolle Edelmetalle (Gold, Kupfer, Seltene Erden) zurückgewinnen und Schadstoffe bannen",
      "Recht auf Reparatur: Modulare Gerätebauweise, langlebige Ersatzteile und Software-Support gegen geplante Obsoleszenz",
      "Digitale Nachhaltigkeit: Ressourcenschonende Nutzung digitaler Geräte und umweltfreundliche Entsorgung"
    ],
    "exercises": [
      {
        "id": "wie-funktioniert-das-recycling-von-kunststoffen",
        "title": "Wie funktioniert das Recycling von Kunststoffen",
        "folder": "wie-funktioniert-das-recycling-von-kunststoffen"
      },
      {
        "id": "wie-funktioniert-die-muellverbrennung-und-energiegewinnung",
        "title": "Wie funktioniert die Müllverbrennung und Energiegewinnung",
        "folder": "wie-funktioniert-die-muellverbrennung-und-energiegewinnung"
      },
      {
        "id": "5173",
        "title": "Müllverbrennung und Mülldeponien",
        "folder": "mullverbrennung-und-mulldeponien-5173"
      },
      {
        "id": "5183",
        "title": "Wiederverwertung von Müll",
        "folder": "wiederverwertung-von-mull-5183"
      },
      {
        "id": "verbleib-und-recycling-von-elektroschrott",
        "title": "Verbleib und Recycling von Elektroschrott",
        "folder": "verbleib-und-recycling-von-elektroschrott"
      },
      {
        "id": "nachhaltige-nutzung-und-reparatur-von-geraeten",
        "title": "Nachhaltige Nutzung und Reparatur von Geräten",
        "folder": "nachhaltige-nutzung-und-reparatur-von-geraeten"
      },
      {
        "id": "umweltaspekte-und-nachhaltigkeitsaspekte-digitaler-technologien",
        "title": "Umwelt- und Nachhaltigkeitsaspekte digitaler Technologien",
        "folder": "umweltaspekte-und-nachhaltigkeitsaspekte-digitaler-technologien"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Recycling+Muell+Kreislaufwirtschaft&t=3752"
  },
  "ressourcen-konsum-und-fussabdruck": {
    "slug": "ressourcen-konsum-und-fussabdruck",
    "title": "Ökologischer Fußabdruck & Nachhaltiger Konsum",
    "category": "Ressourcen, Ökologie & Globale Umweltfragen",
    "shortDesc": "Konsumverhalten, Ressourcenschonung, Überbevölkerung, nachhaltiger Tourismus und persönliche Ökobilanz.",
    "longDesc": "Der Einfluss unseres Lebensstils auf die Belastungsgrenzen des Planeten: Was misst der ökologische Fußabdruck, wie hängen Konsumentscheidungen mit weltweitem Ressourcenverbrauch zusammen und wie sieht sanfter, umweltfreundlicher Tourismus aus?",
    "keyPoints": [
      "Ökologischer Fußabdruck: Gibt an, wie viel biologisch produktive Fläche (Erde) benötigt wird, um den eigenen Lebensstandard zu tragen",
      "Earth Overshoot Day (Welterschöpfungstag): Der Tag im Jahr, an dem die Menschheit die regenerierbaren Ressourcen der Erde aufgebraucht hat",
      "Virtuelles Wasser & Graue Energie: Verborgene Ressourcen in Kleidung, Smartphones und importierten Lebensmitteln",
      "Nachhaltiger Konsum: Regional, saisonal, langlebig und pflanzenbasiert einkaufen ('Weniger ist mehr')",
      "Demografischer Wandel: Bevölkerungswachstum, Urbanisierung und der globale Anstieg des Energie- und Rohstoffbedarfs",
      "Sanfter Tourismus: Reisen mit geringem CO₂-Ausstoß, Schutz lokaler Kulturen und Vermeidung von Naturzerstörung"
    ],
    "exercises": [
      {
        "id": "2672",
        "title": "Nachhaltiger Konsum",
        "folder": "nachhaltiger-konsum-2672"
      },
      {
        "id": "2859",
        "title": "Konsumverhalten und Nachhaltigkeit",
        "folder": "konsumverhalten-und-nachhaltigkeit-2859"
      },
      {
        "id": "2867",
        "title": "Umweltaufklärung und nachhaltiger Lebensstil",
        "folder": "umweltaufklarung-und-nachhaltiger-lebensstil-2867"
      },
      {
        "id": "3557",
        "title": "Konsum und Nachhaltigkeit",
        "folder": "konsum-und-nachhaltigkeit-3557"
      },
      {
        "id": "3573",
        "title": "Ökologischer Fußabdruck und persönlicher Beitrag",
        "folder": "kologischer-fuesabdruck-und-personlicher-beitrag-3573"
      },
      {
        "id": "5452",
        "title": "Die Auswirkungen von Überbevölkerung auf den Ressourcenverbrauch",
        "folder": "die-auswirkungen-von-berbevolkerung-auf-den-ressourcenverbrauch-5452"
      },
      {
        "id": "3570",
        "title": "Nachhaltiger Tourismus und seine Vorteile",
        "folder": "nachhaltiger-tourismus-und-seine-vorteile-3570"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Oekologischer+Fussabdruck+Konsum&t=3752"
  },
  "globale-oekosysteme-und-ressourcenkonflikte": {
    "slug": "globale-oekosysteme-und-ressourcenkonflikte",
    "title": "Globale Ökosysteme, Wasser & Ressourcenkonflikte",
    "category": "Ressourcen, Ökologie & Globale Umweltfragen",
    "shortDesc": "Amazonas-Regenwald, Dürremanagement, Wassernutzung, Rohstoffkonflikte, Satelliten-Umweltmonitoring und nachhaltige Logistik.",
    "longDesc": "Globale Umweltherausforderungen und geopolitische Zusammenhänge: Die Bedrohung des Amazonas-Regenwaldes als 'grüne Lunge' der Erde, modernes Dürremanagement in Zeiten der Wasserknappheit, Kriege um seltene Erden und die Überwachung der Erdoberfläche aus dem All.",
    "keyPoints": [
      "Amazonas-Regenwald: Gewaltiger Kohlenstoffspeicher, globale Klimaregulierung und verheerende Abholzung für Soja & Weideland",
      "Kipppunkte (Tipping Points): Wenn tropische Regenwälder in trockene Savannen umschlagen oder das Grönlandeis unumkehrbar schmilzt",
      "Wasserkrise & Dürremanagement: Tröpfchenbewässerung, Wasserrückhaltung und Entsalzung zur Anpassung an Trockenperioden",
      "Geopolitik der Ressourcen: Konflikte um seltene Metalle (Lithium, Kobalt, Coltan), Wasserrechte und fossile Rohstoffe",
      "Globale Ungleichheiten: Der ressourcenintensive Lebensstil wohlhabender Staaten auf Kosten des Globalen Südens",
      "Umweltmonitoring aus dem Weltraum: Erdbeobachtungssatelliten erfassen Entwaldung, Meerestemperaturen und Methanlecks",
      "Nachhaltige Mobilität & Logistik: Dekarbonisierung von Güterverkehr, Schifffahrt und Lieferketten"
    ],
    "exercises": [
      {
        "id": "5431",
        "title": "Amazonien – Umweltprobleme und globale Bedeutung",
        "folder": "amazonien-umweltprobleme-und-globale-bedeutung-5431"
      },
      {
        "id": "5482",
        "title": "Dürremanagement und nachhaltige Wassernutzung",
        "folder": "durremanagement-und-nachhaltige-wassernutzung-5482"
      },
      {
        "id": "3548",
        "title": "Internationale Konflikte um Bodenschätze",
        "folder": "internationale-konflikte-um-bodenschatze-3548"
      },
      {
        "id": "5554",
        "title": "Ressourcenverteilung weltweit – Ungleichgewichte und ihre Folgen",
        "folder": "ressourcenverteilung-weltweit-ungleichgewichte-und-ihre-folgen-5554"
      },
      {
        "id": "5523",
        "title": "Umweltüberwachung durch Satellitentechnologie",
        "folder": "umweltuberwachung-durch-satellitentechnologie-5523"
      },
      {
        "id": "5526",
        "title": "Verkehrspolitik im Spannungsfeld zwischen Wachstum und Umwelt",
        "folder": "verkehrspolitik-im-spannungsfeld-zwischen-wachstum-und-umwelt-5526"
      },
      {
        "id": "5504",
        "title": "Infrastrukturprojekte im Kontext nachhaltiger Entwicklung",
        "folder": "infrastrukturprojekte-im-kontext-nachhaltiger-entwicklung-5504"
      },
      {
        "id": "5463",
        "title": "Die Karibik – Inselwelt zwischen Naturgefahren und Ressourcenknappheit",
        "folder": "die-karibik-inselwelt-zwischen-tourismus-naturgefahren-und-ressourcenknappheit-5463"
      },
      {
        "id": "5577",
        "title": "Zukunft der Logistik – Automatisierung und nachhaltige Lieferketten",
        "folder": "zukunft-der-logistik-automatisierung-drohnen-und-nachhaltige-lieferketten-5577"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Regenwald+Wasserknappheit+Ressourcen&t=3752"
  }
};
