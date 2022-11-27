import { Slot } from '@radix-ui/react-slot'

import { ButtonContainer } from './Styled'

interface ButtonProps {
  type: 'button' | 'submit'
  variant: 'normal' | 'outline'
  children: React.ReactNode
  asChild?: boolean
}

export function Button({
  variant = 'normal',
  type,
  children,
  asChild
}: ButtonProps) {
  const ButtonSlot = asChild ? Slot : ButtonContainer

  return (
    <ButtonSlot variant={variant} type={type}>
      {children}
    </ButtonSlot>
  )
}
