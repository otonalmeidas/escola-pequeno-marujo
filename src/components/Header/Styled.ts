import styled from 'styled-components'

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  position: fixed;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.025);
  background-color: ${props => props.theme.colors.neutralHighPure};

  button {
    margin: auto 0 auto auto;
  }
`

export const Content = styled.div`
  display: grid;
  padding: 0.5rem 1.5rem;
  grid-template-columns: 1fr 2fr 1fr;
  max-width: 1440px;
  margin: 0 auto;

  > a {
    width: 11.625rem;
    height: 5.1875rem;
    position: relative;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;

    > a {
      width: 9.3rem;
      height: 4.15rem;
    }
  }
`

export const Buttons = styled.div`
  margin: auto 0 auto auto;

  @media (max-width: 960px) {
    button:first-child {
      display: none;
    }
  }

  @media (min-width: 960px) {
    button:last-child {
      display: none;
    }
  }
`
