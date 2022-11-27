import styled from 'styled-components'

export const StructureSection = styled.section`
  display: grid;
  gap: 1rem 2rem;
  padding: 1.5rem 0;
  grid-template-columns: auto auto;

  > div:last-child {
    border-radius: 1.375rem;
    height: 33.0625rem;
    width: 33.0625rem;
    margin: auto 0;
    cursor: grab;

    div:first-child {
      border-radius: 1.375rem;

      img {
        object-fit: cover;
        border-radius: 1.375rem;
      }
    }

    div.swiper-pagination {
      bottom: 1.5rem;

      span {
        width: 12px;
        height: 12px;
        margin: 0 0.5rem;
        position: relative;
        background-color: ${props => props.theme.colors.brandingSecondary};

        &:before {
          z-index: -1;
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: ${props =>
            props.theme.colors.brandingSecondaryOpacify};
        }
      }
    }
  }

  @media (max-width: 1200px) {
    > div:last-child {
      width: 24rem;
      height: 100%;
    }
  }

  @media (max-width: 767px) {
    gap: 2rem;
    padding: 1.5rem 0;
    grid-template-columns: 1fr;

    > div:last-child {
      width: 100%;
      height: 68vw;
    }
  }

  @media (max-width: 539px) {
    > div:last-child {
      width: 100%;
      height: 19.5rem;
    }
  }
`

export const Content = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const List = styled.ul`
  gap: 0.5rem;
  display: grid;
  height: fit-content;
  grid-template-columns: 1fr;

  li {
    font-size: 1rem;
    line-height: 2rem;
    position: relative;
    padding-left: 1.1875rem;
    align-items: center;
    display: flex;

    &:after {
      content: '';
      top: 50%;
      left: 0;
      width: 8px;
      height: 8px;
      border: none;
      position: absolute;
      border-radius: 50%;
      transform: translateY(-50%);
      background-color: ${props => props.theme.colors.brandingTertiary};
      box-shadow: 0 0 0 2px
        ${props => props.theme.colors.brandingQuaternaryLight};
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`
