import { cards } from "./cards.js";

const divEl = document.querySelector("#container")
const winkelKarEl = document.querySelector("#winkelkar")

cards.forEach(c => {
    divEl.innerHTML += `
    <div class="card">
        <img class="img" src="${c.afbeelding}">
        <h3 class="naam">${c.naam}</h3>
        <p class="prijs">&euro;${c.prijs}</p>
        <button class="btnCard" data-id="${c.id}">Voeg toe</button>
    </div>
    `
});

const btns = document.querySelectorAll(".btnCard")
let winkelKar = []
let aantal = 0

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        aantal++
        let id = btn.dataset.id
        let selectie = {}
        cards.forEach(c => {
            if (c.id == id) {
                selectie = c
            }
        });

        if (!winkelKar.includes(selectie)) {
            winkelKar.push(selectie)
        } else {
            winkelKar.forEach(item => {
                if (item.id == selectie.id) {
                    item.aantal += 1
                }
            })
        }
        winkelKarEl.innerHTML = `<h3>Winkelmandje: </h3>`
        winkelKarEl.innerHTML += "<p>---------------------------------------------</p>"
        winkelKar.forEach(item => {
            winkelKarEl.innerHTML += `
            <p>${item.naam} - &euro;${item.prijs} - aantal: ${item.aantal}</p>
            `
        })
        let totaalprijs = 0
        winkelKar.forEach(item => {
            totaalprijs += (item.prijs * item.aantal)
        })
        winkelKarEl.innerHTML += "<p>---------------------------------------------</p>"
        winkelKarEl.innerHTML += `<p>Totaalprijs: &euro;${totaalprijs.toFixed(2)}</p>`
        winkelKarEl.innerHTML += `<p>totaal aantal items: ${aantal}</p>`
    })
})