import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSearchTerm } from '../actions/searchActions';

export class searchbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.search = this.search.bind(this);
  }

  handleChanges = e => {
    this.setState({ searchTerm: e.target.value });
  };

  search = e => {
    e.preventDefault();
    this.props.changeSearchTerm(this.state.searchTerm);
  };

  clearSearch = e => {
    this.setState({searchTerm: ''});
    this.props.changeSearchTerm('');
  }

  render() {
    return (
      <div className="input-group my-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search for order items .."
          name="search"
          value={this.state.searchTerm}
          onChange={this.handleChanges}
        />
        <div className="input-group-append">
          <button
            className={
              'btn btn-outline-danger ' +
              (this.state.searchTerm ? 'd-block' : 'd-none')
            }
            onClick={this.clearSearch}
            type="button"
          >
            &times;
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={this.search}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  changeSearchTerm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searchbox);
