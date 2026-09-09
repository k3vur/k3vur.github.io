import { z } from "astro/zod";

export const Project = z.object({
  title: z.string(),
  url: z.url(),
  description: z.string(),
  technologies: z.array(z.string()),
  year: z.number().min(2000).max(2100),
});

export type Project = z.infer<typeof Project>;
