import styled from "styled-components";

const StyledBurgerLine = styled.div`
  width: 2rem;
  height: 0.25rem;
  background: #000000;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  display: initial;

  @media (min-width: 768px) {
    display: none;
  }
`

export { StyledBurgerLine }