import { CHANGE_FIELD } from './constants';

export const initialState = {
  timeSpent: '0:45',
  workoutType: 'Run',
  date: '2018-04-20',
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const { fieldName, value } = action.payload;

      return {
        ...state,
        [fieldName]: value,
      };
    }
    default: {
      return state;
    }
  }
};

export default form;
