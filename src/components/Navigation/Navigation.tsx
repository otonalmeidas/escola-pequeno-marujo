import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IoChevronDown } from 'react-icons/io5'

import { NavigationLink } from './NavigationLink'
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink
} from './Styled'

export function Navigation() {
  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationLink path="/" text="Home" />
        <NavigationLink path="/a-escola" text="A Escola" />

        <NavigationMenu.Item>
          <NavigationMenuTrigger>
            Ensino
            <IoChevronDown size={10} />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/educacao-infantil">
              Educação Infantil
            </NavigationMenuLink>
            <NavigationMenuLink href="/ensino-fundamental-anos-iniciais">
              Ensino Fundamental anos iniciais
            </NavigationMenuLink>
            <NavigationMenuLink href="/ensino-fundamental-anos-finais">
              Ensino Fundamental anos finais
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenu.Item>

        <NavigationLink path="/fale-conosco" text="Fale Conosco" />
      </NavigationMenuList>

      <NavigationMenu.Viewport />
    </NavigationMenuRoot>
  )
}
