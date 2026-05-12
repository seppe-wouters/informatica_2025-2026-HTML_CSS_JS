import { database, auth } from "./firebase.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js"

const regForm = document.querySelector("#regForm")
const regEmail = document.querySelector("#regEmail")
const regPw = document.querySelector("#regPw")

const logForm = document.querySelector("#logForm")
const logEmail = document.querySelector("#logEmail")
const logPw = document.querySelector("#logPw")

regForm.addEventListener("submit", e => {
    e.preventDefault()

    if (regEmail.value && regPw.value) {
        createUserWithEmailAndPassword(auth, regEmail.value, regPw.value)
            .then(() => {
                alert("gebruiker aangemaakt")
                regEmail.value = ""
                regPw.value = ""
            })
            .catch(error => {
                alert(error.message)
            })
    }
})

logForm.addEventListener("submit", e => {
    e.preventDefault()

    if (logEmail.value && logPw.value) {
        signInWithEmailAndPassword(auth, logEmail.value, logPw.value)
            .then(res => {
                logEmail.value = ""
                logPw.value = ""
            })
            .catch(error => {
                alert(error.message)
            })
    }
})

onAuthStateChanged(auth, user => {
    if (user) {
        window.location.href = "./html/gebruikersPagina.html"
    }               
})
