import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './OrderButton.sass';

const getClasses = (orderBy, fieldName) => classNames(styles['order-button'], {
  [styles['order-desc']]: orderBy.field === fieldName && !orderBy.asc,
  [styles['order-asc']]: orderBy.field === fieldName && orderBy.asc,
});

const handleClickChangeOrder = (changeOrder, fieldName) => () => {
  changeOrder(fieldName);
};

const OrderButton = ({
  children,
  changeOrder,
  fieldName,
  orderBy,
}) => (
  <div
    className={getClasses(orderBy, fieldName)}
    role="presentation"
    onClick={handleClickChangeOrder(changeOrder, fieldName)}
    onKeyPress={handleClickChangeOrder(changeOrder, fieldName)}
  >
    {children}
  </div>
);

OrderButton.propTypes = {
  children: PropTypes.node,
  changeOrder: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
  orderBy: PropTypes.shape({
    field: PropTypes.string,
    asc: PropTypes.bool,
  }).isRequired,
};

OrderButton.defaultProps = {
  children: '',
};

export default OrderButton;
