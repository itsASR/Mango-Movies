// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApm5EaCPUvJ9wZMz6kTAsIhCYDb4a_3KQ",
  authDomain: "mango-movie-c3078.firebaseapp.com",
  projectId: "mango-movie-c3078",
  storageBucket: "mango-movie-c3078.appspot.com",
  messagingSenderId: "378554223323",
  appId: "1:378554223323:web:886817661562e94eda5afe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);