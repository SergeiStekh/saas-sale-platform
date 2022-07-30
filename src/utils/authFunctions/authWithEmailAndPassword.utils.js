import { 
  createAuthUserWithEmailAndPassword 
} from '../firebase.utils'
import { createUserDocumentAuth } from '../firebase-firestore.utils';

export const authWithEmailAndPassword = async (name, email, password) => {
  try {
    const { user } = await createAuthUserWithEmailAndPassword(email, password);
    const result = await createUserDocumentAuth(user, {displayName: name});
  } catch(error) {
    console.error(error);
  }
}

export default authWithEmailAndPassword;