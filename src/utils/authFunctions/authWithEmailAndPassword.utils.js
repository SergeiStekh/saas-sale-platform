import { 
  createAuthUserWithEmailAndPassword 
} from '../firebase.utils'
import { createUserDocumentAuth } from '../firebase-firestore.utils';

export const authWithEmailAndPassword = async (name, email, password) => {
  try {
    const { user } = await createAuthUserWithEmailAndPassword(email, password);
    
    await createUserDocumentAuth(user, {displayName: name});
    return user
  } catch(error) {
    return error
  }
}

export default authWithEmailAndPassword;