import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { authentification } from "../firebase/config.js";

import { onAuthStateChanged } from "firebase/auth";
// TODO: Basically, this file create a new state useState in order to use the context in the auth (like  uid) globally
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setUid] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(authentification, (user) => {
      if (user) {
        setUid(user.uid);
        setLoggedIn(true);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, loggedIn, setUid, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
