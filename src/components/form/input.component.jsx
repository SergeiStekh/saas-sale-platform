import React from 'react'
import { StyledInput } from '../../styled/elements/form/input.styled'

export default function Input({type='text', name, value, autocomplete="", required=false, onInputChange, title, icon}) {
  return (
    <StyledInput icon={icon}>
      <p>{title}</p>
      <div/>
      <input 
        type={type} 
        value={value} 
        autoComplete={autocomplete}
        name={name} 
        required={required}
        onChange={(e) => onInputChange(e)}
      />
    </StyledInput>
  )
}
