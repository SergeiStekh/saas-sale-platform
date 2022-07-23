import React from 'react'
import { StyledSignUpForm } from '../../styled/elements/form/sign-up-form.styled';
import useFormWithInputs from '../../custom-hooks/useFormWithInputs';
import { logGoogleUser } from '../../utils/authFunctions'
import { StyledSignIn } from '../../styled/elements/sign-in/sign-in.styled';
import { StyledButton } from '../../styled/elements/button/button.styled';
import Separator from '../UIcomponents/separator.UIcomponent';
import Input from '../form/input.component'
import { googleIcon, facebookIcon, emailIcon, passwordIcon } from '../../styled/icons/icons'

export default function SignIn() {
  const { 
    inputState, 
    handleInputChange, 
    onFormSubmit 
  } = useFormWithInputs();

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
      <StyledSignUpForm onSubmit={onFormSubmit}>
        <Input 
          onInputChange={handleInputChange}
          value={inputState["email"] || ""}
          type='text' 
          name="email"
          required={true}
          title='Email' 
          icon={emailIcon}
        />
        <Input 
          onInputChange={handleInputChange}
          value={inputState["password"] || ""}
          autocomplete="current-password"
          type='password' 
          name="password"
          required={true}
          title='Password' 
          icon={passwordIcon}
        />
        <StyledButton>Login</StyledButton>
      </StyledSignUpForm>  
    </StyledSignIn>
  )
}