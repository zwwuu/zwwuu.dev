"use client";

import Link from "next/link";
import { IconMessageCircle, IconPackages, IconUser } from "@tabler/icons-react";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "motion/react";

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
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity);
  const y = useTransform(smoothVelocity, [-1000, 0, 1000], [3, 0, -3]);

  return (
    <div className="relative z-50">
      <div className={"pointer-events-none fixed inset-x-0 top-1 flex justify-center md:inset-x-1 md:justify-end"}>
        <motion.nav
          className={
            "pointer-events-auto flex items-center rounded-lg border border-white/10 shadow-lg shadow-black backdrop-blur-md backdrop-brightness-50 md:flex-col"
          }
          style={{ y }}
        >
          {links.map(({ href, title, icon }) => {
            return (
              <Link
                className={
                  "inline-flex items-center justify-center p-4 transition-all hover:scale-110 hover:text-primary focus:scale-110 focus:text-primary"
                }
                href={href}
                key={href}
                title={title}
              >
                {icon}
              </Link>
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
}
