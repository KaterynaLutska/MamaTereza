import { FC, useContext, useEffect, useRef, useState } from "react";

import { Project } from "@/types/Project";
import { fetchProjects } from "@api/request";
import Loader from "@components/Loader";
import ProjectCard from "@components/ProjectCard";
import { ProjectsContext } from "@contexts/ProjectsContext";
import { ProjectsContextProps } from "@contexts/types/ProjectsContext";

const ProjectsPage: FC = () => {
  const effectWasExecuted = useRef(false);
  const [newProjects, setNewProjects] = useState<Project[]>([]);
  const { isLoaded, projects, setProjects, setIsLoaded } = useContext<ProjectsContextProps>(ProjectsContext);

  const getAllProjects = async () => {
    try {
      const data: Project[] = await fetchProjects();
      setProjects(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    if (!effectWasExecuted.current) {
      getAllProjects();
      effectWasExecuted.current = true;
    }
  }, []);

  if (isLoaded) {
    return <Loader />;
  }
  return (
    <div>
      <h1>Projects</h1>
      {!isLoaded && (
        <ul>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsPage;

