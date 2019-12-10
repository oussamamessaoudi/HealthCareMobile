import {getStorybookUI, configure} from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
});

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({port: 7007, host: 'localhost',
  onDeviceUI: false,
  resetStorybook: true,
  shouldPersistSelection: true,});
export default StorybookUIRoot;
