
import { Fund } from "@/types/Fund";
import { ProjectTop } from "@/types/ProjectTop";
import { ReactNode } from "react";

export interface StoreContextProps {
  funds: Fund[],
	projectsTop: ProjectTop[]
}

export interface StoreProviderProps {
  children: ReactNode;
}
