import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: '',
};

export default Button;
