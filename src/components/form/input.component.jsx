import PropTypes from "prop-types"
import React from 'react'
import {StyledInput} from '../../styled/elements/form/input.styled'

export default function Input({inputElementProps, inputTitleProps, styledInputProps}) {
    const { title, validationErrorMessage } = inputTitleProps;

    const titleValidationMessage = validationErrorMessage ? ` - ${validationErrorMessage}` : '';

    return (
        <StyledInput {...styledInputProps}>
            <p>{title}{titleValidationMessage}</p>
            <div/>
            <input {...inputElementProps}/>
        </StyledInput>
    )
}

Input.propTypes = {
    inputElementProps: PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        autoComplete: PropTypes.string,
        name: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func.isRequired,
        onPaste: PropTypes.func.isRequired,
    }),
    inputTitleProps: PropTypes.shape({
        title: PropTypes.string.isRequired,
        validationErrorMessage: PropTypes.string.isRequired
    }),
    styledInputProps: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        isValidated: PropTypes.bool.isRequired,
        validationErrorMessage: PropTypes.string.isRequired
    }),
}


