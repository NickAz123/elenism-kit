import './App.css';
import LandingPage from './components/Landing/landing';
import RSVP from './components/RSVP/rsvp';
import Schedule from './components/Schedule/schedule'

import { firebaseInit, getFirebaseApp } from './js/firebase/firebaseConfig.js';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

const { firebaseApp, firestore, auth } = firebaseInit(firebaseConfig);

function App() {
  return (
    <div className="App">
     <LandingPage />
     <RSVP/>
     <Schedule/>
    </div>
  );
}

export default App;
