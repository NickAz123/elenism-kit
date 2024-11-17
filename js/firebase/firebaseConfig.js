import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

let firebaseApp = null;
let firestore = null;
let auth = null;

export const firebaseInit = (config) => {
  if (!firebaseApp) {
    firebaseApp = initializeApp(config);
    firestore = getFirestore(firebaseApp);
    auth = getAuth(firebaseApp);
  }
  return { firebaseApp, firestore, auth };
};

//Exposes firebase app, may remove.
export const getFirebaseApp = () => {
  if (!firebaseApp) {
    throw new Error("Firebase is not initialized.");
  } else {
    console.log("Firebase successfully initialized.");
  }
  return firebaseApp;
};
