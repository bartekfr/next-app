'use client';

import Link from 'next/link';
import { Header, Nav, Logo } from './styled';
import MainHeaderBackground from '@/components//main-header/main-header-background';

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </Nav>
      </Header>
    </>
  );
}
