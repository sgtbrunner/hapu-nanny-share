import React from 'react';
import PropTypes from 'prop-types';

import { PRIMARY, SECONDARY, WHITE, BUTTON } from '../../utils/constants.utils';
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
  color: PropTypes.oneOf([PRIMARY, SECONDARY]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  disabled: PropTypes.bool,
  textColor: PropTypes.string,
  type: PropTypes.string,
};

CustomButton.defaultProps = {
  color: PRIMARY,
  disabled: false,
  textColor: WHITE,
  type: BUTTON,
};

export default CustomButton;
