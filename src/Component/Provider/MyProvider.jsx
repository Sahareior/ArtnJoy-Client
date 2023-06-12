import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const MyProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {});
  };

 const profile =(displayName,photoURL)=>{
  
 updateProfile(auth.currentUser, {
  displayName: displayName, photoURL: photoURL
}).then(() => {
  // Profile updated!
  console.log('Profile Updated')
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
  }
  const googleSignIn =()=>{
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user inside auth state observer", loggedUser);
      setUser(loggedUser);
      setLoading(false);
      if(loggedUser){
        const name = loggedUser?.name ?? 'anonymous'
        const email = loggedUser?.email 
        const data = {name,email}
        fetch('http://localhost:5000/users',{
          method:'POST',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
  
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    createUser,
    login,
    logout,
    user,
    loading,
    profile,
    googleSignIn
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default MyProvider;
