import React from 'react';
import PropTypes from 'prop-types';

import { PRIMARY, SECONDARY, GREY, WHITE } from '../../utils/constants.utils';
import { LinkComponent } from './link.styles';

const Link = ({ children, textColor, to, decoration }) => (
  <LinkComponent
    textColor={textColor}
    decoration={decoration}
    href={to}
    role="link"
  >
    {children}
  </LinkComponent>
);

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  textColor: PropTypes.oneOf([PRIMARY, SECONDARY, GREY, WHITE]),
  to: PropTypes.string,
  decoration: PropTypes.bool,
};

Link.defaultProps = {
  textColor: SECONDARY,
  to: '',
  decoration: false,
};

export default Link;
