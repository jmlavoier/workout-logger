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

    expect(reducer([], {
      type: CLICK_ADD,
      payload: {
        id,
        form,
      }
    })).toEqual([
      { 
        id,
        ...form,
      }
    ]);
  });

  it('should handle CLICK_REMOVE', () => {
    const form = {
      id: 'xqiu',
      timeSpent: '0:45',
      workoutType: 'Swimming',
      date: '2018-04-18',
    }

    expect(reducer([form], {
      type: CLICK_REMOVE,
      payload: {
        id: form.id,
      }
    })).toEqual([]);
  });

  it('should handle ORDER_BY date (asc)', () => {
    const workoutList = [
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
    ];

    const expectedWorkoutList = [
      workoutList[1],
      workoutList[0],
    ];

    expect(reducer(workoutList, {
      type: ORDER_BY,
      payload: {
        field: 'date',
        asc: true,
      }
    })).toEqual(expectedWorkoutList);
  });

  it('should handle ORDER_BY timeSpent (asc)', () => {
    const workoutList = [
      {
        id: 'xqiu',
        timeSpent: '0:45',
        workoutType: 'Swimming',
        date:  '2018-04-20',
      },
      {
        id: 'xd3e',
        timeSpent: '0:10',
        workoutType: 'Swimming',
        date:  '2018-04-18',
      },
    ];

    const expectedWorkoutList = [
      workoutList[1],
      workoutList[0],
    ];

    expect(reducer(workoutList, {
      type: ORDER_BY,
      payload: {
        field: 'timeSpent',
        asc: true,
      }
    })).toEqual(expectedWorkoutList);
  });

});