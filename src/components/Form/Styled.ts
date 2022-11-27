import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface StyleProps {
  variant: 'normal' | 'outline'
}

export const FormContainer = styled(motion.form)`
  width: 47%;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    line-height: 2rem;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.brandingPrimary};
  }

  fieldset {
    gap: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 0;
  }

  @media (max-width: 960px) {
    width: 60%;

    fieldset {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 767px) {
    width: 100%;

    fieldset {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 539px) {
    fieldset {
      grid-template-columns: 1fr;
    }
  }
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.div<StyleProps>`
  border-radius: 0.625rem;

  ${props =>
    props.variant === 'normal' &&
    css`
      border: 1px solid ${props => props.theme.colors.neutralHighDark};
    `}

  ${props =>
    props.variant === 'outline' &&
    css`
      border: 1px solid ${props => props.theme.colors.brandingSecondaryDark};
    `}

  input {
    width: 100%;
    height: 100%;
    padding: 1.25rem 1rem;
    border-radius: 0.625rem;
    background: transparent;
    color: ${props => props.theme.colors.brandingPrimaryLight};
    line-height: 1.5rem;
    outline: none;
    border: 0;
  }
`

export const Select = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;

  select {
    width: 100%;
    outline: none;
    font-size: 1rem;
    height: fit-content;
    line-height: 1.5rem;
    padding: 1.25rem 1rem;
    border-radius: 0.625rem;
    background: transparent;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.brandingPrimaryLight};
    justify-content: space-between;
    align-items: center;
    display: flex;

    ${props =>
      props.variant === 'normal' &&
      css`
        border: 1px solid ${props => props.theme.colors.neutralHighDark};
      `}

    ${props =>
      props.variant === 'outline' &&
      css`
        border: 1px solid ${props => props.theme.colors.brandingSecondaryDark};
      `}
  }
`

export const Textarea = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    resize: none;
    outline: none;
    height: 6.25rem;
    line-height: 1.5rem;
    padding: 1.25rem 1rem;
    border-radius: 0.625rem;
    background: transparent;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.brandingPrimaryLight};
    font-size: 1rem;

    ${props =>
      props.variant === 'normal' &&
      css`
        border: 1px solid ${props => props.theme.colors.neutralHighDark};
      `}

    ${props =>
      props.variant === 'outline' &&
      css`
        border: 1px solid ${props => props.theme.colors.brandingSecondaryDark};
      `}
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      line-height: 0.375rem;
      color: ${props => props.theme.colors.brandingPrimaryLight};
      margin: 0.625rem 0 0 auto;
    }
  }
`

export const Error = styled.span`
  margin-top: 0.625rem;
  color: ${props => props.theme.colors.brandingSecondaryDark};
`
