import React, { Component } from 'react';
import './App.css';
import OrderCounter from './components/order-counter';
import OrderForm from './components/order-form';
import OrdersList from './components/orders-list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    }
  }

  addOrder = (order) => {
    let {orders} = this.state;
    orders.push(order);
    this.setState({orders});
  }

  render() {
    return (
      <div className="App">
        <OrderForm addOrder={this.addOrder}/>
        <hr />
        <OrderCounter count={this.state.orders.length} />
        <OrdersList orders={this.state.orders}/>
      </div>
    );
  }
}

export default App;
