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
  "Culture & Music History"
];

export const englischTopics: Record<string, EnglischTopic> = {
  "tenses": {
    "id": 26441,
    "slug": "tenses",
    "title": "Zeiten (Tenses)",
    "category": "Grammar & Tenses",
    "shortDesc": "Simple Present, Present Progressive, Simple Past, Present Perfect, Past Perfect, Will-Future, Going-to-Future und To Be.",
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
        "title": "Will-future und going-to-future",
        "folder": "will-future-und-going-to-future-360"
      },
      {
        "id": "361",
        "title": "Past Tense Progressive",
        "folder": "past-tense-progressive-361"
      },
      {
        "id": "396",
        "title": "Revision: Forms of be (simple present and simple past)",
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
    "shortDesc": "Simple Past vs. Past Progressive, Will-Future vs. Going-to-Future, Simple Past vs. Present Perfect.",
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
        "title": "will future oder going-to-future",
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
    "title": "Sonstige Grammatik (Grammar Topics)",
    "category": "Grammar & Tenses",
    "shortDesc": "Passive Voice, Quantifiers (some/any/much/many), Demonstratives, Plural, Adjektiv vs. Adverb und Steigerung.",
    "longDesc": "Vertiefe dein Grammatikwissen: Vom Passiv (Passive Voice) über Mengenangaben (some, any, much, many) bis hin zu Adverbien, Demonstrativpronomen und Adjektivsteigerungen.",
    "keyPoints": [
      "Passive Voice: Bildung mit 'to be' + Past Participle; Fokus liegt auf der Handlung und dem Objekt, nicht auf dem Handelnden ('The book was written in 1920')",
      "Mengenangaben: 'some' in bejahten Sätzen und höflichen Bitten; 'any' in Verneinungen und echten Fragen",
      "Much vs. Many: 'much' bei unzählbaren Nomen (water, time, money); 'many' bei zählbaren Pluralnomen (books, apples, students)",
      "Adjective vs. Adverb: Adjektive beschreiben Nomen ('a quick runner'); Adverbien beschreiben Verben, Adjektive oder andere Adverbien ('he runs quickly')",
      "Steigerung von Adjektiven: Kurze Adjektive (-er, -est: fast, faster, fastest); lange Adjektive (more, most: interesting, more interesting, most interesting)",
      "A vs. An: 'a' vor Konsonantenlauten ('a dog', 'a university'); 'an' vor Vokallauten ('an apple', 'an hour')"
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
        "id": "369",
        "title": "Plural (Mehrzahl)",
        "folder": "plural-mehrzahl-369"
      },
      {
        "id": "371",
        "title": "A or An - der unbestimmte Artikel",
        "folder": "a-or-an-der-unbestimmte-artikel-2-371"
      },
      {
        "id": "394",
        "title": "Adverbs Of Frequency",
        "folder": "adverbs-of-frequency-394"
      },
      {
        "id": "405",
        "title": "Groß- und Kleinschreibung",
        "folder": "groes-und-kleinschreibung-405"
      },
      {
        "id": "813",
        "title": "Demonstratives",
        "folder": "demonstratives-813"
      },
      {
        "id": "402",
        "title": "some - any - a lot of - much - many",
        "folder": "some-any-a-lot-of-much-many-402"
      },
      {
        "id": "401",
        "title": "since - for - ago",
        "folder": "since-for-ago-401"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Grammar+Passive+Adverbs&t=468"
  },
  "whats-the-time": {
    "id": 26451,
    "slug": "whats-the-time",
    "title": "Uhrzeit (What's The Time?)",
    "category": "Vocabulary & Daily English",
    "shortDesc": "Uhrzeiten auf Englisch: o'clock, half past, quarter past, quarter to und AM/PM.",
    "longDesc": "Wie spät ist es auf Englisch? Lerne, wie man digitale und analoge Uhrzeiten im Englischen korrekt liest, ausspricht und aufschreibt.",
    "keyPoints": [
      "Volle Stunde: 'It's three o'clock'",
      "Viertel nach: 'It's quarter past three' (15 Minuten nach der vollen Stunde)",
      "Halbe Stunde: 'It's half past three' (wörtlich: eine halbe Stunde NACH drei Uhr = 3:30 Uhr)",
      "Viertel vor: 'It's quarter to four' (15 Minuten VOR der nächsten Stunde)",
      "Minutenangaben: 1–30 Minuten = 'past' (z. B. 'ten past three'); 31–59 Minuten = 'to' (z. B. 'twenty to four')",
      "12-Stunden-Zählung: 'a.m.' (ante meridiem = vormittags) und 'p.m.' (post meridiem = nachmittags)"
    ],
    "exercises": [
      {
        "id": "406",
        "title": "What's the time? - Die Uhrzeit (ohne Hörübung)",
        "folder": "what-039-s-the-time-die-uhrzeit-ohne-horubung-406"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=Telling+the+Time+English&t=468"
  },
  "vokabeln-more": {
    "id": 26447,
    "slug": "vokabeln-more",
    "title": "Vokabeln & Wortschatz (More!)",
    "category": "Vocabulary & Daily English",
    "shortDesc": "Wortschatztraining, Vokabelübungen und Phrasen für den Alltag und den Englischunterricht.",
    "longDesc": "Erweitere deinen aktiven und passiven englischen Wortschatz! Übungen zu zentralen Alltagsthemen, Redewendungen, Synonymen und Vokabelfeldern.",
    "keyPoints": [
      "Vokabeln im Kontext lernen: Wörter nicht isoliert pauken, sondern in Beispielsätzen und Wortfamilien merken",
      "False Friends (Falsche Freunde): Wörter, die Deutsch klingen, aber etwas völlig anderes bedeuten (z. B. 'become' = werden, nicht bekommen)",
      "Kollokationen & Phrasal Verbs: Typische Wortverbindungen (z. B. 'make a decision', 'look forward to', 'give up')",
      "Wortbildung: Vorsilben (un-, dis-, im-) und Nachsilben (-ful, -less, -ment, -tion) erschließen neue Wortbedeutungen"
    ],
    "exercises": [
      {
        "id": "362",
        "title": "More!1",
        "folder": "more-4-362"
      },
      {
        "id": "364",
        "title": "More!2",
        "folder": "more-2-364"
      },
      {
        "id": "366",
        "title": "More!3 Enriched Course",
        "folder": "more-3-enriched-course-366"
      },
      {
        "id": "367",
        "title": "More!4 Enriched Course",
        "folder": "more-4-enriched-course-367"
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=English+Vocabulary+More&t=468"
  },
  "musikgeschichte-englisch": {
    "id": 26050,
    "slug": "history-of-music",
    "title": "History of Music (Musikgeschichte auf Englisch)",
    "category": "Culture & Music History",
    "shortDesc": "Music eras from Antiquity, Middle Ages and Baroque to Classical, Romanticism and Modern music in English.",
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
        "title": "Music in the Baroque",
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
      }
    ],
    "worksheetLink": "https://eduki.com/de/autor/1430402/about-the-world-org?query=History+of+Music+English&t=468"
  }
};
