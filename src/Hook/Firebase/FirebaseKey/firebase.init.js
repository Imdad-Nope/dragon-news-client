import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase = () =>{
    // Initialize Firebasesa
    initializeApp(firebaseConfig)
}

export default initializeFirebase;