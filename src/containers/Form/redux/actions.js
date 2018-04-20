import { CHANGE_FIELD } from './constants';

export const changeField = (fieldName, value) => ({
  type: CHANGE_FIELD,
  payload: {
    fieldName,
    value,
  },
});
