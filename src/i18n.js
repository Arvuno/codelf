import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import zh from './locales/zh.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: undefined, // Let language detector determine the language
    debug: false,
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'codelf-language',
      convertDetectedLanguage: (lng) => {
        // Convert Chinese variants to 'zh'
        if (lng.startsWith('zh')) {
          return 'zh';
        }
        // Convert English variants to 'en'
        if (lng.startsWith('en')) {
          return 'en';
        }
        return lng;
      }
    },

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    }
  });

export default i18n;