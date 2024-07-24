// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-d9078.firebaseapp.com",
    projectId: "mern-estate-d9078",
    storageBucket: "mern-estate-d9078.appspot.com",
    messagingSenderId: "80107095584",
    appId: "1:80107095584:web:8d82a6cce5e63044c49e45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);


// export { app };