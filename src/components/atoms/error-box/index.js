import React from 'react';
import PropTypes from 'prop-types';

const ErrorBox = (props) => 
  <div className={props.className}>
    {props.children}
  </div>

ErrorBox.propTypes = {
  children: PropTypes.string,
};

export default ErrorBox;