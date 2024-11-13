import { ReactNode } from "react";

import { Project } from "@/types/Project";

export interface ProjectsContextProps {
  projects: Project[];
  topProjects: Project[];
  isLoaded: boolean;
  updateProject: (id: number, newCollectedValue: number) => void;
}
export interface ProjectsProviderProps {
  children: ReactNode;
}
