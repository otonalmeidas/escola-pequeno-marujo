import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
import { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
import 'keen-slider/keen-slider.min.css'

import { TeachingContainer, TeachingSlider, TeachingButtons } from './Styled'

export function Teaching() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 280px)': {
        slides: { perView: 1, spacing: 16 }
      },
      '(min-width: 767px)': {
        slides: { perView: 3, spacing: 16 }
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
    <TeachingContainer>
      <TeachingSlider ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <h4>Educação infantil</h4>
          <p>
            A criança como protagonista do seu aprendizado, que observa,
            vivencia o mundo e constrói seu conhecimento.
          </p>
          <Link href="/">
            Saiba mais
            <IoArrowForward />
          </Link>
        </div>

        <div className="keen-slider__slide number-slide2">
          <h4>Ensino fundamental anos iniciais</h4>
          <p>
            Constrói as bases que permitirão ao aluno crescer e desenvolver seu
            processo de aprendizagem.
          </p>
          <Link href="/">
            Saiba mais
            <IoArrowForward />
          </Link>
        </div>

        <div className="keen-slider__slide number-slide3">
          <h4>Ensino fundamental anos finais</h4>
          <p>
            O aluno no centro de suas ações, se desenvolvendo academicamente e
            progredindo suas habilidades sociais, cognitivas e afetivas.
          </p>
          <Link href="/">
            Saiba mais
            <IoArrowForward />
          </Link>
        </div>
      </TeachingSlider>
      {loaded && instanceRef.current && (
        <TeachingButtons>
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
        </TeachingButtons>
      )}
    </TeachingContainer>
  )
}
