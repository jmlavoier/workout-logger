import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Box from 'components/Box';
import OrderButton from 'components/OrderButton';
import ItemList from 'components/ItemList';
import ItemFooter from 'components/ItemFooter';

import styles from './List.sass';

const handleClickRemove = clickRemove => id => () => {
  clickRemove(id);
};

const List = ({
  items,
  changeOrder,
  clickRemove,
  orderBy,
}) => (
  <table className={styles.list} >
    <thead>
      <tr>
        <td>
          <OrderButton changeOrder={changeOrder} fieldName="timeSpent" orderBy={orderBy}>
            Tempo
          </OrderButton>
        </td>
        <td>
          <OrderButton changeOrder={changeOrder} fieldName="workoutType" orderBy={orderBy}>
            Tipo
          </OrderButton>
        </td>
        <td>
          <OrderButton changeOrder={changeOrder} fieldName="date" orderBy={orderBy}>
            Data
          </OrderButton>
        </td>
        <td>
          &nbsp;
        </td>
      </tr>
    </thead>
    <tbody>
      {items.length > 0 ? (
        items.map((item, i) => <ItemList key={item.id} item={item} odd={(i % 2) !== 0} onClickRemove={handleClickRemove(clickRemove)} />)
      ) : (
        <tr>
          <td colSpan="4">
            <Container>
              <Box>Lista de workouts está vazia...</Box>
            </Container>
          </td>
        </tr>
      )}
      <ItemFooter items={items} />
    </tbody>
  </table>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  changeOrder: PropTypes.func.isRequired,
  clickRemove: PropTypes.func.isRequired,
  orderBy: PropTypes.shape({
    field: PropTypes.string,
    asc: PropTypes.bool,
  }).isRequired,
};

List.defaultProps = {
  items: [],
};

export default List;
