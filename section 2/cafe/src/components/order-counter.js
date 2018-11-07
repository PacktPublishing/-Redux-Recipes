import React, { Component } from 'react'

export default class OrderCounter extends Component {
  render() {
    return (
      <div>
        <strong>Number of current orders ({this.props.count})</strong>
      </div>
    )
  }
}
