// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKTBsNN7iAjmryqOie3yGBoriIS-DKYLQ",
  authDomain: "netflixgpt-21ad1.firebaseapp.com",
  projectId: "netflixgpt-21ad1",
  storageBucket: "netflixgpt-21ad1.appspot.com",
  messagingSenderId: "737488183588",
  appId: "1:737488183588:web:b281cdfa33b0ac5aaad3b1",
  measurementId: "G-410RDFS8KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();