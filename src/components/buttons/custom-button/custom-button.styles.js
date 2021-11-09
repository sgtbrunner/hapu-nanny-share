import styled, { css } from 'styled-components';

const getButtonStyles = ({ color, textColor }) => css`
  background-color: var(--${color}-color, var(--primary-color));
  color: var(--${textColor}-color, var(--white-color));
`;

export const CustomButtonContainer = styled.button`
  font-family: var(--default-font-family);
  font-size: var(--md-font-size);
  padding: 12px 22px;
  border-radius: 4px;
  border-style: hidden;
  ${getButtonStyles}
`;
