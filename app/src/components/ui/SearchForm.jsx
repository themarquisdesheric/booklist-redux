import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import path from 'path';
import SearchIcon from 'react-icons/lib/fa/search';

class SearchForm extends Component {
  static propTypes = {
    getBooks: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired
  };
  
  state = {
    query: ''
  };

  componentDidMount() {
    const { getBooks, location: { pathname, search } } = this.props;
    const query = path.basename(pathname);
    const { page } = queryString.parse(search);
    const pageStartIndex = page - 1;

    if (query) getBooks(query, pageStartIndex);
  }
  

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleSubmit = (e) => {
    const { getBooks, history } = this.props;
    const { query } = this.state;

    e.preventDefault();

    if (!query) return;
    
    getBooks(query);
    this.setState({ query: '' });
    history.push(`/results/${query}?page=1`);
  }

  render() {
    return (
      <form className="field has-addons" onSubmit={this.handleSubmit}>
        <div className="control has-icons-left">
          <input className="input" value={this.state.query} placeholder="Find a book" onChange={this.handleChange} />
          <span className="icon is-small is-left">
            <SearchIcon />
          </span>
        </div>
        <div className="control has-icons-left">
          <input className="button button-gradient" type="submit" value="Search" />
        </div>
      </form>
    );
  }
}

export default withRouter(SearchForm);
