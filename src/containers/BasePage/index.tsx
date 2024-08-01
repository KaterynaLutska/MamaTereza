import { FC } from "react";

import { Box, CssBaseline } from "@mui/material";

import Footer from "../Footer";
import Header from "../Header";
import RoutesPath from "../RoutesPath";

const BasePage: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div className="container">
        <RoutesPath />
      </div>
      <Footer />
    </Box>
  );
};

export default BasePage;
