import { createGlobalStyle } from 'styled-components';
import { injectGlobal } from 'styled-components';
import { OpenSansRegular } from 'fonts/OpenSans';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${OpenSansRegular.ttf}) format("truetype")
  }

  * {
    box-sizing: border-box;
  }

  html, body, div, h1, h2, h3, h4, h5, h6, p,
  a, img, strong, ol, ul, li, fieldset, form, label,
  legend, table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, figure, figcaption,
  footer, header, hgroup, menu, nav, output, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Open Sans';
  }

`;
const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    primaryBackground: '#3AAFA9',
    primaryAccent: '#2B7A78',
    secondaryAccent: '#DEF2F1',
    darkAccent: '#17252A',
    ash: '#BABABA',
    lightAsh: '#CECECE',
    sky: '#94A8B3',
    lightSky: '#A9BFC9',
    cream: '#DCD3C9',
    lightCream: '#EFE6DC',
    grey: '#DEDEDE',
    lightGrey: '#F7F5F7',
    mint: '#D4E8DC',
  },
  zindex: {
    base: 1,
    headerFooter: 1000,
    hero: 100,
    heroContent: 101,
    row: 200,
    block: 300,
    content: 500,
  },
};

export default theme;
