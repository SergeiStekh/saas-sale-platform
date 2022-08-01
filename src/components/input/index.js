import PropTypes from "prop-types"
import { Wrapper } from './wrapper.styled';
import { InputComponent } from './input.component'

const Input = ({ inputProps, inputTitleProps, icon }) => {
  return (
    <Wrapper>
      <InputComponent 
        inputProps={inputProps} 
        inputTitleProps={inputTitleProps} 
        icon={icon}/>
    </Wrapper>
  )
}

export { Input }

Input.propTypes = {
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