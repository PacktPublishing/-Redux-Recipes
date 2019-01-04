import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class OrderBacklog extends Component {
  render() {
    return <div>{this.props.backlog.map(order=>(
      <div key={order.time} className='order-card'>
        <table>
          <tbody>
            {order.list.map(item => (
              <tr key={item.id}>
                <td>{item.amount}</td>
                <td>{item.order}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <div>customer: {order.customer}</div>
        <div>time: {order.time}</div>
        <div className="order-id">{order.id}</div>
      </div>
    ))}</div>;
  }
}

const mapStateToProps = state => ({
  backlog: state.backlog
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderBacklog);
