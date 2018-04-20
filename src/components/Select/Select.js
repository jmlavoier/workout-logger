import React from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';

const Select = ({
  id, name, value, onChange, options,
}) => (
  <select id={id} name={name} type="text" value={value} onChange={onChange}>
    {options.map(option => <option key={uid()} value={option}>{option}</option>)}
  </select>
);

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  id: '',
  options: [],
};

export default Select;
