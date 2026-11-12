// The job book's order and names, shared by the Work page and the case
// studies (which use it to suggest the next piece).
import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>;

// The lead proofs, in the order they are shown on /work.
export const LEADS = ['optum', 'nielseniq', 'dclt-donor-pipeline', 'dclt-preserve-explorer'];

export const kindName: Record<string, string> = {
  'Web & Systems': 'Maps, tools & systems',
  'Design Systems': 'Design system',
  'UI/UX': 'Product & web design',
  'Branding': 'Brand',
  'Print': 'Print',
};

/** Listed projects split as /work shows them: the leads, then the ledger, newest first. */
export function jobBook(projects: Project[]) {
  const listed = projects.filter((p) => !p.data.draft && !p.data.unlisted);
  const leads = LEADS.map((id) => listed.find((p) => p.id === id)).filter((p): p is Project => !!p);
  const ledger = listed
    .filter((p) => !LEADS.includes(p.id))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return { leads, ledger };
}

/**
 * The piece a case study points to when it ends: its own `next` if set,
 * otherwise the one after it in the book (wrapping to the first). An unlisted
 * piece with no `next` points to the first lead.
 */
export function nextProject(project: Project, projects: Project[]): Project | undefined {
  const { leads, ledger } = jobBook(projects);
  const book = [...leads, ...ledger];
  if (project.data.next) {
    const chosen = projects.find((p) => p.id === project.data.next && !p.data.draft);
    if (chosen) return chosen;
  }
  const others = book.filter((p) => p.id !== project.id);
  if (!others.length) return undefined;
  const i = book.findIndex((p) => p.id === project.id);
  return i === -1 ? others[0] : book[(i + 1) % book.length];
}
