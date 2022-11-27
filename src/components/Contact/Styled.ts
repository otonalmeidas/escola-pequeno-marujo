import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContactContainer = styled.section`
  gap: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 1.5rem;
  margin: 6.125rem auto 0;
  max-width: 1440px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const Content = styled(motion.div)`
  gap: 2rem;
  padding: 2rem;
  border-radius: 1.25rem;
  justify-content: center;
  background-color: ${props => props.theme.colors.brandingPrimary};
  flex-direction: column;
  display: flex;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      color: ${props => props.theme.colors.neutralHighPure};
      line-height: 1.5rem;
      font-weight: 600;
    }

    p {
      color: ${props => props.theme.colors.neutralHighPure};
      line-height: 1.5rem;
    }
  }

  > div:nth-child(2) {
    height: 1px;
    width: 100%;
    background-color: #2d3561;
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p,
    div {
      color: ${props => props.theme.colors.neutralHighPure};
      line-height: 1.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 539px) {
    padding: 1.5rem;
  }
`

export const Illustration = styled.div`
  overflow: hidden;
  position: relative;
  height: calc(min(18.125rem, 24vw));
  width: 100%;

  img {
    margin: auto 0;
    object-fit: contain;
  }

  @media (max-width: 767px) {
    height: 18.125rem;
  }

  @media (max-width: 539px) {
    height: calc(min(18.125rem, 48vw));
  }
`
