import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import FundDetails from "@components/FundDetails";
import { PATH } from "@utils/constants";

import AboutPage from "../AboutPage";
import ContactsPage from "../ContactsPage";
import ErrorPage from "../ErrorPage";
import FundsPage from "../FundsPage";
import HomePage from "../HomePage";

const { ABOUT, CONTACTS, ERROR, HOME, FUNDS } = PATH;

const RoutesPath: FC = () => {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={ABOUT} element={<AboutPage />} />
      <Route path={FUNDS} element={<FundsPage />} />
      <Route path={CONTACTS} element={<ContactsPage />} />
      <Route path={ERROR} element={<ErrorPage />} />
      <Route path="/funds/:slug" element={<FundDetails />} />
    </Routes>
  );
};

export default RoutesPath;
