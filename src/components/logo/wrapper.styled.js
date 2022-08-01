import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 9;
  width: 250px;
  height: 50px;
  transition: all .3s linear;
  cursor: pointer;

  &:hover {
    filter: brightness(1.3) contrast(1.1);
    transform: scale(1.05);
  }
`

export { Wrapper }