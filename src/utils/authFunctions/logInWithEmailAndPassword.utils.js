import { 
  signInWithUserEmailAndPassword 
} from '../firebase.utils'
import { logInUserDocumentAuth } from '../firebase-firestore.utils';

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await signInWithUserEmailAndPassword(email, password);
    console.log(user);
    const {userDocRef, isUserExist} = await logInUserDocumentAuth(user);

    console.log(userDocRef, isUserExist)
    return {userDocRef, isUserExist}
  } catch(error) {
    const { code, message } = error;
    return { code, message }
  }
}

export default logInWithEmailAndPassword;