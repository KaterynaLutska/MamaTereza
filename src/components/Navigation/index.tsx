import React, { FC } from "react";

import { NavigationItemProps, NavigationKeys } from "@/types/Navigation";
import NavigationItem from "./NavigationItem";
import { ABOUT_PATH, CONTACTS_PATH, HOME_PATH } from "@utils/constants";


const NAVIGATION: NavigationItemProps[] = [
  {
    name: NavigationKeys.HOME,
    link: HOME_PATH
  },
  {
    name: NavigationKeys.ABOUT,
    link: ABOUT_PATH,
  },
  {
    name: NavigationKeys.CONTACTS,
    link: CONTACTS_PATH
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
