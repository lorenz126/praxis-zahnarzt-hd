import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enServices from './locales/en/services.json';
import enPractice from './locales/en/practice.json';
import enContact from './locales/en/contact.json';
import enLegal from './locales/en/legal.json';

// German translations
import deCommon from './locales/de/common.json';
import deHome from './locales/de/home.json';
import deAbout from './locales/de/about.json';
import deServices from './locales/de/services.json';
import dePractice from './locales/de/practice.json';
import deContact from './locales/de/contact.json';
import deLegal from './locales/de/legal.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    services: enServices,
    practice: enPractice,
    contact: enContact,
    legal: enLegal,
  },
  de: {
    common: deCommon,
    home: deHome,
    about: deAbout,
    services: deServices,
    practice: dePractice,
    contact: deContact,
    legal: deLegal,
  },
};

// Get saved language from localStorage or default to 'en'
const savedLanguage = typeof window !== 'undefined'
  ? localStorage.getItem('dental-practice-language') || 'en'
  : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'services', 'practice', 'contact', 'legal'],
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
