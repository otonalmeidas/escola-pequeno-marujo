import { motion } from 'framer-motion'
import Link from 'next/link'
import BgImage from 'public/assets/hero-mini-bg.webp'
import PhotoImage from 'public/assets/hero-mini-photo.webp'

import { Button } from '../Button/Button'
import { Bg, Content, HeroMiniContainer, Illustration, Photo } from './Styled'

export function HeroLow() {
  return (
    <HeroMiniContainer>
      <Content>
        <motion.div
          initial={{ transform: 'translateX(-2rem)' }}
          animate={{ transform: 'translateX(0rem)' }}
          exit={{ transform: 'translateX(-2rem)' }}
          transition={{ duration: 0.35 }}
        >
          <h1>
            Toda a estrutura necessária para o conforto e desenvolvimento dos
            alunos.
          </h1>
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
          <Bg src={BgImage} alt="Teste" quality={100} priority fill />
          <Photo src={PhotoImage} alt="Teste" quality={100} priority fill />
        </Illustration>
      </Content>
    </HeroMiniContainer>
  )
}
