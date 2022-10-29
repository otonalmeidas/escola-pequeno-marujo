import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../Button/Button'
import { Dropdown } from '../Dropdown/Dropdown'
import { Navigation } from '../Navigation/Navigation'
import { Buttons, HeaderContainer, HeaderContent } from './Styled'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Image src="/assets/logo.webp" alt="Logo da Escola" priority fill />
        </Link>

        <Navigation />

        <Buttons>
          <Button variant="outline">
            <Link href="/agende-sua-visita">Agende sua visita</Link>
          </Button>
          <Dropdown />
        </Buttons>
      </HeaderContent>
    </HeaderContainer>
  )
}
