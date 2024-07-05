import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutPage from "../AboutPage";
import ContactsPage from "../ContactsPage";
import HomePage from "../HomePage";
import ErrorPage from "../ErrorPage";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactsPage />} />
			<Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesPath;
