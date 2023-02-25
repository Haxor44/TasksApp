// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDbjIp8Gwflk9nV104wl3b4kTOvk3R3-M",
  authDomain: "tasks2-e7d3c.firebaseapp.com",
  projectId: "tasks2-e7d3c",
  storageBucket: "tasks2-e7d3c.appspot.com",
  messagingSenderId: "704736711193",
  appId: "1:704736711193:web:91039fbfeda3bfc2dfd088",
  measurementId: "G-KP5B29Q5N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);