import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyLgUXye2aYtcW9r-CotqO5uVC-Vz1Tn8",
  authDomain: "wpp-clone-23f03.firebaseapp.com",
  projectId: "wpp-clone-23f03",
  storageBucket: "wpp-clone-23f03.appspot.com",
  messagingSenderId: "972086778631",
  appId: "1:972086778631:web:97b0cb0167d24cae3cc3a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app)
const provider = new FacebookAuthProvider();

export {auth, db, provider}