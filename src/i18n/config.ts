import { LANGUAGE_EN} from '@utils/constants';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./locales/en.json";
import ua from "./locales/ua.json"

const getLanguage = () => {
  return LANGUAGE_EN;
};

i18next
  .use(initReactI18next)
  .init({
		lng: getLanguage(),
    fallbackLng: LANGUAGE_EN,
    interpolation: {
      escapeValue: false,
    },
		resources: {
			en: {
				translation: en,
			},
		},
  });

export default i18next;
