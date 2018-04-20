import moment from 'moment';

import { CHANGE_FIELD } from './constants';

export const initialState = {
  timeSpent: '0:00',
  workoutType: 'Run',
  date: moment().format('L'),
};

export const form = (state = initialState, action) => {
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