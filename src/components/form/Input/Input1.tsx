import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../../res';
import {verticalScale} from '../../../utils/Scales';

interface IProps {
  label: string;
  value: string;
  returnKeyType?: 'done' | 'default';
  onChange: (value: string) => void;
  onSubmitEditing?: () => void;
  error?: boolean;
  secureTextEntry?: boolean;
}
const theme = {
  colors: {
    primary: Colors.WHITE,
    text: Colors.PRIMARY_TEXT,
    accent: Colors.WHITE,
    onBackground: Colors.WHITE,
    onSurface: Colors.WHITE,
    surface: Colors.WHITE,
    background: Colors.PRIMARY,
    backdrop: Colors.WHITE,
    placeholder: Colors.WHITE,
    error: Colors.SECONDARY,
  },
};
export default function Input({
  label,
  value,
  onChange,
  onSubmitEditing,
  error,
  returnKeyType = 'default',
  secureTextEntry,
}: IProps) {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
      style={styles.inputContainer}
      mode="outlined"
      keyboardAppearance="dark"
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      error={error}
      theme={theme}
    />
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    height: verticalScale(50),
  },
});
