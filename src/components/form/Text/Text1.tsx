import React, {memo, useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';

import {scale} from '../../../utils/Scales';
import {Colors, Fonts} from '../../../res';
import {ESize, ETextType, ETextAlign, IProps} from './model';

const Text1 = memo(
  ({
    children,
    type = ETextType.PRIMARY,
    size = ESize.S,
    style,
    textAlign = ETextAlign.CENTER,
    numberOfLines,
  }: IProps) => {
    const {styleTextColor, styleTextSize, styleTextAlign} = useMemo(() => {
      let _styleTextColor = null;
      let _styleTextSize = null;
      let _styleTextAlign = null;
      switch (type) {
        case ETextType.PRIMARY:
          _styleTextColor = styles.textPrimary;
          break;
        case ETextType.SECONDARY:
          _styleTextColor = styles.textSecondary;
          break;
      }
      switch (size) {
        case ESize.XS:
          _styleTextSize = styles.textXS;
          break;
        case ESize.S:
          _styleTextSize = styles.textS;
          break;
        case ESize.M:
          _styleTextSize = styles.textM;
          break;
        case ESize.L:
          _styleTextSize = styles.textL;
          break;
      }
      switch (textAlign) {
        case ETextAlign.CENTER:
          _styleTextAlign = styles.textCenter;
          break;
        case ETextAlign.LEFT:
          _styleTextAlign = styles.textLeft;
          break;
        case ETextAlign.RIGHT:
          _styleTextAlign = styles.textRight;
          break;
      }
      return {
        styleTextColor: _styleTextColor,
        styleTextSize: _styleTextSize,
        styleTextAlign: _styleTextAlign,
      };
    }, [type, size, textAlign]);

    return (
      <Text
        numberOfLines={numberOfLines}
        style={[styleTextAlign, styleTextColor, styleTextSize, style]}>
        {children}
      </Text>
    );
  },
);
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  textPrimary: {
    color: Colors.PRIMARY_TEXT,
    fontFamily: Fonts.HEADER,
  },
  textSecondary: {
    color: Colors.PRIMARY_LIGHT,
    fontFamily: Fonts.BODY,
  },
  textXS: {
    fontSize: scale(10),
  },
  textS: {
    fontSize: scale(12),
  },
  textM: {
    fontSize: scale(14),
  },
  textL: {
    fontSize: scale(20),
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
});

export default Text1;
