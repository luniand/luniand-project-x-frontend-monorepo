import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { TF_USER_FIREBASE } from "~~/transform";
import { FIREBASE_CONFIG } from "~~/configs";

function setServerSession(token: string) {
  return $fetch("/api/session", {
    method: "POST",
    body: {
      token,
    },
  });
}

export default defineNuxtPlugin((nuxtApp) => {
  const { currentUser } = useAuth();

  // init firebase app
  const app = initializeApp(FIREBASE_CONFIG());
  const auth = getAuth();

  nuxtApp.hooks.hook("app:mounted", () => {
    auth.onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setServerSession(token);
        currentUser.value = TF_USER_FIREBASE(user);
      } else {
        setServerSession("");
        currentUser.value = null;
      }
    });
  });

  return {
    provide: {
      auth,
      firebase: app,
    },
  };
});
