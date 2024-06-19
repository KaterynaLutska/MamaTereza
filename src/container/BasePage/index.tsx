import React from "react";

import { Container } from "@mui/material";

import Header from "../Header";
import RoutesPath from "../RoutesPath";

const BasePage = () => {
  return (
    <Container>
      <Header />
      <RoutesPath />
    </Container>
  );
};

export default BasePage;
