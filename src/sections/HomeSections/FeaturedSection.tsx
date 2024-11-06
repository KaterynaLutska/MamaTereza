import { useContext } from "react";

import ProjectCard from "@components/ProjectCard";
import { ProjectsContext } from "@contexts/ProjectsContext";
import { ProjectsContextProps } from "@contexts/types/ProjectsContext";

const FeaturedSection = () => {
  const { projects } = useContext<ProjectsContextProps>(ProjectsContext);

  return (
    <div>
      <ul className="funs_list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.projectName} />
        ))}
      </ul>
    </div>
  );
};

export default FeaturedSection;
