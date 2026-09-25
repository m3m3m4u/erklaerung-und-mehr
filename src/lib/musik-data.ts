export interface MusikExercise {
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
  exercises: MusikExercise[];
  worksheetLink?: string;
}

export const musikCategories: string[] = [
  "Musiktheorie & Instrumente",
  "Epochen & Gattungen",
  "Komponisten nach Epochen",
  "Bühne, Jazz & Popmusik"
];

export const musikTopics: Record<string, MusikTopic> = {
  "noten-lesen": {
    "slug": "noten-lesen",
    "title": "Noten lesen & Notenwerte",
    "category": "Musiktheorie & Instrumente",
    "shortDesc": "Notensystem, Violinschlüssel, Bassschlüssel, Notenwerte und Pausen.",
    "longDesc": "Das Notensystem ist die universelle Schrift der Musik. Auf fünf Linien und vier Zwischenräumen werden Tonhöhen und Notenwerte präzise dargestellt. Lerne Notenschlüssel, Notennamen, Takte und Pausen sicher zu bestimmen.",
    "keyPoints": [
      "Fünf Notenlinien: Zählung von unten nach oben; Töne liegen auf den Linien oder in den Zwischenräumen",
      "Violinschlüssel (G-Schlüssel): Beginnt auf der zweiten Linie von unten und legt das eingestrichene g' fest",
      "Bassschlüssel (F-Schlüssel): Umkreist die vierte Linie und legt das kleine f fest",
      "Notenwerte & Pausen: Ganze, halbe, Viertel-, Achtel- und Sechzehntelnoten mit ihren rhythmischen Gegenstücken",
      "Hilfslinien: Erweitern das Liniensystem nach oben und unten für sehr hohe und tiefe Töne"
    ],
    "exercises": [
      {
        "id": "239",
        "title": "Übungen und Erklärvideo zu Tonhöhe und Notennamen",
        "folder": "bungen-und-erklarvideo-zu-tonhohe-und-notennamen-239"
      },
      {
        "id": "253",
        "title": "Notenwerte und Pausen",
        "folder": "notenwerte-und-pausen-2-253"
      },
      {
        "id": "254",
        "title": "Vorzeichen (Halbtöne) - Erklärung und Übungen",
        "folder": "vorzeichen-halbtone-erklarung-und-bungen-254"
      },
      {
        "id": "343",
        "title": "Der Bassschlüssel",
        "folder": "der-bassschlussel-343"
      },
      {
        "id": "2",
        "title": "Tonhöhe und Notennamen",
        "folder": "biologie-arbeitsblatter-2"
      },
      {
        "id": "9",
        "title": "Notenwerte und Pausen",
        "folder": "notenwerte-und-pausen-9"
      },
      {
        "id": "13",
        "title": "Noten- und Pausenmemory",
        "folder": "noten-und-pausenmemory-13"
      },
      {
        "id": "225",
        "title": "Notennamen - Tonhöhe",
        "folder": "notennamen-tonhohe-225"
      },
      {
        "id": "661",
        "title": "Notenwerte und Pausen im Kurs",
        "folder": "kurs-notenwerte-und-pausen-661"
      },
      {
        "id": "5320",
        "title": "Tonhöhe und Tonstärke",
        "folder": "tonhohe-und-tonstarke-5320"
      },
      {
        "id": "notenot",
        "title": "Die Geschichte der Musiknotation",
        "folder": "die-geschichte-der-musiknotation"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=noten+lesen+musik&t=3752"
  },
  "gehoerbildung-und-tonhoehe": {
    "slug": "gehoerbildung-und-tonhoehe",
    "title": "Gehörbildung & Tonhöhe",
    "category": "Musiktheorie & Instrumente",
    "shortDesc": "Tonhöhen wahrnehmen, Tonstufen unterscheiden, Tonhöhe-Memory und Hörübungen.",
    "longDesc": "Ein geschultes Gehör ist das wichtigste Werkzeug in der Musik. Lerne hohe und tiefe Töne präzise zu differenzieren, Tonhöhengedächtnis aufzubauen und auditive Hörübungen mit Notenbildern zu verknüpfen.",
    "keyPoints": [
      "Frequenz & Tonhöhe: Je schneller eine Schallwelle schwingt, desto höher empfinden wir den Ton (in Hertz)",
      "Differenzierung von Tonhöhen: Erkennen von Tonsprüngen und Tonstufen nach oben und unten",
      "Gehörbildung (Solfège): Systematisches Training des inneren Hörens und der Intonation",
      "Gedächtnistraining: Töne und Melodieläufe im akustischen Gedächtnis abspeichern und wiedererkennen"
    ],
    "exercises": [
      {
        "id": "14",
        "title": "Tonhöhe-Memory - einfache Version",
        "folder": "tonhohe-memory-einfache-version-14"
      },
      {
        "id": "15",
        "title": "Tonhöhe-Memory - Variante 2",
        "folder": "tonhohe-memory-einfache-version-2-15"
      },
      {
        "id": "16",
        "title": "Tonhöhe-Memory - mittelschwere Version",
        "folder": "tonhohe-memory-schwere-version-16"
      },
      {
        "id": "17",
        "title": "Tonhöhe-Memory - schwere Version",
        "folder": "intervalle-in-der-musik-2-17"
      },
      {
        "id": "648",
        "title": "elo Tonhöhe (2)",
        "folder": "elo-tonhohe-2-648"
      },
      {
        "id": "650",
        "title": "Kurs Tonhöhe 2",
        "folder": "kurs-tonhohe-2-650"
      },
      {
        "id": "652",
        "title": "Kurs Tonhöhe 4",
        "folder": "kurs-tonhohe-4-652"
      },
      {
        "id": "654",
        "title": "Kurs Tonhöhe 6",
        "folder": "kurs-tonhohe-6-654"
      },
      {
        "id": "655",
        "title": "Kurs Tonhöhe 7",
        "folder": "kurs-tonhohe-7-655"
      },
      {
        "id": "657",
        "title": "Kurs Tonhöhe 9",
        "folder": "kurs-tonhohe-9-657"
      },
      {
        "id": "658",
        "title": "Kurs Tonhöhe 10",
        "folder": "kurs-tonhohe-10-658"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=gehoerbildung+tonhoehe&t=3752"
  },
  "harmonielehre-akkorde-und-intervalle": {
    "slug": "harmonielehre-akkorde-und-intervalle",
    "title": "Harmonielehre, Akkorde & Intervalle",
    "category": "Musiktheorie & Instrumente",
    "shortDesc": "Intervalle von der Prim bis zur Oktave, Dur- und Moll-Dreiklänge und Akkordumkehrungen.",
    "longDesc": "Die Harmonielehre beschreibt das Zusammenklingen von Tönen. Lerne Intervalle nach Gehör und Notenbild zu bestimmen, Dur- und Moll-Akkorde aufzubauen und Umkehrungen zu analysieren.",
    "keyPoints": [
      "Intervalle: Abstand zwischen zwei Tönen (Prim, Sekund, Terz, Quart, Quint, Sext, Sept, Oktav)",
      "Konsonanz und Dissonanz: Wohlklingende Intervalle (Terz, Sexte) vs. spannungsreiche Reibungen (Sekunde, Tritonus)",
      "Dreiklänge: Grundton, Terz und Quinte bilden das Fundament harmonischer Strukturen",
      "Dur und Moll: Große Terz (Dur = heiter/hell) vs. kleine Terz (Moll = melancholisch/dunkel)",
      "Umkehrungen: Grundstellung, erste Umkehrung (Sextakkord) und zweite Umkehrung (Quartsextakkord)"
    ],
    "exercises": [
      {
        "id": "12",
        "title": "Intervalle in der Musik",
        "folder": "intervalle-in-der-musik-12"
      },
      {
        "id": "18",
        "title": "Akkorde - Dur und Moll",
        "folder": "akkorde-dur-und-moll-18"
      },
      {
        "id": "19",
        "title": "Akkorde - Dur und Moll (Vertiefung)",
        "folder": "lautstarke-und-tempo-in-der-musik-19"
      },
      {
        "id": "60",
        "title": "Intervalle zuordnen",
        "folder": "intervalle-zuordnen-9b-60"
      },
      {
        "id": "61",
        "title": "Intervalle bestimmen",
        "folder": "intervalle-bestimmen-61"
      },
      {
        "id": "62",
        "title": "Ordne die Akkorde richtig zu!",
        "folder": "ordne-die-akkorde-richtig-zu-62"
      },
      {
        "id": "63",
        "title": "Dur-Akkorde zuordnen",
        "folder": "dur-akkorde-zuordnen-63"
      },
      {
        "id": "64",
        "title": "Akkorde zuordnen (Erweitert)",
        "folder": "10c-akkorde-zuordnen-3-64"
      },
      {
        "id": "65",
        "title": "Umkehrung von Akkorden",
        "folder": "10d-umkehrung-von-akkorden-65"
      },
      {
        "id": "211",
        "title": "Intervalle hören und bestimmen - Sekund und Terz",
        "folder": "intervalle-horen-und-bestimmen-sekund-und-terz-211"
      },
      {
        "id": "268",
        "title": "Intervalle im Überblick",
        "folder": "intervalle-268"
      },
      {
        "id": "1181",
        "title": "Intervalle in der Musik (Teil 3)",
        "folder": "intervalle-in-der-musik-3-1181"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=harmonielehre+akkorde+intervalle&t=3752"
  },
  "tonleitern-klaviatur-und-vorzeichen": {
    "slug": "tonleitern-klaviatur-und-vorzeichen",
    "title": "Tonleitern, Klaviatur & Vorzeichen",
    "category": "Musiktheorie & Instrumente",
    "shortDesc": "Klaviatur am Klavier, weiße und schwarze Tasten, Vorzeichen (Kreuz, B) und Tonleitern.",
    "longDesc": "Die Klaviatur des Klaviers ist das anschaulichste Modell der westlichen Tonleiterlehre. Entdecke Ganz- und Halbtonschritte, Vorzeichen (# und b), Stammtöne und die Konstruktion von Dur- und Molltonleitern.",
    "keyPoints": [
      "Klaviatur: 7 weiße Tasten (Stammtöne C-D-E-F-G-A-H) und 5 schwarze Tasten pro Oktave",
      "Halbtonschritte: Natürlich zwischen E-F und H-C sowie zwischen weißen und benachbarten schwarzen Tasten",
      "Kreuz (#): Erhöht einen Ton um einen Halbtonschritt (Endung -is: C -> Cis)",
      "B (b): Erniedrigt einen Ton um einen Halbtonschritt (Endung -es: H -> B, D -> Des)",
      "Dur-Tonleiter: Struktur Ganzton-Ganzton-Halbton-Ganzton-Ganzton-Ganzton-Halbton"
    ],
    "exercises": [
      {
        "id": "10",
        "title": "Vorzeichen - Halbtöne in der Musik",
        "folder": "vorzeichen-halbtone-in-der-musik-10"
      },
      {
        "id": "11",
        "title": "Die Klaviatur - Töne am Klavier",
        "folder": "die-klaviatur-tone-am-klavier-11"
      },
      {
        "id": "20",
        "title": "Zuordnungsübung mit Vorzeichen",
        "folder": "3a-zuordnungsubung-mit-vorzeichen-20"
      },
      {
        "id": "21",
        "title": "Übung zur Klaviatur",
        "folder": "bung-zur-klaviatur-21"
      },
      {
        "id": "22",
        "title": "Schwarze Tasten am Klavier",
        "folder": "schwarze-tasten-am-klavier-22"
      },
      {
        "id": "23",
        "title": "Klaviatur und Noten",
        "folder": "klaviatur-und-noten-23"
      },
      {
        "id": "255",
        "title": "Die Töne am Klavier (Klaviatur)",
        "folder": "die-tone-am-klavier-klaviatur-erklarung-und-bungen-255"
      },
      {
        "id": "345",
        "title": "Dur- und Molltonleitern",
        "folder": "dur-und-molltonleitern-345"
      },
      {
        "id": "659",
        "title": "Kurs Vorzeichen",
        "folder": "kurs-vorzeichen-659"
      },
      {
        "id": "660",
        "title": "Kurs Klaviatur",
        "folder": "kurs-klaviatur-660"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=klaviatur+vorzeichen+tonleiter&t=3752"
  },
  "saiten-und-tasteninstrumente": {
    "slug": "saiten-und-tasteninstrumente",
    "title": "Saiten- & Tasteninstrumente",
    "category": "Musiktheorie & Instrumente",
    "shortDesc": "Klavier, Orgel, Akkordeon, akustische und E-Gitarre, Harfe und Streichinstrumente.",
    "longDesc": "Von den feinsten Schwingungen einer Violinsaite bis zur monumentalen Pfeifenorgel: Saiten- und Tasteninstrumente prägen die klassische wie moderne Musik. Entdecke Klangerzeugung, Bauweisen und Spieltechniken.",
    "keyPoints": [
      "Streichinstrumente: Violine, Viola, Violoncello und Kontrabass – Schwingungserzeugung mit dem Bogen",
      "Klavier (Flügel & Pianino): Tasteninstrument mit Hammer-Mechanik; Saiten werden perkussiv angeschlagen",
      "Gitarre: Akustische Konzert- und Westerngitarre vs. E-Gitarre mit elektromagnetischen Tonabnehmern",
      "Pfeifenorgel: Die 'Königin der Instrumente' mit Manualen, Pedal und Registern für tausende Pfeifen",
      "Akkordeon & Harfe: Durchschlagende Zungen beim Akkordeon und gezupfte Saiten bei der Konzertharfe"
    ],
    "exercises": [
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
        "id": "3199",
        "title": "Escape Room 'Saiteninstrumente'",
        "folder": "escape-room-quot-saiteninstrumente-quot-3199"
      },
      {
        "id": "534",
        "title": "Instrumente-Memory",
        "folder": "instrumente-memory-534"
      },
      {
        "id": "533",
        "title": "Hörübungen zu Instrumenten",
        "folder": "horubungen-533"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=saiteninstrumente+klavier+gitarre&t=3752"
  },
  "blasinstrumente-orchester-und-stimme": {
    "slug": "blasinstrumente-orchester-und-stimme",
    "title": "Blasinstrumente, Orchester & Gesang",
    "category": "Musiktheorie & Instrumente",
    "shortDesc": "Holz- und Blechbläser, die menschliche Stimme, Stimmlagen, Orchesteraufstellung und Band.",
    "longDesc": "Blasinstrumente und die menschliche Stimme erzeugen Klang durch strömende Luft. Erfahre, wie Holz- und Blechblasinstrumente funktionieren, wie Chöre und Orchester klingen und welche Stimmlagen von Sopran bis Bass reichen.",
    "keyPoints": [
      "Holzblasinstrumente: Querflöte, Blockflöte, Klarinette, Oboe und Fagott (auch Saxophon zählt dazu)",
      "Blechblasinstrumente: Trompete, Posaune, Horn und Tuba – Tonerzeugung durch vibrierende Lippen",
      "Sinfonieorchester: Sitzordnung nach Instrumentengruppen unter Leitung des Dirigenten",
      "Menschliche Stimme: Das älteste Instrument; Stimmbänder im Kehlkopf erzeugen Schwingungen",
      "Stimmlagen: Frauenstimmen (Sopran, Mezzosopran, Alt) und Männerstimmen (Tenor, Bariton, Bass)"
    ],
    "exercises": [
      {
        "id": "532",
        "title": "Einteilung der Instrumente",
        "folder": "einteilung-der-instrumente-532"
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
        "id": "535",
        "title": "Das Orchester",
        "folder": "das-orchester-535"
      },
      {
        "id": "531",
        "title": "Die Band",
        "folder": "die-band-531"
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
        "id": "514",
        "title": "Vokalmusik",
        "folder": "vokalmusik-514"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=blasinstrumente+orchester+stimme&t=3752"
  },
  "schlagzeug-und-drums": {
    "slug": "schlagzeug-und-drums",
    "title": "Schlagzeug, Percussion & Rhythmusinstrumente",
    "category": "Musiktheorie & Instrumente",
    "shortDesc": "Drumset, Snare, Bassdrum, Becken, Drumsticks, Idiophone, Membranophone und Schlagzeugnotation.",
    "longDesc": "Das Schlagzeug ist der Herzschlag der Band. Lerne den Aufbau eines modernen Drumsets, die Funktion von Snare, Hi-Hat und Bass Drum, die Besonderheiten der Schlagzeugnotation sowie weltweite Percussioninstrumente kennen.",
    "keyPoints": [
      "Aufbau des Drumsets: Bass Drum (mit Fußmaschine), Snare Drum, Tom-Toms, Hi-Hat, Crash- und Ride-Becken",
      "Membranophone: Instrumente mit gespanntem Fell (Trommeln, Pauken, Bongos, Congas)",
      "Idiophone: Selbstklinger wie Triangel, Xylophon, Glockenspiel, Becken und Maracas",
      "Schlagzeugnotation: Notenlinien stehen für Instrumententeile statt für Tonhöhen (z. B. Kreuznotenkopf für Becken)",
      "Koordination: Unabhängigkeit aller vier Gliedmaßen beim Spielen von Grooves und Fills"
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
        "id": "525",
        "title": "Idiophone (Selbstklinger)",
        "folder": "idiophone-525"
      },
      {
        "id": "526",
        "title": "Membranophone (Fellklinger)",
        "folder": "membranophone-526"
      },
      {
        "id": "3200",
        "title": "Escape Room 'Schlag- und Blasinstrumente'",
        "folder": "escape-room-quot-schlag-und-blasinstrumente-quot-3200"
      },
      {
        "id": "3201",
        "title": "Escape Room: Schlagzeug, Harfe, Orgel und Akkordeon",
        "folder": "escape-room-quot-schlagzeug-harfe-orgel-akkordeon-quot-3201"
      },
      {
        "id": "512",
        "title": "Tanzmusik und Rhythmus",
        "folder": "tanzmusik-512"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=schlagzeug+percussion&t=3752"
  },
  "rhythmusuebungen": {
    "slug": "rhythmusuebungen",
    "title": "Rhythmusübungen & Taktarten",
    "category": "Musiktheorie & Instrumente",
    "shortDesc": "Takte (4/4, 3/4, 6/8), Taktstriche, Zählzeiten, Synkopen, Notenwerte und Rhythmusdiktate.",
    "longDesc": "Rhythmus ordnet Töne in der Zeit. Lerne Taktarten vom Walzer bis zum Marsch kennen, trainiere das Klatschen und Zählen von Rhythmen und meistere Notenwerte und Pausen in der praktischen Anwendung.",
    "keyPoints": [
      "Taktart: Bestimmt die Anzahl der Schläge pro Takt (z. B. 4/4-Takt, 3/4-Walzertakt, 6/8-Takt)",
      "Schwer und Leicht: Betonung auf der 'Eins' (Haupttaktzeit) strukturiert das musikalische Geschehen",
      "Synkope: Akzentverschiebung von einer schweren auf eine unbetonte Zählzeit erzeugt rhythmische Spannung",
      "Punktierte Noten: Ein Punkt hinter einer Note verlängert ihren Wert um die Hälfte ihres ursprünglichen Werts"
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
        "id": "111",
        "title": "Rhythmusmemory ohne Noten schwer",
        "folder": "werke-der-wiener-klassik-erkennen-memory-111"
      },
      {
        "id": "441",
        "title": "Rhythmusübung 4",
        "folder": "die-unvollendete-von-franz-schubert-441"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=rhythmusuebungen+taktarten&t=3752"
  },
  "epochen-der-musikgeschichte": {
    "slug": "epochen-der-musikgeschichte",
    "title": "Epochen der Musikgeschichte",
    "category": "Epochen & Gattungen",
    "shortDesc": "Mittelalter, Renaissance, Barock, Wiener Klassik, Romantik, Moderne und 20. Jahrhundert.",
    "longDesc": "Die Musikgeschichte spiegelt den gesellschaftlichen und geistigen Wandel Europas wider. Begib dich auf eine Reise vom einstimmigen gregorianischen Choral des Mittelalters über Polyphonie, Generalbass und Sinfonie bis zur Neuen Musik.",
    "keyPoints": [
      "Mittelalter & Renaissance: Neumen, gregorianischer Gesang und Entstehung kunstvoller Vokalpolyphonie",
      "Barock (ca. 1600–1750): Generalbasszeitalter, Affektenlehre, Fuge, Concerto Grosso und Entstehung der Oper",
      "Wiener Klassik (ca. 1750–1827): Klarheit, Ausgewogenheit, Sonatenhauptsatzform (Haydn, Mozart, Beethoven)",
      "Romantik (19. Jh.): Ausdruck tiefer Gefühle, Nationalstile, Programmmusik und Vergrößerung des Orchesters",
      "Moderne (ab 1900): Auflösung der Tonalität, Atonalität, Zwölftontechnik und Vielfalt neuer Stile"
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
        "id": "66",
        "title": "Barock",
        "folder": "barock-66"
      },
      {
        "id": "68",
        "title": "Romantik",
        "folder": "romantik-68"
      },
      {
        "id": "297",
        "title": "Renaissance - Barock - Klassik - Romantik",
        "folder": "renaissance-barock-klassik-romantik-297"
      },
      {
        "id": "318",
        "title": "Lautstärke und Tempo in der Musik",
        "folder": "lautstarke-und-tempo-in-der-musik-2-318"
      },
      {
        "id": "513",
        "title": "Orchestermusik",
        "folder": "orchestermusik-513"
      },
      {
        "id": "515",
        "title": "Klaviermusik",
        "folder": "klaviermusik-515"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=epochen+musikgeschichte&t=3752"
  },
  "bekannte-musikstuecke": {
    "slug": "bekannte-musikstuecke",
    "title": "Berühmte Musikstücke & Meisterwerke",
    "category": "Epochen & Gattungen",
    "shortDesc": "Mozart 40. Sinfonie, Die Moldau, Für Elise, Eine kleine Nachtmusik, Mondscheinsonate und Air.",
    "longDesc": "Einige Melodien haben die Jahrhunderte überdauert und sind Teil des Weltkulturerbes geworden. Erkunde die Entstehungsgeschichten und musikalischen Besonderheiten weltberühmter Meisterwerke.",
    "keyPoints": [
      "Beethovens Meisterwerke: 5. Sinfonie ('Schicksalssinfonie'), Für Elise und Mondscheinsonate",
      "Mozart: 40. Sinfonie in g-Moll, Eine kleine Nachtmusik und Rondo alla Turca",
      "Smetanas 'Die Moldau': Sinfonische Dichtung, die den Flusslauf musikalisch nachzeichnet",
      "Barocke Perlen: J. S. Bachs 'Air' aus der 3. Orchestersuite und Händels 'Feuerwerksmusik'",
      "Romantische Klaviermusik: Chopin Trauermarsch und Brahms Ungarische Tänze"
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
        "id": "454",
        "title": "Rondo Alla Turca von Wolfgang Amadeus Mozart",
        "folder": "rondo-alla-turca-von-wolfgang-amadeus-mozart-454"
      },
      {
        "id": "460",
        "title": "Trauermarsch von Frederic Chopin",
        "folder": "trauermarsch-von-frederic-chopin-460"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=bekannte+musikstuecke&t=3752"
  },
  "formen-und-gattungen-der-klassischen-musik": {
    "slug": "formen-und-gattungen-der-klassischen-musik",
    "title": "Formen & Gattungen der klassischen Musik",
    "category": "Epochen & Gattungen",
    "shortDesc": "Sinfonie, Sonate, Solokonzert, Kammermusik, Kunstlied und Programmmusik.",
    "longDesc": "Klassische Musik ist in wohlstrukturierten Gattungen und Formen organisiert. Erfahre, wie eine Sonate aufgebaut ist, was die Sinfonie zur Königsdisziplin des Orchesters macht und wie Programmmusik außermusikalische Geschichten erzählt.",
    "keyPoints": [
      "Sonatenhauptsatzform: Dreiteiliger Satzaufbau aus Exposition (Themenvorstellung), Durchführung (Verarbeitung) und Reprise (Wiederkehr)",
      "Sinfonie: Vierteiliges Großwerk für Orchester (Allegro, Adagio/Andante, Menuett/Scherzo, Finale)",
      "Solokonzert: Dreisätziges Dialogspiel zwischen einem Solo-Instrument (z. B. Violine, Klavier) und dem Orchester",
      "Kammermusik: Musik für kleine Ensembles (z. B. Streichquartett aus zwei Violinen, Viola und Cello)",
      "Programmmusik: Instrumentalmusik, die einer Handlung, Dichtung oder Naturerscheinung folgt"
    ],
    "exercises": [
      {
        "id": "sinfwk",
        "title": "Die Sinfonie in der Wiener Klassik",
        "folder": "die-sinfonie-in-der-wiener-klassik"
      },
      {
        "id": "sonat",
        "title": "Die Sonate",
        "folder": "die-sonate"
      },
      {
        "id": "solok",
        "title": "Das Solokonzert",
        "folder": "das-solokonzert"
      },
      {
        "id": "516",
        "title": "Kammermusik",
        "folder": "kammermusik-516"
      },
      {
        "id": "prog",
        "title": "Programmmusik und die Sinfonische Dichtung",
        "folder": "programmmusik-und-die-sinfonische-dichtung"
      },
      {
        "id": "schubk",
        "title": "Schubert und das Kunstlied",
        "folder": "schubert-und-das-kunstlied"
      },
      {
        "id": "452",
        "title": "Sinfonie aus der neuen Welt von Antonín Dvořák",
        "folder": "sinfonie-aus-der-neuen-welt-von-antonin-dvorak-452"
      },
      {
        "id": "455",
        "title": "Sinfonie mit dem Paukenschlag von Joseph Haydn",
        "folder": "sinfonie-mit-dem-paukenschlag-455"
      },
      {
        "id": "ballet",
        "title": "Die Geschichte des Balletts und seine Musik",
        "folder": "die-geschichte-des-balletts-und-seine-musik"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=sinfonie+sonate+kammermusik&t=3752"
  },
  "kirchenmusik-und-geistliche-vokalmusik": {
    "slug": "kirchenmusik-und-geistliche-vokalmusik",
    "title": "Kirchenmusik & Geistliche Vokalmusik",
    "category": "Epochen & Gattungen",
    "shortDesc": "Gregorianischer Choral, Barockchöre, Messe, Orgelmusik, Requiem und geistliche Musik.",
    "longDesc": "Über viele Jahrhunderte war die Kirche der bedeutendste Auftraggeber für Musik. Entdecke den gregorianischen Choral, die prachtvolle Kirchenmusik des Barock, klassische Messvertonungen und die Königin der Instrumente, die Orgel.",
    "keyPoints": [
      "Gregorianischer Choral: Einstimmiger, unbegleiteter lateinischer Gesang der christlichen Liturgie",
      "Kirchenmusik im Barock: Kantaten, Passionen und Oratorien (J. S. Bach) als theologische Predigt in Tönen",
      "Messordinarium: Vertonung der festen Messtexte Kyrie, Gloria, Credo, Sanctus, Agnus Dei",
      "Requiem: Katholische Totenmesse (berühmte Vertonungen von Mozart, Verdi und Brahms)",
      "Orgelmusik: Klangvielfalt durch Pfeifenreihen und Register in monumentalen Sakralräumen"
    ],
    "exercises": [
      {
        "id": "greg",
        "title": "Der gregorianische Choral",
        "folder": "der-gregorianische-choral"
      },
      {
        "id": "chorb",
        "title": "Chor- und Vokalmusik im Barock",
        "folder": "chor-und-vokalmusik-im-barock"
      },
      {
        "id": "kircb",
        "title": "Kirchenmusik im Barock",
        "folder": "kirchenmusik-im-barock"
      },
      {
        "id": "kirck",
        "title": "Kirchenmusik der Wiener Klassik",
        "folder": "kirchenmusik-der-wiener-klassik"
      },
      {
        "id": "orgrom",
        "title": "Romantische Orgelmusik",
        "folder": "romantische-orgelmusik"
      },
      {
        "id": "modkirc",
        "title": "Moderne Kirchenmusik",
        "folder": "moderne-kirchenmusik"
      },
      {
        "id": "6704",
        "title": "Musik in der Kirche",
        "folder": "musik-in-der-kirche-6704"
      },
      {
        "id": "musauf",
        "title": "Die Rolle von Musik in der Aufklärung",
        "folder": "die-rolle-von-musik-in-der-aufklaerung"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=kirchenmusik+choral+messe&t=3752"
  },
  "komponisten-des-barocks": {
    "slug": "komponisten-des-barocks",
    "title": "Komponisten des Barocks (1600–1750)",
    "category": "Komponisten nach Epochen",
    "shortDesc": "Johann Sebastian Bach, Georg Friedrich Händel, Antonio Vivaldi, Monteverdi und Kontrapunkt.",
    "longDesc": "Das Barockzeitalter brachte Meister der Polyphonie und monumentaler Klangarchitektur hervor. Johann Sebastian Bachs Fugenkunst, Georg Friedrich Händels feierliche Chöre und Antonio Vivaldis virtuose Violinkonzerte begeistern bis heute.",
    "keyPoints": [
      "Johann Sebastian Bach (1685–1750): Vollender des Kontrapunkts; Matthäuspassion, Brandenburgische Konzerte",
      "Georg Friedrich Händel (1685–1759): Kosmopolit in London; Meister der Opern und Oratorien (Messiah)",
      "Antonio Vivaldi (1678–1741): 'Der rote Priester' aus Venedig; revolutionierte das Solokonzert",
      "Claudio Monteverdi (1567–1643): Wegbereiter von der Renaissance zum Barock; Schöpfer der ersten Opern",
      "Generalbass & Fuge: Basso continuo als harmonisches Fundament und Fuge als strengste polyphone Form"
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
        "id": "212",
        "title": "Johann Sebastian Bach (Video mit Fragen)",
        "folder": "johann-sebastian-bach-video-mit-fragen-212"
      },
      {
        "id": "295",
        "title": "Komponisten des Barock",
        "folder": "komponisten-des-barock-295"
      },
      {
        "id": "608",
        "title": "Johann Sebastian Bach (Porträt)",
        "folder": "johann-sebastian-bach-608"
      },
      {
        "id": "bachwtk",
        "title": "Bach und das Wohltemperierte Klavier",
        "folder": "bach-und-das-wohltemperierte-klavier"
      },
      {
        "id": "bachktp",
        "title": "Bach und der Kontrapunkt",
        "folder": "bach-und-der-kontrapunkt"
      },
      {
        "id": "69",
        "title": "Werkformen des Barock",
        "folder": "werkformen-des-barock-69"
      },
      {
        "id": "3221",
        "title": "Escape Room 'Komponisten Barock'",
        "folder": "escape-room-quot-komponisten-barock-quot-3221"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=komponisten+barock&t=3752"
  },
  "komponisten-der-klassik": {
    "slug": "komponisten-der-klassik",
    "title": "Komponisten der Wiener Klassik (1750–1827)",
    "category": "Komponisten nach Epochen",
    "shortDesc": "Wolfgang Amadeus Mozart, Ludwig van Beethoven, Joseph Haydn und Antonio Salieri.",
    "longDesc": "Wien war im späten 18. und frühen 19. Jahrhundert die Welthauptstadt der Musik. Die Wiener Klassik um Haydn, Mozart und Beethoven schuf mit Klarheit, Ausgewogenheit und thematischer Arbeit unvergängliche Werke.",
    "keyPoints": [
      "Joseph Haydn (1732–1809): 'Vater der Sinfonie' und des Streichquartetts; Hofkapellmeister bei Fürst Esterházy",
      "Wolfgang Amadeus Mozart (1756–1791): Wunderkind und musikalisches Universalgenie; Meister aller Gattungen",
      "Ludwig van Beethoven (1770–1827): Brückenbauer zur Romantik; trotz fortschreitender Ertaubung visionäre Meisterwerke",
      "Antonio Salieri (1750–1825): Wiener Hofkapellmeister, gefeierter Opernkomponist und Lehrer von Beethoven, Schubert und Liszt",
      "Ideale der Klassik: Formale Harmonie, thematisch-motivische Arbeit und universelle Verständlichkeit"
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
      {
        "id": "756",
        "title": "Josef Haydn",
        "folder": "josef-haydn-3-756"
      },
      {
        "id": "1111",
        "title": "Antonio Salieri",
        "folder": "antonio-salieri-1111"
      },
      {
        "id": "24",
        "title": "Josef Haydn (Porträt)",
        "folder": "josef-haydn-24"
      },
      {
        "id": "26",
        "title": "Ludwig van Beethoven",
        "folder": "ludwig-van-beethoven-26"
      },
      {
        "id": "27",
        "title": "Wolfgang Amadeus Mozart",
        "folder": "wolfgang-amadeus-mozart-27"
      },
      {
        "id": "112",
        "title": "Werke der Wiener Klassik erkennen (Memory)",
        "folder": "zahlen-runden-112"
      },
      {
        "id": "296",
        "title": "Komponisten der Wiener Klassik",
        "folder": "komponisten-der-wiener-klassik-296"
      },
      {
        "id": "692",
        "title": "studypoint - Fragen zur Musik der Wiener Klassik",
        "folder": "studypoint-single-choice-fragen-zur-musik-der-wiener-klassik-692"
      },
      {
        "id": "755",
        "title": "Ludwig van Beethoven (Biografie)",
        "folder": "ludwig-van-beethoven-3-755"
      },
      {
        "id": "beethrom",
        "title": "Beethoven und der Übergang zur Romantik",
        "folder": "beethoven-und-der-uebergang-zur-romantik"
      },
      {
        "id": "3220",
        "title": "Escape Room 'Komponisten der Wiener Klassik'",
        "folder": "escape-room-quot-komponisten-der-wiener-klassik-quot-3220"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=komponisten+wiener+klassik&t=3752"
  },
  "komponisten-der-frueh-und-hochromantik": {
    "slug": "komponisten-der-frueh-und-hochromantik",
    "title": "Komponisten der Früh- & Hochromantik",
    "category": "Komponisten nach Epochen",
    "shortDesc": "Franz Schubert, Robert & Clara Schumann, Felix Mendelssohn, Frédéric Chopin, Franz Liszt und Paganini.",
    "longDesc": "Im 19. Jahrhundert traten persönliche Gefühle, Naturmystik und virtuoses Instrumentalspiel in den Mittelpunkt. Lerne die Meister des deutschen Kunstlieds, der Klaviermusik und die virtuosen Magier der Romantik kennen.",
    "keyPoints": [
      "Franz Schubert (1797–1828): Schöpfer von über 600 Kunstliedern (Erlkönig, Winterreise) und sinfonischen Meisterwerken",
      "Robert & Clara Schumann: Romantische Künstlerpartnerschaft; Klaviermusik, Lieder und Poesie",
      "Frédéric Chopin (1810–1849): 'Poet des Klaviers'; Nocturnes, Walzer, Polonaisen und Mazurken voller polnischer Melancholie",
      "Franz Liszt (1811–1886): Klaviervirtuose und Erfinder der sinfonischen Dichtung",
      "Niccolò Paganini (1782–1840): Der 'Teufelsgeiger', dessen unvergleichliche Virtuosität ganz Europa in Atem hielt"
    ],
    "exercises": [
      {
        "id": "844",
        "title": "Franz Schubert",
        "folder": "franz-schubert-844"
      },
      {
        "id": "224",
        "title": "Franz Schubert (Video mit Fragen)",
        "folder": "franz-schubert-video-mit-fragen-224"
      },
      {
        "id": "835",
        "title": "Robert Schumann",
        "folder": "robert-schumann-835"
      },
      {
        "id": "213",
        "title": "Robert Schumann (Video mit Fragen)",
        "folder": "robert-schumann-video-mit-fragen-213"
      },
      {
        "id": "933",
        "title": "Clara Schumann",
        "folder": "clara-schumann-933"
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
        "id": "222",
        "title": "Frederic Chopin (Video mit Fragen)",
        "folder": "frederic-chopin-video-mit-fragen-222"
      },
      {
        "id": "1124",
        "title": "Franz Liszt",
        "folder": "franz-liszt-1124"
      },
      {
        "id": "1105",
        "title": "Niccolò Paganini",
        "folder": "niccol-paganini-1105"
      },
      {
        "id": "3217",
        "title": "Escape Room 'Komponisten der Romantik 1'",
        "folder": "escape-room-quot-komponisten-der-romantik-1-quot-3217"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=komponisten+romantik+schubert+schumann&t=3752"
  },
  "komponisten-der-spaetromantik-und-nationalen-schulen": {
    "slug": "komponisten-der-spaetromantik-und-nationalen-schulen",
    "title": "Spätromantik & Nationale Schulen",
    "category": "Komponisten nach Epochen",
    "shortDesc": "Tschaikowski, Brahms, Bruckner, Mahler, Dvořák, Smetana, Grieg, Johann Strauss und Saint-Saëns.",
    "longDesc": "In der Spätromantik wuchsen die Orchester auf monumentale Besetzungen an, während nationale Schulen in Böhmen, Russland und Skandinavien die Folklore ihrer Heimatländer in klassische Formen einflochten.",
    "keyPoints": [
      "Johannes Brahms (1833–1897): Meister der klassischen Form in romantischem Gewand; vier berühmte Sinfonien",
      "Peter Tschaikowski (1840–1893): Russlands gefeierter Melodiker; Ballette (Schwanensee, Nussknacker) und Sinfonik",
      "Böhmische Romantik: Bedřich Smetana (Mein Vaterland) und Antonín Dvořák (Sinfonie 'Aus der Neuen Welt')",
      "Edvard Grieg (1843–1907): Die musikalische Seele Norwegens (Peer Gynt Suite, Klavierkonzert)",
      "Wiener Spätromantik: Anton Bruckner, Gustav Mahler und die Walzerdynastie Johann Strauss"
    ],
    "exercises": [
      {
        "id": "838",
        "title": "Johannes Brahms",
        "folder": "johannes-brahms-838"
      },
      {
        "id": "837",
        "title": "Peter Iljitsch Tschaikowski",
        "folder": "peter-iljitsch-tschaikowski-837"
      },
      {
        "id": "930",
        "title": "Bedrich Smetana",
        "folder": "bedrich-smetana-930"
      },
      {
        "id": "1032",
        "title": "Edvard Grieg",
        "folder": "edvard-grieg-1032"
      },
      {
        "id": "1112",
        "title": "Anton Bruckner",
        "folder": "anton-bruckner-1112"
      },
      {
        "id": "1125",
        "title": "Gustav Mahler",
        "folder": "gustav-mahler-1125"
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
        "id": "1106",
        "title": "Sergej Rachmaninow",
        "folder": "sergej-rachmaninow-1106"
      },
      {
        "id": "1110",
        "title": "Camille Saint-Saëns",
        "folder": "camille-saint-saens-1110"
      },
      {
        "id": "neujahr",
        "title": "Das Neujahrskonzert der Wiener Philharmoniker",
        "folder": "das-neujahrskonzert"
      },
      {
        "id": "3216",
        "title": "Escape Room 'Komponisten der Romantik 2'",
        "folder": "escape-room-quot-komponisten-der-romantik-2-quot-3216"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=komponisten+spaetromantik+brahms+tschaikowski&t=3752"
  },
  "komponisten-der-moderne": {
    "slug": "komponisten-der-moderne",
    "title": "Komponisten der Moderne & Neue Musik",
    "category": "Komponisten nach Epochen",
    "shortDesc": "Igor Strawinsky, Arnold Schönberg, Paul Hindemith, Carl Orff, Claude Debussy und Atonalität.",
    "longDesc": "Das 20. Jahrhundert zertrümmerte überkommene Hörgewohnheiten. Vom Impressionismus Claude Debussys über die rhythmischen Eruptionen Strawinskys bis zur Zwölftontechnik Schönbergs erlebte die Musik eine radikale Neuerfindung.",
    "keyPoints": [
      "Claude Debussy (1862–1918): Impressionistische Klangfarbenmalerei und Ganztonleitern",
      "Igor Strawinsky (1882–1971): Skandalerfolg mit 'Le Sacre du Printemps' durch brachiale Polyrhythmik",
      "Arnold Schönberg (1874–1951): Begründer der Zweiten Wiener Schule und der Zwölftontechnik (Dodekaphonie)",
      "Carl Orff (1895–1982): 'Carmina Burana' mit archaischer Rhythmik und revolutionäres Orff-Schulwerk",
      "Paul Hindemith (1895–1963): Vertreter der Neuen Sachlichkeit und Meister der 'Gebrauchsmusik'"
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
        "id": "1107",
        "title": "Maurice Ravel",
        "folder": "maurice-ravel-1107"
      },
      {
        "id": "atonal",
        "title": "Atonale Musik",
        "folder": "atonale-musik"
      },
      {
        "id": "zwoelf",
        "title": "Zwölftonmusik",
        "folder": "zwoelftonmusik"
      },
      {
        "id": "express",
        "title": "Musik des Expressionismus",
        "folder": "musik-des-expressionismus"
      },
      {
        "id": "3215",
        "title": "Escape Room 'Komponisten der Moderne'",
        "folder": "escape-room-quot-komponisten-der-moderne-quot-3215"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=komponisten+moderne+strawinsky+schoenberg&t=3752"
  },
  "italienische-opern-belcanto-und-verdi": {
    "slug": "italienische-opern-belcanto-und-verdi",
    "title": "Italienische Oper: Belcanto & Giuseppe Verdi",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Rossini, Bellini, Donizetti und die monumentalen Meisterwerke Giuseppe Verdis (Aida, Nabucco, Traviata).",
    "longDesc": "Italien ist das Geburtsland der Oper. Vom feinsinnigen Belcanto ('schöner Gesang') Gioachino Rossinis bis zu den packenden Nationalopern Giuseppe Verdis schlägt hier das Herz des Musiktheaters.",
    "keyPoints": [
      "Entstehung der Oper: Florenz um 1600 (Florentiner Camerata) mit dem Ziel der Wiederbelebung antiker Dramen",
      "Belcanto: Gesangsideal voller Virtuosität, Verzierungen (Koloraturen) und strahlender Kantilenen",
      "Gioachino Rossini & Donizetti: Turbulente Komödien (Der Barbier von Sevilla) und romantische Tragödien (Lucia di Lammermoor)",
      "Giuseppe Verdi (1813–1901): Nationalheld des Risorgimento ('Va, pensiero' aus Nabucco) und Opernmeister (Aida, Rigoletto, La Traviata)"
    ],
    "exercises": [
      {
        "id": "517",
        "title": "Die Oper – Entstehung, Aufbau und Formen",
        "folder": "die-oper-517"
      },
      {
        "id": "566",
        "title": "Il barbiere di Siviglia (Der Barbier von Sevilla)",
        "folder": "gioachino-rossini-il-barbiere-di-siviglia-566"
      },
      {
        "id": "567",
        "title": "La Cenerentola (Aschenputtel)",
        "folder": "gioachino-rossini-la-cenerentola-567"
      },
      {
        "id": "590",
        "title": "Norma (Vincenzo Bellini)",
        "folder": "vincenzo-bellini-norma-590"
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
        "id": "568",
        "title": "Aida (Giuseppe Verdi)",
        "folder": "giuseppe-verdi-aida-568"
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
        "id": "573",
        "title": "Rigoletto (Giuseppe Verdi)",
        "folder": "giuseppe-verdi-rigoletto-573"
      },
      {
        "id": "verdiop",
        "title": "Der Einfluss von Verdi auf die italienische Oper",
        "folder": "der-einfluss-von-verdi-auf-die-italienische-oper"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=italienische+oper+verdi+belcanto&t=3752"
  },
  "verismo-puccini-und-franzoesische-opern": {
    "slug": "verismo-puccini-und-franzoesische-opern",
    "title": "Verismo, Puccini & Französische Oper",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Giacomo Puccini (La Bohème, Tosca, Turandot), Verismo (Cavalleria rusticana, Bajazzo) und Bizets Carmen.",
    "longDesc": "Der Verismo brachte den ungeschminkten Realismus auf die Opernbühne: Leidenschaft, Eifersucht und Verbrechen gewöhnlicher Menschen. Giacomo Puccini verband packenden Realismus mit herzergreifenden Melodien.",
    "keyPoints": [
      "Verismo (ital. vero = wahr): Abkehr von Göttern und Königen; Schicksale einfacher Menschen mit dramatischer Direktheit",
      "Giacomo Puccini (1858–1924): Meister emotionaler Melodienbögen; La Bohème, Tosca, Madama Butterfly und Turandot ('Nessun dorma')",
      "Doppelabend des Verismo: Mascagnis 'Cavalleria rusticana' und Leoncavallos 'Pagliacci'",
      "Französische Oper: Georges Bizets 'Carmen' als Welterfolg und Meisterwerke von Jules Massenet und Charles Gounod"
    ],
    "exercises": [
      {
        "id": "560",
        "title": "Carmen (Georges Bizet)",
        "folder": "georges-bizet-carmen-560"
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
        "id": "580",
        "title": "Cavalleria rusticana (Pietro Mascagni)",
        "folder": "pietro-mascagni-cavalleria-rusticana-580"
      },
      {
        "id": "588",
        "title": "Pagliacci / Der Bajazzo (Ruggero Leoncavallo)",
        "folder": "ruggero-leoncavallo-pagliacci-588"
      },
      {
        "id": "527goun",
        "title": "Faust (Charles Gounod)",
        "folder": "charles-gounod-faust-527"
      },
      {
        "id": "575",
        "title": "Manon (Jules Massenet)",
        "folder": "jules-massenet-manon-575"
      },
      {
        "id": "577",
        "title": "Werther (Jules Massenet)",
        "folder": "jules-massenet-werther-577"
      },
      {
        "id": "589",
        "title": "Andrea Chénier (Umberto Giordano)",
        "folder": "umberto-giordano-andrea-chenier-589"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=puccini+verismo+carmen&t=3752"
  },
  "deutsche-opern-und-richard-wagner": {
    "slug": "deutsche-opern-und-richard-wagner",
    "title": "Deutsche Oper: Mozart, Weber & Richard Wagner",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Die Zauberflöte, Fidelio, Der Freischütz, Richard Wagners Musikdramen, Richard Strauss und die Wiener Staatsoper.",
    "longDesc": "Von Mozarts Singspielen und Webers romantischer Gespensteroper bis zum Gesamtkunstwerk Richard Wagners: Entdecke die Meilensteine des deutschsprachigen Musiktheaters und die Welt des Festspielhauses Bayreuth.",
    "keyPoints": [
      "Wolfgang Amadeus Mozart: Das Singspiel 'Die Zauberflöte' und Da-Ponte-Opern (Figaro, Don Giovanni, Così fan tutte)",
      "Carl Maria von Weber: 'Der Freischütz' als Geburtsstunde der deutschen Nationaloper mit schauriger Wolfsschluchtszene",
      "Ludwig van Beethoven: 'Fidelio' als heroische Freiheits- und Befreiungsoper",
      "Richard Wagner (1813–1883): Das Gesamtkunstwerk, Leitmotivtechnik und der 16-stündige Opernzyklus 'Der Ring des Nibelungen'",
      "Richard Strauss & Engelbert Humperdinck: Spätromantische Märchenoper (Hänsel und Gretel) und kühne Moderne (Salome, Rosenkavalier)"
    ],
    "exercises": [
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
        "title": "Le nozze di Figaro (Wolfgang Amadeus Mozart)",
        "folder": "wolfgang-amadeus-mozart-le-nozze-di-figaro-594"
      },
      {
        "id": "526weber",
        "title": "Der Freischütz (Carl Maria von Weber)",
        "folder": "carl-maria-von-weber-der-freischutz-526"
      },
      {
        "id": "578",
        "title": "Fidelio (Ludwig van Beethoven)",
        "folder": "ludwig-van-beethoven-fidelio-578"
      },
      {
        "id": "556",
        "title": "Hänsel und Gretel (Engelbert Humperdinck)",
        "folder": "engelbert-humperdinck-hansel-und-gretel-556"
      },
      {
        "id": "583",
        "title": "Der fliegende Holländer (Richard Wagner)",
        "folder": "richard-wagner-der-fliegende-hollander-583"
      },
      {
        "id": "587",
        "title": "Tristan und Isolde (Richard Wagner)",
        "folder": "richard-wagner-tristan-und-isolde-587"
      },
      {
        "id": "585",
        "title": "Lohengrin (Richard Wagner)",
        "folder": "richard-wagner-lohengrin-585"
      },
      {
        "id": "581",
        "title": "Der Rosenkavalier (Richard Strauss)",
        "folder": "richard-strauss-der-rosenkavalier-581"
      },
      {
        "id": "wagnring",
        "title": "Der Opernzyklus Der Ring des Nibelungen",
        "folder": "der-opernzyklus-der-ring-des-nibelungen-von-wagner"
      },
      {
        "id": "5701",
        "title": "Die Wiener Staatsoper",
        "folder": "die-wiener-staatsoper-5701"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=deutsche+oper+wagner+mozart&t=3752"
  },
  "opern-der-moderne-und-europaeische-meisterwerke": {
    "slug": "opern-der-moderne-und-europaeische-meisterwerke",
    "title": "Opern der Moderne & Europäische Meisterwerke",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Gluck, Mussorgski, Dvořák, Alban Berg, Benjamin Britten, Strawinsky und Bertolt Brecht.",
    "longDesc": "Das Musiktheater europäischer Nachbarländer und des 20. Jahrhunderts zeichnet sich durch mutige Neuerungen aus. Entdecke Glucks Opernreform, russische Historienepen, slawische Sagenopern und die schonungslose Moderne.",
    "keyPoints": [
      "Christoph Willibald Gluck: Reformoper gegen barocke Sängerwillkür; Drama und Musik im Einklang (Orfeo ed Euridice)",
      "Modest Mussorgski: 'Boris Godunow' als monumentales russisches Volksepos",
      "Antonín Dvořák: 'Rusalka' und das unsterbliche 'Lied an den Mond'",
      "Alban Berg: 'Wozzeck' als expressionistisches Meisterwerk und soziale Anklage",
      "Benjamin Britten & Strawinsky: 'Peter Grimes' und 'The Rake's Progress' als Höhepunkte des 20. Jahrhunderts"
    ],
    "exercises": [
      {
        "id": "528",
        "title": "Orfeo ed Euridice (Christoph Willibald Gluck)",
        "folder": "christoph-willibald-gluck-orfeo-ed-euridice-528"
      },
      {
        "id": "524dvor",
        "title": "Rusalka (Antonín Dvořák)",
        "folder": "antonin-dvorak-rusalka-524"
      },
      {
        "id": "579",
        "title": "Boris Godunow (Modest Mussorgski)",
        "folder": "modest-mussorgsky-boris-godunov-579"
      },
      {
        "id": "523berg",
        "title": "Wozzeck (Alban Berg)",
        "folder": "alban-berg-wozzeck-523"
      },
      {
        "id": "525britt",
        "title": "Peter Grimes (Benjamin Britten)",
        "folder": "benjamin-britten-peter-grimes-525"
      },
      {
        "id": "574straw",
        "title": "The Rake's Progress (Igor Strawinsky)",
        "folder": "igor-stravinsky-the-rake-039-s-progress-574"
      },
      {
        "id": "3408",
        "title": "Bertolt Brecht: Die Dreigroschenoper",
        "folder": "bertolt-brecht-die-dreigroschenoper-3408"
      },
      {
        "id": "opbar",
        "title": "Die Oper im Barock",
        "folder": "die-oper-im-barock"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=moderne+opern+wozzeck+rusalka&t=3752"
  },
  "musicals-broadway-und-klassiker": {
    "slug": "musicals-broadway-und-klassiker",
    "title": "Musicals: Broadway & Große Klassiker",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "My Fair Lady, West Side Story, Cabaret, Chicago, Hair, Grease, Les Misérables, Miss Saigon und The Sound of Music.",
    "longDesc": "Das Musical vereint Gesang, Tanz, Schauspiel und mitreißende Orchesterarrangements. Erlebe die goldenen Klassiker des Broadway und des Londoner West End – von Shakespeares Romeo und Julia in New York bis zur Pariser Barrikade.",
    "keyPoints": [
      "Entstehung des Musicals: Verschmelzung von europäischer Operette, Vaudeville und amerikanischem Jazz",
      "Leonard Bernstein: 'West Side Story' (1957) revolutionierte das Musical mit symphonischem Anspruch und Tanzchoreografien",
      "Broadway & West End: Die weltweiten Theaterzentren in New York und London",
      "Große Literaturvertonungen: Victor Hugos 'Les Misérables' und George Bernard Shaws 'My Fair Lady'",
      "Rock- und Konzeptmusicals: 'Hair' und 'Rent' brachten gesellschaftliche Revolten und Gegenkultur auf die Bühne"
    ],
    "exercises": [
      {
        "id": "519",
        "title": "Das Musical – Entstehung, Broadway und Welterfolge",
        "folder": "das-musical-519"
      },
      {
        "id": "546",
        "title": "My Fair Lady (Frederick Loewe)",
        "folder": "das-musical-my-fair-lady-546"
      },
      {
        "id": "554",
        "title": "West Side Story (Leonard Bernstein)",
        "folder": "das-musical-west-side-story-554"
      },
      {
        "id": "552",
        "title": "The Sound of Music (Richard Rodgers)",
        "folder": "das-musical-the-sound-of-music-552"
      },
      {
        "id": "531cab",
        "title": "Cabaret (John Kander)",
        "folder": "das-musical-cabaret-531"
      },
      {
        "id": "533chic",
        "title": "Chicago (John Kander)",
        "folder": "das-musical-chicago-533"
      },
      {
        "id": "538hair",
        "title": "Grease (Jim Jacobs & Warren Casey)",
        "folder": "das-musical-grease-538"
      },
      {
        "id": "539hair",
        "title": "Hair (Galt MacDermot)",
        "folder": "das-musical-hair-539"
      },
      {
        "id": "542lesm",
        "title": "Les Misérables (Claude-Michel Schönberg)",
        "folder": "das-musical-les-miserables-542"
      },
      {
        "id": "545msaig",
        "title": "Miss Saigon (Claude-Michel Schönberg)",
        "folder": "das-musical-miss-saigon-545"
      },
      {
        "id": "548rent",
        "title": "Rent (Jonathan Larson)",
        "folder": "das-musical-rent-548"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=broadway+musicals+west+side+story&t=3752"
  },
  "moderne-musicals-und-welterfolge": {
    "slug": "moderne-musicals-und-welterfolge",
    "title": "Moderne Musicals & Welterfolge",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Andrew Lloyd Webber, Der König der Löwen, Elisabeth, Tanz der Vampire, Wicked und Pop-Musicals.",
    "longDesc": "Moderne Megamusicals faszinieren durch spektakuläre Bühnentechnik, Pop- und Rock-Partituren und unvergessliche Melodien. Entdecke Andrew Lloyd Webbers Welterfolge, Disney-Klassiker und dramatische europäische Musicals.",
    "keyPoints": [
      "Andrew Lloyd Webber: Komponist der langlebigsten Musicals (Das Phantom der Oper, Starlight Express, Jesus Christ Superstar)",
      "Disney auf der Bühne: Elton Johns 'Der König der Löwen' und Alan Menkens 'Aladdin'",
      "Wiener Musical-Tradition: Sylvester Levay & Michael Kunze mit 'Elisabeth' und 'Rebecca'",
      "Jukebox-Musicals: 'Mamma Mia!' (ABBA) und 'We Will Rock You' (Queen) nutzen bekannte Hits",
      "Kultmusicals: Jim Steinmans 'Tanz der Vampire' und Stephen Schwartz' 'Wicked'"
    ],
    "exercises": [
      {
        "id": "534phanto",
        "title": "Das Phantom der Oper (Andrew Lloyd Webber)",
        "folder": "das-musical-das-phantom-der-oper-534"
      },
      {
        "id": "550starl",
        "title": "Starlight Express (Andrew Lloyd Webber)",
        "folder": "das-musical-starlight-express-550"
      },
      {
        "id": "541jesus",
        "title": "Jesus Christ Superstar (Andrew Lloyd Webber)",
        "folder": "das-musical-jesus-christ-superstar-541"
      },
      {
        "id": "535lionk",
        "title": "Der König der Löwen (Elton John)",
        "folder": "das-musical-der-konig-der-lowen-535"
      },
      {
        "id": "530aladd",
        "title": "Aladdin (Alan Menken)",
        "folder": "das-musical-aladdin-530"
      },
      {
        "id": "536beauty",
        "title": "Die Schöne und das Biest (Alan Menken)",
        "folder": "das-musical-die-schone-und-das-biest-536"
      },
      {
        "id": "555wicked",
        "title": "Wicked – Die Hexen von Oz (Stephen Schwartz)",
        "folder": "das-musical-wicked-555"
      },
      {
        "id": "537elisa",
        "title": "Elisabeth (Sylvester Levay & Michael Kunze)",
        "folder": "das-musical-elisabeth-537"
      },
      {
        "id": "551vamp",
        "title": "Tanz der Vampire (Jim Steinman)",
        "folder": "das-musical-tanz-der-vampire-551"
      },
      {
        "id": "547rebe",
        "title": "Rebecca (Sylvester Levay & Michael Kunze)",
        "folder": "das-musical-rebecca-547"
      },
      {
        "id": "543mamma",
        "title": "Mamma Mia! (ABBA)",
        "folder": "das-musical-mamma-mia-543"
      },
      {
        "id": "553wewill",
        "title": "We Will Rock You (Queen & Ben Elton)",
        "folder": "das-musical-we-will-rock-you-553"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=moderne+musicals+phantom+der+oper&t=3752"
  },
  "jazzgeschichte-und-traditioneller-jazz": {
    "slug": "jazzgeschichte-und-traditioneller-jazz",
    "title": "Jazzgeschichte & Traditioneller Jazz",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Wurzeln im Blues, Work Songs, Spirituals, New Orleans, Chicago Jazz, Swing und Gypsy Jazz.",
    "longDesc": "Der Jazz ist Amerikas bedeutendster Beitrag zur Weltmusik. Entstanden aus der afrikanischen Rhythmustradition, Blues und Spirituals, entwickelte er sich in New Orleans und Chicago über die Swing-Ära zum weltweiten Phänomen.",
    "keyPoints": [
      "Wurzeln: Work Songs, Spirituals, Blues und Ragtime im Süden der USA (Ende des 19. Jahrhunderts)",
      "New Orleans Jazz (ab ca. 1900): Kollektivimprovisation und Marching Bands im Viertel Storyville",
      "Chicago Jazz (1920er): Soloimprovisation tritt in den Vordergrund; Saxophon wird Leitinstrument",
      "Swing-Ära (1930er/40er): Big Bands (Glenn Miller, Benny Goodman) füllen Tanzsäle weltweit",
      "Gypsy Jazz: Django Reinhardt und Stéphane Grappelli begründen den europäischen Jazz Manouche"
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
        "id": "910",
        "title": "Blues",
        "folder": "blues-910"
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
        "id": "1265",
        "title": "Gypsy Jazz",
        "folder": "gypsy-jazz-1265"
      },
      {
        "id": "afrojazz",
        "title": "Der Einfluss der afroamerikanischen Musiktradition auf die westliche Musik",
        "folder": "der-einfluss-der-afroamerikanischen-musiktradition-auf-die-westliche-musik"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=jazzgeschichte+swing+blues&t=3752"
  },
  "moderner-jazz-bebop-bis-fusion": {
    "slug": "moderner-jazz-bebop-bis-fusion",
    "title": "Moderner Jazz: Bebop bis Fusion",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Bebop, Cool Jazz, Hard Bop, Free Jazz, Latin Jazz, Jazz-Rock Fusion und Smooth Jazz.",
    "longDesc": "Ab den 1940er Jahren wandelte sich der Jazz von Tanzmusik zur anspruchsvollen Kunstmusik. Von den rasenden Harmonien des Bebop über die kühle Eleganz des Cool Jazz bis zur Fusion mit Rock und Funk.",
    "keyPoints": [
      "Bebop (1940er): Rasantes Tempo, komplexe Akkorderweiterungen und virtuose Soli abseits der Tanzsäle",
      "Cool Jazz (1950er): Zurückhaltende Dynamik, zarter Ton und kammermusikalische Eleganz",
      "Hard Bop: Rückbesinnung auf Blues- und Gospel-Wurzeln mit treibendem Rhythmus",
      "Free Jazz (1960er): Aufhebung fester Tonalität, Metren und Formstrukturen",
      "Fusion & Jazz-Rock (1970er): Elektrische Instrumente, Synthesizer und Rockrhythmen bereichern den Jazz"
    ],
    "exercises": [
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
        "id": "1200",
        "title": "Acid Jazz",
        "folder": "acid-jazz-1200"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=moderner+jazz+bebop+fusion&t=3752"
  },
  "jazzmusiker": {
    "slug": "jazzmusiker",
    "title": "Große Jazzmusiker & Legenden",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Louis Armstrong, Miles Davis, Duke Ellington, Charlie Parker, John Coltrane, Ella Fitzgerald und Billie Holiday.",
    "longDesc": "Herausragende Solisten und Bandleader prägten die Geschichte des Jazz durch unverwechselbaren Ton und visionäre Experimentierfreude. Entdecke Porträts der einflussreichsten Jazz-Ikonen aller Zeiten.",
    "keyPoints": [
      "Louis Armstrong (1901–1971): 'Satchmo'; Trompetenvirtuose, Begründer des Scat-Gesangs und erster Weltstar des Jazz",
      "Duke Ellington (1899–1974): Genialer Big-Band-Komponist und Arrangeur im New Yorker Cotton Club",
      "Miles Davis (1926–1991): Trompetenlegende; prägte fast jede Stilrevolution von Cool Jazz bis Fusion ('Kind of Blue')",
      "Charlie Parker & Dizzy Gillespie: Pioniere des Bebop mit atemberaubender Improvisationskunst",
      "Große Stimmen des Jazz: Ella Fitzgerald ('First Lady of Song') und Billie Holiday mit ihrer berührenden Ausdruckskraft"
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
      },
      {
        "id": "1221",
        "title": "Charlie Parker",
        "folder": "charlie-parker-1221"
      },
      {
        "id": "1283",
        "title": "John Coltrane",
        "folder": "john-coltrane-1283"
      },
      {
        "id": "1321",
        "title": "Thelonious Monk",
        "folder": "thelonious-monk-1321"
      },
      {
        "id": "1241",
        "title": "Dizzy Gillespie",
        "folder": "dizzy-gillespie-1241"
      },
      {
        "id": "1217",
        "title": "Billie Holiday",
        "folder": "billie-holiday-1217"
      },
      {
        "id": "1246",
        "title": "Ella Fitzgerald",
        "folder": "ella-fitzgerald-1246"
      },
      {
        "id": "1237",
        "title": "Dave Brubeck",
        "folder": "dave-brubeck-1237"
      },
      {
        "id": "1232",
        "title": "Count Basie",
        "folder": "count-basie-1232"
      },
      {
        "id": "1274",
        "title": "Herbie Hancock",
        "folder": "herbie-hancock-1274"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=jazzmusiker+armstrong+miles+davis&t=3752"
  },
  "rock-und-pop": {
    "slug": "rock-und-pop",
    "title": "Rock & Pop: Geschichte & Entwicklung",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Geschichte der Rockmusik (1950–1990), Rock 'n' Roll, Popmusik, Country und globale Musikstile.",
    "longDesc": "Von den Anfängen des Rock 'n' Roll in den 1950ern bis zur globalen Popkultur der Gegenwart: Rock und Pop haben Lebensgefühl, Mode und Gesellschaft revolutioniert. Erkunde Jahrzehnte voller musikalischer Umbrüche.",
    "keyPoints": [
      "1950er: Entstehung des Rock 'n' Roll als Verschmelzung von Rhythm & Blues und Country",
      "1960er: British Invasion, Beat-Musik, psychedelischer Rock und Songwriter-Bewegung",
      "1970er: Glam Rock, Punk, Disco, Funk und Stadion-Rock",
      "1980er: New Wave, Synthie-Pop, Musikvideos auf MTV und weltweite Megastars",
      "Stilvielfalt: Popmusik als Massenmedium, Country-Musik und globale Crossover-Formate"
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
      },
      {
        "id": "508",
        "title": "Rock und Pop - Teil 1",
        "folder": "rock-und-pop-teil-1-508"
      },
      {
        "id": "509",
        "title": "Rock und Pop - Teil 2",
        "folder": "rock-und-pop-teil-2-509"
      },
      {
        "id": "510",
        "title": "Rock und Pop - Teil 3",
        "folder": "rock-und-pop-teil-3-510"
      },
      {
        "id": "511",
        "title": "Rock und Pop - Teil 4",
        "folder": "rock-und-pop-teil-4-511"
      },
      {
        "id": "911",
        "title": "Popmusik",
        "folder": "popmusik-911"
      },
      {
        "id": "846",
        "title": "Country-Musik",
        "folder": "country-musik-846"
      },
      {
        "id": "831",
        "title": "Volksmusik",
        "folder": "volksmusik-831"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=geschichte+rockmusik+popmusik&t=3752"
  },
  "rocklegenden-der-60er-und-70er": {
    "slug": "rocklegenden-der-60er-und-70er",
    "title": "Rocklegenden der 60er & 70er",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "The Beatles, The Rolling Stones, Queen, Pink Floyd und Led Zeppelin.",
    "longDesc": "In den 1960er und 70er Jahren schufen bahnbrechende Bands Alben und Hymnen für die Ewigkeit. Entdecke die Meilensteine von den Abbey Road Studios bis zu den gigantischen Stadion-Konzerten der Classic-Rock-Ära.",
    "keyPoints": [
      "The Beatles: John, Paul, George und Ringo revolutionierten die Popmusik mit Melodienreichtum und Studioexperimenten",
      "The Rolling Stones: Mick Jagger und Keith Richards als Urväter des dreckigen, energiegeladenen Rhythm & Blues-Rock",
      "Queen: Hymnischer Pomp-Rock, Opernelemente und Freddie Mercurys unnachahmliche Stimmgewalt ('Bohemian Rhapsody')",
      "Pink Floyd: Konzeptalben, sphärische Psychedelik und Meilensteine der Tontechnik ('The Dark Side of the Moon')",
      "Led Zeppelin: Jimmy Page und Robert Plant als Pioniere des Hard Rock und Heavy Metal"
    ],
    "exercises": [
      {
        "id": "832",
        "title": "The Beatles – Die Fab Four aus Liverpool",
        "folder": "the-beatles-832"
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
        "id": "517queen",
        "title": "Queen: We Are The Champions",
        "folder": "we-are-the-champions-queen-517"
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
        "id": "155",
        "title": "Led Zeppelin (Bandporträt)",
        "folder": "led-zeppelin-155"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=beatles+queen+rolling+stones&t=3752"
  },
  "hardrock-grunge-und-metal": {
    "slug": "hardrock-grunge-und-metal",
    "title": "Hard Rock, Grunge & Metal",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "AC/DC, Black Sabbath, Metallica, Nirvana und die Gitarrenwände der Rockgeschichte.",
    "longDesc": "Verzerrte E-Gitarren, donnernde Drums und unverstellte Energie: Von den düsteren Riffs von Black Sabbath über den schnörkellosen Rhythmus von AC/DC bis zur Thrash-Metal-Wucht von Metallica und der Grunge-Explosion von Nirvana.",
    "keyPoints": [
      "Black Sabbath: Begründer des Heavy Metal um Ozzy Osbourne und Tony Iommi mit düsteren Moll-Riffs ('Paranoid')",
      "AC/DC: Australischer High-Voltage-Rock 'n' Roll mit Angus Youngs ikonischer Schuluniform und Riff-Meisterwerken",
      "Metallica: Pioniere des Thrash Metal; rasendes Tempo, anspruchsvolle Songstrukturen und Weltballaden",
      "Grunge-Revolution (1990er): Nirvana und Kurt Cobain beendeten den Hair-Metal mit roher Authentizität ('Smells Like Teen Spirit')"
    ],
    "exercises": [
      {
        "id": "136",
        "title": "AC/DC (Bandporträt)",
        "folder": "ac-dc-136"
      },
      {
        "id": "138",
        "title": "Black Sabbath (Bandporträt)",
        "folder": "black-sabbath-138"
      },
      {
        "id": "495",
        "title": "Paranoid (Black Sabbath)",
        "folder": "paranoid-black-sabbath-495"
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
        "id": "640",
        "title": "Led Zeppelin: Stairway to Heaven",
        "folder": "stairway-to-heaven-led-zeppelin-640"
      },
      {
        "id": "3205",
        "title": "Escape Room 'Rock, Pop und Jazz'",
        "folder": "escape-room-quot-rock-pop-und-jazz-quot-3205"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=hardrock+metal+nirvana+metallica&t=3752"
  },
  "pop-und-rock-ikonen": {
    "slug": "pop-und-rock-ikonen",
    "title": "Pop- & Rock-Ikonen: ABBA, U2 & Coldplay",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "ABBA, U2, Coldplay und die Hymnen weltweiter Stadion- und Pop-Tourneen.",
    "longDesc": "Schwedischer Poperfolg, irischer Stadionrock und britische Hymnen für Millionen: Entdecke Bands, deren Melodien über Generationen hinweg im kollektiven Gedächtnis verankert sind.",
    "keyPoints": [
      "ABBA: Der schwedische ESC-Sieg 1974 ('Waterloo') begründete eine der erfolgreichsten Pop-Karrieren aller Zeiten",
      "U2: Bono und The Edge prägten mit gesellschaftskritischen Texten und markantem Gitarren-Delay den Stadionrock ('Sunday Bloody Sunday')",
      "Coldplay: Chris Martin und Band schufen globale Hymnen voller Emotion, Melodie und spektakulärer Lichtshows ('Viva la Vida')"
    ],
    "exercises": [
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
        "id": "209",
        "title": "U2 (Bandporträt)",
        "folder": "u2-209"
      },
      {
        "id": "521u2",
        "title": "U2: With Or Without You",
        "folder": "with-or-without-you-u2-521"
      },
      {
        "id": "641",
        "title": "U2: Sunday Bloody Sunday",
        "folder": "sunday-bloody-sunday-u2-641"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=abba+u2+coldplay+pop&t=3752"
  },
  "pop-und-rock-pioniere": {
    "slug": "pop-und-rock-pioniere",
    "title": "Pop- & Rock-Pioniere: Elvis, Michael Jackson & Bowie",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Elvis Presley, Michael Jackson, Freddie Mercury, David Bowie und Elton John.",
    "longDesc": "Solokünstler, die Musikgeschichte schrieben und zu weltweiten Mythen wurden: Vom Hüftschwung des 'King of Rock 'n' Roll' über David Bowies ständige Neuerfindung bis zum Moonwalk des 'King of Pop'.",
    "keyPoints": [
      "Elvis Presley (1935–1977): King of Rock 'n' Roll; verband weißen Country mit schwarzem Blues und brach alle Rekorde",
      "Michael Jackson (1958–2009): King of Pop; 'Thriller' als meistverkauftes Album der Welt, bahnbrechende Musikvideos und Tanzinnovationen",
      "David Bowie (1947–2016): Chamäleon der Popmusik; Kunstfiguren wie 'Ziggy Stardust' und Einfluss auf Mode und Avantgarde",
      "Freddie Mercury (1946–1991): Außergewöhnlicher Tenor, charismatische Bühnenpräsenz und unverwechselbare Theatralik",
      "Elton John: Klaviervirtuose und Hit-Komponist über mehr als fünf Jahrzehnte"
    ],
    "exercises": [
      {
        "id": "845",
        "title": "Elvis Presley – Der King of Rock 'n' Roll",
        "folder": "elvis-presley-845"
      },
      {
        "id": "71elvis",
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
        "id": "462mj",
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
        "id": "74mercury",
        "title": "Freddie Mercury (Porträt)",
        "folder": "freddie-mercury-74"
      },
      {
        "id": "64bowie",
        "title": "David Bowie (Künstlerporträt)",
        "folder": "david-bowie-64"
      },
      {
        "id": "70elton",
        "title": "Elton John (Künstlerporträt)",
        "folder": "elton-john-70"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=elvis+michael+jackson+david+bowie&t=3752"
  },
  "moderne-popstars-und-stimmen": {
    "slug": "moderne-popstars-und-stimmen",
    "title": "Moderne Popstars & Große Stimmen",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Madonna, Adele, Ed Sheeran, Amy Winehouse und das Phänomen K-Pop.",
    "longDesc": "Starke Stimmen, meisterhaftes Songwriting und weltweite Fankulturen: Entdecke die Künstlerinnen und Künstler, die das 21. Jahrhundert mit Chart-Hits, emotionalen Balladen und globaler Bühnenpräsenz prägen.",
    "keyPoints": [
      "Madonna: 'Queen of Pop'; jahrzehntelange Neuerfindung, Provokation und Vorreiterin für Frauen in der Musikindustrie",
      "Adele: Außergewöhnliche Soul-Stimme, emotionale Tiefe und weltweite Rekord-Alben ('21', '25')",
      "Amy Winehouse (1983–2011): Unverwechselbare Soul- und Jazz-Stimme mit tragischem Schicksal ('Back to Black')",
      "Ed Sheeran: Vom Straßenmusiker mit Loop-Station zum weltweiten Megastar und Songschreiber",
      "K-Pop: Globales Phänomen aus Südkorea mit perfektionierten Choreografien, Konzepten und Fankulturen"
    ],
    "exercises": [
      {
        "id": "99",
        "title": "Madonna (Queen of Pop)",
        "folder": "madonna-99"
      },
      {
        "id": "40",
        "title": "Adele (Künstlerinnenporträt)",
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
        "id": "69sheeran",
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
        "id": "42",
        "title": "Amy Winehouse (Künstlerinnenporträt)",
        "folder": "amy-winehouse-42"
      },
      {
        "id": "610",
        "title": "Amy Winehouse: Back to Black",
        "folder": "back-to-black-amy-winehouse-610"
      },
      {
        "id": "6421",
        "title": "K-Pop-Formel - Das Geheimnis der Perfektion",
        "folder": "k-pop-formel-das-geheimnis-der-perfektion-6421"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=popstars+adele+sheeran+madonna&t=3752"
  },
  "elektronische-musik-und-tanzmusik": {
    "slug": "elektronische-musik-und-tanzmusik",
    "title": "Elektronische Musik, Techno & Clubkultur",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Techno, Synthesizer, House, elektronische Klangerzeugung, Tanzmusik und Clubkultur.",
    "longDesc": "Von den analogen Synthesizern der 1970er Jahre über Detroit Techno und die Berliner Clubszene bis zur modernen elektronischen Tanzmusik (EDM): Erfahre, wie Beats und digitale Klänge die Nachtkultur veränderten.",
    "keyPoints": [
      "Elektronische Klangerzeugung: Oszillatoren, Synthesizer, Sampler und Drumcomputer (Roland TR-808/909)",
      "Pioniere: Kraftwerk ('Die Mensch-Maschine') und Giorgio Moroder begründeten elektronische Popmusik",
      "Techno & House: Entstanden in Detroit und Chicago; 4-to-the-floor-Beat und hypnotische Loops",
      "Clubkultur: Berlin nach dem Mauerfall als weltweite Hauptstadt für Clubkultur und Loveparade"
    ],
    "exercises": [
      {
        "id": "833",
        "title": "Techno",
        "folder": "techno-833"
      },
      {
        "id": "elekmus",
        "title": "Elektronische Musik",
        "folder": "elektronische-musik"
      },
      {
        "id": "musprod",
        "title": "Musikproduktion im Wandel",
        "folder": "musikproduktion"
      },
      {
        "id": "muspr20",
        "title": "Die Entwicklung der Musikproduktion im 20. Jahrhundert",
        "folder": "die-entwicklung-der-musikproduktion-im-20-jahrhundert"
      },
      {
        "id": "3202",
        "title": "Escape Room 'Musikstile 1'",
        "folder": "escape-room-quot-musikstile-1-quot-3202"
      },
      {
        "id": "3203",
        "title": "Escape Room 'Musikstile 2'",
        "folder": "escape-room-quot-musikstile-2-quot-3203"
      },
      {
        "id": "549falco",
        "title": "Rock Me Amadeus (Falco)",
        "folder": "das-musical-rock-me-amadeus-549"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=techno+elektronische+musik&t=3752"
  },
  "hiphop-rap-und-streaming": {
    "slug": "hiphop-rap-und-streaming",
    "title": "Hip-Hop, Rap & Das Streaming-Zeitalter",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Hip-Hop-Kultur, Deutschrap, Straßenrap, Frauen im Rap, Spotify und Musik im Digitalzeitalter.",
    "longDesc": "Hip-Hop entstand als urbane Jugendkultur in den 1970ern in der New Yorker Bronx und ist heute das dominierende Musikgenre weltweit. Entdecke die Elemente von MCing und DJing bis zu Streaming-Algorithmen und Deutschrap.",
    "keyPoints": [
      "Die vier Säulen des Hip-Hop: DJing, MCing (Rappen), Breakdance (B-Boying) und Graffiti-Writing",
      "Wurzeln: Block Partys von DJ Kool Herc in der Bronx; Beatboxing und Breaks",
      "Deutschrap: Von den Anfängen (Die Fantastischen Vier, Advanced Chemistry) über Aggro Berlin bis zur Chartdominanz",
      "Frauen im Rap: Künstlerinnen brechen traditionelle Rollenbilder auf und prägen die Szene",
      "Streaming-Revolution: Plattformen wie Spotify und Apple Music verändern Songstrukturen, Playlisten und Einnahmen"
    ],
    "exercises": [
      {
        "id": "6410",
        "title": "Haftbefehl - Leben, Drogen und Musik im Straßenrap",
        "folder": "haftbefehl-leben-drogen-und-musik-im-straesenrap-6410"
      },
      {
        "id": "6412",
        "title": "Chabos wissen wer der Babo ist (Song von Haftbefehl)",
        "folder": "chabos-wissen-wer-der-babo-ist-song-von-haftbefehl-6412"
      },
      {
        "id": "6416",
        "title": "Wie Spotify die Musik verändert",
        "folder": "wie-spotify-die-musik-verandert-6416"
      },
      {
        "id": "6417",
        "title": "Deutschrap",
        "folder": "deutschrap-6417"
      },
      {
        "id": "6420",
        "title": "Die Rolle von Frauen im Deutschrap",
        "folder": "die-rolle-von-frauen-im-deutschrap-6420"
      },
      {
        "id": "6424",
        "title": "Wie Spotify die Musik verändert (Teil 2)",
        "folder": "wie-spotify-die-musik-verandert-2-6424"
      },
      {
        "id": "2597",
        "title": "Die Rolle von Medien in der Popkultur",
        "folder": "die-rolle-von-medien-in-der-popkultur-2597"
      },
      {
        "id": "6494",
        "title": "Der harte Weg zum YouTube-Star",
        "folder": "der-harte-weg-zum-youtube-star-geld-verdienen-ist-schwierig-6494"
      },
      {
        "id": "6548",
        "title": "Der harte Weg zum YouTube-Star (Teil 2)",
        "folder": "der-harte-weg-zum-youtube-star-geld-verdienen-ist-schwierig-2-6548"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=hiphop+rap+deutschrap+streaming&t=3752"
  }
};
