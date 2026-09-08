import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    font-family: ${({ theme }) => theme.fontBody};
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fontHeading};
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.accentGold};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;
