import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { useRouter } from 'next/router'

import { NavigationMenuItem, NavigationMenuItemContainer } from './Styled'

interface NavigationLinkProps {
  text: string
  path: string
  includes?: boolean
}

export function NavigationLink({
  text,
  path,
  includes = false
}: NavigationLinkProps) {
  const router = useRouter()

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path)
    }
    return path === router.pathname
  }

  const isActive = verifyIfIsActive()

  return (
    <NavigationMenuItemContainer isActive={isActive}>
      <NavigationMenuItem>
        {isActive && <div />}
        <NavigationMenuLink href={path}>{text}</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuItemContainer>
  )
}
