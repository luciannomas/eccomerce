import firebase from 'firebase/compat/app'
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzdY4z2-EDHQmNQH3IAdvkXV5YQ-wxAQk",
    authDomain: "eccomerce-c80bd.firebaseapp.com",
    projectId: "eccomerce-c80bd",
    storageBucket: "eccomerce-c80bd.appspot.com",
    messagingSenderId: "691367309889",
    appId: "1:691367309889:web:a44a1260d283abbd824cc0"
  };

//TODO: Inicializo
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

// import { initializeApp } from "firebase/app";
// //import firebase from 'firebase'
// import { getAuth, createUserWithEmailAndPassword as createUse}  from "firebase/auth";
// const auth = getAuth();


// const firebaseConfig = {
//   apiKey: "AIzaSyDzdY4z2-EDHQmNQH3IAdvkXV5YQ-wxAQk",
//   authDomain: "eccomerce-c80bd.firebaseapp.com",
//   projectId: "eccomerce-c80bd",
//   storageBucket: "eccomerce-c80bd.appspot.com",
//   messagingSenderId: "691367309889",
//   appId: "1:691367309889:web:a44a1260d283abbd824cc0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// //const auth = firebase.auth();

export { auth } 