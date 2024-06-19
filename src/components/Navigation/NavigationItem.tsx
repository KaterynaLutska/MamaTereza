import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import { NavigationKeys } from "../../types.ts/Navigation";

interface NavigationItemProps {
  name: NavigationKeys;
  link: string;
}
const NavigationItem: FC<NavigationItemProps> = ({ name, link }) => {
  return <Link to={link}>{name}</Link>;
};
export default NavigationItem;
