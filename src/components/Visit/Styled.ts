import styled from 'styled-components'

export const VisitContainer = styled.section`
  display: flex;
  position: relative;
  padding: 2.5rem 3rem;
  flex-direction: column;
  border-radius: 0.625rem;
  background: rgb(34, 135, 201);
  background: linear-gradient(
    90deg,
    rgba(34, 135, 201, 1) 0%,
    rgba(19, 171, 224, 1) 100%
  );

  @media (max-width: 620px) {
    gap: 1.5rem;
    align-items: center;
    padding: 2.5rem 1.5rem;
  }
`

export const VisitContent = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media (max-width: 1200px) {
    width: 50vw;
  }

  @media (max-width: 1024px) {
    width: 44vw;
  }

  @media (max-width: 767px) {
    width: 38vw;
  }

  @media (max-width: 620px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`

export const Illustration = styled.div`
  top: -1.5rem;
  right: 3rem;
  width: 20.9375rem;
  height: 16.530625rem;
  position: absolute;

  @media (max-width: 767px) {
    right: 1rem;
  }

  @media (max-width: 620px) {
    top: 0;
    right: 0;
    position: relative;
  }

  @media (max-width: 380px) {
    width: 100%;
    height: 60.5vw;
  }
`
