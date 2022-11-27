import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled, { css } from 'styled-components'

interface ItemProps {
  isActive: boolean
}

export const Root = styled(NavigationMenu.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > div {
    height: 100%;
  }

  @media (max-width: 960px) {
    display: none;
  }
`

export const List = styled(NavigationMenu.List)`
  display: flex;
  height: 100%;
  gap: 2rem;
`

export const Trigger = styled(NavigationMenu.Trigger)`
  border: 0;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.brandingPrimary};
  background: transparent;
  gap: 0.375rem;

  svg {
    transition: 100ms;
  }

  &[data-state='open'] {
    svg {
      transform: rotate(180deg);
    }
  }

  &:hover {
    font-weight: 600;
  }
`

export const Content = styled(NavigationMenu.Content)`
  position: absolute;
  bottom: -0.45rem;
  z-index: 1;
  left: 50%;
  transform: translateX(-8%) translateY(100%);
  flex-direction: column;
  display: flex;
  width: 18rem;
  gap: 1rem;
  padding: 1.375rem;
  border-radius: 0 0 0.625rem 0.625rem;
  box-shadow: 3px 7px 16px rgba(36, 41, 66, 0.2);
  background-color: ${props => props.theme.colors.neutralHighMedium};

  a:hover {
    font-weight: 600;
  }
`

export const ItemContainer = styled.div<ItemProps>`
  display: flex;
  align-items: center;

  a {
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

export const Item = styled(NavigationMenu.Item)`
  gap: 0.75rem;
  height: 100%;
  display: flex;
  align-items: center;

  div {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.brandingSecondary};
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.brandingPrimary};

    &:hover {
      font-weight: 600;
    }
  }
`
