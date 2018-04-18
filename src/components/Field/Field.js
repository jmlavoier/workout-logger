import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ component:Component, value, onChange }) => (
  <Component value={value} onChange={onChange} />
);

Field.propTypes = {
  component: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Field;