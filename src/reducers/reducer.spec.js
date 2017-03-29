import reducer, { initialState } from './reducer';
import { FIELD_CHANGE, IMAGE_PREVIEW } from '../constants/actionsConstants';

describe('Reducer', () => {
  it('should return initialState by default', () => {
    const state = reducer();
    expect(state).to.equal(initialState);
  });

  it(`should handle ${FIELD_CHANGE} for Surname`, () => {
    const value = 'test';
    const action = {
      type: FIELD_CHANGE,
      fieldName: 'surName',
      value
    };
    const newState = reducer(initialState, action);

    expect(newState).to.deep.eql({
      ...initialState,
      surName: {
        value,
        errors: []
      }
    });
  });
  it(`should handle ${IMAGE_PREVIEW} `, () => {
    const action = {
      type: IMAGE_PREVIEW,
      url: 'url'
    };
    const newState = reducer(initialState, action);

    expect(newState).to.deep.eql({
      ...initialState,
      imagePreviewURL: action.url
    });
  });
});

