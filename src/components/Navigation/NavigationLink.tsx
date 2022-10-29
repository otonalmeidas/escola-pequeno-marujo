import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { useRouter } from 'next/router'

import { ItemContainer, Item } from './Styled'

interface NavigationLinkProps {
  text: string
  path: string
}

export function NavigationLink({ text, path }: NavigationLinkProps) {
  const router = useRouter()

  function verifyIfIsActive() {
    return path === router.pathname
  }

  const isActive = verifyIfIsActive()

  return (
    <ItemContainer isActive={isActive}>
      <Item>
        {isActive && <div />}
        <NavigationMenuLink href={path}>{text}</NavigationMenuLink>
      </Item>
    </ItemContainer>
  )
}
