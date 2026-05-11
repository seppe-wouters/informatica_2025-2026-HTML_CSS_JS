import { auth, database } from "./firebase.js"
import { signOut } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js"

const btnLogOut = document.querySelector("#btnLogOut")

btnLogOut.addEventListener("click", () => {
    signOut(auth)
    window.location.href = "./registreer.html"
})