import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { NavLinkStyled } from './styled'


interface NavLinkProps {
  href: string
  children: React.ReactNode
}

 const NavLink = ({ href, children}: NavLinkProps) => {
  const path = usePathname()
  return (
    <NavLinkStyled
      href={href}
      $active={path.startsWith(href)}
    >
      {children}
    </NavLinkStyled>
  )
}

export default NavLink