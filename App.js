// App.tsx
const STORYBOOK_START = true;

export default (STORYBOOK_START
  ? require('./storybook').default
  : require('./src').default);
