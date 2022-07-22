import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase.utils'

export default function SignIn() {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res)
  }
  
  return (
    <>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </>
  )
}
