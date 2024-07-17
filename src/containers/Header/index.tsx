import { useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "@components/Logo";
import Navigation from "@components/Navigation";
import UserAccount from "@components/UserAccount";
import useStyles from "@helpers/classes";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { t } = useTranslation();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Logo />
        <Typography variant="h6" className={classes.title}>
          {t("TITLE")}
        </Typography>
        {isMobile ? (
          <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <Navigation isMobile={isMobile} />
            </Menu>
          </div>
        ) : (
          <div>
            <Navigation isMobile={isMobile} />
          </div>
        )}
        <UserAccount />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
