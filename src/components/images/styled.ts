import styled from 'styled-components'
import Image from 'next/image';


export const Slideshow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: scale(1.1) translateX(-1rem) rotate(-5deg);
    transition: all .5s ease-in-out;
  }

`

export const ImageStyled = styled(Image)<{ $active?: boolean }>`
  && {
    ${props => props.$active && `
      z-index: 1;
      opacity: 1;
      transform: scale(1) translateX(0) rotate(0);
    `}
  }

`
