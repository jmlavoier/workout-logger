import React from 'react';

import Form from 'containers/Form';
import WorkoutList from 'containers/WorkoutList';

const App = () => (
  <div>
    <h1>Workout Logger</h1>
    <Form />
    <WorkoutList />
  </div>
);

export default App;