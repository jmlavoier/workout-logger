import { CHANGE_FIELD } from './constants';

export const initialState = {
  timeSpent: {
    value: '0:45',
    isValid: true,
  },
  workoutType: {
    value: 'Run',
    isValid: true,
  },
  date: {
    value: '2018-04-20',
    isValid: true,
  },
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      const { fieldName, value, isValid } = action.payload;

      return {
        ...state,
        [fieldName]: {
          value,
          isValid,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default form;
