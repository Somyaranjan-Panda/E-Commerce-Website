import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1hzr73lhfhiszj9Km0nEYp6ic0cFjxxU",
  authDomain: "shoppingmart-e3e83.firebaseapp.com",
  projectId: "shoppingmart-e3e83",
  storageBucket: "shoppingmart-e3e83.appspot.com",
  messagingSenderId: "424865268521",
  appId: "1:424865268521:web:27e1639dc409d47ee7ed38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}