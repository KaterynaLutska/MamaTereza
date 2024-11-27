import { FC, createContext, useEffect, useState } from "react";

import { Project } from "@/types/Project";
import { fetchProjects, fetchTopProjects } from "@api/request";

import { ProjectsContextProps, ProjectsProviderProps } from "./types/ProjectsContext";

const defaultState = {
  projects: [],
  setProjects: () => {},

  topProjects: [],
  updateProject: () => {},

  isLoaded: true,
  setIsLoaded: () => {},

  compareProjectWithData: () => false,

  isAllProjectExist: false,
  setAllProjectExist: () => {},
};

export const ProjectsContext = createContext<ProjectsContextProps>(defaultState);

export const ProjectsContextProvider: FC<ProjectsProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [topProjects, setTopProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAllProjectExist, setAllProjectExist] = useState<boolean>(false);

  const getTopProjects = async () => {
    try {
      const topProjects: Project[] = await fetchTopProjects();
      setTopProjects(topProjects);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(false);
    }
  };

  const updateProject = (id: number, newCollectedValue: number) => {
    setProjects((prevProjects) =>
      prevProjects.map((p) => (p.id === id ? { ...p, collected: p.collected + newCollectedValue } : p)),
    );
  };

  const compareProjectWithData = (data: Project[], currentProjects: Project[]): boolean => {
    return data.every((project) => currentProjects.some((p) => p.id === project.id));
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,

        topProjects,

        isLoaded,
        setIsLoaded,

        updateProject,
        compareProjectWithData,

        isAllProjectExist,
        setAllProjectExist,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
