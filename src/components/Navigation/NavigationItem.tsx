import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import useStyles from "@helpers/classes";
import { Button } from "@mui/material";

import { NavigationKeys } from "../../types/Navigation";

interface NavigationItemProps {
  name: NavigationKeys;
  link: string;
}
const NavigationItem: FC<NavigationItemProps> = ({ name, link }) => {
  const classes = useStyles();

  return (
    <>
      <Link to={link} className={classes.navLinks}>
        <Button color="inherit">{name}</Button>
      </Link>
    </>
  );
};
export default NavigationItem;
