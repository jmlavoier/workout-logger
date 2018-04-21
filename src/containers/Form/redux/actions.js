import { CHANGE_FIELD } from './constants';

export const changeField = (fieldName, value, isValid) => ({
  type: CHANGE_FIELD,
  payload: {
    fieldName,
    value,
    isValid,
  },
});
