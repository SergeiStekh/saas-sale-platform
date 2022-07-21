import React from 'react'
import { StyledHeader } from '../../styled/elements/header/header.styled'
import Logo from './logo.component'
import Nav from './nav/nav.component'

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  )
}
