import React from 'react';

const ItemList = ({ item }) => (
  <tr>
    <td>{item.timeSpent}</td>
    <td>{item.workoutType}</td>
    <td>{item.date}</td>
  </tr>
);

export default ItemList;