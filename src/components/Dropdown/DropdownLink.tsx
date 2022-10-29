import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { DropdownMenuItem } from './Styled'

interface NavigationLinkProps {
  text: string
  path: string
}

export function DropdownLink({ text, path }: NavigationLinkProps) {
  const router = useRouter()

  function verifyIfIsActive() {
    return path === router.pathname
  }

  const isActive = verifyIfIsActive()

  return (
    <DropdownMenu.Item>
      <DropdownMenuItem isActive={isActive}>
        <Link href={path}>{text}</Link>
      </DropdownMenuItem>
    </DropdownMenu.Item>
  )
}
