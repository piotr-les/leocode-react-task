import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;
