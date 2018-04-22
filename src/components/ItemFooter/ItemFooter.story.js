import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ItemFooter from './ItemFooter';

storiesOf('ItemFooter', module)
  .add('Default', withInfo()(() => (
    <ItemFooter items={[{ timeSpent: '0:30' }, { timeSpent: '0:45' }]} />
  )));
