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
    const { autocomplete, type, name, title, icon } = inputConfiguration;

    const { value, isValidated, validationErrorMessage } = inputsState[name];

    const onChange = onInputChangeHandler;
    const onBlur = (event) => onBlurHandler(event, name);
    const onPaste = (event) => onPasteHandler(event, name);

    const inputElementProps = { type, value, autoComplete: autocomplete, name, onChange, onBlur, onPaste };

    const inputTitleProps = { title, validationErrorMessage };

    const styledInputProps = { icon, isValidated, validationErrorMessage };

    return (
      <Input 
        key={idx}
        inputElementProps={inputElementProps}
        inputTitleProps={inputTitleProps}
        styledInputProps={styledInputProps}
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
