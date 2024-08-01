// Footer.js
import React from "react";
import { useTranslation } from "react-i18next";

import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t("FOOTER.ABOUT_US")}
            </Typography>
            <Typography variant="body2">{t("FOOTER.ABOUT_US_TEXT")}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t("FOOTER.CONTACTS")}
            </Typography>
            <Typography variant="body2"> {t("FOOTER.EMAIL")}</Typography>
            <Typography variant="body2"> {t("FOOTER.PHONE")}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t("FOOTER.FOLLOW_US")}
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              {t("FOOTER.FACEBOOK")}
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              {t("FOOTER.X")}
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              {t("FOOTER.INSTAGRAM")}
            </Link>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} {t("FOOTER.RIGHTS")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
