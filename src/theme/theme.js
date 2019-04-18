import { createGlobalStyle } from 'styled-components';
import { injectGlobal } from 'styled-components';
import { OpenSansRegular } from 'src/fonts/OpenSans';

export const GlobalStyle = createGlobalStyle`
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
    font-family: OpenSans-Regular, sans-serif;
  }

  @font-face {
    font-family: 'OpenSans-Regular';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${OpenSansRegular.ttf}) format("ttf")
  }

`;
const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    primaryBackground: '#e4f9f5',
    primaryAccent: '#30e3ca',
    secondaryAccent: '#11999e',
    darkAccent: '#40514e'
  },
  zindex: {
    base: 1,
    headerFooter: 1000,
    hero: 100,
    heroContent: 101,
    row: 200,
    block: 300,
    content: 500
  }
};

export default theme;
