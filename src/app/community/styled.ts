import styled from 'styled-components'

export const Header = styled.header`
  gap: 3rem;
  margin: 3rem auto 5rem auto;
  width: 90%;
  max-width: 75rem;
  color: #ddd6cb;
  font-size: 1.5rem;
  text-align: center;

  h1 {
    font-family: 'Montserrat', sans-serif;
  }

`

export const Highlight = styled.span`
  background: linear-gradient(90deg, #f9572a, #ff8a05);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Main = styled.main`
  width: 90%;
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #ddd6cb;
  }
`


export const Perks = styled.ul`
  list-style: none;
  margin: 3rem 0;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  img {
    width: 8rem;
    height: 8rem;
    object-fit: contain;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    color: #ddd6cb;
  }

`