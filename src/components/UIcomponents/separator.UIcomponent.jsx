import React from 'react'
import PropTypes from 'prop-types'
import { StyledSeparator } from '../../styled/elements/separator/separator.styled'

export default function Separator({title}) {
  return (
    <StyledSeparator>
        <div className='line'></div>
        {title ? <div className='word'>{title}</div> : null}
        <div className='line'></div>
    </StyledSeparator>
  )
}

Separator.propTypes = {
  title: PropTypes.string
}
