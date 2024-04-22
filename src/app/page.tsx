'use client';
import Link from 'next/link';

import * as Styled from './page-styled'

export default function Home() {
  return (
    <>
      <Styled.Header>
        <Styled.Slideshow />
        <div>
          <Styled.Hero>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </Styled.Hero>
          <Styled.Cta>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </Styled.Cta>
        </div>
      </Styled.Header>
      <main>
        <Styled.Section>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </Styled.Section>

        <Styled.Section>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </Styled.Section>
      </main>
    </>
  );
}
