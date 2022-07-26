import PropTypes from "prop-types"
import React from 'react'
import {StyledInput} from '../../styled/elements/form/input.styled'

export default function Input({
    type = 'text',
    isValidated = true,
    validationErrorMessage = "",
    autocomplete = "",
    icon,
    title,
    required,
    ...otherProps
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
                autoComplete={autocomplete}
                {...otherProps}
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
    onChange: PropTypes.func.isRequired,
    onPaste: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    validationErrorMessage: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}
