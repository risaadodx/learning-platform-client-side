// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxb1_VvDA3rKEaiUUKV-6wA0AeVjnCxj4",
  authDomain: process.env.REACT_APP_authDomain,
  projectId: "gdemy-learning-platform",
  storageBucket: "gdemy-learning-platform.appspot.com",
  messagingSenderId: "444255441788",
  appId: "1:444255441788:web:8ccdf19dfcc399e9fb4af9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
