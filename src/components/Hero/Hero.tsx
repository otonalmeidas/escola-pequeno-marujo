import Image from 'next/image'
import Link from 'next/link'
import HeroHome from 'public/assets/hero-home.webp'

import { Button } from '../Button/Button'
import { HeroContainer, Content, Illustration } from './Styled'

export function Hero() {
  return (
    <HeroContainer>
      <Content>
        <div>
          <h1>Na nossa escola, seu filho chega longe e vai além.</h1>
          <p>
            Conte com uma educação completa, em período integral, do mini
            maternal ao 9º ano.
          </p>
          <Button variant="normal">
            <Link href="/">Agende sua visita</Link>
          </Button>
        </div>
        <Illustration>
          <Image src={HeroHome} alt="Teste" quality={100} priority fill />
        </Illustration>
      </Content>
    </HeroContainer>
  )
}
