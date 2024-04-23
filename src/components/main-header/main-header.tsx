'use client';

import Link from 'next/link';
import { Header, Nav, Logo } from './styled';
import MainHeaderBackground from '@/components//main-header/main-header-background';
import NavLink from './nav-link'

import logoImg from '@/assets/logo.png';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <Header>
        <Logo href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Logo>

        <Nav>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </Nav>
      </Header>
    </>
  );
}
