import React from 'react';
import PropTypes from 'prop-types';

import ItemList from '../ItemList';
import styles from './List.sass';


const handleClickChangeOrder = (changeOrder, fieldName) => () => {
  changeOrder(fieldName);
};

const handleClickRemove = clickRemove => id => () => {
  clickRemove(id);
};

const List = ({ items, changeOrder, clickRemove }) => (
  <table className={styles.list} >
    <thead>
      <tr>
        <td>
          <div
            role="presentation"
            onClick={handleClickChangeOrder(changeOrder, 'timeSpent')}
            onKeyPress={handleClickChangeOrder(changeOrder, 'timeSpent')}
          >
          Tempo
          </div>
        </td>
        <td>
          <div
            role="presentation"
            onClick={handleClickChangeOrder(changeOrder, 'workoutType')}
            onKeyPress={handleClickChangeOrder(changeOrder, 'workoutType')}
          >
          Tipo
          </div>
        </td>
        <td>
          <div
            role="presentation"
            onClick={handleClickChangeOrder(changeOrder, 'date')}
            onKeyPress={handleClickChangeOrder(changeOrder, 'date')}
          >
          Data
          </div>
        </td>
        <td>
          &nbsp;
        </td>
      </tr>
    </thead>
    <tbody>
      {items && items.map(item => <ItemList key={item.id} item={item} onClickRemove={handleClickRemove(clickRemove)} />)}
    </tbody>
  </table>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  changeOrder: PropTypes.func.isRequired,
  clickRemove: PropTypes.func.isRequired,
};

List.defaultProps = {
  items: [],
};

export default List;
