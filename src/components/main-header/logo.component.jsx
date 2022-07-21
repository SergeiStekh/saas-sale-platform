import React from 'react'
import { StyledLogo } from '../../styled/elements/header/header-logo.styled'
import logoImage from '../../assets/images/logo.png'

export default function Logo() {
  return (
    <StyledLogo>
      <img src={logoImage} alt="logo"/>
    </StyledLogo>
  )
}
