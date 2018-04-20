import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Select from './Select';

const optionsMock = [
  { id: '1', value: 'Run' },
  { id: '2', value: 'Swimming' },
];

storiesOf('Select', module)
  .add('Default', withInfo()(() => (
    <Select id="types" name="types" options={optionsMock} value="Swimming" />
  )));
