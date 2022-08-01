import PropTypes from "prop-types"
import React from 'react'
import { StyledBurger } from './burger.styled'
import { StyledBurgerLine } from "./burger-line.styled"

function BurgerComponent({ isMobileMenuOpen, onClick }) {
  return (
    <StyledBurger isMobileMenuOpen={isMobileMenuOpen} onClick={onClick}>
      <StyledBurgerLine />
      <StyledBurgerLine />
      <StyledBurgerLine />
    </StyledBurger>
  )
}

BurgerComponent.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export { BurgerComponent }