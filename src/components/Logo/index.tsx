import React, { FC } from "react";

import logo from "../../assets/logo.svg";

const Logo: FC = () => {
  return (
    <a href="" target="_blank">
      <img src={logo} className="logo" alt="logo" />
    </a>
  );
};
export default Logo;
