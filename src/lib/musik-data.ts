export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface MusikTopic {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  keyPoints: string[];
  exercises: H5PExercise[];
  worksheetLink?: string;
}

export const musikCategories: string[] = [
  "Noten & Instrumente",
  "Musikgeschichte & Meisterwerke",
  "Komponisten nach Epochen",
  "Bühne, Jazz & Popmusik"
];

export const musikTopics: Record<string, MusikTopic> = {
  "noten-lesen": {
    "slug": "noten-lesen",
    "title": "Noten lesen",
    "category": "Noten & Instrumente",
    "shortDesc": "Tonhöhe, Notenwerte, Pausen, Klaviatur, Vorzeichen und Bassschlüssel.",
    "longDesc": "Hier lernst du die Grundlagen des Notenlesens: Von den Notennamen im Violinschlüssel über Noten- und Pausenwerte bis hin zu Vorzeichen, Halbtönen und dem Bassschlüssel.",
    "keyPoints": [
      "Notennamen im Violinschlüssel: c', d', e', f', g', a', h', c'' – Merksatz für Notenlinien (E-G-H-D-F) und Zwischenräume (F-A-C-E)",
      "Notenwerte & Pausen: Ganze Note (4 Schläge), Halbe Note (2 Schläge), Viertelnote (1 Schlag), Achtelnote (1/2 Schlag), Sechzehntelnote (1/4 Schlag)",
      "Vorzeichen & Halbtöne: Das Kreuz (#) erhöht um einen Halbtonschritt; das 'b' erniedrigt um einen Halbtonschritt; das Auflösungszeichen stellt den Stammton wieder her",
      "Klaviatur & Halbtonschritte: Natürliche Halbtonschritte zwischen e-f und h-c (keine schwarzen Tasten dazwischen)",
      "Bassschlüssel (F-Schlüssel): Notenschlüssel für tiefe Stimmen und Instrumente (Cello, Kontrabass, linke Hand am Klavier)",
      "Schlagzeugnotation: Rhythmische Notierung für Bassdrum, Snare, Hi-Hat, Tom-Toms und Becken"
    ],
    "exercises": [
      { id: "239", title: "Übungen und Erklärvideo zu Tonhöhe und Notennamen", folder: "bungen-und-erklarvideo-zu-tonhohe-und-notennamen-239" },
      {
        "id": "253",
        "title": "Notenwerte und Pausen",
        "folder": "notenwerte-und-pausen-2-253"
      },
      { id: "254", title: "Vorzeichen (Halbtöne) - Erklärung und Übungen", folder: "vorzeichen-halbtone-erklarung-und-bungen-254" },
      {
        "id": "255",
        "title": "Die Töne am Klavier (Klaviatur)",
        "folder": "die-tone-am-klavier-klaviatur-erklarung-und-bungen-255"
      },
      {
        "id": "343",
        "title": "Der Bassschlüssel",
        "folder": "der-bassschlussel-343"
      },
      { id: "342", title: "Das Schlagzeug / die Schlagzeugnotation", folder: "das-schlagzeug-die-schlagzeugnotation-342" },
      {
        id: "2",
        title: "Tonhöhe und Notennamen",
        folder: "biologie-arbeitsblatter-2"
      },
      {
        id: "9",
        title: "Notenwerte und Pausen",
        folder: "notenwerte-und-pausen-9"
      },
      {
        id: "13",
        title: "Noten- und Pausenmemory",
        folder: "noten-und-pausenmemory-13"
      },
      {
        id: "14",
        title: "Tonhöhe-Memory - einfache Version",
        folder: "tonhohe-memory-einfache-version-14"
      },
      {
        id: "15",
        title: "Tonhöhe-Memory - einfache Version",
        folder: "tonhohe-memory-einfache-version-2-15"
      },
      {
        id: "16",
        title: "Tonhöhe-Memory - mittelschwere Version",
        folder: "tonhohe-memory-schwere-version-16"
      },
      {
        id: "17",
        title: "Tonhöhe-Memory - schwere Version",
        folder: "intervalle-in-der-musik-2-17"
      },
      {
        id: "225",
        title: "Notennamen - Tonhöhe",
        folder: "notennamen-tonhohe-225"
      },
      {
        id: "648",
        title: "elo Tonhöhe (2)",
        folder: "elo-tonhohe-2-648"
      },
      {
        id: "650",
        title: "kurs tonhöhe 2",
        folder: "kurs-tonhohe-2-650"
      },
      {
        id: "652",
        title: "kurs tonhöhe 4",
        folder: "kurs-tonhohe-4-652"
      },
      {
        id: "654",
        title: "kurs tonhöhe 6",
        folder: "kurs-tonhohe-6-654"
      },
      {
        id: "655",
        title: "kurs tonhöhe 7",
        folder: "kurs-tonhohe-7-655"
      },
      {
        id: "656",
        title: "kurs tonhöhe 8",
        folder: "kurs-tonhohe-8-656"
      },
      {
        id: "657",
        title: "kurs tonhöhe 9",
        folder: "kurs-tonhohe-9-657"
      },
      {
        id: "658",
        title: "kurs tonhöhe 10",
        folder: "kurs-tonhohe-10-658"
      },
      {
        id: "661",
        title: "kurs Notenwerte und Pausen",
        folder: "kurs-notenwerte-und-pausen-661"
      },
      {
        id: "5320",
        title: "Tonhöhe und Tonstärke",
        folder: "tonhohe-und-tonstarke-5320"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Noten+lesen+Musiktheorie&t=1251"
  },
    "harmonielehre-akkorde-und-intervalle": {
    "slug": "harmonielehre-akkorde-und-intervalle",
    "title": "Harmonielehre, Akkorde & Intervalle",
    "category": "Noten & Instrumente",
    "shortDesc": "Intervalle, Dreiklänge in Dur und Moll, Umkehrungen, Klaviatur und Tonleitern.",
    "longDesc": "Vertiefe dein musikalisches Verständnis mit Harmonielehre und Gehörbildung: Lerne Intervalle (Sekunde, Terz, Quarte, Quinte, Oktave) zu bestimmen und zu hören, baue Dur- und Moll-Akkorde auf, verstehe Akkordumkehrungen und meistere die Klaviatur mit Halbtönen und Vorzeichen.",
    "keyPoints": [
      "Intervalle: Tonabstände vom Grundton – Prim, Sekunde, Terz, Quarte, Quinte, Sexte, Septime, Oktave",
      "Dur- und Moll-Akkorde: Dur-Dreiklang (große Terz + kleine Terz), Moll-Dreiklang (kleine Terz + große Terz)",
      "Akkordumkehrungen: Grundstellung, 1. Umkehrung (Sextakkord), 2. Umkehrung (Quartsextakkord)",
      "Klaviatur & Vorzeichen: Kreuz (# / -is) erhöht um einen Halbton, 'b' (-es) erniedrigt um einen Halbton",
      "Gehörbildung: Intervalle und Akkordgeschlechter (Dur / Moll) im Gehör unterscheiden lernen"
    ],
    "exercises": [
      {
        id: "10",
        title: "Vorzeichen - Halbtöne in der Musik",
        folder: "vorzeichen-halbtone-in-der-musik-10"
      },
      {
        id: "11",
        title: "Die Klaviatur - Töne am Klavier",
        folder: "die-klaviatur-tone-am-klavier-11"
      },
      {
        id: "12",
        title: "Intervalle in der Musik",
        folder: "intervalle-in-der-musik-12"
      },
      {
        id: "18",
        title: "Akkorde - Dur und Moll",
        folder: "akkorde-dur-und-moll-18"
      },
      {
        id: "19",
        title: "Akkorde - Dur und Moll",
        folder: "lautstarke-und-tempo-in-der-musik-19"
      },
      {
        id: "20",
        title: "(3a) Zuordnungsübung mit Vorzeichen",
        folder: "3a-zuordnungsubung-mit-vorzeichen-20"
      },
      {
        id: "21",
        title: "Übung zur Klaviatur",
        folder: "bung-zur-klaviatur-21"
      },
      {
        id: "22",
        title: "Schwarze Tasten am Klavier",
        folder: "schwarze-tasten-am-klavier-22"
      },
      {
        id: "23",
        title: "Klaviatur und Noten",
        folder: "klaviatur-und-noten-23"
      },
      {
        id: "60",
        title: "Intervalle zuordnen (9b)",
        folder: "intervalle-zuordnen-9b-60"
      },
      {
        id: "61",
        title: "Intervalle bestimmen",
        folder: "intervalle-bestimmen-61"
      },
      {
        id: "62",
        title: "Ordne die Akkorde richtig zu!",
        folder: "ordne-die-akkorde-richtig-zu-62"
      },
      {
        id: "63",
        title: "Dur-Akkorde zuordnen",
        folder: "dur-akkorde-zuordnen-63"
      },
      {
        id: "65",
        title: "(10d) Umkehrung von Akkorden",
        folder: "10d-umkehrung-von-akkorden-65"
      },
      {
        id: "211",
        title: "Intervalle hören und bestimmen - Sekund und Terz",
        folder: "intervalle-horen-und-bestimmen-sekund-und-terz-211"
      },
      {
        id: "268",
        title: "Intervalle",
        folder: "intervalle-268"
      },
      {
        id: "319",
        title: "Akkorde - Dur und Moll",
        folder: "akkorde-dur-und-moll-2-319"
      },
      {
        id: "345",
        title: "Dur- und Molltonleitern",
        folder: "dur-und-molltonleitern-345"
      },
      {
        id: "659",
        title: "kurs vorzeichen",
        folder: "kurs-vorzeichen-659"
      },
      {
        id: "660",
        title: "kurs Klaviatur",
        folder: "kurs-klaviatur-660"
      },
      {
        id: "1181",
        title: "Intervalle in der Musik",
        folder: "intervalle-in-der-musik-3-1181"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Harmonielehre+Akkorde+Intervalle&t=1251"
  },
  "musikinstrumente": {
    "slug": "musikinstrumente",
    "title": "Musikinstrumente",
    "category": "Noten & Instrumente",
    "shortDesc": "Streicher, Holzbläser, Blechbläser, Tasten- und Schlaginstrumente: Klänge, Aufbau und Orchester.",
    "longDesc": "Hier entdeckst du die faszinierende Vielfalt der Musikinstrumente! Mit kurzen Erklärungen und interaktiven Übungen lernst du Bauweise, Tonerzeugung und Klänge aller Instrumentengruppen kennen.",
    "keyPoints": [
      "Streichinstrumente: Violine (Geige), Bratsche (Viola), Violoncello (Cello), Kontrabass",
      "Holzblasinstrumente: Querflöte, Blockflöte, Oboe, Klarinette, Fagott, Saxophon",
      "Blechblasinstrumente: Trompete, Posaune, Horn (Waldhorn), Tuba",
      "Tasteninstrumente: Klavier (Flügel), Cembalo, Orgel, Akkordeon",
      "Zupf- und Schlaginstrumente: Konzertgitarre, E-Gitarre, Harfe, Pauken, Xylophon, Drumset",
      "Sitzordnung im Sinfonieorchester: Streicher im Halbkreis vorne, Holzbläser zentriert, Blech und Schlagwerk im Hintergrund"
    ],
    "exercises": [
      {
        "id": "532",
        "title": "Einteilung der Instrumente",
        "folder": "einteilung-der-instrumente-532"
      },
      {
        "id": "520",
        "title": "Streichinstrumente",
        "folder": "streichinstrumente-520"
      },
      {
        "id": "521",
        "title": "Das Klavier",
        "folder": "das-klavier-521"
      },
      {
        "id": "522",
        "title": "Die akustische Gitarre",
        "folder": "die-akustische-gitarre-522"
      },
      {
        "id": "523",
        "title": "Die elektrische Gitarre",
        "folder": "die-elektrische-gitarre-523"
      },
      {
        "id": "525",
        "title": "Idiophone",
        "folder": "idiophone-525"
      },
      {
        "id": "526",
        "title": "Membranophone",
        "folder": "membranophone-526"
      },
      {
        "id": "527",
        "title": "Flöten",
        "folder": "floten-527"
      },
      {
        "id": "528",
        "title": "Rohrblattinstrumente",
        "folder": "rohrblattinstrumente-528"
      },
      {
        "id": "529",
        "title": "Blechblasinstrumente",
        "folder": "blechblasinstrumente-529"
      },
      {
        "id": "530",
        "title": "Das Schlagzeug",
        "folder": "das-schlagzeug-530"
      },
      {
        "id": "524",
        "title": "Die Harfe",
        "folder": "die-harfe-524"
      },
      {
        "id": "538",
        "title": "Die Orgel",
        "folder": "die-orgel-538"
      },
      {
        "id": "539",
        "title": "Das Akkordeon",
        "folder": "das-akkordeon-539"
      },
      {
        "id": "537",
        "title": "Die Stimme",
        "folder": "die-stimme-537"
      },
      {
        "id": "536",
        "title": "Stimmlagen",
        "folder": "stimmlagen-536"
      },
      {
        "id": "531",
        "title": "Die Band",
        "folder": "die-band-531"
      },
      {
        "id": "535",
        "title": "Das Orchester",
        "folder": "das-orchester-535"
      },
      {
        "id": "533",
        "title": "Hörübungen",
        "folder": "horubungen-533"
      },
      {
        "id": "534",
        "title": "Instrumente-Memory",
        "folder": "instrumente-memory-534"
      },
      {
        id: "3199",
        title: "Escape Room &quot;Saiteninstrumente&quot;",
        folder: "escape-room-quot-saiteninstrumente-quot-3199"
      },
      {
        id: "3200",
        title: "Escape Room &quot;Schlag- und Blasinstrumente&quot;",
        folder: "escape-room-quot-schlag-und-blasinstrumente-quot-3200"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Musikinstrumente&t=1251"
  },
  "rhythmusuebungen": {
    "slug": "rhythmusuebungen",
    "title": "Rhythmusübungen",
    "category": "Noten & Instrumente",
    "shortDesc": "Rhythmusdiktat, Takte, Metrum, Rhythmus-Memory und interaktive Klatsch-Übungen.",
    "longDesc": "Hier trainierst du dein Rhythmusgefühl: Von einfachen Viertel- und Achtel-Patterns über komplexe Taktarten und Synkopen bis hin zu interaktiven Rhythmus-Memorys mit und ohne Notenschrift.",
    "keyPoints": [
      "Metrum & Taktarten: Grundschlag (Puls), Betonungsmuster im 2/4-, 3/4-, 4/4- und 6/8-Takt",
      "Rhythmische Bausteine: Ganze, Halbe, Viertel, Achtel und Sechzehntelnoten sowie punktierte Noten",
      "Synkopen & Off-Beat: Betonungsverschiebungen gegen den Grundpuls für rhythmischen Drive",
      "Pausenwerte: Gezielte Stille im Taktgefüge als elementares Gestaltungsmittel",
      "Gehörbildung: Rhythmen akustisch erkennen, nachklatschen und in Noten aufschreiben",
      "Rhythmus-Memory: Spielerisches Zuordnen von Rhythmusmustern und Hörübungen"
    ],
    "exercises": [
      {
        "id": "102",
        "title": "Rhythmusübung 1 (Grundlagen)",
        "folder": "rhythmusubung-1-102"
      },
      {
        "id": "104",
        "title": "Rhythmusübung 2 (Achtel & Viertel)",
        "folder": "rhythmusubung-2-104"
      },
      {
        "id": "103",
        "title": "Rhythmusübung 3 (Kombinationen)",
        "folder": "rhythmusubung-3-103"
      },
      {
        "id": "461",
        "title": "Rhythm Exercise 1",
        "folder": "rhythm-exercise-1-461"
      },
      {
        "id": "464",
        "title": "Rhythm Exercise 2",
        "folder": "rhythm-exercise-2-464"
      },
      {
        "id": "106",
        "title": "Rhythmus-Memory (Einfach)",
        "folder": "rhythmusmemory-einfach-106"
      },
      {
        "id": "107",
        "title": "Rhythmus-Memory (Mittel)",
        "folder": "rhythmusmemory-mittel-107"
      },
      {
        "id": "108",
        "title": "Rhythmus-Memory (Schwer)",
        "folder": "rhythmusmemory-schwer-108"
      },
      {
        "id": "109",
        "title": "Rhythmus-Memory ohne Noten (Einfach)",
        "folder": "rhythmusmemory-ohne-noten-einfach-109"
      },
      {
        "id": "105",
        "title": "Rhythmus-Memory ohne Noten (Mittel)",
        "folder": "rhythmusmemory-ohne-noten-mittel-105"
      },
      {
        "id": "110",
        "title": "Rhythmus-Memory ohne Noten (Schwer)",
        "folder": "rhythmusmemory-ohne-noten-schwer-110"
      },
      {
        id: "111",
        title: "Rhythmusmemory ohne Noten schwer",
        folder: "werke-der-wiener-klassik-erkennen-memory-111"
      },
      {
        id: "441",
        title: "Rhythmusübung 4",
        folder: "die-unvollendete-von-franz-schubert-441"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rhythmus+Musikunterricht&t=1251"
  },
  "schlagzeug-und-drums": {
    "slug": "schlagzeug-und-drums",
    "title": "Schlagzeug & Drums",
    "category": "Noten & Instrumente",
    "shortDesc": "Aufbau des Drumsets, Snare, Bass Drum, Hi-Hat, Becken, Drum-Notation und Rhythmus-Patterns.",
    "longDesc": "Hier lernst du das Schlagzeug in all seinen Facetten kennen: Den Aufbau eines modernen Drumsets, die Funktion der einzelnen Trommeln und Becken, die spezielle Schlagzeugnotation sowie typische Rhythmus-Patterns.",
    "keyPoints": [
      "Aufbau des Drumsets: Bass Drum (große Trommel mit Fußmaschine), Snare Drum, Hi-Hat, Tom-Toms (High, Mid, Floor) und Becken (Crash, Ride)",
      "Schlagzeug-Stöcke & Hardware: Drumsticks (Holz/Nylon), Besen, Rods, Ständer und Fußpedale",
      "Schlagzeugnotation: Notenlinien zeigen die einzelnen Instrumente des Drumsets anstelle von Tonhöhen (z. B. Notenlinien für Bassdrum unten, Snare mittig, Hi-Hat als Kreuze oben)",
      "Basis-Grooves: Viertel- und Achtel-Rock-Beats mit Bassdrum auf 1 & 3, Snare auf 2 & 4 und durchgehender Hi-Hat",
      "Fill-Ins & Akzente: Rhythmisches Umspielen und Überleitungen zwischen verschiedenen Song-Teilen",
      "Dynamik & Timing: Unabhängigkeit der vier Gliedmaßen (Koordination von Händen und Füßen)"
    ],
    "exercises": [
      {
        "id": "530",
        "title": "Das Schlagzeug – Aufbau, Kessel und Becken",
        "folder": "das-schlagzeug-530"
      },
      {
        "id": "342",
        "title": "Das Schlagzeug / Die Schlagzeugnotation",
        "folder": "das-schlagzeug-die-schlagzeugnotation-342"
      },
      {
        "id": "3201",
        "title": "Escape Room: Schlagzeug, Harfe, Orgel und Akkordeon",
        "folder": "escape-room-quot-schlagzeug-harfe-orgel-akkordeon-quot-3201"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Schlagzeug+Drums+Musikunterricht&t=1251"
  },
  "epochen-der-musikgeschichte": {
    "slug": "epochen-der-musikgeschichte",
    "title": "Epochen der Musikgeschichte",
    "category": "Musikgeschichte & Meisterwerke",
    "shortDesc": "Von der Musik der Steinzeit über Mittelalter, Renaissance, Barock, Klassik und Romantik bis zur Moderne.",
    "longDesc": "Hier lernst du die wichtigsten Epochen der Musikgeschichte kennen – wie sich Instrumente, Tonsysteme, Kompositionen und gesellschaftliche Bedeutung der Musik im Laufe der Jahrhunderte gewandelt haben.",
    "keyPoints": [
      "Steinzeit & Antike: Erste Rhythmusinstrumente, Knochenflöten und griechische Tonleitern",
      "Mittelalter (500–1400): Gregorianischer Choral, geistliche Monophonie und Anfänge der Mehrstimmigkeit",
      "Renaissance (1400–1600): Vokalpolyphonie, Motetten, Madrigale und Lautenmusik",
      "Barock (1600–1750): Generalbasszeitalter, Concerto Grosso, Entstehung der Oper (Monteverdi, Bach, Vivaldi)",
      "Wiener Klassik (1750–1830): Formale Klarheit, Sinfonie, Streichquartett und Sonate (Haydn, Mozart, Beethoven)",
      "Romantik (1830–1900): Emotionen, Naturbilder, Programmmusik und Riesenorchester (Schubert, Chopin, Wagner, Brahms)",
      "Moderne (ab 1900): Impressionismus, Atonalität, Zwölftontechnik und Crossover (Schönberg, Strawinsky, Orff)"
    ],
    "exercises": [
      {
        "id": "500",
        "title": "Musikgeschichte: Steinzeit bis Antike",
        "folder": "musikgeschichte-steinzeit-bis-antike-500"
      },
      {
        "id": "501",
        "title": "Musikgeschichte: Musik im Mittelalter",
        "folder": "musikgeschichte-musik-im-mittelalter-501"
      },
      {
        "id": "502",
        "title": "Musikgeschichte: Renaissance",
        "folder": "musikgeschichte-renaissance-502"
      },
      {
        "id": "503",
        "title": "Musikgeschichte: Barock",
        "folder": "musikgeschichte-barock-503"
      },
      {
        "id": "504",
        "title": "Musikgeschichte: Klassik",
        "folder": "musikgeschichte-klassik-504"
      },
      {
        "id": "505",
        "title": "Musikgeschichte: Romantik",
        "folder": "musikgeschichte-romantik-505"
      },
      {
        "id": "506",
        "title": "Musikgeschichte: 20. Jahrhundert",
        "folder": "musikgeschichte-moderne-506"
      },
      {
        id: "66",
        title: "Barock",
        folder: "barock-66"
      },
      {
        id: "68",
        title: "Romantik",
        folder: "romantik-68"
      },
      {
        id: "297",
        title: "Renaissance - Barock - Klassik - Romantik",
        folder: "renaissance-barock-klassik-romantik-297"
      },
      {
        id: "318",
        title: "Lautstärke und Tempo in der Musik",
        folder: "lautstarke-und-tempo-in-der-musik-2-318"
      },
      {
        id: "513",
        title: "Orchestermusik",
        folder: "orchestermusik-513"
      },
      {
        id: "515",
        title: "Klaviermusik",
        folder: "klaviermusik-515"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Musikgeschichte+Epochen&t=1251"
  },
  "bekannte-musikstuecke": {
    "slug": "bekannte-musikstuecke",
    "title": "Bekannte Musikstücke",
    "category": "Musikgeschichte & Meisterwerke",
    "shortDesc": "Eine kleine Nachtmusik, Für Elise, Mondscheinsonate, 5. Sinfonie, Air, Ungarischer Tanz und mehr.",
    "longDesc": "Hier lernst du berühmte Musikstücke aus verschiedenen Epochen kennen. Erfahre mehr über ihre Entstehungsgeschichte, ihren musikalischen Aufbau und ihre weltberühmten Melodien.",
    "keyPoints": [
      "Wolfgang Amadeus Mozart: Serenade Nr. 13 G-Dur 'Eine kleine Nachtmusik' (KV 525) & 40. Sinfonie g-Moll",
      "Ludwig van Beethoven: 5. Sinfonie c-Moll ('Schicksalssinfonie'), Bagatelle 'Für Elise' und Mondscheinsonate",
      "Johann Sebastian Bach: 'Air' aus der Orchestersuite Nr. 3 D-Dur",
      "Johannes Brahms: Ungarischer Tanz Nr. 5 in fis-Moll",
      "Frédéric Chopin: Trauermarsch (Marche funèbre) aus der Klaviersonate Nr. 2",
      "Wolfgang Amadeus Mozart: Rondo alla Turca (Türkischer Marsch) aus der Klaviersonate A-Dur"
    ],
    "exercises": [
      {
        "id": "429",
        "title": "40. Sinfonie von Wolfgang Amadeus Mozart",
        "folder": "40-sinfonie-von-wolfgang-amadeus-mozart-429"
      },
      {
        "id": "433",
        "title": "Die Moldau von Bedrich Smetana",
        "folder": "die-moldau-von-bedrich-smetana-433"
      },
      {
        "id": "1198",
        "title": "Die Unvollendete von Franz Schubert",
        "folder": "test-4-1198"
      },
      {
        "id": "440",
        "title": "Ungarischer Tanz Nr. 5 von Johannes Brahms",
        "folder": "ungarischer-tanz-nr-5-von-johannes-brahms-440"
      },
      {
        "id": "442",
        "title": "5. Sinfonie von Ludwig van Beethoven",
        "folder": "5-sinfonie-von-ludwig-van-beethoven-442"
      },
      {
        "id": "444",
        "title": "Für Elise von Ludwig van Beethoven",
        "folder": "fur-elise-von-ludwig-van-beethoven-444"
      },
      {
        "id": "445",
        "title": "Eine kleine Nachtmusik von Wolfgang Amadeus Mozart",
        "folder": "eine-kleine-nachtmusik-von-wolfgang-amadeus-mozart-445"
      },
      {
        "id": "446",
        "title": "Eine kleine Nachtmusik von Wolfgang Amadeus Mozart",
        "folder": "eine-kleine-nachtmusik-von-wolfgang-amadeus-mozart-2-446"
      },
      {
        "id": "447",
        "title": "Mondscheinsonate von Ludwig van Beethoven",
        "folder": "mondscheinsonate-von-ludwig-van-beethoven-447"
      },
      {
        "id": "448",
        "title": "Air von Johann Sebastian Bach",
        "folder": "air-von-johann-sebastian-bach-448"
      },
      {
        "id": "449",
        "title": "Feuerwerksmusik von Georg Friedrich Händel",
        "folder": "feuerwerksmusik-von-georg-friedrich-handel-449"
      },
      {
        id: "454",
        title: "Rondo Alla Turca von Wolfgang Amadeus Mozart",
        folder: "rondo-alla-turca-von-wolfgang-amadeus-mozart-454"
      },
      {
        id: "460",
        title: "Trauermarsch von Frederic Chopin",
        folder: "trauermarsch-von-frederic-chopin-460"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Bekannte+Musikstuecke+Klassik&t=1251"
  },
  "komponisten-des-barocks": {
    "slug": "komponisten-des-barocks",
    "title": "Komponisten (Barock)",
    "category": "Komponisten nach Epochen",
    "shortDesc": "Johann Sebastian Bach, Antonio Vivaldi, Georg Friedrich Händel und Claudio Monteverdi.",
    "longDesc": "Hier kannst du die wichtigsten Komponisten des Barocks kennenlernen! Diese Epoche war geprägt von prachtvollen, kunstvollen und polyphonen Werken für Kirche, Fürstenhöfe und die Opernbühne.",
    "keyPoints": [
      "Johann Sebastian Bach (1685–1750): Thomaskantor, Fugen, Brandenburgische Konzerte, Matthäuspassion",
      "Antonio Vivaldi (1678–1741): Italienischer Meister des Solokonzerts, 'Die vier Jahreszeiten'",
      "Georg Friedrich Händel (1685–1759): Meister des englischen Oratoriums (Messiah mit dem Halleluja) und der Oper",
      "Claudio Monteverdi (1567–1643): Schöpfer der ersten vollwertigen Oper der Musikgeschichte (L'Orfeo)"
    ],
    "exercises": [
      {
        "id": "610",
        "title": "Johann Sebastian Bach – Leben und Werk",
        "folder": "johann-sebastian-bach-2-610"
      },
      {
        "id": "763",
        "title": "Georg Friedrich Händel",
        "folder": "georg-friedrich-handel-763"
      },
      {
        "id": "764",
        "title": "Antonio Vivaldi – die vier Jahreszeiten",
        "folder": "antonio-vivaldi-764"
      },
      {
        "id": "847",
        "title": "Claudio Monteverdi",
        "folder": "claudio-monteverdi-847"
      },
      {
        id: "212",
        title: "Johann Sebastian Bach (Video mit Fragen)",
        folder: "johann-sebastian-bach-video-mit-fragen-212"
      },
      {
        id: "295",
        title: "Komponisten des Barock",
        folder: "komponisten-des-barock-295"
      },
      {
        id: "608",
        title: "Johann Sebastian Bach",
        folder: "johann-sebastian-bach-608"
      },
      {
        id: "3221",
        title: "Escape Room &quot;Komponisten Barock&quot;",
        folder: "escape-room-quot-komponisten-barock-quot-3221"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Barock+Komponisten&t=1251"
  },
  "komponisten-der-klassik": {
    "slug": "komponisten-der-klassik",
    "title": "Komponisten (Klassik)",
    "category": "Komponisten nach Epochen",
    "shortDesc": "Joseph Haydn, Wolfgang Amadeus Mozart, Ludwig van Beethoven und Antonio Salieri.",
    "longDesc": "Hier kannst du die berühmtesten Komponisten der Wiener Klassik kennenlernen! Diese Epoche brachte eine klare, harmonisch geordnete und melodische Musik von unübertroffener Schönheit hervor.",
    "keyPoints": [
      "Joseph Haydn (1732–1809): Schöpfer der klassischen Sinfonie und des Streichquartetts (Kaiserquartett)",
      "Wolfgang Amadeus Mozart (1756–1791): Geniales Universalgenie (Die Zauberflöte, Don Giovanni, Requiem, 41 Sinfonien)",
      "Ludwig van Beethoven (1770–1827): Revolutionär der Musik, 9 Sinfonien, 32 Klaviersonaten, Fidelio",
      "Antonio Salieri (1750–1825): Kaiserlicher Hofkapellmeister in Wien und gefeierter Opernkomponist"
    ],
    "exercises": [
      {
        "id": "754",
        "title": "Wolfgang Amadeus Mozart – Leben und Werk",
        "folder": "wolfgang-amadeus-mozart-2-754"
      },
      {
        "id": "753",
        "title": "Ludwig van Beethoven – Leben und Schaffen",
        "folder": "ludwig-van-beethoven-2-753"
      },
      { id: "756", title: "Josef Haydn", folder: "josef-haydn-3-756" },
      {
        "id": "1111",
        "title": "Antonio Salieri",
        "folder": "antonio-salieri-1111"
      },
      {
        id: "24",
        title: "Josef Haydn",
        folder: "josef-haydn-24"
      },
      {
        id: "26",
        title: "Ludwig van Beethoven",
        folder: "ludwig-van-beethoven-26"
      },
      {
        id: "27",
        title: "Wolfgang Amadeus Mozart",
        folder: "wolfgang-amadeus-mozart-27"
      },
      {
        id: "112",
        title: "Werke der Wiener Klassik erkennen (Memory)",
        folder: "zahlen-runden-112"
      },
      {
        id: "296",
        title: "Komponisten der Wiener Klassik",
        folder: "komponisten-der-wiener-klassik-296"
      },
      {
        id: "692",
        title: "studypoint - single choice - Fragen zur Musik der Wiener Klassik",
        folder: "studypoint-single-choice-fragen-zur-musik-der-wiener-klassik-692"
      },
      {
        id: "755",
        title: "Ludwig van Beethoven",
        folder: "ludwig-van-beethoven-3-755"
      },
      {
        id: "3099",
        title: "Ludwig van Beethoven",
        folder: "ludwig-van-beethoven-4-3099"
      },
      {
        id: "3103",
        title: "Wolfgang Amadeus Mozart",
        folder: "wolfgang-amadeus-mozart-3-3103"
      },
      {
        id: "3220",
        title: "Escape Room &quot;Komponisten der Wiener Klassik&quot;",
        folder: "escape-room-quot-komponisten-der-wiener-klassik-quot-3220"
      },
      {
        id: "4494",
        title: "Mozart, der Musikstar – Leben und tolle Musik",
        folder: "mozart-der-musikstar-leben-und-tolle-musik-4494"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Wiener+Klassik+Komponisten&t=1251"
  },
  "komponisten-der-romantik": {
    "slug": "komponisten-der-romantik",
    "title": "Komponisten (Romantik)",
    "category": "Komponisten nach Epochen",
    "shortDesc": "Schubert, Brahms, Chopin, Wagner, Verdi, Liszt, Schumann, Mendelssohn, Tschaikowsky und Bruckner.",
    "longDesc": "Tauche ein in die Welt der musikalischen Romantik! Diese Epoche war geprägt von tiefen Emotionen, leidenschaftlichen Melodien und einer neuen Freiheit im persönlichen Ausdruck.",
    "keyPoints": [
      "Franz Schubert: Vollender des deutschen Kunstlieds (Erlkönig, Winterreise, Unvollendete Sinfonie)",
      "Frédéric Chopin & Franz Liszt: Die Giganten des Klaviers – poetische Nocturnes und funkelnde Rhapsodien",
      "Johannes Brahms & Anton Bruckner: Monumentale Sinfonik und tiefe musikalische Formstrenge",
      "Richard Wagner & Giuseppe Verdi: Wagners Musikdrama mit Leitmotiven vs. Verdis italienisches Melodram",
      "Peter Tschaikowsky: Berühmte Ballette (Schwanensee, Nussknacker) und ergreifende Sinfonien"
    ],
    "exercises": [
      {
        "id": "835",
        "title": "Robert Schumann",
        "folder": "robert-schumann-835"
      },
      {
        "id": "837",
        "title": "Peter Iljitsch Tschaikowski",
        "folder": "peter-iljitsch-tschaikowski-837"
      },
      {
        "id": "838",
        "title": "Johannes Brahms",
        "folder": "johannes-brahms-838"
      },
      {
        "id": "839",
        "title": "Johann Strauss Vater",
        "folder": "johann-strauss-vater-839"
      },
      {
        "id": "840",
        "title": "Johann Strauss Sohn",
        "folder": "johann-strauss-sohn-840"
      },
      {
        "id": "843",
        "title": "Guiseppe Verdi",
        "folder": "guiseppe-verdi-843"
      },
      {
        "id": "844",
        "title": "Franz Schubert",
        "folder": "franz-schubert-844"
      },
      {
        "id": "928",
        "title": "Richard Wagner",
        "folder": "richard-wagner-928"
      },
      {
        "id": "930",
        "title": "Bedrich Smetana",
        "folder": "bedrich-smetana-930"
      },
      {
        "id": "932",
        "title": "Giacomo Puccini",
        "folder": "giacomo-puccini-932"
      },
      {
        "id": "933",
        "title": "Clara Schumann",
        "folder": "clara-schumann-933"
      },
      {
        "id": "1032",
        "title": "Edvard Grieg",
        "folder": "edvard-grieg-1032"
      },
      {
        "id": "1033",
        "title": "Felix Mendelssohn Bartholdy",
        "folder": "felix-mendelssohn-bartholdy-1033"
      },
      {
        "id": "1035",
        "title": "Frederic Chopin",
        "folder": "frederic-chopin-1035"
      },
      {
        "id": "1105",
        "title": "Niccolò Paganini",
        "folder": "niccol-paganini-1105"
      },
      {
        "id": "1106",
        "title": "Sergej Rachmaninow",
        "folder": "sergej-rachmaninow-1106"
      },
      {
        "id": "1107",
        "title": "Maurice Ravel",
        "folder": "maurice-ravel-1107"
      },
      {
        "id": "1110",
        "title": "Camille Saint-Saëns",
        "folder": "camille-saint-saens-1110"
      },
      {
        "id": "1112",
        "title": "Anton Bruckner",
        "folder": "anton-bruckner-1112"
      },
      {
        "id": "1124",
        "title": "Franz Liszt",
        "folder": "franz-liszt-1124"
      },
      {
        "id": "1125",
        "title": "Gustav Mahler",
        "folder": "gustav-mahler-1125"
      },
      {
        id: "222",
        title: "Frederic Chopin (Video mit Fragen)",
        folder: "frederic-chopin-video-mit-fragen-222"
      },
      {
        id: "224",
        title: "Franz Schubert (Video mit Fragen)",
        folder: "franz-schubert-video-mit-fragen-224"
      },
      {
        id: "3216",
        title: "Escape Room &quot;Komponisten der Romantik 2&quot;",
        folder: "escape-room-quot-komponisten-der-romantik-2-quot-3216"
      },
      {
        id: "3217",
        title: "Escape Room &quot;Komponisten der Romantik 1&quot;",
        folder: "escape-room-quot-komponisten-der-romantik-1-quot-3217"
      },
      {
        id: "3218",
        title: "Escape Room &quot;Deutsche Komponisten der Romantik&quot;",
        folder: "escape-room-quot-deutsche-komponisten-der-romantik-quot-3218"
      },
      {
        id: "3219",
        title: "Escape Room &quot;Österreichische Komponisten der Romantik&quot;",
        folder: "escape-room-quot-sterreichische-komponisten-der-romantik-quot-3219"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Romantik+Komponisten&t=1251"
  },
  "komponisten-der-moderne": {
    "slug": "komponisten-der-moderne",
    "title": "Komponisten (Moderne)",
    "category": "Komponisten nach Epochen",
    "shortDesc": "Arnold Schönberg, Igor Strawinsky, Paul Hindemith, Carl Orff und Claude Debussy.",
    "longDesc": "Die Musik der Moderne brachte völlig neue Klangwelten hervor: Experimente mit Harmonien, Atonalität, Zwölftontechnik und mitreißende rhythmische Urgewalten.",
    "keyPoints": [
      "Claude Debussy: Musikalischer Impressionismus, schwebende Klangfarben (Clair de lune)",
      "Arnold Schönberg: Begründer der Zweiten Wiener Schule und der Zwölftonmusik (Dodekaphonie)",
      "Igor Strawinsky: Rhythmische Revolution mit 'Le Sacre du Printemps'",
      "Carl Orff: Schulwerk und das weltberühmte Chorwerk 'Carmina Burana'",
      "Paul Hindemith: Gebrauchsmusik und Neoklassizismus"
    ],
    "exercises": [
      {
        "id": "929",
        "title": "Igor Stravinsky",
        "folder": "igor-stravinsky-929"
      },
      {
        "id": "931",
        "title": "Arnold Schönberg",
        "folder": "arnold-schonberg-931"
      },
      {
        "id": "1102",
        "title": "Paul Hindemith",
        "folder": "paul-hindemith-1102"
      },
      {
        "id": "1104",
        "title": "Carl Orff",
        "folder": "carl-orff-1104"
      },
      {
        "id": "1034",
        "title": "Claude Debussy",
        "folder": "claude-debussy-1034"
      },
      {
        id: "3215",
        title: "Escape Room &quot;Komponisten der Moderne&quot;",
        folder: "escape-room-quot-komponisten-der-moderne-quot-3215"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Moderne+Komponisten&t=1251"
  },
  "opern": {
    "slug": "opern",
    "title": "Opern",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Carmen, Rigoletto, Don Giovanni, La Traviata und Die Zauberflöte: Handlungen, Arien und Chöre.",
    "longDesc": "Hier lernst du die faszinierende Welt der Oper kennen: Meisterwerke von Mozart, Bizet und Verdi mit ihren dramatischen Handlungen, berühmten Arien und Ensembles.",
    "keyPoints": [
      "Aufbau der Oper: Ouvertüre, Rezitative, Arien, Duette, Chorszenen und Akte",
      "Georges Bizet – Carmen: Spanisches Flair, Habanera und das Torero-Lied",
      "Giuseppe Verdi – Rigoletto & La Traviata: Italienisches Belcanto voller Dramatik ('La donna è mobile')",
      "Wolfgang Amadeus Mozart – Die Zauberflöte: Prinz Tamino, Papageno und die Arie der Königin der Nacht",
      "Wolfgang Amadeus Mozart – Don Giovanni: Das Meisterwerk um den legendären Verführer"
    ],
    "exercises": [
      {
        "id": "517",
        "title": "Die Oper – Entstehung, Aufbau und Formen",
        "folder": "die-oper-517"
      },
      {
        "id": "523",
        "title": "Wozzeck (Alban Berg)",
        "folder": "alban-berg-wozzeck-523"
      },
      {
        "id": "524",
        "title": "Rusalka (Antonín Dvořák)",
        "folder": "antonin-dvorak-rusalka-524"
      },
      {
        "id": "526",
        "title": "Der Freischütz (Carl Maria von Weber)",
        "folder": "carl-maria-von-weber-der-freischutz-526"
      },
      {
        "id": "556",
        "title": "Hänsel und Gretel (Engelbert Humperdinck)",
        "folder": "engelbert-humperdinck-hansel-und-gretel-556"
      },
      {
        "id": "557",
        "title": "Königskinder (Engelbert Humperdinck)",
        "folder": "engelbert-humperdinck-konigskinder-557"
      },
      {
        "id": "558",
        "title": "Don Pasquale (Gaetano Donizetti)",
        "folder": "gaetano-donizetti-don-pasquale-558"
      },
      {
        "id": "559",
        "title": "Lucia di Lammermoor (Gaetano Donizetti)",
        "folder": "gaetano-donizetti-lucia-di-lammermoor-559"
      },
      {
        "id": "560",
        "title": "Carmen (Georges Bizet)",
        "folder": "georges-bizet-carmen-560"
      },
      {
        "id": "561",
        "title": "Les Huguenots (Die Hugenotten) (Giacomo Meyerbeer)",
        "folder": "giacomo-meyerbeer-les-huguenots-561"
      },
      {
        "id": "562",
        "title": "La Bohème (Giacomo Puccini)",
        "folder": "giacomo-puccini-la-boheme-562"
      },
      {
        "id": "563",
        "title": "Madama Butterfly (Giacomo Puccini)",
        "folder": "giacomo-puccini-madama-butterfly-563"
      },
      {
        "id": "564",
        "title": "Tosca (Giacomo Puccini)",
        "folder": "giacomo-puccini-tosca-564"
      },
      {
        "id": "565",
        "title": "Turandot (Giacomo Puccini)",
        "folder": "giacomo-puccini-turandot-565"
      },
      {
        "id": "566",
        "title": "Il barbiere di Siviglia (Der Barbier von Sevilla) (Gioachino Rossini)",
        "folder": "gioachino-rossini-il-barbiere-di-siviglia-566"
      },
      {
        "id": "567",
        "title": "La Cenerentola (Aschenputtel) (Gioachino Rossini)",
        "folder": "gioachino-rossini-la-cenerentola-567"
      },
      {
        "id": "568",
        "title": "Aida (Oper) (Giuseppe Verdi)",
        "folder": "giuseppe-verdi-aida-568"
      },
      {
        "id": "569",
        "title": "Falstaff (Giuseppe Verdi)",
        "folder": "giuseppe-verdi-falstaff-569"
      },
      {
        "id": "570",
        "title": "La Traviata (Giuseppe Verdi)",
        "folder": "giuseppe-verdi-la-traviata-570"
      },
      {
        "id": "571",
        "title": "Nabucco (Giuseppe Verdi)",
        "folder": "giuseppe-verdi-nabucco-571"
      },
      {
        "id": "572",
        "title": "Otello (Giuseppe Verdi)",
        "folder": "giuseppe-verdi-otello-572"
      },
      {
        "id": "573",
        "title": "Rigoletto (Giuseppe Verdi)",
        "folder": "giuseppe-verdi-rigoletto-573"
      },
      {
        "id": "574",
        "title": "The Rake's Progress (Igor Strawinsky)",
        "folder": "igor-stravinsky-the-rake-039-s-progress-574"
      },
      {
        "id": "575",
        "title": "Manon (Jules Massenet)",
        "folder": "jules-massenet-manon-575"
      },
      {
        "id": "576",
        "title": "Thaïs (Jules Massenet)",
        "folder": "jules-massenet-thais-576"
      },
      {
        "id": "577",
        "title": "Werther (Jules Massenet)",
        "folder": "jules-massenet-werther-577"
      },
      {
        "id": "578",
        "title": "Fidelio (Ludwig van Beethoven)",
        "folder": "ludwig-van-beethoven-fidelio-578"
      },
      {
        "id": "579",
        "title": "Boris Godunow (Modest Mussorgski)",
        "folder": "modest-mussorgsky-boris-godunov-579"
      },
      {
        "id": "580",
        "title": "Cavalleria rusticana (Pietro Mascagni)",
        "folder": "pietro-mascagni-cavalleria-rusticana-580"
      },
      {
        "id": "581",
        "title": "Der Rosenkavalier (Richard Strauss)",
        "folder": "richard-strauss-der-rosenkavalier-581"
      },
      {
        "id": "582",
        "title": "Salome (Richard Strauss)",
        "folder": "richard-strauss-salome-582"
      },
      {
        "id": "583",
        "title": "Der fliegende Holländer (Richard Wagner)",
        "folder": "richard-wagner-der-fliegende-hollander-583"
      },
      {
        "id": "584",
        "title": "Die Meistersinger von Nürnberg (Richard Wagner)",
        "folder": "richard-wagner-die-meistersinger-von-nurnberg-584"
      },
      {
        "id": "585",
        "title": "Lohengrin (Richard Wagner)",
        "folder": "richard-wagner-lohengrin-585"
      },
      {
        "id": "586",
        "title": "Parsifal (Richard Wagner)",
        "folder": "richard-wagner-parsifal-586"
      },
      {
        "id": "587",
        "title": "Tristan und Isolde (Richard Wagner)",
        "folder": "richard-wagner-tristan-und-isolde-587"
      },
      {
        "id": "588",
        "title": "Pagliacci (Der Bajazzo) (Ruggero Leoncavallo)",
        "folder": "ruggero-leoncavallo-pagliacci-588"
      },
      {
        "id": "589",
        "title": "Andrea Chénier (Umberto Giordano)",
        "folder": "umberto-giordano-andrea-chenier-589"
      },
      {
        "id": "590",
        "title": "Norma (Vincenzo Bellini)",
        "folder": "vincenzo-bellini-norma-590"
      },
      {
        "id": "591",
        "title": "Così fan tutte (Wolfgang Amadeus Mozart)",
        "folder": "wolfgang-amadeus-mozart-cosi-fan-tutte-591"
      },
      {
        "id": "592",
        "title": "Die Zauberflöte (Wolfgang Amadeus Mozart)",
        "folder": "wolfgang-amadeus-mozart-die-zauberflote-592"
      },
      {
        "id": "593",
        "title": "Don Giovanni (Wolfgang Amadeus Mozart)",
        "folder": "wolfgang-amadeus-mozart-don-giovanni-593"
      },
      {
        "id": "594",
        "title": "Le nozze di Figaro (Die Hochzeit des Figaro) (Wolfgang Amadeus Mozart)",
        "folder": "wolfgang-amadeus-mozart-le-nozze-di-figaro-594"
      },
      {
        "id": "525",
        "title": "Peter Grimes (Benjamin Britten)",
        "folder": "benjamin-britten-peter-grimes-525"
      },
      {
        "id": "527",
        "title": "Faust (Charles Gounod)",
        "folder": "charles-gounod-faust-527"
      },
      {
        "id": "528",
        "title": "Orfeo ed Euridice (Christoph Willibald Gluck)",
        "folder": "christoph-willibald-gluck-orfeo-ed-euridice-528"
      },
      {
        id: "3258",
        title: "Die Zauberflöte",
        folder: "die-zauberflote-3258"
      },
      {
        id: "5701",
        title: "Die Wiener Staatsoper",
        folder: "die-wiener-staatsoper-5701"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Oper+Opernunterricht&t=1251"
  },
  "musicals": {
    "slug": "musicals",
    "title": "Musicals",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Grease, Aida, Wicked, Das Phantom der Oper und Der König der Löwen.",
    "longDesc": "Vom New Yorker Broadway und Londoner West End auf die Bühnen der ganzen Welt: Entdecke die mitreißende Kombination aus Gesang, Tanz, Schauspiel und mitreißenden Melodien.",
    "keyPoints": [
      "Entstehung des Musicals am Broadway in New York aus Operette, Vaudeville und Jazz",
      "Andrew Lloyd Webber: 'Das Phantom der Oper' und 'Cats'",
      "Elton John & Tim Rice: 'Der König der Löwen' und 'Aida'",
      "Stephen Schwartz: 'Wicked – Die Hexen von Oz'",
      "Jim Jacobs & Warren Casey: 'Grease' – das Rock 'n' Roll Kultmusical"
    ],
    "exercises": [
      {
        "id": "519",
        "title": "Das Musical – Entstehung, Broadway und Welterfolge",
        "folder": "das-musical-519"
      },
      {
        "id": "529",
        "title": "Das Musical: Aida (Elton John & Tim Rice)",
        "folder": "das-musical-aida-529"
      },
      {
        "id": "530",
        "title": "Das Musical: Aladdin (Alan Menken)",
        "folder": "das-musical-aladdin-530"
      },
      {
        "id": "531",
        "title": "Das Musical: Cabaret (John Kander)",
        "folder": "das-musical-cabaret-531"
      },
      {
        "id": "532",
        "title": "Das Musical: Chess (Benny Andersson & Björn Ulvaeus)",
        "folder": "das-musical-chess-532"
      },
      {
        "id": "533",
        "title": "Das Musical: Chicago (John Kander)",
        "folder": "das-musical-chicago-533"
      },
      {
        "id": "534",
        "title": "Das Musical: Das Phantom der Oper (Andrew Lloyd Webber)",
        "folder": "das-musical-das-phantom-der-oper-534"
      },
      {
        "id": "535",
        "title": "Das Musical: Der König der Löwen (Elton John)",
        "folder": "das-musical-der-konig-der-lowen-535"
      },
      {
        "id": "536",
        "title": "Das Musical: Die Schöne und das Biest (Alan Menken)",
        "folder": "das-musical-die-schone-und-das-biest-536"
      },
      {
        "id": "537",
        "title": "Das Musical: Elisabeth (Sylvester Levay & Michael Kunze)",
        "folder": "das-musical-elisabeth-537"
      },
      {
        "id": "538",
        "title": "Das Musical: Grease (Jim Jacobs & Warren Casey)",
        "folder": "das-musical-grease-538"
      },
      {
        "id": "539",
        "title": "Das Musical: Hair (Galt MacDermot)",
        "folder": "das-musical-hair-539"
      },
      {
        "id": "540",
        "title": "Das Musical: Hairspray (Marc Shaiman)",
        "folder": "das-musical-hairspray-540"
      },
      {
        "id": "541",
        "title": "Das Musical: Jesus Christ Superstar (Andrew Lloyd Webber)",
        "folder": "das-musical-jesus-christ-superstar-541"
      },
      {
        "id": "542",
        "title": "Das Musical: Les Misérables (Claude-Michel Schönberg)",
        "folder": "das-musical-les-miserables-542"
      },
      {
        "id": "543",
        "title": "Das Musical: Mamma Mia! (ABBA)",
        "folder": "das-musical-mamma-mia-543"
      },
      {
        "id": "544",
        "title": "Das Musical: Maria Theresia",
        "folder": "das-musical-maria-theresia-544"
      },
      {
        "id": "545",
        "title": "Das Musical: Miss Saigon (Claude-Michel Schönberg)",
        "folder": "das-musical-miss-saigon-545"
      },
      {
        "id": "546",
        "title": "Das Musical: My Fair Lady (Frederick Loewe)",
        "folder": "das-musical-my-fair-lady-546"
      },
      {
        "id": "547",
        "title": "Das Musical: Rebecca (Sylvester Levay & Michael Kunze)",
        "folder": "das-musical-rebecca-547"
      },
      {
        "id": "548",
        "title": "Das Musical: Rent (Jonathan Larson)",
        "folder": "das-musical-rent-548"
      },
      {
        "id": "549",
        "title": "Das Musical: Rock Me Amadeus (Falco)",
        "folder": "das-musical-rock-me-amadeus-549"
      },
      {
        "id": "550",
        "title": "Das Musical: Starlight Express (Andrew Lloyd Webber)",
        "folder": "das-musical-starlight-express-550"
      },
      {
        "id": "551",
        "title": "Das Musical: Tanz der Vampire (Jim Steinman)",
        "folder": "das-musical-tanz-der-vampire-551"
      },
      {
        "id": "552",
        "title": "Das Musical: The Sound of Music (Richard Rodgers)",
        "folder": "das-musical-the-sound-of-music-552"
      },
      {
        "id": "553",
        "title": "Das Musical: We Will Rock You (Queen & Ben Elton)",
        "folder": "das-musical-we-will-rock-you-553"
      },
      {
        "id": "554",
        "title": "Das Musical: West Side Story (Leonard Bernstein)",
        "folder": "das-musical-west-side-story-554"
      },
      {
        "id": "555",
        "title": "Das Musical: Wicked – Die Hexen von Oz (Stephen Schwartz)",
        "folder": "das-musical-wicked-555"
      },
      {
        id: "518",
        title: "Die Operette",
        folder: "die-operette-518"
      },
      {
        id: "3255",
        title: "Das Phantom der Oper",
        folder: "das-phantom-der-oper-3255"
      },
      {
        id: "3256",
        title: "Das Phantom der Oper",
        folder: "das-phantom-der-oper-2-3256"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Musicals+Musikunterricht&t=1251"
  },
  "jazzstile": {
    "slug": "jazzstile",
    "title": "Jazz & Jazzstile",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Geschichte des Jazz, New Orleans, Chicago, Swing, Bebop, Cool Jazz, Hard Bop, Funk und Fusion.",
    "longDesc": "Hier erfährst du alles über die Geschichte des Jazz und seine vielen verschiedenen Stile: Vom frühen New-Orleans-Jazz über die goldene Swing-Ära bis zu modernen Fusion- und Funk-Grooves.",
    "keyPoints": [
      "Wurzeln: Work Songs, Spirituals und 12-taktiges Blues-Schema",
      "New Orleans & Dixieland: Kollektivimprovisation und Marching Bands",
      "Swing & Big Bands: Tanzbare Rhythmen, Bläsersätze und ternäres Microtiming",
      "Bebop & Modern Jazz: Virtuose Jam-Sessions, chromatische Akkorde und rasante Tempi",
      "Cool Jazz & Modal Jazz: Entspannte Melodieführung und lyrischer Klang",
      "Fusion & Funk: Elektrische Instrumente, Synthesizer und Rock-Grooves"
    ],
    "exercises": [
      {
        "id": "507",
        "title": "Geschichte des Jazz",
        "folder": "geschichte-des-jazz-507"
      },
      {
        "id": "435",
        "title": "Geschichte das Jazz - Teil 1",
        "folder": "geschichte-das-jazz-teil-1-435"
      },
      {
        "id": "437",
        "title": "Geschichte das Jazz - Teil 2",
        "folder": "geschichte-das-jazz-teil-3-437"
      },
      {
        "id": "438",
        "title": "Geschichte das Jazz - Teil 3",
        "folder": "geschichte-das-jazz-teil-4-438"
      },
      {
        "id": "1293",
        "title": "New Orleans Jazz",
        "folder": "new-orleans-jazz-1293"
      },
      {
        "id": "1224",
        "title": "Chicago Jazz",
        "folder": "chicago-jazz-1224"
      },
      {
        "id": "1318",
        "title": "Swing",
        "folder": "swing-1318"
      },
      {
        "id": "1214",
        "title": "Bebop",
        "folder": "bebop-1214"
      },
      {
        "id": "1231",
        "title": "Cool Jazz",
        "folder": "cool-jazz-1231"
      },
      {
        "id": "1268",
        "title": "Hard Bop",
        "folder": "hard-bop-1268"
      },
      {
        "id": "1257",
        "title": "Free Jazz",
        "folder": "free-jazz-1257"
      },
      {
        "id": "1265",
        "title": "Gypsy Jazz",
        "folder": "gypsy-jazz-1265"
      },
      {
        "id": "1284",
        "title": "Latin Jazz",
        "folder": "latin-jazz-1284"
      },
      {
        "id": "1282",
        "title": "Jazz Funk",
        "folder": "jazz-funk-1282"
      },
      {
        "id": "1260",
        "title": "Fusion Jazz",
        "folder": "fusion-jazz-1260"
      },
      {
        "id": "1230",
        "title": "Contemporary Jazz",
        "folder": "contemporary-jazz-1230"
      },
      {
        "id": "1313",
        "title": "Smooth Jazz",
        "folder": "smooth-jazz-1313"
      },
      {
        id: "436",
        title: "Geschichte das Jazz - Teil 2",
        folder: "geschichte-das-jazz-teil-2-436"
      },
      {
        id: "910",
        title: "Blues",
        folder: "blues-910"
      },
      {
        id: "1200",
        title: "Acid Jazz",
        folder: "acid-jazz-1200"
      },
      {
        id: "3205",
        title: "Escape Room &quot;Rock, Pop und Jazz&quot;",
        folder: "escape-room-quot-rock-pop-und-jazz-quot-3205"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Jazz+Jazzgeschichte&t=1251"
  },
  "jazzmusiker": {
    "slug": "jazzmusiker",
    "title": "Jazzmusiker",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Louis Armstrong, Miles Davis, Billie Holiday, Ella Fitzgerald, Duke Ellington und Charlie Parker.",
    "longDesc": "Große Jazzlegenden: Entdecke die bedeutendsten Trompeter, Saxophonisten, Sängerinnen und Bandleader, die den Jazz über Jahrzehnte hinweg geprägt haben.",
    "keyPoints": [
      "Louis Armstrong: Trompeter und Scat-Gesang, 'What a Wonderful World'",
      "Miles Davis: Trompeter des Wandels – von Bebop über Cool Jazz bis Fusion ('Kind of Blue')",
      "Billie Holiday & Ella Fitzgerald: Die unvergessenen 'First Ladies' des Jazzgesangs",
      "Duke Ellington: Meisterhafter Bandleader und Komponist von über 1000 Jazzstandards",
      "Charlie Parker: 'Bird' – legendärer Altsaxophonist und Vater des Bebop"
    ],
    "exercises": [
      {
        "id": "1287",
        "title": "Louis Armstrong",
        "folder": "louis-armstrong-1287"
      },
      {
        "id": "1291",
        "title": "Miles Davis",
        "folder": "miles-davis-1291"
      },
      {
        "id": "1243",
        "title": "Duke Ellington",
        "folder": "duke-ellington-1243"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Jazzmusiker+Biografien&t=1251"
  },
  "rock-und-pop": {
    "slug": "rock-und-pop",
    "title": "Rock und Pop",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Geschichte von Rock und Pop, Stilrichtungen, Rock 'n' Roll, Beat, Punk und moderner Pop.",
    "longDesc": "Rock- und Popmusik gehören zu den einflussreichsten Musikrichtungen weltweit. Erfahre mehr über die Geschichte, die wichtigsten Künstler und die verschiedenen Stile von Rock und Pop.",
    "keyPoints": [
      "1950er: Entstehung des Rock 'n' Roll aus Rhythm & Blues und Country",
      "1960er: Beatmusik, British Invasion und Protestsongs",
      "1970er: Hard Rock, Progressive Rock, Punk und Disco",
      "1980er: New Wave, Synthie-Pop, MTV-Zeitalter und Stadion-Rock",
      "1990er bis heute: Grunge, Britpop, Hip-Hop, Pop-Superstars und digitale Produktion"
    ],
    "exercises": [
      {
        "id": "430",
        "title": "Geschichte der Rockmusik Teil 1 (1950–1966)",
        "folder": "geschichte-der-rockmusik-teil-1-1950-bis-1966-430"
      },
      {
        "id": "431",
        "title": "Geschichte der Rockmusik Teil 2 (1966–1976)",
        "folder": "geschichte-der-rockmusik-teil-2-1966-bis-1976-431"
      },
      {
        "id": "432",
        "title": "Geschichte der Rockmusik Teil 3 (1976–1990)",
        "folder": "geschichte-der-rockmusik-teil-3-1976-bis-1990-432"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rock+und+Pop+Musikunterricht&t=1251"
  },
  "bekannte-bands": {
    "slug": "bekannte-bands",
    "title": "Bekannte Bands",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "The Beatles, Queen, ABBA, The Rolling Stones, Pink Floyd, AC/DC, Nirvana, Metallica, Led Zeppelin, Coldplay und U2.",
    "longDesc": "Hier findest du Erklärvideos und interaktive Übungen zu den berühmtesten Rock- und Popbands der Musikgeschichte, ihren Welthits und ihrer musikalischen Entwicklung.",
    "keyPoints": [
      "The Beatles: John Lennon, Paul McCartney, George Harrison, Ringo Starr – die erfolgreichste Band aller Zeiten",
      "Queen: Hymnischer Rock, Opernelemente und Freddie Mercurys Jahrhundertstimme ('Bohemian Rhapsody')",
      "ABBA: Schwedischer Pop-Perfektionismus, Welthits ('Dancing Queen', 'Waterloo') und zeitlose Arrangements",
      "The Rolling Stones: Langlebigste Rockband der Welt um Mick Jagger und Keith Richards ('Satisfaction', 'Paint It Black')",
      "Pink Floyd & Led Zeppelin: Progressive Rock, psychedelische Klangwelten und monumentale Hard-Rock-Riffs",
      "Nirvana & Metallica: Grunge-Revolution der 90er und richtungsweisender Metal der Musikgeschichte"
    ],
    "exercises": [
      {
        "id": "832",
        "title": "The Beatles – Die Fab Four aus Liverpool",
        "folder": "the-beatles-832"
      },
      {
        "id": "183",
        "title": "The Beatles (Bandporträt)",
        "folder": "the-beatles-183"
      },
      {
        "id": "618",
        "title": "The Beatles: Hey Jude",
        "folder": "hey-jude-the-beatles-618"
      },
      {
        "id": "488",
        "title": "The Beatles: Let It Be",
        "folder": "let-it-be-the-beatles-488"
      },
      {
        "id": "653",
        "title": "The Beatles: Yesterday",
        "folder": "yesterday-the-beatles-653"
      },
      {
        "id": "479",
        "title": "The Beatles: Help!",
        "folder": "help-the-beatles-479"
      },
      {
        "id": "606",
        "title": "The Beatles: A Day in the Life",
        "folder": "a-day-in-the-life-the-beatles-606"
      },
      {
        "id": "491",
        "title": "The Beatles: Lucy in the Sky with Diamonds",
        "folder": "lucy-in-the-sky-with-diamonds-the-beatles-491"
      },
      {
        "id": "171",
        "title": "Queen (Bandporträt)",
        "folder": "queen-171"
      },
      {
        "id": "465",
        "title": "Queen: Bohemian Rhapsody",
        "folder": "bohemian-rhapsody-queen-465"
      },
      {
        "id": "517",
        "title": "Queen: We Are The Champions",
        "folder": "we-are-the-champions-queen-517"
      },
      {
        "id": "519",
        "title": "Queen: We Will Rock You",
        "folder": "we-well-rock-you-queen-519"
      },
      {
        "id": "469",
        "title": "Queen: Don't Stop Me Now",
        "folder": "don-039-t-stop-me-now-queen-469"
      },
      {
        "id": "514",
        "title": "Queen & David Bowie: Under Pressure",
        "folder": "under-pressure-queen-514"
      },
      {
        "id": "135",
        "title": "ABBA (Bandporträt)",
        "folder": "abba-135"
      },
      {
        "id": "468",
        "title": "ABBA: Dancing Queen",
        "folder": "dancing-queen-abba-468"
      },
      {
        "id": "492",
        "title": "ABBA: Mamma Mia",
        "folder": "mamma-mia-abba-492"
      },
      {
        "id": "493",
        "title": "ABBA: Money, Money, Money",
        "folder": "money-money-money-abba-493"
      },
      {
        "id": "649",
        "title": "ABBA: Waterloo",
        "folder": "waterloo-abba-649"
      },
      {
        "id": "200",
        "title": "The Rolling Stones (Bandporträt)",
        "folder": "the-rolling-stones-200"
      },
      {
        "id": "458",
        "title": "The Rolling Stones: (I Can't Get No) Satisfaction",
        "folder": "i-can-039-t-get-no-satisfaction-the-rolling-stones-458"
      },
      {
        "id": "494",
        "title": "The Rolling Stones: Paint It, Black",
        "folder": "paint-it-black-rolling-stones-494"
      },
      {
        "id": "642",
        "title": "The Rolling Stones: Sympathy for the Devil",
        "folder": "sympathy-for-the-devil-the-rolling-stones-642"
      },
      {
        "id": "170",
        "title": "Pink Floyd (Bandporträt)",
        "folder": "pink-floyd-170"
      },
      {
        "id": "609",
        "title": "Pink Floyd: Another Brick in the Wall",
        "folder": "another-brick-in-the-wall-pink-floyd-609"
      },
      {
        "id": "522",
        "title": "Pink Floyd: Wish You Were Here",
        "folder": "wish-you-were-here-pink-floyd-522"
      },
      {
        "id": "136",
        "title": "AC/DC (Bandporträt)",
        "folder": "ac-dc-136"
      },
      {
        "id": "164",
        "title": "Nirvana (Bandporträt)",
        "folder": "nirvana-164"
      },
      {
        "id": "505",
        "title": "Nirvana: Smells Like Teen Spirit",
        "folder": "smells-like-teen-spirit-nirvana-505"
      },
      {
        "id": "467",
        "title": "Nirvana: Come As You Are",
        "folder": "come-as-you-are-nirvana-467"
      },
      {
        "id": "155",
        "title": "Led Zeppelin (Bandporträt)",
        "folder": "led-zeppelin-155"
      },
      {
        "id": "640",
        "title": "Led Zeppelin: Stairway to Heaven",
        "folder": "stairway-to-heaven-led-zeppelin-640"
      },
      {
        "id": "159",
        "title": "Metallica (Bandporträt)",
        "folder": "metallica-159"
      },
      {
        "id": "630",
        "title": "Metallica: Nothing Else Matters",
        "folder": "nothing-else-matters-metallica-630"
      },
      {
        "id": "141",
        "title": "Coldplay (Bandporträt)",
        "folder": "coldplay-141"
      },
      {
        "id": "647",
        "title": "Coldplay: Viva la Vida",
        "folder": "viva-la-vida-coldplay-647"
      },
      {
        "id": "209",
        "title": "U2 (Bandporträt)",
        "folder": "u2-209"
      },
      {
        "id": "521",
        "title": "U2: With Or Without You",
        "folder": "with-or-without-you-u2-521"
      },
      {
        "id": "641",
        "title": "U2: Sunday Bloody Sunday",
        "folder": "sunday-bloody-sunday-u2-641"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Bands+Beatles+Musikunterricht&t=1251"
  },
  "bekannte-saenger": {
    "slug": "bekannte-saenger",
    "title": "Bekannte Sängerinnen und Sänger",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Elvis Presley, Michael Jackson, Freddie Mercury, Madonna, David Bowie, Adele, Ed Sheeran, Elton John und Amy Winehouse.",
    "longDesc": "Hier findest du Erklärvideos und passende Übungen zu den berühmtesten Solo-Sängerinnen und -Sängern der Pop- und Rockgeschichte, ihren Stimmen und Meilensteinen.",
    "keyPoints": [
      "Elvis Presley: 'King of Rock 'n' Roll' – Durchbruch in den 1950ern ('Jailhouse Rock', 'Hound Dog')",
      "Michael Jackson: 'King of Pop' – meistverkauftes Album der Weltgeschichte ('Thriller', Moonwalk, 'Billie Jean')",
      "Freddie Mercury: Die Ausnahmestimme der Rockgeschichte mit vier Oktaven Stimmumfang",
      "Madonna: 'Queen of Pop' – Meisterin der musikalischen und visuellen Neuerfindung über vier Dekaden",
      "David Bowie: Chamäleon des Pop – von Ziggy Stardust ('Space Oddity') bis zu innovativen 80er-Grooves",
      "Adele & Amy Winehouse: Zeitgenössische Soul- und Pop-Ikonen mit unverwechselbarem Timbre und emotionaler Wucht"
    ],
    "exercises": [
      {
        "id": "845",
        "title": "Elvis Presley – Der King of Rock 'n' Roll",
        "folder": "elvis-presley-845"
      },
      {
        "id": "71",
        "title": "Elvis Presley (Künstlerporträt)",
        "folder": "elvis-presley-71"
      },
      {
        "id": "487",
        "title": "Elvis Presley: Jailhouse Rock",
        "folder": "jailhouse-rock-elvis-presley-487"
      },
      {
        "id": "482",
        "title": "Elvis Presley: Hound Dog",
        "folder": "hound-dog-elvis-presley-482"
      },
      {
        "id": "466",
        "title": "Elvis Presley: Can't Help Falling in Love",
        "folder": "can-039-t-help-falling-in-love-elvis-presley-466"
      },
      {
        "id": "102",
        "title": "Michael Jackson (King of Pop)",
        "folder": "michael-jackson-102"
      },
      {
        "id": "462",
        "title": "Michael Jackson: Billie Jean",
        "folder": "billie-jean-michael-jackson-462"
      },
      {
        "id": "463",
        "title": "Michael Jackson: Black Or White",
        "folder": "black-or-white-michael-jackson-463"
      },
      {
        "id": "470",
        "title": "Michael Jackson: Earth Song",
        "folder": "earth-song-michael-jackson-470"
      },
      {
        "id": "475",
        "title": "Michael Jackson: Heal The World",
        "folder": "heal-the-world-michael-jackson-475"
      },
      {
        "id": "74",
        "title": "Freddie Mercury (Queen)",
        "folder": "freddie-mercury-74"
      },
      {
        "id": "99",
        "title": "Madonna (Queen of Pop)",
        "folder": "madonna-99"
      },
      {
        "id": "64",
        "title": "David Bowie (Künstlerporträt)",
        "folder": "david-bowie-64"
      },
      {
        "id": "506",
        "title": "David Bowie: Space Oddity",
        "folder": "space-oddity-david-bowie-506"
      },
      {
        "id": "497",
        "title": "David Bowie: Rebel Rebel",
        "folder": "rebel-rebel-david-bowie-497"
      },
      {
        "id": "40",
        "title": "Adele (Künstlerinporträt)",
        "folder": "adele-40"
      },
      {
        "id": "500",
        "title": "Adele: Rolling In The Deep",
        "folder": "rolling-in-the-deep-adele-500"
      },
      {
        "id": "504",
        "title": "Adele: Skyfall",
        "folder": "skyfall-adele-504"
      },
      {
        "id": "478",
        "title": "Adele: Hello",
        "folder": "hello-adele-478"
      },
      {
        "id": "501",
        "title": "Adele: Set Fire To The Rain",
        "folder": "set-fire-to-the-rain-adele-501"
      },
      {
        "id": "69",
        "title": "Ed Sheeran (Künstlerporträt)",
        "folder": "ed-sheeran-69"
      },
      {
        "id": "637",
        "title": "Ed Sheeran: Shape of You",
        "folder": "shape-of-you-ed-sheeran-637"
      },
      {
        "id": "631",
        "title": "Ed Sheeran: Perfect",
        "folder": "perfect-ed-sheeran-631"
      },
      {
        "id": "70",
        "title": "Elton John (Künstlerporträt)",
        "folder": "elton-john-70"
      },
      {
        "id": "42",
        "title": "Amy Winehouse (Künstlerinporträt)",
        "folder": "amy-winehouse-42"
      },
      {
        "id": "610",
        "title": "Amy Winehouse: Back to Black",
        "folder": "back-to-black-amy-winehouse-610"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Saenger+Popstars+Musikunterricht&t=1251"
  },
  "hiphop-rap-und-streaming": {
    "slug": "hiphop-rap-und-streaming",
    "title": "Hip-Hop, Straßenrap & Das Streaming-Zeitalter",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Haftbefehl und deutscher Straßenrap, Social-Media-Kultur und der Einfluss von Spotify auf die Musik.",
    "longDesc": "Hip-Hop und Deutschrap haben sich zum kommerziell erfolgreichsten Musikgenre entwickelt. Gleichzeitig hat das Streaming über Plattformen wie Spotify das Konsumverhalten und die Produktion von Musik grundlegend verändert.",
    "keyPoints": [
      "Deutscher Straßenrap: Authentizität, Milieubeschreibung, Rhythmus und Sprachschöpfungen bei Künstlern wie Haftbefehl",
      "Streaming-Ökonomie: Playlists verdrängen das klassische Album, kürzere Songstrukturen und algorithmische Empfehlungen",
      "Vergütung & Musikwirtschaft: Pay-per-Stream-Modelle, Einnahmeverteilung und die wachsende Bedeutung von Live-Tourneen"
    ],
    "exercises": [
      {
        id: "6410",
        title: "Haftbefehl - Leben, Drogen und Musik im Straßenrap",
        folder: "haftbefehl-leben-drogen-und-musik-im-straesenrap-6410"
      },
      {
        id: "6412",
        title: "Chabos wissen wer der Babo ist (Song von Haftbefehl)",
        folder: "chabos-wissen-wer-der-babo-ist-song-von-haftbefehl-6412"
      },
      {
        id: "6416",
        title: "Wie Spotify die Musik verändert",
        folder: "wie-spotify-die-musik-verandert-6416"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=hiphop+musikwirtschaft&t=3752"
  }
};
