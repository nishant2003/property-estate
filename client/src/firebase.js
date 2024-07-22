// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5df5f.firebaseapp.com",
  projectId: "mern-estate-5df5f",
  storageBucket: "mern-estate-5df5f.appspot.com",
  messagingSenderId: "66361752903",
  appId: "1:66361752903:web:346ab8edff6d4941086062"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);