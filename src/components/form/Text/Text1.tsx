import React, {memo, useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';

import {scale} from '../../../utils/Scales';
import {Colors, Fonts} from '../../../res';
import {ESize, ETextType, IProps} from './model';

const Text1 = memo(
  ({
    children,
    type = ETextType.PRIMARY,
    size = ESize.S,
    style,
    numberOfLines,
  }: IProps) => {
    const styles = useMemo(() => {
      return StyleSheet.create({
        text: {
          textAlign: 'center',
        },
        textPrimary: {
          color: Colors.PRIMARY,
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
      });
    }, []);
    const {styleTextColor, styleTextSize} = useMemo(() => {
      let _styleTextColor = null;
      let _styleTextSize = null;
      switch (type) {
        case ETextType.PRIMARY:
          _styleTextColor = styles.textPrimary;
          break;
        case ETextType.SECONDARY:
          _styleTextColor = styles.textSecondary;
          break;
      }
      switch (size) {
        case ESize.S:
          _styleTextSize = styles.textS;
          break;
        case ESize.M:
          _styleTextSize = styles.textM;
          break;
        case ESize.XS:
          _styleTextSize = styles.textXS;
          break;
      }
      return {styleTextColor: _styleTextColor, styleTextSize: _styleTextSize};
    }, [type, size, styles]);

    return (
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, styleTextColor, styleTextSize, style]}>
        {children}
      </Text>
    );
  },
);

export default Text1;
