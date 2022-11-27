import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.brandingPrimary};

  > div {
    gap: 3rem;
    display: grid;
    grid-template-columns: auto auto;
    padding: 3rem 1.5rem;
    max-width: 1440px;
    margin: 0 auto;

    > a {
      width: 11.625rem;
      height: 5.1875rem;
      position: relative;
    }
  }

  @media (max-width: 1200px) {
    > div {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 960px) {
    > div {
      > a {
        width: 9.3rem;
        height: 4.15rem;
      }
    }
  }
`

export const FooterContent = styled.div`
  gap: 3rem;
  display: grid;
  grid-template-columns: auto auto auto;

  @media (max-width: 767px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 539px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.span`
  color: ${props => props.theme.colors.neutralHighPure};
  line-height: 1.5rem;
  font-weight: 600;
`

export const About = styled.nav`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  ul {
    gap: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    li a {
      line-height: 1.125rem;
      color: ${props => props.theme.colors.neutralHighPure};
    }
  }
`

export const Informations = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;

  div {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  div:nth-child(1) p {
    line-height: 1.125rem;
    color: ${props => props.theme.colors.neutralHighPure};
  }

  div:nth-child(2) {
    a {
      gap: 0.5rem;
      display: flex;
      align-items: center;
      line-height: 1.125rem;
      color: ${props => props.theme.colors.neutralHighPure};

      svg {
        font-size: 1.5rem;
      }
    }

    span {
      line-height: 1.125rem;
      color: ${props => props.theme.colors.neutralHighPure};
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
`

export const Social = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  a {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    line-height: 1.125rem;
    color: ${props => props.theme.colors.neutralHighPure};

    svg {
      font-size: 1.5rem;
    }
  }
`
