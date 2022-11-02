import styled from 'styled-components'

export const TeachingContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`

export const TeachingSlider = styled.div`
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;

  div {
    gap: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    padding: 2rem 1.5rem;
    flex-direction: column;
    border-radius: 0.625rem;
    background-color: ${props => props.theme.colors.brandingQuaternaryLight};

    h4 {
      font-size: 1.25rem;
    }

    p {
      line-height: 1.5rem;
    }

    a {
      gap: 0.25rem;
      display: flex;
      font-weight: 600;
      align-items: center;
      color: ${props => props.theme.colors.brandingSecondary};

      @media (max-width: 767px) {
        margin-bottom: 26px;
      }
    }
  }
`

export const TeachingButtons = styled.div`
  position: absolute;
  display: none;
  bottom: 24px;
  z-index: 1;
  gap: 1rem;

  button {
    width: 12px;
    height: 12px;
    border: none;
    opacity: 40%;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.brandingSecondary};

    box-shadow: 0 0 0 2px
      ${props => props.theme.colors.brandingSecondaryOpacify};

    &.active {
      opacity: 100%;
    }
  }

  @media (max-width: 767px) {
    display: flex;
  }
`
