import { Route, Routes } from "react-router-dom";

import AboutPage from "../AboutPage";
import ContactsPage from "../ContactsPage";
import HomePage from "../HomePage";
import ErrorPage from "../ErrorPage";
import { ABOUT_PATH, CONTACTS_PATH, ERROR_PATH, HOME_PATH } from "@utils/constants";
import { FC } from "react";

const RoutesPath: FC= () => {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<HomePage />} />
      <Route path={ABOUT_PATH} element={<AboutPage />} />
      <Route path={CONTACTS_PATH} element={<ContactsPage />} />
			<Route path={ERROR_PATH} element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesPath;
