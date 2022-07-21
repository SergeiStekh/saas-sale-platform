import React from 'react'
import { StyledBurger } from '../../../styled/elements/navBar/Burger.styled'

export default function Burger({ isNavOpen, onBurgerClick }) {
  return (
    <StyledBurger isNavOpen={isNavOpen} onClick={onBurgerClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
