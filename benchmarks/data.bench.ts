import { bench } from "vitest";

import projects from "../src/data/projects";
import technologies from "../src/data/technologies";

// Benchmark data filtering operations
bench("filter projects by type", () => {
  projects.filter((project) => project.type === "web");
});

bench("filter projects by tag", () => {
  projects.filter((project) => project.tags.includes("Next.js"));
});

bench("find project by name", () => {
  projects.find((project) => project.name === "GH Stats");
});

// Benchmark data mapping operations
bench("map project names", () => {
  projects.map((project) => project.name);
});

bench("map technology names", () => {
  technologies.map((tech) => tech.name);
});

// Benchmark data sorting operations
bench("sort projects by name", () => {
  [...projects].sort((a, b) => a.name.localeCompare(b.name));
});

bench("sort technologies alphabetically", () => {
  [...technologies].sort((a, b) => a.name.localeCompare(b.name));
});

// Benchmark array operations
bench("get unique project tags", () => {
  const allTags = projects.flatMap((project) => project.tags);
  [...new Set(allTags)];
});

bench("count projects by type", () => {
  projects.reduce(
    (acc, project) => {
      acc[project.type] = (acc[project.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
});
