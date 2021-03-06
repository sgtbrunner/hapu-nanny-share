import styled, { css } from 'styled-components';

const getButtonStyles = ({ color, textColor }) => css`
  background-color: var(--${color}-color, var(--primary-color));
  color: var(--${textColor}-color, var(--white-color));
`;

export const CustomButtonComponent = styled.button`
  font-family: var(--default-font-family);
  font-size: var(--sm-font-size);
  padding: 12px 22px;
  border-radius: 4px;
  border-style: hidden;
  min-width: 94px;
  ${getButtonStyles}
`;
