import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from 'styled-components'

export const HeroMiniContainer = styled.div`
  height: 18rem;
  display: flex;
  position: relative;
  margin-top: 6.125rem;
  background-color: ${props => props.theme.colors.brandingPrimary};

  @media (max-width: 960px) {
    margin-top: 5.1rem;
  }

  @media (max-width: 539px) {
    height: fit-content;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
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
      font-size: 1.5rem;
      line-height: 2rem;
      font-family: 'Poppins', sans-serif;
      color: ${props => props.theme.colors.neutralHighPure};
    }
  }

  @media (max-width: 1200px) {
    div:first-child {
      max-width: 30rem;
    }
  }

  @media (max-width: 1024px) {
    div:first-child {
      max-width: 28rem;
      gap: 1rem;
    }
  }

  @media (max-width: 960px) {
    div:first-child {
      max-width: 25rem;
    }
  }

  @media (max-width: 767px) {
    div:first-child {
      max-width: 20rem;
    }
  }

  @media (max-width: 539px) {
    padding: 2rem 1rem;
    flex-direction: column;
    gap: 1.5rem;

    div:first-child {
      max-width: inherit;

      button {
        width: 100%;
      }
    }
  }
`

export const Illustration = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 34.25rem;
  height: 100%;

  @media (max-width: 539px) {
    width: 17.25rem;
    height: 15.225rem;
  }
`

export const Bg = styled(Image)`
  margin: auto 0;
  height: auto !important;
  object-fit: contain;

  @media (max-width: 539px) {
    display: none;
  }
`

export const Photo = styled(Image)`
  margin: auto 0;
  height: 95% !important;
  object-fit: contain;
`
