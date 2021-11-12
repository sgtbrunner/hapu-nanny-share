import React from 'react';
import PropTypes from 'prop-types';

import { PRIMARY, SECONDARY, GREY, WHITE } from '../../utils/constants.utils';
import { LinkComponent } from './link.styles';

const Link = ({ children, textColor, to }) => (
  <LinkComponent textColor={textColor} href={to} role="link">
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
};

Link.defaultProps = {
  textColor: SECONDARY,
  to: '',
};

export default Link;
