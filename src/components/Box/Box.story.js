import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from './Box';

storiesOf('Box', module)
  .add('Default', withInfo()(() => (
    <Box />
  )));
