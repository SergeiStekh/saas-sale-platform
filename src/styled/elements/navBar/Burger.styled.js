import styled from "styled-components";

export const StyledBurger = styled.button `
  position: absolute;
  top: 24px;
  right: 15px;
  transform: rotate(${({isNavOpen}) => isNavOpen ? '90deg' : '0deg'});
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: transform .3s linear;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  &:focus {
    outline: none;
  }
  
  div {
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
  }
`