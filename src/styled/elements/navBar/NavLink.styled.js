import styled from "styled-components"

export const StyledNavLink = styled.a`
  cursor: pointer;
  color: '#000000';
  text-decoration: none;
  transition: color .3s linear;
  text-transform: uppercase;
  word-spacing: -5px;

  &:hover {
    color: green;
  }

  svg {
    width: 16px;
    height: 16px;
    vertical-align: initial;
  }
`