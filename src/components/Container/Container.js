import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Container.sass';

const getClasses = (className, justify, direction) => classNames(styles.container, {
  [styles['justify-center']]: justify === 'center',
  [styles['direction-column']]: direction === 'column',
  [styles[className]]: className !== '',
});

const Container = ({
  className,
  children,
  justify,
  direction,
}) => (
  <div className={getClasses(className, justify, direction)}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  justify: PropTypes.string,
  direction: PropTypes.string,
  className: PropTypes.string,
};

Container.defaultProps = {
  children: '',
  justify: '',
  direction: '',
  className: '',
};

export default Container;
