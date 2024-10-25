// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language resources
const resources = {
  en: {
    translation: {
      "welcome": "Welcome to our e-commerce store",
      "choose_language": "Choose your language",
    }
  },
  hi: {
    translation: {
      "welcome": "हमारे ई-कॉमर्स स्टोर में आपका स्वागत है",
      "choose_language": "अपनी भाषा चुनें",
    }
  },
  ar: {
    translation: {
      "welcome": "مرحبًا بك في متجرنا الإلكتروني",
      "choose_language": "اختر لغتك",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
