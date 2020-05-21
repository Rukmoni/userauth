
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1ZRsFKhl1O4hhAPCMNQvR04QnOnKXnkc",
    authDomain: "ruks-1a9fe.firebaseapp.com",
    databaseURL: "https://ruks-1a9fe.firebaseio.com",
    projectId: "ruks-1a9fe",
    storageBucket: "ruks-1a9fe.appspot.com",
    messagingSenderId: "940331960728",
    appId: "1:940331960728:web:744d123b5e5e279ea383ed",
    measurementId: "G-XGH8GJF0QJ"
  };

  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithRedirect(provider);