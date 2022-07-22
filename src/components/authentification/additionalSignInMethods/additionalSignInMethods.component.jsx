import React, { useEffect } from 'react'
import {  
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

  useEffect(() => {
    getRedirectResponse();
  }, [])
  
  
  return (
    <>
      <h1>Sign in</h1>
      <button onClick={signInWithGoogleRedirect}>Sign in with redirect</button>
    </>
  )
}
