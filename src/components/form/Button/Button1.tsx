import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../res';
import {Text} from '../Text';
import {ESize, ETextType} from '../Text/model';
import {IProps} from './model';

const Button1 = ({title, onPress, disabled}: IProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.button, disabled && styles.disabledButton]}>
      <Text type={ETextType.PRIMARY} size={ESize.S}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button1;

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.SECONDARY_LIGHT,
    borderWidth: moderateScale(2),
    width: scale(300),
    paddingVertical: verticalScale(10),
    borderRadius: scale(20),
  },
  disabledButton: {
    borderColor: Colors.PRIMARY_DARK,
    opacity: 0.3,
  },
});
