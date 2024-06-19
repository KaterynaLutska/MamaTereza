import React, { FC } from "react";

import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import UserAccount from "../../components/UserAccount";

const Header: FC = () => {
  return (
    <>
      <Logo />
      <Navigation />
      <UserAccount />
    </>
  );
};

export default Header;
