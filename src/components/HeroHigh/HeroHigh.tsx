import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import HeroHome from 'public/assets/hero-home.webp'

import { Button } from '../Button/Button'
import { HeroContainer, Content, Illustration } from './Styled'

export function HeroHigh() {
  return (
    <HeroContainer>
      <Content>
        <motion.div
          initial={{ transform: 'translateX(-2rem)' }}
          animate={{ transform: 'translateX(0rem)' }}
          exit={{ transform: 'translateX(-2rem)' }}
          transition={{ duration: 0.35 }}
        >
          <h1>Na nossa escola, seu filho chega longe e vai além.</h1>
          <p>
            Conte com uma educação completa, em período integral, do mini
            maternal ao 9º ano.
          </p>
          <Button type="button" variant="normal">
            <Link href="/">Agende sua visita</Link>
          </Button>
        </motion.div>

        <Illustration
          initial={{ transform: 'translateX(2rem)' }}
          animate={{ transform: 'translateX(0rem)' }}
          exit={{ transform: 'translateX(2rem)' }}
          transition={{ duration: 0.35 }}
        >
          <Image src={HeroHome} alt="Teste" quality={100} priority fill />
        </Illustration>
      </Content>
    </HeroContainer>
  )
}
