import { FC, createContext, useState } from "react";

import { Fund } from "@/types/Fund";

import { FundsContextProps, FundsProviderProps } from "./types/FundsContext";

const defaultState = {
  funds: [],
  setFunds: () => {},
  isLoaded: false,
  setIsLoaded: () => {},
  updateFunds: () => {},
  compareFundsWithData: () => {},

  isAllFundsExist: false,
  setIsAllFundsExist: () => {},
};

export const FundsContext = createContext<FundsContextProps>(defaultState);

export const FundsContextProvider: FC<FundsProviderProps> = ({ children }) => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAllFundsExist, setIsAllFundsExist] = useState<boolean>(false);

  const updateFunds = (newFund: Fund) => {
    setFunds((prevFunds) => {
      const fundExists = prevFunds.some((fund) => fund.id === newFund.id);
      if (!fundExists) {
        return [...prevFunds, newFund];
      }
      return prevFunds;
    });
  };

  const compareFundsWithData = (data: Fund[], currentFunds: Fund[]): boolean => {
    return data.every((fund) => currentFunds.some((current) => current.id === fund.id));
  };

  return (
    <FundsContext.Provider
      value={{
        funds,
        isLoaded,
        setFunds,
        setIsLoaded,
        updateFunds,
        compareFundsWithData,
        isAllFundsExist,
        setIsAllFundsExist,
      }}
    >
      {children}
    </FundsContext.Provider>
  );
};
