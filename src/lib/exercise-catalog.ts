import { biologieTopics } from './biologie-data';
import { chemieTopics } from './chemie-data';
import { deutschTopics } from './deutsch-data';
import { englischTopics } from './englisch-data';
import { ernaehrungTopics } from './ernaehrung-data';
import { ethikTopics } from './ethik-data';
import { geographieTopics } from './geographie-data';
import { geschichteTopics } from './geschichte-data';
import { hauswirtschaftTopics } from './hauswirtschaft-data';
import { informatikTopics } from './informatik-data';
import { klimaTopics } from './klima-data';
import { kunstTopics } from './kunst-data';
import { lehrberufeTopics } from './lehrberufe-data';
import { mathTopics } from './math-data';
import { medienTopics } from './medien-data';
import { musikTopics } from './musik-data';
import { persoenlichkeitenTopics } from './persoenlichkeiten-data';
import { philosophieTopics } from './philosophie-data';
import { physikTopics } from './physik-data';
import { politikTopics } from './politik-data';
import { psychologieTopics } from './psychologie-data';
import { religionTopics } from './religion-data';
import { sozialesLernenTopics } from './soziales-lernen-data';
import { technikTopics } from './technik-data';
import { verkehrTopics } from './verkehr-data';
import { wirtschaftTopics } from './wirtschaft-data';

export interface CatalogExercise {
  id: string;
  title: string;
  subject: string;
  subjectSlug: string;
  topicTitle: string;
  topicSlug: string;
  url: string;
}

interface TopicDataLike {
  title: string;
  slug: string;
  exercises?: { id: string; title: string; folder?: string }[];
}

const allSubjectDatasets: { subject: string; subjectSlug: string; topics: Record<string, TopicDataLike> }[] = [
  { subject: 'Biologie', subjectSlug: 'biologie', topics: biologieTopics as Record<string, TopicDataLike> },
  { subject: 'Chemie', subjectSlug: 'chemie', topics: chemieTopics as Record<string, TopicDataLike> },
  { subject: 'Deutsch', subjectSlug: 'deutsch', topics: deutschTopics as Record<string, TopicDataLike> },
  { subject: 'Englisch', subjectSlug: 'englisch', topics: englischTopics as Record<string, TopicDataLike> },
  { subject: 'Ernährung', subjectSlug: 'ernaehrung', topics: ernaehrungTopics as Record<string, TopicDataLike> },
  { subject: 'Ethik', subjectSlug: 'ethik', topics: ethikTopics as Record<string, TopicDataLike> },
  { subject: 'Geographie', subjectSlug: 'geographie', topics: geographieTopics as Record<string, TopicDataLike> },
  { subject: 'Geschichte', subjectSlug: 'geschichte', topics: geschichteTopics as Record<string, TopicDataLike> },
  { subject: 'Hauswirtschaft', subjectSlug: 'hauswirtschaft', topics: hauswirtschaftTopics as Record<string, TopicDataLike> },
  { subject: 'Informatik', subjectSlug: 'informatik', topics: informatikTopics as Record<string, TopicDataLike> },
  { subject: 'Klima & Umwelt', subjectSlug: 'sustainable-development-goals', topics: klimaTopics as Record<string, TopicDataLike> },
  { subject: 'Kunst & Künstler', subjectSlug: 'kunst-und-kuenstler', topics: kunstTopics as Record<string, TopicDataLike> },
  { subject: 'Lehrberufe', subjectSlug: 'lehrberufe', topics: lehrberufeTopics as Record<string, TopicDataLike> },
  { subject: 'Mathematik', subjectSlug: 'mathematik', topics: mathTopics as Record<string, TopicDataLike> },
  { subject: 'Medien', subjectSlug: 'medien', topics: medienTopics as Record<string, TopicDataLike> },
  { subject: 'Musik', subjectSlug: 'musik', topics: musikTopics as Record<string, TopicDataLike> },
  { subject: 'Wichtige Persönlichkeiten', subjectSlug: 'wichtige-persoenlichkeiten-der-geschichte', topics: persoenlichkeitenTopics as Record<string, TopicDataLike> },
  { subject: 'Philosophie', subjectSlug: 'philosophie', topics: philosophieTopics as Record<string, TopicDataLike> },
  { subject: 'Physik', subjectSlug: 'physik', topics: physikTopics as Record<string, TopicDataLike> },
  { subject: 'Politik & Gesellschaft', subjectSlug: 'politik-und-gesellschaft', topics: politikTopics as Record<string, TopicDataLike> },
  { subject: 'Psychologie', subjectSlug: 'psychologie', topics: psychologieTopics as Record<string, TopicDataLike> },
  { subject: 'Religion', subjectSlug: 'religion', topics: religionTopics as Record<string, TopicDataLike> },
  { subject: 'Soziales & emotionales Lernen', subjectSlug: 'soziales-und-emotionales-lernen', topics: sozialesLernenTopics as Record<string, TopicDataLike> },
  { subject: 'Technik', subjectSlug: 'technik', topics: technikTopics as Record<string, TopicDataLike> },
  { subject: 'Freiwillige Fahrradprüfung', subjectSlug: 'die-freiwillige-fahrradpruefung', topics: verkehrTopics as Record<string, TopicDataLike> },
  { subject: 'Wirtschaft', subjectSlug: 'wirtschaft', topics: wirtschaftTopics as Record<string, TopicDataLike> },
];

let cachedExercises: CatalogExercise[] | null = null;
let exerciseMap: Map<string, CatalogExercise> | null = null;

export function getAllExercises(): CatalogExercise[] {
  if (cachedExercises) return cachedExercises;

  const list: CatalogExercise[] = [];
  const seen = new Set<string>();

  for (const { subject, subjectSlug, topics } of allSubjectDatasets) {
    for (const [topicKey, topic] of Object.entries(topics)) {
      const topicSlug = topic.slug || topicKey;
      if (!Array.isArray(topic.exercises)) continue;

      for (const ex of topic.exercises) {
        if (!ex.id || seen.has(ex.id)) continue;
        seen.add(ex.id);

        list.push({
          id: ex.id,
          title: ex.title || `Übung ${ex.id}`,
          subject,
          subjectSlug,
          topicTitle: topic.title || topicSlug,
          topicSlug,
          url: `/${ex.id}`,
        });
      }
    }
  }

  // Sort alphabetically by subject then title
  list.sort((a, b) => a.subject.localeCompare(b.subject, 'de') || a.title.localeCompare(b.title, 'de'));

  cachedExercises = list;
  exerciseMap = new Map(list.map((e) => [e.id, e]));

  return list;
}

export function getExerciseById(id: string): CatalogExercise | null {
  if (!exerciseMap) getAllExercises();
  return exerciseMap?.get(id) || null;
}
