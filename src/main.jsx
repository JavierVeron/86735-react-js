import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiuCkLLsV7k-WoTiL0AnFjkCIoRoVPFfQ",
  authDomain: "coderhouse-86735-jv.firebaseapp.com",
  projectId: "coderhouse-86735-jv",
  storageBucket: "coderhouse-86735-jv.firebasestorage.app",
  messagingSenderId: "149888114037",
  appId: "1:149888114037:web:7aa6b503e7f89947a6c73c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(<App />)
