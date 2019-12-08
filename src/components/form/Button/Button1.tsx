import React, {memo} from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../res';

import {moderateScale, scale, verticalScale} from '../../../utils/Scales';
import {Text} from '../Text';
import {ESize, ETextType} from '../Text/model';
import {ETypeButton, IProps} from './model';

const Button1 = memo(
  ({title, onPress, disabled, type = ETypeButton.PRIMARY, loading}: IProps) => {
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.5}
        onPress={onPress}
        style={[
          styles.button,
          type === ETypeButton.SECONDARY && styles.secondaryButton,
          disabled && styles.disabledButton,
        ]}>
        {loading ? (
          <ActivityIndicator size={scale(16)} color={Colors.SECONDARY} />
        ) : (
          <Text type={ETextType.PRIMARY} size={ESize.M}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    );
  },
);
const styles = StyleSheet.create({
  button: {
    borderColor: Colors.SECONDARY_LIGHT,
    borderWidth: moderateScale(2),
    paddingVertical: verticalScale(12),
    borderRadius: scale(24),
  },
  secondaryButton: {
    borderColor: Colors.GREEN,
  },
  disabledButton: {
    borderColor: Colors.WHITE,
    opacity: 0.3,
  },
});

export default Button1;
