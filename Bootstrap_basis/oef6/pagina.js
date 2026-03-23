import { producten } from "./producten.js";


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

