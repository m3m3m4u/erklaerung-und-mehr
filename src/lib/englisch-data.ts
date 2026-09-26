export interface H5PExercise {
  id: string;
  title: string;
  folder: string;
}

export interface EnglischTopic {
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

export const englischCategories: string[] = [
  "Grammar & Tenses",
  "Vocabulary & Daily English",
  "Culture, Geography & Music History",
  "Literature & Reading"
];

export const englischTopics: Record<string, EnglischTopic> = {
  "tenses": {
    "id": 26441,
    "slug": "tenses",
    "title": "Zeiten (Tenses)",
    "category": "Grammar & Tenses",
    "shortDesc": "Simple Present, Present Progressive, Simple Past, Present Perfect, Past Perfect, Future Tenses und Forms of Be.",
    "longDesc": "Master the English tenses! Learn when and how to use each tense correctly: From present habits and continuous actions to past events, completed actions with present relevance, and future plans.",
    "keyPoints": [
      "Simple Present: Regelmäßige Handlungen, Gewohnheiten und Fakten; Signalwörter: always, often, usually, never; He/She/It das 's' muss mit!",
      "Present Progressive: Handlungen, die im Moment des Sprechens ablaufen (am/is/are + verb-ing); Signalwörter: now, at the moment, look!, listen!",
      "Simple Past: Abgeschlossene Handlungen in der Vergangenheit (Infinitiv + -ed bzw. unregelmäßige Verben); Signalwörter: yesterday, ago, in 2020, last week",
      "Past Progressive: Ablaufende Handlung in der Vergangenheit (was/were + verb-ing), oft unterbrochen durch ein plötzliches Ereignis (Simple Past)",
      "Present Perfect: Vergangenheit mit Bezug zur Gegenwart oder gerade vollendete Handlung (have/has + Past Participle); Signalwörter: just, already, yet, ever, never, since, for",
      "Past Perfect: Die Vorvergangenheit – Handlung vor einem anderen vergangenen Ereignis (had + Past Participle)",
      "Future Tenses: Will-Future für spontane Entschlüsse und Vorhersagen | Going-to-Future für feste Absichten und geplante Vorhaben"
    ],
    "exercises": [
      {
        "id": "355",
        "title": "Simple Present",
        "folder": "simple-present-355"
      },
      {
        "id": "356",
        "title": "Present Tense Progressive",
        "folder": "present-tense-progressive-356"
      },
      {
        "id": "357",
        "title": "Past Tense Simple (regelmäßige Verben)",
        "folder": "past-tense-simple-regelmaesige-verben-357"
      },
      {
        "id": "358",
        "title": "Present Perfect Tense",
        "folder": "present-perfect-tense-358"
      },
      {
        "id": "359",
        "title": "Past Perfect Tense",
        "folder": "past-perfect-tense-359"
      },
      {
        "id": "360",
        "title": "Will-Future und going-to-Future",
        "folder": "will-future-und-going-to-future-360"
      },
      {
        "id": "361",
        "title": "Past Tense Progressive",
        "folder": "past-tense-progressive-361"
      },
      {
        "id": "396",
        "title": "Revision: Forms of be (Simple present and simple past)",
        "folder": "revision-forms-of-be-simple-present-and-simple-past-396"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Tenses+Grammar&t=468"
  },

  "mixed-tenses": {
    "id": 26445,
    "slug": "mixed-tenses",
    "title": "Zeiten gemischt (Mixed Tenses)",
    "category": "Grammar & Tenses",
    "shortDesc": "Simple Past vs. Past Progressive, Will-Future vs. Going-to-Future, Simple Past vs. Present Perfect im direkten Vergleich.",
    "longDesc": "Echte Sprachkompetenz zeigt sich im gezielten Wechsel der Zeiten. Trainiere die typischen Gegenüberstellungen, die im Schulalltag und in Prüfungen abgefragt werden.",
    "keyPoints": [
      "Simple Past vs. Past Progressive: Hintergrundhandlung (Past Progressive: 'I was sleeping') wird unterbrochen durch ein kurzes Ereignis (Simple Past: 'when the phone rang')",
      "Simple Past vs. Present Perfect: Fester Zeitpunkt in der Vergangenheit (Simple Past: 'yesterday') vs. offener Zeitraum / Relevanz für jetzt (Present Perfect: 'I have lost my key')",
      "Will-Future vs. Going-to-Future: Spontaner Entschluss ('I will help you!') vs. bereits bestehende Absicht ('I am going to visit London next month')",
      "Simple Present vs. Present Progressive: Gewohnheit ('I usually drink tea') vs. momentane Ausnahme ('but today I am drinking coffee')",
      "Simple Past vs. Past Perfect: Zeitliche Reihenfolge in der Vergangenheit ('After he had done his homework, he met his friends')"
    ],
    "exercises": [
      {
        "id": "409",
        "title": "Simple Past oder Past Progressive",
        "folder": "simple-past-oder-past-progressive-409"
      },
      {
        "id": "410",
        "title": "Will future oder going-to-Future",
        "folder": "will-future-oder-going-to-future-410"
      },
      {
        "id": "411",
        "title": "Simple Past oder Past Perfect",
        "folder": "simple-past-oder-past-perfect-411"
      },
      {
        "id": "412",
        "title": "Simple Past oder Present Perfect",
        "folder": "simple-past-oder-present-perfect-412"
      },
      {
        "id": "413",
        "title": "Simple present oder present progressive?",
        "folder": "simple-present-oder-present-progressive-413"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Mixed+Tenses+Englisch&t=468"
  },

  "grammar-sonstiges": {
    "id": 26449,
    "slug": "grammar-sonstiges",
    "title": "Articles, Quantifiers & Determiners",
    "category": "Grammar & Tenses",
    "shortDesc": "Unbestimmter Artikel (a/an), Quantifiers (some/any/much/many), Demonstratives (this/that), Zeitangaben (since/for/ago) und Plural.",
    "longDesc": "Kleine Wörter mit großer Wirkung: Lerne den präzisen Gebrauch von Artikeln, Mengenangaben und Pronomen für fehlerfreie englische Sätze.",
    "keyPoints": [
      "A vs. An: 'a' vor Konsonantenlauten ('a dog', 'a university'); 'an' vor Vokallauten ('an apple', 'an hour')",
      "Some vs. Any: 'some' in bejahten Sätzen und höflichen Bitten/Angeboten; 'any' in Verneinungen und offenen Fragen",
      "Much vs. Many: 'much' bei unzählbaren Nomen (water, money, time); 'many' bei zählbaren Nomen im Plural (books, cars)",
      "Demonstratives: 'this' (nah, Einzahl) / 'these' (nah, Mehrzahl) vs. 'that' (fern, Einzahl) / 'those' (fern, Mehrzahl)",
      "Since vs. For vs. Ago: 'since' markiert einen konkreten Anfangszeitpunkt; 'for' eine Zeitspanne; 'ago' liegt vollständig in der Vergangenheit",
      "Pluralbildung: Regelmäßig mit -s/-es; unregelmäßige Formen (man/men, woman/women, child/children, foot/feet, mouse/mice)"
    ],
    "exercises": [
      {
        "id": "371",
        "title": "A or an - der unbestimmte Artikel",
        "folder": "a-or-an-der-unbestimmte-artikel-2-371"
      },
      {
        "id": "402",
        "title": "Some - any - a lot of - much - many",
        "folder": "some-any-a-lot-of-much-many-402"
      },
      {
        "id": "813",
        "title": "Demonstratives (This, That, These, Those)",
        "folder": "demonstratives-813"
      },
      {
        "id": "401",
        "title": "Since - for - ago",
        "folder": "since-for-ago-401"
      },
      {
        "id": "369",
        "title": "Plural (Mehrzahlbildung)",
        "folder": "plural-mehrzahl-369"
      },
      {
        "id": "370",
        "title": "A or An - der unbestimmte Artikel",
        "folder": "a-or-an-der-unbestimmte-artikel-370"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Articles+Quantifiers&t=468"
  },

  "passive-voice-and-modifiers": {
    "slug": "passive-voice-and-modifiers",
    "title": "Passive Voice, Adjectives & Adverbs",
    "category": "Grammar & Tenses",
    "shortDesc": "The Passive Voice, Adverb vs. Adjective, Steigerung (Comparison), Häufigkeitsadverbien und Capitalization Rules.",
    "longDesc": "Erweitere deinen Satzbau: Vom Passiv für Berichte und formelle Texte über den Unterschied zwischen Adjektiven und Adverbien bis hin zu Steigerungsformen und englischer Rechtschreibung.",
    "keyPoints": [
      "Passive Voice: Bildung mit der passenden Form von 'to be' + Past Participle ('The letter was sent yesterday'); der Urheber kann mit 'by' genannt werden",
      "Adjective vs. Adverb: Adjektive modifizieren Nomen ('a slow car'); Adverbien modifizieren Verben, Adjektive oder andere Adverbien ('he drives slowly')",
      "Comparison of Adjectives: Kurze Adjektive (-er/-est: cheap, cheaper, cheapest); lange Adjektive (more/most: dangerous, more dangerous, most dangerous); unregelmäßig (good/better/best, bad/worse/worst)",
      "Adverbs of Frequency: always, usually, often, sometimes, rarely, never stehen meist vor dem Vollverb, aber nach Formen von 'to be'",
      "Capitalization: Großgeschrieben werden im Englischen Wochentage, Monate, Sprachen/Nationalitäten, das Personalpronomen 'I' sowie Titelwörter"
    ],
    "exercises": [
      {
        "id": "395",
        "title": "The Passive Voice",
        "folder": "the-passive-voice-395"
      },
      {
        "id": "373",
        "title": "Adverb oder Adjective",
        "folder": "adverb-oder-adjective-373"
      },
      {
        "id": "372",
        "title": "Comparison Of Adjectives",
        "folder": "comparison-of-adjectives-372"
      },
      {
        "id": "394",
        "title": "Adverbs Of Frequency",
        "folder": "adverbs-of-frequency-394"
      },
      {
        "id": "405",
        "title": "Groß- und Kleinschreibung (Capitalization)",
        "folder": "groes-und-kleinschreibung-405"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Passive+Adjectives+Adverbs&t=468"
  },

  "whats-the-time": {
    "id": 26451,
    "slug": "whats-the-time",
    "title": "Uhrzeit, Zahlen & Grundlagen (Daily English)",
    "category": "Vocabulary & Daily English",
    "shortDesc": "Uhrzeiten auf Englisch (o'clock, half past, quarter to), Kardinal- und Ordinalzahlen sowie elementarer Wortschatz.",
    "longDesc": "Wie spät ist es auf Englisch? Lerne, wie man digitale und analoge Uhrzeiten im Englischen korrekt liest, ausspricht und aufschreibt, kombiniert mit Zahlen und grundlegendem Wortschatz.",
    "keyPoints": [
      "Volle Stunde: 'It's three o'clock'",
      "Viertel nach: 'It's quarter past three' (15 Minuten nach der vollen Stunde)",
      "Halbe Stunde: 'It's half past three' (eine halbe Stunde nach drei = 3:30 Uhr)",
      "Viertel vor: 'It's quarter to four' (15 Minuten vor vier = 3:45 Uhr)",
      "Minuten: 1–30 Minuten = 'past' (z. B. 'twenty past five'); 31–59 Minuten = 'to' (z. B. 'ten to six')",
      "12-Stunden-Zählung: a.m. (vormittags, midnight to noon) vs. p.m. (nachmittags, noon to midnight)",
      "Zahlen & Zählen: Cardinal numbers (one, two, twenty) vs. Ordinal numbers (first, second, third) für Datumsangaben"
    ],
    "exercises": [
      {
        "id": "1039",
        "title": "What's the time? - die Uhrzeit",
        "folder": "what-039-s-the-time-die-uhrzeit-ohne-horubung-406"
      },
      {
        "id": "261",
        "title": "Uhrzeit: Halbe Stunden (Half past)",
        "folder": "uhrzeit-halbe-stunden-261"
      },
      {
        "id": "262",
        "title": "Uhrzeit: Viertelstunden (Quarter to / Quarter past)",
        "folder": "uhrzeit-viertelstunden-262"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Telling+the+Time+English&t=468"
  },

  "vokabeln-more": {
    "id": 26447,
    "slug": "vokabeln-more",
    "title": "Vokabeln & Wortschatz (More! Course 1–4)",
    "category": "Vocabulary & Daily English",
    "shortDesc": "Umfassendes Wortschatztraining, Textarbeit und Enriched Course Module für die Schulstufen 5 bis 8.",
    "longDesc": "Erweitere deinen aktiven und passiven englischen Wortschatz mit den strukturierten Kurseinheiten der More!-Lehrwerke 1 bis 4 inklusive vertiefenden Enriched-Trainingsmodulen.",
    "keyPoints": [
      "Vokabeln im Kontext lernen: Wörter nicht isoliert pauken, sondern in Beispielsätzen und Wortfamilien merken",
      "False Friends (Falsche Freunde): Wörter mit trügerischer Ähnlichkeit (z. B. 'become' = werden, 'gift' = Geschenk, 'eventually' = schließlich)",
      "Kollokationen & Phrasal Verbs: Typische Redewendungen und feste Verbkombinationen (make a decision, look forward to, give up)",
      "Wortbildung: Wortarten durch Affixe ableiten (happy ➔ happiness, care ➔ careful/careless)"
    ],
    "exercises": [
      {
        "id": "363",
        "title": "More! 1 – Course Vocabulary & Exercises",
        "folder": "more-1-363"
      },
      {
        "id": "364",
        "title": "More! 2 – Course Vocabulary & Exercises",
        "folder": "more-2-364"
      },
      {
        "id": "365",
        "title": "More! 3 – Course Vocabulary & Exercises",
        "folder": "more-3-365"
      },
      {
        "id": "362",
        "title": "More! 4 – Course Vocabulary & Exercises",
        "folder": "more-4-362"
      },
      {
        "id": "366",
        "title": "More! 3 – Enriched Course Training",
        "folder": "more-3-enriched-course-366"
      },
      {
        "id": "367",
        "title": "More! 4 – Enriched Course Training",
        "folder": "more-4-enriched-course-367"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Vocabulary+More&t=468"
  },

  "history-of-music": {
    "id": 26050,
    "slug": "history-of-music",
    "title": "History of Music (CLIL English)",
    "category": "Culture, Geography & Music History",
    "shortDesc": "Musikgeschichte auf Englisch: Von der Steinzeit und Antike über Barock und Wiener Klassik bis zur Romantik und Moderne.",
    "longDesc": "Explore the fascinating history of music entirely in the English language! Improve your CLIL (Content and Language Integrated Learning) skills with videos and exercises on musical eras and famous composers.",
    "keyPoints": [
      "Antiquity & Middle Ages: Early musical instruments, Gregorian chants and the origins of polyphony",
      "Renaissance: Polyphonic vocal masterpieces, madrigals and court dances",
      "Baroque Era: The basso continuo, ornamentation, the birth of opera, and masters like Bach and Vivaldi",
      "Classical Period: Structural clarity, symmetry, sonata form, and legends like Mozart, Haydn and Beethoven",
      "Romantic Period: Deep emotions, virtuoso soloists, nationalism and program music (Chopin, Wagner, Tchaikovsky)",
      "20th Century & Beyond: Atonality, twelve-tone music, jazz influences, film scores and electronic innovation"
    ],
    "exercises": [
      {
        "id": "636",
        "title": "Music from the Stone Age to Antiquity",
        "folder": "music-from-the-stone-age-to-antiquity-636"
      },
      {
        "id": "638",
        "title": "Music in the Middle Ages",
        "folder": "music-in-the-middle-ages-638"
      },
      {
        "id": "639",
        "title": "Music in the Renaissance",
        "folder": "music-in-the-renaissance-639"
      },
      {
        "id": "637",
        "title": "Music in the Baroque Period",
        "folder": "music-in-the-baroque-2-637"
      },
      {
        "id": "642",
        "title": "Music of the Viennese Classical Period",
        "folder": "music-of-the-viennese-classical-period-642"
      },
      {
        "id": "641",
        "title": "Music of the Romantic Period",
        "folder": "music-of-the-romantic-period-641"
      },
      {
        "id": "640",
        "title": "Music of the Modern Age",
        "folder": "music-of-the-modern-age-640"
      },
      {
        "id": "606",
        "title": "A Day in the Life (The Beatles)",
        "folder": "a-day-in-the-life-the-beatles-606"
      },
      {
        "id": "479",
        "title": "Help! - The Beatles",
        "folder": "help-the-beatles-479"
      },
      {
        "id": "485",
        "title": "I Want To Hold Your Hand - The Beatles",
        "folder": "i-want-to-hold-your-hand-the-beatles-485"
      },
      {
        "id": "491",
        "title": "Lucy In The Sky With Diamonds - The Beatles",
        "folder": "lucy-in-the-sky-with-diamonds-the-beatles-491"
      },
      {
        "id": "613",
        "title": "Bohemian Rhapsody (Queen)",
        "folder": "bohemian-rhapsody-queen-2-613"
      },
      {
        "id": "469",
        "title": "Don't Stop Me Now - Queen",
        "folder": "don-039-t-stop-me-now-queen-469"
      },
      {
        "id": "616",
        "title": "Dancing Queen (ABBA)",
        "folder": "dancing-queen-abba-2-616"
      },
      {
        "id": "459",
        "title": "Africa - Toto",
        "folder": "africa-toto-459"
      },
      {
        "id": "480",
        "title": "Hold the Line - Toto",
        "folder": "hold-the-line-toto-480"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=History+of+Music+English&t=468"
  },

  "uk-and-usa-culture-and-cities": {
    "slug": "uk-and-usa-culture-and-cities",
    "title": "UK & USA: Culture, Cities & History",
    "category": "Culture, Geography & Music History",
    "shortDesc": "Landeskunde im englischsprachigen Raum: London, New York City, US-amerikanische Geschichte und Kulturmetropolen.",
    "longDesc": "Tauche ein in die Geschichte und Kultur der bedeutendsten Metropolen der englischsprachigen Welt: Von der traditionsreichen britischen Hauptstadt London bis zur Weltmetropole New York City und den Meilensteinen der US-Geschichte.",
    "keyPoints": [
      "London: Hauptstadt des Vereinigten Königreichs; Wahrzeichen wie Big Ben, Tower Bridge, Buckingham Palace und der Fluss Themse",
      "New York City: 'The City That Never Sleeps'; Five Boroughs (Manhattan, Brooklyn, Queens, The Bronx, Staten Island) und Central Park",
      "Geschichte New Yorks: Von der niederländischen Kolonie Neu-Amsterdam über Ellis Island als Tor zur Neuen Welt bis zum globalen Finanzzentrum",
      "Geschichte der USA: Unabhängigkeitserklärung 1776, Verfassung, Sezessionskrieg und Aufstieg zur globalen Wirtschaftsmacht"
    ],
    "exercises": [
      {
        "id": "1746",
        "title": "London – Sights, Landmarks & Culture",
        "folder": "london-1746"
      },
      {
        "id": "6053",
        "title": "London Explorer – History & Modern City (Part 2)",
        "folder": "london-2-6053"
      },
      {
        "id": "6083",
        "title": "New York City – The Big Apple",
        "folder": "new-york-2-6083"
      },
      {
        "id": "5379",
        "title": "History of New York – From Colony to Metropolis",
        "folder": "die-geschichte-new-yorks-5379"
      },
      {
        "id": "5364",
        "title": "History of the USA – Independence & Modern Era",
        "folder": "die-geschichte-der-usa-5364"
      },
      {
        "id": "404",
        "title": "30 wichtige Städte der USA",
        "folder": "30-wichtige-stadte-der-usa-404"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=London+New+York+USA+English&t=468"
  },

  "william-shakespeare-and-drama": {
    "slug": "william-shakespeare-and-drama",
    "title": "William Shakespeare & Classic Drama",
    "category": "Literature & Reading",
    "shortDesc": "The Bard of Avon: Shakespeares Leben, das Globe Theatre, Hamlet, Romeo und Julia und zeitlose dramatische Motive.",
    "longDesc": "William Shakespeare (1564–1616) gilt als der bedeutendste Dramatiker der Weltliteratur. Seine Tragödien, Komödien und Sonette prägen bis heute die englische Sprache, Literatur und Theaterkultur.",
    "keyPoints": [
      "William Shakespeare: Geboren in Stratford-upon-Avon, Dramatiker der Lord Chamberlain's Men am elisabethanischen Globe Theatre",
      "Hamlet: Die Tragödie des dänischen Prinzen; Themen wie Rache, Zweifel, Schein versus Sein und der berühmte Monolog 'To be, or not to be'",
      "Romeo and Juliet: Die berühmteste Liebestragödie der Literaturgeschichte über die verfeindeten Familien Montague und Capulet in Verona",
      "Sprachlicher Einfluss: Shakespeare erfand Hunderte neuer englischer Wörter und Redewendungen ('break the ice', 'heart of gold', 'wild-goose chase')"
    ],
    "exercises": [
      {
        "id": "4632",
        "title": "William Shakespeare – Life & Works",
        "folder": "william-shakespeare-4632"
      },
      {
        "id": "shakespeare-zeitlos",
        "title": "Shakespeare's Timeless Drama",
        "folder": "shakespeare-und-warum-seine-dramen-zeitlos-sind"
      },
      {
        "id": "6219",
        "title": "Hamlet – Prince of Denmark",
        "folder": "hamlet-von-william-shakespeare-6219"
      },
      {
        "id": "6218",
        "title": "Hamlet – Literary Significance",
        "folder": "hamlet-von-william-shakespeare-literarische-bedeutung-6218"
      },
      {
        "id": "3467",
        "title": "Romeo and Juliet – The Star-Crossed Lovers",
        "folder": "william-shakespeare-romeo-und-julia-3467"
      },
      {
        "id": "6216",
        "title": "Hamlet von William Shakespeare – Bezug zur Gegenwart",
        "folder": "hamlet-von-william-shakespeare-bezug-zur-gegenwart-6216"
      },
      {
        "id": "6217",
        "title": "Hamlet von William Shakespeare – Historischer Kontext",
        "folder": "hamlet-von-william-shakespeare-historischer-kontext-6217"
      },
      {
        "id": "4573",
        "title": "William Shakespeare – Romeo und Julia (Teil 2)",
        "folder": "william-shakespeare-romeo-und-julia-2-4573"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Shakespeare+Hamlet+Drama+English&t=468"
  }
};
