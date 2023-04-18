import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import titles from "~/data/titles";

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [nameHovered, setNameHovered] = useState(false);

  const variants = {
    initial: {
      height: "0.25rem",
      opacity: 1,
    },
    hovered: {
      height: "40%",
      opacity: 0.3,
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={"container"}>
      <div className={"max-w-2xl"}>
        <p className={"mb-12 font-semibold text-3xl"}>
          <span className={"mb-4 block"}>{"I'm A "}</span>
          <span className={"block"}>
            <AnimatePresence mode={"popLayout"}>
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                className={"relative block text-2xl"}
                exit={{ opacity: 0, y: 100 }}
                initial={{ opacity: 0, y: -100 }}
                key={index}
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1], scale: [1, 1.5, 1] }}
                  className={"absolute -left-1 top-1 block h-2 w-2 rounded-full bg-primary"}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                  }}
                />
                {titles[index]}.
              </motion.span>
            </AnimatePresence>
          </span>
        </p>
        <div className={"space-y-4"}>
          <h1 className={"text-xl"}>
            {"Hello, my name is "}
            <span
              className={"relative font-serif font-semibold"}
              onMouseEnter={() => setNameHovered(true)}
              onMouseLeave={() => setNameHovered(false)}
            >
              <motion.span
                animate={nameHovered ? "hovered" : "initial"}
                className={"absolute inset-x-0 bottom-0 block w-full bg-primary"}
                variants={variants}
              />
              zwwuu
            </span>
            . Nice to meet you!
          </h1>
          <p>
            {
              "I'm a Software Engineer that codes for fun and passion. I've worked with several technologies like React, Node.js, WordPress, and PHP."
            }
          </p>
          <p>
            {"I love learning new things and always strive to stay up-to-date with the "}
            <span className={"font-bold"}>latest trends and technologies.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
