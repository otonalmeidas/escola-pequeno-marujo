import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/assets/logo.webp'

import { Button } from '../Button/Button'
import { Dropdown } from '../Dropdown/Dropdown'
import { Navigation } from '../Navigation/Navigation'
import { Buttons, HeaderContainer, HeaderContent } from './Styled'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Image src={Logo} alt="Logo da Escola" quality={100} priority fill />
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
