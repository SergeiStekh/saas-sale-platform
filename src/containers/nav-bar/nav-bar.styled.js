import styled from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 5%;
  position: absolute;
  z-index: 9;
  min-width: 320px;
  top: 0;
  right: 0;
  transform: translate(${({isMobileMenuOpen}) => isMobileMenuOpen ? '0px' : '340px'});
  background-color: ${({theme}) => theme.colors.header};
  transition: transform .3s linear;

  @media (min-width: 768px) {
    min-width: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 25px;
    justify-content: space-evenly;
    align-items: center;
    transform: translate(0px);
    transition: none;
  }
`