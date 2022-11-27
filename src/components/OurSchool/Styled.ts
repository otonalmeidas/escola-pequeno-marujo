import styled from 'styled-components'

export const OurSchoolContainer = styled.div`
  gap: 2.5rem;
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: 960px) {
    gap: 1.5rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const Photo = styled.div`
  width: 37.6875rem;
  height: 37.6875rem;
  position: relative;

  @media (max-width: 1200px) {
    height: 33.8515625rem;
    width: 33.8515625rem;
  }

  @media (max-width: 1024px) {
    height: 29.9828125rem;
    width: 29.9828125rem;
  }

  @media (max-width: 960px) {
    height: 40vw;
    width: 40vw;
  }

  @media (max-width: 767px) {
    height: 36rem;
    width: 36rem;
  }

  @media (max-width: 539px) {
    height: 93vw;
    width: 100%;
  }
`

export const OurSchoolContent = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-size: 1rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.brandingTertiary};
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  ul {
    gap: 0.5rem;
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (max-width: 1200px) {
    ul {
      grid-template-columns: auto auto;
      gap: 2rem;
    }
  }

  @media (max-width: 539px) {
    ul {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`

export const Separator = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  li {
    font-size: 1rem;
    line-height: 2rem;
    position: relative;
    padding-left: 1.1875rem;

    &:after {
      content: '';
      top: 50%;
      left: 0;
      width: 8px;
      height: 8px;
      border: none;
      position: absolute;
      border-radius: 50%;
      transform: translateY(-50%);
      background-color: ${props => props.theme.colors.brandingTertiary};
      box-shadow: 0 0 0 2px
        ${props => props.theme.colors.brandingQuaternaryLight};
    }
  }
`

export const Buttons = styled.div`
  gap: 1.5rem;
  display: flex;
  flex-wrap: wrap;
`
