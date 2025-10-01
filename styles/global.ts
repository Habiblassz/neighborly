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
    line-height: 1.5;
  }

  /* Improve touch targets on mobile */
  button, 
  input, 
  select, 
  textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }

  .custom-marker {
    background: transparent !important;
    border: none !important;
  }

  .leaflet-popup-content {
    margin: 12px;
    font-size: 14px;
    
    /* Make popups responsive */
    @media (max-width: 768px) {
      margin: 8px;
      font-size: 12px;
    }
  }

  /* buttons */
  button {
    font: inherit;
    min-height: 44px; /* Better touch target */
    min-width: 44px;
  }

  /* Improve form elements for mobile */
  input, select, textarea {
    padding: 12px;
    border: 1px solid #D1D5DB;
    border-radius: 8px;
    width: 100%;
    
    @media (max-width: 768px) {
      padding: 16px; /* Larger touch target */
    }
  }

  /* Prevent horizontal overflow */
  img, canvas, iframe, video, svg {
    max-width: 100%;
    height: auto;
  }
`;
