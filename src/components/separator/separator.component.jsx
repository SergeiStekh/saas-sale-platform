import React from 'react'
import PropTypes from 'prop-types'
import { StyledSeparatorLine } from './separator-line.styled'
import { StyledSeparatorWord } from './separator-word.styled'

function SeparatorComponent({title}) {
  return (
    <>
      <StyledSeparatorLine/>
      {title ? 
        <StyledSeparatorWord>
          {title}
        </StyledSeparatorWord> : 
      null}
      <StyledSeparatorLine/>
    </>
  )
}

SeparatorComponent.propTypes = {
  title: PropTypes.string
}

export { SeparatorComponent }