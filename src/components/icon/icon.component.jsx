import React from 'react';
import PropTypes from 'prop-types';

import { IconComponent } from './icon.styles';

const Icon = ({ children }) => <IconComponent>{children}</IconComponent>;

Icon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default Icon;
