import styled, { css } from 'styled-components'

type ButtonProps = {
  variant: 'normal' | 'outline'
}

export const ButtonContainer = styled.button<ButtonProps>`
  margin: auto 0 auto auto;
  height: fit-content;
  width: fit-content;
  border-radius: 0.375rem;
  padding: 0.8125rem 1rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.375rem;
  font-weight: 500;

  ${props =>
    props.variant === 'normal' &&
    css`
      background-color: red;
    `}

  ${props =>
    props.variant === 'outline' &&
    css`
      background: transparent;
      color: ${props => props.theme.colors.brandingSecondary};
      border: 2px solid ${props => props.theme.colors.brandingSecondary};
    `}
`
