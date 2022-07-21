import React from 'react'
import { StyledLogo } from '../../styled/elements/header/header-logo.styled'
import logoImage from '../../assets/images/logo.png'
import { StyledNavLink } from '../../styled/elements/navBar/NavLink.styled'

export default function Logo() {
  return (
    <StyledNavLink to="/">
      <StyledLogo>
        <img src={logoImage} alt="logo"/>
      </StyledLogo>
    </StyledNavLink>
  )
}
