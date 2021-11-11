import styled, { css } from 'styled-components';

const isReverseDirection = (direction) => direction === 'reverse';

const getImageSectionStyles = ({ direction = 'forward' }) => css`
  flex-direction: ${isReverseDirection(direction) ? 'row-reverse' : 'row'};
  gap: ${isReverseDirection(direction) ? '20px' : '130px'};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--grey-color);
`;

export const ImageSection = styled(Section)`
  padding: 64px 0;
  align-items: center;
  font-weight: var(--normal-font-weight);
  line-height: var(--xl-line-height);

  img {
    height: 204px;
    width: 304px;
    margin-bottom: 30px;
  }

  h3 {
    font-size: var(--xl-font-size);
    margin: 0;
    padding: 0 20% 16px 20%;
    line-height: var(--xl-line-height);
    font-weight: var(--normal-font-weight);
  }

  p {
    font-size: var(--md-font-size);
    font-weight: var(--normal-font-weight);
    line-height: var(--lg-line-height);
    margin: 0;
    padding: 0 5% 16px 5%;
  }

  @media screen and (min-width: 1100px) {
    ${getImageSectionStyles}
    padding: 80px 10% 80px 10%;

    img {
      margin: 0;
      height: 392px;
      width: 584px;
    }

    div {
      text-align: left;
    }

    h3 {
      font-size: var(--xxl-font-size);
      padding: 0;
      padding-bottom: 40px;
    }

    p {
      margin: 0;
      padding: 0 60px 40px 0;
    }
  }
`;

export const FormSection = styled(Section)`
  padding: 64px 5%;

  h3 {
    font-size: var(--xl-font-size);
    font-weight: var(--normal-font-weight);
    line-height: var(--xl-line-height);
    margin: 0;
    padding-bottom: 16px;
  }

  p {
    font-size: var(--md-font-size);
    font-weight: var(--light-font-weight);
    line-height: var(--lg-line-height);
    margin: 0;
    padding-bottom: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    background-color: var(--white-color);
    height: 48px;
    border: 1px solid #dfdfdf;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  input::placeholder {
    font-size: var(--sm-font-size)
    line-height: var(--sm-line-height)
    vertical-align: center
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: var(--lg-font-size);
      line-height: var(--md-line-height);
      padding-bottom: 74px;
    }

    form {
      flex-direction: row;
      justify-content: center;
      height: 48px;
    }

    input {
      margin-right: 12px;
      width: 232px;
    }

    button {
      padding: 14px 30px;
    }

  }
`;
