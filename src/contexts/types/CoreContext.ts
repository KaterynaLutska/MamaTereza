import { ReactNode } from "react";

export interface CoreContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export interface CoreProviderProps {
  children: ReactNode;
}
