import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    color: ${props => props.theme.colors.brandingPrimary};
    background: ${props => props.theme.colors.neutralHighLight};
    -webkit-font-smoothing: antialiased
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  img {
    pointer-events: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
  
  @media (max-width: 1280px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 767px) {
    html {
      font-size: 87.5%;
    }
  }
  
  @media (max-width: 539px) {
    a,
    button,
    div {
      cursor: default !important;
    }
  }
`
