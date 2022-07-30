import { 
  signInWithUserEmailAndPassword 
} from '../firebase.utils'
import { logInUserDocumentAuth } from '../firebase-firestore.utils';

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await signInWithUserEmailAndPassword(email, password);
    const {userDocRef, isUserExist} = await logInUserDocumentAuth(user);

    return user;
  } catch(error) {
    const { code, message } = error;
    return { code, message }
  }
}

export default logInWithEmailAndPassword;