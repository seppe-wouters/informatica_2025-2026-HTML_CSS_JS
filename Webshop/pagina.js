import { producten } from "./producten.js";

const divEl = document.querySelector("#container")
const winkelKar = document.querySelector("#karretje")
const spanAantal = document.querySelector("#aantal")
let kar = []
let aantal = 0
spanAantal.innerHTML = aantal

producten.forEach(product => {
    divEl.innerHTML += `
    <div class="card">
        <img src="./pics/${product.naam}.png" alt="${product.naam}" class="afbeelding">
        <h3 class="naam">${product.naam}</h3>
        <p class="prijs">&euro;${product.prijs}</p>
        <button data-id="${product.id}">Voeg Toe</button>
    </div>
    `
});

const btns = document.querySelectorAll("button")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let id = btn.dataset.id
        let selectie = {}
        producten.forEach(p => {
            if (p.id == id) {
                selectie = p
            }
        });
        if (!kar.includes(selectie)) {
            kar.push(selectie)
        } else {
            kar.forEach(p => {
                if (p.id == selectie.id) {
                    p.aantal += 1
                }
            });
        }
        winkelKar.innerHTML = ""
        aantal++
        spanAantal.innerHTML = aantal
        kar.forEach(item => {
            winkelKar.innerHTML += `<p>${item.naam} - ${item.aantal} (&euro;${(item.prijs)*(item.aantal)})</p>`
        });
    })
})