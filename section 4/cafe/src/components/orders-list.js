import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteOrder } from '../actions/orderActions';

class OrdersList extends Component {
  deleteOrder = e => {
    this.props.deleteOrder(parseInt(e.target.getAttribute('data-id')));
  };

  loadOrders = orders => {
    let list = [];
    for (let i = 0; i < orders.length; i++) {
      list.push(
        <div key={i.toString()} className="d-flex flex-row px-3 py-1 order-row">
          <div className="flex-fill w-100 p-2">{orders[i].order}</div>
          <div className="flex-fill flex-shrink-1 py-2 px-4">
            {orders[i].amount}
          </div>
          <div className="flex-fill flex-shrink-1 p-1">
            <button
              className="btn btn-danger"
              data-id={orders[i].id}
              onClick={this.deleteOrder}
            >
              delete
            </button>
          </div>
        </div>
      );
    }
    return list;
  };

  render() {
    let orders = this.props.orders;
    return <div className="pt-3">{this.loadOrders(orders)}</div>;
  }
}

OrdersList.propTypes = {
  orders: PropTypes.array.isRequired,
  deleteOrder: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(
  mapStateToProps,
  { deleteOrder }
)(OrdersList);
