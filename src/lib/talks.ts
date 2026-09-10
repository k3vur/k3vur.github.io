import { z } from "astro/zod";

export const TalkBase = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  year: z.int().min(2000).max(2100),
  language: z.enum(["de", "en"]),
});

export const TalkRevealJs = TalkBase.extend({
  type: z.literal("reveal"),
});

export const TalkPdf = TalkBase.extend({
  type: z.literal("pdf"),
  path: z.string(),
});

export const Talk = z.discriminatedUnion("type", [TalkRevealJs, TalkPdf]);

export type TalkRevealJs = z.infer<typeof TalkRevealJs>;
export type TalkPdf = z.infer<typeof TalkPdf>;
export type Talk = z.infer<typeof Talk>;
