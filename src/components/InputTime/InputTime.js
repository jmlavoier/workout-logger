import React from 'react';
import PropTypes from 'prop-types';

const InputTime = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

InputTime.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputTime;