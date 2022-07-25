import React from 'react'
import useFormWithInputs from '../../custom-hooks/useFormWithInputs';
import { generateInputData } from '../../assist-functions/generate-input-data';
import { registerUserWithEmailAndPassword } from '../../utils/authFunctions'
import { logGoogleUser } from '../../utils/authFunctions'
import { StyledSignUpForm } from '../../styled/elements/form/sign-up-form.styled'
import { StyledSignUp } from '../../styled/elements/sign-in/sign-up.styled';
import { StyledButton } from '../../styled/elements/button/button.styled';
import Separator from '../UIcomponents/separator.UIcomponent';
import Input from '../form/input.component'
import { googleIcon, facebookIcon, emailIcon, passwordIcon, nameIcon, confirmIcon } from '../../styled/icons/icons'

export default function SignUp() {
  const signUpInputsData = [
    generateInputData({autocomplete: "username", name: "name", title: "Name", icon: nameIcon}),
    generateInputData({name: "email", title: "Email", icon: emailIcon}),
    generateInputData({name: "password", title: "Password", icon: passwordIcon}),
    generateInputData({name: "confirmedPassword", title: "Confirm password", icon: confirmIcon})
  ]

  const { 
    inputsState, 
    onInputChangeHandler, 
    onBlurHandler,
    onPasteHandler,
    onFormSubmitHandler
  } = useFormWithInputs(signUpInputsData);

  const inputElements = signUpInputsData.map((inputConfiguration, idx) => {
    const { value, isValidated, validationErrorMessage, autocomplete, type, name, required, title, icon } = inputConfiguration;
    return (
      <Input 
        key={idx} 
        onInputChange={onInputChangeHandler}
        onBlur={(event) => onBlurHandler(event, name)}
        onPaste={(event) => onPasteHandler(event, name)}
        value={inputsState[name]?.value || value}
        isValidated={inputsState.hasOwnProperty(name) ? inputsState[name].isValidated : isValidated}
        validationErrorMessage={inputsState.hasOwnProperty(name) ? inputsState[name].validationErrorMessage : validationErrorMessage}
        autocomplete={autocomplete ? autocomplete : ""}
        type={type}
        name={name}
        required={required}
        title={title}
        icon={icon}
      />
    )
  });

  const sendDataToServer = async () => {
    const name = inputsState["name"].value;
    const email = inputsState["email"].value;
    const password = inputsState["password"].value;

    registerUserWithEmailAndPassword(name, email, password);
  }

  return (
    <StyledSignUp>
      <h1>I don't have an account</h1>
      <h2>Sign up with:</h2>
      <StyledButton 
        onClick={logGoogleUser}
        icon={googleIcon}
      >
        Google
      </StyledButton>

      <StyledButton 
        onClick={logGoogleUser}
        icon={facebookIcon}
      >
        Facebook
      </StyledButton>
      <Separator title={"OR"}/>
      <StyledSignUpForm onSubmit={(event) => onFormSubmitHandler(event, sendDataToServer)}>
        {inputElements}
        <StyledButton>Sign up</StyledButton>
      </StyledSignUpForm>
    </StyledSignUp>
  )
}
