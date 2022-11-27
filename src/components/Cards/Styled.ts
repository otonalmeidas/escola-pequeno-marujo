import styled from 'styled-components'

export const CardsContainer = styled.section`
  gap: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const CardContainer = styled.div`
  gap: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem 1.25rem 1.25rem 0;
  background-color: ${props => props.theme.colors.brandingTertiary};

  h3 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: 'Poppins', sans-serif;
  }
`
