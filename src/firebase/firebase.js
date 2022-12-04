// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA4TZ8dgPLakc-dts8unzEwbVqHZ30R2E",
  authDomain: "login-auth-d1362.firebaseapp.com",
  databaseURL: "https://login-auth-d1362-default-rtdb.firebaseio.com",
  projectId: "login-auth-d1362",
  storageBucket: "login-auth-d1362.appspot.com",
  messagingSenderId: "232220109451",
  appId: "1:232220109451:web:474761443453115791028e",
  measurementId: "G-0C6L26CPHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);