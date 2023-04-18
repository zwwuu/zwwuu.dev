import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import IProject from "~/types/IProject";
import Anchor from "./Anchor";

type ProjectProps = {
  project: IProject;
};

export default function Project({ project }: ProjectProps) {
  const [hovered, setHovered] = useState(false);
  const topImageVariants = {
    initial: {
      x: 0,
      y: 0,
    },
    hovered: {
      x: -4,
      y: -4,
    },
  };

  const bottomImageVariants = {
    initial: {
      scale: 1,
    },
    hovered: {
      scale: 1.02,
    },
  };

  return (
    <motion.div
      className={"grid grid-cols-12"}
      initial={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <div className={"col-span-full border-2 bg-black md:col-span-5"}>
        <div className={"flex h-full flex-col"}>
          <div className={"px-4 pt-4"}>
            <div className={"float-right"}>{project.icon}</div>
            <h3 className={"font-medium text-lg"}>{project.name}</h3>
            <p className={"border-b border-dashed italic text-xs"}>{project.type}</p>
          </div>
          <div className={"flex-grow space-y-4 p-4"}>
            <p>{project.description}</p>
            <div className={"flex flex-wrap gap-2"}>
              {project.tags.map((tag) => (
                <span className={"border-b font-mono text-xs"} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {(project.url || project.repo) && (
            <div className={"flex flex-wrap justify-around border-t px-4 py-2"}>
              {project.url && <Anchor href={project.url}>View</Anchor>}
              {project.repo && <Anchor href={project.repo}>Source</Anchor>}
            </div>
          )}
        </div>
      </div>
      <div className={"col-span-full overflow-hidden border-2 md:col-span-7"}>
        <a
          aria-label={project.name}
          className={"relative block w-full"}
          href={project.url}
          rel={"noopener noreferrer"}
          target={"_blank"}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div animate={hovered ? "hovered" : "initial"} className={"px-4 py-8"} variants={bottomImageVariants}>
            <Image
              alt={project.images.large.alt}
              className={"rounded object-contain object-top shadow shadow-black"}
              height={project.images.large.src.height}
              placeholder={"blur"}
              src={project.images.large.src}
              width={project.images.large.src.width}
            />
          </motion.div>
          {project.images.small && (
            <div className={"absolute inset-0 p-4"}>
              <motion.div
                animate={hovered ? "hovered" : "initial"}
                className={"ml-auto mr-2 w-1/3"}
                variants={topImageVariants}
              >
                <Image
                  alt={project.images.small.alt}
                  className={"rounded object-contain object-top shadow shadow-black"}
                  height={project.images.small.src.height}
                  src={project.images.small.src}
                  width={project.images.small.src.width}
                />
              </motion.div>
            </div>
          )}
        </a>
      </div>
    </motion.div>
  );
}
