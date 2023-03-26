import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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

async function loginByGithub() {
  try {
    const auth = getAuth();
    const provider = new GithubAuthProvider();
    const credential = await signInWithPopup(auth, provider).catch((error) => {
      if (error.code === "auth/account-exists-with-different-credential") {
        alert("account exists with different credential");
        return;
      }
      console.error(error);
    });

    return credential;
  } catch (error) {
    console.error(error);
  }
}

async function loginByGoogle() {
  const auth = getAuth();
  auth.languageCode = "it";
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  provider.setCustomParameters({
    login_hint: "http://localhost:3010",
  });

  const credential = await signInWithPopup(auth, provider).catch((error) => {
    console.error(error.code);
  });

  return credential;
}

async function logOut() {
  const auth = getAuth();
  await signOut(auth);
}

export function useAuth() {
  const currentUser = useState<CurrentUser | null>("currentUser", () => null);

  return {
    currentUser,
    signInUserByEmail,
    signUpUserByEmail,
    loginByGithub,
    loginByGoogle,
    logOut,
  };
}
