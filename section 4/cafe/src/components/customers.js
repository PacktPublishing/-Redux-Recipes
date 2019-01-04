import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { markCustomerAsSelected } from '../actions/customersActions';

export class Customers extends Component {
  markAsSelected = e => {
    this.props.markCustomerAsSelected(
      parseInt(e.target.getAttribute('data-id'))
    );
  };

  render() {
    return (
      <div>
        {this.props.customers.map(customer => (
          <div
            key={customer.id}
            data-id={customer.id}
            className={'customer-card ' + (customer.selected ? 'selected' : '')}
            onClick={this.markAsSelected}
          >
            <div className="order-count">Orders: {this.props.backlog.filter(order => order.customer === customer.id).length}</div>
            {customer.name}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customers,
  backlog: state.backlog
});

const mapDispatchToProps = {
  markCustomerAsSelected
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
