import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  id, name, value, onChange, options,
}) => (
  <select id={id} name={name} type="text" value={value} onChange={onChange}>
    {options.map(option => <option key={option.id} value={option.value}>{option.value}</option>)}
  </select>
);

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
  })),
};

Select.defaultProps = {
  name: '',
};

Select.defaultProps = {
  id: '',
  options: [],
};

export default Select;
