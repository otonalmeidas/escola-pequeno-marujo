import { Slot } from '@radix-ui/react-slot'

import { ButtonContainer } from './Styled'

interface ButtonProps {
  variant?: 'normal' | 'outline'
  children: React.ReactNode
  asChild?: boolean
}

export function Button({ variant = 'normal', children, asChild }: ButtonProps) {
  const ButtonSlot = asChild ? Slot : ButtonContainer

  return <ButtonSlot variant={variant}>{children}</ButtonSlot>
}
