import { FC } from "react";

import App from "@/App";
import theme from "@/theme/theme";
import CoreProvider from "@contexts/CoreProvider";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { I18nextProvider } from "react-i18next";
import i18next from "@/i18n/config";


export const Core: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CoreProvider>
        <CssBaseline />
				<I18nextProvider i18n={i18next}>
					<App />
					</I18nextProvider>,
        <CssBaseline />
      </CoreProvider>
    </ThemeProvider>
  );
};
