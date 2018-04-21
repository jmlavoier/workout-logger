import React from 'react';

import PropTypes from 'prop-types';

import Container from 'components/Container';
import Box from 'components/Box';
import List from 'components/List';

const WorkoutList = ({ changeOrder, workoutList }) => (
  <Container>
    <Box>
      <List items={workoutList} changeOrder={changeOrder} />
    </Box>
  </Container>
);

WorkoutList.propTypes = {
  workoutList: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeOrder: PropTypes.func.isRequired,
};

export default WorkoutList;
