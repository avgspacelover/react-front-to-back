// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlcymGz4FEJwIOVzpNUIHDffWa-lE3qSg",
  authDomain: "react-ftb-house-mktplace.firebaseapp.com",
  projectId: "react-ftb-house-mktplace",
  storageBucket: "react-ftb-house-mktplace.appspot.com",
  messagingSenderId: "1071188562499",
  appId: "1:1071188562499:web:fc10aa57805bc7f5d9baf6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore(); 