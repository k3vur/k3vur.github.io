import { file, glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { Project } from "@/lib/projects";
import { Talk } from "@/lib/talks";

const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: Project,
});

const talks = defineCollection({
  loader: glob({ base: "src/content/talks/", pattern: "**/*.md" }),
  schema: Talk,
});

export const collections = { projects, talks };
