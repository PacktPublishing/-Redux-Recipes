import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import OrderCounter from './components/order-counter';
import OrderForm from './components/order-form';
import OrdersList from './components/orders-list';
import Customers from './components/customers';
import OrderBacklog from './components/order-backlog'
import SearchBox from './components/searchbox'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <div className="row">
            <div className="col-sm-6">
              <OrderForm />
              <hr />
              <Customers />
              <OrdersList />
            </div>
            <div className="col-sm-6">
              <OrderCounter />
              <SearchBox />
              <OrderBacklog />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
