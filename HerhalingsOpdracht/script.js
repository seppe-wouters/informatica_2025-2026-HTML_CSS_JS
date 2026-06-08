import { database, auth } from "./firebase.js";
import { push, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js"

const inputNaam = document.querySelector("#inputNaam")
const inputMoeilijkheid = document.querySelector("#inputMoeilijkheid")
const inputTijd = document.querySelector("#inputTijd")
const inputAantal = document.querySelector("#inputAantal")
const inputPrijs = document.querySelector("#inputPrijs")
const textBeschrijving = document.querySelector("#textBeschrijving")
const inputImg = document.querySelector("#inputImg")
const form = document.querySelector("#form")
const divEl = document.querySelector("#divEl")

const authEmail = document.querySelector('#auth-email')
const authPassword = document.querySelector('#auth-password')
const btnSignup = document.querySelector('#btn-signup')
const btnLogin = document.querySelector('#btn-login')
const btnLogout = document.querySelector('#btn-logout')
const userInfo = document.querySelector('#user-info')
const mainApp = document.querySelector('#main-app')

let allItems
let roomsUnsubscribe = null

btnSignup.addEventListener('click', async () => {
    const email = authEmail.value
    const pass = authPassword.value
    try {
        await createUserWithEmailAndPassword(auth, email, pass)
    } catch (err) {
        alert(err.message)
    }
})

btnLogin.addEventListener('click', async () => {
    const email = authEmail.value
    const pass = authPassword.value
    try {
        await signInWithEmailAndPassword(auth, email, pass)
    } catch (err) {
        alert(err.message)
    }
})


btnLogout.addEventListener('click', async () => {
    try {
        await signOut(auth)
    } catch (err) {
        alert(err.message)
    }
})

onAuthStateChanged(auth, user => {
    if (user) {
        userInfo.textContent = `Signed in: ${user.email}`
        btnLogout.style.display = 'inline-block'
        document.querySelector('#auth-forms').style.display = 'none'
        mainApp.style.display = 'block'
        if (roomsUnsubscribe) roomsUnsubscribe()
        roomsUnsubscribe = toonKamers(user.uid)
    } else {
        userInfo.textContent = 'Not signed in'
        btnLogout.style.display = 'none'
        document.querySelector('#auth-forms').style.display = 'flex'
        mainApp.style.display = 'none'
        divEl.innerHTML = ''
        if (roomsUnsubscribe) {
            roomsUnsubscribe()
            roomsUnsubscribe = null
        }
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
        naam: inputNaam.value,
        moeilijkheid: inputMoeilijkheid.value,
        tijd: inputTijd.value,
        aantal: inputAantal.value,
        prijs: inputPrijs.value,
        beschrijving: textBeschrijving.value,
        img: inputImg.value
    }

    console.log(obj)

    const user = auth.currentUser
    if (!user) return alert('Please sign in to save rooms')
    push(ref(database, `users/${user.uid}/kamers`), obj)
})
function toonKamers(uid) {
    return onValue(ref(database, `users/${uid}/kamers`), snapshot => {
        divEl.innerHTML = ""
        snapshot.forEach(item => {
            divEl.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="img/${item.val().img}.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.val().naam}</h5>
                    <p class="card-text">${item.val().beschrijving}</p>
                    <p class="card-text">${item.val().prijs}</p>
                    <p class="card-text">${item.val().tijd}</p>
                    <a class="btn-verwijder btn btn-primary" data-key="${item.key}">Verwijder</a>
                </div>
            </div>
            `
        });

        allItems = document.querySelectorAll(".btn-verwijder")
        allItems.forEach(item => {
            item.addEventListener("click", () => {
                const key = item.dataset.key
                const user = auth.currentUser
                if (!user) return alert('Not signed in')
                remove(ref(database, `users/${user.uid}/kamers/${key}`))
            })
        })
    })
}