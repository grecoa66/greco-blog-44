import { createGlobalStyle } from 'styled-components';
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
    font-family: OpenSansRegular.ttf, sans-serif;
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
    content: 500
  }
};

export default theme;
