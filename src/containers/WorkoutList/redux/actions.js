import {
  CLICK_ADD,
  ORDER_BY,
} from './constants';

export const clickAdd = (form, id) => ({
  type: CLICK_ADD,
  payload: {
    id,
    form,
  },
});

export const orderBy = (field, asc) => ({
  type: ORDER_BY,
  payload: {
    field,
    asc,
  },
});
