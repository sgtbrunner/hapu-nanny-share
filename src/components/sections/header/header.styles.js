import styled from 'styled-components';

import MobileBgHeader from '../../../assets/images/header-bg-mobile.svg';
import DesktopBgHeager from '../../../assets/images/header-bg.svg';

export const HeaderContainer = styled.header`
  background-image: url(${MobileBgHeader}),
    linear-gradient(314.72deg, #c86dd7 -1.5%, #7e49c3 39.43%, #5912ac 86.02%);
  background-repeat: no-repeat;
  background-size: cover;
  height: 640px;

  @media screen and (min-width: 768px) {
    background-image: url(${DesktopBgHeager}),
      linear-gradient(314.72deg, #c86dd7 -1.5%, #7e49c3 39.43%, #5912ac 86.02%);
    height: 616px;
  }
`;

export const HeroContainer = styled.div`
  padding: 90px 16px 0 16px;
  display: flex;
  justify-content: space-between;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 100px 10% 0 10%;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    padding: 100px 228px 0 128px;
  }
`;

export const HeroTitle = styled.div`
  color: var(--white-color);
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 28px;
    margin: 0 0 24px 0;
    line-height: 32px;
  }

  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-right: 40px;

    h1 {
      font-size: 40px;
      font-weight: 500;
      margin-bottom: 16px;
      max-width: 520px;
      line-height: 48px;
    }

    h3 {
      max-width: 584px;
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const HeroPlay = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  gap: 1em;

  a {
    color: var(--white-color);
  }
`;

export const HeroImageContainer = styled.div`
  text-align: right;
`;
