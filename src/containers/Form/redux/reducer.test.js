import reducer, { initialState } from './reducer';
import { CHANGE_FIELD } from './constants';


describe('reducer Form', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_FIELD', () => {
    const fieldName = 'timeSpent';
    const value = '0:30';

    expect(reducer({}, {
      type: CHANGE_FIELD,
      payload: {
        fieldName,
        value,
      }
    })).toEqual({
      [fieldName]: value,
    });
  });
});