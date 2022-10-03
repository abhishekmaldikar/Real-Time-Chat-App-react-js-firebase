// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAabILn7IFsZ1YPCmlkA1KQRpxNUzHczS4",
  authDomain: "chat-app-9adf8.firebaseapp.com",
  projectId: "chat-app-9adf8",
  storageBucket: "chat-app-9adf8.appspot.com",
  messagingSenderId: "1002621874202",
  appId: "1:1002621874202:web:590dc6869ffd2e3937e1a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)