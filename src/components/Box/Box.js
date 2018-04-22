import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Box.sass';

const getClasses = className => classNames(styles.box, {
  [styles[className]]: className !== '' && styles[className],
});

const Box = ({ className, children }) => (
  <div className={getClasses(className)}>
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Box.defaultProps = {
  children: '',
  className: '',
};

export default Box;
