'use client';

import Link from 'next/link';
import { Header, Nav, Logo } from './styled';

import logoImg from '@/assets/logo.png';

export default function MainHeader() {
  return (
    <Header>
      <Logo href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
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
  );
}
