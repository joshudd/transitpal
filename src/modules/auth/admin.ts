import * as admin from "firebase-admin";
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);
if (!admin.apps.length) {
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

const firestore = admin.firestore();
const auth = admin.auth();

export { firestore, auth };