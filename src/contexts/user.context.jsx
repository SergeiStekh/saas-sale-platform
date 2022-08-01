import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from '../utils/firebase.utils'
import { createUserDocumentAuth } from '../utils/firebase-firestore.utils'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});


export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  const updateUserState = (user) => {
    if (user) {
      createUserDocumentAuth(user);
    }
    setCurrentUser(user);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(updateUserState);
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

