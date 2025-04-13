import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBY-vV0currmd55PuXzeigQe9PMObM36tk",
  authDomain: "finance-b2914.firebaseapp.com",
  projectId: "finance-b2914",
  storageBucket: "finance-b2914.firebasestorage.app",
  messagingSenderId: "844869597385",
  appId: "1:844869597385:web:fe9670e6572e229346b518",
  measurementId: "G-4E7JFV9FLJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  collection,
  addDoc,
  getDocs,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
};
