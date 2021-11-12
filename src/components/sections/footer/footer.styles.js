import styled from 'styled-components';
import { SMALL_SCREEN_BREAKPOINT } from '../../../global.styles';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 5% 24px 5%;
  background-color: var(--white-color);

  h3 {
    font-size: var(--xl-font-size);
    font-weight: var(--normal-font-weight);
    line-height: var(--xl-line-height);
    color: var(--dark-grey-color);
    margin: 0;
  }

  > a {
    font-size: var(--md-font-size);
    font-weight: var(--normal-font-weight);
    line-height: var(--md-line-height);
  }

  button {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 308px;

    div {
      text-align: left;
      font-weight: var(--light-font-weight);
    }

    div :nth-child(1) {
      margin: 0;
      font-size: var(--md-font-size);
      line-height: var(--lg-line-height);
    }

    div :nth-child(2) {
      margin: 0;
      font-size: var(--xs-font-size);
      line-height: var(--xs-line-height);
    }
  }
`;

export const FooterSubTitle = styled.p`
  margin: 0;
  font-size: var(--md-font-size);
  font-weight: var(--light-font-weight);
  line-height: var(--lg-line-height);
  padding-bottom: 24px;
`;

export const FooterLinkBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
  margin: 0 20%;

  @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    width: 100%;
  }
`;

export const TextLinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  padding: 32px 0 24px 0;
  gap: 32px;
  flex-wrap: wrap;
  margin: 0 18%;
  min-width: 230px;

  a {
    white-space: nowrap;
    font-size: var(--sm-font-size);
    font-weight: var(--normal-font-weight);
    line-height: 20px;
  }

  @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
    margin: 0;
    margin-left: 120px;
  }
`;

export const IconLinksContainer = styled.ul`
  display: flex;
  margin: 0;
  padding-left: 0;
  padding-bottom: 40px;
  gap: 16px;

  div {
    position: relative;

    img {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
    padding-bottom: 0;
  }
`;

export const CopyrightText = styled.p`
  font-size: var(--xs-font-size);
  font-weight: var(--light-font-weight);
  line-height: var(--xs-line-height);
  color: var(--dark-grey-color);
`;
