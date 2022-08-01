import styled from "styled-components";

const StyledModalCloseBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  right: 5px;
  background-image: url(${({closeModalImg}) => closeModalImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  transition: all .3s linear;
  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
      background-image: url(${({closeModalHoverImg}) => closeModalHoverImg});
  }
`

export { StyledModalCloseBtn }