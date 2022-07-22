import React, { useEffect } from 'react'
import { 
  signInWithGooglePopup, 
  signInWithGoogleRedirect,
  auth
} from '../../utils/firebase.utils'
import { createUserDocumentAuth } from '../../utils/firebase-firestore.utils';
import { getRedirectResult } from 'firebase/auth';

export default function SignIn() {
  const getRedirectResponse = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const { user } = response;
      const userDocRef = await createUserDocumentAuth(user);
    }
  }

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  }

  useEffect(() => {
    getRedirectResponse();
  }, [])
  
  
  return (
    <>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with redirect</button>
    </>
  )
}
