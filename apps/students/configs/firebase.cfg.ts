import { applicationDefault, initializeApp } from "firebase-admin/app";

const FIREBASE_APP = initializeApp({
  credential: applicationDefault(),
  databaseURL: "",
});

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA2mCJyvKdapczh9IjgRtM0JhTgnom1ThY",
  authDomain: "nuxt3-firebase-f6787.firebaseapp.com",
  projectId: "nuxt3-firebase-f6787",
  storageBucket: "nuxt3-firebase-f6787.appspot.com",
  messagingSenderId: "667086197122",
  appId: "1:667086197122:web:cc94ecc91bd991810b7f9b",
};

export { FIREBASE_APP, FIREBASE_CONFIG };
