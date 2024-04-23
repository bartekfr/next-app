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

export const HeaderBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 320px;
  top: 0;
  left: 0;
  z-index: -1;
`

export const NavLinkStyled = styled(Link)<{
  $active: boolean
}>`

  text-decoration: none;
  color: #ddd6cb;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  &:hover,
  &:active {
    background: linear-gradient(90deg, #ff8a05, #f9b331);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 18px rgba(248, 190, 42, 0.8);
  }

  ${props => props.$active && `
    background: linear-gradient(90deg, #ff8a05, #f9b331);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `
  }
`