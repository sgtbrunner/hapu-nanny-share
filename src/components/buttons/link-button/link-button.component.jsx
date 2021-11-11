import React from 'react';
import PropTypes from 'prop-types';

import { LinkButtonComponent } from './link-button.styles';

const LinkButton = ({ children, textColor }) => (
  <LinkButtonComponent textColor={textColor} type="link">
    {children}
  </LinkButtonComponent>
);

LinkButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  textColor: PropTypes.oneOf(['grey', 'white']),
};

LinkButton.defaultProps = {
  textColor: 'white',
};

export default LinkButton;
