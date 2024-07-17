import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { LANGUAGE_EN } from "@utils/constants";

import en from "./locales/en.json";
import ua from "./locales/ua.json";

i18next.use(initReactI18next).init({
  lng: LANGUAGE_EN,
  fallbackLng: LANGUAGE_EN,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    ua: {
      translation: ua,
    },
  },
});

export default i18next;
