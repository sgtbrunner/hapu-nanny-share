import React from 'react';
import PropTypes from 'prop-types';

import { PRIMARY, SECONDARY, WHITE, BUTTON } from '../../utils/constants.utils';
import Loader from '../loader/loader.component';
import { CustomButtonComponent } from './custom-button.styles';

const CustomButton = ({
  children,
  color,
  disabled,
  textColor,
  type,
  loading,
}) => (
  <CustomButtonComponent
    color={color}
    disabled={disabled}
    textColor={textColor}
    type={type}
  >
    {loading ? <Loader /> : children}
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
  loading: PropTypes.bool,
};

CustomButton.defaultProps = {
  color: PRIMARY,
  disabled: false,
  textColor: WHITE,
  type: BUTTON,
  loading: false,
};

export default CustomButton;
