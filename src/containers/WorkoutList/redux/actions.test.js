import * as actions from './actions';
import uid from 'uid';
import {
  CLICK_ADD,
  ORDER_BY,
} from './constants';


describe('WorkoutList actions', () => {
  it('should create an action to add new log', () => {
    const form = {
      timeSpent: '0:00',
      workoutType: 'Run',
      date: '2018-04-20',
    };

    const id = uid();

    const expectedAction = {
      type: CLICK_ADD,
      payload: {
        id,
        form,
      },
    };

    expect(actions.clickAdd(form, id)).toEqual(expectedAction);
  });

  it('should create an action to order list by', () => {
    const field = 'timeSpent';

    const expectedAction = {
      type: ORDER_BY,
      payload: {
        field,
      },
    };

    expect(actions.orderBy(field)).toEqual(expectedAction);
  });
});