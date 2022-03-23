import { faMobileScreen, faStar, faWifi, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ title, type, content, url, repo, tags }) => {
  function getIcon(type) {
    switch (type) {
      case "web":
        return <FontAwesomeIcon icon={faWifi} fixedWidth />;
      case "mobile":
        return <FontAwesomeIcon icon={faMobileScreen} fixedWidth />;
      case "tool":
        return <FontAwesomeIcon icon={faWrench} fixedWidth />;
      default:
        return <FontAwesomeIcon icon={faStar} fixedWidth />;
    }
  }

  return (
    <div className="col-span-12 flex flex-col rounded border shadow-md transition-all will-change-transform hover:-translate-y-1 hover:shadow-lg md:col-span-6 lg:col-span-4">
      <div className="px-4 pt-6">
        <div className="float-right">{getIcon(type)}</div>
        <h3 className="mb-1 text-lg font-medium">{title}</h3>
        <p className="text-sm italic text-silver-800">{type}</p>
      </div>
      <div className="clear-both flex flex-auto flex-col justify-between px-4 pt-3 pb-6">
        <p className="mb-4">{content}</p>
        {tags && (
          <ul className="flex flex-wrap gap-2 text-sm">
            {tags.map((tag, index) => {
              return (
                <li key={index} className="bg-accent py-1 px-2 shadow">
                  {tag}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {(url || repo) && (
        <div className="flex justify-around border-t px-4 py-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative py-1 px-2
              after:absolute after:left-0 after:bottom-0 after:block after:h-0.5 after:w-full after:bg-secondary after:transition-all
              hover:after:h-1/3 hover:after:rounded-t-sm hover:after:opacity-25
               focus:after:h-1/3 focus:after:rounded-t-sm focus:after:opacity-25"
            >
              Link
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative py-1 px-2 after:absolute after:left-0 after:bottom-0 after:block after:h-0.5 after:w-full after:bg-secondary after:transition-all
              hover:after:h-1/3 hover:after:rounded-t-sm hover:after:opacity-25
              focus:after:h-1/3 focus:after:rounded-t-sm focus:after:opacity-25"
            >
              Source
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
