//importeren van producten lijst
import { producten } from "./producten.js";

//elementen ophalen
const divEl = document.querySelector("#producten")

//kaart voor elk product maken
producten.forEach(p => {
    divEl.innerHTML += `
        <div class="card" style="width: 18rem;">
                <img src="${p.afbeelding}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${p.naam}</h5>
                    <p class="card-text">&euro;${p.prijs}</p>
                    <button data-id="${p.id}" class="btn btn-primary btnCard">Voeg Toe aan winkelmandje</button>
                </div>
        </div>
    `
})

//buttons/winkelkarEl ophalen na aanmaak / lege winkelkar aanmaken
const btns = document.querySelectorAll(".btnCard")
const winkelkarEl = document.querySelector("#winkelkar")
let winkelkar = []

//knoppen functioneel maken
btns.forEach(btn => { 
    btn.addEventListener("click", () => {
        let id = btn.dataset.id
        let selectie = {}
        producten.forEach(p => {
            if (p.id == id) {
                selectie = p
            }
        })

        //producten in winkelkar steken als er al in +1
        if (winkelkar.includes(selectie)) {
            selectie.aantal +=1
        } else {
            winkelkar.push(selectie)
        }

        //winkelkar tonen op website
        let totaal = 0
        winkelkarEl.innerHTML = ""
        winkelkarEl.innerHTML += "<h3>Winkelmand: </h3>"
        winkelkarEl.innerHTML += "<p>--------------------------------------------</p>"
        winkelkar.forEach(item => {
            winkelkarEl.innerHTML += `<p>${item.naam} - &euro;${item.prijs} - ${item.aantal}</p>`
            totaal += item.prijs * item.aantal
        })
        winkelkarEl.innerHTML += "<p>--------------------------------------------</p>"
        winkelkarEl.innerHTML += `<p>Totaalprijs: &euro;${totaal.toFixed(2)}`

    })
})