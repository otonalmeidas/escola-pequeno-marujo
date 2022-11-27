import { motion } from 'framer-motion'
import Link from 'next/link'
import ImageChildist from 'public/assets/hero-childish.webp'
import ImageFinal from 'public/assets/hero-final.webp'
import ImageInitial from 'public/assets/hero-initial.webp'

import { Button } from '../Button/Button'
import { Content, HeroMiniContainer, Illustration, Photo } from './Styled'

interface HeroMediumProps {
  subtitle: string
  headline: string
  description: string
  image: 'childish' | 'initial' | 'final'
}

export function HeroMedium({
  subtitle,
  headline,
  description,
  image = 'childish'
}: HeroMediumProps) {
  return (
    <HeroMiniContainer>
      <Content>
        <motion.div
          initial={{ transform: 'translateX(-2rem)' }}
          animate={{ transform: 'translateX(0rem)' }}
          exit={{ transform: 'translateX(-2rem)' }}
          transition={{ duration: 0.35 }}
        >
          <span>{subtitle}</span>
          <h1>{headline}</h1>
          <p>{description}</p>

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
          {image === 'childish' && (
            <Photo
              src={ImageChildist}
              alt="Teste"
              quality={100}
              priority
              fill
            />
          )}
          {image === 'initial' && (
            <Photo src={ImageInitial} alt="Teste" quality={100} priority fill />
          )}
          {image === 'final' && (
            <Photo src={ImageFinal} alt="Teste" quality={100} priority fill />
          )}
        </Illustration>
      </Content>
    </HeroMiniContainer>
  )
}
