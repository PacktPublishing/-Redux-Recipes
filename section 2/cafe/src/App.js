import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';
import OrderCounter from './components/order-counter';
import OrderForm from './components/order-form';
import OrdersList from './components/orders-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
  }

  addOrder = order => {
    let { orders } = this.state;
    orders.push(order);
    this.setState({ orders });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <OrderForm addOrder={this.addOrder} />
          <hr />
          <OrderCounter />
          <OrdersList />
        </div>
      </Provider>
    );
  }
}

export default App;
