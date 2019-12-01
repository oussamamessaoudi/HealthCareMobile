import React, {useEffect, useMemo} from 'react';
import App from './App';
import Controller from './controller';
import SplashScreen from 'react-native-splash-screen';
import {setI18nConfig} from './utils/translations';

export default () => {
  useMemo(() => setI18nConfig(), []);
  useEffect(() => {
    console.log('controller initialed');
    Controller.create({urls: {content: ''}}).then(() => {
      console.log('controller created');
      SplashScreen.hide();
    });
  }, []);
  return <App />;
};
