import SplashScreen from 'react-native-splash-screen';
import {setI18nConfig} from '../../src/res/strings';
setI18nConfig();
SplashScreen.hide();

require('./components/Layout/PublicLayout1');
