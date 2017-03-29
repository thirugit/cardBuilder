import { shallow } from 'enzyme';

const proxyquire = require('proxyquire').noCallThru();

const InputComponent = proxyquire('./InputComponent', {}).default;

describe('InputComponent', () => {
  const props = { id: 'test',
    'value': 'test',
    'label': 'TEST',
    'maxlength': '20',
    'type': 'text'
  };
  const wrapperForm = shallow(<InputComponent {...props} />);
  it('should render Input component', () => {
    expect(wrapperForm.find('.size-half').length).to.equal(1);
  });
});
