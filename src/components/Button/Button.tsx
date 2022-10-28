import { ButtonContainer } from './Styled'

interface ButtonProps {
  variant: 'normal' | 'outline'
  text: string
}

export function Button({ text, variant }: ButtonProps) {
  return <ButtonContainer variant={variant}>{text}</ButtonContainer>
}
