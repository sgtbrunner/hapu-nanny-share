import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 5% 24px 5%;
  background-color: var(--white-color);

  h3 {
    font-size: 22px;
    font-weight: 500;
    line-height: 32px;
    color: var(--dark-grey-color);
    margin: 0;
  }

  button {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 308px;

    div {
      text-align: left;
      font-weight: 400;
    }

    div :nth-child(1) {
      margin: 0;
      font-size: 16px;
      line-height: 28px;
    }

    div :nth-child(2) {
      margin: 0;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const FooterSubTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  padding-bottom: 24px;
`;

export const FooterLinkBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
  margin: 0 20%;

  @media screen and (min-width: 768px) {
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
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #3d3d3d;
`;
