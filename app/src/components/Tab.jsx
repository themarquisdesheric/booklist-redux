import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const hyphenate = link => link.toLowerCase().replace(' ', '-');

const Tab = ({ setFilter, active, value, children }) => {
  return (
    <li onClick={setFilter} className={active ? 'is-active' : ''}>
      {/* use href for link */}
      <Link to={`/${hyphenate(value)}`}>
        <span className="icon is-small">{children}</span>
        <span>{value}</span>
      </Link>
    </li>
  );
};

Tab.propTypes = {
  setFilter: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Tab;
