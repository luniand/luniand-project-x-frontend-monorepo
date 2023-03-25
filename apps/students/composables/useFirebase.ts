// https://firebase.google.com/docs/auth/web/start

import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

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
