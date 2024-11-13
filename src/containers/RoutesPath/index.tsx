import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import FundDetails from "@components/FundDetails";
import { PATH } from "@utils/constants";

import AboutPage from "../AboutPage";
import ContactsPage from "../ContactsPage";
import ErrorPage from "../ErrorPage";
import FundsPage from "../FundsPage";
import HomePage from "../HomePage";
import ProjectsPage from "../ProjectsPage";

const { ABOUT, CONTACTS, ERROR, HOME, FUNDS, PROJECTS } = PATH;

const RoutesPath: FC = () => {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={ABOUT} element={<AboutPage />} />
      <Route path={FUNDS} element={<FundsPage />} />
      <Route path={PROJECTS} element={<ProjectsPage />} />
      <Route path={CONTACTS} element={<ContactsPage />} />
      <Route path={ERROR} element={<ErrorPage />} />
      <Route path={`${FUNDS}/:slug`} element={<FundDetails />} />
    </Routes>
  );
};

export default RoutesPath;
