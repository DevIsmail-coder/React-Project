// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxqsz_3WwoMUpjgF5rEAMRhMfSPMn9yN0",
  authDomain: "react-project-b0b9a.firebaseapp.com",
  projectId: "react-project-b0b9a",
  storageBucket: "react-project-b0b9a.appspot.com",
  messagingSenderId: "255625572047",
  appId: "1:255625572047:web:560908574f3e4530cad1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();