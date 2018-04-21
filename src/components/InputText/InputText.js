import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
