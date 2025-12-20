"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { IntroSection } from "@/components";

export default function AboutSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  });

  const x = useTransform(scrollYProgress, [0.1, 0.25], ["25%", "0%"]);

  return (
    <section className={"min-h-screen scroll-mt-16 py-8"} id={"about"} ref={targetRef}>
      <div className={"sticky top-0 container mx-auto h-full px-4"}>
        <motion.div className={"flex h-full flex-col justify-center"} style={{ x }}>
          <IntroSection />
        </motion.div>
      </div>
    </section>
  );
}
