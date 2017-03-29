import { FIELD_CHANGE } from '../constants/actionsConstants';

const proxyquire = require('proxyquire').noCallThru();

const sandbox = sinon.sandbox.create();
const dispatchSpy = sandbox.spy();

const { fieldChange } = proxyquire('./userActions', {});


describe('fieldChange', () => {
  let mockFieldName;
  let mockValue;

  it(`should dispatch ${FIELD_CHANGE}`, () => {
    mockFieldName = 'fieldName';
    mockValue = 'value';
    fieldChange(mockFieldName, mockValue, [])(dispatchSpy);
    expect(dispatchSpy).to.have.been.calledWith({
      type: FIELD_CHANGE,
      fieldName: mockFieldName,
      value: mockValue
    });
  });
});

