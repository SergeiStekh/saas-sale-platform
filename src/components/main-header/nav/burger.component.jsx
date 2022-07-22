import React from 'react'
import { StyledBurger } from '../../../styled/elements/navBar/Burger.styled'

export default function Burger({ isMobileMenuOpen, onBurgerClick }) {
  return (
    <StyledBurger isMobileMenuOpen={isMobileMenuOpen} onClick={onBurgerClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
