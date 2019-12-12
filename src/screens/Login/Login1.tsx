import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '../../components/form/Button';
import {Input} from '../../components/form/Input';
import {Text} from '../../components/form/Text';
import {ESize, ETextAlign} from '../../components/form/Text/model';
import {LayoutPublic} from '../../components/Layout';
import {Line} from '../../components/Line';
import {translate} from '../../res/strings';
import {StateApi} from '../../utils/Client/Api';
import {verticalScale} from '../../utils/Scales';
import {useController} from './Controller';

export default function() {
  const {
    username,
    password,
    setUsername,
    setPassword,
    response,
    submit,
  } = useController();
  return (
    <LayoutPublic>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}>
        <KeyboardAvoidingView
          enabled
          behavior="padding"
          style={styles.container}>
          <View style={styles.titleContainer}>
            <Text textAlign={ETextAlign.LEFT} size={ESize.L}>
              {translate('login.title')}
            </Text>
            <Line />
          </View>
          <View style={styles.subtitleContainer}>
            <Text textAlign={ETextAlign.LEFT} size={ESize.L}>
              {translate('login.subtitle')}
            </Text>
          </View>
          <View style={styles.formsContainer}>
            <Input
              label={translate('login.username')}
              value={username}
              onChange={setUsername}
              returnKeyType="default"
            />
            <View style={styles.spacing} />
            <Input
              label={translate('login.password')}
              value={password}
              secureTextEntry
              onChange={setPassword}
              returnKeyType="done"
              onSubmitEditing={submit}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={translate('login.submit')}
              disabled={username.length === 0 || password.length === 0}
              loading={response.state === StateApi.LOADING}
              onPress={submit}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </LayoutPublic>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  subtitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  formsContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  spacing: {
    height: verticalScale(20),
  },
  buttonContainer: {
    flex: 3,
    justifyContent: 'flex-start',
  },
});
