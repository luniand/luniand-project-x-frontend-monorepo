import type { DecodedIdToken } from "firebase-admin/auth";
import type { User } from "firebase/auth";

export const TF_USER_FIREBASE = (user: User | DecodedIdToken) => {
  return {
    uid: user.uid,
    email: user.email,
  };
};
