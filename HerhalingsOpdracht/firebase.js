// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUh5DUxZLtVR33qhaZz19dyvLUlJdmKLg",
    authDomain: "voorberei.firebaseapp.com",
    databaseURL: "https://voorberei-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "voorberei",
    storageBucket: "voorberei.firebasestorage.app",
    messagingSenderId: "671808771458",
    appId: "1:671808771458:web:dde0a95c42f03847902b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const auth = getAuth(app)