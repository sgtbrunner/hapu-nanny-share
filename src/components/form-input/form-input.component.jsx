import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ id, name, type, placeholder, onChange }) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
);

FormInput.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
