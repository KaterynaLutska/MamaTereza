import { FC, useContext } from "react";

import Loader from "@components/Loader";
import ProjectCard from "@components/ProjectCard";
import { ProjectsContext } from "@contexts/ProjectsContext";
import { ProjectsContextProps } from "@contexts/types/ProjectsContext";

const ProjectsPage: FC = () => {
  const { isLoaded, projects } = useContext<ProjectsContextProps>(ProjectsContext);

  if (isLoaded) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Projects</h1>
      {!isLoaded && (
        <ul>
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsPage;

