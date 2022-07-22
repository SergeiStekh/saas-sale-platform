import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase.utils'
import { createUserDocumentAuth } from '../../utils/firebase-firestore.utils';

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  }
  
  return (
    <>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </>
  )
}
