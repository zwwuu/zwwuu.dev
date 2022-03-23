import ProjectCard from "./project-card";

const ProjectPane = ({ projects }) => {
  return (
    <div id={"project"} className="flex min-h-screen flex-col justify-around bg-white text-gunmetal">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
        <h2 className="mb-6 text-3xl font-semibold">Project</h2>
        <div className="grid grid-cols-12 gap-8">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPane;
