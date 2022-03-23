import Title from "./title";
import TagSphere from "./tag-sphere";

const AboutPane = () => {
  return (
    <div
      id={"about"}
      className="flex min-h-screen flex-col justify-around bg-gradient-to-b from-primary to-white text-black"
    >
      <div className="mx-auto w-full max-w-screen-lg px-4 py-8">
        <div className="flex flex-col justify-between gap-y-4 gap-x-16 md:flex-row">
          <div className="flex-shrink-0 basis-2/5">
            <h2 className="mb-6 text-3xl font-semibold">
              {"I'm A "}
              <Title />
            </h2>
            <p className={"mb-4 text-xl"}>
              {"Hello, my name is "}
              <span
                className="relative font-medium
              before:absolute before:bottom-0 before:left-0 before:block before:h-0.5 before:w-full before:bg-accent before:transition-all
              hover:before:h-1/3 hover:before:rounded-t-sm hover:before:opacity-25"
              >
                zwwuu
              </span>
              . Nice to meet you.
            </p>
            <p>{"I'm passionate about working on open source products & building thriving communities around them."}</p>
          </div>
          <div className={"flex-grow-0"}>
            <TagSphere />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPane;
