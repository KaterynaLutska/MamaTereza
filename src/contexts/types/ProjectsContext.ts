import { ReactNode } from "react";

import { Project } from "@/types/Project";

export interface ProjectsContextProps {
  projects: Project[];
}

export interface ProjectsProviderProps {
  children: ReactNode;
}
