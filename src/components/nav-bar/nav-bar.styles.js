import styled from 'styled-components';
import { SMALL_SCREEN_BREAKPOINT } from '../../global.styles';

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    padding-left: 16px;

    @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
      padding: 0 40px 0 20px;
    }
  }
`;

export const NavBarLeftLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBarList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    padding-right: 16px;
  }

  @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
    width: auto;

    li {
      padding-right: 32px;
    }
  }
`;
