import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { Project } from "./lib/projects";

const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: Project,
});

export const collections = { projects };
