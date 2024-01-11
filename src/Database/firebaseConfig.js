// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOvYo_iAMI9EAxQCkoGa_FlIjnkAa0Jo4",
  authDomain: "buybusy-i.firebaseapp.com",
  projectId: "buybusy-i",
  storageBucket: "buybusy-i.appspot.com",
  messagingSenderId: "425705193396",
  appId: "1:425705193396:web:2e98303f26212bdf90fce1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);