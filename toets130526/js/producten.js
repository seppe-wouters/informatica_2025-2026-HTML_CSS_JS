//nodige imports
import { auth, database } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { push, ref, onValue } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js"

//elementen ophalen uit html
const userEl = document.querySelector("#user")
const btnLogOut = document.querySelector("#btnLogOut")
const productForm = document.querySelector("#productForm")
const inputNaam = document.querySelector("#inputNaam")
const inputPrijs = document.querySelector("#inputPrijs")
const selectCategorie = document.querySelector("#selectCategorie")
const divEl = document.querySelector("#divEl")

let currentUser = null

//gebruiken zoeken en toewijzen aan variable + rechtboven op scherm tonen
onAuthStateChanged(auth, user => {
    currentUser = user
    console.log(user)
    userEl.innerHTML = currentUser.email
    toonProducten()
})

//uitlog knop
btnLogOut.addEventListener("click", () => {
    signOut(auth)
    window.location.href = "../index.html"
})

//het aanmaken van een nieuw product en deze naar de database doorsturen
productForm.addEventListener("submit", e => {
    e.preventDefault()

    let obj = {naam: inputNaam.value, prijs: inputPrijs.value, categorie: selectCategorie.value}

    push(ref(database, `producten/${currentUser.uid}/`), obj)
        .then(() => {
            inputNaam.value = ""
            inputPrijs.value = null
            selectCategorie.value = "Tech"
        })
        .catch(error => {
            alert(error.message)
        })
    toonProducten()
})

//het tonen van de producten per gebruiken
function toonProducten() {
    onValue(ref(database, `producten/${currentUser.uid}/`), snapshot => {
        divEl.innerHTML = ""
        snapshot.forEach(item => {
            divEl.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${item.val().naam}</h5>
                        <hr class="border-black border-2 opacity-100">
                        <p class="card-text">Prijs: €${item.val().prijs}<p>
                        <p class="card-text">Categorie: ${item.val().categorie}<p>
                    </div>
                </div>
            `
        });
    })
}
