import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-stretch: 100%;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/opensans/v29/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4taVQUwaEQbjB_mQ.woff) format('woff');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }

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