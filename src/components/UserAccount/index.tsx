import React, { useContext, useState } from 'react';

import CoreContext from '../../contexts/CoreContext';
import { CoreContextProps } from '../../contexts/types/CoreContext';

const UserAccount = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext<CoreContextProps>(CoreContext);

  const handleOnClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <button onClick={handleOnClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  );
};

export default UserAccount;
