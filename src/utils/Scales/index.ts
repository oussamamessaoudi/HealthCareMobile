import memoize from 'lodash.memoize';

import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scaleSizeMatters = (size: number) => (width / guidelineBaseWidth) * size;

const scaleVerticalSizeMatter = (size: number) =>
  (height / guidelineBaseHeight) * size;

const scaleModerateSizeMatter = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const scale = memoize((size: number) => scaleSizeMatters(size));
export const verticalScale = memoize((size: number) =>
  scaleVerticalSizeMatter(size),
);
export const moderateScale = memoize((size: number) =>
  scaleModerateSizeMatter(size),
);
