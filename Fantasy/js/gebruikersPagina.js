import { database, auth } from "../firebase.js"
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js"
import { push, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js"

const btnSignOut = document.querySelector("#btnSignOut")

const productenForm = document.querySelector("#productenForm")
const productNaam = document.querySelector("#productNaam")
const productPrijs = document.querySelector("#productPrijs")
const divEl = document.querySelector("#divEl")
const userEl = document.querySelector("#user")

let user = null;


onAuthStateChanged(auth, CurrentUser => {
    user = CurrentUser
    userEl.innerHTML = user.email
    console.log(user)
    toonProducten()
})

btnSignOut.addEventListener("click", () => {
    signOut(auth)
    window.location.href = "../index.html"
})


productenForm.addEventListener("submit", e => {
    e.preventDefault()

    let obj = { naam: productNaam.value, prijs: productPrijs.value }

    push(ref(database, `${user.uid}/producten`), obj)
    toonProducten()
    productNaam.value = ""
    productPrijs.value = ""
})


function toonProducten() {
    onValue(ref(database, `${user.uid}/producten`), snapshot => {
        divEl.innerHTML = ""
        snapshot.forEach(item => {
            divEl.innerHTML += `
                <div div class="card m-3" style="width: 15rem; padding: 20px;">
                    <h5 class="card-title">${item.val().naam}</h5>
                    <p class="card-text">€${item.val().prijs}<p>
                    <button class="btn btn-primary producten-item" data-key="${item.key}">Verwijder</button>
                </div >
            </div>
            `
        })

        const allItems = document.querySelectorAll(".producten-item")
        allItems.forEach(item => {
            item.addEventListener("click", () => {
                let key = item.dataset.key
                remove(ref(database, `${user.uid}/producten/${key}`))
            })
        })
    })
}