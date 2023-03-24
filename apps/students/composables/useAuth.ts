import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const currentUser = ref();

async function signInUserByEmail(formData: any) {
  const { email, password } = formData;
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return credentials;
}

export function useAuth() {
  return { currentUser, signInUserByEmail };
}
