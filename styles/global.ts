import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: #F8FAFC;
    color: #111827;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .custom-marker {
    background: transparent !important;
    border: none !important;
  }

  .leaflet-popup-content {
    margin: 12px;
    font-size: 14px;
  }

  /* buttons */
  button {
    font: inherit;
  }
`;
