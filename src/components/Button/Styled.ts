import styled, { css } from 'styled-components'

type ButtonLinkProps = {
  variant: 'normal' | 'outline'
}

export const ButtonContainer = styled.button<ButtonLinkProps>`
  border-radius: 0.375rem;
  height: fit-content;
  width: fit-content;
  border: 2px solid ${props => props.theme.colors.brandingSecondary};
  transition: 200ms;

  ${props =>
    props.variant === 'normal' &&
    css`
      color: ${props => props.theme.colors.neutralHighPure};
      background-color: ${props => props.theme.colors.brandingSecondary};

      &:hover {
        border: 2px solid ${props => props.theme.colors.brandingSecondaryDark};
        background-color: ${props => props.theme.colors.brandingSecondaryDark};
      }
    `}

  ${props =>
    props.variant === 'outline' &&
    css`
      background: transparent;
      color: ${props => props.theme.colors.brandingSecondary};

      &:hover {
        color: ${props => props.theme.colors.brandingSecondaryDark};
        border: 2px solid ${props => props.theme.colors.brandingSecondaryDark};
      }
    `};

  span,
  a {
    display: block;
    user-select: none;
    padding: 0.8125rem 1rem;
    line-height: 1.375rem;
    font-weight: 600;
  }
`
