import { ReactNode, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

type AnchorProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export default function Anchor({ children, className, href }: AnchorProps) {
  const variants = {
    initial: {
      height: "5%",
      width: "1ch",
      opacity: 1,
    },
    hovered: {
      height: "25%",
      width: "100%",
      opacity: 0.5,
    },
  };
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  const [hovered, setHovered] = useState(false);
  const rootClass = clsx("relative inline-block", className);

  return (
    <Link
      className={rootClass}
      href={href}
      prefetch={!isExternal}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        animate={hovered ? "hovered" : "initial"}
        className={"absolute inset-x-0 bottom-0 block rounded bg-primary"}
        variants={variants}
      />
      {children}
    </Link>
  );
}
