import { Dispatch, ReactNode, SetStateAction } from "react";

import { Fund, FundsBySlug } from "@/types/Fund";

export interface FundsContextProps {
  funds: Fund[];
  setFunds: Dispatch<SetStateAction<Fund[]>>;

  fundsBySlug: FundsBySlug;

  isLoaded: boolean;
  setIsLoaded: Dispatch<SetStateAction<boolean>>;

  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;

  updateFunds: (newFund: Fund) => void;
  compareFundsWithData: (funds: Fund[], stateFunds: Fund[]) => boolean;

  isAllFundsExist: boolean;
  setAllFundsExist: Dispatch<SetStateAction<boolean>>;
}
export interface FundsProviderProps {
  children: ReactNode;
}
