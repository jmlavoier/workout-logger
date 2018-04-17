import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InputTime from './InputTime';

storiesOf('InputTime', module)
  .add('Default', withInfo()(() => (
    <InputTime value="0:30" />
  )));
