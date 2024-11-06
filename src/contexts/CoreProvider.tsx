import { FC, useState } from "react";

import { LANGUAGE_EN } from "@utils/constants";

import CoreContext from "./CoreContext";
import { FundsContextProvider } from "./FundsContext";
import { ProjectsContextProvider } from "./ProjectsContext";
import { CoreProviderProps } from "./types/CoreContext";

const CoreProvider: FC<CoreProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState(LANGUAGE_EN);

  return (
    <FundsContextProvider>
      <ProjectsContextProvider>
        <CoreContext.Provider value={{ isLoggedIn, setIsLoggedIn, language, setLanguage }}>
          {children}
        </CoreContext.Provider>
      </ProjectsContextProvider>
    </FundsContextProvider>
  );
};

export default CoreProvider;
