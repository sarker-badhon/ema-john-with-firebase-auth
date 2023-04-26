// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO2KuuV2IAWdGNczI1rhfwpyy_ODeJyf4",
  authDomain: "ema-john-firebase-practi-8a43f.firebaseapp.com",
  projectId: "ema-john-firebase-practi-8a43f",
  storageBucket: "ema-john-firebase-practi-8a43f.appspot.com",
  messagingSenderId: "1036077812171",
  appId: "1:1036077812171:web:8c52b9eea2af037f940e4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;