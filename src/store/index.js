import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import form from 'containers/Form/redux/reducer';
import workoutList from 'containers/WorkoutList/redux/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducers = combineReducers({
  form,
  workoutList,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
