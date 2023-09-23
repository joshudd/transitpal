import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { firebaseApp } from "@/modules/auth/client";
import AppLayout from "@layouts/AppLayout";
import Login from "@/modules/auth/Login";
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
export default function App({ Component, pageProps }: AppProps) {
  const [user, loading, error] = useAuthState(auth);
  const signOutUser = () => signOut(auth);

  const signIn = (method: string) => {
    switch (method) {
      case "google":
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        break;
      default:
        break;
    }
  };
  if (user) {
    return (
      <AppLayout signOut={signOutUser} user={user}>
        <Component {...pageProps} />
      </AppLayout>
    );
  } else if (loading) {
    return <div>loading...</div>;
  } else if (error) {
    return <div>error...</div>;
  } else if (!user) {
    return <Login signIn={signIn} />;
  }
}
