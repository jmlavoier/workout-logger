import React from 'react';

import PropTypes from 'prop-types';

import Container from 'components/Container';
import Box from 'components/Box';
import List from 'components/List';

const WorkoutList = ({
  changeOrder,
  items,
  orderBy,
  clickRemove,
}) => (
  <Container>
    <Box>
      <List items={items} changeOrder={changeOrder} clickRemove={clickRemove} orderBy={orderBy} />
    </Box>
  </Container>
);

WorkoutList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeOrder: PropTypes.func.isRequired,
  clickRemove: PropTypes.func.isRequired,
  orderBy: PropTypes.shape({
    field: PropTypes.string,
    asc: PropTypes.bool,
  }).isRequired,
};

export default WorkoutList;
