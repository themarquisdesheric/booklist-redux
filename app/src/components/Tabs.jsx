import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ filter, children }) => {
  const [ Book, Files ] = children;
  return (
    <div className="tabs is-fullwidth is-toggle">
      <ul>
        <li className="is-active">
          <a href="/">
            <span className="icon is-small"><Book /></span>
            <span>Reading list</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span className="icon is-small"><Files /></span>
            <span>Finished books</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

Tabs.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.func).isRequired
};

export default Tabs;
