import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.neutralHighPure};

  button {
    margin: auto 0 auto auto;
  }
`

export const HeaderContent = styled.div`
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
      width: 125px;
      height: 55.78px;
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
