import { motion } from "framer-motion";

export default function Button({ ...props }) {
  const variants = {
    initial: {
      backgroundColor: "#fffefa",
      color: "#040404",
    },
    tap: {
      scale: 0.9,
    },
    hover: {
      backgroundColor: "#040404",
      color: "#fffefa",
    },
  };

  return (
    <motion.button
      className={"flex w-full items-center justify-center rounded border-2 border-current px-6 py-4 uppercase"}
      initial={"initial"}
      transition={{ type: "spring", bounce: 0.3 }}
      variants={variants}
      whileFocus={"hover"}
      whileHover={"hover"}
      whileTap={"tap"}
      {...props}
    />
  );
}
