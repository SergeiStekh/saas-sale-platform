import PropTypes from "prop-types"
import React from 'react'
import { StyledLogo } from '../../styled/elements/header/header-logo.styled'
import { StyledNavLink } from '../../styled/elements/navBar/nav-link.styled'

export default function Logo({image}) {
  return (
    <StyledNavLink to="/">
      <StyledLogo>
        <img src={image} alt="logo"/>
      </StyledLogo>
    </StyledNavLink>
  )
}

Logo.propTypes = {
  image: PropTypes.string.isRequired
}
