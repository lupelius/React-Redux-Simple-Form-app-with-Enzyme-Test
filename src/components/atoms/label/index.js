import React from 'react';
import PropTypes from 'prop-types';
import Typing from 'react-typing-animation';

const Label = (props) => {
  const {children} = props;
  return (
    <label htmlFor={props.for}>
      <Typing><span>{children}</span></Typing>
    </label>
  )
}

Label.propTypes = {
  for: PropTypes.string,
  children: PropTypes.string
};

export default Label;