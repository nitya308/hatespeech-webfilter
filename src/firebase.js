// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//require environment variables
require('dotenv').config();

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "web-safe-d7c7a.firebaseapp.com",
  projectId: "web-safe-d7c7a",
  storageBucket: "web-safe-d7c7a.appspot.com",
  messagingSenderId: "908196517973",
  appId: "1:908196517973:web:a7781905023dca244a5cdc",
  measurementId: "G-B7EDHSG0X7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Authentication exports
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export { signInWithPopup, GoogleAuthProvider }

// Add a word
export async function addWord(userID, word) {
  const userDoc = doc(db, "users", userID);
  try {
    await updateDoc(userDoc, {
      words: arrayUnion(word)
    });
    return true;
  } catch (err) {
    console.log("Error adding word:", err);
    return false;
  }
};

// sign in a user
export async function signInUser() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      console.log("user signed in is:", user);
      return user;
    }).catch((error) => {
      const errorMessage = error.message;
      console.log("error message is:", errorMessage);
      return null;
    });
};



