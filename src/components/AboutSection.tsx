import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Intro from "./Intro";

export default function AboutSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.9, 1], [0, 1, 1, 0.1]);
  const x = useTransform(scrollYProgress, [0.1, 0.25], ["25%", "0%"]);

  return (
    <section className={"h-[120vh] scroll-mt-16"} id={"about"} ref={targetRef}>
      <div className={"container sticky top-0 mx-auto h-screen px-4 py-8"}>
        <motion.div className={"flex h-full flex-col justify-center"} style={{ opacity: opacity, x: x }}>
          <Intro />
        </motion.div>
      </div>
    </section>
  );
}
