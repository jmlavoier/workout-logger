import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Button', module)
  .add('Default', withInfo()(() => (
    <Button>Teste</Button>
  )));
