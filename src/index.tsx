import {useMemo} from 'react';
import App from './App';
import {setI18nConfig} from './translations';

export default () => {
  useMemo(() => setI18nConfig(), []);
  return App();
};
