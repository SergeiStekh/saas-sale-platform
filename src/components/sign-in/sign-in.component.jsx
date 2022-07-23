import React from 'react'
import { logGoogleUser } from '../../utils/authFunctions'
import { StyledSignIn } from '../../styled/elements/sign-in/sign-in.styled';
import { StyledButton } from '../../styled/elements/button/button.styled';
import Separator from '../UIcomponents/separator.UIcomponent';
import Input from '../form/input.component'
import { googleIcon, facebookIcon, emailIcon, passwordIcon } from '../../styled/icons/icons'

export default function SignIn() {
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
      <Input type='text' title='Email' icon={emailIcon}/>
      <Input type='password' title='Password' icon={passwordIcon}/>
      <StyledButton>
        Login
      </StyledButton>
    </StyledSignIn>
  )
}
