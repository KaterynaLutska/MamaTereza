import React, { FC } from "react";

import Logo from "../Logo";
import Navigation from "../Navigation";

const Header: FC = () => {
  return (
    <div>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
