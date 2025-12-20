"use client";

import { useEffect, useRef, useState } from "react";
import { IconArrowBigDownLines } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "motion/react";

import subjects from "@/data/subjects";

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const fastOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const position = useTransform(scrollYProgress, (progress) => {
    return progress === 1 ? "relative" : "fixed";
  });

  useEffect(() => {
    if (subIndex === subjects[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 0);
      return;
    }

    if (subIndex === 0 && reverse) {
      setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % subjects.length);
      }, 0);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 280);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className={"flex h-screen flex-col justify-around py-8"} ref={ref}>
      <div className={"relative container mx-auto px-4 text-center"}>
        <motion.div className={"inset-x-0 top-1/2 -translate-y-1/2"} style={{ position }}>
          <motion.p className={"fl-text-7xl/9xl font-bold tracking-widest"} style={{ scale, opacity }}>
            Hello;
          </motion.p>
          <motion.p
            className={"mt-8 fl-text-lg/2xl underline decoration-primary/50 decoration-dotted underline-offset-4"}
            style={{ opacity: fastOpacity }}
          >
            <span>{subjects[index].substring(0, subIndex)}</span>
            <motion.span
              animate={{ opacity: [1, 0.1, 1] }}
              className={"ml-px inline-block"}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
              |
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
      <div className={"container mx-auto mt-auto px-4"}>
        <motion.div className={"flex items-center justify-center text-center"} style={{ opacity: fastOpacity }}>
          <motion.div animate={{ y: [-5, 0, -5] }} transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}>
            <IconArrowBigDownLines size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
