import { createContext } from 'react';

import { CoreContextProps } from './types/CoreContext';

const CoreContext = createContext<CoreContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => !isLoggedIn,
});
export default CoreContext;
