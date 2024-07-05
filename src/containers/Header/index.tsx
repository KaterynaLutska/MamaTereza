import Logo from "@components/Logo";
import Navigation from "@components/Navigation";
import UserAccount from "@components/UserAccount";
import useStyles from "@helpers/classes";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Logo />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Mama Tereza
        </Typography>
        <Logo />
        <Navigation />
        <UserAccount />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
