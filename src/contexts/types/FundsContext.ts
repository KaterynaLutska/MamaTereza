import { ReactNode } from "react";

import { Fund } from "@/types/Fund";

export interface FundsContextProps {
  funds: Fund[];
  isLoaded: boolean;
}

export interface FundsProviderProps {
  children: ReactNode;
}
