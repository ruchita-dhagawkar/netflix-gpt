import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdofpK7V6ysW-s7tNaCZHWWmw_Uh6t1rE",
  authDomain: "netflixgpt-3ca86.firebaseapp.com",
  projectId: "netflixgpt-3ca86",
  storageBucket: "netflixgpt-3ca86.appspot.com",
  messagingSenderId: "466895919569",
  appId: "1:466895919569:web:001c6f7b37c6409ece28f0",
  measurementId: "G-GJ3W0E12PL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
