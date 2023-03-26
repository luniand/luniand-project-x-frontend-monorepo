import type { DecodedIdToken } from "firebase-admin/auth";
import type { User } from "firebase/auth";

export const TF_USER_FIREBASE = (user: User | DecodedIdToken) => ({
  uid: user.uid,
  email: user.email || "private",
  username: user.email?.split("@")[0],
});
