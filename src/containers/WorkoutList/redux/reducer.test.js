import uid from 'uid';
import reducer, { initialState } from './reducer';
import { 
  CLICK_ADD,
  CLICK_REMOVE,
  ORDER_BY,
} from './constants';

describe('WorkoutList reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CLICK_ADD', () => {
    const id = uid();
    const form = {
      timeSpent: '0:45',
      workoutType: 'Swimming',
      date: '2018-04-18',
    };

    expect(reducer(initialState, {
      type: CLICK_ADD,
      payload: {
        id,
        form,
      }
    })).toEqual({
      ...initialState,
      items: [
        ...initialState.items,
        {
          id,
          ...form,
        },
      ]
    });
  });

  it('should handle CLICK_REMOVE', () => {
    const form = {
      id: 'xqiu',
      timeSpent: '0:45',
      workoutType: 'Swimming',
      date: '2018-04-18',
    }

    const state = {
      ...initialState,
      items: [form],
    }

    expect(reducer(state, {
      type: CLICK_REMOVE,
      payload: {
        id: form.id,
      }
    })).toEqual({
      ...initialState,
      items: [],
    });
  });

  it('should handle ORDER_BY date (asc)', () => {
    const state = {
      orderBy: {
        field: 'date',
        asc: true,
      },
      items: [
        {
          id: 'xd3e',
          timeSpent: '0:15',
          workoutType: 'Swimming',
          date:  '2018-04-18',
        },
        {
          id: 'xqiu',
          timeSpent: '0:45',
          workoutType: 'Swimming',
          date:  '2018-04-20',
        },
      ],
    };

    const expectedItems = [
      state.items[1],
      state.items[0],
    ];

    expect(reducer(state, {
      type: ORDER_BY,
      payload: {
        field: 'date',
      }
    })).toEqual({
      orderBy: {
        field: 'date',
        asc: false,
      },
      items: expectedItems,
    });
  });

  it('should handle ORDER_BY timeSpent (asc)', () => {
    const state = {
      ...initialState,
      items: [
        {
          id: 'xqiu',
          timeSpent: '0:45',
          workoutType: 'Swimming',
          date:  '2018-04-20',
        },
        {
          id: 'xd3e',
          timeSpent: '0:15',
          workoutType: 'Swimming',
          date:  '2018-04-18',
        },
      ],
    };

    const field = 'timeSpent';
    const asc = true;

    const expectedItems = [
      state.items[1],
      state.items[0],
    ];

    expect(reducer(state, {
      type: ORDER_BY,
      payload: {
        field,
        asc,
      }
    })).toEqual({
      orderBy: {
        field,
        asc,
      },
      items: expectedItems,
    });
  });
});