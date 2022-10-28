// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRmFHZip_cHUa4Od4o2fsvfqolfbdSESE",
  authDomain: "chat-5b3de.firebaseapp.com",
  projectId: "chat-5b3de",
  storageBucket: "chat-5b3de.appspot.com",
  messagingSenderId: "580921593278",
  appId: "1:580921593278:web:9da5427e9d4bddcc43bdef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
