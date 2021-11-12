import styled, { css } from 'styled-components';

const getLinkStyles = ({ textColor, decoration }) => css`
  color: var(--${textColor}-color, var(--default-color));
  text-decoration: ${decoration ? 'underline' : 'none'};
`;

export const LinkComponent = styled.a`
  font-size: var(--sm-font-size);
  font-weight: var(--normal-font-weight);
  margin: 0;
  ${getLinkStyles};
`;
