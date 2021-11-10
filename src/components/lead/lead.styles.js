import styled from 'styled-components';

export const LeadContainer = styled.div`
  color: var(--white-color);
  border: 1px solid #dfdfdf;
  width: 100%;
`;

export const LeadContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 28px;
    padding-bottom: 28px;
  }
`;

export const LeadIcon = styled.img`
  padding-bottom: 16px;
  width: var(--icon-length);

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-bottom: 0;
    width: auto;
  }
`;

export const LeadLink = styled.a`
  color: var(--secondary-color);
  text-decoration: underline;
  cursor: pointer;
  font-family: var(--default-font-family);
  font-weight: var(--normal-font-weight);
  padding: 0 64px 12px 64px;
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    padding: 0 2px 0 0;
  }
`;

export const LeadText = styled.h5`
  color: var(--black-color);
  font-family: var(--default-font-family);
  font-weight: var(--normal-font-weight);
  font-size: 14px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
