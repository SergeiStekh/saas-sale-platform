import React from 'react'
import { logGoogleUser } from '../../utils/authFunctions'
import { StyledSignUp } from '../../styled/elements/sign-in/sign-up.styled';
import { StyledButton } from '../../styled/elements/button/button.styled';
import Separator from '../UIcomponents/separator.UIcomponent';
import Input from '../form/input.component'
import { googleIcon, facebookIcon, emailIcon, passwordIcon, nameIcon, confirmIcon } from '../../styled/icons/icons'

export default function SignUp() {
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
      <div className='inputs-wrapper'>
        <Input type='text' title='Name' icon={nameIcon}/>
        <Input type='text' title='Email' icon={emailIcon}/>
        <Input type='text' title='Password' icon={passwordIcon}/>
        <Input type='text' title='Confirm password' icon={confirmIcon}/>
      </div>
      <StyledButton>
        Sign up
      </StyledButton>
    </StyledSignUp>
  )
}
