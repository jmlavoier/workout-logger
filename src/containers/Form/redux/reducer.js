import moment from 'moment';

import { CHANGE_FIELD } from './constants';

export const initialState = {
  timeSpent: {
    value: '0:00',
    isValid: true,
  },
  workoutType: {
    value: 'Run',
    isValid: true,
  },
  date: {
    value: moment().format('YYYY-MM-DD'),
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
