import { FC, createContext, useState } from "react";

import { Fund, FundsBySlug } from "@/types/Fund";
import { generateSlug } from "@helpers/generateSlug";

import { FundsContextProps, FundsProviderProps } from "./types/FundsContext";

const defaultState = {
  funds: [],
  setFunds: () => {},

  fundsBySlug: {},

  isLoaded: false,
  setIsLoaded: () => {},

  isLoading: false,
  setIsLoading: () => {},

  updateFunds: () => {},
  compareFundsWithData: () => false,

  isAllFundsExist: false,
  setAllFundsExist: () => {},
};

export const FundsContext = createContext<FundsContextProps>(defaultState);

export const FundsContextProvider: FC<FundsProviderProps> = ({ children }) => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAllFundsExist, setAllFundsExist] = useState<boolean>(false);

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

  const fundsBySlug = funds.reduce<FundsBySlug>((acc, fund) => {
    const slug = generateSlug(fund.name);
    acc[slug] = fund;
    return acc;
  }, {});

  return (
    <FundsContext.Provider
      value={{
        funds,
        setFunds,
        fundsBySlug,
        isLoaded,
        setIsLoaded,
        isLoading,
        setIsLoading,
        updateFunds,
        compareFundsWithData,
        isAllFundsExist,
        setAllFundsExist,
      }}
    >
      {children}
    </FundsContext.Provider>
  );
};
