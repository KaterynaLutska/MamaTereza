import React, { FC, useState } from "react";

import { LANGUAGE_EN } from "@utils/constants";

import CoreContext from "./CoreContext";
import { CoreProviderProps } from "./types/CoreContext";
import { StoreContext, StoreContextProvider } from "./StoreContext";


const CoreProvider: FC<CoreProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState(LANGUAGE_EN);

  return (
		<StoreContextProvider>
    <CoreContext.Provider value={{ isLoggedIn, setIsLoggedIn, language, setLanguage }}>
			{children}
			</CoreContext.Provider>
		</StoreContextProvider>
		
  );
};

export default CoreProvider;
