import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled, { css } from 'styled-components'

interface ItemProps {
  isActive: boolean
}

export const NavigationMenuRoot = styled(NavigationMenu.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  gap: 2rem;
`

export const NavigationMenuItemContainer = styled.div<ItemProps>`
  display: flex;
  align-items: center;

  a,
  button {
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

export const NavigationMenuItem = styled(NavigationMenu.Item)`
  gap: 0.75rem;
  display: flex;
  align-items: center;

  div {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.brandingSecondary};
  }

  a {
    font-family: 'Roboto';
    line-height: 1.187rem;
    font-size: 1rem;
  }
`

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  background: transparent;
  font-family: 'Roboto';
  line-height: 1.187rem;
  font-size: 1rem;
  display: flex;
  gap: 0.375rem;
  align-items: center;
  border: 0;
  color: ${props => props.theme.colors.brandingPrimary};

  svg {
    transition: 100ms;
  }

  &[data-state='open'] {
    svg {
      transform: rotate(180deg);
    }
  }
`

export const NavigationMenuLink = styled(NavigationMenu.Link)`
  font-family: 'Roboto';
  line-height: 1.187rem;
  font-size: 1rem;
`

export const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  left: 50%;
  gap: 1rem;
  bottom: -0.5rem;
  transform: translateX(-8%) translateY(100%);
  width: 283px;
  display: flex;
  flex-direction: column;
  padding: 1.375rem;
  background-color: ${props => props.theme.colors.neutralHighMedium};
  border-radius: 0 0 0.625rem 0.625rem;
`
