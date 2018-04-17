import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Field from './Field';

const InputMock = ({ value, onChange }) => <input type="text" value={value} onChange={onChange} />;

storiesOf('Field', module)
  .add('Default', withInfo()(() => (
    <Field component={InputMock} />
  )));
