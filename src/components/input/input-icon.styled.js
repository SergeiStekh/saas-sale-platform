import styled from "styled-components";

const StyledInputIcon = styled.div`
  display: block;
  grid-column: 2 / 3;
  position: absolute;
  z-index: 1;
  width: 36px;
  height: 36px;
  top: 6px;
  left: 7px;
  background-image: url(${({icon}) => icon});
  background-size: cover;
  background-repeat: no-repeat;
`

export { StyledInputIcon }