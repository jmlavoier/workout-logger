import React from 'react';
import PropTypes from 'prop-types';
import { parseDateEngToBr } from 'utils';
import classNames from 'classnames';

import IconTrash from './IconTrash';

import styles from './ItemList.sass';

const getClasses = odd => classNames(styles['item-list'], {
  [styles.odd]: odd,
  [styles.even]: !odd,
});

const ItemList = ({ item, onClickRemove, odd }) => (
  <tr className={getClasses(odd)}>
    <td>{item.timeSpent}</td>
    <td>{item.workoutType}</td>
    <td>{parseDateEngToBr(item.date)}</td>
    <td>
      <div
        role="presentation"
        onClick={onClickRemove(item.id)}
        onKeyPress={onClickRemove(item.id)}
      >
        <IconTrash />
      </div>
    </td>
  </tr>
);

ItemList.propTypes = {
  item: PropTypes.shape({
    timeSpent: PropTypes.string,
    workoutType: PropTypes.string,
    date: PropTypes.string,
  }),
  onClickRemove: PropTypes.func.isRequired,
};

ItemList.defaultProps = {
  item: {
    timeSpent: '',
    workoutType: '',
    date: '',
  },
};

export default ItemList;
