import { 
  signInWithGooglePopup 
} from '../firebase.utils'
import { createUserDocumentAuth } from '../firebase-firestore.utils';

const authWithGoogle = async () => {
  const { user } = await signInWithGooglePopup();
  const userDocRef = await createUserDocumentAuth(user);
}

export default authWithGoogle;