import { type ReactNode } from "react";
import { HTMLMotionProps, motion, type Transition, type Variants } from "motion/react";

const BUTTON_VARIANTS: Variants = {
  initial: {
    backgroundColor: "var(--color-white)",
    color: "var(--color-black)",
  },
  tap: {
    scale: 0.95,
  },
  hover: {
    backgroundColor: "var(--color-black)",
    color: "var(--color-white)",
  },
};

const BUTTON_TRANSITION: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <motion.button
      className={"w-full cursor-pointer items-center justify-center rounded-lg border-2 px-6 py-4 font-bold uppercase"}
      initial={"initial"}
      transition={BUTTON_TRANSITION}
      variants={BUTTON_VARIANTS}
      whileFocus={"hover"}
      whileHover={"hover"}
      whileTap={"tap"}
      {...props}
    >
      {children}
    </motion.button>
  );
}
