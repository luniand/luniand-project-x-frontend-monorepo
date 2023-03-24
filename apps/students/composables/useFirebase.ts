// https://firebase.google.com/docs/auth/web/start

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { FormData } from "~~/types/typeAuth";

export const createUser = async (formData: FormData) => {
  const { email, password } = formData;
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

export const loginWithGithub = async () => {
  const auth = getAuth();
  const provider = new GithubAuthProvider();
  const credential = await signInWithPopup(auth, provider).catch((error) => {});
  return credential;
};

export const loginWithGoogle = async () => {
  const auth = getAuth();
  auth.languageCode = "it";
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  provider.setCustomParameters({
    login_hint: "http://localhost:3010",
  });

  const credential = await signInWithPopup(auth, provider).catch((error) => {});

  return credential;
};

export const logOut = async () => {
  const auth = getAuth();
  signOut(auth);
};
