import PropTypes from 'prop-types'
import { StyledInput } from './input.styled'
import { StyledInputTitle } from './input-title.styled';
import { StyledInputIcon } from './input-icon.styled';
import { StyledInputLabel } from './input-label.styled';

const InputComponent = (
  { 
    inputProps, 
    inputTitleProps, 
    icon 
  }) => {
  const { name } = inputProps;

  const { title, validationErrorMessage } = inputTitleProps;
  
  const titleWithValidationMessage = `${title}${validationErrorMessage ? ` - ${validationErrorMessage}` : ''}`;

  return (
  <>
    <StyledInputTitle>{titleWithValidationMessage}</StyledInputTitle>
    { icon ? 
      <StyledInputIcon icon={icon}/> : 
    null }
    <StyledInputLabel htmlFor={name}/>
    <StyledInput {...inputProps}/>
  </>
  )
}

export { InputComponent }

InputComponent.propTypes = {
  inputProps: PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      autoComplete: PropTypes.string,
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      onBlur: PropTypes.func.isRequired,
      onPaste: PropTypes.func.isRequired,
      isValidated: PropTypes.bool.isRequired
  }),
  inputTitleProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    validationErrorMessage: PropTypes.string.isRequired
  }),
  icon: PropTypes.string.isRequired
}