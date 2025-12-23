import { bench, describe } from "vitest";

import projects from "../src/data/projects";
import technologies from "../src/data/technologies";

describe("Data filtering benchmarks", () => {
  bench("filter projects by tag", () => {
    const filtered = projects.filter((project) => project.tags.includes("Next.js"));
    return filtered;
  });

  bench("filter projects by type", () => {
    const filtered = projects.filter((project) => project.type === "web");
    return filtered;
  });

  bench("find technology by name", () => {
    const tech = technologies.find((t) => t.name === "TypeScript");
    return tech;
  });
});

describe("Data sorting benchmarks", () => {
  bench("sort projects by name", () => {
    const sorted = [...projects].sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  });

  bench("sort technologies alphabetically", () => {
    const sorted = [...technologies].sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  });
});

describe("Data transformation benchmarks", () => {
  bench("map project names", () => {
    const names = projects.map((p) => p.name);
    return names;
  });

  bench("map project tags", () => {
    const allTags = projects.flatMap((p) => p.tags);
    return allTags;
  });

  bench("get unique tags", () => {
    const allTags = projects.flatMap((p) => p.tags);
    const uniqueTags = [...new Set(allTags)];
    return uniqueTags;
  });
});
