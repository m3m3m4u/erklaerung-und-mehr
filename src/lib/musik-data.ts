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
      { id: "342", title: "Das Schlagzeug / die Schlagzeugnotation", folder: "das-schlagzeug-die-schlagzeugnotation-342" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Noten+lesen+Musiktheorie&t=1251"
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Musikinstrumente&t=1251"
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
        "title": "Musikgeschichte - Steinzeit bis Antike",
        "folder": "musikgeschichte-steinzeit-bis-antike-500"
      },
      {
        "id": "501",
        "title": "Musikgeschichte - Musik im Mittelalter",
        "folder": "musikgeschichte-musik-im-mittelalter-501"
      },
      {
        "id": "502",
        "title": "Musikgeschichte - Renaissance",
        "folder": "musikgeschichte-renaissance-502"
      },
      {
        "id": "503",
        "title": "Musikgeschichte - Barock",
        "folder": "musikgeschichte-barock-503"
      },
      {
        "id": "504",
        "title": "Musikgeschichte - Klassik",
        "folder": "musikgeschichte-klassik-504"
      },
      {
        "id": "505",
        "title": "Musikgeschichte - Romantik",
        "folder": "musikgeschichte-romantik-505"
      },
      {
        "id": "506",
        "title": "Musikgeschichte - Moderne",
        "folder": "musikgeschichte-moderne-506"
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
      { id: "519", title: "Das Musical", folder: "das-musical-519" }
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
      { id: "507", title: "Geschichte des Jazz", folder: "geschichte-des-jazz-507" },
      { id: "1265", title: "Gypsy Jazz", folder: "gypsy-jazz-1265" },
      { id: "1200", title: "Acid Jazz", folder: "acid-jazz-1200" },
      { id: "3205", title: "Escape Room: Rock, Pop und Jazz", folder: "escape-room-quot-rock-pop-und-jazz-quot-3205" }
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
      { id: "508", title: "Rock und Pop - Teil 1", folder: "rock-und-pop-teil-1-508" },
      { id: "509", title: "Rock und Pop - Teil 2", folder: "rock-und-pop-teil-2-509" },
      { id: "510", title: "Rock und Pop - Teil 3", folder: "rock-und-pop-teil-3-510" },
      { id: "511", title: "Rock und Pop - Teil 4", folder: "rock-und-pop-teil-4-511" },
      { id: "430", title: "Geschichte der Rockmusik - Teil 1 (1950 bis 1966)", folder: "geschichte-der-rockmusik-teil-1-1950-bis-1966-430" },
      { id: "431", title: "Geschichte der Rockmusik - Teil 2 (1966 bis 1976)", folder: "geschichte-der-rockmusik-teil-2-1966-bis-1976-431" },
      { id: "432", title: "Geschichte der Rockmusik - Teil 3 (1976 bis 1990)", folder: "geschichte-der-rockmusik-teil-3-1976-bis-1990-432" }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Rock+und+Pop+Musikunterricht&t=1251"
  },
  "bekannte-bands": {
    "slug": "bekannte-bands",
    "title": "Bekannte Bands",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "The Beatles, The Rolling Stones, Queen, AC/DC und legendäre Bandbesetzungen.",
    "longDesc": "Hier findest du Erklärvideos und interaktive Übungen zu den berühmtesten Rock- und Popbands der Musikgeschichte, ihren Welthits und ihrer musikalischen Entwicklung.",
    "keyPoints": [
      "The Beatles: John Lennon, Paul McCartney, George Harrison, Ringo Starr – die erfolgreichste Band aller Zeiten",
      "The Rolling Stones: Langlebigste Rockband der Welt ('Satisfaction', 'Paint It Black')",
      "Queen: Hymnischer Rock, Opernelemente und Freddie Mercurys Jahrhundertstimme ('Bohemian Rhapsody')",
      "Bandbesetzung: Lead-Gitarre, Rhythmus-Gitarre, E-Bass, Schlagzeug und Lead-Gesang"
    ],
    "exercises": [
      {
        "id": "832",
        "title": "The Beatles – die Fab Four aus Liverpool",
        "folder": "the-beatles-832"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Bands+Beatles+Musikunterricht&t=1251"
  },
  "bekannte-saenger": {
    "slug": "bekannte-saenger",
    "title": "Bekannte Sängerinnen und Sänger",
    "category": "Bühne, Jazz & Popmusik",
    "shortDesc": "Elvis Presley, Michael Jackson, Madonna und die Ikonen der Popgeschichte.",
    "longDesc": "Hier findest du Erklärvideos und passende Übungen zu den berühmtesten Solo-Sängerinnen und -Sängern der Pop- und Rockgeschichte, ihren Stimmen und Meilensteinen.",
    "keyPoints": [
      "Elvis Presley: 'King of Rock 'n' Roll' – Durchbruch in den 1950ern ('Jailhouse Rock', 'Hound Dog')",
      "Michael Jackson: 'King of Pop' – meistverkauftes Album der Weltgeschichte ('Thriller', Moonwalk)",
      "Madonna: 'Queen of Pop' – Meisterin der musikalischen und visuellen Neuerfindung",
      "Stimmumfang und Vokaltechniken im Pop: Bruststimme, Kopfstimme, Belting und Falsett"
    ],
    "exercises": [
      {
        "id": "845",
        "title": "Elvis Presley – der King of Rock 'n' Roll",
        "folder": "elvis-presley-845"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Saenger+Popstars+Musikunterricht&t=1251"
  }
};
