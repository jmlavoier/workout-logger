import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const handleChangeEvent = _.curry((changeField, fieldName, currentValue, validation, formatValueBeforeChange, event) => {
  let valueSet = currentValue;
  let isValid = true;

  if (validation(event)) {
    valueSet = event.target.value;
    isValid = false;
  }
  changeField(fieldName, formatValueBeforeChange(valueSet), isValid);
});

const Field = ({
  component: Component,
  changeField,
  fieldName,
  value,
  validation,
  formatValueBeforeChange,
  ...otherProps
}) => (
  <Component value={value} onChange={handleChangeEvent(changeField, fieldName, value, validation, formatValueBeforeChange)} {...otherProps} />
);

Field.propTypes = {
  component: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  formatValueBeforeChange: PropTypes.func,
  validation: PropTypes.func,
};

Field.defaultProps = {
  validation: () => true,
  formatValueBeforeChange: value => value,
};

export default Field;
