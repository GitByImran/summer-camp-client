import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const createUser = (displayName, email, password, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      displayName,
      email,
      password,
      photoURL
    );
  };

  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setLoading(false);
      if (loggedUser) {
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const authInfo = {
    auth,
    createUser,
    Login,
    logOut,
    loading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
