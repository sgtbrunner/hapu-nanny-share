import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, color, disabled, textColor }) => (
  <CustomButtonContainer
    color={color}
    disabled={disabled}
    textColor={textColor}
  >
    {children}
  </CustomButtonContainer>
);

CustomButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  textColor: PropTypes.string,
};

CustomButton.defaultProps = {
  color: 'primary',
  disabled: false,
  textColor: 'white',
};

export default CustomButton;
