import React from 'react';
import PropTypes from 'prop-types';

import ItemList from '../ItemList';

const List = ({ items }) => (
  <table>
    <thead>
      <tr>
        <td>Tempo</td>
        <td>Tipo</td>
        <td>Data</td>
      </tr>
    </thead>
    <tbody>
      {items && items.map(item => <ItemList key={item.id} item={item} />)}
    </tbody>
  </table>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default List;