import React from 'react';

import Container from 'components/Container';
import Box from 'components/Box';
import List from 'components/List';

const mockList = [
  {
    id: 0,
    timeSpent: '1:00',
    workoutType: 'Run',
    date: '15/04/2018',
  },
  {
    id: 1,
    timeSpent: '0:30',
    workoutType: 'Run',
    date: '15/04/2018',
  },
];

const WorkoutList = () => (
  <Container>
    <Box>
      <List items={mockList} />
    </Box>
  </Container>
);

export default WorkoutList;
