import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import styles from './InputDate.sass';

const getClasses = isValid => classNames(styles['input-date'], {
  [styles['has-error']]: !isValid,
});

const InputDate = ({
  value,
  onChange,
  isValid,
}) => (
  <DatePicker className={getClasses(isValid)} selected={moment(value, 'YYYY-MM-DD')} onChange={onChange} dateFormat="DD/MM/YYYY" />
);

InputDate.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
};

InputDate.defaultProps = {
  isValid: true,
};

export default InputDate;
