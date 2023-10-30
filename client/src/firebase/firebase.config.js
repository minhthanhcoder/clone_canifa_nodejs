
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBADLiaQJDTEcU0jS4fW9uUHKIK2UstwgA",
  authDomain: "canifa-js-nodejs.firebaseapp.com",
  projectId: "canifa-js-nodejs",
  storageBucket: "canifa-js-nodejs.appspot.com",
  messagingSenderId: "458691206711",
  appId: "1:458691206711:web:8b5983d30416acb54729b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()