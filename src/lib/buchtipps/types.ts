export type BuchCategory = 
  | 'digitales-lernen' 
  | 'medienerziehung' 
  | 'ki-im-unterricht' 
  | 'smartphone-balance' 
  | 'unterrichtspraxis';

export interface CategoryInfo {
  id: BuchCategory;
  label: string;
  description: string;
}

export const BUCH_CATEGORIES: CategoryInfo[] = [
  { id: 'digitales-lernen', label: 'Digitales Lernen & Schule', description: 'Konzepte und Praxistipps für die zeitgemäße Schule im digitalen Wandel.' },
  { id: 'medienerziehung', label: 'Medienerziehung & Familie', description: 'Wie Kinder und Jugendliche einen gesunden Umgang mit Medien lernen.' },
  { id: 'ki-im-unterricht', label: 'KI im Unterricht', description: 'Chancen, Werkzeuge und Methoden für Künstliche Intelligenz in der Schule.' },
  { id: 'smartphone-balance', label: 'Smartphone & Bildschirmzeit', description: 'Wissenschaftliche Einblicke und Orientierungshilfen zur Bildschirmzeit.' },
  { id: 'unterrichtspraxis', label: 'Praxis & Methoden', description: 'Konkrete Unterrichtsideen, Methoden und digitale Werkzeuge im Klassenzimmer.' },
];

export interface BuchTipp {
  id: string;
  title: string;
  subtitle?: string;
  authorName: string;
  isbn: string; // ISBN-13
  publishYear?: number;
  pages?: number;
  publisher?: string;
  category: BuchCategory;
  summary: string; // Eigenständig formulierte Inhaltsangabe (Rechtssicher)
  whyRecommended: string; // Warum empfehlenswert für Lehrkräfte und Pädagogen
  targetAudience: string; // z.B. Grundschule, Sek I/II, Kollegium, Eltern
  topics: string[];
  coverId?: number; // Open Library Cover-ID
}
