import { database } from "./firebase.js";
import { push, ref, onValue } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

const formEl = document.querySelector("#form")
const inputNaam = document.querySelector("#naam")
const inputPw = document.querySelector("#pw")
const divEl = document.querySelector("#divEl")

let users = []

roepDbOp()

formEl.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = { naam: inputNaam.value, wachtwoord: inputPw.value }

    users.push(obj)

    //inhoud van array --> database
    users.forEach(user => {
        push(ref(database, "users"), user)
    });

    maakLeeg()
})

function maakLeeg() {
    inputNaam.value = ""
    inputPw.value = ""
}

function roepDbOp() {
    onValue(ref(database, "users"), snapshot => {
        let dbUsers = []
        snapshot.forEach(item => {
            let obj = item.val();
            console.log(obj)
            dbUsers.push(obj)
        })

        console.log(dbUsers)

        divEl.innerHTML = ``
        dbUsers.forEach(user => {
            divEl.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${user.naam}</h5>
                        <p class="card-text">${user.wachtwoord}</p>
                    </div>
                </div>
                `
        })
    })
}