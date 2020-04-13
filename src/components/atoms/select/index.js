import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => 
  <select {...props} defaultValue="true" data-test="selectComponent">
    <option onChange={props.onChange} value="true">Yes</option>
    <option onChange={props.onChange} value="false">No</option>
  </select>


Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onLoad: PropTypes.func
};

export default Select;