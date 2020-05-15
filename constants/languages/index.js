import i18n from 'i18n-js';
import enUS from './english.json';
import * as Localization from 'expo-localization';

i18n.fallbacks = true;
i18n.defaultLocale = 'en-US';
i18n.locale = Localization.locale;
i18n.translations = {
  "en-US": enUS,
};


export default i18n;
