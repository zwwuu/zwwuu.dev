import { type ReactNode } from "react";
import Link from "next/link";

type SocialButtonProps = {
  href: string;
  icon: ReactNode;
  title: string;
};

export default function SocialButton({ href, icon, title }: SocialButtonProps) {
  return (
    <Link
      className={
        "rounded-lg border border-white/10 p-3 transition-all " +
        "hover:scale-105 hover:border-white/20 " +
        "focus:scale-105 focus:border-white/20"
      }
      href={href}
      rel={"noopener noreferrer"}
      target={"_blank"}
      title={title}
    >
      {icon}
    </Link>
  );
}
