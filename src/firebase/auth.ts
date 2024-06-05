import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./setup";

export const doCreateUserWithEmailAndPassword = (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doSendEmailVerification = () => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    return sendEmailVerification(currentUser, {
      url: `${window.location.origin}/`,
    });
  } else {
    // Handle the case where currentUser is null
    console.error("No user logged in.");
    return Promise.reject(new Error("No user logged in."));
  }
};
