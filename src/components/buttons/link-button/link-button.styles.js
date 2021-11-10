import styled, { css } from 'styled-components';

const getButtonStyles = ({ textColor }) => css`
  color: var(--${textColor}-color, var(--default-color));
`;

export const LinkButtonContainer = styled.button`
  font-family: var(--default-font-family);
  font-size: var(--sm-font-size);
  font-weight: var(--normal-font-weight);
  border: none;
  padding: 0;
  background: none;
  ${getButtonStyles};
`;
