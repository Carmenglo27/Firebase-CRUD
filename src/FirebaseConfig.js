// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARBjatjBNXBcBiejgm5-4-Yfnpa3eWyDc",
  authDomain: "desafio-firebase-crud.firebaseapp.com",
  projectId: "desafio-firebase-crud",
  storageBucket: "desafio-firebase-crud.appspot.com",
  messagingSenderId: "823965873890",
  appId: "1:823965873890:web:9fc8bb9e41fa00cea050bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
