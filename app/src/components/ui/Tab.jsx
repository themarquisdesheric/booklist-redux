import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const hyphenate = value => value.toLowerCase().replace(' ', '-');

const Tab = ({ value, visibilityFilter, children }) => {
  const hyphenated = hyphenate(value);

  return (
    <li className={visibilityFilter ===  hyphenated ? 'is-active-tab' : ''}>
      <Link href to={`/${hyphenated}`}>
        <span className="icon">{children}</span>
        <span>{value}</span>
      </Link>
    </li>
  );
};

Tab.propTypes = {
  value: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Tab;
