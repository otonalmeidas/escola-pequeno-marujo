import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  height: 31.25rem;
  position: relative;
  margin-top: 6.125rem;
  background-color: ${props => props.theme.colors.brandingPrimary};

  @media (max-width: 1200px) {
    height: 28rem;
  }

  @media (max-width: 1024px) {
    height: 25rem;
  }

  @media (max-width: 960px) {
    height: 22rem;
    margin-top: 5.1rem;
  }

  @media (max-width: 767px) {
    height: fit-content;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  div:first-child {
    gap: 2rem;
    display: flex;
    max-width: 33rem;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-weight: 600;
      font-size: 2.5rem;
      font-family: 'Poppins', sans-serif;
      color: ${props => props.theme.colors.neutralHighPure};
    }

    p {
      line-height: 2rem;
      color: ${props => props.theme.colors.neutralHighPure};
    }
  }

  @media (max-width: 1200px) {
    div:first-child {
      max-width: 28rem;

      h1 {
        font-size: 2.375rem;
      }
    }
  }

  @media (max-width: 1024px) {
    div:first-child {
      gap: 1rem;

      h1 {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 960px) {
    div:first-child {
      max-width: 25rem;
    }
  }

  @media (max-width: 850px) {
    div:first-child {
      max-width: 20rem;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.5rem;

    div:first-child {
      max-width: none;
    }
  }

  @media (max-width: 539px) {
    div:first-child button {
      width: 100%;
    }
  }
`

export const Illustration = styled(motion.div)`
  position: relative;
  height: 27.9656rem;
  width: 41.9781rem;

  @media (max-width: 1200px) {
    height: 25.0218rem;
    width: 37.5593rem;
  }

  @media (max-width: 1024px) {
    height: 22.0781rem;
    width: 33.1406rem;
  }

  @media (max-width: 960px) {
    height: 18.84rem;
    width: 28.28rem;
  }

  @media (max-width: 539px) {
    height: 60vw;
    width: 100%;
  }
`
