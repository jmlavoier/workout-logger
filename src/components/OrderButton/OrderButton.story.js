import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import OrderButton from './OrderButton';

storiesOf('OrderButton', module)
  .add('Default', withInfo()(() => (
    <OrderButton changeOrder={() => {}} fieldName="teste" orderBy={{ field: 'teste', asc: true }}>
      Teste
    </OrderButton>
  )));
