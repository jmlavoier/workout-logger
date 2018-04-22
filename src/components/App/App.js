import React from 'react';

import Form from 'containers/Form';
import WorkoutList from 'containers/WorkoutList';

import Container from 'components/Container';
import Box from 'components/Box';

import styles from './App.sass';

const App = () => (
  <div className={styles.app}>
    <Container className="reponsive" direction="column">
      <Box className="responsive">
        <h2>Workout Logger</h2>
      </Box>
      <Box className="responsive">
        <Form />
        <WorkoutList />
      </Box>
    </Container>
  </div>
);

export default App;
