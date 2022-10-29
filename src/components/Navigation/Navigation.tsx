import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { IoChevronDown } from 'react-icons/io5'

import { NavigationLink } from './NavigationLink'
import { Root, List, Trigger, Content } from './Styled'

export function Navigation() {
  return (
    <Root>
      <List>
        <NavigationLink path="/" text="Home" />
        <NavigationLink path="/a-escola" text="A Escola" />

        <NavigationMenu.Item>
          <Trigger>
            Ensino
            <IoChevronDown size={12} />
          </Trigger>
          <Content>
            <NavigationMenu.Link href="/educacao-infantil">
              Educação Infantil
            </NavigationMenu.Link>
            <NavigationMenu.Link href="/ensino-fundamental-anos-iniciais">
              Ensino Fundamental anos iniciais
            </NavigationMenu.Link>
            <NavigationMenu.Link href="/ensino-fundamental-anos-finais">
              Ensino Fundamental anos finais
            </NavigationMenu.Link>
          </Content>
        </NavigationMenu.Item>

        <NavigationLink path="/fale-conosco" text="Fale Conosco" />
      </List>

      <NavigationMenu.Viewport />
    </Root>
  )
}
