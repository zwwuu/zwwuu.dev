import { IconExternalLink } from "@tabler/icons-react";

import { Anchor, ProjectGroup } from "@/components";
import projects from "@/data/projects";

export default function ProjectSection() {
  return (
    <section className={"scroll-mt-16 py-16"} id={"projects"}>
      <div className={"container mx-auto px-4"}>
        <h2 className={"mb-8 text-center fl-text-4xl/6xl font-bold tracking-wider uppercase"}>Projects</h2>
        <div className={"mb-8 flex flex-col"}>
          <div className={"mb-16 space-y-12"}>
            {projects.map((project) => (
              <ProjectGroup key={project.name} project={project} />
            ))}
          </div>
          <div className={"flex justify-center"}>
            <Anchor
              className={"flex items-center gap-2 border-t-2 border-dotted py-4 fl-text-2xl/4xl font-bold uppercase"}
              href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
            >
              <span>More on GitHub</span>
              <IconExternalLink size={20} />
            </Anchor>
          </div>
        </div>
      </div>
    </section>
  );
}
