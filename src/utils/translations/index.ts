import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance

import {I18nManager} from 'react-native';
interface ILanguagePreference {
  languageTag: string;
  isRTL: boolean;
}

const translationGetters: any = {
  ar: () => require('./ar.json'),
  en: () => require('./en.json'),
  fr: () => require('./fr.json'),
};

export const translate = memoize(
  (key: string, config?: object) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);
const fallback = {languageTag: 'en', isRTL: false};

export const setI18nConfig: (
  languagePreference?: ILanguagePreference,
) => void = languagePreference => {
  // fallback if no available language fits

  const {languageTag, isRTL} =
    languagePreference ||
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear!();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.locale = languageTag;
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
};
