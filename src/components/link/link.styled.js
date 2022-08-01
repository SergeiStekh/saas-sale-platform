import styled from "styled-components"
import { NavLink as BaseNavLink } from "react-router-dom";

const StyledLink = styled(BaseNavLink)`
  cursor: pointer;
  color: '#000000';
  text-decoration: none;
  transition: color .3s linear;
  text-transform: uppercase;
  word-spacing: 0px;

  &:hover {
    color: green;
  }

  &.active {
    color: darkblue;
    filter: brightness(1.5);
  }

  svg {
    width: 16px;
    height: 16px;
    vertical-align: initial;
  }
`;

export { StyledLink }