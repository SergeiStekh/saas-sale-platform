import { 
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

export const db = getFirestore();

export const createUserDocumentAuth = async (userAuthResponse, additionalInformation = {}) => {
  if (!userAuthResponse) {
    return
  }

  const userDocRef = doc(db, 'users', userAuthResponse.uid);
  const userSnapshot = await getDoc(userDocRef);
  const isUserExist = userSnapshot.exists();

  if (!isUserExist) {
    const { displayName, email } = userAuthResponse;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error(`Error creating the user, ${error.message}`);
    }
  }

  return userDocRef;
}