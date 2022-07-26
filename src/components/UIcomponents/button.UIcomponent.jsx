import PropTypes from "prop-types"
import React from 'react'
import { StyledSeparator } from '../../styled/elements/separator/separator.styled'

export default function Separator({title}) {
  return (
    <StyledSeparator>
        <div className='line'></div>
        <div className='word'>{title}</div>
        <div className='line'></div>
    </StyledSeparator>
  )
}

Separator.propTypes = {
  title: PropTypes.string
}
