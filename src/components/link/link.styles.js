import styled, { css } from 'styled-components';

const getLinkStyles = ({ textColor }) => css`
  color: var(--${textColor}-color, var(--default-color));
`;

export const LinkComponent = styled.a`
  font-size: var(--sm-font-size);
  font-weight: var(--normal-font-weight);
  margin: 0;
  text-decoration: none;
  ${getLinkStyles};
`;
