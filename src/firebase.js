// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRBASE_KEY,
  authDomain: "jamtube-357204.firebaseapp.com",
  projectId: "jamtube-357204",
  storageBucket: "jamtube-357204.appspot.com",
  messagingSenderId: "151781963150",
  appId: "1:151781963150:web:df956aca2aeb152bece0df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
