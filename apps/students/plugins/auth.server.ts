import { getAuth } from "firebase-admin/auth";
import { applicationDefault, initializeApp, cert } from "firebase-admin/app";
import { TF_USER_FIREBASE } from "transform";

const FIREBASE_APP = initializeApp({
  credential:
    cert({
      projectId: "project-x-mvp",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDJEZhnGWXDuDPa\ngkoM23VRF0dHh5Wk7ZnLQ1Prjym8utEHu0yAXAQZDmFEwZspv9plI0fl89Mkz1SR\nvHV+qL42Plm1Fc9KpOSq9ijAkxXGNj+sjpPDKdT83ewdHXRhNcp+ss7gY6G38qoX\nYsT926qfshxbnncS+MgwsEJd6xag/mN2ApM6kyyM/NnhvmD/gojwqB3fe6cIkwls\nNDNHzVGYCpdnf7Ht6AG7dWJ98l93D3X69olIyk4LoJ7hvKjaqhrvtXH7M0gVAp7l\nGxasbI3AzNNUW95cXWgiMGvimEK2cg+WGk2rmHsogqWgMD9faJiXIGnAYAMh99a9\nPtL3vHWtAgMBAAECggEAI4VP/PC77WBaisDnJ4/SkSWRYlXVzinqeEH37p6fQzfm\nqxy/1lJLKAkGDoE8cdrykFjz/+/77l4RROC8Cgjx93+61daZRQjN29T6XJDvcRGO\n3KNgf8MhXR2wc3FLaMv5rrnUecgoHujH+zMn9Wfr4+Pxhg7/3rJkHVPaGaDpIb4W\n9fUD3ZDmPIoc8Oqro+oebjy+cHq5eHGsPlNd2kSwpPyoiRULBkluZ8ZG9eh0//oy\na5LsoJXdXnddHr8N7NetqvJYXfH5tSPlmqkbGUyEXZwzg3JZmM72GbWCf0Q5jJIp\nLY2FvBZIDcF0ig2Yaxbb2TwkdiXBrvJVNDh6+GtVsQKBgQDlZ9B9T2uR/zFURtOd\noo4PacrlmZyXakgEWpXkd06zExSzjYFpnRsHgK/uLTub4UzEI8dsYUHg1Byq9gkO\n898+k6V9M7x+pehOdJz0HzAZp8Uzllvh9kjQlhbx3D8cXk4WDEM/fKZGo6uy3atA\nvKiJGUk/S324ekbEA4C80femPQKBgQDgYNC6RUkvKQgAoddJi0txMxSMtLCfaRFa\nzkPDa9v4SDmT+Aek8Dxajwt2/2rwywzUtEd1Z635Bnpy05c9Us9LO/65dukEMUKv\nJvkoLPXs9hY4ZVeEtNQtkyDlX/0G3LoM2+soysDqcH851jCsbr/L6siP/btihnrk\nM7itEip0MQKBgFOF4bXOFbc5N4ecpe1twtU/ylyf+hBy5LeZF5vwCFpQpyfcbHK8\nfZvUsblBBMPzWpTLBg+itW6bK7jfDVtBVVWeQhF8pbNiylrOQFrthADDQZxPsTJr\nDgXLr5zteJjmiP2kB1P1GUD81EWySWivh5kq+K0v2h0xf9RcBiI5PDZtAoGAeRXm\nLk+LsgabifPMwaSJPvqI4XH1SuGhevaK/R/s4mzfnamhPnJir6A4WKx34qBBOVxc\nn9Amw5eqZuMm3/IbagdjbGTuVNPcn7cRiIvS32DiFuchtrz7L+kRPJdzbcuaH6xi\nmG3qc9nn3qdnNvbBTGNUftg30nCuSw5aYBPIk1ECgYBCwZCuTNMysCM/68l+XS3M\n6QAnWUjT87vjsnuUQzdV0h29TVyZRPDLRacDUHcukJ4TzzZSocM1sA1zIwmXmjk6\nO/UUf/354x2Z7lvQ/67JXxzFJeKX/nwewyp6rqNczWWghllys79kClWfE0KIeXyG\nSSpa53QmHF+Fnv6T+paj3Q==\n-----END PRIVATE KEY-----\n",
      clientEmail:
        "firebase-adminsdk-c5eqd@project-x-mvp.iam.gserviceaccount.com",
    }) || applicationDefault(),
  databaseURL: "https://project-x-mvp.firebaseio.com",
});

export default defineNuxtPlugin(async () => {
  const token = useFirebaseToken();

  const { currentUser } = useAuth();
  const auth = getAuth(FIREBASE_APP);
  if (!token.value) return;
  try {
    const result = await auth.verifyIdToken(token.value);
    currentUser.value = TF_USER_FIREBASE(result);
  } catch (e) {
    console.error(e);
  }
});
