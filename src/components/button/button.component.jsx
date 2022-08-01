import PropTypes from "prop-types"
import React from 'react'
import { StyledButton } from "./button.styled"

function ButtonComponent({icon = null, children}) {
  return (
    <StyledButton icon={icon}>{children}</StyledButton>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string
}

export { ButtonComponent }
