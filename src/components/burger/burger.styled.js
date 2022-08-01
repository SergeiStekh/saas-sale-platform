import styled from "styled-components";

const StyledBurger = styled.button `
  position: absolute;
  top: 24px;
  right: 15px;
  transform: rotate(${({isMobileMenuOpen}) => isMobileMenuOpen ? '90deg' : '0deg'});
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
`

export { StyledBurger }