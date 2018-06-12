import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/*
  Component Definition
*/
export const Button = ({ children, type, onClick }) => (
  <button type={type} className="button basic" onClick={onClick}>
    { children }
  </button>
);

export const SubmitBtn = ({ children }) => (
  <button type="submit" className="button submit">
    { children }
  </button>
);

/*
  Props Definition
*/
Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'button'
};
