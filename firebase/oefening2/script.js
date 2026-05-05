import { database } from "./firebase.js";
import { push, ref, onValue } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

const form = document.querySelector("#form")
const inputNaam = document.querySelector("#inputNaam")
const inputPizza = document.querySelector("#inputPizza")
const divEl = document.querySelector("#divEl")

let pizzas = []
getDb()

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = { naam: inputNaam.value, pizza: inputPizza.value }
    
    pizzas.push(obj)

    pizzas.forEach(pizza => {
        push(ref(database, "pizzas"), pizza)
    })

    getDb()

    inputNaam.innerHTML = ""
    inputPizza.innerHTML = ""
})

function getDb() {
    onValue(ref(database, "pizzas"), snapshot => {
        let dbPizzas = []
        snapshot.forEach(item => {
            let obj = item.val()
            dbPizzas.push(obj)
        })

        console.log(dbPizzas)
    
        divEl.innerHTML = ""
        dbPizzas.forEach(pizza => {
            divEl.innerHTML += `
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${pizza.naam}</h5>
                        <p class="card-text">${pizza.pizza}</p>
                    </div>
                </div>
            `
        })
    } )
}