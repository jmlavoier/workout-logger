import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Select from './Select';

storiesOf('Select', module)
  .add('Default', withInfo()(() => (
    <Select id="types" name="types" options={['Run', 'Swimming']} value='Swimming' />
  )));
