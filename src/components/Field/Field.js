import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const handleChangeEvent = _.curry((changeField, fieldName, event) => {
  changeField(fieldName, event.target.value);
});

const Field = ({
  component: Component,
  changeField,
  fieldName,
  value,
  ...otherProps
}) => (
  <Component value={value} onChange={handleChangeEvent(changeField, fieldName)} {...otherProps} />
);

Field.propTypes = {
  component: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default Field;
