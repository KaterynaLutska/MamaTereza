import React, { FC } from "react";


import NavigationItem from "./NavigationItem";
import { NavigationKeys, NavigationProps } from "@/types/Navigation";

const NAVIGATION: NavigationProps[] = [
  {
    name: NavigationKeys.HOME,
    link: "/",
  },
  {
    name: NavigationKeys.ABOUT,
    link: "/about",
  },
  {
    name: NavigationKeys.CONTACTS,
    link: "/contacts",
  },
];

const Navigation: FC = () => {
  return (
    <nav>
      <ul className="navigation">
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
