import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Field from './Field';

const InputMock = ({ value, onChange }) => <input type="text" value={value} onChange={onChange} />;

InputMock.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

storiesOf('Field', module)
  .add('Default', withInfo()(() => (
    <Field component={InputMock} />
  )));
