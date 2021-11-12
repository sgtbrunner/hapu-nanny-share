import styled, { createGlobalStyle } from 'styled-components';

export const SMALL_SCREEN_BREAKPOINT = 768;

const GlobalStyle = createGlobalStyle`
    :root {
        // COLORS
        --primary-color: #00A870;
        --secondary-color: #5E20A4;
        --white-color: white;
        --black-color: #000000;
        --light-grey-color: #F2F2F2;
        --dark-grey-color: #3D3D3D;
        --disabled-color: gray;
        --error-color: red;

        // FONT
        --default-font-family: 'Inter';
        --xs-font-size: 12px;
        --sm-font-size: 14px;
        --md-font-size: 16px;
        --lg-font-size: 18px;
        --xl-font-size: 22px;
        --xxl-font-size: 28px;
        --xxxl-font-size: 40px;
        --light-font-weight: 400;
        --normal-font-weight: 500;

        //LINE HEIGHT
        --xs-line-height: 16px;
        --sm-line-height: 20px;
        --md-line-height: 24px;
        --lg-line-height: 28px;
        --xl-line-height: 32px;
        --xxl-line-height: 48px;
        
        --icon-length: 66px;
    }

    body {
        margin: 0;
        font-family: 'Inter';
    }

    a, button {
        cursor: pointer;
    }

    a {
        color: var(--secondary-color);
        text-decoration: underline;
    }

    main {
        background-color: var(--light-grey-color);
    }

    code, html {
        font-family: 'Inter', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    ul {
        list-style: none;
    }
    
    * {
        box-sizing: border-box;
    }
`;

export const HiddenOnSmallScreens = styled.div`
  display: none;

  @media screen and (min-width: ${SMALL_SCREEN_BREAKPOINT}px) {
    display: initial;
  }
`;

export default GlobalStyle;
