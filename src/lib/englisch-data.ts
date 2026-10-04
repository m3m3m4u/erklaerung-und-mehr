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
  "Culture & Landeskunde (UK & USA)",
  "CLIL & Music History",
  "British & American Literature"
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
        "id": "684",
        "title": "Simple Present (Lückentext)",
        "folder": "studypoint-luckentext-simple-present-684"
      },
      {
        "id": "694",
        "title": "Simple Present (Single Choice)",
        "folder": "studypoint-single-choice-simple-present-694"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Tenses+Grammar&t=144"
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
      },
      {
        "id": "722",
        "title": "Simple Present oder Present Progressive (Interaktiv)",
        "folder": "studypoint-simple-present-oder-present-progressive-722"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Mixed+Tenses+Englisch&t=144"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Articles+Quantifiers&t=144"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Passive+Adjectives+Adverbs&t=144"
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
      },
      {
        "id": "703",
        "title": "Memory Game: Animals (Tiere auf Englisch)",
        "folder": "studypoint-memory-game-animals-703"
      },
      {
        "id": "721",
        "title": "Numbers & Counting (Zahlen auf Englisch)",
        "folder": "studypoint-numbers-721"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Telling+the+Time+English&t=144"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Vocabulary+More&t=144"
  },

  "uk-and-usa-culture-and-cities": {
    "slug": "uk-and-usa-culture-and-cities",
    "title": "UK & USA: Culture, Cities & History",
    "category": "Culture & Landeskunde (UK & USA)",
    "shortDesc": "Landeskunde im englischsprachigen Raum: London, New York City, schottische und englische Metropolen sowie Meilensteine der US-Geschichte.",
    "longDesc": "Tauche ein in die Geschichte und Kultur der bedeutendsten Metropolen der englischsprachigen Welt: Von traditionsreichen britischen Städten wie London, Edinburgh, Birmingham und Liverpool bis zu den US-Metropolen New York, Los Angeles, Houston und den geschichtsträchtigen Wurzeln Virginias.",
    "keyPoints": [
      "London & British Cities: Historische Hauptstädte und Kulturzentren Großbritanniens von London über Edinburgh bis Birmingham, Leeds und Sheffield",
      "Liverpool: Die legendäre Hafenstadt der Beatles, maritimes Welterbe und lebendige Musik- und Kunstszene",
      "New York City & American Metropolises: 'The Big Apple', Los Angeles als globales Zentrum der Filmindustrie sowie Houston als Wissenschafts- und Raumfahrthub",
      "Virginia & US-Geschichte: Ursprünge der Besiedlung, Unabhängigkeitskrieg, Sezessionskrieg und die Entstehung der Vereinigten Staaten von Amerika"
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
        "id": "1619",
        "title": "Edinburgh – Scotland's Historic Capital",
        "folder": "edinburgh-1619"
      },
      {
        "id": "1569",
        "title": "Birmingham – Industrial Heritage & Modern UK",
        "folder": "birmingham-1569"
      },
      {
        "id": "1745",
        "title": "Liverpool – Maritime History & Culture",
        "folder": "liverpool-1745"
      },
      {
        "id": "1732",
        "title": "Leeds – Hub of Northern England",
        "folder": "leeds-1732"
      },
      {
        "id": "1863",
        "title": "Sheffield – The Steel City",
        "folder": "sheffield-1863"
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
        "id": "6054",
        "title": "Los Angeles – City of Angels & Hollywood",
        "folder": "los-angeles-6054"
      },
      {
        "id": "6017",
        "title": "Houston – Space City & Texas Culture",
        "folder": "houston-6017"
      },
      {
        "id": "1930",
        "title": "Virginia – The Old Dominion & US History",
        "folder": "virginia-1930"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=London+New+York+USA+English&t=144"
  },

  "commonwealth-and-world": {
    "slug": "commonwealth-and-world",
    "title": "The English-Speaking World (Commonwealth & Global Cities)",
    "category": "Culture & Landeskunde (UK & USA)",
    "shortDesc": "Australien, Kanada und globale Metropolen: Sydney, Melbourne, Brisbane, Perth und Toronto.",
    "longDesc": "English around the globe! Entdecke faszinierende Metropolen des Commonwealth in Australien und Kanada. Lerne mehr über Lebensart, Sehenswürdigkeiten, Geschichte und globale Vielfalt der englischsprachigen Welt.",
    "keyPoints": [
      "Australia – Down Under: Sydney mit Opernhaus und Hafenbrücke, Melbournes Kunst- und Kaffeeszene, die tropische Metropole Brisbane und Perth am Indischen Ozean",
      "Canada: Toronto als multikulturelle Wirtschaftsmetropole Kanadas, CN Tower und die Nähe zu den Großen Seen",
      "Global English: Sprachliche Varietäten, typische Redewendungen und kulturelle Identitäten im weltweiten Vergleich",
      "Geographie & Naturräume: Von den australischen Küsten und dem Outback bis zu den weiten Wäldern und Metropolregionen Nordamerikas"
    ],
    "exercises": [
      {
        "id": "6118",
        "title": "Sydney – Harbour City & Australian Icon",
        "folder": "sydney-6118"
      },
      {
        "id": "6068",
        "title": "Melbourne – Cultural Capital of Australia",
        "folder": "melbourne-6068"
      },
      {
        "id": "6145",
        "title": "Brisbane – Sunshine State & Modern Metropolis",
        "folder": "brisbane-6145"
      },
      {
        "id": "6090",
        "title": "Perth – Western Australia & Pacific Gateway",
        "folder": "perth-6090"
      },
      {
        "id": "6131",
        "title": "Toronto – Multicultural Hub of Canada",
        "folder": "toronto-6131"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Australia+Canada+English+Commonwealth&t=144"
  },

  "history-of-music": {
    "id": 26050,
    "slug": "history-of-music",
    "title": "History of Music (CLIL English)",
    "category": "CLIL & Music History",
    "shortDesc": "Musikgeschichte auf Englisch: Von der Steinzeit und Antike über Barock und Wiener Klassik bis zur Romantik, The Beatles und Queen.",
    "longDesc": "Explore the fascinating history of music entirely in the English language! Improve your CLIL (Content and Language Integrated Learning) skills with videos and exercises on musical eras and famous composers.",
    "keyPoints": [
      "Antiquity & Middle Ages: Early musical instruments, Gregorian chants and the origins of polyphony",
      "Renaissance: Polyphonic vocal masterpieces, madrigals and court dances",
      "Baroque Era: The basso continuo, ornamentation, the birth of opera, and masters like Bach and Vivaldi",
      "Classical Period: Structural clarity, symmetry, sonata form, and legends like Mozart, Haydn and Beethoven",
      "Romantic Period: Deep emotions, virtuoso soloists, nationalism and program music (Chopin, Wagner, Tchaikovsky)",
      "20th Century & Beyond: Atonality, twelve-tone music, rock and pop icons (The Beatles, Queen, ABBA, Toto)"
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
        "id": "629",
        "title": "Music in the Baroque Period",
        "folder": "music-in-the-baroque-629"
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=History+of+Music+English&t=144"
  },

  "william-shakespeare-and-drama": {
    "slug": "william-shakespeare-and-drama",
    "title": "William Shakespeare & Classic Drama",
    "category": "British & American Literature",
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
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Shakespeare+Hamlet+Drama+English&t=144"
  },

  "british-literature-and-classics": {
    "slug": "british-literature-and-classics",
    "title": "British Literature & Masterpieces",
    "category": "British & American Literature",
    "shortDesc": "Klassiker der britischen Literatur: Von Charles Dickens und den Brontë-Schwestern über Jane Austen, Oscar Wilde und Tolkien bis zu George Orwell und J.K. Rowling.",
    "longDesc": "Great British Literature: Dive into the masterpieces that shaped the English-speaking literary world. From Victorian social realism and Gothic romance to witty satire, detective fiction, epic fantasy, and profound 20th-century dystopias.",
    "keyPoints": [
      "Charles Dickens: Meisterhafte Porträts der viktorianischen Industriegesellschaft, soziale Ungerechtigkeit und Romanklassiker wie Oliver Twist und A Christmas Carol",
      "Jane Austen: Scharfsinnige Gesellschaftsbeobachtung, feinsinnige Ironie und Frauenrollen im frühen 19. Jahrhundert (Pride and Prejudice)",
      "The Brontë Sisters: Charlotte Brontës 'Jane Eyre' als Meilenstein emanzipatorischer Romanliteratur und viktorianischer Romantik",
      "Oscar Wilde & Victorian Wit: Ästhetizismus, Dekadenz, sprachlicher Feinsinn und brillante Gesellschaftskritik (The Picture of Dorian Gray)",
      "Lewis Carroll: Alice in Wonderland – Genialer Sprachwitz, viktorianische Parodie und die Kunst des literarischen Nonsens",
      "Arthur Conan Doyle & Sherlock Holmes: Die Geburtsstunde des modernen Kriminalromans und meisterhafte Deduktion in der Baker Street",
      "J.R.R. Tolkien & Fantasy: The Hobbit und The Lord of the Rings – Mythologie, ausgefeilte Kunstsprachen und das Fundament moderner High Fantasy",
      "George Orwell & Dystopia: 1984 – Warnung vor Überwachungsstaat, Totalitarismus, Big Brother und Gedankenkontrolle",
      "J.K. Rowling: Der weltweite Siegeszug von Harry Potter und die anhaltende Faszination zeitgenössischer britischer Erzählkunst"
    ],
    "exercises": [
      {
        "id": "1219",
        "title": "Charles Dickens – Life & Victorian Society",
        "folder": "berschrift-1219"
      },
      {
        "id": "1281",
        "title": "Jane Austen – Pride, Prejudice & Society",
        "folder": "jane-austen-1281"
      },
      {
        "id": "1222",
        "title": "Charlotte Brontë – Jane Eyre & Literary Passion",
        "folder": "charlotte-bronte-1222"
      },
      {
        "id": "1299",
        "title": "Oscar Wilde – The Picture of Dorian Gray & Wit",
        "folder": "oscar-wilde-1299"
      },
      {
        "id": "carroll-wunderland",
        "title": "Lewis Carroll – Alice in Wonderland",
        "folder": "lewis-carroll-ein-mathe-lehrer-im-wunderland"
      },
      {
        "id": "sherlock-holmes",
        "title": "Sir Arthur Conan Doyle – Sherlock Holmes",
        "folder": "sherlock-holmes-gegen-moderne-ermittler"
      },
      {
        "id": "tolkien-mittelerde",
        "title": "J.R.R. Tolkien – The World of Middle-earth",
        "folder": "die-welt-von-mittelerde-warum-tolkien-ein-genie-war"
      },
      {
        "id": "5092",
        "title": "George Orwell – 1984 & Dystopian Reality",
        "folder": "1984-5092"
      },
      {
        "id": "dystopia-1984",
        "title": "Surveillance in Literature – From 1984 to Today",
        "folder": "ueberwachung-in-buechern-von-1984-bis-heute"
      },
      {
        "id": "potter-erfolg",
        "title": "J.K. Rowling – The Global Success of Harry Potter",
        "folder": "harry-potter-und-das-geheimnis-des-weltweiten-erfolgs"
      },
      {
        "id": "britischer-humor",
        "title": "British Humour in English Literature",
        "folder": "britischer-humor-in-englischen-romanen"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=British+Literature+Classics+English&t=144"
  },

  "american-literature": {
    "slug": "american-literature",
    "title": "American Literature & Modern Classics",
    "category": "British & American Literature",
    "shortDesc": "Meisterwerke der US-Literatur: Mark Twain, Edgar Allan Poe, Ernest Hemingway, F. Scott Fitzgerald, Emily Dickinson und Stephen King.",
    "longDesc": "The Great American Story: Erforsche die Entwicklung der amerikanischen Literatur vom poetischen Schauerroman und Realismus über das Jazz-Zeitalter und die Lost Generation bis zur zeitgenössischen Spannungsliteratur.",
    "keyPoints": [
      "Mark Twain: 'Father of American Literature' – Markanter Humor, Mississippi-Romantik und Realismus (The Adventures of Tom Sawyer & Huckleberry Finn)",
      "Edgar Allan Poe: Pionier der modernen Detektivgeschichte, des Horrors und psychologischer Symbolik (The Raven, The Fall of the House of Usher)",
      "Emily Dickinson: Visionäre amerikanische Lyrik, formale Reduktion und tiefgründige Reflexionen über Natur, Unendlichkeit und Sterblichkeit",
      "F. Scott Fitzgerald: Der Chronist der Goldenen Zwanziger ('Jazz Age') und die Demaskierung des American Dream in 'The Great Gatsby'",
      "Ernest Hemingway: Nobelpreisträger und Schöpfer der 'Iceberg Theory' mit prägnantem, unverwechselbarem Stil (The Old Man and the Sea)",
      "Stephen King: Weltweiter Bestsellerautor und Meister des psychologischen Suspense und modernen Horrors"
    ],
    "exercises": [
      {
        "id": "1289",
        "title": "Mark Twain – The Father of American Literature",
        "folder": "mark-twain-1289"
      },
      {
        "id": "1244",
        "title": "Edgar Allan Poe – Master of the Macabre & Gothic Tales",
        "folder": "edgar-allan-poe-1244"
      },
      {
        "id": "1247",
        "title": "Emily Dickinson – American Poetry & Mystery",
        "folder": "berschrift-4-1247"
      },
      {
        "id": "1251",
        "title": "F. Scott Fitzgerald – The Jazz Age & The Great Gatsby",
        "folder": "f-scott-fitzgerald-1251"
      },
      {
        "id": "1249",
        "title": "Ernest Hemingway – Modernist Fiction & The Lost Generation",
        "folder": "ernest-hemingway-1249"
      },
      {
        "id": "stephen-king",
        "title": "Stephen King – Master of Contemporary Suspense",
        "folder": "warum-stephen-king-der-meister-des-horrors-bleibt"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=American+Literature+Classics+English&t=144"
  }
};
