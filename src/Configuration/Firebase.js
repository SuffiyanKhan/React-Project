import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhJynEXxpkGBbJGLtmHsKHLuf_lMPrOVk",
  authDomain: "e-commerce-137db.firebaseapp.com",
  projectId: "e-commerce-137db",
  storageBucket: "e-commerce-137db.appspot.com",
  messagingSenderId: "600979336891",
  appId: "1:600979336891:web:0cf2072d1e73e5a9e4839e",
  measurementId: "G-7L3PZ5B4P3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app,
    auth,
    db
}