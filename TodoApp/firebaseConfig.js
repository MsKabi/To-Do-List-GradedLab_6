// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsNmZTL3XczvK3W_qRTTSfX9RB0YN2G8c",
  authDomain: "to-do-list-3cdb2.firebaseapp.com",
  projectId: "to-do-list-3cdb2",
  storageBucket: "to-do-list-3cdb2.firebasestorage.app",
  messagingSenderId: "483795223215",
  appId: "1:483795223215:web:3209bd418aef8276f98a5a",
  measurementId: "G-267B26RVWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);