import { getAuth } from "firebase-admin/auth";
import { FIREBASE_APP } from "configs";
import { TF_USER_FIREBASE } from "transform";

export default defineNuxtPlugin(async () => {
  const token = useFirebaseToken();
  const { currentUser } = useAuth();
  const auth = getAuth(FIREBASE_APP);

  if (!token.value) return;

  try {
    const result = await auth.verifyIdToken(token.value);
    currentUser.value = TF_USER_FIREBASE(result);
  } catch (e) {
    // Not authenticated or invalid token
    console.log(e);
  }
});
