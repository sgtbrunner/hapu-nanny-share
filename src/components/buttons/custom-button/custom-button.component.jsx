import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonComponent } from './custom-button.styles';

const CustomButton = ({ children, color, disabled, textColor, type }) => (
  <CustomButtonComponent
    color={color}
    disabled={disabled}
    textColor={textColor}
    type={type}
  >
    {children}
  </CustomButtonComponent>
);

CustomButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  textColor: PropTypes.string,
  type: PropTypes.string,
};

CustomButton.defaultProps = {
  color: 'primary',
  disabled: false,
  textColor: 'white',
  type: 'button',
};

export default CustomButton;
