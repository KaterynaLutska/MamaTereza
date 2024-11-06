import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { NavigationItemProps, NavigationKeys } from "@/types/Navigation";
import { PATH } from "@utils/constants";

import NavigationItem from "./NavigationItem";

const { HOME, ABOUT, CONTACTS, FUNDS } = PATH;

interface NavigationProps {
  isMobile: boolean;
}

const Navigation: FC<NavigationProps> = ({ isMobile }) => {
  const { t } = useTranslation();

  const NAVIGATION: NavigationItemProps[] = [
    {
      name: NavigationKeys.HOME,
      label: t("PAGE.HOME"),
      link: HOME,
    },
    {
      name: NavigationKeys.FUNDS,
      label: t("PAGE.FUNDS"),
      link: FUNDS,
    },
    {
      name: NavigationKeys.ABOUT,
      label: t("PAGE.ABOUT"),
      link: ABOUT,
    },
    {
      name: NavigationKeys.CONTACTS,
      label: t("PAGE.CONTACTS"),
      link: CONTACTS,
    },
  ];

  const style = isMobile ? "navigation-mobile" : "navigation";
  return (
    <nav>
      <ul className={style}>
        {NAVIGATION.map((item) => (
          <li key={item.name}>
            <NavigationItem label={item.label} name={item.name} link={item.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
