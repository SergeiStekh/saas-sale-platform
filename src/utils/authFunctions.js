import { useState, useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth';
import { 
  signInWithGooglePopup, 
  signInWithGoogleRedirect,
  auth 
} from './firebase.utils'
import { createUserDocumentAuth } from './firebase-firestore.utils';

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentAuth(user);
}

function useGoogleUserWithRedirect() {
  const [userDocRef, setUserDocRef] = useState(null);

  const getRedirectResponse = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const { user } = response;
      const userDocRef = await createUserDocumentAuth(user);
      setUserDocRef(userDocRef);
    }
  }

  useEffect(() => {
    getRedirectResponse();
  }, [])
  
  return {
    signInWithGoogleRedirect,
    userDocRef
  }
}

export { logGoogleUser, useGoogleUserWithRedirect }