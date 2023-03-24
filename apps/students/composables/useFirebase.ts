// https://firebase.google.com/docs/auth/web/start

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { FormData } from "~~/types/typeAuth";
import { useStateFirebase } from "./useStateFireBase";

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

export const signInUser = async (formData: FormData) => {
  const { email, password } = formData;
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseState = useStateFirebase()
  firebaseState.value = auth.currentUser

  const userCookie = useCookie('useCookie')
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;

    } else {

    }
    firebaseState.value = user

    userCookie.value = user
  });
};



export const signOut = async () => {
  const auth = getAuth()
  const result = await auth.signOut()
  console.log(result);
}