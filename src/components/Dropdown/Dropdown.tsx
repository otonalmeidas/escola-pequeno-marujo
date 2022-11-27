import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

import { Button } from '../Button/Button'
import { DropdownLink } from './DropdownLink'
import { Content, Trigger } from './Styled'

export function Dropdown() {
  return (
    <DropdownMenu.Root>
      <Trigger>
        <div />
        <div />
        <div />
      </Trigger>

      <DropdownMenu.Portal>
        <Content>
          <DropdownLink path="/" text="Home" />
          <DropdownLink path="/a-escola" text="A Escola" />
          <DropdownLink path="/educacao-infantil" text="Educação Infantil" />
          <DropdownLink
            path="/ensino-fundamental-anos-iniciais"
            text="Ensino Fundamental anos iniciais"
          />
          <DropdownLink
            path="/ensino-fundamental-anos-finais"
            text="Ensino Fundamental anos finais"
          />
          <DropdownLink path="/fale-conosco" text="Fale Conosco" />
          <DropdownMenu.Item>
            <Button type="button" variant="normal">
              <Link href="/fale-conosco">Agende sua visita</Link>
            </Button>
          </DropdownMenu.Item>
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
