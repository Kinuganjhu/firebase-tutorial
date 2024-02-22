// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW7Dku7q1R3P3r-TVgNjw1NN2cayKJ6jg",
  authDomain: "kinu-ganjhu.firebaseapp.com",
  databaseURL: "https://kinu-ganjhu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kinu-ganjhu",
  storageBucket: "kinu-ganjhu.appspot.com",
  messagingSenderId: "859876906419",
  appId: "1:859876906419:web:7932048dc7701ddd2027c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);