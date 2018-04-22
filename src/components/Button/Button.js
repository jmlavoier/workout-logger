import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.sass';

const getClasses = () => classNames(styles.button);

const Button = ({ children, onClick }) => (
  <button className={getClasses()} onClick={onClick}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: '',
};

export default Button;
