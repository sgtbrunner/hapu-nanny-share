import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #00A870;
        --secondary-color: #4285f4;
        --white-color: white;
        --grey-color: #3D3D3D;
        --disabled-color: gray;
        --error-color: red;
        --default-font-family: 'Inter';
        --icon-length: 40px;
        --md-font-size: 14px;
    }

    body {
        margin: 0;
        font-family: 'Inter';
    }

    button {
        cursor: pointer;
    }

    code, html {
        font-family: 'Inter', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    
    * {
        box-sizing: border-box;
    }
`;

export const HiddenOnMobile = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: initial;
  }
`;

export default GlobalStyle;
