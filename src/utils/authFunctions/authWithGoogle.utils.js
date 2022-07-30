import { 
  signInWithGooglePopup 
} from '../firebase.utils'
import { createUserDocumentAuth } from '../firebase-firestore.utils';

const authWithGoogle = async () => {
  try {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentAuth(user);
    return user
  } catch(error) {
    return error
  }
}

export default authWithGoogle;