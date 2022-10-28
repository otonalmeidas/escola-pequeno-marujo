import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../Button/Button'
import { Navigation } from '../Navigation/Navigation'
import { HeaderContainer } from './Styled'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image
          src="/assets/logo.webp"
          width={186}
          height={83}
          alt="Logo da Escola"
        />
      </Link>

      <Navigation />
      <Button text="Agende sua visita" variant="outline" />
    </HeaderContainer>
  )
}
