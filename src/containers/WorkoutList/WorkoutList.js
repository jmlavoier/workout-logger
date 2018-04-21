import React from 'react';

import PropTypes from 'prop-types';

import Container from 'components/Container';
import Box from 'components/Box';
import List from 'components/List';

const WorkoutList = ({ changeOrder, items, clickRemove }) => (
  <Container>
    <Box>
      <List items={items} changeOrder={changeOrder} clickRemove={clickRemove} />
    </Box>
  </Container>
);

WorkoutList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeOrder: PropTypes.func.isRequired,
  clickRemove: PropTypes.func.isRequired,
};

export default WorkoutList;
