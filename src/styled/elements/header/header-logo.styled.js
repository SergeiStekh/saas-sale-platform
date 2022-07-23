import styled from "styled-components";

export const StyledLogo = styled.div`
  position: relative;
  z-index: 9;
  width: 250px;
  height: 50px;
  transition: all .3s linear;
  cursor: pointer;

  img {
    width: 250px;
    height: 50px;
    object-fit: cover;
  }

  &:hover {
    filter: brightness(1.3) contrast(1.1);
    transform: scale(1.05);
  }
`

