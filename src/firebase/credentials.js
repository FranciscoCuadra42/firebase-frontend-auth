// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5j4pLDxJ1ODarW9OnKc0E275awwkHXbc",
  authDomain: "fir-roles-boiler.firebaseapp.com",
  projectId: "fir-roles-boiler",
  storageBucket: "fir-roles-boiler.appspot.com",
  messagingSenderId: "5328299008",
  appId: "1:5328299008:web:43c223d2d450af0956e4e5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;