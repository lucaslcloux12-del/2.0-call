import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfG1gFI4SoEdttmhwORZt92_9bgqJcsgw",
  authDomain: "call-9cc3b.firebaseapp.com",
  databaseURL: "https://call-9cc3b-default-rtdb.firebaseio.com",
  projectId: "call-9cc3b",
  storageBucket: "call-9cc3b.firebasestorage.app",
  messagingSenderId: "919168566449",
  appId: "1:919168566449:web:b57c4c4020bf3cace30e90",
  measurementId: "G-GYBCF1LG64"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const realtimeDB = getDatabase(app);
