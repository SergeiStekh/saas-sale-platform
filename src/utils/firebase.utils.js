import { initializeApp } from 'firebase/app'
import {
  getAuth, 
  signInWithPopup,
  signInWithRedirect, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDFXzGKzW4RDMoWblwS1g1m7i5ca44M79E",
    authDomain: "saas-store-d.firebaseapp.com",
    projectId: "saas-store-d",
    storageBucket: "saas-store-d.appspot.com",
    messagingSenderId: "547997260522",
    appId: "1:547997260522:web:8e291544ad2a5ed7b45593"
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) =>  {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithUserEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);