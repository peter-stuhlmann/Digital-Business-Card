import { createGlobalStyle } from 'styled-components';

import YellowTail from '../assets/fonts/yellowtail/yellowtail-regular.ttf';
import OpenSans from '../assets/fonts/open-sans/open-sans-regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'YellowTail';
    src: url(${YellowTail}) format("truetype");
  }

  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSans}) format("truetype");
  }

  body {
    margin: 0;

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }
  }
`;

export default GlobalStyles;
