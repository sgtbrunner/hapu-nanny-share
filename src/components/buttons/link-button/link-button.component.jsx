import React from 'react';
import PropTypes from 'prop-types';

import { LinkButtonContainer } from './link-button.styles';

const LinkButton = ({ children, textColor }) => (
  <LinkButtonContainer textColor={textColor}>{children}</LinkButtonContainer>
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
