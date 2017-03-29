import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/reducer';
import InputComponent from './InputComponent';

const proxyquire = require('proxyquire').noCallThru();

const Layout = proxyquire('./Layout', {
  './InputComponent': InputComponent
}).default;

describe('Layout', () => {
  const spy = sinon.spy();
  const store = createStore(reducer);
  const props = { givenName: { value: 'abc', errors: [] },
    surName: { value: 'wer', errors: [] },
    phone: { value: '123', errors: [] },
    houseNo: { value: 'wer', errors: [] },
    email: { value: 'sdf', errors: [] },
    street: { value: 'sdf', errors: [] },
    stateName: { value: 'sdf', errors: [] },
    postcode: { value: '132', errors: [] },
    country: { value: 'dsf', errors: [] },
    suburb: { value: 'sdf', errors: [] },
    imagePreviewURL: './images/user.png',
    dispatchFieldChange: sinon.stub,
    dispatchImagePreview: sinon.stub
  };
  const wrapperForm = mount(<Provider store={store}><Layout {...props} onKeyDown={spy} /></Provider>);
  it('should render layout', () => {
    expect(wrapperForm.find('.wrap').length).to.equal(1);
  });
});
