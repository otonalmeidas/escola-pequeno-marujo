import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: grid;
  padding: 0.5rem 1.375rem;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: ${props => props.theme.colors.neutralHighPure};

  a {
    width: fit-content;
  }
`
