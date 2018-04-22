import _ from 'lodash';
import {
  CLICK_ADD,
  CLICK_REMOVE,
  ORDER_BY,
} from './constants';

export const initialState = {
  orderBy: {
    field: 'date',
    asc: true,
  },
  items: [],
};

const workoutList = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ADD: {
      const { form, id } = action.payload;
      const { items, orderBy } = state;

      return {
        ...state,
        items: _.orderBy([
          ...items,
          {
            id,
            ...form,
          },
        ], [orderBy.field], [orderBy.asc ? 'asc' : 'desc']),
      };
    }

    case CLICK_REMOVE: {
      const { id } = action.payload;
      const { items } = state;

      return {
        ...state,
        items: [
          ...items.filter(workout => workout.id !== id),
        ],
      };
    }

    case ORDER_BY: {
      const { field } = action.payload;
      const { items, orderBy } = state;

      const asc = (field === orderBy.field) ? !orderBy.asc : true;

      return {
        orderBy: {
          field,
          asc,
        },
        items: _.orderBy(items, [field], [asc ? 'asc' : 'desc']),
      };
    }

    default: {
      return state;
    }
  }
};

export default workoutList;
