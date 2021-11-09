import styled, { css } from 'styled-components';

const getButtonStyles = ({ textColor }) => css`
  color: var(--${textColor}-color, var(--default-color));
`;

export const LinkButtonContainer = styled.button`
  font-family: var(--default-font-family);
  font-size: var(--md-font-size);
  font-weight: 500;
  border: none;
  padding: 0;
  background: none;
  ${getButtonStyles};
`;
