import _ from 'lodash';
import {
  CLICK_ADD,
  CLICK_REMOVE,
  ORDER_BY,
} from './constants';

export const initialState = [];

const workoutList = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ADD: {
      const { form, id } = action.payload;

      return [
        ...state,
        {
          id,
          ...form,
        },
      ];
    }

    case CLICK_REMOVE: {
      const { id } = action.payload;

      return [
        ...state.filter(workout => workout.id !== id),
      ];
    }

    case ORDER_BY: {
      const { field, asc } = action.payload;
      return _.orderBy(state, [field], [asc ? 'asc' : 'desc']);
    }

    default: {
      return state;
    }
  }
};

export default workoutList;
