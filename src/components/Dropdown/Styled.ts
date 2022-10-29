import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled, { css, keyframes } from 'styled-components'

interface ItemProps {
  isActive: boolean
}

const animateDropdown = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const Content = styled(DropdownMenu.Content)`
  gap: 1rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  flex-direction: column;
  transform: translateY(2.6rem);
  background-color: ${props => props.theme.colors.neutralHighPure};
  animation: ${animateDropdown} 100ms ease-in-out;

  div:last-child {
    margin-top: 3.5rem;
  }

  button {
    @media (max-width: 539px) {
      width: 100%;
    }
  }
`

export const Trigger = styled(DropdownMenu.Trigger)`
  background: transparent;
  justify-content: center;
  flex-direction: column;
  position: relative;
  display: flex;
  height: 28px;
  width: 28px;
  border: 0;
  gap: 6px;

  div {
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.colors.brandingSecondary};
    transition: 100ms;
  }

  &[data-state='open'] {
    div {
      &:nth-child(1) {
        transform: rotate(45deg) translate(7px, 7px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }
  }
`

export const DropdownMenuItem = styled.li<ItemProps>`
  width: 100%;

  a {
    font-size: 16px;
    text-align: center;
    line-height: 1.5rem;

    ${props =>
      props.isActive
        ? css`
            font-weight: 600;
          `
        : css`
            font-weight: 400;
          `}
  }
`
