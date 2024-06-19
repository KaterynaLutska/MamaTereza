import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutPage from "../AboutPage";
import ContactsPage from "../ContactsPage";
import HomePage from "../HomePage";

const RoutesPath = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactsPage />} />
    </Routes>
  );
};

export default RoutesPath;
