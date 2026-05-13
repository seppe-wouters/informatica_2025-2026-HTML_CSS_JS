// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSyvFOcWAVHyNA2qDzwsBg5L2ugXWyXjM",
    authDomain: "toets130526.firebaseapp.com",
    databaseURL: "https://toets130526-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "toets130526",
    storageBucket: "toets130526.firebasestorage.app",
    messagingSenderId: "443024060566",
    appId: "1:443024060566:web:3f0f0836ac3f60739dd2b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth(app)

export {database, auth}