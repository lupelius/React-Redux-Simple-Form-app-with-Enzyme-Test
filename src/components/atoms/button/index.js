import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = (props) => {
  return (
    <button 
      data-test="buttonComponent"
      type="button"
      style={props.isValid ? { backgroundColor: 'black' } : {}} 
      onClick={() => props.onClick(() => {
      })}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  isValid: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;