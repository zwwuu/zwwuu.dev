import { useEffect, useState } from "react";

const Title = () => {
  const titles = [
    "Web Developer",
    "Gamer",
    "Software Engineer",
    "New Yorker",
    "Coder",
    "Crypto Enthusiast",
    "Freelancer",
    "Techie",
    "Geek",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <span
      key={index}
      className={
        "relative mt-4 block flex w-full animate-bounce cursor-pointer select-none text-3xl transition-colors before:absolute before:top-1 before:-left-1 before:flex before:h-2.5 before:w-2.5 before:animate-ping before:rounded before:bg-accent"
      }
      onClick={() => {
        setIndex((prev) => (prev + 1) % titles.length);
      }}
    >
      {titles[index]}
    </span>
  );
};

export default Title;
