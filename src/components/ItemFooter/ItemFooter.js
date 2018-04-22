import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './ItemFooter.sass';

const getTotalDuration = (items) => {
  if (items.length < 1) {
    return '0:00';
  }

  const totalDurations = items.slice(1)
    .reduce(
      (prev, cur) => moment.duration(cur.timeSpent).add(prev),
      moment.duration(items[0].timeSpent),
    );

  return moment.utc(totalDurations.asMilliseconds()).format('HH:mm');
};

const ItemFooter = ({ items }) => {
  if (items.length < 1) {
    return null;
  }

  return (
    <tr className={styles['item-footer']}>
      <td colSpan="4"><strong>{getTotalDuration(items)} hours of exercices </strong></td>
    </tr>
  );
};

ItemFooter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemFooter;
