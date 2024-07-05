import React, { useContext } from "react";

import { AccountCircle } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

import CoreContext from "../../contexts/CoreContext";
import { CoreContextProps } from "../../contexts/types/CoreContext";

const UserAccount = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext<CoreContextProps>(CoreContext);

  const handleOnClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <Button onClick={handleOnClick} color="inherit">
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
      <IconButton color="inherit">{isLoggedIn && <AccountCircle />}</IconButton>
    </div>
  );
};

export default UserAccount;
