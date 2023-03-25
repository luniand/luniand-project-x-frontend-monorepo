import { getAuth } from "firebase-admin/auth";
import { applicationDefault, initializeApp, cert } from "firebase-admin/app";
import admin from "firebase-admin";
import { TF_USER_FIREBASE } from "transform";

export default defineNuxtPlugin(async () => {
  let FIREBASE_APP: ReturnType<typeof initializeApp> | null = null;

  const token = useFirebaseToken();
  const { currentUser } = useAuth();

  const config = useRuntimeConfig();

  if (!FIREBASE_APP && !admin.apps.length) {
    FIREBASE_APP = initializeApp({
      credential:
        cert({
          projectId: config.public.FIREBASE_PROJECT_ID,
          privateKey: config.FIREBASE_PRIVATE_KEY,
          clientEmail: config.public.FIREBASE_CLIENT_EMAIL,
        }) || applicationDefault(),
      databaseURL: config.public.FIREBASE_DATABASE_URL,
    });
  }

  if (FIREBASE_APP) {
    const auth = getAuth(FIREBASE_APP);
    if (!token.value) return;

    try {
      const result = await auth.verifyIdToken(token.value);
      currentUser.value = TF_USER_FIREBASE(result);
    } catch (e) {
      console.error(e);
    }
  }
});
