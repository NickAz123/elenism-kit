import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

let firebaseApp = null;
let firestore = null;
let auth = null;

export const fireBaseInit = (config) => {
  if (!firebaseApp) {
    firebaseApp = initializeApp(config);
    firestore = getFirestore(firebaseApp);
    auth = getAuth(firebaseApp);
  }
  return { firebaseApp, firestore, auth };
};

export const getFirebaseApp = () => {
  if (!firebaseApp) {
    throw new Error(
      "Firebase is not initialized. Call initializeFirebase first."
    );
  }
  return firebaseApp;
};
