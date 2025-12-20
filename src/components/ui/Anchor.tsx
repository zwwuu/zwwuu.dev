import { type ReactNode } from "react";
import Link from "next/link";

type AnchorProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

export default function Anchor({ children, className, href }: AnchorProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  return (
    <Link
      className={
        "relative " +
          "after:absolute after:inset-x-0 after:bottom-0 after:block after:h-1/12 after:w-[1ch] after:rounded-md after:bg-primary after:transition-all " +
          "hover:after:h-1/4 hover:after:w-full hover:after:opacity-50 " +
          "focus:after:h-1/4 focus:after:w-full focus:after:opacity-50 " +
          className || ""
      }
      href={href}
      prefetch={!isExternal}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {children}
    </Link>
  );
}
