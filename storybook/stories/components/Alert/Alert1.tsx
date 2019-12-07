import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import Alert1 from '../../../../src/components/Alert/Alert1';
import {ETypeAlert} from '../../../../src/components/Alert/model';
import Button1 from '../../../../src/components/form/Button/Button1';
import {LayoutWithHeader} from '../../../../src/components/Layout';

const AlertTest = ({
  $default,
  secondary,
  alertType = ETypeAlert.SUCCESS,
}: any) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <Alert1
        isVisible={isVisible}
        setVisible={setVisible}
        defaultButton={$default}
        secondaryButton={secondary}
        alertType={alertType}
        title={'Hello World!'}
        body={'Hello World! Hello World! Hello World!'}
      />
      <LayoutWithHeader>
        <Button1
          title={'click'}
          onPress={() => setVisible(!isVisible)}
          disabled={false}
        />
      </LayoutWithHeader>
    </>
  );
};

storiesOf('Alert1').add('default', () => <AlertTest />);
storiesOf('Alert1').add('One Label', () => (
  <AlertTest $default={{label: 'VALIDER'}} />
));
storiesOf('Alert1').add('Two Label', () => (
  <AlertTest $default={{label: 'VALIDER'}} secondary={{label: 'ANNULER'}} />
));
storiesOf('Alert1').add('Error', () => (
  <AlertTest alertType={ETypeAlert.ERROR} />
));
storiesOf('Alert1').add('Warning', () => (
  <AlertTest alertType={ETypeAlert.WARNING} />
));
