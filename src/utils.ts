import type { CollectionEntry } from 'astro:content';

export type Progetto = CollectionEntry<'progetti'>;

const MESI = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];

// Costruisce un indirizzo che funziona anche quando il sito sta in una sottocartella (GitHub Pages).
export function url(percorso = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${percorso.replace(/^\//, '')}`;
}

function formatta(d: string): string {
  const [anno, mese] = d.split('-');
  return mese ? `${MESI[Number(mese) - 1]} ${anno}` : anno;
}

export function periodo(p: Progetto): string {
  const { inizio, fine } = p.data;
  return `${formatta(inizio)} – ${fine ? formatta(fine) : 'in corso'}`;
}

// Normalizza i tag: minuscolo e senza spazi extra, così "R" e "r " sono lo stesso filtro.
export function normalizza(tag: string): string {
  return tag.trim().toLowerCase();
}

// Ordina dal più recente: per data di inizio, a parità per titolo.
export function ordina(lista: Progetto[]): Progetto[] {
  const chiave = (d: string) => (d.length === 4 ? `${d}-00` : d);
  return [...lista].sort(
    (a, b) =>
      chiave(b.data.inizio).localeCompare(chiave(a.data.inizio)) ||
      a.data.titolo.localeCompare(b.data.titolo),
  );
}
