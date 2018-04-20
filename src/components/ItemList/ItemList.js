import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ item }) => (
  <tr>
    <td>{item.timeSpent}</td>
    <td>{item.workoutType}</td>
    <td>{item.date}</td>
  </tr>
);

ItemList.propTypes = {
  item: PropTypes.shape({
    timeSpent: PropTypes.string,
    workoutType: PropTypes.string,
    date: PropTypes.string,
  }),
};

ItemList.defaultProps = {
  item: {
    timeSpent: '',
    workoutType: '',
    date: '',
  },
};

export default ItemList;
