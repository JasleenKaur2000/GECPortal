import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiQJwuXH8xFpL73Eo-G2PitXwMy3PGgyY",
  authDomain: "gecportal-6b955.firebaseapp.com",
  databaseURL: "https://gecportal-6b955-default-rtdb.firebaseio.com",
  projectId: "gecportal-6b955",
  storageBucket: "gecportal-6b955.appspot.com",
  messagingSenderId: "1010960549924",
  appId: "1:1010960549924:web:29d09e055b7e89bc22f0b1",
};

let app;
// Initialize Firebase
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

const firestore = firebase.firestore;

export { auth };

export default app;
