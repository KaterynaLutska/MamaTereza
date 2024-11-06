import React from "react";
import { useTranslation } from "react-i18next";

import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//import heroImg from "../..img/hero.jpg";

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="35vh"
        textAlign="center"
        sx={{
          //backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "2rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 1,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {t("HERO.TITLE")}
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            {t("HERO.TEXT")}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            {t("HERO.LEARN_MORE")}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
