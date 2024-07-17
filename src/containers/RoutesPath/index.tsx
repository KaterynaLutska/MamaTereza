import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { PATH } from "@utils/constants";

import AboutPage from "../AboutPage";
import ContactsPage from "../ContactsPage";
import ErrorPage from "../ErrorPage";
import HomePage from "../HomePage";

const { ABOUT, CONTACTS, ERROR, HOME } = PATH;

const RoutesPath: FC = () => {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={ABOUT} element={<AboutPage />} />
      <Route path={CONTACTS} element={<ContactsPage />} />
      <Route path={ERROR} element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesPath;
