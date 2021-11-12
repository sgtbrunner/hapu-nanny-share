import styled from 'styled-components';
import { SMALL_SCREEN_BREAKPOINT } from '../../global.styles';

export const SectionDivider = styled.hr`
  margin: 0;
  border: 1px solid #dfdfdf;
  margin: 0 5%;

  @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
    margin: 0 20%;
  }
`;
