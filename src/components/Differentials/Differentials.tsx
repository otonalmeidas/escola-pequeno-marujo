import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useState } from 'react'

import {
  DifferentialsButtons,
  DifferentialsContainer,
  DifferentialsSlider,
  Icon,
  Separator
} from './Styled'

export function Differentials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 280px)': {
        slides: { perView: 2, spacing: 16 }
      },
      '(min-width: 539px)': {
        slides: { perView: 3, spacing: 16 }
      },
      '(min-width: 1199px)': {
        slides: { perView: 5 }
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: { perView: 1 },
    initial: 0
  })

  return (
    <DifferentialsContainer>
      <h4>Nossos diferenciais</h4>
      <Separator />
      <DifferentialsSlider ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Icon>
            <Image
              src="/assets/pedagogia-efetiva.webp"
              alt="Teste"
              priority
              fill
            />
          </Icon>
          Pedagogia efetiva
        </div>
        <div className="keen-slider__slide number-slide2">
          <Icon>
            <Image
              src="/assets/aprendizado-real.webp"
              alt="Teste"
              priority
              fill
            />
          </Icon>
          Aprendizado real
        </div>
        <div className="keen-slider__slide number-slide3">
          <Icon>
            <Image
              src="/assets/solucoes-educacionais.webp"
              alt="Teste"
              priority
              fill
            />
          </Icon>
          Soluções educacionais
        </div>
        <div className="keen-slider__slide number-slide4">
          <Icon>
            <Image
              src="/assets/metodologias-proprias.webp"
              alt="Teste"
              priority
              fill
            />
          </Icon>
          Metodologias proprias
        </div>
        <div className="keen-slider__slide number-slide5">
          <Icon>
            <Image
              src="/assets/troca-de-experiencias.webp"
              alt="Teste"
              priority
              fill
            />
          </Icon>
          Troca de experiências
        </div>
      </DifferentialsSlider>
      {loaded && instanceRef.current && (
        <DifferentialsButtons>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={currentSlide === idx ? ' active' : ''}
              ></button>
            )
          })}
        </DifferentialsButtons>
      )}
    </DifferentialsContainer>
  )
}
