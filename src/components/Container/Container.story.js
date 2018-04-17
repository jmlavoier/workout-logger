import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Container from './Container';

storiesOf('Container', module)
  .add('Default', withInfo()(() => (
    <Container>Teste</Container>
  )));
