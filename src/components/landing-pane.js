import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";

const LandingPane = () => {
  const words = useMemo(
    () => [
      "stranger",
      "digital traveler",
      "web surfer",
      "netizen",
      "internet explorer",
      "cybernaut",
      " cyberspace voyager",
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 300);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <div
      id={"landing"}
      className="flex min-h-screen flex-col items-center justify-center bg-primary text-center text-black"
    >
      <div className="mx-auto mt-auto w-full max-w-screen-lg px-4 py-8">
        <h1
          className="mb-8 inline-flex flex-col text-7xl font-bold tracking-wider
        before:animate-tilt-in-br before:self-start before:font-mono before:text-xs before:tracking-normal before:opacity-60 before:content-['<h1>']
        after:animate-tilt-in-tl after:self-end after:font-mono after:text-xs after:tracking-normal after:opacity-60 after:content-['</h1>']"
        >
          Hello;
        </h1>
        <p className="text-md">
          {"Welcome to my site, "}
          <span className='underline decoration-dotted underline-offset-1 after:ml-px after:animate-blink after:content-["|"]'>
            {words[index].substring(0, subIndex)}
          </span>
        </p>
      </div>
      <div className="mx-auto mt-auto w-full max-w-screen-xl px-4 py-8">
        <p className="mb-4 flex cursor-default items-center justify-center text-xs font-bold uppercase">
          <span className="animate-slide-in-blurred-top p-2 transition-transform hover:-translate-y-3 ">s</span>
          <span className="animate-slide-in-blurred-top p-2 transition-transform hover:-translate-y-3 ">c</span>
          <span className="animate-slide-in-blurred-top p-2 transition-transform hover:-translate-y-3 ">r</span>
          <span className="animate-slide-in-blurred-top p-2 transition-transform hover:-translate-y-3 ">o</span>
          <span className="animate-slide-in-blurred-top p-2 transition-transform hover:-translate-y-3 ">o</span>
          <span className="animate-slide-in-blurred-top p-2 transition-transform hover:-translate-y-3 ">l</span>
          <span className="animate-slide-in-blurred-top p-2 transition-transform hover:-translate-y-3 ">l</span>
        </p>
        <a href={"#about"}>
          <FontAwesomeIcon icon={faArrowDown} fixedWidth className="animate-bounce text-xl" />
        </a>
      </div>
    </div>
  );
};

export default LandingPane;
