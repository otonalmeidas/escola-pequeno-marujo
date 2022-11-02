import styled from 'styled-components'

export const DifferentialsContainer = styled.div`
  gap: 1.5rem;
  display: flex;
  position: relative;
  align-items: center;
  padding: 1.5rem 3rem;
  border-radius: 0.625rem;
  background-color: ${props => props.theme.colors.brandingPrimary};
  margin-bottom: 10rem;

  h4 {
    width: 15rem;
    font-size: 1rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.brandingTertiary};
  }

  @media (max-width: 767px) {
    padding: 0;
    flex-direction: column;
    border-radius: 0.625rem;
    background: transparent;

    h4 {
      width: fit-content;
    }
  }
`

export const Separator = styled.div`
  width: 1px;
  height: 3.75rem;
  background-color: #2d3561;

  @media (max-width: 767px) {
    display: none;
  }
`

export const DifferentialsSlider = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  > div {
    gap: 1rem;
    display: flex;
    padding: 1.5rem;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    font-weight: 400;
    text-align: center;
    line-height: 1.5rem;
    color: ${props => props.theme.colors.neutralHighPure};
  }

  @media (max-width: 1200px) {
    > div {
      padding-bottom: 4rem;
    }
  }

  @media (max-width: 767px) {
    border-radius: 0.625rem;
    background-color: ${props => props.theme.colors.brandingPrimary};
  }
`

export const Icon = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  position: relative;
`

export const DifferentialsButtons = styled.div`
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

  button:nth-child(5) {
    display: none;
  }

  @media (max-width: 1200px) {
    display: flex;
    left: 50%;
    transform: translate(-50%);
  }

  @media (min-width: 539px) {
    button:nth-child(4) {
      display: none;
    }
  }
`
