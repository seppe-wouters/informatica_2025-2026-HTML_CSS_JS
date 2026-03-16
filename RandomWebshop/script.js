import { producten } from "./producten.js";

const divEl = document.querySelector("#container")
const winkelKarEl = document.querySelector("#winkelkar")

producten.forEach(p => {
    divEl.innerHTML += `
    <div class="card">
        <img class="img" src="${p.img}">
        <h3 class="naam">${p.naam}</h3>
        <p class="prijs">&euro;${p.prijs}</p>
        <button class="btnCard" data-id="${p.id}">Voeg toe</button>
    </div>
    `
})

const btns = document.querySelectorAll(".btnCard")
let winkelKar = JSON.parse(localStorage.getItem("Winkelkar")) || []

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let id = btn.dataset.id
        let selectie = {}
        producten.forEach(p => {
            if (p.id == id) {
                selectie = p
            }
        })

        if (!winkelKar.includes(selectie)) {
            winkelKar.push(selectie)
        } else {
            winkelKar.forEach(item => {
                if (item.id == selectie.id) {
                    item.aantal += 1
                }
            })
        }

        localStorage.setItem("Winkelkar", JSON.stringify(winkelKar))
        console.log(localStorage)
    })
})