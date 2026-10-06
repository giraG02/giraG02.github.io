import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Accetta "2026-03" oppure "2026" (YAML lo legge come numero) e lo normalizza a testo.
const data = z
  .union([z.string(), z.number()])
  .transform((v) => String(v))
  .refine((v) => /^\d{4}(-(0[1-9]|1[0-2]))?$/.test(v), {
    message: 'Usa il formato AAAA-MM (es. 2026-03) oppure AAAA (es. 2026)',
  });

const progetti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/progetti' }),
  schema: z.object({
    titolo: z.string().min(1),
    tipo: z.enum(['universitario', 'tesi', 'personale', 'lavoro']),
    inizio: data,
    fine: data.optional(),
    strumenti: z.array(z.string()).min(1),
    ruolo: z.string().min(1),
    risultato: z.string().min(1),
    tag: z.array(z.string()).default([]),
    link: z.array(z.object({ etichetta: z.string(), url: z.string() })).default([]),
    report: z.string().optional(),
    immagine: z.string().optional(),
    in_evidenza: z.boolean().default(false),
    bozza: z.boolean().default(false),
  }),
});

export const collections = { progetti };
