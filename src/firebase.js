// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { doc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// require environment variables
// require('dotenv').config();

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTDFvA-L6p7-_ADoWhwGTK-JVxW54eki4",
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
export async function addWordToUser(userID, word) {
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

// Sign in a user
export async function signInUser() {
  try {
    const res = await signInWithPopup(auth, provider)
    const user = res.user;
    console.log("user signed in is:", user);
    try {
      await createUserDoc(user.email, user.displayName);
      return user;
    }
    catch {
      console.log("error creating user doc");
      return null;
    }
  }
  catch {
    console.log("error signing in user");
    return null;
  }
};

// Create a user doc
export async function createUserDoc(userID, userName) {
  await setDoc(doc(db, "users", userID), {
    userName,
    words: []
  });
};

