// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0DHVHE_77E9D8-txleWP8u4ue76HyLFc",
  authDomain: "myfirstapp-6be02.firebaseapp.com",
  projectId: "myfirstapp-6be02",
  storageBucket: "myfirstapp-6be02.appspot.com",
  messagingSenderId: "645720034983",
  appId: "1:645720034983:web:429cada8b4b5b1299f1582",
  measurementId: "G-FZGSMS7NX8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
