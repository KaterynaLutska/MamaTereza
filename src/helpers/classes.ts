import theme from "@/theme/theme";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    marginRight: theme.spacing(2),
    color: "inherit",
    textDecoration: "none",
  },
  activeLink: {
    color: theme.palette.secondary.main,
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
}));

export default useStyles;
