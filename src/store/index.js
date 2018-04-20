import { combineReducers, createStore } from 'redux';

import form from 'containers/Form/redux/reducer';

const rootReducers = combineReducers({
  form,
});

const store = createStore(rootReducers);

export default store;
