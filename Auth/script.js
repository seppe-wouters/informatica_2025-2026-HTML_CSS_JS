import { database, auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js"

const regForm = document.querySelector("#registerForm")
const regEmail = document.querySelector("#registerEmail")
const regPw = document.querySelector("#registerPassword")

const logForm = document.querySelector("#logForm")
const logEmail = document.querySelector("#logEmail")
const logPw = document.querySelector("#logPassword")

regForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, regEmail.value, regPw.value)
    maakLeeg()
})

logForm.addEventListener("submit", (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, logEmail.value, logPw.value)
        .then(res => {
            console.log(res.user.email)
        })
        .catch(error => {
            console.log(error.message)
        });
    
    maakLeeg()
})

onAuthStateChanged(auth, user => {
    if (user) {
        window.location.href = "./start.html"
    }
})

function maakLeeg() {
    regEmail.value = ""
    regPw.value = ""
    logEmail.value = ""
    logPw.value = ""
}