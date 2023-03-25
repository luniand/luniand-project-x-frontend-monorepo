import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const currentUser = ref();

async function signInUserByEmail(dto: FormDataUserSignIn) {
  const { email, password } = dto;
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return credentials;
}

async function signUpUserByEmail(dto: FormDataUserSignIn) {
  try {
    const { email, password } = dto;
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
