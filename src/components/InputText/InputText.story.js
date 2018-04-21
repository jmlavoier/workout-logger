import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InputText from './InputText';

storiesOf('InputText', module)
  .add('Default', withInfo()(() => (
    <InputText value="0:30" />
  )));
