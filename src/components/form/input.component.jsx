import PropTypes from "prop-types"
import React from 'react'
import {StyledInput} from '../../styled/elements/form/input.styled'

export default function Input({
    type = 'text',
    name,
    value,
    isValidated = true,
    validationErrorMessage = "",
    autocomplete = "",
    onInputChange,
    onBlur,
    onPaste,
    title,
    icon
}) {
    return (
        <StyledInput
            icon={icon}
            isValidated={isValidated}
            validationErrorMessage={validationErrorMessage}>
            <p>{title}{validationErrorMessage ? ' - ' : ''}{validationErrorMessage}</p>
            <div/>
            <input
                type={type}
                value={value}
                autoComplete={autocomplete}
                name={name}
                onChange={(event) => onInputChange(event)}
                onBlur={(event) => onBlur(event)}
                onPaste={(event) => onPaste(event)}
                />
        </StyledInput>
    )
}

Input.propTypes = {
    autocomplete: PropTypes.string,
    icon: PropTypes.string,
    isValidated: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onPaste: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    validationErrorMessage: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}
