import styled, { css } from 'styled-components'

type ButtonLinkProps = {
  variant: 'normal' | 'outline'
}

export const ButtonContainer = styled.button<ButtonLinkProps>`
  border-radius: 0.375rem;
  height: fit-content;
  width: fit-content;

  ${props =>
    props.variant === 'normal' &&
    css`
      border: none;
      color: ${props => props.theme.colors.neutralHighPure};
      background-color: ${props => props.theme.colors.brandingSecondary};
    `}

  ${props =>
    props.variant === 'outline' &&
    css`
      background: transparent;
      color: ${props => props.theme.colors.brandingSecondary};
      border: 2px solid ${props => props.theme.colors.brandingSecondary};
    `};

  span,
  a {
    display: block;
    padding: 0.8125rem 1rem;
    line-height: 1.375rem;
    font-weight: 500;
  }
`
