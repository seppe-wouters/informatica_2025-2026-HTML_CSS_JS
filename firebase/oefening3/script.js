import { database } from "./firebase.js";
import { push, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js"

const inputBoodschap = document.querySelector("#inputBoodschap")
const form = document.querySelector("#form")
const divEl = document.querySelector("#divEl")
let allItems

//andere manier voor verwijderen
// divEl.addEventListener("click", (e) => {
//     const itemEl = e.target.closest(".boodschap-item")
//     if (!itemEl) return

//     const key = itemEl.dataset.key
//     remove(ref(database, `boodschappen/${key}`))
// })

toonBoodschappen()

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let boodschap = { boodschap: inputBoodschap.value }
    push(ref(database, "boodschappen"), boodschap)

    inputBoodschap.value = ""
})

function toonBoodschappen() {
    onValue(ref(database, "boodschappen"), snapshot => {
        divEl.innerHTML = ""
        snapshot.forEach(item => {
            divEl.innerHTML += `
                <span class="boodschap-item btn" data-key="${item.key}">
                    ${item.val().boodschap}
                </span>
            `
        });
        
        allItems = document.querySelectorAll(".boodschap-item")
        allItems.forEach(item => {
            item.addEventListener("click", () => {
                const key = item.dataset.key
                remove(ref(database, `boodschappen/${key}`))
            })
        })
    })

}
