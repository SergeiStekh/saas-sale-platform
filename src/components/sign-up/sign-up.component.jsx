import React, { useEffect, useState } from 'react'
import useFormWithInputs from '../../custom-hooks/useFormWithInputs';
import { logGoogleUser } from '../../utils/authFunctions'
import { StyledSignUpForm } from '../../styled/elements/form/sign-up-form.styled'
import { StyledSignUp } from '../../styled/elements/sign-in/sign-up.styled';
import { StyledButton } from '../../styled/elements/button/button.styled';
import Separator from '../UIcomponents/separator.UIcomponent';
import Input from '../form/input.component'
import { googleIcon, facebookIcon, emailIcon, passwordIcon, nameIcon, confirmIcon } from '../../styled/icons/icons'

export default function SignUp() {
  const { 
    inputState, 
    handleInputChange, 
    onFormSubmit 
  } = useFormWithInputs();

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
      <StyledSignUpForm onSubmit={onFormSubmit}>
        <Input 
          onInputChange={handleInputChange} 
          value={inputState["name"] || ""}
          autocomplete="username"
          type='text' 
          name='name' 
          required={true}
          title='Name' 
          icon={nameIcon}
          />
        <Input 
          onInputChange={handleInputChange}
          value={inputState["email"] || ""}
          type='text' 
          name='email'
          required={true}
          title='Email' 
          icon={emailIcon}
          />
        <Input 
          onInputChange={handleInputChange}
          value={inputState["password"] || ""}
          type='text' 
          name='password'
          required={true}
          title='Password' 
          icon={passwordIcon}
        />
        <Input 
          onInputChange={handleInputChange}
          value={inputState["confirmedPassword"] || ""}
          type='text' 
          name='confirmedPassword'
          required={true}
          title='Confirm password' 
          icon={confirmIcon}
          />
        <StyledButton>Sign up</StyledButton>
      </StyledSignUpForm>
    </StyledSignUp>
  )
}
