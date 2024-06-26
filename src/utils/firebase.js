// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-b18d0.firebaseapp.com",
  projectId: "blog-b18d0",
  storageBucket: "blog-b18d0.appspot.com",
  messagingSenderId: "694982357588",
  appId: "1:694982357588:web:d26fef06fffd4afa6c73c1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
