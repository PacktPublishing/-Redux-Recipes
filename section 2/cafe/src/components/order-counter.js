import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderCounter extends Component {
  render() {
    return (
      <div>
        <strong>Number of current orders ({this.props.count})</strong>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.orders.length
});

export default connect(
  mapStateToProps,
  null
)(OrderCounter);
