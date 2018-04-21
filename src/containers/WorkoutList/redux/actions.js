import {
  CLICK_ADD,
  CLICK_REMOVE,
  ORDER_BY,
} from './constants';

export const clickAdd = (form, id) => ({
  type: CLICK_ADD,
  payload: {
    id,
    form,
  },
});

export const clickRemove = id => ({
  type: CLICK_REMOVE,
  payload: {
    id,
  },
});

export const orderBy = field => ({
  type: ORDER_BY,
  payload: {
    field,
  },
});

