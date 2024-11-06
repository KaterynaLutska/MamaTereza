import { ReactNode } from "react";

import { Fund } from "@/types/Fund";
import { ProjectTop } from "@/types/ProjectTop";

export interface StoreContextProps {
  funds: Fund[];
  projectsTop: ProjectTop[];
}

export interface StoreProviderProps {
  children: ReactNode;
}
