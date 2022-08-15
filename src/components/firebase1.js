import * as firebase from "firebase/app";
//import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR0Thl4I3k1nZLff5HrBqvSlOU8vAHh0I",
  authDomain: "whatsapp-clone-3bd45.firebaseapp.com",
  projectId: "whatsapp-clone-3bd45",
  storageBucket: "whatsapp-clone-3bd45.appspot.com",
  messagingSenderId: "1069666801279",
  appId: "1:1069666801279:web:9a8d2f16713f7656ea914a",
  measurementId: "G-M1HH3TZ8J8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default db;
