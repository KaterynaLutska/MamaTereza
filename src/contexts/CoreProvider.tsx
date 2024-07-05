import React, { FC, useState } from "react";

import CoreContext from "./CoreContext";
import { CoreProviderProps } from "./types/CoreContext";

const CoreProvider: FC<CoreProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <CoreContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</CoreContext.Provider>;
};

export default CoreProvider;
