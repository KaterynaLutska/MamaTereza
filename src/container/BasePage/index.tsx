import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "../../components/Navigation";
import AboutPage from "../AboutPage";
import ContactsPage from "../ContactsPage";
import Header from "../Header";
import HomePage from "../HomePage";
import RoutesPath from "../RoutesPath";

const BasePage = () => {
  return (
    <div>
      <Header />
      <RoutesPath />
    </div>
  );
};

export default BasePage;
