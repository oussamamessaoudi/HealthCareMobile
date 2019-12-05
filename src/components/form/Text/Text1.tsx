import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors} from '../../../res';
import {ESize, ETextType, IProps} from './model';

function buildStyles(type: ETextType, size: ESize) {
  let styleTextColor = null;
  let styleTextSize = null;
  switch (type) {
    case ETextType.PRIMARY:
      styleTextColor = styles.textPrimary;
      break;
    case ETextType.SECONDARY:
      styleTextColor = styles.textSecondary;
      break;
  }
  switch (size) {
    case ESize.S:
      styleTextSize = styles.textS;
      break;
    case ESize.M:
      styleTextSize = styles.textM;
      break;
  }
  return {styleTextColor, styleTextSize};
}

const Text1 = ({
  children,
  type = ETextType.PRIMARY,
  size = ESize.S,
  style,
}: IProps) => {
  const {styleTextColor, styleTextSize} = buildStyles(type, size);
  return (
    <Text style={[styles.text, styleTextColor, styleTextSize, style]}>{children}</Text>
  );
};

export default Text1;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  textPrimary: {
    color: Colors.PRIMARY,
  },
  textSecondary: {
    color: Colors.SECONDARY,
  },
  textS: {
    fontSize: scale(12),
  },
  textM: {
    fontSize: scale(14),
  },
});
