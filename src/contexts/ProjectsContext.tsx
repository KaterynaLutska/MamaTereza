import { FC, createContext, useEffect, useState } from "react";

import { Project } from "@/types/Project";
import { fetchProjects, fetchTopProjects } from "@api/request";

import { ProjectsContextProps, ProjectsProviderProps } from "./types/ProjectsContext";

const defaultState = {
  projects: [],
  topProjects: [],
  isLoaded: true,
  updateProject: () => {},
};

export const ProjectsContext = createContext<ProjectsContextProps>(defaultState);

export const ProjectsContextProvider: FC<ProjectsProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [topProjects, setTopProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
    //getAllProjects();
  }, []);

  useEffect(() => {
    //getTopProjects();
  }, []);

  const updateProject = (id: number, newCollectedValue: number) => {
    setProjects((prevProjects) =>
      prevProjects.map((p) => (p.id === id ? { ...p, collected: p.collected + newCollectedValue } : p)),
    );
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        topProjects,
        isLoaded,
        updateProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
