import { producten } from "./producten.js";

const winkelKarEl = document.querySelector("#winkelkar");
const btnEmpty = document.querySelector("#empty")

let kar = JSON.parse(localStorage.getItem("Winkelkar")) || [];
let karcorrect = kar.filter(product => product.img != null)
console.log(kar)

btnEmpty.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})

winkelKarEl.innerHTML = `<h3>Winkelmandje: </h3>`;
winkelKarEl.innerHTML += "<p>-----------------------------------------------</p>";
karcorrect.forEach(item => {
    winkelKarEl.innerHTML += `
                <p>${item.naam} - &euro;${item.prijs} - aantal: ${item.aantal}</p>
                `;
});

let totaalprijs = 0;
karcorrect.forEach(item => {
    totaalprijs += (item.prijs * item.aantal);
});

winkelKarEl.innerHTML += "<p>-----------------------------------------------</p>";
winkelKarEl.innerHTML += `<p>Totaalprijs: &euro;${totaalprijs.toFixed(2)}</p>`;

