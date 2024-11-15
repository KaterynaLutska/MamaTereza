import { FC } from "react";
import { I18nextProvider } from "react-i18next";

import App from "@/App";
import i18next from "@/i18n/config";
import theme from "@/theme/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export const Core: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
      <CssBaseline />
    </ThemeProvider>
  );
};
