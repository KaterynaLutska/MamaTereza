import React, { FC } from "react";

import AboutPage from "../../container/AboutPage";
import ContactsPage from "../../container/ContactsPage";
import HomePage from "../../container/HomePage";
import UserAccount from "../UserAccount";

const Navigation: FC = () => {
  return (
    <>
      <div className="navigation">
        <HomePage />
        <AboutPage />
        <ContactsPage />
      </div>
      <UserAccount />
    </>
  );
};

export default Navigation;
