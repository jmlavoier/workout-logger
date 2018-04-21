import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ item, onClickRemove }) => (
  <tr>
    <td>{item.timeSpent}</td>
    <td>{item.workoutType}</td>
    <td>{item.date}</td>
    <td>
      <div
        role="presentation"
        onClick={onClickRemove(item.id)}
        onKeyPress={onClickRemove(item.id)}
      >
        Del
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
