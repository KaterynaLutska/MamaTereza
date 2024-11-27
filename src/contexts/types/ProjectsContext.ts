import { Dispatch, ReactNode, SetStateAction } from "react";

import { Project } from "@/types/Project";

export interface ProjectsContextProps {
  projects: Project[];
  setProjects: Dispatch<SetStateAction<Project[]>>;

  topProjects: Project[];

  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;

  updateProject: (id: number, newCollectedValue: number) => void;
  compareProjectWithData: (project: Project[], dataProject: Project[]) => {};

  isAllProjectExist: boolean;
  setAllProjectExist: Dispatch<SetStateAction<boolean>>;
}
export interface ProjectsProviderProps {
  children: ReactNode;
}
