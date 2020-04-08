import { defaultLocale } from './../../config/constants';
import * as locales from './../../resourses/locales';

function getLocale() {
  const locale = localStorage.getItem('locale');
  if (localeExists(locale)) {
    return locale;
  }
  return getDefaultLocale();
}

function getDefaultLocale() {
  return defaultLocale;
}

function localeExists(locale) {
  return !!locales[locale];
}

function initLocale(locale) {
  if (localeExists(locale)) {
    localStorage.setItem('locale', locale);
    return locale;
  } else {
    localStorage.setItem('locale', defaultLocale);
    return defaultLocale;
  }
}

export default {
  getLocale,
  localeExists,
  initLocale,
};
