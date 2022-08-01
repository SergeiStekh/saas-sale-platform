import styled from "styled-components";

const StyledNavOverlay = styled.div`
  position: absolute;
  z-index: 9;
  display: ${({isMobileMenuOpen}) => {
    return isMobileMenuOpen ? 'block' : 'none';
  }};
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  opacity: 0;
  animation: showUp .3s linear forwards;

  @keyframes showUp {
    0% {
      display: block;
    }
    1% {
      opacity: .1;
    }
    100% {
      opacity: .3;
    }
  }
`

export { StyledNavOverlay }