import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ id, name, value, onChange, options }) => (
  <select type="text" value={value} onChange={onChange} defaultValue={value}>
    {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
  </select>
);

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

export default Select;