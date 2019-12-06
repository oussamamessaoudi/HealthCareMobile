import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import Alert1 from '../../../../src/components/Alert/Alert1';
import Button1 from '../../../../src/components/form/Button/Button1';
import Text1 from '../../../../src/components/form/Text/Text1';
import {LayoutWithHeader} from '../../../../src/components/Layout';

const AlertTest= () => {
  const [isVisible, setVisible] = useState(false);
  return(
    <>
      <Alert1 isVisible={isVisible} setVisible={setVisible} />
      <LayoutWithHeader>
        <Text1>Hello</Text1>
        <Button1 title={'click'} onPress={() => setVisible(!isVisible)} disabled={false}/>
      </LayoutWithHeader>
    </>
  ); };

storiesOf('Alert1').add('Simple one', () => <AlertTest/>);
