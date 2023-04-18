import React from "react";
import Link from "next/link";
import { IconMessageCircle, IconPackages, IconUser } from "@tabler/icons-react";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

const MotionLink = motion(Link);

const links = [
  {
    href: "/#about",
    title: "About",
    icon: <IconUser />,
  },
  {
    href: "/#projects",
    title: "Projects",
    icon: <IconPackages />,
  },
  {
    href: "/#contact",
    title: "Contact",
    icon: <IconMessageCircle />,
  },
];

export default function Navbar() {
  const variants = {
    initial: {
      color: "#fffefa",
    },
    hovered: {
      color: "#ED8A63",
    },
  };

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity);
  const y = useTransform(smoothVelocity, [-1000, 0, 1000], [3, 0, -3], { clamp: false });

  return (
    <div className={"pointer-events-none fixed inset-x-0 top-1 z-50 flex justify-center md:justify-end"}>
      <motion.nav
        className={
          "backdrop pointer-events-auto flex items-center rounded bg-black/5 backdrop-blur backdrop-brightness-50 md:flex-col"
        }
        style={{ y }}
      >
        {links.map(({ href, title, icon }) => {
          return (
            <MotionLink
              className={"p-4"}
              href={href}
              initial={"initial"}
              key={href}
              title={title}
              variants={variants}
              whileFocus={"hovered"}
              whileHover={"hovered"}
            >
              {icon}
            </MotionLink>
          );
        })}
      </motion.nav>
    </div>
  );
}
