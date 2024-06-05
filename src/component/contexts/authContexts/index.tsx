// import React,{ useEffect, useState } from "react"
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../../firebase/setup";


// const AuthContext = React.createContext();

// export function AuthProvider({ children }: { children: ReactNode }) {
//     const [ currentUser, setCurrentUser ] = useState(null);
//     const [ userLoggedIn, setUserLoggedIn] = useState(false);
//     const [ loading, setLoading] = useState(true);


// useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, initializeUser);
//     return unsubscribe;
// }, [])

// async function initializeUser(user: any) {
//     if (user) {
//             setCurrentUser({...user});
//             setUserLoggedIn(true);
//         } else {
//             setCurrentUser(null);
//             setUserLoggedIn(false);
//         }
//         setLoading(false);
//     }

//     const value = {
//         currentUser,
//         userLoggedIn,
//         loading
//     }

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )

// }

import React, { ReactNode, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/setup";

const AuthContext = React.createContext<{
  currentUser: any;
  userLoggedIn: boolean;
  loading: boolean;
}>({
  currentUser: null,
  userLoggedIn: false,
  loading: true,
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: any) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
