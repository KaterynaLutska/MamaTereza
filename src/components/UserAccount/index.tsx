import React, { useContext } from "react";

import { AccountCircle } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

import CoreContext from "../../contexts/CoreContext";
import { CoreContextProps } from "../../contexts/types/CoreContext";
import { useTranslation } from "react-i18next";

const UserAccount = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext<CoreContextProps>(CoreContext);
	const { t } = useTranslation();

  const handleOnClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <Button onClick={handleOnClick} color="inherit">
        {isLoggedIn ? t("LOGOUT") : t("LOGIN")}
      </Button>
      <IconButton color="inherit">{isLoggedIn && <AccountCircle />}</IconButton>
    </div>
  );
};

export default UserAccount;
