import React, {useEffect, useMemo, useState} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Controller from './utils/Controller';
import SplashScreen from 'react-native-splash-screen';
import {IController} from './utils/models';
import {setI18nConfig} from './res/strings';
import {ControllerContext} from './utils/Context';

export default () => {
  useMemo(() => setI18nConfig(), []);
  const [controller, setController] = useState<IController>();

  useEffect(() => {
    console.log('controller initialed');
    Controller.create().then(c => {
      console.log('controller created');
      setController(c);
      SplashScreen.hide();
    });
  }, []);

  if (!controller) {
    return null;
  }
  const AppNavigator = createStackNavigator(controller.screens);

  const AppContainer = createAppContainer(AppNavigator);

  return (
    <ControllerContext.Provider value={controller}>
      <AppContainer
        ref={nav => {
          controller.setNavigator(nav);
        }}
      />
    </ControllerContext.Provider>
  );
};
