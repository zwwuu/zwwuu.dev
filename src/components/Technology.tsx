import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

type TechnologyProps = {
  name: string;
  icon: ReactNode;
  selected: boolean;
};

export default function Technology({ name, icon, selected }: TechnologyProps) {
  const [hovered, setHovered] = useState(false);

  const variants = {
    initial: {
      rotateY: 180,
      opacity: 0,
      transition: { duration: 0.35 },
    },
    hovered: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.35 },
    },
  };

  return (
    <div
      className={"relative flex h-full items-center"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={hovered || selected ? "initial" : "hovered"}
        className={"absolute inset-0 flex items-center justify-center"}
        variants={variants}
      >
        {icon}
      </motion.div>
      <motion.div
        animate={hovered || selected ? "hovered" : "initial"}
        className={"absolute inset-0 flex items-center justify-center font-bold text-primary text-sm"}
        variants={variants}
      >
        {name}
      </motion.div>
    </div>
  );
}
