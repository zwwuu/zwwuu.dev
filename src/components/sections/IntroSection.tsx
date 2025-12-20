"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Transition } from "motion/react";

import titles from "@/data/titles";

export default function IntroSection() {
  const [index, setIndex] = useState(0);
  const smooth: Transition = { duration: 0.35, ease: "easeInOut" };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"container mx-auto px-4"}>
      <p className={"mb-12 fl-text-4xl/6xl font-bold"}>
        <span className={"mb-4 block"}>{"I'm A "}</span>
        <span className={"block"}>
          <AnimatePresence mode={"popLayout"}>
            <motion.span
              animate={{ opacity: 1, y: 0 }}
              className={"relative block"}
              exit={{ opacity: 0, y: 100 }}
              initial={{ opacity: 0, y: -100 }}
              key={index}
              transition={{ ...smooth, duration: 0.5 }}
            >
              {titles[index]}
              <motion.span
                animate={{ opacity: [1, 0.5, 1], scale: [1, 1.3, 1] }}
                className={"text-primary"}
                transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
              >
                .
              </motion.span>
            </motion.span>
          </AnimatePresence>
        </span>
      </p>
      <div className={"space-y-6"}>
        <h1 className={"fl-text-2xl/4xl"}>
          {"Hello, my name is "}
          <span
            className={
              "relative font-serif font-bold " +
              "after:absolute after:inset-x-0 after:bottom-0 after:block after:h-1/12 after:w-full after:bg-primary after:transition-all " +
              "hover:after:h-2/4 hover:after:opacity-30 " +
              "focus:after:h-2/4 focus:after:opacity-30"
            }
          >
            zwwuu
          </span>
          . Nice to meet you!
        </h1>
        <p>
          I am a passionate Software Engineer who transforms ideas into digital experiences. I specialize in building
          modern web applications using React, Next.js, Node.js, and TypeScript, with experience across the full stack.
        </p>
        <p>
          I am constantly exploring new technologies and best practices, always eager to push the boundaries of what is
          possible and create solutions that make a difference.
        </p>
      </div>
    </div>
  );
}
