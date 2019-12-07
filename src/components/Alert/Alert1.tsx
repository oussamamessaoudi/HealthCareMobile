import React, {useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../res';
import {moderateScale, scale} from '../../utils/Scales';
import Button1 from '../form/Button/Button1';
import {ETypeButton} from '../form/Button/model';
import {Text} from '../form/Text';
import {ESize, ETextType} from '../form/Text/model';
import {ETypeAlert, IProps} from './model';

const Alert1 = ({
  isVisible,
  setVisible,
  secondaryButton,
  defaultButton = {label: 'OK'},
  alertType,
  title,
  body,
}: IProps) => {
  const close = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      containerContent: {
        width: scale(280),
        height: moderateScale(250),
        padding: scale(10),
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
      },
      closeContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
      },
      buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      separator: {
        width: scale(10),
      },
    });
  }, []);

  const IconToShow = useCallback(() => {
    switch (alertType) {
      case ETypeAlert.ERROR:
        return (
          <Icon
            name="exclamation-circle"
            size={moderateScale(80)}
            color={Colors.RED}
          />
        );
      case ETypeAlert.SUCCESS:
        return (
          <Icon name="check" size={moderateScale(80)} color={Colors.GREEN} />
        );
      case ETypeAlert.WARNING:
        return (
          <Icon
            name="exclamation-circle"
            size={moderateScale(80)}
            color={Colors.ORANGE}
          />
        );
    }
  }, [alertType]);
  const defaultPress = useCallback(() => {
    if (defaultButton.onPress) {
      defaultButton.onPress();
    }
    close();
  }, [close, defaultButton]);
  const secondaryPress = useCallback(() => {
    if (secondaryButton.onPress) {
      secondaryButton.onPress();
    }
    close();
  }, [close, secondaryButton]);

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.containerContent}>
          <TouchableOpacity style={styles.closeContainer} onPressOut={close}>
            <Icon name="times" size={moderateScale(20)} color={Colors.BLACK} />
          </TouchableOpacity>
          {IconToShow()}
          <Text size={ESize.M} type={ETextType.PRIMARY}>
            {title}
          </Text>
          <Text type={ETextType.SECONDARY}>{body}</Text>
          <View style={styles.buttonsContainer}>
            {secondaryButton && (
              <Button1
                title={secondaryButton.label}
                onPress={secondaryPress}
                type={ETypeButton.PRIMARY}
              />
            )}
            <View style={styles.separator} />
            <Button1
              title={defaultButton.label}
              onPress={defaultPress}
              type={ETypeButton.SECONDARY}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Alert1;
