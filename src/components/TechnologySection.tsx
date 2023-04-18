import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import technologies from "~/data/technologies";
import Technology from "./Technology";

export default function TechnologySection() {
  const [selected, setSelected] = useState(0);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  });

  const sideHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.1]);
  const x = useTransform(scrollYProgress, [0.1, 0.25], ["25%", "0%"]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setSelected(Math.floor(Math.random() * technologies.length));
    }, 2000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <section className={"h-[150vh]"} ref={targetRef}>
      <div className={"container sticky top-0 mx-auto h-screen px-4 pb-8 pt-16 md:pt-8"}>
        <motion.div className={"relative flex h-full"} style={{ opacity, x }}>
          <div className={"flex flex-col font-bold text-primary [writing-mode:vertical-lr]"}>
            <motion.div className={"w-1 rounded bg-white"} style={{ height: sideHeight }} />
            <div>technologies.</div>
          </div>
          <div className={"ml-1 h-full flex-grow"}>
            <div className={"grid h-full grid-cols-12 items-center justify-items-center"}>
              {technologies.map((technology, index) => (
                <div className={"col-span-6 h-full w-full sm:col-span-3"} key={technology.name}>
                  <Technology icon={technology.icon} name={technology.name} selected={selected === index} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
