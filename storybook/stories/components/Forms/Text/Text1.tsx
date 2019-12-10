import {storiesOf} from '@storybook/react-native';
import React from 'react';

import {ESize, ETextType} from '../../../../../src/components/form/Text/model';
import Text1 from '../../../../../src/components/form/Text/Text1';
import {LayoutWithHeader} from '../../../../../src/components/Layout';

storiesOf('Text1').add('default', () => (
  <LayoutWithHeader>
    <Text1>HelloWord!</Text1>
  </LayoutWithHeader>
));

storiesOf('Text1').add('Size(M)', () => (
  <LayoutWithHeader>
    <Text1 size={ESize.M}>HelloWord!</Text1>
  </LayoutWithHeader>
));

storiesOf('Text1').add('Type(Secondary)', () => (
  <LayoutWithHeader>
    <Text1 type={ETextType.SECONDARY}>HelloWord!</Text1>
  </LayoutWithHeader>
));

storiesOf('Text1').add('Secondary (M)', () => (
  <LayoutWithHeader>
    <Text1 type={ETextType.SECONDARY} size={ESize.M}>
      HelloWord!
    </Text1>
  </LayoutWithHeader>
));
