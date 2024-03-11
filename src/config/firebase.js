import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB7yLSqobEttBZkkLE5QOPhlmLlqkOiY4",
  authDomain: "onda-sonora.firebaseapp.com",
  projectId: "onda-sonora",
  storageBucket: "onda-sonora.appspot.com",
  messagingSenderId: "250534067114",
  appId: "1:250534067114:web:3d13fb8363620819be49d3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);