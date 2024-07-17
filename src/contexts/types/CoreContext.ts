import { ReactNode } from "react";

export interface CoreContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  language: string;
  setLanguage: (newLanguage: string) => void;
}

export interface CoreProviderProps {
  children: ReactNode;
}
