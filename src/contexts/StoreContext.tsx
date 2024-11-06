import { FC, createContext, useEffect, useState } from "react";

import { Fund } from "@/types/Fund";
import { ProjectTop } from "@/types/ProjectTop";
import { fetchFunds, fetchTopProject } from "@api/request";

import { StoreContextProps, StoreProviderProps } from "./types/StoreContext";

const defaultState = {
  funds: [],
  projectsTop: [],
};

export const StoreContext = createContext<StoreContextProps>(defaultState);

export const StoreContextProvider: FC<StoreProviderProps> = ({ children }) => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [projectsTop, setProjectTop] = useState<ProjectTop[]>([]);

  useEffect(() => {
    const loadFunds = async () => {
      try {
        const data: Fund[] = await fetchFunds();
        setFunds(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadFunds();
  }, []);

  useEffect(() => {
    const loadFunds = async () => {
      try {
        const data: ProjectTop[] = await fetchTopProject();
        setProjectTop(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadFunds();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        funds,
        projectsTop,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
