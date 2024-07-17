import React, { FC } from "react";

import { NavigationItemProps, NavigationKeys } from "@/types/Navigation";
import { PATH } from "@utils/constants";

import NavigationItem from "./NavigationItem";

const { HOME, ABOUT, CONTACTS } = PATH;

interface NavigationProps {
  isMobile: boolean;
}

const NAVIGATION: NavigationItemProps[] = [
  {
    name: NavigationKeys.HOME,
    link: HOME,
  },
  {
    name: NavigationKeys.ABOUT,
    link: ABOUT,
  },
  {
    name: NavigationKeys.CONTACTS,
    link: CONTACTS,
  },
];

const Navigation: FC<NavigationProps> = ({ isMobile }) => {
  const style = isMobile ? "navigation-mobile" : "navigation";
  return (
    <nav>
      <ul className={style}>
        {NAVIGATION.map((item) => (
          <li key={item.name}>
            <NavigationItem name={item.name} link={item.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
