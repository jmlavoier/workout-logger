import * as actions from './actions';
import { CHANGE_FIELD } from './constants';

describe('actions Form', () => {
  it('should create an action to change field', () => {
    const value = 'Finish docs';
    const fieldName = 'timeSpent';

    const expectedAction = {
      type: CHANGE_FIELD,
      payload: {
        value,
        fieldName,
      },
    };

    expect(actions.changeField(fieldName, value)).toEqual(expectedAction)
  });
})