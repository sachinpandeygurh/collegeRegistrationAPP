import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMDNW4gPkcSYIkWJKsgxWWd7mWIi34vfI",
  authDomain: "otpauth-a08ac.firebaseapp.com",
  projectId: "otpauth-a08ac",
  storageBucket: "otpauth-a08ac.appspot.com",
  messagingSenderId: "610440294955",
  appId: "1:610440294955:web:4b57d8115fc5835e65306e",
  measurementId: "G-D5W4942BMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

// console.clear()