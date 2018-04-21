import { combineReducers, createStore } from 'redux';

import form from 'containers/Form/redux/reducer';
import workoutList from 'containers/WorkoutList/redux/reducer';

const rootReducers = combineReducers({
  form,
  workoutList,
});

const store = createStore(rootReducers);

export default store;
