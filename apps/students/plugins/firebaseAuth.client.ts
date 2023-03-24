import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: "nuxt3-firebase-f6787.firebaseapp.com",
    projectId: "nuxt3-firebase-f6787",
    storageBucket: "nuxt3-firebase-f6787.appspot.com",
    messagingSenderId: "667086197122",
    appId: "1:667086197122:web:cc94ecc91bd991810b7f9b",
  };

  initializeApp(firebaseConfig);
  initUser();

  const auth = getAuth();
  nuxtApp.vueApp, provide("auth", auth);
  nuxtApp.provide("auth", auth);
});
