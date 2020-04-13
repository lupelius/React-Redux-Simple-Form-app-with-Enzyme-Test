import React from 'react';
import PropTypes from 'prop-types';
import Select from '../select';
import './style.scss';

const AnswerBox = (props) => {
  const isSelect = props.type === "select";
  return isSelect ?
    <Select {...props} />
  :
    <input {...props} data-test="inputComponent" /> 
}

AnswerBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onLoad: PropTypes.func
};

export default AnswerBox;