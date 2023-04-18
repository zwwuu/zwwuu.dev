import { IconExternalLink } from "@tabler/icons-react";

import projects from "~/data/projects";
import Anchor from "./Anchor";
import Project from "./Project";

export default function ProjectSection() {
  return (
    <section className={"scroll-mt-16 py-8"} id={"projects"}>
      <div className={"container mx-auto px-4"}>
        <h2 className={"mb-6 text-center font-bold uppercase text-3xl"}>Projects</h2>
        <div className={"flex flex-col"}>
          <div className={"mb-12 space-y-8"}>
            {projects.map((project) => (
              <Project key={project.name} project={project} />
            ))}
          </div>
          <div className={"flex justify-center"}>
            <Anchor
              className={"flex items-center border-t-2 border-dotted py-2 text-right font-bold uppercase text-xl"}
              href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
            >
              <span className={"mr-2"}>More on GitHub</span>
              <IconExternalLink />
            </Anchor>
          </div>
        </div>
      </div>
    </section>
  );
}
