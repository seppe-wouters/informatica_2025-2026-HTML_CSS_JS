// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9ZemOECtSwJBRZXfRkvZXt1zwGjpFpWU",
    authDomain: "test-040526.firebaseapp.com",
    databaseURL: "https://test-040526-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-040526",
    storageBucket: "test-040526.firebasestorage.app",
    messagingSenderId: "131304229391",
    appId: "1:131304229391:web:54ce3c8bc659d8a052b17a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)