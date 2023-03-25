import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export type FormData = {
  email: string;
  password: string;
};

const currentUser = ref();

async function signInUserByEmail(formData: any) {
  const { email, password } = formData;
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return credentials;
}

async function signUpUserByEmail(formData: FormData) {
  try {
    const { email, password } = formData;
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return credentials;
  } catch (error) {
    // show alert notice warning for user.
    console.error(error);
  }
}

export function useAuth() {
  return { currentUser, signInUserByEmail, signUpUserByEmail };
}
