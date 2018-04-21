import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import classNames from 'classnames';

import styles from './InputText.sass';

const getClasses = isValid => classNames(styles['input-text'], {
  [styles['has-error']]: !isValid,
});

const InputText = ({
  value,
  onChange,
  mask,
  isValid,
}) => {
  if (mask) {
    return (
      <MaskedInput className={getClasses(isValid)} type="text" mask={mask} value={value} onChange={onChange} placeholder="00:00" showMask />
    );
  }
  return (<input type="text" value={value} onChange={onChange} />);
};

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  mask: PropTypes.arrayOf(PropTypes.any),
  isValid: PropTypes.bool,
};

InputText.defaultProps = {
  mask: [],
  isValid: true,
};

export default InputText;
