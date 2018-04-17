import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ItemList from './ItemList';

const mockItem = { 
  timeSpent: '1:00',
  workoutType: 'Run',
  date: '15/04/2018',
};

storiesOf('ItemList', module)
  .add('Default', withInfo()(() => (
    <ItemList item={mockItem} />
  )));
