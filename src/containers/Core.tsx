import { FC } from "react";

import App from "@/App";
import theme from "@/theme/theme";
import CoreProvider from "@contexts/CoreProvider";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export const Core: FC = () => {
  return (
    <CoreProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        <CssBaseline />
      </ThemeProvider>
    </CoreProvider>
  );
};
