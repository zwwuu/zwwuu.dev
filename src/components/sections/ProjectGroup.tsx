"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Transition, type Variants } from "motion/react";

import { Anchor } from "@/components";
import { type Project } from "@/data";

const PROJECT_CARD_INITIAL = {
  opacity: 0,
  scale: 0.95,
  y: 20,
};

const PROJECT_CARD_WHILE_IN_VIEW = {
  opacity: 1,
  scale: 1,
  y: 0,
};

const PROJECT_CARD_TRANSITION: Transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const PROJECT_BOTTOM_IMAGE_VARIANTS: Variants = {
  initial: {
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hovered: {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const PROJECT_TOP_IMAGE_VARIANTS: Variants = {
  initial: {
    x: 0,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hovered: {
    x: -4,
    y: -4,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

type ProjectProps = {
  project: Project;
};

export default function ProjectGroup({ project }: ProjectProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={"grid grid-cols-12"}
      initial={PROJECT_CARD_INITIAL}
      transition={PROJECT_CARD_TRANSITION}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={PROJECT_CARD_WHILE_IN_VIEW}
    >
      <div className={"col-span-full border-2 border-white bg-black md:col-span-5"}>
        <div className={"flex h-full flex-col"}>
          <div className={"px-6 pt-6"}>
            <div className={"float-right"}>{project.icon}</div>
            <h3 className={"fl-text-xl/3xl font-bold"}>{project.name}</h3>
            <p className={"mt-2 border-b border-dashed pb-2 fl-text-sm/base italic"}>{project.type}</p>
          </div>
          <div className={"grow space-y-6 p-6"}>
            <p>{project.description}</p>
            <div className={"flex flex-wrap gap-2"}>
              {project.tags.map((tag) => (
                <span
                  className={
                    "rounded-lg border border-white/20 px-3 py-1 font-mono fl-text-xs/base text-white/80 backdrop-blur-sm transition-colors hover:border-white"
                  }
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {(project.url || project.repo) && (
            <div className={"flex flex-wrap justify-around gap-4 px-6 py-4"}>
              {project.url && (
                <Anchor className="inline-block" href={project.url}>
                  View Project
                </Anchor>
              )}
              {project.repo && (
                <Anchor className="inline-block" href={project.repo}>
                  View Source
                </Anchor>
              )}
            </div>
          )}
        </div>
      </div>
      <div className={"col-span-full overflow-hidden border-2 border-white md:col-span-7"}>
        <a
          aria-label={project.name}
          className={"relative block w-full"}
          href={project.url}
          rel={"noopener noreferrer"}
          target={"_blank"}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            animate={hovered ? "hovered" : "initial"}
            className={"px-4 py-8"}
            variants={PROJECT_BOTTOM_IMAGE_VARIANTS}
          >
            <Image
              alt={project.images.large.alt}
              className={"rounded-lg object-contain object-top shadow-2xl shadow-black/50"}
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
                className={"mr-2 ml-auto w-1/3"}
                variants={PROJECT_TOP_IMAGE_VARIANTS}
              >
                <Image
                  alt={project.images.small.alt}
                  className={"rounded-lg object-contain object-top shadow-2xl shadow-black/50"}
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
