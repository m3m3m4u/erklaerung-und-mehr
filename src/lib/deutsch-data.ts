export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface DeutschTopic {
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

export const deutschCategories: string[] = [
  "Grammatik & Sprachlehre",
  "Epochen der Literaturgeschichte",
  "Meisterwerke & Literaturkanon"
];

export const deutschTopics: Record<string, DeutschTopic> = {
  "grammatik": {
    "id": 26460,
    "slug": "grammatik",
    "title": "Grammatik & Wortarten",
    "category": "Grammatik & Sprachlehre",
    "shortDesc": "Wortarten (Nomen, Verb, Adjektiv, Pronomen, Konjunktion), Satzglieder, Beistrich/Kommasetzung und direkte Rede.",
    "longDesc": "Die Bausteine der deutschen Sprache: Von der sicheren Bestimmung aller Wortarten über Satzglieder (Subjekt, Prädikat, Dativ-/Akkusativobjekt, adverbiale Bestimmungen) bis hin zu korrekten Satzgefügen, Kommaregeln und wörtlicher Rede.",
    "keyPoints": [
      "Wortarten: Nomen, Verben, Adjektive, Artikel, Pronomen, Numerale, Präpositionen, Konjunktionen, Adverbien und Interjektionen",
      "Deklination der Nomen: Die 4 Fälle (Kasus: Nominativ, Genitiv, Dativ, Akkusativ), Numerus (Singular/Plural) und Genus (maskulin, feminin, neutral)",
      "Satzglieder: Subjekt (Wer oder was?), Prädikat (Was tut das Subjekt?), Objekte (Dativobjekt: Wem?, Akkusativobjekt: Wen oder was?)",
      "Adverbiale Bestimmungen: Temporal (Wann?), Lokal (Wo/Wohin?), Kausal (Warum?), Modal (Wie?)",
      "Kommasetzung: Trennung von Haupt- und Nebensätzen, Aufzählungen, Appositionen und Infinitivgruppen",
      "Direkte Rede: Richtiger Einsatz von Redebegleitsatz, Anführungszeichen und Satzzeichen"
    ],
    "exercises": [
      {
        "id": "541",
        "title": "Nomen",
        "folder": "nomen-541"
      },
      {
        "id": "548",
        "title": "Beistrich (Komma) im zusammengesetzten Satz",
        "folder": "beistrich-komma-im-zusammengesetzten-satz-548"
      },
      {
        "id": "549",
        "title": "Beistrich (Komma) im einfachen Satz",
        "folder": "beistrich-komma-im-einfachen-satz-549"
      },
      {
        "id": "550",
        "title": "Direkte Rede",
        "folder": "direkte-rede-550"
      },
      {
        "id": "554",
        "title": "Zeitformen des Verbs",
        "folder": "zeitformen-des-verbs-554"
      },
      {
        "id": "555",
        "title": "Verb - Grundlagen",
        "folder": "verb-grundlagen-2-555"
      },
      {
        "id": "556",
        "title": "Verb - Personalform",
        "folder": "verb-personalform-2-556"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Deutsche+Grammatik+Wortarten&t=284"
  },
  "zeitformen": {
    "id": 26454,
    "slug": "zeitformen",
    "title": "Zeitformen des Verbs",
    "category": "Grammatik & Sprachlehre",
    "shortDesc": "Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I und Futur II: Bildung, Verwendung und Signalwörter.",
    "longDesc": "Die 6 Zeitformen des Deutschen im Überblick: Wann nutzt man das Präteritum im schriftlichen Erzählen, wann das Perfekt in der gesprochenen Sprache, und wie drückt das Plusquamperfekt die Vorzeitigkeit aus?",
    "keyPoints": [
      "Präsens (Gegenwart): Handlungen im Hier und Jetzt, allgemeingültige Aussagen oder feste Zukunftsabsichten ('Ich lerne')",
      "Präteritum (Vergangenheit): Haupterzählzeit in schriftlichen Texten, Romanen, Berichten und Märchen ('Ich lernte')",
      "Perfekt (vollendete Gegenwart): Gesprochene Sprache und vollendete Handlungen mit Bezug zur Gegenwart ('Ich habe gelernt')",
      "Plusquamperfekt (Vorvergangenheit): Handlungen, die vor einem bestimmten Zeitpunkt in der Vergangenheit abgeschlossen waren ('Ich hatte gelernt')",
      "Futur I & II: Zukünftige Vorhaben ('Ich werde lernen') bzw. vollendete Zukunft ('Ich werde gelernt haben')",
      "Starke vs. schwache Verben: Regelmäßige Konjugation (lernen – lernte – gelernt) vs. Vokalwechsel (sehen – sah – gesehen)"
    ],
    "exercises": [
      {
        "id": "1015",
        "title": "Zeitformen - Futur 1 und Futur 2",
        "folder": "zeitformen-futur-1-und-futur-2-1015"
      },
      {
        "id": "1016",
        "title": "Zeitformen - Präsens und Präteritum",
        "folder": "zeitformen-prasens-und-prateritum-1016"
      },
      {
        "id": "1017",
        "title": "Zeitformen - Perfekt und Präteritum",
        "folder": "zeitformen-perfekt-und-prateritum-1017"
      },
      {
        "id": "1018",
        "title": "Zeitformen - Präteritum und Plusquamperfekt",
        "folder": "zeitformen-prateritum-und-plusquamperfekt-1018"
      },
      {
        "id": "1019",
        "title": "Zeitformen - Präteritum, Perfekt und Plusquamperfekt",
        "folder": "zeitformen-prateritum-perfekt-und-plusquamperfekt-1019"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Zeitformen+Verben+Deutsch&t=284"
  },
  "rechtschreibung": {
    "id": 26458,
    "slug": "rechtschreibung",
    "title": "Rechtschreibung & Zeichensetzung",
    "category": "Grammatik & Sprachlehre",
    "shortDesc": "s-Laut (s, ss, ß), das vs. dass, Dehnung (Dehnungs-h, ie) und Schärfung (Doppelkonsonanten), Groß- und Kleinschreibung.",
    "longDesc": "Sicherheit in der Rechtschreibung: Lerne die wichtigsten Regeln zur s-Schreibung, die fehlerfreie Unterscheidung von das und dass, Regeln zur Vokallänge sowie Wörterbuch-Strategien.",
    "keyPoints": [
      "s / ss / ß: Nach kurzem Vokal steht 'ss' (Fluss, Schloss); nach langem Vokal oder Diphtong steht 'ß' (Fuß, Straße, fleißig); stimmhaftes 's' als Einzel-s (Sonne, Rose)",
      "das oder dass?: 'das' ist Artikel oder Relativpronomen (Ersatzprobe: dieses, jenes, welches); 'dass' ist eine Konjunktion, die Nebensätze einleitet",
      "Vokaldehnung: Langes i wird meist als 'ie' geschrieben (Wiese, Lied); stummes Dehnungs-h steht vor l, m, n, r (Zahn, Kohle)",
      "Vokalschärfung: Nach kurzem, betontem Vokal verdoppelt sich der nachfolgende Konsonant (Ratte, Kissen, Ball, ck statt kk, tz statt zz)",
      "Großschreibung: Satzanfänge, Eigennamen und substantivierte Verben/Adjektive (beim Lesen, etwas Schönes)"
    ],
    "exercises": [
      {
        "id": "544",
        "title": "Wörterbuch",
        "folder": "worterbuch-544"
      },
      {
        "id": "545",
        "title": "Wort- und Silbentrennung",
        "folder": "wort-und-silbentrennung-545"
      },
      {
        "id": "540",
        "title": "Das/Dass",
        "folder": "das-dass-540"
      },
      {
        "id": "546",
        "title": "s-Schreibung",
        "folder": "s-schreibung-546"
      },
      {
        "id": "547",
        "title": "Dehnung und Schärfung",
        "folder": "dehnung-und-scharfung-547"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rechtschreibung+Dass+Regeln&t=284"
  },
  "texte": {
    "id": 26463,
    "slug": "texte",
    "title": "Texte & Textsorten",
    "category": "Grammatik & Sprachlehre",
    "shortDesc": "Inhaltsangabe, Referat, Exzerpt, Erörterung, Argumentation, Charakteristik und Textanalyse.",
    "longDesc": "Texte zielgerichtet verfassen, analysieren und präsentieren: Wie strukturiert man ein überzeugendes Referat, wie fasst ein Exzerpt Kernaussagen zusammen, und wie ist eine dialektische Erörterung aufgebaut?",
    "keyPoints": [
      "Referat: Klare Gliederung (Einleitung, Hauptteil, Schluss), roter Faden, visuelle Hilfsmittel und freier Vortrag",
      "Exzerpt: Systematisches Herausarbeiten und Zitieren von Schlüsselpassagen aus wissenschaftlichen oder literarischen Texten",
      "Inhaltsangabe: Präsens, sachlicher Stil, chronologischer Ablauf, keine eigene Meinung, Verzicht auf direkte Rede",
      "Erörterung: These, Antithese, Argumente (Behauptung, Begründung, Beispiel) und ausgewogene Synthese / Fazit",
      "Charakteristik: Äußere Erscheinung, soziales Umfeld, Verhaltensweisen, Motive und innere Entwicklung einer literarischen Figur"
    ],
    "exercises": [
      {
        "id": "542",
        "title": "Referat",
        "folder": "referat-542"
      },
      {
        "id": "543",
        "title": "Exzerpt",
        "folder": "exzerpt-543"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Textsorten+Referat+Eroerterung&t=284"
  },
  "literatur-bis-zum-19-jahrhundert": {
    "id": 43939,
    "slug": "literatur-bis-zum-19-jahrhundert",
    "title": "Literatur bis zum 19. Jahrhundert",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Mittelalter (Minnesang, Epos), Barock (Vanitas), Aufklärung (Vernunft), Sturm und Drang sowie Weimarer Klassik.",
    "longDesc": "Von ritterlicher Dichtung über barocke Todessehnsucht bis zur Epoche der Humanität und Vollendung: Entdecke, wie Vernunft, Leidenschaft und antike Ideale die Dichtung vor 1800 prägten.",
    "keyPoints": [
      "Mittelalter & Minnesang (ca. 750–1500): Nibelungenlied, Walther von der Vogelweide, ritterliches Tugendsystem",
      "Barock (1600–1720): Leitgedanken 'Carpe diem' (Nutze den Tag), 'Memento mori' (Bedenke, dass du sterben musst) und 'Vanitas' (Vergänglichkeit)",
      "Aufklärung (1720–1790): Kant: 'Habe Mut, dich deines eigenen Verstandes zu bedienen!'; Toleranzgedanke (Lessing: Ringparabel in Nathan der Weise)",
      "Sturm und Drang (1767–1785): Geniezeit, Herz und Gefühl gegen gesellschaftliche Zwänge (Goethe: Werther; Schiller: Die Räuber)",
      "Weimarer Klassik (1786–1805): Viergestirn Goethe, Schiller, Herder, Wieland – Streben nach Humanität, Harmonie, Schönheit und Maß (Iphigenie, Faust)"
    ],
    "exercises": [
      {
        "id": "4635",
        "title": "Literaturepoche Antike",
        "folder": "literaturepoche-antike-4635"
      },
      {
        "id": "4636",
        "title": "Literaturepoche Mittelalter",
        "folder": "literaturepoche-mittelalter-2-4636"
      },
      {
        "id": "4637",
        "title": "Literaturepoche Renaissance",
        "folder": "literaturepoche-renaissance-2-4637"
      },
      {
        "id": "4638",
        "title": "Literaturepoche Barock",
        "folder": "literaturepoche-barock-2-4638"
      },
      {
        "id": "4639",
        "title": "Literaturepoche Aufklärung",
        "folder": "literaturepoche-aufklarung-2-4639"
      },
      {
        "id": "4640",
        "title": "Literaturepoche Sturm und Drang",
        "folder": "literaturepoche-sturm-und-drang-2-4640"
      },
      {
        "id": "4641",
        "title": "Literaturepoche Klassik",
        "folder": "literaturepoche-klassik-4641"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Weimarer+Klassik+Aufklaerung+Literatur&t=284"
  },
  "literatur-im-19-jahrhundert": {
    "id": 43940,
    "slug": "literatur-im-19-jahrhundert",
    "title": "Literatur im 19. Jahrhundert",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Romantik (Blaue Blume, Sehnsucht), Biedermeier & Vormärz, Bürgerlicher Realismus und Naturalismus.",
    "longDesc": "Ein Jahrhundert des Umbruchs: Von den Träumen und Schauergeschichten der Romantik über den politischen Protest des Vormärz bis zur detailgetreuen Wirklichkeitsdarstellung im Realismus und Naturalismus.",
    "keyPoints": [
      "Romantik (1795–1835): Blaue Blume, Sehnsucht nach dem Unendlichen, Nachtseiten der Natur, Schauermärchen (E.T.A. Hoffmann, Eichendorff, Novalis)",
      "Biedermeier (1815–1848): Rückzug ins Private, Häuslichkeit, Bescheidenheit und Naturidylle (Stifter, Droste-Hülshoff)",
      "Vormärz & Junges Deutschland (1830–1848): Politische Dichtung, Kampf für Freiheit und Demokratie (Heine, Büchner)",
      "Bürgerlicher Realismus (1848–1890): Verklärung und objektive Betrachtung des bürgerlichen Lebens, Humor und Distanz (Fontane: Effi Briest; Keller; Storm)",
      "Naturalismus (1880–1900): 'Kunst = Natur - x' – schonungslose Darstellung von Elend, Alkoholismus, Milieu und Determiniertheit (Hauptmann: Die Weber)"
    ],
    "exercises": [
      {
        "id": "4642",
        "title": "Literaturepoche Romantik",
        "folder": "literaturepoche-romantik-2-4642"
      },
      {
        "id": "4643",
        "title": "Literaturepoche Biedermeier",
        "folder": "literaturepoche-biedermeier-2-4643"
      },
      {
        "id": "4645",
        "title": "Literaturepoche Naturalismus",
        "folder": "literaturepoche-naturalismus-2-4645"
      },
      {
        "id": "4644",
        "title": "Literaturepoche Realismus",
        "folder": "literaturepoche-realismus-4644"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Romantik+Realismus+Literatur&t=284"
  },
  "literatur-im-20-und-21-jahrhundert": {
    "id": 43941,
    "slug": "literatur-im-20-und-21-jahrhundert",
    "title": "Literatur im 20. und 21. Jahrhundert",
    "category": "Epochen der Literaturgeschichte",
    "shortDesc": "Expressionismus, Weimarer Republik, Exilliteratur, Trümmerliteratur, DDR- & BRD-Literatur und Gegenwart.",
    "longDesc": "Weltkriege, Diktaturen, Exil und Wiedervereinigung: Wie Schriftsteller auf die Zivilisationsbrüche der Moderne reagierten und neue literarische Formen (episches Theater, Montagetechnik, Postmoderne) erfanden.",
    "keyPoints": [
      "Expressionismus (1905–1925): Weltuntergangsstimmung, Großstadtangst, Formzertrümmerung, Reihungsstil (Heym, Trakl, Benn)",
      "Neue Sachlichkeit (1918–1933): Nüchterne Reportage, Zeitromane, Episches Theater mit Verfremdungseffekt (Kästner, Brecht, Fallada)",
      "Exilliteratur & Innere Emigration (1933–1945): Bücherverbrennung, Flucht vor dem NS-Regime (Thomas Mann, Brecht, Stefan Zweig, Anna Seghers)",
      "Nachkriegs- & Trümmerliteratur (ab 1945): Kahlschlag, Gruppe 47, moralische Bestandsaufnahme (Böll, Borchert, Celan)",
      "DDR- & BRD-Literatur im Kalten Krieg: Zensur und sozialistischer Realismus in der DDR vs. Pluralismus im Westen",
      "Gegenwartsliteratur & Postmoderne: Pluralismus, Erinnerungskultur, Identität, Interkulturalität (Erpenbeck, Kehlmann, Zeh)"
    ],
    "exercises": [
      {
        "id": "4646",
        "title": "Literaturepoche Moderne",
        "folder": "literaturepoche-moderne-4646"
      },
      {
        "id": "4647",
        "title": "Literaturepoche Expressionismus",
        "folder": "literaturepoche-expressionismus-4647"
      },
      {
        "id": "4648",
        "title": "Literaturepoche Neue Sachlichkeit",
        "folder": "literaturepoche-neue-sachlichkeit-2-4648"
      },
      {
        "id": "4649",
        "title": "Literaturepoche Nachkriegsliteratur",
        "folder": "literaturepoche-nachkriegsliteratur-2-4649"
      },
      {
        "id": "4650",
        "title": "Literaturepoche Postmoderne",
        "folder": "literaturepoche-postmoderne-2-4650"
      },
      {
        "id": "4651",
        "title": "Literaturepoche Berliner Republik",
        "folder": "literaturepoche-berliner-republik-4651"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Literatur+20+Jahrhundert+Gegenwart&t=284"
  },
  "werke-der-literaturgeschichte": {
    "id": 66742,
    "slug": "werke-der-literaturgeschichte",
    "title": "Werke der Literaturgeschichte",
    "category": "Meisterwerke & Literaturkanon",
    "shortDesc": "Der große Lektüre-Kanon: 68 bedeutende Romane, Dramen und Erzählungen von Goethe, Schiller, Lessing, Fontane, Mann, Frisch u. a.",
    "longDesc": "Das literarische Gedächtnis des deutschsprachigen Raums: Erkunde die berühmtesten Werke der Literaturgeschichte mit Inhaltsangaben, Figurenkonstellationen, Motiven und interaktiven Textverständnisfragen.",
    "keyPoints": [
      "Klassiker des Theaters: Goethes 'Faust I', Schillers 'Die Räuber' & 'Wilhelm Tell', Lessings 'Nathan der Weise'",
      "Große Romane: Thomas Manns 'Buddenbrooks' & 'Der Zauberberg', Theodor Fontanes 'Effi Briest', Max Frischs 'Homo faber'",
      "Erzählungen & Novellen: Goethes 'Werther', Kleists 'Michael Kohlhaas', Kafkas 'Die Verwandlung'",
      "Moderne Dramatik: Bertolt Brechts 'Mutter Courage', Max Frischs 'Biedermann und die Brandstifter', Dürrenmatts 'Die Physiker'",
      "Epochenspiegel: Wie jedes Werk die philosophischen und politischen Konflikte seiner Zeit verdichtet"
    ],
    "exercises": [
      {
        "id": "4508",
        "title": "Alfred Döblin – Berlin Alexanderplatz",
        "folder": "alfred-doblin-berlin-alexanderplatz-2-4508"
      },
      {
        "id": "4509",
        "title": "Anna Seghers – Das siebte Kreuz",
        "folder": "anna-seghers-das-siebte-kreuz-2-4509"
      },
      {
        "id": "4510",
        "title": "Arthur Schnitzler - Liebelei",
        "folder": "arthur-schnitzler-liebelei-2-4510"
      },
      {
        "id": "4511",
        "title": "Arthur Schnitzler - Professor Bernhardi",
        "folder": "arthur-schnitzler-professor-bernhardi-2-4511"
      },
      {
        "id": "4512",
        "title": "Arthur Schnitzler - Reigen",
        "folder": "arthur-schnitzler-reigen-2-4512"
      },
      {
        "id": "4513",
        "title": "Bertolt Brecht - Die Dreigroschenoper",
        "folder": "bertolt-brecht-die-dreigroschenoper-2-4513"
      },
      {
        "id": "4514",
        "title": "Bertolt Brecht - Leben des Galilei",
        "folder": "bertolt-brecht-leben-des-galilei-2-4514"
      },
      {
        "id": "4515",
        "title": "Bertolt Brecht - Mutter Courage und ihre Kinder",
        "folder": "bertolt-brecht-mutter-courage-und-ihre-kinder-2-4515"
      },
      {
        "id": "4516",
        "title": "Botho Strauß - Groß und klein",
        "folder": "botho-straues-groes-und-klein-2-4516"
      },
      {
        "id": "4517",
        "title": "Carl Sternheim - Der Snob",
        "folder": "carl-sternheim-der-snob-2-4517"
      },
      {
        "id": "4518",
        "title": "Christian Dietrich Grabbe - Scherz, Satire, Ironie und tiefere Bedeutung",
        "folder": "christian-dietrich-grabbe-scherz-satire-ironie-und-tiefere-bedeutung-2-4518"
      },
      {
        "id": "4520",
        "title": "E.T.A. Hoffmann - Der Sandmann",
        "folder": "e-t-a-hoffmann-der-sandmann-3-4520"
      },
      {
        "id": "4519",
        "title": "E. T. A. Hoffmann - Die Elixiere des Teufels",
        "folder": "e-t-a-hoffmann-die-elixiere-des-teufels-3-4519"
      },
      {
        "id": "4521",
        "title": "Ferdinand Raimund - Der Alpenkönig und der Menschenfeind",
        "folder": "ferdinand-raimund-der-alpenkonig-und-der-menschenfeind-2-4521"
      },
      {
        "id": "4522",
        "title": "Frank Wedekind - Frühlings Erwachen",
        "folder": "frank-wedekind-fruhlings-erwachen-3-4522"
      },
      {
        "id": "4523",
        "title": "Franz Kafka - Der Prozess",
        "folder": "franz-kafka-der-prozess-3-4523"
      },
      {
        "id": "4524",
        "title": "Friedrich Dürrenmatt - Der Besuch der alten Dame",
        "folder": "friedrich-durrenmatt-der-besuch-der-alten-dame-3-4524"
      },
      {
        "id": "4525",
        "title": "Friedrich Dürrenmatt - Die Physiker",
        "folder": "friedrich-durrenmatt-die-physiker-3-4525"
      },
      {
        "id": "4526",
        "title": "Friedrich Hebbel - Maria Magdalene",
        "folder": "friedrich-hebbel-maria-magdalene-2-4526"
      },
      {
        "id": "4527",
        "title": "Friedrich Schiller - Die Räuber",
        "folder": "friedrich-schiller-die-rauber-3-4527"
      },
      {
        "id": "4528",
        "title": "Friedrich Schiller - Don Karlos",
        "folder": "friedrich-schiller-don-karlos-2-4528"
      },
      {
        "id": "4529",
        "title": "Friedrich Schiller - Kabale und Liebe",
        "folder": "friedrich-schiller-kabale-und-liebe-4-4529"
      },
      {
        "id": "4530",
        "title": "Friedrich Schiller - Maria Stuart",
        "folder": "friedrich-schiller-maria-stuart-3-4530"
      },
      {
        "id": "4531",
        "title": "Friedrich Schiller - Wallenstein",
        "folder": "friedrich-schiller-wallenstein-2-4531"
      },
      {
        "id": "4532",
        "title": "Friedrich Schiller - Wilhelm Tell",
        "folder": "friedrich-schiller-wilhelm-tell-3-4532"
      },
      {
        "id": "4534",
        "title": "Georg Büchner - Dantons Tod",
        "folder": "georg-buchner-dantons-tod-2-4534"
      },
      {
        "id": "4535",
        "title": "Georg Büchner - Woyzeck",
        "folder": "georg-buchner-woyzeck-3-4535"
      },
      {
        "id": "4536",
        "title": "Gerhart Hauptmann - Die Ratten",
        "folder": "gerhart-hauptmann-die-ratten-2-4536"
      },
      {
        "id": "4537",
        "title": "Gerhart Hauptmann - Vor Sonnenuntergang",
        "folder": "gerhart-hauptmann-vor-sonnenuntergang-2-4537"
      },
      {
        "id": "4538",
        "title": "Gotfried Keller – Der grüne Heinrich",
        "folder": "gotfried-keller-der-grune-heinrich-2-4538"
      },
      {
        "id": "4539",
        "title": "Gotfried Keller – Kleider machen Leute",
        "folder": "gotfried-keller-kleider-machen-leute-2-4539"
      },
      {
        "id": "4533",
        "title": "G.E. Lessing - Emilia Galotti",
        "folder": "g-e-lessing-emilia-galotti-3-4533"
      },
      {
        "id": "4540",
        "title": "Gotthold Ephraim Lessing - Nathan der Weise",
        "folder": "gotthold-ephraim-lessing-nathan-der-weise-2-4540"
      },
      {
        "id": "4541",
        "title": "Günther Grass - Die Blechtrommel",
        "folder": "gunther-grass-die-blechtrommel-2-4541"
      },
      {
        "id": "4542",
        "title": "Heimito von Doderer – Die Strudlhofstiege",
        "folder": "heimito-von-doderer-die-strudlhofstiege-2-4542"
      },
      {
        "id": "4543",
        "title": "Heiner Müller - Der Auftrag",
        "folder": "heiner-muller-der-auftrag-2-4543"
      },
      {
        "id": "4544",
        "title": "Heinrich Mann - Professor Unrat",
        "folder": "heinrich-mann-professor-unrat-2-4544"
      },
      {
        "id": "4545",
        "title": "Heinrich von Kleist - Das Käthchen von Heilbronn",
        "folder": "heinrich-von-kleist-das-kathchen-von-heilbronn-2-4545"
      },
      {
        "id": "4546",
        "title": "Heinrich von Kleist - Der zerbrochne Krug",
        "folder": "heinrich-von-kleist-der-zerbrochne-krug-2-4546"
      },
      {
        "id": "4547",
        "title": "Heinrich von Kleist - Marquise von O...",
        "folder": "heinrich-von-kleist-marquise-von-o-3-4547"
      },
      {
        "id": "4548",
        "title": "Heinrich von Kleist - Prinz Friedrich von Homburg",
        "folder": "heinrich-von-kleist-prinz-friedrich-von-homburg-2-4548"
      },
      {
        "id": "4549",
        "title": "Hugo von Hofmannsthal - Der Schwierige",
        "folder": "hugo-von-hofmannsthal-der-schwierige-2-4549"
      },
      {
        "id": "4550",
        "title": "Hugo von Hofmannsthal - Der Tor und der Tod",
        "folder": "hugo-von-hofmannsthal-der-tor-und-der-tod-2-4550"
      },
      {
        "id": "4556",
        "title": "Johann Nestroy - Der Talisman",
        "folder": "johann-nestroy-der-talisman-2-4556"
      },
      {
        "id": "4551",
        "title": "J.W. Goethe - Die Leiden des jungen Werther",
        "folder": "j-w-goethe-die-leiden-des-jungen-werther-3-4551"
      },
      {
        "id": "4552",
        "title": "J.W. Goethe – Die Wahlverwandtschaften",
        "folder": "j-w-goethe-die-wahlverwandtschaften-2-4552"
      },
      {
        "id": "4557",
        "title": "Johann Wolfgang Goethe - Egmont",
        "folder": "johann-wolfgang-goethe-egmont-2-4557"
      },
      {
        "id": "4555",
        "title": "J.W. von Goethe - Faust I",
        "folder": "j-w-von-goethe-faust-i-3-4555"
      },
      {
        "id": "4553",
        "title": "J.W. Goethe - Iphigenie auf Tauris",
        "folder": "j-w-goethe-iphigenie-auf-tauris-3-4553"
      },
      {
        "id": "4554",
        "title": "J.W. Goethe - Torquato Tasso",
        "folder": "j-w-goethe-torquato-tasso-2-4554"
      },
      {
        "id": "4558",
        "title": "Joseph Roth - Radetzkymarsch",
        "folder": "joseph-roth-radetzkymarsch-2-4558"
      },
      {
        "id": "4559",
        "title": "Max Frisch - Biedermann und die Brandstifter",
        "folder": "max-frisch-biedermann-und-die-brandstifter-2-4559"
      },
      {
        "id": "4560",
        "title": "Max Frisch - Montauk",
        "folder": "max-frisch-montauk-2-4560"
      },
      {
        "id": "4561",
        "title": "Ödön von Horváth - Geschichten aus dem Wiener Wald",
        "folder": "don-von-horvath-geschichten-aus-dem-wiener-wald-2-4561"
      },
      {
        "id": "4562",
        "title": "Ödön von Horváth - Kasimir und Karoline",
        "folder": "don-von-horvath-kasimir-und-karoline-2-4562"
      },
      {
        "id": "4563",
        "title": "Peter Hacks - Ein Gespräch im Hause Stein",
        "folder": "peter-hacks-ein-gesprach-im-hause-stein-2-4563"
      },
      {
        "id": "4564",
        "title": "Peter Weiss - Die Verfolgung und Ermordung Jean Paul Marats",
        "folder": "peter-weiss-die-verfolgung-und-ermordung-jean-paul-marats-2-4564"
      },
      {
        "id": "4565",
        "title": "Robert Musil – Die Verwirrungen des Zöglings Törleß",
        "folder": "robert-musil-die-verwirrungen-des-zoglings-torlees-2-4565"
      },
      {
        "id": "4566",
        "title": "Robert Seethaler - Der Trafikant",
        "folder": "robert-seethaler-der-trafikant-2-4566"
      },
      {
        "id": "4567",
        "title": "Theodor Fontane - Effi Briest",
        "folder": "theodor-fontane-effi-briest-3-4567"
      },
      {
        "id": "4568",
        "title": "Theodor Fontane – Frau Jenny Treibel",
        "folder": "theodor-fontane-frau-jenny-treibel-2-4568"
      },
      {
        "id": "4569",
        "title": "Thomas Bernhard - Die Macht der Gewohnheit",
        "folder": "thomas-bernhard-die-macht-der-gewohnheit-2-4569"
      },
      {
        "id": "4570",
        "title": "Thomas Bernhard - Holzfällen",
        "folder": "thomas-bernhard-holzfallen-2-4570"
      },
      {
        "id": "4571",
        "title": "Thomas Mann - Buddenbrooks",
        "folder": "thomas-mann-buddenbrooks-3-4571"
      },
      {
        "id": "4572",
        "title": "Thomas Mann - Der Zauberberg",
        "folder": "thomas-mann-der-zauberberg-2-4572"
      },
      {
        "id": "4573",
        "title": "William Shakespeare – Romeo und Julia",
        "folder": "william-shakespeare-romeo-und-julia-2-4573"
      },
      {
        "id": "4574",
        "title": "Wolfgang Herrndorf - Tschick",
        "folder": "wolfgang-herrndorf-tschick-3-4574"
      },
      {
        "id": "4575",
        "title": "Wolfgang Koeppen - Tauben im Gras",
        "folder": "wolfgang-koeppen-tauben-im-gras-3-4575"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Literaturkanon+Werke+Deutschunterricht&t=284"
  },
  "dramen-und-werkinterpretationen": {
    "slug": "dramen-und-werkinterpretationen",
    "title": "Dramen- & Werkinterpretationen (Klassiker)",
    "category": "Meisterwerke & Literaturkanon",
    "shortDesc": "Tiefenanalysen: Nathan der Weise, Woyzeck, Maria Stuart, Leben des Galilei, In der Strafkolonie, Mario und der Zauberer.",
    "longDesc": "Abitur- und Klausurvorbereitung auf höchstem Niveau: Historischer Kontext, literarische Bedeutung, Figurenanalysen und der brennende Bezug zur Gegenwart der großen Meisterwerke.",
    "keyPoints": [
      "Lessing – Nathan der Weise: Ringparabel, Toleranzgedanke, Vernunftreligion und Humanitätsideal der Aufklärung",
      "Büchner – Woyzeck: Soziale Determiniertheit, Ausbeutung, Sprachlosigkeit der Unterschicht und offene Dramenform",
      "Schiller – Maria Stuart: Machtpolitik, Staatsräson (Elisabeth) vs. moralische Läuterung und innere Freiheit (Maria)",
      "Brecht – Leben des Galilei: Verantwortung der Wissenschaft gegenüber der Gesellschaft und Widerruf unter Folterdrohung",
      "Kafka – In der Strafkolonie: Absurdität bürokratischer Strafapparate, Totalitarismus und Entfremdung",
      "Thomas Mann – Mario und der Zauberer: Parabel auf den italienischen Faschismus, Verführungskraft von Demagogen und Willensschwäche"
    ],
    "exercises": [
      {
        "id": "6266",
        "title": "Nathan der Weise von Gotthold Ephraim Lessing - Bezug zur Gegenwart",
        "folder": "nathan-der-weise-von-gotthold-ephraim-lessing-bezug-zur-gegenwart-6266"
      },
      {
        "id": "6267",
        "title": "Nathan der Weise von Gotthold Ephraim Lessing - historischer Kontext",
        "folder": "nathan-der-weise-von-gotthold-ephraim-lessing-historischer-kontext-6267"
      },
      {
        "id": "6268",
        "title": "Nathan der Weise von Gotthold Ephraim Lessing - literarische Bedeutung",
        "folder": "nathan-der-weise-von-gotthold-ephraim-lessing-literarische-bedeutung-6268"
      },
      {
        "id": "6274",
        "title": "Woyzeck von Georg Büchner - historischer Kontext",
        "folder": "woyzeck-von-georg-buchner-historischer-kontext-6274"
      },
      {
        "id": "6275",
        "title": "Woyzeck von Georg Büchner - literarische Bedeutung",
        "folder": "woyzeck-von-georg-buchner-literarische-bedeutung-6275"
      },
      {
        "id": "6278",
        "title": "Woyzeck von Georg Büchner - Bezug zur Gegenwart",
        "folder": "woyzeck-von-georg-buchner-bezug-zur-gegenwart-6278"
      },
      {
        "id": "6252",
        "title": "Maria Stuart von Friedrich Schiller - Bezug zur Gegenwart",
        "folder": "maria-stuart-von-friedrich-schiller-bezug-zur-gegenwart-6252"
      },
      {
        "id": "6253",
        "title": "Maria Stuart von Friedrich Schiller - historischer Kontext",
        "folder": "maria-stuart-von-friedrich-schiller-historischer-kontext-6253"
      },
      {
        "id": "6254",
        "title": "Maria Stuart von Friedrich Schiller - literarische Bedeutung",
        "folder": "maria-stuart-von-friedrich-schiller-literarische-bedeutung-6254"
      },
      {
        "id": "6245",
        "title": "Leben des Galilei von Bertolt Brecht - Bezug zur Gegenwart",
        "folder": "leben-des-galilei-von-bertolt-brecht-bezug-zur-gegenwart-6245"
      },
      {
        "id": "6246",
        "title": "Leben des Galilei von Bertolt Brecht - historischer Kontext",
        "folder": "leben-des-galilei-von-bertolt-brecht-historischer-kontext-6246"
      },
      {
        "id": "6247",
        "title": "Leben des Galilei von Bertolt Brecht - literarische Bedeutung",
        "folder": "leben-des-galilei-von-bertolt-brecht-literarische-bedeutung-6247"
      },
      {
        "id": "6227",
        "title": "In der Strafkolonie von Franz Kafka - Bezug zur Gegenwart",
        "folder": "in-der-strafkolonie-von-franz-kafka-bezug-zur-gegenwart-6227"
      },
      {
        "id": "6228",
        "title": "In der Strafkolonie von Franz Kafka - historischer Kontext",
        "folder": "in-der-strafkolonie-von-franz-kafka-historischer-kontext-6228"
      },
      {
        "id": "6229",
        "title": "In der Strafkolonie von Franz Kafka - literarische Bedeutung",
        "folder": "in-der-strafkolonie-von-franz-kafka-literarische-bedeutung-6229"
      },
      {
        "id": "6230",
        "title": "In der Strafkolonie von Franz Kafka",
        "folder": "in-der-strafkolonie-von-franz-kafka-6230"
      },
      {
        "id": "6255",
        "title": "Mario und der Zauberer von Thomas Mann - Bezug zur Gegenwart",
        "folder": "mario-und-der-zauberer-von-thomas-mann-bezug-zur-gegenwart-6255"
      },
      {
        "id": "6256",
        "title": "Mario und der Zauberer von Thomas Mann - historischer Kontext",
        "folder": "mario-und-der-zauberer-von-thomas-mann-historischer-kontext-6256"
      },
      {
        "id": "6257",
        "title": "Mario und der Zauberer von Thomas Mann - literarische Bedeutung",
        "folder": "mario-und-der-zauberer-von-thomas-mann-literarische-bedeutung-6257"
      },
      {
        "id": "6258",
        "title": "Mario und der Zauberer von Thomas Mann",
        "folder": "mario-und-der-zauberer-von-thomas-mann-6258"
      },
      {
        "id": "6235",
        "title": "Iphigenie auf Tauris von J.W. Goethe - Bezug zur Gegenwart",
        "folder": "iphigenie-auf-tauris-von-j-w-goethe-bezug-zur-gegenwart-6235"
      },
      {
        "id": "6236",
        "title": "Iphigenie auf Tauris von J.W. Goethe - historischer Kontext",
        "folder": "iphigenie-auf-tauris-von-j-w-goethe-historischer-kontext-6236"
      },
      {
        "id": "6237",
        "title": "Iphigenie auf Tauris von J.W. Goethe - literarische Bedeutung",
        "folder": "iphigenie-auf-tauris-von-j-w-goethe-literarische-bedeutung-6237"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Dramenanalyse+Lektuereschluessel&t=284"
  },
  "die-heimsuchung": {
    "id": 56067,
    "slug": "die-heimsuchung",
    "title": "Jenny Erpenbeck: Heimsuchung (Abitur-Schwerpunkt)",
    "category": "Meisterwerke & Literaturkanon",
    "shortDesc": "Epochenumbruch am märkischen See: Weimarer Republik, NS-Diktatur, DDR und Wiedervereinigung in 12 Lebensläufen.",
    "longDesc": "Ein Meilenstein der deutschen Gegenwartsliteratur und zentrales Abiturthema: Anhand eines märkischen Sommerhauses und seiner Bewohner erzählt Jenny Erpenbeck ein Jahrhundert deutscher Geschichte.",
    "keyPoints": [
      "Konzeption & Raum: Ein Sommerhaus an einem Brandenburger See als Brennglas deutscher Geschichte des 20. Jahrhunderts",
      "Die 12 Figuren: Vom jüdischen Tuchfabrikanten über den Architekten bis zur Schriftstellerin – individuelle Schicksale zwischen Enteignung, Krieg und Flucht",
      "Die Figur des Gärtners: Konstante und zeitlose Figur, die stumm die Natur pflegt, während die politischen Systeme vergehen",
      "Themen: Verlust von Heimat, Verdrängung, Enteignung (Arisierung, Bodenreform in der DDR), Schuld und Vergänglichkeit",
      "Stilistik: Verdichtete, fast musikalische Sprache, rhythmische Leitmotive und lakonische Distanz"
    ],
    "exercises": [
      {
        "id": "3104",
        "title": "Der Roman Die Heimsuchung von Jenny Erpenbck",
        "folder": "der-roman-die-heimsuchung-von-jenny-erpenbck-3104"
      },
      {
        "id": "3098",
        "title": "Jenny Erpenbeck - Heimsuchung",
        "folder": "jenny-erpenbeck-heimsuchung-3098"
      },
      {
        "id": "3106",
        "title": "Die Heimsuchung - 1912 - Vorkriegszeit des Ersten Weltkriegs und Antisemitismus",
        "folder": "die-heimsuchung-1912-vorkriegszeit-des-ersten-weltkriegs-und-antisemitismus-3106"
      },
      {
        "id": "3107",
        "title": "Die Heimsuchung - 1945 - Kriegsende",
        "folder": "die-heimsuchung-1945-kriegsende-3107"
      },
      {
        "id": "3108",
        "title": "Der Roman Die Heimsuchung von Jenny Erpenbck - 1952 - Anfangsphase der DDR",
        "folder": "der-roman-die-heimsuchung-von-jenny-erpenbck-1952-anfangsphase-der-ddr-3108"
      },
      {
        "id": "3109",
        "title": "Die Heimsuchung - 1961-62 - Bau der Berliner Mauer",
        "folder": "die-heimsuchung-1961-62-bau-der-berliner-mauer-3109"
      },
      {
        "id": "3110",
        "title": "Die Heimsuchung - 2001 - Nachwendejahre, Erinnerungskultur, neues Jahrtausend",
        "folder": "die-heimsuchung-2001-nachwendejahre-erinnerungskultur-neues-jahrtausend-3110"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Erpenbeck+Heimsuchung+Abitur&t=284"
  },
  "gedichte-und-balladen": {
    "slug": "gedichte-und-balladen",
    "title": "Berühmte Gedichte & Balladen",
    "category": "Meisterwerke & Literaturkanon",
    "shortDesc": "Goethes 'Prometheus', 'Osterspaziergang', 'Wandrers Nachtlied' und Fontanes 'John Maynard'.",
    "longDesc": "Gedichtanalyse und Lyrikverständnis: Metrum (Jambus, Trochäus, Daktylus, Anapäst), Reimschemata, rhetorische Stilmittel und die dramatische Balladenform.",
    "keyPoints": [
      "Ballade als Mehrgattungsform: Epische Erzählung, lyrische Strophenform und dramatische Dialogführung",
      "Theodor Fontane – 'John Maynard': Heldenmut und Selbstaufopferung des Steuermanns auf dem brennenden Eriesee ('Noch zehn Minuten bis Buffalo')",
      "Goethe – 'Prometheus': Hymne des Sturm und Drang – Auflehnung des schöpferischen Menschen gegen göttliche Willkür",
      "Goethe – 'Osterspaziergang' (Faust I): 'Vom Eise befreit sind Strom und Bäche' – Frühlingserwachen und Befreiung des Volkes",
      "Goethe – 'Wandrers Nachtlied': 'Über allen Gipfeln ist Ruh' – Vollendung schlichter Naturlyrik und Seelenfrieden"
    ],
    "exercises": [
      {
        "id": "5206",
        "title": "John Maynard von Theodor Fontane",
        "folder": "john-maynard-von-theodor-fontane-5206"
      },
      {
        "id": "5209",
        "title": "Osterspaziergang von Johann Wolfgang von Goethe",
        "folder": "osterspaziergang-von-johann-wolfgang-von-goethe-5209"
      },
      {
        "id": "5210",
        "title": "Prometheus von Johann Wolfgang von Goethe",
        "folder": "prometheus-von-johann-wolfgang-von-goethe-5210"
      },
      {
        "id": "5212",
        "title": "Wandrers Nachtlied von Johann Wolfgang von Goethe",
        "folder": "wandrers-nachtlied-von-johann-wolfgang-von-goethe-5212"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Balladen+Gedichtanalyse+Goethe+Fontane&t=284"
  }
};
