import { type ReactNode } from "react";
import { motion, type Transition } from "motion/react";

const OVERLAY_TRANSITION: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};

type OverlayProps = {
  children: ReactNode;
};

export default function Overlay({ children }: OverlayProps) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className={"absolute inset-0 flex items-center justify-center"}
      initial={{ opacity: 0 }}
      transition={OVERLAY_TRANSITION}
    >
      <div className={"absolute -inset-4 z-10 backdrop-blur"} />
      <div className={"relative z-20"}>
        <div className={"flex flex-col items-center justify-center space-y-4 rounded-lg bg-black/80 p-8"}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
