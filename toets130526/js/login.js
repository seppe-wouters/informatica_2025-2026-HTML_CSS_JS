//nodige imports
import { database, auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

//ophalen van elementen
const regForm = document.querySelector("#regForm")
const regEmail = document.querySelector("#regEmail")
const regPw = document.querySelector("#regPw")
const logForm = document.querySelector("#logForm")
const logEmail = document.querySelector("#logEmail")
const logPw = document.querySelector("#logPw")

//het aanmaken van een nieuwe user
regForm.addEventListener("submit", e => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, regEmail.value, regPw.value)
        .then(res => {
            alert(`${res.user.email} has been created`)
            regEmail.value = ""
            regPw.value = ""
        })
        .catch(error => {
            alert(error.message)
        })
})

//het inloggen van een gebruiken
logForm.addEventListener("submit", e => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, logEmail.value, logPw.value)
        .then(res => {
            alert(`${res.user.email} has been logged in`)
            logEmail.value = ""
            logPw.value = ""
        })
        .catch(error => {
            alert(error.message)
        })
})

//doorverwijzen naar andere pagina bij inloggen
onAuthStateChanged(auth, user => {
    if (user) {
        window.location.href = "../producten.html"
    }
})