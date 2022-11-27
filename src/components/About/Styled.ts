import styled from 'styled-components'

export const AboutContainer = styled.section`
  gap: 2rem;
  display: grid;
  align-items: center;
  padding: 2rem 1.5rem;
  grid-template-columns: auto auto;
  border-radius: 3.75rem 0.625rem 0.625rem;
  background-color: ${props => props.theme.colors.brandingQuaternaryLight};

  div:last-child {
    gap: 1rem;
    display: flex;
    flex-direction: column;

    h2 {
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2rem;
      font-family: 'Poppins', sans-serif;
      color: ${props => props.theme.colors.brandingPrimary};
    }

    p {
      line-height: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`

export const Illustration = styled.div`
  position: relative;
  width: 24rem;
  height: 24rem;

  img {
    width: 24rem;
    height: 24rem;
    object-fit: contain;
    border-radius: 3.5rem 0.75rem 0.75rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 19.5rem;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
`
