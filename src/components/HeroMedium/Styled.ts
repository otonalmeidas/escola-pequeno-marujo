import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from 'styled-components'

export const HeroMiniContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 31.25rem;
  margin-top: 6.125rem;
  background-color: ${props => props.theme.colors.brandingPrimary};
`

export const Content = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  div:first-child {
    gap: 1rem;
    display: flex;
    max-width: 42rem;
    justify-content: center;
    flex-direction: column;

    span {
      font-weight: 600;
      line-height: 1.5rem;
      font-family: 'Poppins', sans-serif;
      color: ${props => props.theme.colors.brandingTertiary};
      text-transform: uppercase;
    }

    h1 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2rem;
      font-family: 'Poppins', sans-serif;
      color: ${props => props.theme.colors.neutralHighPure};
    }

    p {
      line-height: 1.5rem;
      font-family: 'Poppins', sans-serif;
      color: ${props => props.theme.colors.neutralHighPure};
    }

    button {
      margin-top: 0.5rem;
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
    flex-direction: column;

    div:first-child {
      width: 100%;
      max-width: inherit;
    }
  }

  @media (max-width: 539px) {
    div:first-child {
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

  @media (max-width: 960px) {
    width: 20.7rem;
    height: 18.27rem;
  }

  @media (max-width: 539px) {
    width: 17.25rem;
    height: 15.225rem;
  }
`

export const Photo = styled(Image)`
  margin: auto 0;
  height: 95% !important;
  object-fit: contain;
`
