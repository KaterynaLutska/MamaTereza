import React from "react";
import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

import useStyles from "@helpers/classes";
import { Button } from "@mui/material";
import { NavigationItemProps } from "@/types/Navigation";

const NavigationItem: FC<NavigationItemProps> = ({ name, link }) => {
	const location = useLocation();
  const classes = useStyles();
	const activeClassName = location.pathname === link ? classes.activeLink : classes.navLinks

  return (
      <NavLink to={link} className={activeClassName}>
        <Button color="inherit">{name}</Button>
      </NavLink>
  );
};
export default NavigationItem;
