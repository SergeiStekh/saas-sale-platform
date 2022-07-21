import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.primary};
    max-width: 1440px;
    margin: 0 auto;
  }

  p, h1, h2, h3, h4, nav, div, ul, li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export default GlobalStyles