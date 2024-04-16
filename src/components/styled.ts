import styled from 'styled-components'
import Link from 'next/link';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;

  @media (min-width: 768px) {
      padding: 2rem 10%;
  }

`
export const Nav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1.5rem;
    /* font-family: 'Montserrat', sans-serif; */
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
    color: #ddd6cb;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  a:hover,
  a:active {
    background: linear-gradient(90deg, #ff8a05, #f9b331);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 18px rgba(248, 190, 42, 0.8);
  }

  .active {
    background: linear-gradient(90deg, #ff8a05, #f9b331);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-decoration: none;
  color: #ddd6cb;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  font-size: 1.5rem;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
  }
`