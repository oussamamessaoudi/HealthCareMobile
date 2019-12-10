import {StyleSheet} from 'react-native';
import {scale} from '../../utils/Scales';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(10),
    paddingVertical: scale(20),
  },
});
