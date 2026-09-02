export interface TopicItem {
  title: string;
  image: string;
  link: string;
  keywords?: string[];
}

export interface CategorySection {
  category: string;
  items: TopicItem[];
}

export const subjectCategories: CategorySection[] = [
  {
    category: 'Naturwissenschaften',
    items: [
      {
        title: 'Chemie',
        image: '/images/chemie.png',
        link: '/chemie',
        keywords: ['chemie', 'stoffe', 'reaktion', 'elemente', 'periodensystem', 'atome', 'moleküle', 'säuren', 'basen'],
      },
      {
        title: 'Biologie',
        image: '/images/biologie.png',
        link: '/biologie',
        keywords: ['biologie', 'tiere', 'pflanzen', 'mensch', 'körper', 'zelle', 'genetik', 'ökologie', 'natur'],
      },
      {
        title: 'Geographie',
        image: '/images/geo.png',
        link: '/geographie',
        keywords: ['geographie', 'erdkunde', 'österreich', 'deutschland', 'europa', 'länder', 'kontinente', 'städte', 'klima', 'erde'],
      },
      {
        title: 'Physik',
        image: '/images/physik.png',
        link: '/physik',
        keywords: ['physik', 'strom', 'elektrizität', 'magnetismus', 'mechanik', 'kräfte', 'optik', 'licht', 'wärme', 'energie'],
      },
    ],
  },
  {
    category: 'Sachkunde',
    items: [
      {
        title: 'Politik & Gesellschaft',
        image: '/images/politik.png',
        link: '/politik-und-gesellschaft',
        keywords: ['politik', 'gesellschaft', 'demokratie', 'wahlen', 'parlament', 'staat', 'gesetze', 'bürger'],
      },
      {
        title: 'Freiwillige Fahrradprüfung',
        image: '/images/verkehr-2.png',
        link: '/die-freiwillige-fahrradpruefung',
        keywords: ['fahrrad', 'rad', 'verkehr', 'fahrradprüfung', 'verkehrszeichen', 'schilder', 'vorrang', 'helm', 'sicherheit'],
      },
      {
        title: 'Hauswirtschaft',
        image: '/images/hauswirtschaft-1.png',
        link: '/hauswirtschaft',
        keywords: ['hauswirtschaft', 'haushalt', 'kochen', 'ernährung', 'rezepte', 'küche'],
      },
      {
        title: 'Lehrberufe',
        image: '/images/lehrberufe.png',
        link: '/lehrberufe',
        keywords: ['lehrberufe', 'berufe', 'lehre', 'ausbildung', 'arbeit', 'karriere', 'job'],
      },
    ],
  },
  {
    category: 'Mensch & Gesellschaft',
    items: [
      {
        title: 'Geschichte',
        image: '/images/geschichte.png',
        link: '/geschichte',
        keywords: ['geschichte', 'epochen', 'steinzeit', 'antike', 'mittelalter', 'neuzeit', 'weltkrieg', 'römer', 'ägypten', 'revolution'],
      },
      {
        title: 'Wirtschaft',
        image: '/images/wirtschaft.png',
        link: '/wirtschaft',
        keywords: ['wirtschaft', 'geld', 'markt', 'handel', 'unternehmen', 'ökonomie', 'preise', 'inflation'],
      },
      {
        title: 'Ernährung',
        image: '/images/ernaehrung.png',
        link: '/ernaehrung',
        keywords: ['ernährung', 'essen', 'vitamine', 'nährstoffe', 'gesundheit', 'lebensmittel', 'kalorien'],
      },
      {
        title: 'Philosophie',
        image: '/images/phil.png',
        link: '/philosophie',
        keywords: ['philosophie', 'denken', 'ethik', 'sinn', 'existenz', 'philosophen', 'weisheit'],
      },
      {
        title: 'Psychologie',
        image: '/images/psych.png',
        link: '/psychologie',
        keywords: ['psychologie', 'seele', 'gefühle', 'verhalten', 'psyche', 'wahrnehmung', 'gehirn'],
      },
      {
        title: 'Religion',
        image: '/images/religion.png',
        link: '/religion',
        keywords: ['religion', 'glaube', 'kirche', 'christentum', 'islam', 'judentum', 'bibel', 'feste'],
      },
      {
        title: 'Ethik',
        image: '/images/ethik.png',
        link: '/ethik',
        keywords: ['ethik', 'moral', 'werte', 'entscheidungen', 'gesellschaft', 'gerechtigkeit'],
      },
      {
        title: 'Soziales & emotionales Lernen',
        image: '/images/sozialeslernen.png',
        link: '/soziales-und-emotionales-lernen',
        keywords: ['soziales lernen', 'gefühle', 'emotionen', 'zusammenleben', 'konflikte', 'selbstvertrauen', 'achtsamkeit'],
      },
      {
        title: 'Wichtige Persönlichkeiten',
        image: '/images/persoehnlichkeit.png',
        link: '/wichtige-persoenlichkeiten-der-geschichte',
        keywords: ['persönlichkeiten', 'geschichte', 'berühmtheiten', 'forscher', 'kopernikus', 'einstein', 'erfinder'],
      },
      {
        title: 'Sustainable Development Goals',
        image: '/images/umwelt.png',
        link: '/sustainable-development-goals',
        keywords: ['sdg', 'nachhaltigkeit', 'umwelt', 'klima', 'ziele', 'zukunft', 'naturschutz'],
      },
    ],
  },
  {
    category: 'Kunst',
    items: [
      {
        title: 'Musik',
        image: '/images/musik.png',
        link: '/musik',
        keywords: ['musik', 'noten', 'tonhöhe', 'rhythmus', 'klavier', 'instrumente', 'schlagzeug', 'komponisten', 'dur', 'moll'],
      },
      {
        title: 'Kunst & Künstler',
        image: '/images/kunst-1.png',
        link: '/kunst-und-kuenstler',
        keywords: ['kunst', 'künstler', 'malerei', 'farben', 'zeichnen', 'gemälde', 'kunststile'],
      },
    ],
  },
  {
    category: 'Technik & Mathematik',
    items: [
      {
        title: 'Technik',
        image: '/images/technik.png',
        link: '/technik',
        keywords: ['technik', 'werkzeuge', 'maschinen', 'erfindungen', 'bauen', 'konstruktion'],
      },
      {
        title: 'Mathematik',
        image: '/images/mathe.png',
        link: '/mathematik',
        keywords: ['mathematik', 'mathe', 'rechnen', 'geometrie', 'zahlen', 'brüche', 'terme', 'gleichungen', 'prozent', 'funktionen'],
      },
      {
        title: 'Medien & Informatik',
        image: '/images/informatik.png',
        link: '/medien-und-informatik',
        keywords: ['informatik', 'medien', 'computer', 'internet', 'hardware', 'software', 'programmierung', 'sicherheit', 'ki'],
      },
      {
        title: 'Medien',
        image: '/images/medien.png',
        link: '/medien',
        keywords: ['medien', 'zeitung', 'fernsehen', 'social media', 'nachrichten', 'werbung'],
      },
    ],
  },
  {
    category: 'Sprachen',
    items: [
      {
        title: 'Deutsch',
        image: '/images/deutsch.png',
        link: '/deutsch',
        keywords: ['deutsch', 'grammatik', 'rechtschreibung', 'zeitformen', 'satzglieder', 'kommasetzung', 'texte', 'lesen'],
      },
      {
        title: 'Englisch',
        image: '/images/englisch.png',
        link: '/englisch',
        keywords: ['englisch', 'english', 'grammar', 'tenses', 'vocabulary', 'vokabeln', 'irregular verbs', 'simple past'],
      },
    ],
  },
];
