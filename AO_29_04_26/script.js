import { producten } from "./producten.js";

const divEl = document.getElementById("product-container");

producten.forEach(product => {
    divEl.innerHTML += `
        <div class="card" id="p-${product.id}" style="width: 18rem;">
                <img src="${product.afbeelding}" class="card-img-top afbeelding m-3" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.naam}</h5>
                    <p class="card-text">${product.beschrijving}</p>
                    <p class="card-text fw-bold">€${product.prijs}</p>
                    <a href="#" class="btn btn-primary btnHover">Koop</a>
                </div>
            </div>
    `
})