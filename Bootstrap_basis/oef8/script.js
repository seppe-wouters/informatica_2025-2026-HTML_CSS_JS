import { cards } from "./cards.js";
const divEl = document.querySelector("#divEl")

cards.forEach(c => {
    divEl.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 card align-items-center" >
        <img src="${c.afbeelding}" alt="${c.naam}" class="img-fluid text-center" width=360>
        <h3 class="naam">${c.naam}</h3>
        <p class="prijs">&euro;${c.prijs}</p>
        <button data-id="${c.id}">Voeg Toe</button>
    </div>
    `
});

const productenLijst = document.querySelector("#productenLijst")

cards.forEach(c => {
    productenLijst.innerHTML += `
    <div class="list-group ">
        <a
            class="list-group-item list-group-item-action flex-column align-items-start active bg-secondary border-0 border-top"
            aria-current="true"
        >
            <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${c.naam}</h5>
            </div>
        </a>
    </div>
    `
})