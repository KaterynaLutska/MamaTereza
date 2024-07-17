import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import CoreContext from "@contexts/CoreContext";
import { CoreContextProps } from "@contexts/types/CoreContext";
import LanguageIcon from "@mui/icons-material/Language";
import { Button, Menu, MenuItem } from "@mui/material";
import { LANGUAGE_EN, LANGUAGE_UA } from "@utils/constants";

const LanguageSwitch = () => {
  const { i18n, t } = useTranslation();
  const { language, setLanguage } = useContext<CoreContextProps>(CoreContext);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        variant="contained"
        color="primary"
      >
        {language === LANGUAGE_EN ? "EN" : "UA"}
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => changeLanguage(LANGUAGE_EN)}>{t("LANGUAGE.EN")}</MenuItem>
        <MenuItem onClick={() => changeLanguage(LANGUAGE_UA)}>{t("LANGUAGE.UA")}</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageSwitch;
