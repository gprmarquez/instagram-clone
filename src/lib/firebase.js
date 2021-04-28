import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import seed file

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyB4EFzBlBvLKsDSSXFpYgo4pFf7hcanNJ8",
  authDomain: "instagram-clone-3a6dd.firebaseapp.com",
  projectId: "instagram-clone-3a6dd",
  storageBucket: "instagram-clone-3a6dd.appspot.com",
  messagingSenderId: "603491810738",
  appId: "1:603491810738:web:093cad2266f9bb3f0ef8ab",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call seed file only once here!
// seedDatabase(firebase); this has already run! Do not run again unless you deleted your Firebase collections

console.log("firebase", firebase);

export { firebase, FieldValue };
