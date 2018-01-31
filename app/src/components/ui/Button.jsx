import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, children, clickHandler }) => (
  <button className={`button is-outlined ${className}`} onClick={clickHandler}>
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
  children: null
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  clickHandler: PropTypes.func.isRequired
};

export default Button;
