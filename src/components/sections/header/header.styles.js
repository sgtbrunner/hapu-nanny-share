import styled from 'styled-components';
import { SMALL_SCREEN_BREAKPOINT } from '../../../global.styles';

import MobileBgHeader from '../../../assets/images/header-bg-mobile.svg';
import DesktopBgHeager from '../../../assets/images/header-bg.svg';

export const HeaderContainer = styled.header`
  background-image: url(${MobileBgHeader}),
    linear-gradient(314.72deg, #c86dd7 -1.5%, #7e49c3 39.43%, #5912ac 86.02%);
  background-repeat: no-repeat;
  background-size: cover;
  height: 640px;

  @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
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

  @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
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
    font-size: var(--xxl-font-size);
    margin: 0 0 24px 0;
    line-height: var(--xl-line-height);
  }

  h3 {
    font-weight: var(--light-font-weight);
    font-size: var(--md-font-size);
    line-height: var(--lg-line-height);
    margin: 0;
  }

  @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
    padding-top: 30px;
    padding-right: 40px;

    h1 {
      font-size: var(--xxxl-font-size);
      font-weight: var(--normal-font-weight);
      margin-bottom: 16px;
      max-width: 520px;
      line-height: var(--xxl-line-height);
    }

    h3 {
      max-width: 584px;
      font-size: var(--lg-font-size);
      line-height: var(--md-line-height);
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
