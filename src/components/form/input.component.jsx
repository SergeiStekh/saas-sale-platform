import React from 'react'
import { StyledInput } from '../../styled/elements/form/input.styled'

export default function Input({type, title, icon}) {
  return (
    <StyledInput icon={icon}>
      <p>{title}</p>
      <div/>
      <input type={type}/>
    </StyledInput>
  )
}
