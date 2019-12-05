import {
  scale as scaleSizeMatters,
  verticalScale as scaleVerticalSizeMatter,
  moderateScale as scaleModerateSizeMatter,
} from 'react-native-size-matters';
import memoize from 'lodash.memoize';

export const scale = memoize((size: number) => scaleSizeMatters(size));
export const verticalScale = memoize((size: number) =>
  scaleVerticalSizeMatter(size),
);
export const moderateScale = memoize((size: number) =>
  scaleModerateSizeMatter(size),
);
