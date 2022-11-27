import styled from 'styled-components'

export const SliderContainer = styled.div`
  padding: 2rem 1.5rem;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  > div {
    div.swiper-wrapper div {
      height: 21rem;
      position: relative;
      overflow: hidden;
      border-radius: 1.25rem;

      img {
        object-fit: cover;
      }
    }

    div.swiper-pagination {
      bottom: 0;

      span {
        width: 12px;
        height: 12px;
        margin: 0 0.5rem;
        background-color: ${props => props.theme.colors.brandingSecondary};
      }
    }
  }

  @media (max-width: 1200px) {
    > div {
      padding-bottom: 2.5rem;
    }
  }
`
