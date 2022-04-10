import * as firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiQJwuXH8xFpL73Eo-G2PitXwMy3PGgyY",
  authDomain: "gecportal-6b955.firebaseapp.com",
  projectId: "gecportal-6b955",
  storageBucket: "gecportal-6b955.appspot.com",
  messagingSenderId: "1010960549924",
  appId: "1:1010960549924:web:29d09e055b7e89bc22f0b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
