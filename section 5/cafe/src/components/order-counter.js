import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class OrderCounter extends Component {
  render() {
    return (
      <div>
        <strong>Number of current orders ({this.props.count})</strong>
      </div>
    );
  }
}

OrderCounter.propTypes = {
  count: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  count: state.backlog.length
});

export default connect(
  mapStateToProps,
  null
)(OrderCounter);
