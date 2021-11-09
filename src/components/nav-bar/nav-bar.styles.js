import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBarImage = styled.img`
  padding-left: 16px;

  @media screen and (min-width: 768px) {
    padding: 0 40px 0 20px;
  }
`;

export const NavBarList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;

  li {
    padding-right: 16px;
  }

  @media screen and (min-width: 768px) {
    width: auto;

    li {
      padding-right: 32px;
    }
  }
`;
