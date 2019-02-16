import {OrderForm} from './order-form';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux'

const mockStore = configureMockStore();
let store, props, wrapper;

Enzyme.configure({adapter: new Adapter()});

describe('OrderForm component', () => {
  beforeEach(()=> {
    store = mockStore();

    props = {
      addOrder: jest.fn()
    }

    wrapper = mount(
      <Provider store={store}>
        <OrderForm {...props}/>
      </Provider>
    )
  })

  it('should render the right way', () => {
    expect(wrapper.find('button').text()).toEqual('Add');
    expect(wrapper.find('input').length).toBe(2);
  })

  it('should call add order function', () => {
    wrapper.find('form').simulate('submit');

    expect(props.addOrder).toHaveBeenCalledTimes(1);
  })

})