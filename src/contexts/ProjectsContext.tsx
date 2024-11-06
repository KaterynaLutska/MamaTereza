import { FC, createContext, useEffect, useState } from "react";

import { Project } from "@/types/Project";
import { fetchTopProject } from "@api/request";

import { ProjectsContextProps, ProjectsProviderProps } from "./types/ProjectsContext";

const defaultState = {
  projects: [],
};

export const ProjectsContext = createContext<ProjectsContextProps>(defaultState);

export const ProjectsContextProvider: FC<ProjectsProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadFunds = async () => {
      try {
        const data: Project[] = await fetchTopProject();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadFunds();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
