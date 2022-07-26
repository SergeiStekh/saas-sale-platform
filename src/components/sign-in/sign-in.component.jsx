import React from 'react'
import { logGoogleUser } from '../../utils/authFunctions'
import { generateInputData } from '../../assist-functions/generate-input-data';
import useFormWithInputs from '../../custom-hooks/useFormWithInputs';
import { googleIcon, facebookIcon, emailIcon, passwordIcon } from '../../styled/icons/icons'
import Separator from '../UIcomponents/separator.UIcomponent';
import Input from '../form/input.component'
import { StyledSignUpForm } from '../../styled/elements/form/sign-up-form.styled';
import { StyledSignIn } from '../../styled/elements/sign-in/sign-in.styled';
import { StyledButton } from '../../styled/elements/button/button.styled';

export default function SignIn() {
  const signInInputsData = [
    generateInputData({name: 'email', title: 'email', icon: emailIcon}),
    generateInputData({name: 'password', title: 'Password', icon: passwordIcon}),
  ]

  const { 
    inputsState,
    onInputChangeHandler,
    onBlurHandler,
    onPasteHandler,
    onFormSubmitHandler
  } = useFormWithInputs(signInInputsData);

  const inputElements = signInInputsData.map((inputConfiguration, idx) => {
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

  const logUserWithEmailAndPassword = () => {
    console.log("logging in")
  }


  return (
    <StyledSignIn>
      <h1>A already have an account</h1>
      <h2>Sign in with:</h2>
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
      <StyledSignUpForm onSubmit={(event) => onFormSubmitHandler(event, logUserWithEmailAndPassword)}>
        {inputElements}
        <StyledButton>Login</StyledButton>
      </StyledSignUpForm>  
    </StyledSignIn>
  )
}