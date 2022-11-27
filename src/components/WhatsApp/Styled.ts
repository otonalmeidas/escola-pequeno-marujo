import Link from 'next/link'
import styled from 'styled-components'

export const WhatsAppContainer = styled(Link)`
  width: 4rem;
  height: 4rem;
  bottom: 2rem;
  right: 2rem;
  position: fixed;
  border-radius: 50%;
  transition: 300ms;

  &:hover {
    filter: brightness(90%);
  }

  div {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
  }
`
