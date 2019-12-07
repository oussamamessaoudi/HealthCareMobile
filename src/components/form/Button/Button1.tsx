import React, {memo, useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../res';

import {moderateScale, scale, verticalScale} from '../../../utils/Scales';
import {Text} from '../Text';
import {ESize, ETextType} from '../Text/model';
import {ETypeButton, IProps} from './model';

const Button1 = memo(
  ({title, onPress, disabled, type = ETypeButton.PRIMARY}: IProps) => {
    const styles = useMemo(() => {
      return StyleSheet.create({
        button: {
          flex: 1,
          borderColor: Colors.SECONDARY_LIGHT,
          borderWidth: moderateScale(2),
          paddingVertical: verticalScale(10),
          borderRadius: scale(20),
        },
        secondaryButton: {
          borderColor: Colors.GREEN,
        },
        disabledButton: {
          borderColor: Colors.PRIMARY_DARK,
          opacity: 0.3,
        },
      });
    }, []);

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
        <Text type={ETextType.PRIMARY} size={ESize.M}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

export default Button1;
