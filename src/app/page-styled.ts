import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  gap: 3rem;
  margin: 3rem auto;
  width: 90%;
  max-width: 75rem;
`

export const Slideshow = styled.div`
  width: 40rem;
  height: 25rem;
`

export const Hero = styled.div`
  color: #ddd6cb;
  font-size: 1.5rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    background: linear-gradient(90deg, #f9572a, #ffc905);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Cta = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 1rem;

  a {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: linear-gradient(90deg, #f9572a, #ff9b05);
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;

    &:hover,
    &:active {
      background: linear-gradient(90deg, #fd4715, #f9b241);
    }

    &:first-child {
      background: transparent;
      font-weight: normal;
      color: #ff9b05;
      padding-left: 0;
    }

    &:first-child:hover,
    &:first-child:active {
      background: transparent;
      color: #f9b241;
  }

`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  color: #ddd6cb;
  font-size: 1.5rem;
  max-width: 50rem;
  width: 90%;
  margin: 2rem auto;
  text-align: center;
`
