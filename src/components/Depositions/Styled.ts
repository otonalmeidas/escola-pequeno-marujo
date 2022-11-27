import styled from 'styled-components'

export const DepositionsContainer = styled.div`
  display: block;

  > div:nth-child(2) {
    height: 22rem;
    padding: 0 4rem;
    cursor: grab;

    > div {
      &.swiper-button-prev,
      &.swiper-button-next {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.brandingSecondary};

        &:after {
          font-size: 0.75rem;
          color: ${props => props.theme.colors.neutralHighPure};
        }
      }

      div {
        display: flex;
        padding: 1.5rem;
        text-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border-radius: 1.25rem;
        background-color: #f0f2f4;
        user-select: none;
        transition: 300ms;
        margin: auto auto;
        height: 18.5rem;

        &.swiper-slide-next {
          height: 19.6875rem;
          box-shadow: 3px 6px 16px rgba(36, 41, 66, 0.2);
        }

        h4 {
          margin-bottom: 0.5rem;
          color: ${props => props.theme.colors.brandingPrimary};
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1rem;
        }

        span {
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        p {
          line-height: 1.5rem;
        }
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

    &:before,
    &:after {
      content: '';
      width: 4rem;
      height: 100%;
      top: 0;
      z-index: 2;
      position: absolute;
      background-color: ${props => props.theme.colors.neutralHighLight};
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }
  }

  @media (max-width: 1200px) {
    > div:nth-child(2) {
      > div {
        div {
          box-shadow: 3px 6px 16px rgba(36, 41, 66, 0.2);

          &.swiper-slide-next {
            height: 18.5rem;
            box-shadow: inherit;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    > div:nth-child(2) {
      padding: 0 0 2.5rem 0;

      &:before,
      &:after {
        display: none;
      }

      > div {
        &.swiper-button-prev,
        &.swiper-button-next {
          display: none;
        }
      }
    }
  }

  @media (min-width: 768px) {
    div.swiper-pagination {
      display: none;
    }
  }
`

export const Content = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  span {
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.brandingTertiary};
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    font-family: 'Poppins', sans-serif;
    margin-top: 1rem;
  }

  @media (max-width: 1200px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`
