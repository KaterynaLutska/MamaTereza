import { FC } from "react";

import CoreProvider from "@contexts/CoreProvider";
import { Box } from "@mui/material";

import Footer from "../Footer";
import Header from "../Header";
import RoutesPath from "../RoutesPath";

const BasePage: FC = () => {
  return (
    <CoreProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <RoutesPath />
        <Footer />
      </Box>
    </CoreProvider>
  );
};

export default BasePage;
