import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'react-icons/lib/fa/search';

class SearchForm extends Component {
  static propTypes = {
    suggestBooks: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    const { suggestBooks, history } = this.props;

    e.preventDefault();

    if (!this.state.title) return;
    
    suggestBooks(this.state.title);
    this.setState({ title: '' });
    history.push('/suggestions');
  }

  render() {
    return (
      <form className="field has-addons" onSubmit={this.handleSubmit}>
        <div className="control has-icons-left">
          <input className="input" value={this.state.title} placeholder="Find a book" onChange={this.handleChange} />
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

export default SearchForm;