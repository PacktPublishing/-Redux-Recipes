import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import OrderCounter from './components/order-counter';
import OrderForm from './components/order-form';
import OrdersList from './components/orders-list';
import Customers from './components/customers'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <OrderForm />
          <hr />
          <OrderCounter />
          <OrdersList />
          <Customers />
        </div>
      </Provider>
    );
  }
}

export default App;
