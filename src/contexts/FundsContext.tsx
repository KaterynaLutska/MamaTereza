import { FC, createContext, useEffect, useState } from "react";

import { Fund } from "@/types/Fund";
import { fetchFunds } from "@api/request";

import { FundsContextProps, FundsProviderProps } from "./types/FundsContext";

const defaultState = {
  funds: [],
  isLoaded: false,
};

export const FundsContext = createContext<FundsContextProps>(defaultState);

export const FundsContextProvider: FC<FundsProviderProps> = ({ children }) => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadFunds = async () => {
      try {
        const data: Fund[] = await fetchFunds();
        setFunds(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadFunds();
  }, []);

  return <FundsContext.Provider value={{ funds, isLoaded }}>{children}</FundsContext.Provider>;
};
