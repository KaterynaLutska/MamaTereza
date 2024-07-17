import { createContext } from "react";

import { LANGUAGE_EN } from "@utils/constants";

import { CoreContextProps } from "./types/CoreContext";

const CoreContext = createContext<CoreContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => !isLoggedIn,
  language: LANGUAGE_EN,
  setLanguage: (newLanguage) => newLanguage,
});
export default CoreContext;
